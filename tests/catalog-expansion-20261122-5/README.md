# 同人倖存者網頁遊戲擴充（第七輪）

查核日期：2026-11-22。新增6款近期爆紅的非官方同人倖存者網頁遊戲（1款仍為測試版；皆未經版權方授權，可能隨時下架），1225 → 1231款。原1225款逐欄保留，包括既有7筆待確認資料；本輪未合併任何條目，歷史審計只更新摘要目錄總數。只收錄截至查核日已上市或搶先體驗中的作品；查核時尚未上市或證據不足的候選未收錄，見 [duplicate-review.md](duplicate-review.md)。

收錄依據：Steam 作品使用 Steam 商店 API 的 recommendations.total 快照（本輪 Steam 評論 API 拒絕自動請求，因此與前兩輪的評論總數、正評比例不能直接比較）；非 Steam 作品依官方發行規模與編輯判斷。catalogPriority 3為本輪高優先，2次之，1補充，僅作編輯排序，不是人氣排行。平台只列出查核日已推出的原生版本；向下相容、雲端串流、延期或僅見傳聞的版本不列入，並寫在平台說明。

[完整資料與證據](audit.json) · [重複與別名檢查](duplicate-check.json) · [本輪平台缺口](pending-platforms.json) · [驗證](VALIDATION.md)

重現：`node tests/catalog-expansion-20261122-5/apply-expansion.cjs`；加`--apply`寫入。整合器拒絕名稱／別名／商品ID衝突，以及目錄、歷史審計或待確認清單的獨立漂移。前六輪整合器不適用擴充後目錄。

## RO Survivors

fan｜Web｜early-access｜平台查核verified

熱度依據：非官方同人網頁遊戲，沒有商店評論數或銷量資料；收錄依據為 2026 年 10–11 月台灣媒體報導的同人倖存者遊戲熱潮（2026-11-22 快照），非排行或人氣指標。

身分：致敬《仙境傳說 RO》的非官方同人倖存者類網頁遊戲，作者 Reven4nt；未經 Gravity 授權，與原作官方無關，可能應權利人要求下架。

平台範圍：已確認 網頁（瀏覽器）。未經授權的非官方同人作品，致敬《仙境傳說 RO》。瀏覽器遊玩（電腦與手機），可從網站安裝為 App，無下載版。作者標示為 Beta、開發中，進度可能被重置，遊戲也可能隨時關閉或應權利人要求下架。帳號只需帳號密碼，可訪客遊玩；聊天、交易與組隊需建立帳號。

別名：ro survivors、ro倖存者

