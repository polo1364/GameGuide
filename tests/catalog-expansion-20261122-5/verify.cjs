const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const json = file => JSON.parse(read(file));
const html = read('index.html');
// Besides the version bump, this round adds only the Web (browser) platform name and detection branch.
const webEdits = [
    ["            'steam-deck': 'Steam Deck',\r\n            'retro': '經典主機'", "            'steam-deck': 'Steam Deck',\r\n            'web': '網頁（瀏覽器）',\r\n            'retro': '經典主機'"],
    ["                displayName = '📱 Mobile (iOS/Android)';\r\n            } else if (platforms.includes('new nintendo 3ds')", "                displayName = '📱 Mobile (iOS/Android)';\r\n            } else if (platforms.split('/').some(platform => platform.trim() === 'web')) {\r\n                // Browser games; listed after native platforms so \"Web/PC\" still detects PC.\r\n                targetPlatform = 'web';\r\n                displayName = '🌐 網頁（瀏覽器）';\r\n            } else if (platforms.includes('new nintendo 3ds')"]
];
let expectedHtml = read('tests/catalog-expansion-20261122-5/index-before.html').replaceAll('4.20.0', '4.21.0');
for (const [before, after] of webEdits) { assert.equal(expectedHtml.split(before).length, 2); expectedHtml = expectedHtml.replace(before, after); }
assert.equal(html, expectedHtml);
assert.equal(read('sw.js'), read('tests/catalog-expansion-20261122-5/sw-before.js').replace("CACHE_VERSION = '32'", "CACHE_VERSION = '33'"));
for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (!/\bsrc\s*=/.test(match[1]) && match[2].trim()) new vm.Script(match[2]);
}
new vm.Script(read('sw.js'));
for (const file of ['tests/regression.cjs', 'tests/catalog-expansion-20261122-5/apply-expansion.cjs']) execFileSync(process.execPath, ['--check', path.join(root, file)]);
const files = ['games.json', 'tests/platform-audit/audit-838.json', 'tests/catalog-expansion-20261122-5/audit.json', 'tests/catalog-expansion-20261122-5/duplicate-check.json', 'tests/catalog-expansion-20261122-5/README.md', 'tests/catalog-expansion-20261122-5/pending-platforms.json'];
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
const hashes = Object.fromEntries(files.map(file => [file, hash(file)]));
const protectedFiles = ['tests/platform-audit/pending.json', 'tests/catalog-expansion-20261019/pending-platforms.json', 'tests/catalog-expansion-20261019-2/pending-platforms.json', 'tests/catalog-expansion-20261122/pending-platforms.json', 'tests/catalog-expansion-20261122-2/pending-platforms.json', 'tests/catalog-expansion-20261122-3/pending-platforms.json', 'tests/catalog-expansion-20261122-4/pending-platforms.json'];
const protectedHashes = Object.fromEntries(protectedFiles.map(file => [file, hash(file)]));
assert.equal(protectedHashes['tests/platform-audit/pending.json'], hash('tests/catalog-expansion-20261122-5/pending-before.json'));
assert.equal(protectedHashes['tests/catalog-expansion-20261019/pending-platforms.json'], hash('tests/catalog-expansion-20261122-5/previous-expansion-pending-before.json'));
assert.equal(protectedHashes['tests/catalog-expansion-20261019-2/pending-platforms.json'], hash('tests/catalog-expansion-20261122-5/expansion-2-pending-before.json'));
assert.equal(protectedHashes['tests/catalog-expansion-20261122/pending-platforms.json'], hash('tests/catalog-expansion-20261122-5/expansion-3-pending-before.json'));
assert.equal(protectedHashes['tests/catalog-expansion-20261122-2/pending-platforms.json'], hash('tests/catalog-expansion-20261122-5/expansion-4-pending-before.json'));
assert.equal(protectedHashes['tests/catalog-expansion-20261122-3/pending-platforms.json'], hash('tests/catalog-expansion-20261122-5/expansion-5-pending-before.json'));
assert.equal(protectedHashes['tests/catalog-expansion-20261122-4/pending-platforms.json'], hash('tests/catalog-expansion-20261122-5/expansion-6-pending-before.json'));
execFileSync(process.execPath, [path.join(__dirname, 'apply-expansion.cjs'), '--apply']);
for (const file of files) assert.equal(hash(file), hashes[file], `Repeat apply changed ${file}`);
for (const file of protectedFiles) assert.equal(hash(file), protectedHashes[file]);
const audit = json('tests/catalog-expansion-20261122-5/audit.json');
const before = json('tests/catalog-expansion-20261122-5/catalog-before.json');
const after = json('games.json');
for (const game of before.games) assert.deepEqual(after.games.find(item => item.name === game.name), game);
assert.equal(after.games.length, before.games.length + audit.records.length);
const result = { checkedAt: '2026-11-22', summary: audit.summary, syntax: 'PASS', appChanges: 'version (4.20.0 -> 4.21.0, cache 32 -> 33) plus Web (browser) platform name and detection',
    repeatApplyIdenticalFiles: files.length, pendingByteIdentical: true,
    officialPlatformLinks: new Set(audit.records.flatMap(row => row.game.platformSources)).size,
    evidenceEntries: audit.records.reduce((sum, row) => sum + row.evidence.length, 0),
    popularityEntries: audit.records.reduce((sum, row) => sum + row.popularityEvidence.length, 0), hashes };
fs.writeFileSync(path.join(__dirname, 'validation-hashes.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
