// Release-status recheck B (2026-11-22): the ten remaining "upcoming" entries were rechecked;
// only Phantom Blade Zero has launched. Its platforms (PC/PS5) and the 838-audit platform review
// fields stay unchanged; only release fields, the platform note and launch sources change.
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
        name: 'Phantom Blade Zero',
        set: {
            releaseStatus: 'released',
            releaseNote: '2026-10-29 於 PS5 與 PC（Steam）發售；Steam 依美國時區顯示 2026-10-28。截至 2026-11-22 未推出 Xbox 版。',
            platformNote: '已確認 PC（Steam，Windows）與 PS5（無 PS4 版），兩平台皆已於 2026-10-28／29 上市；未找到官方 Xbox 版商品頁或公告。'
        },
        addSources: [
            'https://store.steampowered.com/api/appdetails?appids=4115450&l=english',
            'https://store.steampowered.com/app/4115450/Phantom_Blade_Zero/',
            'https://store.playstation.com/en-us/concept/10017620'
        ],
        evidence: [
            { source: 'https://store.steampowered.com/api/appdetails?appids=4115450&l=english', finding: 'Steam 商店 API 回傳「Phantom Blade Zero」，平台 Windows，發售日 Oct 28, 2026，coming_soon 為 false；繁中名稱「影之刃零」；recommendations.total 124018（2026-11-22）。' },
            { source: 'https://store.steampowered.com/app/4115450/Phantom_Blade_Zero/', finding: 'Steam 商店頁顯示已於 2026-10-28 發售，可加入購物車（標準版與數位豪華版），開發 S-GAME。' },
            { source: 'https://store.playstation.com/en-us/concept/10017620', finding: 'PlayStation Store 美國頁 PS5 版，發售日 2026/10/29，提供加入購物車；playstation.com 商品頁註明只有 PS5、無 PS4 版。' }
        ]
    }
];
const MUTABLE = new Set(['releaseStatus', 'releaseNote', 'releaseDate', 'sources', 'platformNote']);
// Rechecked with no change: still unreleased, or no official evidence of a change.
const UNCHANGED = [
    { name: '巫師 重製版', finding: 'CD PROJEKT 2026 上半年財報頁未提供日期或平台；媒體稱暫緩，但未讀到官方頁面，維持原狀。' },
    { name: 'Project Mugen', finding: '官網、PS Store、App Store 仍列 2027-01-15 全球上市，平台不變。' },
    { name: 'Light No Fire', finding: 'Steam 仍顯示發售日待公告。' },
    { name: 'Project: The Perceiver', finding: '官方頁只寫多平台、無日期；本次未能在官方頁重新確認既有 PS5／PS4，也無反證，維持原狀。' },
    { name: 'Ballad of Antara', finding: 'PS Store 仍為已公布、只能加入願望清單，未見新日期；取消傳聞未有官方證實。' },
    { name: 'Intergalactic: The Heretic Prophet', finding: 'PlayStation 頁發售日仍為未定；Naughty Dog 2026-09-28 部落格稱 2027 年才完整公開。' },
    { name: 'Fable（Playground Games 重啟版）', finding: 'Xbox、PS Store 與 Steam 仍列 2027-02-23，平台不變。' },
    { name: 'State of Decay 3', finding: 'Xbox 頁列 2027 年，Steam 與 PS Store 仍為待公告。' },
    { name: 'Haunted Chocolatier', finding: '官方部落格 2026-08-30 仍稱完成時才推出，無日期。' }
];

const catalog = structuredClone(before);
const records = RECORDS.map(spec => {
    const original = baseline.find(game => game.name === spec.name);
    const game = catalog.games.find(item => item.name === spec.name);
    assert.ok(original && game, `Missing entry: ${spec.name}`);
    assert.deepEqual(game, original, `Baseline drift: ${spec.name}`);
    assert.equal(original.releaseStatus, 'upcoming');
    assert.ok(spec.evidence.every(item => item.finding && spec.addSources.includes(item.source)));
    const changes = {};
    const change = (key, after) => { assert.ok(MUTABLE.has(key), `Unexpected field ${key}`); changes[key] = { before: original[key] ?? null, after }; if (after === null) delete game[key]; else game[key] = after; };
    for (const [key, value] of Object.entries(spec.set)) change(key, value);
    change('sources', [...new Set([...(original.sources || []), ...spec.addSources])]);
    return { name: spec.name, checkedAt: DATE, changes, evidence: spec.evidence, platform: game.platform };
});
for (const row of UNCHANGED) {
    const game = catalog.games.find(item => item.name === row.name);
    assert.ok(game && game.releaseStatus === 'upcoming', `Unchanged entry missing or not upcoming: ${row.name}`);
}
for (const game of before.games) if (!RECORDS.some(spec => spec.name === game.name)) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
const summary = { checked: RECORDS.length + UNCHANGED.length, released: records.length, unchanged: UNCHANGED.length, platformChanges: 0, aliasChanges: 0 };
const actual = read(path.join(root, 'games.json'));
try { assert.deepEqual(actual, before); } catch { assert.deepEqual(actual, catalog, 'Catalog drift: refuse to overwrite independent edits'); }
console.log(JSON.stringify(summary, null, 2));
if (process.argv.includes('--apply')) {
    const header = JSON.stringify({ ...catalog, games: [] }, null, 2).replace(/  "games": \[\]\n}$/, '  "games": [');
    fs.writeFileSync(path.join(root, 'games.json'), header + '\n' + catalog.games.map(game => '    ' + JSON.stringify(game)).join(',\n') + '\n  ]\n}\n');
    fs.writeFileSync(path.join(__dirname, 'audit.json'), JSON.stringify({ asOf: DATE, summary, records, unchanged: UNCHANGED.map(row => ({ ...row, checkedAt: DATE })) }, null, 2) + '\n');
}
