import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { ProblemAttempt } from "@/types";

interface ProgressState {
  completedProblems: Set<string>;
  completedModules: Set<string>;
  attempts: Record<string, ProblemAttempt>;
  markProblemCompleted: (problemId: string) => void;
  unmarkProblemCompleted: (problemId: string) => void;
  markModuleCompleted: (moduleId: string) => void;
  unmarkModuleCompleted: (moduleId: string) => void;
  isProblemCompleted: (problemId: string) => boolean;
  isModuleCompleted: (moduleId: string) => boolean;
  recordAttempt: (attempt: ProblemAttempt) => void;
  reset: () => void;
  importProgress: (
    data: {
      completedProblems: string[];
      completedModules: string[];
      attempts: Record<string, ProblemAttempt>;
    },
    mode: "merge" | "replace",
  ) => void;
}

type PersistedProgress = {
  completedProblems: string[];
  completedModules: string[];
  attempts: Record<string, ProblemAttempt>;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedProblems: new Set<string>(),
      completedModules: new Set<string>(),
      attempts: {},
      markProblemCompleted: (problemId) =>
        set((state) => {
          const next = new Set(state.completedProblems);
          next.add(problemId);
          return { completedProblems: next };
        }),
      unmarkProblemCompleted: (problemId) =>
        set((state) => {
          const next = new Set(state.completedProblems);
          next.delete(problemId);
          return { completedProblems: next };
        }),
      markModuleCompleted: (moduleId) =>
        set((state) => {
          const next = new Set(state.completedModules);
          next.add(moduleId);
          return { completedModules: next };
        }),
      unmarkModuleCompleted: (moduleId) =>
        set((state) => {
          const next = new Set(state.completedModules);
          next.delete(moduleId);
          return { completedModules: next };
        }),
      isProblemCompleted: (problemId) =>
        get().completedProblems.has(problemId),
      isModuleCompleted: (moduleId) => get().completedModules.has(moduleId),
      recordAttempt: (attempt) =>
        set((state) => ({
          attempts: { ...state.attempts, [attempt.problemId]: attempt },
        })),
      reset: () =>
        set({
          completedProblems: new Set<string>(),
          completedModules: new Set<string>(),
          attempts: {},
        }),
      importProgress: (data, mode) =>
        set((state) => {
          if (mode === "replace") {
            return {
              completedProblems: new Set(data.completedProblems),
              completedModules: new Set(data.completedModules),
              attempts: { ...data.attempts },
            };
          }
          // merge: union completed sets, imported attempts overwrite on collision
          const mergedProblems = new Set(state.completedProblems);
          for (const id of data.completedProblems) mergedProblems.add(id);
          const mergedModules = new Set(state.completedModules);
          for (const id of data.completedModules) mergedModules.add(id);
          return {
            completedProblems: mergedProblems,
            completedModules: mergedModules,
            attempts: { ...state.attempts, ...data.attempts },
          };
        }),
    }),
    {
      name: "thinkbox-progress",
      storage: createJSONStorage(() => localStorage),
      partialize: (state): PersistedProgress => ({
        completedProblems: Array.from(state.completedProblems),
        completedModules: Array.from(state.completedModules),
        attempts: state.attempts,
      }),
      merge: (persistedState, currentState) => {
        const p = persistedState as Partial<PersistedProgress> | undefined;
        return {
          ...currentState,
          completedProblems: new Set(p?.completedProblems ?? []),
          completedModules: new Set(p?.completedModules ?? []),
          attempts: p?.attempts ?? {},
        };
      },
    },
  ),
);
