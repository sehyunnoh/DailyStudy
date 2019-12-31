var express = require("express");
var http = require("http");
var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser');

var app = express();

console.log(__dirname);

app.set("port", process.env.PORT || 3000);
// app.use(static(path.join(__dirname, 'public')));
app.use('/public',static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// middleware 등록
app.use(function(req, res, next) {
  console.log("첫번째 미들웨어 호출됨.");

//   res.redirect("http://google.co.kr");

  var userAgent = req.header("User-Agent");
  var paramId = req.body.id || req.query.id;

  res.send(
    "<h3>서버에서 응답 : User-Agent - >" +
      userAgent +
      "</h3>" +
      "<h3>Param ID -> " +
      paramId +
      "</h3>"
  );
});

var server = http.createServer(app).listen(app.get("port"), function() {
  console.log("익스프레스로 웹 서버를 실행 함.");
});
