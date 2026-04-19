"use client";

import { useMemo } from "react";
import Link from "next/link";
import { tracks } from "@/data/problems/track";
import { trackData, allProblems, problemsById } from "@/lib/trackData";
import { useProgressStore } from "@/lib/stores/progress";
import type { Difficulty } from "@/types";

const DIFFICULTIES: Difficulty[] = ["easy", "medium", "hard"];

const difficultyStyle: Record<Difficulty, string> = {
  easy: "bg-green-500/10 text-green-400 border border-green-500/30",
  medium: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30",
  hard: "bg-red-500/10 text-red-400 border border-red-500/30",
};

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-navy-700 bg-navy-800 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
        {label}
      </p>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
    </div>
  );
}

function formatRelativeDate(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffMs = now - then;
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}

export default function ProgressPage() {
  const completedProblems = useProgressStore((s) => s.completedProblems);
  const completedModules = useProgressStore((s) => s.completedModules);
  const attempts = useProgressStore((s) => s.attempts);

  const derived = useMemo(() => {
    const totalProblems = allProblems.length;
    const doneProblems = allProblems.filter((p) => completedProblems.has(p.id)).length;

    let totalModules = 0;
    let doneModules = 0;
    let totalWorkedExamples = 0;
    let doneWorkedExamples = 0;

    for (const data of Object.values(trackData)) {
      for (const mod of data.modules) {
        totalModules += 1;
        totalWorkedExamples += mod.workedExamples.length;
        if (completedModules.has(mod.id)) {
          doneModules += 1;
          doneWorkedExamples += mod.workedExamples.length;
        }
      }
    }

    const overallPct =
      totalProblems > 0 ? Math.round((doneProblems / totalProblems) * 100) : 0;

    const byDifficulty = DIFFICULTIES.map((diff) => {
      const total = allProblems.filter((p) => p.difficulty === diff).length;
      const done = allProblems.filter(
        (p) => p.difficulty === diff && completedProblems.has(p.id),
      ).length;
      return { diff, done, total };
    });

    const perTrack = tracks.map((track) => {
      const data = trackData[track.id];
      const totalP = data?.problems.length ?? 0;
      const totalM = data?.modules.length ?? 0;
      const doneP = data
        ? data.problems.filter((p) => completedProblems.has(p.id)).length
        : 0;
      const doneM = data
        ? data.modules.filter((m) => completedModules.has(m.id)).length
        : 0;
      const pct = totalP > 0 ? Math.round((doneP / totalP) * 100) : 0;
      return { track, totalP, totalM, doneP, doneM, pct };
    });

    const attemptList = Object.values(attempts);
    const recent = [...attemptList]
      .sort((a, b) => b.attemptedAt.localeCompare(a.attemptedAt))
      .slice(0, 6)
      .map((a) => ({ attempt: a, problem: problemsById[a.problemId] }))
      .filter((x) => x.problem);

    const trouble = attemptList
      .filter((a) => a.selfRating !== undefined && a.selfRating <= 2)
      .sort((a, b) => (a.selfRating ?? 5) - (b.selfRating ?? 5))
      .slice(0, 5)
      .map((a) => ({ attempt: a, problem: problemsById[a.problemId] }))
      .filter((x) => x.problem);

    return {
      totalProblems,
      doneProblems,
      totalModules,
      doneModules,
      totalWorkedExamples,
      doneWorkedExamples,
      overallPct,
      byDifficulty,
      perTrack,
      recent,
      trouble,
    };
  }, [completedProblems, completedModules, attempts]);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Progress</h1>
        <p className="text-gray-400">
          Your journey across all eight analytical thinking disciplines.
        </p>
      </div>

      {/* Top-line stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Problems"
          value={`${derived.doneProblems}`}
          sub={`of ${derived.totalProblems} completed`}
        />
        <StatCard
          label="Modules"
          value={`${derived.doneModules}`}
          sub={`of ${derived.totalModules} completed`}
        />
        <StatCard
          label="Worked Examples"
          value={`${derived.doneWorkedExamples}`}
          sub={`of ${derived.totalWorkedExamples} covered`}
        />
        <StatCard
          label="Overall"
          value={`${derived.overallPct}%`}
          sub="problems completion rate"
        />
      </div>

      {/* Difficulty breakdown */}
      <div className="rounded-xl border border-navy-700 bg-navy-800 p-5 mb-8">
        <h2 className="text-base font-semibold text-white mb-4">
          Difficulty Breakdown
        </h2>
        <div className="space-y-3">
          {derived.byDifficulty.map(({ diff, done, total }) => {
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            return (
              <div key={diff}>
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${difficultyStyle[diff]}`}
                  >
                    {diff}
                  </span>
                  <span className="text-xs text-gray-500">
                    <span className="text-gray-300 font-medium">{done}</span>
                    /{total}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-navy-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent transition-[width] duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent activity + Trouble spots */}
      {(derived.recent.length > 0 || derived.trouble.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {derived.recent.length > 0 && (
            <div className="rounded-xl border border-navy-700 bg-navy-800 p-5">
              <h2 className="text-base font-semibold text-white mb-3">
                Recent activity
              </h2>
              <ul className="flex flex-col gap-2.5">
                {derived.recent.map(({ attempt, problem }) => (
                  <li key={attempt.problemId} className="flex items-start justify-between gap-3">
                    <Link
                      href={`/practice/${problem!.id}`}
                      className="flex-1 min-w-0 group"
                    >
                      <p className="text-sm text-gray-200 group-hover:text-accent line-clamp-1 transition-colors duration-150">
                        {problem!.question}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 font-mono">
                        {problem!.id}
                      </p>
                    </Link>
                    <span className="text-xs text-gray-500 whitespace-nowrap shrink-0">
                      {formatRelativeDate(attempt.attemptedAt)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {derived.trouble.length > 0 && (
            <div className="rounded-xl border border-navy-700 bg-navy-800 p-5">
              <h2 className="text-base font-semibold text-white mb-1">
                Trouble spots
              </h2>
              <p className="text-xs text-gray-500 mb-3">
                Problems where you self-rated 1 or 2. Worth a revisit.
              </p>
              <ul className="flex flex-col gap-2.5">
                {derived.trouble.map(({ attempt, problem }) => (
                  <li key={attempt.problemId} className="flex items-start justify-between gap-3">
                    <Link
                      href={`/practice/${problem!.id}`}
                      className="flex-1 min-w-0 group"
                    >
                      <p className="text-sm text-gray-200 group-hover:text-accent line-clamp-1 transition-colors duration-150">
                        {problem!.question}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 font-mono">
                        {problem!.id}
                      </p>
                    </Link>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-red-500/10 text-red-400 border border-red-500/30 text-xs font-semibold shrink-0">
                      {attempt.selfRating}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Per-track progress */}
      <h2 className="text-base font-semibold text-white mb-4">Tracks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {derived.perTrack.map(({ track, totalP, totalM, doneP, doneM, pct }) => (
          <Link
            key={track.id}
            href={`/learn/${track.id}`}
            className="group block rounded-xl border border-navy-700 bg-navy-800 p-5 hover:border-accent-dim transition-colors duration-150"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{track.icon}</span>
                <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors duration-150">
                  {track.title}
                </h3>
              </div>
              <span className="text-xs font-medium text-accent bg-navy-700 rounded-full px-2 py-0.5 whitespace-nowrap shrink-0">
                {pct}%
              </span>
            </div>

            <div className="h-1.5 rounded-full bg-navy-700 mb-3 overflow-hidden">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>

            <div className="flex gap-4 text-xs text-gray-500">
              <span>
                Problems:{" "}
                <span className="text-gray-300 font-medium">{doneP}</span>/{totalP}
              </span>
              <span>
                Modules:{" "}
                <span className="text-gray-300 font-medium">{doneM}</span>/{totalM}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
