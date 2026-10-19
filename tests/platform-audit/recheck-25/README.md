# 剩餘25筆：拆為具體作品

日期2026-10-19。處理25筆，19個系列／同名入口拆成41個具體作品（含9個現有版本重用）；另6筆保留具體作品／缺口查核。新增32筆、移除19個泛稱入口、1筆補識別副標；目前977款。930筆無關資料逐欄保留；剩6個缺口。

系列泛稱存為搜尋詞，不是單一作品別名；輸入泛稱必須先選定版本。平台SKU合併為同一作品並註記內容／相容差異，代表版本不宣稱涵蓋完整系列。

[逐欄變更](audit-25.json) · [剩餘缺口](pending.json) · [驗證](VALIDATION.md)

重現：`node tests/platform-audit/recheck-25/apply-review.cjs`，加`--apply`套用。目錄與歷史審計均須符合完整前值或預期值，才可寫入。舊輪整合器不適用目前目錄。

## 絕命暗殺令

split：以既有HITMAN系列關聯拆為已證實首作與現代WOA；舊中文泛稱僅作搜尋導流，不當成官方作品名稱。現有2016／2代保持原條目。

### Hitman: Codename 47

verified｜PC

IOI 首作，2000 年原作；Steam 顯示的 2007 是商店上架時間，並非原作首發。Windows 原生版本，不混入 2016 HITMAN。



