var express = require("express");
var http = require('http');
var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res){
	res.send('Hello,vueTestServer'); //服务器响应请求
});

// 系统登录
app.post('/login', async function(req, res){
	res.send({
		code: 200,
		msg: "登陆成功",
		userInfo: req.body
	});
});

var httpServer = http.createServer(app);
const PORT = 9003;
const hostname = '0.0.0.0';
httpServer.listen(PORT, hostname, function() {
    console.log('vue-test Server is running on: https://'+hostname+':%s', PORT);
});
