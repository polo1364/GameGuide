# 平台查核整合驗證

以下保留首輪 838 筆查核的歷史驗證紀錄。最新 384 筆補證結果與 33/33 測試見 [第二輪驗證](recheck-384/VALIDATION.md)。

驗證日期：2026-10-19。

- `node tests/regression.cjs`：30/30 通過。涵蓋 838 筆查核覆蓋、查核狀態與來源、128 筆既有資料完全保留、已知錯誤平台修正、未解版本提示、攻略提示內容、DeepSeek 模擬回應、收藏、離線快取，以及 1440／390／320 px 瀏覽器版面。
- `node tests/platform-audit/apply-review.cjs --apply` 重複執行後，games.json、audit-838.json、pending.json、README.md 的 SHA-256 不變；確認套用流程可重複執行。
- 最終資料仍為 966 筆；本批 838 筆中 454 verified、340 partial、44 unresolved，413 筆平台集合更正／補充。分隔符、順序與 Mac/macOS 名稱正規化不計入更正數。
- A/B/C/D 研究結果做過交叉抽查，修正了候選／安全套用值差異、PS5 移植遺漏、桌面作業系統遺漏及過時說明。

瀏覽器測試使用本機 Chromium 與模擬 API，未呼叫付費 DeepSeek 服務，亦未逐平台安裝或啟動遊戲。partial 與 unresolved 不算完整平台核實；待補證清單保存在 pending.json。

本機 Playwright 依賴透過 NODE_PATH 指向既有 Codex runtime；專案沒有另行加入套件。
