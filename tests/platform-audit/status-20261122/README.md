# 發行狀態複查（2026-11-22）

第三輪擴充時發現兩筆十月批次條目的預定發售日已過，但仍標示「upcoming」。本次只更新這兩筆的發行狀態與平台證據；名稱、別名與平台欄都不變，其他 1,089 筆逐欄不變。

| 條目 | 原狀態 | 查核結果 | 平台 |
| --- | --- | --- | --- |
| FINAL FANTASY RESONANCE | upcoming，預定 2026-10-22 | 已發售：2026-10-22 於 PC、PS5、Switch、Switch 2 推出；Xbox 商店頁顯示 2026-11-06，確切日期未能與其他商店對齊，但截至查核日已上市 | PC/PS5/Xbox Series X|S/Switch 2/Switch（不變） |
| Call of Duty: Modern Warfare 4 | upcoming，預定 2026-10-23 | 已發售：2026-10-23 正式推出（PS Store 依時區顯示 10-22） | PC/PS5/Xbox Series X|S/Switch 2（不變）；官方商店明載無 PS4、Xbox One、初代 Switch 版 |

變更欄位：`releaseStatus` 改為 released、移除 `releaseDate`、更新 `releaseNote`，並新增 `platformNote`、`platformSources`、`platformReviewedAt`、`platformReviewStatus`、`platformVerifiedAt` 與官方來源。逐欄的前後值與證據見 [audit.json](audit.json)，原始條目見 [baseline.json](baseline.json)，變更前目錄見 [catalog-before.json](catalog-before.json)。

重現：`node tests/platform-audit/status-20261122/apply-status.cjs`；加 `--apply` 寫入。腳本只允許修改上述發行與平台欄位，任何其他條目或欄位不同即拒絕寫入。

本次之後，第三輪擴充的 `verify.cjs`（比對 `games.json` 雜湊）屬於歷史驗證，不再適用目前目錄；回歸測試改以本資料夾的 `catalog-before.json` 檢查第三輪結果。
