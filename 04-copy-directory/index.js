const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'files');
const dest = path.join(__dirname, 'files-copy');

fs.mkdir(dest, { recursive: true }, err => {
  if (err) throw err;
});

fs.readdir(dest, (err, file) => {
  if (err) throw err;
  for (let i of file) {
    fs.unlink(path.join(dest, i), err => {
      if (err) throw err;
    });
  }
});


fs.readdir(dir, function(err, files) {
  if (err) throw err;

  files.forEach(function (name) {
    let input = path.join(dir, name);
    let output = path.join(dest, name);

    fs.copyFile(input, output, err => {
      if (err) throw err;
      console.log(`File ${name} is copied`);
    });

  });
});