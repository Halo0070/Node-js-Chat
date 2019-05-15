var express=require('express');
var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send("Hello!");
});

app.get('/write', function (req, res) {
    res.sendFile(__dirname+"/write.html");
});

app.post('/write', function (req, res) {
    //res.send(req.body);
    let content=req.body;
    let doc=JSON.parse(JSON.stringify(content));
    let result_date = {
        title: doc.title + 'ㅋㅋ',
        content: doc.content + 'ㅎㅎ'
    };
    res.jsonp(result_date);
    res.end();
});

var server=app.listen(3000, function () {
    console.log("Go!");
});
