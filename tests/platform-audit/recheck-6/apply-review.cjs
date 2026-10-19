// Dry run unless --apply; reject independent changes before writing either document.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../../..');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const before = read(path.join(__dirname, 'catalog-before.json'));
const legacyBefore = read(path.join(__dirname, 'audit-838-before.json'));
const baseline = read(path.join(__dirname, 'baseline.json')).records;
const reviews = ['a', 'b', 'c', 'd'].flatMap(group => read(path.join(__dirname, `review-${group}.json`))).sort((a, b) => a.auditIndex - b.auditIndex);
assert.equal(before.games.length, 977);
assert.equal(baseline.length, 6);
assert.equal(reviews.length, 6);
assert.deepEqual(reviews.map(row => row.auditIndex), baseline.map(row => row.auditIndex));
const catalog = structuredClone(before);
const legacy = structuredClone(legacyBefore);
const validSources = sources => Array.isArray(sources) && sources.length && sources.every(url => new URL(url).protocol === 'https:');
const records = reviews.map((review, reviewIndex) => {
    const original = baseline[reviewIndex];
    assert.equal(review.name, original.name);
    assert.deepEqual(before.games.find(game => game.name === review.name), original.game);
    assert.ok(['verified', 'partial', 'unresolved'].includes(review.status));
    assert.ok(review.platform && review.platformNote && review.identityNote && review.resolvedGap);
    assert.ok(validSources(review.platformSources));
    assert.ok(review.evidence.length && review.searched.length);
    assert.ok(review.evidence.every(item => review.platformSources.includes(item.source) && item.finding));
    assert.ok(review.searched.every(item => item.query && item.result));
    if (review.status !== 'verified') assert.ok(review.remainingReason && review.remainingDetails);
    const game = catalog.games.find(item => item.name === review.name);
    Object.assign(game, { platform: review.platform, platformNote: review.platformNote,
        platformSources: review.platformSources, platformReviewStatus: review.status,
        platformReviewedAt: '2026-10-19', identityNote: review.identityNote });
    delete game.platformVerifiedAt;
    if (review.status === 'verified') game.platformVerifiedAt = '2026-10-19';
    if (review.alias) {
        assert.ok(review.aliasCorrectionReason && review.alias.length);
        game.alias = review.alias;
    }
    if (review.editionOptions) {
        assert.ok(review.editionOptions.every(item => item.name && item.platform && item.scopeNote && validSources(item.sources)));
        game.editionOptions = review.editionOptions;
    }
    const changes = {};
    for (const key of new Set([...Object.keys(original.game), ...Object.keys(game)])) {
        if (JSON.stringify(original.game[key]) !== JSON.stringify(game[key])) changes[key] = { before: original.game[key] ?? null, after: game[key] ?? null };
    }
    const row = legacy.records.find(item => item.auditIndex === review.auditIndex);
    assert.equal(row.renamedTo || row.name, review.name);
    Object.assign(row, { status: review.status, after: game.platform, changed: row.before !== game.platform,
        note: game.platformNote, sources: game.platformSources, checkedAt: game.platformReviewedAt,
        identityNote: game.identityNote, resolvedGap: review.resolvedGap, editionOptions: game.editionOptions,
        remainingReason: review.remainingReason, remainingDetails: review.remainingDetails });
    if (review.status === 'verified') { delete row.remainingReason; delete row.remainingDetails; }
    if (changes.alias) row.aliasCorrection = { ...changes.alias, reason: review.aliasCorrectionReason };
    return { ...review, reviewIndex, before: original.game.platform, after: game.platform,
        checkedAt: game.platformReviewedAt, changes };
});
const names = new Set(reviews.map(row => row.name));
const indices = new Set(reviews.map(row => row.auditIndex));
const preserved = before.games.filter(game => !names.has(game.name));
assert.deepEqual(preserved, read(path.join(__dirname, 'preserved-971.json')));
assert.equal(preserved.length, 971);
for (const game of preserved) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
for (const row of legacyBefore.records.filter(row => !indices.has(row.auditIndex))) assert.deepEqual(legacy.records.find(item => item.auditIndex === row.auditIndex), row);
assert.equal(new Set(catalog.games.map(game => game.name.normalize('NFKC').toLowerCase())).size, catalog.games.length);
const count = (rows, status) => rows.filter(row => row.status === status).length;
legacy.summary = { ...legacy.summary, total: catalog.games.length, verified: count(legacy.records, 'verified'),
    partial: count(legacy.records, 'partial'), unresolved: count(legacy.records, 'unresolved'),
    split: count(legacy.records, 'split'), platformChanges: legacy.records.filter(row => row.changed).length };
