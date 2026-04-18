$base = "c:\Users\sibes\Documents\AI Projects\Self Hosted Websites\thinkbox\src\data\problems"

$tracks = @(
    @{ id="problem-structuring"; exportA="problemStructuringProblemsA"; exportB="problemStructuringProblemsB"; export="problemStructuringProblems" },
    @{ id="quantitative-reasoning"; exportA="quantitativeReasoningProblemsA"; exportB="quantitativeReasoningProblemsB"; export="quantitativeReasoningProblems" },
    @{ id="assumption-building"; exportA="assumptionBuildingProblemsA"; exportB="assumptionBuildingProblemsB"; export="assumptionBuildingProblems" },
    @{ id="first-principles-thinking"; exportA="firstPrinciplesThinkingProblemsA"; exportB="firstPrinciplesThinkingProblemsB"; export="firstPrinciplesThinkingProblems" },
    @{ id="guesstimation"; exportA="guesstimationProblemsA"; exportB="guesstimationProblemsB"; export="guesstimationProblems" },
    @{ id="logical-communication"; exportA="logicalCommunicationProblemsA"; exportB="logicalCommunicationProblemsB"; export="logicalCommunicationProblems" },
    @{ id="business-intuition"; exportA="businessIntuitionProblemsA"; exportB="businessIntuitionProblemsB"; export="businessIntuitionProblems" },
    @{ id="integration"; exportA="integrationProblemsA"; exportB="integrationProblemsB"; export="integrationProblems" }
)

function Extract-ArrayBody {
    param([string]$content, [string]$exportName)

    $marker = "export const ${exportName}: Problem[] = ["
    $startIdx = $content.IndexOf($marker)
    if ($startIdx -lt 0) {
        throw "Could not find export: $exportName"
    }

    # Find the opening bracket of the array
    $arrayStart = $content.IndexOf('[', $startIdx + $marker.Length - 1)

    # Find matching closing bracket
    $depth = 0
    $i = $arrayStart
    while ($i -lt $content.Length) {
        $ch = $content[$i]
        if ($ch -eq '[') { $depth++ }
        elseif ($ch -eq ']') {
            $depth--
            if ($depth -eq 0) { break }
        }
        $i++
    }

    # Return inner content (between [ and ])
    return $content.Substring($arrayStart + 1, $i - $arrayStart - 1).TrimEnd()
}

foreach ($track in $tracks) {
    $fileA = Join-Path $base ($track.id + "-a.ts")
    $fileB = Join-Path $base ($track.id + "-b.ts")
    $outFile = Join-Path $base ($track.id + ".ts")

    Write-Host "Processing $($track.id)..."

    $contentA = [System.IO.File]::ReadAllText($fileA, [System.Text.Encoding]::UTF8)
    $contentB = [System.IO.File]::ReadAllText($fileB, [System.Text.Encoding]::UTF8)

    $bodyA = Extract-ArrayBody -content $contentA -exportName $track.exportA
    $bodyB = Extract-ArrayBody -content $contentB -exportName $track.exportB

    $merged = "import type { Problem } from '@/types';`r`n`r`nexport const $($track.export): Problem[] = [$bodyA,`r`n$bodyB`r`n];`r`n"

    [System.IO.File]::WriteAllText($outFile, $merged, [System.Text.Encoding]::UTF8)
    Write-Host "  Written: $outFile"

    Remove-Item $fileA -Force
    Write-Host "  Deleted: $fileA"
    Remove-Item $fileB -Force
    Write-Host "  Deleted: $fileB"

    # Delete extra part files
    $extraParts = @($track.id + "-b-part1.ts", $track.id + "-b-part2.ts")
    foreach ($part in $extraParts) {
        $partFile = Join-Path $base $part
        if (Test-Path $partFile) {
            Remove-Item $partFile -Force
            Write-Host "  Deleted extra: $partFile"
        }
    }
}

Write-Host "`nAll tracks merged successfully!"
