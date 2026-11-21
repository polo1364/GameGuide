// Release-status recheck (2026-11-22): two October entries whose scheduled dates have passed.
// Only the listed fields of these two entries change; every other catalog entry must stay identical.
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
        name: 'FINAL FANTASY RESONANCE',
        set: {
            releaseStatus: 'released',
            releaseNote: '2026-10-22 於 PC（Steam）、PS5、Nintendo Switch 與 Nintendo Switch 2 發售；Xbox 商店頁顯示 2026-11-06，確切 Xbox 上市日未能與其他商店對齊，但截至 2026-11-22 各平台皆已上市。',
            platformNote: '已確認 PC（Steam，Windows）、PS5、Xbox Series X|S（Play Anywhere，無 Xbox One）、Nintendo Switch 與 Nintendo Switch 2；Switch 與 Switch 2 為不同商品，存檔不互通、無升級包。',
            platformReviewedAt: DATE,
            platformReviewStatus: 'verified',
            platformVerifiedAt: DATE
        },
        remove: ['releaseDate'],
        addSources: [
            'https://store.steampowered.com/api/appdetails?appids=3259780&l=english',
            'https://store.playstation.com/en-us/concept/10015961',
            'https://www.xbox.com/en-US/games/store/final-fantasy-resonance/9N8JS091F5G0',
            'https://www.nintendo.com/us/store/products/final-fantasy-resonance-switch/',
            'https://www.nintendo.com/en-ca/store/products/final-fantasy-resonance-switch-2/'
        ],
        evidence: [
            { source: 'https://store.steampowered.com/api/appdetails?appids=3259780&l=english', finding: 'Steam 商店 API 回傳「FINAL FANTASY RESONANCE」，平台 Windows，發售日 Oct 22, 2026，coming_soon 為 false；recommendations.total 6553（2026-11-22）。' },
            { source: 'https://store.playstation.com/en-us/concept/10015961', finding: 'PlayStation Store 美國頁列出 PS5 版，發售日 2026/10/22，標準版與 Digital Deluxe 版，另有免費試玩版。' },
            { source: 'https://www.xbox.com/en-US/games/store/final-fantasy-resonance/9N8JS091F5G0', finding: 'Xbox 商店支援 Xbox Series X|S 與 PC（Play Anywhere），無 Xbox One；頁面顯示日期 2026/11/6。' },
            { source: 'https://www.nintendo.com/us/store/products/final-fantasy-resonance-switch/', finding: '任天堂美國頁 Nintendo Switch 版，2026/10/22 發售；註明另有 Switch 2 版、無升級包且存檔不互通。' },
            { source: 'https://www.nintendo.com/en-ca/store/products/final-fantasy-resonance-switch-2/', finding: '任天堂加拿大頁 Nintendo Switch 2 版（不能在 Switch 遊玩），2026/10/22 發售。' }
        ]
    },
    {
        name: 'Call of Duty: Modern Warfare 4',
        set: {
            releaseStatus: 'released',
            releaseNote: '2026-10-23 正式發售（PlayStation Store 依時區顯示 2026-10-22）；預購或購買數位版者自 2026-10-16 可先玩戰役。',
            platformNote: '已確認 PC（Windows）、PS5、Xbox Series X|S 與 Nintendo Switch 2；官方商店明載不提供 PS4、Xbox One 與初代 Nintendo Switch 版。',
            platformReviewedAt: DATE,
            platformReviewStatus: 'verified',
            platformVerifiedAt: DATE
        },
        remove: ['releaseDate'],
        addSources: [
            'https://store.steampowered.com/api/appdetails?appids=4435490&l=english',
            'https://store.playstation.com/en-gb/product/EP0002-PPSA07950_00-CODMW4STANDARD01',
            'https://www.xbox.com/en-US/games/store/call-of-duty-modern-warfare-4/9NCPSQQD1Z66/0017',
            'https://www.nintendo.com/us/whatsnew/call-of-duty-r-modern-warfare-r-4-is-out-now-for-nintendo-switch-2-stay-frosty/',
            'https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/Call-of-Duty-Modern-Warfare-4-3108128.html'
        ],
        evidence: [
            { source: 'https://store.steampowered.com/api/appdetails?appids=4435490&l=english', finding: 'Steam 商店 API 回傳「Call of Duty®: Modern Warfare® 4」，平台 Windows，發售日 Oct 22, 2026，coming_soon 為 false；recommendations.total 12648（2026-11-22）。' },
            { source: 'https://store.playstation.com/en-gb/product/EP0002-PPSA07950_00-CODMW4STANDARD01', finding: 'PlayStation Store 英國頁註明「Available on PS5, not available on PS4」，發售日 2026/10/22，標準版與 Vault 版。' },
            { source: 'https://www.xbox.com/en-US/games/store/call-of-duty-modern-warfare-4/9NCPSQQD1Z66/0017', finding: 'Xbox 商店註明可在 Xbox Series X|S 與 Xbox on PC 遊玩、不支援 Xbox One，並販售 Windows 版。' },
            { source: 'https://www.nintendo.com/us/whatsnew/call-of-duty-r-modern-warfare-r-4-is-out-now-for-nintendo-switch-2-stay-frosty/', finding: '任天堂美國 2026-10-23 公告 Call of Duty: Modern Warfare 4 已於 Nintendo Switch 2 推出。' },
            { source: 'https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/Call-of-Duty-Modern-Warfare-4-3108128.html', finding: '任天堂英國頁為 Nintendo Switch 2 版，說明完整遊戲 10 月 23 日推出，初代 Switch 不提供。' }
        ]
    }
];
const MUTABLE = new Set(['releaseStatus', 'releaseNote', 'releaseDate', 'sources', 'platformNote', 'platformSources', 'platformReviewedAt', 'platformReviewStatus', 'platformVerifiedAt']);

