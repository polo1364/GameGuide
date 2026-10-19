# 31 筆作品身分與平台查核驗證

日期：2026-10-19。目錄 2.8.0、應用程式 4.10.0、Service Worker 21。

## 結果

- 31/31 重新查核，6 verified、4 partial、21 unresolved。
- 6 處平台調整、0 處新別名更正；沒有新增、刪除或合併遊戲。
- 27 筆補入共 64 組具名版本對照；每組保留獨立平台、範圍與官方來源，並傳入攻略提示。
- 目錄維持 964 筆；933 筆非目標資料逐欄完整保留。
- 原 838 筆歷史紀錄累計 813 verified、4 partial、21 unresolved；包括前輪已合併的 2 筆紀錄，不能將 813 視為目前目錄中不同遊戲數。

## 六處平台調整

| 條目 | 修改後 | 查核範圍 |
|---|---|---|
| 魔力寶貝 懷舊版 | PC | 中國易玩通懷舊服務；官方安裝截圖與共用客戶端公告交叉確認 |
| 遊戲王 World Championship | 依年度確認 | 年度及 GBA／DS 證據改列各版本對照，泛稱不合併平台 |
| 初音未來 Project DIVA | PSP | 2009 年無副標原作 |
| 樂高 指環王 | 原平台另補 Android | 原 Google Play 官方商品存檔確認歷史發行 |
| 薩爾達傳說 無雙 | Wii U | 2014 年 Hyrule Warriors 原作 |
| 世界樹的迷宮 | DS | 2007 年 Etrian Odyssey 原作 |

Fate/stay night 平台仍為 PC；取得 TYPE-MOON 原版商品與系統需求，補足身分證據後升為 verified。上表的年度泛稱依然 unresolved，平台欄調整不等於完成版本選定。

## 實際驗證

- `node --check tests/regression.cjs`、`node --check tests/platform-audit/recheck-31/apply-review.cjs` 通過；index.html 內嵌 JavaScript 與 sw.js 語法解析通過。
- `node tests/regression.cjs`：**38/38 通過**。需既有 Playwright runtime 的 NODE_PATH。
- 回歸涵蓋完整 838 筆審計、歷史 384／49 快照、31 筆逐欄差異、933 筆保留、別名與合併名稱解析、版本來源傳入攻略提示、不明版本清除平台偵測、書籤、DeepSeek 模擬請求與錯誤恢復。
- Chromium 視窗 1440、390、320 像素主流程與版面通過；真實 Service Worker 的版本更新及離線重新載入通過。
- 獨立唯讀覆核確認 807 筆非目標歷史審計未改。覆核發現重套工具未檢查歷史審計漂移，已補上完整前值／預期值檢查；回歸以純記憶體模擬 catalog 與 audit 分別被修改，均在任何寫入前拒絕。
- 重複套用後 7 個生成檔逐位元組一致，SHA-256 見 [validation-hashes.json](validation-hashes.json)。測試輸出見 [regression-output.txt](regression-output.txt)。

## 仍未確認的 25 筆

- 19 筆系列／同名入口：官方版本已列明，但原泛稱無法唯一選定；不替使用者猜年份或副標題。
- 2 筆作品身分未確認：《聲之形》、《迷宮飯 千年國度的荒唐食譜》。未以動畫、桌遊或相似遊戲替代。
- 4 筆部分核實：《武林群俠傳》缺原單機官方 OS 規格；《流亡黯道 手機版》、《巫師 重製版》缺具體發行平台；The Rise of the Golden Idol 缺 PS4 正式上市證據，歷史預告已另記。

官方頁面及逐項判斷見 [README.md](README.md)，逐欄差異見 [audit-31.json](audit-31.json)。歷史發行不保證現在可購買或相容最新系統；版本對照不是完整系列清單。沒有執行遊戲、實體手機驗收或真實付費 DeepSeek 呼叫，也未部署外部站點。
