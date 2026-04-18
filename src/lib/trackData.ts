import { type Module, type Problem } from "@/types";

import { problemStructuringModules } from "@/data/modules/problem-structuring";
import { quantitativeReasoningModules } from "@/data/modules/quantitative-reasoning";
import { assumptionBuildingModules } from "@/data/modules/assumption-building";
import { firstPrinciplesThinkingModules } from "@/data/modules/first-principles-thinking";
import { guesstimationModules } from "@/data/modules/guesstimation";
import { logicalCommunicationModules } from "@/data/modules/logical-communication";
import { businessIntuitionModules } from "@/data/modules/business-intuition";
import { integrationModules } from "@/data/modules/integration";

import { problemStructuringProblems } from "@/data/problems/problem-structuring";
import { quantitativeReasoningProblems } from "@/data/problems/quantitative-reasoning";
import { assumptionBuildingProblems } from "@/data/problems/assumption-building";
import { firstPrinciplesThinkingProblems } from "@/data/problems/first-principles-thinking";
import { guesstimationProblems } from "@/data/problems/guesstimation";
import { logicalCommunicationProblems } from "@/data/problems/logical-communication";
import { businessIntuitionProblems } from "@/data/problems/business-intuition";
import { integrationIntegrationProblems } from "@/data/problems/integration";

export interface TrackData {
  modules: Module[];
  problems: Problem[];
}

export const trackData: Record<string, TrackData> = {
  "problem-structuring": {
    modules: problemStructuringModules,
    problems: problemStructuringProblems,
  },
  "quantitative-reasoning": {
    modules: quantitativeReasoningModules,
    problems: quantitativeReasoningProblems,
  },
  "assumption-building": {
    modules: assumptionBuildingModules,
    problems: assumptionBuildingProblems,
  },
  "first-principles-thinking": {
    modules: firstPrinciplesThinkingModules,
    problems: firstPrinciplesThinkingProblems,
  },
  guesstimation: {
    modules: guesstimationModules,
    problems: guesstimationProblems,
  },
  "logical-communication": {
    modules: logicalCommunicationModules,
    problems: logicalCommunicationProblems,
  },
  "business-intuition": {
    modules: businessIntuitionModules,
    problems: businessIntuitionProblems,
  },
  // Note: integration problems export has a double-prefix typo in the source file
  integration: {
    modules: integrationModules,
    problems: integrationIntegrationProblems,
  },
};
