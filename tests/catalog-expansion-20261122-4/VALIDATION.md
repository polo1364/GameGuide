# 第六輪擴充驗證

查核日期：2026-11-22。

## 結果

- 目錄 1,186 → 1,225 筆：以近幾年流行的作品為主，新增 18 款大作（`catalogGroup: major`）、8 款獨立遊戲（`indie`）與 13 款手機遊戲（`mobile`），其中 1 款為搶先體驗（Liar's Bar）；未合併、未刪除任何既有條目。
- 原 1,186 筆逐欄不變；6 筆平台待確認紀錄、7 筆待確認遊戲、前五輪擴充的平台缺口清單皆位元組不變。
- 新名稱／別名衝突 0、商品 ID（Steam／App Store／Google Play／PlayStation）衝突 0；人工模糊交叉檢查、區域版本與未收錄原因見 [duplicate-review.md](duplicate-review.md)。
- 平台證據 159 筆（137 個不重複官方連結），每個列出的平台都至少對應一筆官方商店頁、官方網站、發行商公告或 Apple 官方查詢 API；本輪沒有新的平台待確認條目（[pending-platforms.json](pending-platforms.json) 為空）。
- 重複執行 `apply-expansion.cjs --apply` 後 6 個輸出檔雜湊不變（[validation-hashes.json](validation-hashes.json)）。
- 應用程式只變更版本號：4.19.0 → 4.20.0，Service Worker 快取 31 → 32。

## 查核方式

1. 以中英文名稱人工比對與既有正規化規則（去除 ®™© 後做 NFKC）排除已收錄作品。
2. PC 版本以 Steam 商店 API（appdetails，英文與繁中）取得平台、發售日、搶先體驗狀態與推薦數；人氣沿用 `recommendations.total`。
3. 主機版本讀取 PlayStation、Xbox、任天堂官網或發行商公告；手機版本以台灣區 App Store 與 Google Play 為主，台灣區未上架者以其他地區的 App Store 頁與 Apple lookup API 佐證。
4. 線上服務遊戲確認查核日仍在營運；已宣布關服的 Squad Busters 不收錄。台灣另有代理版的 Lost Ark 本輪不收國際版。
5. 只列查核日已推出的原生版本；向下相容、已停止或尚未推出的版本寫入平台說明但不列入平台欄。

## 已知限制

- 手機遊戲與非 Steam 作品沒有統一可比的公開人氣數字，`popularityNote` 明確標示為依官方發行規模與編輯判斷。
- 部分手機遊戲的發售日只取得 App Store 的地區上架日，或官方未公布確切日期（Mobile Legends: Bang Bang、Stumble Guys、Muse Dash 留空），不一定是全球首發日。
- 有搶先體驗歷史的作品（Escape from Tarkov、The Outlast Trials、Hunt: Showdown 1896、Deep Rock Galactic: Survivor、Goose Goose Duck）發售日採正式版日期。
- 部分 Google Play 頁面只能讀到標題與開發者，無法確認地區下載限制。

## 測試

- `node tests/catalog-expansion-20261122-4/verify.cjs`：PASS。
- `node tests/regression.cjs`：見專案 README 的最新結果；第六輪的證據、別名搜尋與漂移拒絕檢查已納入。
- `node tests/source-reader.cjs`：PASS。
