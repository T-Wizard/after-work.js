const readline = require('readline');

const utils = {
  clearLog() {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0, null);
  },
  writeLog(msg) {
    this.clearLog();
    process.stdout.write(`${msg}`);
  },
};
module.exports = utils;