const summary = { reviewed: 6, verified: count(records, 'verified'), partial: count(records, 'partial'), unresolved: count(records, 'unresolved'),
    platformChanges: records.filter(row => row.changes.platform).length, aliasCorrections: records.filter(row => row.changes.alias).length,
    preserved: preserved.length, historicalPreserved: legacyBefore.records.length - indices.size,
    total: catalog.games.length, remaining: count(records, 'partial') + count(records, 'unresolved') };
catalog.version = '2.10.0';
catalog.lastUpdated = '2026-10-19';
catalog.curation.platformRecheckFile = 'tests/platform-audit/recheck-6/audit-6.json';
function guard(file, expectedBefore, expectedAfter, message) {
    const actual = read(file);
    try { assert.deepEqual(actual, expectedBefore); }
    catch { assert.deepEqual(actual, expectedAfter, message); }
}
guard(path.join(root, 'games.json'), before, catalog, 'Catalog drift: refuse to overwrite independent edits');
guard(path.join(__dirname, '../audit-838.json'), legacyBefore, legacy, 'Audit drift: refuse to overwrite independent evidence');
const pending = legacy.records.filter(row => ['partial', 'unresolved'].includes(row.status));
console.log(JSON.stringify({ summary, legacy: legacy.summary }, null, 2));
if (process.argv.includes('--apply')) {
    const json = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
    const header = JSON.stringify({ ...catalog, games: [] }, null, 2).replace(/  "games": \[\]\n}$/, '  "games": [');
    fs.writeFileSync(path.join(root, 'games.json'), header + '\n' + catalog.games.map(game => '    ' + JSON.stringify(game)).join(',\n') + '\n  ]\n}\n');
    json(path.join(__dirname, 'audit-6.json'), { asOf: '2026-10-19', summary, records });
    json(path.join(__dirname, 'pending.json'), pending);
    json(path.join(__dirname, '../audit-838.json'), legacy);
    json(path.join(__dirname, '../pending.json'), pending);
    fs.writeFileSync(path.join(__dirname, 'README.md'), '# 剩餘6筆：官方證據與缺口複核\n\n日期：2026-10-19。6筆均完成查核；4筆部分核實、2筆作品身分未確認，沒有足以新增平台或更動別名的證據。本輪更新來源與判讀，沒有移除條目或把缺少證據當作取消／不存在。目錄維持977款，其餘971筆與832筆非目標歷史紀錄逐欄不變。\n\n[逐欄差異與搜尋紀錄](audit-6.json) · [待確認清單](pending.json) · [驗證](VALIDATION.md)\n\n來源僅支持逐條標明的結論；排除誤命中的來源不代表目標電玩存在。已保留上一輪有效來源，新增來源不能補足的欄位繼續標示未知。\n\n重現：`node tests/platform-audit/recheck-6/apply-review.cjs`，加 `--apply` 套用。完整目錄與歷史審計須符合本輪前值或預期值才可寫入；舊輪整合器不可用於目前目錄。\n\n' + records.map(row => `## ${row.name}\n\n${row.status}｜${row.platform}\n\n${row.platformNote}\n\n**待確認原因與解除條件：** ${row.remainingDetails}\n\n` + row.evidence.map(item => `- [官方來源／官方原頁存檔](${item.source})：${item.finding}`).join('\n') + '\n\n搜尋紀錄：\n\n' + row.searched.map(item => `- ${item.query}：${item.result}`).join('\n')).join('\n\n') + '\n');
    fs.writeFileSync(path.join(__dirname, '../README.md'), `# 838筆歷史資料平台查核\n\n最新日期2026-10-19：${legacy.summary.verified}核實、${legacy.summary.split}已拆分、${legacy.summary.partial}部分核實、${legacy.summary.unresolved}待釐清。當前目錄${catalog.games.length}款。最新6筆重查沒有新增可確證的平台或別名修正，缺口原因與解除條件已更新；未確認不等於不存在。\n\n- [6筆最新證據與缺口](recheck-6/README.md)\n- [25筆拆分與來源](recheck-25/README.md)\n- [31筆歷史報告](recheck-31/README.md)\n- [49筆歷史報告](recheck-49/README.md)\n- [384筆歷史報告](recheck-384/README.md)\n- [完整歷史審計](audit-838.json)\n- [剩餘缺口](pending.json)\n`);
}
