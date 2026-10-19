# 獨立遊戲擴充第二輪研究（2026-10-19）

本輪保留 14 款：13 款平台已核實，1 款部分核實（BeamNG.drive 的 PS5 正式上市狀態）。研究僅產出候選，不修改 games.json。查核時既有目錄 1,002 筆。

## 口徑與邊界

- 熱度採實際讀取的 Steam 官方評論 API：`language=all&purchase_type=all&filter=all&num_per_page=0`，記錄全語言、全部取得方式累積評論數及正負評；不是當日熱銷榜、同時在線、銷量或跨平台排名，數字可能高於商店預設的 Steam 購買評論口徑。
- 編輯優先級 3 最高、2 次之。本組以累積評論至少 50,000 則優先給 3，其餘有至少 10,000 則評論的候選給 2；這是本組編輯取捨，不稱官方名次。
- Steam 原生 OS 由官方商品 API 實讀；主機與手機以發行商／平台商店補證。Windows 使用目錄慣例 PC；macOS、Linux 分列；原生實驗版、未上市、相容執行及手機不同商業版本均另註。
- Steam 繁／簡中標題已逐一查核；標題仍英文者不猜中文翻譯。Lobotomy 的「脑叶公司」取自官方簡中商品介紹，並非自行翻譯。依整合需求，既有官方中文名的獨立中文部分及繁簡字形另作搜尋別名；繁體字形不是額外聲稱官方繁中標題。
- 去重涵蓋全部既有 name／alias／seriesAliases，使用 NFKC、大小寫與標點空白正規化，再比對來源中的 Steam 商品 ID。未命中同作；候選本身無跨作品共用別名。Blue Prince 已收錄所以排除；9 Kings 留予手機組協調，本組不新增。

## 候選總表

| 遊戲 | 已確認平台 | 狀態 | 累積評論／正評率 | 優先級 |
|---|---|---|---|---|
| Kenshi | PC | verified | 117,489／95.6% | 3 |
| Barotrauma | PC/macOS/Linux | verified | 90,479／94.0% | 3 |
| People Playground | PC | verified | 321,665／97.5% | 3 |
| Scrap Mechanic | PC | verified | 123,283／91.8% | 3 |
| BeamNG.drive | PC/Linux | partial | 424,105／97.2% | 3 |
| Dwarf Fortress（Premium版） | PC/Linux | verified | 31,594／94.7% | 2 |
| Death Must Die | PC/macOS | verified | 21,806／90.1% | 2 |
| Tiny Rogues | PC | verified | 10,811／96.0% | 2 |
| Lobotomy Corporation | PC | verified | 57,982／94.3% | 3 |
| shapez 2 | PC/macOS/Linux | verified | 15,493／96.9% | 2 |
| Kingdom Two Crowns | PC/macOS/Linux/PS4/Xbox One/Xbox Series X\|S/Switch/iOS/Android | verified | 41,296／90.0% | 2 |
| Ravenswatch | PC/PS4/PS5/Xbox One/Xbox Series X\|S/Switch | verified | 23,100／79.8% | 2 |
| Besiege | PC/macOS/Linux/PS4/PS5/Xbox One/Xbox Series X\|S/Switch/iOS/Android | verified | 53,381／95.1% | 3 |
| Halls of Torment | PC/Linux/PS5/Xbox Series X\|S/iOS/Android | verified | 31,963／95.3% | 2 |

## 逐款官方證據

### Kenshi

Lo-Fi Games 開發與發行的第一作 Kenshi。

已確認 Windows PC 原生版；本條目是第一作，不混入 Kenshi 2 的開發資訊。

發行狀態：released。Steam 7 Dec, 2018 發售本篇／正式版。

官方別名：kenshi。

