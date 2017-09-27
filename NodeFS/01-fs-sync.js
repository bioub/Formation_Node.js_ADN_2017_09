const fs = require('fs');
const path = require('path');

// const absDirPath = path.join([__dirname, 'logs']);
const absDirPath = path.resolve(__dirname + '/log');
const absFilePath = path.resolve(absDirPath + '/app.log');

const logSync = (filePath, msg) => {
  const date = (new Date()).toLocaleString();
  const log = `[${date}] ${msg}\n`;
  fs.appendFileSync(filePath, log);
};

console.time('thread dispo');
console.time('logs');
try {
  fs.statSync(absDirPath);
}
catch (err) {
  fs.mkdirSync(absDirPath);
}

logSync(absFilePath, 'Ligne 1');
logSync(absFilePath, 'Ligne 2');
logSync(absFilePath, 'Ligne 3');
logSync(absFilePath, 'Ligne 4');
console.timeEnd('thread dispo');
console.timeEnd('logs');
console.log('Logs done');
