# 發行狀態複查 B（2026-11-22）

接續 [第一次複查](../status-20261122/README.md)，逐筆複查目錄中剩餘 10 筆標示「upcoming」的條目。只有 Phantom Blade Zero 已上市；其餘 9 筆維持原狀，複查結果記錄在 [audit.json](audit.json) 的 `unchanged`。

## 更新：Phantom Blade Zero

- 2026-10-29 於 PS5 與 PC（Steam）發售，Steam 依美國時區顯示 2026-10-28；截至查核日沒有 Xbox 版。
- 變更欄位：`releaseStatus` 改為 released、新增 `releaseNote` 與 `sources`（Steam API、Steam 商店頁、PlayStation Store），更新 `platformNote`。
- 平台（PC/PS5）、名稱、別名不變。本條目屬於 838 筆歷史平台審計，平台查核日期仍是 2026-10-19，因此 `platformReviewedAt`、`platformVerifiedAt`、`platformSources` 刻意不改，上市證據放在 `sources`。

## 維持原狀（9 筆）

| 條目 | 查核結果 |
| --- | --- |
| 巫師 重製版 | 官方財報頁沒有日期或平台；暫緩消息只見於媒體，未讀到官方頁面。 |
| Project Mugen（ANANTA） | 仍預定 2027-01-15 全球上市，平台不變。 |
| Light No Fire | Steam 仍為發售日待公告。 |
| Project: The Perceiver | 官方頁只寫多平台、無日期；未能重新確認既有的 PS5／PS4，但也沒有反證。 |
| Ballad of Antara | PS Store 仍為已公布、只能加入願望清單；取消傳聞未有官方證實。 |
| Intergalactic: The Heretic Prophet | 發售日仍未定；官方稱 2027 年才完整公開。 |
| Fable（Playground Games 重啟版） | 仍預定 2027-02-23，平台不變。 |
| State of Decay 3 | Xbox 頁列 2027 年，其他商店待公告。 |
| Haunted Chocolatier | 官方仍稱完成時才推出，無日期。 |

重現：`node tests/platform-audit/status-20261122-b/apply-status.cjs`；加 `--apply` 寫入。腳本只允許修改發行相關欄位與平台說明，並確認 9 筆維持原狀的條目仍為 upcoming。
