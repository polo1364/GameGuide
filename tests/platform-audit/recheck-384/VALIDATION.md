# 384 筆平台補證驗證

驗證日期：2026-10-19。

## 結果

- 本輪 384 筆全部完成第二輪查核：335 verified、19 partial、30 unresolved。
- 252 筆平台集合更正／補充，8 筆錯配別名修正；未增加、刪除或改名遊戲，總數仍為 966。
- 舊資料 838 筆累計為 789 verified、19 partial、30 unresolved。剩餘 49 筆詳見 [pending.json](../pending.json)，不得視為完整平台認證。
- 本輪之外 582 筆逐欄完全相同，寫入前及套用後皆檢查。

## 已執行驗證

- `node tests/platform-audit/apply-review.cjs`：384 筆索引、作品身分、日期、來源及欄位保護檢查通過。
- `node tests/regression.cjs`：33/33 通過，包括資料保存與去重、搜尋／別名、未公布平台提示、DeepSeek 模擬回應、收藏、非同步請求、離線快取，以及 1440／390／320 px 版面與操作。
- JavaScript 語法檢查：index.html 內嵌程式、sw.js、整合器及 regression 通過。
- 最終來源說明同步後，重複執行 `--apply`，7 個輸出檔 SHA-256 不變；見 [validation-hashes.json](validation-hashes.json)。
- 官方來源交叉抽核發現並修正《異度神劍》原生 Switch 2 遺漏；《魔兵驚天錄》與 The Wonderful 101 的身分衝突保留 unresolved。

## 變更範圍與界線

- games.json 資料版本 2.6.0；應用程式 4.8.0、Service Worker 快取 19。
- UI 僅補未公布平台的偵測／提示保護，以及 New Nintendo 3DS、Game Boy 識別；未公布平台不再交給 AI 推定。
- 本輪備份使用 `.bak.recheck384-20261019`；原始 838 筆 baseline 與研究 JSON 保留。第二輪的前值、證據與差異獨立存放於本目錄。
- 平台證據不等於各地仍可購買或營運；雲端、再發行、相容及不同版本均依逐筆說明解讀。
- 使用本機 Chromium 與模擬 API，未呼叫付費 DeepSeek API，未逐平台安裝遊戲，也未在實體手機測試。
- Playwright 透過既有 Codex runtime 的 NODE_PATH 載入，未新增專案依賴。
