# 剩餘 31 筆：作品身分與版本查核

查核日：2026-10-19。31/31 已重查；6 筆核實、4 筆部分核實、21 筆仍需指定版本或補證。6 筆平台調整、0 筆別名更正，新增 64 組具名版本對照。總目錄 964 筆，933 筆非目標逐欄保留。

## 如何解讀

系列、同名作品、具體遊戲、未能確認作品分開標記。每個版本對照都有獨立平台與官方來源，是已查核的代表版本，並非完整系列列表。未指定版本時不把各版平台合併；具名對照會一併傳入攻略提示，要求先確認年份／副標題。

## 重現

執行 `node tests/platform-audit/recheck-31/apply-review.cjs` 預覽；加 `--apply` 套用。整份目錄與歷史838審計都必須符合前值或套用後值，才允許寫入。前值見 [catalog-before.json](catalog-before.json)，逐欄差異見 [audit-31.json](audit-31.json)，剩餘原因見 [pending.json](pending.json)。

## 1. 絕命暗殺令 — unresolved

身分：ambiguous-title

既有 HITMAN／刺客任務別名只能確認系列，無法把「絕命暗殺令」唯一指派給某年作品；保留入口並列具名版本，不覆蓋既有2016及3代條目。

平台：依版本確認 → 依版本確認

既有 HITMAN／刺客任務別名只能確認系列，無法把「絕命暗殺令」唯一指派給某年作品；保留入口並列具名版本，不覆蓋既有2016及3代條目。

- Hitman: Codename 47（2000 原作）：PC。Steam 官方規格列 Windows；2007 是 Steam 上架日期，非原作首發年。IOI 歷史將首作定位為2000年。
- HITMAN World of Assassination – Signature Edition：Switch 2。此具名版本為2025年 Switch 2 原生版；不等於 Switch 雲端版，也不代表全系列。

