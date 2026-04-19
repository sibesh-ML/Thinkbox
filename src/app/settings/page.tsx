"use client";

import { useState, useRef } from "react";
import { useProgressStore } from "@/lib/stores/progress";
import type { ProblemAttempt } from "@/types";

// ---------------------------------------------------------------------------
// Reset Section
// ---------------------------------------------------------------------------

function ResetSection() {
  const [confirmText, setConfirmText] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const canReset = confirmText === "RESET";

  function handleReset() {
    if (!canReset) return;
    useProgressStore.getState().reset();
    setConfirmText("");
    setMessage("Progress reset.");
    setTimeout(() => setMessage(null), 4000);
  }

  return (
    <div className="rounded-xl border border-navy-700 bg-navy-800 p-5">
      <h2 className="text-base font-semibold text-white mb-1">Reset Progress</h2>
      <p className="text-sm text-gray-400 mb-4">
        Permanently clears all completed problems, modules, and attempt history.
        This cannot be undone.
      </p>

      <label className="block text-xs text-gray-400 mb-1.5" htmlFor="reset-confirm">
        Type <span className="font-mono text-gray-200">RESET</span> to confirm
      </label>
      <input
        id="reset-confirm"
        type="text"
        value={confirmText}
        onChange={(e) => setConfirmText(e.target.value)}
        placeholder="RESET"
        className="w-full max-w-xs rounded-lg border border-navy-600 bg-navy-900 px-3 py-1.5 text-sm text-white placeholder-gray-600 focus:border-red-500/50 focus:outline-none mb-3"
      />

      <button
        onClick={handleReset}
        disabled={!canReset}
        className={
          canReset
            ? "rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 hover:bg-red-500/20 transition-colors duration-150"
            : "rounded-lg border border-navy-600 bg-navy-700/50 px-4 py-1.5 text-sm font-medium text-gray-600 cursor-not-allowed"
        }
      >
        Reset all progress
      </button>

      {message && (
        <p className="mt-3 text-sm text-green-400">{message}</p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Export Section
// ---------------------------------------------------------------------------

function ExportSection() {
  function handleExport() {
    const { completedProblems, completedModules, attempts } =
      useProgressStore.getState();

    const payload = {
      completedProblems: Array.from(completedProblems),
      completedModules: Array.from(completedModules),
      attempts,
      exportedAt: new Date().toISOString(),
      version: 1,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const today = new Date().toISOString().slice(0, 10);
    const a = document.createElement("a");
    a.href = url;
    a.download = `thinkbox-progress-${today}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="rounded-xl border border-navy-700 bg-navy-800 p-5">
      <h2 className="text-base font-semibold text-white mb-1">Export Progress</h2>
      <p className="text-sm text-gray-400 mb-4">
        Download your progress as a JSON file. Use this as a backup or to transfer
        to another device.
      </p>
      <button
        onClick={handleExport}
        className="rounded-lg border border-navy-600 bg-navy-700 px-4 py-1.5 text-sm font-medium text-gray-200 hover:bg-navy-600 hover:text-white transition-colors duration-150"
      >
        Export progress
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Import Section
// ---------------------------------------------------------------------------

type ImportData = {
  completedProblems: string[];
  completedModules: string[];
  attempts: Record<string, ProblemAttempt>;
};

function isValidImport(value: unknown): value is ImportData {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  if (
    !Array.isArray(v.completedProblems) ||
    !v.completedProblems.every((x) => typeof x === "string")
  )
    return false;
  if (
    !Array.isArray(v.completedModules) ||
    !v.completedModules.every((x) => typeof x === "string")
  )
    return false;
  if (!v.attempts || typeof v.attempts !== "object" || Array.isArray(v.attempts))
    return false;
  return true;
}

function ImportSection() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [replace, setReplace] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  function handleImport() {
    setError(null);
    setSuccess(null);
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setError("Please select a file first.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        setError("Could not parse file — make sure it is a valid JSON file.");
        return;
      }

      if (!isValidImport(parsed)) {
        setError(
          "Invalid format. Expected completedProblems (string[]), completedModules (string[]), and attempts (object).",
        );
        return;
      }

      const mode = replace ? "replace" : "merge";
      useProgressStore.getState().importProgress(parsed, mode);

      // Reset file input
      if (fileRef.current) fileRef.current.value = "";

      const pCount = parsed.completedProblems.length;
      const mCount = parsed.completedModules.length;
      const aCount = Object.keys(parsed.attempts).length;
      setSuccess(
        `Imported ${pCount} problem${pCount !== 1 ? "s" : ""}, ${mCount} module${mCount !== 1 ? "s" : ""}, ${aCount} attempt${aCount !== 1 ? "s" : ""}.`,
      );
      setTimeout(() => setSuccess(null), 6000);
    };
    reader.readAsText(file);
  }

  return (
    <div className="rounded-xl border border-navy-700 bg-navy-800 p-5">
      <h2 className="text-base font-semibold text-white mb-1">Import Progress</h2>
      <p className="text-sm text-gray-400 mb-4">
        Restore progress from a previously exported JSON file. By default, imported
        data is merged with your existing progress.
      </p>

      <input
        ref={fileRef}
        type="file"
        accept=".json"
        className="block text-sm text-gray-400 file:mr-3 file:rounded-lg file:border file:border-navy-600 file:bg-navy-700 file:px-3 file:py-1 file:text-xs file:font-medium file:text-gray-200 hover:file:bg-navy-600 file:cursor-pointer mb-3"
      />

      <label className="flex items-center gap-2 text-sm text-gray-400 mb-4 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={replace}
          onChange={(e) => setReplace(e.target.checked)}
          className="rounded border-navy-600 bg-navy-900 accent-accent"
        />
        Replace instead of merge
      </label>

      <button
        onClick={handleImport}
        className="rounded-lg border border-navy-600 bg-navy-700 px-4 py-1.5 text-sm font-medium text-gray-200 hover:bg-navy-600 hover:text-white transition-colors duration-150"
      >
        Import
      </button>

      {error && (
        <p className="mt-3 text-sm text-red-400">{error}</p>
      )}
      {success && (
        <p className="mt-3 text-sm text-green-400">{success}</p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SettingsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your progress data.</p>
      </div>

      <div className="flex flex-col gap-4">
        <ExportSection />
        <ImportSection />
        <ResetSection />
      </div>
    </>
  );
}
