# 大作、手機與獨立遊戲擴充（第四輪）

查核日期：2026-11-22。新增19款大作、5款手機遊戲及18款獨立遊戲（1款搶先體驗），1091 → 1133款。原1091款逐欄保留，包括既有7筆待確認資料；本輪未合併任何條目，歷史審計只更新摘要目錄總數。只收錄截至查核日已上市或搶先體驗中的作品；查核時尚未上市或證據不足的候選未收錄，見 [duplicate-review.md](duplicate-review.md)。

收錄依據：Steam 作品使用 Steam 商店 API 的 recommendations.total 快照（本輪 Steam 評論 API 拒絕自動請求，因此與前兩輪的評論總數、正評比例不能直接比較）；非 Steam 作品依官方發行規模與編輯判斷。catalogPriority 3為本輪高優先，2次之，1補充，僅作編輯排序，不是人氣排行。平台只列出查核日已推出的原生版本；向下相容、雲端串流、延期或僅見傳聞的版本不列入，並寫在平台說明。

[完整資料與證據](audit.json) · [重複與別名檢查](duplicate-check.json) · [本輪平台缺口](pending-platforms.json) · [驗證](VALIDATION.md)

重現：`node tests/catalog-expansion-20261122-2/apply-expansion.cjs`；加`--apply`寫入。整合器拒絕名稱／別名／商品ID衝突，以及目錄、歷史審計或待確認清單的獨立漂移。前三輪整合器不適用擴充後目錄。

## METAL GEAR SOLID Δ: SNAKE EATER

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 13,989 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：KONAMI 對 2004 年《潛龍諜影3 食蛇者》的重製版。

平台範圍：已確認 PC、PS5、Xbox Series X|S。2004 年《潛龍諜影3 食蛇者》的重製版，與原版及收錄原版的 Master Collection Vol. 1 分開；Switch 2 版僅見傳聞。

