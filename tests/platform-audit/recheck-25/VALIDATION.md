# 剩餘25筆拆分驗證

日期：2026-10-19。目錄2.9.0、應用程式4.11.0、Service Worker 22。

## 已完成

- 25/25重新處理。19個系列／同名入口拆為41個具體作品，其中32筆新增、9筆沿用現有作品；另6筆保留明確的補證狀態。
- 刪除的是19個泛稱目錄入口，原始內容完整保存於catalog-before.json及audit-25.json；系列搜尋詞改存seriesAliases，不移除搜尋入口，也不將泛稱指派為單一作品。
- 964 + 32 - 19 = **977款**；Fable既有重啟條目補上開發商識別副標，不另外複製一筆。
- 930筆非目標遊戲逐欄保留；838筆歷史審計中805筆未改，33筆更新均能對應本輪來源或重用目標。
- 歷史紀錄狀態為813 verified、19 split、4 partial、2 unresolved；split代表入口已拆分，不冒稱泛稱本身的平台已核實，也不是新增遊戲數。

## 具體修正

- 《大富翁11》補PS4／PS5／Xbox One／Series官方移植；MLB The Show依24／26年度各自記錄，26不繼承24的PS4／Xbox One。
- 《夢幻西遊》、《大話西遊》區分電腦版的互通／口袋端與獨立手遊；現行MuMu桌面模擬器不計作原生桌面移植。劍網3／無界同一角色資料的客戶端合併一筆，Mac限官方已證實的Apple Silicon範圍。
- Perfect Dark原作、2010 HD與The Initiative重啟案分列；重啟案有開發主管公開聲明及Xbox職務來源交叉證據，標為cancelled。PC／Series僅為取消前公布目標，不表示已發售。
- 《流亡黯道 手機版》保留專案證據但改為unknown近況，不以歷史展場試玩保證將推出。
- 修正3組共5個錯用別名：RF4豪華版的`rune factory 4`／`rf4`移回3DS原作；Fable重啟移除`fable 2025`；未確認的迷宮飯完整題名移除`dungeon meshi`／`迷宮飯`泛IP別名。

所有判斷及官方連結見[逐作品報告](README.md)與review-a/b/c/d.md；主目錄每一具體作品保留獨立platformSources及identityNote。

## 查詢行為

- 具體正式名稱優先精確匹配；共用系列／同名搜尋詞回傳多個候選，findGameInDatabase不再默認取第一筆。
- 系列候選清單不預選第一筆。直接按Enter不選版本，使用者需點選或用方向鍵選擇。
- 首次攻略與追問均攜帶版本候選、各自平台及來源；泛稱會清除先前偵測的平台，提示先確認完整名稱／年份。
- 已取消與近況未知專案有獨立標籤及提示，不套用「即將發售」或已上市攻略。

## 驗證結果

- `node --check`：整合器與回歸測試通過；index.html內嵌腳本及sw.js的JavaScript解析通過。
- `node tests/regression.cjs`：**40/40通過**，輸出見[regression-output.txt](regression-output.txt)。使用既有Playwright runtime；沒有安裝新依賴。
- 新增驗證可從audit-25變更完整重建當前目錄、無重複名稱、全部非目標保留、19個來源皆可搜尋到具體候選、RF4別名指向正確原作、Fable錯誤年份及迷宮飯泛稱不再誤命中。
- 首輪39/40：測試對seriesAliases使用大小寫敏感includes，與程式既有不分大小寫搜尋契約不一致；MLB The Show／Perfect Dark實際查詢正常。測試改以不分大小寫比對，未為通過測試刪減資料。首輪紀錄見[regression-first-run.txt](regression-first-run.txt)。
- Chromium 1440、390、320像素版面與選擇SimCity（2013）的互動通過；Service Worker真實離線重新載入及快取版本更新通過。[桌機](screenshots/guide-1440.png)、[手機390](screenshots/guide-390.png)、[手機320](screenshots/guide-320.png)為固定測試內容畫面，不是實際AI攻略。
- 整合器對目錄、歷史審計兩者的獨立漂移均在寫入前拒絕；重複套用8個生成檔逐位元組一致，雜湊見[validation-hashes.json](validation-hashes.json)。

## 剩餘6筆與界線

| 條目 | 剩餘缺口 |
|---|---|
| 流亡黯道 手機版 | 未取得具體iOS／Android發行清單與近期推出計畫 |
| 巫師 重製版 | 專案仍有官方產品頁，具體發行平台未公布 |
| 武林群俠傳 | 原電腦單機身分已證實，仍缺原版官方OS規格；不挪用Online需求 |
| 聲之形 | 未確認此名的獨立電玩，不以電影身分推定遊戲平台 |
| 迷宮飯 千年國度的荒唐食譜 | 完整題名的官方電玩身分未確認；實體桌遊不作主機版證據 |
| The Rise of the Golden Idol | PS4有歷史官方預告，仍缺正式上市證據；其他已證實平台保留 |

代表作品不是全系列窮舉；歷史平台不保證今日可購買、仍營運或相容最新系統。沒有執行遊戲或實體手機驗收；DeepSeek以模擬請求驗證提示及錯誤流程，沒有呼叫付費API，未部署外部站點。
