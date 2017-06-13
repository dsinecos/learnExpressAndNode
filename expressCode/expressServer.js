var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var stylus = require('stylus');
var crypto = require('crypto');
var fs = require('fs');

var app = express();
const PORT = process.argv[2] || 2348;

app.get('/books', function(req, res) {
  
  fs.readFile(process.argv[3], sendObject);
  
  function sendObject(err, chunk) {
    
    var object = JSON.parse(chunk);
    res.json(object);
  }
  
});

app.listen(PORT);

