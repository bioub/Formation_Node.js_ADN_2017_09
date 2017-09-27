const fs = require('fs-extra');
const path = require('path');

const absDirPath = path.resolve(__dirname + '/log');
const absFilePath = path.resolve(absDirPath + '/app.log');

const logPromise = (filePath, msg) => {
  const date = (new Date()).toLocaleString();
  const log = `[${date}] ${msg}\n`;
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, log, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  });
};

const logs = async function() {
  try {
    await fs.stat(absDirPath);
  }
  catch (err) {
    await fs.mkdir(absDirPath);
  }
  
  try {
    await logPromise(absFilePath, 'Ligne 1');
    await logPromise(absFilePath, 'Ligne 2');
    await logPromise(absFilePath, 'Ligne 3');
    await logPromise(absFilePath, 'Ligne 4');
  }
  catch (err) {
    console.log(err.message);
  }
  console.timeEnd('logs');
};

console.time('thread dispo');
console.time('logs');
logs();
console.timeEnd('thread dispo');