別名：metal gear solid delta snake eater、mgs delta、潛龍諜影Δ 食蛇者

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2417610&l=english)：Steam 商店 API 回傳「METAL GEAR SOLID Δ: SNAKE EATER」（app 2417610），平台 Windows，發售日 Aug 28, 2025，開發 KONAMI。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/metal-gear-solid-delta-snake-eater)：PlayStation 台灣頁平台 PS5，發行 KONAMI；FAQ 註明 2025-08-28 推出。
- [官方平台來源](https://www.xbox.com/en-US/games/store/metal-gear-solid-snake-eater/9PJLN214RTKQ)：Xbox 商店支援 Xbox Series X|S 與 PC（無 Xbox One），KONAMI 開發發行，2025/8/28。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2417610&l=english)：Steam 商店 API 的 recommendations.total 為 13989（2026-11-22 讀取）。

## Madden NFL 26

major｜PC/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 5,521 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：EA Tiburon 開發的 2025 年度美式足球作品。

平台範圍：已確認 PC、PS5、Xbox Series X|S、Switch 2。2025 年度版本，與 25、27 代分開；沒有 PS4／Xbox One／初代 Switch 版；免費手機遊戲 Madden NFL Mobile 是另一商品。

別名：madden nfl 26、madden 26

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3230400&l=english)：Steam 商店 API 回傳「EA SPORTS™ Madden NFL 26」（app 3230400），平台 Windows，發售日 Aug 14, 2025，開發 Tiburon。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3230400&l=tchinese)：Steam 繁體中文商店名稱為「《EA SPORTS™ Madden NFL 26》」。
- [官方平台來源](https://store.playstation.com/en-us/concept/10012604)：PlayStation Store「EA SPORTS™ Madden NFL 26」平台 PS5，發行 Electronic Arts（顯示 2025/8/7 搶先遊玩日）。
- [官方平台來源](https://www.xbox.com/en-US/games/store/-/9NVD16NP4J8T)：Xbox 商店支援 Xbox Series X|S，2025/8/14，開發 Tiburon、發行 Electronic Arts。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/EA-SPORTS-Madden-NFL-26-2807738.html)：任天堂英國頁 Nintendo Switch 2 版，2025/8/14，發行 Electronic Arts。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3230400&l=english)：Steam 商店 API 的 recommendations.total 為 5521（2026-11-22 讀取）。

## EA SPORTS College Football 26

major｜PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：EA Tiburon 開發的 2025 年度美國大學美式足球作品。

平台範圍：已確認 PS5、Xbox Series X|S。2025 年度版本，與 25、27 代分開；官方頁只連結 PlayStation 與 Xbox 商店，沒有 PC 版。

別名：college football 26、cfb 26

- [官方平台來源](https://store.playstation.com/en-us/concept/10012463)：PlayStation Store「EA SPORTS™ College Football 26」平台 PS5，發行 Electronic Arts（顯示 2025/7/7 搶先遊玩日）。
- [官方平台來源](https://xbox.com/games/store/EA-SPORTS-College-Football-26/9NLKS78C4F3Z)：Xbox 商店只支援 Xbox Series X|S，2025/7/10，開發 Tiburon、發行 Electronic Arts。

- [收錄依據來源](https://xbox.com/games/store/EA-SPORTS-College-Football-26/9NLKS78C4F3Z)：官方來源確認「EA SPORTS College Football 26」已於 2025-07-10 發售，作為收錄依據；未取得可比較的人氣數字。

## WWE 2K26

major｜PC/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 2,643 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Visual Concepts 開發、2K 發行的 2026 年度摔角作品。

平台範圍：已確認 PC、PS5、Xbox Series X|S、Switch 2。2026 年度版本，與 WWE 2K25 分開；沒有 PS4／Xbox One 版。

別名：wwe 2k26

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3717070&l=english)：Steam 商店 API 回傳「WWE 2K26」（app 3717070），平台 Windows，發售日 Mar 12, 2026，開發 Visual Concepts。
- [官方平台來源](https://www.playstation.com/en-gb/games/wwe-2k/)：PlayStation 英國頁 WWE 2K26 平台只列 PS5，發行 2K，2026/3/13。
- [官方平台來源](https://www.xbox.com/en-US/games/store/-/9PGRV33VMSL1)：Xbox 商店「WWE 2K26 Standard Edition」支援 Xbox Series X|S（無 Xbox One），開發 Visual Concepts、發行 2K，2026/3/13。
- [官方平台來源](https://www.nintendo.com/en-ca/store/products/wwe-2k26-standard-edition-switch-2/)：任天堂加拿大頁 Nintendo Switch 2 版，2026/3/13，發行 2K。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3717070&l=english)：Steam 商店 API 的 recommendations.total 為 2643（2026-11-22 讀取）。

## F1 25

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 27,073 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Codemasters 開發、EA 發行的 2025 年度 F1 賽車作品。

平台範圍：已確認 PC、PS5、Xbox Series X|S。2025 年度版本；2026 Season Pack／Edition 是 F1 25 的擴充或套組，不另建條目；沒有 PS4／Xbox One／Switch 版。

別名：f1 25、ea sports f1 25、f1 2025

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3059520&l=english)：Steam 商店 API 回傳「F1® 25」（app 3059520），平台 Windows，發售日 May 30, 2025，開發 Codemasters。
- [官方平台來源](https://store.playstation.com/en-us/concept/10011830)：PlayStation Store「F1® 25」平台 PS5，2025/5/30，發行 Electronic Arts。
- [官方平台來源](https://www.xbox.com/en-US/games/store/f1-25/9NWPW7F19FS5)：Xbox 商店支援 Xbox Series X|S，2025/5/30，開發 Codemasters、發行 Electronic Arts。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3059520&l=english)：Steam 商店 API 的 recommendations.total 為 27073（2026-11-22 讀取）。

## Football Manager 26

major｜PC/Mac/PS5/Xbox Series X|S/Xbox One｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Sports Interactive 開發、SEGA 發行的足球經理 2026 版本，主機版名為 Football Manager 26 Console。

平台範圍：已確認 PC、Mac、PS5、Xbox Series X|S、Xbox One。主機版名為「Football Manager 26 Console」；Switch 與 Apple Arcade 的「FM26 Touch」及 Netflix 會員專屬的「FM26 Mobile」是另外的商品，不列入平台；Xbox One 依 Xbox 商店頁列入，SEGA 新聞稿只寫 Xbox Series X|S。

別名：football manager 26、fm26、足球經理26

- [官方平台來源](https://sega.co.jp/en/release/250911_2.html)：SEGA 新聞稿列出 Football Manager 26 的 PC（Steam、Epic、Windows）與 Mac 版，2025 年 11 月 5 日（日本時間）。
- [官方平台來源](https://www.playstation.com/en-us/games/football-manager-26-console/)：PlayStation 頁「Football Manager 26 Console」，發行 SEGA，2025/11/4，列於 PS5 遊戲。
- [官方平台來源](https://www.xbox.com/en-US/games/store/football-manager-26-console/9nmnz4ck59dm)：Xbox 商店「Football Manager 26 Console」支援 PC、Xbox One 與 Xbox Series X|S，開發 Sports Interactive、發行 SEGA。

- [收錄依據來源](https://www.footballmanager.com/index.php/news/football-manager-26-out-now-across-platforms)：官方來源確認「Football Manager 26」已於 2025-11-04 發售，作為收錄依據；未取得可比較的人氣數字。

## Tony Hawk's Pro Skater 3 + 4

major｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 1,572 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Activision 發行的三代與四代重製合輯。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch、Switch 2。2001 年三代與 2002 年四代的重製合輯，與 2020 年 Pro Skater 1 + 2 分開；Switch 與 Switch 2 為不同商品。

別名：tony hawk's pro skater 3 + 4、thps 3+4、tony hawk 3+4

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2545710&l=english)：Steam 商店 API 回傳「Tony Hawk's™ Pro Skater™ 3 + 4」（app 2545710），平台 Windows，發售日 Jul 10, 2025，開發 Iron Galaxy Studios。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2545710&l=tchinese)：Steam 繁體中文商店名稱為「《Tony Hawk's™ Pro Skater™ 3 + 4》」。
- [官方平台來源](https://www.playstation.com/en-us/games/tony-hawks-pro-skater-3-4/)：PlayStation 美國頁跨世代版平台 PS4／PS5，發行 Activision。
- [官方平台來源](https://www.xbox.com/en-US/games/store/-/9N9J9NXPZR5C)：Xbox 商店跨世代版支援 Xbox One、Xbox Series X|S 與 PC，發行 Activision。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/Tony-Hawk-s-Pro-Skater-3-4-2765194.html)：任天堂英國頁 Nintendo Switch 版，發行 Activision，卡帶版 2025/7/11。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/Tony-Hawk-s-Pro-Skater-3-4-2797120.html)：任天堂英國頁另列 Nintendo Switch 2 版（提升解析度、影格率與 HDR），2025 年 7 月，發行 Activision。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2545710&l=english)：Steam 商店 API 的 recommendations.total 為 1572（2026-11-22 讀取）。

## 數碼寶貝物語 時空異客

major｜PC/PS5/Xbox Series X|S/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 16,228 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Media.Vision 開發、萬代南夢宮發行的數碼寶貝物語系列新作正篇。

平台範圍：已確認 PC、PS5、Xbox Series X|S、Switch、Switch 2。數碼寶貝物語系列新作正篇；Switch 與 Switch 2 版 2026-07 推出，兩者為不同商品、存檔與 DLC 不互通。

別名：digimon story time stranger、時空異客

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1984270&l=english)：Steam 商店 API 回傳「Digimon Story Time Stranger」（app 1984270），平台 Windows，發售日 Oct 2, 2025，開發 Media.Vision Inc.。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1984270&l=tchinese)：Steam 繁體中文商店名稱為「數碼寶貝物語 時空異客」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/digimon-story-time-stranger/)：PlayStation 台灣頁「數碼寶貝物語 時空異客」平台 PS5，發行 Bandai Namco Entertainment。
- [官方平台來源](https://www.xbox.com/en-US/games/store/-/9P54L8DTLC55)：Xbox 商店支援 Xbox Series X|S，開發 Media.Vision、發行 Bandai Namco，2025/10/3。
- [官方平台來源](https://www.nintendo.com/us/store/products/digimon-story-time-stranger-switch/)：任天堂美國頁 Nintendo Switch 版，2026/7/10，另售 Switch 2 版。
- [官方平台來源](https://www.nintendo.com/us/store/products/digimon-story-time-stranger-switch-2/)：任天堂美國頁 Nintendo Switch 2 版，2026/7/10，發行 Bandai Namco。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1984270&l=english)：Steam 商店 API 的 recommendations.total 為 16228（2026-11-22 讀取）。

## 無盡傳奇 Remastered

major｜PC/PS5/Xbox Series X|S/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 399 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：萬代南夢宮對 2011 年 PS3《無盡傳奇》的重製版。

平台範圍：已確認 PC、PS5、Xbox Series X|S、Switch。2011 年 PS3《無盡傳奇》的重製版，與原版及《無盡傳奇2》分開。

別名：tales of xillia remastered、無盡傳奇 重製版

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2246670&l=english)：Steam 商店 API 回傳「Tales of Xillia Remastered」（app 2246670），平台 Windows，發售日 Oct 30, 2025，開發 DOKIDOKI GROOVEWORKS, Inc.。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2246670&l=tchinese)：Steam 繁體中文商店名稱為「無盡傳奇 Remastered」。
- [官方平台來源](https://www.playstation.com/zh-hant-hk/games/tales-of-xillia-remastered/)：PlayStation 香港頁「無盡傳奇 Remastered」平台 PS5，發行 Bandai Namco Entertainment。
- [官方平台來源](https://www.xbox.com/en-US/games/store/-/9P3L8MZGKGGR)：Xbox 商店支援 Xbox Series X|S，開發 DOKIDOKI GROOVEWORKS、發行 Bandai Namco，2025/10/31。
- [官方平台來源](https://ec.nintendo.com/AU/en/titles/70010000068543)：任天堂澳洲 eShop 列出 Nintendo Switch 版，發行 Bandai Namco；Switch 2 為相容遊玩。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2246670&l=english)：Steam 商店 API 的 recommendations.total 為 399（2026-11-22 讀取）。

## 人中之龍 極３ / 人中之龍３外傳 Dark Ties

major｜PC/PS5/PS4/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 2,351 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：SEGA 的《人中之龍3》重製版與新外傳 Dark Ties 合輯。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Switch 2。《人中之龍3》重製版加上新外傳 Dark Ties 的合輯，與原版及 2019 年 Remastered 分開；沒有初代 Switch 版。

別名：yakuza kiwami 3 & dark ties、yakuza kiwami 3、人中之龍 極3、如龍 極3

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3937550&l=english)：Steam 商店 API 回傳「Yakuza Kiwami 3 & Dark Ties」（app 3937550），平台 Windows，發售日 Feb 11, 2026，開發 RGG Studio。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3937550&l=tchinese)：Steam 繁體中文商店名稱為「人中之龍 極３ / 人中之龍３外傳 Dark Ties」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/yakuza-kiwami-3-and-dark-ties/)：PlayStation 台灣頁「人中之龍 極３ / 人中之龍３外傳 Dark Ties」平台 PS4／PS5，發行 SEGA。
- [官方平台來源](https://www.xbox.com/en-us/games/store/yakuza-kiwami-3-dark-ties/9pl8b0t091sz)：Xbox 商店支援 Xbox Series X|S，開發 Ryu Ga Gotoku Studio、發行 SEGA，2026/2/12。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/Game-2924805.html)：任天堂英國頁 Nintendo Switch 2 版，發行 SEGA，2026/2/12。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3937550&l=english)：Steam 商店 API 的 recommendations.total 為 2351（2026-11-22 讀取）。

## NINJA GAIDEN 2 Black

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 3,385 則推薦（recommendations，2026-11-22 快照），Metacritic 81；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Team NINJA 以 Unreal Engine 5 重製的 2008 年《忍者外傳2》。

平台範圍：已確認 PC、PS5、Xbox Series X|S。2008 年《忍者外傳2》的 Unreal Engine 5 重製版，與 Sigma 2 及 1990 年 NES 二代分開。

別名：ninja gaiden 2 black、忍者外傳2 Black

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3287520&l=english)：Steam 商店 API 回傳「NINJA GAIDEN 2 Black」（app 3287520），平台 Windows，發售日 Jan 23, 2025，開發 KOEI TECMO GAMES CO., LTD.。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/ninja-gaiden-2-black/)：PlayStation 台灣頁平台 PS5，2025/1/23，發行 KOEI TECMO GAMES。
- [官方平台來源](https://www.xbox.com/en-US/games/store/-/9N51FH42VQDS)：Xbox 商店支援 PC 與 Xbox Series X|S，2025/1/23，發行 KOEI TECMO。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3287520&l=english)：Steam 商店 API 的 recommendations.total 為 3385，metacritic.score 為 81（2026-11-22 讀取）。

## 侏羅紀世界：進化 3

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 12,087 則推薦（recommendations，2026-11-22 快照），Metacritic 81；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Frontier Developments 開發發行的侏羅紀世界：進化系列第三作。

平台範圍：已確認 PC、PS5、Xbox Series X|S。系列第三作，與一、二代分開；Switch 2 上的是二代 Complete Edition，不是本作。

別名：jurassic world evolution 3、jwe3、侏羅紀世界 進化3

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2958130&l=english)：Steam 商店 API 回傳「Jurassic World Evolution 3」（app 2958130），平台 Windows，發售日 Oct 21, 2025，開發 Frontier Developments。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2958130&l=tchinese)：Steam 繁體中文商店名稱為「侏羅紀世界：進化 3」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/jurassic-world-evolution-3/)：PlayStation 台灣頁「侏羅紀世界：進化 3」平台 PS5，2025/10/21，發行 FRONTIER DEVELOPMENTS。
- [官方平台來源](https://www.xbox.com/en-US/games/store/jurassic-world-evolution-3/9NX7HCWL13Z9)：Xbox 商店支援 Xbox Series X|S 與 PC（Play Anywhere），2025/10/21，Frontier 開發發行。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2958130&l=english)：Steam 商店 API 的 recommendations.total 為 12087，metacritic.score 為 81（2026-11-22 讀取）。

## 美麗新世界 117：羅馬治世

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 12,819 則推薦（recommendations，2026-11-22 快照），Metacritic 84；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Ubisoft Mainz 開發的 Anno 系列羅馬時代新作。

平台範圍：已確認 PC、PS5、Xbox Series X|S。系列首次主機同步首發的正篇，不是 Anno 1800 主機版。

別名：anno 117 pax romana、anno 117、紀元117

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3274580&l=english)：Steam 商店 API 回傳「Anno 117: Pax Romana」（app 3274580），平台 Windows，發售日 Nov 12, 2025，開發 Ubisoft Mainz。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/anno-117-pax-romana/)：PlayStation 台灣頁「美麗新世界 117：羅馬治世」平台 PS5，2025/11/12，發行 Ubisoft。
- [官方平台來源](https://www.xbox.com/en-US/games/store/anno-117-pax-romana/9nrj3knt0jrk)：Xbox 商店支援 Xbox Series X|S，2025/11/13，Ubisoft 開發發行。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3274580&l=english)：Steam 商店 API 的 recommendations.total 為 12819，metacritic.score 為 84（2026-11-22 讀取）。

## Europa Universalis V

major｜PC｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 29,056 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Paradox Tinto 開發、Paradox Interactive 發行的歐陸風雲系列第五部正篇。

平台範圍：已確認 PC。歐陸風雲系列第五部正篇，《歐陸風雲4》的後繼作；只有 Windows PC。

別名：europa universalis v、eu5、歐陸風雲5

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3450310&l=english)：Steam 商店 API 回傳「Europa Universalis V」（app 3450310），平台 Windows，發售日 Nov 4, 2025，開發 Paradox Tinto。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3450310&l=english)：Steam 商店 API 的 recommendations.total 為 29056（2026-11-22 讀取）。

## 席德·梅爾的文明帝國VII

major｜PC/Mac/Linux/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2/iOS｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 45,849 則推薦（recommendations，2026-11-22 快照），Metacritic 79；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Firaxis 開發、2K 發行的文明帝國系列第七部正篇。

平台範圍：已確認 PC、Mac、Linux、PS5、PS4、Xbox Series X|S、Xbox One、Switch、Switch 2、iOS。Switch 與 Switch 2 為不同商品；iOS 為 Apple Arcade 版（需訂閱、無 DLC、不與 PC／主機互通）；Meta Quest 的 VR 版不在本目錄平台範圍。

別名：sid meier's civilization vii、civilization vii、civ 7、文明帝國7

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1295660&l=english)：Steam 商店 API 回傳「Sid Meier's Civilization VII」（app 1295660），平台 Windows／macOS／Linux，發售日 Feb 10, 2025，開發 Firaxis Games。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1295660&l=tchinese)：Steam 繁體中文商店名稱為「席德·梅爾的文明帝國VII」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/sid-meier-s-civilization-vii/)：PlayStation 台灣頁「席德·梅爾的文明帝國®VII」平台 PS4／PS5，2025/2/10，發行 Take-Two。
- [官方平台來源](https://www.xbox.com/en-US/games/store/sid-meier-s-civilization-vii/9NG6VZHN5GQL)：Xbox 商店支援 Xbox Series X|S 與 Xbox One，2025/2/11，開發 Firaxis、發行 2K。
- [官方平台來源](https://www.nintendo.com/en-ca/store/products/sid-meiers-civilization-vii-switch/)：任天堂加拿大頁 Nintendo Switch 版，2025/2/11，發行 2K。
- [官方平台來源](https://nintendo.com/us/store/products/sid-meiers-civilization-vii-nintendo-switch-2-edition-switch-2/)：任天堂美國頁「Nintendo Switch 2 Edition」，2025/6/5，發行 2K。
- [官方平台來源](https://www.apple.com/newsroom/2026/01/popular-pc-franchise-civilization-comes-to-apple-arcade-on-february-5/)：Apple Newsroom：Civilization VII Arcade Edition 於 2026-02-05 登上 Apple Arcade，支援 iPhone、iPad 與 Mac；App Store 由 2K 販售。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1295660&l=english)：Steam 商店 API 的 recommendations.total 為 45849，metacritic.score 為 79（2026-11-22 讀取）。

## 雙點博物館

major｜PC/Mac/Linux/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 10,054 則推薦（recommendations，2026-11-22 快照），Metacritic 84；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Two Point Studios 開發、SEGA 發行的雙點系列第三作。

平台範圍：已確認 PC、Mac、Linux、PS5、Xbox Series X|S、Switch 2。雙點系列第三作；任天堂只有 Switch 2 版（2025-10-28）。

別名：two point museum

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2185060&l=english)：Steam 商店 API 回傳「Two Point Museum」（app 2185060），平台 Windows／macOS／Linux，發售日 Mar 4, 2025，開發 Two Point Studios。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2185060&l=tchinese)：Steam 繁體中文商店名稱為「雙點博物館」。
- [官方平台來源](https://www.playstation.com/en-us/games/two-point-museum/)：PlayStation 美國頁「Two Point Museum: Explorer Edition」平台 PS5，發行 SEGA。
- [官方平台來源](https://www.xbox.com/en-US/games/store/-/9NFHRF1M4W3Z)：Xbox 商店支援 Xbox Series X|S，2025/3/4，開發 Two Point Studios、發行 SEGA。
- [官方平台來源](https://www.nintendo.com/us/store/products/two-point-museum-switch-2/)：任天堂美國頁 Nintendo Switch 2 版，2025/10/28，發行 SEGA。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2185060&l=english)：Steam 商店 API 的 recommendations.total 為 10054，metacritic.score 為 84（2026-11-22 讀取）。

## inZOI

major｜PC/Mac｜early-access｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 30,807 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：KRAFTON 旗下 inZOI Studio 開發的生活模擬，目前為搶先體驗。

平台範圍：已確認 PC、Mac（搶先體驗）。PC 仍為搶先體驗；官方論壇 2026-05-15 公告 PS5 版延至 2027 上半年，不列入平台；Xbox 版未公布。

別名：inzoi

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2456740&l=english)：Steam 商店 API 回傳「inZOI」（app 2456740），平台 Windows／macOS，發售日 Mar 27, 2025，類型含搶先體驗，開發 inZOI Studio。
- [官方平台來源](https://apps.apple.com/us/app/inzoi/id6742821288)：Mac App Store 由 KRAFTON 販售的 inZOI，僅支援 Mac（macOS 15、Apple M1 以上）；Steam 系統需求也列 macOS。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2456740&l=english)：Steam 商店 API 的 recommendations.total 為 30807（2026-11-22 讀取）。

## Halo: Campaign Evolved

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 13,077 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Halo Studios 對 2001 年 Halo: Combat Evolved 戰役的全面重製。

平台範圍：已確認 PC、PS5、Xbox Series X|S。2001 年 Halo: Combat Evolved 戰役的全面重製（含 3 個新前傳任務、無對戰模式），與 2011 年 Anniversary 及 Master Chief Collection 分開；系列首次登上 PlayStation。

別名：halo campaign evolved

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2806050&l=english)：Steam 商店 API 回傳「Halo: Campaign Evolved」（app 2806050），平台 Windows，發售日 Jul 28, 2026，開發 Halo Studios。
- [官方平台來源](https://www.playstation.com/en-us/games/halo-campaign-evolved/)：PlayStation 美國頁平台 PS5，2026/7/28，發行 Microsoft Corporation。
- [官方平台來源](https://www.xbox.com/en-US/games/store/halo-campaign-evolved/9N683TDT5M7R)：Xbox 商店支援 Xbox Series X|S 與 PC（Play Anywhere），開發 Halo Studios、發行 Xbox Game Studios。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2806050&l=english)：Steam 商店 API 的 recommendations.total 為 13077（2026-11-22 讀取）。

## STAR WARS 零號連隊

major｜PC/PS5/Xbox Series X|S｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 23,728 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Bit Reactor 開發、EA 發行的星際大戰回合制戰術作品。

平台範圍：已確認 PC、PS5、Xbox Series X|S。複製人戰爭末期背景的單人回合制戰術遊戲；沒有 Switch 版。

別名：star wars zero company、zero company

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2075800&l=english)：Steam 商店 API 回傳「STAR WARS Zero Company™」（app 2075800），平台 Windows，發售日 Aug 27, 2026，開發 Bit Reactor。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2075800&l=tchinese)：Steam 繁體中文商店名稱為「STAR WARS 零號連隊™」。
- [官方平台來源](https://www.playstation.com/zh-hant-tw/games/star-wars-zero-company/)：PlayStation 台灣頁「STAR WARS 零號連隊™」平台 PS5，2026/8/27。
- [官方平台來源](https://www.xbox.com/en-US/games/store/star-wars-zero-company/9PPT228DZK4N)：Xbox 商店支援 Xbox Series X|S，2026/8/27，開發 Bit Reactor、發行 Electronic Arts。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2075800&l=english)：Steam 商店 API 的 recommendations.total 為 23728（2026-11-22 讀取）。

## Katana ZERO

indie｜PC/Mac/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 66,731 則推薦（recommendations，2026-11-22 快照），Metacritic 83；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Askiisoft 開發、Devolver Digital 發行的新黑色動作作品。

平台範圍：已確認 PC、Mac、Xbox One、Switch。Netflix 手機版已於 2025 年下架，App Store 與 Google Play 頁面皆為 404，不列手機平台；未找到 PlayStation 版。

別名：katana zero、武士 零

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=460950&l=english)：Steam 商店 API 回傳「Katana ZERO」（app 460950），平台 Windows／macOS，發售日 Apr 18, 2019，開發 Askiisoft。
- [官方平台來源](https://ec.nintendo.com/apps/010029600D56A000/NZ)：任天堂紐西蘭 eShop 列出 Katana ZERO，發行 Devolver Digital，支援平台 Nintendo Switch。
- [官方平台來源](https://www.xbox.com/en-US/games/store/katana-zero/9NXP19FZ7DZ4)：Xbox 商店主機版，Devolver Digital，2020/10/15；Xbox Series X|S 無最佳化或 Smart Delivery 標章，屬向下相容。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=460950&l=english)：Steam 商店 API 的 recommendations.total 為 66731，metacritic.score 為 83（2026-11-22 讀取）。

## Return of the Obra Dinn

indie｜PC/Mac/PS4/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 33,024 則推薦（recommendations，2026-11-22 快照），Metacritic 89；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Lucas Pope 開發的保險調查推理遊戲。

平台範圍：已確認 PC、Mac、PS4、Xbox One、Switch。主機版 2019-10-18 推出；沒有手機版。

別名：return of the obra dinn、obra dinn

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=653530&l=english)：Steam 商店 API 回傳「Return of the Obra Dinn」（app 653530），平台 Windows／macOS，發售日 Oct 18, 2018，開發 Lucas Pope。
- [官方平台來源](https://store.playstation.com/en-us/product/UP2879-CUSA16867_00-ROTODBASEGAME001)：PlayStation Store PS4 版，3909 LLC，2019/10/18；PS5 為向下相容。
- [官方平台來源](https://www.xbox.com/en-us/games/store/-/9N185QL77D27)：Xbox 商店，3909 開發發行，2019/10/18；Xbox Series X|S 屬向下相容。
- [官方平台來源](https://ec.nintendo.com/apps/010032E00E6E2000/NZ)：任天堂紐西蘭 eShop 列出 Nintendo Switch 版，發行 3909。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=653530&l=english)：Steam 商店 API 的 recommendations.total 為 33024，metacritic.score 為 89（2026-11-22 讀取）。

## Papers, Please

indie｜PC/Mac/Linux/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 73,879 則推薦（recommendations，2026-11-22 快照），Metacritic 85；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Lucas Pope 開發的邊境檢查官模擬。

平台範圍：已確認 PC、Mac、Linux、iOS、Android。官網只列 PC／Mac／Linux 與 iOS／Android；PS Vita 舊版不在本目錄平台範圍。

別名：papers please、請出示文件

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=239030&l=english)：Steam 商店 API 回傳「Papers, Please」（app 239030），平台 Windows／macOS／Linux，發售日 Aug 8, 2013，開發 Lucas Pope。
- [官方平台來源](https://apps.apple.com/us/app/papers-please/id935216956)：App Store 美國區，販售者 3909 LLC，支援 iPhone 與 iPad。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.llc3909.papersplease)：Google Play 頁面標題「Papers, Please - Apps on Google Play」；官方網站 papersplea.se 與 3909 開發者頁皆列出此 App。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=239030&l=english)：Steam 商店 API 的 recommendations.total 為 73879，metacritic.score 為 85（2026-11-22 讀取）。

## FTL: Faster Than Light

indie｜PC/Mac/Linux/iOS｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 63,140 則推薦（recommendations，2026-11-22 快照），Metacritic 84；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Subset Games 開發的太空船 Roguelike，含免費 Advanced Edition 擴充。

平台範圍：已確認 PC、Mac、Linux、iOS。Advanced Edition 是免費擴充，屬同一商品；iOS 版只支援 iPad；沒有主機或 Android 版。

別名：ftl faster than light、ftl、超越光速

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=212680&l=english)：Steam 商店 API 回傳「FTL: Faster Than Light」（app 212680），平台 Windows／macOS／Linux，發售日 Sep 14, 2012，開發 Subset Games。
- [官方平台來源](https://apps.apple.com/us/app/ftl-faster-than-light/id833951143)：App Store 美國區，販售者 Subset Games，僅相容 iPad 2 以上（不支援 iPhone），含免費 Advanced Edition 擴充。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=212680&l=english)：Steam 商店 API 的 recommendations.total 為 63140，metacritic.score 為 84（2026-11-22 讀取）。

## Into the Breach

indie｜PC/Mac/Linux/Switch/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 19,210 則推薦（recommendations，2026-11-22 快照），Metacritic 90；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Subset Games 開發的回合制機甲戰術。

平台範圍：已確認 PC、Mac、Linux、Switch、iOS、Android。手機版為 Netflix 會員專屬版（Netflix 發行、Subset Games 授權）；Xbox 商店的 Into the Breach 只有 PC 版，沒有 Xbox 主機版；沒有 PlayStation 版。

別名：into the breach、陷陣之志

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=590380&l=english)：Steam 商店 API 回傳「Into the Breach」（app 590380），平台 Windows／macOS／Linux，發售日 Feb 27, 2018，開發 Subset Games。
- [官方平台來源](https://www.nintendo.com/us/store/products/into-the-breach-switch/)：任天堂美國頁 Nintendo Switch 版，2018/8/28，發行 Subset Games。
- [官方平台來源](https://apps.apple.com/us/app/into-the-breach/id1616542180)：App Store 美國區，販售者 Netflix（© Subset Games），註明 Netflix 會員專屬，支援 iPhone 與 iPad。
- [官方平台來源](https://www.netflix.com/games/81517325)：Netflix 官方遊戲頁列出 App Store 與 Google Play（Android 8 以上）版本，未見下架公告。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=590380&l=english)：Steam 商店 API 的 recommendations.total 為 19210，metacritic.score 為 90（2026-11-22 讀取）。

## Spelunky 2

indie｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 19,873 則推薦（recommendations，2026-11-22 快照），Metacritic 91；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Mossmouth 開發的平台 Roguelike 續作。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch。續作；與 2012 年 Spelunky HD 重製及 2008 年 Spelunky Classic 分開；PS4 版 2020-09-15 先推出，Steam 2020-09-29。

別名：spelunky 2、洞穴探險2

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=418530&l=english)：Steam 商店 API 回傳「Spelunky 2」（app 418530），平台 Windows，發售日 Sep 29, 2020，開發 Mossmouth、BlitWorks。
- [官方平台來源](https://store.playstation.com/en-us/concept/10001266)：PlayStation Store 平台欄 PS4、PS5，發行 Mossmouth；原生 PS5 版 2025/3/6 加入。
- [官方平台來源](https://www.xbox.com/en-US/games/store/spelunky-2/9PM85QK6C13H)：Xbox 商店支援 Xbox One、Xbox Series X|S、PC，有「Optimized for Xbox Series X|S」與 Smart Delivery 標章，2022/1/13。
- [官方平台來源](https://www.nintendo.com/us/store/products/spelunky-2-switch/)：任天堂美國頁 Nintendo Switch 版，2021/8/26，發行 Mossmouth。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=418530&l=english)：Steam 商店 API 的 recommendations.total 為 19873，metacritic.score 為 91（2026-11-22 讀取）。

## Neon White

indie｜PC/PS5/PS4/Xbox Series X|S/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 17,467 則推薦（recommendations，2026-11-22 快照），Metacritic 89；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Angel Matrix 開發、Annapurna Interactive 發行的卡牌速通 FPS。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Xbox One、Switch。PlayStation 版 2022-12、Xbox 版 2024-07 較晚推出；沒有手機版。

別名：neon white

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1533420&l=english)：Steam 商店 API 回傳「Neon White」（app 1533420），平台 Windows，發售日 Jun 16, 2022，開發 Angel Matrix。
- [官方平台來源](https://www.nintendo.com/us/store/products/neon-white-switch/)：任天堂美國頁 Nintendo Switch 版，2022/6/16，發行 Annapurna Interactive。
- [官方平台來源](https://store.playstation.com/en-us/concept/10006032)：PlayStation Store 平台 PS4 與 PS5，2022/12/13，發行 Annapurna Interactive。
- [官方平台來源](https://www.xbox.com/en-us/games/store/neon-white/9MTGVHF37DFK)：Xbox 商店支援 Xbox One、Xbox Series X|S、PC，有最佳化與 Smart Delivery 標章，2024/7/11。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1533420&l=english)：Steam 商店 API 的 recommendations.total 為 17467，metacritic.score 為 89（2026-11-22 讀取）。

## A Short Hike

indie｜PC/Mac/Linux/PS4/Xbox One/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 19,561 則推薦（recommendations，2026-11-22 快照），Metacritic 82；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：adamgryu 開發的小島健行探索遊戲。

平台範圍：已確認 PC、Mac、Linux、PS4、Xbox One、Switch。官網列出 Switch、PS4、Xbox One 與 PC 商店；沒有手機版。

別名：a short hike

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1055540&l=english)：Steam 商店 API 回傳「A Short Hike」（app 1055540），平台 Windows／macOS／Linux，發售日 Jul 30, 2019，開發 adamgryu。
- [官方平台來源](https://www.nintendo.com/us/store/products/a-short-hike-switch/)：任天堂美國頁 Nintendo Switch 版，2020/8/18，發行 Whippoorwill。
- [官方平台來源](https://www.playstation.com/en-us/games/a-short-hike/)：PlayStation 官方頁 PS4 版，Whippoorwill，2021/11/16；PS5 為向下相容。
- [官方平台來源](https://www.xbox.com/en-us/games/store/a-short-hike/9nk78df207sd)：Xbox 商店，發行 Whippoorwill，2021/11/16；Xbox Series X|S 屬向下相容。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1055540&l=english)：Steam 商店 API 的 recommendations.total 為 19561，metacritic.score 為 82（2026-11-22 讀取）。

## Spiritfarer

indie｜PC/Mac/Linux/PS4/Xbox One/Switch/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 47,807 則推薦（recommendations，2026-11-22 快照），Metacritic 84；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Thunder Lotus Games 開發的靈魂擺渡經營冒險，現行版本為 Farewell Edition。

平台範圍：已確認 PC、Mac、Linux、PS4、Xbox One、Switch、iOS、Android。現行 PC／主機商品為 Farewell Edition；手機版為 Netflix 會員專屬版。

別名：spiritfarer、spiritfarer farewell edition、靈魂擺渡人

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=972660&l=english)：Steam 商店 API 回傳「Spiritfarer®: Farewell Edition」（app 972660），平台 Windows／macOS／Linux，發售日 Aug 18, 2020，開發 Thunder Lotus。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=972660&l=tchinese)：Steam 繁體中文商店名稱為「Spiritfarer®: Farewell 版」。
- [官方平台來源](https://www.nintendo.com/us/store/products/spiritfarer-switch/)：任天堂美國頁 Nintendo Switch 版，2020/8/18，Thunder Lotus Games。
- [官方平台來源](https://store.playstation.com/zh-hant-hk/concept/10000752)：PlayStation Store 香港頁「Spiritfarer：Farewell 版」只列 PS4，PS5 為向下相容。
- [官方平台來源](https://www.xbox.com/en-us/games/store/spiritfarer-farewell-edition/9ng5l58fd3x5)：Xbox 商店「Spiritfarer: Farewell Edition」，Thunder Lotus，2020/8/18；Xbox Series X|S 屬向下相容。
- [官方平台來源](https://apps.apple.com/us/app/id1610577424)：App Store「Spiritfarer: Netflix Edition」，販售者 Netflix，Netflix 會員專屬，支援 iPhone 與 iPad。
- [官方平台來源](https://www.netflix.com/games/81554162)：Netflix 官方遊戲頁列出 App Store 與 Google Play（Android 8 以上）版本，未見下架公告。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=972660&l=english)：Steam 商店 API 的 recommendations.total 為 47807，metacritic.score 為 84（2026-11-22 讀取）。

## Unpacking

indie｜PC/Mac/Linux/PS5/PS4/Xbox One/Switch/iOS/Android｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 35,520 則推薦（recommendations，2026-11-22 快照），Metacritic 83；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Witch Beam 開發的搬家拆箱擺放解謎。

平台範圍：已確認 PC、Mac、Linux、PS5、PS4、Xbox One、Switch、iOS、Android。Apple Arcade 的「Unpacking+」是另一個訂閱制商品，不併入；Xbox Series X|S 屬向下相容。

別名：unpacking

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1135690&l=english)：Steam 商店 API 回傳「Unpacking」（app 1135690），平台 Windows／macOS／Linux，發售日 Nov 1, 2021，開發 Witch Beam。
- [官方平台來源](https://www.nintendo.com/us/store/products/unpacking-switch/)：任天堂美國頁 Nintendo Switch 版，2021/11/2，開發 Witch Beam。
- [官方平台來源](https://store.playstation.com/en-us/concept/10004687)：PlayStation Store（官網連結）平台 PS4 與 PS5，2022/5/10。
- [官方平台來源](https://www.xbox.com/en-us/games/store/unpacking/9NH5HN11FG4M)：Xbox 商店，Humble Games／Witch Beam，2021/11/2；Xbox Series X|S 屬向下相容。
- [官方平台來源](https://apps.apple.com/us/app/unpacking/id6450058135)：App Store（官網連結），付費 App，支援 iPhone 與 iPad。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.humblebundle.unpacking)：Google Play（官網連結）頁面標題「Unpacking - Apps on Google Play」。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1135690&l=english)：Steam 商店 API 的 recommendations.total 為 35520，metacritic.score 為 83（2026-11-22 讀取）。

## Darkest Dungeon II

indie｜PC/Mac/PS5/PS4/Xbox Series X|S/Xbox One/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 24,622 則推薦（recommendations，2026-11-22 快照），Metacritic 81；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Red Hook Studios 開發的《暗黑地牢》續作，改為驛馬車公路 Roguelike。

平台範圍：已確認 PC、Mac、PS5、PS4、Xbox Series X|S、Xbox One、Switch、Switch 2。《暗黑地牢》續作，改為驛馬車公路 Roguelike；Switch 2 Edition 2026-10-22 推出。

別名：darkest dungeon ii、darkest dungeon 2、暗黑地牢2、黑暗地牢2

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1940340&l=english)：Steam 商店 API 回傳「Darkest Dungeon® II」（app 1940340），平台 Windows／macOS，發售日 May 8, 2023，開發 Red Hook Studios。
- [官方平台來源](https://store.playstation.com/en-us/product/UP2619-PPSA19590_00-0191103846959805)：PlayStation Store 美國頁「Darkest Dungeon II PS4 & PS5」平台 PS4／PS5，2024/7/15，發行 Red Hook Studios。
- [官方平台來源](https://www.xbox.com/en-US/games/store/darkest-dungeon-ii/9n0q3tgwhg1f)：Xbox 商店支援 Xbox One、Xbox Series X|S 與 PC，2024/7/15，Red Hook Studios 開發發行。
- [官方平台來源](https://www.nintendo.com/us/store/products/darkest-dungeon-ii-switch)：任天堂美國頁 Nintendo Switch 版，2024/7/15，Red Hook Studios；另售 Switch 2 版與升級包。
- [官方平台來源](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-Edition/Darkest-Dungeon-II-Nintendo-Switch-2-Edition-3226401.html)：任天堂英國頁「Darkest Dungeon II – Nintendo Switch 2 Edition」，2026/10/22，支援 Joy-Con 2 滑鼠操作。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1940340&l=english)：Steam 商店 API 的 recommendations.total 為 24622，metacritic.score 為 81（2026-11-22 讀取）。

## Pipistrello and the Cursed Yoyo

indie｜PC/PS5/PS4/Xbox Series X|S/Switch/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 2,078 則推薦（recommendations，2026-11-22 快照），Metacritic 87；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Pocket Trap 開發、PM Studios 發行的俯視角溜溜球動作冒險。

平台範圍：已確認 PC、PS5、PS4、Xbox Series X|S、Switch、Switch 2。原創俯視角溜溜球動作冒險。

別名：pipistrello and the cursed yoyo、pipistrello

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2870350&l=english)：Steam 商店 API 回傳「Pipistrello and the Cursed Yoyo」（app 2870350），平台 Windows，發售日 May 28, 2025，開發 Pocket Trap。
- [官方平台來源](https://store.playstation.com/en-us/product/UP2011-CUSA49517_00-PIPISTRELLO00000)：PlayStation Store 美國頁平台 PS4／PS5，2025/5/28，發行 PM Studios。
- [官方平台來源](https://www.xbox.com/en-us/games/store/pipistrello-and-the-cursed-yoyo/9n9lk61ws2ch)：Xbox 商店只支援 Xbox Series X|S，2025/5/28，開發 Pocket Trap、發行 PM Studios。
- [官方平台來源](https://ec.nintendo.com/AU/en/titles/70010000083560)：任天堂澳洲 eShop 列出 Nintendo Switch 版，發行 PM Studios。
- [官方平台來源](https://ec.nintendo.com/AU/en/titles/70010000131278)：任天堂澳洲 eShop 另列「Pipistrello and the Cursed Yoyo, Nintendo Switch 2 Edition」，提升解析度、影格率與 HDR。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2870350&l=english)：Steam 商店 API 的 recommendations.total 為 2078，metacritic.score 為 87（2026-11-22 讀取）。

## Sword of the Sea

indie｜PC/PS5/Xbox Series X|S/Switch 2｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 1,720 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Giant Squid 開發的海上滑行冒險。

平台範圍：已確認 PC、PS5、Xbox Series X|S、Switch 2。《ABZÛ》《The Pathless》團隊新作；Xbox 與 Switch 2 版 2026-10-29 推出。

別名：sword of the sea

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2453160&l=english)：Steam 商店 API 回傳「Sword of the Sea」（app 2453160），平台 Windows，發售日 Aug 19, 2025，開發 Giant Squid。
- [官方平台來源](https://store.playstation.com/en-us/concept/10011227)：PlayStation Store 只列 PS5（無 PS4），2025/8/19，發行 Giant Squid。
- [官方平台來源](https://www.xbox.com/en-US/games/store/sword-of-the-sea/9n65wlp4cscl)：Xbox 商店只支援 Xbox Series X|S，2026/10/29，開發 Giant Squid、發行 Fictions。
- [官方平台來源](https://www.nintendo.com/us/store/products/sword-of-the-sea-switch-2/)：任天堂美國頁 Nintendo Switch 2 版，2026/10/29，發行 Fictions。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2453160&l=english)：Steam 商店 API 的 recommendations.total 為 1720（2026-11-22 讀取）。

## Baby Steps

indie｜PC/PS5｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 2,423 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Gabe Cuzzillo、Maxi Boch 與 Bennett Foddy 開發、Devolver Digital 發行的物理走路遊戲。

平台範圍：已確認 PC、PS5。《Ape Out》與《Getting Over It》作者的物理走路遊戲。

別名：baby steps、一步一腳印

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1281040&l=english)：Steam 商店 API 回傳「Baby Steps」（app 1281040），平台 Windows，發售日 Sep 23, 2025，開發 Gabe Cuzzillo、Maxi Boch、Bennett Foddy。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1281040&l=tchinese)：Steam 繁體中文商店名稱為「一步一腳印」。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10008588)：PlayStation Store 台灣頁「Baby Steps」平台 PS5，2025/9/23，發行 DEVOLVER DIGITAL。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=1281040&l=english)：Steam 商店 API 的 recommendations.total 為 2423（2026-11-22 讀取）。

## despelote

indie｜PC/Mac/PS5/PS4/Xbox Series X|S/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 1,067 則推薦（recommendations，2026-11-22 快照），Metacritic 89；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Julián Cordero 與 Sebastian Valbuena 開發、Panic 發行的 2001 年基多足球生活小品。

平台範圍：已確認 PC、Mac、PS5、PS4、Xbox Series X|S、Switch。2001 年基多為背景的足球生活小品；Mac 版經 Mac App Store 與 Steam 販售，沒有 iOS 版。

別名：despelote

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2367820&l=english)：Steam 商店 API 回傳「despelote」（app 2367820），平台 Windows／macOS，發售日 May 1, 2025，開發 Julián Cordero、Sebastian Valbuena。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/concept/10007987)：PlayStation Store 台灣頁「despelote」平台 PS4／PS5，2025/5/1，發行 Panic。
- [官方平台來源](https://www.xbox.com/en-US/games/store/despelote/9pcs3q4jscvv)：Xbox 商店只支援 Xbox Series X|S，2025/5/1，發行 Panic。
- [官方平台來源](https://despelote.game/presskit/)：官方新聞資料：Nintendo Switch 版 2025-12-11 推出，其餘平台 2025-05-01；官網 Switch 連結指向任天堂美國商品頁。
- [官方平台來源](https://apps.apple.com/us/app/despelote/id6747992743)：Mac App Store 由 Panic 販售的 despelote，僅支援 Mac。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2367820&l=english)：Steam 商店 API 的 recommendations.total 為 1067，metacritic.score 為 89（2026-11-22 讀取）。

## Lumines Arise

indie｜PC/PS5｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 867 則推薦（recommendations，2026-11-22 快照），Metacritic 87；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Enhance 與 Monstars 開發的 Lumines 系列新作，不是 Lumines Remastered。

平台範圍：已確認 PC、PS5。《俄羅斯方塊效應》團隊的 Lumines 新作，不是 2018 年 Lumines Remastered；VR 是遊玩模式，不是另一平台。

別名：lumines arise

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2370000&l=english)：Steam 商店 API 回傳「Lumines Arise」（app 2370000），平台 Windows，發售日 Nov 11, 2025，開發 Enhance、Monstars Inc.。
- [官方平台來源](https://store.playstation.com/zh-hant-tw/product/UP0751-PPSA27236_00-LUMINESARISE0001)：PlayStation Store 台灣頁「Lumines Arise」平台 PS5（可用 PS VR2），2025/11/11，發行 Fictions；官網只列 PS5／PS VR2 與 Steam。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2370000&l=english)：Steam 商店 API 的 recommendations.total 為 867，metacritic.score 為 87（2026-11-22 讀取）。

## Rift of the NecroDancer

indie｜PC/Switch｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 6,165 則推薦（recommendations，2026-11-22 快照）；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Brace Yourself Games 開發的 NecroDancer 節奏遊戲外傳，與 Crypt of the NecroDancer 不同。

平台範圍：已確認 PC、Switch。NecroDancer 宇宙的節奏遊戲外傳，與 2015 年 Crypt of the NecroDancer 及 Cadence of Hyrule 不同。

別名：rift of the necrodancer

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=2073250&l=english)：Steam 商店 API 回傳「Rift of the NecroDancer」（app 2073250），平台 Windows，發售日 Feb 5, 2025，開發 Brace Yourself Games、Tic Toc Studios Inc.。
- [官方平台來源](https://www.nintendo.com/us/store/products/rift-of-the-necrodancer-switch/)：任天堂美國頁 Nintendo Switch 版，2025/3/27，Brace Yourself Games 開發發行；Switch 2 為相容遊玩。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=2073250&l=english)：Steam 商店 API 的 recommendations.total 為 6165（2026-11-22 讀取）。

## 蘇丹的遊戲

indie｜PC/Mac/Linux｜released｜平台查核verified

熱度依據：Steam 商店 API 顯示累積 25,410 則推薦（recommendations，2026-11-22 快照），Metacritic 83；作為收錄優先依據，非銷量或當日排行。本輪 Steam 評論 API 拒絕自動請求，未取得正評比例。

身分：Double Cross 開發、2P Games 發行的卡牌敘事 RPG。

平台範圍：已確認 PC、Mac、Linux。卡牌敘事 RPG；另有 GameTree 發行的手機版，商店頁未提及原開發商，本輪無法確認為官方授權，不列入平台。

別名：sultan's game

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3117820&l=english)：Steam 商店 API 回傳「Sultan's Game」（app 3117820），平台 Windows／macOS／Linux，發售日 Mar 30, 2025，開發 Double Cross。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=3117820&l=tchinese)：Steam 繁體中文商店名稱為「蘇丹的遊戲」。

- [收錄依據來源](https://store.steampowered.com/api/appdetails?appids=3117820&l=english)：Steam 商店 API 的 recommendations.total 為 25410，metacritic.score 為 83（2026-11-22 讀取）。

## 漫威：瞬戰超能

mobile｜PC/iOS/Android｜released｜平台查核verified

熱度依據：Steam API 未提供推薦數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Second Dinner 開發的漫威卡牌對戰，全球同一版本。

平台範圍：已確認 PC、iOS、Android。全球同一版本，手機與 Steam 進度互通；Apple Silicon Mac 執行 iPad App 不另列 Mac。

別名：marvel snap

- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1997040&l=english)：Steam 商店 API 回傳「MARVEL SNAP」（app 1997040），平台 Windows，發售日 Aug 22, 2023，開發 Second Dinner Studios, Inc.。
- [官方平台來源](https://store.steampowered.com/api/appdetails?appids=1997040&l=tchinese)：Steam 繁體中文商店名稱為「漫威：瞬戰超能」。
- [官方平台來源](https://apps.apple.com/tw/app/marvel-snap/id1592081003)：App Store 台灣區「漫威：瞬戰超能」，販售者 Second Dinner Studios，免費含內購，近日仍有更新。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.nvsgames.snap&hl=zh_TW&gl=TW)：Google Play 台灣區名稱「漫威：瞬戰超能」，開發者 Second Dinner；官網 marvelsnap.com 連結同一套件。
- [官方平台來源](https://store.steampowered.com/app/1997040/MARVEL_SNAP/)：Steam 商店頁 MARVEL SNAP，Second Dinner Studios，2022-10-18 搶先體驗、2023-08-22 正式版，僅 Windows。

- [收錄依據來源](https://store.steampowered.com/app/1997040/MARVEL_SNAP/)：官方來源確認「漫威：瞬戰超能」已於 2022-10-18 發售，作為收錄依據；未取得可比較的人氣數字。

## 聯盟戰棋

mobile｜PC/Mac/iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Riot Games 的自走棋對戰，PC／Mac 在英雄聯盟用戶端內、手機為獨立 App。

平台範圍：已確認 PC、Mac、iOS、Android。PC／Mac 版在英雄聯盟用戶端內，手機版為獨立 App，兩者共用 Riot 帳號；台灣 iOS 上架者為台灣大哥大；手機版全球 2020-03-19、台灣 2023-11-22 上線。

別名：teamfight tactics、tft、雲頂之弈

- [官方平台來源](https://www.leagueoflegends.com/zh-tw/download/)：英雄聯盟台灣官方下載頁提供 Windows 與 Mac 用戶端；聯盟戰棋 PC 版在此用戶端內遊玩。
- [官方平台來源](https://apps.apple.com/tw/app/id1501301571)：App Store 台灣區「TFT: 聯盟戰棋」，販售者台灣大哥大，客服與隱私連結指向 Riot Games，近日仍有更新。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.riotgames.league.teamfighttactics&hl=zh_TW&gl=TW)：Google Play 台灣區「TFT：《聯盟戰棋》」，開發者 Riot Games。
- [官方平台來源](https://teamfighttactics.leagueoflegends.com/en-ph/news/announcements/play-teamfight-tactics-mobile-now)：Riot 公告手機版於 2023-11-22 在台灣、香港、澳門與東南亞上線。

- [收錄依據來源](https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/teamfight-tactics-mobile-details/)：官方來源確認「聯盟戰棋」已於 2020-03-19 發售，作為收錄依據；未取得可比較的人氣數字。

## 女神異聞錄：夜幕魅影

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：艾玩天地代理的台港澳版本；SEGA 發行的國際版與中國版是不同商品，不合併。

平台範圍：已確認 iOS、Android。台港澳版本，與 SEGA 發行的國際版「Persona5: The Phantom X」（2025-06 上市，含 Steam）及中國版是不同商品，不合併；國際版在台灣 App Store 無法取得。

別名：p5x、persona5 the phantom x、persona 5 the phantom x

- [官方平台來源](https://apps.apple.com/tw/app/id1613742212)：App Store 台灣區「女神異聞錄：夜幕魅影」，販售者 IWPLAY WORLD，說明艾玩天地為台港澳代理，近期仍有更新。
- [官方平台來源](https://play.google.com/store/apps/details?id=tw.com.iwplay.p5x)：Google Play「女神異聞錄：夜幕魅影」，開發者 IWPLAY WORLD。

- [收錄依據來源](https://apps.apple.com/tw/app/id1613742212)：官方商店頁確認「女神異聞錄：夜幕魅影」目前上架營運，作為收錄依據；官方未公布上市日期，也未取得可比較的人氣數字。

## 天命：群星

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：NetEase 經 Bungie 授權開發、龍邑代理的台灣版本；國際版是另外的商店上架，不合併。

平台範圍：已確認 iOS、Android。Destiny: Rising 的台灣代理版本；國際版（NetEase 直營上架）不在台灣 App Store 上架，不合併；官網的 PC 遊玩是模擬器，不列 PC。

別名：destiny rising

- [官方平台來源](https://apps.apple.com/tw/app/id6744052056)：App Store 台灣區「天命：群星」，開發者 LongE，說明註明台灣遊戲代理龍邑股份有限公司、© NetEase。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.netease.g108hmt&hl=zh_TW&gl=TW)：Google Play 台灣區「天命：群星」，開發者 LongE Play，為官網台灣下載連結指向的套件。
- [官方平台來源](https://www.playdestinyrising.com/tw/)：官網台灣頁標示台灣遊戲代理龍邑股份有限公司、「現已上線」，並有 2026-11 維護公告。

- [收錄依據來源](https://www.neteasegames.com/news/20250828/37000_1256677.html)：官方來源確認「天命：群星」已於 2025-08-28 發售，作為收錄依據；未取得可比較的人氣數字。

## Royal Kingdom

mobile｜iOS/Android｜released｜平台查核verified

熱度依據：非 Steam 作品，無統一公開評論數；收錄依據為官方發行規模與編輯判斷（2026-11-22），非銷量、討論量或排行。

身分：Dream Games 開發的三消益智，與同工作室的 Royal Match 是不同作品。

平台範圍：已確認 iOS、Android。《Royal Match》同工作室的另一款三消遊戲；全球同一版本；官方來源未公布正式上市日期。

別名：royal kingdom

- [官方平台來源](https://apps.apple.com/tw/app/id1606549505)：App Store 台灣區「Royal Kingdom」，開發者 Dream Games，免費含內購，近日仍有更新，益智免費榜第 12 名（查核當時）。
- [官方平台來源](https://play.google.com/store/apps/details?id=com.dreamgames.royalkingdom&hl=zh_TW&gl=TW)：Google Play 台灣區「Royal Kingdom」，開發者 Dream Games。

- [收錄依據來源](https://apps.apple.com/tw/app/id1606549505)：官方商店頁確認「Royal Kingdom」目前上架營運，作為收錄依據；官方未公布上市日期，也未取得可比較的人氣數字。
