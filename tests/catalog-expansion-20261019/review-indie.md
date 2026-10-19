# 獨立遊戲新增研究 — 2026-10-19

本組交付 13 款，未修改 games.json。全量比對當前 977 筆 name、alias、seriesAliases 與來源中的 Steam App ID，候選皆未收錄；保留完整英文題名作識別，補入 Steam 官方繁中／簡中商品名，避免模糊單字或系列別名。

## 判準與範圍

- 熱度使用本輪直接讀取的 Steam 官方評論 API：language=all、purchase_type=all、filter=all、num_per_page=0。這是全語言且包含非 Steam 購買取得方式的累積評論數，與商店預設顯示的語言或 Steam 購買評論口徑不同；不聲稱銷量或當日熱銷排名。
- catalogPriority 是編輯優先序，3 最高、1 次級。較大的累積討論量優先；不是即時排名。
- 平台主欄限截至本輪已確認可遊玩的原生版本。PC 指 Windows；macOS、Linux 分別核實。搶先體驗使用 early-access，不當作未發售或 1.0。
- 主機移植預告、Steam Deck/Proton、控制器、向下相容與雲端服務不會自動增列原生平台。已公布但未有上市證據的移植在 note 明列；這不斷言未來不推出。
- 12 款 platformReviewStatus=verified，Buckshot Roulette 因 PS/Switch 現行上市狀態缺第一方證據而為 partial。已核實的 PC/Linux/Xbox 平台仍保留；不把未找到上市消息當作未上市或取消的證據。

| 遊戲 | 已確認平台 | 狀態 | Steam 全口徑評論數 | 正評 | 編輯優先 |
|---|---|---|---:|---:|---:|
| Escape From Duckov | PC / macOS | released | 104,918 | 84.5% | 3 |
| RV There Yet? | PC / Xbox Series X\\|S | released | 89,665 | 90.1% | 3 |
| My Winter Car | PC | early-access | 19,581 | 94.1% | 2 |
| Buckshot Roulette | PC / Linux / Xbox One / Xbox Series X\\|S | released | 127,628 | 95.1% | 3 |
| Mouthwashing | PC | released | 39,123 | 95.2% | 2 |
| Look Outside | PC | released | 15,255 | 98.2% | 2 |
| ULTRAKILL | PC | early-access | 247,187 | 97.3% | 3 |
| Elin | PC | early-access | 9,313 | 93.3% | 1 |
| Caves of Qud | PC / macOS / Linux / Switch | released | 12,754 | 95.0% | 2 |
| Stoneshard | PC / Linux | early-access | 35,913 | 74.7% | 2 |
| Songs of Syx | PC / macOS / Linux | early-access | 9,451 | 94.2% | 1 |
| Bopl Battle | PC | released | 26,114 | 97.2% | 2 |
| Mage Arena | PC | early-access | 20,477 | 90.8% | 2 |

## Escape From Duckov

Team Soda 開發、bilibili 發行的本篇撤離射擊遊戲，非同名攻略 App。

已確認 Windows PC、macOS 原生版本；Mac App Store 是 Mac 版，不等同 iOS/iPadOS。

Steam 16 Oct, 2025 發售本篇。

