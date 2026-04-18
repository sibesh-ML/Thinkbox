"use client";

import Link from "next/link";
import { tracks } from "@/data/problems/track";
import { useProgressStore } from "@/lib/stores/progress";
import { trackData } from "@/lib/trackData";

export default function LearnPage() {
  const completedProblems = useProgressStore((s) => s.completedProblems);
  const completedModules = useProgressStore((s) => s.completedModules);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Learn</h1>
        <p className="text-gray-400">
          Track your progress across all eight analytical thinking disciplines.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tracks.map((track) => {
          const data = trackData[track.id];
          const totalProblems = data?.problems.length ?? 0;
          const totalModules = data?.modules.length ?? 0;

          const doneProblems = data
            ? data.problems.filter((p) => completedProblems.has(p.id)).length
            : 0;
          const doneModules = data
            ? data.modules.filter((m) => completedModules.has(m.id)).length
            : 0;

          const pct =
            totalProblems > 0
              ? Math.round((doneProblems / totalProblems) * 100)
              : 0;

          return (
            <Link
              key={track.id}
              href={`/learn/${track.id}`}
              className="group block rounded-xl border border-navy-700 bg-navy-800 p-5 hover:border-accent-dim transition-colors duration-150"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-2xl">{track.icon}</span>
                <span className="text-xs font-medium text-accent bg-navy-700 rounded-full px-2 py-0.5 whitespace-nowrap">
                  {pct}%
                </span>
              </div>

              <h2 className="text-base font-semibold text-white mb-1 group-hover:text-accent transition-colors duration-150">
                {track.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {track.description}
              </p>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-navy-700 mb-3 overflow-hidden">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-300"
                  style={{ width: `${pct}%` }}
                />
              </div>

              {/* Counts */}
              <div className="flex gap-4 text-xs text-gray-500">
                <span>
                  <span className="text-gray-300 font-medium">{doneProblems}</span>
                  /{totalProblems} problems
                </span>
                <span>
                  <span className="text-gray-300 font-medium">{doneModules}</span>
                  /{totalModules} modules
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
