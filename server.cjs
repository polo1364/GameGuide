// Run: node server.cjs [port]. Node 20+; local-only, no API keys handled here.
const http = require('node:http');
const https = require('node:https');
const dns = require('node:dns').promises;
const net = require('node:net');
const fs = require('node:fs');
const path = require('node:path');
const registry = require('./guide-sources.json');
const catalog = require('./games.json').games;
const officialHosts = new Set(registry.officialHosts);
const allowedHosts = new Set([...officialHosts, ...Object.values(registry.games).flat().map(s => new URL(s.url).hostname)]);
const cache = new Map();
const normalize = s => s.normalize('NFKC').trim().toLowerCase();

function isPublicAddress(address) {
    if (net.isIP(address) === 6) return /^[23][0-9a-f]{3}:/i.test(address) && !/^(?:2002:|2001:(?:db8|0):)/i.test(address);
    if (net.isIP(address) !== 4) return false;
    const [a, b] = address.split('.').map(Number);
    return !(a === 0 || a === 10 || a === 127 || a >= 224 || (a === 169 && b === 254) ||
        (a === 172 && b >= 16 && b <= 31) || (a === 192 && [0, 168].includes(b)) ||
        (a === 100 && b >= 64 && b <= 127) || (a === 198 && [18, 19, 51].includes(b)) || (a === 203 && b === 0));
}
function permittedURL(value) {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.port || url.username || url.password || !allowedHosts.has(url.hostname)) throw new Error('來源不在核准清單');
    return url;
}
async function readPage(value, redirects = 0) {
    const url = permittedURL(value);
    const addresses = await dns.lookup(url.hostname, { all: true });
    if (!addresses.length || addresses.some(a => !isPublicAddress(a.address))) throw new Error('來源網路位址不安全');
    // Pin the validated DNS result, including every redirect, to prevent DNS rebinding.
    const address = addresses.find(a => a.family === 4) || addresses[0];
    return new Promise((resolve, reject) => {
        const request = https.get(url, {
            signal: AbortSignal.timeout(12000),
            headers: { 'User-Agent': 'GameGuideSourceReader/1.0', Accept: 'text/html,text/plain' },
            lookup: (_host, options, callback) => options.all ? callback(null, [address]) : callback(null, address.address, address.family)
        }, response => {
            if ([301, 302, 303, 307, 308].includes(response.statusCode)) {
                response.resume();
                if (redirects >= 3 || !response.headers.location) return reject(new Error('來源重新導向失敗'));
                readPage(new URL(response.headers.location, url).href, redirects + 1).then(resolve, reject);
                return;
            }
            if (response.statusCode !== 200) { response.resume(); reject(new Error(`來源 HTTP ${response.statusCode}`)); return; }
            if (!/^text\/(html|plain)/i.test(response.headers['content-type'] || '')) { response.resume(); reject(new Error('來源不是可讀文字')); return; }
            const chunks = [];
            let size = 0;
            response.on('data', chunk => {
                size += chunk.length;
                if (size > 2 * 1024 * 1024) response.destroy(new Error('來源超過大小限制'));
                else chunks.push(chunk);
            });
            response.on('error', reject);
            response.on('end', () => resolve({ html: Buffer.concat(chunks).toString('utf8'), url: url.href }));
        });
        request.on('error', reject);
    });
}
function pageText(html) {
    // Extract text only; no remote markup/scripts are ever inserted into the app.
    const main = html.match(/<(main|article)\b[^>]*>([\s\S]*?)<\/\1>/i);
    return (main ? main[2] : html)
        .replace(/<(script|style|noscript|nav|footer|header)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
        .replace(/<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' ')
        .replace(/&#(x[\da-f]+|\d+);/gi, (_, code) => {
            const n = code[0].toLowerCase() === 'x' ? parseInt(code.slice(1), 16) : Number(code);
            return n <= 0x10ffff ? String.fromCodePoint(n) : ' ';
        }).replace(/&(amp|lt|gt|quot|apos|nbsp|ndash|mdash);/g, (_, name) => ({ amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—' })[name])
        .replace(/\s+/g, ' ').trim();
}
function excerpts(text, terms) {
    if (!terms) return text.slice(0, 7000);
    const matches = [...text.matchAll(new RegExp(terms, 'gi'))].slice(0, 30);
    if (!matches.length) return text.slice(0, 7000);
    const ranges = [];
    for (const match of matches) {
        const start = Math.max(0, match.index - 350), end = Math.min(text.length, match.index + 900);
        const last = ranges.at(-1);
        if (last && start <= last[1]) last[1] = Math.max(last[1], end);
        else ranges.push([start, end]);
    }
    return ranges.map(([start, end]) => text.slice(start, end)).join('\n[…]\n').slice(0, 8500);
}
function selectSources(gameName, question) {
    const exact = catalog.filter(g => normalize(g.name) === normalize(gameName));
    const matches = exact.length ? exact : catalog.filter(g => g.alias.some(n => normalize(n) === normalize(gameName)));
    if (matches.length !== 1 || matches[0].platformReviewStatus === 'unresolved') return { candidates: [], reason: '作品身分或版本尚未釐清' };
    const game = matches[0];
    const curated = (registry.games[game.name] || []).filter(s => new RegExp(s.match, 'i').test(question));
    const urls = [...new Set([...(game.platformSources || []), ...(game.sources || [])])];
    const catalogSources = urls.filter(url => { try { return officialHosts.has(new URL(url).hostname); } catch { return false; } })
        .map(url => ({ url, title: `${game.name} 官方／商店資料`, tier: 'official', scope: '遊戲介紹或平台資料；不能僅由此證明打法與數值' }));
    // Trusted user-supplied URLs may supplement the registry; never let the model invent retrieval URLs.
    const supplied = (question.match(/https:\/\/[^\s<>"'）]+/g) || []).slice(0, 3).flatMap(url => {
        try { const u = permittedURL(url); return [{ url: u.href, title: '使用者提供的核准來源', tier: officialHosts.has(u.hostname) ? 'official' : 'secondary', scope: '需比對本作、版本與內容適用範圍' }]; } catch { return []; }
    });
    const candidates = [...curated, ...supplied, ...(curated.length ? [] : catalogSources)];
    const unique = candidates.filter((s, i) => candidates.findIndex(other => other.url === s.url) === i);
    // Curated gameplay documents take precedence over unrelated storefronts, official first within each group.
    unique.sort((a, b) => Number(a.tier === 'secondary') - Number(b.tier === 'secondary'));
    return { candidates: unique.slice(0, 5), reason: unique.length ? '' : '尚無已核准且適用此作品的來源' };
}
async function collectSources(game, question, reader = readPage) {
    const selection = selectSources(game, question);
    const sources = [];
    // Read official documents first; secondary sources are explicitly labeled.
    for (const candidate of selection.candidates) {
        const key = candidate.url;
        try {
            let page = cache.get(key);
            if (!page || Date.now() - page.savedAt > 5 * 60 * 1000 || reader !== readPage) {
                const result = await reader(key);
                const text = pageText(result.html);
                if (text.length < 150 || /There is currently no text in this page|Just a moment\.\.\.|Checking your browser/i.test(text)) throw new Error('來源沒有正文或要求瀏覽器驗證');
                page = { text, url: result.url, retrievedAt: new Date().toISOString(), savedAt: Date.now() };
                if (reader === readPage) { if (cache.size >= 100) cache.delete(cache.keys().next().value); cache.set(key, page); }
            }
            sources.push({ ...candidate, id: `S${sources.length + 1}`, url: page.url, status: 'read', retrievedAt: page.retrievedAt, text: excerpts(page.text, candidate.terms) });
        } catch (error) {
            sources.push({ ...candidate, id: `S${sources.length + 1}`, status: 'unavailable', reason: error.name === 'AbortError' ? '來源讀取逾時' : error.message });
        }
    }
    return { sources, reason: selection.reason, checkedAt: new Date().toISOString() };
}
function createServer(collect = collectSources) {
    let active = 0;
    const requests = [];
    return http.createServer(async (req, res) => {
        const port = req.socket.localPort;
        const hosts = [`127.0.0.1:${port}`, `localhost:${port}`];
        if (!hosts.includes(req.headers.host) || (req.headers.origin && req.headers.origin !== `http://${req.headers.host}`)) { res.writeHead(403).end(); return; }
        const url = new URL(req.url, `http://${req.headers.host}`);
        res.setHeader('X-Content-Type-Options', 'nosniff');
        if (url.pathname === '/api/guide-sources') {
            res.setHeader('Cache-Control', 'no-store');
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            if (req.method !== 'POST' || !/^application\/json(?:;|$)/i.test(req.headers['content-type'] || '')) { res.writeHead(405).end('{}'); return; }
            while (requests.length && requests[0] < Date.now() - 60000) requests.shift();
            if (active >= 4 || requests.length >= 15) { res.writeHead(429).end('{}'); return; }
            requests.push(Date.now()); active++;
            try {
                let body = '';
                for await (const chunk of req) { body += chunk; if (Buffer.byteLength(body) > 16384) throw new Error('請求過大'); }
                const input = JSON.parse(body);
                if (typeof input.game !== 'string' || input.game.length > 200 || typeof input.question !== 'string' || input.question.length > 6000) throw new Error('查詢格式錯誤');
                res.end(JSON.stringify(await collect(input.game, input.question)));
            } catch { res.writeHead(400).end(JSON.stringify({ reason: '來源查詢失敗或輸入格式錯誤', sources: [] })); }
            finally { active--; }
            return;
        }
        const files = { '/': 'index.html', '/index.html': 'index.html', '/games.json': 'games.json', '/sw.js': 'sw.js', '/manifest.json': 'manifest.json' };
        const file = files[url.pathname];
        if (!file || !['GET', 'HEAD'].includes(req.method)) { res.writeHead(404).end(); return; }
        res.setHeader('Content-Type', file.endsWith('.html') ? 'text/html; charset=utf-8' : file.endsWith('.js') ? 'application/javascript' : 'application/json');
        res.end(req.method === 'HEAD' ? undefined : fs.readFileSync(path.join(__dirname, file)));
    });
}
if (require.main === module) {
    const port = Number(process.argv[2] || 14438);
    createServer().listen(port, '127.0.0.1', () => console.log(`Game Guide: http://127.0.0.1:${port}/`));
}
module.exports = { createServer, collectSources, selectSources, readPage, pageText, excerpts, permittedURL, isPublicAddress };
