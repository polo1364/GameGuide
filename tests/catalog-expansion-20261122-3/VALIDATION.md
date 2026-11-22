# 第五輪擴充驗證

查核日期：2026-11-22。

## 結果

- 目錄 1,133 → 1,186 筆：以 Switch／Switch 2 為主，新增 38 款大作（`catalogGroup: major`，含 15 款任天堂發行或任天堂平台獨佔作品）與 15 款獨立遊戲（`indie`）；沒有搶先體驗作品，未合併、未刪除任何既有條目。
- 53 款都有已發售的 Switch 或 Switch 2 原生版本：48 款有 Switch 版、15 款有 Switch 2 版，其中 4 款只有 Switch 2 版（Nintendo Switch 2秘密展、Fire Emblem: Fortune's Weave、Survival Kids、FAST FUSION）。
- 原 1,133 筆逐欄不變；6 筆平台待確認紀錄、7 筆待確認遊戲、前四輪擴充的平台缺口清單皆位元組不變。
- 新名稱／別名衝突 0、商品 ID（Steam／App Store／Google Play／PlayStation）衝突 0；人工模糊交叉檢查、名稱來源與刻意不列的平台見 [duplicate-review.md](duplicate-review.md)。
- 平台證據 239 筆（210 個不重複官方連結），每個列出的平台都至少對應一筆官方商店頁、官方網站或發行商公告；本輪沒有新的平台待確認條目（[pending-platforms.json](pending-platforms.json) 為空）。
- 重複執行 `apply-expansion.cjs --apply` 後 6 個輸出檔雜湊不變（[validation-hashes.json](validation-hashes.json)）。
- 應用程式只變更版本號：4.18.0 → 4.19.0，Service Worker 快取 30 → 31。

## 查核方式

1. 以既有正規化規則（去除 ®™© 後做 NFKC）比對候選與目錄，排除已收錄作品（例如勇氣默示錄的 Switch 2 HD 重製已在既有條目中）。
2. PC 版本以 Steam 商店 API（appdetails，英文與繁中）取得平台、發售日與推薦數；人氣沿用 `recommendations.total`。
3. Switch／Switch 2 版本逐款讀取任天堂官網或 eShop 商品頁（美國、英國、台灣、香港、馬來西亞），其他主機與手機版本讀取 PlayStation、Xbox、App Store 台灣區、Google Play 或發行商官網。
4. Switch 2 Edition 或獨立 Switch 2 版列為 Switch 2；只靠向下相容或免費強化更新在 Switch 2 上執行的作品只列 Switch。
5. 查核日尚未上市的候選不收錄（The Duskbloods、雷頓教授與蒸氣新世界）。

## 已知限制

- 任天堂第一方與其他非 Steam 作品沒有統一可比的公開人氣數字，`popularityNote` 明確標示為依官方發行規模與編輯判斷。
- 任天堂商品頁多半不標示實際開發商；身分說明中的開發商（例如 Intelligent Systems、白金工作室）依公開資訊填寫，未逐一以官方頁證實。
- 少數作品各地區商店的發售日相差一天（時區或地區上市差異），已在平台說明註明採用的日期。
- Sonic Mania、Oxenfree 的手機版為 Netflix 會員專屬版，迪士尼夢幻星谷、Wylde Flowers 的 iOS 版為 Apple Arcade 版，列入但需訂閱。

## 測試

- `node tests/catalog-expansion-20261122-3/verify.cjs`：PASS。
- `node tests/regression.cjs`：見專案 README 的最新結果；第五輪的證據、別名搜尋與漂移拒絕檢查已納入。
- `node tests/source-reader.cjs`：PASS。
