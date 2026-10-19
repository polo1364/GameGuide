# 武林群俠傳：原版作業系統再次查核

日期：2026-10-19。auditIndex 275；recheck-6 baseline 的 reviewIndex 2。

結果維持 **partial／電腦（作業系統待確認）**。此次沒有取得足以核定原作 Windows 的新增一手證據，不變更名稱或現有三個別名。

本輪成功重讀智冠官方 2015 China Joy 新聞，確認《武林群俠傳》位於早期電腦單機 IP 脈絡；官方 2002 年獎項紀錄則確認早期同名作品。兩者均未列作業系統，因此只支持目前的「電腦」範圍。[智冠 IP 新聞](https://www.soft-world.com/News/NewsDetail?Sn=1163)、[智冠歷史獎項](https://www.soft-world.com/About/History?EKind=6)

## 本輪新增方向與實際結果

- **舊官方產品頁存檔**：搜尋 web.archive.org 的智冠／武林組合，並對 soft-world.com/*wulin* 發出 CDX 索引查詢；索引請求 20 秒逾時，未取得可讀快照。這是存取失敗，不代表不存在存檔。
- **原廠盒裝圖**：追查 [MobyGames 原作封面庫](https://www.mobygames.com/game/21356/wulin-qunxia-zhuan/covers/) 尋找原廠包裝掃描；實際 HTTPS 請求回傳 403，未看到盒背。資料庫的文字 Windows 標記本身不是原廠證據，未採用。
- **手冊與盒背搜尋**：繁簡題名搭配 manual、手冊、盒背、包裝及英文題名搜尋，主要找到二手介紹與插畫索引；圖片搜尋還混入其他遊戲、正面封面與非官方重包賣場，沒有可核對的原作系統需求圖。未使用圖片搜尋的自動描述當作人工讀圖。
- **疑似文件線索**：[第三方原作頁](https://chiuinan.github.io/game/game/intro/ch/c33/wulin.htm) 實讀內容為修改／攻略，沒有 Windows 文字或官方出處連結，不能認作原廠安裝手冊；未下載執行任何遊戲／修改檔。
- **混名排除**：系統需求搜尋再次回傳 Online／新武林 Online 與重製作內容，沒有把這些結果當成原版 Windows 證據，也沒有重做 Online FAQ 查核。

JSON 的 searched 欄保存具體查詢與結果；platformSources 僅列實讀成功的智冠官方資料，失敗或第三方線索不混入支持來源。

## 如何解除待確認

需要一份能同時辨識原版題名、智冠出版身分與 OS 的資料，例如原始官方產品頁存檔、原廠手冊安裝章節或清晰原廠盒裝規格圖。若其中明列 Windows，或原廠安裝流程清楚展示 Windows 環境，即可核定；不必只限正式系統需求表。

缺少這份證據不表示 Windows 版不存在。現有別名沒有新證據顯示錯誤，因此本輪不提供 alias 修正。只新增本組 JSON／Markdown，未修改主目錄或其他批次。
