const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = require('process');

const file = path.resolve(__dirname, 'written.txt');
const outStream = fs.createWriteStream(file);

stdout.write('Type your text\n');
stdin.on('data', (data) => {
  let input = data.toString();
  if (input.trim() === 'exit') {
    process.exit();
  }
  outStream.write(input);
});
process.on('SIGINT', exit);
process.on('exit', () => stdout.write('Succesfully written'));