Steam 官方評論 API 全語言、全部取得方式累積 104,918 則，正評 84.5%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=3167020&l=english)：Steam 正式商品 3167020：Escape From Duckov；開發者 Team Soda；發行商 bilibili；已發售；原生桌機平台 Windows、macOS；未標 Early Access。
- [官方證據](https://www.duckov.com/news/?language=en-US&news_id=181751016426554216)：官方平台公告列 Windows、macOS；發行商店為 Steam、WeGame、Epic、Mac App Store。現行 Steam 商品資料確認 Windows/macOS 已發售。
- [熱度快照](https://store.steampowered.com/appreviews/3167020?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=104918，total_positive=88665，total_negative=16253；計算正評率 84.5%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## RV There Yet?

Nuggets Entertainment 的合作露營車遊戲。

Windows PC 與 Xbox Series X|S 已發售；Xbox Cloud Gaming 是串流服務，不另計原生平台；未把 Xbox One 算入。

Steam 21 Oct, 2025 發售本篇。

Steam 官方評論 API 全語言、全部取得方式累積 89,665 則，正評 90.1%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=3949040&l=english)：Steam 正式商品 3949040：RV There Yet?；開發者 Nuggets Entertainment；發行商 Nuggets Entertainment；已發售；原生桌機平台 Windows；未標 Early Access。
- [官方證據](https://www.xbox.com/en-ca/games/store/rv-there-yet/9mw79bjvf3qx)：Nuggets Entertainment 官方 Xbox 商品列 2026-06-30 發售、Series X|S 最佳化、PC 及購買價格。
- [熱度快照](https://store.steampowered.com/appreviews/3949040?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=89665，total_positive=80814，total_negative=8851；計算正評率 90.1%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## My Winter Car

Amistech Games 開發的 My Summer Car 續作，獨立商品，非前作模組。

現行 Steam 正式支援 Windows PC；搶先體驗可購買遊玩，未把 Proton 或串流算為原生 Linux/macOS。

Steam 29 Dec, 2025 開始搶先體驗，可購買遊玩，尚非 1.0。

Steam 官方評論 API 全語言、全部取得方式累積 19,581 則，正評 94.1%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=4164420&l=english)：Steam 正式商品 4164420：My Winter Car；開發者 Amistech Games；發行商 Amistech Games；已發售；原生桌機平台 Windows；仍標 Early Access。
- [官方證據](https://www.amistech.com/mwc/)：Amistech 官方頁確認這是 My Summer Car 的冬季續作，與同名非官方攻略站區別。
- [熱度快照](https://store.steampowered.com/appreviews/4164420?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=19581，total_positive=18428，total_negative=1153；計算正評率 94.1%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Buckshot Roulette

Mike Klubnika 開發、CRITICAL REFLEX 發行的 Buckshot Roulette 本篇，排除名稱相似的仿作。

Windows PC、Linux、Xbox One、Xbox Series X|S 已確認已發售。PlayStation 與 Nintendo Switch 於 2026-04 官方公告仍在移植認證，但 7 月後續公告只確認 Xbox 上市；缺少截至本輪可判定 PS/Switch 現行上市狀態的第一方證據，故平台整體保留 partial。雲端不算原生移植。

Steam 4 Apr, 2024 發售本篇。 移植上市範圍另見平台說明。

Steam 官方評論 API 全語言、全部取得方式累積 127,628 則，正評 95.1%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=2835570&l=english)：Steam 正式商品 2835570：Buckshot Roulette；開發者 Mike Klubnika；發行商 CRITICAL REFLEX；已發售；原生桌機平台 Windows、Linux；未標 Early Access。
- [官方證據](https://news.xbox.com/en-us/2026/07/08/buckshot-roulette-xbox-game-pass/)：由開發者與 CRITICAL REFLEX 署名的 Xbox Wire 公告確認 2026-07-08 首次登上主機，Xbox One/Series、Windows 與雲端同步推出。
- [官方證據](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1828894815562176)：2026-04-04 官方公告曾預告 PlayStation、Nintendo Switch、Xbox 移植；後續已上市證據確認 Xbox，未將預告的 PS/Switch 誤列已發售。
- [熱度快照](https://store.steampowered.com/appreviews/2835570?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=127628，total_positive=121353，total_negative=6275；計算正評率 95.1%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Mouthwashing

Wrong Organ 開發、CRITICAL REFLEX 發行的 2024 年心理恐怖本篇，非免費附加內容 Work In Progress。

已發售主欄限 Windows PC。PS4、PS5、Xbox Series X|S、Nintendo Switch 為已公布移植；原 2025 時程延後，最新可回讀公告仍在進行，未冒充已上市。

Steam 26 Sep, 2024 發售本篇。 移植上市範圍另見平台說明。

Steam 官方評論 API 全語言、全部取得方式累積 39,123 則，正評 95.2%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=2475490&l=english)：Steam 正式商品 2475490：Mouthwashing；開發者 Wrong Organ；發行商 CRITICAL REFLEX；已發售；原生桌機平台 Windows；未標 Early Access。
- [官方證據](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1823825466509022)：2026-02-10 Wrong Organ/CRITICAL REFLEX 公告說 PS5、Switch 實體版與移植仍在進行。
- [官方證據](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1819386365096741)：2025-12-19 官方公告明確撤回原定 2025 主機上市窗口，日期尚待確定。
- [官方證據](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1801617199563028)：2025-06-10 官方公告列 PS5、Switch，另確認 PS4、Xbox Series X|S 數位移植計畫。
- [熱度快照](https://store.steampowered.com/appreviews/2475490?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=39123，total_positive=37239，total_negative=1884；計算正評率 95.2%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Look Outside

Francis Coulombe 開發、Devolver Digital 發行的公寓生存恐怖 RPG。

發行商平台表及 Steam 均確認 Windows PC 原生版；此紀錄不包含同名研究論文或其他作品。

Steam 21 Mar, 2025 發售本篇。

Steam 官方評論 API 全語言、全部取得方式累積 15,255 則，正評 98.2%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=3373660&l=english)：Steam 正式商品 3373660：Look Outside；開發者 Francis Coulombe；發行商 Devolver Digital；已發售；原生桌機平台 Windows；未標 Early Access。
- [官方證據](https://influencers.devolverdigital.com/look-outside)：發行商 Creator Resources 明列平台 Windows PC、開發者 Francis Coulombe、發售日 2025-03-21。
- [熱度快照](https://store.steampowered.com/appreviews/3373660?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=15255，total_positive=14985，total_negative=270；計算正評率 98.2%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## ULTRAKILL

Arsi Hakita Patala 開發、New Blood Interactive 發行的 ULTRAKILL 本篇，非免費 Prelude Demo。

已確認 Windows PC 搶先體驗版；控制器相容、Steam Deck/Proton 或雲端遊玩不視為額外原生主機或 Linux 版本。

Steam 3 Sep, 2020 開始搶先體驗，可購買遊玩，尚非 1.0。

Steam 官方評論 API 全語言、全部取得方式累積 247,187 則，正評 97.3%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=1229490&l=english)：Steam 正式商品 1229490：ULTRAKILL；開發者 Arsi "Hakita" Patala；發行商 New Blood Interactive；已發售；原生桌機平台 Windows；仍標 Early Access。
- [熱度快照](https://store.steampowered.com/appreviews/1229490?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=247187，total_positive=240627，total_negative=6560；計算正評率 97.3%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Elin

Lafrontier 開發的 Elin，是 Elona 後繼作品；不與 Elona 或名稱含 Relink 的遊戲合併。

Windows PC 搶先體驗；官方明言未正式支援 Mac 與 ARM Windows，虛擬機 workaround 不作平台證據。

Steam 1 Nov, 2024 開始搶先體驗，可購買遊玩，尚非 1.0。

Steam 官方評論 API 全語言、全部取得方式累積 9,313 則，正評 93.3%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=2135150&l=english)：Steam 正式商品 2135150：Elin；開發者 Lafrontier；發行商 Lafrontier；已發售；原生桌機平台 Windows；仍標 Early Access。
- [官方證據](https://ylvania.org/elin_dev_e.html)：Lafrontier 官方疑難排解明言 Mac 與 ARM Windows 目前非正式支援；Mac Parallels 的 workaround 不等同原生 Mac 發行。
- [熱度快照](https://store.steampowered.com/appreviews/2135150?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=9313，total_positive=8689，total_negative=624；計算正評率 93.3%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Caves of Qud

Freehold Games 開發、Kitfox Games 發行的 Caves of Qud 本篇；不把 Diaspora 擴充包當另一款本篇。

Windows PC、macOS、Linux 與 Switch 本篇已發售；Switch 2 原生版日期仍未定，Switch 版相容不算原生 Switch 2；手機移植仍開發中。

Steam 5 Dec, 2024 發售本篇。 移植上市範圍另見平台說明。

Steam 官方評論 API 全語言、全部取得方式累積 12,754 則，正評 95.0%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=333640&l=english)：Steam 正式商品 333640：Caves of Qud；開發者 Freehold Games；發行商 Kitfox Games；已發售；原生桌機平台 Windows、macOS、Linux；未標 Early Access。
- [官方證據](https://www.cavesofqud.com/)：遊戲官網列 PC、Linux、Mac 並連結 Nintendo Switch 正式商店。
- [官方證據](https://www.nintendo.com/us/store/products/caves-of-qud-switch/)：Nintendo 本篇正式商品頁，對應 Kitfox Games 發行的 Switch 遊戲。
- [官方證據](https://kitfoxgames.notion.site/Caves-of-Qud-Press-Kit-4d504c02bb4d4791a837c43f6bb0b976)：Kitfox 官方 press kit 明列桌機 1.0 於 2024-12-05、Switch 於 2026-02-16，Switch 2 日期仍為問號。
- [官方證據](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706677829)：2026-10-15 官方公告再次確認手機移植仍在獨立開發時程，未稱已發售。
- [熱度快照](https://store.steampowered.com/appreviews/333640?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=12754，total_positive=12120，total_negative=634；計算正評率 95.0%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Stoneshard

Ink Stains Games 的 Stoneshard 付費本篇，非 Stoneshard: Prologue。

Windows PC、Linux 搶先體驗已可遊玩；以現行官方 PC/Linux 平台表為準，未把歷史主機目標當作已上市，亦非免費 Prologue。

Steam 6 Feb, 2020 開始搶先體驗，可購買遊玩，尚非 1.0。

Steam 官方評論 API 全語言、全部取得方式累積 35,913 則，正評 74.7%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=625960&l=english)：Steam 正式商品 625960：Stoneshard；開發者 Ink Stains Games；發行商 HypeTrain Digital；已發售；原生桌機平台 Windows、Linux；仍標 Early Access。
- [官方證據](https://stoneshard.com/presskit/sheet.php?p=stoneshard)：Ink Stains Games 官方 factsheet 的 Platforms 僅列 PC/Linux，日期為 2020-02-06；現行 Steam 同列 Windows、Linux 與搶先體驗。
- [熱度快照](https://store.steampowered.com/appreviews/625960?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=35913，total_positive=26825，total_negative=9088；計算正評率 74.7%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Songs of Syx

Gamatron 的 Songs of Syx 城邦模擬本篇，非原聲帶或免費 demo 商品。

Windows PC、macOS、Linux 原生搶先體驗版；付費版本與落後數月的免費 demo 區分。

Steam 21 Sep, 2020 開始搶先體驗，可購買遊玩，尚非 1.0。

Steam 官方評論 API 全語言、全部取得方式累積 9,451 則，正評 94.2%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=1162750&l=english)：Steam 正式商品 1162750：Songs of Syx；開發者 Gamatron AB；發行商 Gamatron AB；已發售；原生桌機平台 Windows、macOS、Linux；仍標 Early Access。
- [官方證據](https://songsofsyx.itch.io/songs-of-syx)：作者官方商店列 Windows、macOS、Linux，並提供三種系統完整付費下載檔；明確標為開發中。
- [官方證據](https://www.songsofsyx.com/)：官方網站連結 Steam、GOG 與作者 itch.io，確認來源為同一作品；免費版本是落後數月的 demo。
- [熱度快照](https://store.steampowered.com/appreviews/1162750?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=9451，total_positive=8901，total_negative=550；計算正評率 94.2%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Bopl Battle

Johan Grönvall / Zapray Games 的黏液多人格鬥本篇，非 Bopl Battle Demo。

目前可由官方商品確認的已發售原生版為 Windows PC；Remote Play Together、控制器支援不當作額外主機或手機移植。

Steam 16 Nov, 2023 發售本篇。 移植上市範圍另見平台說明。

Steam 官方評論 API 全語言、全部取得方式累積 26,114 則，正評 97.2%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=1686940&l=english)：Steam 正式商品 1686940：Bopl Battle；開發者 Johan Grönvall；發行商 Zapray Games；已發售；原生桌機平台 Windows；未標 Early Access。
- [官方證據](https://zapraygames.com/)：開發者官網以 Bopl Battle 為正式作品並連往 Steam；Steam 商品由 Johan Grönvall 開發、Zapray Games 發行。
- [熱度快照](https://store.steampowered.com/appreviews/1686940?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=26114，total_positive=25372，total_negative=742；計算正評率 97.2%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## Mage Arena

jrsjams 開發發行、Steam App 3716600 的 Mage Arena，非 Magic: The Gathering Arena、Mages Arena 或 Tactics Mage Arena。

Windows PC 搶先體驗；語音施法與連線遊玩是遊戲功能，未將同名手機 App、雲端或控制器支援誤列為原生移植。

Steam 24 Jul, 2025 開始搶先體驗，可購買遊玩，尚非 1.0。 移植上市範圍另見平台說明。

Steam 官方評論 API 全語言、全部取得方式累積 20,477 則，正評 90.8%（2026-10-19 快照）；作為收錄優先依據，非銷量或當日排行。

- [官方證據](https://store.steampowered.com/api/appdetails?appids=3716600&l=english)：Steam 正式商品 3716600：Mage Arena；開發者 jrsjams；發行商 jrsjams；已發售；原生桌機平台 Windows；仍標 Early Access。
- [熱度快照](https://store.steampowered.com/appreviews/3716600?json=1&language=all&purchase_type=all&filter=all&num_per_page=0)：language=all、purchase_type=all、filter=all；total_reviews=20477，total_positive=18594，total_negative=1883；計算正評率 90.8%。計數範圍包含全部取得方式，與商店預設 Steam 購買評論數可能不同。

## 暫未納入與拒用來源

- Quasimorph：Steam 確認 Windows 1.0 已出，並有逾八千則全口徑評論，但 [Xbox 官方商品頁](https://www.xbox.com/en-US/games/store/quasimorph/9p74w2r6x7fg) 只見 Xbox One/Series 可玩欄，沒有本輪可回讀的上市日期、價款或購買狀態，尚無法分清預備上架與正式上市，也不能僅以 Series 可玩欄證成原生 Series 版本。本輪不新增，避免引入平台缺口。
- 9 Kings 留由手機組查核，避免同輪跨組重複。
- Bopl Battle 討論區轉述 Discord、ULTRAKILL 玩家討論、Mage Arena 非官方攻略站不作平台證據。MyWinterCar.com 是自稱非官方的攻略站，改用 Amistech 正式網站。
- RV There Yet? 2025 年媒體/攻略仍說沒有 Xbox 版，但被 2026-06-30 官方 Xbox 商店上市證據取代。
- Buckshot Roulette 搜尋命中 CloverPit 的 PS Store 描述，因商品身分不同，不作 Buckshot 的 PS 上市證據。
- Caves of Qud 官方 press kit 的 Switch 2 日期仍是問號；10 月 15 日官方更新仍稱手機移植有自己的開發時程。因此不從 Switch 2 相容或手機預告推成已發售。

## 檢查

JSON 13 筆、13 個唯一題名；現有 977 筆正規化 name/alias/seriesAliases 與 Steam App ID 比對無重複。每筆官方 evidence.source 都列在 platformSources，熱度來源都列在 sources。所有核實日期為 2026-10-19；新增候選與資料來源已 read-back 驗證。此研究未套用目錄，也未改應用程式。


## 官方中文別名補核

本輪直接讀取相同 Steam App ID 的 tchinese / schinese appdetails，只有商品 name 實際回傳中文者加入；沒有用自動繁簡轉換製造官方別名。

- Escape From Duckov：[商品資料](https://store.steampowered.com/api/appdetails?appids=3167020&l=tchinese)；同一 Steam 商品 3167020 的官方 繁中商品名為「逃離鴨科夫」，並沿用同一商品平台資料；作精確中文別名。
- Escape From Duckov：[商品資料](https://store.steampowered.com/api/appdetails?appids=3167020&l=schinese)；同一 Steam 商品 3167020 的官方 簡中商品名為「逃离鸭科夫」，並沿用同一商品平台資料；作精確中文別名。
- RV There Yet?：[商品資料](https://store.steampowered.com/api/appdetails?appids=3949040&l=tchinese)；同一 Steam 商品 3949040 的官方 繁中商品名為「我們到了嗎？」，並沿用同一商品平台資料；作精確中文別名。
- RV There Yet?：[商品資料](https://store.steampowered.com/api/appdetails?appids=3949040&l=schinese)；同一 Steam 商品 3949040 的官方 簡中商品名為「我们到了吗？」，並沿用同一商品平台資料；作精確中文別名。
- Buckshot Roulette：[商品資料](https://store.steampowered.com/api/appdetails?appids=2835570&l=schinese)；同一 Steam 商品 2835570 的官方 簡中商品名為「恶魔轮盘」，並沿用同一商品平台資料；作精確中文別名。
- Mouthwashing：[商品資料](https://store.steampowered.com/api/appdetails?appids=2475490&l=schinese)；同一 Steam 商品 2475490 的官方 簡中商品名為「缄默祸运」，並沿用同一商品平台資料；作精確中文別名。
- Stoneshard：[商品資料](https://store.steampowered.com/api/appdetails?appids=625960&l=tchinese)；同一 Steam 商品 625960 的官方 繁中商品名為「紫色晶石」，並沿用同一商品平台資料；作精確中文別名。
- Songs of Syx：[商品資料](https://store.steampowered.com/api/appdetails?appids=1162750&l=schinese)；同一 Steam 商品 1162750 的官方 簡中商品名為「希克斯之歌」，並沿用同一商品平台資料；作精確中文別名。


## 最後判準修訂

- Buckshot Roulette 改為 partial，移除 platformVerifiedAt。Windows PC、Linux、Xbox One、Xbox Series X|S 已確認已發售。PlayStation 與 Nintendo Switch 於 2026-04 官方公告仍在移植認證，但 7 月後續公告只確認 Xbox 上市；缺少截至本輪可判定 PS/Switch 現行上市狀態的第一方證據，故平台整體保留 partial。雲端不算原生移植。 [2026-07-14 官方公告](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1837955055365564)沒有解答 PS/Switch；本輪不以查無頁面推定取消。
- 其餘 12 款 verified。Mouthwashing 官方明確說移植進行中；Caves of Qud 官方 press kit 與本月更新明確區隔 Switch 已出、Switch 2 未定與手機開發中。
- Buckshot 列頂層 remainingReason=announced-console-release-unconfirmed，remainingDetails 記錄 PS/Switch 正式上市公告或商店 SKU 缺口；這是本輪新增候選缺口，沒有改動既有 6 筆待補紀錄。
- 平台字串已改為既有目錄的無空格斜線格式。官方 Steam 所見 Stoneshard 中文商品名是「紫色晶石」，並非本輪可證的「石質碎片」，因此未加入後者。

