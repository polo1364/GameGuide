const fs = require('node:fs');
const path = require('node:path');
const baseline = JSON.parse(fs.readFileSync(path.join(__dirname, 'baseline.json'), 'utf8')).records;
const archive = 'https://web.archive.org/web/20260411052935/https://www.pathofexile.com/mobile';
const press = 'https://press.cdprojektred.com/en/news/1839/the-witcher-3-wild-hunt-remastered-announced-songs-of-the-past-gets-first-look';
const original = 'https://press.cdprojektred.com/en/news/1105/the-original-witcher-game-is-being-remade-from-the-ground-up';
const rows = baseline.slice(0, 2).map(row => ({ name: row.name, auditIndex: row.auditIndex, status: 'partial', platform: row.game.platform, identityNote: row.game.identityNote, platformSources: [...row.game.platformSources], remainingReason: row.remainingReason, editionOptions: structuredClone(row.game.editionOptions) }));
Object.assign(rows[0], {
    platformNote: 'GGG 官方回顧與 ExileCon 公告確認 Path of Exile Mobile 專案及展場試玩；另取得官方手機頁的 2026-04-11 網頁存檔，原文描述實驗性手機專案，但未列 iOS／Android 或發售日。存檔日期不是新公告日期，也不能證明目前仍在開發。現行頁存取失敗不代表取消；具體系統與近期推出計畫仍待官方確認，發行狀態保持未知。',
    resolvedGap: '新增可讀官方原始手機頁存檔，確認實驗性獨立手機專案的描述；未找到足以補足作業系統與當前發行時程的第一方證據。',
    remainingDetails: '需要 GGG 明確指名 Path of Exile Mobile 的 iOS／Android 支援公告、正式商店商品或近期發行說明。歷史展場試玩、官網共用頁首平台與 2026 存檔時間均不能取代這些資訊。',
    evidence: [
        { source: archive, finding: '成功讀取官方 /mobile 頁的 2026-04-11 存檔 HTML；canonical 指回 GGG 官網，正文稱實驗性手機專案及內部開發，未出現 iOS／Android 或發售日期。存檔是舊文保存，不是 2026 年新宣布開發。' },
        { source: rows[0].platformSources[0], finding: '官方 Community_Team 的 ExileCon 2023 公告確認 Mobile 展場試玩；沒有具體手機作業系統或正式上市日期。' },
        { source: rows[0].platformSources[1], finding: '官方 2019 年回顧確認曾宣布手機專案；不能作為目前發售計畫的證據。' }
    ],
    searched: [
        { query: '"Path of Exile Mobile" "Android" / "iOS"；限定 pathofexile.com、grindinggear.com', result: '未取得具體官方手機 OS 發行清單；第三方標籤與主遊戲的平台欄不採用。' },
        { query: '讀取 https://www.pathofexile.com/mobile 及 Internet Archive 原始頁', result: '現行頁瀏覽工具失敗、原始 HTTPS 請求 403；存檔原始 HTML 回傳 200，保存於 poe-mobile-archive.html，請求狀態見 poe-fetch-results.json。存取失敗不能證明取消。' },
        { query: '"Path of Exile Mobile" GGG official announcement；重讀兩則 GGG 公告', result: '取得官方歷史公告與原頁嵌入的公告影片連結，但未取得新的 OS／上市計畫；保留待確認。' }
    ]
});
rows[0].platformSources.push(archive);
rows[0].editionOptions[0].sources.push(archive);
rows[0].editionOptions[0].scopeNote = '歷史公告與官方原頁存檔可確認手機專案及試玩；存檔日期不證明當前開發狀態，具體 OS／上市計畫仍待確認。';
Object.assign(rows[1], {
    platformNote: '限定初代完整重製 The Witcher Remake／Canis Majoris。Fool’s Theory 現行產品頁及 CDPR 2026-08-25 新聞稿的工作室介紹仍提及本案；取得的官方資料未列本案平台。該新聞稿中的 PC／PS5／Xbox Series／Switch 2 清單屬於《巫師 3》重製更新及資料片，不能移植到初代 Remake。平台保持未公布，並非斷言未來不推出。',
    resolvedGap: '補到較新的 CDPR 官方工作室介紹並與 Fool’s Theory 專屬產品頁交叉核對，身分確定；排除同篇新聞稿另一作品的平台，具體平台仍缺第一方公告。',
    remainingDetails: '需要 CDPR 或 Fool’s Theory 明確指名 The Witcher Remake／Canis Majoris 的平台公告或正式商品頁。原版／Enhanced Edition、《巫師 3》Remastered／Songs of the Past 與《巫師 4》的平台不能轉用；零售商分類與媒體推測不足以解除。',
    evidence: [
        { source: original, finding: '2022-10-26 官方原始公告將 Canis Majoris 對應初代完整重製與 Fool’s Theory／UE5，沒有具體平台。' },
        { source: rows[1].platformSources[2], finding: '開發商現行專屬頁確認初代重製、開發中與 CDPR 監督；頁面沒有具體平台或發售日期。' },
        { source: press, finding: '2026-08-25 官方新聞稿 About Fool’s Theory 段仍列 The Witcher Remake；正文平台清單明確屬於 The Witcher 3 Remastered／Songs of the Past，不是初代 Remake。' }
    ],
    searched: [
        { query: 'The Witcher Remake platforms 2026；CDPR／Fool’s Theory 官方專案公告與產品頁', result: '取得現行開發商頁、2022 初始公告及 2026-08-25 官方介紹，未取得本案具體平台公告。' },
        { query: 'The Witcher Remake 2026 release platforms PC PS5；辨識 remake 與 remastered', result: '排除零售商類別、媒體預測與《巫師 3》平台清單；不以其他作品推出時間推算本作日期或狀態。' }
    ]
});
rows[1].platformSources.push(original, press);
rows[1].editionOptions[0].sources.push(rows[1].platformSources[2], press);
rows[1].editionOptions[0].scopeNote = '初代重製專案身分確認；2026 官方介紹仍有提及，但同篇《巫師 3》的平台不能套用，本案具體發行平台尚待確認。';
fs.writeFileSync(path.join(__dirname, 'review-a.json'), JSON.stringify(rows, null, 2) + '\n');
fs.writeFileSync(path.join(__dirname, 'review-a.md'), '# 六筆複核：GGG 與巫師\n\n查核日期：2026-10-19。兩筆皆維持 partial，平台與別名不變。\n\n' + rows.map(row => `## ${row.name}\n\n${row.platformNote}\n\n待確認：${row.remainingDetails}\n\n` + row.evidence.map(item => `- [第一方來源](${item.source})：${item.finding}`).join('\n') + '\n\n' + row.searched.map(item => `- 查詢：${item.query}\n  結果：${item.result}`).join('\n')).join('\n\n') + '\n');
