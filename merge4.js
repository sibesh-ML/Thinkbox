try {
  const fs = require('fs');
  const base = 'c:\\Users\\sibes\\Documents\\AI Projects\\Self Hosted Websites\\thinkbox\\src\\data\\problems';
  const logFile = base + '\\__merge_log.txt';

  fs.writeFileSync(logFile, 'Script started\n');

  const testRead = fs.readFileSync(base + '\\quantitative-reasoning-a.ts');
  fs.appendFileSync(logFile, 'File size: ' + testRead.length + ' bytes\n');
  fs.appendFileSync(logFile, 'Encoding detect: ' + (testRead[0] === 0xEF ? 'UTF-8 BOM' : testRead[0] === 0xFF ? 'UTF-16 LE' : 'No BOM, first byte: ' + testRead[0]) + '\n');

  const aStr = testRead.toString('utf8');
  fs.appendFileSync(logFile, 'String length: ' + aStr.length + '\n');
  fs.appendFileSync(logFile, 'indexOf "= [": ' + aStr.indexOf('= [') + '\n');
  fs.appendFileSync(logFile, 'lastIndexOf "];": ' + aStr.lastIndexOf('\n];') + '\n');

} catch(e) {
  require('fs').writeFileSync('c:\\Users\\sibes\\Documents\\AI Projects\\Self Hosted Websites\\thinkbox\\src\\data\\problems\\__error.txt', e.message + '\n' + e.stack);
}
