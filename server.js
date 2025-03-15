// See https://github.com/typicode/json-server#module
const cors = require('cors');
const jsonServer = require('json-server')
const server = jsonServer.create()
const auth = require("json-server-auth");
const db = require("./db.json");
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

// 設置 CORS 允許所有來源
server.use(cors())

// 設置預設中介軟體
server.use(middlewares)

// 設置路由資料庫
server.db = router.db;

// 啟用 json-server-auth 中介軟體
server.use(auth);


// 配置 json-server 路由
server.use(router)

// 啟動伺服器
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
