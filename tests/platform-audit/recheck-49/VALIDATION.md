# 剩餘 49 筆查核與修正驗證

驗證日期：2026-10-19。

## 結果

- 49/49 均完成本輪研究：18 verified、7 partial、24 unresolved。研究完成不等於所有平台已認證。
- 44 筆平台欄位更正、補充或撤下未證實值；12 筆別名修正；2 筆已確認同作的重複資料合併。
- 魔兵驚天錄合併至蓓優妮塔；戰慄時空合併至半條命。舊中文名稱可搜尋，錯置的 The Wonderful 101／Counter-Strike 別名不沿用。
- 目錄 966 → 964 筆；916 筆非目標完整不變，另外既有蓓優妮塔只接收合併別名。原 128 筆已核實資料完整不變。
- 原 838 筆歷史紀錄累計 807 verified（含 2 筆合併來源）、7 partial、24 unresolved；不能將 838 當成目前仍獨立存在的遊戲筆數。

## 驗證證據

- `node tests/platform-audit/recheck-49/apply-review.cjs`：49 筆索引、名稱、來源、日期、合併平台一致性與範圍保護檢查通過。
- `node tests/regression.cjs`：35/35 通過，完整輸出見 [regression-output.txt](regression-output.txt)。包含本輪來源／備註與查核紀錄逐欄一致、別名修正、合併搜尋、原 838 筆紀錄、歷史 384 筆快照、收藏、DeepSeek 模擬回應、非同步流程、真實 Service Worker 離線重載，以及 1440／390／320 px 版面與操作。
- 第一輪為 34/35：舊去重測試要求保留本輪已撤下的 `bt` 別名，錯誤為 `Lost alias: bt`。已將豁免限縮至本輪查核紀錄明列的別名更正，再跑完整測試通過；原始失敗輸出保留於 [regression-first-run.txt](regression-first-run.txt)。
- 重複執行 `--apply` 後，7 個輸出檔 SHA-256 完全一致，見 [validation-hashes.json](validation-hashes.json)。
- 在唯讀測試中改動非目標 icon，整合器以 `Catalog drift` 拒絕套用，沒有寫入實際資料。初次臨時 VM 測試容器漏注入 URL，得到 `ReferenceError: URL is not defined`；改用同執行環境的函式封裝後確認保護有效，並非產品執行錯誤。
- index.html 內嵌 JavaScript、sw.js、整合器及 regression 語法檢查通過。
- 另一研究工作者獨立複核 Restaurant Empire、Bayonetta、Half-Life 的官方身分鏈，以及整合器的合併與保留範圍；其發現的來源比對測試缺口已補上。

## 仍待釐清的 31 筆

- 22 筆系列／同名條目需要年份或完整版本，不能從舊平台欄推定版本；全部已有官方版本差異證據，主欄改成依版本／年度確認。
- 2 筆身分未解：聲之形、迷宮飯 千年國度的荒唐食譜。已移除錯置別名或未證實平台，未宣稱不存在改編遊戲。
- 7 筆部分核實：魔力寶貝 懷舊版、武林群俠傳、Fate/stay night、流亡黯道 手機版、巫師 重製版、樂高 指環王、The Rise of the Golden Idol。具體缺口見 [pending.json](pending.json)。
- 樂高官方新頁圖示與原始公告不一致，未以錯置圖示增加 PSP／Wii U。Golden Idol 的 PS4 行銷標題不足以證實已發行，保留待補證。

## 交付範圍

- games.json 版本 2.7.0、應用程式 4.9.0、Service Worker 快取 20；未變更 UI 版型或 API 流程。
- 完整前值為 [catalog-before.json](catalog-before.json)；逐筆差異、官方來源與合併依據為 [audit-49.json](audit-49.json) 和 [README.md](README.md)。歷史 384 筆快照保持原結論，舊整合器禁止重播覆蓋新資料。
- 來源包括官方網站／商店、官方原始公告與具發行商署名的歷史新聞稿；平台證據不保證當地仍可購買、服務仍營運或舊版能在現代系統運行。
- 使用本機 Chromium 與模擬 API，未呼叫付費 DeepSeek API、未逐平台安裝遊戲、未在實體手機實測。
