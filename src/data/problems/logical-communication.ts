import type { Problem } from '@/types';

export const logicalCommunicationProblems: Problem[] = [

  // ── TOP-DOWN COMMUNICATION (lc-001 to lc-005) ────────────────────────────

  {
    id: "lc-001",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: [],
    difficulty: "easy",
    question: "Rewrite this bottom-up project update as a top-down message so a busy manager gets the key point in the first sentence.",
    context: `**Your role:** Project manager sending a weekly status update to your VP.

**Raw material to restructure:**
"Hi Sarah, so this week the team finished the API integration tests — those took longer than expected because we found three edge cases in the auth flow that needed fixing. We also had two engineers out sick on Thursday and Friday which slowed things down. On the positive side, the database migration script is now complete and tested. We did a sync with the design team and got final approval on the new dashboard mockups. So the current situation is we're about 4 days behind the original schedule but we've resolved the blockers that caused the delay. We're planning to work this weekend to catch up. Overall I think we'll be able to hit the revised go-live date of March 15th."`,
    hints: [
      "Ask yourself: what is the single most important thing Sarah needs to know? Lead with that.",
      "Top-down communication means your conclusion comes first, then the supporting detail. What is your conclusion here?",
      "Restructured opening: 'We are 4 days behind schedule but on track to meet the revised March 15 go-live date.' Then: what caused the delay, what resolved it, and what you're doing to recover."
    ],
    referenceSolution: {
      approach: "Identify the single most important conclusion (we will hit the revised deadline) and lead with it. Follow with supporting facts in order of importance.",
      reasoning: "The reader's most pressing question is: will this project hit its deadline? Answer that immediately. Then provide the minimum context needed to trust the answer: cause of delay (edge cases + sick leave), resolved blockers (API tests done, migration complete, design approved), and recovery plan (weekend work). Details like which specific edge cases were found are irrelevant to the VP.",
      commonMistakes: "Starting with background narrative ('this week we finished...') forces the reader to hold uncertainty until the end. Mixing good news and bad news without a clear overall verdict also leaves readers uncertain about the bottom line.",
      alternatives: "Could open with the action item ('We need to work this weekend to recover the schedule') rather than the status. Appropriate if the VP needs to approve overtime costs. The right opening depends on what decision the reader needs to make."
    },
    rubric: [
      { id: "lc-001-r1", text: "The first sentence states the overall conclusion or status (not a background fact)" },
      { id: "lc-001-r2", text: "Supporting details follow in order of importance to the reader" },
      { id: "lc-001-r3", text: "The message could be read only to the first sentence and the reader would know the most important thing" },
      { id: "lc-001-r4", text: "Irrelevant operational detail is omitted or moved to a secondary position" }
    ]
  },

  {
    id: "lc-002",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: [],
    difficulty: "easy",
    question: "A team member wrote this explanation of why a product feature was delayed. Restructure it top-down for the product director.",
    context: `**Your role:** Senior engineer translating a teammate's explanation into a message for the product director.

**Raw material to restructure:**
"So what happened is we started building the export feature in the first week of the sprint. Then we realized the current data model doesn't store the columns needed for the CSV format the client wants. We raised it with the backend team and they confirmed this would require a schema migration. Schema migrations in our system usually take a week because of the staging environment approval process. We looked at a workaround but it would have created tech debt. The migration was approved yesterday and is being applied today. So the feature will be ready next Friday instead of this Friday."`,
    hints: [
      "What does the product director care most about — the technical story, or the timeline impact?",
      "Lead with the impact, then explain the cause, then state what is resolved.",
      "Opening: 'The export feature will be delayed by one week to next Friday. The cause was a required schema migration, which is now approved and being applied today.'"
    ],
    referenceSolution: {
      approach: "Lead with the impact (one week delay, new date), then give the cause (schema migration required), then confirm resolution status (migration approved and in progress).",
      reasoning: "The product director needs to know: (1) how late is the feature, (2) why, (3) is it under control. The current version buries the answer to question (1) at the end after a technical narrative. Restructured: 'The export feature will be delivered next Friday, one week later than planned. We discovered that the required CSV columns are not in the current data model, which needed a schema migration. The migration was approved yesterday and is being applied today — no further blockers.' Technical details about the workaround considered and rejected can be omitted unless the director asks.",
      commonMistakes: "Retelling the story in chronological order forces the reader through your thought process. Product directors need impact and resolution, not a detective story. Also: omitting the new date leaves the reader without the key data point.",
      alternatives: "If the delay affects a client commitment, lead with the client impact instead: 'Our export delivery to [Client] will slip one week to next Friday.' This frames the communication around the business consequence, not the internal timeline."
    },
    rubric: [
      { id: "lc-002-r1", text: "First sentence states the delay and new expected date" },
      { id: "lc-002-r2", text: "Cause of delay is explained concisely after the impact statement" },
      { id: "lc-002-r3", text: "Resolution status is clearly stated" },
      { id: "lc-002-r4", text: "Technical details irrelevant to the product director are omitted" }
    ]
  },

  {
    id: "lc-003",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: ["mece-decomposition"],
    difficulty: "easy",
    question: "This analysis of a vendor evaluation was written bottom-up. Restructure it top-down so the decision-maker gets a clear recommendation first.",
    context: `**Your role:** Procurement analyst sending findings to the Head of Operations who must make a vendor selection by end of week.

**Raw material to restructure:**
"We looked at three vendors: Acme, BrightData, and CoreSystems. Acme has been in business 12 years and has a 99.8% uptime SLA. Their pricing is $45k/year. BrightData is newer (3 years) but has strong reviews and offers $38k/year with a 99.5% uptime SLA. CoreSystems is the most expensive at $62k/year but includes dedicated support and a 99.9% SLA. We scored each vendor on price, reliability, support, and integration complexity. Acme scored 7/10, BrightData scored 6/10, CoreSystems scored 8/10. Given our budget constraints of $50k, CoreSystems is eliminated. Between Acme and BrightData, Acme has better reliability and more experience, and the $7k price difference is within our budget. So we recommend Acme."`,
    hints: [
      "The recommendation is buried at the end. Move it to the front. The reader's first question is: who do you recommend and why?",
      "After the recommendation, you need supporting logic. What are the two or three reasons that justify picking Acme over BrightData?",
      "Opening: 'We recommend Acme at $45k/year. It offers the best combination of reliability (99.8% SLA) and track record within our $50k budget. BrightData is $7k cheaper but has a weaker SLA and less experience. CoreSystems exceeds budget.'"
    ],
    referenceSolution: {
      approach: "Lead with the recommendation and the one-line rationale. Then present the supporting evidence: why the winner beats each alternative on the criteria that matter.",
      reasoning: "Restructured: 'We recommend Acme ($45k/year). It delivers the best reliability and track record within our $50k budget. [Why not BrightData:] BrightData is $7k cheaper but its 99.5% SLA and 3-year history represent higher risk for our uptime-sensitive operations. [Why not CoreSystems:] CoreSystems scores highest overall but at $62k it exceeds budget. Acme's 99.8% SLA and 12-year track record justify the $7k premium over BrightData.' The scoring methodology and full criteria list can be attached as an appendix for those who want to audit the analysis.",
      commonMistakes: "Presenting all vendor data in parallel before reaching a conclusion forces the reader to do the synthesis themselves. Decision-makers want the synthesis first, data second. Also: explaining the scoring process (we scored each vendor on four criteria) is process detail that should be minimized or footnoted.",
      alternatives: "If the Head of Operations is highly analytical and will want to challenge the recommendation, a brief criteria weighting explanation before the recommendation may be warranted. Know your audience's decision style."
    },
    rubric: [
      { id: "lc-003-r1", text: "First sentence states the recommendation (vendor name and price)" },
      { id: "lc-003-r2", text: "The rationale for the recommendation appears before the description of alternatives" },
      { id: "lc-003-r3", text: "Each rejected option is addressed with a concise reason" },
      { id: "lc-003-r4", text: "The budget constraint is referenced as a decision factor" },
      { id: "lc-003-r5", text: "Scoring methodology detail is de-emphasized or omitted from the main message" }
    ]
  },

  {
    id: "lc-004",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: [],
    difficulty: "easy",
    question: "This support escalation email tells a story but buries the ask. Rewrite it top-down so the recipient immediately knows what action is needed.",
    context: `**Your role:** Customer Success Manager escalating to Engineering.

**Raw material to restructure:**
"Hi Priya, I wanted to reach out about a customer issue. Earlier today I got a call from Meridian Corp, one of our enterprise accounts. They said their data exports have been failing since yesterday afternoon. I looked into their account and confirmed they have been trying to export every hour for the past 18 hours without success. I checked our status page and there are no incidents listed. I tried to reproduce the issue on a test account and couldn't replicate it. But the customer is very frustrated and their finance team apparently needs this data for a report that's due tomorrow morning. I've been going back and forth with the customer and they are losing confidence in us. Could you take a look when you get a chance? Thanks."`,
    hints: [
      "What do you need from Priya, and when? That is your opening line.",
      "After stating the ask, give the minimum context needed: which customer, what's broken, when did it start, what you've already tried.",
      "Opening: 'I need Engineering to investigate a data export failure for Meridian Corp (enterprise) by tonight — their finance team has a deadline tomorrow morning.' Then: symptoms, duration, what you've already checked."
    ],
    referenceSolution: {
      approach: "Lead with the action request and its urgency. Follow with the facts needed to act: customer, issue, timeline, and what has already been ruled out.",
      reasoning: "Restructured: 'Urgent: I need Engineering to investigate a data export failure for Meridian Corp (enterprise account) by tonight. Their finance team has a report due tomorrow morning and exports have been failing for 18+ hours. [What I know:] No active incidents on the status page. Issue is account-specific — I could not reproduce it on a test account. [What I've ruled out:] Not a known platform-wide incident. [Customer status:] They have been attempting exports hourly since yesterday afternoon and are losing confidence. Please let me know if you need account details or logs.' The phrase 'when you get a chance' is removed — this is time-sensitive and that phrase signals the opposite.",
      commonMistakes: "Telling the story chronologically ('earlier today I got a call...') delays the action request. By the time the reader reaches the ask, they may have mentally de-prioritized the message. 'When you get a chance' is a critical mistake on an urgent escalation.",
      alternatives: "Could open with the customer risk angle: 'Meridian Corp, an enterprise account, is at risk of churn if we cannot restore data exports by tonight.' This frames urgency in business terms, which may be more motivating for Engineering teams who need context on business impact."
    },
    rubric: [
      { id: "lc-004-r1", text: "First sentence states the specific action requested and the deadline" },
      { id: "lc-004-r2", text: "Customer name and tier are identified early" },
      { id: "lc-004-r3", text: "Diagnostic information already gathered is included to avoid duplicate work" },
      { id: "lc-004-r4", text: "Hedging language ('when you get a chance') is removed or replaced with urgency language" }
    ]
  },

  {
    id: "lc-005",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: ["issue-trees"],
    difficulty: "medium",
    question: "This multi-issue update covers four different problem areas but has no clear hierarchy. Restructure it top-down, grouping issues by severity and leading with the most important finding.",
    context: `**Your role:** Operations consultant delivering a weekly site assessment to a manufacturing plant manager who has 10 minutes for this update.

**Raw material to restructure:**
"The compressed air line in Building C has a small leak near the junction box — it's been there for about two weeks and maintenance knows about it. The production yield on Line 2 dropped from 94% to 87% this week, which we traced to a calibration drift on the optical sensor — sensor has been recalibrated and yield is back to 92% as of yesterday, still trending up. The fire suppression system in the chemical storage room has a failed test light on Panel B, we've notified the inspector and they're coming Thursday. The new shift rotation schedule that HR proposed will conflict with our maintenance windows on Tuesdays and Fridays — I think we need someone to push back on HR before this goes live next month. The packaging machine conveyor belt shows early wear signs — we estimate 3-4 months before replacement is needed, we're sourcing quotes. We also had a near-miss incident on Tuesday in Building B when a forklift came within 2 feet of a pedestrian — the operator has been retrained and we've added floor markings, but I think we need a full safety audit."`,
    hints: [
      "Categorize each item by urgency: needs immediate attention, in progress/recovering, planned/low urgency. Lead with the most critical.",
      "The near-miss incident and the fire suppression failure are safety issues — these should come first regardless of resolution status.",
      "Structure: (1) Safety: near-miss and suppression panel — both have actions but need management visibility. (2) Operational: yield issue — recovering, but note it. (3) Maintenance pipeline: conveyor wear, air leak, HR schedule conflict. End with the one item requiring the manager's decision."
    ],
    referenceSolution: {
      approach: "Triage all items into safety-critical, operationally impactful, and routine maintenance. Lead with safety, follow with operations, close with maintenance pipeline. Surface the one item that requires the manager's decision or intervention.",
      reasoning: "Restructured: '**Two items need your attention: [1] Safety audit triggered by Tuesday near-miss (Building B). A forklift came within 2 feet of a pedestrian. Immediate actions taken: operator retrained, floor markings added. I recommend commissioning a full pedestrian-forklift safety audit before Thursday. [2] Fire suppression panel failure (Chemical Storage, Panel B). Test light failed. Inspector visiting Thursday — recommend you confirm this is on-track given chemical storage risk.** [Operational update:] Line 2 yield recovered from 87% to 92% after sensor recalibration; trending back to 94% baseline. No action needed. [Maintenance pipeline:] Conveyor belt replacement needed in 3-4 months (sourcing quotes). Compressed air leak in Building C — known, logged, low urgency. HR shift rotation conflicts with maintenance windows — I'll flag to HR before the end of the week unless you prefer to escalate.' This structure gives the plant manager the two highest-risk items immediately and closes with one pending decision.",
      commonMistakes: "Treating all items as equal-weight bullet points forces the reader to triage. A plant manager in a 10-minute meeting will miss the safety-critical items if they're buried among maintenance updates. Chronological ordering ('we also had...') signals random priority.",
      alternatives: "Could use a traffic light (Red/Amber/Green) categorization instead of Safety/Operational/Maintenance. Useful when the audience is familiar with that framework. The key principle remains: lead with the most critical, end with the one required decision."
    },
    rubric: [
      { id: "lc-005-r1", text: "Safety items are presented first regardless of operational impact" },
      { id: "lc-005-r2", text: "Items are grouped by urgency or theme, not listed chronologically" },
      { id: "lc-005-r3", text: "The item requiring the manager's decision or action is clearly identified" },
      { id: "lc-005-r4", text: "Resolved or low-urgency items are still present but de-emphasized" },
      { id: "lc-005-r5", text: "Each item's current status (resolved, in progress, pending) is clear" }
    ]
  },

  // ── PYRAMID PRINCIPLE (lc-006 to lc-010) ─────────────────────────────────

  {
    id: "lc-006",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: [],
    difficulty: "easy",
    question: "Apply the Pyramid Principle to restructure this sprawling analysis into a three-level pyramid: governing thought → key lines → supporting arguments.",
    context: `**Your role:** Strategy analyst presenting market entry findings to a partner.

**Raw material to restructure:**
"The Southeast Asian e-commerce market grew 23% last year. Indonesia has a large young population. Logistics infrastructure has improved significantly. Local payment solutions like GoPay have high adoption. Competitor X entered Indonesia last year and doubled revenue in 8 months. Our product has been tested in similar markets (Brazil, Nigeria). The regulatory environment is more favorable than in Vietnam. Consumer spend on electronics is rising. Mobile penetration is 78%. We have two existing distribution partners in Jakarta. The average competitor takes 14 months to profitability. Our unit economics work at a 30% lower price point than current market rates."`,
    hints: [
      "What single governing thought ties all these facts together? It should be a recommendation or conclusion, not a description.",
      "Group the supporting facts: some are about market opportunity, some about our competitive position, some about execution feasibility. These are your three key lines.",
      "Pyramid: Governing thought: 'We should enter the Indonesian e-commerce market now.' Key lines: (1) The market is large and accelerating. (2) Our competitive position is strong. (3) Execution risk is manageable. Supporting points sit under each key line."
    ],
    referenceSolution: {
      approach: "Identify the single governing thought (the recommendation), then group supporting facts into 2-4 key lines that directly prove it, then assign each raw fact to the appropriate key line as supporting evidence.",
      reasoning: "Governing thought: 'We recommend entering Indonesia now — the market timing, competitive position, and execution infrastructure are all favorable.' Key Line 1 — Market is large and accelerating: 23% growth last year, rising electronics spend, 78% mobile penetration, young population. Key Line 2 — Our competitive position is strong: unit economics work at 30% below market rates, similar-market success (Brazil, Nigeria), favorable regulatory environment vs. Vietnam. Key Line 3 — Execution risk is manageable: two existing Jakarta distribution partners, proven local payment adoption (GoPay), Competitor X hit profitability in 8 months (vs. 14-month average), improved logistics. This structure makes the recommendation immediately clear and groups evidence so the reader can challenge any single key line without losing the overall argument.",
      commonMistakes: "Listing facts in no particular order with no governing thought is the most common failure — it reads like a research dump, not an argument. A second mistake is having 10 key lines (one per fact) rather than grouping facts into 3-4 themes. The pyramid only works if each level has 2-4 items.",
      alternatives: "Could also structure as: (1) Why enter at all (market pull), (2) Why now (timing), (3) Why us (differentiation). This works if the audience is skeptical about all three dimensions. Choose key lines based on what the audience will challenge most."
    },
    rubric: [
      { id: "lc-006-r1", text: "A single governing thought (recommendation or conclusion) is stated at the top" },
      { id: "lc-006-r2", text: "Supporting facts are grouped into 2-4 key lines, not listed individually" },
      { id: "lc-006-r3", text: "Each key line directly supports the governing thought" },
      { id: "lc-006-r4", text: "Supporting evidence is assigned to the correct key line" },
      { id: "lc-006-r5", text: "No fact appears without being connected to a key line" }
    ]
  },

  {
    id: "lc-007",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: [],
    difficulty: "easy",
    question: "This meeting follow-up email contains all the right information but is structured as a brain dump. Apply the Pyramid Principle to restructure it.",
    context: `**Your role:** Project lead sending a post-meeting summary to four stakeholders.

**Raw material to restructure:**
"Hi everyone, thanks for joining today's call. So we talked about the budget and James mentioned that Q3 spend is running 12% over plan. Marketing said they need the extra spend because the CPC on paid campaigns went up. We also discussed the product roadmap and Lisa confirmed that the mobile app feature is on track for August. There was some debate about whether to delay the desktop refresh to fund paid marketing but we decided not to. Finance wants a reforecast by July 15th. The new customer success hire starts June 10th. We need someone to own the reforecast — probably James. We talked about the hiring plan and the two engineering roles are still open. One interview is scheduled for next week. The CS hire is confirmed. Action: James to complete reforecast by July 15th. Oh and we should reschedule the roadmap review because Lisa is out July 8-12."`,
    hints: [
      "A meeting summary has three natural layers: decisions made, actions assigned, items to note. That is your pyramid structure.",
      "Sort every item into: Decision, Action (with owner and due date), or FYI. Decisions and Actions are the top of your pyramid.",
      "Open with: 'Three decisions and two actions from today's call.' Then list decisions, then actions with owners and dates, then FYI context."
    ],
    referenceSolution: {
      approach: "A meeting summary pyramid has three key lines: Decisions Made, Actions Required, and Notes/Context. Lead with decisions and actions — these are what the reader needs to act on.",
      reasoning: "Restructured email: 'Summary from today's call — 3 decisions, 2 actions. **Decisions:** (1) Q3 budget will not be reallocated from product to paid marketing — desktop refresh stays on plan. (2) James to own the Q3 reforecast. (3) Roadmap review to be rescheduled given Lisa's absence July 8-12. **Actions:** (1) James: complete Q3 reforecast by July 15. (2) [Scheduler]: reschedule roadmap review to a date after July 12 — please propose three options by end of week. **Context:** Q3 spend is 12% over plan driven by higher CPC on paid campaigns. Mobile app feature on track for August. CS hire starts June 10. Two engineering roles still open; one interview next week.' This structure means a reader can read only the Decisions and Actions section and know everything they need to do."
      ,
      commonMistakes: "Mixing discussion recap ('we talked about...') with decisions and actions makes it hard to extract next steps. FYI context items should appear last, not interspersed. Also: burying actions inside narrative ('Finance wants a reforecast...') without naming the owner clearly.",
      alternatives: "For a very action-heavy meeting, could lead with actions only and put decisions as supporting context. The right top of the pyramid depends on what the audience needs most urgently — usually it's 'what do I need to do.'"
    },
    rubric: [
      { id: "lc-007-r1", text: "Decisions are clearly separated from actions and FYI items" },
      { id: "lc-007-r2", text: "Each action has a named owner and due date" },
      { id: "lc-007-r3", text: "The most important information (decisions and actions) appears before context" },
      { id: "lc-007-r4", text: "Discussion narrative is omitted or minimized" }
    ]
  },

  {
    id: "lc-008",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: ["framework-selection"],
    difficulty: "easy",
    question: "Apply the Pyramid Principle to this research summary so a non-technical reader can understand the main finding and its basis at a glance.",
    context: `**Your role:** UX researcher presenting findings to a non-technical VP of Product.

**Raw material to restructure:**
"We ran 12 user interviews over two weeks. Users were aged 25-45, split evenly between power users and new users. We used a think-aloud protocol. We found that new users spent an average of 4.2 minutes looking for the settings page before giving up in 3 out of 12 sessions. Seven out of 12 users mentioned that the search bar was 'hard to find' or 'not obvious.' Navigation depth for core tasks averages 4.3 clicks versus a best-practice target of 3 or fewer. Power users reported high satisfaction (8.2/10) but new users reported 5.1/10. Four users specifically mentioned wanting a getting-started guide. The color contrast on secondary buttons fails WCAG AA standards per our accessibility audit. We concluded that the product has a significant onboarding problem that is driving new user frustration, and we recommend redesigning the nav and adding an onboarding flow."`,
    hints: [
      "What is the single governing thought from all this research? It's in the last sentence — but it should be the first sentence.",
      "Group the evidence: some findings are about navigation difficulty, some about new user frustration, some are accessibility issues. These are your key lines.",
      "Governing thought: 'New user onboarding is broken — we recommend nav redesign and an onboarding flow.' Key lines: (1) New users can't find core features. (2) Satisfaction gap between new and power users is severe. (3) Accessibility issues compound the problem."
    ],
    referenceSolution: {
      approach: "Extract the governing conclusion from the last sentence and make it the first sentence. Group raw findings under 2-3 key lines that together justify the recommendation.",
      reasoning: "Governing thought: 'The product has a significant onboarding problem driving new user frustration — we recommend nav redesign and an onboarding flow.' Key Line 1 — New users cannot find core features: 3/12 sessions ended without finding settings; 7/12 found search bar 'not obvious'; average task depth is 4.3 clicks vs. 3-click best practice. Key Line 2 — New user satisfaction is critically low: new users score 5.1/10 vs. power users 8.2/10; 4 users specifically requested a getting-started guide. Key Line 3 — Accessibility issues create additional friction: secondary button contrast fails WCAG AA. Methodology (12 users, think-aloud, age range) becomes a footnote — the VP of Product needs the conclusion and evidence, not the research protocol.",
      commonMistakes: "Starting with methodology ('we ran 12 interviews') buries the finding. Research summaries for non-technical audiences should lead with the insight, not the method. Also: treating each data point as an equally weighted finding without grouping them into supporting themes.",
      alternatives: "Could structure by user segment (new vs. power users) rather than by finding theme. Useful if the audience needs to make separate decisions for each segment. Here, the single recommendation (fix onboarding) applies to both, so theme grouping is cleaner."
    },
    rubric: [
      { id: "lc-008-r1", text: "The governing conclusion appears in the first sentence" },
      { id: "lc-008-r2", text: "Research findings are grouped into 2-3 key lines, not listed individually" },
      { id: "lc-008-r3", text: "Each key line supports the governing conclusion" },
      { id: "lc-008-r4", text: "Methodology detail is de-emphasized or moved to a footnote/appendix" }
    ]
  },

  {
    id: "lc-009",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: [],
    difficulty: "easy",
    question: "This investor update reads as a chronological narrative. Apply the Pyramid Principle to make the key message and investment case immediately clear.",
    context: `**Your role:** Startup founder writing a monthly investor update.

**Raw material to restructure:**
"Hi investors, hope you're all doing well. This month we hired two engineers and a head of sales. We had a few sales calls that didn't convert but we closed two new enterprise deals totaling $180k ARR. Our churn was 1.2% this month which is lower than last month's 1.8%. We launched the new API and got positive feedback. We're burning $95k/month. We have 14 months of runway. We're seeing good traction in the fintech vertical. We hit $1.2M ARR this month, up from $1.05M last month. Pipeline looks strong — $400k of qualified opportunities. We need introductions to Series A investors because we plan to raise in Q3."`,
    hints: [
      "What is the governing message of this update? You hit a milestone, growth is strong, and you're raising soon. Lead with that.",
      "Group your evidence: growth metrics, team/product progress, financial health. These become your key lines.",
      "Governing thought: 'We hit $1.2M ARR (14% MoM growth) and are on track to raise Series A in Q3 — introductions welcome.' Then: growth proof, operational health, team/product progress."
    ],
    referenceSolution: {
      approach: "Identify the governing message (strong growth + Series A raise) and lead with it. Group supporting metrics into 2-3 key lines. Close with the specific ask.",
      reasoning: "Governing thought: 'We crossed $1.2M ARR this month — 14% month-over-month growth — and are preparing to raise Series A in Q3. Introductions to Series A investors are welcome.' Key Line 1 — Growth is strong and compounding: $1.2M ARR (up from $1.05M), two new enterprise deals totaling $180k ARR, $400k qualified pipeline, fintech vertical showing strong traction. Key Line 2 — Unit economics are improving: churn fell from 1.8% to 1.2%, burn is $95k/month, 14 months runway. Key Line 3 — Team and product execution on track: two engineers and head of sales hired, new API launched with positive feedback. [Ask:] Warm introductions to Series A investors appreciated — we plan to start conversations in Q3. The opening pleasantry ('Hope you're all doing well') is removed — investor updates are professional communications, not personal notes.",
      commonMistakes: "Burying the ARR milestone halfway through the email means investors who skim may miss your best metric. The ask ('we need introductions') should appear both at the top (as context for why this update matters) and at the bottom (as a clear call to action). Mixing negative items (unconverted sales calls) without context makes the update feel uncertain.",
      alternatives: "Some founders prefer a health dashboard format (green/yellow/red for each function) rather than narrative pyramid. This works well for sophisticated investors who want to scan quickly. The pyramid narrative works better when you have a compelling story arc (milestone + raise) to tell."
    },
    rubric: [
      { id: "lc-009-r1", text: "The governing message (ARR milestone and/or raise intent) is in the first 1-2 sentences" },
      { id: "lc-009-r2", text: "Metrics are grouped by theme, not listed in random order" },
      { id: "lc-009-r3", text: "The specific ask (introductions) is clearly stated" },
      { id: "lc-009-r4", text: "Opening pleasantry is omitted or minimal" }
    ]
  },

  {
    id: "lc-010",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: ["unit-economics"],
    difficulty: "medium",
    question: "This financial analysis contains a buried recommendation and scattered evidence across four themes. Build a full three-level pyramid: governing thought, key lines, and supporting data points with explicit logic links.",
    context: `**Your role:** FP&A analyst presenting to the CFO who must decide whether to approve a $2M budget increase for the sales team.

**Raw material to restructure:**
"Sales headcount is currently 12 reps. Average quota per rep is $400k. Attainment last quarter was 82%. Industry benchmark attainment is 75-80%. We have 180 active trials in the pipeline right now. Historical trial-to-close rate is 35%. At 35% conversion that's 63 new customers. Average ACV is $28k. That's $1.76M new ARR from current pipeline alone. Ramp time for new reps is 3 months. Fully loaded cost per rep is $160k/year. We could hire 12 new reps with the $2M budget (accounting for Q3/Q4 ramp). At ramp completion those 12 reps would target $4.8M quota. At our 82% attainment rate that's $3.9M ARR. Payback period is approximately 6 months once reps are ramped. Customer LTV is $140k. LTV:CAC ratio for new reps would be 4.7x. The team is above benchmark on attainment and pipeline is healthy."`,
    hints: [
      "What is the CFO's decision? Approve or deny the $2M. Your governing thought must be a recommendation with financial justification.",
      "Group the evidence: current team performance (justifies the model works), pipeline opportunity (justifies urgency), new rep economics (justifies the investment). Three key lines.",
      "Governing thought: 'Approve the $2M sales headcount investment — the unit economics are compelling (4.7x LTV:CAC, 6-month payback) and current pipeline cannot be served by existing capacity.' Then support with three key lines."
    ],
    referenceSolution: {
      approach: "State the recommendation with the two or three most powerful financial justifications in the governing thought. Then build three key lines: (1) current team is performing above benchmark, proving the model works; (2) pipeline exceeds current team capacity, proving urgency; (3) new rep unit economics justify the investment.",
      reasoning: "Governing thought: 'Recommend approving the $2M investment in 12 additional sales reps. The current model is proven (82% quota attainment vs. 75-80% benchmark), pipeline demand exceeds current capacity, and new rep unit economics deliver 4.7x LTV:CAC with a 6-month payback post-ramp.' Key Line 1 — Current model is proven: 12 reps at $400k quota, 82% attainment (above 75-80% benchmark) — de-risked model for scaling. Key Line 2 — Existing pipeline already justifies urgency: 180 active trials × 35% conversion × $28k ACV = $1.76M new ARR available now; current team cannot close this volume without capacity expansion. Key Line 3 — New rep economics are strong: $160k fully loaded cost per rep; ramp in 3 months; 12 reps × $400k quota × 82% = $3.9M ARR target; payback ~6 months; LTV:CAC = 4.7x. The governing thought makes the recommendation, Key Line 1 removes risk objection, Key Line 2 creates urgency, Key Line 3 proves financial return.",
      commonMistakes: "Listing financial calculations in the order they were computed (headcount → quota → attainment → pipeline → new hire cost) forces the CFO to assemble the investment case themselves. The analyst's job is to synthesize, not to present raw inputs. Also: not stating the governing recommendation explicitly — 'the team is above benchmark and pipeline is healthy' is a description, not a recommendation.",
      alternatives: "If the CFO is most concerned about downside risk, restructure Key Lines as: (1) What happens if we don't hire (foregone revenue), (2) Downside case (what if attainment drops to 65%), (3) Base case return. This reframes the decision as 'cost of inaction' which is often more persuasive than 'cost of investment.'"
    },
    rubric: [
      { id: "lc-010-r1", text: "Governing thought is a clear recommendation with financial justification, not a description" },
      { id: "lc-010-r2", text: "Key lines are explicitly stated and numbered, not implied" },
      { id: "lc-010-r3", text: "Each key line addresses a different dimension of the CFO's decision (risk, urgency, return)" },
      { id: "lc-010-r4", text: "Supporting data points are assigned to the correct key line, not re-listed randomly" },
      { id: "lc-010-r5", text: "The governing thought contains the two or three most powerful numbers (LTV:CAC, payback, ARR target)" }
    ]
  },

  // ── SCQA FRAMEWORK (lc-011 to lc-015) ────────────────────────────────────

  {
    id: "lc-011",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: [],
    difficulty: "easy",
    question: "Write a crisp SCQA opening (4 sentences, one per element) for this situation before presenting your analysis.",
    context: `**Your role:** Management consultant opening a presentation to a retail chain's executive team.

**Situation to frame:**
The client is a 200-store regional grocery chain. They have been profitable for 15 years. Online grocery delivery has grown from 3% to 18% of the market in 4 years. Their current setup: no delivery capability, no app, no loyalty data. Three major competitors launched delivery in the past 18 months. The client asked you: "Should we build a delivery service?"

**Your task:** Write the four SCQA sentences that would open this presentation.`,
    hints: [
      "Situation = stable background the audience agrees with. Complication = what changed or is threatening the stable situation. Question = the question that the complication forces us to ask. Answer = your answer (which the rest of the presentation will support).",
      "The Situation should take 1-2 sentences of agreed fact. The Complication should introduce the threat or change. Don't combine Situation and Complication.",
      "S: 'You have built a profitable 200-store grocery business over 15 years.' C: 'Online delivery has grown from 3% to 18% of the market in four years, and three of your major competitors have already launched delivery services — leaving you without a digital channel or loyalty data.' Q: 'Should you build a delivery service, and if so, how?' A: 'Yes — but not by building from scratch. We recommend a white-label partnership that gets you to market in 6 months at a fraction of the build cost.'"
    ],
    referenceSolution: {
      approach: "Write exactly one sentence per SCQA element. Situation: agreed stable fact. Complication: the disruption. Question: what the complication forces the decision-maker to ask. Answer: your recommendation (the hook for the rest of the deck).",
      reasoning: "S: 'You have operated a profitable 200-store grocery business for 15 years, with strong regional brand recognition and customer loyalty.' C: 'Online grocery delivery has expanded from 3% to 18% of market share in just four years, and three of your major competitors have already launched delivery platforms — leaving you without a digital channel, an app, or loyalty data to compete.' Q: 'Should you build a delivery service, and if so, what is the right model?' A: 'Yes, you should — but we recommend a white-label delivery partnership rather than a build-from-scratch approach, allowing market entry within 6 months at roughly one-fifth the capital cost.' This four-sentence opening immediately establishes shared context, creates urgency, frames the decision, and previews the answer — so the audience knows what to listen for in the rest of the presentation.",
      commonMistakes: "The most common error is merging Situation and Complication: 'You're a profitable grocery chain but online delivery is growing...' — this weakens both. The Situation should be something the audience fully agrees with before the Complication is introduced. Another mistake: making the Answer too vague ('you should act') without a specific recommendation.",
      alternatives: "If the audience is already anxious about delivery and doesn't need a Situation to build context, you can open with the Complication directly: 'Three of your major competitors launched delivery in the past 18 months...' This is called a 'shortened SCQA' and works when the situation is so well-known that stating it feels patronizing."
    },
    rubric: [
      { id: "lc-011-r1", text: "Each SCQA element is clearly present and in the correct order" },
      { id: "lc-011-r2", text: "Situation contains only agreed background facts (no problem or recommendation)" },
      { id: "lc-011-r3", text: "Complication introduces a specific, concrete change or threat" },
      { id: "lc-011-r4", text: "Question is the natural question the Complication forces the audience to ask" },
      { id: "lc-011-r5", text: "Answer is a specific recommendation, not a vague action statement" }
    ]
  },

  {
    id: "lc-012",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: [],
    difficulty: "easy",
    question: "This email opens with a wall of context before getting to the point. Rewrite it using an SCQA structure so the reader understands the problem and proposed solution within the first four sentences.",
    context: `**Your role:** IT security manager writing to the CTO.

**Raw material to restructure:**
"Hi David, I wanted to bring something to your attention. As you know, we've been using the same VPN solution for the past 5 years and it's been working well for our 200-person team. We did an infrastructure audit last month as part of our ISO certification prep. During that audit we found that the VPN software version we're running has been end-of-life since January and the vendor stopped issuing security patches. We also found that 23% of our employee devices are running operating systems that are no longer receiving security updates. There was a vulnerability disclosed last week in VPN software from this vendor that allowed remote code execution. Our IT team has been looking at alternatives and we think we should migrate to a zero-trust network access solution. The migration would take about 3 months and cost approximately $85k. We need your approval to proceed. Please let me know your thoughts when you get a chance."`,
    hints: [
      "Map each part of the email to SCQA: what is the stable background? What is the new threat? What question does it create? What answer are you proposing?",
      "The Complication here is urgent — the vulnerability disclosure last week. That should appear much earlier.",
      "S: Our VPN has served 200 staff reliably for 5 years. C: The vendor stopped patching it in January and a remote-code-execution vulnerability was disclosed last week — we are exposed. Q: How do we close this security gap quickly? A: We recommend migrating to zero-trust network access in 3 months for $85k — I need your approval to begin."
    ],
    referenceSolution: {
      approach: "Map the existing email to SCQA, then rewrite with each element in one or two sentences, leading with the situation to establish context and reaching the answer (request for approval) by sentence four.",
      reasoning: "Restructured: 'S: Our current VPN has supported 200 employees reliably for five years. C: During last month's ISO audit we found the software has been end-of-life since January — the vendor no longer issues patches — and a remote code execution vulnerability in this software was publicly disclosed last week, leaving us exposed. Q: How do we close this gap quickly while minimizing disruption? A: We recommend migrating to a zero-trust network access solution over 3 months at an estimated cost of $85k — I need your approval to begin procurement this week.' The urgency marker ('disclosed last week') is now in sentence two rather than buried in paragraph four. The ask ('your approval') is explicit and includes a timeframe ('this week'). The 23% unpatched devices detail is supporting context that can appear in a follow-up line or appendix.",
      commonMistakes: "The original email delays the critical complication (last week's vulnerability) until it has narrated five lines of background. In security communications, the urgency driver must appear early. Also: 'when you get a chance' on a security approval request signals low urgency.",
      alternatives: "Could also open with the Complication directly (inverted/shortened SCQA): 'A remote code execution vulnerability was disclosed last week in our VPN software, which has been unpatched since January.' This works if the CTO is security-aware and doesn't need the Situation context first. Use full SCQA when the audience needs grounding before absorbing the threat."
    },
    rubric: [
      { id: "lc-012-r1", text: "SCQA elements appear in order in the restructured email" },
      { id: "lc-012-r2", text: "The complication (vulnerability disclosed last week) appears in the first two sentences" },
      { id: "lc-012-r3", text: "The ask and timeframe are explicit" },
      { id: "lc-012-r4", text: "Hedging language removed ('when you get a chance')" }
    ]
  },

  {
    id: "lc-013",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: ["market-dynamics"],
    difficulty: "easy",
    question: "This competitive briefing has the right information but no narrative tension. Use SCQA to create a crisp opening that frames the competitive threat and the required response.",
    context: `**Your role:** Product Strategy Manager briefing the leadership team on a competitive development.

**Raw material to restructure:**
"I wanted to share some competitive intelligence. We've had a 34% market share in the SMB accounting software segment for 3 years. Our NPS is 52. We have strong retention at 91% annually. Last Tuesday, CompetitorX launched a new product with AI-assisted bookkeeping that automatically categorizes transactions. Their pricing is 20% below ours. They already signed 4 of our top-20 accounts as customers during their launch week. We've seen a 40% increase in competitive mentions in our customer support tickets over the past two weeks. Three of our enterprise prospects have asked about CompetitorX in discovery calls this week. Our current product roadmap has AI features planned for Q4 next year. We need to discuss whether to accelerate our AI roadmap."`,
    hints: [
      "The Situation is your strong baseline position. The Complication is CompetitorX's launch and its immediate impact. The Question follows naturally from that threat.",
      "Be specific about the Complication — four accounts lost in launch week is a concrete signal, not just a market trend.",
      "S: We hold 34% SMB market share with 91% retention and NPS of 52 — a strong incumbency position. C: CompetitorX launched AI-assisted bookkeeping last week at 20% below our price and already signed 4 of our top-20 accounts. Q: Do we need to accelerate our AI roadmap ahead of Q4 next year? A: Yes — we recommend a 6-month acceleration to launch a minimum viable AI feature by Q2."
    ],
    referenceSolution: {
      approach: "Use SCQA to frame the competitive threat with narrative tension: establish the strong baseline (S), introduce the specific threat with concrete evidence (C), ask the forced question (Q), and deliver a directional recommendation (A).",
      reasoning: "S: 'We hold 34% of the SMB accounting software market with 91% annual retention and an NPS of 52 — one of the strongest incumbency positions in the segment.' C: 'Last week CompetitorX launched an AI-assisted bookkeeping product priced 20% below ours and immediately signed 4 of our top-20 accounts; over the past two weeks, competitive mentions in support tickets are up 40% and three enterprise prospects raised CompetitorX unprompted in discovery calls.' Q: 'Given this threat is materializing faster than expected, should we accelerate our AI roadmap — currently planned for Q4 next year?' A: 'Yes — we recommend a focused 6-month acceleration to ship a minimum viable AI categorization feature by Q2, ahead of the next renewal cycle for at-risk accounts.' The SCQA structure creates a logical flow: we are strong (S) → something threatening just happened (C) → it forces a decision (Q) → here is our recommended response (A).",
      commonMistakes: "Without SCQA, the briefing reads as a list of disconnected signals rather than a coherent argument for action. The audience must infer the urgency from the data points. SCQA forces the presenter to synthesize the signals into a narrative that makes the required decision obvious.",
      alternatives: "If leadership is already aware of CompetitorX's launch, the Situation can be shortened: 'As you know, we hold 34% market share with strong retention.' Then jump to Complication. Shortening the Situation respects the audience's existing context."
    },
    rubric: [
      { id: "lc-013-r1", text: "Situation establishes strong baseline position without mentioning the threat" },
      { id: "lc-013-r2", text: "Complication uses specific evidence (accounts lost, ticket volume) rather than vague threat language" },
      { id: "lc-013-r3", text: "Question is the natural decision the complication forces" },
      { id: "lc-013-r4", text: "Answer is directional and includes a timeframe" }
    ]
  },

  {
    id: "lc-014",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: [],
    difficulty: "easy",
    question: "This HR policy announcement is dry and defensive. Rewrite it using an SCQA structure that builds understanding and buy-in before delivering the policy change.",
    context: `**Your role:** HR Director writing a company-wide email about a new expense policy.

**Raw material to restructure (current draft):**
"Effective July 1st, the company is implementing a new expense reimbursement policy. Going forward, all expenses over $75 must be pre-approved by your manager before being incurred. Receipts are required for all expenses regardless of amount. Expense reports must be submitted within 14 days of the expense date. Expenses submitted after 30 days will not be reimbursed. The Finance team will be sending a detailed policy document and a training session will be scheduled. Please ensure you are familiar with the new requirements before July 1st."`,
    hints: [
      "The current draft leads with the rules. Why do the rules exist? What problem do they solve? That is your Situation and Complication.",
      "Give people a reason to comply before asking for compliance. What is the Situation (we've grown), the Complication (expense processing is strained), and the Question (how do we scale this)?",
      "S: We've grown from 80 to 220 employees in 18 months. C: Our expense process wasn't designed for this scale — processing time has tripled and error rates have increased, creating delays in reimbursement for everyone. Q: How do we fix this? A: We're introducing three simple process changes from July 1 that will cut reimbursement time by 40%."
    ],
    referenceSolution: {
      approach: "Use SCQA to build a narrative that explains why the policy exists before stating what it requires. People comply with rules they understand. The SCQA structure creates empathy before delivering the change.",
      reasoning: "Restructured: 'S: Over the past 18 months, our team has grown from 80 to 220 people — and we're proud of that growth. C: Our expense process was built for a much smaller team. Today, processing a typical expense report takes three times longer than it did last year, and approval bottlenecks are delaying reimbursements by up to three weeks in some cases. Q: How do we fix this so that expenses are processed quickly and accurately for everyone? A: Starting July 1, we're introducing three changes that our analysis shows will cut reimbursement time by 40%: [1] Pre-approval required for expenses over $75 (takes 2 minutes via the app, prevents the most common rejections). [2] Receipts required for all amounts (removes the back-and-forth when Finance needs documentation). [3] Reports submitted within 14 days (so nothing gets lost). We know change takes adjustment — a training session is scheduled for June 20th and the policy document is attached.' This version explains the why, names the benefit ('40% faster reimbursement'), and acknowledges the adjustment required.",
      commonMistakes: "Leading with 'Effective July 1st, the company is implementing...' is passive and defensively worded — it frames the policy as an imposition rather than a solution. Policy communications that omit the problem they solve generate resentment and non-compliance.",
      alternatives: "If leadership has already communicated the growth context, the Situation can be shortened to one sentence. The key investment is in the Complication ('here is what is broken for you right now') and Answer ('here is the specific benefit you'll see')."
    },
    rubric: [
      { id: "lc-014-r1", text: "The reason for the policy change appears before the policy requirements" },
      { id: "lc-014-r2", text: "Complication describes a problem the audience experiences, not just a process problem" },
      { id: "lc-014-r3", text: "Answer names a concrete benefit for the reader (e.g., faster reimbursement)" },
      { id: "lc-014-r4", text: "Policy rules are stated clearly but after the SCQA frame is established" }
    ]
  },

  {
    id: "lc-015",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "medium",
    question: "This financial report contains a mixed picture — some metrics are strong, some are concerning. Use SCQA to write an opening that honestly names the complication without burying the positive headline, and frames the right strategic question.",
    context: `**Your role:** CFO presenting Q2 results to the board.

**Mixed data to frame:**
- Revenue: $18.2M, up 22% YoY (above guidance of 20%)
- Gross margin: 61%, down from 65% last year (concern: rising cloud infrastructure costs)
- EBITDA: $2.1M, below Q2 guidance of $3.0M (missed by 30%)
- Net new ARR: $4.1M (record quarter)
- Customer count: 1,240 (up from 980 a year ago)
- Churn: 2.8% (up from 1.9% last year — concerning trend)
- Biggest driver of margin compression: 3 large enterprise onboarding projects required unexpected infrastructure provisioning
- CFO assessment: short-term margin hit, but NRR and ARR growth suggest the revenue trajectory is intact

**Your task:** Write the SCQA opening for the board presentation — it must be honest about both the strong and weak signals.`,
    hints: [
      "The Situation is the strong revenue trajectory. The Complication is the EBITDA miss and margin compression. Don't hide either — boards need both.",
      "The Question should frame the strategic tension: is the margin compression a structural problem or a scaling anomaly?",
      "S: Revenue growth is accelerating — $18.2M, 22% YoY, above guidance, with record net new ARR of $4.1M and 26% customer growth. C: EBITDA missed guidance by 30% ($2.1M vs $3.0M) due to infrastructure costs tied to three large enterprise onboardings, and churn has risen from 1.9% to 2.8%. Q: Is this margin compression a structural signal or a one-time scaling cost — and does it change our path to profitability? A: Our assessment: the margin hit is largely non-recurring, but the churn increase requires a specific response plan."
    ],
    referenceSolution: {
      approach: "Lead with the Situation (strong growth momentum) as agreed context. State the Complication honestly — the EBITDA miss is material and must be named directly, not softened. Frame the Question as the strategic diagnostic. Deliver the CFO's assessment as the Answer.",
      reasoning: "S: 'Q2 revenue came in at $18.2M — 22% year-over-year growth above our 20% guidance — with net new ARR at $4.1M, a record quarter, and customer count up 26% to 1,240.' C: 'However, EBITDA missed guidance by 30% ($2.1M vs. $3.0M target), gross margin compressed 4 points to 61%, and monthly churn rose from 1.9% to 2.8% — three signals that warrant board-level scrutiny alongside the revenue headline.' Q: 'Is this margin compression structural or a one-time scaling cost — and does the churn trend signal a unit economics problem we need to address now?' A: 'Our assessment: the EBITDA miss is primarily driven by infrastructure over-provisioning for three large enterprise onboardings — a non-recurring cost with a mitigation plan already in place. The churn trend is a separate concern that we believe is rooted in onboarding quality; we will present a specific response plan today. The revenue trajectory remains intact.' This opening is honest about both signals, which builds board trust.",
      commonMistakes: "Burying the EBITDA miss after extensive positive framing is a governance red flag — boards will notice and lose trust. Conversely, opening with the miss before establishing the strong revenue context may create panic. The SCQA structure solves this: strong Situation, honest Complication, diagnostic Question, balanced Answer. Also: using vague language ('some margin pressure') instead of specific numbers.",
      alternatives: "Could open with the Complication if the board already received the revenue numbers in pre-read materials: 'Despite record ARR, EBITDA missed guidance by 30%...' This is appropriate when the audience has context and needs you to get to the concern faster."
    },
    rubric: [
      { id: "lc-015-r1", text: "Situation contains the positive revenue headline with specific numbers" },
      { id: "lc-015-r2", text: "Complication names the EBITDA miss directly with the specific shortfall amount" },
      { id: "lc-015-r3", text: "Complication also references the churn increase as a separate concern" },
      { id: "lc-015-r4", text: "Question frames a diagnostic tension rather than a simple yes/no decision" },
      { id: "lc-015-r5", text: "Answer distinguishes between the structural vs. non-recurring nature of the margin compression" }
    ]
  },

  // ── STRUCTURED ARGUMENTATION (lc-016 to lc-020) ──────────────────────────

  {
    id: "lc-016",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: [],
    difficulty: "easy",
    question: "This argument for a policy change has a claim but its supporting reasons are weak and poorly linked. Rewrite it as a structured argument with a clear claim, three distinct supporting reasons, and evidence for each.",
    context: `**Your role:** Office manager writing to HR to argue for a new WFH policy.

**Raw material to restructure:**
"I think we should let employees work from home two days a week. Lots of companies do it now. People seem happier when they can work from home. It would be good for morale. Also the commute is really long for some people. And it might help with hiring. I've heard from a few people that they'd prefer it. The office is pretty loud sometimes too. I think it would be a positive change overall."`,
    hints: [
      "Identify the claim. Then ask: what are three distinct, logically separate reasons this claim is true? Don't repeat the same point with different words.",
      "Each reason needs evidence or an example. 'People seem happier' is an assertion, not a reason. What evidence could back it up?",
      "Claim: 'We should implement a 2-day WFH policy.' Reason 1: Employee retention and morale — cite survey data or turnover cost. Reason 2: Talent acquisition — WFH is now a baseline expectation in our hiring market. Reason 3: Productivity — evidence that focused tasks benefit from reduced office noise/interruptions."
    ],
    referenceSolution: {
      approach: "State a clear, specific claim. Identify three logically distinct reasons. Provide concrete evidence or examples for each. Eliminate redundant points and vague assertions.",
      reasoning: "Claim: 'We should introduce a two-day-per-week work-from-home option for all office staff.' Reason 1 — Retention and morale: Our Q1 engagement survey showed 68% of staff rate commute as their top workplace frustration; two peer companies that introduced hybrid policies reported 15% lower voluntary attrition in the following year. Reason 2 — Competitive hiring: A 2-day WFH policy is now standard across 74% of companies in our sector (source: industry benchmarking report); candidates are increasingly declining offers without it. Reason 3 — Productivity on focused work: Research by Stanford (Bloom, 2015) and our own internal productivity data show a 13% output increase on individual tasks when employees work from home — the open office environment has documented interruption costs. Each reason is logically distinct (morale ≠ hiring ≠ productivity) and supported by data rather than assertion.",
      commonMistakes: "The original has a claim and then a list of restatements of the same vague point ('happier,' 'morale,' 'positive change'). Structured argumentation requires reasons to be logically distinct — if you can combine two reasons without losing anything, they are not distinct. Also: 'lots of companies do it' is a bandwagon appeal, not a reason.",
      alternatives: "Could structure as claim → cost of inaction → proposed solution → implementation plan, if the audience needs to be convinced that the current state is a problem before they will engage with the solution. The standard claim-reasons-evidence structure works when the audience accepts the problem but needs to be convinced about the solution."
    },
    rubric: [
      { id: "lc-016-r1", text: "A specific, testable claim is stated at the beginning" },
      { id: "lc-016-r2", text: "Three logically distinct reasons are identified (not restatements of each other)" },
      { id: "lc-016-r3", text: "Each reason has concrete evidence or an example, not just an assertion" },
      { id: "lc-016-r4", text: "Vague assertions ('people seem happier', 'lots of companies do it') are removed or replaced" }
    ]
  },

  {
    id: "lc-017",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: [],
    difficulty: "easy",
    question: "This argument contains a logical non-sequitur — the conclusion doesn't follow from the evidence. Identify the flaw and rewrite the argument so the logic chain is valid.",
    context: `**Your role:** Reviewer evaluating a business case written by a colleague.

**Flawed argument to diagnose and fix:**
"Our mobile app has 500,000 downloads. Our in-app purchase conversion rate is 3%. Therefore, we should invest $500k in redesigning the app to increase conversion. The redesign will add features that users have been asking for. This will make users more engaged. Therefore, the redesign will be profitable."`,
    hints: [
      "Trace the logic chain: does each step follow from the previous one? Where does the chain break?",
      "The argument jumps from 'users asked for features' to 'redesign will be profitable' without establishing what profit impact the features will have. What numbers are missing?",
      "The missing links: (1) What conversion rate improvement is the redesign expected to produce? (2) What is the revenue impact of that improvement? (3) Does that revenue justify $500k investment? Rewrite to include these links."
    ],
    referenceSolution: {
      approach: "Identify the logical gaps (missing quantitative links in the chain). Rewrite the argument so each step is explicitly connected and the conclusion is supported by the full chain.",
      reasoning: "The original argument has two non-sequiturs: (1) 'Users asked for features → redesign will make users more engaged' — asking for features ≠ guaranteed engagement increase, and 'engagement' is not defined. (2) 'More engaged users → redesign will be profitable' — engagement is not revenue; the conversion impact is never stated. Rewritten argument: 'Our mobile app has 500,000 downloads and a 3% in-app purchase conversion rate, generating $X revenue annually. [Establish baseline.] Our exit survey data shows 42% of non-converting users cite [specific missing feature] as the reason they did not purchase — these users represent 19,400 potential conversions annually. [Establish the opportunity.] A redesign focused on these three requested features is estimated to increase conversion to 3.7-4.2% based on A/B test results from comparable apps. [Establish the projected impact.] At our average $15 purchase value and 500k downloads, a 1-point conversion increase generates $75k in annual incremental revenue. At a 4% conversion rate, this yields $150k incremental annually, recovering the $500k investment in 3.3 years. [Complete the financial link.] This payback period is within our 4-year investment threshold, so we recommend proceeding.' Each link in the chain is now explicit.",
      commonMistakes: "Business arguments frequently omit the 'how much' quantification between a qualitative cause ('users want features') and a financial conclusion ('this will be profitable'). Every argument of the form 'X will improve Y, therefore we should invest $Z' requires a quantified bridge: by how much will X improve Y, and what is Y worth?",
      alternatives: "Could also frame the argument as 'cost of inaction': 'At current 3% conversion, we are leaving $X on the table annually. The redesign costs $500k to capture $Y annually.' This is often more persuasive because it reframes the investment as recovering a loss rather than chasing a gain."
    },
    rubric: [
      { id: "lc-017-r1", text: "The logical gap in the original argument is explicitly identified" },
      { id: "lc-017-r2", text: "The rewritten argument establishes a baseline (current revenue or conversion rate)" },
      { id: "lc-017-r3", text: "A quantified bridge links the proposed action to the financial conclusion" },
      { id: "lc-017-r4", text: "The conclusion (invest/don't invest) is explicitly stated and follows from the full logic chain" }
    ]
  },

  {
    id: "lc-018",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: ["assumption-validation"],
    difficulty: "easy",
    question: "This recommendation memo has a strong claim but is vulnerable to obvious counterarguments that are not addressed. Rewrite it to anticipate and pre-empt the three most likely objections.",
    context: `**Your role:** Strategy analyst who has been asked to review this memo before it goes to the executive team.

**Memo to strengthen:**
"We recommend closing our London office and shifting all UK operations to a fully remote model. The London office costs £480k per year in rent and facilities. Remote work has been proven to maintain productivity. All our current London employees have confirmed they would accept remote arrangements. Our other two offices (Dublin and Berlin) operate successfully with smaller satellite teams, so we know remote models work for us."`,
    hints: [
      "Imagine a skeptical CFO, HR Director, and Sales Director in the room. What will each of them push back on?",
      "CFO might ask: what are the one-time transition costs? HR might ask: what about future London hiring? Sales might ask: do any London clients expect a local office?",
      "Pre-empt each objection: state it, then answer it with data. 'One concern is transition costs — our estimate is £85k one-time, making payback under 2 months. On client presence: three clients require quarterly in-person meetings, which we will cover with expense-budgeted travel.'"
    ],
    referenceSolution: {
      approach: "For each likely objection, name it explicitly ('one concern might be...') and then answer it with specific data or a mitigation plan. This structure is called 'anticipated counterargument' and is essential for high-stakes recommendations.",
      reasoning: "Strengthened memo: 'We recommend closing the London office and transitioning UK operations to remote, saving £480k annually. [Main argument as before.] We anticipate three concerns: [1] Transition costs: One-time costs are estimated at £85k (IT equipment, contract buyout, redundancy support), yielding a payback period of under 2 months against the annual saving. [2] Client relationships: Three London clients currently expect a physical office presence. We reviewed their contracts — none require a local office; quarterly in-person meetings (covered by a £12k annual travel budget) maintain the relationship standard. [3] Future hiring: Remote-first will broaden our UK talent pool beyond the London commuter belt, improving our hiring pipeline for technical roles where London salaries are 18% above our current range.' Each objection is named, quantified where possible, and answered directly. The answer becomes harder to reject because the analyst has already done the committee's due diligence.",
      commonMistakes: "Memos that ignore obvious counterarguments invite the audience to raise them, which shifts the meeting from advancing the decision to defending the analysis. Raising and pre-empting objections demonstrates rigor and builds confidence in the recommendation.",
      alternatives: "In very short executive memos, anticipated counterarguments can be listed as a 'risk/mitigation' table rather than inline prose. This works when the audience is familiar with the recommendation and just needs to confirm risks are addressed."
    },
    rubric: [
      { id: "lc-018-r1", text: "At least three objections are named and addressed" },
      { id: "lc-018-r2", text: "Transition costs are quantified" },
      { id: "lc-018-r3", text: "Client relationship risk is addressed with a specific mitigation" },
      { id: "lc-018-r4", text: "Objections are introduced with explicit framing ('one concern might be...')" }
    ]
  },

  {
    id: "lc-019",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: [],
    difficulty: "easy",
    question: "This argument uses circular reasoning — the conclusion restates the premise. Identify the circularity and reconstruct the argument with independent supporting reasons.",
    context: `**Your role:** Editor reviewing a draft argument about pricing strategy.

**Circular argument to fix:**
"We should raise prices because our product is premium. Our product is premium because we invest heavily in quality. We invest heavily in quality because we charge premium prices that fund our quality investment. This is why we should maintain high prices — because our product justifies premium pricing due to its quality, and our quality is funded by premium pricing."`,
    hints: [
      "Trace the chain: 'We should charge premium prices because our product is premium because our prices fund quality because we charge premium prices.' Where does the circle complete itself?",
      "The argument never provides an independent reason to believe the premium price is justified. What external evidence would break the circle?",
      "Independent reasons for premium pricing: (1) Competitor benchmarking shows our product features exceed competitors priced 30% higher. (2) Customer willingness-to-pay research shows 73% would accept a 15% price increase. (3) Net Promoter Score of 71 indicates brand equity that supports price premium."
    ],
    referenceSolution: {
      approach: "Identify where the argument loops back to its premise. Reconstruct with three independent reasons that do not rely on any premise established by the conclusion.",
      reasoning: "The original is a classic circular argument: quality justifies premium → premium funds quality → quality justifies premium. The conclusion ('we should charge premium prices') is used as evidence for itself. Reconstructed argument: 'We should raise prices by 12% because three independent factors support premium positioning: [1] Feature superiority vs. alternatives: Our product delivers 8 capabilities that competitors offering similar pricing lack; our next-nearest competitor offering equivalent features is priced 28% higher. [2] Customer willingness-to-pay: Exit surveys of 400 customers show 68% rate our product 'excellent value' and 54% say they would accept a price increase of up to 20% before considering alternatives. [3] Brand equity metrics: Our NPS of 71 (vs. industry average of 34) and 89% renewal rate indicate customers attach significant value to the product experience — hallmarks of premium-tolerant segments.' None of these three reasons depends on the conclusion being true. They are independent observations about the market, customers, and product position.",
      commonMistakes: "Circular reasoning is common in brand and quality arguments because 'premium' is a relative term that requires external reference points to anchor. The fix always involves finding external benchmarks (competitor pricing, customer research, market data) rather than internal assertions.",
      alternatives: "Could also deconstruct circularity using the 'five-whys' structure: ask 'why is the product premium?' until you reach an answer that doesn't reference pricing. That answer (e.g., 'we have 8 exclusive features') becomes the foundation of the non-circular argument."
    },
    rubric: [
      { id: "lc-019-r1", text: "The circular loop in the original argument is explicitly identified" },
      { id: "lc-019-r2", text: "Reconstructed argument has at least two independent reasons (not derived from the conclusion)" },
      { id: "lc-019-r3", text: "At least one reason references external data (competitor, customer, or market evidence)" },
      { id: "lc-019-r4", text: "The reconstructed argument's conclusion is clearly stated" }
    ]
  },

  {
    id: "lc-020",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: ["competitive-analysis", "first-principles-analysis"],
    difficulty: "medium",
    question: "This argument for a new product line has a valid core logic but the evidence is selectively presented, the counterarguments are ignored, and the conclusion overstates the certainty. Rebuild it as a rigorous structured argument that acknowledges uncertainty while remaining persuasive.",
    context: `**Your role:** Senior strategy analyst revising a junior analyst's product recommendation before it goes to the CEO.

**Original draft to rebuild:**
"Our research shows that the home fitness equipment market is booming — it grew 170% in 2020 and has been strong ever since. We have strong brand recognition in sporting goods. Launching a home fitness line would be a natural extension. Our manufacturing partners have capacity. Consumer surveys show 61% of our existing customers would 'consider buying' home fitness equipment from us. This is a clear opportunity and we should launch by Q3 next year. We expect strong sales."`,
    hints: [
      "What are the three weakest points in this argument? '170% growth in 2020' is a COVID spike — what happened in 2021-2023? '61% would consider buying' is not the same as purchase intent. And what does 'strong brand recognition in sporting goods' actually mean for fitness equipment specifically?",
      "Rebuild with honest evidence: what is the current market trend (post-COVID normalization), what is the realistic conversion rate from 'consider' to 'buy,' and what is the actual brand perception data in the fitness segment specifically?",
      "A rigorous argument names the assumption being made ('we assume the market has stabilized post-COVID at X% annual growth') and the risk ('if market continues to decline, our revenue estimate is X% lower'). Persuasion through honest uncertainty is more credible than overconfidence."
    ],
    referenceSolution: {
      approach: "Rebuild by: (1) correcting misleading evidence with accurate data, (2) explicitly stating the key assumptions, (3) acknowledging the strongest counterargument and addressing it, (4) restating the conclusion with appropriate confidence language.",
      reasoning: "Rebuilt argument: 'We recommend evaluating a home fitness equipment line for a potential Q3 launch, contingent on validating three assumptions. [Context — honest market picture:] The home fitness market grew 170% in 2020 (COVID-driven spike) and has partially normalized: 2022-2023 growth was 8-12% annually, still above the pre-COVID 4% baseline. The market is larger than before, but 2020 comparisons are misleading. [Our competitive position:] Our brand has 78% aided recognition in sporting goods among our core 25-44 segment; however, a brand tracking study shows only 31% associate us with 'fitness' specifically vs. 'team sports.' This is a known weakness to address in launch positioning. [Customer intent — calibrated:] 61% of existing customers say they would 'consider' buying fitness equipment from us; historical survey-to-purchase conversion on adjacent product launches averages 18%, implying a realistic addressable segment of ~11% of our base, not 61%. [Key assumption:] Our revenue model assumes the market continues growing at 8-10% annually. If post-normalization growth falls to 3%, our 3-year revenue projection falls from $12M to $8M — still above our $6M hurdle rate, but with less margin. [Counterargument — addressed:] The strongest objection is market saturation from the 2020-2022 equipment surge. We address this by targeting the premium segment ($400+) where saturation is lowest and our brand can command a price premium. [Recommendation:] We recommend proceeding with a 6-month validation phase (limited SKU launch in 3 markets) before full rollout, with a go/no-go decision based on 90-day sell-through rates.'",
      commonMistakes: "Using the highest available data point (2020 COVID spike) as the baseline for market growth is a common analytical error in product pitches. '61% would consider' is consistently misread as purchase intent — the calibration from 'consider' to 'buy' is essential. Overconfident language ('clear opportunity,' 'strong sales') in a pitch to a CEO signals lack of analytical rigor.",
      alternatives: "Could also frame the argument as a pre-mortem: 'What would have to be true for this to fail, and how likely is each failure mode?' This is especially useful when the CEO is known to be skeptical — acknowledging failure modes proactively demonstrates rigor."
    },
    rubric: [
      { id: "lc-020-r1", text: "The 2020 COVID spike is contextualized with post-2020 growth data" },
      { id: "lc-020-r2", text: "Customer 'consider' intent is calibrated to a realistic conversion estimate" },
      { id: "lc-020-r3", text: "Key assumptions are explicitly named" },
      { id: "lc-020-r4", text: "At least one counterargument (e.g., market saturation) is addressed" },
      { id: "lc-020-r5", text: "Conclusion includes appropriate uncertainty language while remaining directional" }
    ]
  },

  // ── EXECUTIVE SUMMARY (lc-021 to lc-025) ─────────────────────────────────

  {
    id: "lc-021",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: [],
    difficulty: "easy",
    question: "Write a tight executive summary (max 150 words) from this full project report. Capture: situation, key findings, recommendation, and next step.",
    context: `**Your role:** Consultant writing the executive summary page for a 40-page operational review report.

**Full report key content (condense this):**
- Client: MedSupply Co, regional medical device distributor
- Problem: Order fulfillment times have increased from 2.1 days to 4.8 days over 18 months
- Root cause analysis: Three root causes identified — (1) warehouse picking software is 8 years old and has a 23% error rate on multi-line orders; (2) carrier consolidation reduced delivery options from 6 carriers to 2; (3) manual order entry for 34% of orders due to EDI failures
- Financial impact: Estimated $2.3M annual revenue at risk from customer churn due to fulfillment delays; 3 customers have already indicated they are reviewing alternatives
- Recommendation: Replace warehouse management software ($340k, 6-month implementation) + renegotiate carrier contracts ($0 cost, 60-day process)
- Expected outcome: Return fulfillment to 2.2 days within 9 months; protect $2.3M at-risk revenue
- Immediate next step: Approve software RFP process by end of month`,
    hints: [
      "An executive summary has four parts: what is the problem and its impact, what did we find, what do we recommend, and what happens next. Keep each part to 1-3 sentences.",
      "Cut process detail (how you conducted the analysis) and keep only findings and implications.",
      "Lead with the business impact ($2.3M at risk), state the three root causes in one sentence, give the recommendation with cost and timeline, close with the one required decision."
    ],
    referenceSolution: {
      approach: "Write in four sections: (1) Situation and impact — the problem and its financial stakes. (2) Findings — root causes in one sentence. (3) Recommendation — what to do, what it costs, how long. (4) Next step — the one decision needed now.",
      reasoning: "Executive Summary: 'MedSupply Co's order fulfillment time has deteriorated from 2.1 to 4.8 days over 18 months, putting an estimated $2.3M in annual revenue at risk — three customers are actively reviewing alternatives. Our analysis identified three root causes: aging warehouse software with a 23% multi-line error rate, a reduction from 6 to 2 carriers limiting delivery options, and manual order entry for 34% of orders due to EDI failures. We recommend replacing the warehouse management system ($340k, 6-month implementation) and renegotiating carrier contracts (no cost, 60 days). These actions are expected to restore fulfillment to 2.2 days within 9 months and protect the at-risk revenue base. Next step: Approve the software RFP process by end of month to stay within the 9-month recovery timeline.' Word count: 143.",
      commonMistakes: "Executive summaries that describe the methodology ('we conducted 14 stakeholder interviews and analyzed 6 months of order data') are wasting the executive's time. The only content that belongs in an executive summary is findings and their implications — not how you got there. Also: vague next steps ('we will continue to monitor') leave executives without a clear decision to make.",
      alternatives: "For a more conservative board audience, could lead with the revenue-at-risk figure as the first sentence rather than the operational metric — this frames the urgency in financial terms immediately."
    },
    rubric: [
      { id: "lc-021-r1", text: "Executive summary is 150 words or fewer" },
      { id: "lc-021-r2", text: "Business impact ($2.3M) appears in the first two sentences" },
      { id: "lc-021-r3", text: "Root causes are summarized in one sentence, not expanded" },
      { id: "lc-021-r4", text: "Recommendation includes cost and timeline" },
      { id: "lc-021-r5", text: "A specific next step with a deadline is included" }
    ]
  },

  {
    id: "lc-022",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: ["mental-math"],
    difficulty: "easy",
    question: "This executive summary is 400 words and buries the recommendation. Cut it to 120 words without losing any critical information.",
    context: `**Your role:** Editor cutting a colleague's draft executive summary for a pricing strategy report.

**Original executive summary (400 words — too long):**
"This report presents the findings and recommendations from a comprehensive pricing strategy review conducted over an eight-week period for the Premium Services business unit. The review included analysis of historical pricing data going back three years, benchmarking against eight direct competitors, interviews with 12 sales representatives, and a willingness-to-pay survey of 340 customers across three customer segments (SMB, Mid-Market, and Enterprise). The purpose of the review was to determine whether the current pricing structure adequately captures value and whether there are opportunities to improve revenue yield without negatively impacting customer acquisition or retention.

Our analysis found that the current pricing model, which uses a flat per-seat pricing structure, does not reflect the significant variation in value delivered across customer segments. Enterprise customers, who use an average of 6.2 modules compared to 1.8 for SMB customers, are effectively subsidized by higher per-seat prices at lower volume tiers. Additionally, benchmarking shows that our per-seat price is 18% below the market average for comparable enterprise features. Customer willingness-to-pay research indicates that 71% of enterprise customers would accept a price increase of up to 22% before it influenced their renewal decision.

We also found that the SMB segment is currently loss-making on a fully-loaded cost basis — the average SMB customer generates $1,200 ARR against a fully-loaded cost to serve of $1,800. This is a separate issue that requires structural attention.

Our primary recommendation is to move to a value-based, module-tiered pricing model for enterprise customers, which our modelling suggests would increase enterprise ARR yield by 14-19% with minimal churn risk given the WTP data. We further recommend conducting a separate strategic review of the SMB segment to determine whether to raise prices, reduce cost to serve, or exit the segment.

The next step is to present this recommendation to the executive pricing committee at the June 15th meeting and seek approval to run a pricing test with 50 enterprise accounts before full rollout.

We believe the opportunity to improve enterprise pricing represents a significant upside for the business and we look forward to discussing further."`,
    hints: [
      "Identify every sentence that describes the methodology rather than the findings. Cut all of it.",
      "The two key findings are: (1) enterprise is underpriced by 18% vs. market and customers will absorb up to 22% increase; (2) SMB is loss-making at -$600/customer. Keep both.",
      "Target structure: 1 sentence on the problem, 2 sentences on findings (enterprise, SMB), 1-2 sentences on recommendations, 1 sentence on next step."
    ],
    referenceSolution: {
      approach: "Apply three cuts: (1) delete all methodology description (how the review was done), (2) compress findings to one sentence per insight, (3) delete the closing pleasantry.",
      reasoning: "Cut version (108 words): 'This pricing review found two material issues in our Premium Services business unit. First, enterprise customers are underpriced: our per-seat rate is 18% below market for comparable features, and 71% of enterprise customers would accept up to a 22% price increase before it influenced renewal. Second, the SMB segment is loss-making at a fully-loaded level ($1,200 ARR vs. $1,800 cost to serve). We recommend transitioning enterprise to a module-tiered pricing model (modelled to increase enterprise ARR yield by 14-19% with minimal churn risk) and commissioning a separate strategic review of the SMB segment. Next step: seek executive committee approval at June 15th to run a 50-account pricing pilot.'",
      commonMistakes: "The biggest space consumers in the original are: the methodology paragraph (93 words), hedging/pleasantry phrases ('we believe the opportunity,' 'look forward to discussing'), and redundant framing ('the purpose of the review was to determine whether'). All of these can be cut with zero loss of decision-relevant content.",
      alternatives: "If the audience needs to see that the recommendation is data-backed (e.g., they might challenge the methodology), a single parenthetical can be added: '...based on competitor benchmarking, three years of pricing data, and a 340-customer WTP survey.' This is 16 words vs. 93 words — the same credibility signal at 1/6 the length."
    },
    rubric: [
      { id: "lc-022-r1", text: "Cut version is 120 words or fewer" },
      { id: "lc-022-r2", text: "Methodology description is eliminated or reduced to a single parenthetical" },
      { id: "lc-022-r3", text: "Both key findings (enterprise underpricing, SMB loss-making) are preserved" },
      { id: "lc-022-r4", text: "Both recommendations are preserved" },
      { id: "lc-022-r5", text: "Next step and date are preserved" }
    ]
  },

  {
    id: "lc-023",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: [],
    difficulty: "easy",
    question: "Write a one-page executive summary for this M&A due diligence briefing. The summary must give the deal team everything they need for a 10-minute decision meeting.",
    context: `**Your role:** M&A analyst preparing the executive summary for a potential acquisition of TechCo, a B2B SaaS company.

**Due diligence findings to summarize:**
- Target: TechCo, project management software for construction sector
- Deal size: $45M acquisition price
- Revenue: $6.2M ARR, growing 28% YoY
- NRR: 118% (strong)
- Gross margin: 72%
- EBITDA: -$800k (pre-profitability, investing in growth)
- Enterprise value / ARR multiple: 7.3x (market range for comparable SaaS: 5-9x — so within range)
- Diligence findings positive: strong NRR, clean cap table, no litigation, experienced founder team staying post-acquisition, IP fully owned
- Diligence findings negative: customer concentration risk (top 3 customers = 41% of ARR), sales team is thin (4 reps covering $6.2M ARR), product relies on a third-party data integration that has no exclusivity agreement
- Deal rationale: TechCo's vertical focus in construction fills a white space in our portfolio; cross-sell opportunity to our 2,400 construction customer base estimated at $8-12M additional ARR over 3 years
- Recommendation: Proceed to LOI at $45M, subject to negotiating an exclusivity clause on the third-party integration
- Key risk to flag: customer concentration — recommend covenant requiring customer diversity improvement post-close`,
    hints: [
      "An M&A executive summary has five sections: deal overview, financial snapshot, diligence highlights (positive), diligence risks, and recommendation with conditions.",
      "Executives want to know: what are we buying, what does it cost vs. what it's worth, what did diligence find, and what are the conditions for going forward?",
      "Lead with the deal rationale and recommendation in the first two sentences — the committee already knows who the target is. Then provide the supporting evidence in four short sections."
    ],
    referenceSolution: {
      approach: "Structure the executive summary as: (1) Deal headline and recommendation (2 sentences), (2) Financial snapshot (3-4 metrics), (3) Diligence positives (3 bullets), (4) Diligence risks (2 bullets), (5) Conditions/next step (1 sentence).",
      reasoning: "Executive Summary — TechCo Acquisition: 'We recommend proceeding to LOI at $45M for TechCo, a construction-vertical SaaS company with $6.2M ARR and 28% YoY growth. TechCo fills a white space in our portfolio and offers an estimated $8-12M cross-sell opportunity to our 2,400 construction customers. **Financial Snapshot:** $6.2M ARR | 28% growth | 118% NRR | 72% gross margin | -$800k EBITDA (growth-stage) | 7.3x EV/ARR (within 5-9x market range). **Diligence Positives:** Clean cap table and no litigation; founder team committed to stay post-acquisition; IP fully owned with no encumbrances. **Diligence Risks:** (1) Customer concentration: top 3 customers represent 41% of ARR — recommend a post-close covenant requiring diversification below 30% within 24 months. (2) Third-party data integration has no exclusivity agreement — recommend making exclusivity a condition of closing. **Next Step:** Proceed to LOI by June 3rd, conditioned on legal confirming the integration exclusivity clause is achievable.'",
      commonMistakes: "M&A executive summaries often list all diligence findings in equal-weight bullet points, forcing the deal team to synthesize which risks are deal-breakers vs. manageable. The analyst's job is to triage: lead with the recommendation, flag material risks explicitly, and state conditions rather than leaving the risk assessment to the committee.",
      alternatives: "Could use a two-column format (positives vs. risks) for the diligence section if the audience prefers visual scanning. In a written document, prose sections work equally well."
    },
    rubric: [
      { id: "lc-023-r1", text: "Recommendation (proceed/don't proceed) appears in the first sentence" },
      { id: "lc-023-r2", text: "Five or fewer key financial metrics are presented, not a full financial table" },
      { id: "lc-023-r3", text: "Both material risks are identified and each has a specific mitigation or condition" },
      { id: "lc-023-r4", text: "Cross-sell opportunity and deal rationale are present" },
      { id: "lc-023-r5", text: "Next step includes a date" }
    ]
  },

  {
    id: "lc-024",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: [],
    difficulty: "easy",
    question: "This executive summary is technically complete but written in passive voice with no clear ownership of recommendations. Rewrite it in active voice with named owners and a clear decision request.",
    context: `**Your role:** Project sponsor editing a draft executive summary for a digital transformation initiative.

**Original draft:**
"A digital transformation initiative has been proposed for the customer service function. Customer service response times have been found to be below industry benchmarks. A review of technology options was conducted. Three systems were evaluated: Zendesk, Freshdesk, and a custom build. It was determined that Zendesk would be the most suitable option. An implementation timeline of 5 months has been estimated. A budget of $220k has been identified as necessary. Approval from the Executive Committee is needed before the project can proceed. It is recommended that a decision be made by May 30th to avoid delaying the Q3 launch window."`,
    hints: [
      "Every passive sentence has a hidden subject — who conducted the review? Who recommends? Make the subject explicit and active.",
      "'It was determined that Zendesk...' — who determined this? 'Approval is needed...' — needed from whom, and who is asking?",
      "Rewrite each sentence in active voice: 'We recommend Zendesk...' 'The IT team estimates a 5-month implementation...' 'We request Executive Committee approval by May 30th to protect the Q3 launch.'"
    ],
    referenceSolution: {
      approach: "Convert every passive construction to active voice. Name the owner of each finding, recommendation, and action. Replace 'it was determined' / 'it is recommended' with 'we recommend' / '[team] assessed'.",
      reasoning: "Rewritten: 'We are seeking Executive Committee approval to proceed with a $220k Zendesk implementation for our customer service function. Our customer service team identified a response-time gap against industry benchmarks. The IT and Operations teams evaluated three systems — Zendesk, Freshdesk, and a custom build — and recommend Zendesk as the best fit based on implementation speed, total cost of ownership, and integration requirements. The IT team estimates a 5-month implementation timeline, with Q3 go-live if we begin by June. **Decision requested:** Approve the $220k budget and project initiation by May 30th to protect the Q3 launch window. The project sponsor for this initiative is [Name], who is available to answer questions before the committee meeting.' Active voice creates accountability — every recommendation has a named sponsor. The decision request is explicit and includes the consequence of delay.",
      commonMistakes: "Passive voice in executive summaries is often used to avoid ownership — 'it was determined' does not tell the reader whether to trust the finding or who to challenge. Active voice ('the IT team evaluated and recommends') creates accountability and makes it easier for the executive to know who to call with questions.",
      alternatives: "Some organizations prefer a 'Prepared by / Approved by' header rather than embedding ownership in the prose. Either approach works — the key is that ownership is visible somewhere in the document."
    },
    rubric: [
      { id: "lc-024-r1", text: "All passive constructions are converted to active voice" },
      { id: "lc-024-r2", text: "Each recommendation has a named owner ('we recommend' or '[team] recommends')" },
      { id: "lc-024-r3", text: "The decision request is explicit (what decision, from whom, by when)" },
      { id: "lc-024-r4", text: "Consequence of delay is stated" }
    ]
  },

  {
    id: "lc-025",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: ["decomposition-to-fundamentals", "business-model-evaluation"],
    difficulty: "medium",
    question: "This strategic options analysis has three viable options and a weak recommendation. Write an executive summary that frames the decision clearly, presents the three options with their key trade-offs, makes a specific recommendation, and identifies the one decision the CEO must make.",
    context: `**Your role:** Strategy Director preparing a CEO briefing on how to respond to a new market entrant.

**Background and analysis content:**
- Situation: A well-funded startup (ServeAI) entered the market 6 months ago with an AI-first product priced 35% below our rates. They have signed 22 of our customers (4% of our base) since launch.
- Our current position: 580 customers, $42M ARR, 85% gross margin, market leader for 7 years
- Option A — Price match (selective): Match ServeAI pricing for at-risk segments only. Cost: $4-6M ARR reduction. Benefit: stops near-term churn. Risk: signals price sensitivity, may trigger broader price war.
- Option B — Accelerate AI roadmap: Invest $8M over 18 months to build comparable AI features. Benefit: addresses root cause (product gap). Risk: 18 months is too slow; we may lose another 10-15% of base before delivery.
- Option C — Acquire ServeAI: Estimated acquisition cost $40-55M. Benefit: eliminates threat, gains AI capability. Risk: high price, integration complexity, regulatory scrutiny possible.
- Your assessment: Option B is the right long-term strategy. Option A should be deployed immediately as a bridge while B is built. Option C is too expensive and unnecessary given Option B's feasibility.
- Key unknown: Can the engineering team realistically deliver Option B in 18 months? This is the core assumption that determines whether Option A is a bridge or a permanent fix.
- Decision needed from CEO: Authorize the $8M engineering investment for Option B, combined with selective price matching for Option A.`,
    hints: [
      "An options-based executive summary has five parts: situation, options (with trade-offs summarized, not full analysis), recommendation, key assumption/risk, and the one decision needed.",
      "The CEO doesn't need to re-read your full analysis — they need enough to challenge the recommendation. Give each option one sentence of trade-off, not a full description.",
      "The key unknown (can engineering deliver in 18 months?) is what makes this decision hard. Name it explicitly as the core assumption. If it's wrong, the recommendation changes."
    ],
    referenceSolution: {
      approach: "Structure as: (1) Situation headline (what is the threat and its current scale), (2) Three options as a tight trade-off table (one sentence each), (3) Recommendation with explicit logic, (4) Key assumption that determines whether the recommendation holds, (5) Specific decision request.",
      reasoning: "Executive Summary: 'ServeAI has captured 4% of our customer base in 6 months with an AI-first product priced 35% below ours. If this pace continues, we face material ARR erosion within 12 months. **Options considered:** (A) Selective price matching: stops near-term churn at $4-6M ARR cost, but addresses symptoms not root cause and may invite a price war. (B) Accelerate AI roadmap: addresses root cause (product parity) with an $8M investment over 18 months, but creates an 18-month execution window during which we remain exposed. (C) Acquire ServeAI: eliminates the threat and gains the capability immediately, but at an estimated $40-55M — 5-7x more expensive than building — with integration risk and possible regulatory scrutiny. **Recommendation:** Pursue A + B in combination — deploy selective price matching immediately as a bridge to slow churn, while committing the $8M to accelerate the AI roadmap. Option C is not warranted given that the build path is achievable. **Key assumption:** This recommendation depends entirely on the engineering team's ability to deliver AI feature parity within 18 months. If that timeline is not credible, Option A becomes a long-term cost rather than a bridge, and the calculus changes. I recommend the CEO test this assumption directly with the CTO before approving. **Decision requested:** Authorize (1) $8M engineering investment for Option B, and (2) selective price matching deployment for at-risk accounts. Both can begin within 30 days of approval.'",
      commonMistakes: "Options analyses frequently fail by presenting options in false balance ('all three are valid approaches') without making a clear recommendation. Executives want the analyst's judgment. A second failure is not naming the core assumption explicitly — if the recommendation rests on an engineering timeline, that assumption must be surfaced and tested. Third failure: treating 'acquire' as equally viable without contextualizing the cost differential.",
      alternatives: "Could present options in a decision matrix (trade-off table) if the CEO is analytically oriented and wants to see the scoring. Prose works better when the audience responds to narrative framing. The key principle is the same either way: recommendation first, risk/assumption made explicit, single clear decision request."
    },
    rubric: [
      { id: "lc-025-r1", text: "Situation headline quantifies the threat (4% of base in 6 months)" },
      { id: "lc-025-r2", text: "Each option is described with its primary benefit and primary risk in one sentence" },
      { id: "lc-025-r3", text: "The recommendation is specific (which option(s) and why, not 'we should consider')" },
      { id: "lc-025-r4", text: "The core assumption (18-month engineering delivery) is named explicitly" },
      { id: "lc-025-r5", text: "A specific decision with two components (budget + price matching) is requested" },
      { id: "lc-025-r6", text: "Option C is explicitly dismissed with a reason, not just omitted" }
    ]
  },

  // ── TOP-DOWN COMMUNICATION (lc-026 to lc-030) ────────────────────────────

  {
    id: "lc-026",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: ["competitive-analysis"],
    difficulty: "medium",
    question: "A strategy analyst wrote this competitive briefing for the CEO before a board meeting. Restructure it top-down so the CEO has the critical insight in the first two sentences.",
    context: `**Your role:** Chief of Staff editing the analyst's draft before it reaches the CEO.

**Raw material to restructure:**
"I've been looking at the competitive landscape for the past two weeks. Competitor A launched a new pricing tier last month — $29/month for SMBs, which undercuts our $39 entry-level plan. They've been running ads heavily on LinkedIn and Google. Competitor B acquired a data enrichment startup in January for reportedly $40M. Their product roadmap now likely includes native enrichment, which is a feature gap we currently have. Competitor C lost their VP of Sales in February and their NPS has dropped from 62 to 48 based on G2 reviews. In terms of market share, our data suggests we've held steady at around 18% but the SMB segment specifically may be softening. The most urgent issue is probably the pricing pressure from Competitor A — if SMB churn increases this quarter, pricing will be the cited reason. I'd recommend we prepare a pricing response option for the board to consider."`,
    hints: [
      "What is the single most urgent thing the CEO needs to know before walking into the board meeting?",
      "Top-down means: lead with your recommendation or key finding, then provide the evidence that supports it. What is the analyst's actual conclusion?",
      "Restructured opening: 'Recommend preparing a pricing response option for the board: Competitor A's new $29 SMB tier is directly undercutting our $39 entry plan and may be softening our SMB segment. Secondary signals: Competitor B's acquisition adds a feature gap risk; Competitor C is weakening (NPS down 14 points, VP Sales departed).'"
    ],
    referenceSolution: {
      approach: "Lead with the recommendation and the single most urgent risk. Group supporting competitive signals by urgency: immediate pricing threat, medium-term feature gap, and one opportunity (weakened competitor).",
      reasoning: "The CEO needs a decision-ready briefing, not a research summary. The analyst's conclusion — prepare a pricing response — should open the document. The three competitive signals then function as evidence tiers: (1) urgent/actionable: Competitor A pricing undercut; (2) medium-term risk: Competitor B acquisition creates feature gap; (3) opportunity: Competitor C is weakening. Market share context (steady at 18%) is a supporting data point, not the headline. The chronological research narrative ('I've been looking at…') is irrelevant to the CEO.",
      commonMistakes: "Presenting competitive signals in the order they were discovered rather than by strategic importance. Burying the recommendation at the end. Including analyst process detail ('I've been looking at…') that wastes the reader's time.",
      alternatives: "If the CEO needs to walk into the board meeting with a specific ask, the opening could be: 'Request: board approval to prepare a pricing response to Competitor A's SMB tier.' This is even more action-oriented and appropriate if a decision is needed today."
    },
    rubric: [
      { id: "lc-026-r1", text: "The recommendation or key finding appears in the first two sentences" },
      { id: "lc-026-r2", text: "Supporting competitive signals are ordered by strategic urgency, not chronology" },
      { id: "lc-026-r3", text: "Analyst process detail is removed entirely" },
      { id: "lc-026-r4", text: "The three competitors are each characterized by their strategic implication, not just factual description" }
    ]
  },

  {
    id: "lc-027",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: [],
    difficulty: "medium",
    question: "This all-hands email from an engineering director buries the key personnel change. Restructure it so the most important news leads and the context follows.",
    context: `**Your role:** You are reviewing this draft before the engineering director sends it to 60 engineers.

**Draft to restructure:**
"Hi team, I wanted to give everyone an update on a few things. First, we've been making good progress on the platform migration — the backend team finished Phase 2 last week and we're on track for Phase 3 to start April 14th. The new CI/CD pipeline is also live now which should cut build times significantly. On the team structure side, we've been growing quickly and I want to make sure we have the right leadership in place. After a lot of thought and conversations with HR and senior leadership, we've decided that Priya will be stepping into the role of VP of Engineering effective May 1st. I'll be transitioning to a new role focused on technical strategy and external partnerships. This has been a long time coming and I'm really excited about where we're headed. More details on the transition plan will follow next week."`,
    hints: [
      "What is the single most significant piece of news in this email for the 60 engineers reading it?",
      "The organizational change affects everyone's reporting structure and daily work. Lead with it.",
      "Restructured opening: 'Effective May 1st, Priya will become VP of Engineering. I will be moving into a new role focused on technical strategy and external partnerships. More details on the transition plan will follow next week.' Then: project updates as secondary news."
    ],
    referenceSolution: {
      approach: "Lead with the leadership change (the most significant news for the audience), state both transitions clearly, give the effective date, and then cover operational updates as secondary information.",
      reasoning: "For 60 engineers, a VP-level leadership change affects reporting lines, team culture, and career conversations. Project milestones (CI/CD pipeline, Phase 2 complete) are positive but routine. The current draft buries the organizational change after two paragraphs of project updates — leaving readers uncertain about why there's a 'team structure' section until they're halfway through. The restructured version: (1) Leadership change + effective date; (2) What the director's new role means; (3) When more details come; (4) Project updates as context that everything is running smoothly.",
      commonMistakes: "Treating organizational change as a soft 'by the way' item after operational updates. Hedging language ('a lot of thought,' 'long time coming') that signals anxiety rather than confidence. Not giving engineers a clear date to anchor on.",
      alternatives: "If the director wants to acknowledge the emotional weight of the change before stating it, a single sentence ('I have some significant team news') can function as a subject-orienting opener before the top-down content begins — but this should be one sentence maximum."
    },
    rubric: [
      { id: "lc-027-r1", text: "Leadership change is stated in the first sentence with effective date" },
      { id: "lc-027-r2", text: "Both transitions (Priya's new role and director's new role) are stated clearly" },
      { id: "lc-027-r3", text: "Project updates appear after the organizational news" },
      { id: "lc-027-r4", text: "Hedging language and process narrative are removed" }
    ]
  },

  {
    id: "lc-028",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: ["case-analysis"],
    difficulty: "hard",
    question: "A consultant wrote this situation summary for a client whose factory is underperforming. The document is structured as a story, not a briefing. Diagnose the structural failure and rewrite it top-down for a time-pressed operations VP.",
    context: `**Your role:** Senior consultant editing a junior analyst's client-facing document.

**Draft to rewrite:**
"Over the past three weeks, our team has been on-site at the Meridian facility conducting interviews, analyzing production data, and observing shift operations. The facility has 340 employees across three shifts. We started by mapping the production flow from raw material intake through final assembly. In the intake process we found that material staging takes an average of 47 minutes versus an industry benchmark of 22 minutes — this is partly due to the forklift routing system being manual. Moving into assembly, Line 3 has an OEE (Overall Equipment Effectiveness) of 58% against a target of 75%. The root cause is a combination of unplanned downtime (averaging 3.1 hours per shift on Line 3) and a changeover process that takes 94 minutes versus a benchmark of 40 minutes. We also spoke to shift supervisors and there are recurring issues with the scheduling system not reflecting real-time inventory. As a result of all these factors, the facility is currently running at 71% of its rated throughput capacity. Our analysis suggests there are three primary improvement opportunities. First, implementing an automated forklift routing system. Second, a focused Line 3 SMED (Single Minute Exchange of Die) initiative. Third, upgrading the scheduling system integration. If all three are addressed, we estimate a 15-18% throughput improvement is achievable within 9 months."`,
    hints: [
      "What is the operations VP's primary question when reading this document? It is not 'how did you spend three weeks.' It is: what is wrong, how bad is it, and what do I do about it.",
      "The structural failure is bottom-up chronological narration of the investigation. The three findings and the 15-18% upside should be the opening, not the conclusion.",
      "Restructured opening: 'The Meridian facility is running at 71% of rated throughput. Three fixable root causes account for the gap: (1) Line 3 changeover time 2.4x benchmark; (2) material staging time 2.1x benchmark; (3) scheduling system disconnected from real-time inventory. Addressing all three is estimated to recover 15-18% throughput within 9 months.' Then: supporting evidence for each finding."
    ],
    referenceSolution: {
      approach: "Open with the bottom-line finding (71% throughput, three root causes, 15-18% recovery potential). Then present each root cause with its evidence. Remove all methodology narration.",
      reasoning: "The structural failure is consultant-centric narration: the document is organized around what the team did ('we started by mapping… we spoke to…') rather than what the client needs to know. An operations VP reading this has one question: what is broken and can we fix it? The answer is on the last two sentences of a 300-word document. Full restructure:\n\n**Meridian Facility: Throughput Gap and Recovery Plan**\n\nThe facility is operating at 71% of rated capacity. Three root causes account for the gap, each addressable within 9 months for a combined 15-18% throughput recovery:\n\n1. **Line 3 changeover: 94 min vs. 40 min benchmark.** Line 3 OEE is 58% (target: 75%), driven by 3.1 hrs unplanned downtime/shift and changeover that is 2.4x industry standard. Recommended fix: SMED initiative targeting Line 3.\n\n2. **Material staging: 47 min vs. 22 min benchmark.** Manual forklift routing is the primary cause. Recommended fix: automated routing system.\n\n3. **Scheduling system not connected to real-time inventory.** Shift supervisors are working off stale data, contributing to both staging delays and unplanned downtime. Recommended fix: scheduling system integration upgrade.\n\n*Methodology: Three weeks on-site; production data analysis, shift observation, and supervisor interviews across all three shifts (340 employees).*",
      commonMistakes: "Narrating the consulting process as if the client is paying for effort, not insight. Using technical acronyms (OEE, SMED) without brief definitions when the audience may not be familiar. Presenting findings as a list only at the end after burying them in prose.",
      alternatives: "For a board-level audience, compress further: one sentence on the gap, one sentence on the three levers, one sentence on the upside. The detail can live in an appendix. For an engineering audience, the current level of technical detail is appropriate — only the structure needs fixing."
    },
    rubric: [
      { id: "lc-028-r1", text: "The throughput gap (71%) and recovery potential (15-18%) appear in the opening" },
      { id: "lc-028-r2", text: "Three root causes are named upfront as a structured list, not buried in narrative" },
      { id: "lc-028-r3", text: "Consulting methodology narration is removed or moved to a footnote" },
      { id: "lc-028-r4", text: "Each finding is paired with its recommended action" },
      { id: "lc-028-r5", text: "Benchmark comparisons are used to convey magnitude of each problem" }
    ]
  },

  {
    id: "lc-029",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "hard",
    question: "You have three conflicting analyses of why customer churn spiked last quarter. Your VP asks for a one-paragraph verbal briefing in 90 seconds. The analysts disagree and none of them are wrong. Structure a top-down verbal answer that acknowledges complexity without losing clarity.",
    context: `**Your role:** Head of Customer Success briefing the VP of Revenue.

**The three analyses (all from credible internal sources):**

*Analyst A (Data Science):* "Churn correlated most strongly with customers who had not used the new dashboard feature in the first 30 days. Activation rate for the new dashboard was only 34%. This is a product adoption problem."

*Analyst B (Customer Success):* "Of the 47 accounts that churned, 31 cited 'price increase' in exit interviews. We raised prices 12% in January. This is a pricing problem."

*Analyst C (Sales):* "Many churned accounts came from a cohort signed during a promotional campaign 18 months ago that set unrealistic expectations. This is a sales quality problem."

**The VP's implicit question:** What is THE reason churn spiked and what are we doing about it?

**The trap:** Giving a confident single-cause answer ignores real complexity. Giving a 'it's all three things' answer without prioritization is useless.`,
    hints: [
      "You need to give the VP a primary driver while being honest that two other contributing factors exist. Which analysis is most actionable and most supported by hard data?",
      "Top-down for a verbal briefing: state your primary conclusion first ('The leading driver appears to be X, though two other factors compound it'), then name the factors briefly, then state the next step.",
      "Structure: 'Churn spiked for three overlapping reasons, with pricing as the most directly cited cause — 31 of 47 churned accounts named the January price increase in exit interviews. Two other factors compound this: low activation of the new dashboard (34%) and a cohort of accounts signed under a promotional campaign with inflated expectations. We're treating pricing as the primary lever to address this quarter, while running a separate activation sprint for the dashboard. I'd recommend we discuss whether the price increase should be revisited for at-risk accounts.'"
    ],
    referenceSolution: {
      approach: "State the primary driver (most actionable, hardest data) first. Acknowledge the other two as compounding factors without equal-weighting them. End with the recommended action and what decision the VP needs to make.",
      reasoning: "The VP needs to allocate resources and set priorities. 'All three things matter equally' is analytically honest but operationally useless. The answer should rank the causes by two criteria: (1) which has the hardest evidence (exit interview data beats correlation analysis), (2) which is most immediately actionable (pricing response is faster than changing sales quality). Analyst B's exit interview data is the strongest signal: 31/47 = 66% of churned accounts cited price. That is the primary driver. The other two are real but secondary. The verbal structure: primary cause → compounding factors → actions underway → decision needed from VP. Total: ~90 seconds.",
      commonMistakes: "Presenting three equal causes with no prioritization ('there are three reasons: A, B, and C') leaves the VP no better informed than before. Picking one cause and ignoring the others risks looking naive. The skill is acknowledging complexity while still giving a hierarchy.",
      alternatives: "If the VP has more time, a written version could show the causes as a ranked table with evidence strength ratings. Verbally, the three-cause structure is fine as long as one is clearly labeled primary."
    },
    rubric: [
      { id: "lc-029-r1", text: "A primary driver is named first with its supporting evidence" },
      { id: "lc-029-r2", text: "Secondary factors are acknowledged without being equal-weighted" },
      { id: "lc-029-r3", text: "The answer fits a 90-second verbal delivery (roughly 150-200 words)" },
      { id: "lc-029-r4", text: "A concrete next step or decision request ends the briefing" },
      { id: "lc-029-r5", text: "The answer does not contradict any of the three analysts' findings" }
    ]
  },

  {
    id: "lc-030",
    trackId: "logical-communication",
    subSkill: "top-down-communication",
    secondarySkills: ["mece-decomposition"],
    difficulty: "hard",
    question: "You must brief a hostile CFO on a project that is over budget. The CFO has already expressed skepticism about the project. Diagnose the structural challenges in this draft briefing and rewrite it to lead with accountability and a clear path forward — without being defensive.",
    context: `**Your role:** Project lead rewriting a briefing for a CFO who has publicly questioned whether this project should continue.

**Original draft (written defensively):**
"As you know, this project has faced a number of unexpected challenges this year. The original budget was set before we had full visibility into integration complexity. The vendor we selected had delays that were outside our control. Our team has worked extremely hard and we've made significant progress — we are 70% through the build phase. The current situation is that we are $340K over the original $1.2M budget, which is a 28% overrun. However, we want to be clear that the remaining work is well-defined and we have high confidence in our cost estimates for the final phase. We believe the project remains worth completing because abandoning it now would mean losing the $840K already invested and we would still need to solve the underlying problem. We are requesting an additional $380K to complete the project."`,
    hints: [
      "The CFO's primary concern is not the explanation for the overrun — it is whether continuing the project is the right decision. Lead with that answer.",
      "Defensive framing ('unexpected challenges,' 'outside our control,' 'worked extremely hard') signals weakness to a skeptical audience. Replace it with factual accountability.",
      "Restructured: Lead with the request and the business case. 'We are requesting $380K to complete this project. Here is why completion is the right decision: [forward-looking economics]. Here is what caused the overrun and what controls are in place for the final phase: [accountability without excuses].'"
    ],
    referenceSolution: {
      approach: "Open with the request and the forward-looking business case. Then address accountability for the overrun with facts, not excuses. End with the controls that make the remaining estimate credible.",
      reasoning: "A hostile CFO is asking two questions: (1) Should we continue? (2) Can I trust your numbers? The draft answers neither directly — it leads with context and explanation, which reads as defensive throat-clearing to a skeptical reader.\n\n**Restructured briefing:**\n\n**Request:** $380K to complete the project (revised total: $1.92M).\n\n**Why completion is the right decision:** Stopping now loses $840K of completed work and leaves the underlying problem unsolved — we would need to re-procure a solution estimated at $1.4-1.8M. Completing the project at $1.92M is the lower-cost path.\n\n**What caused the overrun:** Two factors: (1) integration complexity underestimated at scoping — we lacked detailed API documentation from the legacy system until after contract signing; (2) vendor delay of 6 weeks in Q2 caused a $90K team cost overrun. Total overrun: $340K (28%).\n\n**Why the remaining estimate is credible:** We are 70% through the build phase. The remaining work is fully scoped with fixed-price contracts for the integration layer. We have no open technical unknowns. Independent review by [Name] validated the $380K estimate last week.\n\n**What we are doing differently:** Weekly cost tracking with CFO-office visibility from here to completion.",
      commonMistakes: "Using sunk-cost logic ('we've already invested $840K') as the primary justification — this is economically weak. The correct argument is forward-looking: what is the cheapest path to solving the underlying problem? Defensive language ('outside our control,' 'worked extremely hard') signals that the writer is more concerned with blame than with the decision.",
      alternatives: "If the CFO is primarily concerned about trust, open with the accountability section first: 'We got this wrong in two specific ways, and here is what we are doing differently.' Some hostile audiences respond better to accountability-first than recommendation-first."
    },
    rubric: [
      { id: "lc-030-r1", text: "The request ($380K) and revised total appear in the first sentence" },
      { id: "lc-030-r2", text: "The business case is forward-looking, not sunk-cost based" },
      { id: "lc-030-r3", text: "Defensive language and effort-signaling are removed" },
      { id: "lc-030-r4", text: "Overrun causes are stated factually with specific figures" },
      { id: "lc-030-r5", text: "Credibility of remaining estimate is supported by at least one verifiable control" }
    ]
  },

  // ── PYRAMID PRINCIPLE (lc-031 to lc-035) ─────────────────────────────────

  {
    id: "lc-031",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: [],
    difficulty: "medium",
    question: "Build a Minto Pyramid outline for the following recommendation: your company should consolidate from three data centers to one cloud provider. You have four supporting reasons. Arrange them into a proper pyramid with a governing thought, key-line arguments, and supporting evidence.",
    context: `**Your role:** IT Strategy consultant presenting to the CTO.

**Raw material (unstructured):**
- Cloud migration would reduce annual infrastructure costs by $2.1M (from $4.8M to $2.7M)
- Current three-datacenter setup requires three separate security compliance audits per year, costing $180K
- The engineering team spends ~30% of their time on datacenter maintenance that could be redirected to product work
- Data center contracts are up for renewal in 14 months — this is the natural window to switch
- Cloud auto-scaling would handle peak load without the current 40% idle capacity we maintain
- Disaster recovery currently requires manual failover; cloud gives us automated failover in under 2 minutes
- Two of our key competitors have already migrated to cloud
- The new CTO at our largest enterprise client has expressed concerns about our current infrastructure resilience`,
    hints: [
      "The pyramid principle requires one governing thought (the recommendation + why), three or so key-line arguments that support it, and evidence beneath each argument.",
      "Group the raw points into logical buckets. Cost, operational efficiency, and strategic timing seem like natural groupings. What is the governing thought?",
      "Governing thought: 'We should consolidate to a single cloud provider within 14 months — the economics are compelling, operational benefits are immediate, and the contract renewal window makes now the optimal time.' Key-line 1: Cost reduction ($2.1M savings + $180K compliance savings). Key-line 2: Engineering capacity unlocked (30% time freed + auto-scaling removes idle capacity). Key-line 3: Risk and resilience improved (automated failover, enterprise client concern addressed). Key-line 4: Strategic timing (14-month window, competitive parity)."
    ],
    referenceSolution: {
      approach: "Identify the governing thought, group the eight data points into three or four key-line buckets, and arrange each bucket's evidence in order of strength.",
      reasoning: "Pyramid structure:\n\n**Governing Thought:** Consolidate to a single cloud provider within 14 months — it cuts costs by $2.3M annually, frees 30% of engineering capacity, improves resilience, and the contract renewal window makes now the optimal moment.\n\n**Key-Line 1 — Financial:** $2.3M annual cost reduction\n- Infrastructure costs drop from $4.8M to $2.7M ($2.1M savings)\n- Compliance audits consolidated: $180K annual savings\n\n**Key-Line 2 — Engineering Capacity:** 30% of engineering time redirected to product\n- Current datacenter maintenance consumes 30% of engineering bandwidth\n- Cloud auto-scaling eliminates 40% idle capacity we currently maintain\n\n**Key-Line 3 — Risk and Resilience:** Addresses active client concern and improves DR posture\n- Enterprise client CTO has raised infrastructure resilience concerns\n- Automated failover replaces current manual process (sub-2-minute vs. manual)\n\n**Key-Line 4 — Strategic Timing:** 14-month contract window is the natural decision point\n- Data center contracts renew in 14 months\n- Two key competitors have already migrated",
      commonMistakes: "Listing all eight points at the same level without grouping. Treating 'competitor has migrated' as equal in weight to the financial case. Governing thought that is too vague ('we should move to the cloud') rather than specific about timing and rationale.",
      alternatives: "Could restructure as three key-lines by merging timing into the financial case ('now is the optimal window, and here is the cost case'). The right number of key-lines is usually three — adding a fourth (timing) is defensible here because the 14-month window is a genuine constraint that affects the recommendation."
    },
    rubric: [
      { id: "lc-031-r1", text: "A single governing thought states the recommendation and its core rationale" },
      { id: "lc-031-r2", text: "Three or four key-line arguments each support the governing thought independently" },
      { id: "lc-031-r3", text: "All eight raw data points are placed under an appropriate key-line" },
      { id: "lc-031-r4", text: "Key-lines are mutually exclusive (no point appears under two key-lines)" },
      { id: "lc-031-r5", text: "Evidence within each key-line is ordered by strength or specificity" }
    ]
  },

  {
    id: "lc-032",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: ["issue-trees"],
    difficulty: "medium",
    question: "This consulting slide deck has four slides that do not hang together logically. Identify the pyramid failure and redesign the slide flow so each slide's message supports a single governing thought.",
    context: `**Your role:** Senior consultant reviewing a junior team's draft deck before client delivery.

**Current slide flow:**
- Slide 1 title: "Background: The Healthcare Industry Is Changing"
- Slide 2 title: "Our Methodology: How We Conducted This Analysis"
- Slide 3 title: "Finding 1: Patient Portal Adoption Is Below Industry Average"
- Slide 4 title: "Finding 2: Staff Training Completion Rate Is 61%"
- Slide 5 title: "Finding 3: IT System Integration Has 14 Outstanding Tickets"
- Slide 6 title: "Recommendations"

**The client's situation:** A regional hospital network that hired the firm to assess digital readiness for an upcoming EHR system upgrade.

**The recommendations (from slide 6):** (1) Accelerate patient portal training program, (2) Complete IT integration backlog before go-live, (3) Appoint a dedicated change management lead.`,
    hints: [
      "The pyramid principle requires that each slide's message be a supporting argument for the governing thought, not a category label. Slide titles like 'Background' and 'Methodology' are structure, not argument.",
      "What is the governing thought of this entire deck? It is implied by the recommendations but never stated. Name it explicitly.",
      "Redesigned flow: Slide 1 (Governing Thought): 'The network is not yet digitally ready for the EHR upgrade — three gaps must be closed before go-live.' Slide 2: 'Gap 1: Patient-facing adoption is below industry average, requiring accelerated training.' Slide 3: 'Gap 2: IT integration has 14 unresolved tickets that risk go-live stability.' Slide 4: 'Gap 3: Change management has no dedicated owner, increasing adoption risk.' Slide 5: 'Three targeted actions close all gaps within the 6-month window.'"
    ],
    referenceSolution: {
      approach: "Replace category-label slide titles with argument-driven titles. State the governing thought on slide 1. Each subsequent slide should be a key-line argument that supports it. Methodology and background become appendices.",
      reasoning: "The current deck has three structural failures: (1) Slides 1-2 are process and context, not argument — they delay the client's understanding of what the deck is saying; (2) Finding slides are labeled by topic ('Patient Portal Adoption') not by implication ('Patient adoption is below benchmark and needs intervention'); (3) There is no governing thought — the client has to infer it from reading all six slides.\n\n**Redesigned deck:**\n- Slide 1 (Governing Thought): 'The network faces three digital readiness gaps that must be addressed before the EHR go-live to avoid costly delays.'\n- Slide 2 (Key-Line 1): 'Patient portal adoption at 34% (industry avg: 61%) signals insufficient end-user readiness — an accelerated training program is needed.'\n- Slide 3 (Key-Line 2): '14 open IT integration tickets, if unresolved, create a material go-live risk — a dedicated sprint is required.'\n- Slide 4 (Key-Line 3): 'No dedicated change management owner increases adoption failure risk — this role must be appointed now.'\n- Slide 5 (Synthesis): 'Three actions, sequenced over 6 months, close all gaps before go-live.'\n- Appendix: Methodology, industry benchmarks, data sources.",
      commonMistakes: "Keeping 'Background' and 'Methodology' as early slides — these are for appendices in a consulting deck, not the main flow. Slide titles that are nouns ('Finding 1') rather than sentences miss the pyramid principle entirely. The governing thought should be the most controversial sentence in the deck — if everyone agrees with it instantly, it is not specific enough.",
      alternatives: "For a client that is very process-oriented, a brief 'How we approached this' slide can come second, after the governing thought is established. But it should be one slide and clearly labeled as supporting context, not a key-line argument."
    },
    rubric: [
      { id: "lc-032-r1", text: "Slide 1 states a specific governing thought (not a topic label)" },
      { id: "lc-032-r2", text: "Each key-line slide title is a complete sentence that supports the governing thought" },
      { id: "lc-032-r3", text: "Background and methodology are moved to an appendix" },
      { id: "lc-032-r4", text: "The three findings are reframed as implications, not observations" },
      { id: "lc-032-r5", text: "The redesigned flow could be understood from slide titles alone" }
    ]
  },

  {
    id: "lc-033",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: ["multi-skill-synthesis"],
    difficulty: "hard",
    question: "A product manager wrote a 600-word strategy memo to get executive approval for a new feature. The memo has a pyramid structure failure: its key-lines do not all support the governing thought. Diagnose the failure precisely and rewrite the memo with a correct pyramid.",
    context: `**Your role:** Chief of Staff reviewing the PM's memo before it goes to the executive team.

**Original memo (abridged):**

*Subject: Proposal to Build In-App Messaging*

"Our users have been asking for in-app messaging for over two years. We've received 847 feature requests in our feedback portal, and it is the #1 requested feature by enterprise clients. The competitive landscape also shows that 7 of our 10 direct competitors offer some form of in-app messaging.

The engineering estimate for a basic messaging feature is 8 weeks for a team of 3 engineers. This is a moderate investment. We have runway in Q3 to staff this work without impacting other roadmap items.

In-app messaging would increase daily active usage because users who communicate through the platform engage more deeply with the product. Studies of comparable SaaS products show that messaging features increase DAU by 15-25%.

The risk of not building this feature is that enterprise clients will continue to use third-party tools for communication, which fragments the user experience and gives competitors a foothold in our accounts.

Therefore, I recommend we prioritize in-app messaging in Q3. If approved, I will have a detailed spec ready by end of month."`,
    hints: [
      "Read each paragraph and ask: is this a key-line argument supporting the governing thought, or is it something else? One of the paragraphs is not a key-line argument — it is a logistical detail that belongs elsewhere.",
      "The governing thought of a pyramid must be answerable by its key-lines working together. What is the governing thought here? Does the engineering estimate paragraph support it?",
      "The pyramid failure: the engineering estimate paragraph is a feasibility note, not an argument for why the feature should be built. It belongs in an 'Implementation' section or appendix, not as a key-line. The three true key-lines are: (1) strong validated demand, (2) clear engagement upside, (3) risk of inaction. Rewrite with these three key-lines and move the engineering timeline to a 'Next Steps' section."
    ],
    referenceSolution: {
      approach: "Identify the paragraph that breaks the pyramid logic (engineering estimate). Remove it as a key-line. Sharpen the remaining three key-lines. Add the engineering feasibility as a credibility note in 'Next Steps.'",
      reasoning: "**Pyramid diagnosis:**\n- Governing thought: *Build in-app messaging in Q3* (implied, never stated explicitly — first fix)\n- Key-line 1 (Para 1): Demand is proven and enterprise-prioritized ✓\n- Key-line 2 (Para 2): Engineering estimate is 8 weeks ✗ — this is a feasibility/cost note, not an argument for building it\n- Key-line 3 (Para 3): Engagement data supports 15-25% DAU lift ✓\n- Key-line 4 (Para 4): Risk of inaction ✓\n\nThe pyramid has four arguments but one is a category mismatch. Also, the governing thought is implied, not stated.\n\n**Rewritten memo:**\n\n*Subject: Approve In-App Messaging for Q3 — Strong Demand, Clear Engagement Upside, Manageable Risk of Delay*\n\nI recommend prioritizing in-app messaging in Q3. Three factors support this: validated demand from enterprise clients, a demonstrated engagement uplift in comparable products, and a competitive risk that grows the longer we wait.\n\n**Demand is proven:** In-app messaging is our #1 enterprise feature request with 847 submissions over two years. Seven of our ten direct competitors already offer it.\n\n**Engagement upside is quantifiable:** SaaS platforms that have added messaging features report 15-25% DAU increases, driven by deeper in-product collaboration loops.\n\n**Cost of delay is rising:** Enterprise users currently rely on third-party tools for communication, fragmenting the experience and providing competitors a foothold in our accounts with each passing quarter.\n\n**Next steps:** If approved, I will have a detailed spec by month-end. Engineering has scoped this at 8 weeks with a 3-person team — Q3 runway accommodates this without impacting other roadmap items.",
      commonMistakes: "Treating 'we have the capacity' as a strategic argument rather than a feasibility note. Leaving the governing thought implicit forces the reader to synthesize it from four paragraphs. Key-lines should all answer the question 'why should we build this?' — feasibility answers 'can we build this?' which is a different question.",
      alternatives: "The risk-of-inaction paragraph could be reframed as a cost-of-delay calculation if data is available (e.g., 'three enterprise accounts cited messaging as a reason for evaluating a competitor this quarter'). Quantifying risk makes it a stronger key-line."
    },
    rubric: [
      { id: "lc-033-r1", text: "The governing thought is stated explicitly in the opening, not implied" },
      { id: "lc-033-r2", text: "The engineering estimate paragraph is correctly identified as a feasibility note, not a key-line" },
      { id: "lc-033-r3", text: "The three true key-lines each answer 'why should we build this?'" },
      { id: "lc-033-r4", text: "Engineering feasibility is repositioned to a 'Next Steps' or implementation section" },
      { id: "lc-033-r5", text: "The rewritten memo could be understood from the subject line and opening paragraph alone" }
    ]
  },

  {
    id: "lc-034",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: ["framework-selection"],
    difficulty: "hard",
    question: "You need to advise a founder who is pitching investors on whether to use a pyramid structure or a narrative arc for their pitch deck. The founder's current deck uses neither coherently. Diagnose the structural problem and explain — with examples from the deck — when each framework applies and which one is right here.",
    context: `**Your role:** Communication coach advising a Series A founder.

**The founder's current deck structure (slide titles):**
1. "The Problem" — healthcare workers spend 4 hours/day on documentation
2. "Our Solution" — AI assistant that auto-generates clinical notes
3. "The Market" — $18B TAM, growing at 14% CAGR
4. "Traction" — 12 hospital pilots, $1.2M ARR, 94% retention
5. "Team" — ex-Epic, ex-Google Health, ex-Stanford Medicine
6. "The Ask" — $8M Series A to expand sales and accelerate product

**The founder's concern:** "Investors keep saying the deck 'doesn't flow' but I can't figure out why. All the information is there."

**Additional context:** The company has exceptional traction metrics for a Series A. The founder's instinct is to lead with the problem, but advisors have suggested leading with traction. The founder is confused about which advice to follow.`,
    hints: [
      "Pyramid structure works when the audience needs to make a decision: you state your recommendation first, then provide the supporting logic. Narrative arc works when you need to create conviction and emotional buy-in before the logic lands.",
      "For investors, the question is: which framework creates the fastest path to 'yes'? With strong traction, the pyramid principle suggests leading with the answer: 'This is a strong investment. Here is why.' But investors also need to believe in the problem and market.",
      "The actual failure in this deck is neither purely a pyramid nor narrative problem — it is that the most powerful data (94% retention, $1.2M ARR, 12 hospital pilots) is buried on slide 4. A hybrid works: open with the thesis (pyramid: 'this is a strong investment'), quickly establish the problem and solution (narrative: 1-2 slides), then deliver the traction as the proof (pyramid: why the thesis is true)."
    ],
    referenceSolution: {
      approach: "Diagnose the current deck's structural failure (traction buried, no governing thesis). Explain when pyramid vs. narrative applies. Recommend a hybrid structure appropriate for an investor pitch with strong traction.",
      reasoning: "**When to use each framework:**\n\n*Pyramid Principle:* When your audience is decision-makers who want the answer first. Investors are evaluating a binary decision (invest/pass) under time pressure — this favors pyramid.\n\n*Narrative Arc:* When you need to build emotional conviction before the logic lands. Works best when traction is weak and you need the investor to believe in the problem viscerally before you show data.\n\n**The current deck's failure:** It uses a textbook narrative arc (problem → solution → market → traction → team → ask) designed for an audience that needs to be sold on the problem. But this founder has strong traction — the most persuasive data is on slide 4. Investors are meeting with 8 companies today; if slide 1-3 don't hook them, they may mentally check out before slide 4.\n\n**Recommended hybrid structure:**\n1. *Thesis slide (pyramid)*: '12 hospital pilots. 94% retention. $1.2M ARR. We are building the AI clinical documentation layer for healthcare — and we are asking for $8M to scale what is already working.'\n2. *Problem* (30 seconds of narrative): 4 hours/day on documentation — you have probably heard this problem before, here is why it hasn't been solved.\n3. *Solution* (product, 1 slide)\n4. *Why we win* (traction + team as pyramid evidence for the thesis): the data that proves the thesis on slide 1\n5. *Market* (validates scale potential)\n6. *Ask and use of funds*\n\nThe rule: **lead with your strongest asset.** This company's strongest asset is traction, not the problem statement.",
      commonMistakes: "Following the 'standard' pitch deck template regardless of the company's specific situation. Treating narrative arc and pyramid as mutually exclusive — experienced communicators blend them. Confusing 'all the information is there' with 'the information is structured to persuade.'",
      alternatives: "Some investors (particularly those who lead market-first analysis) prefer: market → traction → solution → team → ask. This is appropriate when the market size is the most compelling hook. Know your specific investor's mental model and adapt the opening frame accordingly."
    },
    rubric: [
      { id: "lc-034-r1", text: "The structural failure (traction buried, no governing thesis) is diagnosed precisely" },
      { id: "lc-034-r2", text: "The conditions for pyramid vs. narrative arc are clearly distinguished" },
      { id: "lc-034-r3", text: "The recommended structure leads with the company's strongest asset (traction)" },
      { id: "lc-034-r4", text: "The hybrid structure is explained with reference to specific slides from the current deck" },
      { id: "lc-034-r5", text: "The advice is actionable — the founder could restructure the deck from these instructions" }
    ]
  },

  {
    id: "lc-035",
    trackId: "logical-communication",
    subSkill: "pyramid-principle",
    secondarySkills: ["business-model-evaluation"],
    difficulty: "hard",
    question: "Build a complete Minto Pyramid for a board recommendation to pivot the company's go-to-market from self-serve to enterprise sales. The raw data is contradictory and you must resolve the contradictions in your governing thought.",
    context: `**Your role:** CEO presenting to the board.

**Raw data (contradictory signals):**
- Self-serve monthly signups: 3,400/month (growing 8% MoM)
- Self-serve average contract value: $420/year
- Enterprise pipeline: 6 qualified deals averaging $85,000/year ACV
- Self-serve gross margin: 78%
- Enterprise gross margin: 71% (higher support costs)
- Self-serve NPS: 52
- Enterprise NPS: 71
- CAC for self-serve: $85
- CAC for enterprise: $12,000
- Self-serve payback period: 2.4 months
- Enterprise payback period: 21 months
- Self-serve annual churn: 34%
- Enterprise annual churn: 6%
- The team has no enterprise sales experience; would need to hire 2 AEs and 1 SE
- Current runway: 18 months`,
    hints: [
      "The contradiction is: self-serve has better unit economics in the short term but terrible churn; enterprise has worse upfront economics but far better retention. What does this mean for long-term LTV?",
      "Calculate rough LTVs: self-serve LTV = $420 × (1/0.34) × 0.78 ≈ $964. Enterprise LTV = $85,000 × (1/0.06) × 0.71 ≈ $1,006,667. The economics are not even close at scale.",
      "Governing thought: 'We should pivot to enterprise sales over the next 12 months — the LTV differential is ~1,000x and current self-serve growth cannot sustain the business long-term given 34% annual churn. We can fund the transition within our 18-month runway.' Key-lines: (1) Self-serve churn makes it structurally unsustainable at scale; (2) Enterprise LTV justifies the higher CAC and longer payback; (3) Six qualified pipeline deals demonstrate early market validation; (4) Transition is executable within current runway."
    ],
    referenceSolution: {
      approach: "Calculate LTVs to resolve the contradiction between short-term and long-term economics. Build the pyramid around the long-term economics argument, not the surface-level metrics.",
      reasoning: "**Pyramid:**\n\n**Governing Thought:** Pivot to enterprise sales over the next 12 months. Self-serve's 34% annual churn makes it structurally unsustainable despite strong signup growth; enterprise's 6% churn and $85K ACV produce ~1,000x higher LTV. Six qualified pipeline deals confirm market pull, and the transition is executable within our 18-month runway.\n\n**Key-Line 1 — Self-serve is structurally unsustainable:** 34% annual churn means the average self-serve customer stays 2.9 years, generating ~$1,200 lifetime revenue. At 3,400 signups/month, we are adding customers faster than we can retain them — a leaky bucket that compounds cost.\n\n**Key-Line 2 — Enterprise economics justify the investment:** Enterprise LTV ≈ $1M+ (6% churn = 16.7-year average customer life × $85K ACV × 71% margin). CAC of $12K and 21-month payback are standard and acceptable for enterprise SaaS at this ACV. The margin difference (78% vs. 71%) is immaterial compared to the churn differential.\n\n**Key-Line 3 — Market validation exists:** Six qualified pipeline deals averaging $85K ACV represent $510K in potential ARR. Enterprise NPS of 71 vs. self-serve NPS of 52 suggests the product resonates more deeply with enterprise users.\n\n**Key-Line 4 — Transition is executable within runway:** Hiring 2 AEs and 1 SE at blended $180K total comp closes within 18 months of runway. Self-serve can continue in maintenance mode to fund the transition. First enterprise deal close within 6 months would extend runway.",
      commonMistakes: "Treating gross margin difference (78% vs. 71%) as significant without factoring in churn. Concluding 'both channels have merit' without making a recommendation. Failing to calculate LTV — the raw metrics are designed to be contradictory; the analysis requires synthesis.",
      alternatives: "A risk-adjusted recommendation could propose: pursue enterprise aggressively while maintaining self-serve for lead generation (freemium as a top-of-funnel). This is a reasonable alternative if the board is risk-averse about abandoning a growing channel."
    },
    rubric: [
      { id: "lc-035-r1", text: "LTV calculation (or equivalent reasoning) is used to resolve the contradictory raw metrics" },
      { id: "lc-035-r2", text: "The governing thought makes a clear recommendation, not a 'both have merit' hedge" },
      { id: "lc-035-r3", text: "The churn differential is identified as the key structural problem with self-serve" },
      { id: "lc-035-r4", text: "Four key-lines each independently support the governing thought" },
      { id: "lc-035-r5", text: "Runway constraint is addressed as a feasibility argument within the pyramid" }
    ]
  },

  // ── SCQA FRAMEWORK (lc-036 to lc-040) ────────────────────────────────────

  {
    id: "lc-036",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: [],
    difficulty: "medium",
    question: "Write an SCQA opening for a presentation recommending that your company adopt a four-day work week. The audience is a skeptical HR leadership team that has not asked for this analysis.",
    context: `**Your role:** Senior people operations analyst presenting to the VP of HR and HR business partners.

**Background facts to work with:**
- Industry research: companies that trialed four-day weeks saw average productivity maintained or improved (Microsoft Japan: +40% productivity; Perpetual Guardian: productivity maintained, employee wellbeing up significantly)
- Your company's current state: attrition is 22% annually (industry avg: 14%); Glassdoor score has dropped from 4.1 to 3.6 in 18 months; recruiting costs are $8,400 per hire
- The audience has not asked for this analysis and may see it as radical or outside the norm
- The complication must create genuine tension that makes the audience want the answer`,
    hints: [
      "SCQA requires four elements: Situation (what everyone agrees is true), Complication (what has changed or gone wrong), Question (the tension this creates), Answer (your recommendation). The situation should be uncontroversial. The complication should create urgency.",
      "The situation is not 'we have high attrition' — that is already a complication. The situation should be something stable and shared: 'Our talent strategy has historically prioritized competitive compensation and career development as our primary retention levers.'",
      "SCQA: S: 'We have relied on competitive compensation and career development as our primary retention tools.' C: 'Despite this, attrition has reached 22% — 8 points above industry average — and our Glassdoor score has dropped 0.5 points in 18 months, suggesting these levers are no longer sufficient.' Q: 'What additional lever can we pull to improve retention without proportionally increasing headcount costs?' A: 'A four-day work week pilot offers the strongest evidence base of any non-compensation retention lever currently available.'"
    ],
    referenceSolution: {
      approach: "Use SCQA to create a logical narrative that earns the recommendation rather than leading with it. The Situation and Complication do the persuasion work — the Answer lands only after the Question is established.",
      reasoning: "**SCQA Opening:**\n\n**Situation:** Talent retention has become the primary constraint on our growth — and our traditional retention levers (competitive comp, career pathing, L&D investment) are well-established.\n\n**Complication:** Despite these investments, attrition has reached 22% — 8 percentage points above the industry average of 14%. Our Glassdoor score has fallen from 4.1 to 3.6 in 18 months. At $8,400 per hire, this attrition level costs us approximately $X annually in direct recruiting costs alone, before productivity loss and institutional knowledge erosion.\n\n**Question:** If our current retention levers are not working, what structural change would meaningfully move the needle — without simply adding headcount cost?\n\n**Answer:** The evidence base for a four-day work week is now strong enough to treat it as a serious pilot option. Companies ranging from Microsoft Japan to UK-based SMEs have maintained or improved productivity while significantly improving wellbeing scores and reducing attrition.",
      commonMistakes: "Starting the Situation with the problem ('we have high attrition') collapses the S and C into one — which eliminates the narrative tension. The Situation should be something the audience nods at; the Complication should be the thing that makes them lean forward. Starting with the Answer ('I'm here to recommend a four-day work week') triggers skepticism before the audience has processed the problem.",
      alternatives: "For a more receptive audience, could compress S+C into one sentence and spend more time on the Answer. For a hostile audience, spend more time on the complication: quantify the exact dollar cost of the attrition gap before proposing anything."
    },
    rubric: [
      { id: "lc-036-r1", text: "Situation is a stable, uncontroversial statement the audience would agree with" },
      { id: "lc-036-r2", text: "Complication introduces specific data that creates tension (attrition rate, Glassdoor drop)" },
      { id: "lc-036-r3", text: "Question logically follows from the Situation + Complication and is not answered until the Answer" },
      { id: "lc-036-r4", text: "Answer directly responds to the Question and leads with the recommendation" },
      { id: "lc-036-r5", text: "The four elements are clearly demarcated and each is a single coherent unit" }
    ]
  },

  {
    id: "lc-037",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: ["supply-demand"],
    difficulty: "medium",
    question: "Diagnose the SCQA failure in this email and rewrite it. The email is intended to get a budget approval from a CFO for additional warehouse capacity.",
    context: `**Your role:** VP of Operations reviewing this draft from your logistics manager before it goes to the CFO.

**Draft email:**

*Subject: Warehouse Expansion Budget Request*

"Hi David,

I wanted to reach out about our warehouse situation. As you may know, we've been experiencing some challenges with our current storage capacity. Our current warehouse is about 45,000 sq ft and we've been using it for the past 6 years. The industry standard for a company our size is typically 60,000-70,000 sq ft.

We've been managing so far by using overflow storage at a third-party facility in Newark, which costs us $34,000/month. This arrangement was supposed to be temporary when we set it up 8 months ago. We've been looking at options and believe that leasing an additional 20,000 sq ft in the building next door would address our needs. The cost would be $18,000/month on a 3-year lease.

I think this makes financial sense given our current spending on overflow storage. Let me know if you'd like to discuss further.

Logistics Manager"`,
    hints: [
      "Identify which SCQA elements are present and which are missing or malformed. The email buries its most persuasive argument.",
      "The Complication is weak — 'experiencing some challenges' is vague. The Answer is buried and under-justified. What is the strongest financial argument for this expansion?",
      "The financial case is simple: current overflow cost is $34K/month; new lease is $18K/month — that's $16K/month in savings ($192K/year) on a 3-year lease, with $576K total savings vs. continuing overflow. This is the Answer. The SCQA should be built backward from this number."
    ],
    referenceSolution: {
      approach: "Diagnose: weak Situation (no context), weak Complication (vague language buries the cost), missing Question, and Answer buried with no quantification. Rewrite backward from the financial case.",
      reasoning: "**SCQA Diagnosis:**\n- S: Present but vague (6-year-old 45K sq ft warehouse) — should establish the growth context\n- C: 'Some challenges' grossly undersells a $34K/month ongoing cost; industry benchmark comparison is not the complication\n- Q: Absent entirely\n- A: Present but unquantified — the $16K/month savings case is never made\n\n**Rewritten email:**\n\n*Subject: Warehouse Expansion — $192K Annual Savings vs. Current Arrangement*\n\nDavid,\n\nI'm writing to request approval for a 3-year lease on 20,000 sq ft of additional warehouse space at $18,000/month — and to show why this saves us money relative to what we are doing today.\n\n**Situation:** Our 45,000 sq ft warehouse has supported operations for six years, but volume growth over the past two years has exceeded our original footprint.\n\n**Complication:** Eight months ago we began using overflow storage in Newark as a 'temporary' fix. That arrangement now costs $34,000/month and shows no sign of ending — our volume projections indicate we will need the overflow space for the foreseeable future.\n\n**The math:** Leasing the adjacent 20,000 sq ft at $18,000/month saves $16,000/month ($192,000/year) compared to continuing overflow storage. Over the 3-year lease term, the total savings are $576,000 versus maintaining the current arrangement.\n\nI'd welcome a 20-minute call to walk through the specifics. Can we find time this week?\n\n[Name]",
      commonMistakes: "Using vague language ('some challenges,' 'I think this makes financial sense') when writing to a CFO who will approve based on numbers. Not quantifying the alternative: the CFO cannot evaluate a $18K/month spend without knowing what the current cost is. Burying the ROI calculation at the end.",
      alternatives: "Could lead with the savings number in the subject line (which this rewrite does) rather than the request, making the CFO's decision path immediate: 'This saves money vs. the status quo.'"
    },
    rubric: [
      { id: "lc-037-r1", text: "All four SCQA failures in the original are correctly identified" },
      { id: "lc-037-r2", text: "Rewritten Situation establishes growth context, not just warehouse age" },
      { id: "lc-037-r3", text: "Rewritten Complication quantifies the $34K/month ongoing cost" },
      { id: "lc-037-r4", text: "The $16K/month savings calculation appears in the Answer" },
      { id: "lc-037-r5", text: "Subject line is rewritten to lead with the financial case" }
    ]
  },


  {
    id: "lc-038",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: ["market-dynamics"],
    difficulty: "hard",
    question: "You must open a board presentation with an SCQA that addresses a genuinely bad quarter — revenue missed by 18%, two key customers churned, and your largest competitor just raised a $50M round. The board already knows the numbers. Write an SCQA that takes ownership without being defensive and frames the path forward clearly.",
    context: `**Your role:** CEO opening the quarterly board meeting.

**What the board already knows (from the pre-read):**
- Q3 revenue: $2.1M vs. $2.6M target (19% miss)
- Churned accounts: TechCorp ($180K ARR) and GlobalRetail ($220K ARR) — both cited product gaps vs. competitor
- Competitor Nexus raised $50M Series B at $400M valuation last week
- Your current runway: 14 months

**What the board does NOT yet know:**
- Root cause analysis completed since the pre-read was sent
- Two specific product gaps that drove the churn (both addressable in Q4)
- A revised Q4 plan with three levers
- Your ask: whether to extend runway via bridge or adjust burn

**The trap:** Opening with apologies, explanations, or excessive context makes the board lose confidence. Opening with false positivity ('great learnings this quarter') is transparent and damaging.`,
    hints: [
      "The board already has the Situation from the pre-read. Your SCQA opening can be compressed — you do not need to re-explain numbers they've read. Lead with the Complication that moves beyond the numbers.",
      "The Complication for this audience is not the revenue miss itself — they know that. The Complication is the root cause analysis that explains why the miss happened and what it means about the business.",
      "Structure: S: 'Q3 came in at $2.1M against a $2.6M target — the pre-read covers the headline numbers.' C: 'Our root cause analysis, completed this week, shows both churn events trace to two specific product gaps that were exploitable by Nexus's recent feature releases. These gaps are addressable, but they took us longer to identify than they should have.' Q: 'The question for today is: do these gaps represent a fixable execution problem, or a deeper strategic positioning issue?' A: 'We believe they are fixable — here is the Q4 plan and the runway decision it requires.'"
    ],
    referenceSolution: {
      approach: "Compress the Situation (board has the data). Make the Complication the root cause insight, not a restatement of the miss. Frame the Question as a strategic choice. Open the Answer with confidence, not apology.",
      reasoning: "**SCQA Opening:**\n\n**Situation** *(15 seconds — compress since board has pre-read)*: 'You've seen the Q3 numbers — $2.1M against a $2.6M target, with TechCorp and GlobalRetail churning. I want to get straight to what we've learned since the pre-read was sent.'\n\n**Complication** *(the new insight)*: 'Our root cause analysis is complete. Both churn events trace to the same two product gaps: multi-workspace permissions and API rate limit controls. These are features Nexus shipped in August. Both accounts cited these gaps explicitly in exit interviews. We missed this earlier because our customer health scoring wasn't tracking feature-gap churn signals — a monitoring failure we have already corrected.'\n\n**Question**: 'The strategic question this raises: are we looking at an execution gap that Q4 can close, or has Nexus's $50M raise fundamentally changed our competitive position in the mid-market?'\n\n**Answer**: 'Our analysis says execution gap. Here is the Q4 plan that closes both product gaps and the ask around runway extension that makes it viable.'\n\n*Then proceed to the plan.*\n\n**Why this works for a hostile/anxious board:** It takes ownership without groveling. It shows you have done the analytical work. It frames the question they are actually wondering ('is this company in trouble?') and immediately answers it with confidence.",
      commonMistakes: "Re-reading the numbers to a board that has already read them wastes credibility. Apologizing before giving the root cause signals panic. Framing the Complication as 'we had a tough quarter' rather than 'here is specifically why' — boards can handle bad news; they cannot handle vague bad news.",
      alternatives: "If the board is known to be highly analytical, skip the narrative framing and open directly: 'Root cause is two product gaps. Both are closable in Q4. Here is the plan.' Some boards respect directness over SCQA narrative structure. Read the room."
    },
    rubric: [
      { id: "lc-038-r1", text: "Situation is compressed — does not re-read numbers the board already has" },
      { id: "lc-038-r2", text: "Complication contains the root cause insight (specific product gaps), not just the miss" },
      { id: "lc-038-r3", text: "Question frames the strategic choice, not just the operational problem" },
      { id: "lc-038-r4", text: "Answer opens with confidence and a forward-looking plan" },
      { id: "lc-038-r5", text: "No defensive language, apologies, or effort-signaling appears" }
    ]
  },

  {
    id: "lc-039",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: [],
    difficulty: "hard",
    question: "The SCQA below is used in an internal memo proposing a hiring freeze. It is structurally correct but strategically wrong — the Complication undermines the credibility of the recommendation. Diagnose the problem and rewrite the SCQA so it is both structurally correct and strategically sound.",
    context: `**Your role:** VP of Finance reviewing this draft from the FP&A team before it is sent to all department heads.

**Draft SCQA:**

*Situation:* "Our company has grown headcount by 34% over the past 18 months, investing aggressively in talent to support our expansion plans."

*Complication:* "However, we have missed revenue targets for the past two quarters, and our burn rate has increased from $1.8M/month to $2.4M/month while runway has shortened to 16 months. Leadership has decided to implement a hiring freeze effective immediately."

*Question:* "How should department heads respond to the hiring freeze?"

*Complication continues:* "Note that this was a difficult decision and we recognize it creates challenges for teams with open headcount."

*Answer:* "Effective immediately, all open roles are paused. Current offers in process will be honored. Department heads should update their Q4 plans to reflect current headcount and submit revised OKRs by October 15th."`,
    hints: [
      "The structural failure is that the Complication reveals the answer (leadership has already decided) before the Question is asked — which makes the Question pointless. The Question should be what the audience is wondering, not a procedural 'how should you respond to what we've already told you.'",
      "The second strategic failure: the Complication paragraph contains both the business data AND a pre-emptive apology ('difficult decision,' 'creates challenges'). These belong in different places. Apologies weaken the authority of a policy announcement.",
      "The Question in an internal policy SCQA is not 'how do you comply?' — it is 'what does this mean for your team?' The Answer should address this proactively: here is what changes, here is what does not change, here is what you need to do."
    ],
    referenceSolution: {
      approach: "Separate the decision from the rationale. Remove the pre-emptive apology from the Complication. Rewrite the Question as what department heads are actually wondering. Make the Answer comprehensive enough that no follow-up questions are needed.",
      reasoning: "**Diagnosis:**\n1. The Complication announces the decision ('Leadership has decided') before the Question — this breaks SCQA logic; the Answer should follow the Question, not the Complication\n2. The Question ('How should department heads respond?') is procedural, not the genuine concern of the audience\n3. The Answer is incomplete — it tells people what stops but not what is protected or how to escalate exceptions\n4. Sympathetic hedging in the Complication ('difficult decision,' 'creates challenges') weakens executive authority without adding value\n\n**Rewritten SCQA:**\n\n*Situation:* We have grown headcount 34% over 18 months in line with our expansion plans, with 23 open roles currently in process.\n\n*Complication:* Revenue has missed target for two consecutive quarters and burn has increased from $1.8M to $2.4M/month, shortening runway to 16 months. Maintaining the current hiring pace would bring runway below 12 months — a level that limits our strategic flexibility.\n\n*Question:* What changes to your headcount and planning assumptions do you need to make for Q4?\n\n*Answer:* Effective today, all open roles are paused pending a runway review in 90 days. Three things to know: (1) Current offers already extended will be honored — do not rescind anything in process; (2) Critical roles that are business-blocking can be submitted to the leadership team for exception review by October 10th; (3) Revised Q4 OKRs reflecting current headcount are due October 15th. [Name] will hold department-level office hours this week for questions.",
      commonMistakes: "Announcing a decision and then asking a question about it (the original's core error). Using the Complication to apologize — if a decision is right, it does not need apologizing for in the policy announcement. Leaving open questions (what about roles where offers are in process?) that generate a flood of follow-up emails.",
      alternatives: "For a more senior audience (e.g., the executive team), the SCQA can be compressed to 3 sentences: Situation + Complication in one (the business data), the decision as the Answer, and no Question needed if the audience has no choice. SCQA's Question is most useful when the audience genuinely has a decision to make."
    },
    rubric: [
      { id: "lc-039-r1", text: "The premature decision announcement in the Complication is correctly identified as the structural failure" },
      { id: "lc-039-r2", text: "Apology language is removed from the Complication" },
      { id: "lc-039-r3", text: "The rewritten Question addresses what department heads are actually wondering" },
      { id: "lc-039-r4", text: "The Answer covers what stops, what is protected, and what actions are required" },
      { id: "lc-039-r5", text: "The rewritten SCQA could function as a standalone memo with no follow-up required" }
    ]
  },

  {
    id: "lc-040",
    trackId: "logical-communication",
    subSkill: "scqa-framework",
    secondarySkills: ["assumption-validation"],
    difficulty: "hard",
    question: "You are launching a new product into a market where your company has never operated. Write an SCQA opening for an internal strategy document that must convince skeptical senior leadership to fund the launch — but your market research contains a critical assumption that could invalidate the entire case if wrong. Build the SCQA honestly, including the assumption, without undermining the recommendation.",
    context: `**Your role:** Head of New Ventures writing a strategy document for the CEO and CFO.

**The opportunity:** Launch a B2B compliance automation product targeting mid-market financial services firms (100-500 employees). Your current company sells HR software and has no presence in financial services.

**The financial case:**
- Addressable market: ~4,200 firms in the US
- Assumed conversion rate: 3% in year 1 (126 customers)
- Average ACV: $28,000
- Year 1 revenue projection: $3.5M
- Investment required: $2.8M (product build + go-to-market)

**The critical assumption (which you must disclose):** The 3% conversion rate is based on benchmarks from HR software launches into new verticals — NOT from financial services compliance data. Financial services compliance procurement cycles may be significantly longer due to regulatory approval requirements. If conversion is 1.5% instead of 3%, Year 1 revenue drops to $1.75M and the launch does not cover its costs.

**The trap:** Hiding the assumption makes the document intellectually dishonest and destroys trust when leadership discovers it. But leading with the uncertainty makes the case seem weak.`,
    hints: [
      "The SCQA structure actually helps here: the Complication can contain the uncertainty as part of the honest framing of the problem, rather than as a buried footnote in the Answer.",
      "Build the Complication around two things: the market opportunity (genuine) and the regulatory procurement risk (the assumption). This frames them as equal-weight inputs to the Question.",
      "The Question should ask what the right decision is given both the upside and the risk — not just 'should we launch?' but 'how do we validate the key assumption before committing the full $2.8M?' This transforms a binary yes/no into a staged decision, which is more fundable."
    ],
    referenceSolution: {
      approach: "Use the SCQA to frame a staged investment decision. Disclose the assumption in the Complication, not as a footnote. Make the Question about how to validate cheaply before full commitment. Answer with a phased approach.",
      reasoning: "**SCQA:**\n\n*Situation:* Mid-market financial services firms (100-500 employees) face growing compliance automation requirements under post-2020 regulatory changes — and the current tooling landscape is fragmented, expensive, and dominated by enterprise vendors that over-serve this segment.\n\n*Complication:* Our financial model projects $3.5M Year 1 revenue at a 3% conversion rate — but this rate is extrapolated from HR software launch benchmarks, not financial services compliance data. If compliance procurement cycles are significantly longer due to regulatory review requirements, conversion could be 1.5%, cutting Year 1 revenue to $1.75M and making the launch unprofitable. We cannot know which scenario is accurate without going to market.\n\n*Question:* How do we capture a potentially significant market opportunity while managing the risk that our core conversion assumption is off by 2x?\n\n*Answer:* We recommend a phased approach: commit $400K to a 90-day validation sprint (4 pilot customers, direct sales outreach to 50 firms) before committing the remaining $2.4M. If pilot conversion validates the 3% assumption, we proceed with full launch. If conversion signals are weaker, we revise the model before full investment. This structure limits downside to $400K while preserving the upside if the assumption holds.",
      commonMistakes: "Burying the assumption in a footnote or appendix — CFOs find these things, and discovering undisclosed risks after the document is submitted destroys trust permanently. Alternatively, leading with the uncertainty in a way that frames it as a reason not to proceed, when the honest frame is 'here is how we de-risk it.'",
      alternatives: "If leadership is known to be risk-averse, could open the Situation with the regulatory tailwind (market is growing) to establish that the opportunity is real before introducing the uncertainty. Sequencing matters — establish the prize before disclosing the risk."
    },
    rubric: [
      { id: "lc-040-r1", text: "The critical assumption is disclosed explicitly in the Complication, not buried in an appendix" },
      { id: "lc-040-r2", text: "The Question reframes from binary yes/no to a staged validation decision" },
      { id: "lc-040-r3", text: "The Answer proposes a specific validation sprint with defined cost and criteria" },
      { id: "lc-040-r4", text: "The document does not hide or minimize the 2x risk scenario" },
      { id: "lc-040-r5", text: "The SCQA flows logically — each element sets up the next without contradiction" }
    ]
  },

  // ── STRUCTURED ARGUMENTATION (lc-041 to lc-045) ──────────────────────────

  {
    id: "lc-041",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: [],
    difficulty: "medium",
    question: "A product manager is making an argument for why the team should prioritize mobile app improvements over desktop. The argument has a claim and several supporting points but is missing a logical warrant — the link that explains why the evidence supports the claim. Identify the missing warrant and rewrite the argument so it is structurally complete.",
    context: `**Your role:** Communication coach reviewing the PM's written argument.

**The PM's argument:**
"We should prioritize mobile app improvements over desktop in Q3.

Our usage data shows that 67% of new users in the past 6 months first accessed the product via mobile. Mobile session length averages 4.2 minutes vs. 11.3 minutes for desktop. Mobile NPS is 34 vs. desktop NPS of 58. Mobile accounts for only 23% of revenue despite 67% of first sessions.

Given all of this, the Q3 roadmap should prioritize mobile improvements."`,
    hints: [
      "A structured argument has three parts: Claim (what you're asserting), Evidence (the data that supports it), and Warrant (the logical principle that connects evidence to claim). What is missing from this argument?",
      "The PM has evidence that mobile is underperforming. But underperformance alone does not automatically mean 'prioritize it.' What is the underlying assumption that makes this evidence support this claim?",
      "The missing warrant: 'Features that have high user acquisition but low revenue conversion and satisfaction represent the highest-leverage improvement opportunity — closing a large gap between acquisition and monetization creates more value than optimizing an already-performing channel.' Without this warrant, a skeptical reader could argue: 'Low NPS means users don't like the mobile experience — maybe we should abandon mobile and double down on desktop where NPS is 58.'"
    ],
    referenceSolution: {
      approach: "Name the three argument components. Identify that the warrant (the logical bridge) is absent. Write the warrant explicitly. Show how the complete argument structure changes the persuasive effect.",
      reasoning: "**Argument diagnosis:**\n- Claim: Prioritize mobile improvements in Q3 ✓\n- Evidence: Usage data (67% first sessions mobile, lower NPS, lower revenue share) ✓\n- Warrant: Missing ✗\n\n**The unstated assumption:** Mobile has high top-of-funnel acquisition but poor conversion and satisfaction — suggesting the experience is driving users away after first contact. Improving mobile closes the gap between acquisition and monetization. Without this warrant, the evidence could support the opposite conclusion (abandon mobile, it performs poorly).\n\n**Complete argument:**\n\n'We should prioritize mobile app improvements in Q3.\n\nOur data shows a significant gap between mobile's acquisition share (67% of new user first sessions) and its revenue contribution (23% of total revenue), combined with a 24-point NPS gap vs. desktop (34 vs. 58). This pattern — high top-of-funnel, low satisfaction and conversion — indicates that mobile is the channel where experience quality is most limiting growth. When users first encounter a product via a channel that underperforms, they either churn or downgrade their engagement to a secondary channel. Closing this gap represents higher-leverage improvement than optimizing our already-performing desktop experience, which is already generating proportional revenue and higher satisfaction.\n\nFor these reasons, Q3 mobile improvements offer the highest expected return on roadmap investment.'",
      commonMistakes: "Treating a list of supporting data points as a complete argument. The most common argumentation error is evidence that could support multiple conclusions — without a warrant, the reader chooses the interpretation. Also: not anticipating the counterargument (maybe low NPS means abandon mobile) which the warrant directly addresses.",
      alternatives: "The warrant could also be framed as a principle: 'Improving the first-touch experience in a high-acquisition channel generates compounding returns across the entire funnel.' This is a more general claim that the evidence then instantiates."
    },
    rubric: [
      { id: "lc-041-r1", text: "The missing warrant is correctly identified (not just labeled as 'missing explanation')" },
      { id: "lc-041-r2", text: "The warrant explicitly connects the evidence to the claim" },
      { id: "lc-041-r3", text: "The rewritten argument addresses the counterargument the missing warrant left open" },
      { id: "lc-041-r4", text: "All three argument components (claim, evidence, warrant) are identifiable in the rewrite" }
    ]
  },

  {
    id: "lc-042",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: ["first-principles-analysis"],
    difficulty: "medium",
    question: "Identify the logical fallacy in each of these three arguments, name it precisely, and explain why it undermines the argument's credibility. Then rewrite one of the three as a structurally valid argument.",
    context: `**Your role:** Strategy analyst reviewing arguments made in an internal debate about pricing strategy.

**Argument 1 (from the VP of Sales):**
"We should not raise prices. I've been in sales for 15 years and in my experience, customers always push back on price increases. Our customers will leave if we raise prices."

**Argument 2 (from the Head of Finance):**
"Our gross margins are 62%. Every other SaaS company in our peer group has margins above 70%. Therefore, we need to raise prices immediately to reach 70%+ margins."

**Argument 3 (from the CEO):**
"We raised prices in 2019 and we lost three customers. We cannot raise prices again."`,
    hints: [
      "Logical fallacies have precise names. For each argument, ask: is the conclusion actually supported by the premise, or is there a logical gap? What is the nature of the gap?",
      "Argument 1 uses personal experience to make a universal claim. Argument 2 commits a benchmark error. Argument 3 draws a causal conclusion from a single anecdote.",
      "Argument 1: Appeal to experience / hasty generalization (personal experience ≠ universal rule). Argument 2: False equivalence / benchmark conflation (matching peers on margin does not require the same pricing lever; margin can be improved by reducing COGS). Argument 3: Post hoc / anecdotal evidence (three customers left after a price increase in 2019 — correlation does not establish causation, and one data point is insufficient)."
    ],
    referenceSolution: {
      approach: "Name each fallacy with precision. Explain the specific logical gap in each case. Rewrite Argument 3 as a structurally valid version of the same underlying concern.",
      reasoning: "**Argument 1 — Hasty Generalization / Appeal to Anecdote:**\nThe premise ('in my experience, customers always push back') is drawn from personal experience and projected as a universal rule. Sales experience is relevant input, not a controlled study. The valid concern (customer price sensitivity) is real but requires data from our specific customer segments, not a generalization from 15 years of varied sales contexts. Flaw: anecdotal premise → universal conclusion.\n\n**Argument 2 — False Equivalence / Benchmark Conflation:**\nThe argument assumes that matching peers on margin percentage requires raising prices. But gross margin = (Revenue - COGS) / Revenue. A 62% → 70% improvement can also come from reducing hosting/infrastructure costs, improving product mix, or reducing customer success costs per account. The argument leaps from 'margins are below peer median' to 'therefore raise prices' without eliminating alternative explanations. Flaw: one means to an end is treated as the only means.\n\n**Argument 3 — Post Hoc Ergo Propter Hoc / Insufficient Evidence:**\nThree customers left after the 2019 price increase. This establishes temporal correlation, not causation. We do not know: (1) whether they left because of price or for other reasons; (2) whether the three customers were replaced; (3) whether overall retention was affected or just three at-risk accounts churned on a trigger. One historical event is insufficient to establish a rule about future price increases.\n\n**Rewritten Argument 3 (structurally valid):**\n'We should be cautious about price increases given the 2019 experience. In 2019, we raised prices and three accounts churned in the following quarter. Before proceeding, we should analyze those three accounts: why did they cite price, what was their tenure and health score at the time, and would the same profile of accounts be at risk today? If those accounts were already at-risk customers using price as an exit trigger, the risk to healthy accounts may be lower than 2019 suggests. Let's run that analysis before deciding.'"
    },
    rubric: [
      { id: "lc-042-r1", text: "Each fallacy is named with a precise term, not just described vaguely" },
      { id: "lc-042-r2", text: "The logical gap in each argument is explained specifically (not just 'this is wrong')" },
      { id: "lc-042-r3", text: "The rewritten argument preserves the speaker's underlying concern" },
      { id: "lc-042-r4", text: "The rewritten argument proposes evidence that would actually validate the concern" }
    ]
  },

  {
    id: "lc-043",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: ["challenging-defaults"],
    difficulty: "hard",
    question: "Build a steel-man argument for the opposing side of a decision you personally disagree with — then write a brief for the actual recommendation that directly addresses the steel-man. The topic: whether to offshore your software development team.",
    context: `**Your role:** Head of Engineering writing a recommendation brief for the CEO. Your personal view is that offshoring is a mistake. But you have been asked to present a fair analysis.

**Context:**
- Current engineering team: 18 engineers in San Francisco, average total comp $195K
- Annual engineering cost: ~$3.5M
- Alternative: offshore team of 25 engineers in Eastern Europe, average total comp $75K, managed by an offshore vendor
- Alternative annual cost: ~$1.875M + $300K vendor management = $2.175M
- Apparent savings: ~$1.3M/year
- Your concern: quality, communication overhead, and loss of institutional knowledge

**Additional data:**
- Current velocity: 12 story points/sprint average
- Industry data on offshore teams: productivity typically 60-80% of onshore for complex product work
- Three peers in your network who offshored: 2 had poor outcomes, 1 had success with a dedicated hybrid model
- Current product is in a competitive market with fast iteration cycles required`,
    hints: [
      "A steel-man is the strongest possible version of the argument you disagree with — not a strawman. What is the best case for offshoring that cannot be easily dismissed?",
      "The steel-man must use the actual numbers and acknowledge that the savings are real. It must also address your strongest counterarguments proactively.",
      "The steel-man: '$1.3M in annual savings is not trivial — it represents 37% of your engineering budget and could fund a full sales hire, accelerate a new product line, or extend runway by 7 months. At 70% productivity with 25 engineers vs. 18, you get 17.5 equivalent engineers for 62% of the cost. The real question is not whether offshoring is perfect — it is whether the productivity gap is worth $1.3M/year.'"
    ],
    referenceSolution: {
      approach: "Write the steel-man first — make it genuinely compelling. Then write the recommendation brief that acknowledges the steel-man and explains why the counterarguments outweigh it in this specific context.",
      reasoning: "**Steel-Man (best case for offshoring):**\n\nThe $1.3M in annual savings is substantive, not cosmetic — it is 37% of current engineering spend. At an assumed 70% productivity rate, 25 offshore engineers deliver approximately 17.5 full-time-equivalent engineers for $2.175M, compared to 18 engineers for $3.5M. The cost per effective engineer drops from $194K to $124K — a 36% reduction in unit labor cost. Peer data shows offshore models can work; the one success case in your network used a hybrid model where 30% of the team remained onshore. This is not an all-or-nothing decision — a hybrid model captures partial savings while managing the institutional knowledge risk. The competitive market argument cuts both ways: if we need to move fast, having more engineers (even at 70% velocity per person) could help, not hurt.\n\n**Recommendation Brief (against offshoring, addressing the steel-man):**\n\nI recommend against full or partial offshoring for our team at this stage. The savings are real — $1.3M/year — but I believe they will be offset by three costs that are harder to quantify but highly probable in our specific situation:\n\n1. **Velocity impact is likely worse than 70%.** The 60-80% productivity benchmark applies to established offshore teams with mature processes. Transition costs (6-9 months of reduced output during handoff, knowledge transfer, and process building) are not in the model. Our current 12-point sprint velocity would likely drop to 7-8 points for 6+ months.\n\n2. **Our product requires rapid iteration.** In a competitive market where we ship every two weeks, communication latency and time-zone gaps are not just overhead — they compound into delayed decisions, which compound into lost competitive advantage.\n\n3. **Two of three peer outcomes were poor.** The success case required a dedicated hybrid model with a strong onshore technical lead. We currently have no one with offshore management experience.\n\nIf the cost pressure is real, I recommend first exploring: (1) hiring 2-3 offshore engineers into our existing team structure (not a replacement), and (2) identifying whether specific team functions (QA, data pipeline work) could be partially offshored without impacting core product velocity.\n\nI estimate this hybrid approach could save $400-600K/year with significantly lower execution risk.",
      commonMistakes: "Steel-manning by slightly strengthening the opposing view rather than making it genuinely compelling — this is just a strawman with extra steps. Not acknowledging the steel-man in the recommendation brief — a brief that ignores the best counterargument is not credible. Using emotional arguments ('we'll lose our culture') instead of economic ones when writing for a CEO.",
      alternatives: "Could present as a decision matrix: three scenarios (status quo, full offshore, hybrid) with estimated costs, risks, and reversibility. Some CEOs prefer structured comparison to narrative argumentation."
    },
    rubric: [
      { id: "lc-043-r1", text: "The steel-man uses actual numbers and is genuinely compelling, not dismissible" },
      { id: "lc-043-r2", text: "The steel-man addresses the writer's strongest concern (productivity gap) proactively" },
      { id: "lc-043-r3", text: "The recommendation brief explicitly acknowledges the steel-man before countering it" },
      { id: "lc-043-r4", text: "The counterarguments are specific to this context (competitive market, no offshore experience) not generic" },
      { id: "lc-043-r5", text: "An alternative (hybrid model) is offered as a cost-saving option that addresses the legitimate concern" }
    ]
  },

  {
    id: "lc-044",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: ["cross-domain-reasoning"],
    difficulty: "hard",
    question: "A policy argument has a correct conclusion but a flawed logical structure that makes it easy to attack. Diagnose all the structural weaknesses, then rebuild the argument so it is logically watertight — reaching the same conclusion via a path that cannot be easily attacked.",
    context: `**Your role:** Policy analyst reviewing a colleague's argument before it is submitted to a government agency.

**The argument to critique and rebuild:**

*Claim:* "The city should mandate electric vehicle charging infrastructure in all new commercial buildings over 10,000 sq ft.

*Supporting argument:* 'Cities with more EV charging infrastructure have higher EV adoption rates. San Francisco, which has extensive public charging, has one of the highest EV adoption rates in the country at 18% of new car sales. Rural areas with little charging have EV adoption below 2%. This shows that charging infrastructure drives EV adoption. Electric vehicles produce zero emissions, so more EVs means cleaner air. Therefore, mandating EV charging in commercial buildings will improve air quality in the city.'"`,
    hints: [
      "Count the distinct logical steps in this argument. How many of them have gaps? Start with the causal claim in the middle: does correlation between charging availability and EV adoption prove causation?",
      "There are at least three structural weaknesses: (1) correlation/causation error in the San Francisco example; (2) 'zero emissions' is not accurate for EVs (it is lifecycle and grid-dependent); (3) the link from charging infrastructure to air quality assumes adoption increases enough to materially change air quality — this is not argued.",
      "A watertight version needs: (1) causal mechanism, not just correlation; (2) accurate emissions framing; (3) quantified air quality impact or defensible estimate; (4) address the counterargument that commercial buildings may not be where charging gaps exist."
    ],
    referenceSolution: {
      approach: "Systematically identify each logical gap. Then rebuild the argument using causally defensible claims, accurate emissions language, and a quantified impact pathway.",
      reasoning: "**Structural weaknesses:**\n\n1. **Correlation ≠ Causation:** San Francisco's high EV adoption may cause high charging infrastructure investment (demand → supply), not the reverse. The argument assumes supply → demand without evidence. High-income cities have both more EVs and more infrastructure for independent reasons.\n\n2. **'Zero emissions' is inaccurate:** EVs produce zero tailpipe emissions but have lifecycle emissions from manufacturing and from electricity generation. In a coal-heavy grid, EVs may have higher lifecycle emissions than efficient gas vehicles. The argument needs to be grid-specific.\n\n3. **Gap between charging infrastructure and air quality:** Even if charging drives adoption (which is not proven), the argument does not quantify the expected adoption increase, the resulting emissions reduction, or how this translates to measurable air quality improvement. This is a chain of assumptions presented as a conclusion.\n\n4. **Commercial buildings may not address the real charging gap:** If the charging constraint is at home (for apartment dwellers) or on highways, mandating commercial building charging may not address the actual adoption barrier.\n\n**Rebuilt argument:**\n\n*Claim:* The city should mandate EV charging in new commercial buildings over 10,000 sq ft.\n\n*Support:*\n- Charging availability is a documented adoption barrier for urban renters who cannot install home charging: surveys of EV non-adopters in the city cite 'no home charging' as the #1 barrier (cite source).\n- Commercial buildings are where urban workers spend 8+ hours/day — workplace charging has been shown to drive adoption among the urban renter segment specifically (cite any available study with a causal design).\n- Our grid runs on [X]% renewable energy — EVs on this grid produce approximately [Y]% lower lifecycle emissions than average new gas vehicles, per [source].\n- If workplace charging expands by [N] units, conservative models estimate [Z] additional EV adoptions annually — contributing to the city's 2030 emissions targets.\n- The mandate applies only to new construction, avoiding retrofit costs and focusing on the highest-impact, lowest-cost intervention point.\n\n*Rebuttal acknowledged:* This mandate does not address highway charging gaps. A complementary investment in public fast-charging addresses that barrier separately.",
      commonMistakes: "Treating a causal claim as established because a plausible mechanism exists. Using 'zero emissions' as a rhetorical shortcut when accurate framing ('lower lifecycle emissions on our grid') is both more defensible and still compelling. Not quantifying the link between the policy mechanism and the stated goal.",
      alternatives: "Could strengthen the argument further by citing a natural experiment: cities that added workplace charging via similar mandates and measuring subsequent EV adoption vs. comparable cities that did not. Causal evidence from policy precedents is significantly more defensible than cross-sectional correlation."
    },
    rubric: [
      { id: "lc-044-r1", text: "All three major logical weaknesses (causation error, emissions inaccuracy, impact gap) are identified" },
      { id: "lc-044-r2", text: "The rebuilt argument uses a causal mechanism, not correlation" },
      { id: "lc-044-r3", text: "Emissions language is accurate and grid-specific" },
      { id: "lc-044-r4", text: "The rebuilt argument includes a quantified or quantifiable pathway from policy to air quality" },
      { id: "lc-044-r5", text: "A significant counterargument is acknowledged and addressed" }
    ]
  },

  {
    id: "lc-045",
    trackId: "logical-communication",
    subSkill: "structured-argumentation",
    secondarySkills: ["ambiguous-problem-solving"],
    difficulty: "hard",
    question: "You are in a meeting where two executives are arguing past each other about a resourcing decision. Neither is wrong, but they are answering different questions. Diagnose why they are talking past each other and write a brief synthesis argument that resolves the apparent disagreement by naming the actual decision that needs to be made.",
    context: `**Your role:** Chief of Staff facilitating a leadership meeting.

**The debate:**

*VP of Product (arguing for Option A):* "We need to hire two senior engineers this quarter. The roadmap has three critical features that are blocked. If we don't ship these features, we lose the Apex renewal in Q2 — that's $340K ARR at risk. This is not optional."

*VP of Finance (arguing for Option B):* "We have 14 months of runway. Every hire we make reduces that by 6-8 weeks. We don't know if the next fundraise will close. Preserving runway is the single most important thing right now. We should not hire."

**What you observe:** Both executives are correct within their own frame. The VP of Product is optimizing for revenue protection. The VP of Finance is optimizing for survival probability. They are not actually disagreeing about facts — they are disagreeing about which risk to prioritize.

**Additional context you have:** The CFO privately told you that the fundraise has a 70% probability of closing within 3 months. The Apex account manager told you that Apex's decision is feature-specific — one of the three features would be sufficient to secure the renewal.`,
    hints: [
      "Before writing the synthesis, name the actual decision: this is not 'should we hire?' — it is 'which risk do we prioritize: feature-driven revenue loss or runway reduction?' These are genuinely different objectives.",
      "The synthesis argument should reframe the debate, surface the hidden information that changes the calculus, and propose a resolution that partially satisfies both objectives.",
      "The resolution: hire one senior engineer (not two), targeting specifically the one feature that secures the Apex renewal. This protects the $340K renewal at a runway cost of 3-4 weeks, not 12-16 weeks. The fundraise probability (70%) and the reduced scope of what is needed to satisfy Apex are the pieces of information neither executive has in the current debate."
    ],
    referenceSolution: {
      approach: "Name the actual decision (risk prioritization, not resourcing). Surface the information asymmetry. Propose a scoped resolution that addresses both objectives with less tradeoff than the binary framing suggests.",
      reasoning: "**Synthesis argument for the meeting:**\n\n'I want to name what I think is actually happening in this conversation. This isn't a disagreement about facts — both of you are correct. [Product] is right that the Apex renewal is at risk and the timeline is real. [Finance] is right that runway preservation is non-negotiable given fundraise uncertainty. The actual decision is: which risk takes priority, and is there a version of this choice that doesn't force a full tradeoff?\n\nI have two pieces of context that change the frame slightly. First, on the Apex renewal: I spoke with the account manager, and one of the three blocked features — not all three — is what Apex has specifically cited. We don't need to ship all three features to protect $340K in ARR. Second, on the fundraise: the CFO shared a 70% close probability within 3 months, which materially changes the survival probability calculus.\n\nHere is a resolution for your consideration: hire one senior engineer targeted specifically at the single Apex-critical feature. This reduces runway impact from 12-16 weeks (two hires) to 3-4 weeks (one hire), protects the $340K renewal, and if the fundraise closes in 3 months as projected, we can revisit the second hire with much better visibility. This avoids both risks — Apex churn and runway depletion — at the cost of a modest, specific, reversible investment.\n\nThe question I'd put to both of you: is there any reason the Apex-scoped single hire doesn't work?'",
      commonMistakes: "Trying to resolve the argument by picking a side ('Finance is right because runway matters more') rather than reframing it. Not surfacing the information that neither party has — this is the Chief of Staff's unique contribution in this context. Proposing a compromise (hire one engineer) without explaining why the specific scope (Apex-critical feature) changes the economics of the decision.",
      alternatives: "If neither executive knew about the other's private context, the synthesis argument might need to first verify that both pieces of information are correct before using them in the resolution. Surfacing unverified information as fact in a leadership meeting is risky."
    },
    rubric: [
      { id: "lc-045-r1", text: "The actual decision (risk prioritization, not resourcing) is named explicitly" },
      { id: "lc-045-r2", text: "Both executives' positions are represented accurately before the synthesis" },
      { id: "lc-045-r3", text: "The two pieces of private context are surfaced and used to change the calculus" },
      { id: "lc-045-r4", text: "The proposed resolution addresses both objectives (revenue protection + runway preservation)" },
      { id: "lc-045-r5", text: "The synthesis ends with a question that invites agreement rather than demanding it" }
    ]
  },

  // ── EXECUTIVE SUMMARY (lc-046 to lc-050) ─────────────────────────────────

  {
    id: "lc-046",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: ["unit-economics"],
    difficulty: "medium",
    question: "Compress this 400-word market entry analysis into a 100-word executive summary for a CEO who must make a go/no-go decision today. Nothing important can be lost. Every word must earn its place.",
    context: `**Your role:** Strategy analyst writing the executive summary section of a market entry report.

**Full analysis to compress:**
"We have been evaluating entry into the Canadian market for the past eight weeks. Canada represents a significant opportunity — the total addressable market for our product category is approximately CAD $2.8 billion annually, with the market growing at 11% year-over-year. Our primary competitors in Canada are LocalSoft (38% market share) and GlobalSys (22% market share), with the remaining 40% fragmented among smaller regional players. We believe we can realistically target the fragmented 40% in Year 1, which represents roughly CAD $1.1 billion in accessible revenue.

Our go-to-market analysis suggests a direct sales model is appropriate, given average deal sizes in Canada average CAD $45,000 annually. We have identified three potential channel partners — Maple Digital, NorthernTech, and Summit Solutions — each of which has existing relationships with mid-market companies in our target segment. Preliminary conversations with Maple Digital have been encouraging; they have expressed interest in a co-selling arrangement.

The investment required for market entry is approximately CAD $1.4 million in Year 1, covering one country manager hire, two sales hires, localization of the product (primarily French-Canadian compliance requirements), and marketing spend. At a conversion rate of 2.5% of the accessible market (CAD $1.1B), Year 1 revenue would be CAD $27.5M. CAC in this model is approximately CAD $12,000 per customer.

The primary risk is LocalSoft's incumbent position — they have relationships with many of the regional players we would be targeting and may respond aggressively to our entry. We recommend proceeding with a pilot entry focused on English-speaking provinces first, with a French-Canadian expansion in Year 2 pending pilot results."`,
    hints: [
      "A 100-word executive summary must contain: the recommendation, the market opportunity (quantified), the investment required, the expected return, and the primary risk. Everything else is detail.",
      "Identify which facts are load-bearing for the CEO's decision. The three channel partners' names, the eight-week analysis timeline, and the two competitors' market shares are details — not decision-critical.",
      "Draft: 'Recommend entering Canada via a pilot in English-speaking provinces (Year 1), expanding to French-Canadian in Year 2. The TAM is CAD $2.8B (growing 11%); we target the fragmented 40% for Year 1 accessible market of CAD $1.1B. Year 1 investment: CAD $1.4M (country manager, 2 sales hires, localization, marketing). At 2.5% conversion, Year 1 revenue: CAD $27.5M. CAC: CAD $12K. Primary risk: incumbent LocalSoft has existing relationships in our target segment and may respond aggressively. Channel partner conversations are underway; one partner (Maple Digital) has expressed co-sell interest.'"
    ],
    referenceSolution: {
      approach: "Identify the six decision-critical facts. Draft a summary that hits all six in 100 words. Cut everything that is process, background, or detail that does not change the decision.",
      reasoning: "**Executive Summary (98 words):**\n\nRecommendation: Enter Canada via an English-province pilot in Year 1, with French-Canadian expansion in Year 2 pending pilot results.\n\nOpportunity: CAD $2.8B TAM (11% growth); targeting the fragmented 40% for a CAD $1.1B Year 1 accessible market.\n\nInvestment: CAD $1.4M (country manager, 2 sales hires, French-Canadian localization, marketing).\n\nReturn: At 2.5% conversion, Year 1 revenue of CAD $27.5M at CAD $12K CAC.\n\nPrimary risk: Incumbent LocalSoft holds 38% market share and has existing relationships in our target segment — aggressive response is likely.\n\nStatus: One channel partner (Maple Digital) has expressed co-sell interest.",
      commonMistakes: "Keeping interesting-but-not-decision-critical information (competitor market shares beyond the primary risk, names of all three channel partners, analysis timeline). Writing the summary in prose paragraphs that force the CEO to extract numbers — use a structured format that makes the numbers scannable.",
      alternatives: "A slightly longer 150-word summary could include the rationale for phased entry (French-Canadian localization risk) and the reason a direct sales model was chosen (deal size). Whether to include these depends on whether the CEO will have questions about them during the meeting."
    },
    rubric: [
      { id: "lc-046-r1", text: "Summary is 100 words or fewer" },
      { id: "lc-046-r2", text: "All six decision-critical elements are present: recommendation, TAM, investment, return, CAC, primary risk" },
      { id: "lc-046-r3", text: "No non-decision-critical detail is included (analysis timeline, all three channel partner names, etc.)" },
      { id: "lc-046-r4", text: "Numbers are presented in a scannable format, not buried in prose" }
    ]
  },

  {
    id: "lc-047",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: [],
    difficulty: "medium",
    question: "Write an executive summary for a post-mortem report on a failed product launch. The audience is the board, and two board members were strong advocates for the launch. The summary must be honest, not defensive, and forward-looking — without being either a whitewash or an attack on specific individuals.",
    context: `**Your role:** CPO writing the executive summary of the post-mortem for the board.

**Facts from the post-mortem:**
- The product launched 3 months ago to an internal target of 10,000 activations in 90 days
- Actual activations: 2,100 (21% of target)
- Root causes identified: (1) ICP was too broad — the product was built for SMBs but marketed to enterprise, where it was underpowered; (2) onboarding required IT involvement which eliminated the self-serve path; (3) the competitive pricing benchmark used in planning was 14 months old and did not reflect recent competitor price reductions
- Two board members had championed this launch; one of them pushed back on the narrower ICP that was proposed in the planning phase
- The post-mortem identified 4 team decisions and 2 board-level decisions that contributed to the outcome
- The team has a revised plan: re-launch targeting SMBs with a simplified onboarding and updated pricing

**What to avoid:** Whitewashing (listing only process learning, not the actual errors), finger-pointing at the board members, and vague language that does not name the root causes.`,
    hints: [
      "An honest post-mortem executive summary names what went wrong with specificity. 'We learned a lot' is a whitewash. Name the three root causes.",
      "The board-level decision contribution (the ICP debate) can be named factually — 'planning phase ICP decisions' — without attributing it to specific individuals. Facts, not personalities.",
      "Structure: (1) Result (21% of activation target), (2) Three root causes (named specifically), (3) Accountability acknowledgment (team and planning phase decisions both contributed), (4) Forward plan (SMB re-launch with specific changes). Keep it under 200 words."
    ],
    referenceSolution: {
      approach: "State the outcome quantitatively. Name the three root causes by name. Acknowledge shared accountability without finger-pointing. Close with the forward plan and its specific changes.",
      reasoning: "**Executive Summary — Product Launch Post-Mortem:**\n\nThe launch reached 2,100 activations against a 10,000-target (21%). Three root causes account for the gap:\n\n1. **ICP misalignment:** The product was built for SMBs but launched with enterprise marketing. Enterprise users found the product underpowered; SMBs were not targeted. This was the primary driver of underperformance.\n\n2. **Onboarding friction:** The activation flow required IT involvement, eliminating the self-serve path that the activation target assumed.\n\n3. **Stale competitive pricing data:** Our pricing benchmark was 14 months old and did not reflect a significant competitor price reduction — our launch pricing was uncompetitive.\n\nAccountability: These failures involved both team execution decisions (onboarding design, marketing targeting) and planning-phase decisions (ICP scope, pricing validation). The post-mortem document details both layers.\n\n**Forward plan:** Re-launch targeting SMBs with a simplified self-serve onboarding (no IT required) and updated pricing. Target: 5,000 SMB activations in 90 days. Timeline: 8 weeks to relaunch readiness.\n\nWe are committed to sharing the full post-mortem document with the board and welcome a working session to discuss.",
      commonMistakes: "Using euphemisms ('the targeting approach was suboptimal') instead of naming the problem directly ('the product was marketed to the wrong segment'). Not quantifying the outcome — a board needs a number, not a characterization. Closing with apology rather than forward action.",
      alternatives: "For a board where trust is particularly strained, could open with the forward plan and lead with what has changed, then walk back through the diagnosis. This frames the post-mortem as evidence of learning rather than as an accounting of failure."
    },
    rubric: [
      { id: "lc-047-r1", text: "The activation result (21% of target) is stated with specific numbers" },
      { id: "lc-047-r2", text: "All three root causes are named specifically, not euphemistically" },
      { id: "lc-047-r3", text: "Accountability includes both team and planning-phase decisions without naming individuals" },
      { id: "lc-047-r4", text: "The forward plan includes specific changes (not just 'we will do better')" },
      { id: "lc-047-r5", text: "Tone is factual — neither defensive nor apologetic in a way that signals panic" }
    ]
  },

  {
    id: "lc-048",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: ["fermi-problems", "orders-of-magnitude"],
    difficulty: "hard",
    question: "You have been given five conflicting analyses of the same market opportunity. Write a one-page executive summary for the CEO that synthesizes the conflicting data into a single coherent recommendation — making explicit where you have made judgment calls and why.",
    context: `**Your role:** VP of Strategy writing the executive summary for a potential acquisition target evaluation.

**The five analyses (all from credible internal teams):**

*Team A (Financial modeling):* "Target company has $8.2M ARR growing at 34% YoY. At 5x ARR multiple, acquisition cost is $41M. 3-year NPV of acquisition is positive at $12M assuming 25% growth continuation."

*Team B (Technical due diligence):* "The codebase has significant technical debt. Estimated 18-24 months of cleanup before full integration. Hidden infrastructure costs of $800K-$1.2M annually during cleanup."

*Team C (Market analysis):* "The target serves a market that could face regulatory disruption in 12-18 months. A proposed EU regulation (70% probability of passing) would require product redesign affecting 40% of current revenue."

*Team D (Customer interviews):* "Spoke to 8 of their top 20 customers. 6 of 8 expressed strong loyalty to the target's team specifically. 4 of 8 said they would 'evaluate alternatives' if the founding team departed post-acquisition."

*Team E (Strategic fit):* "The acquisition adds capabilities that would take us 3+ years to build internally. The target's ICP is adjacent to ours — 70% customer overlap potential with our existing base."`,
    hints: [
      "You cannot reconcile all five analyses into one clean recommendation without making judgment calls. Name the two or three that most significantly change the valuation or risk profile.",
      "The regulatory risk (Team C) is the most binary — a 70% probability of an event that affects 40% of revenue is a material valuation risk that is likely not priced into the $41M offer. This is the most important adjustment to make explicit.",
      "Structure: (1) Bottom-line recommendation with adjusted valuation range; (2) Three key findings that drive the recommendation; (3) Two judgment calls you made and why; (4) The one question that, if answered differently, would change the recommendation."
    ],
    referenceSolution: {
      approach: "Make a recommendation with an adjusted valuation range. Name the three most material findings. Explicitly state your judgment calls. Close with the pivotal question.",
      reasoning: "**Executive Summary — [Target Company] Acquisition Evaluation**\n\n**Recommendation:** Proceed with acquisition only at a significantly reduced valuation of $24-28M (vs. the $41M implied by 5x ARR), contingent on regulatory clarity and retention agreements with the founding team. Alternatively, delay decision by 90 days pending EU regulation ruling.\n\n**Three material findings:**\n\n1. **Regulatory risk is not priced in.** Team C estimates 70% probability of an EU regulation requiring product redesign affecting 40% of ARR. A risk-adjusted NPV model reduces the acquisition value by approximately $13-15M. This alone brings a fair offer below $30M.\n\n2. **Integration costs are higher than the financial model assumes.** Team B identifies $800K-$1.2M in annual hidden infrastructure costs during an 18-24 month cleanup window — not included in Team A's NPV model. Adjusted for this, the 3-year NPV turns negative at the $41M price.\n\n3. **Customer retention is team-dependent.** Team D's interviews suggest 40-50% of top customers would re-evaluate post-acquisition if the founding team departs. Retention agreements are a prerequisite, not an optional negotiation point.\n\n**Judgment calls I made:**\n- I weighted regulatory risk as the primary valuation driver over strategic fit, given the 70% probability and 40% revenue impact. If the regulation does not pass, the strategic fit argument (Team E) becomes compelling at a higher price.\n- I treated Team D's 4-of-8 customer caveat as a material risk, not a normal M&A noise signal, because the target's competitive advantage appears to be the founding team's relationships, not proprietary technology.\n\n**The pivotal question:** If the EU regulation passes, can the product be redesigned within 12 months at reasonable cost? If yes, the acquisition may still be worth pursuing at a lower price. If no, the business model is more fragile than it appears and we should not proceed at any price above distressed value.",
      commonMistakes: "Averaging the conflicting analyses into a false consensus rather than making a judgment call and naming it. Presenting the summary as if all five analyses agree when they demonstrably do not — the CEO will discover the conflicts and wonder why the summary did not surface them. Not naming what would change the recommendation — this is what distinguishes a summary from a conclusion.",
      alternatives: "Could present two recommendation scenarios: (1) If regulatory risk materializes: offer $18M (distressed acquisition); (2) If regulatory risk does not materialize: offer $32M contingent on retention agreements. Scenario-based recommendations are appropriate when one key unknown dominates the analysis."
    },
    rubric: [
      { id: "lc-048-r1", text: "Recommendation includes an adjusted valuation range, not just the original $41M figure" },
      { id: "lc-048-r2", text: "Regulatory risk is identified as the primary valuation driver and quantified" },
      { id: "lc-048-r3", text: "Hidden integration costs are incorporated into the NPV assessment" },
      { id: "lc-048-r4", text: "Judgment calls are explicitly named and justified, not hidden" },
      { id: "lc-048-r5", text: "The pivotal question that would change the recommendation is stated" },
      { id: "lc-048-r6", text: "Summary synthesizes all five analyses without ignoring any material finding" }
    ]
  },

  {
    id: "lc-049",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "hard",
    question: "This executive summary was written by an analyst who over-compressed — key information was lost in translation. The CEO made a bad decision based on the summary. Identify exactly what was lost, explain the analytical failure, and rewrite the executive summary so the decision-critical nuance is preserved within the length constraint.",
    context: `**Your role:** Senior analyst doing a post-decision review to identify where the communication failed.

**The analyst's original executive summary (which the CEO used to make the decision):**
"Analysis of the proposed SaaS pricing change shows that moving from monthly to annual billing will increase revenue by an estimated $1.8M in Year 1. Customer impact is manageable. We recommend proceeding with the billing change."

**What the full analysis actually showed (from the underlying report):**
- Annual billing increase of $1.8M in Year 1: TRUE — but this assumes 0% additional churn due to the billing change
- The sensitivity analysis showed: at 5% incremental churn from the billing change, net revenue impact is +$400K (not +$1.8M); at 10% incremental churn, net impact is -$600K (negative)
- Industry benchmarks: forcing annual billing on existing monthly customers causes 7-12% incremental churn in comparable SaaS companies
- 'Customer impact is manageable' came from a survey of 50 customers, of whom 34 were already on annual plans — only 16 monthly customers were surveyed
- The CEO proceeded with the change; 9% incremental churn occurred, resulting in net revenue loss of ~$280K

**The failure:** The summary omitted the sensitivity analysis and the churn risk, presenting a best-case scenario as the base case.`,
    hints: [
      "The critical failure is not length — it is that the summary presented a conditional projection (assumes 0% incremental churn) as an unconditional recommendation. This is an analytical honesty failure.",
      "The rewritten summary must preserve the recommendation but condition it correctly. It must include the range of outcomes, not just the upside case.",
      "The summary should show: base case (+$1.8M), risk-adjusted case (+$400K at 5% churn), and downside case (-$600K at 10% churn) — then note that industry benchmarks suggest 7-12% incremental churn is probable, which puts the expected outcome in negative territory."
    ],
    referenceSolution: {
      approach: "Identify what was lost (sensitivity analysis, churn risk, survey sample bias). Explain why this constitutes an analytical failure, not just an editing choice. Rewrite the summary to preserve the range of outcomes within the same length constraint.",
      reasoning: "**What was lost and why it mattered:**\n\n1. **Sensitivity analysis omitted:** The original summary presents $1.8M as the revenue impact. But this is the zero-churn scenario — a best case. The sensitivity analysis shows that at 5% incremental churn (plausible), net impact drops to $400K; at 10% (the low end of the industry benchmark), it turns negative. Omitting this reduces a three-scenario analysis to a single point estimate.\n\n2. **Industry benchmark not disclosed:** A comparable-company benchmark of 7-12% incremental churn directly contradicts the '0% churn assumed' base case. The CEO had no information that the base case was implausible.\n\n3. **Survey sample bias:** The claim 'customer impact is manageable' was based on a survey 68% composed of already-annual customers — who have no incentive to object to the change. The actual at-risk population (monthly customers) was represented by only 16 respondents.\n\n**Rewritten executive summary:**\n\nMoving from monthly to annual billing would generate an estimated $1.8M in Year 1 revenue **if incremental churn is zero.** However, our sensitivity analysis and industry benchmarks suggest this assumption is optimistic:\n\n- At 5% incremental churn: net impact +$400K\n- At 10% incremental churn: net impact -$600K\n- Industry benchmark for forced billing conversions: 7-12% incremental churn\n\nOur customer survey skewed toward existing annual customers (34 of 50 respondents); only 16 monthly customers were surveyed.\n\n**Our recommendation:** Proceed with annual billing as the default for new customers only. Offer existing monthly customers an incentive to convert (e.g., 1 month free) rather than forcing the change. This captures upside while limiting churn exposure. We do not recommend a forced conversion to existing monthly customers without further data.",
      commonMistakes: "Treating compression as equivalent to summarization — a summary should preserve the decision-relevant information even if it drops supporting detail. The most dangerous executive summaries are ones that are technically accurate (the $1.8M number is real) but omit the conditions that determine whether the number is achievable. 'Customer impact is manageable' without disclosing the survey methodology is a statement that sounds like evidence but is not.",
      alternatives: "Could present the recommendation as two scenarios in the summary: (1) forced conversion — expected outcome negative based on benchmarks; (2) incentivized conversion — expected outcome positive with manageable risk. This preserves the strategic option without burying the risk."
    },
    rubric: [
      { id: "lc-049-r1", text: "All three omissions (sensitivity analysis, benchmark, survey bias) are correctly identified" },
      { id: "lc-049-r2", text: "The rewritten summary includes the three-scenario revenue range" },
      { id: "lc-049-r3", text: "The industry benchmark (7-12% churn) is cited as a challenge to the base case assumption" },
      { id: "lc-049-r4", text: "The survey methodology flaw is disclosed" },
      { id: "lc-049-r5", text: "The recommendation in the rewrite is different from the original (incentivized vs. forced conversion)" },
      { id: "lc-049-r6", text: "The rewrite is approximately the same length as the original (no longer than ~150 words)" }
    ]
  },

  {
    id: "lc-050",
    trackId: "logical-communication",
    subSkill: "executive-summary",
    secondarySkills: ["full-case-interview"],
    difficulty: "hard",
    question: "You have 4 minutes to present a full strategic recommendation to a CEO. The situation involves three linked problems, two possible strategies, significant uncertainty, and a time constraint. Write the script for your 4-minute verbal executive summary — structured so that if the CEO stops you at any point, the most important things have already been said.",
    context: `**Your role:** Strategy consultant presenting at the end of a 3-week engagement.

**The situation:**
- Client: a $120M revenue regional grocery chain with 34 stores
- Problem 1: E-commerce fulfillment costs are $8.40/order vs. $3.10 industry benchmark — making online orders unprofitable at current volumes
- Problem 2: Two stores in the southern region are underperforming (EBITDA negative for 6 consecutive quarters) and are likely drag on the portfolio
- Problem 3: A national competitor is entering the market in 6 months, which will increase competitive pressure primarily in the northern region where the client has its strongest stores

- Strategy A: Invest in fulfillment automation ($4M capex) to get e-commerce costs below breakeven; maintain all 34 stores
- Strategy B: Close the 2 underperforming stores (freeing $3.2M in annual cash), use freed capital to strengthen the 18 northern stores before the competitor enters; accept that e-commerce will remain subscale

**The recommendation:** Strategy B, because the competitive threat timeline makes the northern store defense the highest-urgency action, and the capex required for Strategy A cannot be funded without the store closures anyway. E-commerce volume is insufficient to justify $4M capex at current growth rates.

**The constraint:** You have exactly 4 minutes. The CEO is known to interrupt with questions. Structure your opening 90 seconds to be self-contained.`,
    hints: [
      "For a 4-minute verbal summary, use an inverted triangle: most important first, details later. If the CEO interrupts after 90 seconds, the most critical information should already be delivered.",
      "The first 90 seconds should cover: recommendation (Strategy B), the single most important reason (competitor entry in 6 months is the clock), and the key tradeoff (accepting subscale e-commerce).",
      "The next 90 seconds: the three problems in priority order (competitive threat > underperforming stores > e-commerce costs) with the key number for each. The final 60 seconds: implementation path and one risk to flag."
    ],
    referenceSolution: {
      approach: "Script the 4-minute verbal summary in three sections: 90-second self-contained opening, 90-second problem walkthrough, 60-second implementation and risk. Design it so each section is complete if interrupted.",
      reasoning: "**4-Minute Verbal Executive Summary Script:**\n\n**[0:00-1:30 — Self-contained opening]**\n'I recommend Strategy B: close the two underperforming southern stores, free the $3.2M in annual cash, and use it to strengthen your 18 northern stores before the national competitor enters in 6 months. The reason this is the right call is timing — you have a 6-month window to fortify your strongest market before a well-capitalized national competitor arrives, and that window cannot wait for an e-commerce turnaround that would take 18-24 months at minimum. Strategy B uses capital you already have; Strategy A requires capital you would need to borrow or raise.'\n\n**[1:30-3:00 — Three problems in priority order]**\n'Let me walk you through the three problems quickly and why I'm sequencing them this way. First, the competitive entry: northern stores do 58% of your revenue and will face the most pressure — investment in assortment, price competitiveness, and store experience there is the highest-return use of capital right now. Second, the southern stores: they have been EBITDA negative for six consecutive quarters — combined they are consuming approximately $2.8M in cash annually. Closing them is not a strategic defeat; it is releasing capital that is better deployed in your strongest market. Third, e-commerce: your fulfillment cost is $8.40 per order versus a $3.10 benchmark — you are losing money on every online order. The $4M investment to fix this is not fundable without the store closures, and even if it were, e-commerce volume doesn't justify it yet. Strategy B accepts e-commerce remaining subscale for now. That is the right tradeoff.'\n\n**[3:00-4:00 — Implementation and risk]**\n'On implementation: we recommend announcing the store closures in the next 30 days — before the competitor's market entry announcement, which could make closures look like a retreat. Redeploy staff where possible; we've identified 14 roles that can transfer to northern stores. The primary risk is execution speed — the 6-month window is real. If northern store investment is delayed past Q2, the competitive benefit narrows significantly. I'm happy to go deeper on any of these three areas — where would you like to start?'",
      commonMistakes: "Starting with a problem summary before giving the recommendation — executives often interrupt before you get there. Building up to the recommendation instead of leading with it. Spending equal time on all three problems when the competitive threat is significantly more urgent. Ending without explicitly inviting questions or signaling where the CEO can probe.",
      alternatives: "For a CEO known to interrupt early, compress the opening to 45 seconds: 'Strategy B: close two southern stores, fund northern defense, accept subscale e-commerce. The competitor entering in 6 months is the clock. Everything else is subordinate to that.' Then invite questions and let the CEO direct the remaining 3.5 minutes."
    },
    rubric: [
      { id: "lc-050-r1", text: "Recommendation is stated in the first 90 seconds with the primary reason" },
      { id: "lc-050-r2", text: "The first 90 seconds is self-contained — it could stand alone if the CEO interrupts" },
      { id: "lc-050-r3", text: "Three problems are sequenced by urgency, not by the order they were analyzed" },
      { id: "lc-050-r4", text: "Key numbers are included for each problem (fulfillment cost, EBITDA drag, revenue concentration)" },
      { id: "lc-050-r5", text: "The key tradeoff (accepting subscale e-commerce) is explicitly named" },
      { id: "lc-050-r6", text: "The presentation ends with a question that invites the CEO to direct the conversation" }
    ]
  },

];
