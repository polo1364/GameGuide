# 2026-10-19 第二輪擴充：作品重複與別名複核

基準：本目錄 catalog-before.json，共 1,002 筆。本報告僅檢查作品身分、別名與商品識別；不修改遊戲目錄、候選 JSON、既有待確認 7 筆，也不重做前輪已合併的 3 組。

## 方法與初掃結果

- 比對 name、alias、seriesAliases；名稱採 NFKC、大小寫與連續空白正規化，不移除會區分羅馬數字及合集名稱的所有標點。
- 官方商品 ID 比對涵蓋 Steam AppID、Apple App ID、Google Play package、PlayStation product／concept、Nintendo 具體商品 slug；Apple／Google URL 的地區、語言與追蹤參數不會造成同 ID 漏判。
- 商品 ID 相同只產生待判讀的配對；DLC、合集收錄的個別作品、原作與重製、區域營運版不自動合併。
- 全庫 1,002 筆未發現完全相同 canonical name；初掃未發現新的確證同作品重複。共用 Steam 1508740 的軒轅劍壹／貳、Portal Companion Collection 的傳送門 1／2、PlayStation concept 10001369 的茶杯頭本體／DLC，皆不能因共用合集或內容入口直接合併。
- Nintendo 路徑 products/soft.html 是通用頁名，初掃命中的 1-2-Switch／瑪利歐激戰前鋒並非同一商品 ID，已排除。cs2、tf2、poe2 等共用縮寫及系列泛稱不當作同作品證據。
- 另讀重複官方 URL 配對，未將多作品新聞、發行商列表、榜單、版本介紹共用網址當作作品 ID。巫師 3 原作／完整版及對馬戰鬼原作／導演版仍存在具名版本差異，不由共用來源推斷應合併。

## C 組候選中文題名線索

已以 Kenshi／劍士、Barotrauma／潛淵症、People Playground／人類遊樂場、Scrap Mechanic／廢品機械師、BeamNG.drive、Dwarf Fortress／矮人要塞、Death Must Die、Tiny Rogues、Lobotomy Corporation／腦葉公司、shapez 2／異形工廠、Kingdom Two Crowns／王國兩位君主、Ravenswatch／鴉衛奇旅、Besiege／圍攻、Halls of Torment／苦痛殿堂及繁簡變體回查 name／alias／seriesAliases。唯一中文片段命中為虹彩六號：圍攻行動，英文名稱與 Ubisoft 官方來源皆與 Besiege 不同，不構成重複。

## B／C 最終候選

### B 組手機：13 筆

與基準及候選彼此比對後，名稱／別名／商品 ID 衝突皆為 0。Apple ID 去除地區、slug 與 query 差異；Google store／pc-store 同 package 視為同一商品識別，沒有為 PC 商品網址再建立一款。另查繁簡中文及英文題名線索（包括 Fire Emblem Heroes／火焰或聖火英雄、鈴蘭之劍／Sword of Convallaria、最強蝸牛／Super Snail）亦未命中舊同作。

