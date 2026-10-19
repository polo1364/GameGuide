// Dry run by default. Both live documents must match a known state before any write.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../../..');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const before = read(path.join(__dirname, 'catalog-before.json'));
const legacyBefore = read(path.join(__dirname, 'audit-838-before.json'));
const baseline = read(path.join(__dirname, 'baseline.json')).records;
const reviews = ['a', 'b', 'c', 'd'].flatMap(group => read(path.join(__dirname, `review-${group}.json`))).sort((a, b) => a.reviewIndex - b.reviewIndex);
assert.equal(before.games.length, 964);
assert.equal(baseline.length, 25);
assert.equal(reviews.length, 25);
assert.equal(new Set(reviews.map(row => row.reviewIndex)).size, 25);
const catalog = structuredClone(before);
const legacy = structuredClone(legacyBefore);
const affected = new Set();
const renamed = new Map();
const targets = new Set();
const normalize = value => value.normalize('NFKC').toLowerCase().trim();
const unique = values => [...new Map(values.map(value => [normalize(value), value])).values()];
const validSources = sources => Array.isArray(sources) && sources.length && sources.every(url => new URL(url).protocol === 'https:');
const records = reviews.map(row => {
    const original = baseline[row.reviewIndex];
    assert.equal(row.sourceName, original.name);
    assert.deepEqual(before.games.find(game => game.name === row.sourceName), original.game);
    assert.ok(['split', 'retain', 'correct'].includes(row.action));
    assert.ok(row.reason && validSources(row.sources));
    assert.ok(row.editions.length >= (row.action === 'split' ? 2 : 1));
    if (row.action !== 'split') assert.equal(row.editions.length, 1);
    affected.add(row.sourceName);
    const seriesTerms = row.action === 'split' ? unique([row.sourceName, ...original.game.alias]) : [];
    if (row.action === 'split') catalog.games = catalog.games.filter(game => game.name !== row.sourceName);
    const editions = row.editions.map(edition => {
        assert.ok(edition.name && edition.platform && edition.platformNote && edition.identityNote);
        assert.ok(validSources(edition.platformSources));
        assert.ok(Array.isArray(edition.alias) && edition.alias.length && edition.alias.every(alias => typeof alias === 'string' && alias.trim()));
        assert.ok(['verified', 'partial', 'unresolved'].includes(edition.platformReviewStatus));
        assert.ok(!targets.has(edition.name), `Repeated edition: ${edition.name}`);
        targets.add(edition.name);
        const existingName = edition.existingName || (row.action !== 'split' ? row.sourceName : null);
        let game;
        if (existingName) {
            game = catalog.games.find(item => item.name === existingName);
            assert.ok(game, `Missing existing game: ${existingName}`);
            affected.add(existingName);
            if (edition.name !== existingName) renamed.set(existingName, edition.name);
        } else {
            assert.ok(!catalog.games.some(item => normalize(item.name) === normalize(edition.name)), `Duplicate new game: ${edition.name}`);
            game = { name: edition.name, alias: [], platform: edition.platform, icon: original.game.icon, category: original.game.category };
            catalog.games.push(game);
        }
        const prior = structuredClone(game);
        const removed = new Set([...(edition.removedAliases || []), ...seriesTerms].map(normalize));
        if (edition.removedAliases?.length) assert.ok(edition.aliasCorrectionReason);
        Object.assign(game, { name: edition.name,
            alias: unique([...game.alias, ...edition.alias]).filter(alias => !removed.has(normalize(alias))),
            platform: edition.platform, platformNote: edition.platformNote, platformSources: edition.platformSources,
            platformReviewStatus: edition.platformReviewStatus, platformReviewedAt: '2026-10-19',
            identityType: edition.identityType || (row.action !== 'split' ? original.game.identityType : 'specific-game'),
            identityNote: edition.identityNote });
        if (seriesTerms.length) {
            game.seriesAliases = unique([...(game.seriesAliases || []), ...seriesTerms]);
            delete game.editionOptions;
        }
        delete game.platformVerifiedAt;
        if (game.platformReviewStatus === 'verified') game.platformVerifiedAt = '2026-10-19';
        for (const key of ['releaseStatus', 'releaseDate']) {
            if (edition[key] === null) delete game[key];
            else if (edition[key] !== undefined) game[key] = edition[key];
        }
        if (['cancelled', 'unknown'].includes(game.releaseStatus)) delete game.releaseDate;
        return { name: game.name, existingName, platform: game.platform, status: game.platformReviewStatus,
            sources: game.platformSources, note: game.platformNote, identityNote: game.identityNote,
            aliasCorrectionReason: edition.aliasCorrectionReason || null,
            removedAliases: prior.alias.filter(alias => !game.alias.includes(alias)),
            seriesAliases: game.seriesAliases || [], releaseStatus: game.releaseStatus || null };
    });
    return { reviewIndex: row.reviewIndex, auditIndex: original.auditIndex, sourceName: row.sourceName,
        action: row.action, reason: row.reason, sources: row.sources, editions,
        remainingReason: row.remainingReason || null, checkedAt: '2026-10-19' };
});
assert.equal(new Set(catalog.games.map(game => normalize(game.name))).size, catalog.games.length);
for (const row of legacy.records) {
    const review = records.find(item => item.auditIndex === row.auditIndex);
    if (review?.action === 'split') {
        Object.assign(row, { status: 'split', splitInto: review.editions.map(item => item.name), after: '已拆分為具體版本',
            changed: true, checkedAt: review.checkedAt, sources: review.sources, note: review.reason,
            resolvedGap: '系列／同名入口已拆分；各具體作品的平台與發行狀態分開記錄。' });
        delete row.remainingReason;
        delete row.unresolvedCorrection;
        delete row.editionOptions;
        continue;
    }
    const targetName = row.renamedTo || row.mergedInto || row.name;
    if (!affected.has(targetName)) continue;
    const game = catalog.games.find(item => item.name === (renamed.get(targetName) || targetName));
    assert.ok(game, `Missing audit target: ${targetName}`);
    if (renamed.has(targetName)) row.renamedTo = game.name;
    Object.assign(row, { status: game.platformReviewStatus, after: game.platform, changed: row.before !== game.platform,
        note: game.platformNote, sources: game.platformSources, checkedAt: game.platformReviewedAt,
        identityType: game.identityType, identityNote: game.identityNote });
    if (game.platformReviewStatus === 'verified') delete row.remainingReason;
    else row.remainingReason = review?.remainingReason || row.remainingReason || 'official-evidence-required';
    if (row.status === 'unresolved' && row.changed) row.unresolvedCorrection = true;
}
const count = (rows, status) => rows.filter(row => row.status === status).length;
legacy.summary = { ...legacy.summary, total: catalog.games.length,
    verified: count(legacy.records, 'verified'), partial: count(legacy.records, 'partial'),
    unresolved: count(legacy.records, 'unresolved'), split: count(legacy.records, 'split'),
    platformChanges: legacy.records.filter(row => row.changed).length };
