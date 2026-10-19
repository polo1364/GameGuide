# 平台稽核 D 段

查核快照：2026-10-18。範圍：auditIndex 630–837，共 208 筆。逐筆搜尋官方開發商、發行商及平台商店，並補讀關鍵平台欄位。

| 狀態 | 筆數 | 意義 |
|---|---:|---|
| verified | 98 | 本次官方證據足以支持所列已發售原生平台 |
| partial | 108 | 已取得部分官方證據，但完整平台、世代、發售狀態或版本範圍仍有缺口 |
| unresolved | 2 | 尚無可用的官方身分／版本／平台證據 |

完整逐筆來源、候選平台及未解原因在 [review-d.json](review-d.json)。**不可把 partial 的整列候選平台直接當成完整修正，也不可把 208 次查核當成 208 筆全部核實。** 每筆 partial／unresolved 皆另附 safePlatform，合併時使用 safePlatform ?? platform。38 筆 partial 的 safePlatform 包含有直接證據的更正或新增；其餘 70 筆 partial 與 2 筆 unresolved 保留原平台。候選 platform 與說明保留供後續補查。未修改 games.json。

## 可直接確認的主要修正

- Inscryption 補 macOS／Linux：Steam 官方商品資料三個桌面 OS 均標示支援，且非即將推出。此補正維持 verified，統計仍為 98 verified／108 partial／2 unresolved，partial 的安全更正仍為 38 筆。[Steam 官方商品資料](https://store.steampowered.com/api/appdetails?appids=1092790&l=english&cc=us)

- Avowed 補 PS5：Obsidian 已於 2026-02-17 宣布 PS5 版上市。[官方公告](https://www.obsidian.net/news/avowed-anniversary-update-and-playstation-5-version-both-available-now)
- Helldivers 2 補 Xbox Series X|S；2025-08-26 已上市，Xbox One 雲端遊玩不算原生版。[Xbox 上市公告](https://news.xbox.com/en-us/2025/08/26/helldivers-2-out-on-xbox-today-welcome-to-boot-camp/)
- Split Fiction、Blue Prince、South of Midnight、Dynasty Warriors: Origins、Star Wars Outlaws、Indiana Jones and the Great Circle 等已有 Switch 2 原生版本；不得與普通 Switch 向下相容混為一談。[Split Fiction](https://www.ea.com/games/split-fiction/split-fiction/news/out-now-on-nintendo-switch-2)、[Blue Prince](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/Blue-Prince-3037699.html)、[South of Midnight](https://www.nintendo.com/us/whatsnew/step-into-a-world-of-southern-folklore-living-magic-and-haunting-beauty-with-south-of-midnight/)、[Dynasty Warriors](https://www.koeitecmoamerica.com/dw_origins/us/movie/)、[Star Wars Outlaws](https://news.ubisoft.com/en-us/article/5yG2lSsv3rvVH2J1zhHRY0/star-wars-outlaws-now-available-on-nintendo-switch-2)、[Indiana Jones](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-2-games/Indiana-Jones-and-the-Great-Circle--3016547.html)
- Lorelei and the Laser Eyes 已有 PS4、PS5 與 Switch 2 Edition。[Simogo 官方作品頁](https://simogo.com/work/loreleiandthelasereyes/)
- Ready or Not、Abiotic Factor、Palia、Bellwright 已有 PS5／Xbox Series 版本。[VOID 更新](https://voidinteractive.net/los-suenos-stories-update-changelog/)、[Abiotic Factor Xbox 商品](https://www.xbox.com/en-us/games/store/abiotic-factor/9p4nv23q6qc2)、[Palia 上市公告](https://www.palia.com/news/ps5-xbox-elderwood-available-now)、[Bellwright 上市公告](https://www.playbellwright.com/news/console-release-and-summer-update)
- Content Warning 官方 FAQ 已列 Steam、PS5、Xbox Series、Switch 1＆2；Minishoot' Adventures 移植商則列 PC、PS5、Xbox One／Series、Switch／Switch 2。[Landfall FAQ](https://landfall.se/content-warning-faq)、[Seaven 已完成作品](https://www.seaven-studio.com/)
- The First Descendant 的 PS4／Xbox One 已於 2025-06-19 停服，不應再當作目前可玩的平台。[Nexon 官方公告](https://tfd.nexon.com/en/news/2750029)
- No Rest for the Wicked 的 1.0 已從 2026-10 延至 2027-03，PS 預購 2027-01 才開放；現階段只把 PC 搶先體驗列為已發售。[Moon Studios 延期公告](https://norestforthewicked.com/news/no-rest-for-the-wicked-1-0-delay-announcement)
- Enshrouded 與 Manor Lords 的官方 FAQ 仍將主機列為之後推出，不能把 PC Microsoft Store 當作 Xbox 主機發售。[Enshrouded FAQ](https://enshrouded.com/en-US/FAQ)、[發行商 Manor Lords FAQ](https://wiki.hoodedhorse.com/Manor_Lords/FAQ)
- Death Stranding 2 已於 2026-03 加入 PC；Crimson Desert 官方上市平台包含 Mac。[PlayStation 公告](https://blog.playstation.com/2026/03/17/death-stranding-2-new-pc-ps5-features-detailed-live-march-19/)、[Pearl Abyss 公告](https://www.pearlabyss.com/en-US/Board/Detail?_boardNo=14684)

## 需保留界線的記錄

Ultros 的 Xbox 世代已由 Xbox 官方商品補核：原生 Xbox Series X|S／PC，發售日期 2025-02-13；safePlatform 的 Xbox Series 新增可保留。原說明「世代待證」已移除，Mac 及完整桌面 OS 仍保留 partial。[Xbox 商品](https://www.xbox.com/en-US/games/store/ultros/9N38W9WN089L)

XDefiant 官方已宣布 2025-06-03 關閉伺服器；MultiVersus 則於 2025-05-30 結束線上功能與下載，既有離線存取有事前設定條件。兩筆皆為 partial，因歷史主機世代尚未完整補核，不能把平台名稱等同仍可玩。[Ubisoft](https://news.ubisoft.com/en-gb/article/1EywTnGrZdDqCoxKs2zNhZ/ubisoft-discontinues-development-on-xdefiant)、[WB FAQ](https://wbgamessupport.wbgames.com/hc/en-us/articles/41493370420755-MultiVersus-Season-5-FAQ)

Project Mugen 已改名 ANANTA；官方頁寫全球 2027-01-15。Intergalactic、Fable、State of Decay 3、Light No Fire、Haunted Chocolatier 的記錄必須區分預定平台與已發售平台。[ANANTA](https://www.anantagame.com/news/official/)、[Intergalactic](https://www.playstation.com/en-ie/games/intergalactic-the-heretic-prophet/)、[Fable](https://www.xbox.com/en-US/games/fable?wfExp=382CT)、[State of Decay 3](https://www.xbox.com/en-US/games/state-of-decay-3)、[Light No Fire](https://lightnofire.com/press)、[Haunted Chocolatier](https://www.hauntedchocolatier.net/faq/)

未解的兩筆：
- 826 Project: The Perceiver：本次查詢多為二手資訊，未取得可重驗官方完整平台／上市證據。
- 833 Perfect Dark：記錄疑似新重啟作品，但官方搜尋返回舊版商品；不能將舊 Xbox 360 商品當成重啟版證據，取消狀態亦尚缺本次可公開重驗官方聲明。

其他 partial 的個別缺口詳列 JSON。常見原因是 Xbox 世代欄位缺漏、官方網站使用不可擷取圖片、後續手機移植尚未補齊兩個 OS 商店，以及重製版／原作、續作／同名作品混淆。

## 驗證

逐筆索引完整覆蓋 630–837、名稱對應 baseline-838.json、索引無重複、JSON 可解析；verified／partial 皆附 HTTPS 官方來源。未變更其他人的檔案。這是資料來源稽核，未進行各平台實機啟動或區域購買測試。