- Steam 正式商品 233860：Kenshi；開發者 Lo-Fi Games；發行商 Lo-Fi Games；coming_soon=false，桌機原生平台 windows；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=233860&l=english)
- Lo-Fi 官方介紹本作為沙盒 PC RPG，系統需求列 64 位元 Windows。 [官方來源](https://lofigames.com/about-kenshi/)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=117489，total_positive=112313，total_negative=5176；計算正評率 95.6%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/233860?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### Barotrauma

FakeFish、Undertow Games 開發、Daedalic 發行的商業版 Barotrauma。

Steam 正式商品確認 Windows、macOS、Linux 原生客戶端；伺服器與模組不是其他平台移植。

發行狀態：released。Steam 13 Mar, 2023 發售本篇／正式版。

官方標題及搜尋別名：barotrauma；Barotrauma 潜渊症；潜渊症；潛淵症。

- Steam 正式商品 602960：Barotrauma；開發者 FakeFish、Undertow Games；發行商 Daedalic Entertainment；coming_soon=false，桌機原生平台 windows、mac、linux；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=602960&l=english)
- 同一 Steam 商品的官方簡中標題為「Barotrauma 潜渊症」，作為精確中文別名。另加入該官方中文題名的獨立中文部分／繁簡字形作搜尋別名；字形轉換不宣稱是另有官方繁中命名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=602960&l=schinese)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=90479，total_positive=85073，total_negative=5406；計算正評率 94.0%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/602960?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### People Playground

mestiez 開發、Studio Minus 發行的 Steam 商品 1118200。

已確認 Windows PC 原生版；不把同名手機或網頁第三方作品視為 Studio Minus 官方移植。

發行狀態：released。Steam 23 Jul, 2019 發售本篇／正式版。

官方別名：people playground。

- Steam 正式商品 1118200：People Playground；開發者 mestiez；發行商 Studio Minus；coming_soon=false，桌機原生平台 windows；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=1118200&l=english)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=321665，total_positive=313583，total_negative=8082；計算正評率 97.5%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/1118200?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### Scrap Mechanic

Axolot Games 的 Scrap Mechanic 本篇；Drilling Thunder 是 1.0 更新內容。

已確認 Windows PC 原生版；2026-07-24 的 1.0／Drilling Thunder 已正式發布，非仍在搶先體驗。

發行狀態：released。Steam 24 Jul, 2026 發售本篇／正式版。

官方別名：scrap mechanic。

