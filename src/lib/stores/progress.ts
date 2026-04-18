import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ProgressState {
  completedProblems: Set<string>;
  completedModules: Set<string>;
  markProblemCompleted: (problemId: string) => void;
  unmarkProblemCompleted: (problemId: string) => void;
  markModuleCompleted: (moduleId: string) => void;
  unmarkModuleCompleted: (moduleId: string) => void;
  isProblemCompleted: (problemId: string) => boolean;
  isModuleCompleted: (moduleId: string) => boolean;
  reset: () => void;
}

type PersistedProgress = {
  completedProblems: string[];
  completedModules: string[];
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedProblems: new Set<string>(),
      completedModules: new Set<string>(),
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
      reset: () =>
        set({
          completedProblems: new Set<string>(),
          completedModules: new Set<string>(),
        }),
    }),
    {
      name: "thinkbox-progress",
      storage: createJSONStorage(() => localStorage),
      partialize: (state): PersistedProgress => ({
        completedProblems: Array.from(state.completedProblems),
        completedModules: Array.from(state.completedModules),
      }),
      merge: (persistedState, currentState) => {
        const p = persistedState as Partial<PersistedProgress> | undefined;
        return {
          ...currentState,
          completedProblems: new Set(p?.completedProblems ?? []),
          completedModules: new Set(p?.completedModules ?? []),
        };
      },
    },
  ),
);
