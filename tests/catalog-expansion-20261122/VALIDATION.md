# 第三輪擴充驗證

查核日期：2026-11-22。

## 結果

- 目錄 1,029 → 1,091 筆：新增 34 款大作（`catalogGroup: major`）與 28 款獨立遊戲（`indie`），其中 4 款為搶先體驗；未合併、未刪除任何既有條目。
- 原 1,029 筆逐欄不變；6 筆平台待確認紀錄、7 筆待確認遊戲、前兩輪擴充的平台缺口清單皆位元組不變。
- 新名稱／別名衝突 0、商品 ID（Steam／App Store／Google Play／PlayStation）衝突 0；人工模糊交叉檢查見 [duplicate-review.md](duplicate-review.md)。
- 平台證據 212 筆，每個列出的平台都至少對應一筆官方商店頁、官方網站或發行商公告；唯一例外是 Thronefall 的 Android（Google Play 頁只讀到標題），已標為 `partial` 並列入 [pending-platforms.json](pending-platforms.json)。
- 重複執行 `apply-expansion.cjs --apply` 後 6 個輸出檔雜湊不變（[validation-hashes.json](validation-hashes.json)）。
- 應用程式只變更版本號：4.16.0 → 4.17.0，Service Worker 快取 28 → 29。

## 查核方式

1. 以既有正規化規則比對候選與目錄，排除已收錄作品。
2. PC 版本以 Steam 商店 API（appdetails，英文與繁中）取得平台、發售日、搶先體驗狀態與推薦數；Steam 評論 API 在本輪對自動請求一律轉址，因此改用 appdetails 的 `recommendations.total`，與前兩輪的評論總數不能直接比較。
3. 主機與手機版本逐款讀取官方頁面（PlayStation、Xbox、任天堂、App Store、Google Play，或發行商官網／新聞稿）；只列查核日已推出的原生版本，向下相容、雲端串流、延期或僅見傳聞的版本寫入平台說明但不列入平台欄。
4. 查核日尚未上市的候選不收錄；名稱沿用官方繁體中文名稱，沒有官方中文名時使用原文，未經證實的自行翻譯不作為別名。

## 已知限制

- 非 Steam 作品（任天堂第一方、GTA VI、Hytale、Keeper、Rocket League）沒有統一可比的公開人氣數字，`popularityNote` 明確標示為依官方發行規模與編輯判斷。
- 部分平台證據來自發行商公告而非第一方商店頁（例如 Little Nightmares III 的 Xbox／任天堂版本），已在證據說明中註明來源類型。
- 本輪不處理既有條目的狀態更新；查核時發現 FINAL FANTASY RESONANCE（2026-10-22）與 Call of Duty: Modern Warfare 4（2026-10-23）仍標示未上市，需另行複查。

## 測試

- `node tests/catalog-expansion-20261122/verify.cjs`：PASS。
- `node tests/regression.cjs`：見專案 README 的最新結果；新增第三輪的證據、別名搜尋與漂移拒絕檢查。
- `node tests/source-reader.cjs`：PASS。
