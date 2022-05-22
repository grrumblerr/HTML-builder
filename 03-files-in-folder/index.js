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
          console.log(file, (stats.size / 1024).toFixed(2) + ' kB');
        }
      });
    });
  });
}

readFiles(dir);