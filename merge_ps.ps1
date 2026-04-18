$base = 'c:\Users\sibes\Documents\AI Projects\Self Hosted Websites\thinkbox\src\data\problems'
$log = 'c:\Users\sibes\merge_result.txt'

function Merge-ProblemFiles {
    param($aFile, $bFile, $outFile, $exportName)

    $a = [System.IO.File]::ReadAllText("$base\$aFile")
    $b = [System.IO.File]::ReadAllText("$base\$bFile")

    $aStart = $a.IndexOf('[') + 1
    $aEnd = $a.LastIndexOf(']')
    $aInner = $a.Substring($aStart, $aEnd - $aStart).Trim()

    $bStart = $b.IndexOf('[') + 1
    $bEnd = $b.LastIndexOf(']')
    $bInner = $b.Substring($bStart, $bEnd - $bStart).Trim()

    $merged = "import type { Problem } from '@/types';`n`nexport const ${exportName}: Problem[] = [`n  $aInner,`n`n  $bInner`n];`n"

    [System.IO.File]::WriteAllText("$base\$outFile", $merged, [System.Text.Encoding]::UTF8)

    $aCount = ([regex]::Matches($a, '^\s+id: "', [System.Text.RegularExpressions.RegexOptions]::Multiline)).Count
    $bCount = ([regex]::Matches($b, '^\s+id: "', [System.Text.RegularExpressions.RegexOptions]::Multiline)).Count

    "$outFile`: $aCount + $bCount = $($aCount + $bCount) problems" | Add-Content $log
}

Merge-ProblemFiles 'problem-structuring-a.ts' 'problem-structuring-b.ts' 'problem-structuring.ts' 'problemStructuringProblems'
Merge-ProblemFiles 'quantitative-reasoning-a.ts' 'quantitative-reasoning-b.ts' 'quantitative-reasoning.ts' 'quantitativeReasoningProblems'
Merge-ProblemFiles 'assumption-building-a.ts' 'assumption-building-b.ts' 'assumption-building.ts' 'assumptionBuildingProblems'
Merge-ProblemFiles 'first-principles-thinking-a.ts' 'first-principles-thinking-b.ts' 'first-principles-thinking.ts' 'firstPrinciplesThinkingProblems'
