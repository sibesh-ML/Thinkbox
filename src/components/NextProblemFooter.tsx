"use client";

import Link from "next/link";
import { useMemo } from "react";
import { trackData } from "@/lib/trackData";
import { tracks } from "@/data/problems/track";
import { useProgressStore } from "@/lib/stores/progress";

interface NextProblemFooterProps {
  trackId: string;
  currentProblemId: string;
}

export default function NextProblemFooter({
  trackId,
  currentProblemId,
}: NextProblemFooterProps) {
  const completedProblems = useProgressStore((s) => s.completedProblems);

  const next = useMemo(() => {
    const data = trackData[trackId];
    if (!data) return null;
    const problems = data.problems;
    const currentIdx = problems.findIndex((p) => p.id === currentProblemId);

    // Prefer: next unseen after the current problem (same track).
    for (let i = currentIdx + 1; i < problems.length; i++) {
      if (!completedProblems.has(problems[i].id)) return problems[i];
    }
    // Then: any unseen earlier in the track.
    for (let i = 0; i < currentIdx; i++) {
      if (!completedProblems.has(problems[i].id)) return problems[i];
    }
    // Fallback: literal next in list, wrapping.
    if (problems.length > 1) {
      const wrap = problems[(currentIdx + 1) % problems.length];
      if (wrap.id !== currentProblemId) return wrap;
    }
    return null;
  }, [trackId, currentProblemId, completedProblems]);

  const track = tracks.find((t) => t.id === trackId);

  return (
    <div className="mt-10 pt-8 border-t border-navy-700 flex items-center justify-between flex-wrap gap-4">
      <Link
        href="/practice"
        className="text-sm text-gray-400 hover:text-accent transition-colors duration-150"
      >
        ← All problems
      </Link>

      <div className="flex items-center gap-5 flex-wrap">
        {track && (
          <Link
            href={`/learn/${trackId}`}
            className="text-sm text-gray-400 hover:text-accent transition-colors duration-150"
          >
            {track.icon} {track.title}
          </Link>
        )}

        {next && (
          <Link
            href={`/practice/${next.id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-accent-dim transition-colors duration-150"
          >
            Next problem →
          </Link>
        )}
      </div>
    </div>
  );
}