- [官方來源 1](https://store.steampowered.com/api/appdetails?appids=6900&l=english&cc=us)
- [官方來源 2](https://ioi.dk/en-us/about)
- [官方來源 3](https://ioi.dk/hitman/news/2025/signature-edition-available-now)

### Hitman: Codename 47（2000 原作）

平台：PC

Steam 官方規格列 Windows；2007 是 Steam 上架日期，非原作首發年。IOI 歷史將首作定位為2000年。

- [官方來源 1](https://store.steampowered.com/api/appdetails?appids=6900&l=english&cc=us)
- [官方來源 2](https://ioi.dk/en-us/about)

### HITMAN World of Assassination – Signature Edition

平台：Switch 2

此具名版本為2025年 Switch 2 原生版；不等於 Switch 雲端版，也不代表全系列。

- [官方來源 1](https://ioi.dk/hitman/news/2025/signature-edition-available-now)

缺口處理：已把版本疑問拆成附官方來源的具名對照；仍需玩家選定實際年份／版本，本資料不任選，也不將選項平台合併。

## 2. 模擬城市 — unresolved

身分：ambiguous-title

SimCity 無年份可能指同名原作、2013版或系列。新增已核對的2013版與4代豪華版產品識別，不能由單一英文別名選定年份。

平台：依版本確認 → 依版本確認

SimCity 無年份可能指同名原作、2013版或系列。新增已核對的2013版與4代豪華版產品識別，不能由單一英文別名選定年份。

- SimCity（2013）：PC/macOS。EA 商品發售日識別2013版；Mac歷史發行不保證現代macOS相容。
- SimCity 4 Deluxe Edition：PC/macOS。EA／Aspyr 分別列 Windows、Mac 系統需求；這是4代加資料片的具名商品，不是2013版。
- EA 2013-09-19 官方新聞明說 SimCity 本體現已提供 Mac 與 PC，補足先前 June 11 預告不是實際上市證明的缺口。

- [官方來源 1](https://www.ea.com/pl/games/simcity/simcity)
- [官方來源 2](https://news.ea.com/press-releases/press-releases-details/2013/SimCity-Comes-to-Mac-June-11-Players-Receive-Both-Mac-and-PC-with-One-Purchase/default.aspx)
- [官方來源 3](https://store.steampowered.com/app/24780/)
- [官方來源 4](https://store.steampowered.com/api/appdetails?appids=24780&l=english&cc=us)
- [官方來源 5](https://news.ea.com/press-releases/press-releases-details/2013/SimCity-Cities-of-Tomorrow-Expansion-Pack-Coming-November-12/default.aspx)

### SimCity（2013）

平台：PC/macOS

EA 商品發售日識別2013版；2013-09-19 官方新聞確認本體 Mac／PC 已上市。Mac歷史發行不保證現代macOS相容。

- [官方來源 1](https://www.ea.com/pl/games/simcity/simcity)
- [官方來源 2](https://news.ea.com/press-releases/press-releases-details/2013/SimCity-Comes-to-Mac-June-11-Players-Receive-Both-Mac-and-PC-with-One-Purchase/default.aspx)
- [官方來源 3](https://news.ea.com/press-releases/press-releases-details/2013/SimCity-Cities-of-Tomorrow-Expansion-Pack-Coming-November-12/default.aspx)

### SimCity 4 Deluxe Edition

平台：PC/macOS

EA／Aspyr 分別列 Windows、Mac 系統需求；這是4代加資料片的具名商品，不是2013版。

- [官方來源 1](https://store.steampowered.com/app/24780/)
- [官方來源 2](https://store.steampowered.com/api/appdetails?appids=24780&l=english&cc=us)

缺口處理：已把版本疑問拆成附官方來源的具名對照；仍需玩家選定實際年份／版本，本資料不任選，也不將選項平台合併。

## 3. 農場模擬器系列 — unresolved

身分：series

名稱明示系列，不應釐清成某一代；本輪建立具名年度及版本對照，平台範圍只屬各個選項。

平台：依版本確認 → 依版本確認

名稱明示系列，不應釐清成某一代；本輪建立具名年度及版本對照，平台範圍只屬各個選項。

- Farming Simulator 25（電腦版）：PC/macOS。此選項僅列Windows／Mac版；不宣稱25代只有電腦。
- Farming Simulator 25（PS5版）：PS5。官方商品明列PlayStation 5；與電腦版分開列以免把系列的PS4誤套此版本。
- Farming Simulator 22（電腦版）：PC/macOS。限定Steam發行的Windows／Mac版；主機版另有獨立SKU，本對照不自稱完整系列平台清單。

- [官方來源 1](https://store.steampowered.com/api/appdetails?appids=2300320&l=english&cc=us)
- [官方來源 2](https://www.farming-simulator.com/about.php?game=fs25&platform=pc)
- [官方來源 3](https://www.farming-simulator.com/about.php?country=ca&lang=en&platform=ps5)
- [官方來源 4](https://store.steampowered.com/api/appdetails?appids=1248130&l=english&cc=us)

### Farming Simulator 25（電腦版）

平台：PC/macOS

此選項僅列Windows／Mac版；不宣稱25代只有電腦。

- [官方來源 1](https://store.steampowered.com/api/appdetails?appids=2300320&l=english&cc=us)
- [官方來源 2](https://www.farming-simulator.com/about.php?game=fs25&platform=pc)

### Farming Simulator 25（PS5版）

平台：PS5

官方商品明列PlayStation 5；與電腦版分開列以免把系列的PS4誤套此版本。

- [官方來源 1](https://www.farming-simulator.com/about.php?country=ca&lang=en&platform=ps5)

### Farming Simulator 22（電腦版）

平台：PC/macOS

限定Steam發行的Windows／Mac版；主機版另有獨立SKU，本對照不自稱完整系列平台清單。

- [官方來源 1](https://store.steampowered.com/api/appdetails?appids=1248130&l=english&cc=us)

缺口處理：已把版本疑問拆成附官方來源的具名對照；仍需玩家選定實際年份／版本，本資料不任選，也不將選項平台合併。

## 4. 微軟模擬飛行 — unresolved

身分：ambiguous-title

MSFS是系列縮寫，沒有年份不足以區分2020與2024。已將兩款官方資訊頁的不同平台具名列出，PS5只歸2024版本。

平台：依版本確認 → 依版本確認

MSFS是系列縮寫，沒有年份不足以區分2020與2024。已將兩款官方資訊頁的不同平台具名列出，PS5只歸2024版本。

- Microsoft Flight Simulator（2020）：PC/Xbox Series X|S。官方2020資訊頁列Windows PC及Xbox Series X|S；Xbox One雲端不列原生。
- Microsoft Flight Simulator 2024：PC/PS5/Xbox Series X|S。官方資訊頁列Windows、Xbox Series及PS5；PS5 Pro為同平台硬體，不另外算移植。

- [官方來源 1](https://www.flightsimulator.com/microsoft-flight-simulator-2020/)
- [官方來源 2](https://www.flightsimulator.com/microsoft-flight-simulator-2024/)

### Microsoft Flight Simulator（2020）

平台：PC/Xbox Series X|S

官方2020資訊頁列Windows PC及Xbox Series X|S；Xbox One雲端不列原生。

- [官方來源 1](https://www.flightsimulator.com/microsoft-flight-simulator-2020/)

### Microsoft Flight Simulator 2024

平台：PC/PS5/Xbox Series X|S

官方資訊頁列Windows、Xbox Series及PS5；PS5 Pro為同平台硬體，不另外算移植。

- [官方來源 1](https://www.flightsimulator.com/microsoft-flight-simulator-2024/)

缺口處理：已把版本疑問拆成附官方來源的具名對照；仍需玩家選定實際年份／版本，本資料不任選，也不將選項平台合併。

## 5. 魔力寶貝 懷舊版 — verified

身分：specific-game

依官方直接使用的『魔力寶貝（懷舊）』產品名，查核範圍限定中國易玩通懷舊服務。新查2011-06-21原廠公告明說中國玩家專享、國服獨享元素；台灣另有正式副標『永恆初心』，不視作同一服務。

平台：電腦（作業系統待確認） → PC

限定中國易玩通官方懷舊服務。官方安裝指南的原始截圖清楚顯示《魔力寶貝6.0》的Windows安裝介面與C:\Program Files\易玩通\魔力宝贝6.0目錄；2011-06-30官方公告明說已安裝6.0客戶端者可直接進入懷舊大區，據此確認Windows平台。此為原廠圖像與客戶端共用公告的交叉證據，不僅由exe副檔名推測；不據介面樣式斷言今日最低Windows版本或台灣其他服務支援。

- 2011-06-21易玩通公告將懷舊服原創元素明確限定為史克威爾艾尼克斯為中國玩家打造。
- 2011-06-30公告確認6.0客戶端可直接進入懷舊大區；現行官方下載區列懷舊完整版。
- 初心網絡官網公告的正式產品副標為永恆初心，不能把其系統需求當作易玩通懷舊服證據。
- 已實際查看官方gamesetup_004.jpg：標題魔力宝贝6.0、Windows視窗安裝程式、預設C:\Program Files\易玩通\魔力宝贝6.0；gamesetup_002.jpg為同一安裝精靈。結合官方6.0客戶端可進懷舊大區公告，可確認此懷舊服務Windows發行。

- [官方來源 1](https://www.crossgate.com.cn/news/20110621.html)
- [官方來源 2](https://www.crossgate.com.cn/news/20110630.html)
- [官方來源 3](https://www.polchina.com.cn/staticHtml/download.html)
- [官方來源 4](https://cg.originmood.com/NewsContent/zh_TW/mlbb_notice_4363.html)
- [官方來源 5](https://www.crossgate.com.cn/_private/setupgame.htm)
- [官方來源 6](https://www.crossgate.com.cn/images/playguide/gamesetup_004.jpg)
- [官方來源 7](https://www.crossgate.com.cn/images/playguide/gamesetup_002.jpg)



缺口處理：新增實際視讀官方Windows安裝截圖，與6.0客戶端共用公告交叉確認；中國易玩通懷舊服務身分與Windows平台缺口均已解決。

## 6. 遊戲王 World Championship — unresolved

身分：series

World Championship 是年度作品入口，缺少年份無法對應唯一遊戲。2006 套組中的 Windows 安裝片是另一款《遊戲王 ONLINE》，不是 2006 GBA 本體的 PC 版。

平台：依年度確認（GBA／Nintendo DS） → 依年度確認

World Championship 是年度作品入口，缺少年份無法對應唯一遊戲。2006 套組中的 Windows 安裝片是另一款《遊戲王 ONLINE》，不是 2006 GBA 本體的 PC 版。 已附具名版本與官方來源，主欄不合併各版本平台。

- World Championship 是年度作品入口，缺少年份無法對應唯一遊戲。2006 套組中的 Windows 安裝片是另一款《遊戲王 ONLINE》，不是 2006 GBA 本體的 PC 版。
- 遊戯王デュエルモンスターズ エキスパート2006（World Championship 2006 套組收錄遊戲）：GBA。日本 2006 年商品；只列套組內 EX2006 遊戲卡匣的平台，不把同捆 ONLINE 安裝片合併為 PC 版。
- 遊戯王 5D’s World Championship 2011: Over the Nexus：DS。2011 年 Nintendo DS 原生作品；不因 3DS 可相容 DS 卡匣就標成 3DS 原生。

- [官方來源 1](https://www.konami.com/games/jp/ja/products/yugioh_ex2006_gba/)
- [官方來源 2](https://www.konami.com/games/jp/ja/products/yugioh_ex2006_set_gba/)
- [官方來源 3](https://www.konami.com/games/jp/ja/products/yugioh_wcs2011_ds/)

### 遊戯王デュエルモンスターズ エキスパート2006（World Championship 2006 套組收錄遊戲）

平台：GBA

日本 2006 年商品；只列套組內 EX2006 遊戲卡匣的平台，不把同捆 ONLINE 安裝片合併為 PC 版。

- [官方來源 1](https://www.konami.com/games/jp/ja/products/yugioh_ex2006_gba/)
- [官方來源 2](https://www.konami.com/games/jp/ja/products/yugioh_ex2006_set_gba/)

### 遊戯王 5D’s World Championship 2011: Over the Nexus

平台：DS

2011 年 Nintendo DS 原生作品；不因 3DS 可相容 DS 卡匣就標成 3DS 原生。

- [官方來源 1](https://www.konami.com/games/jp/ja/products/yugioh_wcs2011_ds/)

缺口處理：已釐清系列／同名版本邊界並補具名版本對照；原始泛稱仍不足以唯一選定作品，未以猜測改名或合併。

## 7. 流亡黯道 手機版 — partial

身分：specific-game

官方具名 Path of Exile Mobile 展示專案，不是 Path of Exile 或 Path of Exile 2 的行動串流。

平台：行動裝置（系統未公布） → 行動裝置（系統未公布）

GGG 官方確認 Path of Exile Mobile 專案及 ExileCon 2023 試玩；本輪仍未取得具體 iOS／Android 正式發行平台與日期。iOS／Android 未獲確認，非斷言未來不推出；展場試玩不代表正式上市。

- GGG Community_Team 於 2023-05-29 的官方公告將 Path of Exile Mobile demo 與 Path of Exile 2 demo 分別列出，足以確認手機專案身分；本文未公布手機作業系統與正式發行日期。

- [官方來源 1](https://www.pathofexile.com/forum/view-thread/3396409)

### Path of Exile Mobile（GGG 手機專案）

平台：行動裝置（系統未公布）

已公布且曾提供展場試玩；未據此推定 iOS、Android 或已上市。

- [官方來源 1](https://www.pathofexile.com/forum/view-thread/3396409)

缺口處理：已確認具名手機專案而非 POE 主遊戲串流；正式支援作業系統和上市資訊仍未公布於本輪取得的官方資料，保持 partial。

## 8. 巫師 重製版 — partial

身分：specific-game

The Witcher Remake／Canis Majoris；不是 2007 原版或 Enhanced Edition，也不是 The Witcher 3 次世代更新。

平台：未公布 → 未公布

指 Fool's Theory 開發、CDPR 監督的初代 The Witcher Remake，代號 Canis Majoris。2022 專案公告與 2026 年 6 月官方產品展望均未提供具體平台；不借用《巫師 3》或《巫師 4》的平台。PC／PS5 未獲確認，非斷言未來不推出。

- CDPR 2022-10-26 正式確認以 Unreal Engine 5 重建初代，對應先前 Canis Majoris 代號。
- CD PROJEKT 2026 年 6 月 fact sheet 的長期產品展望仍單列 The Witcher Remake，與新巫師三部曲、Project Sirius 分開；未列發行平台。

- [官方來源 1](https://www.thewitcher.com/us/en/news/46225/the-witcher-remake-is-in-development)
- [官方來源 2](https://www.cdprojekt.com/en/wp-content/uploads-en/2026/06/fact-sheet-june-2026.pdf)

### The Witcher Remake（Canis Majoris）

平台：未公布

開發專案已確認，具體發行平台尚未確認。

- [官方來源 1](https://www.thewitcher.com/us/en/news/46225/the-witcher-remake-is-in-development)
- [官方來源 2](https://www.cdprojekt.com/en/wp-content/uploads-en/2026/06/fact-sheet-june-2026.pdf)

缺口處理：身分已限定為初代完整重製專案；以較新的 2026 官方產品展望補證，但具體平台仍未公布，保持 partial。

## 9. 大富翁系列 — unresolved

身分：series

明確是大富翁系列入口，不能改成大富翁4。新核對兩個商品ID與發行商公告，補出4代Steam版與11代的桌機、Switch差異。

平台：依版本確認 → 依版本確認

明確是大富翁系列入口，不能改成大富翁4。新核對兩個商品ID與發行商公告，補出4代Steam版與11代的桌機、Switch差異。

- 大富翁4（2022 Steam 再發行）：PC。商品說明原作1998，Steam發售日2022；本選項僅是這次Windows再發行，不混入大富翁4 Fun手機版。
- 大富翁11：PC/macOS/Switch。大宇2022上市公告明列Switch／Steam，Steam規格另確認Windows與macOS，不能把Steam當成只有Windows。

- [官方來源 1](https://store.steampowered.com/app/2059810/)
- [官方來源 2](https://store.steampowered.com/app/2074800/)
- [官方來源 3](https://store.steampowered.com/api/appdetails?appids=2074800&l=english&cc=us)
- [官方來源 4](https://km.softstar.com.tw/list.aspx?cid=2&gc=ETC&gd=RICH)

### 大富翁4（2022 Steam 再發行）

平台：PC

商品說明原作1998，Steam發售日2022；本選項僅是這次Windows再發行，不混入大富翁4 Fun手機版。

- [官方來源 1](https://store.steampowered.com/app/2059810/)

### 大富翁11

平台：PC/macOS/Switch

大宇2022上市公告明列Switch／Steam，Steam規格另確認Windows與macOS，不能把Steam當成只有Windows。

- [官方來源 1](https://store.steampowered.com/app/2074800/)
- [官方來源 2](https://store.steampowered.com/api/appdetails?appids=2074800&l=english&cc=us)
- [官方來源 3](https://km.softstar.com.tw/list.aspx?cid=2&gc=ETC&gd=RICH)

缺口處理：已把版本疑問拆成附官方來源的具名對照；仍需玩家選定實際年份／版本，本資料不任選，也不將選項平台合併。

## 10. 武林群俠傳 — partial

身分：specific-game

本條目以智冠早期單機《武林群俠傳》為範圍；不是中華網龍《武林群俠傳Online》，也不是《俠客風雲傳》。

平台：電腦（作業系統待確認） → 電腦（作業系統待確認）

智冠官方歷史及單機IP新聞可確認原作品。新增追查Windows與系統需求時，實際讀到的官方技術FAQ屬中華網龍Online，內文有WX Online資料夾及台港伺服器；不能用來填原單機版OS。原版手冊／官方舊規格未找到可核對內容，仍只列電腦。

- 智冠歷史的2002年單機遊戲獲獎紀錄與原作身分相符。
- 本輪實際讀回的Windows相關官方FAQ標題為武林群俠傳online，安裝路徑為WX Online並談台港伺服器，排除作為原作系統證據。

- [官方來源 1](https://www.soft-world.com/About/History?EKind=6)
- [官方來源 2](https://www.soft-world.com/News/NewsDetail?Sn=1163)
- [官方來源 3](https://wx.chinesegamer.net/index-16-1.asp)



缺口處理：新查系統需求與說明書來源，辨別搜尋中最容易誤套的Online官方技術頁；尚無原版官方OS證據，沒有把別作Windows推回原作。

## 11. Fate/stay night — verified

身分：specific-game

TYPE-MOON官方產品目錄精確以無副標『Fate/stay night』標示2004年CD原版／2006年DVD版，另將Realta Nua獨立列頁。本條目據正式標題對應原版，並非依舊PC欄位反推。

平台：PC → PC

限定2004原版及內容相同的2006 DVD版。官方產品資料直接列Windows98/Me/2000/XP，產品目錄明列Windows且已停售。後續Realta Nua及REMASTERED另列版本對照，不合併其主機或手機平台；歷史Windows支援不表示今日Windows版本都受支援。

- 官方目錄標題Fate/stay night、對應OS Windows、2004/1/30 CD及2006/3/29 DVD，並記載目前已停售。
- 原版DATA頁明列Windows98/Me/2000/XP，且說明CD與DVD遊戲內容沒有差異。

- [官方來源 1](https://typemoon.com/contents/9ncnes/fate-stay-night)
- [官方來源 2](https://www.typemoon.com/products/fate/data/index.html)

### Fate/stay night（2004 原版／2006 DVD版）

平台：PC

本條目採用的精確官方無副標原作；目前已停售。

- [官方來源 1](https://typemoon.com/contents/9ncnes/fate-stay-night)
- [官方來源 2](https://www.typemoon.com/products/fate/data/index.html)

### Fate/stay night [Realta Nua]（2007 PS2版）

平台：PS2

官方另列的2007全年齡主機版本，此選項只指PS2版，不概括同副標其餘移植。

- [官方來源 1](https://typemoon.com/contents/9ncnes/fate-stay-night-realta-nua)

### Fate/stay night REMASTERED

平台：PC/Switch

2024年8月8日推出，以2012 Vita版為基底；與2004原版分列。

- [官方來源 1](https://www.aniplex.co.jp/lineup/fate-sn-game/)

缺口處理：取得精確無副標原版產品頁及原始系統需求；版本身分和Windows平台均已確認。

## 12. 極限脫出系列 — unresolved

身分：series

官方明確稱 Zero Escape 為系列；999、Virtue’s Last Reward 原版及 Nonary Games 重製合集是不同商品，不能套用單一系列平台清單。

平台：依版本確認 → 依版本確認

官方明確稱 Zero Escape 為系列；999、Virtue’s Last Reward 原版及 Nonary Games 重製合集是不同商品，不能套用單一系列平台清單。 已附具名版本與官方來源，主欄不合併各版本平台。

- 官方明確稱 Zero Escape 為系列；999、Virtue’s Last Reward 原版及 Nonary Games 重製合集是不同商品，不能套用單一系列平台清單。
- Nine Hours, Nine Persons, Nine Doors（999，2009 原版）：DS。官方回顧明列 2009 Nintendo DS 原版；此選項不包含後來合輯內的重製版。
- Zero Escape: Virtue’s Last Reward（2012 原版）：3DS/PS Vita。2012 原版發行平台，與 2017 合集版本分開。
- Zero Escape: The Nonary Games（重製合輯）：PC/PS4/PS Vita/Xbox One。包含 999 與 VLR；2017 PS4／Vita／Steam，2022 Xbox One／Windows 10。此處記錄發行版本，不將後續主機相容性另算原生移植。

- [官方來源 1](https://www.spike-chunsoft.com/news/zero-escape-the-nonary-games-available-now-for-xbox-one-and-windows-10/)

### Nine Hours, Nine Persons, Nine Doors（999，2009 原版）

平台：DS

官方回顧明列 2009 Nintendo DS 原版；此選項不包含後來合輯內的重製版。

- [官方來源 1](https://www.spike-chunsoft.com/news/zero-escape-the-nonary-games-available-now-for-xbox-one-and-windows-10/)

### Zero Escape: Virtue’s Last Reward（2012 原版）

平台：3DS/PS Vita

2012 原版發行平台，與 2017 合集版本分開。

- [官方來源 1](https://www.spike-chunsoft.com/news/zero-escape-the-nonary-games-available-now-for-xbox-one-and-windows-10/)

### Zero Escape: The Nonary Games（重製合輯）

平台：PC/PS4/PS Vita/Xbox One

包含 999 與 VLR；2017 PS4／Vita／Steam，2022 Xbox One／Windows 10。此處記錄發行版本，不將後續主機相容性另算原生移植。

- [官方來源 1](https://www.spike-chunsoft.com/news/zero-escape-the-nonary-games-available-now-for-xbox-one-and-windows-10/)

缺口處理：已釐清系列／同名版本邊界並補具名版本對照；原始泛稱仍不足以唯一選定作品，未以猜測改名或合併。

## 13. 逆轉裁判系列 — unresolved

身分：series

本筆明示系列，需指定作品或合集。成步堂 123 和王泥喜 456 收錄不同故事；手機版及其他舊版本也不能自動套用本表。

平台：依版本確認 → 依版本確認

本筆明示系列，需指定作品或合集。成步堂 123 和王泥喜 456 收錄不同故事；手機版及其他舊版本也不能自動套用本表。 已附具名版本與官方來源，主欄不合併各版本平台。

- 本筆明示系列，需指定作品或合集。成步堂 123 和王泥喜 456 收錄不同故事；手機版及其他舊版本也不能自動套用本表。
- Phoenix Wright: Ace Attorney Trilogy（成步堂 123，2019 主機／PC 版）：PC/PS4/Xbox One/Switch。2019 HD 合集發行平台；不代表 3DS 舊合集或 iOS／Android 移植的完整平台史。
- Apollo Justice: Ace Attorney Trilogy（王泥喜 456，2024 合集）：PC/PS4/Xbox One/Switch。2024 合集包含 4、5、6 代；不是 2007 第四代原版的單獨平台表。

- [官方來源 1](https://news.capcomusa.com/lets/browse/take-that-phoenix-wright-ace-attorney-trilogy-is-out-now)
- [官方來源 2](https://news.capcomusa.com/2024/01/25/take-that-apollo-justice-ace-attorney-trilogy-is-out-now/)

### Phoenix Wright: Ace Attorney Trilogy（成步堂 123，2019 主機／PC 版）

平台：PC/PS4/Xbox One/Switch

2019 HD 合集發行平台；不代表 3DS 舊合集或 iOS／Android 移植的完整平台史。

- [官方來源 1](https://news.capcomusa.com/lets/browse/take-that-phoenix-wright-ace-attorney-trilogy-is-out-now)

### Apollo Justice: Ace Attorney Trilogy（王泥喜 456，2024 合集）

平台：PC/PS4/Xbox One/Switch

2024 合集包含 4、5、6 代；不是 2007 第四代原版的單獨平台表。

- [官方來源 1](https://news.capcomusa.com/2024/01/25/take-that-apollo-justice-ace-attorney-trilogy-is-out-now/)

缺口處理：已釐清系列／同名版本邊界並補具名版本對照；原始泛稱仍不足以唯一選定作品，未以猜測改名或合併。

## 14. 聲之形 — unresolved

身分：unconfirmed-work

本輪京都動畫的作品頁與電影官網直接將《聲の形》辨識為大今良時原作的動畫電影。未找到能對應此中文名稱、卡牌RPG分類的官方電玩商品；先前誤置Voice of Cards別名已移除。

平台：未確認 → 未確認

新增查核京都動畫製作方及電影官網，只能確認影視身分；Steam搜尋亦會出現把《聲之形》列作靈感的其他遊戲，不能據此當作本作遊戲。無可核實平台，維持未確認，不任意刪除或改名為Voice of Cards。

- 京都動畫自有作品頁列電影、動畫製作及配給資訊；電影介紹將原作列為漫畫。
- 1000xRESIST發行商商品文字把山田尚子的聲之形列為動畫靈感之一，並非聲之形改編遊戲。

- [官方來源 1](https://www.kyotoanimation.co.jp/works/koeM/)
- [官方來源 2](https://koenokatachi-movie.com/sp/introduction/)
- [官方來源 3](https://store.steampowered.com/app/1675830/1000xRESIST/?l=tchinese)



缺口處理：新追查權利方作品頁並排除遊戲搜尋的靈感引用誤命中；仍缺此條目的正式遊戲開發商、原文商品名或公告。

## 15. 太鼓之達人 — unresolved

身分：series

太鼓之達人是多款作品共用的系列名稱；Drum Session! 與 Rhythm Festival 的平台不同，不能把 PS4 版本當作 Rhythm Festival。

平台：依版本確認 → 依版本確認

太鼓之達人是多款作品共用的系列名稱；Drum Session! 與 Rhythm Festival 的平台不同，不能把 PS4 版本當作 Rhythm Festival。 已附具名版本與官方來源，主欄不合併各版本平台。

- 太鼓之達人是多款作品共用的系列名稱；Drum Session! 與 Rhythm Festival 的平台不同，不能把 PS4 版本當作 Rhythm Festival。
- Taiko no Tatsujin: Drum Session!：PS4。官方獨立 PS4 商品；未將 PS5 向下相容列成原生 PS5 版。
- Taiko no Tatsujin: Rhythm Festival：PC/PS5/Xbox Series X|S/Switch。官方列 Switch 2022 原版與 2024 PS5／Xbox Series／PC 移植；與 Drum Session! 分開。

- [官方來源 1](https://www.bandainamcoent.com/games/taiko-no-tatsujin-drum-session)
- [官方來源 2](https://www.bandainamcoent.com/news/taiko-no-tatsujin-rhythm-festival-launching-on-new-gen-consoles-and-pc)

### Taiko no Tatsujin: Drum Session!

平台：PS4

官方獨立 PS4 商品；未將 PS5 向下相容列成原生 PS5 版。

- [官方來源 1](https://www.bandainamcoent.com/games/taiko-no-tatsujin-drum-session)

### Taiko no Tatsujin: Rhythm Festival

平台：PC/PS5/Xbox Series X|S/Switch

官方列 Switch 2022 原版與 2024 PS5／Xbox Series／PC 移植；與 Drum Session! 分開。

- [官方來源 1](https://www.bandainamcoent.com/news/taiko-no-tatsujin-rhythm-festival-launching-on-new-gen-consoles-and-pc)

缺口處理：已釐清系列／同名版本邊界並補具名版本對照；原始泛稱仍不足以唯一選定作品，未以猜測改名或合併。

## 16. 初音未來 Project DIVA — verified

身分：specific-game

本條依既有完整名稱與別名 Hatsune Miku Project DIVA，範圍限定為 2009 年《初音ミク -Project DIVA-》原作。SEGA 官方回顧明列 2009-07-02、PSP；MEGA39’s／Mega Mix+ 等帶副標作品另列版本對照，不併入主平台。

平台：依版本確認 → PSP

本條依既有完整名稱與別名 Hatsune Miku Project DIVA，範圍限定為 2009 年《初音ミク -Project DIVA-》原作。SEGA 官方回顧明列 2009-07-02、PSP；MEGA39’s／Mega Mix+ 等帶副標作品另列版本對照，不併入主平台。

- 本條依既有完整名稱與別名 Hatsune Miku Project DIVA，範圍限定為 2009 年《初音ミク -Project DIVA-》原作。SEGA 官方回顧明列 2009-07-02、PSP；MEGA39’s／Mega Mix+ 等帶副標作品另列版本對照，不併入主平台。
- 初音ミク -Project DIVA-（2009 初代）：PSP。SEGA 官方回顧直接列 2009 年 7 月 2 日 PSP 原作，並由財報交叉核對；與後續 MEGA39’s 版本分開。
- 初音未來 Project DIVA MEGA39’s（Mega Mix，2020）：Switch。SEGA 確認 2020 年 2 月 13 日 Switch 商品；不與名稱多一個 + 的 PC 版混同。
- Hatsune Miku: Project DIVA Mega Mix+：PC。官方商品規格明列 PC（Steam）；此處不是 Nintendo Switch 的 Mega Mix 本體。

- [官方來源 1](https://info.miku.sega.jp/2762)
- [官方來源 2](https://www.segasammy.co.jp/cms/wp-content/uploads/pdf/ja/ir/201003_1q_pre-1.pdf)
- [官方來源 3](https://www.sega.jp/topics/detail/220623_7/)
- [官方來源 4](https://asia.sega.com/mega39splus/en/)

### 初音ミク -Project DIVA-（2009 初代）

平台：PSP

SEGA 官方回顧直接列 2009 年 7 月 2 日 PSP 原作，並由財報交叉核對；與後續 MEGA39’s 版本分開。

- [官方來源 1](https://info.miku.sega.jp/2762)
- [官方來源 2](https://www.segasammy.co.jp/cms/wp-content/uploads/pdf/ja/ir/201003_1q_pre-1.pdf)

### 初音未來 Project DIVA MEGA39’s（Mega Mix，2020）

平台：Switch

SEGA 確認 2020 年 2 月 13 日 Switch 商品；不與名稱多一個 + 的 PC 版混同。

- [官方來源 1](https://www.sega.jp/topics/detail/220623_7/)

### Hatsune Miku: Project DIVA Mega Mix+

平台：PC

官方商品規格明列 PC（Steam）；此處不是 Nintendo Switch 的 Mega Mix 本體。

- [官方來源 1](https://asia.sega.com/mega39splus/en/)

缺口處理：依既有完整名稱／英文別名與官方原作正式標題，明確限定原作年份及平台；不同副標的後作／重製另列對照，不以舊平台反推作品。

## 17. 迷宮飯 千年國度的荒唐食譜 — unresolved

身分：unconfirmed-work

完整中文副標未找到官方電玩產品對應。可核實的《迷宮飯》遊戲是Arclight實體桌遊Monster Eater，標題與載體均不同，不能據此替換此條目。

平台：未確認 → 未確認

本輪重新以完整中文副標及日文作品名搜尋，再查Arclight原始產品／發售企劃與動畫官方消息。確認Monster Eater為卡牌及實體配件桌遊，非Switch電玩；對本條目仍無平台可確認。未獲官方確認，非斷言永不存在。

- Arclight原始商品頁明列Monster Eater ～ダンジョン飯 ボードゲーム～，以Monster Maker卡牌系統改編。
- 動畫官方消息列2至5人、45分鐘、實體盒尺寸及2022年9月15日發售資訊；不支持電玩平台宣稱。

- [官方來源 1](https://arclightgames.jp/product/682mtet/)
- [官方來源 2](https://arclightgames.jp/mtetcampaign/)
- [官方來源 3](https://delicious-in-dungeon.com/news.html)



缺口處理：補到桌遊發行商原始產品與發售企劃，排除將授權桌遊當作副標電玩的可能；仍需完整副標的正式電玩證據。

## 18. 符文工房 — unresolved

身分：ambiguous-title

Rune Factory／符文工房缺少代數；不能由原先 PC／Switch 欄位倒推為第 5 代。下列只列代表版本，並非系列完整清單。

平台：依版本確認 → 依版本確認

Rune Factory／符文工房缺少代數；不能由原先 PC／Switch 欄位倒推為第 5 代。下列只列代表版本，並非系列完整清單。 已附具名版本與官方來源，主欄不合併各版本平台。

- Rune Factory／符文工房缺少代數；不能由原先 PC／Switch 欄位倒推為第 5 代。下列只列代表版本，並非系列完整清單。
- Rune Factory 4（Nintendo 3DS 原版）：3DS。發行商將 4 Special 明確定義為 Nintendo 3DS 經典作品的 HD 重製；本選項對應被重製的原版。
- Rune Factory 4 Special：PC/PS4/Xbox One/Switch。官方列 Switch 2020 與 PS4／Xbox One／Windows PC 2021 發行；與 3DS 原版分開。
- Rune Factory 5：PC/Switch。官方分列 Switch 與 Windows PC 的發行日期與平台，不能代證系列所有作品。

- [官方來源 1](https://www.xseedgames.com/games/rune-factory-4-special/)
- [官方來源 2](https://www.xseedgames.com/games/rune-factory-5/)

### Rune Factory 4（Nintendo 3DS 原版）

平台：3DS

發行商將 4 Special 明確定義為 Nintendo 3DS 經典作品的 HD 重製；本選項對應被重製的原版。

- [官方來源 1](https://www.xseedgames.com/games/rune-factory-4-special/)

### Rune Factory 4 Special

平台：PC/PS4/Xbox One/Switch

官方列 Switch 2020 與 PS4／Xbox One／Windows PC 2021 發行；與 3DS 原版分開。

- [官方來源 1](https://www.xseedgames.com/games/rune-factory-4-special/)

### Rune Factory 5

平台：PC/Switch

官方分列 Switch 與 Windows PC 的發行日期與平台，不能代證系列所有作品。

- [官方來源 1](https://www.xseedgames.com/games/rune-factory-5/)

缺口處理：已釐清系列／同名版本邊界並補具名版本對照；原始泛稱仍不足以唯一選定作品，未以猜測改名或合併。

## 19. 神鬼寓言 — unresolved

身分：ambiguous-title

微軟繁中公告確認神鬼寓言為Fable原作的中文名稱，但同名重啟作亦存在。未帶年份仍不指定其中一款；原作、紀念版分開對照，不合併Xbox世代。

平台：依版本確認 → 依版本確認

微軟繁中公告確認神鬼寓言為Fable原作的中文名稱，但同名重啟作亦存在。未帶年份仍不指定其中一款；原作、紀念版分開對照，不合併Xbox世代。

- Fable（Xbox 原作）：Xbox。Xbox Wire將Anniversary描述為原Xbox經典的重製；此選項指原始Xbox軟體，非Xbox One／Series原生版。
- Fable Anniversary（神鬼寓言：紀念版）：PC/Xbox 360。2014紀念版，Steam為Windows；Xbox360由微軟繁中及開發者原始公告確認，後代相容不當成原生移植。

- [官方來源 1](https://news.xbox.com/en-us/2013/06/04/games-fable-anniversary-reveal/)
- [官方來源 2](https://store.steampowered.com/api/appdetails?appids=288470&l=english&cc=us)
- [官方來源 3](https://news.xbox.com/en-us/2013/12/12/xbox-360-fable-anniversary-developer-interview/)
- [官方來源 4](https://news.microsoft.com/source/asia/2014/02/05/2014-02-06_xbox%E5%8D%81%E5%B9%B4%E7%B6%93%E5%85%B8%E6%AD%A3%E5%BC%8F%E9%87%8D%E7%8F%BE/?lang=zh-hant)

### Fable（Xbox 原作）

平台：Xbox

Xbox Wire將Anniversary描述為原Xbox經典的重製；此選項指原始Xbox軟體，非Xbox One／Series原生版。

- [官方來源 1](https://news.xbox.com/en-us/2013/06/04/games-fable-anniversary-reveal/)

### Fable Anniversary（神鬼寓言：紀念版）

平台：PC/Xbox 360

2014紀念版，Steam為Windows；Xbox360由微軟繁中及開發者原始公告確認，後代相容不當成原生移植。

- [官方來源 1](https://store.steampowered.com/api/appdetails?appids=288470&l=english&cc=us)
- [官方來源 2](https://news.xbox.com/en-us/2013/12/12/xbox-360-fable-anniversary-developer-interview/)
- [官方來源 3](https://news.microsoft.com/source/asia/2014/02/05/2014-02-06_xbox%E5%8D%81%E5%B9%B4%E7%B6%93%E5%85%B8%E6%AD%A3%E5%BC%8F%E9%87%8D%E7%8F%BE/?lang=zh-hant)

缺口處理：已把版本疑問拆成附官方來源的具名對照；仍需玩家選定實際年份／版本，本資料不任選，也不將選項平台合併。

## 20. 蒼翼默示錄 — unresolved

身分：series

BlazBlue／蒼翼默示錄缺少副標題，官方目錄列出多款不同遊戲。Calamity Trigger、Portable 與 Centralfiction Special Edition 不能合併成單一條目的平台表。

平台：依版本確認 → 依版本確認

BlazBlue／蒼翼默示錄缺少副標題，官方目錄列出多款不同遊戲。Calamity Trigger、Portable 與 Centralfiction Special Edition 不能合併成單一條目的平台表。 已附具名版本與官方來源，主欄不合併各版本平台。

- BlazBlue／蒼翼默示錄缺少副標題，官方目錄列出多款不同遊戲。Calamity Trigger、Portable 與 Centralfiction Special Edition 不能合併成單一條目的平台表。
- BlazBlue: Calamity Trigger（家用主機／PC 版）：PC/PS3/Xbox 360。官方家用目錄列 PC、PS3、Xbox 360；此代表選項不含大型機台版或 Portable。
- BlazBlue: Calamity Trigger Portable：PSP。官方獨立 Portable 商品，2010 年 PSP 發行；與家用主機／PC 商品分開。
- BlazBlue: Centralfiction Special Edition：Switch。官方 2019 年 Switch 特別版商品；本表不是未加 Special Edition 的 Centralfiction 完整平台史。

- [官方來源 1](https://www.blazblue.jp/consumer.html)

### BlazBlue: Calamity Trigger（家用主機／PC 版）

平台：PC/PS3/Xbox 360

官方家用目錄列 PC、PS3、Xbox 360；此代表選項不含大型機台版或 Portable。

- [官方來源 1](https://www.blazblue.jp/consumer.html)

### BlazBlue: Calamity Trigger Portable

平台：PSP

官方獨立 Portable 商品，2010 年 PSP 發行；與家用主機／PC 商品分開。

- [官方來源 1](https://www.blazblue.jp/consumer.html)

### BlazBlue: Centralfiction Special Edition

平台：Switch

官方 2019 年 Switch 特別版商品；本表不是未加 Special Edition 的 Centralfiction 完整平台史。

- [官方來源 1](https://www.blazblue.jp/consumer.html)

缺口處理：已釐清系列／同名版本邊界並補具名版本對照；原始泛稱仍不足以唯一選定作品，未以猜測改名或合併。

## 21. 夢幻西遊 — unresolved

身分：series

名稱與別名同時涵蓋網易電腦原作及獨立同名手遊，沒有年份／手遊限定。已提供兩個具體官方版本選項，主欄不合併。

平台：依版本確認 → 依版本確認

新讀官方電腦版下載頁，明列Windows7以上、Mac OS High Sierra10.13以上與iOS/Android互通版；這是電腦版產品的客戶端體系。另一官方手遊商品同樣使用夢幻西遊名稱並列iOS/Android，仍需指定版本。

- 官方下載頁原始HTML可讀到Windows最低配置、Mac適用系統與互通版iOS/Android。
- 網易官方入駐手遊商品明列iOS/Android；不是電腦版下載頁的同一商品。

- [官方來源 1](https://xyq.163.com/download/)
- [官方來源 2](https://www.taptap.cn/app/2315)

### 夢幻西遊電腦版

平台：PC/Mac/iOS（互通版）/Android（互通版）

網易電腦版下載頁列Windows、Mac及手機互通客戶端；互通版不是下列獨立手遊。

- [官方來源 1](https://xyq.163.com/download/)

### 夢幻西遊手遊

平台：iOS/Android

網易官方入駐的獨立手遊商品；此處只列已確認的手機平台，不據TapTap全站PC按鈕推測原生桌面版。

- [官方來源 1](https://www.taptap.cn/app/2315)

缺口處理：本輪直接讀回網易下載頁（web工具讀取失敗後以HTTP讀取），補齊具名電腦版本平台；剩餘僅條目版本選擇。

## 22. 大話西遊 — unresolved

身分：series

無代數名稱可指系列或同名手遊；本輪把官方《大話西遊2經典版》與《大話西遊》手遊明確分列，不能任選。

平台：依版本確認 → 依版本確認

新讀《大話西遊2經典版》官方下載頁，明列Windows7以上配置；網易官方手遊商品明列iOS/Android。這兩個具名產品有不同客戶端與版本身分，現有泛稱無法唯一選擇，主欄維持依版本確認。

- 官方下載頁標題大話西遊2經典版，推薦與最低配置均明列Windows7以上。
- 網易官方入駐大話西遊頁以手遊自稱並列Android/iOS。

- [官方來源 1](https://xy2.163.com/download/)
- [官方來源 2](https://www.taptap.cn/app/2316)

### 大話西遊2經典版（桌面客戶端）

平台：PC

只指經典版官方Windows桌面客戶端，不把口袋版或獨立手遊當作同一版。

- [官方來源 1](https://xy2.163.com/download/)

### 大話西遊手遊

平台：iOS/Android

網易官方手機商品；與大話2經典版分開。

- [官方來源 1](https://www.taptap.cn/app/2316)

缺口處理：取得前輪未讀到的大話2官方Windows配置，新增端遊／手遊具名對照；仍缺原條目所指版本。

## 23. 劍俠情緣 — unresolved

身分：series

現有名稱與Swordsman Love別名未指定代作或手機版。新增劍俠情緣網絡版叁Windows客戶端及新劍俠情緣手遊兩項官方具名對照，主欄不合併。

平台：依版本確認 → 依版本確認

本輪直接讀西山居下載頁的技術FAQ，Windows桌面客戶端資訊明確；另讀騰訊與西山居官方入駐新劍俠情緣手遊，列iOS/Android。兩者不是同一版本，故維持依版本確認；Windows選項僅指所查桌面客戶端，不概括劍網3其他客戶端或版本。

- 西山居下載頁技術FAQ明說其所述客戶端在Windows環境運行，並列64位系統、DirectX及JX3ClientX64.exe等說明。
- 騰訊官方入駐商品以新劍俠情緣手遊為題，列西山居開發及iOS/Android。

- [官方來源 1](https://jx3.xoyo.com/clouddown/)
- [官方來源 2](https://www.taptap.cn/app/7101)

### 劍俠情緣網絡版叁（Windows桌面客戶端）

平台：PC

限定所查官方Windows桌面客戶端；不將此舊技術FAQ當成全系列永遠不支援其他系統的證據。

- [官方來源 1](https://jx3.xoyo.com/clouddown/)

### 新劍俠情緣手遊（騰訊／西山居）

平台：iOS/Android

中國騰訊發行手機版本，平台由官方入駐商品確認；不保證台港版本服務完全相同。

- [官方來源 1](https://www.taptap.cn/app/7101)

缺口處理：本輪補齊一個具名端遊客戶端與一個具名手機版本的原始來源；仍需確定此泛稱要指哪一款。

## 24. MLB The Show — unresolved

身分：series

MLB The Show是年度系列。新增24與26的明確對照：舊年度PS4不能套到26；手機衍生作也不是年度主機版。

平台：依年度確認 → 依年度確認

MLB The Show是年度系列。新增24與26的明確對照：舊年度PS4不能套到26；手機衍生作也不是年度主機版。

- MLB The Show 24（PlayStation版）：PS5/PS4。限定本公告明列的PlayStation版本，不據此否認另有Xbox／Switch商品。
- MLB The Show 26：PS5/Xbox Series X|S/Switch。官方支援頁2026-03-17上市平台表；PS4與Xbox One不在此26版清單。

- [官方來源 1](https://blog.playstation.com/2024/03/05/mlb-the-show-24-unveils-road-to-the-show-women-pave-their-way/)
- [官方來源 2](https://www.playstation.com/en-us/support/games/mlb-the-show-26-support/)

### MLB The Show 24（PlayStation版）

平台：PS5/PS4

限定本公告明列的PlayStation版本，不據此否認另有Xbox／Switch商品。

- [官方來源 1](https://blog.playstation.com/2024/03/05/mlb-the-show-24-unveils-road-to-the-show-women-pave-their-way/)

### MLB The Show 26

平台：PS5/Xbox Series X|S/Switch

官方支援頁2026-03-17上市平台表；PS4與Xbox One不在此26版清單。

- [官方來源 1](https://www.playstation.com/en-us/support/games/mlb-the-show-26-support/)

缺口處理：已把版本疑問拆成附官方來源的具名對照；仍需玩家選定實際年份／版本，本資料不任選，也不將選項平台合併。

## 25. 腦鍛鍊 — unresolved

身分：ambiguous-title

Brain Training／腦鍛鍊沒有副標題，無法確定是 DS 原作或 Switch 新作。Switch 2 相容標示不代表另有原生 Switch 2 軟體。

平台：依版本確認 → 依版本確認

Brain Training／腦鍛鍊沒有副標題，無法確定是 DS 原作或 Switch 新作。Switch 2 相容標示不代表另有原生 Switch 2 軟體。 已附具名版本與官方來源，主欄不合併各版本平台。

- Brain Training／腦鍛鍊沒有副標題，無法確定是 DS 原作或 Switch 新作。Switch 2 相容標示不代表另有原生 Switch 2 軟體。
- Dr Kawashima’s Brain Training: How Old Is Your Brain?（DS 版）：DS。任天堂操作手冊及系列回顧確認 DS 原作；與 Switch 版為不同軟體。
- Dr Kawashima’s Brain Training for Nintendo Switch：Switch。官方規格的 Console 為 Nintendo Switch；頁面另列 Switch 2 Compatible，僅記為相容性。

- [官方來源 1](https://cdn02.nintendo-europe.com/media/downloads/games_8/emanuals/nintendo_ds_21/Manual_NintendoDS_DrKawashimasBrainTraining_EN.pdf)
- [官方來源 2](https://www.nintendo.com/au/games/nintendo-switch/dr-kawashimas-brain-training-for-nintendo-switch/)

### Dr Kawashima’s Brain Training: How Old Is Your Brain?（DS 版）

平台：DS

任天堂操作手冊及系列回顧確認 DS 原作；與 Switch 版為不同軟體。

- [官方來源 1](https://cdn02.nintendo-europe.com/media/downloads/games_8/emanuals/nintendo_ds_21/Manual_NintendoDS_DrKawashimasBrainTraining_EN.pdf)
- [官方來源 2](https://www.nintendo.com/au/games/nintendo-switch/dr-kawashimas-brain-training-for-nintendo-switch/)

### Dr Kawashima’s Brain Training for Nintendo Switch

平台：Switch

官方規格的 Console 為 Nintendo Switch；頁面另列 Switch 2 Compatible，僅記為相容性。

- [官方來源 1](https://www.nintendo.com/au/games/nintendo-switch/dr-kawashimas-brain-training-for-nintendo-switch/)

缺口處理：已釐清系列／同名版本邊界並補具名版本對照；原始泛稱仍不足以唯一選定作品，未以猜測改名或合併。

## 26. 樂高 指環王 — verified

身分：specific-game

2012 年 LEGO The Lord of the Rings 遊戲及其後續移植；不是 LEGO The Hobbit，亦不是整個 LEGO 系列。

平台：PC/macOS/PS3/PS Vita/Xbox 360/Wii/DS/3DS/iOS → PC/macOS/PS3/PS Vita/Xbox 360/Wii/DS/3DS/iOS/Android

範圍為 LEGO The Lord of the Rings 的已證實歷史桌機、主機、掌機及行動移植。Android 原 Google Play 商品 com.wb.goog.llotr 的 2016-03-08 官方頁存檔列 Warner Bros. International Enterprises 與 Android 4.0.3 以上，足以確認歷史發行；不保證今日可購買或新系統相容。TT 現行 PSP／Wii U 通用圖示與 WB 原始平台表衝突，採明確產品平台表而不新增 PSP／Wii U／PS4；未獲確認不表示未來不推出。

- WB 義大利官方產品頁明列 PS3、Xbox 360、Wii、DS、3DS、PS Vita 及 2012-11-23 當地發售日；Steam 商品確認 Windows 版。
- Feral Interactive 官方影片 rKoAkj3JLc4 名為 LEGO The Lord of the Rings for Mac Trailer，描述連結本作 Mac 產品頁；WB Games ANZ 官方影片 1TwpkbinbOQ 明示 iOS 現已上市。
- 本輪直接讀回 2016-03-08 14:22:38 UTC 的 Google Play 官方原頁存檔：包名 com.wb.goog.llotr、發行商 Warner Bros. International Enterprises、更新日期 2016-01-08、Android 4.0.3 以上、已有安裝數；不是 APK 轉載站。

- [官方來源 1](https://www.warnerbros.it/gioco/genere-avventura/lego-il-signore-degli-anelli/)
- [官方來源 2](https://store.steampowered.com/app/214510/)
- [官方來源 3](https://www.youtube.com/watch?v=rKoAkj3JLc4)
- [官方來源 4](https://www.youtube.com/watch?v=1TwpkbinbOQ)
- [官方來源 5](https://web.archive.org/web/20160308142238/https://play.google.com/store/apps/details?id=com.wb.goog.llotr)

### LEGO The Lord of the Rings（Windows／家用主機／掌機版）

平台：PC/PS3/PS Vita/Xbox 360/Wii/DS/3DS

不同硬體的歷史發行版本；不表示各版內容或效能完全一致。

- [官方來源 1](https://www.warnerbros.it/gioco/genere-avventura/lego-il-signore-degli-anelli/)
- [官方來源 2](https://store.steampowered.com/app/214510/)

### LEGO The Lord of the Rings（Feral Mac 移植）

平台：macOS

歷史 Mac OS X 移植；不由現在 Steam Windows 頁推定 Mac，相容最新 macOS 未承諾。

- [官方來源 1](https://www.youtube.com/watch?v=rKoAkj3JLc4)

### LEGO The Lord of the Rings（行動移植）

平台：iOS/Android

WB 官方 iOS 上市影片及原 Google Play 存檔確認；Android 存檔時間 2016-03-08 14:22:38 UTC，包名 com.wb.goog.llotr，非雲端串流。

- [官方來源 1](https://www.youtube.com/watch?v=1TwpkbinbOQ)
- [官方來源 2](https://web.archive.org/web/20160308142238/https://play.google.com/store/apps/details?id=com.wb.goog.llotr)

缺口處理：歷史 Android 缺口已由原 Google Play 官方商品頁存檔補齊。版本界線與歷史可購買性註記清楚；TT 通用圖示衝突不推翻明確官方發行證據，已證實範圍 verified。

## 27. 薩爾達傳說 無雙 — verified

身分：specific-game

本條依既有完整英文別名 Hyrule Warriors，範圍限定為 2014 年無副標原作。Nintendo 原作商品頁明列 Wii U；Legends 與 Definitive Edition 是具不同副標的商品，另列版本對照，不將 Switch 完全版平台套給原作。

平台：依版本確認 → Wii U

本條依既有完整英文別名 Hyrule Warriors，範圍限定為 2014 年無副標原作。Nintendo 原作商品頁明列 Wii U；Legends 與 Definitive Edition 是具不同副標的商品，另列版本對照，不將 Switch 完全版平台套給原作。

- 本條依既有完整英文別名 Hyrule Warriors，範圍限定為 2014 年無副標原作。Nintendo 原作商品頁明列 Wii U；Legends 與 Definitive Edition 是具不同副標的商品，另列版本對照，不將 Switch 完全版平台套給原作。
- Hyrule Warriors（2014 Wii U 原版）：Wii U。Nintendo 歐洲商品頁明列 2014 原版；舊 eShop 停止購買不抹除歷史發行平台。
- Hyrule Warriors: Legends（2016）：3DS。2016 Nintendo 3DS 專屬版本，並非 Wii U 軟體相容執行。
- Hyrule Warriors: Definitive Edition（2018 完全版）：Switch。2018 Switch 完全版；不以此平台倒推 Wii U／3DS 原作版本。

- [官方來源 1](https://www.nintendo.com/en-gb/Games/Wii-U-games/Hyrule-Warriors-891849.html)
- [官方來源 2](https://www.nintendo.com/en-gb/Games/Nintendo-3DS-games/Hyrule-Warriors-Legends-1025970.html)
- [官方來源 3](https://www.nintendo.com/fr-fr/Jeux/Jeux-Nintendo-Switch/Hyrule-Warriors-Definitive-Edition-1325999.html)

### Hyrule Warriors（2014 Wii U 原版）

平台：Wii U

Nintendo 歐洲商品頁明列 2014 原版；舊 eShop 停止購買不抹除歷史發行平台。

- [官方來源 1](https://www.nintendo.com/en-gb/Games/Wii-U-games/Hyrule-Warriors-891849.html)

### Hyrule Warriors: Legends（2016）

平台：3DS

2016 Nintendo 3DS 專屬版本，並非 Wii U 軟體相容執行。

- [官方來源 1](https://www.nintendo.com/en-gb/Games/Nintendo-3DS-games/Hyrule-Warriors-Legends-1025970.html)

### Hyrule Warriors: Definitive Edition（2018 完全版）

平台：Switch

2018 Switch 完全版；不以此平台倒推 Wii U／3DS 原作版本。

- [官方來源 1](https://www.nintendo.com/fr-fr/Jeux/Jeux-Nintendo-Switch/Hyrule-Warriors-Definitive-Edition-1325999.html)

缺口處理：依既有完整名稱／英文別名與官方原作正式標題，明確限定原作年份及平台；不同副標的後作／重製另列對照，不以舊平台反推作品。

## 28. 勇者鬥惡龍 怪物仙境 — unresolved

身分：series

Dragon Quest Monsters／怪物仙境為系列泛稱，不能唯一指定 Terry 原作、RETRO 或 The Dark Prince。已有可操作的版本對照，仍需玩家指定副標題。

平台：依版本確認 → 依版本確認

Dragon Quest Monsters／怪物仙境為系列泛稱，不能唯一指定 Terry 原作、RETRO 或 The Dark Prince。已有可操作的版本對照，仍需玩家指定副標題。 已附具名版本與官方來源，主欄不合併各版本平台。

- Dragon Quest Monsters／怪物仙境為系列泛稱，不能唯一指定 Terry 原作、RETRO 或 The Dark Prince。已有可操作的版本對照，仍需玩家指定副標題。
- Dragon Quest Monsters: Terry’s Wonderland（1998 原版）：Game Boy。官方 RETRO 發行公告回顧 1998 Game Boy 原作；此為歷史原版，不是 Switch 商品。
- Dragon Quest Monsters: Terry’s Wonderland RETRO：Switch/iOS/Android。2019 公告明列先行 Switch 與 iPhone／Android 移植，重現 Game Boy 原版；不是 3D／SP 重製。
- Dragon Quest Monsters: The Dark Prince：PC/Switch/iOS/Android。官方現行產品頁及亞洲發行公告明列 Switch／Steam／iOS／Android；2023 Switch 本體與 2024 PC／手機移植同屬 The Dark Prince，並非 Terry 原作。

- [官方來源 1](https://www.dragonquest.jp/news/detail/3116/)
- [官方來源 2](https://dragonquest.square-enix-games.com/games/en-us/dqmonsters/)
- [官方來源 3](https://www.square-enix.com/asia/newsportal/en/topics/dragonquest-monsters3/post07.html)

### Dragon Quest Monsters: Terry’s Wonderland（1998 原版）

平台：Game Boy

官方 RETRO 發行公告回顧 1998 Game Boy 原作；此為歷史原版，不是 Switch 商品。

- [官方來源 1](https://www.dragonquest.jp/news/detail/3116/)

### Dragon Quest Monsters: Terry’s Wonderland RETRO

平台：Switch/iOS/Android

2019 公告明列先行 Switch 與 iPhone／Android 移植，重現 Game Boy 原版；不是 3D／SP 重製。

- [官方來源 1](https://www.dragonquest.jp/news/detail/3116/)

### Dragon Quest Monsters: The Dark Prince

平台：PC/Switch/iOS/Android

官方現行產品頁及亞洲發行公告明列 Switch／Steam／iOS／Android；2023 Switch 本體與 2024 PC／手機移植同屬 The Dark Prince，並非 Terry 原作。

- [官方來源 1](https://dragonquest.square-enix-games.com/games/en-us/dqmonsters/)
- [官方來源 2](https://www.square-enix.com/asia/newsportal/en/topics/dragonquest-monsters3/post07.html)

缺口處理：已釐清系列／同名版本邊界並補具名版本對照；原始泛稱仍不足以唯一選定作品，未以猜測改名或合併。

## 29. 世界樹的迷宮 — verified

身分：specific-game

本條依既有中文名稱與完整英文別名 Etrian Odyssey，範圍限定為 2007 年無副標原作。SEGA 正式商品頁明列 2007-01-18、Nintendo DS；HD 單作與 Origins Collection 合輯有獨立商品名，另列版本對照，不併入主平台。

平台：依版本確認 → DS

本條依既有中文名稱與完整英文別名 Etrian Odyssey，範圍限定為 2007 年無副標原作。SEGA 正式商品頁明列 2007-01-18、Nintendo DS；HD 單作與 Origins Collection 合輯有獨立商品名，另列版本對照，不併入主平台。

- 本條依既有中文名稱與完整英文別名 Etrian Odyssey，範圍限定為 2007 年無副標原作。SEGA 正式商品頁明列 2007-01-18、Nintendo DS；HD 單作與 Origins Collection 合輯有獨立商品名，另列版本對照，不併入主平台。
- Etrian Odyssey／世界樹的迷宮（2007 原版）：DS。SEGA 商品資料明列 2007 年 1 月 18 日、Nintendo DS；此選項不含 HD 重製。
- Etrian Odyssey HD（單作重製）：PC/Switch。Atlus 購買選單列 Steam／Nintendo Switch；Nintendo 另有獨立 HD 商品頁。
- Etrian Odyssey Origins Collection（HD 合輯）：PC/Switch。Atlus 明列合輯包含 I、II、III 的 HD 版，與第一代 HD 單作不同商品。

- [官方來源 1](https://www.sega.jp/game/detail/atlus_sekaiju/)
- [官方來源 2](https://www.atlus.com/etrianorigins/index.html?lang=en)
- [官方來源 3](https://www.nintendo.com/us/store/products/etrian-odyssey-hd-switch/)

### Etrian Odyssey／世界樹的迷宮（2007 原版）

平台：DS

SEGA 商品資料明列 2007 年 1 月 18 日、Nintendo DS；此選項不含 HD 重製。

- [官方來源 1](https://www.sega.jp/game/detail/atlus_sekaiju/)

### Etrian Odyssey HD（單作重製）

平台：PC/Switch

Atlus 購買選單列 Steam／Nintendo Switch；Nintendo 另有獨立 HD 商品頁。

- [官方來源 1](https://www.atlus.com/etrianorigins/index.html?lang=en)
- [官方來源 2](https://www.nintendo.com/us/store/products/etrian-odyssey-hd-switch/)

### Etrian Odyssey Origins Collection（HD 合輯）

平台：PC/Switch

Atlus 明列合輯包含 I、II、III 的 HD 版，與第一代 HD 單作不同商品。

- [官方來源 1](https://www.atlus.com/etrianorigins/index.html?lang=en)

缺口處理：依既有完整名稱／英文別名與官方原作正式標題，明確限定原作年份及平台；不同副標的後作／重製另列對照，不以舊平台反推作品。

## 30. The Rise of the Golden Idol — partial

身分：specific-game

Color Gray Games／Playstack 的 2024 年獨立續作，與 The Case of the Golden Idol（2022）分開。

平台：PC/macOS/PS5/Xbox Series X|S/Xbox One/Switch/iOS/Android → PC/macOS/PS5/Xbox Series X|S/Xbox One/Switch/iOS/Android

限定 2024 年獨立續作 The Rise of the Golden Idol。PS5 有正式商品；Sony 嵌入的 2023 公告影片也曾標 PS4，但本輪仍缺可回讀 PS4 正式 SKU 或明確上市公告，PS4 保留為歷史預告而不當作已上市平台。Netflix 行動版已撤下；目前 Playstack 獨立 iOS／Android 商品已重新提供。Switch 2 可相容 Switch 版，不視為原生版本。

- Sony 本作頁正文商品欄 Platform 為 PS5，發售日 2024-11-12；頁面結構資料的商品 SKU 為 EP3495-PPSA25812_00-0003281733473898。
- 同頁內嵌官方 Announcement Trailer 的名稱是 PS5 & PS4 Games，影片 EthfB4JjQ2k 發布於 2023-12-08；這能補強歷史 PS4 公告，但無法單獨證明 PS4 正式發行。
- Steam 系統需求列 Windows 與 macOS；Xbox 商品結構資料 gamePlatform 明列 Xbox One 與 Xbox Series X|S 並標原生 Series 最佳化；Nintendo 商品列 Switch。
- Playstack 2026-05-11 FAQ 確認 Netflix 版已撤下、當時仍準備 Rise 行動版；目前 Google Play 商品（2026-06-16 更新）與 Apple 商品皆為 Playstack 發行的本作，故採較新商店證據確認重新上架。

- [官方來源 1](https://www.playstation.com/en-us/games/the-rise-of-the-golden-idol/)
- [官方來源 2](https://store.steampowered.com/app/2716400/)
- [官方來源 3](https://www.xbox.com/fr-FR/games/store/the-rise-of-the-golden-idol/9nhqgsh0598d)
- [官方來源 4](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/The-Rise-of-the-Golden-Idol-2696296.html)
- [官方來源 5](https://play.google.com/store/apps/details?hl=en_US&id=com.playstack.TheRiseOfTheGoldenIdol)
- [官方來源 6](https://apps.apple.com/us/app/the-rise-of-the-golden-idol/id6473898665)
- [官方來源 7](https://playstack.zendesk.com/hc/en-us/articles/36000528158877-What-happened-to-Golden-Idol-on-Netflix)

### The Rise of the Golden Idol（2024 桌機與主機版）

平台：PC/macOS/PS5/Xbox Series X|S/Xbox One/Switch

已確認上市版本；PS4 僅另有歷史公告，尚缺正式上市證據，不列於此已上市清單。

- [官方來源 1](https://www.playstation.com/en-us/games/the-rise-of-the-golden-idol/)
- [官方來源 2](https://store.steampowered.com/app/2716400/)
- [官方來源 3](https://www.xbox.com/fr-FR/games/store/the-rise-of-the-golden-idol/9nhqgsh0598d)
- [官方來源 4](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/The-Rise-of-the-Golden-Idol-2696296.html)

### The Rise of the Golden Idol（PS4 歷史預告）

平台：PS4（歷史預告，上市未確認）

2023 Sony 官方公告影片曾列 PS4；現可讀商品僅 PS5，不能當作 PS4 已上市或保證仍將推出。

- [官方來源 1](https://www.playstation.com/en-us/games/the-rise-of-the-golden-idol/)

### The Rise of the Golden Idol（Playstack 獨立行動版）

平台：iOS/Android

2026 年重新提供的 Playstack 商品；先前 Netflix 服務版本已撤下，兩種發行方式分開。

- [官方來源 1](https://play.google.com/store/apps/details?hl=en_US&id=com.playstack.TheRiseOfTheGoldenIdol)
- [官方來源 2](https://apps.apple.com/us/app/the-rise-of-the-golden-idol/id6473898665)
- [官方來源 3](https://playstack.zendesk.com/hc/en-us/articles/36000528158877-What-happened-to-Golden-Idol-on-Netflix)

缺口處理：補得 PS4 歷史官方公告影片及 PS5 正式 SKU 的直接比較，也重新確認獨立行動版。PS4 正式上市仍欠商品或明確上市證據，保持 partial，不將 Case of the Golden Idol 的 PS4 版混入。

## 31. Perfect Dark — unresolved

身分：ambiguous-title

目前名稱／alias 無年份且三版同名；不能憑原 PC/Xbox 欄推定重啟版，因該欄正是待核資料。

平台：依版本確認 → 依版本確認

同名可能指 2000 年 N64 原作、2010 年 Xbox Live Arcade HD 版或後來重啟專案；原條目沒有年份，不代選版本，也不把它們合成 PC／Xbox。原作另有 Switch／Switch 2 NSO 再發行；2010 版在後續 Xbox 主機透過相容性遊玩；重啟案 PC／Xbox Series X|S 僅屬歷史公布平台，不代表已上市或仍保證推出。本輪未取得取消消息的可直接回讀第一方對外公告，未將取消狀態定案。

- Nintendo 官方 N64 Classics Mature 商品列 Perfect Dark，服務支援 Switch／Switch 2，需 NSO + Expansion Pack；屬經典原作再發行。
- Xbox 2010-03-17 官方上市文與商品 C0SWGV4560W1 對應 4J Studios HD 版；現店面列 Xbox One、Series X|S、Cloud，並收錄 Rare Replay，不是新重啟版。
- Xbox 2024-06-09 官方專文明確稱新作為 reboot、全新故事與世界，The Initiative／Crystal Dynamics 合作；不能與 N64／2010 版合併。
- Embracer 2024-08-15 Q1 報告的公開專案表將 Perfect Dark 列為 PC、XB X|S（官方投資人文件的 MFN 發布副本，瑞典文表）；只證明當時公告目標。取消內部備忘錄的媒體轉載未採作第一方定案。

- [官方來源 1](https://www.nintendo.com/au/games/nintendo-switch/nintendo-64-nintendo-classics-mature/)
- [官方來源 2](https://news.xbox.com/en-us/2010/03/17/arcade-perfect-dark/)
- [官方來源 3](https://www.xbox.com/en-gb/games/store/perfect-dark/c0swgv4560w1)
- [官方來源 4](https://news.xbox.com/en-us/2024/06/09/perfect-dark-details-interview-xbox-games-showcase-2024/)
- [官方來源 5](https://storage.mfn.se/27b8a293-f595-4698-96b8-b207df8b9cbd/embracer-group-delarsrapport-q1-2024-25.pdf)

### Perfect Dark（2000，Nintendo 64 原作）

平台：Nintendo 64/Switch（NSO版）/Switch 2（NSO版）

N64 原作及官方 NSO 經典再發行；不是 Switch 原生重製。

- [官方來源 1](https://www.nintendo.com/au/games/nintendo-switch/nintendo-64-nintendo-classics-mature/)

### Perfect Dark（2010，Xbox Live Arcade HD版）

平台：Xbox 360/Xbox One（相容）/Xbox Series X|S（相容）

4J Studios 2010 HD 版，後續收錄 Rare Replay；雲端可玩不等於 PC 原生版。

- [官方來源 1](https://news.xbox.com/en-us/2010/03/17/arcade-perfect-dark/)
- [官方來源 2](https://www.xbox.com/en-gb/games/store/perfect-dark/c0swgv4560w1)

### Perfect Dark（The Initiative／Crystal Dynamics 重啟專案）

平台：PC/Xbox Series X|S（歷史公布）

與舊作不同世界及故事的重啟案。平台僅記錄 2024 官方公告，不作今日仍開發、將上市或可購買承諾；取消狀態尚無本輪可回讀第一方對外頁。

- [官方來源 1](https://news.xbox.com/en-us/2024/06/09/perfect-dark-details-interview-xbox-games-showcase-2024/)
- [官方來源 2](https://storage.mfn.se/27b8a293-f595-4698-96b8-b207df8b9cbd/embracer-group-delarsrapport-q1-2024-25.pdf)

缺口處理：三種具名版本與官方來源已提供 editionOptions；真正未解的是原條目指向哪一版，因此仍 unresolved。主欄維持依版本確認，重啟歷史平台不拼入舊版。
