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
assert.equal(html, read('tests/catalog-expansion-20261019/index-before.html').replaceAll('4.12.0', '4.13.0'));
assert.equal(read('sw.js'), read('tests/catalog-expansion-20261019/sw-before.js').replace("CACHE_VERSION = '23'", "CACHE_VERSION = '24'"));
for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (!/\bsrc\s*=/.test(match[1]) && match[2].trim()) new vm.Script(match[2]);
}
new vm.Script(read('sw.js'));
for (const file of ['tests/regression.cjs', 'tests/catalog-expansion-20261019/apply-expansion.cjs']) execFileSync(process.execPath, ['--check', path.join(root, file)]);
const files = ['games.json', 'tests/platform-audit/audit-838.json', 'tests/catalog-expansion-20261019/audit.json', 'tests/catalog-expansion-20261019/duplicate-check.json', 'tests/catalog-expansion-20261019/README.md', 'tests/catalog-expansion-20261019/pending-platforms.json'];
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
const hashes = Object.fromEntries(files.map(file => [file, hash(file)]));
const pendingHash = hash('tests/platform-audit/pending.json');
assert.equal(pendingHash, hash('tests/catalog-expansion-20261019/pending-before.json'));
execFileSync(process.execPath, [path.join(__dirname, 'apply-expansion.cjs'), '--apply']);
for (const file of files) assert.equal(hash(file), hashes[file]);
assert.equal(hash('tests/platform-audit/pending.json'), pendingHash);
const audit = json('tests/catalog-expansion-20261019/audit.json');
const before = json('tests/catalog-expansion-20261019/catalog-before.json');
const after = json('games.json');
const affected = new Set(audit.merges.flatMap(row => row.originals.map(game => game.name)));
const preserved = before.games.filter(game => !affected.has(game.name));
for (const game of preserved) assert.deepEqual(after.games.find(item => item.name === game.name), game);
assert.equal(preserved.length, audit.summary.existingPreserved);
const mutable = new Set(['alias', 'platformSources', 'identityType', 'identityNote']);
for (const merge of audit.merges) {
    const original = before.games.find(game => game.name === merge.target);
    for (const key of new Set([...Object.keys(original), ...Object.keys(merge.after)])) {
        if (!mutable.has(key)) assert.deepEqual(merge.after[key], original[key], `${merge.target}: ${key}`);
    }
    for (const old of merge.originals) for (const source of old.platformSources) assert.ok(merge.after.platformSources.includes(source));
}
const result = { checkedAt: '2026-10-19', summary: audit.summary, syntax: 'PASS', appChanges: 'version only',
    repeatApplyIdenticalFiles: files.length, pendingByteIdentical: true,
    officialPlatformLinks: new Set(audit.records.flatMap(row => row.game.platformSources)).size,
    evidenceEntries: audit.records.reduce((sum, row) => sum + row.evidence.length, 0),
    popularityEntries: audit.records.reduce((sum, row) => sum + row.popularityEvidence.length, 0), hashes };
fs.writeFileSync(path.join(__dirname, 'validation-hashes.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
