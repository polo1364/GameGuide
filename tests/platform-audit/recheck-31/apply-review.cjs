// Read-only by default. Apply only an exact baseline or an already applied result.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const dir = __dirname;
const root = path.resolve(dir, '../../..');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const before = read(path.join(dir, 'catalog-before.json'));
const baseline = read(path.join(dir, 'baseline.json')).records;
const reviews = ['a', 'b', 'c', 'd'].flatMap(group => read(path.join(dir, `review-${group}.json`))).sort((a, b) => a.reviewIndex - b.reviewIndex);
assert.equal(before.games.length, 964);
assert.equal(baseline.length, 31);
assert.equal(reviews.length, 31);
assert.equal(new Set(reviews.map(row => row.reviewIndex)).size, 31);
const catalog = structuredClone(before);
const httpsSources = sources => Array.isArray(sources) && sources.length && sources.every(url => new URL(url).protocol === 'https:');
const records = reviews.map(row => {
    const original = baseline[row.reviewIndex];
    assert.equal(row.auditIndex, original.auditIndex);
    assert.equal(row.name, original.name);
    const game = catalog.games.find(item => item.name === row.name);
    assert.deepEqual(game, original.game);
    assert.ok(['verified', 'partial', 'unresolved'].includes(row.status));
    assert.ok(['specific-game', 'series', 'ambiguous-title', 'unconfirmed-work'].includes(row.identityType));
    assert.equal(row.checkedAt, '2026-10-19');
    assert.ok(row.platform && row.platformNote && row.identityNote && row.resolvedGap && row.evidence.length);
    assert.equal(row.safePlatform, row.platform);
    assert.ok(httpsSources(row.sources));
    assert.ok(Array.isArray(row.editionOptions));
    assert.equal(new Set(row.editionOptions.map(option => option.name)).size, row.editionOptions.length);
    for (const option of row.editionOptions) {
        assert.ok(option.name && option.platform && option.scopeNote && httpsSources(option.sources));
    }
    if (['series', 'ambiguous-title'].includes(row.identityType)) {
        assert.ok(row.editionOptions.length >= 2);
        assert.notEqual(row.status, 'verified', 'A version comparison cannot certify a generic platform list');
    }
    assert.ok(!row.identityCorrection?.name && !row.mergeRecommendation, 'Review identity changes before extending the allowed scope');
    Object.assign(game, {
        platform: row.platform, platformNote: row.platformNote, platformSources: row.sources,
        platformReviewedAt: row.checkedAt, platformReviewStatus: row.status,
        identityType: row.identityType, identityNote: row.identityNote, editionOptions: row.editionOptions
    });
    delete game.platformVerifiedAt;
    if (row.status === 'verified') game.platformVerifiedAt = row.checkedAt;
    for (const key of ['releaseStatus', 'releaseDate']) {
        if (row[key] === null) delete game[key];
        else if (row[key] !== undefined) game[key] = row[key];
    }
    if (row.identityCorrection?.aliases) {
        assert.ok(row.identityCorrection.reason && row.identityCorrection.aliases.length);
        assert.ok(row.identityCorrection.aliases.every(alias => typeof alias === 'string' && alias.trim()));
        game.alias = [...new Set(row.identityCorrection.aliases)];
    }
    const changes = {};
    for (const key of new Set([...Object.keys(original.game), ...Object.keys(game)])) {
        if (JSON.stringify(original.game[key]) !== JSON.stringify(game[key])) {
            changes[key] = { before: original.game[key] ?? null, after: game[key] ?? null };
        }
    }
    return { reviewIndex: row.reviewIndex, auditIndex: row.auditIndex, name: row.name,
        previousStatus: original.status, status: row.status, before: original.game.platform, after: game.platform,
        changed: original.game.platform !== game.platform, note: row.platformNote, sources: row.sources,
        evidence: row.evidence, identityType: row.identityType, identityNote: row.identityNote, editionOptions: row.editionOptions,
        resolvedGap: row.resolvedGap, remainingReason: row.status === 'verified' ? null : row.remainingReason || 'official-evidence-required',
        checkedAt: row.checkedAt, ...(changes.alias ? { aliasCorrection: { ...changes.alias, reason: row.identityCorrection.reason } } : {}), changes };
});
const protectedGames = read(path.join(dir, 'preserved-933.json'));
assert.equal(protectedGames.length, 933);
for (const game of protectedGames) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
assert.equal(catalog.games.length, before.games.length);
const legacyBefore = read(path.join(dir, 'audit-838-before.json'));
const legacy = structuredClone(legacyBefore);
for (const row of records) {
    const old = legacy.records.find(item => item.auditIndex === row.auditIndex);
    Object.assign(old, { status: row.status, after: row.after, changed: old.before !== row.after,
        note: row.note, sources: row.sources, checkedAt: row.checkedAt, resolvedGap: row.resolvedGap,
        identityType: row.identityType, identityNote: row.identityNote, editionOptions: row.editionOptions });
    if (row.status === 'unresolved' && old.changed) old.unresolvedCorrection = true;
    else delete old.unresolvedCorrection;
    if (row.aliasCorrection) old.aliasCorrection = row.aliasCorrection;
    if (row.remainingReason) old.remainingReason = row.remainingReason;
    else delete old.remainingReason;
}
const countStatus = (rows, status) => rows.filter(row => row.status === status).length;
legacy.summary = { ...legacy.summary, verified: countStatus(legacy.records, 'verified'), partial: countStatus(legacy.records, 'partial'),
    unresolved: countStatus(legacy.records, 'unresolved'), platformChanges: legacy.records.filter(row => row.changed).length };
