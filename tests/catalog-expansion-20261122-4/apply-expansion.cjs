// Round 6: add verified popular games from recent years (major, indie and mobile); preserve every existing and pending record.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const DATE = '2026-11-22';
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const before = read(path.join(__dirname, 'catalog-before.json'));
const legacyBefore = read(path.join(__dirname, 'audit-838-before.json'));
const legacy = structuredClone(legacyBefore);
const mergeReviews = read(path.join(__dirname, 'merges.json'));
const reviews = ['major', 'indie', 'mobile'].flatMap(group => read(path.join(__dirname, `review-${group}.json`)));
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
assert.equal(before.games.length, 1186);
assert.ok(reviews.length > 0);
assert.deepEqual(mergeReviews, [], 'This round adds games only; merges need a separate reviewed change');
const catalog = structuredClone(before);
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
const PLATFORMS = ['PC', 'Mac', 'Linux', 'PS5', 'PS4', 'Xbox Series X|S', 'Xbox One', 'Switch', 'Switch 2', 'iOS', 'Android'];
const records = reviews.map(review => {
    const game = review.game;
    assert.ok(game.name && game.category && game.icon && game.platform && game.identityNote && game.platformNote);
    assert.ok(Array.isArray(game.alias) && game.alias.length && game.alias.every(alias => typeof alias === 'string' && alias.trim()));
    assert.equal(new Set(game.alias.map(alias => alias.toLowerCase().trim())).size, game.alias.length, `Repeated alias: ${game.name}`);
    assert.ok(game.platform.split('/').every(p => PLATFORMS.includes(p)), `Unknown platform label: ${game.name}`);
    assert.ok(['major', 'indie', 'mobile'].includes(game.catalogGroup));
    if (game.catalogGroup === 'mobile') assert.match(game.platform, /iOS|Android/);
    assert.ok([1, 2, 3].includes(game.catalogPriority));
    assert.ok(['released', 'early-access'].includes(game.releaseStatus));
    assert.equal(game.verifiedAt, DATE);
    assert.equal(game.platformReviewedAt, DATE);
    assert.ok(['verified', 'partial'].includes(game.platformReviewStatus));
    if (game.platformReviewStatus === 'verified') assert.equal(game.platformVerifiedAt, DATE);
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
    for (const term of terms(game)) assert.ok(!knownTerms.has(normalize(term)), `Name/alias collision: ${game.name} / ${term} -> ${[...(knownTerms.get(normalize(term)) || [])].join(', ')}`);
    const productKeys = [...new Set(game.platformSources.map(productKey).filter(Boolean))];
    for (const key of productKeys) assert.ok(!products.has(key), `Product collision: ${game.name} / ${key} -> ${[...(products.get(key) || [])].join(', ')}`);
    index(game);
    catalog.games.push(game);
    return { ...review, checkedAt: DATE, productKeys };
});
assert.equal(new Set(catalog.games.map(game => normalize(game.name))).size, catalog.games.length);
for (const game of before.games) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
const summary = { before: before.games.length, added: records.length,
    major: records.filter(row => row.game.catalogGroup === 'major').length,
    indie: records.filter(row => row.game.catalogGroup === 'indie').length,
    mobile: records.filter(row => row.game.catalogGroup === 'mobile').length,
    earlyAccess: records.filter(row => row.game.releaseStatus === 'early-access').length,
    total: catalog.games.length, duplicateRowsRemoved: 0, existingPreserved: before.games.length, pendingPreserved: 7,
    historicalPreserved: legacyBefore.records.length,
    newPlatformPending: records.filter(row => row.game.platformReviewStatus === 'partial').length,
    newNameOrAliasCollisions: 0, newProductCollisions: 0 };