const preserved = before.games.filter(game => !affected.has(game.name));
for (const game of preserved) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
const changes = [];
for (const old of before.games.filter(game => affected.has(game.name))) {
    changes.push({ beforeName: old.name, before: old, after: catalog.games.find(game => game.name === (renamed.get(old.name) || old.name)) || null });
}
for (const game of catalog.games.filter(game => !before.games.some(old => old.name === game.name) && ![...renamed.values()].includes(game.name))) {
    changes.push({ beforeName: null, before: null, after: game });
}
const summary = { reviewed: 25, splitSources: count(records.map(row => ({ status: row.action })), 'split'),
    concreteEditions: records.reduce((sum, row) => sum + row.editions.length, 0),
    splitEditions: records.filter(row => row.action === 'split').reduce((sum, row) => sum + row.editions.length, 0),
    reusedEditions: records.flatMap(row => row.editions).filter(edition => edition.existingName && !baseline.some(row => row.name === edition.existingName)).length,
    added: changes.filter(change => !change.before).length, removedGeneric: changes.filter(change => !change.after).length,
    renamed: renamed.size, explicitAliasCorrections: records.flatMap(row => row.editions).filter(edition => edition.aliasCorrectionReason).length,
    preserved: preserved.length, total: catalog.games.length,
    remaining: legacy.records.filter(row => ['partial', 'unresolved'].includes(row.status)).length };
