"use client";

import { useEffect, useState } from "react";
import type { Problem } from "@/types";
import { useProgressStore } from "@/lib/stores/progress";
import Markdown from "@/components/Markdown";

interface PracticeProblemProps {
  problem: Problem;
}

const difficultyStyles: Record<Problem["difficulty"], string> = {
  easy: "bg-green-500/10 text-green-400 border-green-500/30",
  medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  hard: "bg-red-500/10 text-red-400 border-red-500/30",
};

export default function PracticeProblem({ problem }: PracticeProblemProps) {
  const completedProblems = useProgressStore((s) => s.completedProblems);
  const attempts = useProgressStore((s) => s.attempts);
  const markProblemCompleted = useProgressStore((s) => s.markProblemCompleted);
  const unmarkProblemCompleted = useProgressStore(
    (s) => s.unmarkProblemCompleted,
  );
  const recordAttempt = useProgressStore((s) => s.recordAttempt);
  const isCompleted = completedProblems.has(problem.id);
  const priorAttempt = attempts[problem.id];

  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [solutionRevealed, setSolutionRevealed] = useState(false);
  const [rubricRevealed, setRubricRevealed] = useState(false);
  const [rubricChecks, setRubricChecks] = useState<Record<string, boolean>>({});
  const [selfRating, setSelfRating] = useState<number | null>(null);
  const [notes, setNotes] = useState("");
  const [hydrated, setHydrated] = useState(false);

  // Prefill from prior attempt once the store hydrates from localStorage.
  useEffect(() => {
    if (hydrated) return;
    if (priorAttempt) {
      setRubricChecks(priorAttempt.rubricChecks ?? {});
      setSelfRating(priorAttempt.selfRating ?? null);
      setNotes(priorAttempt.notes ?? "");
    }
    setHydrated(true);
  }, [priorAttempt, hydrated]);

  // Auto-save attempt edits (rubric, rating, notes) without bumping attemptedAt.
  // Debounced to avoid a write per keystroke in the notes field.
  useEffect(() => {
    if (!hydrated) return;
    const isEmpty =
      Object.values(rubricChecks).every((v) => !v) &&
      selfRating === null &&
      notes.trim() === "";
    if (isEmpty && !priorAttempt) return;
    const timer = setTimeout(() => {
      recordAttempt({
        problemId: problem.id,
        attemptedAt: priorAttempt?.attemptedAt ?? new Date().toISOString(),
        rubricChecks,
        selfRating: selfRating ?? undefined,
        notes: notes.trim() || undefined,
      });
    }, 400);
    return () => clearTimeout(timer);
  }, [hydrated, rubricChecks, selfRating, notes, problem.id, priorAttempt, recordAttempt]);

  const handleMarkComplete = () => {
    recordAttempt({
      problemId: problem.id,
      attemptedAt: new Date().toISOString(),
      rubricChecks,
      selfRating: selfRating ?? undefined,
      notes: notes.trim() || undefined,
    });
    markProblemCompleted(problem.id);
  };

  const toggleRubric = (id: string) => {
    setRubricChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const revealNextHint = () => {
    setHintsRevealed((n) => Math.min(n + 1, problem.hints.length));
  };

  const checkedCount = Object.values(rubricChecks).filter(Boolean).length;

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-mono text-accent bg-navy-700 rounded px-2 py-1">
            {problem.id}
          </span>
          <span
            className={`text-xs font-semibold uppercase tracking-wider rounded-full border px-2 py-0.5 ${difficultyStyles[problem.difficulty]}`}
          >
            {problem.difficulty}
          </span>
          <span className="text-xs text-gray-500 font-mono">
            {problem.subSkill}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white leading-snug">
          {problem.question}
        </h1>
      </div>

      {/* Context */}
      {problem.context && (
        <section className="rounded-xl border border-navy-700 bg-navy-800 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Context
          </p>
          <Markdown>{problem.context}</Markdown>
        </section>
      )}

      {/* Hints */}
      {problem.hints.length > 0 && (
        <section className="rounded-xl border border-navy-700 bg-navy-800 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Hints
            </h2>
            <span className="text-xs text-gray-500">
              {hintsRevealed}/{problem.hints.length} revealed
            </span>
          </div>
          {hintsRevealed > 0 && (
            <ol className="list-decimal pl-5 flex flex-col gap-3 mb-4">
              {problem.hints.slice(0, hintsRevealed).map((hint, i) => (
                <li key={i} className="text-gray-300 leading-relaxed">
                  {hint}
                </li>
              ))}
            </ol>
          )}
          {hintsRevealed < problem.hints.length && (
            <button
              onClick={revealNextHint}
              className="text-sm font-medium text-accent hover:underline"
            >
              {hintsRevealed === 0 ? "Reveal first hint" : "Reveal next hint"} →
            </button>
          )}
        </section>
      )}

      {/* Rubric self-check — gated, contains solution hints */}
      {problem.rubric.length > 0 && (
        <section className="rounded-xl border border-navy-700 bg-navy-800 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Self-check rubric
            </h2>
            {rubricRevealed && (
              <span className="text-xs text-gray-500">
                {checkedCount}/{problem.rubric.length} checked
              </span>
            )}
            {rubricRevealed && (
              <button
                onClick={() => setRubricRevealed(false)}
                className="text-xs text-gray-500 hover:text-accent ml-3"
              >
                Hide
              </button>
            )}
          </div>
          {!rubricRevealed ? (
            <div>
              <p className="text-sm text-gray-400 mb-4">
                The rubric describes what a good answer looks like — revealing it early leaks the solution. Attempt the problem first, then unlock to self-score.
              </p>
              <button
                onClick={() => setRubricRevealed(true)}
                className="rounded-lg border border-navy-600 bg-navy-700 px-4 py-2 text-sm font-medium text-gray-200 hover:border-accent hover:text-accent transition-colors duration-150"
              >
                Reveal rubric
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs text-gray-500 mb-4">
                Check which points your solution covered.
              </p>
              <ul className="flex flex-col gap-2.5">
                {problem.rubric.map((item) => {
                  const checked = !!rubricChecks[item.id];
                  return (
                    <li key={item.id}>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleRubric(item.id)}
                          className="mt-1 accent-accent cursor-pointer"
                        />
                        <span
                          className={`text-sm leading-relaxed ${checked ? "text-gray-200" : "text-gray-400"} group-hover:text-gray-200`}
                        >
                          {item.text}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </section>
      )}

      {/* Reference solution — gated */}
      <section className="rounded-xl border border-navy-700 bg-navy-800 p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Reference solution
          </h2>
          {solutionRevealed && (
            <button
              onClick={() => setSolutionRevealed(false)}
              className="text-xs text-gray-500 hover:text-accent"
            >
              Hide
            </button>
          )}
        </div>
        {!solutionRevealed ? (
          <div>
            <p className="text-sm text-gray-400 mb-4">
              Attempt the problem first. Revealing now is fine if you're stuck — be honest with yourself when self-scoring.
            </p>
            <button
              onClick={() => setSolutionRevealed(true)}
              className="rounded-lg border border-navy-600 bg-navy-700 px-4 py-2 text-sm font-medium text-gray-200 hover:border-accent hover:text-accent transition-colors duration-150"
            >
              Reveal solution
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Approach
              </p>
              <Markdown>{problem.referenceSolution.approach}</Markdown>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Reasoning
              </p>
              <Markdown>{problem.referenceSolution.reasoning}</Markdown>
            </div>
            {problem.referenceSolution.commonMistakes && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Common mistakes
                </p>
                <Markdown>{problem.referenceSolution.commonMistakes}</Markdown>
              </div>
            )}
            {problem.referenceSolution.alternatives && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Alternatives
                </p>
                <Markdown>{problem.referenceSolution.alternatives}</Markdown>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Self-rating + notes + complete */}
      <section className="rounded-xl border border-navy-700 bg-navy-800 p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
          Self-rating
        </h2>

        <div className="mb-5">
          <p className="text-xs text-gray-500 mb-3">
            How well did you handle this? (1 = needed full solution, 5 = nailed it)
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setSelfRating(n)}
                className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                  selfRating === n
                    ? "bg-accent text-navy-900"
                    : "border border-navy-600 bg-navy-700 text-gray-300 hover:border-accent hover:text-accent"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="notes"
            className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-2"
          >
            Notes (optional)
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="What tripped you up? What would you do differently?"
            className="w-full rounded-lg border border-navy-600 bg-navy-900 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-600 focus:border-accent focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {isCompleted ? (
            <button
              onClick={() => unmarkProblemCompleted(problem.id)}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-accent-dim transition-colors duration-150"
            >
              <span>✓</span>
              <span>Completed — click to unmark</span>
            </button>
          ) : (
            <button
              onClick={handleMarkComplete}
              className="inline-flex items-center gap-2 rounded-lg border border-navy-600 bg-navy-800 px-5 py-2.5 text-sm font-semibold text-gray-300 hover:border-accent hover:text-accent transition-colors duration-150"
            >
              Mark as complete
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
