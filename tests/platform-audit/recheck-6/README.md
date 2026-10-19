# 剩餘6筆：官方證據與缺口複核

日期：2026-10-19。6筆均完成查核；4筆部分核實、2筆作品身分未確認，沒有足以新增平台或更動別名的證據。本輪更新來源與判讀，沒有移除條目或把缺少證據當作取消／不存在。目錄維持977款，其餘971筆與832筆非目標歷史紀錄逐欄不變。

[逐欄差異與搜尋紀錄](audit-6.json) · [待確認清單](pending.json) · [驗證](VALIDATION.md)

來源僅支持逐條標明的結論；排除誤命中的來源不代表目標電玩存在。已保留上一輪有效來源，新增來源不能補足的欄位繼續標示未知。

重現：`node tests/platform-audit/recheck-6/apply-review.cjs`，加 `--apply` 套用。完整目錄與歷史審計須符合本輪前值或預期值才可寫入；舊輪整合器不可用於目前目錄。

## 流亡黯道 手機版

partial｜行動裝置（系統未公布）

GGG 官方回顧與 ExileCon 公告確認 Path of Exile Mobile 專案及展場試玩；另取得官方手機頁的 2026-04-11 網頁存檔，原文描述實驗性手機專案，但未列 iOS／Android 或發售日。存檔日期不是新公告日期，也不能證明目前仍在開發。現行頁存取失敗不代表取消；具體系統與近期推出計畫仍待官方確認，發行狀態保持未知。

**待確認原因與解除條件：** 需要 GGG 明確指名 Path of Exile Mobile 的 iOS／Android 支援公告、正式商店商品或近期發行說明。歷史展場試玩、官網共用頁首平台與 2026 存檔時間均不能取代這些資訊。

