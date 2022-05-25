const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'secret-folder');

function readFiles(dir) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach(function (file) {

      let filePath = path.join(dir, file);

      fs.stat(filePath, function (err, stats) {

        if (err) throw err;
        if (stats.isDirectory()) return;
        if (stats.isFile()) {
          let fileName = file.split('.');
          // console.log(fileName);
          let name = fileName[0];
          let ext = fileName[1];
          console.log(`${name} - ${ext} - ${stats.size}` + ' Bytes');
        }
      });
    });
  });
}

readFiles(dir);