import type { Problem } from '@/types';

export const firstPrinciplesThinkingProblemsB: Problem[] = [
  // ── DECOMPOSITION TO FUNDAMENTALS (fp-026 to fp-030) ─────────────────────

  {
    id: "fp-026",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: ["unit-economics"],
    difficulty: "medium",
    question: "A SaaS company's CEO says 'our growth is slowing.' Decompose the concept of SaaS growth to its fundamental drivers and identify the minimal set of metrics you would inspect first.",
    context: undefined,
    hints: [
      "Growth in revenue is not one thing — break it into the components that add to and subtract from the revenue base each period.",
      "SaaS revenue has a stock-and-flow structure: new revenue coming in, existing revenue expanding, and revenue churning out. Decompose each.",
      "Net New ARR = New ARR + Expansion ARR − Churned ARR. Each term has its own drivers: new ARR = leads × conversion × ACV; expansion = upsell rate × existing base; churn = churn rate × base. Inspect which of these three terms is deteriorating first."
    ],
    referenceSolution: {
      approach: "Decompose ARR growth into its additive and subtractive flows, then isolate which flow is responsible for the slowdown.",
      reasoning: "Step 1: Define growth. In SaaS, meaningful growth = Net New ARR added per period. Step 2: Decompose. Net New ARR = New ARR + Expansion ARR − Churned ARR. Step 3: Decompose each term. New ARR = (qualified leads) × (win rate) × (average contract value). Expansion ARR = (existing customer base) × (upsell/cross-sell rate). Churned ARR = (existing customer base) × (gross churn rate). Step 4: The minimal inspection set is: (a) Is new ARR declining — if so, is it a top-of-funnel or win-rate problem? (b) Is churn accelerating — if so, is it driven by a specific cohort, segment, or product issue? (c) Is expansion contracting — often the earliest warning of customer dissatisfaction. Step 5: 'Growth is slowing' can mean any combination of these; treating it as one problem leads to the wrong intervention.",
      commonMistakes: "Conflating revenue growth with customer count growth. Treating churn as the default culprit without checking new ARR. Ignoring expansion revenue as a growth lever.",
      alternatives: "Could further decompose by customer segment (SMB vs. enterprise) since churn and expansion dynamics differ dramatically by segment."
    },
    rubric: [
      { id: "fp-026-r1", text: "Frames growth as Net New ARR with additive and subtractive components" },
      { id: "fp-026-r2", text: "Decomposes new ARR into pipeline × conversion × ACV" },
      { id: "fp-026-r3", text: "Identifies churn and expansion as separate flows requiring separate inspection" },
      { id: "fp-026-r4", text: "Proposes a minimal diagnostic sequence rather than inspecting everything at once" },
      { id: "fp-026-r5", text: "Avoids assuming a single root cause before seeing data" }
    ]
  },

  {
    id: "fp-027",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: ["supply-demand"],
    difficulty: "medium",
    question: "A city is experiencing a 'housing affordability crisis.' Decompose housing affordability to its most fundamental economic components and explain what levers actually exist to improve it.",
    context: undefined,
    hints: [
      "Affordability is a ratio — start by defining what it is a ratio of, and decompose both the numerator and denominator.",
      "Housing cost has a supply-side structure: land, construction, permitting, financing, and developer margin. Income has its own drivers. Both sides matter.",
      "Affordability = Housing Cost / Household Income. Housing cost = land cost + hard construction cost + soft costs (permits, fees, design) + financing cost + developer margin. Income = local wage levels driven by labor market. Each component has different policy levers. Land cost responds to zoning; construction cost responds to materials and labor supply; soft costs respond to permitting reform; income responds to labor market and education policy."
    ],
    referenceSolution: {
      approach: "Decompose the affordability ratio into cost-side and income-side components, then enumerate the policy lever for each component.",
      reasoning: "Affordability is conventionally defined as housing cost ≤ 30% of gross income, so: Affordability ratio = Annual Housing Cost / Annual Household Income. Cost side: Total housing cost = Land acquisition cost + Hard construction (materials + labor) + Soft costs (permits, impact fees, design, legal) + Financing cost (interest during construction) + Developer profit margin. Income side: Household income = local wage × employment rate × household earner count. Levers on cost side: Zoning reform (increase supply → reduce land cost per unit), permitting streamlining (reduce soft costs and time), inclusionary zoning waivers, modular/prefab construction (reduce hard costs), lower interest rates (reduce financing cost). Levers on income side: workforce development, anti-displacement policies, income subsidies (vouchers). Key insight: most interventions target only one component while ignoring others. E.g., a city that upzones but doesn't reform permitting may not actually reduce costs meaningfully.",
      commonMistakes: "Treating 'housing is expensive' as purely a supply problem without examining which cost component is dominant in that specific city. Ignoring financing costs which can be 15-20% of total project cost.",
      alternatives: "Could decompose by housing type (rental vs. ownership) since the fundamental cost drivers and income relationships differ."
    },
    rubric: [
      { id: "fp-027-r1", text: "Correctly frames affordability as a ratio of cost to income" },
      { id: "fp-027-r2", text: "Decomposes housing cost into at least 4 distinct components" },
      { id: "fp-027-r3", text: "Identifies income as a separate denominator with its own drivers" },
      { id: "fp-027-r4", text: "Maps at least one policy lever to each major cost component" },
      { id: "fp-027-r5", text: "Notes that interventions targeting only one component may fail" }
    ]
  },

  {
    id: "fp-028",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: [],
    difficulty: "hard",
    question: "A pharmaceutical company claims its new drug 'reduces heart attack risk by 50%.' Decompose this claim to its fundamental statistical and clinical components. What do you need to know before accepting this as meaningful?",
    context: "The claim comes from a press release summarizing a Phase 3 trial. No further detail is provided.",
    hints: [
      "A percentage reduction in risk is always relative to something. Relative risk reduction and absolute risk reduction are very different numbers — which is being reported?",
      "Decompose 'risk' itself: what is the baseline risk in the control group, and what is it in the treatment group? The 50% figure is derived from these two numbers. Consider what happens if baseline risk is very low.",
      "Full decomposition: Relative Risk Reduction = (Control event rate − Treatment event rate) / Control event rate. Absolute Risk Reduction = Control rate − Treatment rate. Number Needed to Treat = 1 / ARR. A 50% RRR with a 2% baseline risk gives only 1% ARR and NNT of 100. Also check: follow-up duration, patient population, primary vs. surrogate endpoints, funding source, and whether the trial was adequately powered."
    ],
    referenceSolution: {
      approach: "Decompose the '50% reduction' into its statistical building blocks — baseline risk, absolute vs. relative risk reduction, and NNT — then interrogate trial design assumptions.",
      reasoning: "Step 1: Identify what '50% reduction' means statistically. Risk reduction claims can be reported as: (a) Relative Risk Reduction (RRR) = (RC − RT) / RC, where RC = event rate in control, RT = event rate in treatment. (b) Absolute Risk Reduction (ARR) = RC − RT. (c) Number Needed to Treat (NNT) = 1 / ARR. A '50% reduction' almost always refers to RRR, which is misleading without context. Step 2: Insert plausible numbers. If RC = 4% and RT = 2%, then RRR = 50%, ARR = 2%, NNT = 50. If RC = 0.4% and RT = 0.2%, RRR is still 50%, but ARR = 0.2% and NNT = 500 — a very different clinical picture. Step 3: Further decompose trial quality. Questions to ask: What was the follow-up duration? Was this a surrogate endpoint (e.g., cholesterol levels) or a hard endpoint (actual heart attacks)? What was the patient population — high risk or general? Was the trial industry-funded? Was the primary endpoint pre-registered? Step 4: Conclusion — the claim is uninterpretable without knowing the absolute baseline risk and the trial population. '50% reduction' may represent a large or negligible benefit depending on these fundamentals.",
      commonMistakes: "Accepting relative risk reduction as the headline number without asking about absolute risk. Assuming the trial population matches the intended treatment population. Ignoring surrogate vs. hard endpoints.",
      alternatives: "Could also decompose using a 2×2 contingency table (treated/not × event/no event) to make all numbers explicit and visible simultaneously."
    },
    rubric: [
      { id: "fp-028-r1", text: "Distinguishes relative risk reduction from absolute risk reduction" },
      { id: "fp-028-r2", text: "Correctly defines and calculates NNT as 1/ARR" },
      { id: "fp-028-r3", text: "Shows with a concrete example how 50% RRR can mean very different things at different baseline rates" },
      { id: "fp-028-r4", text: "Raises at least two trial-design questions (endpoint type, population, duration, funding)" },
      { id: "fp-028-r5", text: "Reaches the correct conclusion that the claim is uninterpretable without baseline data" }
    ]
  },

  {
    id: "fp-029",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "hard",
    question: "An electric vehicle company argues that EVs have a lower 'total cost of ownership' than gasoline cars over 5 years. Decompose TCO for both vehicle types from first principles and identify which assumptions most dramatically swing the conclusion.",
    context: "The comparison is for a mid-size passenger car driven 15,000 miles/year in the United States.",
    hints: [
      "Total cost of ownership has two main phases: acquisition and operation. List every cost item in each phase for both vehicle types before comparing.",
      "For EVs, the key operational costs are electricity and depreciation. For ICE vehicles, they are fuel and maintenance. But financing costs, insurance, and residual value also matter and are often ignored.",
      "TCO = Purchase price − Residual value + Financing cost + Fuel/energy cost + Maintenance cost + Insurance cost + Registration/taxes − Incentives. For EVs: higher purchase price, lower energy cost (~$0.04/mile vs. ~$0.12/mile), minimal maintenance (no oil changes, fewer brake replacements), but higher insurance and uncertain residual values. The most swing-sensitive assumptions are: electricity price (varies 3× across states), gasoline price (volatile), battery degradation rate (affects residual), and federal/state incentives (up to $7,500)."
    ],
    referenceSolution: {
      approach: "Build a parallel TCO equation for EV and ICE, populate with representative values, and then perform sensitivity analysis on the most uncertain inputs.",
      reasoning: "TCO over 5 years = Acquisition cost − Residual value + Financing cost + Energy cost + Maintenance + Insurance + Registration − Incentives. For a mid-size EV (~$42,000) vs. ICE (~$32,000): Acquisition: EV $42k, ICE $32k — EV is $10k more upfront. Incentives: EV gets up to $7,500 federal tax credit → effective gap ~$2,500. Residual value (5yr): EV ~45% residual = $18.9k; ICE ~50% = $16k — EV advantage ~$2.9k. Financing (5yr loan at 7%): EV costs ~$5k more in interest. Energy: EV at $0.13/kWh, 3.5 miles/kWh → $0.037/mile × 75,000 miles = $2,775. ICE at 32 mpg, $3.50/gal → $0.109/mile × 75,000 = $8,200. Energy savings: ~$5,400. Maintenance: EV saves ~$1,200 (no oil changes, less brake wear). Insurance: EV costs ~$600 more over 5 years. Net EV advantage: −$2,500 (incentive offset) + $2,900 (residual) − $5,000 (financing) + $5,400 (energy) + $1,200 (maintenance) − $600 (insurance) ≈ +$1,400 in EV's favor — roughly breakeven, sensitive to assumptions. Sensitivity: If electricity price doubles (California vs. cheap coal states), EV energy cost rises $2,775 → $5,550, nearly erasing the advantage. If gas rises to $4.50, ICE energy cost jumps to $10,500, making EV clearly superior. Battery replacement risk (if needed in year 4-5, ~$10k) swings the comparison dramatically against EV.",
      commonMistakes: "Comparing sticker price only without incentives or residual value. Ignoring financing cost differences from different loan sizes. Using national average energy prices rather than local prices.",
      alternatives: "Could add opportunity cost of time spent at charging stations vs. gas stations, or model commercial fleet vs. personal use separately."
    },
    rubric: [
      { id: "fp-029-r1", text: "Enumerates all major TCO components for both vehicle types" },
      { id: "fp-029-r2", text: "Includes incentives and residual value, not just operating costs" },
      { id: "fp-029-r3", text: "Calculates approximate energy cost difference with explicit per-mile rates" },
      { id: "fp-029-r4", text: "Identifies at least two assumptions that significantly swing the conclusion" },
      { id: "fp-029-r5", text: "Concludes that the claim is conditionally true rather than universally true" },
      { id: "fp-029-r6", text: "Recognizes that local electricity prices make geography a key variable" }
    ]
  },

  {
    id: "fp-030",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: ["mece-decomposition"],
    difficulty: "hard",
    question: "A logistics company claims that drone delivery will 'never be economically viable' for last-mile delivery. Decompose the economics of last-mile delivery from first principles — for both traditional and drone methods — and evaluate whether the claim holds.",
    context: "The company operates in urban and suburban markets in the US. Current last-mile delivery costs approximately $3–5 per package via van.",
    hints: [
      "Start by decomposing the cost structure of current last-mile delivery — what are the fundamental inputs that determine cost per package?",
      "For drones, the unit economics are fundamentally different: the variable costs (no driver) are lower but the fixed and capital costs (aircraft, maintenance, regulatory compliance, infrastructure) are higher. Compare cost per delivery across different volume scenarios.",
      "Traditional last-mile: cost per package = (driver wage + fuel + vehicle depreciation + insurance + dispatch overhead) / packages per route. Typical van delivers 80-120 packages/day. Drone: cost per delivery = (drone acquisition cost amortized + battery replacement + maintenance + operator oversight + regulatory compliance) / deliveries per day. A drone doing 10 deliveries/day at $0.30/delivery energy cost but $50k capex amortized over 3 years ÷ 3,000 deliveries/year = ~$16.67 capex per delivery. The economics only work at high volumes, in specific geographies (low density paradox: fewer obstacles but longer range; high density: obstacles but short range), and for specific package types (small, time-sensitive, high-value)."
    ],
    referenceSolution: {
      approach: "Build unit economics for both delivery modes, identify the fundamental cost drivers that differ, and determine under what conditions drone delivery achieves cost parity.",
      reasoning: "Traditional last-mile unit economics: Driver cost ~$25/hr, delivers 10 packages/hr → $2.50/pkg labor. Fuel: $0.20/pkg. Vehicle depreciation: $0.30/pkg. Insurance + overhead: $0.50/pkg. Total: ~$3.50/pkg. Drone unit economics: Capex: $15,000 drone, 3-year life, 10 deliveries/day, 300 days/yr → $15,000 / 9,000 = $1.67/delivery. Battery + maintenance: $0.30/delivery. Energy: $0.05/delivery. Remote operator (1 operator oversees 5 drones simultaneously): $25/hr / (5 drones × 6 deliveries/hr) = $0.83/delivery. Regulatory/infrastructure: $0.50/delivery. Total drone: ~$3.35/delivery — already near parity at 10 deliveries/day. At 20 deliveries/day (more realistic with improved routing), capex drops to $0.83/delivery → total ~$2.51/delivery. The 'never viable' claim fails on first-principles analysis. Drones have structural cost advantages (no driver) that become dominant at sufficient utilization. The real constraints are: FAA regulatory limits on beyond-visual-line-of-sight flights, payload limits (~5 lbs covers 80% of e-commerce by item count), weather reliability, and urban obstacle avoidance. These are engineering and regulatory problems, not fundamental economic impossibilities. The claim conflates current viability with permanent impossibility.",
      commonMistakes: "Accepting 'current costs' as permanent rather than recognizing that drone economics improve with scale and technology maturity. Ignoring that drones work best for a specific package weight class. Treating regulatory barriers as permanent.",
      alternatives: "Could model the breakeven volume curve — at what daily delivery count per drone does cost parity occur? This turns the binary claim into a conditional threshold analysis."
    },
    rubric: [
      { id: "fp-030-r1", text: "Correctly decomposes traditional last-mile cost per package into labor, fuel, vehicle, and overhead components" },
      { id: "fp-030-r2", text: "Builds drone unit economics with capex amortization, not just operating costs" },
      { id: "fp-030-r3", text: "Recognizes that utilization rate is the key variable driving drone economics" },
      { id: "fp-030-r4", text: "Distinguishes between current constraints (regulatory, technical) and permanent economic impossibility" },
      { id: "fp-030-r5", text: "Identifies the payload weight class where drones are most competitive" },
      { id: "fp-030-r6", text: "Refutes the 'never viable' claim with a specific cost-parity scenario" }
    ]
  },

  // ── CHALLENGING DEFAULTS (fp-031 to fp-035) ──────────────────────────────

  {
    id: "fp-031",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: [],
    difficulty: "medium",
    question: "Most companies schedule meetings in 30- or 60-minute blocks. Challenge this default. What assumptions underlie it, and what would meeting design look like if you started from scratch?",
    context: undefined,
    hints: [
      "Before redesigning meetings, identify why 30/60 minutes became the standard. What technology or system created this convention?",
      "Ask: what is a meeting actually trying to accomplish? Different purposes (decision, update, brainstorm, relationship) may have different optimal durations.",
      "Calendar software defaults drove the 30/60 convention — not human attention spans or decision science. From first principles: a meeting should last exactly as long as its agenda requires. Research suggests 18-25 minutes matches peak attention for most cognitive tasks. Default to 25 or 50 minutes (leaving transition time). Structure by purpose: status updates can be async; decision meetings need only the decision-makers; brainstorms benefit from a hard time-box."
    ],
    referenceSolution: {
      approach: "Identify the origin and assumptions of the 30/60 convention, then derive meeting design from the actual purposes meetings serve.",
      reasoning: "The 30/60-minute default comes from early calendar software (Outlook, Google Calendar) that used 30-minute grid increments. This is a technology artifact, not a finding from decision science or productivity research. Underlying assumptions: (1) all meetings are the same type, (2) people transition instantly between meetings, (3) longer is more productive. All three are wrong. From first principles: A meeting is a synchronous coordination mechanism. It has at least four distinct types — information sharing (better done async via memo), decision-making (needs only decision-makers, often 20 min is enough), creative generation (benefits from time-boxing), relationship building (less structured, but can be shorter). Optimal duration should be: purpose-driven (set time by agenda items, not calendar slots), attention-aware (most people's focus drops after 20-25 min without a break), transition-aware (25/50-minute defaults instead of 30/60 leave buffer). Additional defaults to challenge: requiring attendance of all invitees, holding meetings at fixed times rather than when decision is needed, and not publishing a pre-read to allow the meeting to focus on decisions rather than information.",
      commonMistakes: "Focusing only on duration without questioning whether the meeting should exist at all. Treating the challenge as merely aesthetic rather than grounded in cognitive science.",
      alternatives: "Amazon's 'no PowerPoint, silent reading of 6-page memo' format is a first-principles redesign that front-loads information and compresses meeting time to discussion only."
    },
    rubric: [
      { id: "fp-031-r1", text: "Correctly identifies calendar software as the origin of the 30/60 convention" },
      { id: "fp-031-r2", text: "Distinguishes at least three different meeting purposes with different optimal designs" },
      { id: "fp-031-r3", text: "Proposes a concrete alternative (e.g., 25/50 min, agenda-driven duration)" },
      { id: "fp-031-r4", text: "Questions at least one other default beyond duration (attendance, format, necessity)" }
    ]
  },

  {
    id: "fp-032",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: ["business-model-evaluation"],
    difficulty: "medium",
    question: "Most subscription businesses default to monthly and annual billing cycles. Challenge this default from first principles. Under what circumstances would radically different billing structures be superior?",
    context: undefined,
    hints: [
      "Ask why monthly/annual became the default — what were the operational constraints that made it the norm? Those constraints may no longer apply.",
      "Think about the relationship between billing cycle and the unit of value the customer actually receives. What if the value is delivered in bursts, or is highly variable?",
      "Monthly/annual billing emerged from bank processing limitations and billing system complexity. From first principles, billing should align with value delivery. Alternatives: usage-based (AWS, Twilio) — customer pays per unit consumed, better aligns with variable value; outcome-based — customer pays when a result is achieved (e.g., recruiting firm paid on hire); milestone-based for project work; dynamic pricing by demand (airline model). Each alternative is optimal for different customer relationships: high-variance users benefit from usage-based; risk-averse buyers benefit from outcome-based; predictable-value customers prefer subscription."
    ],
    referenceSolution: {
      approach: "Trace the origin of subscription billing conventions, then derive billing models from first principles based on the structure of value delivery.",
      reasoning: "Monthly/annual billing became default because: (1) manual invoicing was costly so batching made sense, (2) banking/ACH systems had limited frequency, (3) SaaS copied enterprise software perpetual license patterns. None of these constraints meaningfully apply today with Stripe/payment APIs. From first principles, the optimal billing model matches the timing and variability of value delivered. Value can be: constant (email client → subscription makes sense), variable (cloud compute → usage-based is superior), binary/event-driven (lead generation → per-lead or per-close), uncertain (consulting → retainer + success fee). Superior alternatives by scenario: Usage-based billing (Twilio, Snowflake) — aligns cost with value, reduces barrier to entry, but creates revenue unpredictability for the vendor. Outcome-based billing — highest alignment with customer success, but requires defining and measuring outcomes, and creates risk for the vendor. Prepaid credits (many API companies) — gives flexibility with cash flow predictability. Seat-based vs. usage-based — seat-based (Salesforce) creates expansion incentive via seats; usage-based creates expansion via volume. The 'right' billing model is a strategic choice that shapes customer behavior, not just a pricing convention.",
      commonMistakes: "Treating billing cycle as a purely financial decision rather than a model of the customer relationship. Ignoring that billing model affects customer behavior (usage-based may reduce usage; seat-based encourages sprawl).",
      alternatives: "Could analyze from the vendor's perspective: subscription provides revenue predictability; usage-based provides faster adoption but volatile revenue."
    },
    rubric: [
      { id: "fp-032-r1", text: "Identifies the historical operational reasons for monthly/annual defaults" },
      { id: "fp-032-r2", text: "Frames billing model as a function of value delivery structure" },
      { id: "fp-032-r3", text: "Describes at least three distinct billing model alternatives with real examples" },
      { id: "fp-032-r4", text: "Matches each billing model to the type of customer relationship it best suits" },
      { id: "fp-032-r5", text: "Notes that billing model shapes customer behavior, not just revenue timing" }
    ]
  },

  {
    id: "fp-033",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: ["structured-argumentation"],
    difficulty: "hard",
    question: "Higher education institutions default to 4-year degree programs. A policymaker proposes radical restructuring. Challenge every major assumption embedded in the 4-year degree model and construct what post-secondary education might look like built from first principles.",
    context: "The policymaker is focused on workforce outcomes and economic mobility, not purely academic enrichment.",
    hints: [
      "List the assumptions baked into the 4-year model: continuous enrollment, residential setting, front-loaded credentials, fixed curriculum, age-18-22 cohort, single institution. Challenge each one.",
      "Ask: what is education actually trying to produce? Separate the signal function (credential that employers use to filter) from the skill function (actual capability development) from the network function (peer relationships). Each may be optimally delivered differently.",
      "From first principles: if the goal is workforce outcomes, education should be: modular (stackable credentials rather than one 4-year block), continuous (learning integrated throughout a career), outcome-verified (employers trust demonstrated skills, not seat time), and accessible (asynchronous, low-cost, portable). The 4-year residential model bundles signal + skill + network into a single expensive package. Unbundling allows each to be delivered more efficiently."
    ],
    referenceSolution: {
      approach: "Enumerate the embedded assumptions of the 4-year model, challenge each against the stated goal of workforce outcomes, and construct a first-principles alternative.",
      reasoning: "Embedded assumptions in the 4-year model: (1) All learning should happen in ages 18-22 — challenged by research showing adults learn more effectively with context and motivation; (2) 4 years is the right duration — based on historical liberal arts curriculum design, not workforce needs; (3) Residential setting is required — challenged by demonstrated effectiveness of online learning and high residential cost; (4) Front-loaded credential — degree awarded at end creates all-or-nothing outcome with high dropout cost; (5) Single institution provides all education — ignores specialization advantages; (6) Seat-time measures competence — challenged by competency-based education research; (7) Homogeneous cohort — all students take similar courses regardless of prior knowledge or goals. Against workforce outcomes goal: The degree functions as a signal to employers (filter for conscientiousness, intelligence, completeness) and a skill set. From first principles: Signal function → replace with portable, verified skill credentials (like GitHub for skills, or IBM's Open Badges). Skill function → modular, competency-based, stackable credentials. Continuous, not front-loaded. Network function → professional associations, bootcamp cohorts, apprenticeships. Economic model: income share agreements instead of upfront tuition aligns institution incentives with outcomes. First-principles alternative: Year 0-1: core competencies (communication, quantitative reasoning, systems thinking) — modular, online, competency-verified. Year 1-2: applied apprenticeship in chosen domain — employer-partnered, paid. Year 2+: continuous stackable credentials as career advances. This eliminates the $200k cost, the dropout cliff, and the 4-year interruption of earning.",
      commonMistakes: "Challenging only duration while leaving other assumptions (residential, sequential, single institution) intact. Conflating the credential signal with actual skill acquisition — these are separable and may require different solutions.",
      alternatives: "Germany's dual-system apprenticeship and Singapore's SkillsFuture program are real-world examples of first-principles redesigns worth referencing."
    },
    rubric: [
      { id: "fp-033-r1", text: "Identifies at least 5 distinct embedded assumptions in the 4-year model" },
      { id: "fp-033-r2", text: "Separates the signal, skill, and network functions of education" },
      { id: "fp-033-r3", text: "Challenges each assumption against the workforce outcomes goal specifically" },
      { id: "fp-033-r4", text: "Constructs a coherent alternative model with a concrete structure" },
      { id: "fp-033-r5", text: "Addresses the economic model (how it is paid for), not just the pedagogical model" },
      { id: "fp-033-r6", text: "Avoids merely proposing online versions of existing courses — actually restructures the model" }
    ]
  },

  {
    id: "fp-034",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: ["market-dynamics"],
    difficulty: "hard",
    question: "The default assumption in most industries is that businesses should maximize revenue. Challenge this default. What are the hidden assumptions behind revenue maximization as a goal, and when is it the wrong objective function entirely?",
    context: "Consider this across multiple business contexts: early-stage startup, mature public company, non-profit, and professional services firm.",
    hints: [
      "Revenue maximization is one objective function, but it is derived from deeper goals. Ask: what is the actual terminal objective? Shareholder value? Long-term survival? Mission impact? Revenue is usually a proxy — when does the proxy diverge from the actual goal?",
      "Think about the constraints and time horizons that make revenue maximization lead to bad outcomes. Consider: customer lifetime value vs. short-term revenue extraction, market share vs. margin, brand vs. revenue, mission vs. monetization.",
      "Revenue maximization can destroy value when: (1) it sacrifices margin (revenue with no profit is destruction of capital), (2) it extracts from customers rather than creating value (undermines LTV), (3) it misaligns incentives in professional services (billing hours, not solving problems), (4) it crowds out mission in non-profits. The correct objective function depends on stage, ownership structure, competitive position, and time horizon."
    ],
    referenceSolution: {
      approach: "Identify the assumptions embedded in revenue maximization, show when the proxy diverges from the true goal, and derive the correct objective function for each context.",
      reasoning: "Revenue maximization assumes: (1) revenue correlates with value created, (2) maximizing revenue now maximizes long-term outcomes, (3) all revenue is equally good, (4) revenue is the binding constraint on success. Each assumption fails in specific contexts. Early-stage startup: Revenue maximization too early can lock in the wrong customer segment, optimize the wrong product feature, and create revenue that depends on high-touch delivery (unscalable). Better objective: product-market fit signals (retention, NPS, engagement). Revenue is dangerous if it masks low retention. Mature public company: Revenue without margin improvement destroys shareholder value. The correct objective is risk-adjusted free cash flow or ROIC, not revenue. Companies that maximize revenue by discounting destroy margin and long-term enterprise value. Non-profit: Revenue (donations, grants) maximization can crowd out mission delivery — programs are designed to attract donor preferences rather than serve beneficiaries. Better objective: mission outcomes per dollar. Professional services: Billing-hours maximization (a revenue proxy) creates perverse incentives to prolong engagements rather than solve problems efficiently. Better objective: client outcomes achieved per engagement. General principle: revenue is a means, not an end. The correct objective function is always the terminal goal (survival, mission, shareholder value, client outcomes) measured directly. Revenue is a useful proxy only when it correlates tightly with the terminal goal — which it often does not.",
      commonMistakes: "Arguing that revenue is always wrong rather than showing when specifically the proxy diverges. Ignoring that for many businesses at many stages, revenue and value creation are tightly correlated.",
      alternatives: "Game theory perspective: in competitive markets, revenue maximization can be a dominant strategy even if suboptimal in isolation, because competitors doing it force all players to follow."
    },
    rubric: [
      { id: "fp-034-r1", text: "Identifies revenue as a proxy for a deeper terminal objective" },
      { id: "fp-034-r2", text: "Shows at least two distinct contexts where the proxy diverges from the true goal" },
      { id: "fp-034-r3", text: "Proposes a superior objective function for each context analyzed" },
      { id: "fp-034-r4", text: "Covers at least 3 of the 4 contexts specified (startup, public company, non-profit, professional services)" },
      { id: "fp-034-r5", text: "Avoids the trap of claiming revenue is always the wrong objective" }
    ]
  },

  {
    id: "fp-035",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: [],
    difficulty: "hard",
    question: "Hospitals are designed around the assumption that patients come to care. Challenge this architectural and operational default from first principles. What would healthcare delivery look like if you inverted the assumption — care comes to the patient?",
    context: "Consider technological capabilities available today (remote monitoring, telehealth, AI diagnostics, portable lab devices) as available tools. Focus on the US healthcare system.",
    hints: [
      "Start by asking why the hospital-centric model exists. What were the constraints (equipment cost, specialist concentration, emergency response) that made geographic centralization necessary? Which of those constraints still hold today?",
      "Separate the functions of a hospital: acute emergency care, specialist consultation, diagnostic testing, medication administration, monitoring, rehabilitation, chronic disease management. Which of these actually require physical centralization?",
      "From first principles: hospitals concentrate expensive equipment, specialists, and sterile environments because historically those couldn't be distributed. Today: portable diagnostics (Theranos failed but others succeed), wearable monitoring (continuous vitals), telehealth (specialist video consultation), at-home infusion (IV therapy already delivered at home). The only functions that fundamentally require centralization: major surgery (requires sterile OR, anesthesia, immediate response), trauma (requires immediate multi-specialty response), and high-acuity intensive care. Chronic disease management, monitoring, post-surgical recovery, and many diagnostics do not."
    ],
    referenceSolution: {
      approach: "Identify which hospital functions require physical centralization by necessity vs. convention, then design a distributed-first healthcare model for those that do not.",
      reasoning: "Why hospitals exist: Equipment was too expensive to distribute (MRI: $1-3M), specialists couldn't be in multiple places, sterile environments required fixed infrastructure, and emergency response needed geographic concentration. Which constraints still apply? Equipment cost: portable ultrasound now costs $2,000 (Butterfly iQ); lab-on-chip diagnostics advancing rapidly; remote EKG via Apple Watch is FDA-cleared. Specialists: video consult now resolves 70-80% of primary care needs per studies. Sterile environments: still required for surgery. Emergency response: still requires proximity. Functions that do NOT require centralization: Chronic disease management (diabetes, hypertension, heart failure) — continuous wearable monitoring + at-home medication delivery + telehealth follow-up is demonstrably superior for these patients. Post-surgical recovery — hospital-acquired infections kill ~100,000 Americans/year; home recovery for appropriate cases reduces this. Diagnostics — portable devices, mail-in lab panels (Quest, LabCorp already do this). Mental health — telehealth has better outcomes for many conditions. Functions that DO require centralization: Major surgery (sterile OR, anesthesia, immediate response capability), trauma care, intensive care for acute decompensation. First-principles model: Distributed monitoring and primary care layer (wearables + telehealth + home diagnostics). Neighborhood micro-clinics for hands-on examination and minor procedures. Regional specialty hubs for complex diagnostics. Centralized surgical centers for major procedures. Distributed emergency response with rapid transport protocol. This model eliminates the reason ~70% of hospitalizations occur — monitoring failures in chronic disease — and reduces hospital exposure for non-acute patients.",
      commonMistakes: "Assuming all care can be distributed — ignoring the genuine physical requirements of surgery and trauma. Ignoring reimbursement and regulatory barriers as real implementation constraints even if they are not first-principles constraints. Forgetting that social determinants (patients who can't manage home care) affect which populations benefit.",
      alternatives: "Kaiser Permanente's integrated model and Denmark's home-hospital program are real-world experiments in distributed care worth comparing."
    },
    rubric: [
      { id: "fp-035-r1", text: "Correctly identifies the historical constraints that created hospital centralization" },
      { id: "fp-035-r2", text: "Separates hospital functions into 'must be centralized' vs. 'convention-only centralized'" },
      { id: "fp-035-r3", text: "Uses at least three specific current technologies to support distribution of care" },
      { id: "fp-035-r4", text: "Proposes a layered distributed model with a coherent structure" },
      { id: "fp-035-r5", text: "Acknowledges which functions genuinely require centralization (surgery, trauma, ICU)" },
      { id: "fp-035-r6", text: "Notes at least one real-world constraint (regulatory, social, economic) on implementation" }
    ]
  },

  // ── ANALOGICAL REASONING (fp-036 to fp-040) ──────────────────────────────

  {
    id: "fp-036",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: ["competitive-analysis"],
    difficulty: "medium",
    question: "A fintech startup is trying to understand how to gain adoption when incumbents (big banks) dominate the market. What analogies from other industries offer genuine structural insight into how challengers displace entrenched incumbents?",
    context: undefined,
    hints: [
      "Think about industries where a challenger with a structurally different model displaced an incumbent — not just with a better product, but by serving a different customer first.",
      "Clayton Christensen's disruption model is one framework. What is the common pattern: who does the disruptor serve first, and how does this change over time?",
      "The most useful analogies share the structural feature of: challenger serves over-looked/underserved segment → incumbents ignore because it's low-margin → challenger improves → challenger moves upmarket. Examples: Netflix vs. Blockbuster (started with niche mail-rental), Schwab vs. full-service brokers (started with self-directed investors), Southwest vs. legacy airlines (started with short-haul point-to-point). The fintech analog: serve unbanked/underbanked first (no credit history required), grow into mainstream as product matures."
    ],
    referenceSolution: {
      approach: "Identify analogies with the same structural disruptive pattern and extract the transferable mechanism, not just the surface similarity.",
      reasoning: "The key structural question for any disruption analogy is: what is the mechanism, not just the outcome? Useful analogies: (1) Netflix vs. Blockbuster — Netflix started with a niche (people who wanted long-tail DVDs, no late fees) that Blockbuster ignored because it was low-revenue. Netflix improved → DVD → streaming → original content → mainstream. Mechanism: start where incumbent is indifferent, improve, move upmarket. Fintech analog: serve the unbanked (Chime, Cash App) where banks don't compete because margins are low. (2) Southwest Airlines vs. legacy carriers — Southwest didn't try to beat United on transatlantic routes; it created point-to-point short-haul with lower costs and attracted leisure travelers who previously drove. Mechanism: attack a dimension incumbents don't optimize for (convenience, price) by having a structurally different cost model. Fintech analog: serve customers who find banks' branch-heavy model inconvenient (mobile-native generation). (3) Schwab vs. full-service brokers — competed on price for self-directed investors that full-service brokers happily ceded. Mechanism: serve the self-service segment that incumbents treat as low-value. Fintech analog: personal finance tools for users who don't want relationship banking. Common structural insight: incumbents' strength (branch network, relationship managers, compliance infrastructure) is also their cost disadvantage. Challengers win by finding the customer segment where incumbent's cost structure is a liability, not an asset.",
      commonMistakes: "Using analogies at the surface level ('Netflix disrupted Blockbuster, therefore we'll disrupt banks') without extracting the structural mechanism. Ignoring that banking has regulatory moats that most disrupted industries lack.",
      alternatives: "The Innovator's Dilemma framework formalizes these analogies into a predictive model — worth citing as the meta-framework unifying the examples."
    },
    rubric: [
      { id: "fp-036-r1", text: "Identifies at least two structural analogies with different surface domains" },
      { id: "fp-036-r2", text: "Extracts the common mechanism rather than just describing each analogy" },
      { id: "fp-036-r3", text: "Applies the mechanism specifically to the fintech vs. bank context" },
      { id: "fp-036-r4", text: "Notes the limits of the analogy (regulatory environment differs)" }
    ]
  },

  {
    id: "fp-037",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: [],
    difficulty: "medium",
    question: "An urban planner is trying to reduce traffic congestion. What analogies from non-transportation systems — fluid dynamics, network engineering, economics — illuminate the problem and suggest non-obvious solutions?",
    context: undefined,
    hints: [
      "Traffic behaves like a fluid in some ways but not others. Where does the analogy hold and where does it break down? The breakdown points are often where the insight lives.",
      "Consider the internet: it also has congestion problems with many parallel routes and dynamic demand. How did engineers solve network congestion? What was the key insight?",
      "Fluid dynamics analogy: traffic flows like fluid, jams spread like compression waves — explains why slowing down slightly can prevent stop-and-go waves (Sugiyama experiment). Network engineering analogy: TCP congestion control uses price signals (packet drops) to regulate demand — suggests congestion pricing is structurally analogous and works for the same reason. Economics analogy: tragedy of the commons — free roads are a shared resource without pricing, leading to overconsumption. Analogy to fishing quotas or carbon credits suggests tradeable road access rights."
    ],
    referenceSolution: {
      approach: "Apply three distinct analogies, extract the mechanism each reveals, and derive a concrete traffic intervention from each.",
      reasoning: "Fluid dynamics analogy: Traffic flow obeys similar equations to fluid dynamics at high density. A key insight: traffic jams propagate backward as compression waves — a jam can exist long after the initial incident. This explains why 'phantom jams' occur. Implication: if all cars maintain slightly larger gaps (like adaptive cruise control), compression waves don't form. Intervention: mandate or incentivize adaptive cruise control; design merge zones to smooth flow rather than compress it. Where analogy breaks down: cars have decision-making drivers; fluid molecules don't — individual behavior matters in ways fluid behavior doesn't. Network engineering analogy: The internet solved congestion by making congestion visible and costly (TCP's congestion window shrinks when packets drop — effectively a price signal). Roads have no price signal — using a congested road costs the driver no more than using an empty road, yet imposes costs on all other users. Intervention: congestion pricing (London, Stockholm) is directly analogous to TCP congestion control. The price signal reallocates usage to those who value it most and to off-peak times. Economics (commons) analogy: Free roads are like open-access fisheries — tragedy of the commons predicts overuse. Solution analogy: fishing quotas → tradeable road access rights for peak hours. Singapore does this with Electronic Road Pricing. Where this analogy extends: it also implies that adding road capacity (like adding fishing boats) doesn't solve the problem — induced demand fills the capacity, just as more boats deplete fish faster (Braess's paradox in traffic).",
      commonMistakes: "Using only the fluid analogy without noting where it breaks down (the agency of drivers). Proposing capacity expansion (more lanes) without noting the induced demand problem, which the commons analogy predicts.",
      alternatives: "Biological analogy: ant colony trail optimization suggests dynamic routing (GPS rerouting already does this) — ants adjust pheromone trails based on congestion, creating distributed optimization."
    },
    rubric: [
      { id: "fp-037-r1", text: "Applies at least two distinct non-transportation analogies" },
      { id: "fp-037-r2", text: "Extracts a concrete, non-obvious intervention from each analogy" },
      { id: "fp-037-r3", text: "Notes where at least one analogy breaks down and why that matters" },
      { id: "fp-037-r4", text: "Connects the commons analogy to induced demand (Braess's paradox or equivalent)" }
    ]
  },

  {
    id: "fp-038",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: ["cross-domain-reasoning"],
    difficulty: "hard",
    question: "Evaluate the following analogy: 'Training a neural network is analogous to evolution by natural selection.' Where does this analogy provide genuine insight, and where does it mislead? Use your analysis to derive principles for when analogies are useful thinking tools vs. when they become traps.",
    context: undefined,
    hints: [
      "Map the components of the analogy explicitly: what corresponds to what? Genome, fitness, selection pressure, mutation, generations — what are the neural network equivalents?",
      "Test each mapping for whether the underlying mechanism is the same or just superficially similar. The analogy is useful where mechanisms match; it misleads where only the surface pattern matches.",
      "Mapping: weights ↔ genome, loss function ↔ fitness, gradient descent ↔ selection, weight updates ↔ mutation. Where it holds: both optimize against an environment signal, both involve iterative refinement, both can get stuck in local optima. Where it breaks: gradient descent is directed (uses gradient information); natural selection is undirected (random mutation). This means gradient descent is vastly more efficient but also more fragile to distribution shift. No analog to sexual recombination in standard backprop. No analog to neutral drift. The analogy misleads anyone who assumes evolution's robustness properties (genetic diversity, redundancy) transfer to neural nets."
    ],
    referenceSolution: {
      approach: "Explicitly map the analogy, test each element of the mapping for mechanistic equivalence, identify where it illuminates vs. misleads, and derive meta-principles for analogical reasoning.",
      reasoning: "Step 1: Map the analogy. Neural net ↔ Evolution. Weights ↔ Genome. Loss function ↔ Fitness function. Gradient descent ↔ Selection pressure. Weight update ↔ Mutation. Training epoch ↔ Generation. Generalization ↔ Fitness in novel environment. Step 2: Test each mapping. Weights ↔ Genome: Partially valid — both encode learned information in a structure that can be modified. But genome is discrete and modular (genes can be recombined); weights are continuous and entangled. Gradient descent ↔ Selection: Here the analogy BREAKS. Evolution selects randomly (mutations are undirected); gradient descent uses derivative information to update weights in the direction of improvement. This is a fundamental mechanistic difference. It means gradient descent is orders of magnitude more efficient per iteration but also brittle to non-smooth loss landscapes in ways natural selection is not (since natural selection samples the space rather than following a gradient). Generalization ↔ Fitness in novel environment: Partially valid — both face 'distribution shift' problems. But evolution has mechanisms for robustness (redundancy, sexual recombination, neutral drift) that gradient descent lacks. Step 3: Where the analogy helps. Intuitively grasping that neural nets 'learn' by iterative refinement against a signal. Understanding overfitting (organism so optimized to training environment it fails in novel environments — like invasive species specialized to one niche). Step 4: Where the analogy misleads. Assuming neural nets are robust like evolved organisms (they are not — they fail on trivially modified inputs). Assuming more 'generations' (epochs) always improve fitness (overfitting is the opposite). Assuming random restarts help the same way genetic diversity does (architecturally different). Meta-principles for when analogies are valid: (1) Map explicitly — don't just use the analogy intuitively. (2) Test mechanistic equivalence, not surface similarity. (3) Identify the break-points — these are where the analogy actively misleads. (4) Use analogies to generate hypotheses, not conclusions.",
      commonMistakes: "Accepting the analogy wholesale because it 'feels right.' Failing to test whether the underlying mechanisms match or just the surface patterns. Using the analogy to make predictions about neural nets that only hold for evolution (e.g., assuming diversity improves robustness).",
      alternatives: "A better analogy for gradient descent specifically might be water finding the lowest point in a landscape — captures the directedness and local-optima traps better than evolution does."
    },
    rubric: [
      { id: "fp-038-r1", text: "Explicitly maps at least 4 components of the analogy" },
      { id: "fp-038-r2", text: "Correctly identifies that gradient descent is directed while natural selection is undirected — the key mechanistic break" },
      { id: "fp-038-r3", text: "Identifies at least one place the analogy illuminates (overfitting, iterative refinement)" },
      { id: "fp-038-r4", text: "Identifies at least one place the analogy misleads (robustness properties don't transfer)" },
      { id: "fp-038-r5", text: "Derives at least two meta-principles for evaluating analogies" },
      { id: "fp-038-r6", text: "Proposes a more accurate analogy for the mechanism gradient descent actually uses" }
    ]
  },

  {
    id: "fp-039",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: ["assumption-validation"],
    difficulty: "hard",
    question: "A management consultant proposes: 'Running a country's economy is like running a household budget — you should never spend more than you earn.' Deconstruct this analogy rigorously. Where does it hold, where does it fail, and what does the failure tell us about the underlying economics?",
    context: undefined,
    hints: [
      "Start by mapping the analogy: what in a national economy corresponds to household income, household spending, household debt? Test whether these are structurally equivalent.",
      "A household cannot print its own currency, cannot significantly affect the interest rates it pays, and does not generate income for others through its spending. A national government can do all three. These differences are mechanistically significant — what economic principles do they open up?",
      "Key breaks in the analogy: (1) Government spending becomes someone else's income — a household cutting spending helps its balance sheet but a government cutting in a recession reduces GDP and tax revenues, potentially worsening the deficit. (2) A government that issues its own currency can never default in nominal terms the way a household can. (3) Household debt is a claim on future household income; government debt is a claim on future national income, which grows. (4) Interest rate on government debt is not set by a lender in the same way — it is influenced by central bank policy. The analogy holds only for: a government that cannot issue its own currency (e.g., Eurozone members), or for very long time horizons where debt sustainability is genuinely in question."
    ],
    referenceSolution: {
      approach: "Map the analogy components, test each for structural equivalence, identify the mechanistic breaks, and derive the economic principles that the analogy obscures.",
      reasoning: "Mapping: Household income ↔ Government tax revenue. Household spending ↔ Government expenditure. Household savings ↔ Budget surplus. Household debt ↔ Government debt. Household bankruptcy ↔ Government default. Test each: Income: A household's income is independent of its spending. A government's 'income' (tax revenue) is partially determined by its spending — spending in a recession raises GDP, which raises taxable income, which partially offsets the deficit. This is the fiscal multiplier effect. The analogy assumes income independence, which is wrong for the macroeconomy. Debt: Household debt is owed to external creditors and is denominated in someone else's currency. A government that issues its own currency (US, UK, Japan) can always service nominal debt by creating money. This creates inflation risk, not solvency risk — fundamentally different from household insolvency. Currency-issuing governments have never 'run out of money' to service domestic-currency debt. Eurozone governments (Greece, Italy) don't issue their own currency → the analogy partially holds for them. Spending: A household cutting spending is a private decision. A government cutting spending reduces demand in the whole economy — the paradox of thrift applies at aggregate level. Everyone saving simultaneously reduces income for everyone. Time horizon: Household debt grows as a burden relative to household income. Government debt relative to GDP can shrink if GDP grows faster than the debt — a dynamic unavailable to households. Where the analogy holds: The need to avoid interest burden growing faster than revenue. The basic idea that debt has a cost and limits. Constraint on non-currency-issuing governments. What the failure reveals: Macroeconomics is not microeconomics scaled up. Fallacy of composition — what is true for an individual unit can be false for the aggregate. Government fiscal policy has demand effects that household finance does not.",
      commonMistakes: "Accepting the analogy because it feels intuitively correct. Failing to distinguish currency-issuing from non-currency-issuing governments. Ignoring the fiscal multiplier (spending creates income).",
      alternatives: "The correct analogy for a currency-issuing government is closer to a bank that issues its own IOUs — it faces inflation constraints, not solvency constraints. This analogy better captures the actual economic mechanics."
    },
    rubric: [
      { id: "fp-039-r1", text: "Explicitly maps at least 4 household-to-government components" },
      { id: "fp-039-r2", text: "Identifies that government spending affects government income (fiscal multiplier) — a break in income independence" },
      { id: "fp-039-r3", text: "Distinguishes currency-issuing governments from non-issuing (Eurozone) — correctly limits where the analogy holds" },
      { id: "fp-039-r4", text: "Identifies the paradox of thrift as a reason household and government saving logic invert" },
      { id: "fp-039-r5", text: "Derives the meta-principle: fallacy of composition means household logic cannot scale to aggregate" },
      { id: "fp-039-r6", text: "Proposes a more accurate analogy (bank, currency issuer, or equivalent)" }
    ]
  },

  {
    id: "fp-040",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: [],
    difficulty: "hard",
    question: "You are advising a city trying to revitalize a declining downtown area. A colleague proposes: 'Cities are like ecosystems — they need biodiversity to thrive.' Critically evaluate this analogy as a design tool. What genuine urban planning principles does it support, and where does following the analogy lead you astray?",
    context: "The city has a declining downtown with vacant storefronts, low foot traffic, and a reputation for being unsafe. The mayor wants a revitalization strategy.",
    hints: [
      "Map the analogy: what in urban life corresponds to species, niches, food chains, keystone species, invasive species, succession? Test whether the mechanisms transfer.",
      "The analogy supports: mixed use (like multi-species ecosystems are more stable), avoiding monocultures (like single-tenant retail strips), and keystone anchors (like anchor tenants that generate foot traffic for nearby businesses). Where does it fail?",
      "The analogy misleads when it implies urban systems are self-organizing without design intervention (ecosystems have no planner), or when 'natural succession' is used to justify gentrification as inevitable. Key break: ecosystems have no concept of equity, justice, or political legitimacy. Urban planning must incorporate these — the analogy obscures them."
    ],
    referenceSolution: {
      approach: "Map the analogy, test mechanisms for equivalence, identify useful insights it generates, and identify where the analogy actively misleads urban planners.",
      reasoning: "Mapping: Businesses ↔ Species. Building types (residential, retail, office, civic) ↔ Ecological niches. Foot traffic ↔ Energy flow. Anchor tenants (grocery, transit hub) ↔ Keystone species. Chains/franchises ↔ Invasive species. Vacant lots ↔ Disturbance zones. Succession: farmland → shrubland → forest ↔ industrial district → artist loft → luxury condo. Where the analogy holds and generates insight: Mixed use: Monoculture ecosystems (corn fields) are fragile; single-use zoning (pure office districts) creates 9-to-5 dead zones — the analogy correctly predicts that mixed use creates more resilient foot traffic at different times of day. This is Jane Jacobs's empirical finding, and the ecosystem analogy supports it. Keystone species: In ecosystems, some species disproportionately structure the community (wolves in Yellowstone). Urban equivalents: a grocery store, transit stop, or cultural institution attracts secondary businesses (cafes, dry cleaners) that could not survive without the anchor. Planning implication: identify and subsidize keystone anchors, not generic small businesses. Edge effects: In ecology, edges between biomes have highest biodiversity. Urban equivalent: blocks at the intersection of different use types (residential-commercial boundary) have highest foot traffic and vitality. Where the analogy fails and misleads: Self-organization: Ecosystems are self-organizing; cities require deliberate planning and governance. The analogy can lead planners to be passive ('let organic growth happen') when active intervention is needed. Succession as inevitability: Ecological succession is apolitical — plants don't have rights. Applying 'succession' logic to neighborhoods implies gentrification is natural and inevitable, obscuring political choices about who benefits and who is displaced. Equity blindness: Ecosystems have no justice dimension. The most 'biodiverse' urban ecosystem might displace low-income residents — ecologically optimal but socially unjust. The analogy cannot detect this problem. Competition logic: Ecosystems select for fitness; urban policy has equity goals that explicitly protect less 'fit' businesses (small local shops vs. chains). Planning application: Use the ecosystem analogy for physical design decisions (mixed use, anchors, edge activation) but not for distributional or equity decisions, where it actively misleads.",
      commonMistakes: "Either accepting the analogy wholesale or rejecting it entirely rather than identifying its selective usefulness. Missing the equity blindness problem — the most common failure mode of applying ecological thinking to social systems.",
      alternatives: "Jane Jacobs's four conditions for urban vitality (mixed primary uses, short blocks, aged buildings, sufficient density) are a first-principles urban theory that the ecosystem analogy partially captures but does not fully substitute for."
    },
    rubric: [
      { id: "fp-040-r1", text: "Maps at least 4 ecosystem components to urban equivalents" },
      { id: "fp-040-r2", text: "Identifies keystone species / anchor tenant as a genuinely useful insight" },
      { id: "fp-040-r3", text: "Identifies mixed use / monoculture as a genuinely useful insight" },
      { id: "fp-040-r4", text: "Identifies that self-organization logic misleads planners toward passivity" },
      { id: "fp-040-r5", text: "Identifies equity blindness as the fundamental gap — the analogy cannot capture justice dimensions" },
      { id: "fp-040-r6", text: "Gives a concrete recommendation for when to use vs. not use the analogy" }
    ]
  },

  // ── REBUILDING MENTAL MODELS (fp-041 to fp-045) ───────────────────────────

  {
    id: "fp-041",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: [],
    difficulty: "medium",
    question: "Most people's mental model of 'productivity' is: work harder and longer → get more done. Rebuild this mental model from first principles using what is actually known about human cognitive performance.",
    context: undefined,
    hints: [
      "Start by questioning the assumed relationship between time/effort input and output. Is output a linear function of hours worked? What does the empirical evidence say?",
      "Decompose 'cognitive work output.' It is not uniform — focus quality, decision quality, and creative insight all vary across the day and with accumulated fatigue. A better model must account for this variance.",
      "The correct model: Output = Time × Focus quality × Energy level × Task-skill match. All four variables must be managed. Focus quality degrades after ~90 minutes (ultradian rhythm), decision quality degrades with decision fatigue, creative insight is highest in early morning for morning chronotypes. Implication: protecting one 4-hour deep work block often outperforms 8 hours of fragmented work. Effort is not the leverage point — focus and recovery are."
    ],
    referenceSolution: {
      approach: "Replace the hours-input mental model with a multiplicative model that accounts for focus, energy, and task type, then derive the counterintuitive implications.",
      reasoning: "The flawed model: Output = Hours × Effort rate. This is additive and linear — assumes more input time directly adds output. The rebuilt model: Output = f(Focus depth × Energy level × Task-skill alignment × Uninterrupted time). This is multiplicative — any factor at zero collapses output. Key empirical findings that rebuild the model: (1) K. Anders Ericsson's research: elite performers (musicians, chess players, athletes) average 4 hours of deliberate practice per day — adding more hours degrades quality rather than improving it. (2) Ultradian rhythm: human attention cycles ~90 minutes of high focus followed by a need for rest. Working through this cycle degrades subsequent performance. (3) Decision fatigue (Baumeister): judges approve more parole at the start of the day and after breaks; quality decisions require glucose and rest. (4) Interruption cost: a task switch costs ~20 minutes of refocus time. An 8-hour day with 10 interruptions may produce only 2 hours of effective deep work. Rebuilt model implications: (a) The highest-leverage action is usually eliminating interruptions, not extending hours. (b) Energy management (sleep, nutrition, exercise) is a productivity lever, not a lifestyle preference. (c) Some tasks (creative insight, complex analysis) cannot be forced — optimal timing matters. (d) Recovery is not wasted time; it restores the multiplicative factors.",
      commonMistakes: "Treating the rebuilt model as just adding 'work smarter' to 'work harder' rather than fundamentally replacing the linear input-output assumption. Ignoring that different cognitive tasks have different energy profiles.",
      alternatives: "Cal Newport's 'deep work' framework and Alex Soojung-Kim Pang's 'Rest' book both independently arrive at similar models from different empirical starting points."
    },
    rubric: [
      { id: "fp-041-r1", text: "Explicitly identifies and rejects the linear hours-input model" },
      { id: "fp-041-r2", text: "Proposes a multiplicative model with at least 3 identified factors" },
      { id: "fp-041-r3", text: "Supports the rebuilt model with at least one empirical finding" },
      { id: "fp-041-r4", text: "Derives at least two non-obvious implications from the rebuilt model" }
    ]
  },

  {
    id: "fp-042",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: ["market-dynamics"],
    difficulty: "medium",
    question: "The standard mental model of competition is: more competitors → lower prices → better for consumers. Rebuild this model to handle the cases where it breaks down and explain when competition actually harms consumer welfare.",
    context: undefined,
    hints: [
      "The standard model assumes homogeneous goods, many small producers, and no switching costs. Identify which of these assumptions, when violated, cause the model to fail.",
      "Consider network effects markets: adding competitors can harm consumers if it fragments the network. Consider two-sided markets: competition on one side may harm participants on the other. Consider quality-sensitive markets where price competition drives out quality.",
      "The rebuilt model must account for: (1) Network effects — competition fragments the network, reducing value for all users (social media, messaging). (2) Quality races to the bottom — price competition in healthcare, food safety, or financial advice may drive out quality, harming consumers who cannot evaluate quality before purchase. (3) Two-sided markets — competing platforms for advertisers may harm users (more ads, worse experience). (4) Innovation — monopoly rents fund R&D; excessive competition may underinvest in innovation. The standard model holds only for homogeneous goods, no switching costs, no network effects, and observable quality."
    ],
    referenceSolution: {
      approach: "Map the assumptions of the standard competition model, identify which violations cause consumer harm, and rebuild a conditional model.",
      reasoning: "Standard model: Perfect competition → price = marginal cost → maximum consumer surplus. Assumes: many sellers, homogeneous goods, no barriers to entry, perfect information, no externalities. Case 1 — Network effects markets: Value of a network = n² (Metcalfe's law approximately). If one messaging platform has 100M users and splits into 10 competing platforms of 10M, value ≈ 10 × (10M)² vs. (100M)². Consumers are worse off from competition. Historical example: Standards wars (VHS vs. Betamax, HD-DVD vs. Blu-Ray) — consumers suffered during the competition period and the 'loser' users were left stranded. Case 2 — Information asymmetry (Akerlof's lemons): When consumers can't assess quality before purchase, price competition drives out quality (used cars, healthcare, financial advice). Providers compete on price by cutting quality; high-quality providers exit. Consumers end up with cheaper but lower-quality products — worse outcome than monopoly with quality assurance. Case 3 — Race to the bottom on safety/quality: Banking competition in 1920s → competitive risk-taking → systematic fragility. Airline deregulation reduced prices but Southwest's model and hub-and-spoke consolidation actually improved reliability at the cost of higher prices in hub markets. Case 4 — Innovation: Schumpeterian argument — monopoly profits fund R&D that benefits consumers long-term. Pharmaceuticals: price competition without patent protection eliminates incentive to develop drugs. Rebuilt model: Competition benefits consumers when goods are homogeneous, quality is observable, network effects are absent, and markets are static. Competition may harm consumers when network effects are strong, quality is unobservable, safety externalities exist, or long-run innovation investment matters.",
      commonMistakes: "Conflating competition in a market (multiple sellers) with competitive markets (price-taking behavior) — these are different. Ignoring that most real markets violate at least one assumption of perfect competition.",
      alternatives: "Regulatory economics offers a framework: 'workable competition' — competition sufficient to discipline prices without fragmenting networks or driving out quality."
    },
    rubric: [
      { id: "fp-042-r1", text: "States the assumptions of the standard model explicitly before challenging them" },
      { id: "fp-042-r2", text: "Correctly analyzes network effects as a case where competition harms consumers" },
      { id: "fp-042-r3", text: "Correctly applies information asymmetry (Akerlof) to quality markets" },
      { id: "fp-042-r4", text: "Derives a conditional rebuilt model specifying when competition helps vs. harms" },
      { id: "fp-042-r5", text: "Supports at least one case with a historical or empirical example" }
    ]
  },

  {
    id: "fp-043",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: ["identifying-unknowns"],
    difficulty: "hard",
    question: "A startup's founding team holds the mental model: 'If we build a great product, customers will find us.' Identify every assumption embedded in this mental model, then rebuild a more accurate model of how early-stage startups actually achieve product-market fit and growth.",
    context: "The startup is a B2B SaaS company with a technically sophisticated product targeting mid-market enterprises.",
    hints: [
      "List the embedded assumptions: about how customers search for solutions, about the role of distribution, about who defines 'great,' about the role of sales vs. product. Each is a candidate for being wrong.",
      "The 'build it and they will come' model assumes awareness, motivation, and evaluation all happen naturally. In B2B, none of these happen without active intervention. What are the actual mechanics of B2B enterprise sales?",
      "The rebuilt model: in B2B SaaS, buyers don't search broadly — they buy from known vendors (warm introduction, reference from peer, analyst coverage), buy based on risk reduction (not product quality), buy through a committee (multiple stakeholders), and require hand-holding through a long sales cycle. 'Great product' is table stakes; distribution, trust, and sales process are the actual leverage points. The correct model is: Awareness (outbound, content, partnerships) → Engagement (sales-led discovery) → Proof (pilot/POC) → Expansion (land-and-expand)."
    ],
    referenceSolution: {
      approach: "Enumerate every embedded assumption, test each against empirical reality for B2B SaaS, and rebuild a mechanistic model of enterprise adoption.",
      reasoning: "Embedded assumptions in 'build great product → customers find us': (1) Customers actively search for new solutions — FALSE for most B2B buyers who are busy, risk-averse, and default to known vendors. (2) 'Great' is universally defined — FALSE: enterprise buyers define great as 'solves my specific workflow, integrates with my stack, has security compliance, and won't get me fired if it fails.' (3) Quality signals itself — FALSE: in B2B, buyers can't evaluate software quality without significant time investment; they rely on social proof, analyst coverage, peer references. (4) Marketing is optional — FALSE: without awareness, no amount of product quality matters. (5) Individuals buy — FALSE: enterprise purchasing involves a committee (economic buyer, technical buyer, champion, legal/security). (6) One sale is enough — FALSE: the right model is land-and-expand; initial sale is often under-monetized. Rebuilt model for B2B SaaS PMF: Stage 1 — Problem discovery: manually find 10 customers with the specific pain; confirm the pain is acute enough to budget for (willingness to pay test). Stage 2 — Distribution insight: identify the trusted channel (warm intro from investor/customer, specific conference, targeted outbound to a persona). Stage 3 — Sales process design: map the buying committee; identify the champion (internal advocate), economic buyer (budget holder), technical buyer (integration approver). Stage 4 — Proof mechanism: define a time-boxed pilot with clear success criteria; pilot reduces buyer risk. Stage 5 — Expansion motion: design the product so initial usage creates expansion pressure (more seats, more features, more integrations). The 'product quality' variable is necessary but insufficient — it earns the right to compete, not the win.",
      commonMistakes: "Confusing consumer product distribution (virality, word-of-mouth) with enterprise B2B distribution (relationship-driven, committee-based). Treating PMF as a product milestone rather than a distribution + product milestone.",
      alternatives: "Peter Thiel's 'distribution as determinative' argument: every great business has a secret about distribution, not just product. Marc Andreessen's original PMF essay emphasizes that PMF is the company's most important milestone — before it, nothing else matters."
    },
    rubric: [
      { id: "fp-043-r1", text: "Identifies at least 5 embedded assumptions in the original mental model" },
      { id: "fp-043-r2", text: "Correctly characterizes B2B buying as committee-based and relationship-driven" },
      { id: "fp-043-r3", text: "Rebuilds a mechanistic model with distinct stages from awareness to expansion" },
      { id: "fp-043-r4", text: "Distinguishes the pilot/proof mechanism as a risk-reduction device for buyers" },
      { id: "fp-043-r5", text: "Concludes that product quality is necessary but not sufficient — distribution is the leverage point" },
      { id: "fp-043-r6", text: "Avoids generic startup advice — analysis is specific to B2B SaaS mid-market context" }
    ]
  },

  {
    id: "fp-044",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: ["structured-argumentation"],
    difficulty: "hard",
    question: "The mental model behind most criminal justice systems is: punishment deters crime. Rebuild this model from first principles using criminological evidence. Which components of the model hold, which fail, and what does a more accurate model of crime reduction look like?",
    context: undefined,
    hints: [
      "The deterrence model has two components: certainty of punishment and severity of punishment. These are separable — and the evidence on their relative effectiveness is very different.",
      "Consider what the deterrence model assumes about criminal decision-making: rational actors who calculate expected cost before acting. For what types of crime is this a reasonable model, and for what types does it catastrophically fail?",
      "Criminological evidence: severity of punishment has weak deterrent effect (studies of death penalty vs. life imprisonment show no significant murder rate difference). Certainty of punishment has moderate deterrent effect. But most crimes are not deterrence-amenable: impulsive crimes (domestic violence, assault in anger), crimes under intoxication, crimes by people with severe mental illness, or crimes driven by necessity (poverty-driven theft). The strongest evidence-based interventions are: environmental design (reducing opportunity), social investment (education, employment, poverty reduction), and swift/certain minor consequences rather than rare/severe punishment."
    ],
    referenceSolution: {
      approach: "Decompose the deterrence model into certainty and severity, test each against evidence, identify which crime types the model cannot address, and rebuild a multi-mechanism crime reduction model.",
      reasoning: "The standard deterrence model: Expected cost of crime = Probability of punishment × Severity of punishment. If expected cost > expected benefit, rational actor doesn't commit crime. This assumes: (1) criminals are rational calculators, (2) they know the punishment severity, (3) they believe they will be caught, (4) they can defer gratification long enough to calculate. Evidence test: Severity: Studies comparing states with vs. without death penalty show no significant homicide rate difference. Isaac Ehrlich's 1975 study claiming deterrence has been widely challenged. Prisons with longer sentences in US vs. comparable countries show higher recidivism, not lower. Verdict: Severity has weak to negligible deterrent effect beyond a threshold. Certainty: Studies of police presence, swift prosecution, and surveillance show moderate deterrent effects. Criminals who believe they will be caught are less likely to offend. Verdict: Certainty has moderate effect, but is expensive to increase. Where model fails categorically: Impulsive/emotional crimes (domestic violence, assault) — no pre-crime calculation occurs. Addiction-driven crime — calculation is distorted by substance dependence. Poverty-necessity crime — expected benefit is very high (survival), model predicts crime occurs regardless. Mental illness — rational calculation is impaired. Together, these categories account for a large share of crime volume. Rebuilt model — crime as a function of multiple independent mechanisms: (1) Opportunity (rational crime): Situational crime prevention — environmental design, visible security, target hardening. Most effective for property crime. (2) Deterrence (rational crime): Increase certainty, not severity. Hot-spot policing, swift prosecution. (3) Social conditions (non-rational crime): Education, employment, poverty reduction reduce both motivation and opportunity over time. Strongest effect but longest lag. (4) Mental health / addiction: Treatment reduces recidivism more than incarceration for these populations. (5) Incapacitation: Prison does prevent crime during incarceration (but doesn't rehabilitate). Conclusion: The existing system over-invests in severity (long sentences) which has minimal deterrent effect, and under-invests in certainty, opportunity reduction, and social conditions which have stronger evidence.",
      commonMistakes: "Conflating incapacitation (prison prevents crime while incarcerated) with deterrence (prison prevents future crime decisions). Ignoring that most incarcerated people return — recidivism is the failure mode of pure incapacitation.",
      alternatives: "The 'swift, certain, proportionate' model (HOPE program in Hawaii) is a real-world experiment that successfully tested certainty-over-severity, with strong results for probation violations."
    },
    rubric: [
      { id: "fp-044-r1", text: "Separates certainty and severity as distinct deterrence components and evaluates each independently" },
      { id: "fp-044-r2", text: "Cites or correctly characterizes the empirical evidence on severity (weak effect)" },
      { id: "fp-044-r3", text: "Identifies at least three crime categories where rational deterrence model fails" },
      { id: "fp-044-r4", text: "Rebuilds a multi-mechanism model with distinct interventions for each mechanism" },
      { id: "fp-044-r5", text: "Distinguishes incapacitation from deterrence as separate mechanisms" },
      { id: "fp-044-r6", text: "Reaches a policy implication: severity vs. certainty investment is misallocated" }
    ]
  },

  {
    id: "fp-045",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: ["economic-estimation"],
    difficulty: "hard",
    question: "Most people hold the mental model that economic growth is driven primarily by capital accumulation (saving more, investing more). This was the dominant view until the mid-20th century. Rebuild the mental model of what actually drives long-run economic growth based on modern growth theory and empirical evidence.",
    context: "A government's economic advisors are designing a 20-year growth strategy for a middle-income country.",
    hints: [
      "The capital accumulation model (Harrod-Domar) predicts that investment rates drive growth. What does the empirical record show when you compare countries with similar investment rates but different growth outcomes?",
      "Solow's 1957 residual was a famous puzzle: after accounting for capital and labor, 80% of US growth was unexplained. What did subsequent research show was in the 'residual'?",
      "Modern growth theory rebuilds the model around: total factor productivity (TFP) as the dominant driver, driven by technology adoption, human capital quality (not just years of schooling), institutions (property rights, rule of law, market competition), and knowledge spillovers. Capital accumulation is necessary but not sufficient. For a middle-income country, the binding constraint is usually technology adoption speed and institutional quality, not the savings rate."
    ],
    referenceSolution: {
      approach: "Trace the historical failure of the capital accumulation model, explain the Solow residual, and rebuild the model around TFP, institutions, and human capital.",
      reasoning: "The Harrod-Domar model (1940s-50s): Growth rate = Savings rate / Capital-output ratio. Policy implication: increase savings → increase investment → grow faster. This model was used by the World Bank for decades to set aid targets (fill the 'savings gap'). Empirical failures: (1) Many countries with high investment rates (USSR) had poor long-run growth; many with lower investment rates (South Korea) had spectacular growth. (2) Aid that filled the savings gap didn't reliably produce growth. (3) Solow's accounting: For US 1909-1949, only ~12.5% of output growth was explained by capital accumulation; ~87.5% was the 'Solow residual' — something else. The residual and what filled it: Solow initially called it 'technical progress.' Subsequent research identified it as Total Factor Productivity (TFP): the efficiency with which capital and labor are combined. TFP is driven by: technology adoption and diffusion, human capital quality (education + health), institutional quality (property rights, contract enforcement, corruption level), and market competition (which forces efficiency). Modern growth model for a middle-income country: Rebuilt model: Growth = f(Physical capital, Human capital, Technology/TFP, Institutions). For middle-income countries specifically, the 'middle income trap' — where countries grow quickly in early stages but stall — is caused by: (a) exhausting catch-up growth (copying existing technology) without developing innovation capacity, (b) wages rising above low-skill manufacturing competitive threshold without moving up the value chain, (c) institutions failing to evolve to support complex market activity. Policy implication for the 20-year strategy: Rather than focusing primarily on savings/investment rates, focus on: education quality (not just enrollment — learning outcomes), rule of law and contract enforcement, technology policy (R&D investment, IP protection calibrated to stage), market structure (competition policy to prevent rent extraction), and health investment (human capital = productivity × years × health). Capital accumulation is still necessary — but it is not the binding constraint for most middle-income countries.",
      commonMistakes: "Confusing capital investment with productivity growth. Treating human capital as years of schooling rather than quality of learning outcomes. Ignoring that institutions are a prerequisite for investment to be productive.",
      alternatives: "Dani Rodrik's 'diagnostics' framework for growth: rather than applying a universal model, identify the binding constraint for this specific country — it may be finance, infrastructure, institutions, or human capital — and address that constraint first."
    },
    rubric: [
      { id: "fp-045-r1", text: "Correctly states and tests the capital accumulation model against empirical failures" },
      { id: "fp-045-r2", text: "Explains the Solow residual and what research showed was inside it" },
      { id: "fp-045-r3", text: "Identifies TFP and its drivers (technology, human capital, institutions) as the rebuilt model" },
      { id: "fp-045-r4", text: "Addresses the middle-income trap as a specific application for the policy context" },
      { id: "fp-045-r5", text: "Derives concrete policy priorities from the rebuilt model" },
      { id: "fp-045-r6", text: "Acknowledges capital is necessary but not sufficient — correctly positions it in the model" }
    ]
  },

  // ── FIRST-PRINCIPLES ANALYSIS (fp-046 to fp-050) ─────────────────────────

  {
    id: "fp-046",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: ["orders-of-magnitude"],
    difficulty: "medium",
    question: "Elon Musk famously applied first-principles thinking to battery costs, asking: what are batteries made of, and what do those materials cost on the London Metal Exchange? Replicate this style of analysis for a different domain: the cost of desalinating seawater to provide fresh water.",
    context: undefined,
    hints: [
      "Start from what desalination physically requires: removing salt from water. What are the fundamental physical constraints (thermodynamics) on the minimum energy needed to do this?",
      "The actual cost of desalination has capital costs (build the plant) and operating costs (mostly energy). Decompose each from physical first principles before looking at what current plants cost.",
      "Thermodynamic minimum energy to desalinate seawater: ~1 kWh per cubic meter (m³). Current best reverse osmosis plants use ~3-4 kWh/m³. At $0.05/kWh electricity: theoretical minimum cost ~$0.05/m³; current best ~$0.15-0.20/m³ operating cost. Capital cost adds ~$0.30-0.50/m³ at scale. Total ~$0.50-0.70/m³. Compare to current freshwater cost in the US: ~$0.001-0.003/m³ (treated surface water). Desalination is 100-500× more expensive. The first-principles insight: the gap between thermodynamic minimum and current practice is only 3-4×, meaning most of the cost is capital + financing, not energy inefficiency."
    ],
    referenceSolution: {
      approach: "Decompose desalination costs into physical energy requirements and capital costs using thermodynamics and engineering estimates, then compare the gap between theoretical minimum and current practice.",
      reasoning: "Step 1: What does desalination require physically? Seawater has ~35 grams of salt per liter. To desalinate, you must overcome the osmotic pressure of the saltwater — approximately 27 bar (about 27 atmospheres). This sets the thermodynamic minimum energy. Step 2: Thermodynamic minimum. Minimum work = osmotic pressure × volume = 27 bar × 1 m³ = 2.7 MJ ≈ 0.75 kWh/m³. At ~50% recovery (half the input water becomes fresh), effective minimum ≈ 1.0-1.5 kWh/m³. Step 3: Current best practice. Modern reverse osmosis (RO) plants with energy recovery devices achieve ~3-4 kWh/m³. The gap from theoretical minimum is 2-3×, meaning current technology is at roughly 30-40% of thermodynamic efficiency — reasonably close to theoretical limits. Step 4: Decompose costs. At $0.05/kWh electricity: Energy cost = 3.5 kWh × $0.05 = $0.175/m³. Capital cost for a large RO plant (~$500M for 100 million gallons/day): amortized over 20 years at 10% capacity factor → $0.30-0.50/m³. Operating/maintenance: ~$0.10/m³. Total: ~$0.60-0.80/m³. Step 5: Compare. Treated surface water in the US: $0.001-0.005/m³ (untreated), up to $0.30-0.50/m³ fully treated and delivered. Desalination is 2-3× more expensive than treated surface water in water-rich regions, but competitive with water trucking in water-scarce regions (water trucks cost $5-50/m³). First-principles insight: Further energy efficiency gains are limited (already near thermodynamic limits). The leverage point for cost reduction is capital cost (plant construction), financing, and economies of scale — not energy technology.",
      commonMistakes: "Ignoring the thermodynamic minimum and treating energy efficiency as unlimited improvement opportunity. Forgetting capital cost amortization, which often exceeds operating costs. Comparing desalination to the wrong baseline (untreated water vs. delivered treated water).",
      alternatives: "Solar-powered desalination changes the energy cost structure — if solar LCOE reaches $0.01/kWh, energy cost drops to $0.035/m³, making total cost ~$0.40-0.50/m³ and competitive with many current treated water systems."
    },
    rubric: [
      { id: "fp-046-r1", text: "Correctly identifies osmotic pressure as the fundamental physical constraint" },
      { id: "fp-046-r2", text: "Estimates thermodynamic minimum energy (~1 kWh/m³) with reasoning" },
      { id: "fp-046-r3", text: "Compares current practice to theoretical minimum and notes the gap is small (2-3×)" },
      { id: "fp-046-r4", text: "Decomposes total cost into energy + capital + O&M components" },
      { id: "fp-046-r5", text: "Correctly identifies capital cost, not energy, as the dominant cost lever" }
    ]
  },

  {
    id: "fp-047",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: ["fermi-problems"],
    difficulty: "medium",
    question: "Apply first-principles analysis to estimate what the theoretical maximum internet speed to a home should be, and explain why current speeds are far below it. What physical and economic constraints determine the realistic ceiling?",
    context: undefined,
    hints: [
      "Start from physics: Shannon's theorem gives the maximum information capacity of a channel as a function of bandwidth and signal-to-noise ratio. Apply this to realistic home connection parameters.",
      "Separate the physical limits of the medium (fiber, copper, wireless) from the economic limits (cost of infrastructure deployment, ISP pricing). Both set ceilings, but at different levels.",
      "Shannon capacity: C = B × log₂(1 + SNR). For fiber: near-infinite SNR, bandwidth limited by electronics (current DWDM can achieve terabits per second per fiber). The physical limit of fiber is ~100 Tbps per fiber strand. Economic limit: the 'last mile' (from fiber backbone to home) is expensive to install per home. Fiber-to-home costs ~$500-1,500/home. ISPs price tiers to maximize revenue per customer, not to deploy maximum capacity."
    ],
    referenceSolution: {
      approach: "Apply Shannon's theorem to derive the physical upper bound, then decompose the gap between physical limit and delivered speed into technical and economic constraints.",
      reasoning: "Step 1: Physical maximum. Shannon's theorem: C = B × log₂(1 + SNR). For optical fiber: bandwidth B ≈ 50 THz (usable optical bandwidth in C+L bands); SNR effectively very high. Theoretical capacity: hundreds of Tbps per fiber strand. Demonstrated lab records: 1.7 Pbps (petabits) on a single fiber (2023, NICT Japan). Step 2: Technology limit. Current deployed Dense Wavelength Division Multiplexing (DWDM) systems carry 100-400 Gbps per fiber strand commercially. Limiting factor: optical amplifiers, electronics at termination points. Step 3: Last-mile limit. Even if the fiber backbone carries Tbps, the home connection is typically: Fiber-to-home (FTTH): 1-10 Gbps capable. Cable (DOCSIS 3.1): 10 Gbps downstream theoretical, 1-2 Gbps actual. DSL (copper phone line): 100-300 Mbps with VDSL2, less with distance. Wireless (5G mmWave): 10 Gbps peak theoretical, 100-500 Mbps realistic outdoors, much less indoors. Step 4: Economic ceiling. FTTH deployment cost: $500-1,500 per home passed. ISPs charge $50-150/month for 1 Gbps. At $100/month, payback on $1,000 installation = 10 months of margin — economically viable, but ISPs segment the market and withhold capacity to sell tiers. Most ISPs throttle symmetric speeds to maintain pricing power. Step 5: Gap summary. Physical fiber limit: ~1 Pbps. Deployed technology limit: ~10 Gbps. Last-mile typical delivery: 100 Mbps - 1 Gbps. Consumer plan limit: 100 Mbps - 2.5 Gbps. The physical-to-delivered gap is 6 orders of magnitude — almost entirely economic and regulatory, not physical.",
      commonMistakes: "Conflating wireless and fiber limits. Treating the ISP-delivered speed as a physical constraint rather than a pricing/business decision. Ignoring that the last-mile is a different bottleneck from the backbone.",
      alternatives: "Li-Fi (light-based home networking) could eventually enable multi-Gbps indoor wireless, eliminating the in-home wiring bottleneck, but requires line-of-sight."
    },
    rubric: [
      { id: "fp-047-r1", text: "References Shannon's theorem as the fundamental physical bound" },
      { id: "fp-047-r2", text: "Correctly identifies that fiber's physical capacity is vastly above any current deployment" },
      { id: "fp-047-r3", text: "Distinguishes backbone capacity from last-mile capacity as separate constraints" },
      { id: "fp-047-r4", text: "Identifies economic/pricing decisions as the dominant gap between physical and delivered speeds" },
      { id: "fp-047-r5", text: "Estimates the order-of-magnitude gap between physical limit and consumer delivery" }
    ]
  },

  {
    id: "fp-048",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: ["case-analysis"],
    difficulty: "hard",
    question: "A technology investor presents this thesis: 'AI will eliminate 50% of white-collar jobs within 10 years.' Apply rigorous first-principles analysis to this claim. What are the fundamental components of any job, which are substitutable by current AI, which are not, and what does the actual timeline look like?",
    context: "The year is 2026. Current AI capabilities include: large language models, code generation, image/video generation, multimodal reasoning, and limited agentic task completion.",
    hints: [
      "Start by decomposing a 'job' into its constituent tasks. Not all tasks within a job are equally automatable — the question is which tasks, and therefore which fraction of which jobs, can be substituted.",
      "Apply the Acemoglu-Restrepo task framework: jobs consist of tasks, tasks can be automated independently, and automating tasks doesn't necessarily eliminate the job — it eliminates those tasks but may create new ones or shift the human role.",
      "Decompose tasks by: (1) whether they require physical presence, (2) whether they involve structured vs. unstructured judgment, (3) whether the cost of error is tolerable (AI errors in legal advice vs. AI errors in email drafting are very different). Also decompose the adoption curve: technical capability → economic viability → regulatory clearance → organizational change → actual adoption. The 10-year claim collapses when you analyze the organizational change bottleneck alone."
    ],
    referenceSolution: {
      approach: "Decompose jobs into tasks, classify tasks by AI substitutability, analyze the adoption pipeline bottlenecks, and derive a calibrated timeline and employment impact estimate.",
      reasoning: "Step 1: Decompose 'job' into tasks. Every job is a bundle of tasks. The relevant question is not 'will AI replace accountants' but 'which accounting tasks will AI perform, and what fraction of accountant hours does that represent?' Step 2: Task classification framework. Tasks can be classified by: (a) Codifiability: can the task be specified precisely enough for AI? Routine cognitive tasks (form processing, data extraction, standard report generation) → high substitutability. Complex judgment (novel legal strategy, stakeholder negotiation, ethical decision-making) → low substitutability. (b) Error tolerance: AI errors in spam classification are tolerable; AI errors in medical diagnosis or legal advice are not without human oversight. High-stakes domains have regulatory and liability barriers to full substitution. (c) Social/relational component: tasks requiring human trust, empathy, physical presence, or professional accountability are resistant to substitution. Step 3: Estimate substitutable task fraction by occupation type. Data entry, routine document processing: ~80% substitutable now. Coding (routine): ~50% substitutable now (but demand for coding is growing). Legal research, contract review: ~40-60% substitutable now. Medical diagnosis (image reading): ~30-50% for specific narrow tasks. Strategic consulting, management: ~10-20% substitutable (research and synthesis tasks). Creative direction, negotiation, leadership: ~5-15%. Weighted across white-collar workforce: perhaps 20-35% of tasks are substitutable within 10 years — but tasks ≠ jobs. Step 4: The adoption pipeline bottleneck. Technical capability → Economic deployment requires: ROI demonstration (takes 2-3 years per domain), enterprise procurement/security approval (1-2 years), regulatory clearance in licensed professions (3-7 years for healthcare, legal, finance), organizational change management (2-5 years), workforce retraining. For regulated professions (medicine, law, accounting), regulatory approval alone pushes meaningful substitution beyond 10 years. Step 5: Evaluate the '50% of jobs in 10 years' claim. Even if 30% of tasks within jobs are substitutable, that doesn't eliminate 30% of jobs — it eliminates those tasks from jobs, often creating new complementary tasks (AI supervision, prompt engineering, exception handling). Historical precedent: ATMs didn't eliminate bank tellers — they changed what tellers do and reduced employment per bank but bank branches expanded. The 50% job elimination claim fails on: (a) Conflating task substitution with job elimination. (b) Ignoring adoption bottlenecks. (c) Ignoring task complementarity and new task creation. (d) Treating all white-collar jobs as equally automatable. A more calibrated estimate: 10-20% net employment reduction in white-collar work over 10 years, concentrated in specific task categories, with significant redistribution of what remaining workers do.",
      commonMistakes: "Conflating 'AI can do this task' with 'AI will be deployed to do this task at scale within 10 years.' Ignoring regulatory and organizational adoption timelines. Treating task substitution as equivalent to job elimination. Using capability benchmarks without distinguishing from deployment reality.",
      alternatives: "Daron Acemoglu's empirical work suggests automation historically has displaced workers from specific tasks while creating new tasks, with net employment effects depending on the relative speed of displacement vs. creation. His recent AI-specific work suggests current AI may displace faster than previous automation waves due to breadth of affected tasks."
    },
    rubric: [
      { id: "fp-048-r1", text: "Explicitly decomposes 'job' into constituent tasks as the unit of analysis" },
      { id: "fp-048-r2", text: "Classifies tasks by at least two dimensions (codifiability, error tolerance, or social component)" },
      { id: "fp-048-r3", text: "Estimates substitutable task fractions across different occupation types" },
      { id: "fp-048-r4", text: "Identifies the adoption pipeline (regulatory, organizational) as a major timeline constraint" },
      { id: "fp-048-r5", text: "Distinguishes task substitution from job elimination and notes complementarity/new task creation" },
      { id: "fp-048-r6", text: "Arrives at a calibrated, lower estimate than 50% with explicit reasoning for the reduction" }
    ]
  },

  {
    id: "fp-049",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: ["assumption-validation", "sensitivity-analysis"],
    difficulty: "hard",
    question: "A climate policy advocate argues: 'Transitioning to 100% renewable electricity by 2035 is technically and economically feasible for the United States.' Apply first-principles analysis to this claim. What are the fundamental physical and economic constraints, and what does the analysis reveal about the claim's validity?",
    context: "Current US electricity: ~60% fossil fuels, ~20% nuclear, ~20% renewables. Peak demand ~800 GW. Annual generation ~4,000 TWh.",
    hints: [
      "The fundamental physical challenge of renewables is intermittency — solar doesn't generate at night, wind doesn't always blow. Decompose the storage requirement that 100% renewables entails, and estimate its scale.",
      "Decompose the cost of the transition: generation capacity, transmission infrastructure, and storage. Each has a different cost and scalability constraint. Compare the storage requirement to current grid-scale storage capacity.",
      "Current US grid-scale battery storage: ~50 GWh. To buffer 24 hours of US electricity demand: 4,000 TWh/365 days ≈ 11 TWh/day. 50 GWh = 0.45% of one day's supply. To cover a multi-day wind drought (which occurs regularly in the Midwest), you'd need weeks of storage. 2 weeks of storage = ~150 TWh. Current installed capacity is 0.03% of that. This is the binding physical constraint, not generation capacity."
    ],
    referenceSolution: {
      approach: "Decompose the 100% renewable claim into generation capacity, storage, transmission, and timeline constraints — quantify each, and assess which is binding.",
      reasoning: "Step 1: What does '100% renewable electricity' require? It requires: (a) Sufficient renewable generation capacity, (b) Storage or backup to handle intermittency, (c) Transmission to move power from generation sites to demand centers, (d) Grid flexibility (demand response, interconnection). Step 2: Generation capacity analysis. US peak demand: ~800 GW. Capacity factor: solar ~25%, wind ~35%, so to produce equivalent energy: need ~3,200 GW solar or ~2,300 GW wind (or mix). Current installed renewable capacity: ~300 GW (solar + wind). Required: 7-10× current capacity. Annual addition rate (2023): ~30-40 GW. At current rates: 10 years to add 300-400 GW — far short of the 2,000+ GW needed. Required rate: 200+ GW/year — 5-6× current rate. Manufacturing, permitting, and skilled labor are the constraints here, not capital cost. Step 3: Storage analysis (the binding constraint). The fundamental problem: wind and solar are intermittent. The US experiences multi-day 'dunkelflaute' events (low wind + low solar) multiple times per year, particularly in winter. Required storage to buffer 1 week of average demand: (4,000 TWh / 52 weeks) = 77 TWh. Current US grid-scale storage: ~50 GWh = 0.05 TWh. Gap: 1,500× current capacity for just one week of buffer. Li-ion battery cost at $150/kWh: 77 TWh × $150B/TWh = $11.55 trillion for one week of storage alone. US GDP = ~$28 trillion. This is the binding constraint — not generation capacity or cost of solar panels. Alternative storage technologies (pumped hydro limited by geography, green hydrogen at low round-trip efficiency ~40%, thermal storage) each have their own constraints. Step 4: Transmission analysis. Renewable generation sites (Midwest wind, Southwest solar) are remote from population centers (Northeast, West Coast). Current transmission grid is insufficient and adding high-voltage DC lines requires 10-15 years of permitting and construction. Step 5: Timeline analysis. 2035 = 9 years. Major infrastructure projects in the US take: large solar farms 3-5 years to permit and build, offshore wind 7-10 years, new transmission 10-15 years (permitting alone), storage at required scale — no existing technology. Assessment: The generation cost claim has become credible (solar LCOE <$0.03/kWh). The timeline claim (2035) fails on storage, transmission, and manufacturing rate constraints. A technically honest version: 100% renewable is achievable, but 2035 is not feasible without a breakthrough in long-duration storage or a continued role for nuclear/hydro/gas with carbon capture as dispatchable backup. A realistic timeline for 100% clean electricity (not strictly renewable) is 2045-2060 under aggressive policy.",
      commonMistakes: "Conflating 'renewable energy is cheap' with '100% renewable is feasible' — storage is the binding constraint, not generation cost. Assuming storage technology will improve enough in 9 years to close a 1,500× gap without evidence. Ignoring transmission permitting timelines.",
      alternatives: "'100% clean electricity' (including nuclear and hydro) is much more achievable by 2035 — the constraint is specifically intermittent renewables without dispatchable backup. France's nuclear grid achieves ~90% low-carbon electricity today."
    },
    rubric: [
      { id: "fp-049-r1", text: "Correctly identifies intermittency and storage as the binding constraint, not generation cost" },
      { id: "fp-049-r2", text: "Quantifies the storage gap: current ~50 GWh vs. weeks of buffer needed" },
      { id: "fp-049-r3", text: "Calculates or estimates the storage cost at scale and compares to US GDP" },
      { id: "fp-049-r4", text: "Identifies transmission permitting as a separate multi-decade constraint" },
      { id: "fp-049-r5", text: "Distinguishes the cost claim (credible) from the timeline claim (not feasible) — doesn't reject both" },
      { id: "fp-049-r6", text: "Proposes a more accurate version of the claim (100% clean by 2045-2060 with nuclear/hydro, or 100% renewable with storage breakthrough)" }
    ]
  },

  {
    id: "fp-050",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: ["multi-skill-synthesis"],
    difficulty: "hard",
    question: "You are advising a government that wants to eliminate plastic waste. A minister proposes a complete ban on single-use plastics within 2 years. Apply full first-principles analysis: decompose the plastic waste system, identify where interventions are most leveraged, evaluate the ban proposal against alternatives, and recommend a policy package.",
    context: "The country is a middle-income nation with significant informal waste collection, limited landfill space, a growing consumer economy, and a coastline that is a major tourist attraction. Plastic pollution is damaging tourism revenues.",
    hints: [
      "Start by decomposing the plastic waste 'system' — where does plastic come from, where does waste come from (production vs. consumption vs. disposal), and where do the leakage points to the environment occur?",
      "A ban targets one part of the system. Evaluate the ban against first principles: does banning the use of single-use plastic actually reduce plastic waste, or does it shift the problem to a substitute that may be worse? What is the counterfactual?",
      "First-principles system decomposition: Plastic waste = (plastic produced) × (% that becomes waste) × (% waste that leaks to environment). Each term can be attacked independently. A ban reduces the first term for specific items, but: (1) substitutes (paper, biodegradable plastic, reusables) all have their own environmental costs — LCA analysis required. (2) Informal waste sector: in many middle-income countries, informal collectors recover high-value recyclables (PET bottles) but leave low-value plastics. The leakage problem is driven by low-value plastics that nobody collects. The ban should target low-value/low-recyclability plastics, not all single-use plastics. Extended Producer Responsibility (EPR) — making producers pay for waste management — is better leveraged than a ban for high-volume items."
    ],
    referenceSolution: {
      approach: "Decompose the plastic waste system into production, consumption, collection, and environmental leakage flows; evaluate the ban proposal against first-principles; and construct a policy package that addresses the highest-leverage points.",
      reasoning: "Step 1: System decomposition. Plastic waste flow: Raw material → Plastic production → Consumer products → Post-consumer waste → [Collected → recycling/landfill] OR [Not collected → open dump/burn/ocean]. Environmental harm occurs only at the last step — waste that leaks uncollected or is openly burned. This means: reducing plastic produced reduces input. Increasing collection efficiency reduces leakage. Increasing recycling value incentivizes collection of more plastic types. Step 2: Where does the leakage actually come from? In middle-income countries with informal collection: High-value recyclables (PET bottles, HDPE containers) are collected efficiently by informal sector — these do NOT end up in oceans. Low-value, hard-to-recycle plastics (multi-layer packaging, polystyrene, thin film bags) have no economic collection incentive — these dominate ocean plastic. The ban proposal targets all single-use plastics. But PET bottles are single-use and are well-collected. Thin film bags are single-use and are the major leakage source. The ban has poor targeting. Step 3: Evaluate the ban on thin film bags (the leakage problem target). A ban on plastic bags may work if: substitutes are available and affordable. But in lower-income households, thin plastic bags are reused multiple times (as trash can liners, for storage) — banning them shifts cost to poorer consumers while wealthier consumers adapt easily. The substitute (woven polypropylene bag) requires 50+ uses to offset its manufacturing footprint. Two-year timeline: supply chain shift requires manufacturers to retool; retail sector needs time to source alternatives; consumer behavior change requires education campaigns. Two years is feasible but tight. Step 4: Evaluate alternatives to a ban. Extended Producer Responsibility (EPR): Require plastic producers/importers to fund waste collection and recycling. Creates financial incentive for industry to design recyclable products. Works for high-volume, identifiable products. Does not require a ban. Deposit-return scheme: Works extremely well for beverage containers (bottles, cans) — achieves 85-95% return rates in countries with DRS. Highly targeted at high-volume litter item. Informal sector formalization: Integrate informal waste collectors into formal system, give them GPS-tracked routes, contracts, and expanded coverage to include low-value plastics. Leverage existing infrastructure. Plastic credit market: Companies pay for certified plastic collection in the country — generates revenue to fund collection without a ban. Step 5: Policy package recommendation. Do immediately: Ban only the lowest-value, highest-leakage, hardest-to-recycle single-use items with no good use case: polystyrene foam food containers, thin film bags below a minimum thickness, multi-layer sachets. These are the primary marine pollution sources. Implement within 2 years: Deposit-return scheme for all beverage containers. Formalize and fund informal waste sector with extended coverage. Launch within 3-5 years: EPR legislation for plastic packaging. Mandatory recyclability standards for new plastic products. Rationale: The full ban is too broad (bans well-managed items like PET bottles), too crude (ignores recyclability differences), and creates equity problems. The targeted package addresses the actual leakage points while creating economic incentives aligned with reducing harm.",
      commonMistakes: "Treating 'plastic waste' as a single homogeneous problem rather than a system with different leakage points for different plastic types. Assuming a ban on single-use plastics automatically reduces ocean plastic — depends entirely on what happens to the substitutes and whether the leakage-prone low-value plastics are included. Ignoring informal sector as a key implementation partner.",
      alternatives: "Could model this through a cost-effectiveness lens: cost per ton of ocean plastic prevented for each intervention. EPR and DRS typically dominate bans on cost-effectiveness grounds because they target high-volume items and create economic incentives for collection."
    },
    rubric: [
      { id: "fp-050-r1", text: "Decomposes plastic waste into production, collection, and leakage flows as separate intervention points" },
      { id: "fp-050-r2", text: "Identifies that high-value vs. low-value plastics have fundamentally different leakage rates" },
      { id: "fp-050-r3", text: "Critiques the full ban as poorly targeted (includes well-managed items, excludes key leakage sources)" },
      { id: "fp-050-r4", text: "Evaluates at least two alternatives to a full ban (EPR, DRS, informal sector)" },
      { id: "fp-050-r5", text: "Notes the equity dimension of a thin-film bag ban affecting lower-income households disproportionately" },
      { id: "fp-050-r6", text: "Proposes a targeted, layered policy package with clear rationale for each component" }
    ]
  }
];
