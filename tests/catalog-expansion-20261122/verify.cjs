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
assert.equal(html, read('tests/catalog-expansion-20261122/index-before.html').replaceAll('4.16.0', '4.17.0'));
assert.equal(read('sw.js'), read('tests/catalog-expansion-20261122/sw-before.js').replace("CACHE_VERSION = '28'", "CACHE_VERSION = '29'"));
for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (!/\bsrc\s*=/.test(match[1]) && match[2].trim()) new vm.Script(match[2]);
}
new vm.Script(read('sw.js'));
for (const file of ['tests/regression.cjs', 'tests/catalog-expansion-20261122/apply-expansion.cjs']) execFileSync(process.execPath, ['--check', path.join(root, file)]);
const files = ['games.json', 'tests/platform-audit/audit-838.json', 'tests/catalog-expansion-20261122/audit.json', 'tests/catalog-expansion-20261122/duplicate-check.json', 'tests/catalog-expansion-20261122/README.md', 'tests/catalog-expansion-20261122/pending-platforms.json'];
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
const hashes = Object.fromEntries(files.map(file => [file, hash(file)]));
const protectedFiles = ['tests/platform-audit/pending.json', 'tests/catalog-expansion-20261019/pending-platforms.json', 'tests/catalog-expansion-20261019-2/pending-platforms.json'];
const protectedHashes = Object.fromEntries(protectedFiles.map(file => [file, hash(file)]));
assert.equal(protectedHashes['tests/platform-audit/pending.json'], hash('tests/catalog-expansion-20261122/pending-before.json'));
assert.equal(protectedHashes['tests/catalog-expansion-20261019/pending-platforms.json'], hash('tests/catalog-expansion-20261122/previous-expansion-pending-before.json'));
assert.equal(protectedHashes['tests/catalog-expansion-20261019-2/pending-platforms.json'], hash('tests/catalog-expansion-20261122/expansion-2-pending-before.json'));
execFileSync(process.execPath, [path.join(__dirname, 'apply-expansion.cjs'), '--apply']);
for (const file of files) assert.equal(hash(file), hashes[file], `Repeat apply changed ${file}`);
for (const file of protectedFiles) assert.equal(hash(file), protectedHashes[file]);
const audit = json('tests/catalog-expansion-20261122/audit.json');
const before = json('tests/catalog-expansion-20261122/catalog-before.json');
const after = json('games.json');
for (const game of before.games) assert.deepEqual(after.games.find(item => item.name === game.name), game);
assert.equal(after.games.length, before.games.length + audit.records.length);
const result = { checkedAt: '2026-11-22', summary: audit.summary, syntax: 'PASS', appChanges: 'version only (4.16.0 -> 4.17.0, cache 28 -> 29)',
    repeatApplyIdenticalFiles: files.length, pendingByteIdentical: true,
    officialPlatformLinks: new Set(audit.records.flatMap(row => row.game.platformSources)).size,
    evidenceEntries: audit.records.reduce((sum, row) => sum + row.evidence.length, 0),
    popularityEntries: audit.records.reduce((sum, row) => sum + row.popularityEvidence.length, 0), hashes };
fs.writeFileSync(path.join(__dirname, 'validation-hashes.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
