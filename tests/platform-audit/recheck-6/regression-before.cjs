// Run: node tests/regression.cjs (requires playwright, optionally via NODE_PATH).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const vm = require('node:vm');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const results = [];
async function check(name, run) {
    try { await run(); results.push({ name, pass: true }); console.log(`PASS ${name}`); }
    catch (error) { results.push({ name, pass: false }); console.error(`FAIL ${name}: ${error.message}`); }
}

async function main() {
    const server = http.createServer((req, res) => {
        const name = new URL(req.url, 'http://localhost').pathname.replace(/^\/guide\//, '/');
        const files = { '/': 'index.html', '/index.html': 'index.html', '/games.json': 'games.json', '/sw.js': 'sw.js', '/manifest.json': 'manifest.json' };
        const file = files[name];
        if (!file) { res.writeHead(404).end(); return; }
        res.setHeader('Content-Type', file.endsWith('.html') ? 'text/html; charset=utf-8' : file.endsWith('.js') ? 'application/javascript' : 'application/json');
        res.end(fs.readFileSync(path.join(root, file)));
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const origin = `http://127.0.0.1:${server.address().port}`;
    const browser = await chromium.launch({ headless: true });
    async function open(options = {}, initialize) {
        const context = await browser.newContext({ serviceWorkers: 'block', viewport: { width: 1440, height: 1000 }, ...options });
        await context.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
        await context.addInitScript(() => localStorage.setItem('deepseek_api_key', 'test-placeholder'));
        if (initialize) await context.addInitScript(initialize);
        const page = await context.newPage();
        await page.goto(origin);
        return { context, page };
    }
    async function ready(page) { await page.waitForFunction(() => gameDatabase.length > 0, null, { timeout: 4000 }); }
    async function knownGuide(page) {
        await ready(page);
        await page.evaluate(() => {
            currentGameName = gameDatabase[0].name;
            currentPlatform = 'PC';
            displayResult(currentGameName, 'PC', '## 原始章節\n\n原始內容\n\n| 道具 | 數量 |\n|---|---|\n| 金幣 | 10 |', [], '原始問題');
        });
    }
    try {
        await check('October catalog includes sourced popular games and release states', async () => {
            const catalog = JSON.parse(fs.readFileSync(path.join(root, 'games.json'), 'utf8'));
            assert.equal(catalog.lastUpdated, '2026-10-19');
            const added = catalog.games.filter(game => game.verifiedAt === '2026-10-18');
            assert.equal(added.length, 100);
            assert.equal(new Set(added.map(game => game.name)).size, added.length);
            for (const game of added) {
                assert.ok(game.alias.length && game.alias.every(alias => typeof alias === 'string'));
                assert.ok(game.platform && game.icon && game.category);
                assert.ok(['released', 'early-access', 'playtest', 'upcoming'].includes(game.releaseStatus));
                assert.ok(game.sources.length && game.sources.every(url => new URL(url).protocol === 'https:'));
                assert.ok(game.catalogPriority > 0);
                if (game.releaseStatus === 'upcoming') {
                    assert.ok(game.releaseDate > catalog.lastUpdated && game.releaseDate <= '2026-10-31');
                }
            }
        });
        await check('new aliases, current recommendations and Switch 2 selection work', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const lookup = await page.evaluate(() => {
                    const added = gameDatabase.filter(game => game.verifiedAt === '2026-10-18');
                    return added.flatMap(game => [game.name, ...game.alias].filter(query => !searchLocalGames(query).some(result => result.name === game.name)));
                });
                assert.deepEqual(lookup, []);
                assert.equal(await page.evaluate(() => searchLocalGames('仁王')[0].name), '仁王');
                assert.equal(await page.evaluate(() => searchLocalGames('惡靈古堡')[0].name), '惡靈古堡 Requiem');
                assert.equal(await page.locator('.popular-games').first().locator('.popular-game-btn').count(), 8);
                await page.locator('.popular-game-btn', { hasText: 'Pokopia' }).click();
                assert.match(await page.locator('#detectedPlatformText').innerText(), /Switch 2/);
                assert.equal(await page.evaluate(() => detectedPlatform), 'switch2');
            } finally { await context.close(); }
        });
        await check('mobile and indie additions are distinct, sourced and searchable', async () => {
            const catalog = JSON.parse(fs.readFileSync(path.join(root, 'games.json'), 'utf8'));
            const added = catalog.games.filter(game => ['mobile', 'indie'].includes(game.catalogGroup));
            assert.equal(added.filter(game => game.catalogGroup === 'mobile').length, 18);
            assert.equal(added.filter(game => game.catalogGroup === 'indie').length, 18);
            const normalize = value => value.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
            const oldNames = new Set(catalog.games.filter(game => !game.catalogGroup).flatMap(game => [game.name, ...game.alias]).map(normalize));
            for (const game of added) {
                assert.ok(!oldNames.has(normalize(game.name)), `Duplicate: ${game.name}`);
                assert.ok(game.popularityNote && game.sources.length);
                if (game.catalogGroup === 'mobile') assert.match(game.platform, /iOS|Android/);
            }
            const { context, page } = await open();
            try {
                await ready(page);
                await page.locator('[aria-label="手機遊戲精選"] button', { hasText: '戀與深空' }).click();
                assert.equal(await page.locator('#gameName').inputValue(), '戀與深空');
                assert.equal(await page.evaluate(() => detectedPlatform), 'ios');
                await page.locator('[aria-label="獨立遊戲精選"] button', { hasText: 'Megabonk' }).click();
                assert.equal(await page.locator('#gameName').inputValue(), 'Megabonk');
                assert.equal(await page.evaluate(() => detectedPlatform), 'pc');
                assert.equal(await page.evaluate(() => searchLocalGames('shadowverse worlds beyond')[0].name), 'Shadowverse: Worlds Beyond');
                assert.equal(await page.evaluate(() => searchLocalGames('卡牌店模擬器')[0].releaseStatus), 'released');
                assert.match(await page.evaluate(() => getGameReleaseLabel(findGameInDatabase('Schedule I'))), /搶先體驗/);
                assert.match(await page.evaluate(() => getGameCatalogContext(findGameInDatabase('Roblox'))), /具體體驗名稱/);
                assert.match(await page.evaluate(() => getGameCatalogContext(findGameInDatabase('DELTARUNE'))), /未公開章節/);
            } finally { await context.close(); }
        });
        await check('historical catalog deduplication retains aliases before the explicit version split', async () => {
            const catalog = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/recheck-25/catalog-before.json'), 'utf8'));
            const audit = JSON.parse(fs.readFileSync(path.join(root, 'tests/catalog-audit-20261018.json'), 'utf8'));
            const normalize = value => value.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}+&]/gu, '');
            const names = catalog.games.map(game => normalize(game.name));
            assert.equal(new Set(names).size, names.length);
            const recheck = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/recheck-49/audit-49.json'), 'utf8'));
            assert.equal(catalog.games.length, audit.summary.before - audit.summary.duplicateRowsRemoved + audit.summary.added - recheck.summary.mergedRecords);
            assert.equal(audit.summary.duplicateRowsRemoved, 202);
            // These are erroneous labels, deliberately removed instead of retained as aliases.
            const wrongLabels = new Set(['無盡航線', '無盡', '最光環 無限', '挺進地牢', '仙境傳說 新世代的誕生']);
            for (const merge of audit.merged) {
                const canonical = catalog.games.find(game => game.name === merge.canonicalName);
                assert.ok(canonical, merge.canonicalName);
                const aliases = new Set([canonical.name, ...canonical.alias]);
                const correction = recheck.records.find(row => row.name === merge.canonicalName)?.aliasCorrection;
                const removedAliases = new Set((correction?.before || []).filter(alias => !correction.after.includes(alias)));
                for (const old of merge.originals) {
                    for (const alias of [old.name, ...old.alias]) {
                        if (!wrongLabels.has(alias) && !removedAliases.has(alias)) assert.ok(aliases.has(alias), `Lost alias: ${alias}`);
                    }
                }
            }
            for (const group of audit.retainedDistinct) {
                for (const name of group.names) assert.ok(catalog.games.some(game => game.name === name), name);
            }
            const oldIndices = audit.merged.flatMap(merge => merge.originalIndices);
            assert.equal(new Set(oldIndices).size, oldIndices.length, 'An original record cannot belong to two merges');
        });
        await check('Taiwan mobile additions have local identity and platform evidence', async () => {
            const catalog = JSON.parse(fs.readFileSync(path.join(root, 'games.json'), 'utf8'));
            const added = catalog.games.filter(game => game.catalogGroup === 'taiwan-mobile');
            assert.equal(added.length, 20);
            for (const game of added) {
                assert.equal(game.catalogRegion, 'TW');
                assert.match(game.platform, /iOS\/Android/);
                assert.ok(game.popularityNote && game.releaseNote);
                assert.ok(game.sources.some(url => url.startsWith('https://apps.apple.com/tw/app/')));
                assert.ok(game.sources.some(url => url.startsWith('https://play.google.com/store/apps/details?')));
            }
            const { context, page } = await open();
            try {
                await ready(page);
                for (const title of ['Pikmin Bloom', '楓之谷M', '瑪奇 Mobile', '貓咪大戰爭']) {
                    await page.locator('[aria-label="台灣手機遊戲精選"] button', { hasText: title }).click();
                    assert.equal(await page.locator('#gameName').inputValue(), title);
                    assert.equal(await page.evaluate(() => detectedPlatform), 'ios');
                }
            } finally { await context.close(); }
        });
        await check('exact titles cannot be shadowed by shared series aliases', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                assert.deepEqual(await page.evaluate(() => gameDatabase.filter(game => findGameInDatabase(game.name)?.name !== game.name).map(game => game.name)), []);
                const mapping = {
                    'gunfire reborn': '槍火重生',
                    'enter the gungeon': '挺進地牢',
                    'rox': 'RO仙境傳說：新世代的誕生',
                    'rom': 'RO仙境傳說：守護永恆的愛',
                    'project sekai': '世界計畫 繽紛舞台！feat. 初音未來',
                    'aether gazer': '深空之眼',
                    'Garena 三角洲行動': 'Delta Force',
                    'Garena 傳說對決': '傳說對決',
                    '絕地求生M': '絕地求生 Mobile'
                };
                for (const [query, expected] of Object.entries(mapping)) {
                    assert.equal(await page.evaluate(query => findGameInDatabase(query)?.name, query), expected);
                    assert.equal(await page.evaluate(query => searchLocalGames(query)[0]?.name, query), expected);
                }
            } finally { await context.close(); }
        });
        await check('platform corrections exclude wrong ports and retired online platforms', async () => {
            const games = JSON.parse(fs.readFileSync(path.join(root, 'games.json'), 'utf8')).games;
            const get = name => games.find(game => game.name === name);
            for (const name of ['噬血代碼', '模擬市民4', '怪物彈珠', '農場模擬器22', 'Poly Bridge 2', 'Raft', '槍火重生', '彈射世界']) {
                assert.doesNotMatch(get(name).platform, /Switch/, name);
            }
            for (const name of ['奧日與黑暗森林', '奧日與螢火意志']) assert.doesNotMatch(get(name).platform, /PS4/);
            assert.equal(get("初音未來 Project DIVA MEGA39's+").platform, 'PC');
            assert.equal(get("初音未來 Project DIVA MEGA39's").platform, 'Switch');
            assert.doesNotMatch(get('絕地求生').platform, /PS4|Xbox One|Mobile|iOS|Android/);
            assert.doesNotMatch(get('原神').platform, /PS4/);
            assert.ok(get('Apex英雄').platform.split('/').includes('Switch 2'));
            assert.ok(!get('Apex英雄').platform.split('/').includes('Switch'));
            assert.ok(get('快打旋風6').platform.split('/').includes('Switch 2'));
            assert.ok(!get('快打旋風6').platform.split('/').includes('Switch'));
            assert.match(get('惡靈古堡2 重製版').platform, /Switch（雲端版）\/Switch 2/);
            assert.equal(get('魔物獵人 物語（原版）').platform, '3DS/iOS/Android');
            assert.equal(get('魔物獵人 物語 重製版').platform, 'PC/PS4/Switch');
            for (const game of games.filter(game => game.platformVerifiedAt)) {
                assert.ok(game.platformNote && game.platformSources.length);
                assert.ok(game.platformSources.every(url => new URL(url).protocol === 'https:'));
            }
        });
        await check('all 838 legacy records have honest audit states and preserved identities', async () => {
            const catalog = JSON.parse(fs.readFileSync(path.join(root, 'games.json'), 'utf8'));
            const audit = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/audit-838.json'), 'utf8'));
            const pending = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/pending.json'), 'utf8'));
            const baseline = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/baseline-838.json'), 'utf8'));
            const preserved = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/baseline-preserved.json'), 'utf8'));
            const splitAudit = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/recheck-25/audit-25.json'), 'utf8'));
            assert.equal(audit.records.length, 838);
            assert.equal(new Set(audit.records.map(row => row.auditIndex)).size, 838);
            assert.equal(audit.summary.verified + audit.summary.partial + audit.summary.unresolved + audit.summary.split, 838);
            assert.equal(pending.length, audit.summary.partial + audit.summary.unresolved);
            assert.equal(audit.summary.platformChanges, audit.records.filter(row => row.changed).length);
            for (const row of audit.records) {
                assert.equal(row.name, baseline.pending[row.auditIndex].name);
                if (row.status === 'split') {
                    assert.ok(!catalog.games.some(game => game.name === row.name));
                    assert.ok(row.splitInto.length >= 2);
                    for (const name of row.splitInto) {
                        const target = catalog.games.find(game => game.name === name);
                        assert.ok(target && target.platformSources.length && target.identityType === 'specific-game');
                    }
                    continue;
                }
                const game = catalog.games.find(game => game.name === (row.renamedTo || row.mergedInto || row.name));
                if (row.mergedInto) {
                    assert.ok(!catalog.games.some(item => item.name === row.name));
                    assert.ok(game.alias.includes(row.name));
                }
                assert.equal(row.name, baseline.pending[row.auditIndex].name);
                assert.equal(game.platform, row.after);
                assert.equal(game.platformReviewStatus, row.status);
                assert.equal(game.platformReviewedAt, row.checkedAt);
                assert.ok(game.platformNote);
                if (row.status === 'verified') {
                    assert.equal(game.platformVerifiedAt, row.checkedAt);
                    assert.ok(game.platformSources.length);
                } else {
                    assert.equal(game.platformVerifiedAt, undefined, row.name);
                    assert.ok(pending.some(item => item.auditIndex === row.auditIndex));
                }
                if (row.status === 'unresolved' && !row.unresolvedCorrection) assert.equal(game.platform, row.before);
            }
            assert.equal(preserved.length, 128);
            for (const before of preserved) {
                const expected = splitAudit.changes.find(change => change.beforeName === before.name)?.after || before;
                assert.deepEqual(catalog.games.find(game => game.name === expected.name), expected);
            }
        });
        await check('legacy corrections distinguish mobile ports, native editions and stopped services', async () => {
            const games = JSON.parse(fs.readFileSync(path.join(root, 'games.json'), 'utf8')).games;
            const get = name => games.find(game => game.name === name);
            assert.equal(get('遊戲王 早期之日').platform, 'PC/Switch');
            assert.equal(get('魔力寶貝 歸來').platform, 'iOS/Android');
            assert.doesNotMatch(get('惡靈古堡 聖女密碼 X').platform, /PC/);
            assert.match(get('惡靈古堡 聖女密碼 X').platform, /PS4（PS2版）/);
            assert.equal(get('惡靈古堡 Re:Verse').platform, 'PC/PS4/Xbox One');
            assert.equal(get('惡靈古堡 Re:Verse').releaseStatus, 'retired');
            assert.doesNotMatch(get('惡靈古堡 村莊 黃金版').platform, /iOS|macOS|iPadOS/);
            assert.match(get('軒轅劍外傳 穹之扉').platform, /PS5/);
        });
        await check('uncertain editions are labeled and cannot silently select a platform', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const state = await page.evaluate(async () => {
                    const game = findGameInDatabase('聲之形');
                    showAutocomplete([game], game.name);
                    const label = document.getElementById('autocompleteList').textContent;
                    autoDetectPlatform('PC');
                    selectGameFromAutocomplete(game);
                    const detected = detectedPlatform;
                    document.getElementById('question').value = '怎麼開始玩';
                    let request;
                    fetchDeepSeekChat = async messages => { request = messages; return '請先確認是哪一年版本。'; };
                    await generateGuide();
                    autoDetectPlatform('Nintendo DS');
                    return { label, detected, prompt: JSON.stringify(request), dsLabel: document.getElementById('detectedPlatformText').textContent,
                        partial: getGameCatalogContext(findGameInDatabase('流亡黯道 手機版')),
                        retired: getGameReleaseLabel(findGameInDatabase('惡靈古堡 Re:Verse')),
                        noDate: getGameReleaseLabel({ releaseStatus: 'upcoming' }) };
                });
                assert.match(state.label, /版本／平台待確認/);
                assert.equal(state.detected, null);
                assert.match(state.prompt, /需先確認完整名稱與年份/);
                assert.match(state.prompt, /不得視為已認證/);
                assert.match(state.prompt, /作品身分/);
                assert.match(state.partial, /平台待補證/);
                assert.match(state.retired, /已停止服務/);
                assert.doesNotMatch(state.noDate, /undefined/);
                assert.match(state.dsLabel, /Nintendo DS/);
                assert.doesNotMatch(state.dsLabel, /3DS/);
            } finally { await context.close(); }
        });
        await check('platform and regional caveats reach guide prompt context', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                assert.match(await page.evaluate(() => getGameCatalogContext(findGameInDatabase('Apex英雄'))), /2026-08-04/);
                assert.match(await page.evaluate(() => getGameCatalogContext(findGameInDatabase('惡靈古堡2 重製版'))), /雲端版/);
                assert.match(await page.evaluate(() => getGameCatalogContext(findGameInDatabase('RO仙境傳說：守護永恆的愛'))), /不是 ROX/);
                assert.match(await page.evaluate(() => getGameCatalogContext(findGameInDatabase('貓咪大戰爭'))), /不是 Switch/);
            } finally { await context.close(); }
        });
        await check('historical 384 rechecks match their preserved catalog snapshot', async () => {
            const dir = path.join(root, 'tests/platform-audit/recheck-384');
            const catalog = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/recheck-49/catalog-before.json'), 'utf8'));
            const before = JSON.parse(fs.readFileSync(path.join(dir, 'baseline.json'), 'utf8'));
            const audit = JSON.parse(fs.readFileSync(path.join(dir, 'audit-384.json'), 'utf8'));
            const preserved = JSON.parse(fs.readFileSync(path.join(dir, 'preserved-582.json'), 'utf8'));
            assert.equal(catalog.games.length, 966);
            assert.equal(audit.records.length, 384);
            assert.equal(new Set(audit.records.map(row => row.auditIndex)).size, 384);
            assert.equal(audit.summary.verified + audit.summary.partial + audit.summary.unresolved, 384);
            assert.equal(preserved.length, 582);
            for (const game of preserved) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
            const mutable = new Set(['platform', 'platformNote', 'platformSources', 'platformReviewedAt', 'platformReviewStatus', 'platformVerifiedAt', 'releaseStatus', 'releaseDate']);
            for (const row of audit.records) {
                const original = before.records.find(item => item.auditIndex === row.auditIndex).game;
                const game = catalog.games.find(item => item.name === row.name);
                assert.equal(row.before, original.platform);
                assert.equal(row.after, game.platform);
                assert.equal(row.checkedAt, '2026-10-19');
                assert.ok(row.resolvedGap);
                if (row.aliasCorrection) {
                    assert.deepEqual(game.alias, row.aliasCorrection.after);
                    assert.ok(row.aliasCorrection.reason && row.sources.length);
                }
                for (const key of new Set([...Object.keys(original), ...Object.keys(game)])) {
                    if (mutable.has(key) || (key === 'alias' && row.aliasCorrection)) continue;
                    assert.deepEqual(game[key], original[key], `${game.name}: unrelated ${key}`);
                }
            }
        });
        await check('historical 49 rechecks match their snapshot and account for every alias and merge', async () => {
            const dir = path.join(root, 'tests/platform-audit/recheck-49');
            const catalog = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/recheck-31/catalog-before.json'), 'utf8'));
            const baseline = JSON.parse(fs.readFileSync(path.join(dir, 'baseline.json'), 'utf8'));
            const audit = JSON.parse(fs.readFileSync(path.join(dir, 'audit-49.json'), 'utf8'));
            const preserved = JSON.parse(fs.readFileSync(path.join(dir, 'preserved-917.json'), 'utf8'));
            assert.equal(audit.records.length, 49);
            assert.equal(new Set(audit.records.map(row => row.auditIndex)).size, 49);
            assert.equal(catalog.games.length, 964);
            assert.equal(audit.summary.verified + audit.summary.partial + audit.summary.unresolved, 49);
            const mutable = new Set(['platform', 'platformNote', 'platformSources', 'platformReviewedAt', 'platformReviewStatus', 'platformVerifiedAt', 'releaseStatus', 'releaseDate']);
            for (const before of preserved) {
                const game = catalog.games.find(item => item.name === before.name);
                const merge = audit.merges.find(item => item.targetName === before.name);
                if (merge) {
                    assert.deepEqual(game.alias, merge.afterAliases);
                    assert.deepEqual({ ...game, alias: before.alias }, before);
                } else assert.deepEqual(game, before);
            }
            for (const row of audit.records) {
                const original = baseline.records.find(item => item.auditIndex === row.auditIndex).game;
                assert.equal(row.before, original.platform);
                assert.ok(row.sources.length && row.evidence.length && row.resolvedGap);
                const game = catalog.games.find(item => item.name === (row.mergedInto || row.name));
                assert.equal(game.platform, row.after);
                assert.equal(game.platformReviewStatus, row.status);
                if (row.mergedInto) {
                    assert.ok(!catalog.games.some(item => item.name === row.name));
                    assert.ok(game.alias.includes(row.name));
                    continue;
                }
                assert.deepEqual(game.platformSources, row.sources);
                assert.equal(game.platformNote, row.note);
                assert.equal(game.platformReviewedAt, row.checkedAt);
                assert.equal(game.platformVerifiedAt, row.status === 'verified' ? row.checkedAt : undefined);
                for (const key of ['releaseStatus', 'releaseDate']) {
                    const expected = row.releaseCorrections?.[key] ? row.releaseCorrections[key].after ?? undefined : original[key];
                    assert.equal(game[key], expected, `${row.name}: ${key}`);
                }
                const merge = audit.merges.find(item => item.targetName === row.name);
                if (merge) assert.deepEqual(game.alias, merge.afterAliases);
                else if (row.aliasCorrection) assert.deepEqual(game.alias, row.aliasCorrection.after);
                for (const key of new Set([...Object.keys(original), ...Object.keys(game)])) {
                    if (mutable.has(key) || (key === 'alias' && (row.aliasCorrection || merge))) continue;
                    assert.deepEqual(game[key], original[key], `${row.name}: unrelated ${key}`);
                }
            }
        });
        await check('25 recheck replay rejects independent catalog and historical audit edits before writing', async () => {
            const dir = path.join(root, 'tests/platform-audit/recheck-25');
            const script = fs.readFileSync(path.join(dir, 'apply-review.cjs'), 'utf8');
            for (const [file, pattern, mutate] of [
                [path.join(root, 'games.json'), /Catalog drift/, value => { value.games[0].icon = 'DRIFT_SENTINEL'; }],
                [path.join(root, 'tests/platform-audit/audit-838.json'), /Audit drift/, value => { value.records[0].note = 'DRIFT_SENTINEL'; }]
            ]) {
                const mockedFs = { ...fs,
                    readFileSync(input, ...args) {
                        const raw = fs.readFileSync(input, ...args);
                        if (path.resolve(input) !== file) return raw;
                        const value = JSON.parse(raw);
                        mutate(value);
                        return JSON.stringify(value);
                    },
                    writeFileSync() { throw new Error('Unexpected write before drift rejection'); }
                };
                assert.throws(() => new Function('require', '__dirname', 'process', script)(
                    name => name === 'node:fs' ? mockedFs : require(name), dir, { argv: ['--apply'] }
                ), pattern);
            }
        });
        await check('historical 31 identity rechecks match their preserved snapshot', async () => {
            const dir = path.join(root, 'tests/platform-audit/recheck-31');
            const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
            const catalog = read(path.join(root, 'tests/platform-audit/recheck-25/catalog-before.json'));
            const baseline = read(path.join(dir, 'baseline.json')).records;
            const audit = read(path.join(dir, 'audit-31.json'));
            const preserved = read(path.join(dir, 'preserved-933.json'));
            assert.equal(catalog.games.length, 964);
            assert.equal(audit.records.length, 31);
            assert.equal(new Set(audit.records.map(row => row.reviewIndex)).size, 31);
            assert.equal(audit.summary.verified + audit.summary.partial + audit.summary.unresolved, 31);
            assert.equal(preserved.length, 933);
            for (const game of preserved) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
            const mutable = new Set(['platform', 'platformNote', 'platformSources', 'platformReviewedAt', 'platformReviewStatus', 'platformVerifiedAt', 'releaseStatus', 'releaseDate', 'identityType', 'identityNote', 'editionOptions']);
            for (const row of audit.records) {
                const original = baseline.find(item => item.auditIndex === row.auditIndex).game;
                const game = catalog.games.find(item => item.name === row.name);
                const expected = structuredClone(original);
                for (const [key, change] of Object.entries(row.changes)) {
                    assert.ok(mutable.has(key) || (key === 'alias' && row.aliasCorrection), `${row.name}: unexpected ${key}`);
                    assert.deepEqual(change.before, original[key] ?? null);
                    if (change.after === null) delete expected[key];
                    else expected[key] = change.after;
                }
                assert.deepEqual(game, expected);
                assert.equal(game.platform, row.after);
                assert.equal(game.platformReviewStatus, row.status);
                assert.equal(game.platformVerifiedAt, row.status === 'verified' ? row.checkedAt : undefined);
                assert.deepEqual(game.platformSources, row.sources);
                assert.equal(game.identityNote, row.identityNote);
                assert.equal(game.identityType, row.identityType);
                assert.deepEqual(game.editionOptions, row.editionOptions);
                assert.ok(row.identityNote && row.resolvedGap && row.evidence.length);
                for (const option of game.editionOptions) {
                    assert.ok(option.name && option.platform && option.scopeNote && option.sources.length);
                    assert.ok(option.sources.every(url => new URL(url).protocol === 'https:'));
                }
                if (['series', 'ambiguous-title'].includes(game.identityType)) {
                    assert.notEqual(row.status, 'verified');
                    assert.ok(game.editionOptions.length >= 2);
                }
            }
        });
        await check('25 split audit reconstructs the catalog and preserves every unrelated record', async () => {
            const dir = path.join(root, 'tests/platform-audit/recheck-25');
            const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
            const catalog = read(path.join(root, 'games.json'));
            const before = read(path.join(dir, 'catalog-before.json'));
            const audit = read(path.join(dir, 'audit-25.json'));
            const preserved = read(path.join(dir, 'preserved.json'));
            assert.equal(audit.records.length, 25);
            assert.equal(new Set(audit.records.map(row => row.reviewIndex)).size, 25);
            const expected = new Map(before.games.map(game => [game.name, game]));
            for (const change of audit.changes) {
                if (change.before) {
                    assert.deepEqual(expected.get(change.beforeName), change.before);
                    expected.delete(change.beforeName);
                }
                if (change.after) {
                    assert.ok(!expected.has(change.after.name));
                    expected.set(change.after.name, change.after);
                }
            }
            assert.equal(catalog.games.length, expected.size);
            assert.equal(catalog.games.length, before.games.length + audit.summary.added - audit.summary.removedGeneric);
            assert.equal(new Set(catalog.games.map(game => game.name.normalize('NFKC').toLowerCase())).size, catalog.games.length);
            for (const game of catalog.games) assert.deepEqual(game, expected.get(game.name));
            assert.equal(preserved.length, audit.summary.preserved);
            for (const game of preserved) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
            for (const row of audit.records) {
                for (const edition of row.editions) {
                    const game = catalog.games.find(item => item.name === edition.name);
                    assert.ok(game && game.alias.length && game.platformNote && game.identityNote);
                    assert.deepEqual(game.platformSources, edition.sources);
                    assert.ok(edition.sources.every(url => new URL(url).protocol === 'https:'));
                    assert.equal(game.platformReviewStatus, edition.status);
                    if (row.action === 'split') {
                        assert.ok(game.seriesAliases.some(alias => alias.toLowerCase() === row.sourceName.toLowerCase()), row.sourceName);
                        assert.equal(game.identityType, 'specific-game');
                    }
                }
            }
        });
        await check('series searches require a version and explicit aliases select the correct original', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const audit = JSON.parse(fs.readFileSync(path.join(root, 'tests/platform-audit/recheck-25/audit-25.json'), 'utf8'));
                for (const row of audit.records.filter(row => row.action === 'split')) {
                    const state = await page.evaluate(name => ({ found: findGameInDatabase(name)?.name, candidates: findGameCandidates(name).map(game => game.name), search: searchLocalGames(name).map(game => game.name) }), row.sourceName);
                    assert.equal(state.found, undefined, row.sourceName);
                    for (const edition of row.editions) {
                        assert.ok(state.candidates.includes(edition.name), edition.name);
                        assert.ok(state.search.includes(edition.name), edition.name);
                    }
                }
                const prompt = await page.evaluate(async () => {
                    document.getElementById('gameName').value = '模擬城市';
                    document.getElementById('question').value = '怎麼開始玩';
                    autoDetectPlatform('PS5');
                    let request;
                    fetchDeepSeekChat = async messages => { request = messages; return '請選擇具體版本。'; };
                    await generateGuide();
                    return { text: JSON.stringify(request), detected: detectedPlatform };
                });
                assert.equal(prompt.detected, null);
                assert.match(prompt.text, /SimCity（2013）/);
                assert.match(prompt.text, /SimCity 4 Deluxe Edition/);
                assert.match(prompt.text, /不得自行選第一筆/);
                assert.match(prompt.text, /Cities-of-Tomorrow/);
                assert.match(prompt.text, /版本／平台待確認/);
                const aliases = { 'rf4': '符文工廠4（3DS原版）', 'rune factory 4 special': '符文工廠4 豪華版', 'perfect dark 2010': 'Perfect Dark（2010 HD版）' };
                for (const [query, expected] of Object.entries(aliases)) assert.equal(await page.evaluate(query => findGameInDatabase(query)?.name, query), expected);
                assert.equal(await page.evaluate(() => findGameInDatabase('fable 2025')?.name), undefined);
                assert.equal(await page.evaluate(() => findGameInDatabase('dungeon meshi')?.name), undefined);
                const cancelled = await page.evaluate(() => { const game = findGameInDatabase('perfect dark reboot'); return { label: getGameReleaseLabel(game), context: getGameCatalogContext(game) }; });
                assert.equal(cancelled.label, '專案已取消');
                assert.match(cancelled.context, /未發行|未發售/);
                assert.doesNotMatch(cancelled.context, /尚未正式發售/);
            } finally { await context.close(); }
        });
        await check('resolved originals stay separate from remakes and archived mobile ports', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const originals = { '魔力寶貝 懷舊版': 'PC', 'Fate/stay night': 'PC', '初音未來 Project DIVA': 'PSP', '薩爾達傳說 無雙': 'Wii U', '世界樹的迷宮': 'DS' };
                for (const [name, platform] of Object.entries(originals)) {
                    const game = await page.evaluate(name => findGameInDatabase(name), name);
                    assert.equal(game.platform, platform, name);
                    assert.equal(game.platformReviewStatus, 'verified', name);
                    assert.equal(game.identityType, 'specific-game', name);
                }
                const lego = await page.evaluate(() => findGameInDatabase('樂高 指環王'));
                assert.match(lego.platform, /Android/);
                assert.equal(lego.platformReviewStatus, 'verified');
                assert.ok(lego.platformSources.some(url => url.includes('com.wb.goog.llotr')));
                const context = await page.evaluate(() => getGameQueryContext('Perfect Dark'));
                assert.match(context, /2000/);
                assert.match(context, /2010/);
                assert.match(context, /取消/);
                assert.match(context, /相容/);
                assert.match(context, /不得自行選第一筆/);
            } finally { await context.close(); }
        });
        await check('repaired identities and merged names resolve without wrong-game aliases', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const mapping = { '魔兵驚天錄': '蓓優妮塔', '戰慄時空': '半條命', 'restaurant empire': '奇蹟餐廳' };
                for (const [query, expected] of Object.entries(mapping)) {
                    assert.equal(await page.evaluate(query => findGameInDatabase(query)?.name, query), expected);
                    assert.equal(await page.evaluate(query => searchLocalGames(query)[0]?.name, query), expected);
                }
                const excluded = { 'cook serve delicious': '奇蹟餐廳', 'counter strike': '半條命', 'ragnarok renewal': '仙境傳說 復興', 'three kingdoms tactics': '率土之濱', 'voice of cards': '聲之形', 'the wonderful 101': '蓓優妮塔' };
                for (const [query, wrong] of Object.entries(excluded)) {
                    assert.notEqual(await page.evaluate(query => findGameInDatabase(query)?.name, query), wrong);
                }
                const game = name => page.evaluate(name => findGameInDatabase(name), name);
                assert.match((await game('半條命')).platform, /PS2/);
                assert.match((await game('半條命2')).platform, /Android（NVIDIA SHIELD）/);
                assert.doesNotMatch((await game('暗黑地牢')).platform, /Android/);
                for (const name of ['地鐵 離鄉', 'Norco']) assert.doesNotMatch((await game(name)).platform, /Switch/);
                assert.equal((await game('森林之子')).platform, 'PC');
                assert.equal((await game('Project: The Perceiver')).platform, 'PS5/PS4');
            } finally { await context.close(); }
        });
        await check('rechecked ports and corrected aliases use the intended game', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const result = await page.evaluate(() => {
                    const get = name => findGameInDatabase(name);
                    return {
                        fantasy: get('奇幻生活i：轉圈圈的龍和偷取時間的少女').platform,
                        poe: get('流亡黯道').platform,
                        kingdom: get('王國之心3'), hollow: get('空洞騎士').platform,
                        duel: get('遊戲王 怪獸之決鬥').platform,
                        speed: get('極速領域'), wuxia: get('tale of wuxia')?.name,
                        wrongSpeed: get('kartrider drift')?.name
                    };
                });
                assert.match(result.fantasy, /iOS\/Android/);
                assert.match(result.poe, /Xbox Series X\|S/);
                assert.equal(result.kingdom.platformReviewStatus, 'verified');
                assert.match(result.kingdom.platform, /PS5/);
                assert.match(result.kingdom.platformNote, /雲端/);
                assert.match(result.hollow, /PS5.*Xbox Series.*Switch 2/);
                assert.equal(result.duel, 'Game Boy');
                assert.equal(result.speed.platform, 'iOS/Android');
                assert.notEqual(result.wrongSpeed, '極速領域');
                assert.equal(result.wuxia, '俠客風雲傳');
            } finally { await context.close(); }
        });
        await check('unannounced platforms clear stale detection and specific handhelds stay distinct', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const state = await page.evaluate(async () => {
                    autoDetectPlatform('PC');
                    selectGameFromAutocomplete(findGameInDatabase('巫師 重製版'));
                    const unknown = detectedPlatform;
                    document.getElementById('question').value = '會在哪些平台推出';
                    let request;
                    fetchDeepSeekChat = async messages => { request = messages; return '平台仍待官方公布。'; };
                    await generateGuide();
                    autoDetectPlatform('行動裝置（系統未公布）', 'partial');
                    const mobile = detectedPlatform;
                    autoDetectPlatform('New Nintendo 3DS');
                    const handheld = document.getElementById('detectedPlatformText').textContent;
                    autoDetectPlatform('Game Boy');
                    return { unknown, mobile, handheld, gb: detectedPlatform, prompt: JSON.stringify(request) };
                });
                assert.equal(state.unknown, null);
                assert.match(state.prompt, /平台尚未公布或確認，僅依官方公告，不得自行推定/);
                assert.doesNotMatch(state.prompt, /全平台\/由AI根據遊戲判斷/);
                assert.equal(state.mobile, null);
                assert.match(state.handheld, /New Nintendo 3DS/);
                assert.equal(state.gb, 'retro');
            } finally { await context.close(); }
        });
        await check('unreleased and playtest games are labeled and grounded in API prompts', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const data = await page.evaluate(async () => {
                    const game = findGameInDatabase('FINAL FANTASY RESONANCE');
                    showAutocomplete([game], 'FINAL');
                    const label = document.getElementById('autocompleteList').textContent;
                    selectGameFromAutocomplete(game);
                    document.getElementById('question').value = '完整主線及最終 Boss 怎麼打';
                    let request;
                    fetchDeepSeekChat = async messages => { request = messages; return '## 已公開資訊\n\n正式版尚未發售。'; };
                    await generateGuide();
                    const playtest = findGameInDatabase('Deadlock');
                    showAutocomplete([playtest], 'Deadlock');
                    return { label, prompt: JSON.stringify(request), playtestLabel: document.getElementById('autocompleteList').textContent };
                });
                assert.match(data.label, /預定.*2026-10-22/);
                assert.match(data.prompt, /2026-10-18/);
                assert.match(data.prompt, /尚未正式發售/);
                assert.match(data.prompt, /不得.*編造/);
                assert.match(data.playtestLabel, /測試/);
            } finally { await context.close(); }
        });
        await check('custom game guide renders without ReferenceError', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                await page.evaluate(() => { currentGameName = 'Custom game'; displayResult('Custom game', 'PC', '## 測試\n\n攻略內容'); });
                assert.match(await page.locator('#gameInfoCard').innerText(), /PC/);
            } finally { await context.close(); }
        });
        await check('follow-up preserves collapse buttons and adds chapter navigation', async () => {
            const { context, page } = await open();
            try {
                await knownGuide(page);
                await page.evaluate(() => appendFollowupResult('補充問題', '## 補充章節\n\n補充內容', []));
                await page.locator('.section-toggle-btn').first().click();
                assert.equal(await page.locator('.guide-section').first().evaluate(el => el.classList.contains('collapsed')), true);
                assert.equal(await page.locator('.guide-section').count(), 2);
                assert.equal(await page.locator('#chapterSelect option').count(), 3);
                assert.match(await page.locator('#tocList').innerText(), /補充章節/);
                assert.match(await page.evaluate(() => currentGuideData.content), /補充內容/);
            } finally { await context.close(); }
        });
        await check('bookmark restores its own conversation and reading controls', async () => {
            const { context, page } = await open();
            try {
                await knownGuide(page);
                await page.evaluate(async () => {
                    await toggleBookmark();
                    conversationHistory = [{ role: 'user', content: 'UNRELATED_GAME' }];
                    loadBookmark(0);
                });
                const history = await page.evaluate(() => conversationHistory);
                assert.ok(!JSON.stringify(history).includes('UNRELATED_GAME'));
                assert.ok(JSON.stringify(history).includes('原始內容'));
                assert.equal(await page.locator('.section-toggle-btn').count(), 1);
                await page.reload(); await ready(page);
                assert.equal(await page.evaluate(() => bookmarks.length), 1);
                await page.evaluate(() => deleteBookmark(0));
                await page.reload(); await ready(page);
                assert.equal(await page.evaluate(() => bookmarks.length), 0);
            } finally { await context.close(); }
        });
        await check('bookmark metadata is rendered as text', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                await page.evaluate(() => { bookmarks = [{ gameName: '<img src=x onerror="window.injected=true">', question: '<b data-injected>test</b>' }]; renderBookmarks(); });
                assert.equal(await page.locator('#bookmarkList img, #bookmarkList [data-injected]').count(), 0);
            } finally { await context.close(); }
        });
        await check('legacy bookmarks without IDs can be deleted permanently', async () => {
            const { context, page } = await open({}, () => {
                if (!localStorage.getItem('migration-fixture')) {
                    localStorage.setItem('game_bookmarks', JSON.stringify([{ gameName: 'Legacy game', question: 'Legacy question', content: '<h2>Legacy guide</h2>' }]));
                    localStorage.setItem('migration-fixture', 'true');
                }
            });
            try {
                await ready(page);
                assert.equal(await page.evaluate(() => bookmarks.length), 1);
                await page.evaluate(() => deleteBookmark(0));
                await page.reload(); await ready(page);
                assert.equal(await page.evaluate(() => bookmarks.length), 0);
            } finally { await context.close(); }
        });
        await check('late follow-up cannot modify a different loaded guide', async () => {
            const { context, page } = await open();
            try {
                await knownGuide(page);
                const result = await page.evaluate(async () => {
                    conversationHistory = [{ role: 'assistant', content: 'original guide' }];
                    let respond;
                    fetchDeepSeekChat = () => new Promise(resolve => { respond = resolve; });
                    document.getElementById('followupInput').value = 'old follow-up';
                    const request = askFollowup();
                    bookmarks = [{ gameName: 'Different game', platform: 'PC', question: 'Other question', content: '<h2>Other guide</h2>' }];
                    loadBookmark(0);
                    respond('STALE_RESPONSE'); await request;
                    return { text: document.getElementById('resultContent').textContent, history: JSON.stringify(conversationHistory) };
                });
                assert.ok(!result.text.includes('STALE_RESPONSE'));
                assert.ok(!result.history.includes('STALE_RESPONSE'));
            } finally { await context.close(); }
        });
        await check('repeated generation while pending sends only one request', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const count = await page.evaluate(async () => {
                    let requests = 0;
                    const responses = [];
                    fetchDeepSeekChat = () => { requests++; return new Promise(resolve => responses.push(resolve)); };
                    document.getElementById('gameName').value = 'Custom game';
                    document.getElementById('question').value = 'Test question';
                    const first = generateGuide();
                    const second = generateGuide();
                    responses.forEach(resolve => resolve('## Generated\n\nContent'));
                    await Promise.all([first, second]);
                    return requests;
                });
                assert.equal(count, 1);
            } finally { await context.close(); }
        });
        await check('API success, follow-up and failure restore usable controls', async () => {
            const { context, page } = await open();
            const errors = [], requests = [], models = [];
            page.on('pageerror', error => errors.push(error.message));
            let fail = false;
            await context.route('https://api.deepseek.com/**', async route => {
                requests.push(route.request().postDataJSON().messages);
                models.push(route.request().postDataJSON().model);
                await route.fulfill({ status: fail ? 429 : 200, contentType: 'application/json', body: JSON.stringify(fail ? { error: { message: 'Rate limit test' } } : { choices: [{ message: { content: requests.length === 1 ? '## 模擬攻略\n\n主要流程' : '## 補充說明\n\n補充流程' } }] }) });
            });
            try {
                await ready(page);
                await page.locator('#gameName').fill('Custom game');
                await page.locator('#question').fill('如何開始');
                await page.locator('#generateBtn').click();
                await page.waitForFunction(() => !document.getElementById('generateBtn').disabled);
                assert.match(await page.locator('#resultContent').innerText(), /主要流程/);
                await page.locator('#followupInput').fill('接下來呢');
                await page.locator('#followupBtn').click();
                await page.waitForFunction(() => !document.getElementById('followupBtn').disabled);
                assert.match(await page.locator('#resultContent').innerText(), /補充流程/);
                assert.ok(requests[1].some(message => message.role === 'assistant' && message.content.includes('主要流程')));
                fail = true;
                await page.locator('#followupInput').fill('失敗測試');
                await page.locator('#followupBtn').click();
                await page.waitForFunction(() => !document.getElementById('followupBtn').disabled);
                assert.match(await page.locator('#toast').innerText(), /Rate limit test/);
                assert.equal(await page.evaluate(() => conversationHistory.length), 5);
                assert.deepEqual(models, ['deepseek-flash', 'deepseek-flash', 'deepseek-flash']);
                assert.deepEqual(errors, []);
            } finally { await context.close(); }
        });
        await check('DeepSeek requires its own key and preserves legacy settings', async () => {
            const { context, page } = await open({}, () => {
                localStorage.removeItem('deepseek_api_key');
                localStorage.setItem('gemini_api_key', 'legacy-test-placeholder');
            });
            try {
                await ready(page);
                assert.equal(await page.evaluate(() => apiKey), '');
                await page.locator('#apiModal').waitFor({ state: 'visible' });
                await page.locator('#apiKey').fill('sk-test-placeholder');
                await page.locator('.save-btn').click();
                await page.locator('#apiModal').waitFor({ state: 'hidden' });
                await page.reload(); await ready(page);
                assert.equal(await page.evaluate(() => apiKey === 'sk-test-placeholder'), true);
                assert.equal(await page.evaluate(() => localStorage.getItem('gemini_api_key') === 'legacy-test-placeholder'), true);
            } finally { await context.close(); }
        });
        await check('autocomplete ignores out-of-order and dismissed results', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const observed = await page.evaluate(async () => {
                    const pending = {};
                    searchWikipediaGames = query => new Promise(resolve => { pending[query] = resolve; });
                    document.getElementById('gameName').value = 'old-query';
                    const oldSearch = searchGamesHybrid('old-query');
                    document.getElementById('gameName').value = 'new-query';
                    const newSearch = searchGamesHybrid('new-query');
                    pending['new-query']([{ name: 'new-result', platform: 'PC', icon: '🎮' }]); await newSearch;
                    pending['old-query']([{ name: 'old-result', platform: 'PC', icon: '🎮' }]); await oldSearch;
                    const latest = autocompleteResults[0]?.name;
                    document.getElementById('gameName').value = 'dismissed-query';
                    const hiddenSearch = searchGamesHybrid('dismissed-query');
                    hideAutocomplete();
                    pending['dismissed-query']([]); await hiddenSearch;
                    return { latest, active: document.getElementById('autocompleteList').classList.contains('active') };
                });
                assert.deepEqual(observed, { latest: 'new-result', active: false });
            } finally { await context.close(); }
        });
        await check('IndexedDB unavailable still initializes and saves settings', async () => {
            const { context, page } = await open({}, () => Object.defineProperty(window, 'indexedDB', { value: { open() { throw new Error('IndexedDB disabled for regression'); } } }));
            try {
                await ready(page);
                await page.evaluate(() => saveSetting('guide_font_size', 2));
                assert.equal(await page.evaluate(() => getSetting('guide_font_size', 1)), 2);
            } finally { await context.close(); }
        });
        await check('page cache maintenance preserves current and unrelated caches', async () => {
            const { context, page } = await open();
            try {
                await ready(page);
                const cacheNames = await page.evaluate(async () => {
                    await caches.open('unrelated-app-cache');
                    await caches.open('gamemaster-v13');
                    await clearOldCaches();
                    return caches.keys();
                });
                assert.ok(cacheNames.includes('unrelated-app-cache'));
                assert.ok(cacheNames.includes('gamemaster-v13'));
            } finally { await context.close(); }
        });
        await check('service worker activation preserves unrelated caches', async () => {
            const handlers = {}, deleted = [];
            const script = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
            vm.runInNewContext(script, { console, URL, Response, location: { origin }, self: { addEventListener: (event, handler) => { handlers[event] = handler; }, clients: { claim: async () => {}, matchAll: async () => [] } }, caches: { keys: async () => ['unrelated-app-cache', 'gamemaster-v1'], delete: async name => { deleted.push(name); } } });
            let complete;
            handlers.activate({ waitUntil: promise => { complete = promise; } });
            await complete;
            assert.deepEqual(deleted, ['gamemaster-v1']);
        });
        await check('service worker nested navigation is fresh and JSON fallback is not HTML', async () => {
            const handlers = {};
            let networkCalls = 0, offline = false;
            const store = { match: async request => String(request?.url || request).includes('games.json') ? undefined : new Response('cached HTML'), put: async () => {} };
            vm.runInNewContext(fs.readFileSync(path.join(root, 'sw.js'), 'utf8'), {
                console, URL, Response, location: { origin }, self: { addEventListener: (event, handler) => { handlers[event] = handler; } },
                caches: { match: store.match, open: async () => store },
                fetch: async () => { networkCalls++; if (offline) throw new Error('offline'); return new Response('fresh HTML'); }
            });
            async function request(url, mode) {
                let response;
                handlers.fetch({ request: { url, mode, method: 'GET' }, respondWith: value => { response = value; }, waitUntil() {} });
                return response;
            }
            assert.equal(await (await request(`${origin}/guide/`, 'navigate')).text(), 'fresh HTML');
            assert.equal(networkCalls, 1);
            offline = true;
            const response = await request(`${origin}/guide/games.json`, 'cors');
            assert.equal(response.status, 503);
        });
        await check('real service worker supports offline reload after version change', async () => {
            const { context, page } = await open({ serviceWorkers: 'allow' });
            try {
                await ready(page);
                await page.evaluate(() => navigator.serviceWorker.ready);
                await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
                await page.evaluate(() => { localStorage.setItem('app_version', 'old-version'); });
                await context.setOffline(true);
                await page.reload(); await ready(page);
                assert.equal(await page.evaluate(() => gameDatabase.length), JSON.parse(fs.readFileSync(path.join(root, 'games.json'), 'utf8')).games.length);
                assert.equal(await page.evaluate(() => getSetting('theme')), 'light');
            } finally { await context.close(); }
        });
        for (const width of [1440, 390, 320]) {
            await check(`layout and main controls at ${width}px`, async () => {
                const { context, page } = await open({ viewport: { width, height: 900 } });
                try {
                    await knownGuide(page);
                    for (const group of ['手機遊戲精選', '台灣手機遊戲精選', '獨立遊戲精選']) {
                        const buttons = page.locator(`[aria-label="${group}"] button`);
                        assert.equal(await buttons.count(), 4);
                        for (const button of await buttons.all()) {
                            const box = await button.boundingBox();
                            assert.ok(box && box.x >= 0 && box.x + box.width <= width + 1);
                        }
                    }
                    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
                    await page.evaluate(() => showAutocomplete([findGameInDatabase('聲之形'), findGameInDatabase('王國之心3')], ''));
                    assert.match(await page.locator('#autocompleteList').innerText(), /版本／平台待確認/);
                    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
                    await page.evaluate(() => hideAutocomplete());
                    await page.evaluate(() => {
                        document.getElementById('gameName').value = '模擬城市';
                        clearDetectedPlatform();
                        showAutocomplete(searchLocalGames('模擬城市'), '模擬城市');
                    });
                    assert.equal(await page.evaluate(() => autocompleteSelectedIndex), -1);
                    await page.locator('#gameName').press('Enter');
                    assert.equal(await page.locator('#gameName').inputValue(), '模擬城市');
                    await page.locator('.autocomplete-item', { hasText: 'SimCity（2013）' }).click();
                    assert.equal(await page.locator('#gameName').inputValue(), 'SimCity（2013）');
                    assert.equal(await page.evaluate(() => detectedPlatformRaw), 'PC/macOS');
                    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
                    await page.locator('.section-toggle-btn').first().click();
                    assert.equal(await page.locator('.guide-section').first().evaluate(el => el.classList.contains('collapsed')), true);
                    await page.locator('#chapterSelect').selectOption({ index: 1 });
                    assert.equal(await page.locator('.guide-section').first().evaluate(el => el.classList.contains('collapsed')), false);
                    if (process.env.SCREENSHOT_DIR) {
                        fs.mkdirSync(process.env.SCREENSHOT_DIR, { recursive: true });
                        await page.screenshot({ path: path.join(process.env.SCREENSHOT_DIR, `guide-${width}.png`), fullPage: true });
                    }
                } finally { await context.close(); }
            });
        }
    } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
    console.log(`${results.filter(result => result.pass).length}/${results.length} passed`);
    if (results.some(result => !result.pass)) process.exitCode = 1;
}
main().catch(error => { console.error(error); process.exitCode = 1; });