const summary = { reviewed: 31, verified: countStatus(records, 'verified'), partial: countStatus(records, 'partial'), unresolved: countStatus(records, 'unresolved'),
    platformChanges: records.filter(row => row.changed).length, aliasCorrections: records.filter(row => row.aliasCorrection).length,
    editionReferences: records.reduce((total, row) => total + row.editionOptions.length, 0),
    withEditionReferences: records.filter(row => row.editionOptions.length).length,
    seriesOrAmbiguous: records.filter(row => ['series', 'ambiguous-title'].includes(row.identityType)).length,
    unconfirmedWorks: records.filter(row => row.identityType === 'unconfirmed-work').length,
    unrelatedPreserved: protectedGames.length, total: catalog.games.length };
catalog.version = '2.8.0';
catalog.lastUpdated = '2026-10-19';
catalog.curation.platformRecheckFile = 'tests/platform-audit/recheck-31/audit-31.json';
catalog.curation.platformCoverage = `原 838 筆歷史紀錄累計 ${legacy.summary.verified} 筆核實、${legacy.summary.partial} 筆部分核實、${legacy.summary.unresolved} 筆待釐清（含前輪 2 筆已合併紀錄）。最新 31 筆均已重新查核身分；另補 ${summary.editionReferences} 組具名版本對照及各自官方來源。系列入口需選定版本，對照不等於跨版本平台合集，也不宣稱涵蓋完整系列。`;
const actual = read(path.join(root, 'games.json'));
try { assert.deepEqual(actual, before); }
catch { assert.deepEqual(actual, catalog, 'Catalog drift: refuse to overwrite unrelated or unreviewed edits'); }
const actualLegacy = read(path.join(dir, '../audit-838.json'));
try { assert.deepEqual(actualLegacy, legacyBefore); }
catch { assert.deepEqual(actualLegacy, legacy, 'Audit drift: refuse to overwrite independently updated historical evidence'); }
const audit = { asOf: '2026-10-19', summary, records };
const pending = legacy.records.filter(row => row.status !== 'verified');
console.log(JSON.stringify({ summary, legacy: legacy.summary, pending: pending.length }, null, 2));
if (process.argv.includes('--apply')) {
    const json = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
    const header = JSON.stringify({ ...catalog, games: [] }, null, 2).replace(/  "games": \[\]\n}$/, '  "games": [');
    fs.writeFileSync(path.join(root, 'games.json'), header + '\n' + catalog.games.map(game => '    ' + JSON.stringify(game)).join(',\n') + '\n  ]\n}\n');
    json(path.join(dir, 'audit-31.json'), audit);
    json(path.join(dir, 'pending.json'), records.filter(row => row.status !== 'verified'));
    json(path.join(dir, '../audit-838.json'), legacy);
    json(path.join(dir, '../pending.json'), pending);
    const links = sources => sources.map((source, i) => `- [官方來源 ${i + 1}](${source})`).join('\n');
    const details = records.map(row => `## ${row.reviewIndex + 1}. ${row.name} — ${row.status}\n\n身分：${row.identityType}\n\n${row.identityNote}\n\n平台：${row.before} → ${row.after}\n\n${row.note}\n\n${row.aliasCorrection ? `別名更正：${row.aliasCorrection.reason}\n\n` : ''}${row.evidence.map(item => '- ' + item).join('\n')}\n\n${links(row.sources)}\n\n${row.editionOptions.map(option => `### ${option.name}\n\n平台：${option.platform}\n\n${option.scopeNote}\n\n${links(option.sources)}`).join('\n\n')}\n\n缺口處理：${row.resolvedGap}`).join('\n\n');
    fs.writeFileSync(path.join(dir, 'README.md'), `# 剩餘 31 筆：作品身分與版本查核\n\n查核日：2026-10-19。31/31 已重查；${summary.verified} 筆核實、${summary.partial} 筆部分核實、${summary.unresolved} 筆仍需指定版本或補證。${summary.platformChanges} 筆平台調整、${summary.aliasCorrections} 筆別名更正，新增 ${summary.editionReferences} 組具名版本對照。總目錄 ${summary.total} 筆，933 筆非目標逐欄保留。\n\n## 如何解讀\n\n系列、同名作品、具體遊戲、未能確認作品分開標記。每個版本對照都有獨立平台與官方來源，是已查核的代表版本，並非完整系列列表。未指定版本時不把各版平台合併；具名對照會一併傳入攻略提示，要求先確認年份／副標題。\n\n## 重現\n\n執行 \`node tests/platform-audit/recheck-31/apply-review.cjs\` 預覽；加 \`--apply\` 套用。整份目錄與歷史838審計都必須符合前值或套用後值，才允許寫入。前值見 [catalog-before.json](catalog-before.json)，逐欄差異見 [audit-31.json](audit-31.json)，剩餘原因見 [pending.json](pending.json)。\n\n${details}\n`);
    fs.writeFileSync(path.join(dir, '../README.md'), `# 838 筆歷史資料平台查核\n\n最新日期2026-10-19；原838紀錄中${legacy.summary.verified}核實、${legacy.summary.partial}部分核實、${legacy.summary.unresolved}待釐清，包含前輪2筆已合併來源。目前目錄964筆。\n\n- [最新31筆作品身分與版本報告](recheck-31/README.md)\n- [49筆歷史報告](recheck-49/README.md)\n- [384筆歷史報告](recheck-384/README.md)\n- [完整838紀錄](audit-838.json)\n- [剩餘缺口](pending.json)\n\n系列平台必須依具名版本判讀，歷史發行不保證現在仍營運、可購買或相容現代系統。\n`);
    console.log('Applied 31 reviews and their scoped edition evidence.');
}
