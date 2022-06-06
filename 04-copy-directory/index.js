const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'files');
const dest = path.join(__dirname, 'files-copy');

async function copyDir(src, res) {
  await fs.promises.rm(res, { recursive: true, force: true });
  await fs.promises.mkdir(res);

  let files = await fs.promises.readdir(src,  {withFileTypes: true});

   
  for (let file of files) {

    if (file.isFile()) {
      await fs.promises.copyFile(path.join(src, file.name), path.join(res, file.name));
    }
    else if (file.isDirectory()) {
      await copyDir(path.join(src, file.name), path.join(res, file.name));
    }
  }
  console.log('Copied');
};

copyDir(source, dest);