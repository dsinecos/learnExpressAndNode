var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var stylus = require('stylus');

var app = express();
const PORT = process.argv[2] || 2348;

//app.use(stylus.middleware(process.argv[3]));

app.use(express.static(process.argv[3]));

app.listen(PORT);