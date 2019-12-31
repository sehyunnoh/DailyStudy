var express = require('express');
var http = require('http');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출 됨.');
    req.user = 'mike';
    next();

});

app.use(function(req, res, next){
    console.log('두번째 미들웨어 호출 됨.');
   
    // res.send('<h1>서버에스 응답한 결과 입니다. ' + req.user + '</h1>');
    var person = {name:'소녀시대', age:20}
    // res.send(person);

    var personStr = JSON.stringify(person);
    // res.send(personStr);

    res.writeHead('200', {'Content-Type':'application/json; charset=utf8'});
    res.write(personStr);
    res.end();
})

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스로 웹 서버를 실행 함.');
})