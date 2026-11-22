# 第四輪擴充驗證

查核日期：2026-11-22。

## 結果

- 目錄 1,091 → 1,133 筆：新增 19 款大作（`catalogGroup: major`）、5 款手機遊戲（`mobile`）與 18 款獨立遊戲（`indie`），其中 1 款為搶先體驗（inZOI）；未合併、未刪除任何既有條目。
- 原 1,091 筆逐欄不變；6 筆平台待確認紀錄、7 筆待確認遊戲、前三輪擴充的平台缺口清單皆位元組不變。
- 新名稱／別名衝突 0、商品 ID（Steam／App Store／Google Play／PlayStation）衝突 0；人工模糊交叉檢查與區域版本判斷見 [duplicate-review.md](duplicate-review.md)。
- 平台證據 159 筆，每個列出的平台都至少對應一筆官方商店頁、官方網站或發行商公告；本輪沒有新的平台待確認條目（[pending-platforms.json](pending-platforms.json) 為空）。
- 重複執行 `apply-expansion.cjs --apply` 後 6 個輸出檔雜湊不變（[validation-hashes.json](validation-hashes.json)）。
- 應用程式只變更版本號：4.17.0 → 4.18.0，Service Worker 快取 29 → 30。

## 查核方式

1. 以既有正規化規則（去除 ®™© 後做 NFKC）比對候選與目錄，排除已收錄作品。
2. PC 版本以 Steam 商店 API（appdetails，英文與繁中）取得平台、發售日、搶先體驗狀態與推薦數；人氣沿用第三輪的 `recommendations.total`。
3. 主機與手機版本逐款讀取官方頁面（PlayStation、Xbox、任天堂、App Store 台灣區、Google Play 台灣區，或發行商官網／新聞稿）；只列查核日已推出的原生版本，向下相容、雲端串流、延期或僅見傳聞的版本寫入平台說明但不列入平台欄。
4. 手機遊戲收錄台灣商店可取得的版本；由台灣代理商發行、與國際版為不同商品者（女神異聞錄：夜幕魅影、天命：群星），收錄台灣版、不合併國際版。
5. 查核日尚未上市或狀態不明的候選不收錄（Lords of the Fallen II、Witchbrook、Marvel 1943、Silver and Blood）。

## 已知限制

- 非 Steam 作品、手機遊戲與 Steam 未提供推薦數的作品（漫威：瞬戰超能）沒有統一可比的公開人氣數字，`popularityNote` 明確標示為依官方發行規模與編輯判斷。
- 女神異聞錄：夜幕魅影與 Royal Kingdom 的官方來源未公布正式上市日期，審核資料中的上市日期留空。
- Apple Arcade 與 Netflix 版本列入平台但需訂閱，已在平台說明註明。

## 測試

- `node tests/catalog-expansion-20261122-2/verify.cjs`：PASS。
- `node tests/regression.cjs`：見專案 README 的最新結果；第四輪的證據、別名搜尋與漂移拒絕檢查已納入。
- `node tests/source-reader.cjs`：PASS。
