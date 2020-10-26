# 簡易登入介面
簡單板的帳密檢查機制

## 功能
- 輸入正確的帳密將導致歡迎頁面
- 輸入錯誤的帳密會跳出alert訊息，並停留在登入頁面


## 測試帳號

| 帳號 | 密碼 |
| ------ | ----------- |
| tony@stark.com   | iamironman |
| captain@hotmail.com | icandothisallday |
| peter@parker.com    | enajyram |
| natasha@gamil.com    | *parol#@$! |
| nick@shield.com    | password |

## Requirement
- Node.js

## Packages
- express 
- express-handlebars 
- body-parser

### 測試方式
透過 git clone 指令將專案下載下來到本機端

開啟終端機 (Terminal)，進入資料夾內

執行 npm install，將專案所需套件下載下來

套件安裝完畢後，用專案所設定的統一指令 npm run dev，即可執行專案

預設 port 為 3000，請直接打開瀏覽器，並在 URL 輸入 http://localhost:3000/ 即可瀏覽網頁