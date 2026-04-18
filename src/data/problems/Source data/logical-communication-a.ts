import type { Problem } from '@/types';

export const logicalCommunicationProblemsA: Problem[] = [

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
      alternatives: "Could structure as a pre-mortem: 'What would have to be true for this to fail, and how likely is each failure mode?' This is especially useful when the CEO is known to be skeptical — acknowledging failure modes proactively demonstrates rigor."
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

];
