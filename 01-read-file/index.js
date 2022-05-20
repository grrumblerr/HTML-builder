const fs = require('fs');
const path = require('path');


let read = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf8');

read.on('data', (data) => {
  console.log(data);
});

// fs.readFile(
//   path.join(__dirname, 'text.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );