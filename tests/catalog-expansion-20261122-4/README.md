# 近年流行遊戲擴充（第六輪）

查核日期：2026-11-22。以近年流行作品為主，新增18款大作、13款手機遊戲及8款獨立遊戲（1款搶先體驗），1186 → 1225款。原1186款逐欄保留，包括既有7筆待確認資料；本輪未合併任何條目，歷史審計只更新摘要目錄總數。只收錄截至查核日已上市或搶先體驗中的作品；查核時尚未上市或證據不足的候選未收錄，見 [duplicate-review.md](duplicate-review.md)。

收錄依據：Steam 作品使用 Steam 商店 API 的 recommendations.total 快照（本輪 Steam 評論 API 拒絕自動請求，因此與前兩輪的評論總數、正評比例不能直接比較）；非 Steam 作品依官方發行規模與編輯判斷。catalogPriority 3為本輪高優先，2次之，1補充，僅作編輯排序，不是人氣排行。平台只列出查核日已推出的原生版本；向下相容、雲端串流、延期或僅見傳聞的版本不列入，並寫在平台說明。

[完整資料與證據](audit.json) · [重複與別名檢查](duplicate-check.json) · [本輪平台缺口](pending-platforms.json) · [驗證](VALIDATION.md)

重現：`node tests/catalog-expansion-20261122-4/apply-expansion.cjs`；加`--apply`寫入。整合器拒絕名稱／別名／商品ID衝突，以及目錄、歷史審計或待確認清單的獨立漂移。前五輪整合器不適用擴充後目錄。

## 絕命異次元（2023 重製版）

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 64,722 則推薦（recommendations，2026-11-22 快照），Metacritic 87；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Motive Studio 開發、EA 發行的 2023 年重製版，非 2008 年原版。

平台範圍：已確認 PC、PS5、Xbox Series X|S。本筆為 2023 年重製版，非 2008 年原版（原版另有 Xbox 商店頁面，屬不同商品）。重製版僅推出 PS5、Xbox Series X|S 與 PC，沒有 PS4／Xbox One 版。

別名：dead space、dead space remake、絕命異次元

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1693980&l=english)：Steam 商店 API 回傳「Dead Space」（app 1693980），平台 Windows，發售日 Jan 27, 2023，開發 Motive。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1693980&l=tchinese)：Steam 繁體中文商店名稱為「《絕命異次元》」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/dead-space/)：PlayStation 台灣官網《絕命異次元》頁面，平台列 PS5，推出日 2023/1/27，發行商 Electronic Arts Inc.，說明為經典作品完全重新打造的重製版。
- [官方平台來源](https://www.xbox.com/en-US/games/store/dead-space/9NLB6V0GNC9P)：Xbox 商店 Dead Space 頁面，Play with 列 Xbox Series X|S 與雲端遊玩，發售日 2023/1/27，發行 Electronic Arts、開發 Motive，描述為從零重建的重製版。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1693980&l=english)：Steam 商店 API 的 recommendations.total 為 64722，metacritic.score 為 87（2026-11-22 讀取）。

## 宇宙機器人

major｜PS5｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Team ASOBI 開發、Sony 發行的 PS5 平台動作遊戲（2024）。

平台範圍：已確認 PS5。PS5 獨占，無 PC 版。台灣官網推出日欄位顯示 2024/9/5，應為時區差異；全球發售日為 2024 年 9 月 6 日。

別名：astro bot

- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/astro-bot/)：PlayStation 台灣官網《宇宙機器人》頁面，平台 PS5，開發 Team Asobi，發行 Sony Interactive Entertainment；美國官網頁面發售日為 2024/9/6。

- [收錄依據來源](https://www.playstation.com/en-us/games/astro-bot/)：官方來源確認「宇宙機器人」已於 2024-09-06 發售，作為收錄依據；未取得可比較的人氣數字。

## 決勝時刻：黑色行動 6

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 14,547 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Treyarch 與 Raven Software 開發、Activision 發行的 2024 年決勝時刻作品，與既有黑色行動 7、戰域條目不同。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One。2024 年 10 月 25 日於 PS5、PS4、Xbox Series X|S、Xbox One 與 PC（Steam、Battle.net、Microsoft Store）同步推出，首日加入 Game Pass。部分地區商店頁面因時區顯示 10 月 24 日。

別名：call of duty black ops 6、black ops 6、bo6

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=4384550&l=english)：Steam 商店 API 回傳「Call of Duty®: Black Ops 6」（app 4384550），平台 Windows，發售日 Nov 1, 2024，開發 Treyarch、Raven Software、Beenox、High Moon Studios、Activision Shanghai、Sledgehammer Games、Infinity Ward、Demonware。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=4384550&l=tchinese)：Steam 繁體中文商店名稱為「決勝時刻®：黑色行動 6」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/call-of-duty-black-ops-6/)：PlayStation 台灣官網《決勝時刻®：黑色行動6》頁面，平台列 PS4、PS5（含 PS5 Pro 強化），發行 Activision，由 Treyarch 與 Raven 共同開發。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/call-of-duty-black-ops-6/)：同一頁面平台欄位列出 PS4。
- [官方平台來源](https://www.xbox.com/en-US/games/store/call-of-duty-black-ops-6-cross-gen-bundle/9PF528M6CRHQ)：Xbox 商店 Black Ops 6 Cross-Gen Bundle 頁面，Play with 列 Xbox One、Xbox Series X|S、雲端遊玩，發行 Activision Publishing Inc.，開發 Treyarch 與 Raven。
- [官方平台來源](https://www.xbox.com/en-US/games/store/call-of-duty-black-ops-6-cross-gen-bundle/9PF528M6CRHQ)：同一頁面 Play with 列出 Xbox One。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=4384550&l=english)：Steam 商店 API 的 recommendations.total 為 14547（2026-11-22 讀取）。

## Strinova

major｜PC｜released｜平台查核verified

熱度依據：Steam API 未提供推薦數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：iDreamSky 發行的紙片人角色戰術射擊國際版（2024）；中國大陸版另有不同營運。

平台範圍：已確認 PC。國際版 2024 年 11 月 21 日於 PC（Steam、Epic 等）推出。官方曾宣布 PS5、Xbox Series X|S、iOS、Android 版，但至 2026 年 11 月國際版仍僅有 PC 版，主機版尚未推出。手機版《卡拉彼丘》僅在中國大陸 App Store 上架（創夢天地發行），台灣區 App Store 與 Google Play 均查無此遊戲。中國大陸另有獨立營運的 PC 版《卡拉彼丘》，與國際版為不同客戶端。

別名：strinova

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1282270&l=english)：Steam 商店 API 回傳「Strinova」（app 1282270），平台 Windows，發售日 Nov 21, 2024，開發 iDreamSky。

- [收錄依據來源](https://store.steampowered.com/app/1282270/Strinova/)：官方來源確認「Strinova」已於 2024-11-21 發售，作為收錄依據；未取得可比較的人氣數字。

## Last Epoch

major｜PC｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 107,391 則推薦（recommendations，2026-11-22 快照），Metacritic 80；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Eleventh Hour Games 開發的時間旅行主題刷寶動作 RPG，2024 年正式版。

平台範圍：已確認 PC。2019 年 4 月 30 日開放搶先體驗，2024 年 2 月 21 日推出 1.0 正式版。PS5 版已於 2025 年 9 月宣布，將與首個大型資料片「Orobyss」同時推出，至 2026 年 11 月尚未發售，故不列入平台。

別名：last epoch

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=899770&l=english)：Steam 商店 API 回傳「Last Epoch」（app 899770），平台 Windows，發售日 Feb 21, 2024，開發 Eleventh Hour Games。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=899770&l=english)：Steam 商店 API 的 recommendations.total 為 107391，metacritic.score 為 80（2026-11-22 讀取）。

## Dead Island 2

major｜PC/Mac/PS5/PS4/Xbox Series X|S/Xbox One｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 24,377 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Dambuster Studios 開發、Deep Silver 發行的殭屍動作遊戲（2023）。