catalog.version = '2.16.0';
catalog.lastUpdated = DATE;
catalog.curation.scope = `截至 ${DATE} 查核；第六輪追加近年流行的大作、獨立與手機遊戲，只收已上市或搶先體驗中的作品，已公布但未上市的既有條目仍依原狀態標示。`;
catalog.curation.expansionFile = 'tests/catalog-expansion-20261122-4/audit.json';
catalog.curation.expansionCoverage = `第六輪以近年流行作品為主，新增${summary.major}款大作、${summary.mobile}款手機遊戲與${summary.indie}款獨立遊戲（其中${summary.earlyAccess}款為搶先體驗），未合併既有條目；Steam 作品以 Steam 商店 API 的推薦數快照作收錄優先參考，非 Steam 作品依官方發行規模與編輯判斷，皆非即時人氣或銷量排名。既有7筆待確認資料不變；本輪另有${summary.newPlatformPending}款平台證據待補。`;
legacy.summary.total = catalog.games.length;
function guard(file, expectedBefore, expectedAfter, message) {
    const actual = read(file);
    try { assert.deepEqual(actual, expectedBefore); }
    catch { assert.deepEqual(actual, expectedAfter, message); }
}
guard(path.join(root, 'games.json'), before, catalog, 'Catalog drift: refuse to overwrite independent edits');
guard(path.join(root, 'tests/platform-audit/audit-838.json'), legacyBefore, legacy, 'Audit drift: refuse to overwrite independent evidence');
assert.deepEqual(read(path.join(root, 'tests/platform-audit/pending.json')), read(path.join(__dirname, 'pending-before.json')), 'Pending drift: preserve the six pending records');
assert.deepEqual(read(path.join(root, 'tests/catalog-expansion-20261019/pending-platforms.json')), read(path.join(__dirname, 'previous-expansion-pending-before.json')), 'Previous pending drift: preserve the first expansion caveat');
assert.deepEqual(read(path.join(root, 'tests/catalog-expansion-20261019-2/pending-platforms.json')), read(path.join(__dirname, 'expansion-2-pending-before.json')), 'Previous pending drift: preserve the second expansion caveat');
assert.deepEqual(read(path.join(root, 'tests/catalog-expansion-20261122/pending-platforms.json')), read(path.join(__dirname, 'expansion-3-pending-before.json')), 'Previous pending drift: preserve the third expansion caveat');
assert.deepEqual(read(path.join(root, 'tests/catalog-expansion-20261122-2/pending-platforms.json')), read(path.join(__dirname, 'expansion-4-pending-before.json')), 'Previous pending drift: preserve the fourth expansion caveat');
assert.deepEqual(read(path.join(root, 'tests/catalog-expansion-20261122-3/pending-platforms.json')), read(path.join(__dirname, 'expansion-5-pending-before.json')), 'Previous pending drift: preserve the fifth expansion caveat');
for (const game of read(path.join(__dirname, 'pending-games-before.json'))) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
console.log(JSON.stringify(summary, null, 2));
if (process.argv.includes('--apply')) {
    const json = (file, data) => fs.writeFileSync(path.join(__dirname, file), JSON.stringify(data, null, 2) + '\n');
    const header = JSON.stringify({ ...catalog, games: [] }, null, 2).replace(/  "games": \[\]\n}$/, '  "games": [');
    fs.writeFileSync(path.join(root, 'games.json'), header + '\n' + catalog.games.map(game => '    ' + JSON.stringify(game)).join(',\n') + '\n  ]\n}\n');
    json('audit.json', { asOf: DATE, summary, records, merges: [] });
    json('pending-platforms.json', records.filter(row => row.game.platformReviewStatus === 'partial').map(row => ({ name: row.game.name, platform: row.game.platform, remainingReason: row.remainingReason, remainingDetails: row.remainingDetails, sources: row.game.platformSources })));
    fs.writeFileSync(path.join(root, 'tests/platform-audit/audit-838.json'), JSON.stringify(legacy, null, 2) + '\n');
    json('duplicate-check.json', { checkedAt: DATE, summary,
        normalization: 'NFKC, lowercase, ignore spacing/punctuation but retain + and & to distinguish editions such as DQ III vs I & II',
        newItems: records.map(row => ({ name: row.game.name, alias: row.game.alias, productKeys: row.productKeys, duplicateCheck: row.duplicateCheck })),
        existingSharedTerms: [...knownTerms.entries()].filter(([, names]) => names.size > 1).map(([term, names]) => ({ term, names: [...names], disposition: 'existing shared search term; no automatic merge' })) });
    fs.writeFileSync(path.join(__dirname, 'README.md'), `# 近年流行遊戲擴充（第六輪）\n\n查核日期：${DATE}。以近年流行作品為主，新增${summary.major}款大作、${summary.mobile}款手機遊戲及${summary.indie}款獨立遊戲（${summary.earlyAccess}款搶先體驗），${summary.before} → ${summary.total}款。原${summary.existingPreserved}款逐欄保留，包括既有7筆待確認資料；本輪未合併任何條目，歷史審計只更新摘要目錄總數。只收錄截至查核日已上市或搶先體驗中的作品；查核時尚未上市或證據不足的候選未收錄，見 [duplicate-review.md](duplicate-review.md)。\n\n收錄依據：Steam 作品使用 Steam 商店 API 的 recommendations.total 快照（本輪 Steam 評論 API 拒絕自動請求，因此與前兩輪的評論總數、正評比例不能直接比較）；非 Steam 作品依官方發行規模與編輯判斷。catalogPriority 3為本輪高優先，2次之，1補充，僅作編輯排序，不是人氣排行。平台只列出查核日已推出的原生版本；向下相容、雲端串流、延期或僅見傳聞的版本不列入，並寫在平台說明。\n\n[完整資料與證據](audit.json) · [重複與別名檢查](duplicate-check.json) · [本輪平台缺口](pending-platforms.json) · [驗證](VALIDATION.md)\n\n重現：\`node tests/catalog-expansion-20261122-4/apply-expansion.cjs\`；加\`--apply\`寫入。整合器拒絕名稱／別名／商品ID衝突，以及目錄、歷史審計或待確認清單的獨立漂移。前五輪整合器不適用擴充後目錄。\n\n` + records.map(row => `## ${row.game.name}\n\n${row.game.catalogGroup}｜${row.game.platform}｜${row.game.releaseStatus}｜平台查核${row.game.platformReviewStatus}\n\n熱度依據：${row.game.popularityNote}\n\n身分：${row.game.identityNote}\n\n平台範圍：${row.game.platformNote}${row.remainingDetails ? "\n\n仍需補證：" + row.remainingDetails : ""}\n\n別名：${row.game.alias.join('、')}\n\n` + row.evidence.map(item => `- [官方平台來源](${item.source})：${item.finding}`).join('\n') + '\n\n' + row.popularityEvidence.map(item => `- [收錄依據來源](${item.source})：${item.finding}`).join('\n')).join('\n\n') + '\n');
}
