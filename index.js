var http = require('http');
http.createServer (function (req, res) {
    res.writeHead (200, { 'Content-Type': 'text/html;charset=utf8'});
    res.end('Hello KTPM0121, chúc các bạn thành công với Node JS nha!!!');
}).listen(8080);