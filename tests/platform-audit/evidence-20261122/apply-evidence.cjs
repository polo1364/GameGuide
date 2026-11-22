// Platform-evidence recheck (2026-11-22): 勇氣默示錄 listed PC / Xbox Series X|S for the HD Remaster
// on the strength of pre-launch announcements only. Its launch is now confirmed on Steam and the Xbox
// store, so launch evidence is added and the review dates move to this check. Platforms stay unchanged.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../../..');
const DATE = '2026-11-22';
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const before = read(path.join(__dirname, 'catalog-before.json'));
const baseline = read(path.join(__dirname, 'baseline.json'));

const RECORDS = [
    {
        name: '勇氣默示錄',
        set: {
            platformNote: '原版為 3DS；HD Remaster（BRAVELY DEFAULT FLYING FAIRY HD Remaster）於 Switch 2 首發，2026-03-12 起另有 Steam 與 Xbox Series X|S／Xbox on PC 版，查核日皆已上市。Xbox 商店後台資料另帶 Xbox One 標記，但 Square Enix 官方平台清單只列 Series X|S，故不列 Xbox One；無 PlayStation 版。',
            platformReviewedAt: DATE,
            platformVerifiedAt: DATE
        },
        addPlatformSources: [
            'https://store.steampowered.com/api/appdetails?appids=2833580&l=english',
            'https://www.xbox.com/en-US/games/store/bravely-default-flying-fairy-hd-remaster/9pm196h6rfjb',
            'https://news.xbox.com/en-us/2026/03/12/bravely-default-remaster-tips/'
        ],
        evidence: [
            { source: 'https://www.square-enix.com/asia/newsportal/en/topics/bdffhd/post08.html', finding: 'Square Enix 亞洲官方新聞頁列出平台 Nintendo Switch 2／Steam／XBOX Series X|S／XBOX on PC；Switch 2 版隨主機發售，Steam 與 Xbox 版發售日 2026/3/13。' },
            { source: 'https://store.steampowered.com/api/appdetails?appids=2833580&l=english', finding: 'Steam 商店 API 回傳「BRAVELY DEFAULT FLYING FAIRY HD Remaster」（app 2833580），平台 Windows，發售日 Mar 12, 2026；繁中名稱「勇氣默示錄 FLYING FAIRY HD Remaster」；recommendations.total 849（2026-11-22）。' },
            { source: 'https://www.xbox.com/en-US/games/store/bravely-default-flying-fairy-hd-remaster/9pm196h6rfjb', finding: 'Xbox 美國商店頁：發行商 SQUARE ENIX，releaseDate 2026-03-12T17:00Z，功能列 Optimized for Xbox Series X|S、Xbox Play Anywhere；頁面資料的 availableOn 另含 XboxOne，但頁面說明註明 Xbox One 標記不代表支援。' },
            { source: 'https://news.xbox.com/en-us/2026/03/12/bravely-default-remaster-tips/', finding: 'Xbox Wire 2026-03-12 文章標題稱本作已推出（Available Now）。' }
        ]
    }
];
const MUTABLE = new Set(['platformNote', 'platformSources', 'platformReviewedAt', 'platformVerifiedAt']);

const catalog = structuredClone(before);
const records = RECORDS.map(spec => {
    const original = baseline.find(game => game.name === spec.name);
    const game = catalog.games.find(item => item.name === spec.name);
    assert.ok(original && game, `Missing entry: ${spec.name}`);
    assert.deepEqual(game, original, `Baseline drift: ${spec.name}`);
    assert.equal(original.platformReviewStatus, 'verified');
    const changes = {};
    const change = (key, after) => { assert.ok(MUTABLE.has(key), `Unexpected field ${key}`); changes[key] = { before: original[key] ?? null, after }; game[key] = after; };
    for (const [key, value] of Object.entries(spec.set)) change(key, value);
    change('platformSources', [...new Set([...(original.platformSources || []), ...spec.addPlatformSources])]);
    assert.ok(spec.evidence.every(item => item.finding && game.platformSources.includes(item.source)));
    assert.ok(game.platformSources.every(source => new URL(source).protocol === 'https:'));
    return { name: spec.name, checkedAt: DATE, platform: game.platform, changes, evidence: spec.evidence };
});
for (const game of before.games) if (!RECORDS.some(spec => spec.name === game.name)) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
const summary = { checked: records.length, platformChanges: 0, evidenceAdded: records.reduce((sum, row) => sum + row.changes.platformSources.after.length - (row.changes.platformSources.before || []).length, 0) };
const actual = read(path.join(root, 'games.json'));
try { assert.deepEqual(actual, before); } catch { assert.deepEqual(actual, catalog, 'Catalog drift: refuse to overwrite independent edits'); }
console.log(JSON.stringify(summary, null, 2));
if (process.argv.includes('--apply')) {
    const header = JSON.stringify({ ...catalog, games: [] }, null, 2).replace(/  "games": \[\]\n}$/, '  "games": [');
    fs.writeFileSync(path.join(root, 'games.json'), header + '\n' + catalog.games.map(game => '    ' + JSON.stringify(game)).join(',\n') + '\n  ]\n}\n');
    fs.writeFileSync(path.join(__dirname, 'audit.json'), JSON.stringify({ asOf: DATE, summary, records }, null, 2) + '\n');
}
