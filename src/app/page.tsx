"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { tracks } from "@/data/problems/track";
import { allProblems, problemsById, trackData } from "@/lib/trackData";
import { useProgressStore } from "@/lib/stores/progress";

export default function Home() {
  const router = useRouter();
  const completedProblems = useProgressStore((s) => s.completedProblems);
  const completedModules = useProgressStore((s) => s.completedModules);
  const attempts = useProgressStore((s) => s.attempts);

  const { doneProblems, totalProblems, doneModules, totalModules, overallPct } =
    useMemo(() => {
      const totalP = allProblems.length;
      const doneP = allProblems.filter((p) => completedProblems.has(p.id)).length;
      let totalM = 0;
      let doneM = 0;
      for (const data of Object.values(trackData)) {
        for (const mod of data.modules) {
          totalM += 1;
          if (completedModules.has(mod.id)) doneM += 1;
        }
      }
      return {
        doneProblems: doneP,
        totalProblems: totalP,
        doneModules: doneM,
        totalModules: totalM,
        overallPct: totalP > 0 ? Math.round((doneP / totalP) * 100) : 0,
      };
    }, [completedProblems, completedModules]);

  const lastAttempt = useMemo(() => {
    const list = Object.values(attempts);
    if (list.length === 0) return null;
    const sorted = [...list].sort((a, b) =>
      b.attemptedAt.localeCompare(a.attemptedAt),
    );
    const recent = sorted[0];
    const problem = problemsById[recent.problemId];
    if (!problem) return null;
    const track = tracks.find((t) => t.id === problem.trackId);
    return { attempt: recent, problem, track };
  }, [attempts]);

  const pickRandomUnseen = () => {
    const unseen = allProblems.filter((p) => !completedProblems.has(p.id));
    const pool = unseen.length > 0 ? unseen : allProblems;
    const idx = Math.floor(Math.random() * pool.length);
    router.push(`/practice/${pool[idx].id}`);
  };

  const isFirstTime =
    doneProblems === 0 && doneModules === 0 && !lastAttempt;

  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          Welcome to <span className="text-accent">ThinkBox</span>
        </h1>
        <p className="max-w-2xl text-gray-400">
          Master analytical thinking through eight tracks of structured practice — from problem decomposition and quantitative reasoning to full case interviews.
        </p>
      </div>

      {/* Stats strip */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-navy-700 bg-navy-800 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
            Problems
          </p>
          <p className="text-2xl font-bold text-white">
            {doneProblems}
            <span className="text-sm text-gray-500 font-normal">
              {" "}/ {totalProblems}
            </span>
          </p>
        </div>
        <div className="rounded-xl border border-navy-700 bg-navy-800 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
            Modules
          </p>
          <p className="text-2xl font-bold text-white">
            {doneModules}
            <span className="text-sm text-gray-500 font-normal">
              {" "}/ {totalModules}
            </span>
          </p>
        </div>
        <div className="rounded-xl border border-navy-700 bg-navy-800 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
            Overall
          </p>
          <p className="text-2xl font-bold text-white">{overallPct}%</p>
        </div>
      </div>

      {/* First-time CTA or Continue + Random */}
      {isFirstTime ? (
        <div className="mb-10 rounded-xl border border-accent-dim bg-navy-800 p-6">
          <h2 className="text-lg font-semibold text-white mb-2">
            Start here
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Read the Learn track first to internalize the framework, then drill with Practice problems. Or jump straight in — your choice.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-accent-dim transition-colors duration-150"
            >
              Browse Learn tracks
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-600 bg-navy-800 px-5 py-2.5 text-sm font-semibold text-gray-300 hover:border-accent hover:text-accent transition-colors duration-150"
            >
              Go to Practice
            </Link>
          </div>
        </div>
      ) : (
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Continue */}
          <div className="rounded-xl border border-navy-700 bg-navy-800 p-6 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Continue
            </p>
            {lastAttempt ? (
              <>
                <p className="text-sm text-gray-500 mb-1">
                  {lastAttempt.track?.icon} {lastAttempt.track?.title}
                </p>
                <p className="text-base text-white leading-snug mb-4 line-clamp-2">
                  {lastAttempt.problem.question}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/practice/${lastAttempt.problem.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-accent-dim transition-colors duration-150"
                  >
                    Resume →
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-400 mb-4">
                  No attempts yet. Start one from the Practice page.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/practice"
                    className="inline-flex items-center gap-2 rounded-lg border border-navy-600 bg-navy-800 px-4 py-2 text-sm font-semibold text-gray-300 hover:border-accent hover:text-accent transition-colors duration-150"
                  >
                    Browse problems
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Random unseen */}
          <div className="rounded-xl border border-navy-700 bg-navy-800 p-6 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Shuffle
            </p>
            <p className="text-base text-white mb-1">
              Surprise me with a random problem
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Prefers problems you haven't completed yet.
            </p>
            <div className="mt-auto">
              <button
                onClick={pickRandomUnseen}
                className="inline-flex items-center gap-2 rounded-lg border border-navy-600 bg-navy-700 px-4 py-2 text-sm font-semibold text-gray-200 hover:border-accent hover:text-accent transition-colors duration-150"
              >
                Random problem →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tracks — compact strip, not the full Learn grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Tracks
          </h2>
          <Link
            href="/learn"
            className="text-xs text-gray-400 hover:text-accent transition-colors duration-150"
          >
            View all →
          </Link>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {tracks.map((track) => {
            const data = trackData[track.id];
            const totalP = data?.problems.length ?? 0;
            const doneP = data
              ? data.problems.filter((p) => completedProblems.has(p.id)).length
              : 0;
            const pct = totalP > 0 ? Math.round((doneP / totalP) * 100) : 0;
            return (
              <li key={track.id}>
                <Link
                  href={`/learn/${track.id}`}
                  className="group block rounded-lg border border-navy-700 bg-navy-800 p-3 hover:border-accent-dim transition-colors duration-150"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg leading-none">{track.icon}</span>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-accent line-clamp-1">
                      {track.title}
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-navy-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1.5">
                    {doneP}/{totalP}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
