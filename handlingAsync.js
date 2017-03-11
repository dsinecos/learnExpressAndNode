var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

// To learn how to manage asynchronous streams receiving chunks of data

http.get(url1, processResponse);
http.get(url2, processResponse);
http.get(url3, processResponse);

// Can I use closures to handle asynchronous events

function processResponse(response) {
  var responseData = ""; // Use let and see what happens
  
  response.on('data', function(chunk){
    
    responseData += chunk;
    
  });
  
  response.on('end', processCompleteChunk(responseData));
  
  // To check if I can retrieve the URL from which it was sent from the chunk received
}

function processCompleteChunk(responseData) {
  
  console.log(responseData);
  
}
