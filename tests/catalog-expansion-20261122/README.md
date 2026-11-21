# 主機／PC 大作與獨立遊戲擴充（第三輪）

查核日期：2026-11-22。新增34款大作及28款獨立遊戲（4款搶先體驗），1029 → 1091款。原1029款逐欄保留，包括既有7筆待確認資料；本輪未合併任何條目，歷史審計只更新摘要目錄總數。只收錄截至查核日已上市或搶先體驗中的作品；查核時尚未上市的候選（例如 Persona 4 Revival、雷頓教授與蒸氣新世界、The Duskbloods）未收錄。

收錄依據：Steam 作品使用 Steam 商店 API 的 recommendations.total 快照（本輪 Steam 評論 API 拒絕自動請求，因此與前兩輪的評論總數、正評比例不能直接比較）；非 Steam 作品依官方發行規模與編輯判斷。catalogPriority 3為本輪高優先，2次之，1補充，僅作編輯排序，不是人氣排行。平台只列出查核日已推出的原生版本；向下相容、雲端串流、延期或僅見傳聞的版本不列入，並寫在平台說明。

[完整資料與證據](audit.json) · [重複與別名檢查](duplicate-check.json) · [本輪平台缺口](pending-platforms.json) · [驗證](VALIDATION.md)

重現：`node tests/catalog-expansion-20261122/apply-expansion.cjs`；加`--apply`寫入。整合器拒絕名稱／別名／商品ID衝突，以及目錄、歷史審計或待確認清單的獨立漂移。前兩輪整合器不適用擴充後目錄。

## 邊緣禁地4

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 59,561 則推薦（recommendations，2026-11-22 快照），Metacritic 81；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Gearbox Software 開發、2K 發行的 Borderlands 系列第四部正篇。

平台範圍：已確認 PC、PS5、Xbox Series X|S；Switch 2 版經 2K 官方公告延期且未定新日期，不列入平台。

