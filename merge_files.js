const fs = require('fs');
const path = require('path');

const base = 'c:\\Users\\sibes\\Documents\\AI Projects\\Self Hosted Websites\\thinkbox\\src\\data\\problems';

function mergeFiles(aFile, bFile, outFile, exportName) {
  const a = fs.readFileSync(path.join(base, aFile), 'utf8');
  const b = fs.readFileSync(path.join(base, bFile), 'utf8');

  // Find the opening bracket of the array
  const aStart = a.indexOf('[') + 1;
  // Find the closing bracket (last one)
  const aEnd = a.lastIndexOf(']');
  const aInner = a.slice(aStart, aEnd).trim();

  const bStart = b.indexOf('[') + 1;
  const bEnd = b.lastIndexOf(']');
  const bInner = b.slice(bStart, bEnd).trim();

  const merged = `import type { Problem } from '@/types';\n\nexport const ${exportName}: Problem[] = [\n  ${aInner},\n\n  ${bInner}\n];\n`;

  fs.writeFileSync(path.join(base, outFile), merged, 'utf8');

  // Count problems
  const aCount = (a.match(/^\s+id: "/gm) || []).length;
  const bCount = (b.match(/^\s+id: "/gm) || []).length;
  fs.appendFileSync('c:\\Users\\sibes\\merge_log.txt', `${outFile}: ${aCount} + ${bCount} = ${aCount + bCount} problems\n`);
}

mergeFiles('problem-structuring-a.ts', 'problem-structuring-b.ts', 'problem-structuring.ts', 'problemStructuringProblems');
mergeFiles('quantitative-reasoning-a.ts', 'quantitative-reasoning-b.ts', 'quantitative-reasoning.ts', 'quantitativeReasoningProblems');
mergeFiles('assumption-building-a.ts', 'assumption-building-b.ts', 'assumption-building.ts', 'assumptionBuildingProblems');
mergeFiles('first-principles-thinking-a.ts', 'first-principles-thinking-b.ts', 'first-principles-thinking.ts', 'firstPrinciplesThinkingProblems');
