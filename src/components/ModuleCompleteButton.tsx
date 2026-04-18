"use client";

import { useProgressStore } from "@/lib/stores/progress";

interface ModuleCompleteButtonProps {
  moduleId: string;
}

export default function ModuleCompleteButton({ moduleId }: ModuleCompleteButtonProps) {
  const completedModules = useProgressStore((s) => s.completedModules);
  const markCompleted = useProgressStore((s) => s.markModuleCompleted);
  const unmarkCompleted = useProgressStore((s) => s.unmarkModuleCompleted);
  const isCompleted = completedModules.has(moduleId);

  const handleToggle = () => {
    if (isCompleted) {
      unmarkCompleted(moduleId);
    } else {
      markCompleted(moduleId);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-150 ${
        isCompleted
          ? "bg-accent text-navy-900 hover:bg-accent-dim"
          : "border border-navy-600 bg-navy-800 text-gray-300 hover:border-accent hover:text-accent"
      }`}
    >
      {isCompleted ? (
        <>
          <span>✓</span>
          <span>Completed</span>
        </>
      ) : (
        <span>Mark as complete</span>
      )}
    </button>
  );
}