別名：borderlands 4、bl4、邊緣禁地®4

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1285190&l=english)：Steam 商店 API 回傳「Borderlands 4」（app 1285190），平台 Windows，發售日 Sep 11, 2025，開發 Gearbox Software。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1285190&l=tchinese)：Steam 繁體中文商店名稱為「邊緣禁地®4」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/borderlands-4/)：PlayStation 台灣頁標題「邊緣禁地®4」，平台 PS5，推出日 2025/9/11，發行 Take-Two（2K Games）。
- [官方平台來源](https://www.xbox.com/en-US/games/store/borderlands-4/9MX6HKF5647G)：Xbox 商店「Borderlands®4」支援 Xbox Series X|S 與雲端（無 Xbox One），2025/9/13，開發 Gearbox、發行 2K。
- [官方平台來源](https://borderlands.2k.com/borderlands-4/news/borderlands-4-pre-order-nintendo-switch-2/)：2K 官方 2025-09-23 公告 Switch 2 版（原定 2025-10-03）延期且未定新日期，數位預購取消；本條目不列 Switch 2。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1285190&l=english)：Steam 商店 API 的 recommendations.total 為 59561，metacritic.score 為 81（2026-11-22 讀取）。

## NINJA GAIDEN 4

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 8,842 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Team NINJA 與 PlatinumGames 開發、Xbox Game Studios 發行的系列新作正篇；不是 NINJA GAIDEN 2 Black 或 Master Collection。

平台範圍：已確認 PC、PS5、Xbox Series X|S；未推出 Xbox One 版。

別名：ninja gaiden 4、忍者外傳4、忍龍4

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2627260&l=english)：Steam 商店 API 回傳「NINJA GAIDEN 4」（app 2627260），平台 Windows，發售日 Oct 20, 2025，開發 PlatinumGames Inc. / Team NINJA / KOEI TECMO GAMES CO., LTD.。
- [官方平台來源](https://www.xbox.com/en-US/games/store/ninja-gaiden-4/9N7358JZPX1Z)：Xbox 商店「NINJA GAIDEN 4 Standard Edition」支援 PC、Xbox Series X|S 與雲端（無 Xbox One），2025/10/21，發行 Xbox Game Studios。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/ninja-gaiden-4/)：PlayStation 台灣頁「NINJA GAIDEN 4」平台 PS5，推出日 2025/10/21，發行 Microsoft Corporation。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2627260&l=english)：Steam 商店 API 的 recommendations.total 為 8842（2026-11-22 讀取）。

## SILENT HILL f

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 19,721 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：NeoBards Entertainment 開發、KONAMI 發行的 SILENT HILL 系列新作，舞台為 1960 年代日本；與 SILENT HILL 2 重製版分開。

平台範圍：已確認 PC、PS5、Xbox Series X|S。

別名：silent hill f、沉默之丘f、寂靜嶺f

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2947440&l=english)：Steam 商店 API 回傳「SILENT HILL f」（app 2947440），平台 Windows，發售日 Sep 24, 2025，開發 NeoBards Entertainment Ltd.。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/silent-hill-f/)：PlayStation 台灣頁「SILENT HILL f」平台 PS5，推出日 2025/9/24，發行 KONAMI。
- [官方平台來源](https://www.xbox.com/en-US/games/store/silent-hill-f/9NWTMTLS2ZPB)：Xbox 商店「SILENT HILL f」支援 PC、Xbox Series X|S 與雲端（無 Xbox One），開發 NeoBards、發行 KONAMI。
- [官方平台來源](https://www.konami.com/games/us/en/topics/2868/)：KONAMI 官方公告列出 PlayStation 5、Xbox Series X|S、Steam、Epic Games 與 Windows，9 月 25 日上市。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2947440&l=english)：Steam 商店 API 的 recommendations.total 為 19721（2026-11-22 讀取）。

## 消逝的光芒：困獸

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 61,922 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Techland 開發發行的獨立作品，主角為凱爾克蘭；原規劃為 Dying Light 2 擴充，後獨立推出，不是 Dying Light 2 本篇。

平台範圍：已確認 PC、PS5、Xbox Series X|S；未推出上一代主機與 Switch 版。

別名：dying light the beast、dying light: the beast、垂死之光 野獸

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3008130&l=english)：Steam 商店 API 回傳「Dying Light: The Beast」（app 3008130），平台 Windows，發售日 Sep 18, 2025，開發 Techland。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/dying-light-the-beast/)：PlayStation 台灣頁「Dying Light: The Beast（消逝的光芒：困獸）」平台 PS5，2025/9/18，發行 TECHLAND。
- [官方平台來源](https://www.xbox.com/en-US/games/store/dying-light-the-beast/9P7ZG9MQKKLN)：Xbox 商店支援 Xbox Series X|S 與雲端（無 Xbox One），2025/9/18，Techland 開發發行。
- [官方平台來源](https://dyinglightgame.com/the-beast/)：官方 FAQ：可於 PC（Steam、Epic）、PS5／PS5 Pro、Xbox Series X|S 遊玩。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3008130&l=english)：Steam 商店 API 的 recommendations.total 為 61922（2026-11-22 讀取）。

## 四海兄弟：故鄉

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 21,478 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Hangar 13 開發、2K 發行的 Mafia 系列前傳，舞台為 1900 年代西西里；與 Mafia: Definitive Edition 分開。

平台範圍：已確認 PC、PS5、Xbox Series X|S。

別名：mafia the old country、mafia: the old country、四海兄弟 故鄉

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1941540&l=english)：Steam 商店 API 回傳「Mafia: The Old Country」（app 1941540），平台 Windows，發售日 Aug 7, 2025，開發 Hangar 13。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1941540&l=tchinese)：Steam 繁體中文商店名稱為「四海兄弟：故鄉」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/mafia-the-old-country/)：PlayStation 台灣頁「四海兄弟：故鄉」平台 PS5，推出日 2025/8/7，發行 Take-Two。
- [官方平台來源](https://www.xbox.com/en-US/games/store/mafia-the-old-country/9P834N9S4LL0)：Xbox 商店支援 Xbox Series X|S 與雲端（無 Xbox One），2025/8/8，開發 Hangar 13、發行 2K。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1941540&l=english)：Steam 商店 API 的 recommendations.total 為 21478（2026-11-22 讀取）。

## The Outer Worlds 2

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 8,728 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Obsidian Entertainment 開發、Xbox Game Studios 發行的續作；與 2019 年《天外世界》及 Mobius 的 Outer Wilds 分開。

平台範圍：已確認 PC、PS5、Xbox Series X|S；未推出 Xbox One 版。

別名：the outer worlds 2、outer worlds 2、天外世界2

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1449110&l=english)：Steam 商店 API 回傳「The Outer Worlds 2」（app 1449110），平台 Windows，發售日 Oct 29, 2025，開發 Obsidian Entertainment。
- [官方平台來源](https://www.xbox.com/en-US/games/store/the-outer-worlds-2/9P8RMKXRML7D)：Xbox 商店支援 PC、Xbox Series X|S、雲端與掌機（無 Xbox One），2025/10/29，開發 Obsidian、發行 Xbox Game Studios。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/the-outer-worlds-2/)：PlayStation 台灣頁平台欄只列 PS5，推出日 2025/10/29，發行 Microsoft Corporation。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1449110&l=english)：Steam 商店 API 的 recommendations.total 為 8728（2026-11-22 讀取）。

## Hell is Us

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 4,829 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Rogue Factor 開發、Nacon 發行的第三人稱動作冒險新作。

平台範圍：已確認 PC、PS5、Xbox Series X|S。

別名：hell is us

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1620730&l=english)：Steam 商店 API 回傳「Hell is Us」（app 1620730），平台 Windows，發售日 Sep 4, 2025，開發 Rogue Factor。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/hell-is-us/)：PlayStation 台灣頁「Hell is Us」平台 PS5，推出日 2025/9/4，發行 NACON SA。
- [官方平台來源](https://www.xbox.com/en-US/games/store/hell-is-us/9N9097G0XZMB)：Xbox 商店支援 Xbox Series X|S、PC、雲端與掌機（無 Xbox One），2025/9/4，開發 Rogue Factor、發行 Nacon。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1620730&l=english)：Steam 商店 API 的 recommendations.total 為 4829（2026-11-22 讀取）。

## FINAL FANTASY TACTICS - The Ivalice Chronicles

major｜PC/PS5/PS4/Xbox Series X|S/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 5,899 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Square Enix 對 1997 年 PS1《Final Fantasy Tactics》的重製版，含強化版與經典版；與 PS1 原版及 PSP／手機《獅子戰爭》分開。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Switch 與 Switch 2 Edition；Switch 版可免費升級為 Switch 2 版。

別名：final fantasy tactics the ivalice chronicles、fft ivalice chronicles、太空戰士戰略版 重製版

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1004640&l=english)：Steam 商店 API 回傳「FINAL FANTASY TACTICS - The Ivalice Chronicles」（app 1004640），平台 Windows，發售日 Sep 30, 2025，開發 Square Enix。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/final-fantasy-tactics-the-ivalice-chronicles/)：PlayStation 台灣頁「FINAL FANTASY TACTICS - The Ivalice Chronicles」平台 PS4／PS5，推出日 2025/9/29，發行 SQUARE ENIX。
- [官方平台來源](https://www.xbox.com/en-US/games/store/final-fantasy-tactics-the-ivalice-chronicles/9MZ2MC7T85T5)：Xbox 商店支援 Xbox Series X|S 與雲端（無 Xbox One），2025/9/30，Square Enix 開發發行。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/FINAL-FANTASY-TACTICS-The-Ivalice-Chronicles-2881422.html)：任天堂英國頁 Nintendo Switch 版，2025/9/30 發售，發行 Square Enix，可免費升級為 Switch 2 版。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-Edition/FINAL-FANTASY-TACTICS-The-Ivalice-Chronicles-Nintendo-Switch-2-Edition-2881480.html)：任天堂英國頁 Nintendo Switch 2 Edition，2025/9/30，提升影格率與解析度、內容不變。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1004640&l=english)：Steam 商店 API 的 recommendations.total 為 5899（2026-11-22 讀取）。

## 決勝時刻：黑色行動 7

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 4,530 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Treyarch 與 Raven Software 開發、Activision 發行的 Call of Duty 付費正篇；與免費的 Warzone 及 Call of Duty: Mobile 分開。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One（跨世代組合包）。

別名：call of duty black ops 7、black ops 7、bo7、cod bo7、決勝時刻 黑色行動7

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3606480&l=english)：Steam 商店 API 回傳「Call of Duty®: Black Ops 7」（app 3606480），平台 Windows，發售日 Nov 21, 2025，開發 Treyarch、Raven Software、Beenox、High Moon Studios、Sledgehammer Games、Infinity Ward、Activision Shanghai、Demonware。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/call-of-duty-black-ops-7/)：PlayStation 台灣頁「《決勝時刻®：黑色行動 7》- 跨世代組合包」平台 PS4／PS5，推出日 2025/11/13，發行 Activision。
- [官方平台來源](https://www.xbox.com/en-US/games/store/call-of-duty-black-ops-7-cross-gen-bundle/9PLBM5790L94)：Xbox 商店跨世代組合包支援 Xbox One、Xbox Series X|S、PC 與雲端，發行 Activision。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3606480&l=english)：Steam 商店 API 的 recommendations.total 為 4530（2026-11-22 讀取）。

## EA SPORTS FC 26

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 104,352 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：EA Canada 開發、Electronic Arts 發行的 2025–26 年度足球作品；與免費的 EA SPORTS FC Mobile 及其他年度版本分開。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch 與 Switch 2；Switch 與 Switch 2 為不同商品。

別名：ea sports fc 26、fc 26、fc26、ea fc 26

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3405690&l=english)：Steam 商店 API 回傳「EA SPORTS FC™ 26」（app 3405690），平台 Windows，發售日 Sep 25, 2025，開發 EA Canada、EA Romania。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/ea-sports-fc-26/)：PlayStation 台灣頁「EA SPORTS FC™ 26」標準版平台 PS4／PS5，推出日 2025/9/25，發行 Electronic Arts。
- [官方平台來源](https://www.xbox.com/en-US/games/store/ea-sports-fc-26-standard-edition-xbox-one-xbox-series-xs/9MXZBTLG26VX)：Xbox 商店「EA SPORTS FC™ 26 Standard Edition Xbox One & Xbox Series X|S」，2025/9/26，開發 EA Canada。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/EA-SPORTS-FC-26-2874004.html)：任天堂英國頁 Nintendo Switch 版，標準版 2025/9/26，發行 Electronic Arts。
- [官方平台來源](https://ec.nintendo.com/AU/en/titles/70010000100268)：任天堂澳洲 eShop 列出 Nintendo Switch 2 版「EA SPORTS FC™ 26」，並註明另有 Switch 版。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3405690&l=english)：Steam 商店 API 的 recommendations.total 為 104352（2026-11-22 讀取）。

## NBA 2K26

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 26,375 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Visual Concepts 開發、2K 發行的 2025–26 年度籃球作品；Apple Arcade 的 NBA 2K26 Arcade Edition 是不同商品，不併入。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch 與 Switch 2。

別名：nba 2k26、2k26

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3472040&l=english)：Steam 商店 API 回傳「NBA 2K26」（app 3472040），平台 Windows，發售日 Sep 4, 2025，開發 Visual Concepts。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3472040&l=tchinese)：Steam 繁體中文商店名稱為「《NBA 2K26》」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/nba-2k26/)：PlayStation 台灣頁「NBA 2K26」平台 PS4／PS5，推出日 2025/9/4，發行 Take-Two。
- [官方平台來源](https://www.xbox.com/en-US/games/store/nba-2k26-for-xbox-one/9PP9PFSCJTWR)：Xbox 商店「NBA 2K26 for Xbox One」支援 Xbox One、Xbox Series X|S 與雲端，開發 Visual Concepts、發行 2K。
- [官方平台來源](https://www.nintendo.com/us/store/products/nba-2k26-switch/)：任天堂美國頁 Nintendo Switch 版，2025/9/5，發行 2K。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/NBA-2K26-2910946.html)：任天堂英國頁 Nintendo Switch 2 版，2025/9/5，發行 2K。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3472040&l=english)：Steam 商店 API 的 recommendations.total 為 26375（2026-11-22 讀取）。

## 索尼克賽車 交叉世界

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 12,024 則推薦（recommendations，2026-11-22 快照），Metacritic 84；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Sonic Team 開發、SEGA 發行的賽車新作；與 Team Sonic Racing 及 Sonic & All-Stars Racing Transformed 分開。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch 與 Switch 2 Edition；Switch 2 Edition 於 2025-12-03 較晚推出。

別名：sonic racing crossworlds、sonic racing: crossworlds、音速小子賽車 交叉世界

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2486820&l=english)：Steam 商店 API 回傳「Sonic Racing: CrossWorlds」（app 2486820），平台 Windows，發售日 Sep 25, 2025，開發 Sonic Team。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2486820&l=tchinese)：Steam 繁體中文商店名稱為「索尼克賽車 交叉世界」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/sonic-racing-crossworlds/)：PlayStation 台灣頁「索尼克賽車 交叉世界」平台 PS4／PS5，推出日 2025/9/24，發行 SEGA。
- [官方平台來源](https://www.xbox.com/en-US/games/store/sonic-racing-crossworlds/9NMR17QTLC33)：Xbox 商店支援 Xbox One 與 Xbox Series X|S，開發 Sonic Team、發行 SEGA。
- [官方平台來源](https://www.nintendo.com/us/store/products/sonic-racing-crossworlds-switch/)：任天堂美國頁 Nintendo Switch 版，2025/9/25，發行 SEGA。
- [官方平台來源](https://www.nintendo.com/us/store/products/sonic-racing-crossworlds-nintendo-switch-2-edition-switch-2)：任天堂美國頁 Nintendo Switch 2 Edition，2025/12/3 發售，另有 Switch 升級包。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2486820&l=english)：Steam 商店 API 的 recommendations.total 為 12024，metacritic.score 為 84（2026-11-22 讀取）。

## 小小夢魘3

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 10,423 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Supermassive Games 開發、萬代南夢宮發行的系列第三部正篇，首度支援線上合作；與第一代 Enhanced Edition 分開。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch 與 Switch 2（依發行商上市公告）。

別名：little nightmares iii、little nightmares 3、小小夢魘III

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1392860&l=english)：Steam 商店 API 回傳「Little Nightmares III」（app 1392860），平台 Windows，發售日 Oct 9, 2025，開發 Supermassive Games。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1392860&l=tchinese)：Steam 繁體中文商店名稱為「小小夢魘3」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/little-nightmares-3/)：PlayStation 台灣頁「小小夢魘3」平台 PS4／PS5，推出日 2025/10/9，發行 Bandai Namco Entertainment。
- [官方平台來源](https://en.bandainamcoent.eu/little-nightmares/news/little-nightmares-iii-available-now)：萬代南夢宮官方公告：已於 PS5、Xbox Series X|S、PC、Nintendo Switch 2、PS4、Xbox One 與 Nintendo Switch 推出。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1392860&l=english)：Steam 商店 API 的 recommendations.total 為 10423（2026-11-22 讀取）。

## 勇者鬥惡龍 VII Reimagined

major｜PC/PS5/Xbox Series X|S/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 2,243 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Square Enix 對 PS1《勇者鬥惡龍VII》的全面重製版；與 PS1 原版及 3DS 重製版分開，不共用 dq7 等原版別名。

平台範圍：已確認 PC、PS5、Xbox Series X|S、Switch 與 Switch 2。

別名：dragon quest vii reimagined、dq7 reimagined、dqvii reimagined、勇者鬥惡龍7 重製版

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2499860&l=english)：Steam 商店 API 回傳「DRAGON QUEST VII Reimagined」（app 2499860），平台 Windows，發售日 Feb 5, 2026，開發 Square Enix、HEXADRIVE Inc.。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2499860&l=tchinese)：Steam 繁體中文商店名稱為「勇者鬥惡龍 VII Reimagined」。
- [官方平台來源](https://www.playstation.com/zh-hant-hk/games/dragon-quest-vii-reimagined/)：PlayStation 香港頁「勇者鬥惡龍 VII Reimagined」平台 PS5，推出日 2026/2/4，發行 SQUARE ENIX。
- [官方平台來源](https://www.square-enix.com/asia/newsportal/en/topics/dq7r/post01.html)：Square Enix 官方頁列出 Nintendo Switch 2／Nintendo Switch／PlayStation 5／Xbox Series X|S／Steam／Microsoft Store，2026 年 2 月 5 日。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2499860&l=english)：Steam 商店 API 的 recommendations.total 為 2243（2026-11-22 讀取）。

## 歧路旅人0

major｜PC/PS5/PS4/Xbox Series X|S/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 3,025 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Square Enix 的主機／PC 作品，故事延伸自手機版《歧路旅人：大陸的霸者》；與一、二代及手機版分開，不共用 octopath 泛稱。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Switch 與 Switch 2；Switch 與 Switch 2 為不同商品。

別名：octopath traveler 0、ot0、八方旅人0

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3014320&l=english)：Steam 商店 API 回傳「OCTOPATH TRAVELER 0」（app 3014320），平台 Windows，發售日 Dec 4, 2025，開發 Square Enix、DOKIDOKI GROOVE WORKS。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3014320&l=tchinese)：Steam 繁體中文商店名稱為「歧路旅人0 OCTOPATH TRAVELER 0」。
- [官方平台來源](https://www.playstation.com/zh-hant-hk/games/octopath-traveler-0/)：PlayStation 香港頁「歧路旅人0」平台 PS4／PS5，推出日 2025/12/3，發行 SQUARE ENIX。
- [官方平台來源](https://press.na.square-enix.com/EMBARK-ON-AN-ADVENTURE-OF-YOUR-OWN-CREATION-WITH-THE-LAUNCH-OF-OCTOPAT)：Square Enix 新聞稿：2025 年 12 月 4 日於 Nintendo Switch 2、Nintendo Switch、PS5、PS4、Xbox Series X|S 與 PC（Steam、Microsoft Store）推出。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3014320&l=english)：Steam 商店 API 的 recommendations.total 為 3025（2026-11-22 讀取）。

## The Elder Scrolls IV: Oblivion Remastered

major｜PC/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 60,228 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Bethesda Game Studios 與 Virtuos 以 Unreal Engine 5 重製的 2006 年《上古卷軸4》，內含 Shivering Isles 與 Knights of the Nine；與原版條目分開。

平台範圍：已確認 PC、PS5、Xbox Series X|S；Nintendo Switch 2 版於 2026-08-11 推出。

別名：oblivion remastered、the elder scrolls iv oblivion remastered、上古卷軸4 重製版、遺忘之都 重製版

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2623190&l=english)：Steam 商店 API 回傳「The Elder Scrolls IV: Oblivion Remastered」（app 2623190），平台 Windows，發售日 Apr 22, 2025，開發 Bethesda Game Studios、Virtuos。
- [官方平台來源](https://elderscrolls.bethesda.net/en-EU/news/the-elder-scrolls-iv-oblivion-remastered-launch)：Bethesda 官方 2025-04-22 上市公告列出 Xbox Series X|S、Game Pass、PlayStation 5 與 PC。
- [官方平台來源](https://elderscrolls.bethesda.net/en-EU/news/the-elder-scrolls-iv-oblivion-remastered-available-now-on-nintendo-switch-2)：Bethesda 官方 2026-08-11 公告 Nintendo Switch 2 版推出，含 Shivering Isles 與 Knights of the Nine。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2623190&l=english)：Steam 商店 API 的 recommendations.total 為 60228（2026-11-22 讀取）。

## Grounded 2

major｜PC/PS5/Xbox Series X|S｜early-access｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 22,575 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Obsidian Entertainment 開發、Xbox Game Studios 發行的《Grounded》續作，目前為 Game Preview／搶先體驗。

平台範圍：已確認 PC、Xbox Series X|S 搶先體驗，PS5 版 2026-08-11 加入搶先體驗；正式版日期未公布。

別名：grounded 2、禁閉求生2

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2661300&l=english)：Steam 商店 API 回傳「Grounded 2」（app 2661300），平台 Windows，發售日 Jul 29, 2025，類型含搶先體驗，開發 Obsidian Entertainment、Eidos-Montréal。
- [官方平台來源](https://news.xbox.com/en-us/2025/07/29/getting-started-in-grounded-2/)：Xbox Wire 2025-07-29：於 Xbox Series X|S、Xbox PC、雲端 Game Preview 與 Steam 搶先體驗推出。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10016651)：PlayStation Store 台灣頁「Grounded 2」平台 PS5，2026/8/11，發行 Microsoft Corporation（搶先體驗）。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2661300&l=english)：Steam 商店 API 的 recommendations.total 為 22575（2026-11-22 讀取）。

## 明末：淵虛之羽

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 45,486 則推薦（recommendations，2026-11-22 快照），Metacritic 77；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Leenzee Games 開發、505 Games 發行的明末背景魂系動作 RPG。

平台範圍：已確認 PC、PS5、Xbox Series X|S。

別名：wuchang fallen feathers、wuchang、明末

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2277560&l=english)：Steam 商店 API 回傳「WUCHANG: Fallen Feathers」（app 2277560），平台 Windows，發售日 Jul 23, 2025，開發 Leenzee。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2277560&l=tchinese)：Steam 繁體中文商店名稱為「明末：淵虛之羽」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/wuchang-fallen-feathers/)：PlayStation 台灣頁「明末：淵虛之羽」平台 PS5，2025/7/24 推出。
- [官方平台來源](https://505games.com/?p=66960)：505 Games 官方頁列出 Xbox Series X|S、Game Pass、PS5、Steam 與 Epic，2025/7/24，開發 Leenzee。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2277560&l=english)：Steam 商店 API 的 recommendations.total 為 45486，metacritic.score 為 77（2026-11-22 讀取）。

## 時間旅者：重生曙光

major｜PC/Mac/Linux/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 8,276 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Bloober Team 開發發行的原創生存恐怖作品；與同工作室的 SILENT HILL 2 重製版分開。

平台範圍：已確認 Windows、macOS、Linux（Steam）、PS5、Xbox Series X|S 與 Switch 2；Mac 版於 2026-04-28 經 Steam 推出。

別名：cronos the new dawn、cronos: the new dawn

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2101960&l=english)：Steam 商店 API 回傳「Cronos: The New Dawn」（app 2101960），平台 Windows／macOS／Linux，發售日 Sep 5, 2025，開發 Bloober Team。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/cronos-the-new-dawn/)：PlayStation 台灣頁「時間旅者：重生曙光」平台 PS5，2025/9/5，發行 BLOOBER TEAM。
- [官方平台來源](https://www.xbox.com/en-US/games/store/cronos-the-new-dawn/9p7tflq7ctxn)：Xbox 商店支援 Xbox Series X|S、PC、雲端與掌機，Bloober Team 開發發行。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/Cronos-The-New-Dawn-2883430.html)：任天堂英國頁 Nintendo Switch 2 版，2025/9/5，發行 Bloober Team。
- [官方平台來源](https://blooberteam.prowly.com/455964-cronos-the-new-dawn-is-now-available-on-mac)：Bloober Team 2026-04-28 新聞稿：透過 Steam 推出 Apple Mac 版，原生支援 Apple silicon。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2101960&l=english)：Steam 商店 API 的 recommendations.total 為 8276（2026-11-22 讀取）。

## MONSTER HUNTER STORIES 3: 命運雙龍

major｜PC/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 5,839 則推薦（recommendations，2026-11-22 快照），Metacritic 87；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Capcom 的 Monster Hunter Stories 系列第三作；與一、二代及重製版分開。

平台範圍：已確認 PC、PS5、Xbox Series X|S 與 Switch 2；任天堂平台只有 Switch 2 版。

別名：monster hunter stories 3、mhs3、魔物獵人物語3、命運雙龍

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2852190&l=english)：Steam 商店 API 回傳「Monster Hunter Stories 3: Twisted Reflection」（app 2852190），平台 Windows，發售日 Mar 12, 2026，開發 CAPCOM Co., Ltd.。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2852190&l=tchinese)：Steam 繁體中文商店名稱為「Monster Hunter Stories 3: 命運雙龍」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/monster-hunter-stories-3-twisted-reflection/)：PlayStation 台灣頁「MONSTER HUNTER STORIES 3: 命運雙龍」平台 PS5，推出日 2026/3/12，發行 CAPCOM ASIA。
- [官方平台來源](https://www.gamespress.com/Monster-Hunter-Stories-3-Twisted-Reflection-Launches-Today-on-Nintendo)：Capcom 2026-03-13 新聞稿：已於 Nintendo Switch 2、PS5、Xbox Series X|S 與 PC（Steam）推出。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2852190&l=english)：Steam 商店 API 的 recommendations.total 為 5839，metacritic.score 為 87（2026-11-22 讀取）。

## Grand Theft Auto VI

major｜PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Rockstar Games 開發發行的 Grand Theft Auto 系列第六部正篇，2026-11-19 上市。

平台範圍：已確認 PS5 與 Xbox Series X|S；上市時未推出 PC 版，也沒有 PS4 版。

別名：grand theft auto vi、gta vi、gta 6、gta6、俠盜獵車手6

- [官方平台來源](https://www.playstation.com/zh-hant-hk/games/grand-theft-auto-vi/)：PlayStation 香港頁「Grand Theft Auto VI」FAQ：2026-11-19 於 PlayStation 5／PS5 Pro 推出，無 PS4 版，發行 Take-Two。
- [官方平台來源](https://www.xbox.com/en-US/games/grand-theft-auto-vi)：Xbox 頁「Grand Theft Auto VI」平台 Xbox Series X|S，發售日 2026/11/19。
- [官方平台來源](https://www.rockstargames.com/VI)：Rockstar 官方頁顯示「Now Available」，新聞「Grand Theft Auto VI Now Available」日期 2026-11-19。

- [收錄依據來源](https://www.rockstargames.com/VI)：官方來源確認「Grand Theft Auto VI」已於 2026-11-19 發售，作為收錄依據；未取得可比較的人氣數字。

## 人中之龍0 誓約的場所 導演剪輯版

major｜PC/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 1,881 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：SEGA 的《人中之龍0》導演剪輯版，新增過場、線上多人與中英配音；與 2015 年原版分開，不能從原版升級。

平台範圍：已確認 PC、PS5、Xbox Series X|S 與 Switch 2；Switch 2 版 2025-06-05 先推出，其餘平台 2025-12 推出。

別名：yakuza 0 director's cut、yakuza 0 directors cut、人中之龍0 導演剪輯版

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2988580&l=english)：Steam 商店 API 回傳「Yakuza 0 Director's Cut」（app 2988580），平台 Windows，發售日 Dec 8, 2025，開發 RGG Studio。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2988580&l=tchinese)：Steam 繁體中文商店名稱為「人中之龍０ 誓約的場所 導演剪輯版」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/yakuza-0-directors-cut/)：PlayStation 台灣頁「《人中之龍0 誓約的場所》導演剪輯版」平台 PS5，2025/12/7，發行 SEGA。
- [官方平台來源](https://sega.co.jp/en/release/250924_3.html)：SEGA 新聞稿：Nintendo Switch 2 版 2025-06-05 推出；PS5、Xbox Series X|S 於 2025-12-08 數位推出。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2988580&l=english)：Steam 商店 API 的 recommendations.total 為 1881（2026-11-22 讀取）。

## 寶可夢傳說 Z-A

major｜Switch/Switch 2｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：GAME FREAK 開發、任天堂發行的寶可夢傳說系列新作，舞台為密阿雷市。

平台範圍：已確認 Switch 版與 Switch 2 Edition（另售升級包）。

別名：pokemon legends z-a、pokémon legends z-a、pokemon legends za、寶可夢傳說ZA

- [官方平台來源](https://www.nintendo.com/us/store/products/pokemon-legends-z-a-switch/)：Product 'Pokémon™ Legends: Z-A', platform Nintendo Switch, release date October 16, 2025, publisher Nintendo.
- [官方平台來源](https://www.nintendo.com/us/store/products/pokemon-legends-z-a-switch-2)：Product 'Pokémon™ Legends: Z-A – Nintendo Switch™ 2 Edition', platform Nintendo Switch 2, release date October 16, 2025; an Upgrade Pack for Switch owners is also sold.

- [收錄依據來源](https://www.nintendo.com/us/store/products/pokemon-legends-z-a-switch/)：官方來源確認「寶可夢傳說 Z-A」已於 2025-10-16 發售，作為收錄依據；未取得可比較的人氣數字。

## 卡比的馭天飛行者

major｜Switch 2｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：任天堂發行的 Switch 2 獨占新作，為 GameCube《Kirby Air Ride》的後繼作而非重製。

平台範圍：已確認 Nintendo Switch 2 獨占。

別名：kirby air riders

- [官方平台來源](https://www.nintendo.com/us/store/products/kirby-air-riders-switch-2/)：Product 'Kirby™ Air Riders', platform Nintendo Switch 2, release date November 20, 2025, publisher Nintendo.

- [收錄依據來源](https://www.nintendo.com/us/store/products/kirby-air-riders-switch-2/)：官方來源確認「卡比的馭天飛行者」已於 2025-11-20 發售，作為收錄依據；未取得可比較的人氣數字。

## ZELDA無雙 封印戰記

major｜Switch 2｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：KOEI TECMO GAMES 開發、任天堂發行的 Switch 2 獨占作品，描寫王國之淚的封印戰爭；與 2014 年 Hyrule Warriors 及 2020 年災厄啟示錄分開。

平台範圍：已確認 Nintendo Switch 2 獨占。

別名：hyrule warriors age of imprisonment、薩爾達無雙 封印戰記、封印戰記

- [官方平台來源](https://www.nintendo.com/en-gb/en-gb/Games/Nintendo-Switch-2-games/Hyrule-Warriors-Age-of-Imprisonment-2789659.html)：Product 'Hyrule Warriors: Age of Imprisonment', platform Nintendo Switch 2, release date 06/11/2025, publisher Nintendo, developer KOEI TECMO GAMES.

- [收錄依據來源](https://www.nintendo.com/en-gb/en-gb/Games/Nintendo-Switch-2-games/Hyrule-Warriors-Age-of-Imprisonment-2789659.html)：官方來源確認「ZELDA無雙 封印戰記」已於 2025-11-06 發售，作為收錄依據；未取得可比較的人氣數字。

## 超級瑪利歐銀河 + 超級瑪利歐銀河 2

major｜Switch｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：任天堂 2025 年推出的 Switch 合輯，收錄 Wii《超級瑪利歐銀河》與《超級瑪利歐銀河 2》的高畫質版本；兩款也可個別下載購買。

平台範圍：已確認 Nintendo Switch；Switch 2 透過免費更新強化，非獨立 Switch 2 Edition。

別名：super mario galaxy、super mario galaxy 2、super mario galaxy + super mario galaxy 2、瑪利歐銀河

- [官方平台來源](https://www.nintendo.com/us/store/products/super-mario-galaxy-plus-super-mario-galaxy-2-switch/)：Product 'Super Mario Galaxy™ + Super Mario Galaxy™ 2', platform Nintendo Switch, release October 2, 2025, publisher Nintendo; also playable with a free update for Nintendo Switch 2.

- [收錄依據來源](https://www.nintendo.com/us/store/products/super-mario-galaxy-plus-super-mario-galaxy-2-switch/)：官方來源確認「超級瑪利歐銀河 + 超級瑪利歐銀河 2」已於 2025-10-02 發售，作為收錄依據；未取得可比較的人氣數字。

## 瑪利歐網球 狂熱

major｜Switch 2｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Camelot 開發、任天堂發行的 Switch 2 獨占網球新作；不是 2018 年的瑪利歐網球 王牌高手。

平台範圍：已確認 Nintendo Switch 2 獨占。

別名：mario tennis fever

- [官方平台來源](https://www.nintendo.com/sg/games/switch2/aaaea/index.html)：Product 'Mario Tennis Fever', platform Nintendo Switch 2, release date 12 February 2026, publisher Nintendo; copyright Nintendo / CAMELOT.

- [收錄依據來源](https://www.nintendo.com/sg/games/switch2/aaaea/index.html)：官方來源確認「瑪利歐網球 狂熱」已於 2026-02-12 發售，作為收錄依據；未取得可比較的人氣數字。

## Pokémon Champions

major｜Switch/iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：The Pokémon Works 開發、The Pokémon Company 發行的對戰專用作品，Switch 與手機可跨平台對戰，2026 年起為官方 VGC 用遊戲。

平台範圍：已確認 Nintendo Switch（Switch 2 經免費更新遊玩）、iOS 與 Android（手機版 2026-06-17 推出）。

別名：pokemon champions、pokémon champions

- [官方平台來源](https://press.pokemon.com/en/Pokemon-Champions-Launches-April-8-on-Nintendo-Switch)：Official press release: launches on Nintendo Switch April 8 (2026), also playable on Switch 2 via free update, mobile later in the year.
- [官方平台來源](https://apps.apple.com/us/app/id6741503079)：App Store listing 'Pokémon Champions' by The Pokemon Company, iPhone/iPad (iOS 16+), free with in-app purchases.
- [官方平台來源](https://www.pokemonchampions.jp/tc/)：Official TC site lists the smartphone version (iOS/Android) released 2026年6月17日 and links Google Play id jp.pokemon.pokemonchampions; the Google Play page itself did not render details.

- [收錄依據來源](https://press.pokemon.com/en/Pokemon-Champions-Launches-April-8-on-Nintendo-Switch)：官方來源確認「Pokémon Champions」已於 2026-04-08 發售，作為收錄依據；未取得可比較的人氣數字。

## 耀西與不可思議的圖鑑

major｜Switch 2｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：任天堂發行的 Switch 2 獨占耀西新作；不是 Yoshi's Crafted World。

平台範圍：已確認 Nintendo Switch 2 獨占。

別名：yoshi and the mysterious book

- [官方平台來源](https://www.nintendo.com/us/store/products/yoshi-and-the-mysterious-book-switch-2/)：Product 'Yoshi™ and the Mysterious Book', platform Nintendo Switch 2, release date May 21, 2026, publisher Nintendo.

- [收錄依據來源](https://www.nintendo.com/us/store/products/yoshi-and-the-mysterious-book-switch-2/)：官方來源確認「耀西與不可思議的圖鑑」已於 2026-05-21 發售，作為收錄依據；未取得可比較的人氣數字。

## 拖曳＆突破

major｜Switch 2｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：任天堂發行的 Switch 2 獨占下載作品，以 Joy-Con 2 滑鼠操作的 3 對 3 輪椅籃球。

平台範圍：已確認 Nintendo Switch 2 獨占（僅數位版）。

別名：drag x drive、拖曳突破

- [官方平台來源](https://www.nintendo.com/us/store/products/drag-x-drive-switch-2/)：Product 'Drag x Drive™', platform Nintendo Switch 2, release date August 14, 2025, publisher Nintendo, Digital edition.

- [收錄依據來源](https://www.nintendo.com/us/store/products/drag-x-drive-switch-2/)：官方來源確認「拖曳＆突破」已於 2025-08-14 發售，作為收錄依據；未取得可比較的人氣數字。

## 節奏天國 奇蹟之星

major｜Switch｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：任天堂與 TNX 共同開發的節奏天國系列新作。

平台範圍：已確認 Nintendo Switch；Switch 2 為向下相容遊玩，非獨立版本。

別名：rhythm heaven groove

- [官方平台來源](https://www.nintendo.com/us/store/products/rhythm-heaven-groove-switch/)：Product 'Rhythm Heaven™ Groove', platform Nintendo Switch, release date July 2, 2026, publisher Nintendo, co-developed by TNX; Switch 2 compatibility 'Supported'.

- [收錄依據來源](https://www.nintendo.com/us/store/products/rhythm-heaven-groove-switch/)：官方來源確認「節奏天國 奇蹟之星」已於 2026-07-02 發售，作為收錄依據；未取得可比較的人氣數字。

## Rocket League

major｜PC/PS4/Xbox Series X|S/Xbox One/Switch｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Psyonix 開發的免費遊玩汽車足球；手機《Rocket League Sideswipe》是另一作品，不併入。

平台範圍：已確認 PC、PS4、Xbox One、Xbox Series X|S 與 Switch；macOS／Linux 版已於 2020 年停止線上支援，不列入；PS5 為向下相容。

別名：rocket league、火箭聯盟

- [官方平台來源](https://store.steampowered.com/app/252950/)：Steam 商店頁顯示 2015-07-07 推出，開發發行 Psyonix；並註明 macOS／Linux 版 2020-03-10 最後更新後停用線上功能。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/rocket-league/)：PlayStation 台灣頁平台只列 PS4（可於 PS5 向下相容遊玩），發行 Psyonix。
- [官方平台來源](https://www.xbox.com/zh-TW/games/store/rocket-league/C125W9BG2K0V)：Xbox 台灣商店支援 Xbox One 與 Xbox Series X|S，2016/2/17，Psyonix 開發發行。
- [官方平台來源](https://www.nintendo.com/us/store/products/rocket-league-switch/)：任天堂美國頁 Nintendo Switch 版，2017-11-14，發行 Epic Games、開發 Psyonix。

- [收錄依據來源](https://store.steampowered.com/app/252950/)：官方來源確認「Rocket League」已於 2015-07-07 發售，作為收錄依據；未取得可比較的人氣數字。

## 黎明死線

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 697,046 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Behaviour Interactive 開發的 4 對 1 非對稱恐怖對戰；NetEase 營運的手機版已停服，不併入。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One 與 Switch；Switch 2 僅向下相容。

別名：dead by daylight、dbd、黎明殺機

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=381210&l=english)：Steam 商店 API 回傳「Dead by Daylight」（app 381210），平台 Windows，發售日 Jun 14, 2016，開發 Behaviour Interactive Inc.。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/dead-by-daylight/)：PlayStation 台灣頁「黎明死線」平台 PS4／PS5。
- [官方平台來源](https://www.xbox.com/zh-TW/games/store/dead-by-daylight/C0N22P73QZ60)：Xbox 台灣商店支援 Xbox One 與 Xbox Series X|S，2017/6/23，Behaviour Interactive 開發發行。
- [官方平台來源](https://nintendo.com/au/games/nintendo-switch/dead-by-daylight)：任天堂澳洲頁 Nintendo Switch 版，2019/9/25，發行 Behaviour Interactive；Switch 2 為相容遊玩。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=381210&l=english)：Steam 商店 API 的 recommendations.total 為 697046（2026-11-22 讀取）。

## 方舟：生存升級

major｜PC/PS5/Xbox Series X|S｜early-access｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 110,790 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Studio Wildcard 以 Unreal Engine 5 重製的 ARK: Survival Evolved；與 Evolved、Switch Ultimate Survivor Edition 及手機版分開，Steam 仍標示搶先體驗。

平台範圍：已確認 PC、PS5、Xbox Series X|S；Switch 2 版僅見開發中消息，不列入。

別名：ark survival ascended、ark: survival ascended、asa、方舟 生存飛升

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2399830&l=english)：Steam 商店 API 回傳「ARK: Survival Ascended」（app 2399830），平台 Windows，發售日 Oct 25, 2023，類型含搶先體驗，開發 Studio Wildcard、Grove Street Games、Instinct Games。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2399830&l=tchinese)：Steam 繁體中文商店名稱為「方舟: 生存飛升」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/ark-survival-ascended/)：PlayStation 台灣頁「方舟：生存升級」平台 PS5，2024/1/29。
- [官方平台來源](https://www.xbox.com/zh-TW/games/store/ark-survival-ascended/9P33VJGVPHVP)：Xbox 台灣商店支援 Xbox Series X|S、PC 與掌機，2023/11/21，發行 Studio Wildcard。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2399830&l=english)：Steam 商店 API 的 recommendations.total 為 110790（2026-11-22 讀取）。

## Deep Rock Galactic

indie｜PC/PS5/PS4/Xbox Series X|S/Xbox One｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 304,762 則推薦（recommendations，2026-11-22 快照），Metacritic 85；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Ghost Ship Games 開發、Coffee Stain 發行的四人合作採礦射擊原作；Survivor 與 Rogue Core 是另外的作品。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One。

別名：deep rock galactic、drg、深岩銀河

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=548430&l=english)：Steam 商店 API 回傳「Deep Rock Galactic」（app 548430），平台 Windows，發售日 May 13, 2020，開發 Ghost Ship Games。
- [官方平台來源](https://www.playstation.com/en-us/games/deep-rock-galactic/)：PlayStation 美國頁平台 PS4／PS5，發行 Coffee Stain Publishing。
- [官方平台來源](https://www.xbox.com/zh-TW/games/store/deep-rock-galactic/9NHFVWX1V7QJ)：Xbox 台灣商店支援 PC、Xbox One 與 Xbox Series X|S，2020/5/13，開發 Ghost Ship Games。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=548430&l=english)：Steam 商店 API 的 recommendations.total 為 304762，metacritic.score 為 85（2026-11-22 讀取）。

## Undertale

indie｜PC/Mac/Linux/PS4/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 314,256 則推薦（recommendations，2026-11-22 快照），Metacritic 92；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Toby Fox 開發的 RPG；與 DELTARUNE 是不同作品。

平台範圍：已確認 Windows、macOS、Linux、PS4、Xbox One 與 Switch；Xbox Series X|S 為 Xbox One 版相容遊玩，PS Vita 不在本目錄平台範圍。

別名：undertale、傳說之下

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=391540&l=english)：Steam 商店 API 回傳「Undertale」（app 391540），平台 Windows／macOS／Linux，發售日 Sep 15, 2015，開發 tobyfox。
- [官方平台來源](https://www.playstation.com/en-us/games/undertale/)：PlayStation 美國頁平台 PS4（可於 PS5 相容），發行 8-4。
- [官方平台來源](https://www.xbox.com/en-US/games/store/undertale/9PJGGX9XJXPB)：Xbox 商店支援 Xbox One、Xbox Series X|S（相容）與雲端，2021/3/16，開發 Toby Fox。
- [官方平台來源](https://www.nintendo.com/us/store/products/undertale-switch/)：任天堂美國頁 Nintendo Switch 版，2018-09-18，發行 8-4。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=391540&l=english)：Steam 商店 API 的 recommendations.total 為 314256，metacritic.score 為 92（2026-11-22 讀取）。

## Outer Wilds

indie｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 91,600 則推薦（recommendations，2026-11-22 快照），Metacritic 85；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Mobius Digital 開發、Annapurna Interactive 發行的時間循環太空探索作品；與 Obsidian 的《天外世界》完全不同。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One 與 Switch；Switch 2 僅向下相容。

別名：outer wilds、星際拓荒

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=753640&l=english)：Steam 商店 API 回傳「Outer Wilds」（app 753640），平台 Windows，發售日 Jun 18, 2020，開發 Mobius Digital。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/outer-wilds/)：PlayStation 台灣頁平台 PS4／PS5，發行 Annapurna Interactive。
- [官方平台來源](https://www.xbox.com/en-US/games/store/outer-wilds/c596fkdkmqn7)：Xbox 商店支援 Xbox One、Xbox Series X|S、PC、雲端與掌機，2019/5/29，開發 Mobius Digital。
- [官方平台來源](https://www.nintendo.com/us/store/products/outer-wilds-switch/)：任天堂美國頁 Nintendo Switch 版，2023-12-07，發行 Annapurna Interactive。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=753640&l=english)：Steam 商店 API 的 recommendations.total 為 91600，metacritic.score 為 85（2026-11-22 讀取）。

## 極樂迪斯可

indie｜PC/Mac/PS5/PS4/Xbox Series X|S/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 119,581 則推薦（recommendations，2026-11-22 快照），Metacritic 97；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：ZA/UM 開發的偵探 RPG，現行販售版本為 The Final Cut；Android 上的重新設計手機版是不同作品，不併入。

平台範圍：已確認 Windows、macOS、PS5、PS4、Xbox Series X|S、Xbox One 與 Switch；Mac App Store 版僅支援 Mac，不列 iOS。

別名：disco elysium、disco elysium the final cut、極樂迪斯科

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=632470&l=english)：Steam 商店 API 回傳「Disco Elysium - The Final Cut」（app 632470），平台 Windows／macOS，發售日 Oct 15, 2019，開發 ZA/UM。
- [官方平台來源](https://www.playstation.com/en-gb/games/disco-elysium/)：PlayStation 英國頁平台 PS4／PS5，2021/3/30，發行 ZA/UM。
- [官方平台來源](https://www.xbox.com/en-US/games/store/disco-elysium-the-final-cut/9NTRS771L8HL)：Xbox 商店支援 Xbox One、Xbox Series X|S、PC、雲端與掌機，ZA/UM 開發發行。
- [官方平台來源](https://www.nintendo.com/us/store/products/disco-elysium-the-final-cut-switch/)：任天堂美國頁有「Disco Elysium - The Final Cut for Nintendo Switch」商品頁。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=632470&l=english)：Steam 商店 API 的 recommendations.total 為 119581，metacritic.score 為 97（2026-11-22 讀取）。

## 師父

indie｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 22,545 則推薦（recommendations，2026-11-22 快照），Metacritic 81；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Sloclap 開發的功夫動作作品，含免費 Arenas 擴充。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One 與 Switch；Switch 2 僅向下相容。

別名：sifu

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2138710&l=english)：Steam 商店 API 回傳「Sifu」（app 2138710），平台 Windows，發售日 Mar 28, 2023，開發 Sloclap。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/sifu/)：PlayStation 台灣頁「師父」平台 PS4／PS5，2022/2/8，發行 SLOCLAP。
- [官方平台來源](https://www.xbox.com/en-US/games/store/sifu/9p7pf6zp3958)：Xbox 商店支援 Xbox One、Xbox Series X|S、PC、雲端與掌機，2023/3/28，開發 Sloclap。
- [官方平台來源](https://nintendo.com/au/games/nintendo-switch/sifu)：任天堂澳洲頁 Nintendo Switch 版，發行 SLOCLAP。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2138710&l=english)：Steam 商店 API 的 recommendations.total 為 22545，metacritic.score 為 81（2026-11-22 讀取）。

## 進擊羔羊傳說

indie｜PC/Mac/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2/iOS｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 113,717 則推薦（recommendations，2026-11-22 快照），Metacritic 82；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Massive Monster 開發、Devolver Digital 發行的邪教經營動作 Roguelite。

平台範圍：已確認 Windows、macOS、PS5、PS4、Xbox Series X|S、Xbox One、Switch、Switch 2 Edition（2026-10-22）與 Apple Arcade 的 iOS 版；無官方 Android 版。

別名：cult of the lamb、咩咩啟示錄

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1313140&l=english)：Steam 商店 API 回傳「Cult of the Lamb」（app 1313140），平台 Windows／macOS，發售日 Aug 11, 2022，開發 Massive Monster。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1313140&l=tchinese)：Steam 繁體中文商店名稱為「進擊羔羊傳說」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/cult-of-the-lamb/)：PlayStation 台灣頁平台 PS4／PS5，2022/8/11，發行 Devolver Digital。
- [官方平台來源](https://www.xbox.com/zh-TW/games/store/cult-of-the-lamb/9PNLPMP1GGH5)：Xbox 台灣商店支援 Xbox One 與 Xbox Series X|S，2022/8/11，開發 Massive Monster；說明使用「進擊羔羊傳說」。
- [官方平台來源](https://ec.nintendo.com/AU/en/titles/70010000047974)：任天堂澳洲 eShop 列出 Nintendo Switch 版，發行 Devolver Digital。
- [官方平台來源](https://www.nintendo.com/us/store/products/cult-of-the-lamb-nintendo-switch-2-edition-switch-2/)：任天堂美國頁「Cult of the Lamb – Nintendo Switch 2 Edition」，2026-10-22 推出。
- [官方平台來源](https://apps.apple.com/us/app/id1639580858)：App Store 的 Apple Arcade 版「Cult of the Lamb」，支援 iPhone、iPad、Mac 與 Vision，開發 Devolver。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1313140&l=english)：Steam 商店 API 的 recommendations.total 為 113717，metacritic.score 為 82（2026-11-22 讀取）。

## Hotline Miami

indie｜PC/Mac/Linux/PS4/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 111,242 則推薦（recommendations，2026-11-22 快照），Metacritic 85；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Dennaton Games 開發、Devolver Digital 發行的第一代；Hotline Miami 2: Wrong Number 與 Switch 合輯是不同商品。

平台範圍：已確認 Windows、macOS、Linux、PS4 與 Xbox Series X|S；Switch 只有包含二代的合輯，不列入本條目。

別名：hotline miami、火線邁阿密、邁阿密熱線

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=219150&l=english)：Steam 商店 API 回傳「Hotline Miami」（app 219150），平台 Windows／macOS／Linux，發售日 Oct 23, 2012，開發 Dennaton Games。
- [官方平台來源](https://www.playstation.com/en-us/games/hotline-miami/)：PlayStation 美國頁平台 PS4（含 PS3／PS Vita 版），2014-08-08，發行 Devolver Digital。
- [官方平台來源](https://www.xbox.com/en-US/games/store/hotline-miami/9MV27QPRQRRF)：Xbox 商店只支援 Xbox Series X|S 與雲端（無 Xbox One），2023/10/23，開發 Dennaton Games。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=219150&l=english)：Steam 商店 API 的 recommendations.total 為 111242，metacritic.score 為 85（2026-11-22 讀取）。

## Rain World

indie｜PC/PS4/Xbox Series X|S/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 48,163 則推薦（recommendations，2026-11-22 快照），Metacritic 66；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Videocult 開發、Akupara Games 發行的生態系生存平台作品；Downpour 與 The Watcher 是付費 DLC。

平台範圍：已確認 PC、PS4、Xbox Series X|S、Xbox One 與 Switch；PlayStation Store 的 PS5 標示接近向下相容，原生 PS5 版未確認，不列入。

別名：rain world、雨世界

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=312520&l=english)：Steam 商店 API 回傳「Rain World」（app 312520），平台 Windows，發售日 Mar 28, 2017，開發 Videocult。
- [官方平台來源](https://store.playstation.com/en-us/concept/221982)：PlayStation Store 美國頁平台 PS4、PS5，發行 Akupara Games；PS5 標示接近向下相容說明，原生 PS5 版未能確認，故不列。
- [官方平台來源](https://www.xbox.com/en-US/games/store/rain-world/9PNPFBPLGCMW)：Xbox 商店支援 Xbox One、Xbox Series X|S、PC、雲端與掌機，2023/7/11，開發 Videocult。
- [官方平台來源](https://www.nintendo.com/us/store/products/rain-world-switch/)：任天堂美國頁 Nintendo Switch 版，2018-12-13，發行 Akupara Games。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=312520&l=english)：Steam 商店 API 的 recommendations.total 為 48163，metacritic.score 為 66（2026-11-22 讀取）。

## 幽影行者 2

indie｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 8,175 則推薦（recommendations，2026-11-22 快照），Metacritic 81；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：One More Level 開發、505 Games 發行的 2020 年 Ghostrunner 續作。

平台範圍：已確認 PC、PS5、Xbox Series X|S；未推出上一代主機與 Switch 版。

別名：ghostrunner 2、幽靈行者2

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2144740&l=english)：Steam 商店 API 回傳「Ghostrunner 2」（app 2144740），平台 Windows，發售日 Oct 26, 2023，開發 One More Level。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2144740&l=tchinese)：Steam 繁體中文商店名稱為「《幽影行者 2》 Ghostrunner 2」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/ghostrunner-2/)：PlayStation 台灣頁「幽影行者 2」平台只列 PS5，2023/10/26，發行 505 GAMES。
- [官方平台來源](https://www.xbox.com/zh-TW/games/store/ghostrunner-2/9PKF79JQ1KR6)：Xbox 台灣商店「《幽影行者 2》」支援 Xbox Series X|S，2023/10/26，開發 One More Level。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2144740&l=english)：Steam 商店 API 的 recommendations.total 為 8175，metacritic.score 為 81（2026-11-22 讀取）。

## Slime Rancher 2

indie｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 44,369 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Monomi Park 開發發行的 Slime Rancher 續作，2025-09-23 結束搶先體驗；Switch 版 Plortable Edition 是一代。

平台範圍：已確認 PC、PS5、Xbox Series X|S；Switch 2 版尚未推出，不列入。

別名：slime rancher 2、史萊姆牧場2

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1657630&l=english)：Steam 商店 API 回傳「Slime Rancher 2」（app 1657630），平台 Windows，發售日 Sep 23, 2025，開發 Monomi Park。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/slime-rancher-2/)：PlayStation 台灣頁單獨的 Slime Rancher 2 平台 PS5，發行 Monomi Park。
- [官方平台來源](https://www.xbox.com/en-US/games/store/slime-rancher-2/9phfj0n31nv1)：Xbox 商店支援 PC、Xbox Series X|S、雲端與掌機（無 Xbox One），2025/9/23 正式版，Monomi Park 開發發行。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1657630&l=english)：Steam 商店 API 的 recommendations.total 為 44369（2026-11-22 讀取）。

## Thronefall

indie｜PC/Mac/PS5/Xbox Series X|S/Switch/iOS/Android｜released｜平台查核partial

熱度依據：Steam 商店 API 顯示累積 23,416 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Grizzly Games 開發的極簡塔防與王國建造作品；手機版為 Doghowl Games 移植的「Thronefall - A Little Kingdom」。

平台範圍：已確認 Windows、macOS、PS5、Xbox Series X|S（2026-11-11）、Switch 與 iOS；Android 商店頁僅讀到標題，待補證。

仍需補證：Google Play 頁面只讀到標題，未見供應商與上架日期；iOS 版已由 App Store 台灣區確認。

別名：thronefall

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2239150&l=english)：Steam 商店 API 回傳「Thronefall」（app 2239150），平台 Windows／macOS，發售日 Oct 11, 2024，開發 GrizzlyGames、Mythwright。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/Thronefall-2669627.html)：任天堂英國頁 Nintendo Switch 版，2024/10/10，發行 Mythwright。
- [官方平台來源](https://store.playstation.com/concept/10018202)：PlayStation Store 列出 PS5 版，2026/11/11，發行 Mythwright（標準版與 Craaghelm 版）。
- [官方平台來源](https://www.xbox.com/en-US/games/store/thronefall/9nwwl1cbwfcg)：Xbox 商店支援 PC 與 Xbox Series X|S（無 Xbox One），2026/11/11，Mythwright 開發發行。
- [官方平台來源](https://apps.apple.com/tw/app/id6744029320)：App Store 台灣區「Thronefall - A Little Kingdom」，供應商 Doghowl Games，免費下載並以內購解鎖完整遊戲。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.doghowlgames.thronefall)：Google Play 頁面標題為「Thronefall - Apps on Google Play」，其餘內容未能讀取。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2239150&l=english)：Steam 商店 API 的 recommendations.total 為 23416（2026-11-22 讀取）。

## Pseudoregalia

indie｜PC｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 17,323 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：rittzler 開發的 3D 類銀河戰士惡魔城，為遊戲創作活動作品的擴充正式版；免費 Jam 版另計。

平台範圍：已確認 Windows（Steam）；未找到官方主機或手機版。

別名：pseudoregalia

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2365810&l=english)：Steam 商店 API 回傳「Pseudoregalia」（app 2365810），平台 Windows，發售日 Jul 28, 2023，開發 rittzler。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2365810&l=english)：Steam 商店 API 的 recommendations.total 為 17323（2026-11-22 讀取）。

## Rusty's Retirement

indie｜PC/Mac｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 13,990 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Mister Morris Games 開發的桌面常駐放置農場遊戲。

平台範圍：已確認 Windows 與 macOS（Steam）；未找到官方主機或手機版。

別名：rusty's retirement、rustys retirement

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2666510&l=english)：Steam 商店 API 回傳「Rusty's Retirement」（app 2666510），平台 Windows／macOS，發售日 Apr 26, 2024，開發 Mister Morris Games。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2666510&l=english)：Steam 商店 API 的 recommendations.total 為 13990（2026-11-22 讀取）。

## 傳說酒館

indie｜PC｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 8,868 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Scienart Games 開發的合作酒館經營；與 Switch《Ale Tavern Master》及 PS4《Ale Tavern Simulator》無關。

平台範圍：已確認 Windows（Steam）；未找到官方主機版。

別名：ale & tale tavern、ale and tale tavern

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2683150&l=english)：Steam 商店 API 回傳「Ale & Tale Tavern」（app 2683150），平台 Windows，發售日 Sep 5, 2024，開發 Scienart Games。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2683150&l=tchinese)：Steam 繁體中文商店名稱為「傳說酒館」。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2683150&l=english)：Steam 商店 API 的 recommendations.total 為 8868（2026-11-22 讀取）。

## REMATCH

indie｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 43,298 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Sloclap 開發的 5 對 5 線上第三人稱足球。

平台範圍：已確認 PC、PS5、Xbox Series X|S；Switch 2 版僅見傳聞，不列入。

別名：rematch、sloclap rematch

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2138720&l=english)：Steam 商店 API 回傳「REMATCH」（app 2138720），平台 Windows，發售日 Jun 19, 2025，開發 Sloclap。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10011349)：PlayStation Store 台灣頁 REMATCH 平台 PS5，2025/6/19，發行 SLOCLAP。
- [官方平台來源](https://www.xbox.com/en-US/games/store/rematch/9N5K7HWXL4Q6)：Xbox 商店支援 PC 與 Xbox Series X|S（無 Xbox One），2025/6/19，開發 Sloclap。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2138720&l=english)：Steam 商店 API 的 recommendations.total 為 43298（2026-11-22 讀取）。

## 絕對魔權

indie｜PC/PS5/PS4/Xbox Series X|S/Switch/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 9,761 則推薦（recommendations，2026-11-22 快照），Metacritic 87；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Dotemu、Guard Crush Games 與 Supamonks 開發的 Roguelite 清版動作；手機版由 Playdigious 移植。

平台範圍：已確認 PC、PS5、PS4、Switch（2025-10-09）、Xbox Series X|S（2026-03-25）、iOS 與 Android（2026-11-05）；Switch 2 僅相容遊玩。

別名：absolum

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1904480&l=english)：Steam 商店 API 回傳「Absolum」（app 1904480），平台 Windows，發售日 Oct 9, 2025，開發 Dotemu、Guard Crush Games、Supamonks。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1904480&l=tchinese)：Steam 繁體中文商店名稱為「絕對魔權」。
- [官方平台來源](https://www.playstation.com/en-us/games/absolum/)：PlayStation 美國頁平台 PS4／PS5，2025/10/9，發行 DOTEMU。
- [官方平台來源](https://ec.nintendo.com/AU/en/titles/70010000094402)：任天堂澳洲 eShop 列出 Nintendo Switch 版，發行 Dotemu；Switch 2 僅相容遊玩。
- [官方平台來源](https://www.xbox.com/en-US/games/store/absolum/9NR6NJ401NBS)：Xbox 商店支援 Xbox Series X|S 與 PC，2026/3/25，Dotemu 開發發行。
- [官方平台來源](https://apps.apple.com/tw/app/absolum/id6762192063)：App Store 台灣區 Absolum，供應商 Playdigious，付費 App，說明稱《絕對魔權》。
- [官方平台來源](https://playdigious.com/games/absolum)：Playdigious 官方頁列出 iOS 與 Android，2026-11-05 推出，並連結 Google Play。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1904480&l=english)：Steam 商店 API 的 recommendations.total 為 9761，metacritic.score 為 87（2026-11-22 讀取）。

## Hytale

indie｜PC/Mac/Linux｜early-access｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Hypixel Studios 重啟的方塊風沙盒 RPG，透過官網與自家啟動器販售，目前為搶先體驗。

平台範圍：已確認 Windows、Linux 與 Apple Silicon macOS（官方下載頁）；無官方主機版。

別名：hytale

- [官方平台來源](https://hytale.com/download)：官方下載頁列出 Windows 11／10 x64、Linux x64（Kernel 6.15）與 Apple Silicon macOS Tahoe 系統需求，並註明為搶先體驗。
- [官方平台來源](https://hytale.com/news)：官方新聞頁有搶先體驗上市文章與後續每週更新紀錄。

- [收錄依據來源](https://hytale.com/download)：官方來源確認「Hytale」已於 2026-01-13 開始搶先體驗，作為收錄依據；未取得可比較的人氣數字。

## Subnautica 2

indie｜PC/Xbox Series X|S｜early-access｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 119,846 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Unknown Worlds 開發的續作，舞台為新的外星海洋並支援合作；與 Subnautica 及 Below Zero 分開，目前為搶先體驗。

平台範圍：已確認 PC（Steam／Epic 搶先體驗）與 Xbox Series X|S（Game Preview）；無官方 PS5 或 Switch 版。

別名：subnautica 2、深海迷航2

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1962700&l=english)：Steam 商店 API 回傳「Subnautica 2」（app 1962700），平台 Windows，發售日 May 14, 2026，類型含搶先體驗，開發 Unknown Worlds Entertainment。
- [官方平台來源](https://www.xbox.com/en-US/games/store/p/9PJPCB188SVG)：Xbox 商店「Subnautica 2 (Game Preview)」支援 PC 與 Xbox Series X|S，2026/5/14，Unknown Worlds 開發發行，標示開發中。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1962700&l=english)：Steam 商店 API 的 recommendations.total 為 119846（2026-11-22 讀取）。

## 多重人生

indie｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 15,877 則推薦（recommendations，2026-11-22 快照），Metacritic 85；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：11 bit studios 開發發行的科幻生存與基地經營作品。

平台範圍：已確認 PC、PS5、Xbox Series X|S；未推出 Xbox One 版。

別名：the alters

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1601570&l=english)：Steam 商店 API 回傳「The Alters」（app 1601570），平台 Windows，發售日 Jun 13, 2025，開發 11 bit studios。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1601570&l=tchinese)：Steam 繁體中文商店名稱為「多重人生」。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10008217)：PlayStation Store 台灣頁「多重人生」平台 PS5，2025/6/13，發行 11 BIT STUDIOS。
- [官方平台來源](https://www.xbox.com/en-US/games/store/the-alters/9N0P25WJHM8C)：Xbox 商店支援 Xbox Series X|S 與 PC（無 Xbox One），2025/6/13，11 bit studios 開發發行。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1601570&l=english)：Steam 商店 API 的 recommendations.total 為 15877，metacritic.score 為 85（2026-11-22 讀取）。

## 午夜漫步

indie｜PC/PS5/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 2,855 則推薦（recommendations，2026-11-22 快照），Metacritic 79；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：MoonHood 開發、Fast Travel Games 發行的黏土定格風黑暗奇幻冒險，可一般遊玩或以 VR 遊玩。

平台範圍：已確認 PC、PS5（可選 PS VR2）與 Switch 2（2026-03-26）；無 Xbox 版。

別名：the midnight walk、midnight walk

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2863640&l=english)：Steam 商店 API 回傳「The Midnight Walk」（app 2863640），平台 Windows，發售日 May 8, 2025，開發 MoonHood。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2863640&l=tchinese)：Steam 繁體中文商店名稱為「午夜漫步」。
- [官方平台來源](https://www.playstation.com/en-us/games/the-midnight-walk/)：PlayStation 美國頁平台 PS5（可選 PS VR2），2025/5/8，發行 Fast Travel Games。
- [官方平台來源](https://www.nintendo.com/us/store/products/the-midnight-walk-switch-2/)：任天堂美國頁 Nintendo Switch 2 版，2026/3/26，發行 Fast Travel Games。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2863640&l=english)：Steam 商店 API 的 recommendations.total 為 2855，metacritic.score 為 79（2026-11-22 讀取）。

## Lost Records: Bloom & Rage

indie｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 5,977 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Don't Nod 開發發行的分卷敘事作品，第二卷 Rage 以免費更新推出；與 Life is Strange 分開。

平台範圍：已確認 PC、PS5、Xbox Series X|S。

別名：lost records bloom & rage、lost records、lost records bloom and rage

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1902960&l=english)：Steam 商店 API 回傳「Lost Records: Bloom & Rage」（app 1902960），平台 Windows，發售日 Feb 18, 2025，開發 DON'T NOD。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10009639)：PlayStation Store 台灣頁平台 PS5，2025/2/18，發行 DON'T NOD。
- [官方平台來源](https://www.xbox.com/en-US/games/store/lost-records-bloom-rage/9N3F1LW9HC6C)：Xbox 商店支援 PC 與 Xbox Series X|S（無 Xbox One），2025/2/18，DON'T NOD 開發發行。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1902960&l=english)：Steam 商店 API 的 recommendations.total 為 5977（2026-11-22 讀取）。

## 九王

indie｜PC/Mac/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 22,598 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Sad Socket 開發、Hooded Horse 發行的 Roguelike 王國建造卡牌；手機版由 Playdigious 移植。

平台範圍：已確認 Windows、macOS（Steam 2026-11-12 正式版）、iOS 與 Android（Playdigious 2026-10-12）。

別名：9 kings、nine kings

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2784470&l=english)：Steam 商店 API 回傳「9 Kings」（app 2784470），平台 Windows／macOS，發售日 Nov 12, 2026，開發 Sad Socket。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2784470&l=tchinese)：Steam 繁體中文商店名稱為「九王 9 Kings」。
- [官方平台來源](https://apps.apple.com/tw/app/9-kings/id6757860952)：App Store 台灣區「九王 9 Kings」，供應商 Playdigious，免費下載並以內購解鎖完整遊戲。
- [官方平台來源](https://playdigious.com/games/9-kings)：Playdigious 官方頁列出 iOS 與 Android，2026-10-12 推出，並連結 Google Play。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2784470&l=english)：Steam 商店 API 的 recommendations.total 為 22598（2026-11-22 讀取）。

## 死亡呼嘯

indie｜PC/PS5/Xbox Series X|S/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 1,383 則推薦（recommendations，2026-11-22 快照），Metacritic 82；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：The Outer Zone 開發、11 bit studios 發行的魂系牌組構築戰術作品。

平台範圍：已確認 PC（2025-12-09）、PS5、Xbox Series X|S 與 Switch（2026-02-19）；Switch 2 僅相容遊玩。

別名：death howl

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2825880&l=english)：Steam 商店 API 回傳「Death Howl」（app 2825880），平台 Windows，發售日 Dec 9, 2025，開發 The Outer Zone。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2825880&l=tchinese)：Steam 繁體中文商店名稱為「死亡呼嘯」。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10015602)：PlayStation Store 台灣頁平台 PS5，2026/2/19，發行 11 BIT STUDIOS。
- [官方平台來源](https://www.xbox.com/en-US/games/store/-/9PNR1VKQR1N7)：Xbox 商店「Death Howl: Deluxe Edition」支援 PC 與 Xbox Series X|S，開發 The Outer Zone、發行 11 bit studios。
- [官方平台來源](https://www.nintendo.com/us/store/products/death-howl-switch/)：任天堂美國頁 Nintendo Switch 版，2026/2/19，發行 11 bit studios。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2825880&l=english)：Steam 商店 API 的 recommendations.total 為 1383，metacritic.score 為 82（2026-11-22 讀取）。

## Sektori

indie｜PC/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 937 則推薦（recommendations，2026-11-22 快照），Metacritic 93；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Kimmo Factor 開發的電子樂雙搖桿射擊。

平台範圍：已確認 PC、PS5、Xbox Series X|S 與 Switch 2（2026-05-14）；無初代 Switch 版。

別名：sektori

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2105620&l=english)：Steam 商店 API 回傳「Sektori」（app 2105620），平台 Windows，發售日 Nov 18, 2025，開發 Kimmo Lahtinen。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10013523)：PlayStation Store 台灣頁 SEKTORI 平台 PS5，2025/11/18，發行 Kimmo Factor。
- [官方平台來源](https://www.xbox.com/en-US/games/store/sektori/9N08R5G14Q0H)：Xbox 商店支援 Xbox Series X|S，2025/11/18，Kimmo Factor 開發發行。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/Sektori-3080786.html)：任天堂英國頁 Nintendo Switch 2 版，2026/5/14，發行 Kimmo Factor。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2105620&l=english)：Steam 商店 API 的 recommendations.total 為 937，metacritic.score 為 93（2026-11-22 讀取）。

## Ballionaire

indie｜PC｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 2,433 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：newobject 開發、Raw Fury 發行的彈珠台 Roguelike；與 BALL x PIT 無關。

平台範圍：已確認 Windows（Steam）；未找到官方主機或手機版。

別名：ballionaire

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2667120&l=english)：Steam 商店 API 回傳「Ballionaire」（app 2667120），平台 Windows，發售日 Dec 10, 2024，開發 newobject。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2667120&l=english)：Steam 商店 API 的 recommendations.total 為 2433（2026-11-22 讀取）。

## Keeper

indie｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Double Fine Productions 開發的無對白解謎冒險，主角是會走路的燈塔；與其他名為 Keeper 的作品無關。

平台範圍：已確認 PC 與 Xbox Series X|S（2025-10-17）、PS5（2026-09-03）；無 Switch 版。

別名：keeper、double fine keeper

- [官方平台來源](https://www.xbox.com/en-US/games/store/keeper/9NCJWHHMVHR0)：Xbox 商店支援 Xbox Series X|S 與 PC，2025/10/17，開發 Double Fine、發行 Xbox Game Studios。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10020501)：PlayStation Store 台灣頁 Keeper 平台 PS5，2026/9/3，發行 DOUBLE FINE PRODUCTIONS。

- [收錄依據來源](https://www.xbox.com/en-US/games/store/keeper/9NCJWHHMVHR0)：官方來源確認「Keeper」已於 2025-10-17 發售，作為收錄依據；未取得可比較的人氣數字。

## 夢之形

indie｜PC/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 16,742 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Lizard Smoothie 開發、NEOWIZ 發行的 MOBA 風格四人合作 Roguelite。

平台範圍：已確認 PC（2025-09-10）、PS5、Xbox Series X|S 與 Switch 2（2026-09-17）。

別名：shape of dreams

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2444750&l=english)：Steam 商店 API 回傳「Shape of Dreams」（app 2444750），平台 Windows，發售日 Sep 10, 2025，開發 Lizard Smoothie。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2444750&l=tchinese)：Steam 繁體中文商店名稱為「夢之形」。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10018441)：PlayStation Store 台灣頁「夢之形」平台 PS5，2026/9/17，發行 NEOWIZ。
- [官方平台來源](https://www.xbox.com/en-US/games/store/shape-of-dreams/9PK0DZ68LGC0)：Xbox 商店支援 PC 與 Xbox Series X|S，2026/9/17，開發 Lizard Smoothie、發行 NEOWIZ。
- [官方平台來源](https://www.nintendo.com/us/store/products/shape-of-dreams-switch-2/)：任天堂美國頁 Nintendo Switch 2 版，2026/9/17，發行 NEOWIZ。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2444750&l=english)：Steam 商店 API 的 recommendations.total 為 16742（2026-11-22 讀取）。

## FragPunk

indie｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 1,612 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Bad Guitar Studio 開發、NetEase 發行的免費 5 對 5 英雄射擊，使用碎片卡牌改變規則。

平台範圍：已確認 PC（2025-03-06）、PS5 與 Xbox Series X|S（2025-04-29）。

別名：fragpunk

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2943650&l=english)：Steam 商店 API 回傳「FragPunk」（app 2943650），平台 Windows，發售日 Mar 6, 2025，開發 Bad Guitar Studio。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10012871)：PlayStation Store 台灣頁 FragPunk 平台 PS5，2025/4/29，發行 NetEase。
- [官方平台來源](https://www.xbox.com/en-US/games/store/fragpunk/9MW715J1P29D)：Xbox 商店支援 Xbox Series X|S 與 PC，2025/4/29，開發 Bad Guitar Studio，免費含內購。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2943650&l=english)：Steam 商店 API 的 recommendations.total 為 1612（2026-11-22 讀取）。
