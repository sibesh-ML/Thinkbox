const fs = require('fs');
const base = 'c:\\Users\\sibes\\Documents\\AI Projects\\Self Hosted Websites\\thinkbox\\src\\data\\problems';

function merge(aFile, bFile, outFile, exportName) {
  const a = fs.readFileSync(base + '\\' + aFile, 'utf8');
  const b = fs.readFileSync(base + '\\' + bFile, 'utf8');

  // Find the first [ and last ] in each file
  const ai = a.indexOf('[');
  const aj = a.lastIndexOf(']');
  const bi = b.indexOf('[');
  const bj = b.lastIndexOf(']');

  const header = "import type { Problem } from '@/types';\n\nexport const " + exportName + ": Problem[] = [";
  const aInner = a.slice(ai + 1, aj);
  const bInner = b.slice(bi + 1, bj);
  const footer = "\n];\n";

  // Trim trailing comma/whitespace from aInner
  const merged = header + aInner.trimEnd().replace(/,\s*$/, '') + "," + bInner + footer;

  fs.writeFileSync(base + '\\' + outFile, merged, 'utf8');

  const logPath = 'c:\\Users\\sibes\\merge2_log.txt';
  const aCount = (a.match(/    id: "/g) || []).length;
  const bCount = (b.match(/    id: "/g) || []).length;
  fs.appendFileSync(logPath, outFile + ': ' + aCount + ' + ' + bCount + ' = ' + (aCount + bCount) + ' problems\n');
}

merge('problem-structuring-a.ts', 'problem-structuring-b.ts', 'problem-structuring.ts', 'problemStructuringProblems');
merge('quantitative-reasoning-a.ts', 'quantitative-reasoning-b.ts', 'quantitative-reasoning.ts', 'quantitativeReasoningProblems');
merge('assumption-building-a.ts', 'assumption-building-b.ts', 'assumption-building.ts', 'assumptionBuildingProblems');
merge('first-principles-thinking-a.ts', 'first-principles-thinking-b.ts', 'first-principles-thinking.ts', 'firstPrinciplesThinkingProblems');
