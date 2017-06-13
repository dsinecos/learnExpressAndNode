// Creating a custom transform stream that takes data and converts them to uppercase

var util = require('util');
var Transform = require('stream').Transform;

function uppercase(options) {
  
  if(!(this instanceof uppercase)) {
    return new uppercase(options);
  }
  
  Transform.call(this, options);
}

util.inherits(uppercase, Transform);

uppercase.prototype._transform = function(chunk, enc, cb) {
  
  var upperChunk = chunk.toString().toUpperCase();
  this.push(upperChunk);
  cb();
  
}


//-------------------------------

// Creating a server that uses the custom Transform stream to convert POST request's data to uppercase and send as response

var http = require('http');

var PORT = process.argv[2] || 2347;

var httpServer = http.createServer(httpListener);

function httpListener(request, response) {
  
  if (request.method === 'POST') {
    
    request.on('data', function(chunk) {
      
      var upperStream = new uppercase();
      
      upperStream.pipe(response);
      upperStream.write(chunk);
      //upperStream.end();
      
    });
    
    request.on('end', function() {
      response.end();
    });
    
  } else {
    
    response.end("This http server is only configured to handle http requests with POST method");
    
  }

  
}

httpServer.listen(PORT);
