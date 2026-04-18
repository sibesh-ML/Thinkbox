import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

const base = new URL('.', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const problemsDir = join(base, 'problems');

const tracks = [
  { id: 'problem-structuring', export: 'problemStructuringProblems', exportA: 'problemStructuringProblemsA', exportB: 'problemStructuringProblemsB' },
  { id: 'quantitative-reasoning', export: 'quantitativeReasoningProblems', exportA: 'quantitativeReasoningProblemsA', exportB: 'quantitativeReasoningProblemsB' },
  { id: 'assumption-building', export: 'assumptionBuildingProblems', exportA: 'assumptionBuildingProblemsA', exportB: 'assumptionBuildingProblemsB' },
  { id: 'first-principles-thinking', export: 'firstPrinciplesThinkingProblems', exportA: 'firstPrinciplesThinkingProblemsA', exportB: 'firstPrinciplesThinkingProblemsB' },
  { id: 'guesstimation', export: 'guesstimationProblems', exportA: 'guesstimationProblemsA', exportB: 'guesstimationProblemsB' },
  { id: 'logical-communication', export: 'logicalCommunicationProblems', exportA: 'logicalCommunicationProblemsA', exportB: 'logicalCommunicationProblemsB' },
  { id: 'business-intuition', export: 'businessIntuitionProblems', exportA: 'businessIntuitionProblemsA', exportB: 'businessIntuitionProblemsB' },
  { id: 'integration', export: 'integrationProblems', exportA: 'integrationProblemsA', exportB: 'integrationProblemsB' },
];

function extractArrayBody(content, exportName) {
  // Find "export const <name>: Problem[] = [" and extract everything between the outer [ and ]
  const startMarker = `export const ${exportName}: Problem[] = [`;
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) throw new Error(`Could not find export: ${exportName}`);

  const arrayStart = content.indexOf('[', startIdx + startMarker.length - 1);

  // Find matching closing bracket
  let depth = 0;
  let i = arrayStart;
  while (i < content.length) {
    if (content[i] === '[') depth++;
    else if (content[i] === ']') {
      depth--;
      if (depth === 0) break;
    }
    i++;
  }

  // Return the inner content (between [ and ])
  return content.slice(arrayStart + 1, i).trimEnd();
}

for (const track of tracks) {
  const fileA = join(problemsDir, `${track.id}-a.ts`);
  const fileB = join(problemsDir, `${track.id}-b.ts`);
  const outFile = join(problemsDir, `${track.id}.ts`);

  console.log(`Processing ${track.id}...`);

  const contentA = readFileSync(fileA, 'utf8');
  const contentB = readFileSync(fileB, 'utf8');

  const bodyA = extractArrayBody(contentA, track.exportA);
  const bodyB = extractArrayBody(contentB, track.exportB);

  const merged = `import type { Problem } from '@/types';

export const ${track.export}: Problem[] = [${bodyA},
${bodyB}
];
`;

  writeFileSync(outFile, merged, 'utf8');
  console.log(`  Written: ${outFile}`);

  unlinkSync(fileA);
  console.log(`  Deleted: ${fileA}`);
  unlinkSync(fileB);
  console.log(`  Deleted: ${fileB}`);

  // Delete any extra part files (e.g. guesstimation-b-part1.ts, guesstimation-b-part2.ts)
  const extraParts = [`${track.id}-b-part1.ts`, `${track.id}-b-part2.ts`];
  for (const part of extraParts) {
    const partFile = join(problemsDir, part);
    if (existsSync(partFile)) {
      unlinkSync(partFile);
      console.log(`  Deleted extra: ${partFile}`);
    }
  }
}

console.log('\nAll tracks merged successfully!');
