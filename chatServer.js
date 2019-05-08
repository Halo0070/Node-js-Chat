var app=require('express')();
var server=require('http').createServer(app);
// http server를 socket.io server로 upgrade함.
var io=require('socket.io')(server);

// localhost:3003으로 server에 접속하면 client로 chatFront.html을 전송함.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/chatFront.html');
});

// namespace /chat에 접속.
var chat=io.of('/chat').on('connection', function(socket) {
    socket.on('chat message', function(data) {
        console.log('message from client: ', data);

        var name=socket.name=data.name;
        var room=socket.room=data.room;
        var type=socket.room=data.type;

        // room에 join함.
        socket.join(room);
    });
});