- [官方來源](https://store.steampowered.com/api/appdetails?appids=6900&l=english&cc=us)
- [官方來源](https://ioi.dk/en-us/about)

### 刺客任務3

verified｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch 2/macOS/iOS

HITMAN 3 現整合為 World of Assassination；依 IOI 3.280 平台更新表確認本作，Switch 雲端版不計原生平台，Switch 2 Signature Edition 是同作品獨立移植，不另增重複條目。



- [官方來源](https://ioi.dk/hitman/patch-notes/2026/game-update-3-280)
- [官方來源](https://ioi.dk/hitman/news/2025/signature-edition-available-now)

## 模擬城市

split：拆分2013同名作與4代豪華版，原simcity泛稱改為多候選搜尋。

### SimCity（2013）

verified｜PC/macOS

EA 2013-09-19 公告明列 SimCity 本體已在 Mac／PC 提供；此為2013同名作品，不是系列或初代。歷史Mac發行不保證現代macOS相容。



- [官方來源](https://news.ea.com/press-releases/press-releases-details/2013/SimCity-Cities-of-Tomorrow-Expansion-Pack-Coming-November-12/default.aspx)

### SimCity 4 Deluxe Edition

verified｜PC/macOS

4代加資料片豪華商品，Steam API Windows／Mac 為真；不與2013同名作品或手機BuildIt合併。



- [官方來源](https://store.steampowered.com/api/appdetails?appids=24780&l=english&cc=us)

## 農場模擬器系列

split：既有25與22均可直接沿用，移除系列空殼而不新增重複SKU。

### Farming Simulator 25

verified｜PC/macOS/PS5/Xbox Series X|S

GIANTS 2026-09-29 官方已上市平台列 PC、Mac、PS5、Xbox Series X|S；同一遊戲各平台合為一筆，不複製電腦與PS5商品。



- [官方來源](https://press.giants-software.com/5)

### 農場模擬器22

verified｜PC/macOS/PS5/PS4/Xbox One/Xbox Series X|S

GIANTS FS22 官方新聞明列 PC、Mac、PS5、PS4、Xbox One、Xbox Series X|S。歷史Stadia雲端不列原生平台。



- [官方來源](https://press.giants-software.com/category/fs22)

## 微軟模擬飛行

split：拆2020及2024，重用現有2024。

### Microsoft Flight Simulator（2020）

verified｜PC/Xbox Series X|S

官方2020作品頁列PC與Xbox Series X|S；不是2024新版，不套用後作PS5平台。



- [官方來源](https://www.flightsimulator.com/microsoft-flight-simulator-2020/)

### Microsoft Flight Simulator 2024

verified｜PC/PS5/Xbox Series X|S

官方現行2024作品頁列PC、Xbox Series X|S、PS5，PS5 Pro同屬PS5；PS5 2025-12-08上市，與2020作分開。



- [官方來源](https://www.flightsimulator.com/microsoft-flight-simulator-2024/)

## 遊戲王 World Championship

split：按具名年度拆出 2006 與 2011 兩款遊戲；2006 套組中的 ONLINE 安裝片是另一作品，不構成卡匣遊戲的 PC 版。

### 遊戲王 Duel Monsters Expert 2006

verified｜GBA

KONAMI 明列 Expert 2006 於 2006-02-23 在 Game Boy Advance 發行；World Championship 2006 套組收錄本作，另附的遊戲王 ONLINE 安裝片不得併入平台。



- [官方來源](https://www.konami.com/games/jp/ja/products/yugioh_ex2006_gba/)
- [官方來源](https://www.konami.com/games/jp/ja/products/yugioh_ex2006_set_gba/)

### 遊戲王 5D's World Championship 2011: Over the Nexus

verified｜DS

KONAMI 明列 2011-02-24、Nintendo DS。3DS 執行 DS 卡匣屬相容性，不另列為原生平台。



- [官方來源](https://www.konami.com/games/jp/ja/products/yugioh_wcs2011_ds/)

## 流亡黯道 手機版

correct：官方具名手機專案身分明確，保留本條；本輪重讀官方 2019 公告及 2023 展場試玩資料，沒有足以保證現在仍將推出的發行時程，將 upcoming 改為 unknown，作業系統繼續保持未公布。

### 流亡黯道 手機版

partial｜行動裝置（系統未公布）｜unknown

GGG 官方 2019 年回顧確認 Path of Exile Mobile 專案，2023 ExileCon 公告確認曾提供試玩。本輪仍缺具體 iOS／Android 正式發行清單與近期推出計畫；行動裝置的系統未公布，不表示斷言未來不推出。展場試玩不是正式上市；目前發行狀態未知，不承諾仍在開發或即將推出。



- [官方來源](https://www.pathofexile.com/forum/view-thread/3396409)
- [官方來源](https://www.pathofexile.com/forum/view-thread/2722003)

## 巫師 重製版

retain：已是初代完整重製的具體作品；新增開發商現行產品頁確認仍為 Fool's Theory／CDPR 重製專案，並不借用初代原版或巫師 4 的平台。

### 巫師 重製版

partial｜未公布｜upcoming

限定 The Witcher Remake／Canis Majoris，重製《巫師》初代。Fool's Theory 現行產品頁確認開發中，CDPR 2026 年 6 月產品展望也仍列本案；取得的官方資料均未列具體發行平台，主欄保持未公布。PC／PS5 未獲確認，非斷言未來不推出；不與 2007 原版、Enhanced Edition、巫師 3 更新或巫師 4 混用。



- [官方來源](https://www.thewitcher.com/us/en/news/46225/the-witcher-remake-is-in-development)
- [官方來源](https://www.cdprojekt.com/en/wp-content/uploads-en/2026/06/fact-sheet-june-2026.pdf)
- [官方來源](https://www.foolstheory.com/games/the-witcher/)

## 大富翁系列

split：拆4代Steam再發行與11代，11代補上前輪版本對照遺漏的PS及Xbox官方移植。

### 大富翁4（Steam版）

verified｜PC

1998作品的2022 Steam再發行；Windows規格已核對，不與另作大富翁4 Fun手機遊戲混合。



- [官方來源](https://store.steampowered.com/api/appdetails?appids=2059810&l=english&cc=us)

### 大富翁11

verified｜PC/macOS/PS5/PS4/Xbox Series X|S/Xbox One/Switch

Steam核對Windows／Mac；大宇2022公告確認Switch／Steam已上市，eastasiasoft正式產品頁及下載連結補PS4／PS5／Xbox One／Series移植。



- [官方來源](https://store.steampowered.com/api/appdetails?appids=2074800&l=english&cc=us)
- [官方來源](https://km.softstar.com.tw/list.aspx?cid=2&gc=ETC&gd=RICH)
- [官方來源](https://www.eastasiasoft.com/games/Richman-11)

## 武林群俠傳

retain：智冠官方歷史與 IP 新聞足以識別早期電腦單機原作；本輪仍未取得原版官方 Windows 系統需求或可辨識的原廠安裝說明，不借用 Online 或俠客風雲傳的規格。

### 武林群俠傳

partial｜電腦（作業系統待確認）

智冠官方確認早期電腦單機作品；Windows 的原版官方規格本輪仍未取得。未獲官方確認，非斷言 Windows 版本不存在。此條不含武林群俠傳 Online 或俠客風雲傳。



- [官方來源](https://www.soft-world.com/News/NewsDetail?Sn=1163)

## 極限脫出系列

split：拆出 VLR 原版與包含 999、VLR 重製內容的 Nonary Games 合輯；不把原作與合集的 SKU 當成多款移植遊戲。此為代表作品，不宣稱已收齊系列。

### Zero Escape: Virtue's Last Reward

verified｜3DS/PS Vita

Spike Chunsoft 回顧確認 2012 年原版在 Nintendo 3DS、PS Vita 發行；後來在 PC、PS4、Xbox One 遊玩的重製內容歸入 The Nonary Games 合輯條目。



- [官方來源](https://www.spike-chunsoft.com/news/zero-escape-the-nonary-games-available-now-for-xbox-one-and-windows-10/)

### Zero Escape: The Nonary Games

verified｜PC/PS4/PS Vita/Xbox One

官方列 2017 年 PS4、PS Vita、Steam 與 2022 年 Xbox One、Windows 10 版；Steam 規格為 Windows。此清單記錄原生發行平台，後續主機相容與雲端不另作原生版。



- [官方來源](https://www.spike-chunsoft.com/news/zero-escape-the-nonary-games-available-now-for-xbox-one-and-windows-10/)
- [官方來源](https://store.steampowered.com/app/477740/Zero_Escape_The_Nonary_Games/)

## 逆轉裁判系列

split：拆為成步堂 123 與王泥喜 456 兩款內容不同的合輯；456 重用現有條目。123 的 3DS、2019 主機/PC 與現行手機移植合併，避免只保留某次移植的平台。

### 逆轉裁判123 成步堂精選集

verified｜PC/PS4/Xbox One/Switch/3DS/iOS/Android

Capcom 2019 公告列 PS4、Xbox One、Switch、Steam；Nintendo 列 2014 年 3DS 合輯，該 eShop 已於 2023 年停止新購。CAPCOM 的現行 Apple／Google 商品確認 iOS／Android；歷史平台不代表今天仍可新購，手機相容系統以各店面為準。



- [官方來源](https://news.capcomusa.com/lets/browse/take-that-phoenix-wright-ace-attorney-trilogy-is-out-now)
- [官方來源](https://www.nintendo.com/en-gb/Games/Nintendo-3DS-download-software/Phoenix-Wright-Ace-Attorney-Trilogy-942989.html)
- [官方來源](https://apps.apple.com/us/app/ace-attorney-trilogy/id1621065119)
- [官方來源](https://play.google.com/store/apps/details?id=jp.co.capcom.gyakusai123&hl=en_US)

### 逆轉裁判456 王泥喜精選集

verified｜PC/PS4/Xbox One/Switch

Capcom 2024-01-25 上市公告明列 Nintendo Switch、PS4、Xbox One、PC Steam／Windows。保留既有四平台完整清單；各單作手機版不等於本合輯手機版。



- [官方來源](https://news.capcomusa.com/2024/01/25/take-that-apollo-justice-ace-attorney-trilogy-is-out-now/)

## 聲之形

retain：京都動畫官方明確介紹《映画 聲の形》及其漫畫原作；重新搜尋仍未找到可對應此目錄名稱的官方獨立電玩產品。不能以聯動活動或 Voice of Cards 取代。

### 聲之形

unresolved｜未確認

尚未取得以此名稱發行的獨立電玩之官方產品與平台證據；已確認的同名官方資料是漫畫改編電影。保留待釐清，非斷言任何相關電玩永不存在。



- [官方來源](https://www.kyotoanimation.co.jp/works/koeM/)

## 太鼓之達人

split：Drum Session! 與 Rhythm Festival 是不同作品；雷音祭重用現有條目，保留其四平台，新增 Drum Session!。

### Taiko no Tatsujin: Drum Session!

verified｜PS4

Bandai Namco 商品頁明列 PlayStation 4；PS5 相容執行不算原生 PS5 移植。



- [官方來源](https://www.bandainamcoent.com/games/taiko-no-tatsujin-drum-session)

### 太鼓之達人 咚咚雷音祭

verified｜PC/PS5/Xbox Series X|S/Switch

Bandai Namco 2024-11-07 上市公告同時確認 2022 Switch 版，以及新推出 PS5、Xbox Series X|S、Steam 版；同一作品合併四平台。



- [官方來源](https://www.bandainamcoent.com/news/taiko-no-tatsujin-rhythm-festival-launching-on-new-gen-consoles-and-pc)

## 迷宮飯 千年國度的荒唐食譜

retain：重新搜尋完整副標仍未找到官方電玩對應；Arclight 官方確有《モンスターイーター ～ダンジョン飯 ボードゲーム～》，但其名稱、紙牌與骰子內容物皆不能支持本條所稱電玩。

### 迷宮飯 千年國度的荒唐食譜

unresolved｜未確認

此完整題名的官方電玩身分與平台尚未確認；不能把已證實的實體《迷宮飯》桌遊當成 PC／主機遊戲。未獲官方確認，非斷言作品永不存在。

dungeon meshi／迷宮飯僅是泛 IP 名稱，不能作為尚未確認的《迷宮飯 千年國度的荒唐食譜》獨立電玩之別名；官方已確認的同 IP 商品是題名不同的實體桌遊，故明確移除這兩個會混淆作品身分的別名。

- [官方來源](https://arclightgames.jp/product/682mtet/)

## 符文工房

split：具體化為 4 原版、4 Special 重製與 5；後兩者已有條目，必須重用。4 原版與 Special 有新增內容與原版／HD 重製身分差異，名稱與別名應分清。

### 符文工廠4（3DS原版）

verified｜3DS

XSEED 將 Rune Factory 4 Special 明確描述為 Nintendo 3DS 經典作品的 HD remaster，本條限定被重製的 3DS 原作。



- [官方來源](https://www.xseedgames.com/games/rune-factory-4-special/)

### 符文工廠4 豪華版

verified｜Switch/PC/PS4/Xbox One

XSEED 正式平台表列 Switch、PS4、Windows PC、Xbox One；北美 Switch 2020-02-25，其他三平台 2021-12-07。保留現有四平台，不將 3DS 原作套入 Special。

新增 3DS 原作後，無 Special 的完整英文名與 rf4 應由原作接收，避免原作查詢唯一導向重製；豪華版使用 rune factory 4 special／rf4 special。

- [官方來源](https://www.xseedgames.com/games/rune-factory-4-special/)

### 符文工廠5

verified｜PC/Switch

XSEED 平台表明列 Nintendo Switch 與 Windows PC，為同一第五代作品的兩個平台。



- [官方來源](https://www.xseedgames.com/games/rune-factory-5/)

## 神鬼寓言

split：拆原作、Anniversary及重啟；重啟沿用既有條目並加識別副標，修正錯誤2025別名。

### Fable（2004 Xbox原作）

verified｜Xbox

Xbox官方回顧將原Fable與Xbox360 Anniversary明確區分；此條只指2004 Xbox原作，不含The Lost Chapters擴充版與重啟。



- [官方來源](https://news.xbox.com/en-us/2013/06/04/games-fable-anniversary-reveal/)
- [官方來源](https://news.microsoft.com/source/asia/2014/02/05/2014-02-06_xbox%E5%8D%81%E5%B9%B4%E7%B6%93%E5%85%B8%E6%AD%A3%E5%BC%8F%E9%87%8D%E7%8F%BE/?lang=zh-hant)

### Fable Anniversary

verified｜PC/Xbox 360/Xbox One（相容）/Xbox Series X|S（相容）

Anniversary為原作HD重製並含Lost Chapters；Steam確認Windows，原Xbox發行公告確認360，現Xbox商品列One／Series相容，不視為原生新重製。



- [官方來源](https://store.steampowered.com/api/appdetails?appids=288470&l=english&cc=us)
- [官方來源](https://news.xbox.com/en-us/2013/06/04/games-fable-anniversary-reveal/)
- [官方來源](https://www.xbox.com/en-US/games/store/_/C2Q32JM0BPZL)
- [官方來源](https://news.microsoft.com/source/asia/2014/02/05/2014-02-06_xbox%E5%8D%81%E5%B9%B4%E7%B6%93%E5%85%B8%E6%AD%A3%E5%BC%8F%E9%87%8D%E7%8F%BE/?lang=zh-hant)

### Fable（Playground Games 重啟版）

verified｜PC/PS5/Xbox Series X|S｜upcoming

Playground Games重啟專案，Xbox及PlayStation現行頁確認預定2027-02-23，支援PC／PS5／Xbox Series X|S；不是2004或Anniversary，不視為已上市。

2025不是現行官方發售年份；改以開發商與重啟副標識別，不沿用錯誤年份。

- [官方來源](https://www.xbox.com/en-us/games/fable)
- [官方來源](https://www.playstation.com/en-us/games/fable/)

## 蒼翼默示錄

split：拆成 Calamity Trigger 與 Centralfiction 兩款主線作品。Portable 和 Special Edition 的平台差異放在各作品附註，避免將移植 SKU 拆成新遊戲。

### BlazBlue: Calamity Trigger

verified｜PC/PS3/Xbox 360/PSP/街機

官方歷史與家用目錄確認 2008 街機、2009 PS3／Xbox 360、2010 PSP Portable／Windows PC；Portable 合併於首作並在此標明。街機是歷史發行記錄，不保證現地機台仍營運。



- [官方來源](https://www.blazblue.jp/consumer.html)
- [官方來源](https://www.blazblue.jp/10th/history/)

### BlazBlue: Centralfiction

verified｜PC/PS4/PS3/Switch/街機

官方家用目錄列 PS4／PS3 及 Switch Special Edition；Arc System Works 確認 2017 Steam 發行，AC 官方頁確認街機版。Switch 的 Special Edition 包裝與內容差異記於本條，不另建平台 SKU。



- [官方來源](https://www.blazblue.jp/consumer.html)
- [官方來源](https://www.arcsystemworks.com/blazblue-centralfiction-now-out-on-steam/)
- [官方來源](https://www.blazblue.jp/cf/ac/pg.html)

## 夢幻西遊

split：網易電腦版下載頁與獨立手遊產品頁指向不同作品；電腦版的 Mac／互通手機客戶端屬同一作品，不再拆 SKU。查過現行 games.json，沒有以下具體作品的其他條目。

### 夢幻西遊電腦版

verified｜PC/Mac/iOS（互通版）/Android（互通版）

中國網易《夢幻西遊》電腦版：官方列 Windows 7 以上、macOS High Sierra 10.13 以上與 iOS／Android 互通版。互通手機端保留同一作品，不與獨立《夢幻西遊》手遊合併。



- [官方來源](https://xyq.163.com/download/)

### 夢幻西遊手遊

verified｜iOS/Android

中國網易獨立手遊，官方入駐產品頁列 iOS／Android。目前官方桌面下載頁明稱桌面模擬器，連至 MuMu；不據此新增原生 PC／Mac。這不是電腦版的互通版。



- [官方來源](https://www.taptap.cn/app/2315)
- [官方來源](https://my.163.com/zmb/)

## 大話西遊

split：《大話西遊2經典版》與獨立《大話西遊》手遊有不同官方產品／下載頁；經典版口袋端與 PC 同屬經典版，不另立 SKU。查過現行 games.json，沒有以下具體作品的其他條目。

### 大話西遊2經典版

verified｜PC/iOS（口袋版）/Android（口袋版）

中國網易經典版官方下載頁列 Windows 7 以上；口袋版明列 iOS／Android，並說明手機電腦互通、端遊資料同步。與獨立大話手遊分開收錄。



- [官方來源](https://xy2.163.com/download/)

### 大話西遊手遊

verified｜iOS/Android

中國網易獨立手遊，官方產品頁確認 iOS／Android；目前官網的 Windows／Mac 桌面版明稱桌面模擬器，不當原生版本。App Store 另容許 Apple Silicon Mac 執行 iOS App，屬相容執行。



- [官方來源](https://www.taptap.cn/app/2316)
- [官方來源](https://dhxy.163.com/zmb/)
- [官方來源](https://apps.apple.com/cn/app/id1015364140)

## 劍俠情緣

split：採兩個明確且熱門的系列作品：《劍俠情緣網絡版叁》及《新劍俠情緣手遊》。劍網3／無界為同一作品互通客戶端，不拆成平台 SKU；未把劍網3緣起或其他系列作品混入。查過現行 games.json，沒有以下具體作品的其他條目。

### 劍俠情緣網絡版叁

verified｜PC/Mac/iOS/Android

中國西山居劍網3主線作品：Windows PC 與無界 iOS／Android 客戶端共用角色資料。官方版本活動確認 ARM Mac 客戶端於 2024 年周年版本灰度上線，Mac 限 Apple Silicon，不推定 Intel 支援；移動端不等於雲遊戲。



- [官方來源](https://jx3.xoyo.com/index/?from=androidqq)
- [官方來源](https://www.taptap.cn/app/382756)
- [官方來源](https://www.taptap.cn/moment/544235331650585429?group_id=637704)
- [官方來源](https://www.taptap.cn/game-event/4982)
- [官方來源](https://apps.apple.com/cn/app/id6446313004)

### 新劍俠情緣手遊

verified｜iOS/Android

中國騰訊發行／西山居開發的獨立手遊，官方入駐產品頁明列 Android、iOS。此列不代表原始單機《新劍俠情緣》，也不套用劍網3桌面平台。



- [官方來源](https://www.taptap.cn/app/7101)

## MLB The Show

split：依年度拆24與26，補齊24非PS平台來源。

### MLB The Show 24

verified｜PS5/PS4/Xbox Series X|S/Xbox One/Switch

2024年度作品：PlayStation原公告、Xbox產品頁及Nintendo商品分別確認平台；不同平台功能可能不同，非PC原生遊戲。



- [官方來源](https://blog.playstation.com/2024/03/05/mlb-the-show-24-unveils-road-to-the-show-women-pave-their-way/)
- [官方來源](https://www.xbox.com/en-GB/games/mlb-the-show-24)
- [官方來源](https://www.nintendo.com/en-ca/store/products/mlb-the-show-24-switch/)

### MLB The Show 26

verified｜PS5/Xbox Series X|S/Switch

Sony官方支援頁明列2026-03-17及PS5／Xbox Series X|S／Switch；不繼承24的PS4或Xbox One。



- [官方來源](https://www.playstation.com/en-us/support/games/mlb-the-show-26-support/)

## 腦鍛鍊

split：DS 原作與 Switch 新作是不同軟體；DS 原作的 Wii U Virtual Console 發行併入原作，Switch 2 相容不另造作品。

### Dr Kawashima's Brain Training: How Old Is Your Brain?

verified｜DS/Wii U（Virtual Console）

Nintendo 系列回顧確認 DS 原作；2014-06-13 官方公告確認在 Wii U 作為 Virtual Console 下載發行。Wii U 記錄歷史再發行，不是原生重製，也不宣稱目前仍可新購。



- [官方來源](https://www.nintendo.com/au/games/nintendo-switch/dr-kawashimas-brain-training-for-nintendo-switch/)
- [官方來源](https://www.nintendo.com/en-gb/News/2014/June/Dr-Kawashima-s-Brain-Training-now-available-as-a-free-download-on-Wii-U-until-July-10th-894015.html)

### Dr Kawashima's Brain Training for Nintendo Switch

verified｜Switch

Nintendo 商品規格 Console 為 Nintendo Switch；另列 Nintendo Switch 2 Compatible，屬相容性，不新增原生 Switch 2 平台。



- [官方來源](https://www.nintendo.com/au/games/nintendo-switch/dr-kawashimas-brain-training-for-nintendo-switch/)

## 勇者鬥惡龍 怪物仙境

split：拆為具 RETRO 副標的 Terry 再發行與 The Dark Prince；各自合併主機、PC、手機平台。僅選兩款代表作，不聲稱涵蓋 3D／SP／Joker 全系列。

### Dragon Quest Monsters: Terry's Wonderland RETRO

verified｜Switch/iOS/Android

Square Enix 公告確認 2019 Switch 版及 iPhone／Android 移植；RETRO 重現 1998 Game Boy 版並提供畫面／移動速度選項。Game Boy 是原作平台，不列為具 RETRO 副標商品的平台。



- [官方來源](https://www.dragonquest.jp/news/detail/3116/)

### Dragon Quest Monsters: The Dark Prince

verified｜PC/Switch/iOS/Android

Square Enix 正式產品表列 Switch、Steam、iOS、Android，並區分 Switch 2023-12-01 與 PC／手機 2024-09-12 發售；PC／手機含既有 DLC 仍是同一作品。



- [官方來源](https://www.square-enix.com/asia/newsportal/en/topics/dragonquest-monsters3/post07.html)

## The Rise of the Golden Idol

retain：已是 2024 年具體續作；本輪重新讀回 Sony 正式商品仍僅 PS5，PS4 只見歷史預告，維持 partial，不增造 PS4 已上市版本。

### The Rise of the Golden Idol

partial｜PC/macOS/PS5/Xbox Series X|S/Xbox One/Switch/iOS/Android｜released

限定 2024 年獨立續作 The Rise of the Golden Idol。PS5 有正式商品；Sony 嵌入的 2023 公告影片也曾標 PS4，但本輪仍缺可回讀 PS4 正式 SKU 或明確上市公告，PS4 保留為歷史預告而不當作已上市平台。Netflix 行動版已撤下；目前 Playstack 獨立 iOS／Android 商品已重新提供。Switch 2 可相容 Switch 版，不視為原生版本。



- [官方來源](https://www.playstation.com/en-us/games/the-rise-of-the-golden-idol/)
- [官方來源](https://store.steampowered.com/app/2716400/)
- [官方來源](https://www.xbox.com/fr-FR/games/store/the-rise-of-the-golden-idol/9nhqgsh0598d)
- [官方來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/The-Rise-of-the-Golden-Idol-2696296.html)
- [官方來源](https://play.google.com/store/apps/details?hl=en_US&id=com.playstack.TheRiseOfTheGoldenIdol)
- [官方來源](https://apps.apple.com/us/app/the-rise-of-the-golden-idol/id6473898665)
- [官方來源](https://playstack.zendesk.com/hc/en-us/articles/36000528158877-What-happened-to-Golden-Idol-on-Netflix)

## Perfect Dark

split：使用者已授權拆同名作品，依官方商品／公告拆為 2000 N64 原作、2010 HD 版及 The Initiative 重啟案；本輪新取得工作室主管公開結束聲明，重啟案不再當作仍待推出的遊戲。

### Perfect Dark（2000 原作）

verified｜Nintendo 64/Switch（NSO版）/Switch 2（NSO版）｜released

Rare 的 2000 年 Nintendo 64 原作。Switch／Switch 2 是 Nintendo 64 – Nintendo Classics: Mature 的 NSO 經典再發行，需 Nintendo Switch Online + Expansion Pack，不是新原生重製。此筆不包含 2010 年 4J HD 版或 The Initiative 重啟案。



- [官方來源](https://www.nintendo.com/au/games/nintendo-switch/nintendo-64-nintendo-classics-mature/)

### Perfect Dark（2010 HD版）

verified｜Xbox 360/Xbox One（相容）/Xbox Series X|S（相容）｜released

4J Studios 製作、2010-03-17 發行的 Xbox Live Arcade HD 版，原平台 Xbox 360。Xbox One／Xbox Series X|S 為舊版相容執行，另收錄於 Rare Replay；商店 Xbox Cloud Gaming 表示可串流，不構成 PC 原生版或 Series 原生重製。



- [官方來源](https://news.xbox.com/en-us/2010/03/17/arcade-perfect-dark/)
- [官方來源](https://www.xbox.com/en-gb/games/store/perfect-dark/c0swgv4560w1)
- [官方來源](https://news.xbox.com/en-us/2010/03/15/this-week-on-arcade-perfect-dark/)

### Perfect Dark（The Initiative 重啟案）

verified｜PC/Xbox Series X|S（取消前公布，未發行）｜cancelled

The Initiative／Crystal Dynamics 製作的全新故事與世界重啟專案。PC／Xbox Series X|S 為 Embracer 2024 公開專案表記載的歷史目標，並非已發售平台。工作室主管 Darrell Gallagher 的公開貼文確認 Perfect Dark 與 The Initiative 已 wind-down、本人離開 Xbox；其職務由 Xbox 官方原始發表文交叉核對。本案標為已取消，不提供上市日期，不宣稱現在仍開發、即將推出或可購買。



- [官方來源](https://news.xbox.com/en-us/2024/06/09/perfect-dark-details-interview-xbox-games-showcase-2024/)
- [官方來源](https://storage.mfn.se/27b8a293-f595-4698-96b8-b207df8b9cbd/embracer-group-delarsrapport-q1-2024-25.pdf)
- [官方來源](https://www.linkedin.com/posts/darrell-gallagher-278914_after-an-incredible-journey-my-time-at-xbox-activity-7373350179040714752-MHO8)
- [官方來源](https://news.xbox.com/fr-fr/2020/12/11/perfect-dark-premier-jeu-the-initiative/)
