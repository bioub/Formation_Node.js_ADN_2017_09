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

console.time('thread dispo');
console.time('logs');
fs.stat(absDirPath)
  .catch((err) => fs.mkdir(absDirPath))
  .then(() => logPromise(absFilePath, 'Ligne 1'))
  .then(() => logPromise(absFilePath, 'Ligne 2'))
  .then(() => logPromise(absFilePath, 'Ligne 3'))
  .then(() => logPromise(absFilePath, 'Ligne 4'))
  .catch((err) => {
    console.log(err.message);
  })
  .then(() => {
    console.timeEnd('logs');
    console.log('logs done');
  })
console.timeEnd('thread dispo');