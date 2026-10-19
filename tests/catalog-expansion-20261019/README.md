# 台灣手機與獨立遊戲擴充

查核日期：2026-10-19。新增15款台灣手機遊戲及13款獨立遊戲，977 → 1002款。原971款逐欄保留，包括6筆待確認資料；另合併3組已證實同作重複入口，完整保留別名與原始資料；歷史審計僅同步合併對應，832筆非目標紀錄及待確認清單未改。

榜單、評分與評論是收錄優先的觀察依據，並非即時排名或直接的社群討論量；不同地區／平台數字不能直接橫比。catalogPriority 3為本輪高優先，2次之，1補充，僅作編輯排序。來源均以查核當時可讀內容為準。

[完整資料與證據](audit.json) · [重複與別名檢查](duplicate-check.json) · [人工交叉檢查](duplicate-review.md) · [本輪移植缺口](pending-platforms.json) · [驗證](VALIDATION.md)

重現：`node tests/catalog-expansion-20261019/apply-expansion.cjs`；加`--apply`寫入。整合器拒絕名稱／別名／商品ID衝突，以及目錄、歷史審計或待確認清單的獨立漂移。舊查核整合器不適用擴充後目錄。

## 合併：糖豆人 終極淘汰賽 → Fall Guys

官方季別檔案將 Ultimate Knockout 舊季與 Free for All 列為同一 Fall Guys 遊戲的歷史；兩個目錄條目是同作不同名稱，非獨立續作或重製版。 [官方來源](https://www.fallguys.com/season-archive)

保留別名：fall guys、糖豆人、fg、糖豆人 終極淘汰賽、fall guys ultimate、fall guys ultimate knockout

## 合併：機戰傭兵VI 境界天火 → 機戰傭兵6 境界天火

兩個條目均對應 Bandai Namco 的 ARMORED CORE VI FIRES OF RUBICON 同一商品頁與平台；6 與 VI 為同一代數字寫法，非不同版本。 [官方來源](https://www.bandainamcoent.com/games/armored-core-vi-fires-of-rubicon)

保留別名：armored core 6、ac6、裝甲核心6、機戰傭兵6、Armored Core VI: Fires of Rubicon、機戰傭兵VI 境界天火、armored core vi、acvi

## 合併：遊戲王 Tag Force Special → 遊戲王 ARC-V Tag Force Special

兩個條目均對應 KONAMI 同一款遊戯王アーク・ファイブ TAG FORCE SPECIAL；保留 ARC-V 完整名稱，簡稱改作別名，PSP 原生及 Vita 相容範圍沿用既有註記。 [官方來源](https://www.konami.com/games/jp/ja/products/yugioh_tfsp_psp/)

保留別名：yu-gi-oh arc-v、arc-v tf、遊戲王 Tag Force Special、yu-gi-oh tag force special、tf special、yu-gi-oh arc-v tag force special

## LINE Rangers 銀河特攻隊

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 11,464 則評分（3.38/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：LINE／LY 的原始塔防作品；商店目前以 CODE GEASS 合作活動命名，商品 ID 沿用原作，與 LINE Rangers 放置戰爭不同。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：line rangers、line rangers 銀河特攻隊

- [官方平台來源](https://itunes.apple.com/lookup?id=767265270&country=tw)：台灣區官方資料回傳 Rangers ×「CODE GEASS 反叛的魯路修」合作，供應商 LY Corporation，iOS 最低版本 15.0，Apple 商品 ID 767265270。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.linecorp.LGRGS&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「Rangers ×「CODE GEASS 反叛的魯路修」合作」並有安裝入口，套件 com.linecorp.LGRGS。
- [官方平台來源](https://line-tw-official.weblog.to/archives/48242252.html)：LINE 台灣官方文章以銀河特攻隊名稱同時連到 Apple 767265270 與 Google com.linecorp.LGRGS，確認活動標題仍是原商品。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=767265270&country=tw)：2026-10-19 讀取 Apple 台灣區累積 11,464 則評分（3.38/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## LINE 熊大農場

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 96,826 則評分（4.54/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：LY Corporation 的 LINE 熊大農場，採台灣商店商品；不以 LINE 或熊大作泛用別名。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：line brown farm、熊大農場

- [官方平台來源](https://itunes.apple.com/lookup?id=949344041&country=tw)：台灣區官方資料回傳 LINE 熊大農場，供應商 LY Corporation，iOS 最低版本 15.0，Apple 商品 ID 949344041。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.linecorp.LGFARM&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「LINE 熊大農場」並有安裝入口，套件 com.linecorp.LGFARM。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=949344041&country=tw)：2026-10-19 讀取 Apple 台灣區累積 96,826 則評分（4.54/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## LINE Bubble 2

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 114,660 則評分（4.67/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：LINE Bubble 的第二作；與前作、LINE POP 2 分開辨識。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：line bubble 2－泡泡射擊益智遊戲、line bubble2

- [官方平台來源](https://itunes.apple.com/lookup?id=895761422&country=tw)：台灣區官方資料回傳 LINE Bubble 2－泡泡射擊益智遊戲，供應商 LY Corporation，iOS 最低版本 15.0，Apple 商品 ID 895761422。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.linecorp.LGBB2&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「LINE Bubble 2－泡泡射擊益智遊戲」並有安裝入口，套件 com.linecorp.LGBB2。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=895761422&country=tw)：2026-10-19 讀取 Apple 台灣區累積 114,660 則評分（4.67/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## LINE 熊大上菜

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 53,779 則評分（4.53/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：LY Corporation 的熊大餐廳料理遊戲，與熊大農場為不同作品。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：line chef、熊大上菜

- [官方平台來源](https://itunes.apple.com/lookup?id=1456569943&country=tw)：台灣區官方資料回傳 LINE 熊大上菜，供應商 LY Corporation，iOS 最低版本 15.0，Apple 商品 ID 1456569943。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.linecorp.LGCHEF&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「LINE 熊大上菜 可愛的料理遊戲還可以挑戰經營餐廳！」並有安裝入口，套件 com.linecorp.LGCHEF。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=1456569943&country=tw)：2026-10-19 讀取 Apple 台灣區累積 53,779 則評分（4.53/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## 巔峰極速

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 48,707 則評分（4.51/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：龍邑代理台港澳版；以 racehmt／台灣 Apple 商品為準，不套用中國版帳號或平台。

平台範圍：台港澳版 iOS／Android。官方上線 FAQ 將電腦遊玩明稱「官方模擬器」，故不列原生 PC。

別名：racing master、巔峰極速台港澳

- [官方平台來源](https://itunes.apple.com/lookup?id=6450006659&country=tw)：台灣區官方資料回傳 巔峰極速，供應商 LONG E CO., LTD.，iOS 最低版本 15.0，Apple 商品 ID 6450006659。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.longe.racehmt&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「巔峰極速」並有安裝入口，套件 com.longe.racehmt。
- [官方平台來源](https://www.racingmaster.game/20231016/39763_1114922.html)：官方 FAQ 分列 Android／iOS，電腦管道明確稱官方模擬器。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=6450006659&country=tw)：2026-10-19 讀取 Apple 台灣區累積 48,707 則評分（4.51/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## 出發吧麥芬

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 11,219 則評分（4.63/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：星重力代理台港澳版，Google 套件為 com.xd.muffin.tw；與中國版及其他海外營運版本區分。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：gogo muffin、出發吧麥芬台港澳

- [官方平台來源](https://itunes.apple.com/lookup?id=6446155179&country=tw)：台灣區官方資料回傳 出發吧麥芬，供應商 XD Entertainment Pte Ltd，iOS 最低版本 13.0，Apple 商品 ID 6446155179。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.xd.muffin.tw&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「出發吧麥芬」並有安裝入口，套件 com.xd.muffin.tw。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=6446155179&country=tw)：2026-10-19 讀取 Apple 台灣區累積 11,219 則評分（4.63/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## 弓箭傳說

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 100,695 則評分（4.54/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：Habby 的 Archero 第一作；不與續作弓箭傳說2或其他弓箭遊戲合併。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：archero、弓箭傳說1

- [官方平台來源](https://itunes.apple.com/lookup?id=1453651052&country=tw)：台灣區官方資料回傳 弓箭傳說，供應商 HABBY PTE. LTD.，iOS 最低版本 13.0，Apple 商品 ID 1453651052。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.habby.archero&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「弓箭傳說」並有安裝入口，套件 com.habby.archero。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=1453651052&country=tw)：2026-10-19 讀取 Apple 台灣區累積 100,695 則評分（4.54/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## 弓箭傳說2

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 7,853 則評分（4.08/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：Habby 的續作 Archero 2，台灣商店列艾樂思代理；獨立於第一作。

平台範圍：核實 iOS／Android；另有 Google Play Games 電腦執行管道，屬該行動商品的 PC 遊玩服務，本次不據此宣稱原生 Windows 版。

別名：archero 2、弓箭傳說 2

- [官方平台來源](https://itunes.apple.com/lookup?id=6502820653&country=tw)：台灣區官方資料回傳 弓箭傳說2，供應商 HABBY PTE. LTD.，iOS 最低版本 15.0，Apple 商品 ID 6502820653。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.xq.archeroii&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「弓箭傳說2」並有安裝入口，套件 com.xq.archeroii。
- [官方平台來源](https://play.google.com/pc-store/games/details?hl=zh_TW&id=com.xq.archeroii)：Google 官方提供透過 Google Play Games 在 Windows 電腦遊玩的管道；未以此認定獨立原生 Windows 發行。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=6502820653&country=tw)：2026-10-19 讀取 Apple 台灣區累積 7,853 則評分（4.08/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## 噠噠特攻

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 37,245 則評分（4.46/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：Habby 的 Survivor.io，台灣商店列愛彼代理；與既有嘎嘎特攻為不同作品。

平台範圍：核實 iOS／Android；另有 Google Play Games 電腦執行管道，屬該行動商品的 PC 遊玩服務，本次不據此宣稱原生 Windows 版。

別名：survivor.io、survivor io

- [官方平台來源](https://itunes.apple.com/lookup?id=1528941310&country=tw)：台灣區官方資料回傳 噠噠特攻，供應商 HABBY PTE. LTD.，iOS 最低版本 13.0，Apple 商品 ID 1528941310。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.dxx.firenow&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「噠噠特攻」並有安裝入口，套件 com.dxx.firenow。
- [官方平台來源](https://play.google.com/pc-store/games/details?hl=zh_TW&id=com.dxx.firenow)：Google 官方提供透過 Google Play Games 在 Windows 電腦遊玩的管道；未以此認定獨立原生 Windows 發行。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=1528941310&country=tw)：2026-10-19 讀取 Apple 台灣區累積 37,245 則評分（4.46/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## 蛋仔派對

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 71,881 則評分（4.42/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：網易開發、恩奕營運的台港澳手機商品；不用中國版 PC 或其他區域商品推定台灣版平台。

平台範圍：核實恩奕台港澳手機版 iOS／Android；未把中國版 PC 端或其他地區平台納入本商品。

別名：eggy party、蛋仔派對台港澳

- [官方平台來源](https://itunes.apple.com/lookup?id=1673675970&country=tw)：台灣區官方資料回傳 蛋仔派對，供應商 Envoy Interactive Entertainment Co., Ltd.，iOS 最低版本 13.0，Apple 商品 ID 1673675970。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.netease.eggypartyhmt&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「蛋仔派對」並有安裝入口，套件 com.netease.eggypartyhmt。
- [官方平台來源](https://www.eggyparty.com/hmt/)：HMT 官網標示台灣代理 Envoy，與雙商店恩奕商品吻合。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=1673675970&country=tw)：2026-10-19 讀取 Apple 台灣區累積 71,881 則評分（4.42/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## 向殭屍開炮

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 27,778 則評分（4.66/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：SPGAME 在台灣商店發行的繁體中文商品；以 gpgl 套件與 Apple 6480025909 鎖定，非其他殭屍射擊同類遊戲。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：向僵尸开炮

- [官方平台來源](https://itunes.apple.com/lookup?id=6480025909&country=tw)：台灣區官方資料回傳 向殭屍開炮，供應商 SPGame Co., Limited，iOS 最低版本 12.0，Apple 商品 ID 6480025909。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.zombiet.gpgl&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「向殭屍開炮」並有安裝入口，套件 com.zombiet.gpgl。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=6480025909&country=tw)：2026-10-19 讀取 Apple 台灣區累積 27,778 則評分（4.66/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## 卡皮巴拉 Go!

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 25,077 則評分（4.68/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：Habby 的 Capybara Go!，台灣商店列艾樂思代理；不以卡皮巴拉單字指代所有同題材遊戲。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：capybara go、卡皮巴拉go

- [官方平台來源](https://itunes.apple.com/lookup?id=6596787726&country=tw)：台灣區官方資料回傳 卡皮巴拉 Go!，供應商 HABBY PTE. LTD.，iOS 最低版本 13.0，Apple 商品 ID 6596787726。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.habby.capybara&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「卡皮巴拉 Go!」並有安裝入口，套件 com.habby.capybara。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=6596787726&country=tw)：2026-10-19 讀取 Apple 台灣區累積 25,077 則評分（4.68/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## Pokémon Masters EX

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：2026-10-19 讀取 Apple 台灣區累積 36,027 則評分（4.71/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：DeNA 的 Pokémon Masters EX；與寶可夢 GO、UNITE、TCG Pocket 等作品分開。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：pokemon masters ex、寶可夢大師ex

- [官方平台來源](https://itunes.apple.com/lookup?id=1442061397&country=tw)：台灣區官方資料回傳 Pokémon Masters EX，供應商 DeNA Co., Ltd.，iOS 最低版本 15.0，Apple 商品 ID 1442061397。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.dena.a12026418&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「Pokémon Masters EX」並有安裝入口，套件 com.dena.a12026418。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=1442061397&country=tw)：2026-10-19 讀取 Apple 台灣區累積 36,027 則評分（4.71/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

## Battle Cats Quest

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：本輪 Apple 台灣 iPhone 遊戲免費榜第 11 名；2026-10-19 讀取 Apple 台灣區累積 4,135 則評分（4.75/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：PONOS 官方描述為貓咪大戰爭外傳 App；獨立商品與滾動闖關玩法，不重複既有貓咪大戰爭。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：battle cats quest

- [官方平台來源](https://itunes.apple.com/lookup?id=1583719180&country=tw)：台灣區官方資料回傳 Battle Cats Quest，供應商 ponos corporation，iOS 最低版本 15.0，Apple 商品 ID 1583719180。
- [官方平台來源](https://play.google.com/store/apps/details?id=jp.co.ponos.nyankoquest&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「Battle Cats Quest」並有安裝入口，套件 jp.co.ponos.nyankoquest。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=1583719180&country=tw)：2026-10-19 讀取 Apple 台灣區累積 4,135 則評分（4.75/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。
- [收錄熱度來源](https://apps.apple.com/tw/iphone/charts/6014?chart=top-free)：本輪讀取 Apple 台灣 iPhone 遊戲免費榜列第 11 名；榜單會變動。

## Meowdoku!

taiwan-mobile｜iOS/Android｜released｜平台查核verified

熱度依據：本輪 Apple 台灣 iPhone 遊戲免費榜第 1 名；2026-10-19 讀取 Apple 台灣區累積 46,809 則評分（4.78/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。

身分：限定 Oakever Games 的 Meowdoku（Apple 6761760135／com.oakever.meowdoku），排除搜尋結果中其他廠商同名商品。

平台範圍：核實台灣商店的 iOS／Android 手機商品。Apple Silicon 執行 iPhone／iPad App 或 Android 模擬器不等同另外發行的原生桌面版。

別名：meowdoku、meowdoku: 腦力解謎遊戲

- [官方平台來源](https://itunes.apple.com/lookup?id=6761760135&country=tw)：台灣區官方資料回傳 Meowdoku!，供應商 OAKEVER GAMES PTE. LTD.，iOS 最低版本 15.0，Apple 商品 ID 6761760135。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.oakever.meowdoku&hl=zh_TW&gl=TW)：以 gl=TW、hl=zh_TW 直接讀取 Google Play，HTTP 200；商品標題「Meowdoku: 腦力解謎遊戲」並有安裝入口，套件 com.oakever.meowdoku。

- [收錄熱度來源](https://itunes.apple.com/lookup?id=6761760135&country=tw)：2026-10-19 讀取 Apple 台灣區累積 46,809 則評分（4.78/5）；這是當地累積參與指標，不等於現時活躍人數或即時下載排名。
- [收錄熱度來源](https://apps.apple.com/tw/iphone/charts/6014?chart=top-free)：本輪讀取 Apple 台灣 iPhone 遊戲免費榜列第 1 名；榜單會變動。

## Escape From Duckov

indie｜PC/macOS｜released｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 104,918 則，正評 84.5%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Team Soda 開發、bilibili 發行的本篇撤離射擊遊戲，非同名攻略 App。

平台範圍：已確認 Windows PC、macOS 原生版本；Mac App Store 是 Mac 版，不等同 iOS/iPadOS。

別名：escape from duckov、逃離鴨科夫、逃离鸭科夫

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3167020&l=english)：Steam 正式商品 3167020：Escape From Duckov；開發者 Team Soda；發行商 bilibili；已發售；原生桌機平台 Windows、macOS；未標 Early Access。
- [官方平台來源](https://www.duckov.com/news/?language=en-US&news_id=181751016426554216)：官方平台公告列 Windows、macOS；發行商店為 Steam、WeGame、Epic、Mac App Store。現行 Steam 商品資料確認 Windows/macOS 已發售。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3167020&l=tchinese)：同一 Steam 商品 3167020 的官方 繁中商品名為「逃離鴨科夫」，並沿用同一商品平台資料；作精確中文別名。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3167020&l=schinese)：同一 Steam 商品 3167020 的官方 簡中商品名為「逃离鸭科夫」，並沿用同一商品平台資料；作精確中文別名。

- [收錄熱度來源](https://store.steampowered.com/appreviews/3167020?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=104918，total_positive=88665，total_negative=16253；計算正評率 84.5%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## RV There Yet?

indie｜PC/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 89,665 則，正評 90.1%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Nuggets Entertainment 的合作露營車遊戲。

平台範圍：Windows PC 與 Xbox Series X|S 已發售；Xbox Cloud Gaming 是串流服務，不另計原生平台；未把 Xbox One 算入。

別名：rv there yet?、我們到了嗎？、我们到了吗？

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3949040&l=english)：Steam 正式商品 3949040：RV There Yet?；開發者 Nuggets Entertainment；發行商 Nuggets Entertainment；已發售；原生桌機平台 Windows；未標 Early Access。
- [官方平台來源](https://www.xbox.com/en-ca/games/store/rv-there-yet/9mw79bjvf3qx)：Nuggets Entertainment 官方 Xbox 商品列 2026-06-30 發售、Series X|S 最佳化、PC 及購買價格。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3949040&l=tchinese)：同一 Steam 商品 3949040 的官方 繁中商品名為「我們到了嗎？」，並沿用同一商品平台資料；作精確中文別名。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3949040&l=schinese)：同一 Steam 商品 3949040 的官方 簡中商品名為「我们到了吗？」，並沿用同一商品平台資料；作精確中文別名。

- [收錄熱度來源](https://store.steampowered.com/appreviews/3949040?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=89665，total_positive=80814，total_negative=8851；計算正評率 90.1%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## My Winter Car

indie｜PC｜early-access｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 19,581 則，正評 94.1%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Amistech Games 開發的 My Summer Car 續作，獨立商品，非前作模組。

平台範圍：現行 Steam 正式支援 Windows PC；搶先體驗可購買遊玩，未把 Proton 或串流算為原生 Linux/macOS。

別名：my winter car

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=4164420&l=english)：Steam 正式商品 4164420：My Winter Car；開發者 Amistech Games；發行商 Amistech Games；已發售；原生桌機平台 Windows；仍標 Early Access。
- [官方平台來源](https://www.amistech.com/mwc/)：Amistech 官方頁確認這是 My Summer Car 的冬季續作，與同名非官方攻略站區別。

- [收錄熱度來源](https://store.steampowered.com/appreviews/4164420?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=19581，total_positive=18428，total_negative=1153；計算正評率 94.1%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Buckshot Roulette

indie｜PC/Linux/Xbox One/Xbox Series X|S｜released｜平台查核partial

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 127,628 則，正評 95.1%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Mike Klubnika 開發、CRITICAL REFLEX 發行的 Buckshot Roulette 本篇，排除名稱相似的仿作。

平台範圍：Windows PC、Linux、Xbox One、Xbox Series X|S 已確認已發售。PlayStation 與 Nintendo Switch 於 2026-04 官方公告仍在移植認證，但 7 月後續公告只確認 Xbox 上市；缺少截至本輪可判定 PS/Switch 現行上市狀態的第一方證據，故平台整體保留 partial。雲端不算原生移植。

仍需補證：PlayStation 與 Nintendo Switch 已於 2026-04 正式公布移植，但後續 2026-07 官方公告只確認 Xbox 上市；仍需 PS/Switch 正式上市公告或可辨識平台、發售狀態的官方商店 SKU，才能確認截至 2026-10-19 的完整平台範圍。查無上市頁面不代表取消。

別名：buckshot roulette、恶魔轮盘

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2835570&l=english)：Steam 正式商品 2835570：Buckshot Roulette；開發者 Mike Klubnika；發行商 CRITICAL REFLEX；已發售；原生桌機平台 Windows、Linux；未標 Early Access。
- [官方平台來源](https://news.xbox.com/en-us/2026/07/08/buckshot-roulette-xbox-game-pass/)：由開發者與 CRITICAL REFLEX 署名的 Xbox Wire 公告確認 2026-07-08 首次登上主機，Xbox One/Series、Windows 與雲端同步推出。
- [官方平台來源](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1828894815562176)：2026-04-04 官方公告曾預告 PlayStation、Nintendo Switch、Xbox 移植；後續已上市證據確認 Xbox，未將預告的 PS/Switch 誤列已發售。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2835570&l=schinese)：同一 Steam 商品 2835570 的官方 簡中商品名為「恶魔轮盘」，並沿用同一商品平台資料；作精確中文別名。
- [官方平台來源](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1837955055365564)：重讀 2026-07-14 最新可回讀官方公告，僅明確 Xbox（含 Game Pass）已推出；沒有解答 PS/Switch 截至本輪的上市狀態。

- [收錄熱度來源](https://store.steampowered.com/appreviews/2835570?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=127628，total_positive=121353，total_negative=6275；計算正評率 95.1%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Mouthwashing

indie｜PC｜released｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 39,123 則，正評 95.2%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Wrong Organ 開發、CRITICAL REFLEX 發行的 2024 年心理恐怖本篇，非免費附加內容 Work In Progress。

平台範圍：已發售主欄限 Windows PC。PS4、PS5、Xbox Series X|S、Nintendo Switch 為已公布移植；原 2025 時程延後，最新可回讀公告仍在進行，未冒充已上市。

別名：mouthwashing、缄默祸运

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2475490&l=english)：Steam 正式商品 2475490：Mouthwashing；開發者 Wrong Organ；發行商 CRITICAL REFLEX；已發售；原生桌機平台 Windows；未標 Early Access。
- [官方平台來源](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1823825466509022)：2026-02-10 Wrong Organ/CRITICAL REFLEX 公告說 PS5、Switch 實體版與移植仍在進行。
- [官方平台來源](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1819386365096741)：2025-12-19 官方公告明確撤回原定 2025 主機上市窗口，日期尚待確定。
- [官方平台來源](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1801617199563028)：2025-06-10 官方公告列 PS5、Switch，另確認 PS4、Xbox Series X|S 數位移植計畫。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2475490&l=schinese)：同一 Steam 商品 2475490 的官方 簡中商品名為「缄默祸运」，並沿用同一商品平台資料；作精確中文別名。

- [收錄熱度來源](https://store.steampowered.com/appreviews/2475490?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=39123，total_positive=37239，total_negative=1884；計算正評率 95.2%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Look Outside

indie｜PC｜released｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 15,255 則，正評 98.2%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Francis Coulombe 開發、Devolver Digital 發行的公寓生存恐怖 RPG。

平台範圍：發行商平台表及 Steam 均確認 Windows PC 原生版；此紀錄不包含同名研究論文或其他作品。

別名：look outside

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3373660&l=english)：Steam 正式商品 3373660：Look Outside；開發者 Francis Coulombe；發行商 Devolver Digital；已發售；原生桌機平台 Windows；未標 Early Access。
- [官方平台來源](https://influencers.devolverdigital.com/look-outside)：發行商 Creator Resources 明列平台 Windows PC、開發者 Francis Coulombe、發售日 2025-03-21。

- [收錄熱度來源](https://store.steampowered.com/appreviews/3373660?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=15255，total_positive=14985，total_negative=270；計算正評率 98.2%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## ULTRAKILL

indie｜PC｜early-access｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 247,187 則，正評 97.3%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Arsi Hakita Patala 開發、New Blood Interactive 發行的 ULTRAKILL 本篇，非免費 Prelude Demo。

平台範圍：已確認 Windows PC 搶先體驗版；控制器相容、Steam Deck/Proton 或雲端遊玩不視為額外原生主機或 Linux 版本。

別名：ultrakill

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1229490&l=english)：Steam 正式商品 1229490：ULTRAKILL；開發者 Arsi "Hakita" Patala；發行商 New Blood Interactive；已發售；原生桌機平台 Windows；仍標 Early Access。

- [收錄熱度來源](https://store.steampowered.com/appreviews/1229490?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=247187，total_positive=240627，total_negative=6560；計算正評率 97.3%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Elin

indie｜PC｜early-access｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 9,313 則，正評 93.3%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Lafrontier 開發的 Elin，是 Elona 後繼作品；不與 Elona 或名稱含 Relink 的遊戲合併。

平台範圍：Windows PC 搶先體驗；官方明言未正式支援 Mac 與 ARM Windows，虛擬機 workaround 不作平台證據。

別名：elin

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2135150&l=english)：Steam 正式商品 2135150：Elin；開發者 Lafrontier；發行商 Lafrontier；已發售；原生桌機平台 Windows；仍標 Early Access。
- [官方平台來源](https://ylvania.org/elin_dev_e.html)：Lafrontier 官方疑難排解明言 Mac 與 ARM Windows 目前非正式支援；Mac Parallels 的 workaround 不等同原生 Mac 發行。

- [收錄熱度來源](https://store.steampowered.com/appreviews/2135150?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=9313，total_positive=8689，total_negative=624；計算正評率 93.3%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Caves of Qud

indie｜PC/macOS/Linux/Switch｜released｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 12,754 則，正評 95.0%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Freehold Games 開發、Kitfox Games 發行的 Caves of Qud 本篇；不把 Diaspora 擴充包當另一款本篇。

平台範圍：Windows PC、macOS、Linux 與 Switch 本篇已發售；Switch 2 原生版日期仍未定，Switch 版相容不算原生 Switch 2；手機移植仍開發中。

別名：caves of qud

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=333640&l=english)：Steam 正式商品 333640：Caves of Qud；開發者 Freehold Games；發行商 Kitfox Games；已發售；原生桌機平台 Windows、macOS、Linux；未標 Early Access。
- [官方平台來源](https://www.cavesofqud.com/)：遊戲官網列 PC、Linux、Mac 並連結 Nintendo Switch 正式商店。
- [官方平台來源](https://www.nintendo.com/us/store/products/caves-of-qud-switch/)：Nintendo 本篇正式商品頁，對應 Kitfox Games 發行的 Switch 遊戲。
- [官方平台來源](https://kitfoxgames.notion.site/Caves-of-Qud-Press-Kit-4d504c02bb4d4791a837c43f6bb0b976)：Kitfox 官方 press kit 明列桌機 1.0 於 2024-12-05、Switch 於 2026-02-16，Switch 2 日期仍為問號。
- [官方平台來源](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706677829)：2026-10-15 官方公告再次確認手機移植仍在獨立開發時程，未稱已發售。

- [收錄熱度來源](https://store.steampowered.com/appreviews/333640?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=12754，total_positive=12120，total_negative=634；計算正評率 95.0%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Stoneshard

indie｜PC/Linux｜early-access｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 35,913 則，正評 74.7%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Ink Stains Games 的 Stoneshard 付費本篇，非 Stoneshard: Prologue。

平台範圍：Windows PC、Linux 搶先體驗已可遊玩；以現行官方 PC/Linux 平台表為準，未把歷史主機目標當作已上市，亦非免費 Prologue。

別名：stoneshard、紫色晶石

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=625960&l=english)：Steam 正式商品 625960：Stoneshard；開發者 Ink Stains Games；發行商 HypeTrain Digital；已發售；原生桌機平台 Windows、Linux；仍標 Early Access。
- [官方平台來源](https://stoneshard.com/presskit/sheet.php?p=stoneshard)：Ink Stains Games 官方 factsheet 的 Platforms 僅列 PC/Linux，日期為 2020-02-06；現行 Steam 同列 Windows、Linux 與搶先體驗。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=625960&l=tchinese)：同一 Steam 商品 625960 的官方 繁中商品名為「紫色晶石」，並沿用同一商品平台資料；作精確中文別名。

- [收錄熱度來源](https://store.steampowered.com/appreviews/625960?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=35913，total_positive=26825，total_negative=9088；計算正評率 74.7%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Songs of Syx

indie｜PC/macOS/Linux｜early-access｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 9,451 則，正評 94.2%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Gamatron 的 Songs of Syx 城邦模擬本篇，非原聲帶或免費 demo 商品。

平台範圍：Windows PC、macOS、Linux 原生搶先體驗版；付費版本與落後數月的免費 demo 區分。

別名：songs of syx、希克斯之歌

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1162750&l=english)：Steam 正式商品 1162750：Songs of Syx；開發者 Gamatron AB；發行商 Gamatron AB；已發售；原生桌機平台 Windows、macOS、Linux；仍標 Early Access。
- [官方平台來源](https://songsofsyx.itch.io/songs-of-syx)：作者官方商店列 Windows、macOS、Linux，並提供三種系統完整付費下載檔；明確標為開發中。
- [官方平台來源](https://www.songsofsyx.com/)：官方網站連結 Steam、GOG 與作者 itch.io，確認來源為同一作品；免費版本是落後數月的 demo。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1162750&l=schinese)：同一 Steam 商品 1162750 的官方 簡中商品名為「希克斯之歌」，並沿用同一商品平台資料；作精確中文別名。

- [收錄熱度來源](https://store.steampowered.com/appreviews/1162750?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=9451，total_positive=8901，total_negative=550；計算正評率 94.2%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Bopl Battle

indie｜PC｜released｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 26,114 則，正評 97.2%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：Johan Grönvall / Zapray Games 的黏液多人格鬥本篇，非 Bopl Battle Demo。

平台範圍：目前可由官方商品確認的已發售原生版為 Windows PC；Remote Play Together、控制器支援不當作額外主機或手機移植。

別名：bopl battle

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1686940&l=english)：Steam 正式商品 1686940：Bopl Battle；開發者 Johan Grönvall；發行商 Zapray Games；已發售；原生桌機平台 Windows；未標 Early Access。
- [官方平台來源](https://zapraygames.com/)：開發者官網以 Bopl Battle 為正式作品並連往 Steam；Steam 商品由 Johan Grönvall 開發、Zapray Games 發行。

- [收錄熱度來源](https://store.steampowered.com/appreviews/1686940?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=26114，total_positive=25372，total_negative=742；計算正評率 97.2%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Mage Arena

indie｜PC｜early-access｜平台查核verified

熱度依據：Steam 官方評論 API 全語言、全部取得方式累積 20,477 則，正評 90.8%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

身分：jrsjams 開發發行、Steam App 3716600 的 Mage Arena，非 Magic: The Gathering Arena、Mages Arena 或 Tactics Mage Arena。

平台範圍：Windows PC 搶先體驗；語音施法與連線遊玩是遊戲功能，未將同名手機 App、雲端或控制器支援誤列為原生移植。

別名：mage arena

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3716600&l=english)：Steam 正式商品 3716600：Mage Arena；開發者 jrsjams；發行商 jrsjams；已發售；原生桌機平台 Windows；仍標 Early Access。

- [收錄熱度來源](https://store.steampowered.com/appreviews/3716600?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=20477，total_positive=18594，total_negative=1883；計算正評率 90.8%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。
