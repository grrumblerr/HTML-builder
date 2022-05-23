const fs = require('fs');
const path = require('path');

let input = path.join(__dirname, 'styles');
let dest = path.join(__dirname, 'project-dist');
let destFile = path.join(dest, 'bundle.css');
let output = fs.createWriteStream(destFile);


fs.readdir(input, function (err, files) {
  if (err) throw err;

  for (let i = 0; i < files.length; i++) {
    let part = path.join(input, files[i]);

    if (path.extname(files[i]) === '.css') {
      let readableStream = fs.createReadStream(part, 'utf8');
      readableStream.on('data', function (chunk) {
        output.write(chunk);
      });
    }
  
  }

});