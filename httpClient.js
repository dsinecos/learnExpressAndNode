var http = require('http');

var optionsGet = {
  port: 2346,
  method: 'GET',
  path: '/api/parsetime?iso=2013-08-10T12:10:15.474Z'
}

var requestGet = http.request(optionsGet, getListener);

function getListener(response) {
  
  /*
  console.log("Response's status code " + response.statusCode);
  console.log("Response Headers " + JSON.stringify(response.headers));
  console.log("Looks like this works too " + response.rawHeaders);
  console.log("HTTP Version " + response.httpVersion);
  console.log("URL " + response.url);
  console.log(response.socket);
  */
  
  response.setEncoding('utf8');
  
  response.on('data', function (chunk) {
    console.log("Body " + chunk);
  });  
  
  response.on('end', function() {
    console.log("No more data in response ");
  });
  
}

requestGet.on('error', function(error) {
  console.log("Error returned from Server " + error);
});

requestGet.end();

/*
var optionsPost = {
  port: 2346,
  method: 'POST'
}

var requestPost = http.request(optionsPost, postListener);

function postListener(response) {
  
  response.on('data', function (chunk) {
    console.log(" " + chunk);
  });
     
}

requestPost.write("This is the body of the post, hopefully it reaches and is sent back capitalised");

requestPost.write("This is another post, what would happen with this?");

requestPost.end();
*/





