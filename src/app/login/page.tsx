"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Incorrect password.");
        setSubmitting(false);
        return;
      }
      router.replace("/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl border border-navy-700 bg-navy-800 p-6"
      >
        <div className="mb-5 flex items-center gap-2">
          <span className="text-accent text-xl">◆</span>
          <h1 className="text-xl font-semibold text-white">ThinkBox</h1>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          This site is private. Enter the password to continue.
        </p>

        <label className="block text-xs text-gray-400 mb-1.5" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          className="w-full rounded-lg border border-navy-600 bg-navy-900 px-3 py-1.5 text-sm text-white placeholder-gray-600 focus:border-accent/50 focus:outline-none mb-4"
        />

        <button
          type="submit"
          disabled={submitting || password.length === 0}
          className={
            submitting || password.length === 0
              ? "w-full rounded-lg border border-navy-600 bg-navy-700/50 px-4 py-1.5 text-sm font-medium text-gray-600 cursor-not-allowed"
              : "w-full rounded-lg border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent hover:bg-accent/20 transition-colors duration-150"
          }
        >
          {submitting ? "Signing in…" : "Sign in"}
        </button>

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>
    </div>
  );
}
