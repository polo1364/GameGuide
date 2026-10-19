// Deterministic, scoped integration. Default is a read-only preview; --apply writes.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const dir = __dirname;
const root = path.resolve(dir, '../../..');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const before = read(path.join(dir, 'catalog-before.json'));
const baseline = read(path.join(dir, 'baseline.json')).records;
const reviews = ['a', 'b', 'c', 'd'].flatMap(group => read(path.join(dir, `review-${group}.json`))).sort((a, b) => a.reviewIndex - b.reviewIndex);
assert.equal(before.games.length, 966);
assert.equal(baseline.length, 49);
assert.equal(reviews.length, 49);
assert.equal(new Set(reviews.map(row => row.reviewIndex)).size, 49);
const catalog = structuredClone(before);
const games = new Map(catalog.games.map(game => [game.name, game]));
const allowedMerges = new Map([['魔兵驚天錄', '蓓優妮塔'], ['戰慄時空', '半條命']]);
const records = reviews.map(row => {
    const original = baseline[row.reviewIndex];
    assert.equal(row.auditIndex, original.auditIndex);
    assert.equal(row.name, original.name);
    assert.deepEqual(before.games.find(game => game.name === row.name), original.game);
    assert.ok(['verified', 'partial', 'unresolved'].includes(row.status));
    assert.equal(row.checkedAt, '2026-10-19');
    assert.ok(row.platform && row.platformNote && row.resolvedGap && row.evidence.length);
    assert.ok(row.sources.length && row.sources.every(url => new URL(url).protocol === 'https:'));
    assert.equal(row.safePlatform, row.platform);
    const game = games.get(row.name);
    game.platform = row.platform;
    game.platformNote = row.platformNote;
    game.platformSources = row.sources;
    game.platformReviewedAt = row.checkedAt;
    game.platformReviewStatus = row.status;
    delete game.platformVerifiedAt;
    if (row.status === 'verified') game.platformVerifiedAt = row.checkedAt;
    for (const key of ['releaseStatus', 'releaseDate']) {
        if (row[key] === null) delete game[key];
        else if (row[key] !== undefined) game[key] = row[key];
    }
    const result = {
        reviewIndex: row.reviewIndex, auditIndex: row.auditIndex, name: row.name,
        previousStatus: original.status, status: row.status,
        before: original.game.platform, after: row.platform,
        changed: original.game.platform !== row.platform,
        note: row.platformNote, sources: row.sources, evidence: row.evidence,
        resolvedGap: row.resolvedGap, checkedAt: row.checkedAt
    };
    if (row.remainingReason) result.remainingReason = row.remainingReason;
    for (const key of ['releaseStatus', 'releaseDate']) {
        if (original.game[key] !== game[key]) {
            result.releaseCorrections ||= {};
            result.releaseCorrections[key] = { before: original.game[key] ?? null, after: game[key] ?? null };
        }
    }
    if (row.identityCorrection) {
        assert.ok(row.identityCorrection.reason && row.identityCorrection.aliases.length);
        assert.ok(row.identityCorrection.aliases.every(alias => typeof alias === 'string' && alias.trim()));
        game.alias = [...new Set(row.identityCorrection.aliases)];
        result.aliasCorrection = { before: original.game.alias, after: game.alias, reason: row.identityCorrection.reason };
    }
    return result;
});
const merges = [];
for (const row of reviews.filter(row => row.mergeRecommendation)) {
    const targetName = row.mergeRecommendation.targetName;
    assert.equal(targetName, allowedMerges.get(row.name));
    assert.equal(row.status, 'verified');
    assert.ok(row.mergeRecommendation.reason);
    const source = games.get(row.name);
    const target = games.get(targetName);
    assert.ok(source && target);
    assert.equal(source.platform, target.platform, 'Merged versions must have identical platform scope');
    const priorAliases = [...target.alias];
    target.alias = [...new Set([...target.alias, source.name, ...source.alias])].filter(alias => alias !== target.name);
    games.delete(row.name);
    records.find(record => record.name === row.name).mergedInto = targetName;
    merges.push({ sourceName: row.name, targetName, beforeAliases: priorAliases, afterAliases: target.alias, reason: row.mergeRecommendation.reason, sources: row.sources });
}
assert.equal(merges.length, 2);
catalog.games = catalog.games.filter(game => games.has(game.name));
const legacy = read(path.join(dir, 'audit-838-before.json'));
for (const row of records) {
    const old = legacy.records.find(record => record.auditIndex === row.auditIndex);
    const current = games.get(row.mergedInto || row.name);
    Object.assign(old, { status: current.platformReviewStatus, after: current.platform, changed: old.before !== current.platform,
        note: row.note, sources: row.sources, checkedAt: row.checkedAt, resolvedGap: row.resolvedGap });
    if (row.status === 'unresolved' && old.changed) old.unresolvedCorrection = true;
    if (row.aliasCorrection) old.aliasCorrection = row.aliasCorrection;
    if (row.mergedInto) old.mergedInto = row.mergedInto;
    if (row.remainingReason) old.remainingReason = row.remainingReason;
}
legacy.summary = { ...legacy.summary, total: catalog.games.length,
    verified: legacy.records.filter(row => row.status === 'verified').length,
    partial: legacy.records.filter(row => row.status === 'partial').length,
    unresolved: legacy.records.filter(row => row.status === 'unresolved').length,
    platformChanges: legacy.records.filter(row => row.changed).length, mergedRecords: merges.length };
const summary = { reviewed: records.length, verified: records.filter(row => row.status === 'verified').length,
    partial: records.filter(row => row.status === 'partial').length, unresolved: records.filter(row => row.status === 'unresolved').length,
    platformChanges: records.filter(row => row.changed).length, aliasCorrections: records.filter(row => row.aliasCorrection).length,
    mergedRecords: merges.length, beforeTotal: before.games.length, afterTotal: catalog.games.length,
    unrelatedPreserved: 916, mergeTargetAliasesUpdated: 1 };
