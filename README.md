# 中文假字生成器 (Chinese Lorem Ipusm) #

隨機生成看似中文文章的假字。

## 基本功能 ##
* 生成假字
* 設定想要生成的假字字數
* 跟據系統設定換成暗黑模式 (Dark Mode)，此功能暫時只適用於支援暗黑模式的電腦系統及部分瀏覧器，如 macOS Mojave 或 Windows 10。
* Progressive Web App (PWA)

## 研發中的功能 ##
* 一按複製文章
* 調較字體大小

## 選字 ##
單字選自[小學中文科常用字研究 - HKBU](https://ephchinese.ephhk.com/lcprichi/index.php?s=1)。

本來寫了個 for loop，打算用 unicode loop 出所有中文來用，但不常用字太多，假字生成生成出來不太自然，所以方案被棄用。

然後開始研究香港常用字，發現了[小學中文科常用字研究 - HKBU](https://ephchinese.ephhk.com/lcprichi/index.php?s=1)。寫了個簡單的 bash script `./utils/wget-words.sh` 把字庫下載後加以利用。先是試著把全套 3000 個字用作隨機抽樣，生成出來的假字比之前像樣得多，但感覺太多筆畫較多的字。再試著把字的難度造低，只取月用學習級別為一年級的字詞（一共 508 個字），就成了最後選用的字庫。

***

### Technology Used ###
* ReactJS
* Redux
* Styled Components
* React App Rewired

### Node.js Version ###
* Node.js 10

### Install Project Dependencies ###
* `npm install`

### Run Project ###
* `npm start`

### Build Production ###
* `npm run build`
