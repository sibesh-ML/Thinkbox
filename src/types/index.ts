export type Difficulty = "easy" | "medium" | "hard";

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  moduleCount: number;
  problemCount: number;
  prefix: string;
  subSkills: string[];
}

export interface WorkedExample {
  title: string;
  problem: string;
  walkthrough: string;
  commonMistakes?: string;
}

export interface DeeperReading {
  title: string;
  author?: string;
  url?: string;
}

export interface Module {
  id: string;
  trackId: string;
  title: string;
  hook: string;
  concept: string;
  deepDive: string;
  workedExamples: WorkedExample[];
  guidedProblems: string[];
  takeaways: string[];
  deeperReading: DeeperReading[];
  recommendedNext?: string;
}

export interface RubricItem {
  id: string;
  text: string;
}

export interface ReferenceSolution {
  approach: string;
  reasoning: string;
  commonMistakes?: string;
  alternatives?: string;
}

export interface Problem {
  id: string;
  trackId: string;
  subSkill: string;
  secondarySkills: string[];
  difficulty: Difficulty;
  question: string;
  context?: string;
  hints: string[];
  referenceSolution: ReferenceSolution;
  rubric: RubricItem[];
}

export interface ProblemAttempt {
  problemId: string;
  attemptedAt: string;
  rubricChecks: Record<string, boolean>;
  selfRating?: number;
  notes?: string;
}