const catalog = structuredClone(before);
const records = RECORDS.map(spec => {
    const original = baseline.find(game => game.name === spec.name);
    const game = catalog.games.find(item => item.name === spec.name);
    assert.ok(original && game, `Missing entry: ${spec.name}`);
    assert.deepEqual(game, original, `Baseline drift: ${spec.name}`);
    assert.equal(original.releaseStatus, 'upcoming');
    assert.ok(original.releaseDate <= DATE, `${spec.name} is not past its scheduled date`);
    assert.ok(spec.evidence.every(item => item.finding && spec.addSources.includes(item.source)));
    const changes = {};
    const change = (key, after) => { assert.ok(MUTABLE.has(key), `Unexpected field ${key}`); changes[key] = { before: original[key] ?? null, after }; if (after === null) delete game[key]; else game[key] = after; };
    for (const [key, value] of Object.entries(spec.set)) change(key, value);
    for (const key of spec.remove) change(key, null);
    change('sources', [...new Set([...original.sources, ...spec.addSources])]);
    change('platformSources', spec.addSources);
    return { name: spec.name, checkedAt: DATE, changes, evidence: spec.evidence, platform: game.platform };
});
for (const game of before.games) if (!RECORDS.some(spec => spec.name === game.name)) assert.deepEqual(catalog.games.find(item => item.name === game.name), game);
assert.equal(catalog.games.length, before.games.length);
const summary = { checked: records.length, released: records.length, platformChanges: 0, aliasChanges: 0, unchangedEntries: before.games.length - records.length };
catalog.lastUpdated = DATE;
const actual = read(path.join(root, 'games.json'));
try { assert.deepEqual(actual, before); } catch { assert.deepEqual(actual, catalog, 'Catalog drift: refuse to overwrite independent edits'); }
console.log(JSON.stringify(summary, null, 2));
if (process.argv.includes('--apply')) {
    const header = JSON.stringify({ ...catalog, games: [] }, null, 2).replace(/  "games": \[\]\n}$/, '  "games": [');
    fs.writeFileSync(path.join(root, 'games.json'), header + '\n' + catalog.games.map(game => '    ' + JSON.stringify(game)).join(',\n') + '\n  ]\n}\n');
    fs.writeFileSync(path.join(__dirname, 'audit.json'), JSON.stringify({ asOf: DATE, summary, records }, null, 2) + '\n');
}
