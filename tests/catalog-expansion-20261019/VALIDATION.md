# 台灣手機與獨立遊戲擴充驗證

日期：2026-10-19。目錄 2.11.0、應用程式 4.13.0、Service Worker 24。

## 結果

- 新增 **28 款**：15 款台灣手機遊戲、13 款獨立遊戲。新增資料的平台查核為 27 verified、1 partial；22 款 released、6 款 early-access，不將搶先體驗當作 1.0 正式版。
- 以 Apple 台灣榜單、當地評分與 Steam 全語言評論快照作收錄優先依據；這些是熱度的間接指標，不是活躍玩家數、銷量或跨平台即時討論排名。每筆記錄來源、觀察日期、口徑與版本範圍。
- 新增資料包含 103 個不重複官方來源 URL、75 條平台／身分證據說明、30 條熱度證據說明；多語商品頁與 API URL 可能指向同一商品，不表示 103 個不同作品或網站。
- 三組有官方身分證據的重複入口合併：糖豆人 終極淘汰賽 → Fall Guys；機戰傭兵VI 境界天火 → 機戰傭兵6 境界天火；遊戲王 Tag Force Special → 遊戲王 ARC-V Tag Force Special。所有原名稱、別名及來源均保留；新增完整英文搜尋別名。
- **977 + 28 − 3 = 1002 款**。原目錄中的 971 筆非合併目標逐欄相同；歷史838筆審計有832筆逐欄相同，僅6筆合併相關紀錄同步來源／身分與合併指向，另更新摘要總數。
- 原本6筆待確認遊戲逐欄相同，`tests/platform-audit/pending.json` 與本輪前值位元組完全相同。

## 範圍與缺口

本輪主欄只列有正面官方證據、已可遊玩的原生平台。模擬器、Google Play Games 桌面執行、Proton、串流、向下相容及移植預告不自動增列原生版本；手機資料以台灣商店可讀商品識別為準，不把不同營運地區視作伺服器互通。

Buckshot Roulette 的 Windows／Linux／Xbox One／Xbox Series 已有正式證據，但 PS／Switch 移植只有歷史公告而缺現行明確上市證據，因此為 **partial**、沒有 `platformVerifiedAt`。其原因及解除條件另存 [pending-platforms.json](pending-platforms.json)，沒有改寫原6筆待確認紀錄。Mouthwashing 的官方主機移植仍在開發，主欄僅列已發售 PC，並保留公告範圍說明。

Quasimorph、缺少對應台灣雙商店證據的手機候選未強行收錄，詳見兩份研究報告。官方尚無中文題名的作品不自行翻譯；有官方繁／簡中文名者保留作搜尋別名。

## 驗證

- `node tests/regression.cjs`：**44/44 通過**，完整結果見 [regression-output.txt](regression-output.txt)。沿用既有 Playwright runtime，沒有安裝新依賴。
- 新增檢查可由本輪審計重建當前目錄、合併保留全部舊名稱／別名、非目標不變、6筆待確認不變、平台與熱度來源對應、所有新增別名找到正確作品且搜尋排序置首。
- 瀏覽器驗證新增手機遊戲可點選、偵測平台正確，官方來源及平台／作品範圍實際進入攻略提示。既有模擬 DeepSeek、錯誤處理、書籤、版本選擇與離線功能測試均通過。
- 整合器對目錄、歷史審計、原待確認清單的獨立漂移及故意注入的重複名稱，均在任何寫入前拒絕。新候選對既有目錄及彼此的名稱、別名和可解析商品 ID 無衝突。
- 舊系列共用詞仍可多候選搜尋；合輯、本體／DLC共享商品 ID 先人工判讀，不以相同 URL 自動合併。詳細排除規則見 [duplicate-review.md](duplicate-review.md)。
- Chromium **1440／390／320 像素**版面與主要互動通過；[桌機](screenshots/guide-1440.png)、[390手機寬度](screenshots/guide-390.png)、[320手機寬度](screenshots/guide-320.png)為固定測試內容截圖，不是實際AI生成攻略。
- 真實 Service Worker 更新與離線重載通過；應用程式與 Service Worker 前值比對證明只有版本號改動，沒有新增UI邏輯。
- `node tests/catalog-expansion-20261019/verify.cjs`：語法、非目標保存、原來源保存及6個生成檔重複套用雜湊一致全部通過；見 [validation-hashes.json](validation-hashes.json)。

## 未驗證邊界

未呼叫付費 DeepSeek API、未部署外部網站、未執行這些遊戲，也未用實體手機驗收。榜單、評論數、商店供應與服務狀態可能隨時間改變；查核紀錄是有日期的快照。
