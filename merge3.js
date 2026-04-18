const fs = require('fs');
const base = 'c:\\Users\\sibes\\Documents\\AI Projects\\Self Hosted Websites\\thinkbox\\src\\data\\problems';
const log = base + '\\merge3_log.txt';

function merge(aFile, bFile, outFile, exportName) {
  // Try reading with different encodings
  let a = fs.readFileSync(base + '\\' + aFile, 'utf8');
  let b = fs.readFileSync(base + '\\' + bFile, 'utf8');

  // Strip BOM if present
  if (a.charCodeAt(0) === 0xFEFF) a = a.slice(1);
  if (b.charCodeAt(0) === 0xFEFF) b = b.slice(1);

  fs.appendFileSync(log, 'aFile length: ' + a.length + ', bFile length: ' + b.length + '\n');
  fs.appendFileSync(log, 'First 100 chars of a: ' + JSON.stringify(a.slice(0, 100)) + '\n');

  // Find the array opening [ (the one after "= [")
  const aArrayStart = a.indexOf('= [') + 3;  // index right after "= ["
  const bArrayStart = b.indexOf('= [') + 3;

  // Find the closing ];
  const aArrayEnd = a.lastIndexOf('\n];');
  const bArrayEnd = b.lastIndexOf('\n];');

  fs.appendFileSync(log, 'aArrayStart: ' + aArrayStart + ', aArrayEnd: ' + aArrayEnd + '\n');

  const aInner = a.slice(aArrayStart, aArrayEnd);
  const bInner = b.slice(bArrayStart, bArrayEnd);

  fs.appendFileSync(log, 'aInner length: ' + aInner.length + ', bInner length: ' + bInner.length + '\n');

  const header = "import type { Problem } from '@/types';\n\nexport const " + exportName + ": Problem[] = [";
  const footer = "\n];\n";

  // aInner may end with a trailing comma, ensure it does
  const aTrimmed = aInner.trimEnd();
  const aFinal = aTrimmed.endsWith(',') ? aTrimmed : aTrimmed + ',';

  const merged = header + aFinal + "\n" + bInner + footer;

  fs.writeFileSync(base + '\\' + outFile, merged, 'utf8');
  fs.appendFileSync(log, 'Written: ' + outFile + ' (' + merged.length + ' chars)\n\n');
}

merge('problem-structuring-a.ts', 'problem-structuring-b.ts', 'problem-structuring.ts', 'problemStructuringProblems');
merge('quantitative-reasoning-a.ts', 'quantitative-reasoning-b.ts', 'quantitative-reasoning.ts', 'quantitativeReasoningProblems');
merge('assumption-building-a.ts', 'assumption-building-b.ts', 'assumption-building.ts', 'assumptionBuildingProblems');
merge('first-principles-thinking-a.ts', 'first-principles-thinking-b.ts', 'first-principles-thinking.ts', 'firstPrinciplesThinkingProblems');
