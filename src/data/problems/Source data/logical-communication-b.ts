import type { Problem } from '@/types';

export const logicalCommunicationProblemsB: Problem[] = [

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
    ],
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
