# 2026-10-19 擴充：重複與別名唯讀複核

初始基準為 `catalog-before.json` 的 977 筆。此報告只檢查作品身分、搜尋別名與商品識別，不重做已完成的平台查核；沒有直接修改 games.json、其他研究員的候選檔或剩餘 6 筆資料。

## 檢查方法

- 比對 canonical name、alias、seriesAliases；只做 NFKC、大小寫及連續空白正規化，不刪除所有符號。因此不會將 `Dragon Quest III` 和 `Dragon Quest I & II` 因去符號而當成同名。
- 比對 Steam AppID、Apple App ID、Google Play package ID、Nintendo 商品 slug 及 PlayStation product/concept ID；同一 ID 只產生候選，不直接合併。
- 系列泛稱、常見縮寫、原作／重製、合集／收錄單作、主遊戲／DLC 及地區營運版須分別判讀。不同作品共享來源新聞也不構成重複。

## 已確認：Fall Guys 與糖豆人 終極淘汰賽

兩筆在基準目錄的完整平台欄及三個官方來源一致，後者現有說明也已指出是同一 Fall Guys。官方[賽季回顧](https://www.fallguys.com/season-archive)將 Ultimate Knockout 舊季與 Free for All 放在同一遊戲歷史中；[2021 年官方更新](https://www.fallguys.com/news/season-4-is-out-now?lang=en-US)使用完整舊名稱 Fall Guys: Ultimate Knockout。這支持同作品更名／持續更新關係，沒有證據要求另列兩款。

最小合併建議：保留 `Fall Guys` 為 canonical，納入 `糖豆人 終極淘汰賽`、`fall guys ultimate` 與 `fall guys ultimate knockout`，保留原有 `糖豆人`、`fg` 及既有平台。主代理已確認採用此結論，規劃 audit 557 mergedInto、553 同步來源說明；本複核代理未執行合併。

## 已確認：機戰傭兵 6／VI

基準兩筆精確名稱為 `機戰傭兵6 境界天火`、`機戰傭兵VI 境界天火`，平台同為 `PC/PS5/PS4/Xbox Series X|S/Xbox One`，共用同一 [Bandai Namco 正式商品](https://www.bandainamcoent.com/games/armored-core-vi-fires-of-rubicon)。前者的 alias 已直接包含 `Armored Core VI: Fires of Rubicon`，差異是數字寫法，沒有原作／重製或地區營運差異證據。

最小建議：保留一筆 canonical（可沿用較早的 `機戰傭兵6 境界天火`），完整保留另一中文名稱及 `armored core vi`、`acvi` 等舊別名，合併官方來源；平台維持原值。本複核代理未直接修改。

## 已確認：遊戲王 Tag Force Special

基準兩筆精確名稱為 `遊戲王 Tag Force Special`、`遊戲王 ARC-V Tag Force Special`，兩者平台均為 `PSP`，現有 note 亦彼此明示同作。[KONAMI 正式商品頁](https://www.konami.com/games/jp/ja/products/yugioh_tfsp_psp/)標題為 `遊戯王アーク・ファイブ TAG FORCE SPECIAL`，兩筆指向此同一商品，並非不同年度版本。

最小建議：保留含副標的 `遊戲王 ARC-V Tag Force Special`，納入較短中文名、`yu-gi-oh tag force special`、`tf special` 等舊別名及現有來源；保留目前 PSP 與 Vita 相容性的註解，不在本輪擴做平台變更。本複核代理未直接修改。

## 初掃排除規則

初始 977 筆未發現完全相同的 canonical name。軒轅劍壹／貳共用 Steam 包、傳送門 1／2 共用 Companion Collection 商品、茶杯頭本體／DLC 共用 PlayStation concept 等屬需要按內容身分解讀的 ID 共用，不能由 ID 相同直接宣稱重複。`cs2`、`tf2`、`poe2` 等跨作品縮寫亦僅是搜尋歧義，不證明作品相同。

除以上三組確證同作外，本輪不擴增其他舊資料修正。Call of Duty: Mobile 的[Activision package](https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter&hl=en_US)、[Garena package](https://play.google.com/store/apps/details?id=com.garena.game.codm&hl=en_US)及[中國騰訊商品](https://apps.apple.com/cn/app/%E4%BD%BF%E5%91%BD%E5%8F%AC%E5%94%A4%E6%89%8B%E6%B8%B8/id1488410151)具不同發行識別，因此只因 `codm` 共用不能自動合併地區版。

## 本輪 B／C 新候選

### C 組獨立遊戲：13 筆通過

已讀 `review-indie.json` 最終 13 筆，逐一對照 977 筆基準的 name／alias／seriesAliases 及 sources／platformSources 商品識別，沒有精確名稱／別名碰撞，也沒有共用 Steam AppID。補查常見中文題名線索，未找到同作品已以另一中文名稱收錄的證據。候選彼此的 AppID 亦全部唯一。

| 作品 | Steam AppID |
| --- | --- |
| Escape From Duckov | 3167020 |
| RV There Yet? | 3949040 |
| My Winter Car | 4164420 |
| Buckshot Roulette | 2835570 |
| Mouthwashing | 2475490 |
| Look Outside | 3373660 |
| ULTRAKILL | 1229490 |
| Elin | 2135150 |
| Caves of Qud | 333640 |
| Stoneshard | 625960 |
| Songs of Syx | 1162750 |
| Bopl Battle | 1686940 |
| Mage Arena | 3716600 |

### B 組手機遊戲：15 筆通過

已讀研究員凍結的 `review-mobile.json`，15 筆候選對照 977 筆基準的 name／alias／seriesAliases 及 sources／platformSources：精確名稱／別名衝突 0、Apple／Google 商品 ID 衝突 0。候選內部 15 個 Apple ID 及 15 個 Google package ID 亦各自唯一；B／C 合計 28 筆候選互相比對沒有名稱、別名或商品 ID 衝突。另以主要中文詞及英文詞回查既有目錄，沒有新增確證同作品重複。

| 作品 | Apple App ID（官方連結） | Google package ID（官方連結） |
| --- | --- | --- |
| LINE Rangers 銀河特攻隊 | [767265270](https://apps.apple.com/tw/app/rangers-code-geass-%E5%8F%8D%E5%8F%9B%E7%9A%84%E9%AD%AF%E8%B7%AF%E4%BF%AE-%E5%90%88%E4%BD%9C/id767265270?uo=4) | [com.linecorp.LGRGS](https://play.google.com/store/apps/details?id=com.linecorp.LGRGS&hl=zh_TW&gl=TW) |
| LINE 熊大農場 | [949344041](https://apps.apple.com/tw/app/line-%E7%86%8A%E5%A4%A7%E8%BE%B2%E5%A0%B4/id949344041?uo=4) | [com.linecorp.LGFARM](https://play.google.com/store/apps/details?id=com.linecorp.LGFARM&hl=zh_TW&gl=TW) |
| LINE Bubble 2 | [895761422](https://apps.apple.com/tw/app/line-bubble-2-%E6%B3%A1%E6%B3%A1%E5%B0%84%E6%93%8A%E7%9B%8A%E6%99%BA%E9%81%8A%E6%88%B2/id895761422?uo=4) | [com.linecorp.LGBB2](https://play.google.com/store/apps/details?id=com.linecorp.LGBB2&hl=zh_TW&gl=TW) |
| LINE 熊大上菜 | [1456569943](https://apps.apple.com/tw/app/line-%E7%86%8A%E5%A4%A7%E4%B8%8A%E8%8F%9C/id1456569943?uo=4) | [com.linecorp.LGCHEF](https://play.google.com/store/apps/details?id=com.linecorp.LGCHEF&hl=zh_TW&gl=TW) |
| 巔峰極速 | [6450006659](https://apps.apple.com/tw/app/%E5%B7%94%E5%B3%B0%E6%A5%B5%E9%80%9F/id6450006659?uo=4) | [com.longe.racehmt](https://play.google.com/store/apps/details?id=com.longe.racehmt&hl=zh_TW&gl=TW) |
| 出發吧麥芬 | [6446155179](https://apps.apple.com/tw/app/%E5%87%BA%E7%99%BC%E5%90%A7%E9%BA%A5%E8%8A%AC/id6446155179?uo=4) | [com.xd.muffin.tw](https://play.google.com/store/apps/details?id=com.xd.muffin.tw&hl=zh_TW&gl=TW) |
| 弓箭傳說 | [1453651052](https://apps.apple.com/tw/app/%E5%BC%93%E7%AE%AD%E5%82%B3%E8%AA%AA/id1453651052?uo=4) | [com.habby.archero](https://play.google.com/store/apps/details?id=com.habby.archero&hl=zh_TW&gl=TW) |
| 弓箭傳說2 | [6502820653](https://apps.apple.com/tw/app/%E5%BC%93%E7%AE%AD%E5%82%B3%E8%AA%AA2/id6502820653?uo=4) | [com.xq.archeroii](https://play.google.com/store/apps/details?id=com.xq.archeroii&hl=zh_TW&gl=TW) |
| 噠噠特攻 | [1528941310](https://apps.apple.com/tw/app/%E5%99%A0%E5%99%A0%E7%89%B9%E6%94%BB/id1528941310?uo=4) | [com.dxx.firenow](https://play.google.com/store/apps/details?id=com.dxx.firenow&hl=zh_TW&gl=TW) |
| 蛋仔派對 | [1673675970](https://apps.apple.com/tw/app/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%B0%8D/id1673675970?uo=4) | [com.netease.eggypartyhmt](https://play.google.com/store/apps/details?id=com.netease.eggypartyhmt&hl=zh_TW&gl=TW) |
| 向殭屍開炮 | [6480025909](https://apps.apple.com/tw/app/%E5%90%91%E6%AE%AD%E5%B1%8D%E9%96%8B%E7%82%AE/id6480025909?uo=4) | [com.zombiet.gpgl](https://play.google.com/store/apps/details?id=com.zombiet.gpgl&hl=zh_TW&gl=TW) |
| 卡皮巴拉 Go! | [6596787726](https://apps.apple.com/tw/app/%E5%8D%A1%E7%9A%AE%E5%B7%B4%E6%8B%89-go/id6596787726?uo=4) | [com.habby.capybara](https://play.google.com/store/apps/details?id=com.habby.capybara&hl=zh_TW&gl=TW) |
| Pokémon Masters EX | [1442061397](https://apps.apple.com/tw/app/pok%C3%A9mon-masters-ex/id1442061397?uo=4) | [com.dena.a12026418](https://play.google.com/store/apps/details?id=com.dena.a12026418&hl=zh_TW&gl=TW) |
| Battle Cats Quest | [1583719180](https://apps.apple.com/tw/app/battle-cats-quest/id1583719180?uo=4) | [jp.co.ponos.nyankoquest](https://play.google.com/store/apps/details?id=jp.co.ponos.nyankoquest&hl=zh_TW&gl=TW) |
| Meowdoku! | [6761760135](https://apps.apple.com/tw/app/meowdoku/id6761760135?uo=4) | [com.oakever.meowdoku](https://play.google.com/store/apps/details?id=com.oakever.meowdoku&hl=zh_TW&gl=TW) |

身分邊界補核：[Battle Cats Quest 台灣官方商品](https://apps.apple.com/tw/app/battle-cats-quest/id1583719180)明稱《貓咪大戰爭》外傳 App，描述滾動貓咪、把動物彈出島嶼的玩法，並將《貓咪大戰爭》列為另一作品，因此保留為獨立記錄。[LINE 台灣官方文章](https://line-tw-official.weblog.to/archives/48242252.html)用《LINE Rangers 銀河特攻隊》連到 Apple 767265270 與 Google com.linecorp.LGRGS，支持目前活動題名沿用同商品的身分解釋。弓箭傳說 1／2 保留各自具名作品與不同 ID；Pokémon Masters EX 不因共用寶可夢 IP 而與 GO／UNITE／TCG Pocket 合併。

## 複核完成與邊界

結論：確認 3 組既有同作品重複，已提供主代理最小合併及保留別名建議；本輪 15 款手機與 13 款獨立候選沒有發現引入重複或明確錯置別名，無阻擋問題。本報告已凍結。這是目錄身分與新候選交叉複核，不宣稱對所有未列出的譯名或外部商品做過完整普查，也不代替整合後回歸測試。


最終版本核對：C 組補入 8 個官方中文別名後已重跑全部名稱與別名交叉比對，仍為 0 衝突。凍結輸入 SHA256：`review-mobile.json` = `C0301AC67963773259FD6F8E4F48AA15DF38C76AC2CDA2A665D1E2DAE29B2376`；`review-indie.json` = `B8FA9D704A8B9BC6B73A320C00439979BA4B17C643E55004F1B57F7E98EE2CE9`。Buckshot Roulette 的平台查核為 partial，其他 C 組 12 款為 verified；這不影響本報告的作品重複判定。
