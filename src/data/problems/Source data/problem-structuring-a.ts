import type { Problem } from '@/types';

export const problemStructuringProblemsA: Problem[] = [
  // ── MECE DECOMPOSITION (ps-001 to ps-005) ──────────────────────────────────

  {
    id: "ps-001",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: [],
    difficulty: "easy",
    question: "Your company's website traffic dropped 40% last month. Break down all the possible reasons using a MECE structure.",
    context: undefined,
    hints: [
      "Think about what categories of causes could explain a traffic drop without any overlapping.",
      "Consider the traffic funnel: how users find your site vs. what happens after they arrive. These are fundamentally different causes.",
      "A clean split: External factors (referral sources, SEO, paid channels) vs. Internal factors (site performance, content, UX). Each can be further broken down without overlap."
    ],
    referenceSolution: {
      approach: "Apply MECE decomposition by splitting causes into mutually exclusive categories that together cover all possibilities.",
      reasoning: "Start with the highest-level dichotomy: Did fewer people try to reach the site (acquisition problem) or did the site fail to capture/retain them (site problem)? Acquisition problems include: organic search (SEO change, algorithm update), direct/bookmark (brand awareness), referral (partner sites, social), paid (budget change, campaign pause). Site problems include: load speed/availability, content quality, UX changes, tracking errors. This two-branch MECE tree ensures no cause is double-counted.",
      commonMistakes: "Mixing levels of analysis (e.g., listing 'SEO' and 'Google algorithm update' as separate items when the latter is a cause of the former). Also: forgetting tracking failures — what looks like a traffic drop might just be broken analytics.",
      alternatives: "Could also decompose by traffic channel first (organic, paid, direct, referral) — equally MECE, different diagnostic path. Choose based on where you have data first."
    },
    rubric: [
      { id: "ps-001-r1", text: "Decomposition has no overlapping categories" },
      { id: "ps-001-r2", text: "Decomposition covers all plausible cause categories" },
      { id: "ps-001-r3", text: "At least two levels of hierarchy shown" },
      { id: "ps-001-r4", text: "Includes both acquisition and on-site problem categories" }
    ]
  },

  {
    id: "ps-002",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: [],
    difficulty: "easy",
    question: "A hospital wants to categorize all the costs involved in delivering patient care. Create a MECE cost breakdown.",
    context: undefined,
    hints: [
      "Think about what resources a hospital consumes to deliver care — start at the broadest level.",
      "Consider the classic accounting split: direct costs (tied to patient care) vs. indirect/overhead costs (keep the hospital running regardless of patient volume).",
      "Direct costs: clinical staff (doctors, nurses, technicians), medical supplies, medications, diagnostics (labs, imaging). Indirect costs: facilities (rent, utilities, maintenance), administration (HR, billing, finance), IT systems, insurance, capital equipment depreciation."
    ],
    referenceSolution: {
      approach: "Split costs first by whether they are directly attributable to patient care (direct) or support the institution regardless of volume (indirect), then decompose each branch.",
      reasoning: "Direct costs vary with patient volume: clinical labor (physicians, nurses, allied health), consumables (gloves, syringes, drugs), diagnostics (lab tests, imaging), and procedures. Indirect costs are fixed or semi-fixed: facility costs (rent, utilities, cleaning), administrative functions (billing, HR, finance, legal), capital equipment depreciation, and IT/infrastructure. This two-branch structure is MECE because every dollar can be classified into exactly one branch.",
      commonMistakes: "Listing cost line items (e.g., 'salaries' and 'nurses' as separate items) rather than building a hierarchy. Also conflating capital expenditure with operating expense — these should be in separate branches.",
      alternatives: "Could decompose by department (ER, ICU, outpatient, etc.) — useful for budgeting. Could also decompose by cost behavior (fixed vs. variable vs. step-fixed). Choice depends on the decision being made."
    },
    rubric: [
      { id: "ps-002-r1", text: "Top-level split is mutually exclusive (no cost fits in two categories)" },
      { id: "ps-002-r2", text: "All major hospital cost categories are represented" },
      { id: "ps-002-r3", text: "At least two levels of hierarchy are shown" },
      { id: "ps-002-r4", text: "Labor, supplies, facilities, and administration are all captured" }
    ]
  },

  {
    id: "ps-003",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: ["market-sizing"],
    difficulty: "easy",
    question: "You want to estimate the total number of hours of video content uploaded to the internet per day. Decompose the problem into MECE categories of video platforms and content types.",
    context: undefined,
    hints: [
      "Don't start with math yet — first, structure the space of 'all internet video uploads' so nothing is double-counted and nothing is missed.",
      "Think about the major platform types: social short-form, long-form video hosting, professional/enterprise, live streaming, messaging. These are meaningfully different in volume and behavior.",
      "A clean split: (1) User-generated social video (TikTok, Instagram Reels, YouTube Shorts), (2) Long-form user content (YouTube main, Vimeo), (3) Professional/corporate video (Wistia, Vimeo Business, training platforms), (4) Live streaming (Twitch, LinkedIn Live), (5) Messaging/ephemeral (WhatsApp, Snapchat). Each platform type is distinct with minimal overlap."
    ],
    referenceSolution: {
      approach: "Decompose the universe of internet video uploads into non-overlapping platform/use-case categories, then estimate volume per category.",
      reasoning: "The categories: (1) Short-form social (TikTok, Instagram Reels, YouTube Shorts) — highest upload volume, mostly 15–60s clips; (2) Long-form user content (YouTube main, Dailymotion) — fewer uploads, much longer; (3) Professional/corporate (Wistia, Brightcove, Vimeo Pro) — low volume, long; (4) Live streaming (Twitch, YouTube Live) — real-time, counts as 'upload' when recorded; (5) Messaging/ephemeral (WhatsApp Status, Snapchat) — massive volume, mostly private/ephemeral. Each bucket has a different upload rate and average video length, which is what lets you estimate total hours.",
      commonMistakes: "Conflating platforms (listing 'YouTube' when you mean both short-form Shorts and long-form content — these have very different profiles). Forgetting messaging apps, which may account for the most upload volume globally.",
      alternatives: "Could decompose by content type (entertainment, education, news, UGC, professional) rather than platform. This is equally MECE but harder to estimate because content types cross platform boundaries."
    },
    rubric: [
      { id: "ps-003-r1", text: "Categories are mutually exclusive (no platform/content type fits in two buckets)" },
      { id: "ps-003-r2", text: "Short-form social, long-form, and messaging/ephemeral are all represented" },
      { id: "ps-003-r3", text: "The decomposition is sufficient to drive a subsequent estimation" },
      { id: "ps-003-r4", text: "At least 4 distinct platform/use-case categories identified" }
    ]
  },

  {
    id: "ps-004",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: [],
    difficulty: "easy",
    question: "A product manager wants to understand why users are churning from a B2B SaaS product. Create a MECE breakdown of all possible churn reasons.",
    context: "The product is a project management tool used by small teams (5–50 people). Monthly churn is 3%, which is above the industry average of ~1.5%. Exit survey data is sparse.",
    hints: [
      "Churn is a decision — something made the customer or their champion decide to stop paying. What are the possible drivers of that decision?",
      "Consider: Did something change about the customer (their situation), or did something change about the product (its value)?",
      "A MECE split: (1) Customer-side factors (company shutdown, budget cut, team restructuring, switching to competitor) vs. (2) Product-side factors (unmet needs, poor UX/adoption, reliability issues, pricing perception, poor support). Ensure no churn reason could fall into both."
    ],
    referenceSolution: {
      approach: "Split churn drivers into customer-side (something changed for them) vs. product-side (our product failed to retain them), then decompose each.",
      reasoning: "Customer-side: company closure or acquisition (involuntary churn), budget reduction, team reorganization (champion left), seasonal/project-based usage ending. Product-side: core feature gaps (they needed something we don't have), poor adoption/UX (they couldn't get value from what exists), reliability problems (bugs, downtime), pricing (perceived poor ROI), support quality (unresolved issues eroded trust). This split is MECE — every churn event has a primary cause traceable to one branch.",
      commonMistakes: "Listing 'competitor' as a top-level category — this is a destination, not a cause. Customers switch to a competitor because something in the product branch pushed them away. Also: not distinguishing involuntary churn (company closed) from voluntary (chose to leave).",
      alternatives: "Could decompose by customer journey stage (onboarding churn vs. mature customer churn vs. renewal churn) — useful for timing interventions. Could also decompose by customer segment (small vs. large team, by industry)."
    },
    rubric: [
      { id: "ps-004-r1", text: "Top-level categories are mutually exclusive" },
      { id: "ps-004-r2", text: "Both customer-side and product-side causes are represented" },
      { id: "ps-004-r3", text: "Involuntary churn (company closure, budget forced) is distinguished from voluntary" },
      { id: "ps-004-r4", text: "Decomposition has at least two levels of depth" },
      { id: "ps-004-r5", text: "No major churn category is missing (e.g., adoption issues, pricing, feature gaps)" }
    ]
  },

  {
    id: "ps-005",
    trackId: "problem-structuring",
    subSkill: "mece-decomposition",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "medium",
    question: "You are advising a city government on how to reduce its carbon emissions by 40% over 10 years. Create a MECE decomposition of all emission sources, then identify which branches are likely to be highest leverage.",
    context: "The city has 1 million residents, a typical mix of residential, commercial, and industrial zones, and a public transit system that covers about 30% of commutes. The remaining 70% are private vehicles.",
    hints: [
      "Start by decomposing where the emissions come from — not how to reduce them. Get the structure right first.",
      "The standard framework: Transportation, Buildings (residential + commercial), Industry, Waste, and Land use/agriculture. These are established MECE categories used by climate scientists.",
      "Once structured, estimate relative contribution of each branch. Transportation (especially private vehicles) and buildings (heating/cooling) together typically account for 60–80% of urban emissions. High-leverage interventions will cluster in those two branches."
    ],
    referenceSolution: {
      approach: "Decompose city emissions by source sector (MECE), estimate relative contribution of each, then identify the 20% of branches that account for 80% of emissions.",
      reasoning: "Emission sectors: (1) Transportation — private vehicles, public transit, freight/delivery, aviation (if airport nearby); (2) Buildings — residential heating/cooling/appliances, commercial heating/cooling/lighting; (3) Industry — manufacturing, construction, heavy equipment; (4) Waste — landfill methane, wastewater treatment; (5) Land use — urban greenspace, agriculture at city periphery. Given 70% private vehicle commutes, Transportation is likely the largest single branch. Buildings are second (heating is large in cold climates, cooling in warm). Sensitivity: a 50% reduction in transportation emissions (~30% of total) gets you 15% toward the 40% goal — high leverage. Buildings similarly.",
      commonMistakes: "Starting with solutions (electrification, solar) before mapping the problem. Forgetting 'scope 2' emissions (electricity imported from outside the city — should be allocated to Buildings/Industry based on consumption). Treating 'transportation' as one bucket without distinguishing private vehicles (high impact, policy-addressable) from freight (harder to control).",
      alternatives: "Could decompose by policy lever (regulations, subsidies, infrastructure) instead of emission source — useful for action planning but not for understanding scale of opportunity. The source decomposition should come first."
    },
    rubric: [
      { id: "ps-005-r1", text: "Emission source decomposition is MECE (no double-counting, all sources covered)" },
      { id: "ps-005-r2", text: "At least 4 major sector categories identified" },
      { id: "ps-005-r3", text: "Transportation and buildings identified as high-leverage branches" },
      { id: "ps-005-r4", text: "Private vehicles distinguished from public transit within transportation" },
      { id: "ps-005-r5", text: "Quantitative or semi-quantitative reasoning used to assess leverage" }
    ]
  },

  // ── ISSUE TREES (ps-006 to ps-010) ─────────────────────────────────────────

  {
    id: "ps-006",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: [],
    difficulty: "easy",
    question: "A restaurant's profits have declined for three consecutive months despite stable revenue. Build an issue tree to diagnose the problem.",
    context: undefined,
    hints: [
      "Profit = Revenue − Costs. If revenue is stable, the problem must be on the cost side. Start your issue tree from that observation.",
      "Break costs into their major components: Cost of Goods Sold (food/beverage), Labor, and Fixed/Overhead costs. Each branch can then be broken into sub-issues.",
      "Under each cost branch, ask: Did the unit cost increase, or did the volume/quantity used increase? For example, food cost could rise because ingredient prices rose (unit cost) or because of increased waste/theft (quantity). This second level makes the tree actionable."
    ],
    referenceSolution: {
      approach: "Use profit decomposition (Profit = Revenue − Costs) as the spine of the issue tree, then branch costs into COGS, labor, and overhead, decomposing each into rate vs. volume sub-issues.",
      reasoning: "Since revenue is stable, the issue tree branches purely into costs. (1) Food & Beverage COGS: supplier price increases, menu mix shift toward high-cost items, increased waste/spoilage, theft/shrinkage. (2) Labor: more hours worked (understaffing forcing overtime), higher wage rates (minimum wage increase, new hires at higher pay), scheduling inefficiency. (3) Overhead: rent increase (lease renewal), utility cost increase (seasonal), new expenses (equipment lease, marketing). Each leaf node is testable with data — e.g., check COGS% on P&L, compare labor hours to prior period.",
      commonMistakes: "Building an issue tree that is actually a solution tree (listing fixes like 'renegotiate supplier contracts' instead of issues like 'supplier prices increased'). Also: forgetting to check one-time costs that might make three months look like a trend.",
      alternatives: "Could add a Revenue branch even though revenue appears stable — it might mask a mix shift (fewer customers but higher average spend, which affects labor cost per head). Always worth keeping one level of revenue decomposition."
    },
    rubric: [
      { id: "ps-006-r1", text: "Issue tree starts from the Profit = Revenue − Cost identity" },
      { id: "ps-006-r2", text: "Cost branch is decomposed into at least 3 sub-categories" },
      { id: "ps-006-r3", text: "Each leaf-level issue is testable/falsifiable with data" },
      { id: "ps-006-r4", text: "Rate vs. volume distinction appears somewhere in the tree" }
    ]
  },

  {
    id: "ps-007",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: [],
    difficulty: "easy",
    question: "Students at a university are taking longer than average to graduate (5.2 years vs. a target of 4 years). Build an issue tree to identify the root causes.",
    context: undefined,
    hints: [
      "Think about what conditions must hold for a student to graduate on time. What could prevent each of those conditions?",
      "There are two broad categories: student-side issues (individual circumstances) and institution-side issues (structural barriers). Both are plausible and should be explored.",
      "Student-side: financial pressure (working while studying), academic struggles, major changes, health/personal issues. Institution-side: required courses not offered frequently enough, prerequisite bottlenecks, poor advising, credit transfer issues for transfers, graduation requirement complexity."
    ],
    referenceSolution: {
      approach: "Build an issue tree with a student-side branch and an institution-side branch, decomposing each into specific testable causes.",
      reasoning: "Student-side delays: (1) Financial — working part-time reduces course load; (2) Academic — struggling with prerequisites, failing courses, academic probation; (3) Personal — health issues, family obligations, gap years; (4) Direction change — major switch requiring additional credits. Institution-side delays: (1) Course availability — required courses offered infrequently, sections fill up; (2) Advising — students unaware of requirements, taking wrong courses; (3) Transfer credit — credits not accepted, students redo coursework; (4) Structural requirements — double major, minors, capstone complexity. Root cause matters because solutions differ: financial aid (student-side) vs. adding course sections (institution-side).",
      commonMistakes: "Only exploring student-side causes (blaming students) while missing systemic institutional barriers. Also: listing 'graduation requirements are hard' without specifying whether the issue is comprehension, availability, or design.",
      alternatives: "Could decompose by student type (first-year students vs. transfer students vs. part-time students) — useful because different groups have very different delay profiles. Could combine with data to prioritize branches."
    },
    rubric: [
      { id: "ps-007-r1", text: "Both student-side and institution-side branches are present" },
      { id: "ps-007-r2", text: "At least 3 sub-issues per major branch" },
      { id: "ps-007-r3", text: "Each leaf-level issue suggests a specific intervention" },
      { id: "ps-007-r4", text: "Course availability and advising quality are captured as institutional issues" }
    ]
  },

  {
    id: "ps-008",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: ["unit-economics"],
    difficulty: "easy",
    question: "A food delivery startup's unit economics are deteriorating — contribution margin per order has fallen from $2.50 to $0.80 over 12 months. Build an issue tree to identify what could explain this.",
    context: "Contribution margin = Revenue per order − Variable cost per order. The startup has not changed its pricing. Order volume has grown 3× in the same period.",
    hints: [
      "Contribution margin = Revenue − Variable Costs per order. Revenue is unchanged (no pricing change). So variable costs must have risen. Start there.",
      "Variable costs for food delivery: (1) delivery/driver cost per order, (2) payment processing fees, (3) customer acquisition cost (if treated as variable), (4) customer support cost. Which of these is most likely to have changed as volume grew 3×?",
      "As volume grows, delivery efficiency can drop if new markets are added (lower order density per area = longer driver routes per order = higher cost per delivery). Also, driver supply tightening can raise per-delivery pay. Check whether the contribution margin drop correlates with geographic expansion."
    ],
    referenceSolution: {
      approach: "Decompose contribution margin into its revenue and cost components; since revenue is fixed, build the issue tree entirely on the variable cost side, decomposing each cost line and examining both rate and volume effects.",
      reasoning: "Variable cost branches: (1) Delivery cost — driver pay per delivery (could rise due to supply tightening, tip pressure, regulatory changes), or route efficiency (3× volume in new low-density areas raises cost per order); (2) Payment processing — typically a % of order value plus fixed fee; unlikely to be the primary driver; (3) Customer support — more orders, more complaints (could rise if service quality declined); (4) Packaging/restaurant-side costs — if startup subsidizes packaging or offers restaurant-side incentives. The most likely root cause given the 3× volume growth is delivery cost per order rising due to geographic expansion into lower-density markets, which reduces driver route efficiency.",
      commonMistakes: "Assuming revenue must have dropped (the question states it didn't). Focusing on fixed costs, which don't affect contribution margin by definition. Not noticing that the 3× volume growth is a major context clue for what changed.",
      alternatives: "Could also model this as a benchmarking problem: compare contribution margin by market/city to identify if certain geographies are systematically worse — this can validate or refute the density hypothesis."
    },
    rubric: [
      { id: "ps-008-r1", text: "Issue tree correctly identifies variable cost as the only branch to explore" },
      { id: "ps-008-r2", text: "Delivery cost per order is identified as a key branch" },
      { id: "ps-008-r3", text: "Volume growth (3×) is used as a diagnostic clue" },
      { id: "ps-008-r4", text: "Rate vs. volume distinction is applied to at least one cost branch" },
      { id: "ps-008-r5", text: "Each leaf-level issue is testable with available data" }
    ]
  },

  {
    id: "ps-009",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: [],
    difficulty: "easy",
    question: "A city's emergency response times have worsened by 35% over the past two years. Build an issue tree to identify the root causes.",
    context: "Emergency response time = time from call receipt to first responder arrival. The city's population has grown 12% over the same period.",
    hints: [
      "Response time = Dispatch time + Travel time. Both components can increase independently. Start by splitting the issue tree along these two branches.",
      "Dispatch time issues: call volume overwhelming operators, understaffing, system slowdowns, communication failures. Travel time issues: more units responding to more calls simultaneously (unit availability), traffic congestion, geographic coverage gaps.",
      "The 12% population growth is a clue: if the number of incidents grows proportionally but the fleet and staffing didn't scale, both dispatch and travel time would suffer from resource strain."
    ],
    referenceSolution: {
      approach: "Decompose response time into dispatch phase and travel phase, then build an issue tree under each branch examining resources, systems, and environmental factors.",
      reasoning: "Dispatch branch: (1) Operator capacity — more calls, same staffing; (2) System performance — dispatch software, radio failures; (3) Information accuracy — callers unable to give clear location (affects routing). Travel branch: (1) Unit availability — fewer free units due to higher call volume (coverage gaps); (2) Geographic factors — population growth in new areas not covered by existing stations; (3) Traffic — more congestion in growing city; (4) Fleet condition — older vehicles, more maintenance downtime. Population growth (12%) is the systemic pressure on both branches: more calls straining dispatch + more geography to cover straining travel.",
      commonMistakes: "Treating response time as a single undifferentiated problem instead of a pipeline (dispatch → travel). Missing 'unit availability' — the most common cause of worsened response time is that all units are busy, not that they travel slower.",
      alternatives: "Could decompose by incident type (medical, fire, crime) — different incident types have different response profiles and may reveal that only certain categories are getting worse."
    },
    rubric: [
      { id: "ps-009-r1", text: "Issue tree splits response time into dispatch and travel components" },
      { id: "ps-009-r2", text: "Unit availability (too many concurrent calls) is identified" },
      { id: "ps-009-r3", text: "Population growth context is used as a causal link" },
      { id: "ps-009-r4", text: "Both resource constraints and system/environmental factors appear" }
    ]
  },

  {
    id: "ps-010",
    trackId: "problem-structuring",
    subSkill: "issue-trees",
    secondarySkills: ["identifying-unknowns"],
    difficulty: "medium",
    question: "A consumer electronics company launched a new smart speaker three months ago. Initial sales were strong, but 60-day retention (users still actively using the device at 60 days) is only 28%, far below the 65% target. Build an issue tree to diagnose this. Be explicit about what you know vs. what you need to find out.",
    context: "The product has strong reviews (4.2/5 average). Return rate is 8% (industry average is ~5%). Active use is defined as at least 3 interactions per week.",
    hints: [
      "Low retention means people bought the device but stopped using it. Why might someone stop using a device they keep (i.e., didn't return)?",
      "Split the issue tree into: (1) Setup/onboarding failures (never got value in first 2 weeks), (2) Unmet expectations (discovered limitations), (3) Habit not formed (no daily use case), (4) Competing devices (replaced by phone/other). Each represents a different failure mode.",
      "The data tells you: reviews are good (perception isn't the problem), return rate is slightly elevated (some abandonment but not massive rejection). This suggests most users try it, like it conceptually, but don't integrate it into daily routine — pointing toward habit formation and daily use case as the primary branch to investigate."
    ],
    referenceSolution: {
      approach: "Build an issue tree decomposing why users stop using the device despite keeping it, use the available data to eliminate branches, and explicitly flag what additional data is needed.",
      reasoning: "Issue tree branches: (1) Onboarding failure — setup too complex, voice recognition issues, integration failures with smart home; (2) Unmet expectations — promised features missing or unreliable, audio quality below expectation; (3) No sticky use case — no daily habit anchored to the device, no 'killer app'; (4) Competition — phone/other speaker handles the same job better. What we know: reviews are positive (rules out widespread feature disappointment); return rate is slightly elevated but mostly normal (rules out fundamental product failure). What we don't know: dropout timing (when in 60 days do users stop?), dropout segmentation (which user types retain vs. churn?), usage pattern at dropoff (what were they using it for?). Most likely root cause: no sticky use case formed.",
      commonMistakes: "Building a solution tree before fully mapping the issue tree. Not using the available data (reviews, return rate) to eliminate branches. Not distinguishing 'never got started' from 'started but stopped' — these require different interventions.",
      alternatives: "Could structure as a customer journey issue tree: awareness → purchase → setup → first use → habit formation → retention. This is a sequential model that reveals exactly which stage breaks down."
    },
    rubric: [
      { id: "ps-010-r1", text: "Issue tree distinguishes onboarding failure from post-onboarding abandonment" },
      { id: "ps-010-r2", text: "Available data (reviews, return rate) is used to eliminate or deprioritize branches" },
      { id: "ps-010-r3", text: "At least one 'unknown' is explicitly identified as needing investigation" },
      { id: "ps-010-r4", text: "'No sticky use case' or equivalent habit-formation issue is identified" },
      { id: "ps-010-r5", text: "Each branch leads to a specific diagnostic question or data request" }
    ]
  },

  // ── HYPOTHESIS TREES (ps-011 to ps-015) ────────────────────────────────────

  {
    id: "ps-011",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: [],
    difficulty: "easy",
    question: "A software company is considering acquiring a smaller competitor. Build a hypothesis tree to evaluate whether this acquisition will create shareholder value.",
    context: undefined,
    hints: [
      "A hypothesis tree works top-down: start with the main hypothesis, then break it into supporting sub-hypotheses that must all be true for the main hypothesis to hold.",
      "Value creation from an acquisition requires: (1) the target is worth at least what you pay for it, and (2) together you can create more value than you could separately. Both must hold.",
      "Sub-hypotheses: (1) The target's standalone value ≥ acquisition price (fair price paid). (2) Revenue synergies exist (cross-sell, market expansion). (3) Cost synergies exist (shared infrastructure, eliminated duplication). (4) Execution risk is manageable (integration complexity, key person risk). (5) No alternative uses of capital create more value."
    ],
    referenceSolution: {
      approach: "Build a hypothesis tree where the central hypothesis ('this acquisition creates value') branches into necessary sub-hypotheses, each of which is independently falsifiable.",
      reasoning: "Main hypothesis: Acquisition creates shareholder value. This requires ALL of the following to be true: (H1) Target is fairly/underpriced: comparable company valuation supports the price; (H2) Revenue synergies are real: combined customer base enables cross-selling, market entry, or reduced churn; (H3) Cost synergies are real: overlap in engineering, sales, infrastructure can be eliminated; (H4) Integration is feasible: cultures are compatible, key talent will stay, technical systems can merge; (H5) No better use of capital exists: alternatives (organic growth, other acquisitions, buybacks) create less value per dollar. If any sub-hypothesis is false, the acquisition case weakens or fails.",
      commonMistakes: "Building an issue tree (what could go wrong) instead of a hypothesis tree (what must be true). Treating 'synergies' as a single undifferentiated idea rather than separately evaluating revenue and cost synergies. Forgetting to test the 'price is fair' hypothesis.",
      alternatives: "Could structure as a DCF model with each value driver as a hypothesis leaf. Could also use Porter's strategic value framework (market power, capability acquisition, elimination of competition) as the branching logic."
    },
    rubric: [
      { id: "ps-011-r1", text: "Each branch is a testable hypothesis (not a question or issue)" },
      { id: "ps-011-r2", text: "Revenue synergies and cost synergies are treated as separate hypotheses" },
      { id: "ps-011-r3", text: "Price fairness and execution feasibility are included" },
      { id: "ps-011-r4", text: "The tree structure is logically AND-linked (all sub-hypotheses must be true)" }
    ]
  },

  {
    id: "ps-012",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: [],
    difficulty: "easy",
    question: "A doctor suspects a patient has Type 2 diabetes. Build a hypothesis tree for confirming or ruling out this diagnosis.",
    context: "The patient is 52 years old, BMI of 31, reports increased thirst and frequent urination for the past 2 months. Family history of diabetes.",
    hints: [
      "A diagnostic hypothesis tree works by identifying what evidence must be true for the hypothesis to hold, then testing each piece of evidence.",
      "Diabetes diagnosis involves: (1) symptom pattern consistent with the condition, (2) blood glucose levels above diagnostic thresholds, and (3) ruling out alternative explanations for the symptoms.",
      "Sub-hypotheses: (1) Symptoms are consistent with Type 2 DM (polyuria, polydipsia, fatigue — check); (2) Fasting blood glucose ≥ 126 mg/dL or HbA1c ≥ 6.5%; (3) Risk factors present (age, BMI, family history — check); (4) Alternative diagnoses ruled out (Type 1 DM, secondary causes like medications, stress hyperglycemia)."
    ],
    referenceSolution: {
      approach: "Build a hypothesis tree where the diagnosis hypothesis (Type 2 diabetes) is broken into necessary supporting sub-hypotheses: symptom fit, biomarker confirmation, risk factor presence, and alternative diagnosis exclusion.",
      reasoning: "H1: Symptom pattern consistent — polyuria and polydipsia are classic hyperglycemia symptoms; consistent with Type 2 DM. H2: Biomarker confirmation — fasting glucose ≥ 126 mg/dL on two occasions, or HbA1c ≥ 6.5%, or 2-hour OGTT glucose ≥ 200 mg/dL; this is the definitive test. H3: Risk profile — age 52, BMI 31 (obese), family history; all elevate prior probability substantially. H4: Alternative diagnoses excluded — Type 1 DM (usually younger, faster onset, autoantibodies), secondary causes (steroids, Cushing's, pancreatitis), or symptoms explained by other conditions (UTI causing frequent urination). The hypothesis is confirmed only when H2 is satisfied; H1, H3 are supporting evidence that informed the priority of testing H2.",
      commonMistakes: "Treating symptoms alone as sufficient for diagnosis (they raise probability but don't confirm). Not distinguishing Type 1 from Type 2 (the tree should include this differentiation). Forgetting that biomarker confirmation requires repeat testing on a separate day.",
      alternatives: "Could use a Bayesian framing: prior probability from risk factors × likelihood ratios from each test. This is the formal statistical version of the hypothesis tree."
    },
    rubric: [
      { id: "ps-012-r1", text: "Biomarker confirmation is identified as the definitive sub-hypothesis" },
      { id: "ps-012-r2", text: "Risk factors and symptoms are identified as supporting (not confirming) evidence" },
      { id: "ps-012-r3", text: "At least one alternative diagnosis is identified and addressed" },
      { id: "ps-012-r4", text: "Sub-hypotheses are ordered from most to least diagnostic" }
    ]
  },

  {
    id: "ps-013",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: ["assumption-validation"],
    difficulty: "easy",
    question: "A startup is deciding whether to enter the corporate catering market in their city. Build a hypothesis tree to evaluate whether this is an attractive market to enter.",
    context: "The startup currently operates a consumer meal kit business. The corporate catering market in their city is estimated at $150M annually.",
    hints: [
      "Market entry creates value when: the market is attractive AND you can win in it AND the entry won't destroy your existing business.",
      "Break the main hypothesis into: (1) Market attractiveness (size, growth, margins), (2) Competitive advantage (what makes you better than incumbents?), (3) Strategic fit (does this extend your capabilities or distract from core?), (4) Financial viability (will it be profitable?).",
      "For each sub-hypothesis, ask: what would need to be true for this to hold? For competitive advantage: you'd need lower cost (shared kitchen infrastructure), existing supplier relationships, or brand differentiation. These are testable by comparing your unit economics to incumbents."
    ],
    referenceSolution: {
      approach: "Build a hypothesis tree where the top-level hypothesis ('entering corporate catering is a good strategic move') breaks into market attractiveness, competitive position, strategic fit, and financial return sub-hypotheses.",
      reasoning: "H1: Market is attractive — $150M market, but what matters is accessible market (which segments can we serve?), growth rate (expanding or shrinking?), and margin profile (what do incumbents earn?). H2: We have a competitive advantage — shared kitchen infrastructure reduces cost vs. pure-play caterers; existing supplier relationships improve COGS; but consumer and B2B purchasing are very different (procurement, contracts, invoicing). H3: Strategic fit — does this use existing assets (kitchen, supply chain) without cannibalizing consumer business? Conflicting peak-demand times could be a tension. H4: Unit economics work — can we price above total cost with acceptable margins given corporate procurement pressure? Each sub-hypothesis has clear falsification tests.",
      commonMistakes: "Anchoring on market size ($150M) without asking what share is realistically accessible. Assuming consumer meal kit capabilities transfer directly to B2B catering without testing whether procurement, logistics, and menu needs differ substantially.",
      alternatives: "Could structure the tree around strategic options: (a) enter organically, (b) partner with existing caterer, (c) don't enter. Each option has a different hypothesis tree, and comparing them helps select the best path."
    },
    rubric: [
      { id: "ps-013-r1", text: "Hypothesis tree includes market attractiveness, competitive advantage, and financial return" },
      { id: "ps-013-r2", text: "Each sub-hypothesis is stated as a positive claim, not a question" },
      { id: "ps-013-r3", text: "Strategic fit / capability overlap is addressed" },
      { id: "ps-013-r4", text: "At least one assumption is identified that would change the recommendation if wrong" }
    ]
  },

  {
    id: "ps-014",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: [],
    difficulty: "easy",
    question: "An engineer suspects that a software deployment caused a spike in API error rates. Build a hypothesis tree to confirm or rule out this hypothesis.",
    context: "API error rate spiked from 0.2% to 4.7% starting at 14:32 UTC. A deployment was released at 14:15 UTC. No other known changes occurred at that time.",
    hints: [
      "The deployment hypothesis requires two things to be true: (1) the deployment changed something that could cause errors, and (2) alternative explanations are less likely.",
      "Test the deployment hypothesis: check if errors started exactly when deployment completed, which services/endpoints are affected (are they the ones that changed?), what type of errors (400s = client/contract, 500s = server logic/infrastructure).",
      "Alternative hypotheses: infrastructure failure (unrelated to deployment), traffic spike overwhelming capacity, external dependency failure, upstream data quality issue. Each can be tested independently."
    ],
    referenceSolution: {
      approach: "Build a hypothesis tree with the deployment as the primary hypothesis and alternative root causes as competing branches, then design diagnostic tests that differentiate between them.",
      reasoning: "Primary hypothesis (deployment caused the spike): H1a — timing matches (errors start at or after 14:15); H1b — affected endpoints overlap with changed code; H1c — error type is consistent with a code bug (e.g., NullPointerException, schema mismatch = 500s, not 4xx). Alternative hypotheses: H2 — Infrastructure failure (check CPU/memory/disk on servers; errors would be spread across all endpoints, not just changed ones); H3 — Traffic spike (check request volume; error rate, not error count, would remain constant); H4 — External dependency (check downstream service health dashboards; would affect all requests to that dependency). The deployment hypothesis is most likely given timing, but alternatives must be ruled out before a rollback decision.",
      commonMistakes: "Rolling back immediately without confirming the hypothesis — if the real cause is a database issue, rollback wastes time. Not checking error types: a 403 spike after deployment suggests a permissions configuration change, not a code bug.",
      alternatives: "Could use a timeline analysis (error rate vs. deployment events vs. traffic vs. infrastructure metrics on a single graph) to visually test all hypotheses simultaneously."
    },
    rubric: [
      { id: "ps-014-r1", text: "Deployment hypothesis has specific, testable sub-hypotheses" },
      { id: "ps-014-r2", text: "At least two alternative hypotheses are considered" },
      { id: "ps-014-r3", text: "Diagnostic tests are proposed for each hypothesis branch" },
      { id: "ps-014-r4", text: "Error type analysis (4xx vs. 5xx) is included" }
    ]
  },

  {
    id: "ps-015",
    trackId: "problem-structuring",
    subSkill: "hypothesis-trees",
    secondarySkills: ["competitive-analysis"],
    difficulty: "medium",
    question: "A regional grocery chain has seen its market share decline from 18% to 13% over three years. The CEO believes the primary cause is competition from a new national discount grocer. Build a hypothesis tree to test this belief and identify what would prove or disprove it.",
    context: "The discount grocer entered the market two years ago and now has 8 stores in the region. The regional chain has 45 stores. Overall grocery market in the region has grown 6% over the same period.",
    hints: [
      "The CEO has a specific hypothesis. A good hypothesis tree asks: what would need to be true for the CEO to be right? Then: what would need to be true for the CEO to be wrong?",
      "For the competition hypothesis to be correct: (1) the regional chain must be losing customers specifically in areas where the discount grocer operates, and (2) those customers' shopping behavior must have shifted to the discount grocer (not to other competitors or online).",
      "Competing hypotheses: (1) Competition from the discount grocer, (2) Failure to match price/value expectation (internal pricing issue regardless of competition), (3) Store experience or assortment decline, (4) Lost market share to online grocery (growing category). Test by correlating sales decline with proximity to discount grocer stores."
    ],
    referenceSolution: {
      approach: "Build a hypothesis tree with the CEO's hypothesis and competing hypotheses, then design specific tests to differentiate between them using available data.",
      reasoning: "CEO's hypothesis tree: H1 — sales decline in geographic areas where discount grocer operates (vs. areas without competition); H2 — customer exit surveys or loyalty card data show customers switching to discount grocer (not online/other); H3 — price-sensitive SKUs (private label, staples) show greater decline than premium/perishable categories (discount grocers compete on staples). Competing hypotheses: H_A — Internal pricing vs. market: have prices risen faster than competitors generally? H_B — Store quality decline: maintenance, assortment gaps, staff. H_C — Online shift: grocery delivery growth in the region independent of discount grocer. H_D — Demographic change: growing population in non-discount grocer areas. The 6% market growth means absolute revenue may be up while share falls — important nuance. Tests: spatial correlation of sales decline with discount grocer proximity; category-level basket analysis; loyalty program attrition tracking.",
      commonMistakes: "Accepting the CEO's framing without testing it. Not noticing that market growth (6%) means the chain's absolute sales may be flat or growing — they're losing share, not necessarily customers. Conflating 'share loss' with 'revenue decline'.",
      alternatives: "A causal inference approach (difference-in-differences comparing stores near vs. far from discount grocer, before and after entry) would give a more rigorous test of the competition hypothesis."
    },
    rubric: [
      { id: "ps-015-r1", text: "CEO's hypothesis is decomposed into testable sub-hypotheses" },
      { id: "ps-015-r2", text: "At least two competing hypotheses are identified and structured" },
      { id: "ps-015-r3", text: "Geographic correlation test is proposed for the competition hypothesis" },
      { id: "ps-015-r4", text: "The distinction between share loss and absolute revenue decline is noted" },
      { id: "ps-015-r5", text: "Each hypothesis has a specific data source or test method identified" }
    ]
  },

  // ── LOGIC TREES (ps-016 to ps-020) ─────────────────────────────────────────

  {
    id: "ps-016",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: [],
    difficulty: "easy",
    question: "A company wants to decide whether to build, buy, or partner to add a new AI-powered feature to their product. Build a logic tree to guide this decision.",
    context: undefined,
    hints: [
      "A logic tree maps out decision pathways. Start with the key question ('build, buy, or partner?') and branch based on the conditions that determine which option is correct.",
      "The first branching question: do we have the internal capability (or can build it fast enough)? If yes → build is viable. If no → go to buy/partner. Then branch on: is this a core differentiating capability (if yes, lean toward own vs. partner).",
      "Key decision nodes: (1) Speed to market required vs. build timeline; (2) Core vs. non-core to competitive advantage; (3) Vendor availability and quality; (4) Total cost comparison; (5) Data/IP control requirements. Each 'yes/no' at a node routes to a recommendation."
    ],
    referenceSolution: {
      approach: "Build a decision logic tree where yes/no answers to key strategic questions route to the build, buy, or partner recommendation.",
      reasoning: "Decision node 1: Is this capability core to competitive differentiation? → Yes: lean toward build/buy to own IP. No: partner/buy is fine. Decision node 2: Do we have the internal expertise? → Yes + core capability → build. No + core capability → buy (acqui-hire or product). Decision node 3: How urgent is speed-to-market? → Urgent (< 6 months) → buy or partner; Not urgent → build is viable. Decision node 4: Is there a quality vendor available? → Yes → buy/partner viable. No → must build. Decision node 5: Are there data privacy or IP control constraints? → Yes → prefer build or buy over partner. This tree produces different answers based on how specific context answers each node.",
      commonMistakes: "Treating this as a pros/cons list rather than a logical decision tree with branching conditions. Not distinguishing 'buy a product' from 'buy a company (acqui-hire).' Forgetting that 'partner' can mean API integration (fast, low control) or joint development (slower, more control).",
      alternatives: "Could build a weighted scoring matrix as an alternative framework — less structured but allows for continuous rather than binary scoring. The logic tree is better when some conditions are absolute (e.g., regulatory requirements make partner non-viable)."
    },
    rubric: [
      { id: "ps-016-r1", text: "Decision tree has clearly labeled branching conditions (not just options)" },
      { id: "ps-016-r2", text: "Core vs. non-core differentiation is used as a decision node" },
      { id: "ps-016-r3", text: "Speed-to-market and internal capability are both addressed" },
      { id: "ps-016-r4", text: "Each terminal node leads to a clear recommendation" }
    ]
  },

  {
    id: "ps-017",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: [],
    difficulty: "easy",
    question: "A homeowner needs to decide whether to repair, renovate, or sell their 30-year-old house. Build a logic tree for this decision.",
    context: undefined,
    hints: [
      "The decision branches on financial, personal, and property condition factors. Start with the most fundamental: is the house worth investing in at all?",
      "Key branches: (1) Is staying in the house the preferred outcome? → If not → sell. If yes → repair or renovate. (2) Are the problems structural/fundamental (foundation, roof) or cosmetic/functional? → Structural → major renovation or sell. Cosmetic → repair is sufficient.",
      "Additional nodes: financial capacity for renovation, likely ROI on renovation vs. sale price, planning/permit feasibility. A logic tree routes through these conditions to a recommendation."
    ],
    referenceSolution: {
      approach: "Build a logic tree with the stay/sell decision as the first branch, then condition further branches on problem severity, financial capacity, and expected return.",
      reasoning: "Node 1: Does the owner want to remain in the house (personal preference, location, family)? → No → Sell (possibly after minor cosmetic repair to improve sale price). → Yes → Node 2. Node 2: Are there fundamental structural/systemic problems (foundation, load-bearing walls, electrical wiring, plumbing)? → Yes → Node 3. → No → Minor repairs and stay. Node 3: Does the cost of fixing structural issues + remaining value justify investment? → Yes (house is in good location, high property values) → Major renovation. → No (cost > uplift in value) → Sell as-is or with disclosure. Additional node: Does the owner have or can obtain financing for renovation? → No → Sell or minimal repair-and-sell.",
      commonMistakes: "Jumping to renovation vs. repair before deciding whether staying is even the goal. Not building a financial logic branch (renovation only makes sense if expected value increase > renovation cost). Treating 'renovation' and 'repair' as the same — repairs fix broken things, renovations upgrade functional things.",
      alternatives: "Could add a 'rent out and move' option as a fourth branch — sometimes the best financial decision is to keep the asset as a rental rather than sell or renovate to live in."
    },
    rubric: [
      { id: "ps-017-r1", text: "Stay vs. sell is the first logical branch" },
      { id: "ps-017-r2", text: "Problem severity (structural vs. cosmetic) creates a meaningful branch" },
      { id: "ps-017-r3", text: "Financial return or capacity branch is included" },
      { id: "ps-017-r4", text: "Each terminal node leads to a clear actionable recommendation" }
    ]
  },

  {
    id: "ps-018",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: ["supply-demand"],
    difficulty: "easy",
    question: "A city is experiencing a shortage of affordable housing. Build a logic tree to identify possible policy responses and when each is appropriate.",
    context: undefined,
    hints: [
      "Housing shortage = supply < demand at affordable price points. Policy solutions either increase supply or reduce demand — or do both. Start your logic tree with this fundamental split.",
      "Supply-side policies: zoning reform (allow higher density), subsidies for affordable unit construction, public housing development, reducing construction costs (regulations, materials). Demand-side policies: housing vouchers, income support, limiting in-migration (usually not viable). Combination: mixed-income developments.",
      "The logic tree should show: what condition makes each policy appropriate? For example, supply restrictions are the cause → zoning reform is the primary tool. Affordability gap is the issue (supply is fine, just expensive) → subsidies and vouchers."
    ],
    referenceSolution: {
      approach: "Build a logic tree that first diagnoses whether the housing shortage is supply-constrained or price/affordability-constrained, then routes to appropriate policy responses.",
      reasoning: "Node 1: Is the shortage primarily due to insufficient total housing units, or insufficient affordable units (plenty of units but prices are high)? → Insufficient units → supply-side policies. → Prices too high → affordability/subsidy policies. Supply-side logic: Node 2a: Is supply restricted by zoning rules? → Yes → zoning reform (upzoning, reduced parking minimums). Is supply restricted by construction cost? → Yes → subsidies for affordable construction, prefab/modular incentives. Is supply restricted by land availability? → Yes → public land release, density bonuses. Affordability logic: Node 2b: Is the gap due to income insufficiency (workers can't afford market rate)? → Yes → housing vouchers, income support. Is it geographic concentration (affordable units exist but not where jobs are)? → Yes → transit investment + mixed-income zoning. Node 3 (both paths): Is the issue acute (immediate crisis) or structural (long-term)? → Acute → demand-side subsidies faster to deploy. → Structural → supply-side reform has better long-term ROI.",
      commonMistakes: "Prescribing solutions without first diagnosing whether the problem is supply-side or demand-side. Treating rent control as a supply-side solution (it's a price control, not a supply increase — and usually reduces long-run supply). Not addressing the acute vs. structural time horizon.",
      alternatives: "Could structure the logic tree around political feasibility branches (what can actually be passed) vs. economic efficiency (what would work best). Real policy decisions often follow the former, but good analysis starts with the latter."
    },
    rubric: [
      { id: "ps-018-r1", text: "Supply vs. demand is the primary branching logic" },
      { id: "ps-018-r2", text: "At least 3 distinct supply-side policy options are identified" },
      { id: "ps-018-r3", text: "Conditions for each policy's applicability are specified (not just a list)" },
      { id: "ps-018-r4", text: "Short-term vs. long-term effectiveness distinction is addressed" }
    ]
  },

  {
    id: "ps-019",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: [],
    difficulty: "easy",
    question: "A nurse is assessing whether a patient who has just taken an accidental overdose of over-the-counter pain medication requires immediate hospitalization. Build a logic tree for this triage decision.",
    context: "The medication is acetaminophen (paracetamol). The patient is alert and arrived within 2 hours of ingestion.",
    hints: [
      "Overdose triage involves: (1) how much was taken (dose vs. body weight threshold), (2) how long ago it was taken (time window for intervention), and (3) current clinical status.",
      "For acetaminophen specifically: the Rumack-Matthew nomogram uses dose and time since ingestion to determine risk of hepatotoxicity. Above a certain threshold → treat with N-acetylcysteine (NAC). Below threshold → observe.",
      "Decision nodes: (1) Dose above toxic threshold for patient's weight? → Yes → initiate treatment. (2) Time since ingestion within treatment window (< 8–10 hours for NAC to be fully effective)? → Yes → urgent. (3) Patient showing symptoms of liver failure (jaundice, abdominal pain, encephalopathy)? → Yes → immediate ICU."
    ],
    referenceSolution: {
      approach: "Build a clinical logic tree that routes the triage decision based on dose threshold, time since ingestion, and clinical status.",
      reasoning: "Node 1: Calculate estimated dose per kg body weight. Above toxic threshold (≥ 150 mg/kg or using nomogram)? → Yes → proceed to treatment. → No → low-risk, observe and discharge with instructions. Node 2 (if above threshold): Time since ingestion ≤ 8 hours? → Yes → administer activated charcoal if < 1 hour and no contraindications; initiate IV NAC. → 8–24 hours → IV NAC still indicated, activated charcoal no longer useful. → > 24 hours → evaluate liver function tests; if elevated → NAC still has benefit; if normal → lower risk. Node 3 (any time point): Is patient showing signs of hepatotoxicity (ALT/AST elevated, RUQ pain, jaundice, coagulopathy)? → Yes → immediate ICU, transplant evaluation. This tree produces: observe, treat outpatient/ED, or ICU depending on routing.",
      commonMistakes: "Skipping the dose calculation and defaulting to 'any overdose = hospitalize' (over-triaging). Not accounting for time since ingestion (waiting to act within the window wastes the most effective intervention opportunity). Forgetting that acetaminophen overdose can be asymptomatic initially with severe delayed hepatotoxicity.",
      alternatives: "Could integrate psychiatric risk assessment as a parallel branch (intentional vs. accidental overdose affects discharge planning even when medical risk is low)."
    },
    rubric: [
      { id: "ps-019-r1", text: "Dose calculation relative to body weight is the first decision node" },
      { id: "ps-019-r2", text: "Time since ingestion creates a meaningful branch affecting treatment urgency" },
      { id: "ps-019-r3", text: "Clinical status (symptoms present vs. absent) creates an emergency branch" },
      { id: "ps-019-r4", text: "Terminal nodes include specific actions (observe, treat, ICU)" }
    ]
  },

  {
    id: "ps-020",
    trackId: "problem-structuring",
    subSkill: "logic-trees",
    secondarySkills: ["first-principles-analysis"],
    difficulty: "medium",
    question: "A tech company must decide whether to keep its existing monolithic codebase or migrate to a microservices architecture. Build a logic tree for this decision, starting from first principles about what makes each architecture appropriate.",
    context: "The company has a 7-year-old Rails monolith serving 2M daily active users. The engineering team has grown from 8 to 60 engineers. Deployment takes 45 minutes and requires the whole team to coordinate. They have experienced 3 major outages in the past year.",
    hints: [
      "Don't start with 'microservices are modern.' Start from first principles: what problem is each architecture solving? When does a monolith work well, and when does it break down?",
      "Key branching conditions: (1) Is the primary pain point organizational (too many engineers coordinating on one codebase) or technical (scaling specific components)? (2) Does the team have operational maturity for distributed systems? (3) Is the migration cost justified by the benefit?",
      "First-principles logic: Monoliths fail when: independent deployability is needed, different components need to scale at different rates, or team coordination cost exceeds the complexity of the system. Microservices fail when: operational overhead (service discovery, distributed tracing, eventual consistency) exceeds team capacity to manage."
    ],
    referenceSolution: {
      approach: "Build a logic tree by first identifying what architectural properties are required given the context, then routing to the architecture that delivers those properties at acceptable cost.",
      reasoning: "From first principles, architecture choice is about matching organizational and technical requirements to architectural properties. Required properties for this company: (1) Independent deployability — 60 engineers cannot coordinate on one 45-minute deploy; strong signal for microservices OR modular monolith. (2) Fault isolation — 3 outages from a monolith where one bug brings everything down; microservices help but add distributed system failure modes. (3) Selective scalability — do specific components need to scale independently? If bottlenecks are identified → microservices. If scaling is uniform → monolith with horizontal scaling may suffice. Decision nodes: Node 1: Is the primary problem deployment coordination? → Yes → modular monolith or microservices. Node 2: Is there a clear need to scale specific components independently? → Yes → microservices for those components. No → modular monolith may be sufficient. Node 3: Does the team have operational maturity (Kubernetes, distributed tracing, service mesh experience)? → No → modular monolith is lower risk. Node 4: Can migration be done incrementally? → Yes → strangler fig pattern (safest migration path). Conclusion: Given 60 engineers and coordination pain, some decomposition is warranted. Given operational immaturity for distributed systems, a modular monolith or selective microservices extraction is more appropriate than full microservices.",
      commonMistakes: "Framing as 'old vs. new' rather than 'which properties does our context require.' Recommending full microservices without assessing operational capability. Not considering a modular monolith as a middle path. Treating this as a one-time decision rather than an incremental migration.",
      alternatives: "Could frame as a risk-adjusted decision: probability of successful migration × value of migration - cost and risk of failed migration. Teams that have attempted large-scale microservices migrations report high failure rates when not done incrementally."
    },
    rubric: [
      { id: "ps-020-r1", text: "First-principles reasoning about why each architecture exists is present" },
      { id: "ps-020-r2", text: "Deployment coordination (60 engineers) is used as a key decision input" },
      { id: "ps-020-r3", text: "Operational maturity of the team is addressed as a condition" },
      { id: "ps-020-r4", text: "Modular monolith or incremental migration is considered as a third path" },
      { id: "ps-020-r5", text: "Each terminal recommendation is justified by its upstream branching conditions" }
    ]
  },

  // ── FRAMEWORK SELECTION (ps-021 to ps-025) ─────────────────────────────────

  {
    id: "ps-021",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: [],
    difficulty: "easy",
    question: "A consultant is asked to assess the competitive position of a mid-sized hotel chain. Which analytical framework would you recommend as the primary structure, and why? What are the limitations of your choice?",
    context: undefined,
    hints: [
      "Think about what 'competitive position' means: it requires understanding both the external competitive environment and the company's internal capabilities relative to that environment.",
      "Porter's Five Forces analyzes industry structure and competitive intensity. SWOT maps internal vs. external factors. These serve different purposes — which fits the question?",
      "Porter's Five Forces is ideal for understanding the competitive environment (threat of new entrants, supplier power, buyer power, substitutes, rivalry). But it doesn't assess the hotel chain's own position within that environment. SWOT or a capabilities-based framework is needed for that. The answer is: Five Forces for the industry, then a resources/capabilities lens for the firm's position within it."
    ],
    referenceSolution: {
      approach: "Select Porter's Five Forces for the industry analysis, then a resource-based view or SWOT for the firm's relative position — and explain why each is the right tool for its sub-question.",
      reasoning: "The question has two parts: (1) What is the competitive environment of the hotel industry? → Porter's Five Forces is the right tool: it explicitly maps supplier power (OTAs like Booking.com, property suppliers), buyer power (travelers, corporate accounts), new entrants (Airbnb), substitutes (remote work reducing business travel), and rivalry (chains, boutiques). (2) Where does this hotel chain stand within that environment? → Resources and capabilities lens (what do they own/control that others don't?) combined with a competitive benchmarking overlay. SWOT can structure this but is weaker because it doesn't force the rigor that comes from explicitly mapping competitive forces. Limitation of Five Forces: it describes the industry, not firm-level differentiation. Limitation of SWOT: the framework doesn't tell you how to weight or prioritize items — it's a list, not an analysis.",
      commonMistakes: "Defaulting to SWOT for everything (it's overused and underpowered for competitive analysis). Using Five Forces to assess the firm rather than the industry (it's an industry-level tool, not a firm-level tool). Not acknowledging framework limitations.",
      alternatives: "McKinsey's 7S Framework (for internal organizational alignment). Blue Ocean Strategy (if the question is about finding uncontested space). BCG matrix (if assessing the chain's portfolio of properties or brands)."
    },
    rubric: [
      { id: "ps-021-r1", text: "The recommended framework is matched to the specific question being asked" },
      { id: "ps-021-r2", text: "The distinction between industry-level and firm-level analysis is made" },
      { id: "ps-021-r3", text: "At least one limitation of the chosen framework is identified" },
      { id: "ps-021-r4", text: "An alternative framework is named and its tradeoff explained" }
    ]
  },

  {
    id: "ps-022",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: ["pyramid-principle"],
    difficulty: "easy",
    question: "A product manager needs to present the results of a 3-month product experiment to the CEO. The experiment tested a new onboarding flow, with mixed results: activation improved but 30-day retention slightly declined. How should the PM structure this communication? Which communication framework applies, and why?",
    context: undefined,
    hints: [
      "This is a communication structure question, not an analysis question. The PM already has the results — the question is how to present them.",
      "The Pyramid Principle and SCQA (Situation-Complication-Question-Answer) are two related frameworks for structuring top-down communication. Which is more appropriate when you have a nuanced, mixed result to deliver to a senior audience?",
      "SCQA is ideal for framing a problem narrative (this is the situation, here's the complication, here's the key question, here's our answer). The Pyramid Principle is ideal for presenting a conclusion-first argument with supporting evidence. Given the PM has a conclusion to communicate ('here's what we should do next'), the Pyramid Principle works well — but SCQA helps set up the narrative context."
    ],
    referenceSolution: {
      approach: "Use the Pyramid Principle (conclusion first, then supporting evidence) with an SCQA-structured opening to set context — and explain why this beats chronological or data-first presentation.",
      reasoning: "A CEO needs decisions and recommendations, not methodology. Chronological presentation ('first we ran the test, then we saw...') buries the punchline. Data-first ('activation went up, retention went down') leaves the CEO to draw their own conclusion. Pyramid approach: Lead with the recommendation ('We recommend rolling back the new onboarding flow and iterating before re-launching'). Then: 'Here's why' → the three supporting points: (1) retention decline has higher lifetime value impact than activation improvement, (2) the activation improvement may be explained by novelty effect (needs validation), (3) a revised design addressing the retention issue is 3 weeks away. SCQA opening: Situation (we ran a 3-month test), Complication (mixed results that require a decision), Question (should we ship, iterate, or roll back?), Answer (iterate). Limitation: the Pyramid requires the communicator to have a clear point of view first — if the PM is genuinely uncertain, SCQA's open question framing may be more honest.",
      commonMistakes: "Presenting data chronologically without a clear recommendation (forces the CEO to think through the data rather than evaluate the PM's judgment). Burying the retention decline in a footnote because it's 'negative' — senior audiences need to understand risks, not just wins.",
      alternatives: "For a longer written memo: a hybrid approach — SCQA in the executive summary, Pyramid Principle for each supporting section. For a live presentation: Minto's Pyramid with a clear 'governing thought' slide as slide 1."
    },
    rubric: [
      { id: "ps-022-r1", text: "Pyramid Principle or SCQA is named and explained (not just 'be clear')" },
      { id: "ps-022-r2", text: "The recommendation is placed first (conclusion-first structure)" },
      { id: "ps-022-r3", text: "The LTV argument for prioritizing retention over activation is made" },
      { id: "ps-022-r4", text: "At least one limitation of the chosen framework is acknowledged" }
    ]
  },

  {
    id: "ps-023",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: [],
    difficulty: "easy",
    question: "A founder is deciding whether to pivot their startup from a B2C fitness app to a B2B corporate wellness solution. Which decision-making framework would best structure this choice, and how would you apply it?",
    context: "The B2C app has 50,000 monthly active users but low monetization ($0.80 ARPU). The corporate wellness market is a potential opportunity the founder has heard about but has not researched deeply.",
    hints: [
      "This is a strategic option decision: continue vs. pivot. Multiple frameworks could apply — think about what the key uncertainty is before selecting one.",
      "The key uncertainties are: (1) Is the corporate wellness market attractive? (2) Does the team have any advantage in B2B vs. B2C? (3) What are the switching costs and opportunity costs of the pivot? A framework that surfaces these uncertainties explicitly would work well.",
      "A 2x2 matrix (e.g., market attractiveness × company fit) can help structure the option space. Alternatively, a structured hypothesis tree can test whether the pivot would work before committing. The worst choice is to apply a framework like SWOT to the current state without addressing the 'should we pivot' decision explicitly."
    ],
    referenceSolution: {
      approach: "Use a decision hypothesis tree to test the conditions under which the pivot is favorable, rather than a descriptive framework — because the question is forward-looking and action-oriented.",
      reasoning: "The decision has two possible states: pivot or don't pivot. A hypothesis tree for 'the pivot is worth doing': H1 — Corporate wellness market is attractive (addressable, growing, underserved, healthy margins); H2 — Our B2C product/data/capabilities transfer meaningfully to B2B (not starting from scratch); H3 — We can win against entrenched competitors (Virgin Pulse, Wellable, etc.) on some dimension; H4 — The opportunity cost is acceptable (B2C path has low probability of success given $0.80 ARPU, so we lose little by pivoting). Applying this: H1 is unknown (founder 'has heard about it' — needs primary research). H2 is partially testable (a fitness app has engagement data and content that could work for corporate wellness). H3 needs competitive analysis. H4 is arguably favorable (current B2C trajectory is not working). The framework also helps identify what the founder must learn before committing: mostly H1 and H3.",
      commonMistakes: "Applying SWOT to the current state without asking 'what would need to be true for the pivot to succeed?' Using a scoring matrix before you have the data to score with. Treating the B2C user base as irrelevant — 50,000 MAUs is actual evidence of product-market fit in fitness, which is a signal for H2.",
      alternatives: "A real options framework (treat the pivot as a call option — invest in discovery before committing). A jobs-to-be-done analysis might reveal whether corporate buyers have the same 'job' as B2C users, answering H2 before committing to a full pivot."
    },
    rubric: [
      { id: "ps-023-r1", text: "Framework selection is justified based on the nature of the decision (not just named)" },
      { id: "ps-023-r2", text: "The hypothesis tree or equivalent reveals what needs to be learned before deciding" },
      { id: "ps-023-r3", text: "The low ARPU is used as context that affects the opportunity cost analysis" },
      { id: "ps-023-r4", text: "At least one alternative framework is mentioned with a reason it's less appropriate" }
    ]
  },

  {
    id: "ps-024",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: ["case-analysis"],
    difficulty: "easy",
    question: "You are presented with a consulting case: 'Our client is a private equity firm that has just acquired a struggling retail chain. They want to know what to do in the first 100 days to stabilize the business.' Which problem structuring approach would you choose, and walk through your opening structure?",
    context: undefined,
    hints: [
      "In case interviews, 'what to do first' questions benefit from a structure that covers the most critical stabilization dimensions without omitting anything important.",
      "A 100-day stabilization plan typically needs to cover: liquidity (can we survive?), operations (are core processes working?), people (do we have the right team?), and strategy (what's the longer-term plan?). These are your branches.",
      "You should also clarify the client's goals upfront — in private equity, the goal is usually to eventually exit at a profit, which means the 100-day plan is about stopping the bleeding, not full transformation. This shapes which branches are most urgent."
    ],
    referenceSolution: {
      approach: "Open with a clarifying question about the PE firm's exit thesis, then structure the 100-day plan around a 'stabilize-diagnose-decide' framework with financial, operational, and organizational branches.",
      reasoning: "Opening clarification: What is the PE firm's investment thesis — turnaround + hold, quick flip, or strategic acquisition? This shapes urgency. Stabilization structure: (1) Financial/Liquidity — Can the business fund operations for the next 90 days? (Cash position, credit lines, accounts payable aging, any covenant violations); (2) Operations — Which stores are profitable vs. loss-making? (Store-level P&L, supply chain status, inventory health); (3) People/Leadership — Is the management team capable of executing? Is there a CEO/CFO who can lead the turnaround? (Key person assessment, morale/retention risk); (4) Strategy — What is the core of the business that is defensible? (What are customers coming for? What is the competitive advantage that can be rebuilt?). Prioritization: Liquidity first (a bankrupt company can't execute any plan). Operations second (stop losing money on bad stores). People third (need right team to execute). Strategy last (correct the direction only once the bleeding has stopped). This structure is MECE and prioritized by urgency.",
      commonMistakes: "Jumping to strategic recommendations without addressing the immediate cash/liquidity question. Treating all stores equally when a portfolio analysis almost always reveals a profitable core and unprofitable periphery. Not asking about the investment thesis before structuring the problem.",
      alternatives: "Could use a pure financial lens (P&L, balance sheet, cash flow analysis) for the first branch. Could use McKinsey's 7S for organizational diagnosis. The specific framework matters less than the logical completeness and prioritization."
    },
    rubric: [
      { id: "ps-024-r1", text: "A clarifying question about PE investment thesis is asked before structuring" },
      { id: "ps-024-r2", text: "Financial/liquidity branch is correctly prioritized as most urgent" },
      { id: "ps-024-r3", text: "Structure covers financial, operational, and people dimensions" },
      { id: "ps-024-r4", text: "The structure is MECE — no major dimension is missing or double-counted" },
      { id: "ps-024-r5", text: "Prioritization logic is explicit (not just a list)" }
    ]
  },

  {
    id: "ps-025",
    trackId: "problem-structuring",
    subSkill: "framework-selection",
    secondarySkills: ["multi-skill-synthesis", "bounding-estimates"],
    difficulty: "medium",
    question: "A government health ministry is trying to decide how to allocate a $500M budget across three health interventions: (A) a national cancer screening program, (B) expanding rural primary care access, and (C) a mental health awareness and early intervention campaign. Each addresses a real need. Which analytical framework would you use to make this allocation decision, and demonstrate how you would apply it?",
    context: "The ministry's stated goal is to maximize population health outcomes per dollar spent. They have rough data on each intervention: A is expensive per case prevented ($45K/QALY), B is moderate ($12K/QALY), C has uncertain impact data but is a political priority.",
    hints: [
      "This is a resource allocation problem across competing options with different cost-effectiveness profiles. The goal is stated: maximize health outcomes per dollar.",
      "Cost-effectiveness analysis (CEA) using QALYs (Quality-Adjusted Life Years) is the standard public health framework for this type of problem. The cost per QALY threshold for funding decisions in most health systems is $30,000–$50,000 USD.",
      "Apply the framework: B ($12K/QALY) is clearly cost-effective; A ($45K/QALY) is borderline; C (uncertain) requires bounding — what's the best-case and worst-case QALY estimate? Then allocate to maximize QALYs within budget, starting with the most cost-effective intervention."
    ],
    referenceSolution: {
      approach: "Apply cost-effectiveness analysis (cost per QALY) as the primary framework, bound the uncertainty on intervention C, then allocate budget to maximize total QALYs within the $500M constraint.",
      reasoning: "Framework justification: The stated goal is health outcomes per dollar — this is the definition of cost-effectiveness analysis. Alternative frameworks (political priority weighting, equal distribution) sacrifice efficiency. Application: (1) Rank interventions by cost per QALY: B = $12K (fund fully), A = $45K (borderline vs. $30–50K threshold), C = unknown. (2) Bound C: If the mental health campaign has even moderate effect size (a common assumption for awareness campaigns is 15–25% reduction in treatment delay), at what cost? Mental health conditions affect ~20% of population; even a 5% improvement in early detection could represent significant QALY gains at relatively low cost (media campaigns are cheap per exposure). Best-case estimate might put C at $8–15K/QALY; worst case (ineffective campaign) could be $100K+. (3) Allocation strategy: Fund B to saturation (full rural primary care expansion, estimate $200M), then allocate to C pending clarification of effectiveness data, hold A as final allocation if budget remains. (4) Acknowledge the political constraint on C and structure a data collection request (pilot program) before full allocation. Key insight: maximizing QALYs means underfunding the politically popular cancer screening if it's above the cost-effectiveness threshold.",
      commonMistakes: "Treating the political priority of C as an analytical input rather than a constraint to be managed. Not bounding the uncertainty on C — saying 'we don't know' and stopping there. Applying a simple equal-thirds split without referencing the cost-effectiveness data given in the problem.",
      alternatives: "Multi-criteria decision analysis (MCDA) incorporates non-health factors (equity, political feasibility, innovation) alongside effectiveness — sometimes used in public health when pure CEA is politically unworkable. Budget impact analysis is a complementary tool (CEA tells you what to fund; budget impact tells you what you can afford to fund)."
    },
    rubric: [
      { id: "ps-025-r1", text: "Cost-effectiveness analysis (CEA/QALY) is named and applied, not just mentioned" },
      { id: "ps-025-r2", text: "The QALY data is used to rank and compare interventions" },
      { id: "ps-025-r3", text: "Uncertainty around intervention C is explicitly bounded (best/worst case)" },
      { id: "ps-025-r4", text: "A specific allocation recommendation is made (not just 'it depends')" },
      { id: "ps-025-r5", text: "Political constraints are acknowledged without letting them override the analytical framework" },
      { id: "ps-025-r6", text: "At least one alternative framework is named and its tradeoff explained" }
    ]
  }
];