- Steam 正式商品 387990：Scrap Mechanic；開發者 Axolot Games；發行商 Axolot Games；coming_soon=false，桌機原生平台 windows；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=387990&l=english)
- 官方 2026-07-24 公告 Scrap Mechanic 1.0 and Drilling Thunder! NOW AVAILABLE，確認退出搶先體驗。 [官方來源](https://steamcommunity.com/games/387990/announcements/detail/684133298613520064)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=123283，total_positive=113157，total_negative=10126；計算正評率 91.8%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/387990?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### BeamNG.drive

BeamNG GmbH 的消費者駕駛遊戲 BeamNG.drive，不是專業產品 BeamNG.tech。

Windows PC 已提供；Linux 是官方隨遊戲提供的原生實驗版，官方不提供該實驗版客服，可能不穩定，並非 Proton 推論。PS5 官方預定 2026-10-19，但本輪查核 Sony 頁仍為 Announced／Add to Wishlist 與開賣倒數，未取得正式可購買證據，因此未列已上市主欄，保留 partial。

發行狀態：early-access。Steam May 29, 2015 進入搶先體驗；目前仍為 Early Access。

官方別名：beamng.drive。

- Steam 正式商品 284160：BeamNG.drive；開發者 BeamNG；發行商 BeamNG；coming_soon=false，桌機原生平台 windows；標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=284160&l=english)
- 官方桌機需求頁明列 Microsoft Windows 與 Linux（experimental），不能只因 Steam OS 欄未列 Linux 就排除官方原生實驗版。 [官方來源](https://docs.beamng.com/support/troubleshooting/requirements/)
- 官方公告從 0.25 起內含 Linux 實驗版，且不提供該實驗版的客戶支援。 [官方來源](https://www.beamng.com/game/news/announce/experimental-linux-support/)
- 官方 2026-09-24 公告 PS5 預定 2026-10-19，發售初期無 VR 與 mods；公告日期不能證明已經上線。 [官方來源](https://www.beamng.com/game/news/announce/ps5-release-date/)
- Sony 正式商品列 BEAMNG GMBH、PS5、2026-10-19 與 Early Access；本輪頁面仍是 Announced、Add to Wishlist 及約 1.5 小時倒數，沒有可購買上市狀態。 [官方來源](https://store.playstation.com/en-us/concept/10015321/)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=424105，total_positive=412204，total_negative=11901；計算正評率 97.2%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/284160?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

待補證代碼：`announced-console-release-unconfirmed`。PS5 官方預定 2026-10-19，但本輪 Sony 頁仍標 Announced／Add to Wishlist 與開賣倒數，未取得實際可購買或已上市公告。主欄僅列已提供的 Windows 與官方原生 Linux 實驗版；不宣稱取消。

### Dwarf Fortress（Premium版）

Bay 12 Games 開發、Kitfox Games 發行的 Premium 付費圖形版，不是另一筆 Classic 免費版條目。

本條目限定 2022 年起的付費圖形版（Steam／itch.io）；兩店均列 Windows、Linux。Classic 免費舊版的 Mac 發行史不套入此版，也不把長期開發等同 Steam Early Access。

發行狀態：released。Steam 6 Dec, 2022 發售本篇／正式版。

官方別名：dwarf fortress。

- Steam 正式商品 975370：Dwarf Fortress；開發者 Bay 12 Games；發行商 Kitfox Games；coming_soon=false，桌機原生平台 windows、linux；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=975370&l=english)
- 發行商 Kitfox 正式付費商品列 Windows、Linux，提供 53.16 對應安裝包並附 Steam key；與 Steam 商品 975370 相連。 [官方來源](https://kitfoxgames.itch.io/dwarf-fortress)
- Bay 12 官方把 Steam／itch.io 商業商品與下方 Dwarf Fortress Classic 免費下載分列，支持版本邊界。 [官方來源](https://www.bay12games.com/dwarves/)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=31594，total_positive=29929，total_negative=1665；計算正評率 94.7%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/975370?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### Death Must Die

Realm Archive 開發與發行的 Death Must Die 本篇。

Steam 確認 Windows、macOS 原生版；仍為 Early Access。Steam Deck／Proton 相容不當成 Linux 原生版。

發行狀態：early-access。Steam 14 Nov, 2023 進入搶先體驗；目前仍為 Early Access。

官方別名：death must die。

- Steam 正式商品 2334730：Death Must Die；開發者 Realm Archive；發行商 Realm Archive；coming_soon=false，桌機原生平台 windows、mac；標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2334730&l=english)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=21806，total_positive=19647，total_negative=2159；計算正評率 90.1%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/2334730?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### Tiny Rogues

RubyDev 開發與發行的 Tiny Rogues 本篇。

目前為 Windows PC 搶先體驗。開發者 FAQ 將 macOS 支援列為 1.0 當時或之後的計畫，尚未列已上市；Linux 說明是 Proton 相容回報，非原生支援。

發行狀態：early-access。Steam 23 Sep, 2022 進入搶先體驗；目前仍為 Early Access。

官方別名：tiny rogues。

- Steam 正式商品 2088570：Tiny Rogues；開發者 RubyDev；發行商 RubyDev；coming_soon=false，桌機原生平台 windows；標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2088570&l=english)
- RubyDev 的置頂 FAQ（2023-10-31 更新）說 macOS 支援安排於 1.0 當時或之後；Linux 原生支援未確定，所述是 Proton。現行 Steam 仍為 EA 且僅列 Windows，故不提前列 Mac／Linux。 [官方來源](https://steamcommunity.com/app/2088570/discussions/0/3361397532259774742/)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=10811，total_positive=10381，total_negative=430；計算正評率 96.0%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/2088570?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### Lobotomy Corporation

ProjectMoon 的 Lobotomy Corporation | Monster Management Simulation；官方 Steam 簡中商品介紹明稱「脑叶公司」。

已確認 Windows PC 原生版；不混入 Library of Ruina、Limbus Company 等同世界觀作品的平台。

發行狀態：released。Steam 9 Apr, 2018 發售本篇／正式版。

官方標題及搜尋別名：lobotomy corporation | monster management simulation；lobotomy corporation；脑叶公司；腦葉公司。

- Steam 正式商品 568220：Lobotomy Corporation | Monster Management Simulation；開發者 ProjectMoon；發行商 ProjectMoon；coming_soon=false，桌機原生平台 windows；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=568220&l=english)
- 同一正式商品的簡中 short_description 以「脑叶公司是一款管理怪物的模拟游戏」辨識本作，因此加入「脑叶公司」別名。另加入該官方中文題名的獨立中文部分／繁簡字形作搜尋別名；字形轉換不宣稱是另有官方繁中命名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=568220&l=schinese)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=57982，total_positive=54658，total_negative=3324；計算正評率 94.3%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/568220?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### shapez 2

tobspr Games 的續作 shapez 2（Steam 現名 shapez 2 - Factory），不是初代 shapez 的手機移植。

Steam 確認 Windows、macOS、Linux 原生版；官方確認已在 2026-04-23 發布 1.0，不再標搶先體驗。

發行狀態：released。Steam 23 Apr, 2026 發售本篇／正式版。

官方別名：shapez 2 - factory；shapez 2；異形工廠2；异形工厂2。

- Steam 正式商品 2162800：shapez 2 - Factory；開發者 tobspr Games；發行商 tobspr Games、Gamirror Games；coming_soon=false，桌機原生平台 windows、mac、linux；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2162800&l=english)
- 官方網站說明 2026-04-23 退出 Early Access、推出 1.0，並連到 Steam 正式商品。 [官方來源](https://shapez2.com/)
- 同一 Steam 商品的官方繁中標題為「異形工廠2」，作為精確中文別名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2162800&l=tchinese)
- 同一 Steam 商品的官方簡中標題為「异形工厂2」，作為精確中文別名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2162800&l=schinese)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=15493，total_positive=15017，total_negative=476；計算正評率 96.9%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/2162800?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### Kingdom Two Crowns