平台範圍：已確認 PC、Mac、PS5、PS4、Xbox Series X|S、Xbox One。2023 年 4 月 21 日於 PS5、PS4、Xbox Series X|S、Xbox One 與 PC（Epic Games Store）推出，Steam 版於 2024 年上架。另有收錄資料片「Haus」「SoLA」的 Ultimate Edition。

別名：dead island 2

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=934700&l=english)：Steam 商店 API 回傳「Dead Island 2」（app 934700），平台 Windows／macOS，發售日 Apr 22, 2024，開發 Dambuster Studios。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/dead-island-2/)：PlayStation 台灣官網《DEAD ISLAND 2》頁面，平台列 PS4、PS5，已發行 2023/04/21，Deep Silver 發行、Deep Silver Dambuster Studios 開發。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/dead-island-2/)：同一頁面平台欄位列出 PS4。
- [官方平台來源](https://www.xbox.com/en-US/games/store/dead-island-2/c3l4j3h7h12r)：Xbox 商店 Dead Island 2 頁面，Play with 列 Xbox One、Xbox Series X|S、雲端，發售日 2023/4/21，發行 Deep Silver、開發 Deep Silver Dambuster Studios。
- [官方平台來源](https://www.xbox.com/en-US/games/store/dead-island-2/c3l4j3h7h12r)：同一頁面 Play with 列出 Xbox One。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=934700&l=english)：Steam 商店 API 的 recommendations.total 為 24377（2026-11-22 讀取）。

## 原子之心

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 46,793 則推薦（recommendations，2026-11-22 快照），Metacritic 76；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Mundfish 開發的蘇聯架空科幻第一人稱動作遊戲（2023），與續作 Atomic Heart II 不同。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One。2023 年 2 月 21 日於 PS5、PS4、Xbox Series X|S、Xbox One 與 PC 同步推出，首日加入 Game Pass。PlayStation 版一次購買含 PS4 與 PS5 版。續作《Atomic Heart II》為另一款遊戲。

別名：atomic heart

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=668580&l=english)：Steam 商店 API 回傳「Atomic Heart」（app 668580），平台 Windows，發售日 Feb 20, 2023，開發 Mundfish。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=668580&l=tchinese)：Steam 繁體中文商店名稱為「原子之心」。
- [官方平台來源](https://store.playstation.com/en-us/product/UP4133-PPSA10696_00-ATOMICHEARTGAME0)：PlayStation Store 美國區 Atomic Heart (PS4 & PS5) 商品頁，平台 PS4、PS5，發售日 2023/2/21，發行 Focus Entertainment。
- [官方平台來源](https://store.playstation.com/en-us/product/UP4133-PPSA10696_00-ATOMICHEARTGAME0)：同一商品頁平台列出 PS4。
- [官方平台來源](https://www.xbox.com/en-US/games/store/atomic-heart/9P731Z4BBCT3)：Xbox 商店 Atomic Heart 頁面，Play with 列 Xbox One、Xbox Series X|S、雲端，發售日 2023/2/21，發行 Focus Entertainment、開發 Mundfish。
- [官方平台來源](https://www.xbox.com/en-US/games/store/atomic-heart/9P731Z4BBCT3)：同一頁面 Play with 列出 Xbox One。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=668580&l=english)：Steam 商店 API 的 recommendations.total 為 46793，metacritic.score 為 76（2026-11-22 讀取）。

## Lords of the Fallen（2023）

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 38,671 則推薦（recommendations，2026-11-22 快照），Metacritic 75；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：HEXWORKS 開發、CI Games 發行的 2023 年作品，非 2014 年原作，也不同於續作 Lords of the Fallen II。

平台範圍：已確認 PC、PS5、Xbox Series X|S。本筆為 2023 年推出的作品，非 2014 年同名原作。僅推出 PS5、Xbox Series X|S 與 PC，沒有 PS4／Xbox One 版。續作《Lords of the Fallen II》（含 Switch 2 版）為另一款遊戲。

別名：lords of the fallen、lords of the fallen 2023

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1501750&l=english)：Steam 商店 API 回傳「Lords of the Fallen」（app 1501750），平台 Windows，發售日 Oct 13, 2023，開發 CI Games。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/lords-of-the-fallen/)：PlayStation 台灣官網 Lords of the Fallen 頁面，平台欄位僅列 PS5（含 PS5 Pro 強化），已發行 2023/10/13，發行 CI GAMES，說明世界規模比原作大五倍以上。
- [官方平台來源](https://www.xbox.com/en-US/games/store/lords-of-the-fallen/9n3cjz3hfhtf)：Xbox 商店 Lords of the Fallen 頁面，Play with 列 Xbox Series X|S 與雲端，發售日 2023/10/13，CI Games 發行與開發。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1501750&l=english)：Steam 商店 API 的 recommendations.total 為 38671，metacritic.score 為 75（2026-11-22 讀取）。

## Remnant II

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 47,232 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Gunfire Games 開發、Gearbox 發行的魂系射擊續作（2023）。

平台範圍：已確認 PC、PS5、Xbox Series X|S。原由 Gearbox Publishing 發行，現由 Arc Games 發行。僅推出 PS5、Xbox Series X|S 與 PC 版，無 PS4／Xbox One 版；前作《Remnant: From the Ashes》的 Switch 版為不同作品。

別名：remnant ii、remnant 2

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1282100&l=english)：Steam 商店 API 回傳「REMNANT II®」（app 1282100），平台 Windows，發售日 Jul 25, 2023，開發 Gunfire Games。
- [官方平台來源](https://www.playstation.com/en-us/games/remnant-from-the-ashes-2/)：PlayStation 官方頁面「Remnant II」，平台 PS5，發售日 2023/7/25，標示 Developed by Gunfire Games、Published by Arc Games Inc.。
- [官方平台來源](https://www.xbox.com/en-US/games/store/_/9P9278ZMGQLJ)：Xbox 商店「Remnant II® - Standard Edition」，Play with 列 Xbox Series X|S 與 PC（未列 Xbox One），發售日 2023/7/25，發行商 Arc Games、開發商 Gunfire Games。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1282100&l=english)：Steam 商店 API 的 recommendations.total 為 47232（2026-11-22 讀取）。

## Escape from Tarkov

major｜PC｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 60,033 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Battlestate Games 開發的硬派撤離射擊遊戲，2025-11-15 推出 1.0 正式版。

平台範圍：已確認 PC。2017 年起以付費 Beta 形式在官方啟動器販售，1.0 正式版於 2025-11-15 推出，同日上架 Steam（Steam 版需另行購買）。開發商曾表示主機版正在開發中，但查核時尚未推出，故不列任何主機平台。

別名：escape from tarkov、tarkov

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3932890&l=english)：Steam 商店 API 回傳「Escape from Tarkov」（app 3932890），平台 Windows，發售日 Nov 15, 2025，開發 Battlestate Games。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3932890&l=english)：Steam 商店 API 的 recommendations.total 為 60033（2026-11-22 讀取）。

## Hunt: Showdown 1896

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 214,973 則推薦（recommendations，2026-11-22 快照），Metacritic 81；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Crytek 開發的 PvPvE 賞金獵人射擊遊戲，2024 年改版並更名為 1896。

平台範圍：已確認 PC、PS5、Xbox Series X|S。原名《Hunt: Showdown》，2018 年 2 月起在 Steam 搶先體驗，2019-08-27 正式推出（PC、Xbox One），PS4 版於 2020 年推出。2024-08-15 升級為《Hunt: Showdown 1896》並推出 PS5、Xbox Series X|S 版；官方公告 PS4 與 Xbox One 版自 2024-08-15 起移除且無法遊玩，舊主機玩家可免費升級至新主機版，故不列 PS4／Xbox One。

別名：hunt showdown 1896、hunt showdown

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=594650&l=english)：Steam 商店 API 回傳「Hunt: Showdown 1896」（app 594650），平台 Windows，發售日 Aug 27, 2019，開發 Crytek。
- [官方平台來源](https://www.playstation.com/en-us/games/hunt-showdown-1896/)：PlayStation 官方頁面「Hunt: Showdown 1896」，平台 PS5（PS5 Pro 增強），發售日 2024/8/15，發行商 Crytek。
- [官方平台來源](https://www.xbox.com/en-US/games/store/hunt-showdown-1896/9NPRV0R4CS1Z)：Xbox 商店「Hunt: Showdown 1896」，Play with 列 Xbox Series X|S（未列 Xbox One），發售日 2024/8/15，開發與發行皆為 Crytek。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=594650&l=english)：Steam 商店 API 的 recommendations.total 為 214973，metacritic.score 為 81（2026-11-22 讀取）。

## 永劫無間

major｜PC/PS5/Xbox Series X|S/Xbox One｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 198,062 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：24 Entertainment 開發、NetEase 發行的武俠大逃殺動作遊戲（2021）；手機版只在中國大陸推出，不列入。

平台範圍：已確認 PC、PS5、Xbox Series X|S、Xbox One。PC 版於 2021 年 8 月 11 日太平洋時間晚間（亞洲時間 8 月 12 日）正式推出；Xbox Series X|S 版 2022 年 6 月、Xbox One 版 2022 年 12 月、PS5 版 2023-07-13 推出，同日全平台改為免費遊玩。手機版《永劫無間》手遊目前僅在中國大陸推出，台灣區 App Store 與 Google Play 未上架，故不列 iOS／Android。

別名：naraka bladepoint、naraka

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1203220&l=english)：Steam 商店 API 回傳「NARAKA: BLADEPOINT」（app 1203220），平台 Windows，發售日 Aug 12, 2021，開發 24 Entertainment。
- [官方平台來源](https://news.xbox.com/en-us/2022/06/22/naraka-bladepoint-is-now-available-for-pc-and-xbox-series-xs-game-pass/)：Xbox Wire 2022/6/22 文章標題「NARAKA: BLADEPOINT Is Now Available For PC And Xbox Series X|S (Game Pass)」。
- [官方平台來源](https://www.xbox.com/en-gb/games/store/naraka-bladepoint/9P8SQQJ5T94B)：Xbox 商店「NARAKA: BLADEPOINT」，Play with 列 Xbox One、Xbox Series X|S、PC，發行商 NetEase（頁面發售日顯示為 2023/7/13 免費化改版日期）。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/naraka-bladepoint)：PlayStation 台灣頁面「永劫無間」（NARAKA: BLADEPOINT），平台 PS5，推出日 2023/7/13，發行商 NETEASE INTERACTIVE ENTERTAINMENT PTE.LTD。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1203220&l=english)：Steam 商店 API 的 recommendations.total 為 198062（2026-11-22 讀取）。

## 無人深空

major｜PC/Mac/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2/iOS｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 320,319 則推薦（recommendations，2026-11-22 快照），Metacritic 61；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Hello Games 開發的宇宙生存探索遊戲（2016），多年持續免費更新。

平台範圍：已確認 PC、Mac、PS5、PS4、Xbox Series X|S、Xbox One、Switch、Switch 2、iOS。PS4 版 2016 年 8 月首發（北美 8/9），PC 版同月推出；Xbox One 版 2018 年、PS5 與 Xbox Series X|S 版 2020 年、Switch 版 2022 年、Mac 版 2024 年、Switch 2 Edition 2025 年 6 月（Switch 版持有者可免費升級）、iPhone／iPad 版 2026 年 10 月推出。未推出 Android 版。

別名：no man's sky、no mans sky

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=275850&l=english)：Steam 商店 API 回傳「No Man's Sky」（app 275850），平台 Windows／macOS，發售日 Aug 12, 2016，開發 Hello Games。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=275850&l=tchinese)：Steam 繁體中文商店名稱為「No Man's Sky 無人深空」。
- [官方平台來源](https://www.playstation.com/en-us/games/no-mans-sky/)：PlayStation 官方頁面「No Man's Sky」，平台 PS4 與 PS5，頁首標示 Released 08/09/2016，發行商 Hello Games。
- [官方平台來源](https://www.playstation.com/en-us/games/no-mans-sky/)：同頁列有 PS5 版（PS5 Pro 增強、支援 PS VR2），詳細資料發售日 2020/11/12。
- [官方平台來源](https://www.xbox.com/en-US/games/store/no-mans-sky/BQVQTL3PCH05)：Xbox 商店「No Man's Sky」，Play with 列 PC、Xbox One、Xbox Series X|S，發售日 2018/7/24，發行商 Hello Games。
- [官方平台來源](https://www.xbox.com/en-US/games/store/no-mans-sky/BQVQTL3PCH05)：同一 Xbox 商店頁 Play with 列 Xbox Series X|S。
- [官方平台來源](https://www.nintendo.com/us/store/products/no-mans-sky-switch/)：美國任天堂商店「No Man's Sky」，平台 Nintendo Switch，發售日 2022/10/7，發行商 Hello Games。
- [官方平台來源](https://www.nintendo.com/us/store/products/no-mans-sky-nintendo-switch-2-edition-switch-2/)：美國任天堂商店「No Man's Sky – Nintendo Switch 2 Edition」，平台 Nintendo Switch 2，發售日 2025/6/5，發行商 Hello Games。
- [官方平台來源](https://www.nomanssky.com/)：Hello Games 官網平台列表列出 Mac（連結至 Steam 頁面），另列 PS4、PS5、Xbox One、Xbox Series X/S、iOS、Switch、Switch 2。
- [官方平台來源](https://apps.apple.com/tw/app/no-mans-sky/id1615755735)：台灣區 App Store「No Man's Sky」，開發者 Hello Games Ltd，支援 iPhone 與 iPad（需 iOS／iPadOS 26.0 以上），免費下載、內購解鎖完整遊戲 NT$690。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=275850&l=english)：Steam 商店 API 的 recommendations.total 為 320319，metacritic.score 為 61（2026-11-22 讀取）。

## Victoria 3

major｜PC/Mac/Linux｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 46,092 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Paradox Development Studio 開發的維多利亞系列第三部大戰略（2022）。

平台範圍：已確認 PC、Mac、Linux。僅推出電腦版（Windows、macOS、Linux），無主機或手機版。

別名：victoria 3、vic3

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=529340&l=english)：Steam 商店 API 回傳「Victoria 3」（app 529340），平台 Windows／macOS／Linux，發售日 Oct 25, 2022，開發 Paradox Development Studio。
- [官方平台來源](https://store.steampowered.com/app/529340/Victoria_3/)：Steam 商店頁「Victoria 3」，發售日 2022/10/25，系統需求分頁列有 macOS（最低 macOS 14.4.1 Sonoma）。
- [官方平台來源](https://store.steampowered.com/app/529340/Victoria_3/)：同一 Steam 頁系統需求分頁列有 SteamOS + Linux（Ubuntu 24.04 LTS）。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=529340&l=english)：Steam 商店 API 的 recommendations.total 為 46092（2026-11-22 讀取）。

## 世紀帝國II：決定版

major｜PC/Mac/PS5/Xbox Series X|S/Xbox One｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 160,763 則推薦（recommendations，2026-11-22 快照），Metacritic 84；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Forgotten Empires 開發、Xbox Game Studios 發行的世紀帝國II 決定版（2019），與既有世紀帝國4 不同。

平台範圍：已確認 PC、Mac、PS5、Xbox Series X|S、Xbox One。PC 版 2019-11-14 推出；Xbox One 與 Xbox Series X|S 版 2023 年 1 月 31 日推出；PS5 版 2025-05-06 推出。與 1999 年原版及 2013 年 HD 版為不同商品。

別名：age of empires ii definitive edition、aoe2 de、age of empires 2 de

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=813780&l=english)：Steam 商店 API 回傳「Age of Empires II: Definitive Edition」（app 813780），平台 Windows／macOS，發售日 Nov 14, 2019，開發 World's Edge、Forgotten Empires、CaptureAge、Tantalus Media、Wicked Witch、Feral Interactive。
- [官方平台來源](https://www.xbox.com/en-US/games/store/age-of-empires-ii-definitive-edition/9n42sssx2mtg)：Xbox 商店「Age of Empires II: Definitive Edition」，Play with 列 Xbox One、Xbox Series X|S、PC，發行商 Xbox Game Studios，開發商 World's Edge、Forgotten Empires、Tantalus、Wicked Witch。
- [官方平台來源](https://www.xbox.com/en-US/games/store/age-of-empires-ii-definitive-edition/9n42sssx2mtg)：同一 Xbox 商店頁 Play with 列 Xbox Series X|S。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/age-of-empires-ii/)：PlayStation 台灣頁面，平台 PS5，推出日 2025/5/6，頁面列出中文名稱「世紀帝國II：決定版」。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=813780&l=english)：Steam 商店 API 的 recommendations.total 為 160763，metacritic.score 為 84（2026-11-22 讀取）。

## Marvel's Spider-Man: Miles Morales

major｜PC/PS5/PS4｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 40,134 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Insomniac Games 開發的漫威蜘蛛人系列外傳（2020），與既有漫威蜘蛛人、漫威蜘蛛人2 不同。

平台範圍：已確認 PC、PS5、PS4。PS4／PS5 版 2020 年 11 月推出（北美 11/12），PC 版 2022 年 11 月推出。

別名：marvel's spider-man miles morales、spider-man miles morales、miles morales

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1817190&l=english)：Steam 商店 API 回傳「Marvel’s Spider-Man: Miles Morales」（app 1817190），平台 Windows，發售日 Nov 18, 2022，開發 Insomniac Games、Nixxes Software。
- [官方平台來源](https://www.playstation.com/en-us/games/marvels-spider-man-miles-morales/)：PlayStation 官方頁面，平台 PS5、PS4、PC，發售日 2020/11/12，發行商 Sony Interactive Entertainment。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/marvels-spider-man-miles-morales/)：PlayStation 台灣頁面標題「Marvel's Spider-Man: Miles Morales - PS4 與 PS5 遊戲」，列 PS4 與 PS5，並註明由 Insomniac Games 開發。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1817190&l=english)：Steam 商店 API 的 recommendations.total 為 40134（2026-11-22 讀取）。

## The Outlast Trials

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 102,813 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Red Barrels 開發的合作生存恐怖遊戲，2024 年正式版。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch 2。PC 版 2023-05-18 起搶先體驗，2024-03-05 正式推出並同步上市 PS4、PS5、Xbox One、Xbox Series X|S 版；Switch 2 版 2026-10-27 數位推出。無 Switch 版。

別名：the outlast trials、outlast trials

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1304930&l=english)：Steam 商店 API 回傳「The Outlast Trials」（app 1304930），平台 Windows，發售日 Mar 5, 2024，開發 Red Barrels。
- [官方平台來源](https://www.playstation.com/en-us/games/the-outlast-trials/)：PlayStation 官方頁面「The Outlast Trials」，平台 PS4 與 PS5（PS5 Pro 增強），發售日 2024/3/5，發行商與開發商 Red Barrels。
- [官方平台來源](https://www.playstation.com/en-us/games/the-outlast-trials/)：同頁列有 PS4 版。
- [官方平台來源](https://www.xbox.com/en-US/games/store/the-outlast-trials/9nr13rf1v2wv)：Xbox 商店「The Outlast Trials」，Play with 列 PC、Xbox One、Xbox Series X|S，發售日 2024/3/5，發行商 Red Barrels - Montreal。
- [官方平台來源](https://www.xbox.com/en-US/games/store/the-outlast-trials/9nr13rf1v2wv)：同一 Xbox 商店頁 Play with 列 Xbox One。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/The-Outlast-Trials-3229445.html)：英國任天堂官網「The Outlast Trials」，平台 Nintendo Switch 2，發售日 2026/10/27，發行商 Red Barrels。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1304930&l=english)：Steam 商店 API 的 recommendations.total 為 102813（2026-11-22 讀取）。

## Banishers: Ghosts of New Eden

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 6,609 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：DON'T NOD 開發、Focus Entertainment 發行的動作 RPG（2024）。

平台範圍：已確認 PC、PS5、Xbox Series X|S。僅推出 PS5、Xbox Series X|S 與 PC 版，無 PS4／Xbox One 版。

別名：banishers ghosts of new eden、banishers

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1493640&l=english)：Steam 商店 API 回傳「Banishers: Ghosts of New Eden」（app 1493640），平台 Windows，發售日 Feb 12, 2024，開發 DON'T NOD。
- [官方平台來源](https://www.playstation.com/en-us/games/banishers-ghosts-of-new-eden)：PlayStation 官方頁面「Banishers: Ghosts of New Eden」，平台 PS5（PS5 Pro 增強），發售日 2024/2/13，發行商 Focus Entertainment，開發商 Don't Nod Entertainment。
- [官方平台來源](https://www.xbox.com/en-US/games/store/banishers-ghosts-of-new-eden/9NKFS43DLFFL)：Xbox 商店「Banishers: Ghosts of New Eden」，Play with 列 Xbox Series X|S 與 PC，發售日 2024/2/13，發行商 Focus Entertainment，開發商 DON'T NOD。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1493640&l=english)：Steam 商店 API 的 recommendations.total 為 6609（2026-11-22 讀取）。

## Stray

indie｜PC/Mac/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 159,335 則推薦（recommendations，2026-11-22 快照），Metacritic 82；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：BlueTwelve Studio 開發、Annapurna Interactive 發行的貓咪賽博城市冒險遊戲（2022）。

平台範圍：已確認 PC、Mac、PS5、PS4、Xbox Series X|S、Xbox One、Switch、Switch 2。2022 年 7 月 19 日首發 PC、PS4、PS5；Xbox 版 2023 年 8 月 10 日、Mac 版 2023 年 12 月、Switch 版 2024 年 11 月 19 日、Switch 2 獨立版 2026 年 5 月 28 日推出。Mac 版經 Mac App Store 發行，無 iOS 版。

別名：stray

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1332010&l=english)：Steam 商店 API 回傳「Stray」（app 1332010），平台 Windows／macOS，發售日 Jul 19, 2022，開發 BlueTwelve Studio。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/stray/)：PlayStation 台灣官網《Stray》頁面，平台列 PS4、PS5，發售日 2022/7/19，Annapurna Interactive 發行、BlueTwelve Studio 開發。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/stray/)：同一頁面平台欄位列出 PS4。
- [官方平台來源](https://www.xbox.com/en-US/games/store/stray/9nmpdq2nrx34)：Xbox 商店 Stray 頁面，Play with 列 PC、Xbox One、Xbox Series X|S、雲端，發售日 2023/8/10，發行 Annapurna Interactive、開發 BlueTwelve Studio。
- [官方平台來源](https://www.xbox.com/en-US/games/store/stray/9nmpdq2nrx34)：同一頁面 Play with 列出 Xbox One。
- [官方平台來源](https://apps.apple.com/tw/app/stray/id6451498949?mt=12)：台灣區 Mac App Store《Stray》頁面，標示「僅適用於 Mac」，需 macOS 12.0 與 Apple M1 以上晶片，版本記錄最早 1.0 版為 2023/12/02。
- [官方平台來源](https://www.nintendo.com/us/store/products/stray-switch/)：任天堂美國官網 Stray（Nintendo Switch）商品頁，發售日 2024/11/19，發行 Annapurna Interactive。
- [官方平台來源](https://www.nintendo.com/us/store/products/stray-switch-2/)：任天堂美國官網 Stray（Nintendo Switch 2）獨立商品頁，發售日 2026/5/28，發行 Annapurna Interactive。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1332010&l=english)：Steam 商店 API 的 recommendations.total 為 159335，metacritic.score 為 82（2026-11-22 讀取）。

## Liar's Bar

indie｜PC｜early-access｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 48,990 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Curve Animation 開發的多人吹牛與俄羅斯輪盤派對遊戲，Steam 搶先體驗中。

平台範圍：已確認 PC（搶先體驗）。截至 2026-11-22 仍為 Steam 搶先體驗版，僅有 Windows PC 版。官方未推出 PS5、Xbox、Switch 或手機版；PlayStation Store 上的「Liar's Pub」是另一款不同遊戲。

別名：liar's bar、liars bar

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3097560&l=english)：Steam 商店 API 回傳「Liar's Bar」（app 3097560），平台 Windows，發售日 Oct 2, 2024，類型含搶先體驗，開發 Curve Animation。
- [官方平台來源](https://store.steampowered.com/app/3097560/Liars_Bar/)：Steam 商品頁仍標示為搶先體驗遊戲，發行日與搶先體驗發行日皆為 2024 年 10 月 2 日，開發與發行商為 Curve Animation，系統需求僅列 Windows 10 64 位元。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3097560&l=english)：Steam 商店 API 的 recommendations.total 為 48990（2026-11-22 讀取）。

## Chained Together

indie｜PC｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 55,695 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Anegar Games 開發的鎖鏈多人合作攀爬遊戲（2024），現由 Secret Mode 發行。

平台範圍：已確認 PC。僅有 PC（Steam）版。官方未推出主機或手機版；PlayStation Store 上名稱相近的「Chained Climb Together」「Chained Up Together」等為其他廠商的不同遊戲。原由 Anegar Games 自行發行，2026 年 6 月起由 Secret Mode 發行。

別名：chained together

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2567870&l=english)：Steam 商店 API 回傳「Chained Together」（app 2567870），平台 Windows，發售日 Jun 19, 2024，開發 Anegar Games、Lab42。
- [官方平台來源](https://store.steampowered.com/app/2567870/Chained_Together/)：Steam 商品頁列發行日 2024 年 6 月 19 日，開發者 Anegar Games、Lab42，發行商 Secret Mode，無搶先體驗標示。
- [官方平台來源](https://wearesecretmode.com/news/chained-together-joins-secret-mode)：發行商 Secret Mode 官網 2026 年 6 月 2 日新聞稿：Chained Together 加入 Secret Mode，格式僅列 PC，目前於 Steam 推出；原開發商為 Anegar Games。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2567870&l=english)：Steam 商店 API 的 recommendations.total 為 55695（2026-11-22 讀取）。

## 猛獸派對

indie｜PC/PS5/Xbox Series X|S/Xbox One｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 58,621 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Recreate Games 開發的毛茸茸動物物理格鬥派對遊戲（2023）。

平台範圍：已確認 PC、PS5、Xbox Series X|S、Xbox One。2023 年 9 月 20 日同步推出 PC（Steam）、Xbox Series X|S 與 Xbox One 版；PS5 版於 2025 年 1 月 23 日推出。無 PS4、Switch 版；開發商已表示手機版在開發中，但尚未推出。

別名：party animals

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1260320&l=english)：Steam 商店 API 回傳「Party Animals」（app 1260320），平台 Windows，發售日 Sep 20, 2023，開發 Recreate Games。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1260320&l=tchinese)：Steam 繁體中文商店名稱為「猛獸派對」。
- [官方平台來源](https://www.xbox.com/en-US/games/store/party-animals/9MZ08RDQ4DM1)：Xbox 商店頁「Party Animals」，平台列 Xbox One、Xbox Series X|S，發行日 2023/9/20，開發者 Recreate Games，發行商 Source Technology。
- [官方平台來源](https://www.xbox.com/en-US/games/store/party-animals/9MZ08RDQ4DM1)：同一 Xbox 商店頁平台欄列有 Xbox One，發行日 2023/9/20。
- [官方平台來源](https://www.playstation.com/zh-hant-hk/games/party-animals/)：PlayStation 香港中文官網頁面標題「猛獸派對」，平台 PS5（PS5 Pro 增強），發售日 2025/1/23，發行商 Source Next Generation Technology Limited。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1260320&l=english)：Steam 商店 API 的 recommendations.total 為 58621（2026-11-22 讀取）。

## Goose Goose Duck

indie｜PC/Mac/iOS/Android｜released｜平台查核verified

熱度依據：Steam API 未提供推薦數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Gaggle Studios 開發的鵝與鴨社交推理遊戲（2021）。

平台範圍：已確認 PC、Mac、iOS、Android。免費遊玩，PC（Steam，含 Windows 與 macOS）、iOS、Android 跨平台。Steam 版於 2021 年 4 月 29 日開始搶先體驗，2021 年 10 月 3 日正式發行。iOS 版可在 Apple Silicon Mac 上執行屬 iPad App 相容，不另計。無 PS、Xbox、Switch 版。

別名：goose goose duck

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1568590&l=english)：Steam 商店 API 回傳「Goose Goose Duck」（app 1568590），平台 Windows／macOS，發售日 Oct 3, 2021，開發 Gaggle Studios, Inc.。
- [官方平台來源](https://store.steampowered.com/app/1568590/Goose_Goose_Duck/)：Steam 商品頁列發行日 2021 年 10 月 3 日、搶先體驗發行日 2021 年 4 月 29 日，開發與發行商 Gaggle Studios, Inc.。
- [官方平台來源](https://store.steampowered.com/app/1568590/Goose_Goose_Duck/)：同一 Steam 商品頁系統需求有 Windows 與 macOS 兩個分頁。
- [官方平台來源](https://apps.apple.com/tw/app/id1558248707?l=zh-tw)：App Store 台灣區上架「Goose Goose Duck」，賣家 Gaggle Studios, Inc.，免費、提供 App 內購買，支援 iPhone／iPad，需 iOS 15.0 以上。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.Gaggle.fun.GooseGooseDuck&hl=zh_TW&gl=TW)：Google Play 台灣區頁面標題為「Goose Goose Duck - Google Play 應用程式」，分類為遊戲。

- [收錄依據來源](https://store.steampowered.com/app/1568590/Goose_Goose_Duck/)：官方來源確認「Goose Goose Duck」已於 2021-10-03 發售，作為收錄依據；未取得可比較的人氣數字。

## Deep Rock Galactic: Survivor

indie｜PC/PS5/Xbox Series X|S/Switch/Switch 2/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 46,757 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Funday Games 開發、Ghost Ship Publishing 發行的 Deep Rock Galactic 割草外傳，與既有 Deep Rock Galactic 不同。

平台範圍：已確認 PC、PS5、Xbox Series X|S、Switch、Switch 2、iOS、Android。Steam 版 2024 年 2 月 14 日開始搶先體驗，2025 年 9 月 17 日以 1.0 正式發行並同步推出 Xbox Series X|S 版（含 Game Pass）。手機版 2025 年 11 月 12 日推出（免費試玩、內購解鎖完整版）。PS5 版 2026 年 10 月 7 日推出；Switch 與 Switch 2 Edition 歐美 2026 年 10 月 9 日推出，東南亞與日本 10 月 15 日、韓國與台灣 10 月 22 日推出。無 Xbox One、PS4 版。

別名：deep rock galactic survivor、drg survivor

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2321470&l=english)：Steam 商店 API 回傳「Deep Rock Galactic: Survivor」（app 2321470），平台 Windows，發售日 Sep 17, 2025，開發 Funday Games。
- [官方平台來源](https://store.steampowered.com/app/2321470/Deep_Rock_Galactic_Survivor/)：Steam 商品頁已無搶先體驗標示，正式發行日 2025 年 9 月 17 日，搶先體驗發行日 2024 年 2 月 14 日，開發 Funday Games，發行 Ghost Ship Publishing。
- [官方平台來源](https://www.xbox.com/en-US/games/store/deep-rock-galactic-survivor/9PHGQPRBBSXK)：Xbox 商店頁平台列 PC、Xbox Series X|S（未列 Xbox One），發行日 2025/9/17，開發 Funday Games，發行 Ghost Ship Publishing。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10019431)：PlayStation Store 台灣頁「Deep Rock Galactic: Survivor」，平台僅 PS5，推出日 2026/10/7。
- [官方平台來源](https://www.nintendo.com/us/store/products/deep-rock-galactic-survivor-switch/)：任天堂美國官網商品頁列 Nintendo Switch 版與 Nintendo Switch 2 Edition 及升級包，發售日 2026 年 10 月 9 日，發行商 Ghost Ship Publishing。
- [官方平台來源](https://www.nintendo.com/us/store/products/deep-rock-galactic-survivor-switch/)：同一頁面列有 Nintendo Switch 2 Edition（數位版 US$12.99）與 Switch 2 Edition 升級包，Switch 2 容量 3.8 GB。
- [官方平台來源](https://apps.apple.com/tw/app/id6742194903)：App Store 台灣區上架「Deep Rock Galactic: Survivor」，賣家 Ghost Ship Publishing ApS，免費下載並以 App 內購買解鎖完整版／豪華版。
- [官方平台來源](https://www.mynewsdesk.com/uk/swipe-right/pressreleases/rock-and-phone-deep-rock-galactic-survivor-is-now-available-on-mobile-3415919)：Ghost Ship Publishing 與 Funday Games 2025 年 11 月 12 日新聞稿：遊戲已在 Google Play 與 Apple App Store 推出，提供可試玩前兩個生態區的「Free to Try」版本，完整版一次買斷。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2321470&l=english)：Steam 商店 API 的 recommendations.total 為 46757（2026-11-22 讀取）。

## Muse Dash

indie｜PC/Mac/Switch/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 117,208 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：PeroPeroGames 開發的跑酷音樂節奏遊戲。

平台範圍：已確認 PC、Mac、Switch、iOS、Android。最早於 2018 年在 iOS 與 Android 推出，2019 年 6 月 20 日推出 Steam（Windows、macOS）與 Switch 版。Switch 版可在 Switch 2 上以向下相容方式遊玩，無獨立 Switch 2 版。續作《Muse Dash 2》為不同商品。

別名：muse dash、喵斯快跑

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=774171&l=english)：Steam 商店 API 回傳「Muse Dash」（app 774171），平台 Windows／macOS，發售日 Jun 19, 2019，開發 peropero。
- [官方平台來源](https://store.steampowered.com/app/774171/Muse_Dash/)：Steam 商品頁列發行日 2019 年 6 月 20 日，由 peropero 推出，支援 Windows 與 macOS，介面含繁體中文。
- [官方平台來源](https://store.steampowered.com/app/774171/Muse_Dash/)：同一 Steam 商品頁標示支援 macOS。
- [官方平台來源](https://www.nintendo.com/us/store/products/muse-dash-switch/)：任天堂美國官網商品頁「Muse Dash」，平台 Nintendo Switch，發售日 2019 年 6 月 20 日，發行 peropero，開發 PeroPeroGames；Switch 2 標示為相容（行為與 Switch 一致），無獨立 Switch 2 版。
- [官方平台來源](https://apps.apple.com/tw/app/id1361473095)：App Store 台灣區上架「MuseDash」，提供者 peropero Ltd，付費 App 並含 App 內購買，支援 iPhone／iPad。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.prpr.musedash&hl=en&gl=TW)：Google Play 台灣區頁面標題為「Muse Dash - Apps on Google Play」。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=774171&l=english)：Steam 商店 API 的 recommendations.total 為 117208（2026-11-22 讀取）。

## Monument Valley 3

indie｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 2,264 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：ustwo games 開發的視錯覺解謎系列第三作。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch、iOS、Android。2024 年 12 月 10 日首發於 Netflix Games（iOS／Android，限 Netflix 會員），該 Netflix 版已於 2025 年 7 月下架。2025 年 7 月 22 日推出 PC（Steam，僅 Windows）、Switch、PS4、PS5、Xbox One、Xbox Series X|S 版。2025 年 12 月 3 日起改由 ustwo games 自行在 App Store 與 Google Play 一般上架（免費試玩、單次內購解鎖），不需 Netflix 會員。Switch 版可在 Switch 2 上相容遊玩，無獨立 Switch 2 版。另有收錄三部作品的「Monument Valley: The Collection」合輯，屬不同商品。

別名：monument valley 3、紀念碑谷3

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3132930&l=english)：Steam 商店 API 回傳「Monument Valley 3」（app 3132930），平台 Windows，發售日 Jul 22, 2025，開發 ustwo games。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3132930&l=tchinese)：Steam 繁體中文商店名稱為「纪念碑谷 3」。
- [官方平台來源](https://ustwogames.co.uk/news/monument-valley-3-out-now-pc-and-console/)：ustwo games 官網 2025 年 7 月 22 日新聞：Monument Valley 3 已在 Nintendo Switch、PlayStation 4/5、Xbox Series X/S、Xbox One 與 Steam（PC）全球推出。
- [官方平台來源](https://www.nintendo.com/us/store/products/monument-valley-3-switch/)：任天堂美國官網商品頁「Monument Valley 3」，Nintendo Switch 數位版，發售日 2025 年 7 月 22 日，發行 ustwo games；Switch 2 僅標示相容，無獨立 Switch 2 版。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10014415)：PlayStation Store 台灣頁，標題「纪念碑谷 3」，說明文字使用《紀念碑谷3》，平台 PS4、PS5，推出日 2025/7/21。
- [官方平台來源](https://store.playstation.com/en-hk/concept/10014415)：PlayStation Store 香港頁「Monument Valley 3」，平台 PS4、PS5，發售日 21/7/2025，發行 ustwo games limited。
- [官方平台來源](https://www.xbox.com/en-US/games/store/monument-valley-3/9N63WT5J9R60)：Xbox 商店頁平台列 Xbox One、Xbox Series X|S，發行日 2025/7/22，開發與發行 ustwo games。
- [官方平台來源](https://www.xbox.com/en-US/games/store/monument-valley-3/9N63WT5J9R60)：同一 Xbox 商店頁平台欄列有 Xbox One。
- [官方平台來源](https://apps.apple.com/tw/app/id6443563379)：App Store 台灣區上架一般版「Monument Valley 3」，賣家 ustwo games，免費下載、前兩章免費，單次 App 內購買解鎖完整遊戲與擴充「生命花園」，無廣告，頁面未提及 Netflix。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.ustwogames.mv3&gl=TW)：Google Play 台灣區頁面標題為「Monument Valley 3」（ustwo games 一般版套件 com.ustwogames.mv3）。
- [官方平台來源](https://www.gamespress.com/Monument-Valley-3-The-Garden-of-Life-expansion-confirmed-for-Console-P)：ustwo games 2025 年 10 月 28 日新聞稿：Monument Valley 3 將於 2025 年 12 月 3 日重返 iOS 與 Android，並同步推出擴充「The Garden of Life」。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3132930&l=english)：Steam 商店 API 的 recommendations.total 為 2264（2026-11-22 讀取）。

## Cytus II

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：台灣雷亞遊戲（Rayark）開發的音樂節奏遊戲（2018）；Switch 版尚未推出。

平台範圍：已確認 iOS、Android。iOS 版 2018 年 1 月推出，Android 版 2018 年 3 月推出。Nintendo Switch 與 Switch 2 版已於 2026 年 5 月宣布、預定 2027 年發售（Flyhigh Works 發行），查核時尚未推出故不列入。Switch 上的「Cytus α」是前作的另一款商品。

別名：cytus ii、cytus 2

- [官方平台來源](https://apps.apple.com/tw/app/id1290687550)：App Store 台灣區上架「Cytus II」，賣家 Rayark International Limited，付費 App 並含 App 內購買。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.rayark.cytus2&gl=TW)：Google Play 台灣區頁面標題為「Cytus II」。
- [官方平台來源](https://www.rayark.com/zh/games/)：雷亞官網遊戲列表：Cytus II 平台 iOS、Android，音樂節奏遊戲，付費＋內購，首次推出 2018 年 1 月。

- [收錄依據來源](https://www.rayark.com/zh/games/)：官方來源確認「Cytus II」已於 2018-01-18 發售，作為收錄依據；未取得可比較的人氣數字。

## DEEMO II

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：台灣雷亞遊戲（Rayark）開發的 DEEMO 續作（2022），與前作 DEEMO -Reborn- 不同。

平台範圍：已確認 iOS、Android。僅有 iOS 與 Android 版，2022 年 1 月 13 日推出。無 Steam／PC 版與 Switch 版；Steam、Switch、PS4 上的「DEEMO -Reborn-」是前作重製版，屬不同商品。

別名：deemo ii、deemo 2

- [官方平台來源](https://apps.apple.com/tw/app/id1531981487)：App Store 台灣區上架「DEEMO II」，賣家 Rayark International Limited，免費、App 內購買，支援 iPhone、iPad（iOS／iPadOS 15.2 以上），未列 Mac。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.rayark.deemo2&gl=TW)：Google Play 台灣區頁面標題為「DEEMO II」。
- [官方平台來源](https://www.rayark.com/zh/games/)：雷亞官網遊戲列表：DEEMO II 平台 iOS、Android，節奏＋冒險，免費＋內購，首次推出 2022 年 1 月。

- [收錄依據來源](https://www.rayark.com/zh/games/)：官方來源確認「DEEMO II」已於 2022-01-13 發售，作為收錄依據；未取得可比較的人氣數字。

## Monster Hunter Now

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Niantic 與 CAPCOM 合作的魔物獵人定位手機遊戲（2023），與主機系列作不同。

平台範圍：已確認 iOS、Android。由 Niantic 與 CAPCOM 合作開發的定位類手機遊戲，官方公告 2023 年 9 月 14 日全球推出；Niantic 遊戲部門後由 Scopely 收購，商店供應商現為 Scopely Explore, Inc.。無 PC 或主機版本。Garena 代理的《魔物獵人：旅人》為不同遊戲。

別名：monster hunter now、mh now

- [官方平台來源](https://apps.apple.com/tw/app/monster-hunter-now/id6445906110)：台灣區 App Store 上架「Monster Hunter Now」，供應商 Scopely Explore, Inc.，免費（含 App 內購買），標示僅適用於 iPhone、需 iOS 14.0 以上，最新版本 132.0。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.nianticlabs.monsterhunter&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「Monster Hunter Now」，開發者 Scopely Explore, Inc.，分類為遊戲。

- [收錄依據來源](https://monsterhunternow.com/news/release-date)：官方來源確認「Monster Hunter Now」已於 2023-09-14 發售，作為收錄依據；未取得可比較的人氣數字。

## Mobile Legends: Bang Bang

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Moonton 開發的手機 MOBA。

平台範圍：已確認 iOS、Android。台灣下載的是 MOONTON 國際版。美國另有 Skystone Games 發行的「Mobile Legends: Bang Bang.US」、越南另有「Mobile Legends: Bang Bang FT」，皆為區域獨立商品，不在此列。無 PC 或主機原生版本。

別名：mobile legends bang bang、mobile legends、mlbb

- [官方平台來源](https://apps.apple.com/tw/app/mobile-legends-bang-bang/id1160056295)：台灣區 App Store 上架「Mobile Legends: Bang Bang」，開發者 MOONTON，供應商 YOUNGJOY TECHNOLOGY LIMITED，台灣區上架資料日期 2016-11-09。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.mobile.legends&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「Mobile Legends: Bang Bang」，開發者 MOONTON。

- [收錄依據來源](https://apps.apple.com/tw/app/mobile-legends-bang-bang/id1160056295)：官方商店頁確認「Mobile Legends: Bang Bang」目前上架營運，作為收錄依據；官方未公布上市日期，也未取得可比較的人氣數字。

## Sky 光·遇

mobile｜PC/PS4/Switch/iOS/Android｜released｜平台查核verified

熱度依據：Steam API 未提供推薦數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：thatgamecompany 開發的社交冒險遊戲（2019），PC 版在 Steam 為搶先體驗。

平台範圍：已確認 PC、PS4、Switch、iOS、Android。2019 年 7 月 18 日先於 iOS 全球推出，Android 版 2020 年 4 月推出，其後推出 Nintendo Switch、PS4 與 PC（Steam）版。PlayStation 版為 PS4 版本，在 PS5 上以向下相容遊玩，故不列 PS5；Switch 版可在 Switch 2 上相容遊玩，非 Switch 2 原生版本。中國大陸由網易代理的版本為另一區域版本，不在此列。

別名：sky children of the light、sky光遇

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2325290&l=english)：Steam 商店 API 回傳「Sky: Children of the Light」（app 2325290），平台 Windows，發售日 Apr 10, 2024，類型含搶先體驗，開發 thatgamecompany。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2325290&l=tchinese)：Steam 繁體中文商店名稱為「Sky 光·遇」。
- [官方平台來源](https://apps.apple.com/tw/app/id1462117269)：台灣區 App Store 上架「Sky光·遇」，開發者／供應商 thatgamecompany，支援 iPhone 與 iPad。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.tgc.sky.android&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「Sky光·遇」，開發者 thatgamecompany inc。
- [官方平台來源](https://ec.nintendo.com/apps/0100c52011460000/HK?lang=zh)：任天堂香港 eShop 頁面「Sky光·遇」，平台 Nintendo Switch，廠商 thatgamecompany；頁面另標示可在 Nintendo Switch 2 上相容遊玩。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10004206)：PlayStation Store 台灣頁面「Sky光·遇」，平台 PS4，發售日 2022/12/6，發行商 thatgamecompany, Inc.；註明可在 PS5 上遊玩但部分 PS4 功能可能無法使用。

- [收錄依據來源](https://thatgamecompany.com/sky-children-light-now/)：官方來源確認「Sky 光·遇」已於 2019-07-18 發售，作為收錄依據；未取得可比較的人氣數字。

## Dragon Ball Legends

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：萬代南夢宮的七龍珠手機對戰遊戲（2018）。

平台範圍：已確認 iOS、Android。台灣下載的是萬代南夢宮全球版。僅有手機版本，無 PC 或主機版本。

別名：dragon ball legends、db legends

- [官方平台來源](https://apps.apple.com/tw/app/id1358222641)：台灣區 App Store 上架「DRAGON BALL LEGENDS -七龍珠 激戰傳說-」，供應商 Bandai Namco Entertainment Inc.，台灣區上架日 2018-05-31。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.bandainamcoent.dblegends_ww&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「DRAGON BALL LEGENDS -七龍珠 激戰傳說-」，開發者 Bandai Namco Entertainment Inc.。

- [收錄依據來源](https://itunes.apple.com/lookup?id=1358222641&country=tw)：官方來源確認「Dragon Ball Legends」已於 2018-05-31 發售，作為收錄依據；未取得可比較的人氣數字。

## One Piece Bounty Rush

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：萬代南夢宮的航海王 4 對 4 搶寶即時對戰手機遊戲。

平台範圍：已確認 iOS、Android。台灣下載的是萬代南夢宮全球版。僅有手機版本，無 PC 或主機版本。

別名：one piece bounty rush、bounty rush、opbr

- [官方平台來源](https://apps.apple.com/tw/app/id1343688545)：台灣區 App Store 上架「ONE PIECE Bounty Rush」，供應商 Bandai Namco Entertainment Inc.，台灣區上架資料日期 2018-03-29。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.bandainamcoent.opbrww&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「ONE PIECE Bounty Rush」，開發者 Bandai Namco Entertainment Inc.。

- [收錄依據來源](https://itunes.apple.com/lookup?id=1343688545&country=tw)：官方來源確認「One Piece Bounty Rush」已於 2018-03-29 發售，作為收錄依據；未取得可比較的人氣數字。

## Stumble Guys

mobile｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 10,996 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Scopely 發行的多人淘汰闖關派對遊戲。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch、iOS、Android。最早於 Android 推出，之後推出 iOS 與 PC（Steam）版；主機版 Xbox 於 2024 年 1 月、PlayStation 於 2024 年、Nintendo Switch 於 2024 年 8 月 20 日推出。Switch 版可在 Switch 2 上相容遊玩，非 Switch 2 原生版本；Xbox 雲端遊戲不另列。

別名：stumble guys

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1677740&l=english)：Steam 商店 API 回傳「Stumble Guys」（app 1677740），平台 Windows，發售日 Oct 7, 2021，開發 Scopely。
- [官方平台來源](https://apps.apple.com/tw/app/id1541153375)：台灣區 App Store 上架「Stumble Guys」，供應商 Scopely, Inc.，台灣區上架日 2021-02-12。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.kitkagames.fallbuddies&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「Stumble Guys」，開發者 Scopely。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10007588)：PlayStation Store 台灣頁面「Stumble Guys」，平台 PS5，版本區另列 PS4 版，發行商 Scopely, Inc.，頁面發售日 2024/4/9。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10007588)：同一 PlayStation Store 台灣頁面的版本區列出 PS4 版。
- [官方平台來源](https://www.xbox.com/zh-TW/games/store/stumble-guys/9n9l211hc9lq)：Xbox 台灣商店頁面「Stumble Guys」，平台 Xbox Series X|S 與 Xbox One，發行商／開發商 Scopely, Inc.，發售日 2024/1/23。
- [官方平台來源](https://www.xbox.com/zh-TW/games/store/stumble-guys/9n9l211hc9lq)：同一 Xbox 台灣商店頁面列出 Xbox One。
- [官方平台來源](https://ec.nintendo.com/AU/en/titles/70010000065444)：任天堂澳洲 eShop 頁面「Stumble Guys」，平台 Nintendo Switch，發行商 Scopely；頁面另列 Switch 2 所需空間（相容遊玩）。
- [官方平台來源](https://www.scopely.com/en/news/stumble-guys-arrives-on-nintendo-switch)：Scopely 官方新聞（2024-08-20）宣布 Stumble Guys 即日起登陸 Nintendo Switch。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1677740&l=english)：Steam 商店 API 的 recommendations.total 為 10996（2026-11-22 讀取）。

## 血戰突擊

mobile｜PC/iOS/Android｜released｜平台查核verified

熱度依據：Steam API 未提供推薦數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：NetEase 開發的免費射擊遊戲（2023）。

平台範圍：已確認 PC、iOS、Android。iOS 版（Blood Strike x DJ SNAKE）在美國、新加坡等區 App Store 上架，但台灣區 App Store 未上架，故不列 iOS。2023 年 10 月 28 日於東南亞正式推出，2024 年 3 月全球推出；PC 版於 Steam 推出。查核日未見官方 PlayStation、Xbox 或 Switch 版本。「Blood Strike Max」為另一款獨立商品。 iOS 版在美國等區上架，台灣區 App Store 未上架。

別名：blood strike

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3199170&l=english)：Steam 商店 API 回傳「Blood Strike」（app 3199170），平台 Windows，發售日 Mar 13, 2025，開發 NetEase Games。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3199170&l=tchinese)：Steam 繁體中文商店名稱為「血戰突擊」。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.netease.newspike&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「Blood Strike x DJ SNAKE」，開發者 NetEase Games。
- [官方平台來源](https://apps.apple.com/us/app/id1637059453)：App Store 美國區「Blood Strike x DJ SNAKE」，販售者 Hong Kong Netease Interactive Entertainment Limited，套件 com.netease.newspike（與 Google Play 版相同），上架日 2024-03-14（Apple lookup API，2026-11-22 讀取）。

- [收錄依據來源](https://itunes.apple.com/lookup?id=1637059453&country=sg)：官方來源確認「血戰突擊」已於 2023-10-28 發售，作為收錄依據；未取得可比較的人氣數字。

## Farlight 84

mobile｜PC/iOS/Android｜released｜平台查核verified

熱度依據：Steam API 未提供推薦數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Farlight Games 開發的英雄大逃殺射擊遊戲（2023）。

平台範圍：已確認 PC、iOS、Android。iOS 版在香港、日本、美國等區 App Store 上架（供應商 FARLIGHT PTE. LTD.），但台灣區 App Store 未上架，故不列 iOS。PC 版於 Steam 推出，2025 年 8 月全面改版重新推出。無主機版本。 iOS 版在香港等區上架，台灣區 App Store 未上架。

別名：farlight 84

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1928420&l=english)：Steam 商店 API 回傳「Farlight 84」（app 1928420），平台 Windows，發售日 Sep 21, 2023，開發 Farlight Games。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.miraclegames.farlight84&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「Farlight 84」，開發者 FARLIGHT。
- [官方平台來源](https://apps.apple.com/hk/app/id1673713581)：App Store 香港區「Farlight 84」，販售者 FARLIGHT PTE. LTD.，上架日 2023-04-23（Apple lookup API，2026-11-22 讀取）。

- [收錄依據來源](https://itunes.apple.com/lookup?id=1673713581&country=hk)：官方來源確認「Farlight 84」已於 2023-04-23 發售，作為收錄依據；未取得可比較的人氣數字。

## Night Crows

mobile｜PC/iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Wemade 營運的中世紀奇幻 MMORPG 全球版（2024），台灣可下載的即此版本。

平台範圍：已確認 PC、iOS、Android。台灣可下載的是 Wemade 營運的全球版「NIGHT CROWS」（2024 年 3 月 12 日於全球 170 國推出，不含韓國與中國），未見另由台灣代理商發行的版本。PC 版透過官網啟動器下載。韓國版「나이트 크로우」（2023 年推出）為獨立的區域商品，不在此列；Steam 上的「NIGHT CROW」（Ge-Aivan）為無關的另一款遊戲。

別名：night crows

- [官方平台來源](https://apps.apple.com/tw/app/id6459364511)：台灣區 App Store 上架「NIGHT CROWS」，供應商 Wemade Co., Ltd.，台灣區上架日 2024-03-11（預先下載），最新版本 1.28.7。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.wemade.nightcrowsglobal&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「NIGHT CROWS」，開發者 Wemade Co., Ltd。
- [官方平台來源](https://www.nightcrows.com/en)：NIGHT CROWS 全球版官網提供「Download PC Version」PC 用戶端下載，說明遊戲資料可跨平台共用；網站語言選項含繁體中文。

- [收錄依據來源](https://apps.apple.com/tw/app/id6459364511)：官方來源確認「Night Crows」已於 2024-03-12 發售，作為收錄依據；未取得可比較的人氣數字。

## 雀魂麻將

mobile｜PC/iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Catfood Studio 開發的日本麻將遊戲；收錄台灣可下載的 Soulcreator 營運繁中版，與 Yostar 國際版為不同上架商品。

平台範圍：已確認 PC、iOS、Android。台灣可下載的是 Soulcreator 營運的繁體中文版「雀魂麻將」。Yostar 發行的英文國際版「Mahjong Soul」與日文版「雀魂 -じゃんたま-」為不同營運版本，國際版未在台灣區 App Store 上架。PC 可透過 Steam 或網頁瀏覽器遊玩。

別名：mahjong soul、雀魂

- [官方平台來源](https://apps.apple.com/tw/app/id1502673857)：台灣區 App Store 上架「雀魂麻將」，開發者 Catfood Studio，供應商 Soulcreator Network Technology Co., Limited，官網連結 maj-soul.com，台灣區上架日 2020-09-15。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.soulgamechst.majsoul&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「雀魂麻將」，開發者 SoulCreator。
- [官方平台來源](https://www.maj-soul.com/)：雀魂麻將官網提供台灣區 App Store（id1502673857）、Google Play（com.soulgamechst.majsoul）、Steam（app 1329410）下載連結，以及網頁版入口 game.maj-soul.com 與 PC 用戶端下載。

- [收錄依據來源](https://itunes.apple.com/lookup?id=1502673857&country=tw)：官方來源確認「雀魂麻將」已於 2020-09-15 發售，作為收錄依據；未取得可比較的人氣數字。

## 魔獸兵團

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Blizzard 的魔獸世界觀即時策略手機遊戲（2023），已停止開發新內容但仍在營運。

平台範圍：已確認 iOS、Android。2023 年 11 月 3 日於 iOS 與 Android 全球推出。暴雪已宣布停止開發新內容，後續更新僅限例行活動與錯誤修正，遊戲仍持續營運。PC 版自 2024 年 12 月起以 Battle.net 測試版（PC Beta）形式提供，非正式版，故不列 PC。

別名：warcraft rumble

- [官方平台來源](https://apps.apple.com/tw/app/id1600575058)：台灣區 App Store 上架「《魔獸兵團》」，供應商 Blizzard Entertainment, Inc.，最新版本 16.56.0（2026-09-17）。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.blizzard.arc&gl=TW&hl=zh_TW)：Google Play（台灣）頁面「《魔獸兵團》」，開發者 Blizzard Entertainment, Inc.。

- [收錄依據來源](https://news.blizzard.com/en-us/warcraftrumble/24009158/warcraft-rumble-goes-live-globally-november-3)：官方來源確認「魔獸兵團」已於 2023-11-03 發售，作為收錄依據；未取得可比較的人氣數字。
