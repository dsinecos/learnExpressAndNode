module.exports = filterByExt;

var fs = require('fs');
const path = require('path');

function filterByExt(directoryToFilter, extensionToFilterBy, callback) {

  //console.log(directoryToFilter);
  
  var extensionToFilterBy = '.' + extensionToFilterBy

  fs.readdir(directoryToFilter, filterFileNameByExtension);

  function filterFileNameByExtension(err, listOfFileName) {

    if (err !== null) {
      callback(err);
    } else {

      listOfFileName.forEach(function(fileName) {
        
        var fileExtension = path.extname(fileName);

        if (fileExtension === extensionToFilterBy) {
          
          callback(err, fileName);
          
        } else {}

      });



    }



  }

}