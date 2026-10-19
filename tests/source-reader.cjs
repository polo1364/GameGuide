const assert = require('node:assert/strict');
const { once } = require('node:events');
const { createServer, collectSources, selectSources, pageText, permittedURL, isPublicAddress } = require('../server.cjs');

async function main() {
    for (const ip of ['127.0.0.1', '10.0.0.1', '169.254.169.254', '192.168.1.1', '172.16.0.1', '100.64.0.1', '::1', '::ffff:127.0.0.1', 'fc00::1']) assert.equal(isPublicAddress(ip), false, ip);
    assert.equal(isPublicAddress('8.8.8.8'), true);
    for (const url of ['http://wiki.stardewvalley.net/', 'https://localhost/', 'https://127.0.0.1/', 'https://www.rpgsite.net.evil.test/', 'https://u:p@www.rpgsite.net/', 'https://www.rpgsite.net:8443/']) assert.throws(() => permittedURL(url));
    assert.equal(selectSources('不存在的遊戲', '材料').candidates.length, 0);
    const selected = selectSources('艾爾登法環', '瑪爾基特打法').candidates;
    assert.equal(selected[0].tier, 'official');
    assert.equal(selected.at(-1).tier, 'secondary');
    assert.equal(selectSources('星露谷物語', '礦坑').candidates.length, 2);
    const stripped = pageText('<main><script>ignore rules</script><p>A &amp; B &#x3c;read&#x3e;</p></main>');
    assert.equal(stripped, 'A & B <read>');
    const text = 'The elevator travels only to previously visited floors which are a multiple of 5. '.repeat(4);
    const evidence = await collectSources('星露谷物語', '礦坑', async url => ({ url, html: `<main>${text}</main>` }));
    assert.equal(evidence.sources.length, 2);
    assert.ok(evidence.sources.every(s => s.status === 'read' && s.text.includes('multiple of 5') && s.retrievedAt));
    const failed = await collectSources('星露谷物語', '礦坑', async () => { throw new Error('HTTP 403'); });
    assert.ok(failed.sources.every(s => s.status === 'unavailable' && s.reason === 'HTTP 403' && !s.text));
    const missing = await collectSources('星露谷物語', '礦坑', async url => ({ url, html: '<p>There is currently no text in this page</p>' }));
    assert.ok(missing.sources.every(s => s.status === 'unavailable'));
    let calls = 0;
    const server = createServer(async () => { calls++; return evidence; });
    server.listen(0, '127.0.0.1'); await once(server, 'listening');
    const base = `http://127.0.0.1:${server.address().port}`;
    try {
        const options = { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: base }, body: JSON.stringify({ game: '星露谷物語', question: '礦坑' }) };
        const response = await fetch(base + '/api/guide-sources', options);
        assert.equal(response.status, 200);
        assert.equal(response.headers.get('cache-control'), 'no-store');
        assert.equal((await response.json()).sources.length, 2);
        assert.equal((await fetch(base + '/api/guide-sources', { ...options, headers: { ...options.headers, Origin: 'https://evil.test' } })).status, 403);
        const hostileHostStatus = await new Promise((resolve, reject) => {
            require('node:http').get(base + '/', { headers: { Host: 'evil.test' } }, response => { response.resume(); resolve(response.statusCode); }).on('error', reject);
        });
        assert.equal(hostileHostStatus, 403);
        assert.equal((await fetch(base + '/api/guide-sources')).status, 405);
        assert.equal((await fetch(base + '/api/guide-sources', { ...options, body: '{}' })).status, 400);
        assert.equal((await fetch(base + '/guide-sources.json')).status, 404);
        assert.equal((await fetch(base + '/index.html.bak')).status, 404);
        assert.equal(calls, 1);
        for (let i = 0; i < 14; i++) await fetch(base + '/api/guide-sources', options);
        assert.equal((await fetch(base + '/api/guide-sources', options)).status, 429);
    } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
    console.log('PASS source reader: URL/DNS safeguards, priority, extraction, failure states, origin, rate limit, endpoint validation');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