catalog.version = '2.7.0';
catalog.lastUpdated = '2026-10-19';
catalog.curation.platformCoverage = `原 838 筆舊資料均有查核紀錄：${legacy.summary.verified} 筆平台已核實、${legacy.summary.partial} 筆部分核實、${legacy.summary.unresolved} 筆版本或來源待釐清（含 ${merges.length} 筆已合併重複紀錄）；${legacy.summary.platformChanges} 筆有平台更正或補充。最新 49 筆均已重查；未明版本不套用其他作品平台，未證實平台移出主欄並保留缺口註記。區分原生、相容、雲端、地區及停服狀態。`;
catalog.curation.platformRecheckFile = 'tests/platform-audit/recheck-49/audit-49.json';
const audit = { asOf: '2026-10-19', summary, merges, records };
const pending = legacy.records.filter(row => row.status !== 'verified');

// Accept only the exact initial or final catalog. Never overwrite unrelated edits.
const actual = read(path.join(root, 'games.json'));
try { assert.deepEqual(actual, before); }
catch { assert.deepEqual(actual, catalog, 'Catalog drift: inspect changes before applying this snapshot'); }
const protectedGames = read(path.join(dir, 'preserved-917.json'));
assert.equal(protectedGames.length, 917);
for (const original of protectedGames) {
    const current = games.get(original.name);
    if (original.name === '蓓優妮塔') assert.deepEqual({ ...current, alias: original.alias }, original);
    else assert.deepEqual(current, original);
}
console.log(JSON.stringify({ summary, legacy: legacy.summary, pending: pending.length }, null, 2));
if (process.argv.includes('--apply')) {
    const writeJson = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
    const header = JSON.stringify({ ...catalog, games: [] }, null, 2).replace(/  "games": \[\]\n}$/, '  "games": [');
    fs.writeFileSync(path.join(root, 'games.json'), `${header}\n${catalog.games.map(game => '    ' + JSON.stringify(game)).join(',\n')}\n  ]\n}\n`);
    writeJson(path.join(dir, 'audit-49.json'), audit);
    writeJson(path.join(dir, 'pending.json'), records.filter(row => row.status !== 'verified'));
    writeJson(path.join(dir, '../audit-838.json'), legacy);
    writeJson(path.join(dir, '../pending.json'), pending);
    const escape = value => String(value).replaceAll('|', '\\|');
    const evidence = records.map(row => `## ${row.reviewIndex + 1}. ${row.name} — ${row.status}\n\n平台：${row.before} → ${row.after}${row.mergedInto ? `；合併至 ${row.mergedInto}` : ''}\n\n${row.note}\n\n${row.aliasCorrection ? `別名修正：${row.aliasCorrection.reason}\n\n` : ''}${row.evidence.map(item => '- ' + item).join('\n')}\n\n${row.sources.map((url, i) => `- [來源 ${i + 1}](${url})`).join('\n')}\n\n尚餘／已解決缺口：${row.resolvedGap}`).join('\n\n');
    fs.writeFileSync(path.join(dir, 'README.md'), `# 剩餘 49 筆平台與別名重查\n\n查核日期：2026-10-19。49/49 均已重查；${summary.verified} 筆核實、${summary.partial} 筆部分核實、${summary.unresolved} 筆身分／版本未解。${summary.platformChanges} 筆平台欄位改動、${summary.aliasCorrections} 筆別名修正、2 筆重複合併；目錄 ${before.games.length} → ${catalog.games.length} 筆。\n\n熱門且明確的作品先查。來源以開發商、發行商、平台商店與官方原始公告為準；歷史平台不保證仍可購買或適用現代作業系統。未確認的平台不當成已認證，也不把缺乏證據寫成永遠不推出。\n\n${records.filter(row => row.remainingReason === 'version-required').length} 筆系列／年份泛稱仍需指定版本；其他缺口逐筆列於下文。916 筆非目標完整保留；另有既有蓓優妮塔僅接收合併別名。歷史 384 筆查核留存原快照，不追改歷史結論。\n\n重現：\`node tests/platform-audit/recheck-49/apply-review.cjs\` 預覽；\`--apply\` 套用。整份資料必須精確符合前或後快照，才允許套用。\n\n${evidence}\n`);
    const intro = `# 838 筆舊遊戲平台查核\n\n最新重查：2026-10-19。原 838 筆紀錄中 ${legacy.summary.verified} 筆核實、${legacy.summary.partial} 筆部分核實、${legacy.summary.unresolved} 筆未解；含 2 筆已合併重複紀錄。目前目錄 ${catalog.games.length} 筆。\n\n最新 49 筆逐筆官方證據、別名與合併依據見 [重查報告](recheck-49/README.md)；歷史 384 筆見 [歷史報告](recheck-384/README.md)。原 128 筆已查核資料保持原樣。\n\n原始紀錄見 [audit-838.json](audit-838.json)，未解清單見 [pending.json](pending.json)。平台是已證實的發行範圍，不等於現在可購買或適用所有系統版本；未安裝各平台遊戲實測。\n\n| 遊戲 | 原資料 | 目前資料 | 狀態 |\n|---|---|---|---|\n`;
    fs.writeFileSync(path.join(dir, '../README.md'), intro + legacy.records.filter(row => row.changed || row.mergedInto).map(row => `| ${escape(row.name)}${row.mergedInto ? ` → ${escape(row.mergedInto)}` : ''} | ${escape(row.before)} | ${escape(row.after)} | ${row.status} |`).join('\n') + '\n');
    console.log('Applied reviewed records and wrote audit evidence.');
}
