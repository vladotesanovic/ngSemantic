const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  if(req.url.length < 2) {
    req.url = "/demo/index.html";
  }
  fs.readFile(__dirname + "/" + req.url, function (err,data) {

    if (req.url.search(".css") > 0) {
      res.writeHead(200, {'Content-Type': 'text/css'});
    } else {
      res.writeHead(200);
    }

    res.end(data);
  });
}).listen(process.env.PORT || 3000, function() {
  console.log("Serving Demo at htpp://localhost:" + 3000);
});
