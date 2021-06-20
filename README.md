# Toys Store Website
玩具購物網站，販售玩具為主的線上購物平台
#### 👉 [網站 Demo](https://kaochihyu.github.io/reactjs-toys-store/#/)

## 專案簡介
![image](https://i.imgur.com/cd34KM5.png)

可使用以下 username, password 進行登入，或註冊新的帳號
|身分    |username|password|
|-------|--------|--------|
|管理者  |admin   |admin   |
|使用者  |user01  |user01  |

* 使用者可用功能
  * **登入、註冊頁面**：使用者可以登入、註冊成為會員
  * **所有商品頁面**：使用者可以瀏覽所有商品、輸入關鍵字搜尋商品
  * **單一商品頁面**：使用者可以瀏覽單一商品資訊、添加商品至購物車
  * **購物車頁面**：使用者可以修改商品數量、刪除購物車商品
  
* 管理者可用功能
  * **管理員後台頁面**：管理者可以瀏覽所有商品資訊、修改商品資訊、刪除商品、輸入關鍵字搜尋商品
  * **新增商品頁面**：管理者可以新增商品

## 專案架構
[Create React App](https://github.com/facebook/create-react-app) 建立專案
#### `npm install`
#### `npm run start`
在 http://localhost:3000  啟動此專案

```
reactjs-toys-store
├── README.md
├── node_modules
├── package.json
├── package-lock
├── prettierrc
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.js
    ├── globalStyle.js
    ├── index.css
    ├── index.js
    ├── Theme.js
    ├── utils.js
    ├── WebAPI.js
    ├── components
    ├── image
    ├── page
    └── redux
```

## 使用技術
* styled-components 撰寫可複用的 styled，支援 RWD
* function component 搭配 react hooks 撰寫可複用的元件
* React Router 撰寫路由實踐 SPA
* Redux 管理網站資料
* 串接 API 獲取資料，執行 CRUD

## API 來源
#### Toys store 的 API：https://toys-store-json-server.herokuapp.com/
此 API 是透過 [JSON Server](https://github.com/typicode/json-server) 製作的假 REST API  




