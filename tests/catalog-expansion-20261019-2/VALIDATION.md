# 第二輪台灣手機與獨立遊戲擴充驗證

日期：2026-10-19。目錄 2.12.0、應用程式 4.14.0、Service Worker 25。

## 結果

- 新增 **27 款**：13 款台灣手機遊戲、14 款獨立遊戲。目錄 **1002 → 1029 款**，本輪未發現需合併的新重複入口。
- 26 款平台 verified、1 款 partial；24 款 released、3 款 early-access。未把長期開發自動視作搶先體驗，也未將發售日期到達當作已正式上市證據。
- 原 **1002 筆遊戲逐欄相同**，包含既有7筆待確認。歷史838筆審計的每筆紀錄相同，只更新摘要目錄總數。
- 原6筆待確認清單、首輪 Buckshot Roulette 待補清單均與前值位元組完全相同；本輪沒有重查或更動這7筆。
- 新資料含113個不重複官方來源URL、86條平台／身分證據說明、30條熱度證據說明；同商品多語網址及API可能分列，不代表113款作品或網站。

## 收錄與平台判讀

- 手機以台灣App Store累積評分及本輪免費榜觀察排序；《閃耀吧！嚕咪》《好萊塢合成：星夢逆襲》《Amaze GO!》有當期榜單證據。榜單名次與評分量是查核時快照，不代表即時活躍玩家數或近期討論的精確計數。
- 《鈴蘭之劍》《第七史詩》另有官方Windows客戶端，列PC/iOS/Android；Google Play Games、模擬器或Apple Silicon執行行動App不算獨立原生桌面移植。
- 獨立遊戲熱度使用Steam官方評論API全語言、全部取得方式的累積數，與商店預設顯示口徑可能不同；不宣稱銷量或跨平台人氣排名。
- Scrap Mechanic、shapez 2 已按官方1.0公告記錄為 released；Dwarf Fortress 限Premium付費圖形版，未移植Classic版的Mac發行史。
- Halls of Torment 手機限Premium移植；Kingdom Two Crowns 的PS5相容執行不列原生PS5，Xbox Series則有官方最佳化證據。
- BeamNG.drive 的Windows及原生Linux實驗版已有證據，Linux無官方客服及穩定性限制已明列。PS5預定2026-10-19，但查核時仍為Announced／願望清單及倒數，故保持partial，不列為已上市平台。缺口見 [pending-platforms.json](pending-platforms.json)；這是本輪新增待補項，不改動既有7筆。
- 繁簡中文別名來自已證實中文題名的字形及獨立中文部分，不冒稱每個字形另有官方在地命名。沒有官方中文名者不自行翻譯。
- 最強領主與SSS冒險家因商店／發行身分證據未齊暫不收錄，詳見 [手機研究](review-mobile.md)。

## 驗證結果

- `node tests/regression.cjs`：**45/45 通過**，見 [輸出](regression-output.txt)。沿用既有Playwright runtime，未新增依賴。
- 兩輪擴充各自對應其完成快照／當前目錄檢查，保留完整重建與非目標資料檢查；所有新增中英文別名均能正確匹配且搜尋置首。
- 新遊戲的官方來源、平台說明與作品身分實際進入瀏覽器攻略提示；最新手遊可由自動完成選單選取並取得正確平台。
- 整合器在任何寫入前拒絕目錄、歷史審計、兩份既有待確認清單的獨立漂移，以及故意注入的重複候選名稱。
- 27候選對舊1002及候選彼此未發現新增名稱／別名／商品ID衝突；人工比對涵蓋跨區Apple、Google、Steam、PS、Xbox、Nintendo識別。既有系列共用詞及合輯／DLC共用商品不自動合併。詳見 [去重報告](duplicate-review.md)。
- Chromium **1440／390／320像素**版面及主要互動通過，真實Service Worker更新及離線重載通過。[桌機](screenshots/guide-1440.png)、[390手機寬度](screenshots/guide-390.png)、[320手機寬度](screenshots/guide-320.png)為固定測試內容截圖。
- `node tests/catalog-expansion-20261019-2/verify.cjs`：語法、既有資料保存、應用程式僅版本變動、6個生成檔重複套用雜湊一致均通過，見 [驗證雜湊](validation-hashes.json)。

## 界線

未呼叫付費DeepSeek API、未部署外部網站、未執行這些遊戲，也未用實體手機驗收。DeepSeek流程採模擬回應；平台與商店供應、評分量、榜單皆可能變動。