catalog.version = '2.9.0';
catalog.lastUpdated = '2026-10-19';
catalog.curation.platformRecheckFile = 'tests/platform-audit/recheck-25/audit-25.json';
catalog.curation.platformCoverage = `原838筆歷史紀錄：${legacy.summary.verified}筆核實、${legacy.summary.split}筆已拆分、${legacy.summary.partial}筆部分核實、${legacy.summary.unresolved}筆待釐清。拆分記錄不是新遊戲數；代表版本不是完整系列。系列泛稱只用於多候選搜尋，具體作品各自記錄平台與發行狀態。`;
function guard(file, expectedBefore, expectedAfter, message) {
    const actual = read(file);
    try { assert.deepEqual(actual, expectedBefore); }
    catch { assert.deepEqual(actual, expectedAfter, message); }
}
guard(path.join(root, 'games.json'), before, catalog, 'Catalog drift: refuse to overwrite independent edits');
guard(path.join(__dirname, '../audit-838.json'), legacyBefore, legacy, 'Audit drift: refuse to overwrite independent evidence');
const pending = legacy.records.filter(row => ['partial', 'unresolved'].includes(row.status));
const audit = { asOf: '2026-10-19', summary, records, changes };
console.log(JSON.stringify({ summary, legacy: legacy.summary }, null, 2));
if (process.argv.includes('--apply')) {
    const json = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
    const header = JSON.stringify({ ...catalog, games: [] }, null, 2).replace(/  "games": \[\]\n}$/, '  "games": [');
    fs.writeFileSync(path.join(root, 'games.json'), header + '\n' + catalog.games.map(game => '    ' + JSON.stringify(game)).join(',\n') + '\n  ]\n}\n');
    json(path.join(__dirname, 'audit-25.json'), audit);
    json(path.join(__dirname, 'preserved.json'), preserved);
    json(path.join(__dirname, 'pending.json'), pending);
    json(path.join(__dirname, '../audit-838.json'), legacy);
    json(path.join(__dirname, '../pending.json'), pending);
    const links = sources => sources.map(url => `- [官方來源](${url})`).join('\n');
    fs.writeFileSync(path.join(__dirname, 'README.md'), `# 剩餘25筆：拆為具體作品\n\n日期2026-10-19。處理25筆，${summary.splitSources}個系列／同名入口拆成${summary.splitEditions}個具體作品（含${summary.reusedEditions}個現有版本重用）；另6筆保留具體作品／缺口查核。新增${summary.added}筆、移除${summary.removedGeneric}個泛稱入口、${summary.renamed}筆補識別副標；目前${summary.total}款。${summary.preserved}筆無關資料逐欄保留；剩${summary.remaining}個缺口。\n\n系列泛稱存為搜尋詞，不是單一作品別名；輸入泛稱必須先選定版本。平台SKU合併為同一作品並註記內容／相容差異，代表版本不宣稱涵蓋完整系列。\n\n[逐欄變更](audit-25.json) · [剩餘缺口](pending.json) · [驗證](VALIDATION.md)\n\n重現：\`node tests/platform-audit/recheck-25/apply-review.cjs\`，加\`--apply\`套用。目錄與歷史審計均須符合完整前值或預期值，才可寫入。舊輪整合器不適用目前目錄。\n\n` + records.map(row => `## ${row.sourceName}\n\n${row.action}：${row.reason}\n\n` + row.editions.map(edition => `### ${edition.name}\n\n${edition.status}｜${edition.platform}${edition.releaseStatus ? '｜' + edition.releaseStatus : ''}\n\n${edition.note}\n\n${edition.aliasCorrectionReason || ''}\n\n${links(edition.sources)}`).join('\n\n')).join('\n\n') + '\n');
    fs.writeFileSync(path.join(__dirname, '../README.md'), `# 838筆歷史資料平台查核\n\n最新日期2026-10-19：${legacy.summary.verified}核實、${legacy.summary.split}已拆分、${legacy.summary.partial}部分核實、${legacy.summary.unresolved}待釐清。已拆分是歷史入口狀態，不宣稱原泛稱對應單一遊戲；當前目錄${catalog.games.length}款。\n\n- [25筆拆分與來源](recheck-25/README.md)\n- [31筆歷史報告](recheck-31/README.md)\n- [49筆歷史報告](recheck-49/README.md)\n- [384筆歷史報告](recheck-384/README.md)\n- [完整歷史審計](audit-838.json)\n- [剩餘缺口](pending.json)\n`);
}
