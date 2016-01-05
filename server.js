var express = require("express");

var app = express();

// serve index response from public folder
app.use(express.static("./build"));

var server = app.listen((process.env.PORT || 5000));
server.listen((process.env.PORT || 5000));