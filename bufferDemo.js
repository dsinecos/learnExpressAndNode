var fs = require('fs');

var readable = fs.createReadStream('loremipsum.txt', {highWaterMark: 5 * 1024});

var writable = fs.createWriteStream('loremipsumcopy.txt');

//console.log(readable);


readable.on('data', process);

function process(chunk) { 
  //console.log('Finished reading a chunk of size ' + chunk.length);
 // console.log(chunk);  
  writable.write(chunk);
}
