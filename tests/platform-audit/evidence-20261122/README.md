# 平台證據複查：勇氣默示錄（2026-11-22）

既有條目「勇氣默示錄」列出 PC／Xbox Series X|S／Switch 2／3DS，但 HD Remaster 的 PC 與 Xbox 版只有上市前的 Square Enix 公告頁（標示預定 2026-03-13）作為證據。本次複查確認這兩個版本已實際上市，補上上市後的證據。

## 結果

- 平台不變：`PC/Xbox Series X|S/Switch 2/3DS` 正確。原版為 3DS；HD Remaster 於 Switch 2 首發，2026-03-12 起另有 Steam 與 Xbox Series X|S／Xbox on PC 版。
- 補上 3 個平台來源：Steam 商店 API（app 2833580，發售日 2026-03-12）、Xbox 美國商店頁（Optimized for Xbox Series X|S、發售日 2026-03-12）、Xbox Wire 上市文章。
- 不列 Xbox One：Xbox 商店頁資料帶有 Xbox One 標記，但 Square Enix 官方平台清單只列 Series X|S，頁面說明也註明該標記不代表支援。
- 更新欄位：`platformNote`、`platformSources`、`platformReviewedAt`、`platformVerifiedAt`（後兩者改為 2026-11-22）。其他欄位與其他 1,185 筆條目逐欄不變；逐欄前後值見 [audit.json](audit.json)。

## 背景

第五輪擴充收尾時，這筆曾在未讀來源的情況下被判斷為 PC／Xbox 平台有誤；複查後證實原資料正確，PC 與 Xbox 版是 2026 年 3 月才推出的新版本。

## 重現

`node tests/platform-audit/evidence-20261122/apply-evidence.cjs`；加 `--apply` 寫入。腳本只允許修改上述四個欄位，並拒絕目錄的獨立漂移。
