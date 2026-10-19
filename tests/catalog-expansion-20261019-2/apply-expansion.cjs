// Add verified games and merge only evidence-backed duplicates; preserve pending records.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const before = read(path.join(__dirname, 'catalog-before.json'));
const legacyBefore = read(path.join(__dirname, 'audit-838-before.json'));
const legacy = structuredClone(legacyBefore);
const mergeReviews = read(path.join(__dirname, 'merges.json'));
const reviews = ['mobile', 'indie'].flatMap(group => read(path.join(__dirname, `review-${group}.json`)));
const normalize = text => text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}+&]/gu, '');
const terms = game => [game.name, ...game.alias, ...(game.seriesAliases || [])];
const validSources = sources => Array.isArray(sources) && sources.length && sources.every(source => new URL(source).protocol === 'https:');
const productKey = source => {
    const url = new URL(source);
    if (url.hostname === 'store.steampowered.com') {
        const id = url.pathname.match(/\/app\/(\d+)/)?.[1] || (url.pathname === '/api/appdetails' ? url.searchParams.get('appids') : null);
        return id && /^\d+$/.test(id) ? 'steam:' + id : null;
    }
    if (url.hostname === 'apps.apple.com') return url.pathname.match(/\/id(\d+)/)?.[1] && 'apple:' + url.pathname.match(/\/id(\d+)/)[1];
    if (url.hostname === 'play.google.com' && url.pathname === '/store/apps/details') return url.searchParams.get('id') && 'google:' + url.searchParams.get('id');
    if (url.hostname === 'store.playstation.com') return url.pathname.match(/\/(concept|product)\/([^/]+)/)?.[0] && 'playstation:' + url.pathname.match(/\/(concept|product)\/([^/]+)/)[0];
    return null;
};
assert.equal(before.games.length, 1002);
assert.ok(reviews.length > 0);
const catalog = structuredClone(before);
const affected = new Set();
const mergedAuditIndices = new Set();
const merges = mergeReviews.map(review => {
    assert.ok(review.target && review.duplicate && review.reason && validSources([review.source]));
    const target = catalog.games.find(game => game.name === review.target);
    const duplicate = catalog.games.find(game => game.name === review.duplicate);
    assert.ok(target && duplicate && target !== duplicate);
    assert.equal(target.platform, duplicate.platform);
    assert.equal(target.platformReviewStatus, 'verified');
    assert.equal(duplicate.platformReviewStatus, 'verified');
    affected.add(target.name);
    affected.add(duplicate.name);
    const originals = [structuredClone(target), structuredClone(duplicate)];
    target.alias = [...new Map([...target.alias, duplicate.name, ...duplicate.alias, ...review.aliases].map(alias => [alias.toLowerCase(), alias])).values()];
    target.platformSources = [...new Set([...target.platformSources, ...duplicate.platformSources, review.source])];
    target.identityType = 'specific-game';
    target.identityNote = review.reason;
    catalog.games = catalog.games.filter(game => game !== duplicate);
    for (const game of originals) {
        const row = legacy.records.find(item => (item.renamedTo || item.name) === game.name);
        assert.ok(row, `Missing historical record: ${game.name}`);
        mergedAuditIndices.add(row.auditIndex);
        Object.assign(row, { sources: target.platformSources, identityType: target.identityType, identityNote: target.identityNote });
        if (game.name === review.duplicate) { row.mergedInto = target.name; row.mergeReason = review.reason; }
    }
    return { ...review, originals, after: structuredClone(target) };
});
const knownTerms = new Map();
const products = new Map();
function index(game) {
    for (const term of terms(game)) {
        const key = normalize(term);
        knownTerms.set(key, new Set([...(knownTerms.get(key) || []), game.name]));
    }
    for (const source of new Set([...(game.sources || []), ...(game.platformSources || [])])) {
        const key = productKey(source);
        if (key) products.set(key, new Set([...(products.get(key) || []), game.name]));
    }
}
catalog.games.forEach(index);
const records = reviews.map(review => {
    const game = review.game;
    assert.ok(game.name && game.category && game.icon && game.platform && game.identityNote && game.platformNote);
    assert.ok(Array.isArray(game.alias) && game.alias.length && game.alias.every(alias => typeof alias === 'string' && alias.trim()));
    assert.equal(new Set(game.alias.map(alias => alias.toLowerCase().trim())).size, game.alias.length, `Repeated alias: ${game.name}`);
    assert.ok(['taiwan-mobile', 'indie'].includes(game.catalogGroup));
    assert.ok([1, 2, 3].includes(game.catalogPriority));
    assert.ok(['released', 'early-access'].includes(game.releaseStatus));
    assert.equal(game.verifiedAt, '2026-10-19');
    assert.equal(game.platformReviewedAt, '2026-10-19');
    assert.ok(['verified', 'partial'].includes(game.platformReviewStatus));
    if (game.platformReviewStatus === 'verified') assert.equal(game.platformVerifiedAt, '2026-10-19');
    else {
        assert.equal(game.platformVerifiedAt, undefined);
        assert.ok(review.remainingReason && review.remainingDetails, `Missing platform caveat: ${game.name}`);
    }
    assert.equal(game.identityType, 'specific-game');
    assert.ok(validSources(game.sources) && validSources(game.platformSources));
    assert.ok(game.popularityNote && game.releaseNote && review.popularityEvidence.length && review.evidence.length);
    assert.ok(review.evidence.every(item => item.finding && game.platformSources.includes(item.source)));
    assert.ok(review.popularityEvidence.every(item => item.finding && game.sources.includes(item.source)));
    assert.ok(review.duplicateCheck.queries.length && review.duplicateCheck.result);
    if (game.catalogGroup === 'taiwan-mobile') {
        assert.equal(game.catalogRegion, 'TW');
        assert.match(game.platform, /iOS/);
        assert.match(game.platform, /Android/);
        assert.ok(game.platformSources.some(source => source.startsWith('https://apps.apple.com/tw/app/')));
        assert.ok(game.platformSources.some(source => source.startsWith('https://play.google.com/store/apps/details?')));
    }
    for (const term of terms(game)) assert.ok(!knownTerms.has(normalize(term)), `Name/alias collision: ${game.name} / ${term} -> ${[...(knownTerms.get(normalize(term)) || [])].join(', ')}`);
    const productKeys = [...new Set(game.platformSources.map(productKey).filter(Boolean))];
    for (const key of productKeys) assert.ok(!products.has(key), `Product collision: ${game.name} / ${key} -> ${[...(products.get(key) || [])].join(', ')}`);
    index(game);
    catalog.games.push(game);
    return { ...review, checkedAt: '2026-10-19', productKeys };
});
assert.equal(new Set(catalog.games.map(game => normalize(game.name))).size, catalog.games.length);
const preserved = before.games.filter(game => !affected.has(game.name));
for (const game of preserved) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
for (const row of legacyBefore.records.filter(row => !mergedAuditIndices.has(row.auditIndex))) assert.deepEqual(legacy.records.find(item => item.auditIndex === row.auditIndex), row);
const summary = { before: before.games.length, added: records.length,
    taiwanMobile: records.filter(row => row.game.catalogGroup === 'taiwan-mobile').length,
    indie: records.filter(row => row.game.catalogGroup === 'indie').length,
    total: catalog.games.length, duplicateRowsRemoved: merges.length, existingPreserved: preserved.length, pendingPreserved: 7,
    historicalPreserved: legacyBefore.records.length - mergedAuditIndices.size,
    newPlatformPending: records.filter(row => row.game.platformReviewStatus === 'partial').length,
    newNameOrAliasCollisions: 0, newProductCollisions: 0 };
