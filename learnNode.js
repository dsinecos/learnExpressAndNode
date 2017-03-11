/*

For this exercise we'll be creating a raw TCP server. There's no HTTP                                                                                    
  involved here so we need to use the net module from Node core which has                                                                                  
  all the basic networking functions.                                                                                                                      
                                                                                                                                                           
  The net module has a method named net.createServer() that takes a                                                                                        
  function. The function that you need to pass to net.createServer() is a                                                                                  
  connection listener that is called more than once. Every connection                                                                                      
  received by your server triggers another call to the listener. The                                                                                       
  listener function has the signature:                                                                                                                     
                                                                                                                                                           
     function listener(socket) {}                                                                                                               
                                                                                                                                                           
  net.createServer() also returns an instance of your server. You must call                                                                                
  server.listen(portNumber) to start listening on a particular port.                                                                                       
                                                                                                                                                           
  A typical Node TCP server looks like this:                                                                                                               
                                                                                                                                                           
     var net = require('net')                                                                                                                              
     var server = net.createServer(function (socket) {                                                                                                     
       // socket handling logic                                                                                                                            
     })                                                                                                                                                    
     server.listen(8000)                                                                                                                                   
                                                                                                                                                           
  Remember to use the port number supplied to you as the first command-line                                                                                
  argument.                                                                                                                                                
                                                                                                                                                           
  The socket object contains a lot of meta-data regarding the connection,                                                                                  
  but it is also a Node duplex Stream, in that it can be both read from, and                                                                               
  written to. For this exercise we only need to write data and then close                                                                                  
  the socket.                                                                                                                                              
                                                                                                                                                           
  Use socket.write(data) to write data to the socket and socket.end() to                                                                                   
  close the socket. Alternatively, the .end() method also takes a data                                                                                     
  object so you can simplify to just: socket.end(data).add
  
  To create the date, you'll need to create a custom format from a new                                                                                     
  Date() object. The methods that will be useful are:                                                                                                      
                                                                                                                                                           
     date.getFullYear()                                                                                                                                    
     date.getMonth()     // starts at 0                                                                                                                    
     date.getDate()      // returns the day of month                                                                                                       
     date.getHours()                                                                                                                                       
     date.getMinutes() 
  */

const net = require('net');

var portNumber = process.argv[2];

var server = net.createServer(listener);

server.listen(portNumber);

function date() {

  var rawDate = new Date();

  var month = rawDate.getMonth() + 1
  
  var date = rawDate.getFullYear() + "-" + month + "-" + rawDate.getDate() + " " + rawDate.getHours() + ":" + rawDate.getMinutes();

  return date;
}

function listener(socket) {

  socket.write(date());
  socket.end();

}