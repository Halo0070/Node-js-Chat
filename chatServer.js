var app=require('express')();
var server=require('http').createServer(app);
// http server를 socket.io server로 upgrade함.
var io=require('socket.io')(server);

// localhost:3003으로 server에 접속하면 client로 chatClient.html을 전송함.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/chatFront.html');
});