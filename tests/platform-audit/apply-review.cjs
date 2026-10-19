// Apply only reviewed platform fields; never infer missing platforms from search results.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const baseline = read(path.join(__dirname, 'baseline-838.json'));
const originalReviews = ['a', 'b', 'c', 'd'].flatMap(group => read(path.join(__dirname, `review-${group}.json`)));
const recheckDir = path.join(__dirname, 'recheck-384');
const recheckBaseline = read(path.join(recheckDir, 'baseline.json'));
const rechecks = ['a', 'b', 'c', 'd'].flatMap(group => read(path.join(recheckDir, `review-${group}.json`)));
assert.equal(rechecks.length, 384, 'Finish all 384 rechecks before applying');
assert.equal(new Set(rechecks.map(row => row.auditIndex)).size, 384);
const recheckById = new Map(rechecks.map(row => [row.auditIndex, row]));
for (const before of recheckBaseline.records) {
    const row = recheckById.get(before.auditIndex);
    assert.equal(row?.name, before.name);
    assert.equal(row.reviewIndex, before.reviewIndex);
    assert.equal(row.checkedAt, '2026-10-19');
    assert.ok(row.resolvedGap, `Missing gap disposition: ${row.name}`);
}
const reviews = originalReviews.map(row => recheckById.get(row.auditIndex) || row)
    .sort((a, b) => a.auditIndex - b.auditIndex);