- [官方來源／官方原頁存檔](https://web.archive.org/web/20260411052935/https://www.pathofexile.com/mobile)：成功讀取官方 /mobile 頁的 2026-04-11 存檔 HTML；canonical 指回 GGG 官網，正文稱實驗性手機專案及內部開發，未出現 iOS／Android 或發售日期。存檔是舊文保存，不是 2026 年新宣布開發。
- [官方來源／官方原頁存檔](https://www.pathofexile.com/forum/view-thread/3396409)：官方 Community_Team 的 ExileCon 2023 公告確認 Mobile 展場試玩；沒有具體手機作業系統或正式上市日期。
- [官方來源／官方原頁存檔](https://www.pathofexile.com/forum/view-thread/2722003)：官方 2019 年回顧確認曾宣布手機專案；不能作為目前發售計畫的證據。

搜尋紀錄：

- "Path of Exile Mobile" "Android" / "iOS"；限定 pathofexile.com、grindinggear.com：未取得具體官方手機 OS 發行清單；第三方標籤與主遊戲的平台欄不採用。
- 讀取 https://www.pathofexile.com/mobile 及 Internet Archive 原始頁：現行頁瀏覽工具失敗、原始 HTTPS 請求 403；存檔原始 HTML 回傳 200，保存於 poe-mobile-archive.html，請求狀態見 poe-fetch-results.json。存取失敗不能證明取消。
- "Path of Exile Mobile" GGG official announcement；重讀兩則 GGG 公告：取得官方歷史公告與原頁嵌入的公告影片連結，但未取得新的 OS／上市計畫；保留待確認。

## 巫師 重製版

partial｜未公布

限定初代完整重製 The Witcher Remake／Canis Majoris。Fool’s Theory 現行產品頁及 CDPR 2026-08-25 新聞稿的工作室介紹仍提及本案；取得的官方資料未列本案平台。該新聞稿中的 PC／PS5／Xbox Series／Switch 2 清單屬於《巫師 3》重製更新及資料片，不能移植到初代 Remake。平台保持未公布，並非斷言未來不推出。

**待確認原因與解除條件：** 需要 CDPR 或 Fool’s Theory 明確指名 The Witcher Remake／Canis Majoris 的平台公告或正式商品頁。原版／Enhanced Edition、《巫師 3》Remastered／Songs of the Past 與《巫師 4》的平台不能轉用；零售商分類與媒體推測不足以解除。

- [官方來源／官方原頁存檔](https://press.cdprojektred.com/en/news/1105/the-original-witcher-game-is-being-remade-from-the-ground-up)：2022-10-26 官方原始公告將 Canis Majoris 對應初代完整重製與 Fool’s Theory／UE5，沒有具體平台。
- [官方來源／官方原頁存檔](https://www.foolstheory.com/games/the-witcher/)：開發商現行專屬頁確認初代重製、開發中與 CDPR 監督；頁面沒有具體平台或發售日期。
- [官方來源／官方原頁存檔](https://press.cdprojektred.com/en/news/1839/the-witcher-3-wild-hunt-remastered-announced-songs-of-the-past-gets-first-look)：2026-08-25 官方新聞稿 About Fool’s Theory 段仍列 The Witcher Remake；正文平台清單明確屬於 The Witcher 3 Remastered／Songs of the Past，不是初代 Remake。

搜尋紀錄：

- The Witcher Remake platforms 2026；CDPR／Fool’s Theory 官方專案公告與產品頁：取得現行開發商頁、2022 初始公告及 2026-08-25 官方介紹，未取得本案具體平台公告。
- The Witcher Remake 2026 release platforms PC PS5；辨識 remake 與 remastered：排除零售商類別、媒體預測與《巫師 3》平台清單；不以其他作品推出時間推算本作日期或狀態。

## 武林群俠傳

partial｜電腦（作業系統待確認）

智冠官方可確認早期電腦單機《武林群俠傳》；本輪追查原始產品頁存檔、原廠手冊與盒裝規格線索，仍未取得能核對原作 Windows 支援的官方文字或清晰原廠圖片。未獲官方確認，非斷言 Windows 版本不存在；不套用 Online 或俠客風雲傳的規格。

**待確認原因與解除條件：** 需取得可辨識原版《武林群俠傳》題名與智冠出版身分的官方產品頁存檔、原廠手冊安裝章節或清晰盒裝系統需求圖；其中明列 Windows 或展示可確定為 Windows 的原廠安裝流程即可解除。此次封面庫回傳 HTTP 403，舊官網 CDX 索引 20 秒逾時；二手文字、遊戲重包賣場與其他作品規格不能取代此證據。

- [官方來源／官方原頁存檔](https://www.soft-world.com/News/NewsDetail?Sn=1163)：本輪成功讀取智冠 2015 China Joy 新聞，將《武林群俠傳》列入早期電腦單機 IP 脈絡，但沒有指明作業系統。
- [官方來源／官方原頁存檔](https://www.soft-world.com/About/History?EKind=6)：本輪成功讀取智冠官方 2002 年獎項紀錄，列《武林群俠傳》獲國內自製最佳養成遊戲獎；可確認原作歷史身分，不能從獎項推論 Windows。

搜尋紀錄：

- "武林群俠傳" "系統需求" 智冠；"武林群侠传" "说明书" Windows 2001：搜尋主要回傳 Online／新武林 Online 系統頁、重製作規格與二手文章；辨識後排除，未重新使用 Online FAQ 作證。
- "武林群俠傳" "soft-world" "2001" 官方網站；"武林群侠传" "包装" "Windows"：找到智冠歷史／年報與 MobyGames 原作條目，但未取得原始官方產品頁 Windows 規格；第三方資料庫 Windows 標記不採為官方證據。
- "武林群俠傳" "manual" OR "手冊" OR "盒背"；"wulin qunxia zhuan" "cover" "back"：找到插畫作者作品索引等二手資料，未取得原版手冊安裝頁或可核對的清晰盒背系統需求。
- 讀取 https://www.mobygames.com/game/21356/wulin-qunxia-zhuan/covers/：為尋找原廠盒裝掃描而讀取封面庫；瀏覽器工具無法讀取，HTTPS 原始請求 HTTP 403。沒有看到原廠盒背，因此不認證。
- site:web.archive.org "soft-world" "武林"；CDX 查詢 soft-world.com/*wulin*：搜尋未取得可用原始產品頁；https://web.archive.org/cdx/search/cdx?url=soft-world.com/*wulin*&output=json&filter=statuscode:200&collapse=urlkey&limit=15 原始請求 20 秒逾時，不能將逾時解讀為沒有存檔。
- 圖片搜尋「武林群俠傳 2001 盒 背面」「武林群俠傳 盒裝」「Wulin Qunxia Zhuan cover」：結果包含其他遊戲盒裝、原作光碟／正面圖及聲稱支援新 Windows 的非官方電子檔賣場；沒有讀到可辨識原廠的原作 OS 規格圖，不採用搜尋圖片的自動描述。
- 讀取 https://chiuinan.github.io/game/game/intro/ch/c33/wulin.htm：第三方頁為遊戲介紹／修改攻略，未找到 Windows 字樣或官方來源連結；非原廠手冊，不作平台證據，未下載或執行修改檔。
- 重讀智冠 NewsDetail?Sn=1163 與 About/History?EKind=6：兩個官方頁成功讀取，確認作品及電腦單機歷史範圍，但沒有 Windows 系統需求；維持 partial。

## 聲之形

unresolved｜未確認

本輪以「聲之形／聲の形／A Silent Voice」重新查權利方與平台商品結果，仍未取得能識別本條目的官方電子遊戲商品與平台表。已確認的同名第一方資料為漫畫及動畫電影；Voice of Cards 與引用電影作為靈感的 1000xRESIST 都是其他作品，不能轉用其 PC／PS／Switch 平台。這是證據未足，不是斷言不存在相關遊戲。

**待確認原因與解除條件：** 需要可與此條目對應的官方遊戲完整原文名稱，加上開發商／發行商或 Steam AppID、Nintendo 商品編號、PlayStation 商品頁等識別；若為尚未上市專案，需權利方或開發發行方的具名遊戲公告及平台段落。僅有電影名、卡牌RPG分類或先前平台欄不足以確認。

- [官方來源／官方原頁存檔](https://cstation.kodansha.co.jp/mangaip/database/0000019055)：講談社 IP 資料的《聲の形（１）》列作者大今良時、週刊少年 Magazine 與漫畫單行本敘述；這可識別漫畫 IP，不是電玩平台證據。
- [官方來源／官方原頁存檔](https://www.kyotoanimation.co.jp/works/koeM/)：京都動畫明列電影、原作大今良時、動畫製作與松竹配給；作品型態為動畫電影。
- [官方來源／官方原頁存檔](https://voiceofcards.square-enix-games.com/en_US/theisledragonroars)：Square Enix 的正式商品為 Voice of Cards: The Isle Dragon Roars，內容為卡牌呈現的劍與魔法 RPG；不能當作《聲之形》的英文名或平台來源。
- [官方來源／官方原頁存檔](https://store.steampowered.com/app/1675830/1000xRESIST/?l=tchinese)：Steam app 1675830 標題是 1000xRESIST，發行方說明僅把山田尚子動畫《聲之形》列為靈感，非聲之形同名或改編遊戲的商品識別。

搜尋紀錄：

- "聲之形" 遊戲 官方：命中包含動畫資料與 1000xRESIST 靈感說明；本輪未取得同名官方電子遊戲商品。
- "聲の形" ゲーム 公式：原文題名檢索仍未取得能與原目錄對應的遊戲發行公告。
- "聲の形" ゲーム；限制 kodansha.co.jp／kyotoanimation.co.jp／koenokatachi-movie.com：取得講談社漫畫 IP 與京都動畫電影資料；不足以證明電玩身分。
- "A Silent Voice" game；限制 store.steampowered.com／nintendo.com／store.playstation.com：主要有效命中是其他遊戲的靈感敘述；不是以本名發行的官方遊戲商品。
- "聲之形"；限制 Nintendo／PlayStation／Steam 官方網域：Steam 結果指向 1000xRESIST；商品主標題及 app ID 可排除同名誤認。
- "Voice of Cards" official site；限制 Square Enix 官方網域：重新確認 Square Enix 具名卡牌 RPG 商品，排除舊錯置別名；現有自身別名無須再修。

## 迷宮飯 千年國度的荒唐食譜

unresolved｜未確認

本輪重新搜尋完整中文題名、日文 IP 名稱及相關副標關鍵字，並讀取官方動畫、Arclight 桌遊與 KADOKAWA 活動頁，仍未取得此完整題名的官方電子遊戲商品或平台公告。桌遊的卡牌、骰子與實體活動均不能作 Switch／PC 平台證明；保留未確認，不否認未來或其他相關遊戲可能存在。

**待確認原因與解除條件：** 需要「千年國度的荒唐食譜」的官方原文完整題名與開發／發行商、正式商品連結或平台商品 ID；若中文為暫譯，需能把該暫譯連到官方原文作品的公告。只有《迷宮飯》IP 名稱、動畫頁、桌遊或單獨 Switch 標籤無法辨識此作。

- [官方來源／官方原頁存檔](https://arclightgames.jp/product/682mtet/)：Arclight 正式產品名稱是《モンスターイーター ～ダンジョン飯 ボードゲーム～》，列出實體卡牌、圖板、代幣與六面骰，並記 2022-09-15 發行；不是此完整副標的電子遊戲。
- [官方來源／官方原頁存檔](https://delicious-in-dungeon.com/)：官方頁列九井諒子原作、KADOKAWA 出版與 TRIGGER 動畫製作，內容為 TV 動畫；本頁不足以證實待核副標遊戲或其平台。
- [官方來源／官方原頁存檔](https://event-info.kadokawa.co.jp/dun_meshi_asobuild/)：KADOKAWA 的《ダンジョン飯〜謎解きの冒険者〜》為橫濱 ASOBUILD 場地活動，與待核完整題名不同，不能列為主機電子遊戲。

搜尋紀錄：

- "迷宮飯 千年國度的荒唐食譜"：本輪結果回傳無關書目／文本等，未找到完整題名相符的官方遊戲商品；檢索未命中不等於證明作品不存在。
- "千年國度的荒唐食譜"：副標精確檢索未取得可用的第一方作品識別。
- "迷宮飯 千年國度的荒唐食譜"；限制 Nintendo／Steam／PlayStation／KADOKAWA 官方網域：未取得符合完整題名的官方電子遊戲商品頁。
- "ダンジョン飯" "千年" ゲーム；"ダンジョン飯" "千年王国" ゲーム；"迷宮飯" "荒唐食譜"：僅作副標關鍵字交叉檢索，不將自行翻譯當成正式日文名；仍缺完整題名相符的官方作品。
- "ダンジョン飯" ゲーム；限制 kadokawa.co.jp／delicious-in-dungeon.com／arclightgames.jp：有效官方命中包含動畫、桌遊及實體解謎活動，均已按產品型態排除。
- "Delicious in Dungeon" game；限制 Steam／Nintendo／PlayStation 官方網域：回傳其他料理／地城遊戲及玩家或策展文字，不提供本條目副標與授權商品的對應證據；不據此替換作品。

## The Rise of the Golden Idol

partial｜PC/macOS/PS5/Xbox Series X|S/Xbox One/Switch/iOS/Android

限定 2024 年獨立續作 The Rise of the Golden Idol，保留已核實的平台。本輪新增 Team Idol 2024-10-10 官方發售日公告，列 PlayStation 5；現行 PS Store Concept 10010047 的實際商品與結構資料也僅列 PS5（PPSA25812）。PS4 仍只有歷史預告，未取得正式 SKU 或明確上市證據，因此不加入已上市平台；未查到不是取消證據。Netflix 行動服務版本已撤下，Playstack 獨立 iOS／Android 版本已重新提供；Switch 2 相容 Switch 版不等於原生版本。

**待確認原因與解除條件：** 仍缺 The Rise of the Golden Idol 的 PS4 正式商品（CUSA／PS4 SKU）或發行商明確說明 PS4 已上市的原始公告；目前可讀官方近上市公告與現售商品均只明列 PS5。這不構成 PS4 被取消或從未／永不推出的判斷。

- [官方來源／官方原頁存檔](https://store.steampowered.com/news/posts/?enddate=1728579631&feed=steam_community_announcements)：Team Idol 的 2024-10-10『Release Date Reveal, Extended Demo, and Case Redux』公告，為本作指定 2024-11-12 發售日並明列 Steam、Nintendo Switch、Xbox Series、PlayStation 5、Mobile；未把 PS4 列入該段具體平台。此公告僅正面支持其列出平台，不由省略推定取消。
- [官方來源／官方原頁存檔](https://store.playstation.com/en-us/concept/10010047)：2026-10-19 直接讀回商品 Platform=PS5、release=2024-11-12；原始頁 Product ID EP3495-PPSA25812_00-0003281733473898 與 Concept 10010047 的 platforms 均為 PS5。模板 compatibilityNotices 的 PS4 鍵不是商品平台。
- [官方來源／官方原頁存檔](https://www.playstation.com/en-us/games/the-rise-of-the-golden-idol/)：此前完整查核保留：Sony 2023 公告影片曾標 PS5 & PS4；不能將公告片或頁面 SEO 標題等同 PS4 正式上市。

搜尋紀錄：

- "The Rise of the Golden Idol" "PS4" "out now"；限定 playstack.com、thegoldenidol.com、blog.playstation.com：沒有得到符合 PS4 明確上市的第一方結果。
- "The Rise of the Golden Idol" "CUSA"；限定 store.playstation.com，另以全網 CUSA 排除 Dying／Persona：未取得本作 PS4 商品編號；PS Store 本作 Concept 可讀資料只列 PPSA／PS5，不能用其他 Golden Idol 關鍵字遊戲的 CUSA。
- "The Rise of the Golden Idol" "PS4"；限定 PlaystackGames／ColorGray7 官方社群：追到 PlaystackGames 的上市貼文僅稱 PlayStation、不分世代；ColorGray7 2024-11-12 原貼文 https://twitter.com/ColorGray7/status/1856399820006850717 直接讀取為 403，未以其無法讀取內容作證。
- The Rise of the Golden Idol PS4 CUSA Playstack November 2024 launch：新找到 Team Idol 2024-10-10 官方 Steam 公告，具體列 PS5。若干媒體列 PS4，但其中日文報導的 PS Store 連結實際指向前作 The Case of the Golden Idol（Concept 10010275），排除作為續作證據。
- "The Rise of the Golden Idol" "PS4 version" Playstack；Playstack news 的 PS4 搜尋：沒有找到可核對的第一方 PS4 正式 SKU 或上市聲明；停止重複相同搜尋，保留具體缺口。
