"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allProblems } from "@/lib/trackData";
import { tracks } from "@/data/problems/track";
import { useProgressStore } from "@/lib/stores/progress";
import type { Difficulty } from "@/types";

type CompletionFilter = "all" | "done" | "todo";

const difficultyStyles: Record<Difficulty, string> = {
  easy: "bg-green-500/10 text-green-400 border-green-500/30",
  medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  hard: "bg-red-500/10 text-red-400 border-red-500/30",
};

export default function PracticePage() {
  const completedProblems = useProgressStore((s) => s.completedProblems);

  const [trackFilter, setTrackFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | "all">(
    "all",
  );
  const [completionFilter, setCompletionFilter] =
    useState<CompletionFilter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProblems.filter((p) => {
      if (trackFilter !== "all" && p.trackId !== trackFilter) return false;
      if (difficultyFilter !== "all" && p.difficulty !== difficultyFilter)
        return false;
      if (completionFilter === "done" && !completedProblems.has(p.id))
        return false;
      if (completionFilter === "todo" && completedProblems.has(p.id))
        return false;
      if (q) {
        const hay = `${p.id} ${p.question} ${p.subSkill}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [trackFilter, difficultyFilter, completionFilter, query, completedProblems]);

  const trackById = useMemo(
    () => Object.fromEntries(tracks.map((t) => [t.id, t])),
    [],
  );

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Practice</h1>
        <p className="text-gray-400">
          {allProblems.length} problems across {tracks.length} tracks. Filter to what you want to drill.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 rounded-xl border border-navy-700 bg-navy-800 p-5 flex flex-col gap-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search question text, ID, or sub-skill…"
          className="w-full rounded-lg border border-navy-600 bg-navy-900 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-600 focus:border-accent focus:outline-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Track */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-2">
              Track
            </label>
            <select
              value={trackFilter}
              onChange={(e) => setTrackFilter(e.target.value)}
              className="w-full rounded-lg border border-navy-600 bg-navy-900 px-3 py-2 text-sm text-gray-200 focus:border-accent focus:outline-none"
            >
              <option value="all">All tracks</option>
              {tracks.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-2">
              Difficulty
            </label>
            <div className="flex gap-2">
              {(["all", "easy", "medium", "hard"] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficultyFilter(d)}
                  className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium capitalize transition-colors duration-150 ${
                    difficultyFilter === d
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-navy-600 bg-navy-900 text-gray-400 hover:border-accent-dim"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Completion */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-2">
              Status
            </label>
            <div className="flex gap-2">
              {(
                [
                  { key: "all", label: "All" },
                  { key: "todo", label: "To do" },
                  { key: "done", label: "Done" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setCompletionFilter(opt.key)}
                  className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium transition-colors duration-150 ${
                    completionFilter === opt.key
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-navy-600 bg-navy-900 text-gray-400 hover:border-accent-dim"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Result count */}
      <p className="text-xs text-gray-500 mb-4">
        Showing <span className="text-gray-300 font-medium">{filtered.length}</span> of {allProblems.length}
      </p>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-navy-700 bg-navy-800 p-8 text-center text-gray-400">
          No problems match these filters.
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {filtered.map((p) => {
            const track = trackById[p.trackId];
            const done = completedProblems.has(p.id);
            return (
              <li key={p.id}>
                <Link
                  href={`/practice/${p.id}`}
                  className="group block rounded-lg border border-navy-700 bg-navy-800 px-4 py-3 hover:border-accent-dim transition-colors duration-150"
                >
                  <div className="flex items-start gap-3 flex-wrap">
                    <span
                      className={`mt-0.5 w-5 h-5 flex items-center justify-center rounded-full text-xs border shrink-0 ${
                        done
                          ? "bg-accent text-navy-900 border-accent"
                          : "border-navy-600 text-transparent"
                      }`}
                      aria-label={done ? "Completed" : "Not completed"}
                    >
                      ✓
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-200 group-hover:text-accent transition-colors duration-150 leading-snug">
                        {p.question}
                      </p>
                      <div className="mt-1.5 flex items-center gap-2 flex-wrap text-xs">
                        <span className="font-mono text-gray-500">{p.id}</span>
                        <span
                          className={`rounded-full border px-1.5 py-0.5 font-semibold uppercase tracking-wider ${difficultyStyles[p.difficulty]}`}
                        >
                          {p.difficulty}
                        </span>
                        {track && (
                          <span className="text-gray-500">
                            {track.icon} {track.title}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
