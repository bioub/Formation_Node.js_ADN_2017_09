const fs = require('fs');
const path = require('path');

// const absDirPath = path.join([__dirname, 'logs']);
const absDirPath = path.resolve(__dirname + '/log');
const absFilePath = path.resolve(absDirPath + '/app.log');

const logAsync = (filePath, msg, cb) => {
  const date = (new Date()).toLocaleString();
  const log = `[${date}] ${msg}\n`;
  fs.appendFile(filePath, log, cb);
};

console.time('thread dispo');
console.time('logs');

fs.stat(absDirPath, (err) => {
  const next = () => {
    logAsync(absFilePath, 'Ligne 1', (err) => {
      if (err) {
        return console.log(err.message);
      }
      logAsync(absFilePath, 'Ligne 2', (err) => {
        if (err) {
          return console.log(err.message);
        }
        logAsync(absFilePath, 'Ligne 3', (err) => {
          if (err) {
            return console.log(err.message);
          }
          logAsync(absFilePath, 'Ligne 4', (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.timeEnd('logs');
            console.log('Logs done');
          });
        });
      });
    });
  };

  if (err) {
    return fs.mkdir(absDirPath, (err) => {
      next();
    });
  }

  next();
});
console.timeEnd('thread dispo');
