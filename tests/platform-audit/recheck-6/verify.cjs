const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '../../..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('index.html');
assert.equal(html, read('tests/platform-audit/recheck-6/index-before.html').replaceAll('4.11.0', '4.12.0'));
assert.equal(read('sw.js'), read('tests/platform-audit/recheck-6/sw-before.js').replace("CACHE_VERSION = '22'", "CACHE_VERSION = '23'"));
for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (!/\bsrc\s*=/.test(match[1]) && match[2].trim()) new vm.Script(match[2]);
}
new vm.Script(read('sw.js'));
for (const file of ['tests/regression.cjs', 'tests/platform-audit/recheck-6/apply-review.cjs', 'tests/platform-audit/recheck-6/build-review-a.cjs']) execFileSync(process.execPath, ['--check', path.join(root, file)]);
const files = ['games.json', 'tests/platform-audit/audit-838.json', 'tests/platform-audit/pending.json', 'tests/platform-audit/README.md', 'tests/platform-audit/recheck-6/audit-6.json', 'tests/platform-audit/recheck-6/pending.json', 'tests/platform-audit/recheck-6/README.md'];
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
const hashes = Object.fromEntries(files.map(file => [file, hash(file)]));
execFileSync(process.execPath, [path.join(__dirname, 'apply-review.cjs'), '--apply']);
for (const file of files) assert.equal(hash(file), hashes[file], file);
const audit = JSON.parse(read('tests/platform-audit/recheck-6/audit-6.json'));
const baseline = JSON.parse(read('tests/platform-audit/recheck-6/baseline.json')).records;
const sourcesAdded = audit.records.reduce((sum, row) => sum + row.platformSources.filter(source => !baseline.find(item => item.auditIndex === row.auditIndex).game.platformSources.includes(source)).length, 0);
const result = { checkedAt: '2026-10-19', syntax: 'PASS', appChanges: 'version only', repeatApplyIdenticalFiles: files.length,
    sourcesAdded, evidenceEntries: audit.records.reduce((sum, row) => sum + row.evidence.length, 0),
    searchRecords: audit.records.reduce((sum, row) => sum + row.searched.length, 0), hashes };
fs.writeFileSync(path.join(__dirname, 'validation-hashes.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
