# 第七輪擴充驗證

查核日期：2026-11-22。

## 結果

- 目錄 1,225 → 1,231 筆：新增 6 款近期爆紅的非官方同人倖存者網頁遊戲（新分組 `catalogGroup: fan`），其中 1 款仍為測試版（RO Survivors）；未合併、未刪除任何既有條目。
- 6 款皆標示非官方、未經版權方授權、可能應權利人要求下架（整合器檢查身分說明含「非官方」、平台說明含「下架」）。
- 新增平台標籤 `Web`：4 款只有網頁版，PokéBonk 與 Azeroth Survivors 另有作者提供的 PC 版。
- 原 1,225 筆逐欄不變；6 筆平台待確認紀錄、7 筆待確認遊戲、前六輪擴充的平台缺口清單皆位元組不變。
- 新名稱／別名衝突 0、商品 ID 衝突 0；人工交叉檢查、收錄範圍與平台判斷見 [duplicate-review.md](duplicate-review.md)。
- 平台證據 11 筆（9 個不重複連結），全部來自作者本人的遊戲網站、法律頁、itch.io 或 GitHub；媒體報導只用於收錄依據。
- 重複執行 `apply-expansion.cjs --apply` 後 6 個輸出檔雜湊不變（[validation-hashes.json](validation-hashes.json)）。
- 應用程式變更：版本號 4.20.0 → 4.21.0、Service Worker 快取 32 → 33，並新增「網頁（瀏覽器）」平台名稱與偵測分支（只有 Web 時顯示網頁；Web/PC 仍偵測為 PC）。

## 查核方式

1. 以亞洲電玩通 2026-11-21 整理文章、Yahoo 新聞與 Pokemon Hubs 報導找出候選，再逐款讀取作者本人網站確認查核日仍可遊玩、平台、版本狀態、非官方聲明、收費方式與語言。
2. 未下載或執行任何遊戲檔；Azeroth Survivors 的 Windows 版只以 HEAD 請求確認檔案存在。
3. 依使用者決定排除寶可夢生存戰（販售付費外觀）與暗黑2倖存者（代為託管原作遊戲檔案）。

## 已知限制

- 這些作品未經授權，隨時可能下架或改版；資料只代表 2026-11-22 的快照。
- 沒有商店評論數或銷量，`popularityNote` 標示收錄依據是媒體報導的熱潮，不是人氣排行。
- Azeroth Survivors、天堂倖存者的網站沒有作者署名或權利聲明；PokéBonk、Azeroth Survivors 未記載首次公開日期。
- 中文別名（RO倖存者、寶可夢倖存者、魔獸倖存者等）為台灣媒體通稱，不是作者官方名稱，例外收為別名以便搜尋。
- 來源讀取服務沒有核准這些網站，生成攻略時會缺少可讀來源而標示待確認。

## 測試

- `node tests/catalog-expansion-20261122-5/verify.cjs`：PASS。
- `node tests/regression.cjs`：見專案 README 的最新結果；第七輪的證據、別名搜尋、Web 平台偵測與漂移拒絕檢查已納入。
- `node tests/source-reader.cjs`：PASS。
