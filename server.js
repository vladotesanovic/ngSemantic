var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if(req.url.length < 2) {
    req.url = "/index.html";
  }
  fs.readFile(__dirname + "/" + req.url, function (err,data) {
    res.writeHead(200);
    res.end(data);
  });
}).listen(process.env.PORT || 3000, function() {
  console.log("Serving Demo at htpp://localhost:" + 3000);
});