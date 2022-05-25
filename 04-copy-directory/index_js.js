const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'files');
const dest = path.join(__dirname, 'files-copy');

async function copyDir(src, res) {
  await fs.promises.rm(res, { recursive: true, force: true });
  await fs.promises.mkdir(res);

  let files = await fs.promises.readdir(src);

   
  for (const file of files) {
    fs.copyFile(path.join(src, file), path.join(res, file), err => {
      if (err) throw err;
      console.log(`File ${file} is copied`);
    });
  }
}

copyDir(source, dest);