- [官方平台來源](https://ro-survivors.com/)：首頁標題「Free Ragnarok Online–inspired survivors game in your browser」，標題畫面標示「BETA」與「Sin descargas」（免下載），可用訪客身分遊玩；查核日網站正常回應。
- [官方平台來源](https://ro-survivors.com/legal.html)：專案資訊（繁中版）：「在哪裡玩：只在 ro-survivors.com，在瀏覽器中或從那裡安裝成 App」；「狀態：開發中，利用空閒時間維護」。最後審閱 2026 年 11 月 16 日。

- [收錄依據來源](https://asiagamemaster.com/ip-survivors-fan-games)：亞洲電玩通 2026-11-21 整理文章把本作列為近期爆紅的八款同人倖存者網頁遊戲之一，並註明截至該日仍在線上、未查到下架要求的公開消息。
- [收錄依據來源](https://tw.news.yahoo.com/%E6%AF%94%E5%AE%98%E6%96%B9%E7%89%88%E9%82%84%E5%A5%BD%E7%8E%A9%EF%BC%9F%E3%80%8Aro%E5%80%96%E5%AD%98%E8%80%85%E3%80%8B%E5%90%8C%E4%BA%BA%E9%81%8A%E6%88%B2%E7%88%86%E7%B4%85-%E5%89%B2%E8%8D%89%E7%A5%9E%E4%BD%9C%E8%AE%93%E4%BA%BA%E5%81%9C%E4%B8%8D%E4%B8%8B%E4%BE%86-081958086.html)：Yahoo 新聞 2026-11-12 報導本作在 11/9 加入繁體中文後於台灣 Threads 爆紅，晚上常需排隊連線。

## PokéSurvivor

fan｜Web｜released｜平台查核verified

熱度依據：非官方同人網頁遊戲，沒有商店評論數或銷量資料；收錄依據為 2026 年 10–11 月台灣媒體報導的同人倖存者遊戲熱潮（2026-11-22 快照），非排行或人氣指標。

身分：致敬《寶可夢》的非官方同人倖存者類網頁遊戲，作者 JPTER78（jpter78）；未經 Nintendo、The Pokémon Company、GAME FREAK 授權，與原作官方無關，可能應權利人要求下架。

平台範圍：已確認 網頁（瀏覽器）。未經授權的非官方寶可夢同人作品（2D 倖存者類）。瀏覽器遊玩（電腦與手機，手機需橫向），支援最多 4 人線上合作；itch.io 另有僅單人、存檔留在瀏覽器的離線 HTML 版。遊戲中無付費內容，作者接受自願捐款。程式碼授權自 2026-10-14 後改為 PolyForm Noncommercial 1.0.0。可能應權利人要求下架。

別名：pokesurvivor、poke survivor、寶可夢倖存者、寶可夢倖存者2d

- [官方平台來源](https://pokesurvivor.com/)：首頁：「Sobrevive a las hordas con tu compañero Pokémon · gratis, en PC y móvil」，手機需橫向遊玩；可登入、建立帳號或以訪客遊玩；查核日網站正常回應。遊戲內更新紀錄最早一筆為 2026-10-07「Primera versión」（第一版），最新一筆 2026-11-20。
- [官方平台來源](https://jpter78.itch.io/pokesurvivor)：作者 jpter78 的 itch.io 頁：狀態 Released、平台 HTML5，建議到 pokesurvivor.com 線上遊玩；另提供離線 zip（解壓後開啟 index.html，在瀏覽器中執行、僅單人），並非 Windows 執行檔。頁面列出原始碼 https://github.com/JPTER78/pokesurvivor。

- [收錄依據來源](https://asiagamemaster.com/ip-survivors-fan-games)：亞洲電玩通 2026-11-21 整理文章把本作列為近期爆紅的八款同人倖存者網頁遊戲之一，並註明截至該日仍在線上、未查到下架要求的公開消息。
- [收錄依據來源](https://pokemonhubs.com/news/pokemon-survivor-fan-game-copyright)：Pokemon Hubs 2026-10-19 報導本作收錄 966 隻寶可夢、免費同人遊戲爆紅，並引發版權討論。

## PokéBonk

fan｜Web/PC｜released｜平台查核verified

熱度依據：非官方同人網頁遊戲，沒有商店評論數或銷量資料；收錄依據為 2026 年 10–11 月台灣媒體報導的同人倖存者遊戲熱潮（2026-11-22 快照），非排行或人氣指標。

身分：致敬《寶可夢》的非官方同人倖存者類網頁遊戲，作者 Charcher；未經 Nintendo、The Pokémon Company、GAME FREAK 授權，與原作官方無關，可能應權利人要求下架。

平台範圍：已確認 網頁（瀏覽器）、PC。未經授權的非官方寶可夢同人作品（3D 倖存者類，收錄關都 151 隻）。瀏覽器版需支援 WebGL；作者另提供 Windows、macOS、Linux（含 Steam Deck）與 Android 的免費 App。版本號仍為 0.x（查核時 v0.10.23），但頁面未標示 Beta。可能應權利人要求下架。

別名：pokebonk、3d寶可夢倖存者、寶可夢倖存者3d

- [官方平台來源](https://pokebonk.com/)：首頁：「Survivor 3D gratis en el navegador con los 151 Pokémon de Kanto」「Fan-game no oficial」，並註明需要 JavaScript 與 WebGL；結構化資料 operatingSystem 為「Any (WebGL)」、價格 0；查核日網站正常回應，遊戲內更新紀錄最新為 v0.10.23（2026-11-22）。
- [官方平台來源](https://github.com/CharcherGit/pokebonk-app/releases/tag/v1.4.0)：作者 GitHub 帳號 CharcherGit 的 pokebonk-app 儲存庫，說明為「Descargas oficiales de la app de escritorio de PokéBonk (Windows, macOS, Linux)」，最新 release v1.4.0（2026-11-02 發布）。網站程式內列出 PokeBonk-1.4.0-win-setup.exe 與 win-portable.exe；更新紀錄 v0.8.81（2026-10-30）寫明推出免費 Windows 與 Linux 桌面 App，v0.8.90（2026-11-02）新增 Android 與 Mac App。

- [收錄依據來源](https://asiagamemaster.com/ip-survivors-fan-games)：亞洲電玩通 2026-11-21 整理文章把本作列為近期爆紅的八款同人倖存者網頁遊戲之一，並註明截至該日仍在線上、未查到下架要求的公開消息。

## Azeroth Survivors

fan｜Web/PC｜released｜平台查核verified

熱度依據：非官方同人網頁遊戲，沒有商店評論數或銷量資料；收錄依據為 2026 年 10–11 月台灣媒體報導的同人倖存者遊戲熱潮（2026-11-22 快照），非排行或人氣指標。

身分：致敬《魔獸世界》的非官方同人倖存者類網頁遊戲，作者 Aethus；未經 Blizzard 授權，與原作官方無關，可能應權利人要求下架。網站未標示作者署名，作者 Aethus 依網域 aethus.pl 與媒體整理推定。

平台範圍：已確認 網頁（瀏覽器）、PC。未經授權的非官方《魔獸世界》同人作品。瀏覽器版需支援 WebGPU（建議新版 Chrome、Edge 或 Safari，Linux 版 Chrome 需手動開啟 WebGPU 旗標）；作者另提供 Windows 下載版（RAR 壓縮檔，約 755 MB）。網站未標示版本或測試狀態。可能被下架。

別名：azeroth survivors、魔獸倖存者

- [官方平台來源](https://wow.aethus.pl/)：頁面標題 Azeroth Survivors，以 canvas 載入遊戲；瀏覽器不支援時顯示「This browser has no WebGPU. The world needs it: use a current Chrome, Edge or Safari」。程式註解寫明遊戲只在 wow.aethus.pl 提供。查核日網站正常回應。
- [官方平台來源](https://wow.aethus.pl/)：同頁提供「download the game for Windows」連結 /download/AzerothSurvivorsWindowsNew.rar；僅以 HEAD 確認檔案存在（約 755 MB，最後修改 2026-10-19），未下載。

- [收錄依據來源](https://asiagamemaster.com/ip-survivors-fan-games)：亞洲電玩通 2026-11-21 整理文章把本作列為近期爆紅的八款同人倖存者網頁遊戲之一，並註明截至該日仍在線上、未查到下架要求的公開消息。

## 天堂倖存者

fan｜Web｜released｜平台查核verified

熱度依據：非官方同人網頁遊戲，沒有商店評論數或銷量資料；收錄依據為 2026 年 10–11 月台灣媒體報導的同人倖存者遊戲熱潮（2026-11-22 快照），非排行或人氣指標。

身分：致敬《天堂（Lineage）》的非官方同人倖存者類網頁遊戲，作者 未具名台灣作者；未經 NCSOFT 授權，與原作官方無關，可能應權利人要求下架。網站未提供作者署名或權利聲明。

平台範圍：已確認 網頁（瀏覽器）。未經授權的非官方《天堂》同人作品，網站未提供權利聲明。瀏覽器遊玩，電腦與手機都能玩，需建立帳號連線遊玩。網站未標示測試狀態，查核時為 v1.2。作者標示正版網址為 l1stw.com。可能被下架。

別名：l1stw

- [官方平台來源](https://l1stw.com/)：標題「天堂倖存者v1.1」、副標「說話之島 ‧ 精靈弓箭手」，說明用 W A S D 或方向鍵移動；查核日網站正常回應。遊戲內更新公告最新為 2026-11-20 v1.2（附「正版網址：l1stw.com」），並有電腦版與手機版操作的調整說明。
- [官方平台來源](https://l1stw.com/)：更新公告 2026-11-12：YouTuber「Rod／隨便玩」首次進入遊戲，公告寫「這是遊戲第一次展現在玩家眼前」。

- [收錄依據來源](https://asiagamemaster.com/ip-survivors-fan-games)：亞洲電玩通 2026-11-21 整理文章把本作列為近期爆紅的八款同人倖存者網頁遊戲之一，並註明截至該日仍在線上、未查到下架要求的公開消息。

## 假面騎士倖存者

fan｜Web｜released｜平台查核verified

熱度依據：非官方同人網頁遊戲，沒有商店評論數或銷量資料；收錄依據為 2026 年 10–11 月台灣媒體報導的同人倖存者遊戲熱潮（2026-11-22 快照），非排行或人氣指標。

身分：致敬《假面騎士》的非官方同人倖存者類網頁遊戲，作者 syouko0522；未經 各自權利人 授權，與原作官方無關，可能應權利人要求下架。

平台範圍：已確認 網頁（瀏覽器）。未經授權的非官方、非營利假面騎士同人作品。瀏覽器遊玩（電腦與手機），電腦版支援手把；另有 Windows 下載版（zip，執行 KRSurvivors.exe 後以 Microsoft Edge 開啟遊戲）。查核時下載檔標示為正式版 2.3，開發紀錄 v2.3.8。作者表示若權利人要求，將配合修改或下架。 Windows 下載檔只是用 Microsoft Edge 開啟遊戲的啟動器，不列為原生 PC 版。

別名：kamen rider survivors

- [官方平台來源](https://syouko0522.itch.io/kamen-rider-survivors)：itch.io 頁有「Run game」，平台 HTML5，狀態 Released，Published 2026-11-19 05:19 UTC，Updated 2026-11-22；說明寫「電腦與手機皆可遊玩，電腦版支援手把」。

- [收錄依據來源](https://asiagamemaster.com/ip-survivors-fan-games)：亞洲電玩通 2026-11-21 整理文章把本作列為近期爆紅的八款同人倖存者網頁遊戲之一，並註明截至該日仍在線上、未查到下架要求的公開消息。