catalog.version = '2.12.0';
catalog.lastUpdated = '2026-10-19';
catalog.curation.scope = '截至 2026-10-19 查核；本輪追加台灣熱門手機與獨立遊戲，已公布但尚未上市的既有條目仍依原狀態標示。';
catalog.curation.expansionFile = 'tests/catalog-expansion-20261019-2/audit.json';
catalog.curation.expansionCoverage = `本輪新增${summary.taiwanMobile}款台灣手機遊戲、${summary.indie}款獨立遊戲，合併${merges.length}個同作重複入口並保留別名；依榜單與商店評分／評論快照決定收錄優先，並非即時人氣或討論量排名。既有7筆待確認資料不變；本輪另有${summary.newPlatformPending}款已公告移植的上市證據待補。`;
legacy.summary.total = catalog.games.length;
legacy.summary.mergedRecords = legacy.records.filter(row => row.mergedInto).length;
function guard(file, expectedBefore, expectedAfter, message) {
    const actual = read(file);
    try { assert.deepEqual(actual, expectedBefore); }
    catch { assert.deepEqual(actual, expectedAfter, message); }
}
guard(path.join(root, 'games.json'), before, catalog, 'Catalog drift: refuse to overwrite independent edits');
guard(path.join(root, 'tests/platform-audit/audit-838.json'), legacyBefore, legacy, 'Audit drift: refuse to overwrite independent evidence');
assert.deepEqual(read(path.join(root, 'tests/platform-audit/pending.json')), read(path.join(__dirname, 'pending-before.json')), 'Pending drift: preserve the six pending records');
assert.deepEqual(read(path.join(root, 'tests/catalog-expansion-20261019/pending-platforms.json')), read(path.join(__dirname, 'previous-expansion-pending-before.json')), 'Previous pending drift: preserve the previous expansion caveat');
for (const game of read(path.join(__dirname, 'pending-games-before.json'))) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
console.log(JSON.stringify(summary, null, 2));
if (process.argv.includes('--apply')) {
    const json = (file, data) => fs.writeFileSync(path.join(__dirname, file), JSON.stringify(data, null, 2) + '\n');
    const header = JSON.stringify({ ...catalog, games: [] }, null, 2).replace(/  "games": \[\]\n}$/, '  "games": [');
    fs.writeFileSync(path.join(root, 'games.json'), header + '\n' + catalog.games.map(game => '    ' + JSON.stringify(game)).join(',\n') + '\n  ]\n}\n');
    json('audit.json', { asOf: '2026-10-19', summary, records, merges });
    json('pending-platforms.json', records.filter(row => row.game.platformReviewStatus === 'partial').map(row => ({ name: row.game.name, platform: row.game.platform, remainingReason: row.remainingReason, remainingDetails: row.remainingDetails, sources: row.game.platformSources })));
    fs.writeFileSync(path.join(root, 'tests/platform-audit/audit-838.json'), JSON.stringify(legacy, null, 2) + '\n');
    json('duplicate-check.json', { checkedAt: '2026-10-19', summary,
        normalization: 'NFKC, lowercase, ignore spacing/punctuation but retain + and & to distinguish editions such as DQ III vs I & II',
        newItems: records.map(row => ({ name: row.game.name, alias: row.game.alias, productKeys: row.productKeys, duplicateCheck: row.duplicateCheck })),
        existingSharedTerms: [...knownTerms.entries()].filter(([, names]) => names.size > 1).map(([term, names]) => ({ term, names: [...names], disposition: 'existing shared search term; no automatic merge' })) });
    fs.writeFileSync(path.join(__dirname, 'README.md'), `# 台灣手機與獨立遊戲擴充（第二輪）\n\n查核日期：2026-10-19。新增${summary.taiwanMobile}款台灣手機遊戲及${summary.indie}款獨立遊戲，${summary.before} → ${summary.total}款。原${summary.existingPreserved}款逐欄保留，包括既有7筆待確認資料；${merges.length ? "另合併" + merges.length + "組已證實同作重複入口，完整保留別名與原始資料；" : "本輪未發現需要合併的新重複入口；"}${merges.length ? "歷史審計同步合併對應" : "歷史審計只更新摘要目錄總數"}，${summary.historicalPreserved}筆非目標紀錄及待確認清單未改。\n\n榜單、評分與評論是收錄優先的觀察依據，並非即時排名或直接的社群討論量；不同地區／平台數字不能直接橫比。catalogPriority 3為本輪高優先，2次之，1補充，僅作編輯排序。來源均以查核當時可讀內容為準。\n\n[完整資料與證據](audit.json) · [重複與別名檢查](duplicate-check.json) · [人工交叉檢查](duplicate-review.md) · [既有7筆待確認](pending-games-before.json) · [本輪移植缺口](pending-platforms.json) · [驗證](VALIDATION.md)\n\n重現：\`node tests/catalog-expansion-20261019-2/apply-expansion.cjs\`；加\`--apply\`寫入。整合器拒絕名稱／別名／商品ID衝突，以及目錄、歷史審計或待確認清單的獨立漂移。舊查核整合器不適用擴充後目錄。\n\n` + merges.map(row => `## 合併：${row.duplicate} → ${row.target}\n\n${row.reason} [官方來源](${row.source})\n\n保留別名：${row.after.alias.join('、')}`).join('\n\n') + '\n\n' + records.map(row => `## ${row.game.name}\n\n${row.game.catalogGroup}｜${row.game.platform}｜${row.game.releaseStatus}｜平台查核${row.game.platformReviewStatus}\n\n熱度依據：${row.game.popularityNote}\n\n身分：${row.game.identityNote}\n\n平台範圍：${row.game.platformNote}${row.remainingDetails ? "\n\n仍需補證：" + row.remainingDetails : ""}\n\n別名：${row.game.alias.join('、')}\n\n` + row.evidence.map(item => `- [官方平台來源](${item.source})：${item.finding}`).join('\n') + '\n\n' + row.popularityEvidence.map(item => `- [收錄熱度來源](${item.source})：${item.finding}`).join('\n')).join('\n\n') + '\n');
}
