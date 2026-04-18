import type { Problem } from '@/types';

export const problemStructuringProblemsB: Problem[] = [
  // ── MECE DECOMPOSITION (ps-026 to ps-030) ─────────────────────────────────

  {
    id: "ps-026",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: ["unit-economics"],
    difficulty: "medium",
    question: "A ride-sharing company's gross margin fell from 28% to 19% over six months. Build a MECE decomposition of all factors that could explain a margin decline.",
    context: "Gross margin = (Revenue − Cost of Revenue) / Revenue. Cost of revenue for a ride-share platform includes driver payments, insurance, payment processing fees, and platform infrastructure costs. Revenue comes from rider fares.",
    hints: [
      "Margin = revenue per ride minus cost per ride. Think about which side of that equation could have moved — and in what directions.",
      "Use a MECE split: revenue-side changes vs. cost-side changes. Then decompose each independently.",
      "Revenue side: average fare per ride (pricing changes, mix shift to shorter/cheaper rides, promo discounts). Cost side: driver pay (incentive programs, minimum guarantees, regulatory changes), insurance (claims frequency, macro rates), payment processing (mix shift to costlier methods), infrastructure (cloud costs, support costs per ride)."
    ],
    referenceSolution: {
      approach: "Decompose margin as a function of revenue per ride and cost per ride, then branch each into its independent sub-drivers.",
      reasoning: "Revenue per ride could decline due to: fare structure changes (lower base fares, promotional codes), product mix shift (more short/cheap rides vs. long/premium), or geographic mix shift (expansion into lower-fare markets). Cost per ride could increase due to: driver cost (higher incentive bonuses, regulatory minimum earnings guarantees, driver supply shortage driving surge), insurance (rising claims, premium increases), payment processing (more card vs. cash), or platform fixed cost spread (infrastructure costs not scaling with volume). These branches are mutually exclusive — each driver is either a revenue or cost factor, not both.",
      commonMistakes: "Mixing causes and effects (e.g., 'driver shortage' is a cause of higher driver cost, not a separate MECE branch). Also: confusing gross margin with net margin and including overhead costs that belong below the gross margin line.",
      alternatives: "Could decompose by ride segment (standard, premium, pool) if segment-level data is available — useful for pinpointing which product is dragging margin. Could also decompose by geography if the business is multi-market."
    },
    rubric: [
      { id: "ps-026-r1", text: "Top-level split separates revenue-side and cost-side drivers" },
      { id: "ps-026-r2", text: "No driver appears in both branches (mutually exclusive)" },
      { id: "ps-026-r3", text: "At least three distinct cost sub-drivers are identified" },
      { id: "ps-026-r4", text: "Mix shift (product or geography) is recognized as a revenue-side driver" },
      { id: "ps-026-r5", text: "Response notes which branches require data to diagnose further" }
    ]
  },

  {
    id: "ps-027",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: [],
    difficulty: "medium",
    question: "A city government wants a MECE breakdown of all the ways it could reduce traffic congestion. Structure the solution space before any options are evaluated.",
    context: undefined,
    hints: [
      "Congestion = more vehicles wanting to use road capacity than the capacity can handle. Think about what you can change on each side of that equation.",
      "Split by lever type: reduce demand for road use vs. increase supply of road capacity vs. shift demand to different times or routes.",
      "Demand reduction: modal shift (to transit, cycling, walking), trip elimination (remote work, online services), carpooling/ridesharing. Supply increase: new road/lane capacity, intersection optimization, traffic signal coordination. Demand redistribution: congestion pricing, staggered work hours, HOV lanes to shift timing and routing."
    ],
    referenceSolution: {
      approach: "Frame congestion as a supply-demand mismatch and decompose interventions by whether they act on demand volume, demand timing/routing, or road supply.",
      reasoning: "Supply-side interventions: physical capacity expansion (new lanes, roads, interchanges), operational improvements (adaptive signals, incident management, ramp metering). Demand volume reduction: shift trips to other modes (transit investment, cycling infrastructure, pedestrian improvements), eliminate trips (telecommuting policy, land-use reform to reduce trip distance), carpooling/ridesharing incentives. Demand redistribution: time-shifting (congestion pricing, staggered schedules, employer incentives), route-shifting (navigation app coordination, dynamic routing signs). These three branches are exhaustive and non-overlapping at the top level.",
      commonMistakes: "Listing specific interventions (e.g., 'build a new highway' and 'add bus lanes') at the top level rather than organizing them into structural categories. This creates an unstructured list, not a MECE tree.",
      alternatives: "Could decompose by actor (what the city controls vs. what requires private sector/federal cooperation) — useful for implementation planning. Could decompose by time horizon (near-term operational vs. long-term infrastructure)."
    },
    rubric: [
      { id: "ps-027-r1", text: "Top-level split is MECE across supply and demand dimensions" },
      { id: "ps-027-r2", text: "Both physical supply expansion and operational improvements are captured" },
      { id: "ps-027-r3", text: "Demand volume reduction is separate from demand redistribution" },
      { id: "ps-027-r4", text: "At least two levels of hierarchy are shown" }
    ]
  },

  {
    id: "ps-028",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "hard",
    question: "You are given the following MECE breakdown of why a SaaS company's ARR growth slowed: (A) New customer acquisition, (B) Expansion revenue from existing customers, (C) Churn. Critique this structure — is it truly MECE? What is missing or incorrectly categorized, and how would you fix it?",
    context: "ARR (Annual Recurring Revenue) growth = New ARR added − ARR lost. The company has 3,000 existing customers, adds ~80 new ones per month, loses ~30 per month, and has seen expansion revenue fall 40% YoY while new logo growth remained flat.",
    hints: [
      "Think carefully about whether these three branches cover every possible way ARR can change. Are there ARR movements that don't fit cleanly into one of these three buckets?",
      "Consider what happens when a customer downgrades their plan, or when a churned customer re-subscribes. Where do these fit? Are they in any of the three buckets?",
      "The missing branch is contraction revenue (downgrades). A customer reducing their contract value is not churning (still active) but is not expansion either. The fix: split the tree into (A) New ARR from new logos, (B) Net expansion ARR from existing customers [expansion minus contraction], (C) Churned ARR. Alternatively, show all four components: new, expansion, contraction, churn."
    ],
    referenceSolution: {
      approach: "Test MECE validity by checking exhaustiveness (does every ARR movement fit a branch?) and exclusivity (can any movement fit two branches?). Identify gaps and overlaps, then restructure.",
      reasoning: "The original structure has an exhaustiveness failure: contraction revenue (downgrades, plan reductions) is not captured. A customer reducing their annual contract from $10K to $7K is not churning (still active) and not expanding (ARR fell) — they fall into a gap. Correctly, ARR growth has four components: (1) New ARR — from new customer logos, (2) Expansion ARR — upsells and cross-sells to existing customers, (3) Contraction ARR — downgrades by existing customers (negative), (4) Churned ARR — lost from customers who cancel (negative). The original three-bucket structure implicitly lumps contraction into either 'expansion' (as negative expansion) or ignores it. Given that expansion revenue fell 40% YoY, the real diagnostic question is whether that's because upsells declined or downgrades increased — two very different problems requiring different fixes. The flawed structure obscures this distinction.",
      commonMistakes: "Accepting the original structure because it 'sounds right' without testing each branch against edge cases. Also: not recognizing that a structure can be MECE at a high level but still obscure important sub-distinctions that change the diagnosis.",
      alternatives: "NDR (Net Dollar Retention) = (Beginning ARR + Expansion − Contraction − Churn) / Beginning ARR is the standard industry framework capturing all four components. Could also present as a waterfall: Starting ARR → +New → +Expansion → −Contraction → −Churn → Ending ARR."
    },
    rubric: [
      { id: "ps-028-r1", text: "Correctly identifies contraction revenue as the missing branch" },
      { id: "ps-028-r2", text: "Explains why the gap matters diagnostically (expansion vs. contraction are different problems)" },
      { id: "ps-028-r3", text: "Provides a corrected four-component structure" },
      { id: "ps-028-r4", text: "Tests the corrected structure for MECE validity" },
      { id: "ps-028-r5", text: "Links the structural fix to the specific data provided (40% expansion decline)" }
    ]
  },

  {
    id: "ps-029",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: ["market-sizing"],
    difficulty: "hard",
    question: "Decompose the total addressable market for 'workplace productivity software' in a MECE way. The challenge: 'productivity software' is a vague category that blurs into adjacent markets. Define your segmentation principle, defend why it is MECE, and flag where boundary ambiguities lie.",
    context: undefined,
    hints: [
      "Before decomposing, you need to define what 'workplace productivity software' means — the MECE structure depends on your definition. Start by deciding what the category includes and excludes.",
      "Consider segmenting by the type of work being done (communication, document creation, project management, automation) rather than by customer size or industry — the former creates non-overlapping functional categories.",
      "Functional segments: (1) Communication and collaboration (email, messaging, video conferencing), (2) Document creation and management (word processors, spreadsheets, presentations, file storage), (3) Project and task management (task trackers, project planning, resource management), (4) Workflow automation (RPA, integration platforms, no-code tools), (5) Analytics and reporting (BI tools, dashboards). Flag that CRM, ERP, and HRIS blur into these categories and require explicit boundary decisions."
    ],
    referenceSolution: {
      approach: "Define the category boundary first, choose a segmentation axis that minimizes overlap (functional job-to-be-done), then test each segment pair for mutual exclusivity.",
      reasoning: "Segmentation by functional job-to-be-done: (1) Communication and collaboration: enabling information exchange between people — email platforms, team messaging, video conferencing. (2) Content creation: creating and storing work artifacts — documents, spreadsheets, presentations, file management. (3) Work coordination: organizing who does what by when — task managers, project management tools, resource scheduling. (4) Process automation: removing repetitive human steps — RPA, iPaaS, workflow builders, no-code automation. (5) Decision support: turning data into insight — BI dashboards, reporting tools. Boundary ambiguities to flag: (a) CRM (sales process tool — coordination + communication + analytics), (b) ERP (cross-functional operations — overlaps with automation and analytics), (c) HRIS (people operations — coordination + analytics), (d) Dev tools (coding environments — content creation analog for software teams). These require explicit inclusion/exclusion decisions. The structure is MECE within the defined boundary but boundary decisions are themselves a source of analytical risk.",
      commonMistakes: "Segmenting by buyer (SMB, enterprise, mid-market) — this is a go-to-market cut, not a product category cut, and creates overlap since the same software sells to all segments. Also: not flagging where the boundary is fuzzy.",
      alternatives: "Could segment by collaboration modality (async vs. sync) or by deployment model (cloud vs. on-prem). Both are valid but less informative for TAM sizing than functional segmentation."
    },
    rubric: [
      { id: "ps-029-r1", text: "Explicitly defines the category boundary before decomposing" },
      { id: "ps-029-r2", text: "Chooses a segmentation axis and defends why it minimizes overlap" },
      { id: "ps-029-r3", text: "Identifies at least four functional segments" },
      { id: "ps-029-r4", text: "Flags specific boundary ambiguities (CRM, ERP, or equivalent examples)" },
      { id: "ps-029-r5", text: "Acknowledges that MECE validity depends on the boundary definition chosen" }
    ]
  },

  {
    id: "ps-030",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: ["decomposition-to-fundamentals"],
    difficulty: "hard",
    question: "A manufacturing company wants to reduce its carbon emissions by 40% over five years. Build the most rigorous MECE decomposition of their emission sources possible, then identify which branches are most likely to move the needle given a typical heavy manufacturing profile.",
    context: "The company operates three production plants, a fleet of 200 delivery trucks, corporate offices, and has a large supplier network. It is in the steel fabrication industry. Industry benchmark: ~70% of total lifecycle emissions for manufacturers typically come from the supply chain (Scope 3).",
    hints: [
      "There is a standard, internationally recognized framework for categorizing emissions that is designed to be MECE. Think about whether you know it.",
      "The GHG Protocol defines Scope 1 (direct emissions), Scope 2 (purchased energy), and Scope 3 (value chain). This is the industry standard MECE structure. Decompose each scope further.",
      "Scope 1: combustion (furnaces, boilers, vehicles), process emissions (chemical reactions in steel production), fugitive emissions (refrigerants, leaks). Scope 2: purchased electricity, purchased heat/steam. Scope 3: upstream (raw materials — especially iron ore/coking coal, supplier logistics, capital goods) and downstream (customer use, end-of-life). Given the 70% Scope 3 benchmark, supplier raw materials (especially coking coal for steel) are almost certainly the largest lever."
    ],
    referenceSolution: {
      approach: "Apply the GHG Protocol's Scope 1/2/3 framework as the MECE structure, decompose each scope into its sub-sources, then apply quantitative reasoning to prioritize branches.",
      reasoning: "Scope 1 (direct): (a) stationary combustion — furnaces, boilers, generators at plants; (b) mobile combustion — delivery fleet (200 trucks); (c) process emissions — CO2 from iron ore reduction in steel production, a chemistry-driven emission largely unavoidable with current technology; (d) fugitive emissions — refrigerant leaks, minor. Scope 2 (indirect, purchased energy): electricity purchased for plants and offices; heat or steam purchased externally. Scope 3 (value chain): Upstream — raw material extraction (iron ore, coking coal, limestone), supplier transportation, purchased capital equipment manufacturing; Downstream — customer processing of steel, end-of-life product disposal. Prioritization: Scope 3 upstream (especially coking coal for the basic oxygen furnace process) likely represents 50-65% of total footprint. Fleet (Scope 1 mobile) is tractable via electrification. Scope 1 process emissions are technically hardest — require process redesign or carbon capture. Offices are negligible. The 40% target is achievable only with meaningful Scope 3 action — supplier switching or green steel procurement commitments.",
      commonMistakes: "Ignoring Scope 3 because it's outside direct operational control — this misses the majority of the emissions. Also: treating Scope 2 as entirely fixed when switching to renewable electricity procurement is often the most immediate lever.",
      alternatives: "Could decompose by plant/source location rather than scope — useful for operational planning but less useful for target-setting. Could decompose by abatement lever (electrification, efficiency, fuel switching, offsetting) as a parallel structure."
    },
    rubric: [
      { id: "ps-030-r1", text: "Uses the Scope 1/2/3 framework (or equivalent MECE structure) as the top level" },
      { id: "ps-030-r2", text: "Scope 1 is correctly decomposed into stationary, mobile, process, and fugitive sources" },
      { id: "ps-030-r3", text: "Scope 3 upstream and downstream are distinguished" },
      { id: "ps-030-r4", text: "Identifies that coking coal / raw materials are the highest-volume emission source for steel" },
      { id: "ps-030-r5", text: "Notes that the 40% target likely requires Scope 3 action, not just operational changes" },
      { id: "ps-030-r6", text: "Structure is genuinely MECE — no emission source could plausibly appear in two branches" }
    ]
  },

  // ── ISSUE TREES (ps-031 to ps-035) ────────────────────────────────────────

  {
    id: "ps-031",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: [],
    difficulty: "medium",
    question: "Customer satisfaction scores at a chain of coffee shops dropped from 4.4 to 3.7 (out of 5) over the past quarter. Build an issue tree to diagnose the root cause.",
    context: undefined,
    hints: [
      "An issue tree starts with the problem statement and branches into the key diagnostic questions you need to answer. What are the most fundamental questions about why satisfaction fell?",
      "Start with: Is this a product issue, a service issue, or an environmental issue? Each of those becomes a branch with its own sub-questions.",
      "Product branch: Has coffee quality changed (ingredients, recipes, equipment maintenance)? Drink consistency? Food quality? Service branch: Staff friendliness, order accuracy, wait times? Environment branch: Cleanliness, noise levels, seating? Also consider whether this affects all locations or specific ones — that's a diagnostic filter, not a separate branch."
    ],
    referenceSolution: {
      approach: "Build a diagnostic issue tree by asking 'what must be true for satisfaction to have fallen?' and branching into major potential cause categories.",
      reasoning: "Branch 1 — Product quality: Did coffee quality change? (supplier change, equipment calibration, barista training gaps), Did food quality change? (new menu items, supplier change), Is there consistency between visits? Branch 2 — Service quality: Are staff interactions positive? (turnover, training, morale), Are orders accurate and quick? (wait times, order errors, tech issues with app/POS), Is the pickup/dine-in experience smooth? Branch 3 — Physical environment: Is cleanliness adequate? (table turnover, bathroom maintenance), Is the ambiance acceptable? (music, temperature, seating), Are there congestion/crowding issues? Diagnostic filter before branching: Is the drop uniform across all locations or concentrated? If concentrated, root cause is more likely operational (local management, staff). If uniform, more likely a system-level change (supplier, training program, menu update).",
      commonMistakes: "Starting with solutions rather than diagnostic questions ('should we retrain staff?' is a solution; 'has service quality declined?' is a diagnostic question). Also: not including a geographic/demographic filter to narrow the diagnosis.",
      alternatives: "Could structure the issue tree around the customer journey (order → wait → receive → consume → leave) rather than cause categories — this is more granular but may be more useful if you have journey-stage NPS data."
    },
    rubric: [
      { id: "ps-031-r1", text: "Issue tree starts from the problem, not from solutions" },
      { id: "ps-031-r2", text: "Three major branches cover product, service, and environment" },
      { id: "ps-031-r3", text: "Each branch has at least two diagnostic sub-questions" },
      { id: "ps-031-r4", text: "Includes a diagnostic filter about whether the drop is uniform or localized" }
    ]
  },

  {
    id: "ps-032",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: ["supply-demand"],
    difficulty: "medium",
    question: "A city's emergency room wait times have increased from an average of 2.1 hours to 4.8 hours over two years. Build an issue tree to identify what is driving the increase.",
    context: "The ER handles roughly 180 patient visits per day. Staffing has remained constant. A new urgent care clinic opened nearby 18 months ago.",
    hints: [
      "Wait time = demand for ER services / ER processing capacity. Think about which side of that ratio could have moved, or whether both moved.",
      "Demand side: Has patient volume increased, or has patient acuity (complexity) increased? Supply side: Has effective throughput per hour fallen (staff performance, bed availability, process bottlenecks)?",
      "Demand branch: volume change (is patient count up?), acuity mix shift (are cases more complex, taking longer?), inappropriate ER use (patients who could use urgent care coming to ER). Supply branch: staffing effectiveness (turnover, fatigue), bed availability (boarding — admitted patients blocking ER beds), process efficiency (triage delays, test turnaround times, discharge speed). Note: the new urgent care clinic likely drew away low-acuity patients, which could explain both a volume drop AND an acuity increase simultaneously."
    ],
    referenceSolution: {
      approach: "Frame wait time as a queuing problem (throughput vs. demand) and build an issue tree that diagnoses both sides of the equation, with a special eye for the structural context change (new urgent care clinic).",
      reasoning: "Demand branch: (a) Volume — is total patient count up, down, or flat? (b) Acuity mix — are patients sicker/more complex on average? (c) Inappropriate use — are low-acuity patients using the ER when alternatives exist? Supply/throughput branch: (a) Staffing — same headcount but higher acuity per patient means more time per case; has burnout or turnover affected effective capacity? (b) Bed blocking — are admitted patients staying in ER beds because inpatient beds are full (boarding)? This is a major driver of ER wait times. (c) Process bottlenecks — lab turnaround, imaging wait, specialist consult delays. Key insight from context: the new urgent care clinic likely siphoned off low-acuity visits, leaving a higher-acuity case mix in the ER. With the same staffing and higher complexity per case, throughput time increases even if patient count is flat or lower. This is a 'hidden demand increase' — volume may be the same but effective demand (in care-hours) rose.",
      commonMistakes: "Focusing only on raw patient volume and missing the acuity mix shift. Also: ignoring bed boarding, which research consistently shows is the single largest driver of extended ER wait times.",
      alternatives: "Could build the issue tree using the patient journey as the spine (arrival → triage → seen by physician → diagnostics → treatment → discharge/admit) and identify where in the journey the delay occurs — this is useful if you have timestamp data by stage."
    },
    rubric: [
      { id: "ps-032-r1", text: "Issue tree distinguishes demand-side and supply-side drivers" },
      { id: "ps-032-r2", text: "Acuity mix shift is identified as a demand-side factor (not just volume)" },
      { id: "ps-032-r3", text: "Bed boarding is mentioned as a supply-side bottleneck" },
      { id: "ps-032-r4", text: "Connects the urgent care clinic's opening to a likely acuity mix shift" },
      { id: "ps-032-r5", text: "Issue tree contains diagnostic questions, not prescribed solutions" }
    ]
  },

  {
    id: "ps-033",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: ["case-analysis"],
    difficulty: "hard",
    question: "A private equity firm acquired a mid-market B2B software company 18 months ago. EBITDA has declined from $12M to $7M despite revenue staying flat at $48M. Build a comprehensive issue tree, and for each major branch, specify what data you would need to determine whether that branch is the culprit.",
    context: "The company sells HR workflow software. It has 400 employees. Post-acquisition, the PE firm replaced the CFO, reduced the sales team by 15%, and implemented a new ERP system. Revenue has been flat but a backlog of unimplemented customer contracts has grown.",
    hints: [
      "EBITDA = Revenue − Operating Expenses. Revenue is flat, so the problem must be on the cost or margin side. Start there — then branch into which costs could have risen.",
      "Examine both direct cost drivers (COGS margin deterioration) and operating expense drivers (S&M, R&D, G&A increases). Then check whether there are one-time items masking the picture.",
      "Cost branches: (1) COGS increase — implementation/professional services costs rising due to growing contract backlog (more hours delivering), support costs rising; (2) S&M costs — paradox: headcount cut by 15% but did severance, recruiting, or ramp costs spike?; (3) G&A — new ERP implementation costs (one-time?), CFO transition costs, PE monitoring fees; (4) R&D — any changes? The unimplemented backlog is a critical signal: it suggests delivery capacity is constrained, which is driving COGS up without revenue recognition."
    ],
    referenceSolution: {
      approach: "Frame as EBITDA = Revenue − COGS − OpEx, note revenue is flat, then decompose OpEx into its functional components, test each branch against the contextual clues provided, and specify data requests.",
      reasoning: "Since revenue is flat, the $5M EBITDA decline (42% drop) is entirely an expense problem. EBITDA margin fell from 25% to 14.6%. Issue tree branches: (1) COGS / Gross Margin deterioration: Is gross margin down? The growing unimplemented contract backlog suggests the company is recognizing revenue on SaaS licenses while bearing higher delivery costs (implementation labor, professional services) to work through the backlog. Data needed: gross margin %, headcount in implementation/support, hours per implementation, billable utilization. (2) Sales & Marketing costs: A 15% sales team cut should reduce S&M costs, but severance, recruiting replacements, and ramp time for new hires could temporarily increase costs. Data needed: S&M expense as % of revenue before and after, headcount by role, severance charge. (3) G&A costs: ERP implementation is a major one-time cost that may be expensed rather than capitalized. PE monitoring fees (typical: 1-2% of revenue = $0.5-1M/year) may not have been in pre-acquisition EBITDA. Data needed: G&A line items pre/post, whether ERP costs are capitalized or expensed, management fee agreement. (4) R&D costs: Any investment increase post-acquisition to improve product? Data needed: R&D headcount and spend trend. Most likely culprit: combination of (1) COGS rising due to delivery backlog and (3) G&A including new PE fees and one-time ERP costs.",
      commonMistakes: "Treating flat revenue as proof there's no revenue problem — the growing unimplemented backlog means deferred revenue that will eventually be recognized (or lost if customers churn). Also: not identifying PE monitoring fees as a post-acquisition cost addition.",
      alternatives: "Could structure by pre-acquisition baseline vs. post-acquisition changes, making the PE firm's interventions the primary diagnostic lens. This is less MECE but more action-oriented."
    },
    rubric: [
      { id: "ps-033-r1", text: "Correctly identifies that flat revenue means the problem is entirely cost-side" },
      { id: "ps-033-r2", text: "COGS / gross margin deterioration is a branch, connected to the implementation backlog" },
      { id: "ps-033-r3", text: "G&A branch includes PE monitoring fees and ERP implementation as post-acquisition additions" },
      { id: "ps-033-r4", text: "Each major branch includes a specific data request to confirm or rule it out" },
      { id: "ps-033-r5", text: "Notes that the backlog is a leading indicator of future revenue risk, not just a cost signal" },
      { id: "ps-033-r6", text: "Issue tree is genuinely diagnostic — branches are testable hypotheses, not descriptive categories" }
    ]
  },

  {
    id: "ps-034",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: ["identifying-unknowns"],
    difficulty: "hard",
    question: "A country's birth rate has fallen by 35% over 20 years, reaching a historic low. Build an issue tree that could guide a government policy team analyzing this trend. Your tree must distinguish between proximate causes (the immediate mechanisms) and distal causes (the deeper structural drivers), and flag which issues are resolvable through policy and which are not.",
    context: "The country is a high-income OECD nation. The trend mirrors patterns seen across Japan, South Korea, and Southern Europe. Economic conditions during the period included rising housing costs (+85% real), a 12-year period of youth unemployment above 15%, and significant increases in educational attainment for women.",
    hints: [
      "Birth rate = (number of births) / (population). It can fall because fewer women are in peak childbearing years (demographic), because they are having children later (timing), or because they are having fewer children in total (fertility). These are different issues requiring different policy responses.",
      "Distinguish proximate causes (why are couples having fewer children right now?) from distal causes (why did the economic/social conditions that led to this develop?). The proximate causes include housing cost, childcare cost, career-family tradeoffs. The distal causes include labor market structures, housing supply constraints, cultural shifts in gender roles.",
      "Proximate: economic affordability (housing, childcare costs), career opportunity costs (especially for women), relationship formation rates (fewer people partnering/marrying), timing shifts (later first births, shorter childbearing window), stated preferences vs. actual fertility gap. Distal: housing supply policy failures, labor market rigidities (precarious youth employment), inadequate parental leave/childcare infrastructure, cultural norms around gender and domestic roles, changes in life goals and values."
    ],
    referenceSolution: {
      approach: "Build a two-tier issue tree: proximate mechanisms (what is directly suppressing births) and distal structural drivers (what created the conditions for each proximate mechanism).",
      reasoning: "Proximate causes: (1) Economic barriers — housing unaffordability (85% real price increase pricing out family formation), childcare costs exceeding second-income returns, income uncertainty (12-year youth unemployment above 15% creates precarity during prime family-formation years). (2) Opportunity cost — women's educational attainment increase raises the career cost of interrupting for childbearing; countries without strong parental leave see larger fertility penalty for educated women. (3) Partnership/relationship formation — delayed marriage and partnership formation, increased single living, reduced mating market efficiency. (4) Timing effects — mean age of first birth rising decompresses the childbearing window; some apparent rate decline is postponement, not permanent reduction. (5) Preference vs. outcome gap — surveys in OECD nations consistently show desired fertility (1.8-2.1) exceeding actual fertility (1.2-1.5); the gap is the policy opportunity. Distal drivers: housing supply constraints (zoning, planning), labor market structure (permanent vs. precarious employment), public childcare investment, cultural norms around gendered domestic work, urbanization (children are economically rational in rural areas, costly in cities). Policy tractability: economic barriers are most tractable (direct subsidies, housing supply reform, childcare investment). Opportunity costs are partially tractable (parental leave design). Cultural shifts and urbanization are largely not policy-resolvable on short timescales.",
      commonMistakes: "Treating the decline as a single-cause problem (e.g., 'just housing costs'). Also: not distinguishing postponement (same number of children, later) from permanent fertility reduction — policy responses differ significantly.",
      alternatives: "Could structure around the desired-vs-actual fertility gap specifically — this is more action-oriented, focusing only on the portion of the decline that reflects constrained choices rather than changed preferences."
    },
    rubric: [
      { id: "ps-034-r1", text: "Explicitly distinguishes proximate and distal causes in the tree structure" },
      { id: "ps-034-r2", text: "Economic affordability (housing, childcare) is identified as a proximate cause" },
      { id: "ps-034-r3", text: "Female educational attainment and career opportunity cost is included" },
      { id: "ps-034-r4", text: "Postponement vs. permanent fertility reduction is acknowledged as a diagnostic distinction" },
      { id: "ps-034-r5", text: "Policy tractability is assessed for at least three branches" },
      { id: "ps-034-r6", text: "Desired-vs-actual fertility gap is mentioned as a key diagnostic metric" }
    ]
  },

  {
    id: "ps-035",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: ["multi-skill-synthesis"],
    difficulty: "hard",
    question: "You are a strategy consultant. Your client is a mid-size newspaper that has seen print advertising revenue fall 80% over a decade while digital advertising grew only modestly. They are now losing money. Build an issue tree that diagnoses both the revenue problem and the cost problem, then use the tree to identify the two or three highest-leverage questions the CEO must answer before choosing a strategy.",
    context: "The newspaper has 180 full-time staff, 210,000 print subscribers (declining ~8% per year), and 1.2M monthly unique digital visitors. Digital advertising revenue is $4M/year. Print advertising was $40M/year ten years ago; it is now $8M. Subscription revenue (print + digital) is $18M/year. Total revenue: ~$30M. Estimated cost base: ~$38M.",
    hints: [
      "The newspaper is losing ~$8M/year on $30M revenue. There is both a structural revenue problem (secular decline of print advertising) and a potential cost structure misalignment. Start your issue tree from both angles.",
      "Revenue side: Can the advertising revenue decline be partially arrested, or is it terminal? What is the growth ceiling for digital subscriptions? Is there an unexploited revenue model (events, licensing, B2B)? Cost side: Is the cost base sized for the old revenue model? Where is the largest cost concentration — editorial, printing/distribution, or administration?",
      "Revenue tree: (1) Digital subscription potential — how many of the 1.2M visitors could convert at what price point? (2) Digital advertising — is $4M/$1.2M traffic = $3.33 CPM competitive? Is scale the constraint or monetization efficiency? (3) New revenue streams — events, newsletters, licensing, B2B data. (4) Print economics — at what subscriber volume does print become economically indefensible? Cost tree: (1) Content production — editorial headcount, freelance mix; (2) Print production and distribution — physical printing and delivery, likely 25-35% of cost base; (3) Overhead — building, admin, legacy tech. Highest-leverage questions: (a) What is the realistic subscriber conversion ceiling from 1.2M digital visitors? (b) Can the print operation be restructured or wound down before it becomes a cash crisis? (c) Is there a differentiated editorial position worth paying for digitally?"
    ],
    referenceSolution: {
      approach: "Build parallel revenue and cost issue trees, then use the trees to identify which branches have the most decision-forcing uncertainty — those are the highest-leverage questions.",
      reasoning: "Revenue issue tree: (1) Print advertising — is the decline recoverable (unlikely given secular shift) or must it be treated as a terminal line? At $8M and falling, it will reach ~$4M in 3 years at 8% annual decline. (2) Digital advertising — 1.2M monthly uniques generating $4M = ~$3.33 RPM. Industry benchmark for quality news content is $5-15 RPM. Is the gap a scale problem, a targeting capability problem, or a content premium problem? (3) Subscriptions — 210,000 print subscribers × assumed ~$60-80/year = ~$13-15M. Digital subs likely small. The critical question: if print subscribers age out (many are 60+), what is the 5-year subscription revenue trajectory? (4) New models — events, affiliate, licensing, B2B newsletters. Cost issue tree: (1) Content production (~50% of typical newspaper cost base) — editorial headcount, wire service fees, freelance. (2) Print and distribution (~25-30%) — paper, ink, presses, delivery. This is largely fixed regardless of print volume; winding down saves this entire bucket. (3) Overhead (~20%) — real estate, legacy IT, administration. Highest-leverage questions: (a) Print shutdown economics — what is the one-time cost vs. annual savings of shutting down print? This determines the crisis timeline. (b) Digital subscriber conversion rate — even 1% conversion of 1.2M visitors at $10/month = $1.44M ARR; 3% = $4.3M. What conversion rate is achievable? (c) Editorial identity — does the newspaper have a distinct enough voice to command digital subscription loyalty, or is it a commodity local news provider?",
      commonMistakes: "Spending all analytical energy on revenue recovery without modeling the cost structure — a newspaper can survive at lower revenue if costs are restructured. Also: treating print and digital as one business rather than recognizing they have fundamentally different cost structures.",
      alternatives: "Could frame as a 3-scenario tree: (1) digital-first transformation, (2) print wind-down + digital focus, (3) sale/merger — and build issue trees for each scenario's key questions."
    },
    rubric: [
      { id: "ps-035-r1", text: "Builds separate issue trees for revenue and cost problems" },
      { id: "ps-035-r2", text: "Print advertising is identified as secular-decline (not recovery candidate) rather than just a cost-cutting opportunity" },
      { id: "ps-035-r3", text: "Digital subscription conversion potential is quantified or bounded (even roughly)" },
      { id: "ps-035-r4", text: "Print production and distribution costs are identified as a separable, potentially eliminable cost bucket" },
      { id: "ps-035-r5", text: "Identifies 2-3 genuinely decision-forcing questions (not just more diagnostic branches)" },
      { id: "ps-035-r6", text: "Uses the provided data (1.2M visitors, $4M digital ad revenue, 210K print subs) to ground at least two branches" }
    ]
  },

  // ── HYPOTHESIS TREES (ps-036 to ps-040) ───────────────────────────────────

  {
    id: "ps-036",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: [],
    difficulty: "medium",
    question: "A mobile app's 7-day retention rate dropped from 42% to 28% immediately after a major product update. Build a hypothesis tree with at least three plausible root-cause hypotheses, order them by prior probability, and specify one falsifying test for each.",
    context: "The update introduced a redesigned onboarding flow, changed the navigation structure, and added three new features. The retention drop appeared within 48 hours of the release and affects both new and existing users.",
    hints: [
      "A hypothesis tree starts with a central question ('why did retention drop?') and branches into testable explanations. Each hypothesis should be specific enough to be falsifiable.",
      "Think about what the update actually changed: onboarding, navigation, features. Each change is a candidate cause. Also consider technical causes (bugs) and population effects (who was exposed to the update).",
      "H1 (highest prior): Navigation restructure caused disorientation — users can't find features they previously used. Test: compare session-level feature access between pre/post update cohorts. H2: New onboarding is too long/confusing, causing early drop-off before users reach the core value. Test: funnel analysis through onboarding steps post-update. H3: A technical bug introduced by the update causes crashes or freezes at a specific step. Test: crash analytics and error rates pre/post. H4 (lower prior): The new features are poor quality and undermine the app's perceived value. Test: usage rate and rating of new features specifically."
    ],
    referenceSolution: {
      approach: "Generate competing hypotheses for the retention drop, assign prior probability based on the magnitude and timing of the changes, then design falsifying tests (not confirming tests) for each.",
      reasoning: "H1 — Navigation redesign caused disorientation (highest prior, ~40%): A navigation change affects all users who had existing habits. Symptoms: shorter sessions, reduced feature breadth, higher exit rates from navigation screens. Test: compare average number of features accessed per session before vs. after; specifically look at whether users are accessing the same features they used pre-update. H2 — Onboarding redesign creates drop-off for new users (medium prior, ~30%): The timing matches (immediate drop), but if existing users are also affected, onboarding can't fully explain it. Test: segment retention by new vs. existing users — if only new users declined, onboarding is the primary culprit. H3 — Technical bug causing crashes (medium prior, ~25%): Major updates often introduce bugs. Symptoms: spike in crash rate, support tickets, app store review mentions. Test: check crash analytics (Firebase, Crashlytics), support ticket volume, app store reviews by version. H4 — Feature quality disappointment (low prior, ~5%): Users expected new features but find them poor quality. Test: feature engagement rate for new additions; would likely take more than 48 hours to manifest.",
      commonMistakes: "Listing hypotheses as categories ('product issue', 'technical issue') rather than specific, testable claims. Also: designing confirming tests ('look for evidence of navigation confusion') rather than falsifying tests ('if users access the same number of features as before, H1 is rejected').",
      alternatives: "Could structure hypotheses as a mutually exclusive decision tree (is it new users or existing users affected? → branches to onboarding vs. navigation hypotheses). This is cleaner when data segmentation is available."
    },
    rubric: [
      { id: "ps-036-r1", text: "At least three distinct, specific hypotheses are stated" },
      { id: "ps-036-r2", text: "Each hypothesis is specific enough to be falsified" },
      { id: "ps-036-r3", text: "Hypotheses are prioritized by prior probability with reasoning given" },
      { id: "ps-036-r4", text: "Each hypothesis has a falsifying test (not just a confirming test)" },
      { id: "ps-036-r5", text: "The new-vs-existing user segmentation is used to discriminate between hypotheses" }
    ]
  },

  {
    id: "ps-037",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: ["assumption-validation"],
    difficulty: "medium",
    question: "A direct-to-consumer food brand saw a 30% spike in customer acquisition cost (CAC) over one quarter despite keeping ad spend and channels constant. Build a hypothesis tree explaining the CAC increase, and for each hypothesis, identify the key assumption that must hold for it to be true.",
    context: "The brand spends $2M/month on paid social (Meta and TikTok). CAC went from $22 to $29. Conversion rate on landing pages is unchanged. The company has not changed its product, pricing, or creative in this period.",
    hints: [
      "CAC = total spend / number of new customers. If spend is constant and CAC went up, the number of new customers fell. That means the conversion funnel broke somewhere above the landing page.",
      "Work backwards through the funnel: click-through rate → landing page conversion → checkout completion. If landing page conversion is unchanged, where is the leakage? Also consider platform-level changes.",
      "H1: Ad platform algorithm changes reduced audience quality or efficiency (more impressions but lower-intent audiences). H2: Audience saturation — the brand has reached a high proportion of its addressable target audience, so new impressions are hitting people who've already decided not to buy. H3: Competitive conquest — a competitor has increased spend in the same audience pool, driving up CPMs. H4: Seasonal demand contraction — fewer people in the market for this product type this quarter."
    ],
    referenceSolution: {
      approach: "Use the funnel identity (CAC = CPM / CTR / CVR_landing / CVR_checkout × relevant constants) to locate where the efficiency dropped, then generate hypotheses for each potential failure point.",
      reasoning: "Landing page CVR is unchanged, so the drop is between ad impression and landing page arrival. This points to either CPM increase (same spend buys fewer clicks) or CTR decrease (same impressions but fewer clicks). H1 — Platform algorithm change (high prior): Meta and TikTok regularly update their auction algorithms and content policies. If the algorithm is now serving ads to lower-intent audiences, CTR falls without changing the ad or targeting settings. Key assumption: platform dynamics changed during the quarter. Test: compare CPM and CTR trends on each platform. H2 — Audience saturation (medium prior): Direct-to-consumer brands with fixed targeting parameters exhaust 'fresh' audiences over time. When frequency rises, CTR falls. Key assumption: frequency has risen significantly. Test: check frequency metrics per campaign; if average frequency > 3-4x, saturation is plausible. H3 — Competitive bidding pressure (medium prior): More advertisers targeting the same audience increases auction clearing prices (CPMs rise, not CTR). Key assumption: competitor ad spend in same audience increased. Test: check CPM trends — if CPM rose but CTR held, it's a cost-per-click problem, not an engagement problem. H4 — Seasonal demand shift (lower prior, unless known seasonal category): Fewer people are in the market this quarter. Key assumption: category has seasonal demand pattern. Test: check category-level search volume trends.",
      commonMistakes: "Blaming creative fatigue when the problem is told to have unchanged creatives. Also: not distinguishing between a CPM increase (cost-per-impression problem) and a CTR decrease (engagement problem) — they have different root causes.",
      alternatives: "Could structure as a funnel breakdown hypothesis tree: was the problem at impression quality, click-through, or post-click? The funnel structure is more systematic than generating hypotheses in isolation."
    },
    rubric: [
      { id: "ps-037-r1", text: "Recognizes that constant spend + higher CAC = fewer conversions entering the funnel" },
      { id: "ps-037-r2", text: "At least three specific, distinct hypotheses are generated" },
      { id: "ps-037-r3", text: "Each hypothesis has an identified key assumption" },
      { id: "ps-037-r4", text: "Distinguishes between CPM-driven and CTR-driven explanations" },
      { id: "ps-037-r5", text: "Audience saturation is mentioned as a platform-independent hypothesis" }
    ]
  },

  {
    id: "ps-038",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: ["challenging-defaults"],
    difficulty: "hard",
    question: "A pharmaceutical company's new drug showed strong Phase 2 trial results (p=0.02, n=120) but failed its Phase 3 trial (p=0.43, n=3,200). Build a hypothesis tree explaining the Phase 3 failure. Your answer should challenge the implicit assumption that 'the drug doesn't work' is the most likely explanation.",
    context: "Phase 2 measured a biomarker as the primary endpoint. Phase 3 measured clinical outcomes (hospitalization rates). The Phase 3 trial enrolled patients across 14 countries. Background standard-of-care treatment improved significantly in the 3 years between Phase 2 and Phase 3 completion.",
    hints: [
      "There are multiple reasons a drug can 'fail' a Phase 3 trial besides not working. Think about what changed between Phase 2 and Phase 3 in terms of patient population, endpoint, comparator, and context.",
      "Consider: endpoint mismatch (biomarker vs. clinical outcome), patient population differences (Phase 2 selected patients, Phase 3 broader enrollment), comparator issue (standard of care improved so the control arm did better), and operational issues across 14 countries.",
      "H1 (highest prior): Biomarker-outcome gap — the drug improves the biomarker but the biomarker doesn't actually predict the clinical outcome measured in Phase 3. This is a surrogate endpoint validity problem. H2: Improved standard of care narrowed the treatment effect — the control arm in Phase 3 benefited from better background therapy, so the drug's marginal benefit appears smaller even if it still works. H3: Heterogeneous patient population — Phase 3's broader enrollment included non-responder subpopulations that diluted the effect. H4: Trial operational issues — 14-country enrollment creates consistency problems in diagnosis, endpoint adjudication, and adherence."
    ],
    referenceSolution: {
      approach: "Challenge the default interpretation ('drug is ineffective') by systematically exploring methodological, contextual, and operational explanations for the Phase 3 failure before accepting a null result.",
      reasoning: "H1 — Surrogate endpoint invalidity (highest prior, ~35%): Phase 2 used a biomarker endpoint; Phase 3 used hospitalization rates. Biomarkers are often validated as surrogates only within specific contexts. If the drug modulates the biomarker without actually affecting the disease pathway that leads to hospitalization, Phase 2 would show a 'significant' result that Phase 3 correctly refutes. This is a fundamental trial design issue. Key test: does the biomarker have prior validated correlation with hospitalization in this indication? H2 — Standard of care improvement (high prior, ~30%): The control arm in Phase 3 was treated with a significantly improved standard of care compared to Phase 2 (3-year improvement period). If the drug adds $x$ effect on top of a baseline, but the baseline improved by $2x$, the absolute benefit shrinks and may fall below the trial's minimum detectable effect. This doesn't mean the drug doesn't work — it means the marginal benefit in a high-treatment-standard environment is small. Key test: compare control arm hospitalization rates between Phase 2 and Phase 3 expected rates. H3 — Population heterogeneity / subgroup effect (medium prior, ~20%): Phase 2 with n=120 may have enrolled a selected, responsive population (often via stricter inclusion criteria or academic centers). Phase 3's 3,200 patients across 14 countries includes less carefully screened patients. If the drug works only in a subpopulation (e.g., patients with high baseline biomarker levels), the Phase 3 aggregate result dilutes the effect. Key test: subgroup analysis by biomarker level, enrollment site quality, and patient characteristics. H4 — Trial quality / operational issues (lower prior, ~15%): 14-country trials have adherence variability, site-level quality differences, and endpoint adjudication inconsistencies. An intention-to-treat analysis with poor adherence dilutes observed effects. Key test: adherence rates, site-level effect estimates, adjudication reproducibility.",
      commonMistakes: "Accepting 'the drug doesn't work' as the default without recognizing that trial design and context changes between phases are common causes of Phase 3 failure. This is not cherry-picking — it's rigorous hypothesis evaluation before a major write-off decision.",
      alternatives: "Could structure as: 'drug truly doesn't work' vs. 'drug works but trial failed to detect it' — this is a clean binary split that forces the analyst to take both branches seriously."
    },
    rubric: [
      { id: "ps-038-r1", text: "Does not accept 'drug doesn't work' as the only or default hypothesis" },
      { id: "ps-038-r2", text: "Surrogate endpoint invalidity is identified and explained" },
      { id: "ps-038-r3", text: "Standard-of-care improvement as a diluter of effect size is identified" },
      { id: "ps-038-r4", text: "Subgroup heterogeneity (responder vs. non-responder population) is raised" },
      { id: "ps-038-r5", text: "Each hypothesis has a specified test or data source to evaluate it" },
      { id: "ps-038-r6", text: "The response acknowledges this distinction matters for billion-dollar development decisions" }
    ]
  },

  {
    id: "ps-039",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "hard",
    question: "A logistics company's on-time delivery rate dropped from 94% to 81% over three months. Management's working hypothesis is 'driver shortage is the problem.' Build a hypothesis tree that both evaluates management's hypothesis and generates alternatives. Then explain how you would determine which hypothesis deserves the most resource to investigate first.",
    context: "The company operates in 8 cities. The decline is concentrated in 3 of the 8 cities. Driver headcount company-wide is down 4%. A new last-mile routing software was deployed 3 months ago. Two of the three affected cities had unusual weather events in month 2.",
    hints: [
      "Management's hypothesis (driver shortage) is plausible but underdetermined — a 4% headcount reduction doesn't obviously explain a 16-point OTD decline. Start by testing if the hypothesis is even quantitatively consistent with the data.",
      "The geographic concentration (3 of 8 cities) is your most important diagnostic clue. A driver shortage would likely affect all cities. What would explain a localized problem?",
      "H1 (management's): Driver shortage — 4% fewer drivers means more packages per driver, more late deliveries. Tension: 4% shortage causing 13-point decline is a large multiplier. H2 (higher prior given the data): Routing software bug or misconfiguration in the affected cities specifically — software deployed 3 months ago (same timing), and issues are geographically concentrated. H3: Weather events caused a temporary backlog that created a cascading delay cycle in months 2-3 in the two affected cities. H4: One of the 3 affected cities has a unique local issue (new terminal, management change, major customer volume spike)."
    ],
    referenceSolution: {
      approach: "Evaluate management's hypothesis quantitatively and against the geographic pattern, generate alternatives that better explain the localization, then prioritize investigation based on explanatory power and cost of verification.",
      reasoning: "Evaluating management's hypothesis: A 4% driver headcount reduction causing a 13-point OTD decline (94% to 81%) implies a highly nonlinear relationship — this is suspicious. Driver capacity constraints become highly nonlinear near capacity, but only if the system was already near capacity. If routes were previously buffered, 4% reduction should produce a more modest decline. Additionally, a company-wide 4% shortage should affect all 8 cities roughly equally — not concentrate in 3 cities. This doesn't falsify the hypothesis but significantly reduces its prior. Alternative hypotheses: H2 — Routing software misconfiguration (strong candidate): The software was deployed 3 months ago, exactly matching the timing of the decline. Geographic concentration suggests a city-level configuration issue — different city-level settings, zone mapping errors, or traffic model calibration issues. Test: compare route efficiency metrics (planned vs. actual delivery time) before and after software deployment in affected vs. unaffected cities. H3 — Weather-induced backlog cascade: Two of three affected cities had weather events in month 2. Weather creates a one-day backlog that, if not cleared, cascades into following weeks. Test: check if OTD decline in those two cities started specifically in month 2 vs. month 1. H4 — City-specific operational issues: One city is affected but had no weather events and is presumably unrelated to weather. This city may have a different root cause (new warehouse, management change, major volume spike from a new customer). Test: investigate the third city specifically. Prioritization: H2 (routing software) should be investigated first because: (1) timing matches exactly, (2) geographic concentration matches configuration-level differences, (3) verification is cheap (compare route efficiency metrics across city groups), and (4) if true, it's fixable without hiring. The 4% driver shortage should be deprioritized until H2 is ruled out.",
      commonMistakes: "Accepting management's hypothesis without testing it quantitatively against the available data. Also: not recognizing that geographic concentration is the single most important clue, as it rules out or dramatically reduces the probability of any system-wide driver.",
      alternatives: "Could structure as a decision tree where the first branch is 'is this a system-wide or localized issue?' — if localized, the hypothesis space narrows immediately to city-specific causes."
    },
    rubric: [
      { id: "ps-039-r1", text: "Tests management's hypothesis quantitatively (4% shortage vs. 13-point decline)" },
      { id: "ps-039-r2", text: "Uses geographic concentration to challenge the driver shortage hypothesis" },
      { id: "ps-039-r3", text: "Routing software is identified as a high-prior alternative with timing and geographic match" },
      { id: "ps-039-r4", text: "Weather-cascade hypothesis is evaluated and limited to the two weather-affected cities" },
      { id: "ps-039-r5", text: "A principled prioritization of which hypothesis to investigate first is given" },
      { id: "ps-039-r6", text: "Specifies a cheap falsification test for the highest-priority hypothesis" }
    ]
  },

  {
    id: "ps-040",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: ["cross-domain-reasoning"],
    difficulty: "hard",
    question: "Over the past decade, reading comprehension scores among 15-year-olds in a developed country have declined consistently, while the country's educational spending per student increased by 30% in real terms. Build a hypothesis tree explaining this paradox. Your tree must address hypotheses at three levels: within-school factors, outside-school factors, and measurement/methodology factors.",
    context: "Smartphone ownership among teenagers reached 85% over this period. The country's income inequality (Gini coefficient) rose from 0.28 to 0.34. Schools adopted more standardized curricula during this period. The test used to measure reading comprehension is the same as used 10 years ago.",
    hints: [
      "The paradox is: more money, worse outcomes. This could mean spending is inefficient, or it means factors outside school are worsening faster than school improvements can compensate.",
      "Use the three-level structure: (1) What within-school factors could explain declining comprehension despite more spending? (2) What outside-school changes during this period could explain the decline independent of schools? (3) Could the measurement itself be biased?",
      "Within-school: spending went to wrong things (administration, technology, facilities rather than instruction quality), standardized curricula reduced deep reading, teacher quality stagnated. Outside-school: smartphone and social media use competing with reading time, reduced family reading culture, inequality rise means a growing share of students face socioeconomic barriers (hunger, instability, lower parental engagement) — inequality is a known reading outcome predictor. Measurement: test is unchanged but student population may have changed (immigration patterns, demographic shifts altering the sample)."
    ],
    referenceSolution: {
      approach: "Structure hypotheses at three levels (within-school, outside-school, measurement), test each against the contextual clues provided, and note which hypotheses would require the government to change its response strategy most dramatically.",
      reasoning: "Within-school hypotheses: (H1) Spending went to non-instructional areas — a 30% real increase could fund administrative bloat, building upgrades, or technology rather than teacher quality and instruction time. Evidence needed: breakdown of spending by category over time. (H2) Standardized curricula reduced deep reading practice — teaching to standardized tests reduces extended text engagement in favor of passage-level comprehension drills. This can improve test scores short-term but reduce the underlying skill. (H3) Teacher quality stagnated or declined despite spending — if spending went to other areas, teachers may be the same quality while facing more demanding conditions. Outside-school hypotheses: (H4) Smartphone/social media displaced reading time — 85% smartphone ownership among teenagers is associated with significantly reduced leisure reading time; screen time and shallow reading (social media, short-form content) may crowd out deep reading practice. This is a strong candidate. (H5) Rising inequality created a growing low-reading-environment subgroup — a Gini rise from 0.28 to 0.34 is substantial; students in lower-income households have fewer books at home, less parental reading time, and higher stress levels. If the inequality-affected subgroup is large and growing, aggregate scores can fall even if median outcomes improve. (H6) Family reading culture declined independently of smartphones — book reading by adults declined this period in most developed countries. Measurement hypotheses: (H7) Population composition change — immigration or demographic changes may have altered the tested population composition; if more test-takers come from lower-literacy-baseline backgrounds, aggregate scores fall independent of any school effect. (H8) Test is measuring the same skill in a world where the skill's relationship to literacy changed — unlikely but worth noting. Priority: H4 and H5 are the strongest candidates because they explain why spending increases couldn't compensate — they represent forces external to school that grew faster than educational investment.",
      commonMistakes: "Treating the spending increase as a control variable (i.e., spending didn't cause the decline) and forgetting that spending composition matters as much as spending level. Also: ignoring inequality as a systematic explainer across many education outcome paradoxes.",
      alternatives: "Could frame as: 'within the school system's control' vs. 'outside the school system's control' — this is more actionable for policy, though less analytically rigorous than the three-tier structure."
    },
    rubric: [
      { id: "ps-040-r1", text: "Uses all three levels: within-school, outside-school, and measurement" },
      { id: "ps-040-r2", text: "Spending composition (what it was spent on) is distinguished from spending level" },
      { id: "ps-040-r3", text: "Smartphone/screen time is raised as an outside-school factor" },
      { id: "ps-040-r4", text: "Rising inequality is connected to reading outcome decline" },
      { id: "ps-040-r5", text: "Population composition change is considered as a measurement-level hypothesis" },
      { id: "ps-040-r6", text: "The response identifies which hypotheses would require a different policy response (not just more spending)" }
    ]
  },

  // ── LOGIC TREES (ps-041 to ps-045) ────────────────────────────────────────

  {
    id: "ps-041",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: [],
    difficulty: "medium",
    question: "A startup is deciding whether to raise a Series A round now or wait 12 months. Build a logic tree for the 'raise now' recommendation. Each branch should represent a logical reason that supports the recommendation, and the overall structure should demonstrate that if the branches are true, the conclusion follows.",
    context: undefined,
    hints: [
      "A logic tree (also called a 'why tree') starts with a conclusion and builds supporting reasons beneath it. Each node should be a statement that, if true, contributes to the parent node being true.",
      "Start with the top claim: 'The startup should raise now.' Then ask: what would need to be true for this to be correct? Think about market conditions, internal readiness, and opportunity cost of waiting.",
      "Branch 1: Market conditions favor raising now (interest rates, investor appetite, comparable valuations are currently attractive). Branch 2: The startup's current metrics are strong enough to command a good valuation (product-market fit signals, growth rate, engagement). Branch 3: Waiting creates material risk (runway may run out, market window could close, key talent may leave without capital). Branch 4: The capital would unlock a specific growth lever that is time-sensitive."
    ],
    referenceSolution: {
      approach: "Build a logic tree where each branch is a necessary supporting reason for the 'raise now' conclusion, structured so the branches collectively make the conclusion logically follow.",
      reasoning: "Claim: Raise Series A now. Supporting branch 1 — External funding environment is favorable: Investor appetite for this category is currently strong, not weakening; comparable company valuations are at reasonable levels; macro interest rate environment supports venture investment. Supporting branch 2 — Internal readiness and metrics justify a strong valuation: The company has demonstrated product-market fit (retention, NPS, engagement metrics above threshold); revenue or growth metrics fall in Series A benchmark range ($1-3M ARR or high growth rate); team is fundable (experienced, credible to investors). Supporting branch 3 — Cost/risk of waiting is high: Current runway is less than 18 months (too close for comfort); waiting 12 months means raising in an uncertain future environment; team attrition risk without near-term fundraise signal. Supporting branch 4 — Capital has identified, time-sensitive deployment: A specific market expansion or hire is available now that will close if not funded soon; a key competitor is raising and will gain advantage without a counterinvestment.",
      commonMistakes: "Building a tree where branches are conditions rather than reasons — 'investor appetite is strong' is a reason, not a precondition. Also: not checking that the branches actually support the conclusion (a good funding environment alone doesn't mean 'raise now' — internal readiness must also hold).",
      alternatives: "Could build a balanced logic tree with both 'raise now' and 'wait 12 months' branches to force direct comparison. This is more powerful for decision-making than a one-sided logic tree."
    },
    rubric: [
      { id: "ps-041-r1", text: "Tree starts from a clear conclusion statement, not a question" },
      { id: "ps-041-r2", text: "At least three distinct supporting branches are presented" },
      { id: "ps-041-r3", text: "Branches address both external (market) and internal (company) dimensions" },
      { id: "ps-041-r4", text: "The logic is valid: if branches hold, the conclusion genuinely follows" }
    ]
  },

  {
    id: "ps-042",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: ["structured-argumentation"],
    difficulty: "medium",
    question: "A company is considering automating its customer service function with an AI chatbot. Build a logic tree to support the recommendation: 'Automate 60% of customer service interactions but retain human agents for complex cases.' Ensure the tree demonstrates why partial automation is preferable to both no automation and full automation.",
    context: "The company handles 50,000 customer service interactions per month. 62% are tier-1 queries (password resets, order status, standard returns) with identical resolution processes. 38% involve judgment, complaints, or emotional situations requiring empathy.",
    hints: [
      "Your logic tree needs to support a nuanced recommendation (partial automation). Build at least one branch that explains why full automation fails, and one that explains why no automation fails.",
      "The case for partial automation rests on: (1) efficiency gains from automating the repetitive tier-1 volume, and (2) quality/risk concerns from automating complex cases.",
      "Supporting the 60% threshold: Tier-1 queries (62% of volume) have algorithmic resolution processes — automation achieves near-human accuracy on these. Full automation argument against: 38% require empathy, judgment, and escalation paths; automation errors on complaints cause disproportionate brand damage. No-automation argument against: 31,000 monthly tier-1 interactions are unnecessarily expensive to route to humans; cost savings are substantial and satisfaction is equal or better for password resets done by bot. Optimal structure: AI handles tier-1 with human fallback; humans focus on tier-2/3 where they add unique value."
    ],
    referenceSolution: {
      approach: "Build a logic tree that supports the 60% automation recommendation through two parallel argument lines: (1) why automation is justified for the tier-1 subset, and (2) why human retention is justified for the complex subset.",
      reasoning: "Claim: Automate 60% of interactions, retain humans for complex cases. Branch A — Tier-1 automation is justified: (A1) Tier-1 queries have deterministic resolution paths (same input → same correct output), making them well-suited to AI. (A2) 62% of volume is tier-1, so automation reaches 60% with safety margin. (A3) Bot satisfaction scores for tier-1 interactions are equal to or higher than human agents (faster, always available). (A4) Cost savings are substantial: at $4-8/human-handled interaction, automating 31,000 interactions/month = $120-250K/month savings. Branch B — Human retention for complex cases is justified: (B1) Tier-2/3 cases (complaints, escalations, emotional situations) require empathy and situational judgment — AI error rates are materially higher. (B2) Errors on complex cases cause disproportionate brand damage (social media amplification, churn). (B3) The 38% complex cases are exactly the high-lifetime-value interactions where human touch increases retention. Branch C — Full automation is inadvisable: (C1) follows from B1+B2. Branch D — No automation is inadvisable: (D1) follows from A1+A4.",
      commonMistakes: "Building only the case for automation without the case against full automation — a recommendation for partial automation must also explain why full automation is wrong. Also: not using the 62% tier-1 data from the context.",
      alternatives: "Could structure as a decision matrix (automation level × interaction type) rather than a logic tree — more intuitive for stakeholders but less rigorous as a logical argument."
    },
    rubric: [
      { id: "ps-042-r1", text: "Logic tree supports the specific recommendation (60%, not generic automation)" },
      { id: "ps-042-r2", text: "Includes a branch arguing against full automation, not just for partial automation" },
      { id: "ps-042-r3", text: "Uses the 62% tier-1 data to anchor the recommendation" },
      { id: "ps-042-r4", text: "Distinguishes why tier-1 is automatable (deterministic) vs. why tier-2/3 is not (judgment/empathy)" },
      { id: "ps-042-r5", text: "Each branch is a logical claim, not just a descriptive category" }
    ]
  },

  {
    id: "ps-043",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: ["first-principles-analysis"],
    difficulty: "hard",
    question: "You are advising a government on whether to implement a four-day work week as a national policy. Build a logic tree for the position: 'A four-day work week mandate would be net negative for the national economy.' Then identify the three branches of the tree that are most empirically contested, and explain what evidence would change your conclusion.",
    context: "Several companies and Iceland have run four-day work week trials showing maintained or increased productivity. The proposal is for a national mandate (not voluntary). The economy includes significant service sectors (healthcare, hospitality, retail) that currently operate on shift-based schedules.",
    hints: [
      "The claim is 'net negative for the national economy.' Build supporting reasons. Then critically examine each reason by testing whether the empirical evidence supports it.",
      "Arguments for net negative: productivity is not universally maintained, shift-based sectors face higher costs not offset by efficiency, smaller firms face higher compliance costs, international competitiveness could suffer. Arguments that are contested: whether productivity gains from company trials generalize to a national mandate.",
      "Most contested branches: (1) Whether productivity gains from voluntary company trials generalize to mandatory nationwide policy — selection bias in trials (enthusiastic companies) may not generalize. (2) Whether shift-based sectors (healthcare, retail, hospitality — ~40% of economy) can absorb a 20% labor time reduction without service degradation or cost increase. (3) Whether the GDP impact is negative — depends on whether output per hour rises enough to compensate for fewer hours worked."
    ],
    referenceSolution: {
      approach: "Build the logic tree for the 'net negative' position rigorously, then act as an honest analyst by flagging which branches have the weakest empirical support and specifying evidence that would overturn the conclusion.",
      reasoning: "Claim: National four-day work week mandate would be net negative. Branch 1 — Productivity gains from trials do not generalize to mandates: Company trials are self-selected (motivated, high-trust employers); a mandate includes firms that are poor candidates for this model; coercive implementation likely produces compliance gaming rather than genuine restructuring. Contestedness: HIGH — there is limited evidence on mandatory vs. voluntary. Branch 2 — Shift-based sectors face irreducible cost increases: Healthcare, hospitality, and retail represent ~35-45% of employment; these sectors schedule staff based on customer demand patterns that don't compress into 4 days; the result is either service reduction or higher per-unit labor costs (same service, more shift-hours needed). Contestedness: MEDIUM — depends on sector composition and how the policy handles shift workers. Branch 3 — SME compliance costs are disproportionate: Large firms can redesign workflows; small businesses (fewer than 50 employees) have less flexibility and bear higher relative compliance costs. Contestedness: MEDIUM — empirical evidence from actual mandates is sparse. Branch 4 — International competitiveness cost: For export-facing sectors, if labor output hours fall without proportional productivity gains, unit labor costs rise, reducing competitiveness. Contestedness: HIGH — entirely depends on productivity assumption. Evidence that would change conclusion: (a) Controlled natural experiment (a country mandating the policy) showing GDP-per-capita or labor productivity maintained or improved, specifically including shift-based sectors. (b) Evidence that Iceland's voluntary trial outcomes generalize to mandatory implementation. (c) Mechanism by which shift-based sector service delivery is maintained with fewer hours.",
      commonMistakes: "Building only a one-sided logic tree and not identifying where the argument is empirically weak. The value of this exercise is demonstrating analytical honesty — the strongest analysts can argue a position and identify its vulnerabilities.",
      alternatives: "Could build a logic tree for the opposite position ('net positive') and then compare which tree is better supported — this structure is useful for policy debates where the answer is genuinely uncertain."
    },
    rubric: [
      { id: "ps-043-r1", text: "Logic tree builds a coherent multi-branch argument for the 'net negative' position" },
      { id: "ps-043-r2", text: "Shift-based sectors are specifically addressed as a branch" },
      { id: "ps-043-r3", text: "Correctly identifies the voluntary-to-mandatory generalizability problem as highly contested" },
      { id: "ps-043-r4", text: "Three branches are identified as empirically contested with reasoning for each" },
      { id: "ps-043-r5", text: "Specifies concrete evidence that would overturn the conclusion" },
      { id: "ps-043-r6", text: "Response demonstrates analytical honesty — argument is made but vulnerabilities acknowledged" }
    ]
  },

  {
    id: "ps-044",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: ["bounding-estimates"],
    difficulty: "hard",
    question: "Evaluate the following logic tree for logical validity and identify all flaws: Claim: 'Our company should expand into the German market.' Branch 1: Germany is one of Europe's largest economies. Branch 2: Our product has been successful in the US, which is also a large economy. Branch 3: There is no dominant competitor in Germany. Branch 4: Our CEO speaks German. Conclude: Therefore, we should expand into Germany.",
    context: undefined,
    hints: [
      "A logic tree is valid if the branches collectively provide sufficient reason for the conclusion, and each branch is relevant and correctly specified. Test each branch against these criteria.",
      "Ask for each branch: Is it logically necessary for the conclusion? Is it sufficient? Is it stated correctly? Is it relevant? Then check whether the branches together actually support the conclusion.",
      "Branch 1 flaw: size of economy ≠ market opportunity for this specific product. Branch 2 flaw: success in a large economy doesn't imply success in a different large economy (false analogy — ignores regulatory differences, cultural fit, localization needs). Branch 3 flaw: no dominant competitor could mean the market is uncontested (good) or that demand doesn't exist (bad) — this branch is ambiguous and incomplete. Branch 4 flaw: the CEO's language ability is irrelevant to the expansion's strategic merits. Structural flaw: the branches are not collectively sufficient — they don't address whether there is customer demand for the product, what the entry cost would be, or what the strategic priority is relative to other opportunities."
    ],
    referenceSolution: {
      approach: "Evaluate each branch for logical relevance, validity, and sufficiency, then assess whether the branches collectively support the conclusion even if individually corrected.",
      reasoning: "Branch 1 — 'Germany is a large economy': This is a necessary but not sufficient condition. Market size in GDP doesn't directly indicate addressable market for a specific product. A correct branch would be: 'Germany has a large, reachable addressable market for our specific product category.' Flaw: overly general; fails the relevance test. Branch 2 — 'Our product succeeded in the US, which is also large': This is a false analogy. Success in the US doesn't predict success in Germany because: (a) customer preferences differ, (b) regulatory environment differs (GDPR, sector-specific regulations), (c) competitive dynamics differ, (d) distribution channels differ, (e) localization may be needed. Flaw: non-sequitur (size is the wrong axis of comparison). Branch 3 — 'No dominant competitor in Germany': This is genuinely ambiguous. The absence of a dominant competitor could mean: (a) a blue ocean opportunity (good), or (b) no proven demand exists (bad). The branch as stated proves too little — a correct version would be: 'No dominant competitor exists despite demonstrated demand in the German market.' Flaw: incomplete; can support the opposite conclusion depending on interpretation. Branch 4 — 'CEO speaks German': Entirely irrelevant to the strategic merits of the expansion. The CEO's language ability does not change whether the market is attractive or whether expansion creates value. Flaw: irrelevant premise. Structural flaw: Even if all four branches were correct, the tree is missing critical branches: Is expansion into Germany the best use of capital and organizational bandwidth? What is the expected ROI compared to other expansion options? Can we serve German customers given our operational capabilities? The logic tree as a whole has an exhaustiveness failure — it doesn't cover the key questions for the conclusion.",
      commonMistakes: "Only identifying the most obvious flaw (CEO language) while missing the deeper structural issue (branches are not collectively sufficient for the conclusion even if individually correct).",
      alternatives: "A correct logic tree for 'expand into Germany' would need at least: evidence of customer demand (not just market size), unit economics that work in Germany, competitive advantage that translates, and operational feasibility."
    },
    rubric: [
      { id: "ps-044-r1", text: "Identifies Branch 2 as a false analogy (size ≠ fit, US success ≠ Germany success)" },
      { id: "ps-044-r2", text: "Identifies Branch 3 as ambiguous (no competitor could mean no demand)" },
      { id: "ps-044-r3", text: "Identifies Branch 4 as logically irrelevant" },
      { id: "ps-044-r4", text: "Identifies the collective exhaustiveness failure (missing branches for demand, ROI, operational fit)" },
      { id: "ps-044-r5", text: "Distinguishes between necessary and sufficient conditions in analyzing Branch 1" },
      { id: "ps-044-r6", text: "Proposes what a corrected logic tree would need to include" }
    ]
  },

  {
    id: "ps-045",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: ["pyramid-principle"],
    difficulty: "hard",
    question: "Build a logic tree to support the following claim to a board of directors: 'We should not acquire Acme Corp despite its attractive price.' Your tree must address and rebut the primary pro-acquisition argument (the price is attractive), and it must be structured so it could be communicated using the pyramid principle in a 3-minute board presentation.",
    context: "Acme Corp is a competitor being sold at 4.5x revenue, which is 40% below comparable acquisition multiples in the industry. Acme has $30M ARR but has been declining at 12% per year for 3 years. Your company has $80M ARR and is growing at 18%. Integration of Acme's legacy codebase would require an estimated 18-24 months of engineering effort. Acme's top 3 salespeople have already accepted offers elsewhere.",
    hints: [
      "The board expects you to address the price argument head-on — do not avoid it. Build a branch that says 'the discount is warranted/explained' rather than ignoring the valuation.",
      "The anti-acquisition case rests on: (1) the discount reflects real problems (declining ARR makes 4.5x revenue on a declining base more expensive than it looks), (2) integration cost and distraction are material, (3) key assets (people) are already leaving.",
      "Rebuttal of price argument: The 40% discount is explained by 12% YoY decline. At 12% annual decline, Acme's ARR in 3 years is ~$20M — the effective multiple on future revenue is higher, not lower. Integration cost: 18-24 months of senior engineering time costs $8-15M in salary alone and creates 1.5-2 years of opportunity cost (features not built, your 18% growth not accelerated). Talent walking: the salespeople leaving means the ARR decline will likely accelerate post-announcement."
    ],
    referenceSolution: {
      approach: "Build a logic tree that directly rebuts the price argument and presents three independent reasons to reject the acquisition, structured pyramid-style (conclusion first, then supporting branches, then evidence).",
      reasoning: "Claim: Do not acquire Acme Corp. [Communicate this first.] Branch 1 — The price discount reflects real, accelerating value destruction, not a bargain: 4.5x revenue on a $30M base sounds attractive vs. 7.5x market comps, but Acme is declining 12%/year. In 3 years the ARR will be ~$20M; the effective price is 6.75x forward revenue — not a 40% discount at all. Additionally, the 12% decline rate may accelerate post-acquisition (customer uncertainty, brand disruption). Branch 2 — Integration cost consumes the value created by the 'discount': Engineering effort of 18-24 months has direct cost ($8-15M in salary) and enormous opportunity cost (diverts your most capable engineers from features that support 18% growth to legacy code cleanup). The integration risk is high — legacy codebases often take longer than estimated. At a $50M acquisition price, integration costs eat 20-30% of the deal value before synergies. Branch 3 — Key assets are already departing, making the acquisition worse than stated: The 3 top salespeople leaving means you are not acquiring a functional sales team — you are inheriting accounts with no relationship managers. Customer churn in the 6 months post-close will likely be above-normal. You may be buying logos, not a business. Pyramid structure for presentation: Headline (30 sec): 'We recommend against the Acme acquisition.' Context (30 sec): 'The price looks attractive at 4.5x vs. 7.5x comps.' Key message (30 sec): 'The discount is explained by declining value, not hidden cheapness.' Three supporting reasons (90 sec): [Branch 1], [Branch 2], [Branch 3]. Close (30 sec): 'Our $80M ARR growing at 18% should not be distracted by a $30M ARR declining at 12%.'",
      commonMistakes: "Not directly addressing the price argument — boards will push back if the presentation ignores the most obvious pro-acquisition reason. Also: building a generic 'acquisitions are risky' logic tree rather than a specific argument grounded in Acme's data.",
      alternatives: "Could build a logic tree that quantifies the expected NPV of the acquisition (acquisition price vs. DCF of Acme's declining ARR, minus integration costs) rather than a qualitative argument — this would be more persuasive to a financially sophisticated board."
    },
    rubric: [
      { id: "ps-045-r1", text: "Directly addresses and rebuts the 'attractive price' argument using the declining ARR math" },
      { id: "ps-045-r2", text: "Calculates or estimates forward revenue multiple showing the discount is illusory" },
      { id: "ps-045-r3", text: "Integration cost and opportunity cost are quantified or bounded" },
      { id: "ps-045-r4", text: "Talent departure is identified as destroying a key asset of the deal" },
      { id: "ps-045-r5", text: "The tree structure maps to a pyramid-principle presentation (conclusion first)" },
      { id: "ps-045-r6", text: "Each branch is a self-standing reason (the conclusion holds even if one branch is challenged)" }
    ]
  },

  // ── FRAMEWORK SELECTION (ps-046 to ps-050) ────────────────────────────────

  {
    id: "ps-046",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: ["competitive-analysis"],
    difficulty: "medium",
    question: "A mid-size grocery chain is trying to understand why it is losing market share to both discount chains and premium organic stores simultaneously. Which analytical framework(s) would you choose to diagnose this problem, and why? Explain what you would learn from each framework and what it would miss.",
    context: undefined,
    hints: [
      "This is a competitive positioning problem, but it also has a strategy and market dynamics dimension. Think about which frameworks are designed for competitive analysis vs. strategic positioning vs. market segmentation.",
      "Consider Porter's Five Forces, the Value Curve (Blue Ocean), customer segmentation analysis, and the 'stuck in the middle' positioning concept from Porter's Generic Strategies.",
      "Porter's Generic Strategies is most diagnostic here: losing to discounters on price AND to premium players on quality suggests the chain is 'stuck in the middle' — not cheap enough for price-sensitive customers, not premium enough for quality-seekers. Five Forces: useful for understanding structural attractiveness but less useful for diagnosing why this specific chain is losing. Value Curve: maps the chain's differentiation on key attributes vs. competitors — visually shows where the chain is undifferentiated. Customer segmentation: identifies whether the chain's target customer segment is eroding."
    ],
    referenceSolution: {
      approach: "Select frameworks based on what diagnostic question each answers, explain what each reveals and what it misses, and indicate which framework to prioritize.",
      reasoning: "Porter's Generic Strategies / 'stuck in the middle' (primary): The symptom — losing to both low-cost and premium competitors — is the classic diagnostic for a 'stuck in the middle' positioning. Porter argues that competing without a clear cost leadership or differentiation position produces mediocre results on both dimensions. This framework immediately flags that the chain may need to choose a direction. What it reveals: strategic positioning diagnosis. What it misses: specific execution gaps. Value Curve Analysis / Blue Ocean Strategy (secondary): Maps the chain's performance on key competitive dimensions (price, product quality, organic selection, convenience, store experience, private label, etc.) against discount and premium competitors. This visualizes where the chain is undifferentiated and where it could potentially find a distinct position. What it reveals: specific attribute-level gaps. What it misses: customer segment priorities. Customer Segmentation (supporting): Identifies which customer segments are defecting to which competitor, and why. Price-sensitive families defecting to discount chains have different needs than health-conscious households going to premium stores. What it reveals: which customer groups are movable and which have structurally different needs. What it misses: macro competitive dynamics. Porter's Five Forces: Least useful here — it explains industry attractiveness, not why this specific chain is underperforming. Better applied if the question were 'should we enter grocery retail?' Priority: Start with the Value Curve to quantify the positioning gap, then use customer segmentation to identify which direction to move.",
      commonMistakes: "Listing every business framework without explaining the selection logic. Also: choosing Five Forces for a competitive positioning problem (Five Forces diagnoses industry structure, not firm-level positioning).",
      alternatives: "Jobs-to-be-Done analysis could complement the above by revealing what 'jobs' different customer segments are hiring the grocery chain for — this is useful for identifying an uncontested positioning."
    },
    rubric: [
      { id: "ps-046-r1", text: "Identifies 'stuck in the middle' / Porter's Generic Strategies as the primary diagnostic framework" },
      { id: "ps-046-r2", text: "For each framework selected, explains what it reveals and what it misses" },
      { id: "ps-046-r3", text: "Does not select Five Forces as the primary framework (explains why it's less useful here)" },
      { id: "ps-046-r4", text: "Recommends a prioritization or sequencing among frameworks" }
    ]
  },

  {
    id: "ps-047",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: ["business-model-evaluation"],
    difficulty: "medium",
    question: "A founder is trying to decide whether to build a marketplace or a SaaS product to address a B2B workflow problem. She has identified the problem, confirmed pain, and has early demand signals from both potential supply-side and demand-side customers. Which frameworks would you recommend to help her make this decision, and what are the most important questions each framework helps her answer?",
    context: "The problem is in legal services: law firms need to source specialized contract reviewers on short notice. The founder could (a) build a software tool that helps law firms manage their contractor relationships, or (b) build a marketplace connecting law firms to vetted contract reviewers.",
    hints: [
      "The founder's choice between marketplace and SaaS involves questions about business model economics, network effects, competitive dynamics, and her own execution capabilities. Think about which frameworks address each of those dimensions.",
      "Consider: marketplace-specific frameworks (liquidity, GMV, take rate economics), unit economics analysis for both models, and competitive moat / network effects analysis.",
      "Key frameworks: (1) Unit economics comparison — SaaS has predictable, high-margin recurring revenue; marketplace has variable revenue tied to GMV and take rate, with higher chicken-and-egg risk. (2) Network effects analysis — marketplace builds a defensible two-sided network; SaaS has no inherent network effect. (3) Liquidity analysis — what is the minimum viable marketplace? How many law firms and reviewers needed before the platform provides reliable value? (4) Competitive moat — SaaS moat is switching costs; marketplace moat is supply-demand liquidity. (5) Founder-market fit — does she have supply-side relationships to seed the marketplace?"
    ],
    referenceSolution: {
      approach: "Select frameworks that address the decision dimensions (economics, defensibility, execution risk, market dynamics), explain what each answers, and indicate which dimension is most decision-forcing for this specific case.",
      reasoning: "Framework 1 — Unit Economics Comparison: SaaS model: charge law firms $X/month for contract management software. Margins: ~70-80% gross margin, predictable ARR, scalable without matching supply/demand. Marketplace model: earn Y% of GMV when a reviewer is matched. Margins: 15-25% net take rate, volume-dependent, requires supply-side investment. Key question answered: 'What does success look like financially in each model, and what do I need to get there?' Framework 2 — Network Effects / Competitive Moat Analysis: Marketplace builds compounding defensibility — as more reviewers join, the platform gets better for law firms, and vice versa. SaaS builds switching cost moat but is more easily replicated. Key question answered: 'Which model is harder for a competitor to copy at scale?' Framework 3 — Liquidity Analysis (marketplace-specific): What minimum number of reviewers and law firms creates reliable same-day matching? If liquidity is hard to achieve (specialized reviewers are sparse), marketplace is risky. If supply and demand are thick, liquidity is achievable quickly. Key question answered: 'Is there enough supply-demand density for a marketplace to work?' Framework 4 — Sequencing Strategy (land-and-expand): Some successful marketplaces started as SaaS, then added marketplace layers after achieving product usage (e.g., Procore, Veeva). Key question answered: 'Can she do SaaS first to build the law firm relationship, then add marketplace functionality?' Most decision-forcing question: supply-side liquidity. If specialized contract reviewers are rare and hard to vet and supply quickly, the marketplace model may not be viable, making SaaS the safer path.",
      commonMistakes: "Recommending SWOT or generic business model canvases — these are too general to answer the specific marketplace vs. SaaS question. Also: not accounting for the chicken-and-egg problem in marketplace viability.",
      alternatives: "Could use a decision matrix scoring both models on: speed to revenue, defensibility, required capital, founder fit, and market timing. This is less rigorous but communicates the decision clearly."
    },
    rubric: [
      { id: "ps-047-r1", text: "At least three relevant frameworks are selected and explained" },
      { id: "ps-047-r2", text: "Unit economics differences between SaaS and marketplace are addressed" },
      { id: "ps-047-r3", text: "Network effects and competitive moat are analyzed as a distinguishing dimension" },
      { id: "ps-047-r4", text: "Liquidity analysis (chicken-and-egg problem) is applied to the marketplace option" },
      { id: "ps-047-r5", text: "A sequencing or hybrid approach (SaaS-first, marketplace-second) is considered" }
    ]
  },

  {
    id: "ps-048",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: ["rebuilding-mental-models"],
    difficulty: "hard",
    question: "A consulting partner hands you this problem: 'Our client, a national bank, has asked us to help them respond to fintech disruption.' You have 20 minutes before the client meeting. Select a framework (or combination), explain why it is the right fit, apply it quickly to generate a preliminary hypothesis, and explain what you would update after hearing the client.",
    context: "The bank has $200B in assets, 12 million retail customers, and a 15% market share in retail banking. It earns 60% of revenue from net interest income (lending) and 20% from fees. Digital challenger banks have entered the market and now hold a 6% retail banking market share, growing ~35% annually. The bank's mobile app has a 2.1/5 star rating.",
    hints: [
      "You need a framework that can answer: what parts of the bank's business are most threatened, and what strategic response options are available? Think about competitive response frameworks for incumbents facing disruption.",
      "Clayton Christensen's disruption framework helps identify whether this is sustaining or disruptive innovation and predicts where the attack will come from. Porter's Five Forces can quantify the structural threat. A jobs-to-be-done lens can identify which customer needs fintechs are addressing that the bank is not.",
      "Most fit: Disruption theory (Christensen) — fintechs are over-serving the bottom of the market (simple, cheap, digital banking) and will move upmarket. This predicts which products are at highest risk (savings accounts, payments, basic lending) vs. which are defensible (complex lending, wealth management). Combine with a response options framework: ignore, acquire, partner, build, or invest."
    ],
    referenceSolution: {
      approach: "Select a disruption-specific framework, apply it with the available data to generate a preliminary diagnostic and hypothesis, and structure what client information would update each branch.",
      reasoning: "Framework selection rationale: This is a disruption response problem, not a generic competitive strategy problem. Porter's Five Forces would analyze industry attractiveness (not the right question — the bank is already in the industry). SWOT is too generic. Christensen's disruption framework is the right primary lens because: (1) it specifically models how new entrants attack from the bottom, (2) it predicts which products are vulnerable, and (3) it offers a strategic response taxonomy. Supporting framework: Jobs-to-be-Done (JTBD) — identifying what customers are hiring challenger banks for (frictionless mobile experience, no-fee accounts, transparent pricing) surfaces the specific needs the bank is failing to meet. Quick application of disruption framework: Fintechs entered via overserved customers (simple banking needs served by expensive, complex incumbent infrastructure). Challenger banks now serve 6% of the market with 35% annual growth. Disruption theory predicts they will move upmarket into personal loans, small business banking, and eventually mortgages. Most vulnerable products: savings accounts (already price-competed), P2P payments (already lost to PayPal/Venmo), basic consumer lending. Most defensible: complex mortgages, wealth management, corporate banking (require trust, relationships, regulatory complexity that disruptors struggle with). Preliminary hypothesis: The bank's 2.1/5 mobile app rating signals a UX gap that is the primary reason for customer acquisition by fintechs, not primarily a product or pricing gap. Fix the digital experience first. What to update from client: (1) Where are they seeing actual share loss — which products? (2) What is their digital investment plan and budget? (3) Do they have M&A capacity to acquire rather than build? (4) What regulatory constraints exist on their digital transformation?",
      commonMistakes: "Applying a generic strategy framework (SWOT, BCG matrix) to a disruption problem — these frameworks weren't designed to model incumbent-disruptor dynamics. Also: not generating a preliminary hypothesis before the meeting, which leaves the consultant without a point of view.",
      alternatives: "Roger Martin's 'Playing to Win' framework (where to play + how to win) is useful for generating response strategy options after the diagnosis is made. McKinsey's three horizons framework is useful for sequencing the bank's response investments over time."
    },
    rubric: [
      { id: "ps-048-r1", text: "Explicitly selects a framework and explains why it fits this type of problem" },
      { id: "ps-048-r2", text: "Rejects or deprioritizes generic frameworks (SWOT, Five Forces) with reasoning" },
      { id: "ps-048-r3", text: "Applies the chosen framework with the available data to generate a preliminary diagnosis" },
      { id: "ps-048-r4", text: "Identifies which products are most vulnerable vs. most defensible" },
      { id: "ps-048-r5", text: "The 2.1/5 app rating is used as evidence for a specific hypothesis" },
      { id: "ps-048-r6", text: "Specifies 3-4 questions to ask the client that would update the preliminary hypothesis" }
    ]
  },

  {
    id: "ps-049",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: ["ambiguous-problem-solving"],
    difficulty: "hard",
    question: "A product manager comes to you with a vague mandate: 'We need to decide what features to build next quarter.' They have a backlog of 60 features requested by customers, 12 features from the engineering team, and 8 strategic bets from leadership. What is wrong with jumping directly to a prioritization framework like RICE or MoSCoW? What should come first, and what sequence of frameworks would you recommend?",
    context: "The company builds B2B analytics software. They have three customer segments: enterprise (22% of customers, 68% of revenue), mid-market (45% of customers, 27% of revenue), and SMB (33% of customers, 5% of revenue). The company's growth is flat; churn in enterprise is 8% annually (high for the segment).",
    hints: [
      "RICE (Reach × Impact × Confidence / Effort) and MoSCoW are prioritization tools, but they require inputs (impact estimates, reach estimates) that themselves require analysis. What analysis is missing before you can meaningfully apply them?",
      "The data given suggests strategic ambiguity: 8% enterprise churn is the most alarming signal. Before prioritizing features, you need to know whether the goal is to fix enterprise retention, grow SMB volume, or double down on mid-market. Different strategic goals produce completely different prioritization outputs.",
      "Step 1: Define the strategic goal (which customer segment is the priority? what is the primary metric to move?). Step 2: Diagnose the 8% enterprise churn (issue tree — is it product gaps, service gaps, competitive losses?). Step 3: Segment the backlog by segment relevance. Step 4: Apply a value framework (impact vs. effort) only after Steps 1-3 clarify what 'impact' means. RICE/MoSCoW can then be applied with meaningful estimates."
    ],
    referenceSolution: {
      approach: "Diagnose why jumping to prioritization is premature, specify the prerequisite analytical steps, and recommend a sequenced framework stack that makes the eventual prioritization defensible.",
      reasoning: "Why RICE/MoSCoW prematurely is wrong: (1) 'Impact' in RICE is undefined without a strategic goal — a feature that impacts enterprise retention has different value than one impacting SMB acquisition, depending on the strategy. (2) 'Reach' in RICE is segment-relative — reaching 22% of customers (enterprise) generates 68% of revenue; reaching 33% (SMB) generates 5%. These cannot be compared without segment-level weighting. (3) Applying a prioritization tool to 80 items without first filtering for strategic relevance produces a defensible-looking but strategically incoherent roadmap. Prerequisites before prioritization: Step 1 — Strategic alignment: What is the primary goal for next quarter? Given 8% enterprise churn, the most urgent question is whether to fix enterprise (retention play) or shift investment to mid-market growth (acquisition play). This is a leadership decision, not an analytical one — but the PM needs to surface it. Framework: strategy discussion using a segmentation x metric matrix. Step 2 — Diagnose enterprise churn: 8% annual churn for enterprise B2B analytics is high (benchmark is 3-5%). Is it product gaps? UX/usability? Missing integrations? Competitor wins? Framework: issue tree + customer interview synthesis. Step 3 — Segment and filter the backlog: Bucket all 80 items by which segment they primarily serve and which strategic goal they support. Items that serve the de-prioritized segment can be parked. Framework: 2x2 (segment alignment × strategic goal alignment). Step 4 — Apply RICE or impact/effort matrix: Only now, with strategic clarity and a filtered backlog, does RICE produce meaningful output. Now 'impact' is defined (enterprise retention impact), 'reach' is segment-weighted, and the 80-item backlog is down to 20-30 relevant candidates.",
      commonMistakes: "Treating prioritization as a neutral, objective process when it is actually a strategy expression. Also: accepting a 60-item customer feature list at face value without asking which segment requested each feature — in this company, enterprise customers generated most requests but represent only 22% of customers.",
      alternatives: "Opportunity Scoring (Ulwick) — measures customer importance + satisfaction gap per job-to-be-done — is an alternative to RICE that is more customer-insight-driven. Kano model is useful if distinguishing delight features from baseline features is important."
    },
    rubric: [
      { id: "ps-049-r1", text: "Identifies that 'impact' in RICE is undefined without a strategic goal" },
      { id: "ps-049-r2", text: "Connects enterprise churn (8%) to a strategic decision point (fix retention vs. grow elsewhere)" },
      { id: "ps-049-r3", text: "Proposes a diagnostic step (why is enterprise churning?) before prioritization" },
      { id: "ps-049-r4", text: "Recommends segmenting and filtering the backlog before applying a prioritization tool" },
      { id: "ps-049-r5", text: "The recommended sequence is logically ordered (each step enables the next)" },
      { id: "ps-049-r6", text: "Acknowledges that strategic alignment requires a leadership decision, not just analysis" }
    ]
  },

  {
    id: "ps-050",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: ["full-case-interview"],
    difficulty: "hard",
    question: "You are 10 minutes into a case interview. The case prompt is: 'Our client is a regional airline considering whether to launch a new direct route between two mid-size cities.' You have applied a profitability framework and established that the route would likely be profitable in year 3. The interviewer says: 'That's a necessary analysis, but is it sufficient to recommend launching the route?' What is the interviewer pointing at, and what additional framework(s) or analytical dimensions would complete the recommendation?",
    context: "The two cities are 340 miles apart. A hub-and-spoke competitor currently serves the route with a connection, adding 2 hours to the journey. The client airline has 12 planes and is operating at 87% utilization. Load factor on existing routes is 78%.",
    hints: [
      "Profitability analysis answers 'will this route make money?' but not 'should we do it?' Think about what other questions need to be answered before a strategic go/no-go recommendation.",
      "Consider: strategic fit (does this route type align with the airline's network strategy?), competitive response (will the competitor match the route?), resource constraints (can they actually launch it given capacity?), and risk analysis.",
      "Missing dimensions: (1) Opportunity cost — with 87% utilization, launching a new route means not using that capacity elsewhere; what are the next-best alternatives? (2) Competitive response — the hub-and-spoke competitor has incentive to launch a direct competing flight if the market validates; how does the profitability look if they respond? (3) Strategic network fit — does this route add to or fragment the client's network hub structure? (4) Execution risk — 87% utilization leaves little operational slack; what is the risk of service degradation on existing routes?"
    ],
    referenceSolution: {
      approach: "Diagnose what analytical dimensions profitability analysis misses for a route launch recommendation, apply the relevant frameworks, and demonstrate how a complete recommendation integrates profitability with strategy, competition, and resource constraints.",
      reasoning: "The interviewer is pointing at four missing dimensions: (1) Opportunity cost / capital allocation: At 87% utilization, the client's planes are nearly fully deployed. Launching this route means either (a) acquiring a new plane (capital cost not in the profitability model?) or (b) reassigning a plane from an existing route. What routes would lose capacity? Are they more or less profitable than the new route? Framework: capital allocation / opportunity cost analysis. (2) Competitive response modeling: The hub-and-spoke competitor currently has a monopoly on this city pair (via connection). Launching a direct route validates demand and signals the market is profitable. The competitor could respond by launching its own direct service, crushing the profitability assumption. Framework: game theory / competitor response analysis. Ask: what is the competitor's incentive and capability to respond? Their hub-and-spoke structure makes a direct route expensive for them — this may be a structural advantage worth sizing. (3) Strategic network fit: Airlines build hub-and-spoke or point-to-point networks deliberately. Does adding this route create a complementary spoke that feeds the client's hub, or is it a standalone route that doesn't build network value? Framework: network strategy analysis. Standalone profitable routes are less valuable than routes that add network traffic. (4) Execution risk: 87% utilization and 78% load factor signal a tight operation. Launching a new route adds operational complexity — crew scheduling, maintenance coverage, gate logistics. What is the risk of service disruption on existing routes? Framework: capacity and operational risk analysis. Complete recommendation structure: 'Launch the route IF: (a) opportunity cost of displaced capacity is lower than route profit, (b) competitive response risk is manageable given competitor's structural disadvantages, (c) route adds network value or is worth the standalone value, AND (d) operational risk is mitigated through phased launch or additional capacity.' This is a conditional recommendation — profitability is necessary but not sufficient.",
      commonMistakes: "Thinking profitability analysis is the final word on a strategic investment decision — this is a classic consulting interview mistake. Also: not using the 87% utilization statistic, which is the most important resource constraint signal in the context.",
      alternatives: "Could structure the additional analysis as a set of 'go/no-go gates': route 1 (profitability ✓), gate 2 (opportunity cost ✓?), gate 3 (competitive response survivable ✓?), gate 4 (execution risk manageable ✓?). All gates must pass for a 'launch' recommendation."
    },
    rubric: [
      { id: "ps-050-r1", text: "Correctly identifies that profitability analysis is necessary but not sufficient" },
      { id: "ps-050-r2", text: "Raises opportunity cost / resource allocation as a missing dimension, tied to 87% utilization" },
      { id: "ps-050-r3", text: "Raises competitive response risk and explains why the competitor may or may not respond" },
      { id: "ps-050-r4", text: "Raises network strategic fit (standalone vs. network-enhancing route)" },
      { id: "ps-050-r5", text: "Structures a complete conditional recommendation (launch IF conditions X, Y, Z hold)" },
      { id: "ps-050-r6", text: "Uses all three specific data points from the context (340 miles, 87% utilization, 78% load factor)" }
    ]
  }
];