assert.equal(reviews.length, 838);
assert.equal(new Set(reviews.map(row => row.auditIndex)).size, 838);
const catalogPath = path.join(root, 'games.json');
const originalText = fs.readFileSync(catalogPath, 'utf8');
const catalog = JSON.parse(originalText);
assert.notEqual(catalog.curation.platformRecheckFile, 'tests/platform-audit/recheck-49/audit-49.json', 'Use recheck-49/apply-review.cjs for the latest catalog; do not replay the historical 384 review');
assert.equal(catalog.games.length, baseline.baselineCount);
const normalizePlatform = value => [...new Set(value.split(/[、/]/).map(part => part.trim().replace(/^Mac$/, 'macOS')).filter(Boolean))].join('/');
const platformSet = value => normalizePlatform(value).split('/').sort().join('/');
const releaseStatusMap = { announced: 'upcoming', 'service-ended': 'retired', discontinued: 'retired', 'online-service-ended': 'offline-only' };
const allowedReleaseStatuses = new Set(['released', 'upcoming', 'early-access', 'playtest', 'retired', 'offline-only']);
const mutable = new Set(['platform', 'platformNote', 'platformSources', 'platformReviewedAt', 'platformReviewStatus', 'platformVerifiedAt', 'releaseStatus', 'releaseDate']);
const records = reviews.map(row => {
    const before = baseline.pending[row.auditIndex];
    assert.equal(row.name, before.name, `Wrong identity at ${row.auditIndex}`);
    assert.ok(['verified', 'partial', 'unresolved'].includes(row.status));
    assert.match(row.checkedAt, /^2026-10-1[89]$/);
    assert.ok(Array.isArray(row.sources));
    assert.ok(row.sources.every(url => new URL(url).protocol === 'https:'));
    if (row.status === 'verified') assert.ok(row.sources.length && row.platformNote);
    else if (row.status === 'partial') assert.ok(row.safePlatform, `Missing safe platform: ${row.name}`);
    const game = catalog.games.find(game => game.name === row.name);
    assert.ok(game, row.name);
    for (const [key, value] of Object.entries(before)) {
        if (key === 'alias' && row.identityCorrection?.aliases) {
            assert.ok(row.identityCorrection.reason && row.sources.length);
            assert.ok(Array.isArray(row.identityCorrection.aliases) && row.identityCorrection.aliases.every(alias => typeof alias === 'string' && alias.trim()));
            assert.ok(JSON.stringify(game.alias) === JSON.stringify(value) || JSON.stringify(game.alias) === JSON.stringify(row.identityCorrection.aliases), `${row.name}: unexpected alias drift`);
        } else if (key !== 'auditIndex' && !mutable.has(key)) assert.deepEqual(game[key], value, `${row.name}: unexpected ${key} change`);
    }
    const recheckBefore = recheckBaseline.records.find(item => item.auditIndex === row.auditIndex);
    const platform = row.status === 'unresolved' && !row.allowUnresolvedPlatformCorrection
        ? (recheckBefore?.game.platform || before.platform) : normalizePlatform(row.safePlatform ?? row.platform);
    if (row.allowUnresolvedPlatformCorrection) assert.ok(row.status === 'unresolved' && row.sources.length && row.resolvedGap);
    if (row.identityCorrection?.aliases) game.alias = row.identityCorrection.aliases;
    const note = [...new Set([row.platformNote, row.safePlatformNote].filter(Boolean))].join('；');
    Object.assign(game, {
        platform, platformNote: note, platformSources: [...new Set(row.sources)],
        platformReviewedAt: row.checkedAt, platformReviewStatus: row.status
    });
    if (row.status === 'verified') game.platformVerifiedAt = row.checkedAt;
    else delete game.platformVerifiedAt;
    const releaseStatus = releaseStatusMap[row.releaseStatus] || row.releaseStatus;
    if (allowedReleaseStatuses.has(releaseStatus)) game.releaseStatus = releaseStatus;
    if (row.releaseDate) { assert.match(row.releaseDate, /^\d{4}-\d{2}-\d{2}$/); game.releaseDate = row.releaseDate; }
    return {
        auditIndex: row.auditIndex, name: row.name, status: row.status,
        before: before.platform, after: game.platform,
        changed: platformSet(before.platform) !== platformSet(game.platform),
        note, sources: game.platformSources, checkedAt: row.checkedAt,
        ...(row.allowUnresolvedPlatformCorrection ? { unresolvedCorrection: row.resolvedGap } : {}),
        ...(row.identityCorrection?.aliases ? { aliasCorrection: { before: before.alias, after: game.alias, reason: row.identityCorrection.reason } } : {})
    };
});
const summary = {
    total: catalog.games.length, reviewed: records.length,
    verified: records.filter(row => row.status === 'verified').length,
    partial: records.filter(row => row.status === 'partial').length,
    unresolved: records.filter(row => row.status === 'unresolved').length,
    platformChanges: records.filter(row => row.changed).length,
    priorReviewedPreserved: catalog.games.length - records.length
};
const preserved = read(path.join(recheckDir, 'preserved-582.json'));
assert.equal(preserved.length, 582);
for (const before of preserved) {
    assert.deepEqual(catalog.games.find(game => game.name === before.name), before, `${before.name}: out-of-scope record changed`);
}
catalog.version = '2.6.0';
catalog.lastUpdated = '2026-10-19';
catalog.curation.platformCoverage = `本批 ${summary.reviewed} 筆舊資料均有查核紀錄：${summary.verified} 筆平台已核實、${summary.partial} 筆部分核實、${summary.unresolved} 筆版本或來源待釐清；${summary.platformChanges} 筆有平台更正或補充。partial/unresolved 不代表完整認證；保留未證實舊欄位時明確警示。區分原生、相容、雲端、地區及停服狀態。`;
catalog.curation.platformAuditFile = 'tests/platform-audit/audit-838.json';
catalog.curation.platformRecheckFile = 'tests/platform-audit/recheck-384/audit-384.json';
const recheckRecords = recheckBaseline.records.map(before => {
    const after = records.find(row => row.auditIndex === before.auditIndex);
    return { ...after, reviewIndex: before.reviewIndex, previousStatus: before.status,
        before: before.game.platform, changed: platformSet(before.game.platform) !== platformSet(after.after),
        resolvedGap: recheckById.get(before.auditIndex).resolvedGap };
});
const recheckSummary = {
    reviewed: 384, verified: recheckRecords.filter(row => row.status === 'verified').length,
    partial: recheckRecords.filter(row => row.status === 'partial').length,
    unresolved: recheckRecords.filter(row => row.status === 'unresolved').length,
    platformChanges: recheckRecords.filter(row => row.changed).length,
    aliasCorrections: recheckRecords.filter(row => row.aliasCorrection).length,
    otherRecordsPreserved: catalog.games.length - 384
};
const audit = {
    asOf: '2026-10-19', completedAt: '2026-10-19', baselineFile: 'baseline-838.json', summary,
    method: '先處理熱門作品；逐筆查官方商品、發行公告及支援資料。只套用有證據的更正；來源不足不視為平台不存在，版本不明保留原值並禁止自動判定。平台變更計數忽略順序、分隔符與 Mac/macOS 同義差異。',
    records
};
const markdown = [
    '# 838 筆舊遊戲平台查核', '',
    '初次查核基準為 2026-10-18；384 筆補證與整合更新至 2026-10-19。', '',
    `共 ${summary.reviewed} 筆逐筆查核；${summary.verified} 筆已核實、${summary.partial} 筆部分核實、${summary.unresolved} 筆未解。${summary.platformChanges} 筆平台更正／補充；原有 ${summary.priorReviewedPreserved} 筆已查核資料保留。`, '',
    '「部分核實」表示已找到一些平台的官方證據，但完整世代、版本、地區或發行狀態仍有缺口；不算完整平台認證。未解項目可能有名稱／別名衝突，不自動替使用者選定版本。', '',
    '平台清單區分原生、雲端及相容；區域商店上架不保證台灣帳號可購買。停服作品保留歷史平台並加狀態。沒有啟動遊戲或逐平台安裝實測。', '',
    '逐筆證據與前後值見 [audit-838.json](audit-838.json)，尚需補證項目見 [pending.json](pending.json)。A/B/C/D 研究檔保留候選與安全套用值，以便後續複核。', '',
    '## 已套用的平台更正', '',
    '| 遊戲 | 原資料 | 套用後 | 查核狀態 |', '|---|---|---|---|',
    ...records.filter(row => row.changed).map(row => `| ${row.name.replaceAll('|', '\\|')} | ${row.before.replaceAll('|', '\\|')} | ${row.after.replaceAll('|', '\\|')} | ${row.status} |`), '',
    '## 逐筆來源', '',
    ...records.map(row => `- **${row.auditIndex + 1}. ${row.name}**（${row.status}）：${row.note} ${row.sources.map((url, i) => `[來源 ${i + 1}](${url})`).join('、') || '尚無可確認的官方來源。'}`), ''
].join('\n');
if (process.argv.includes('--apply')) {
    // Preserve untouched game lines, including formatting and fields outside this audit.
    const byName = new Map(catalog.games.map(game => [game.name, game]));
    const targetNames = new Set(records.map(row => row.name));
    const gameLines = originalText.split(/\r?\n/).filter(line => /^\s*\{"name":/.test(line)).map(line => {
        const comma = line.trimEnd().endsWith(',');
        const old = JSON.parse(line.trim().replace(/,$/, ''));
        return targetNames.has(old.name) ? `    ${JSON.stringify(byName.get(old.name))}${comma ? ',' : ''}` : line;
    });
    assert.equal(gameLines.length, catalog.games.length, 'Unexpected catalog layout');
    const { games, ...header } = catalog;
    const text = JSON.stringify(header, null, 2).replace(/\n}$/, ',\n  "games": [\n') + gameLines.join('\n') + '\n  ]\n}\n';
    assert.deepEqual(JSON.parse(text), catalog);
    fs.writeFileSync(catalogPath, text);
    fs.writeFileSync(path.join(__dirname, 'audit-838.json'), JSON.stringify(audit, null, 2) + '\n');
    fs.writeFileSync(path.join(__dirname, 'pending.json'), JSON.stringify(records.filter(row => row.status !== 'verified'), null, 2) + '\n');
    fs.writeFileSync(path.join(__dirname, 'README.md'), markdown);
    fs.writeFileSync(path.join(recheckDir, 'audit-384.json'), JSON.stringify({ asOf: '2026-10-19', baselineFile: 'baseline.json', summary: recheckSummary, records: recheckRecords }, null, 2) + '\n');
    fs.writeFileSync(path.join(recheckDir, 'README.md'), [
        '# 剩餘 384 筆平台補證', '', '查核日期：2026-10-19。熱門作品優先，其餘逐筆完成第二輪搜尋。', '',
        `本輪 ${recheckSummary.verified} 筆已核實、${recheckSummary.partial} 筆部分核實、${recheckSummary.unresolved} 筆身分或版本待確認；${recheckSummary.platformChanges} 筆更正／補充平台，${recheckSummary.aliasCorrections} 筆修正錯配別名。其他 ${recheckSummary.otherRecordsPreserved} 筆遊戲不變。`, '',
        '已核實是指記錄所界定版本的平台證據，不等於每區仍可購買、仍在營運或已安裝實測。相容、雲端、舊版及擴充版差異逐筆註明。未公布平台不以推測填入；系列或歧義名稱不任選一代。', '',
        '原值與前次結果保存在 [baseline.json](baseline.json)，完整差異見 [audit-384.json](audit-384.json)。未結項目仍列在 [pending.json](../pending.json)。', '',
        ...recheckRecords.map(row => `## ${row.reviewIndex + 1}. ${row.name}\n\n狀態：${row.previousStatus} → ${row.status}\n\n平台：${row.before} → ${row.after}\n\n${row.note}\n\n${row.aliasCorrection ? `別名修正：${row.aliasCorrection.reason}\n\n` : ''}${row.sources.map((url, i) => `- [官方來源 ${i + 1}](${url})`).join('\n')}\n`)
    ].join('\n'));
    const a = rechecks.filter(row => row.reviewIndex < 96).sort((a, b) => a.reviewIndex - b.reviewIndex);
    fs.writeFileSync(path.join(recheckDir, 'review-a.md'), '# A 組第二輪平台查核\n\n' + a.map(row => `## ${row.reviewIndex + 1}. ${row.name}\n\n狀態：${row.status}；安全平台：${row.safePlatform ?? row.platform}\n\n${row.platformNote}\n\n${row.sources.map((url, i) => `- [來源 ${i + 1}](${url})`).join('\n')}\n`).join('\n'));
}
console.log(JSON.stringify(summary, null, 2));
console.log(JSON.stringify({ recheck: recheckSummary }, null, 2));