| 作品 | Apple ID（官方來源） | Google package（官方來源） |
| --- | --- | --- |
| LINE: Disney Tsum Tsum | [867964741](https://apps.apple.com/tw/app/line-disney-tsum-tsum/id867964741?uo=4) | [com.linecorp.LGTMTMG](https://play.google.com/store/apps/details?id=com.linecorp.LGTMTMG&hl=zh_TW&gl=TW) |
| LINE 旅遊大亨 | [891264481](https://apps.apple.com/tw/app/line-%E6%97%85%E9%81%8A%E5%A4%A7%E4%BA%A8/id891264481?uo=4) | [com.linecorp.LGGRTW](https://play.google.com/store/apps/details?id=com.linecorp.LGGRTW&hl=zh_TW&gl=TW) |
| LINE POP2 | [878506376](https://apps.apple.com/tw/app/line-pop2/id878506376?uo=4) | [com.linecorp.LGLP2](https://play.google.com/store/apps/details?id=com.linecorp.LGLP2&hl=zh_TW&gl=TW) |
| LINE 熊貓連連看 | [798519009](https://apps.apple.com/tw/app/line-%E7%86%8A%E8%B2%93%E9%80%A3%E9%80%A3%E7%9C%8B/id798519009?uo=4) | [com.linecorp.LGPTT](https://play.google.com/store/apps/details?id=com.linecorp.LGPTT&hl=zh_TW&gl=TW) |
| 閃耀吧！嚕咪 | [6754979232](https://apps.apple.com/tw/app/%E9%96%83%E8%80%80%E5%90%A7-%E5%9A%95%E5%92%AA/id6754979232?uo=4) | [com.bilibili.lumi](https://play.google.com/store/apps/details?id=com.bilibili.lumi&hl=zh_TW&gl=TW) |
| 好萊塢合成：星夢逆襲 | [6755455500](https://apps.apple.com/tw/app/%E5%A5%BD%E8%90%8A%E5%A1%A2%E5%90%88%E6%88%90-%E6%98%9F%E5%A4%A2%E9%80%86%E8%A5%B2/id6755455500?uo=4) | [com.hollywood.merge](https://play.google.com/store/apps/details?id=com.hollywood.merge&hl=zh_TW&gl=TW) |
| Amaze GO! - 箭頭解謎 | [6758326278](https://apps.apple.com/tw/app/amaze-go-%E7%AE%AD%E9%A0%AD%E8%A7%A3%E8%AC%8E/id6758326278?uo=4) | [com.oakever.arrows](https://play.google.com/store/apps/details?id=com.oakever.arrows&hl=zh_TW&gl=TW) |
| 鈴蘭之劍：為這和平的世界 | [1670576799](https://apps.apple.com/tw/app/%E9%88%B4%E8%98%AD%E4%B9%8B%E5%8A%8D-%E7%82%BA%E9%80%99%E5%92%8C%E5%B9%B3%E7%9A%84%E4%B8%96%E7%95%8C/id1670576799?uo=4) | [com.xd.ssrpgtw](https://play.google.com/store/apps/details?id=com.xd.ssrpgtw&hl=zh_TW&gl=TW) |
| 第七史詩 | [1322399438](https://apps.apple.com/tw/app/%E7%AC%AC%E4%B8%83%E5%8F%B2%E8%A9%A9/id1322399438?uo=4) | [com.stove.epic7.google](https://play.google.com/store/apps/details?id=com.stove.epic7.google&hl=zh_TW&gl=TW) |
| Fire Emblem Heroes | [1181774280](https://apps.apple.com/tw/app/fire-emblem-heroes-%E6%88%B0%E7%95%A5rpg%E7%9A%84%E9%87%91%E5%AD%97%E5%A1%94/id1181774280?uo=4) | [com.nintendo.zaba](https://play.google.com/store/apps/details?id=com.nintendo.zaba&hl=zh_TW&gl=TW) |
| 薑餅人之塔 | [6449445178](https://apps.apple.com/tw/app/%E8%96%91%E9%A4%85%E4%BA%BA%E4%B9%8B%E5%A1%94/id6449445178?uo=4) | [com.devsisters.cba](https://play.google.com/store/apps/details?id=com.devsisters.cba&hl=zh_TW&gl=TW) |
| 杖劍傳說：坎斯汀之約 | [6504542886](https://apps.apple.com/tw/app/%E6%9D%96%E5%8A%8D%E5%82%B3%E8%AA%AA-%E5%9D%8E%E6%96%AF%E6%B1%80%E4%B9%8B%E7%B4%84/id6504542886?uo=4) | [com.zjcs.android.us](https://play.google.com/store/apps/details?id=com.zjcs.android.us&hl=zh_TW&gl=TW) |
| 最強蝸牛 | [1491859159](https://apps.apple.com/tw/app/%E6%9C%80%E5%BC%B7%E8%9D%B8%E7%89%9B-%E4%BC%91%E9%96%92%E6%94%BE%E7%BD%AE%E4%BD%B3%E4%BD%9C/id1491859159?uo=4) | [com.ltgames.android.snail](https://play.google.com/store/apps/details?id=com.ltgames.android.snail&hl=zh_TW&gl=TW) |

### C 組與跨組：14 筆／合計 27 筆

C 組 14 筆與 B 組 13 筆及舊 1,002 筆對照，名稱／別名與官方商品 ID 皆未發現新增衝突。跨區 Apple ID、Google package、Steam AppID 及 PS product／concept、Xbox 商品 ID、Nintendo 具體商品 slug 都依識別比對。

| 作品 | Steam AppID（官方來源） |
| --- | --- |
| Kenshi | [233860](https://store.steampowered.com/app/233860/) |
| Barotrauma | [602960](https://store.steampowered.com/app/602960/) |
| People Playground | [1118200](https://store.steampowered.com/app/1118200/) |
| Scrap Mechanic | [387990](https://store.steampowered.com/app/387990/) |
| BeamNG.drive | [284160](https://store.steampowered.com/app/284160/) |
| Dwarf Fortress（Premium版） | [975370](https://store.steampowered.com/app/975370/) |
| Death Must Die | [2334730](https://store.steampowered.com/app/2334730/) |
| Tiny Rogues | [2088570](https://store.steampowered.com/app/2088570/) |
| Lobotomy Corporation | [568220](https://store.steampowered.com/app/568220/) |
| shapez 2 | [2162800](https://store.steampowered.com/app/2162800/) |
| Kingdom Two Crowns | [701160](https://store.steampowered.com/app/701160/) |
| Ravenswatch | [2071280](https://store.steampowered.com/app/2071280/) |
| Besiege | [346010](https://store.steampowered.com/app/346010/) |
| Halls of Torment | [2218750](https://store.steampowered.com/app/2218750/) |

C 的 Dwarf Fortress 明確限定 Premium 付費圖形版；Halls of Torment 的手機版限定 Premium；BeamNG.drive 公告 PS5 的當日上市狀態仍 partial。這些版本範圍已寫在候選 notes，不將免費版、相容執行或公告版直接當成相同已上市原生平台。此處僅複核身分邊界，不代替平台研究員的全量平台證據。

## 最終結論與凍結

C 最後補入潛淵症、腦葉公司、王國：兩位君主、鴉衛奇旅、苦痛殿堂等中文別名後，已重新跑全部 27 筆候選與舊 1,002 筆及候選彼此的 name／alias／seriesAliases 比對，仍為 0 衝突。全庫未發現完全相同 canonical name，本輪候選未發現新增衝突；沒有新增確證舊重複，建議本輪 merges 維持空陣列。既有泛稱或系列 alias 的共用不等同錯誤，不提出無證據刪除。

凍結輸入 SHA256：

- review-mobile.json：`3c8c708890c14ed9ec90969b7a5f86dbb2cb1b3a9004cc3a460916fa4baaff48`
- review-indie.json：`7f62f967fb49eb96000df697eb3426071ba212bed2e022e46735d40b4098c017`

本複核已完成並凍結；只修改此 Markdown。未碰既有 7 筆待確認資料。比對涵蓋目錄已有名稱與官方商品識別，不宣稱窮盡網路上所有非正式翻譯；整合後回歸由主代理執行。