Kingdom 系列的 Two Crowns 本篇；不把 Classic、New Lands、Eighties 或系列合集視為本作。

桌機三 OS、PS4、Xbox One／Series X|S、Switch 與 iOS／Android 已確認。Xbox 商店明列 Series 最佳化；PS5 是 PS4 相容執行，官網圖片檔名及跨作品合集的 PS5 標籤不作本作原生版證據。Switch 2 的相容標示亦不新增原生平台。

發行狀態：released。Steam 11 Dec, 2018 發售本篇／正式版。

官方標題及搜尋別名：kingdom two crowns；王国：两位君主；王國：兩位君主。

- Steam 正式商品 701160：Kingdom Two Crowns；開發者 Fury Studios、Coatsink；發行商 Raw Fury；coming_soon=false，桌機原生平台 windows、mac、linux；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=701160&l=english)
- Sony 本篇商品 Platform 明列 PS4，底部明示 PS5 為相容執行；不能從同頁跨作品合集標籤推定本篇有 PS5 原生版。 [官方來源](https://store.playstation.com/en-us/product/UP2320-CUSA13597_00-KINGDOMTWOCROWNS)
- Xbox 正式本篇商品列 Xbox One、Xbox Series X|S 及 Optimized for Xbox Series X|S，並有發售日期與價格；雲端服務不另算原生平台。 [官方來源](https://www.xbox.com/en-US/games/store/kingdom-two-crowns/bwt2gpvwch2f)
- Nintendo 本篇商品標示 System Nintendo Switch、2018-12-11 發售；Switch 2 另列為相容資訊。 [官方來源](https://www.nintendo.com/us/store/products/kingdom-two-crowns-switch/)
- Raw Fury 的付費 App Store 本篇商品明列 iPhone／iPad，已有版本與評分。 [官方來源](https://apps.apple.com/us/app/kingdom-two-crowns/id1477991646)
- Raw Fury 正式 Android 付費商品 com.rawfury.kingdom2crowns 可購買，非系列其他作。 [官方來源](https://play.google.com/store/apps/details/?hl=en-US&id=com.rawfury.kingdom2crowns)
- 同一 Steam 商品的官方簡中標題為「王国：两位君主」，作為精確中文別名。另加入該官方中文題名的獨立中文部分／繁簡字形作搜尋別名；字形轉換不宣稱是另有官方繁中命名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=701160&l=schinese)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=41296，total_positive=37148，total_negative=4148；計算正評率 90.0%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/701160?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### Ravenswatch

Passtech Games 開發、Nacon 發行的 Ravenswatch 本篇；不混同前作 Curse of the Dead Gods。

Steam Windows PC、PS4／PS5、Xbox One／Series X|S 與 Switch 已上市；Nintendo 的 Switch 2 相容標示不算原生新版本。

發行狀態：released。Steam 27 Sep, 2024 發售本篇／正式版。

官方標題及搜尋別名：ravenswatch；Ravenswatch 鸦卫奇旅；鸦卫奇旅；鴉衛奇旅。

- Steam 正式商品 2071280：Ravenswatch；開發者 Passtech Games；發行商 Nacon；coming_soon=false，桌機原生平台 windows；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2071280&l=english)
- Sony 標準版商品同時列 PS4／PS5 與可購買價格，是本篇雙世代版本。 [官方來源](https://store.playstation.com/en-us/product/EP6665-PPSA09253_00-RW00000000000000/)
- Nacon 的 Xbox 本篇商品列 2024-11-28 發售、Xbox One、Series X|S 最佳化及 Smart Delivery。 [官方來源](https://www.xbox.com/en-US/games/store/game/9P4NX9RD7FRG)
- Nintendo 商品明列 Nintendo Switch、2025-01-23 發售；Switch 2 單獨標示相容。 [官方來源](https://www.nintendo.com/au/games/nintendo-switch/ravenswatch/)
- 同一 Steam 商品的官方繁中標題為「Ravenswatch 鸦卫奇旅」，作為精確中文別名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2071280&l=tchinese)
- 同一 Steam 商品的官方簡中標題為「Ravenswatch 鸦卫奇旅」，作為精確中文別名。另加入該官方中文題名的獨立中文部分／繁簡字形作搜尋別名；字形轉換不宣稱是另有官方繁中命名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2071280&l=schinese)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=23100，total_positive=18434，total_negative=4666；計算正評率 79.8%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/2071280?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### Besiege

Spiderling Studios 的 Besiege 本篇及其官方移植，不混入續作或同名仿作。

桌機三 OS 與主機、手機移植均有官方來源。主機版為 Console／PlayStation／Switch 移植，內容與 PC 更新進度可能不同；手機為 Playdigious 官方移植（2025-11-18），不是模擬器。Switch 2 相容不列成原生版。

發行狀態：released。Steam 18 Feb, 2020 發售本篇／正式版。

官方別名：besiege；圍攻；围攻。

- Steam 正式商品 346010：Besiege；開發者 Spiderling Studios；發行商 Spiderling Studios；coming_soon=false，桌機原生平台 windows、mac、linux；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=346010&l=english)
- Sony 商品頁列已上市 PS4 本篇，Editions 也分列可購買的 PS5 與 PS4 商品；因此 PS5 不只靠相容說明。 [官方來源](https://store.playstation.com/en-us/product/UP4865-CUSA26962_00-BESIEGE000000000/)
- Spiderling 的 Besiege Console 正式商店列 Xbox One、Xbox Series X|S，並有 Series 最佳化與 Smart Delivery。 [官方來源](https://www.xbox.com/en-us/games/store/Besiege-Console/9PPFBQG81Q5J)
- Nintendo 正式商品列 Switch、Spiderling Studios／Ultimate Games 與 2024-09-12 發售。 [官方來源](https://www.nintendo.com/pt-br/store/products/besiege-switch/)
- 手機移植發行商 Playdigious 的本作支援 FAQ 明確說 Android／iOS 自 2025-11-18 已可遊玩。 [官方來源](https://playdigious.helpshift.com/hc/en/33-besiege/faq/595-when-is-besiege-coming-out-on-mobile/?p=android)
- 同一 Steam 商品的官方繁中標題為「圍攻」，作為精確中文別名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=346010&l=tchinese)
- 同一 Steam 商品的官方簡中標題為「围攻」，作為精確中文別名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=346010&l=schinese)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=53381，total_positive=50776，total_negative=2605；計算正評率 95.1%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/346010?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

### Halls of Torment

Chasing Carrots 的 Halls of Torment 本篇；手機僅涵蓋 Halls of Torment: Premium 付費移植，排除 Prelude demo 與同名免費手機改編版。

本條目包含 Windows／Linux、PS5／Xbox Series X|S 本篇與 Erabit 的手機 Premium 移植。另有免費手機版本，商業模式及內容不同，未混作 Premium；Apple Silicon Mac 可執行 iOS App 不新增獨立 macOS 原生版。

發行狀態：released。Steam 24 Sep, 2024 發售本篇／正式版。

官方標題及搜尋別名：halls of torment；Halls of Torment 苦痛殿堂；苦痛殿堂。

- Steam 正式商品 2218750：Halls of Torment；開發者 Chasing Carrots；發行商 Chasing Carrots；coming_soon=false，桌機原生平台 windows、linux；未標示 Early Access。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2218750&l=english)
- Chasing Carrots 正式付費 Sony 商品明列 PS5，不是 Prelude 試玩。 [官方來源](https://store.playstation.com/nl-nl/product/EP1592-PPSA28037_00-0504920833556201)
- Xbox 本篇商品明列 2025-10-28 發售、Series X|S 最佳化與 PC；不將雲端列為原生平台，也不混入 Demo SKU。 [官方來源](https://www.xbox.com/en-US/games/store/halls-of-torment/9nmnms626r59)
- App Store 的 Halls of Torment: Premium 是已發行付費 iPhone／iPad 商品；相容欄的 M1 Mac 為 iOS App 執行相容性。 [官方來源](https://apps.apple.com/us/app/halls-of-torment-premium/id6504841512)
- Erabit Studios Android 付費 Premium 商品 com.halls.of.torment.paid.gp 明示這是 Steam 遊戲手機移植；另列免費 Halls of Torment，不把兩者商業版本混同。 [官方來源](https://play.google.com/store/apps/details?hl=en-CA&id=com.halls.of.torment.paid.gp)
- 同一 Steam 商品的官方繁中標題為「Halls of Torment 苦痛殿堂」，作為精確中文別名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2218750&l=tchinese)
- 同一 Steam 商品的官方簡中標題為「Halls of Torment 苦痛殿堂」，作為精確中文別名。另加入該官方中文題名的獨立中文部分／繁簡字形作搜尋別名；字形轉換不宣稱是另有官方繁中命名。 [官方來源](https://store.steampowered.com/api/appdetails?appids=2218750&l=schinese)
- 熱度：language=all、purchase_type=all、filter=all；total_reviews=31963，total_positive=30458，total_negative=1505；計算正評率 95.3%。包含全部取得方式，與商店預設 Steam 購買評論數可能不同。 [Steam 官方評論 API](https://store.steampowered.com/appreviews/2218750?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)

## 查核限制與驗證

BeamNG 的 PS5 發售日正好是查核當日；Sony 頁仍是 Announced／Add to Wishlist 及倒數，不能把日期抵達當作已經發售。本筆保留 partial，沒有 platformVerifiedAt，不等待或反覆輪詢開賣。Linux 則有開發者直接原生實驗版公告，與這個 PS5 缺口分開。

Tiny Rogues 的 macOS 是開發者明確連結 1.0 的未來計畫；現行商品仍為 EA，所以主欄維持 Windows，Linux 的 Proton 回報不作原生證據。Dwarf Fortress 僅列 Premium 付費圖形版，Classic 舊版平台不混入。Kingdom Two Crowns 官網圖片與跨作品合集含 PS5 字樣，採本篇 Sony 商品的 PS4 平台欄及相容說明；Xbox 則有 Series 最佳化證據，兩者不互相類推。

Steam 全量 API、官方新聞與平台商店已於本輪讀取；部分開發商站點受到 Cloudflare 或連線限制（Studio Minus、Lobotomy 舊官網），沒有把失敗頁當證據，改用其官方 Steam 商品資料。同名第三方手機作品不併入。

JSON read-back 驗證 14 筆、13 verified／1 partial；名稱／別名與 Steam 商品 ID 對既有 1,002 筆無重複；所有 evidence.source 均在 platformSources，popularityEvidence.source 均在 sources；所有平台字串斜線旁無空白，partial 無 platformVerifiedAt。父代理負責後續整合與完整回歸。

