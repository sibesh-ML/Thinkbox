import type { Problem } from '@/types';

export const firstPrinciplesThinkingProblems: Problem[] = [
  // ── DECOMPOSITION TO FUNDAMENTALS (fp-001 to fp-005) ──────────────────────

  {
    id: "fp-001",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: [],
    difficulty: "easy",
    question: "A friend says 'flying is expensive.' Break this claim down to its fundamental components to evaluate whether it is actually true.",
    context: undefined,
    hints: [
      "Before accepting 'expensive,' ask: expensive compared to what, for whom, and for which purpose?",
      "Decompose the concept of 'cost' itself — price paid, time cost, and alternatives are all components of the true cost.",
      "At the fundamental level, the full cost of travel = ticket price + time cost + ancillary costs (bags, transport to airport). Compare this with the same components for the alternative (driving, train). 'Expensive' only holds if the total is higher than all alternatives for the same trip."
    ],
    referenceSolution: {
      approach: "Decompose the word 'expensive' into its constituent factors, then evaluate each rather than accepting the label at face value.",
      reasoning: "Step 1 — What does 'expensive' actually mean? It means 'costs more than the alternatives or than expected.' Step 2 — Decompose cost into: (a) monetary price, (b) time cost (hours spent traveling × hourly value of your time), (c) ancillary costs (luggage fees, airport transport, parking, meals). Step 3 — Decompose 'alternatives': for a 400-mile trip, alternatives are driving (~7 hours), train (4-6 hours), or bus (8 hours). Step 4 — Compare totals. A $150 flight that saves 6 hours may be cheaper in total cost than a 'free' drive that costs $80 in gas and 12 hours of lost time. Conclusion: the claim 'flying is expensive' is context-dependent and breaks down under decomposition.",
      commonMistakes: "Accepting 'expensive' as a binary fact rather than a relational claim. Comparing only sticker price without including time cost. Forgetting that alternatives also have costs.",
      alternatives: "Could also decompose by traveler type (business vs. leisure) where time value differs dramatically, leading to different conclusions."
    },
    rubric: [
      { id: "fp-001-r1", text: "Identifies that 'expensive' is relational, not absolute" },
      { id: "fp-001-r2", text: "Decomposes cost into at least monetary + time components" },
      { id: "fp-001-r3", text: "Considers at least one concrete alternative mode of travel" },
      { id: "fp-001-r4", text: "Reaches a conditional conclusion rather than a blanket answer" }
    ]
  },

  {
    id: "fp-002",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: ["unit-economics"],
    difficulty: "easy",
    question: "A restaurant owner says her restaurant is 'not profitable.' Break down the concept of restaurant profitability to its fundamental drivers to identify where the problem likely lies.",
    context: undefined,
    hints: [
      "Profit is just revenue minus costs — start from that identity and expand each side.",
      "Revenue has two drivers: how many covers (customers) per period, and how much each spends on average. Costs have two main buckets: food cost and non-food cost.",
      "Food cost % (cost of goods / revenue) should ideally be 28-35%. Labor is typically 30-35%. Fixed costs (rent, utilities, licenses) are another 10-15%. Net margin should be 5-10% if healthy. Ask: which of these ratios is out of line?"
    ],
    referenceSolution: {
      approach: "Decompose profit into its fundamental equation, then diagnose which component is the likely culprit.",
      reasoning: "Profit = Revenue − Costs. Revenue = Covers per week × Average spend per cover. Costs = Food costs + Labor costs + Fixed overhead. Each can be further decomposed: food cost % = cost of ingredients / revenue; labor cost % = total wages / revenue; fixed costs include rent, utilities, insurance, licenses. To diagnose the problem, compare each ratio to industry benchmarks. If food cost % is 45%, the menu is mispriced or waste is high. If labor cost % is 40%, staffing is inefficient. If fixed costs are 20%, the location rent is too high for the revenue level. The owner's vague 'not profitable' collapses once we see which ratio is out of line.",
      commonMistakes: "Jumping to 'revenue is too low' or 'costs are too high' without decomposing which specific cost or revenue driver is off. Ignoring owner's compensation as a hidden cost.",
      alternatives: "Could decompose by daypart (lunch vs. dinner) or by menu category (food vs. drinks) if granular data is available."
    },
    rubric: [
      { id: "fp-002-r1", text: "States the fundamental equation: Profit = Revenue − Costs" },
      { id: "fp-002-r2", text: "Decomposes revenue into volume × price components" },
      { id: "fp-002-r3", text: "Identifies the three major cost buckets (food, labor, fixed)" },
      { id: "fp-002-r4", text: "Proposes comparing ratios to benchmarks to locate the problem" },
      { id: "fp-002-r5", text: "Avoids assuming a single cause without evidence" }
    ]
  },

  {
    id: "fp-003",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: [],
    difficulty: "easy",
    question: "What does a battery fundamentally do? Break it down to first principles to explain why batteries eventually stop holding a charge.",
    context: undefined,
    hints: [
      "Don't describe batteries by brand or use-case. Ask: what is the fundamental physical process happening inside?",
      "A battery stores and releases energy through a chemical reaction. What are the essential components of that reaction?",
      "At the fundamental level: a battery has two electrodes (anode and cathode) separated by an electrolyte. Electrons flow through an external circuit while ions migrate through the electrolyte. Degradation occurs because: electrode materials physically change over charge cycles, electrolyte decomposes, and ion pathways become blocked."
    ],
    referenceSolution: {
      approach: "Strip away the product abstraction and describe the underlying physical/chemical mechanism, then trace degradation to its root cause.",
      reasoning: "A battery is fundamentally an electrochemical cell. It stores energy as chemical potential in two electrode materials. During discharge: the anode releases electrons (oxidation) → electrons flow through the external circuit → ions migrate through electrolyte → cathode accepts electrons (reduction). Recharging reverses this. Degradation happens because: (1) Electrode materials expand/contract with ion insertion, causing micro-cracking over cycles. (2) The electrolyte reacts with electrode surfaces, forming a resistive film (SEI layer). (3) Lithium plating at high charge rates creates dead lithium. Each cycle worsens these effects, reducing the electrode's ability to store and release ions.",
      commonMistakes: "Saying 'the battery wears out' without identifying the specific physical mechanism. Confusing capacity loss with power loss (they have different mechanisms).",
      alternatives: "Could decompose from thermodynamics: all batteries convert between chemical Gibbs free energy and electrical work. Degradation = the reaction becoming thermodynamically less favorable."
    },
    rubric: [
      { id: "fp-003-r1", text: "Identifies the core mechanism as electrochemical (not just 'chemical')" },
      { id: "fp-003-r2", text: "Names anode, cathode, and electrolyte as fundamental components" },
      { id: "fp-003-r3", text: "Explains degradation as a structural/material change, not just 'wearing out'" },
      { id: "fp-003-r4", text: "Does not rely on product-level descriptions or brand analogies" }
    ]
  },

  {
    id: "fp-004",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: ["mece-decomposition"],
    difficulty: "easy",
    question: "Your city wants to reduce traffic congestion. Before proposing solutions, decompose the phenomenon of 'traffic congestion' into its fundamental causes.",
    context: undefined,
    hints: [
      "Congestion is a supply-demand mismatch. What is the supply and what is the demand in this context?",
      "Demand = number of vehicles wanting to use a road at a given time. Supply = road capacity. Congestion occurs when demand exceeds supply. Now ask: why might demand be high and why might supply be constrained?",
      "Demand drivers: concentration of trips at peak hours (commute patterns), geographic concentration (bottlenecks), mode choice (everyone drives vs. alternatives). Supply constraints: physical road capacity, signal timing, incidents and blockages, lane allocation. A MECE decomposition: Excess demand OR Insufficient supply OR Demand-supply timing mismatch."
    ],
    referenceSolution: {
      approach: "Model congestion as a supply-demand imbalance and decompose each side into its fundamental drivers.",
      reasoning: "Congestion = demand for road space > supply of road space at a given location and time. Demand side: (1) Trip volume — how many people need to travel. (2) Mode share — what fraction choose cars vs. transit, cycling, walking. (3) Temporal distribution — whether trips cluster at peak hours. (4) Spatial distribution — whether routes funnel through bottlenecks. Supply side: (1) Physical road capacity — lanes × flow rate per lane. (2) Effective capacity — reduced by signals, intersections, merges, incidents. (3) Parking access — slow parking ingress/egress blocks flow. A third category: infrastructure-demand mismatch — supply exists but is misallocated (e.g., toll-free highways in dense areas). Solutions must target the correct lever.",
      commonMistakes: "Jumping to solutions (build more roads) before diagnosing whether the problem is demand or supply. Treating congestion as uniform when it is highly localized and time-specific.",
      alternatives: "Could also decompose by congestion type: recurring (predictable peak-hour) vs. non-recurring (incidents, events). Each requires different interventions."
    },
    rubric: [
      { id: "fp-004-r1", text: "Frames congestion as a supply-demand imbalance" },
      { id: "fp-004-r2", text: "Decomposes demand into volume, mode, temporal, and spatial components" },
      { id: "fp-004-r3", text: "Decomposes supply into physical and effective capacity" },
      { id: "fp-004-r4", text: "Avoids jumping to solutions before completing the diagnosis" }
    ]
  },

  {
    id: "fp-005",
    trackId: "first-principles-thinking",
    subSkill: "decomposition-to-fundamentals",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "medium",
    question: "A startup founder says 'we just need to grow users 10x and we'll be profitable.' Decompose this claim to its fundamental economics to determine whether it is actually true.",
    context: "The startup currently has 10,000 monthly active users, $50,000 monthly revenue ($5 ARPU), and $200,000 monthly costs. Fixed costs are $150,000/month; variable costs are $5 per user.",
    hints: [
      "Start from the profit equation and plug in the numbers at current scale, then at 10x scale.",
      "At 10x users, revenue scales linearly. But do all costs scale at the same rate? Separate fixed from variable costs.",
      "At 100,000 users: Revenue = 100,000 × $5 = $500,000. Variable costs = 100,000 × $5 = $500,000. Fixed costs = $150,000 (unchanged). Total costs = $650,000. Profit = $500,000 − $650,000 = −$150,000. Still unprofitable. The problem is that ARPU ($5) equals variable cost per user ($5), so each new user contributes zero margin."
    ],
    referenceSolution: {
      approach: "Decompose the claim into the fundamental unit economics and test whether scale resolves the problem.",
      reasoning: "Current state: Revenue = $50K, Costs = $200K, Loss = $150K. Decompose costs: Fixed = $150K, Variable = 10,000 × $5 = $50K. Unit economics: Contribution margin per user = ARPU − Variable cost per user = $5 − $5 = $0. This is the fatal insight. With zero contribution margin, adding users covers zero fixed cost. At 10x (100K users): Revenue = $500K, Variable costs = $500K, Fixed costs = $150K, Total loss = $150K — identical to today. Scale does not help when unit contribution margin is zero. To become profitable, the founder must either: (a) raise ARPU above $5, (b) cut variable cost below $5 per user, or (c) some combination. Growth alone is not the lever.",
      commonMistakes: "Assuming profitability automatically follows scale without checking unit economics. Confusing total revenue growth with margin improvement. Not separating fixed from variable costs.",
      alternatives: "Could also analyze the break-even point: Fixed costs / Contribution margin per unit. With $0 margin, break-even is infinite — making this a structural pricing problem, not a scale problem."
    },
    rubric: [
      { id: "fp-005-r1", text: "Correctly identifies the contribution margin per user as $0" },
      { id: "fp-005-r2", text: "Shows that at 10x scale, the loss is unchanged (not reduced)" },
      { id: "fp-005-r3", text: "Identifies the root cause as ARPU equaling variable cost, not insufficient scale" },
      { id: "fp-005-r4", text: "Proposes the correct levers: raise ARPU or cut variable cost" },
      { id: "fp-005-r5", text: "Does not accept the founder's framing without verifying the math" }
    ]
  },

  // ── CHALLENGING DEFAULTS (fp-006 to fp-010) ────────────────────────────────

  {
    id: "fp-006",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: [],
    difficulty: "easy",
    question: "Most office buildings have a standard 9-to-5 workday with a 1-hour lunch break. Challenge this default: what assumptions does it rest on, and are any of them no longer valid?",
    context: undefined,
    hints: [
      "List the implicit assumptions that made the 9-to-5 schedule sensible when it was created. Then ask which ones have changed.",
      "Think about what has changed: communication technology, workforce composition, where work actually requires co-presence vs. independent focus.",
      "Original assumptions: workers need supervision to be productive; collaboration requires physical co-presence at the same time; childcare/home responsibilities are handled by a non-working spouse; commuting time is not work time; information flows best in synchronous verbal exchanges. Most of these assumptions are weaker or false today."
    ],
    referenceSolution: {
      approach: "Surface the hidden assumptions behind the default, then test each against current reality.",
      reasoning: "The 9-5 schedule was designed around: (1) Factory-model supervision — workers needed physical oversight. FALSE for knowledge work. (2) Synchronous communication only — before phones/email, you had to be in the same place at the same time. OBSOLETE. (3) Uniform human chronobiology — everyone is equally productive at the same hours. FALSE — chronotypes vary widely. (4) A non-working spouse handles family logistics. FALSE for most dual-income or single-parent households. (5) Uniform commute distances. FALSE in sprawling metro areas. Challenging each assumption opens design space: flexible start times, core hours with flex perimeter, remote options, output-based rather than presence-based measurement.",
      commonMistakes: "Arguing 'it works so don't change it' without identifying why it works or whether the reasons still apply. Challenging the default without identifying which specific assumption is wrong.",
      alternatives: "Could analyze from a first-principles productivity lens: what does knowledge work actually require? Focus time, collaboration moments, information access. Schedule should be designed around these requirements, not inherited factory conventions."
    },
    rubric: [
      { id: "fp-006-r1", text: "Identifies at least three specific assumptions behind the 9-5 default" },
      { id: "fp-006-r2", text: "Evaluates which assumptions are still valid vs. obsolete" },
      { id: "fp-006-r3", text: "Does not simply argue 'schedules are bad' — engages with specific reasoning" },
      { id: "fp-006-r4", text: "Proposes what a schedule designed from scratch would look like given current realities" }
    ]
  },

  {
    id: "fp-007",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: [],
    difficulty: "easy",
    question: "Medical school in most countries takes 4-6 years of undergraduate study, followed by 4 years of medical school, and then 3-7 years of residency. Challenge this structure: what assumptions does it rest on, and where might it be wrong?",
    context: undefined,
    hints: [
      "Why is training so long? Is the length driven by the amount of knowledge to acquire, or by something else?",
      "Consider the role of gatekeeping, habit, and institutional inertia vs. genuine educational necessity.",
      "Key assumptions to challenge: (1) All of medicine requires the same 10-12 year pipeline. (2) Clinical judgment requires years of supervised practice before any independent action. (3) Classroom learning before clinical exposure is optimal. (4) The current content is all necessary. Countries like Cuba or certain European systems produce competent doctors with fewer total years — questioning whether length correlates with quality."
    ],
    referenceSolution: {
      approach: "Identify the assumptions encoded in the training length and structure, then examine the evidence for each.",
      reasoning: "Assumptions in the current structure: (1) Front-loaded theory is necessary — but evidence suggests clinical immersion earlier accelerates learning. Some schools (e.g., accelerated 3-year MD programs) show comparable outcomes. (2) All specialties need the same base training — but a dermatologist and a trauma surgeon have different requirements from day one. (3) Duration signals competence — some of this is credentialism, not learning. (4) The Flexner Report (1910) model is still optimal — it was designed around science of 100+ years ago. A first-principles redesign might: specialize earlier, integrate clinical and didactic learning from year 1, use simulation and AI for skill acquisition, and vary length by specialty.",
      commonMistakes: "Assuming long training = high quality without examining whether duration and outcome are causally linked. Dismissing challenges to the system as irresponsible without engaging with the underlying assumptions.",
      alternatives: "Could also challenge from a public health perspective: long training pipelines restrict physician supply, driving up costs and reducing access."
    },
    rubric: [
      { id: "fp-007-r1", text: "Identifies at least three specific assumptions embedded in the training structure" },
      { id: "fp-007-r2", text: "Questions whether all assumptions are still justified by evidence" },
      { id: "fp-007-r3", text: "Acknowledges genuine requirements (safety, competence) separately from institutional inertia" },
      { id: "fp-007-r4", text: "Sketches what a first-principles redesign might look like" }
    ]
  },

  {
    id: "fp-008",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: ["market-dynamics"],
    difficulty: "easy",
    question: "It is widely assumed that new restaurants should open in high-foot-traffic areas, even though rents there are very high. Challenge this default using first-principles reasoning.",
    context: undefined,
    hints: [
      "Why do people assume high foot traffic = good restaurant location? What is the underlying logic, and what does it implicitly assume about how customers find restaurants?",
      "How has customer discovery changed? If diners find restaurants via Google, Instagram, or delivery apps, does physical foot traffic still matter as much?",
      "The assumption rests on: (1) Discovery happens by walking past. (2) Impulse dining is the primary use case. (3) High-traffic areas create brand awareness. Each of these is weakened in a world where most reservations come through OpenTable/Google, delivery adds demand without any physical presence, and Instagram posts create awareness across cities."
    ],
    referenceSolution: {
      approach: "Identify the reasoning chain behind 'high-traffic location = good,' then test each link against current market dynamics.",
      reasoning: "The conventional logic: High traffic → more people see you → more diners → more revenue → worth the premium rent. Each step contains assumptions. Link 1 (traffic → visibility): Weakened. Customers increasingly discover restaurants digitally (Google Maps, Yelp, Instagram). A restaurant in a low-rent area ranks identically on Google. Link 2 (visibility → diners): Weakened for sit-down restaurants. Destination dining (reservation, occasion) is not impulse. Link 3 (worth premium rent): Unit economics. If a high-traffic location costs $30K/month in rent vs. $8K for a secondary location, you need ~$220K more revenue per year to break even — at 5% net margin, that's $4.4M of incremental revenue needed just to justify the rent premium. For delivery-heavy models, location is nearly irrelevant. Conclusion: the default holds for fast-casual and impulse dining; it fails for destination dining and delivery-first restaurants.",
      commonMistakes: "Accepting 'location is everything' as a restaurant axiom without testing whether it applies uniformly. Ignoring the unit economics of rent vs. incremental revenue.",
      alternatives: "Could also analyze 'ghost kitchen' model as the logical conclusion of this first-principles challenge: no physical presence at all, pure delivery, lowest possible rent."
    },
    rubric: [
      { id: "fp-008-r1", text: "Identifies the implicit assumption that discovery happens through physical presence" },
      { id: "fp-008-r2", text: "Challenges the assumption with the shift to digital discovery" },
      { id: "fp-008-r3", text: "Applies unit economics to evaluate whether rent premium is justified" },
      { id: "fp-008-r4", text: "Distinguishes contexts where the default holds vs. fails" }
    ]
  },

  {
    id: "fp-009",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: [],
    difficulty: "easy",
    question: "Universities default to 4-year bachelor's degrees. A student asks whether this is the right length for them. What assumptions should they challenge before enrolling?",
    context: undefined,
    hints: [
      "What is the stated purpose of a bachelor's degree? Is 4 years the right unit of time to accomplish that purpose?",
      "Consider what specifically 4 years accomplishes — is it knowledge, credentials, network, or something else — and whether each requires 4 years.",
      "Assumptions to challenge: (1) All majors require 4 years of equivalent depth. (2) The credential is required for your specific goal. (3) Full-time attendance at a campus is necessary. (4) The degree content directly drives earning power. (5) Opportunity cost (4 years of lost income, early career experience) is worth it."
    ],
    referenceSolution: {
      approach: "Decompose what a degree delivers, then ask whether 4 years is the right vessel for each benefit.",
      reasoning: "A bachelor's degree delivers: (1) Knowledge and skills — many of which can be acquired through accelerated programs, bootcamps, or self-study, especially in technical fields. (2) A credential/signal — for some fields (medicine, law, education), the credential is legally required. For others (tech, entrepreneurship), it is increasingly optional. (3) Network — depends heavily on which institution and which social context you're entering. (4) Structured environment — forces learning completion; valuable if self-direction is hard. The 4-year default assumes equal value for all four components for all students. A student who already has a professional network, self-direction, and a non-credentialed career path may find that 4 years is driven by institutional convention, not their actual needs.",
      commonMistakes: "Treating the degree as a monolithic decision rather than decomposing what it actually delivers. Ignoring that some fields legally require the credential regardless of other factors.",
      alternatives: "Could also analyze 2-year community college transfer paths, apprenticeships, or gap year + bootcamp as alternatives that deliver specific components at lower cost."
    },
    rubric: [
      { id: "fp-009-r1", text: "Decomposes the degree into its component benefits (knowledge, credential, network, structure)" },
      { id: "fp-009-r2", text: "Challenges whether 4 years is the minimum necessary for each component" },
      { id: "fp-009-r3", text: "Considers the opportunity cost of 4 years" },
      { id: "fp-009-r4", text: "Distinguishes field-specific credential requirements from optional conventions" }
    ]
  },

  {
    id: "fp-010",
    trackId: "first-principles-thinking",
    subSkill: "challenging-defaults",
    secondarySkills: ["assumption-validation", "competitive-analysis"],
    difficulty: "medium",
    question: "Airlines have always charged for checked baggage separately from the ticket price (in the US, post-2008). A startup wants to challenge this model. What assumptions does the current model rest on, and what would a first-principles airline pricing model look like?",
    context: "Spirit and Frontier pioneered the unbundled model. Legacy carriers followed. Today, baggage fees generate $6-7 billion annually for US carriers. Passengers consistently rank baggage fees as their top frustration.",
    hints: [
      "Why did airlines unbundle baggage in the first place? What economic problem were they solving, and whose interests did it serve?",
      "The unbundled model assumes that passengers are price-sensitive to the headline ticket price, not total trip cost. Is this assumption accurate, and who does it benefit?",
      "First-principles pricing question: what does an airline actually sell? Point-to-point transport for a human. A checked bag is part of that. Unbundling only makes sense if: (1) demand for bags is heterogeneous (some passengers need none), (2) separation lowers price transparency in a beneficial way, and (3) the operational cost of bags actually varies per passenger. Challenge each."
    ],
    referenceSolution: {
      approach: "Identify the economic logic behind unbundled pricing, test each assumption, and design a pricing model from the fundamental question of what an airline is actually selling.",
      reasoning: "The unbundled model was introduced to lower headline fares (improving search-engine ranking on price), while recapturing revenue through fees. It assumes: (1) Passengers are naively price-sensitive — they shop on headline price. Partially true for leisure, false for business travelers. (2) Cost heterogeneity — passengers with no bags cost less to serve than those with bags. Partially true (fuel cost per kg of bag). (3) Price obfuscation is sustainable — regulators and comparison tools will not correct for total-cost comparisons. Increasingly false (Google Flights shows total cost). A first-principles model starts from: what is the customer buying? Transport from A to B, including their belongings. Competing on total-cost transparency would: (a) include one bag in all fares, (b) compete on total price, (c) differentiate on service quality rather than fee complexity. This model is losing appeal as total-cost comparison tools make the current model's opacity less effective.",
      commonMistakes: "Assuming the current model is optimal because large airlines use it. Ignoring that the model was designed around pre-digital price comparison behavior. Failing to distinguish the airline's incentive (revenue) from the passenger's incentive (value).",
      alternatives: "Southwest's all-inclusive model is the first-principles competitor — and their customer satisfaction scores are consistently higher. The question is whether simplicity is worth the revenue trade-off."
    },
    rubric: [
      { id: "fp-010-r1", text: "Identifies the original purpose of unbundling (headline price competition)" },
      { id: "fp-010-r2", text: "Tests the assumption of naive price sensitivity and finds it weakening" },
      { id: "fp-010-r3", text: "Identifies that the fundamental product is transport including belongings" },
      { id: "fp-010-r4", text: "Designs an alternative pricing model grounded in first principles" },
      { id: "fp-010-r5", text: "Acknowledges the revenue trade-off rather than dismissing the current model entirely" }
    ]
  },

  // ── ANALOGICAL REASONING (fp-011 to fp-015) ────────────────────────────────

  {
    id: "fp-011",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: [],
    difficulty: "easy",
    question: "How is the immune system analogous to a company's cybersecurity team? Use this analogy to identify what a good cybersecurity strategy should include.",
    context: undefined,
    hints: [
      "Map the components of the immune system to their cybersecurity equivalents. What does each part do in biology, and what does the analogous function look like in IT security?",
      "The immune system has innate (general, fast) and adaptive (specific, learned) responses. What are the cybersecurity equivalents?",
      "Innate immunity = firewall + antivirus (pattern-based, fast, non-specific). Adaptive immunity = threat intelligence + incident response (learns from past attacks, generates specific defenses). Memory cells = threat logs and trained responders. T-cells = active threat hunters. The analogy suggests: you need both layers, you need memory/learning, and you need to balance speed with specificity."
    ],
    referenceSolution: {
      approach: "Build a direct structural mapping between immune system components and cybersecurity functions, then extract design principles.",
      reasoning: "Mapping: Skin/physical barriers → network perimeter, firewalls. Innate immune response (fast, non-specific) → antivirus, intrusion detection (signature-based). Adaptive immune response (slow, specific, learned) → threat intelligence, behavioral analytics, trained incident response teams. Memory B/T cells → security logs, playbooks, institutional knowledge from past incidents. Inflammation response → quarantine and isolation of infected systems. Autoimmune disorder → false positives, security rules that block legitimate traffic. The analogy yields design principles: (1) Layered defense (innate + adaptive). (2) Learning from past attacks (immunological memory). (3) Speed-accuracy tradeoff — fast first response, then precise follow-up. (4) Self-checks to prevent false positives. (5) Compartmentalization to limit spread (just as the blood-brain barrier isolates the CNS).",
      commonMistakes: "Using the analogy superficially without mapping specific components. Overstretching — not every biological feature has a clean cybersecurity equivalent. Forgetting to derive actionable insights from the analogy.",
      alternatives: "Could also analogize to castle defense (walls, moat, guards, inner keep) — a simpler analogy that emphasizes layered perimeter defense."
    },
    rubric: [
      { id: "fp-011-r1", text: "Maps at least four specific immune system components to cybersecurity equivalents" },
      { id: "fp-011-r2", text: "Distinguishes innate (fast, general) from adaptive (slow, specific) security layers" },
      { id: "fp-011-r3", text: "Derives at least two actionable design principles from the analogy" },
      { id: "fp-011-r4", text: "Notes at least one limit of the analogy" }
    ]
  },

  {
    id: "fp-012",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: [],
    difficulty: "easy",
    question: "A city planner is designing public transit. How is a city's transit network analogous to the human circulatory system? What design lessons does this analogy suggest?",
    context: undefined,
    hints: [
      "Map the components: heart, arteries, veins, capillaries, blood, and the overall purpose (oxygen delivery) to their transit equivalents.",
      "The circulatory system has a hierarchy: major vessels handle high volume, capillaries provide fine-grained access. Does transit need the same hierarchy?",
      "Heart = central hub/interchange. Arteries = high-capacity trunk lines (subway, BRT). Veins = return flows (same lines in reverse). Capillaries = local buses and bike lanes for last-mile access. Blood = passengers. Blockage in an artery = catastrophic system failure. Lesson: redundancy in major routes, hierarchy of capacity, and last-mile access are all essential."
    ],
    referenceSolution: {
      approach: "Map the structural hierarchy of the circulatory system onto transit, then extract design principles for each level of the hierarchy.",
      reasoning: "Mapping: Heart → major interchange hubs (Union Station, Grand Central). Arteries → trunk transit lines (subway, light rail, BRT) — high capacity, frequent service, spine of the network. Capillaries → local buses, bike-share, pedestrian paths — low capacity, ubiquitous, reach final destinations. Blood flow → passenger flow; should be unimpeded on trunk routes. Valves → gates/turnstiles, capacity controls. Blockage → single points of failure, network collapse. Key design lessons: (1) Hierarchy of capacity — trunk routes need maximum reliability and frequency; local routes need maximum coverage. (2) Redundancy in trunk routes — a single artery blocking causes system-wide failure. (3) Last-mile is essential — capillaries that don't reach destinations make the whole system useless. (4) Flow should be one-directional on each path where possible to avoid conflicts.",
      commonMistakes: "Mapping components without extracting lessons. Overfitting the analogy (e.g., trying to find the 'white blood cells' of transit). Not acknowledging that transit flow is bidirectional while blood mostly isn't.",
      alternatives: "Could also analogize to a river delta: main river (trunk route) splits into smaller channels (local routes). Useful for thinking about branching networks."
    },
    rubric: [
      { id: "fp-012-r1", text: "Maps at least three levels of the vascular hierarchy to transit equivalents" },
      { id: "fp-012-r2", text: "Identifies trunk vs. last-mile distinction as a key design principle" },
      { id: "fp-012-r3", text: "Identifies redundancy as a lesson from the blockage → failure mapping" },
      { id: "fp-012-r4", text: "Notes at least one place where the analogy breaks down" }
    ]
  },

  {
    id: "fp-013",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: ["supply-demand"],
    difficulty: "easy",
    question: "How is a job market analogous to a dating market? What economic insights about job markets does this analogy reveal?",
    context: undefined,
    hints: [
      "In both markets, two-sided matching occurs: both sides are evaluating each other simultaneously. What other structural similarities exist?",
      "Think about search costs, signaling, information asymmetry, and market thickness (number of participants). How do these show up in both markets?",
      "Analogous features: résumé = dating profile (signaling quality, potentially misleading). Interview = date (both sides evaluate). Salary negotiation = relationship terms. Ghosting = employer/candidate silence. Market thickness: more candidates/employers = better matches. Lesson: job markets fail in the same ways dating markets do — information asymmetry, search costs, signaling games."
    ],
    referenceSolution: {
      approach: "Build a structural mapping between the two markets and then derive economic insights that are not obvious without the analogy.",
      reasoning: "Shared structure: Both are two-sided matching markets — workers and employers (or daters) must mutually agree. Signaling: In dating, attractiveness and personality signal quality. In job markets, credentials, résumés, and interviews signal quality. Both signals can be gamed (inflated résumés, performed interview personas). Information asymmetry: Employers don't fully know candidate quality before hire (hidden type problem). This is why probation periods and job references exist — same as the 'going steady' phase before commitment. Search costs: Both markets involve costly search. Market thickness matters — larger cities have better job (and dating) markets because more options improve match quality. The analogy reveals: (1) Reducing search costs (job boards, dating apps) increases match efficiency. (2) Commitment devices (employment contracts, marriage) solve the uncertainty of hidden types. (3) Reputation systems (references, mutual friends) reduce information asymmetry. (4) Market thickness is a legitimate advantage of urban density for both.",
      commonMistakes: "Using the analogy for humor rather than insight. Overstretching — not all job market features have dating equivalents. Failing to identify a specific economic insight that wasn't obvious without the analogy.",
      alternatives: "Could also analogize to kidney exchange markets (Roth's work) — more formal two-sided matching with stability conditions."
    },
    rubric: [
      { id: "fp-013-r1", text: "Identifies the two-sided matching structure as the core parallel" },
      { id: "fp-013-r2", text: "Maps signaling, search costs, and information asymmetry across both markets" },
      { id: "fp-013-r3", text: "Derives at least two economic insights that the analogy reveals" },
      { id: "fp-013-r4", text: "Notes at least one meaningful disanalogy" }
    ]
  },

  {
    id: "fp-014",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: [],
    difficulty: "easy",
    question: "How is building a startup analogous to conducting a scientific experiment? Use the analogy to identify what founders get wrong when they skip or rush steps.",
    context: undefined,
    hints: [
      "Map the steps of the scientific method to startup activities. What corresponds to hypothesis, experiment, data collection, and analysis?",
      "Scientists separate hypothesis from experiment, run controlled tests, and update beliefs based on results. Which of these disciplines do founders most often skip?",
      "Hypothesis = business thesis (who, what, why they'll pay). Experiment = MVP or customer interview. Data = validated customer behavior, not stated preferences. Analysis = pivot or persevere decision. Control group = comparable market or cohort. P-value obsession = founders seeing what they want in noisy signals. The analogy reveals: founders most often confuse stated preferences for behavioral data, and they fail to define falsifiable hypotheses before experimenting."
    ],
    referenceSolution: {
      approach: "Map scientific method steps to startup activities, then use the analogy to diagnose common failure modes.",
      reasoning: "Mapping: Observation = market insight or pain point noticed. Hypothesis = specific, falsifiable business thesis: 'X customers will pay $Y for Z.' Experiment = MVP, prototype, landing page test, or customer interview. Measurement = behavioral data (clicks, sign-ups, purchases) — not stated intent. Analysis = compare results to hypothesis, update belief. Peer review = advisors, co-founders challenging the conclusion. Common failure modes revealed by the analogy: (1) Unfalsifiable hypotheses — 'people want to eat healthily' cannot be falsified. (2) Uncontrolled experiments — changing the product and the target customer simultaneously. (3) Confirmation bias — selecting data that confirms the thesis. (4) Stopping too early — one positive signal is not statistical significance. (5) Using surveys (stated preferences) as the experiment — scientists require behavioral observation, not self-report.",
      commonMistakes: "Using the analogy loosely without specific mappings. Not identifying what makes a hypothesis falsifiable. Claiming founders should be 'more scientific' without specifying what that means.",
      alternatives: "Could also analogize to medical trials: Phase I (safety/feasibility) = technical prototype. Phase II (efficacy) = pilot with real customers. Phase III (large-scale) = go-to-market. Regulatory approval = product-market fit."
    },
    rubric: [
      { id: "fp-014-r1", text: "Maps at least four scientific method steps to specific startup activities" },
      { id: "fp-014-r2", text: "Distinguishes behavioral evidence from stated preference as the experiment's output" },
      { id: "fp-014-r3", text: "Identifies at least two specific failure modes the analogy reveals" },
      { id: "fp-014-r4", text: "Explains what a falsifiable business hypothesis looks like" }
    ]
  },

  {
    id: "fp-015",
    trackId: "first-principles-thinking",
    subSkill: "analogical-reasoning",
    secondarySkills: ["cross-domain-reasoning", "mental-math"],
    difficulty: "medium",
    question: "A software engineer proposes that a company's codebase is analogous to a city's infrastructure. Use this analogy to identify three specific software engineering practices that become obvious from the infrastructure lens, and one place where the analogy misleads.",
    context: "The company's codebase has 2 million lines of code, was written over 8 years by 40+ developers, and has 'legacy sections' that nobody fully understands.",
    hints: [
      "Map infrastructure types (roads, bridges, utilities, buildings) to code components. What does each look like in software?",
      "Think about what happens to physical infrastructure when it ages without maintenance. What is the software equivalent of a crumbling bridge, a road widening project, or a building condemned due to code violations?",
      "Infrastructure lessons for software: (1) Technical debt = deferred maintenance — it compounds. (2) Refactoring = infrastructure upgrade — costly but necessary. (3) APIs/interfaces = road intersections — poor design creates permanent congestion. (4) But: infrastructure is physical and non-duplicable; code can be copied instantly. This disanalogy makes the 'scarcity of fixes' reasoning false in software."
    ],
    referenceSolution: {
      approach: "Build a detailed mapping, extract specific practices from each mapped component, and identify where the analogy creates misleading intuitions.",
      reasoning: "Mappings and implications: (1) Roads = data pipelines/APIs. Narrow roads create bottlenecks; poor API design creates permanent performance ceilings. Lesson: design APIs for future traffic (scalability), not just current load. (2) Building codes = coding standards and linting rules. Condemned buildings = deprecated modules. Lesson: enforce standards continuously or risk unmaintainable legacy sections. (3) Deferred road maintenance = technical debt. A pothole becomes a sinkhole; a workaround becomes an architectural constraint. Lesson: allocate 20% engineering time to maintenance, not just features. Where the analogy misleads: (4) Physical infrastructure cannot be duplicated cheaply; code can. This makes the 'we must fix this first before building elsewhere' reasoning false — teams can run parallel workstreams in code in ways that are impossible in physical construction. Architects cannot build two roads in the same space simultaneously; engineers can refactor one module while building another.",
      commonMistakes: "Using the analogy to justify over-engineering or slowing feature velocity without evidence. Failing to identify where the analogy breaks down (the non-scarcity of code vs. physical space).",
      alternatives: "Could also compare to organic systems (codebase as ecosystem) — better at modeling emergent complexity, worse at modeling planned structure."
    },
    rubric: [
      { id: "fp-015-r1", text: "Identifies three distinct infrastructure-to-code mappings with specific components" },
      { id: "fp-015-r2", text: "Derives a concrete engineering practice from each mapping" },
      { id: "fp-015-r3", text: "Identifies a specific place where the analogy misleads (not just 'analogies aren't perfect')" },
      { id: "fp-015-r4", text: "Explains why the misleading case matters (i.e., what wrong decision it might cause)" },
      { id: "fp-015-r5", text: "Engages specifically with the 2M LOC / 8-year context" }
    ]
  },

  // ── REBUILDING MENTAL MODELS (fp-016 to fp-020) ────────────────────────────

  {
    id: "fp-016",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: [],
    difficulty: "easy",
    question: "Most people think of a meeting as 'a time when a group gathers to discuss things.' Rebuild a better mental model of what a meeting fundamentally is and what it is for.",
    context: undefined,
    hints: [
      "Instead of describing what a meeting looks like, ask: what specific outcomes can only be achieved by having multiple people in the same space (physical or virtual) at the same time?",
      "Compare synchronous meetings to asynchronous alternatives (email, shared docs, recorded videos). When does synchrony add unique value vs. when is it pure overhead?",
      "A meeting is fundamentally a synchronous communication channel. It is the right tool only when: (1) Real-time feedback is essential (negotiation, brainstorming). (2) Emotional context matters and cannot be conveyed async. (3) Group decision needs immediate resolution. If none of these apply, a meeting is an expensive substitute for a well-written document."
    ],
    referenceSolution: {
      approach: "Rebuild the concept of a 'meeting' from the question: what problem does synchronous co-presence solve that nothing else can?",
      reasoning: "Current mental model: 'meetings are for discussing and updating people.' This model explains why most meetings feel wasteful — discussing and updating are not inherently synchronous. Rebuilt model: A meeting is a synchronous coordination mechanism. It is uniquely valuable when: (1) Real-time responsiveness is required — negotiation, where each party's move depends on the other's last move. (2) Emotional alignment is required — conflict resolution, motivation, trust-building. (3) Simultaneous group decision — where all stakeholders must commit at the same moment to avoid divergence. (4) Creative exploration — where ideas build on each other in real time (good brainstorming). Everything else — updates, status reports, information sharing — is more effectively done asynchronously. The rebuilt model creates a decision rule: 'Before scheduling a meeting, identify which of these four purposes it serves.'"
      ,
      commonMistakes: "Replacing the meeting with a blanket rule ('fewer meetings') rather than a decision framework. Failing to identify the unique advantages of synchrony. Ignoring that some emotional/social functions of meetings are genuinely irreplaceable.",
      alternatives: "Could also rebuild around the 'attention' model: a meeting is a coordinated block of collective attention, which is the rarest resource in knowledge work."
    },
    rubric: [
      { id: "fp-016-r1", text: "Identifies the core function: synchronous coordination rather than 'discussion'" },
      { id: "fp-016-r2", text: "Lists at least three specific cases where synchrony is genuinely valuable" },
      { id: "fp-016-r3", text: "Identifies at least two meeting types that should be replaced by async communication" },
      { id: "fp-016-r4", text: "Produces a decision rule, not just a critique of bad meetings" }
    ]
  },

  {
    id: "fp-017",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: ["business-model-evaluation"],
    difficulty: "easy",
    question: "Most people think of a bank as 'a safe place to keep your money.' Rebuild a more accurate mental model of what a bank fundamentally is and how it actually makes money.",
    context: undefined,
    hints: [
      "If banks just kept your money, they would charge you for the service (like a safe deposit box). They don't — they pay you interest. Why?",
      "Banks lend out the money you deposit. The fundamental business model is borrowing cheap (deposits) and lending expensive (loans). What does this imply about where the risk sits?",
      "Rebuilt model: A bank is a maturity transformation engine. It borrows short-term (deposits, withdrawable on demand) and lends long-term (mortgages, business loans). The spread between deposit interest and loan interest is the net interest margin. Risk: if too many depositors withdraw simultaneously (bank run), the bank fails even if its loans are sound."
    ],
    referenceSolution: {
      approach: "Replace the 'safe storage' mental model with a mechanistic model of what banks actually do with deposits.",
      reasoning: "The 'safe storage' model is inaccurate. Banks are intermediaries that perform maturity transformation: they take short-duration liabilities (deposits, callable at any time) and create long-duration assets (30-year mortgages, multi-year business loans). Revenue model: Net interest margin = loan interest rate − deposit interest rate. For every $100 in deposits, a bank lends out ~$90 (keeping 10% as reserve), earning, say, 6% on loans and paying 2% on deposits — a 4% spread on $90, or $3.60 net per $100 deposited. Additional revenue: fees (overdraft, wire transfer), investment services, trading. Risk: This model is inherently fragile. If loan defaults exceed the spread income, equity is wiped. If depositors lose confidence and withdraw, the bank fails even with good loans (liquidity crisis). This is why deposit insurance exists.",
      commonMistakes: "Confusing a bank with a money storage facility. Not understanding fractional reserve banking — banks do not hold all deposits. Conflating a liquidity crisis (runs) with a solvency crisis (bad loans).",
      alternatives: "Could also model banks as risk transformation engines — they pool small deposits to fund large loans, transforming idiosyncratic credit risk through diversification."
    },
    rubric: [
      { id: "fp-017-r1", text: "Replaces the 'storage' model with the 'maturity transformation' model" },
      { id: "fp-017-r2", text: "Correctly explains the net interest margin as the primary revenue source" },
      { id: "fp-017-r3", text: "Identifies the two distinct risks: credit risk and liquidity/run risk" },
      { id: "fp-017-r4", text: "Explains why deposit insurance exists given the model" }
    ]
  },

  {
    id: "fp-018",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: [],
    difficulty: "easy",
    question: "Many people think of a diet as 'eating less food.' Rebuild a more accurate mental model of how the body actually processes food and what a diet is really changing.",
    context: undefined,
    hints: [
      "What is food, fundamentally? What does the body actually do with it?",
      "Food provides energy (calories) and building materials (proteins, fats, micronutrients). The body has multiple systems that regulate how much energy is stored vs. burned. Eating less is only one lever.",
      "Rebuilt model: A diet modifies the energy and substrate inputs to a complex adaptive regulatory system. The body responds to reduced calories with compensatory mechanisms (lower metabolic rate, increased hunger hormones). Simply 'eating less' triggers these defenses. More effective models target substrate mix (which macronutrients), timing, and hormonal signals (insulin) rather than just caloric quantity."
    ],
    referenceSolution: {
      approach: "Replace the 'eat less' mental model with a mechanistic model of how the body regulates energy balance.",
      reasoning: "The 'eat less' model treats the body as a passive container: add less food → lose weight. This ignores that the body is an adaptive regulatory system. Rebuilt model: The body maintains energy homeostasis through: (1) Appetite hormones — ghrelin (hunger), leptin (satiety). Caloric restriction raises ghrelin and reduces leptin, increasing hunger. (2) Metabolic adaptation — resting metabolic rate decreases during sustained restriction, reducing the caloric deficit. (3) Substrate partitioning — the body preferentially burns carbohydrates, sparing fat when insulin is elevated. To lose body fat specifically, you need to signal fat oxidation (low insulin states). Practical implications of the rebuilt model: (a) Protein matters independently of calories — it preserves lean mass during restriction. (b) Meal timing affects hormone profiles. (c) Sleep deprivation raises ghrelin, undermining dietary adherence. The rebuilt model explains why 'eat less, move more' fails — it ignores the adaptive response.",
      commonMistakes: "Treating the body as a closed thermodynamic system where all calories are equivalent. Ignoring the role of hormones in fat storage and mobilization. Assuming sustained willpower can override biological hunger signals.",
      alternatives: "Could also rebuild using the carbohydrate-insulin model or the protein leverage hypothesis as alternative organizing frameworks — each highlights different levers."
    },
    rubric: [
      { id: "fp-018-r1", text: "Identifies the body as an adaptive regulatory system, not a passive container" },
      { id: "fp-018-r2", text: "Explains the role of hunger hormones (ghrelin/leptin) in adapting to restriction" },
      { id: "fp-018-r3", text: "Identifies at least two levers beyond caloric quantity (substrate, timing, protein)" },
      { id: "fp-018-r4", text: "Explains why the simple 'eat less' model produces predictable failures" }
    ]
  },

  {
    id: "fp-019",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: ["pyramid-principle"],
    difficulty: "easy",
    question: "Many professionals think of a presentation as 'sharing what you know.' Rebuild a more accurate model of what a presentation fundamentally is and what it must accomplish.",
    context: undefined,
    hints: [
      "A presentation is not a knowledge transfer — it is a decision or belief-change event. What does that shift in framing imply about how it should be designed?",
      "Think about what the audience already believes, what you want them to believe or do differently after, and how you bridge that gap.",
      "Rebuilt model: A presentation is an argument for a change in the audience's beliefs or actions. It is successful when the audience exits with a different mental state than they entered with. This implies: start with the audience's current belief, identify the minimum gap to close, structure every slide around a point that moves them closer to the conclusion."
    ],
    referenceSolution: {
      approach: "Rebuild the model by asking what a successful presentation produces, then work backward to design principles.",
      reasoning: "Current model: 'sharing what I know.' This produces presentations organized around the speaker's knowledge structure (background → analysis → conclusion). Problem: audiences don't care about your knowledge structure; they care about their decisions. Rebuilt model: A presentation is a structured argument for a specific change in audience belief or behavior. Key implications: (1) Start from audience's current position, not yours — what do they believe now, and what needs to change? (2) Lead with the conclusion (Pyramid Principle) — don't make audiences wait through your reasoning process. (3) Every element must earn its place — ask 'does this move the audience toward the conclusion?' If not, cut it. (4) Anticipate objections — the strongest arguments address counterarguments preemptively. (5) End with a specific ask — what action or decision is required? The rebuilt model explains why expert presentations often fail: experts organize by their domain logic, not by the audience's decision needs.",
      commonMistakes: "Treating more information as more persuasive. Organizing by chronology (what I did) rather than logic (what you should conclude). Ending without a specific call to action.",
      alternatives: "Could also model using the SCQA framework: Situation → Complication → Question → Answer as the structural backbone."
    },
    rubric: [
      { id: "fp-019-r1", text: "Reframes the presentation as an argument for belief/behavior change, not knowledge transfer" },
      { id: "fp-019-r2", text: "Identifies starting from the audience's current belief as the first design step" },
      { id: "fp-019-r3", text: "Recommends leading with the conclusion rather than background" },
      { id: "fp-019-r4", text: "Derives at least three specific design principles from the rebuilt model" }
    ]
  },

  {
    id: "fp-020",
    trackId: "first-principles-thinking",
    subSkill: "rebuilding-mental-models",
    secondarySkills: ["market-sizing", "orders-of-magnitude"],
    difficulty: "medium",
    question: "The conventional mental model of 'market size' in business is total revenue currently generated by an industry. Rebuild a more rigorous model of what 'market size' should mean for a startup evaluating an opportunity.",
    context: "A startup is considering entering the 'physical therapy' market, which is reported to be a $40 billion/year industry in the US.",
    hints: [
      "Is $40B of existing industry revenue the right number to use? What does it actually represent, and why might it mislead a startup founder?",
      "Consider: (1) What fraction of that $40B is actually addressable by this startup's specific product? (2) Is the existing market the same as the potential market? Some markets are large because they are inefficient, not because the opportunity is large.",
      "Rebuilt model: For a startup, the relevant number is the Serviceable Addressable Market (SAM), not the Total Addressable Market (TAM). SAM = the subset of TAM you can realistically reach with your specific offering. And more importantly: the right market size question is 'how large could this market become if your solution removes the current friction?' Existing market size often understates the opportunity."
    ],
    referenceSolution: {
      approach: "Critique the conventional TAM measure and rebuild a multi-layer market sizing model that is more useful for startup decision-making.",
      reasoning: "The $40B figure represents current spending on physical therapy, delivered via traditional in-person clinic visits. Problems with using this directly: (1) It only captures currently monetized activity. Many patients who need PT don't access it (access barriers, cost, geography) — this is latent demand not captured in the $40B. (2) If the startup's product is a digital PT platform, it competes only with the tech-accessible, self-pay, or insurer-covered digital slice — perhaps 10-15% of the $40B, or $4-6B. (3) But it could also expand the market by reaching the 50%+ of patients who need PT but never access it — a $40B+ incremental opportunity. Rebuilt model has three layers: (a) TAM = theoretical maximum if everyone who could benefit used your product. (b) SAM = the subset reachable with current channels, price point, and geography. (c) SOM (Serviceable Obtainable Market) = realistic share in 3-5 years. A startup needs to reason about all three, and especially distinguish 'taking share from incumbents' from 'expanding the market.'",
      commonMistakes: "Using TAM (total industry revenue) as if it is the startup's addressable market. Not distinguishing share capture from market expansion. Not considering that pricing disruption changes the revenue total even if unit volume stays the same.",
      alternatives: "Could also build from a bottoms-up model: number of PT patients × fraction digitally addressable × revenue per patient per year."
    },
    rubric: [
      { id: "fp-020-r1", text: "Identifies the problem with using industry revenue as the opportunity size" },
      { id: "fp-020-r2", text: "Distinguishes TAM, SAM, and SOM and explains the purpose of each" },
      { id: "fp-020-r3", text: "Identifies latent/underserved demand as a separate opportunity from incumbent share" },
      { id: "fp-020-r4", text: "Applies the rebuilt model to the physical therapy example with specific reasoning" },
      { id: "fp-020-r5", text: "Proposes a bottoms-up check as validation of the top-down estimate" }
    ]
  },

  // ── FIRST-PRINCIPLES ANALYSIS (fp-021 to fp-025) ───────────────────────────

  {
    id: "fp-021",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "Why does tuition at US universities keep rising faster than inflation? Analyze this using first principles rather than conventional explanations.",
    context: undefined,
    hints: [
      "Start from the basic economics: what determines the price of any service? Supply, demand, and the price sensitivity of buyers. Apply this to higher education.",
      "Consider who pays vs. who decides, and what the price sensitivity of applicants is when third-party financing (loans) is available.",
      "Key first-principles insight: when buyers pay with borrowed money they won't repay for decades, price sensitivity collapses. This allows sellers to raise prices without losing demand. Federal student loan availability structurally removes the price discipline that normally constrains sellers."
    ],
    referenceSolution: {
      approach: "Model university pricing using supply and demand fundamentals, then identify what makes this market different from normal markets.",
      reasoning: "Normal market: higher prices → lower demand → sellers constrain price increases. Higher education: (1) Demand is inelastic — attending a top university is perceived as a major life outcome determinant; students and families will stretch to pay. (2) Third-party financing — federal student loans enable buyers to pay prices they couldn't otherwise afford, removing normal budget constraints. (3) Subsidies compound prices — when government grants and subsidized loans increase buying power, institutions capture the surplus by raising prices (Bennett Hypothesis). (4) Non-profit insulation — universities don't have profit-maximizing shareholders pressuring efficiency; surplus is reinvested in amenities, admin, and endowments. (5) Credential monopoly — a Harvard degree can only come from Harvard; no substitute exists. Combined: inelastic demand + unlimited financing + no competitive substitute + non-profit structure = persistent above-inflation price increases. The solution must address the demand-side subsidy structure.",
      commonMistakes: "Blaming administrator salaries or campus amenities without explaining why universities can charge for these without losing applicants. Proposing supply-side solutions (more universities) without recognizing that prestige is the scarce good.",
      alternatives: "Could also analyze through the Baumol Cost Disease lens: university teaching is labor-intensive and productivity gains are hard, so costs rise naturally with wages even without the financing effect."
    },
    rubric: [
      { id: "fp-021-r1", text: "Identifies inelastic demand as a necessary condition for sustained price increases" },
      { id: "fp-021-r2", text: "Explains how subsidized loans remove normal price discipline" },
      { id: "fp-021-r3", text: "Identifies the non-profit structure as removing profit-disciplined efficiency pressure" },
      { id: "fp-021-r4", text: "Proposes a solution that targets the structural cause, not a symptom" }
    ]
  },

  {
    id: "fp-022",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: ["estimation-chains"],
    difficulty: "easy",
    question: "A city claims it will 'end homelessness' by building 500 new shelter beds. Analyze this claim using first principles to determine whether it is likely to achieve its goal.",
    context: "The city has approximately 3,000 people experiencing homelessness on any given night. Current shelter capacity is 1,500 beds at 95% occupancy. The city's homeless count has grown 8% per year for the last 5 years.",
    hints: [
      "Before evaluating whether 500 beds is enough, ask: what actually causes homelessness and what does a shelter bed address?",
      "A shelter bed addresses the symptom (lack of shelter) but not the cause. What does a first-principles analysis of the causes of homelessness reveal about what interventions actually reduce it?",
      "First-principles analysis: Homelessness has inflow causes (job loss, eviction, mental health crisis, domestic violence) and outflow barriers (housing costs, credit history, support services). Adding beds without addressing inflow or outflow barriers is like bailing a leaking boat without plugging the hole."
    ],
    referenceSolution: {
      approach: "Model homelessness as a stock-and-flow system, then evaluate whether the proposed intervention addresses inflows, outflows, or just the current stock.",
      reasoning: "Step 1 — Frame as a system: Homeless population = prior population + inflows − outflows. Inflows: evictions, job loss, mental health crises, domestic violence, release from incarceration. Outflows: housing placement, return to family, death. Step 2 — Evaluate current numbers: 3,000 homeless, 1,500 beds at 95% = 1,425 occupied. Gap = 3,000 − 1,425 = 1,575 people without beds. Adding 500 beds closes only ~32% of the gap. Step 3 — Project forward: at 8% annual growth, the homeless population grows by 240 people/year. In year 1 after adding beds, the new gap would be 3,000 + 240 − 1,925 = 1,315 — smaller than today but still large, and growing. Step 4 — Root cause: shelters address emergency housing (the stock) but not inflows (evictions, crises) or outflows (permanent housing barriers). 'Ending homelessness' requires addressing all three. Conclusion: 500 beds is meaningful but the 'end homelessness' claim fails basic first-principles scrutiny.",
      commonMistakes: "Evaluating the 500 beds in isolation without comparing to the total unmet need. Not accounting for the annual growth rate. Conflating 'more shelter beds' with 'ending homelessness' when the latter requires outflow improvement.",
      alternatives: "Could also analyze using a Housing First model lens: permanent housing with wraparound services has lower per-person cost and better outcomes than shelter cycling."
    },
    rubric: [
      { id: "fp-022-r1", text: "Models homelessness as a stock-and-flow system with inflows and outflows" },
      { id: "fp-022-r2", text: "Calculates that 500 beds closes only ~32% of the current bed gap" },
      { id: "fp-022-r3", text: "Accounts for the 8% annual growth rate in projecting future need" },
      { id: "fp-022-r4", text: "Distinguishes shelter capacity (stock intervention) from root cause interventions (flow)" },
      { id: "fp-022-r5", text: "Concludes that the claim 'end homelessness' is not supported by the proposed intervention" }
    ]
  },

  {
    id: "fp-023",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: ["sanity-checks"],
    difficulty: "easy",
    question: "A newspaper headline claims: 'Electric vehicles are not actually green because manufacturing their batteries produces more CO2 than manufacturing a conventional car.' Analyze this claim using first principles.",
    context: undefined,
    hints: [
      "This is a lifecycle analysis problem. The claim compares only one part of the lifecycle (manufacturing). What is missing?",
      "Compare total emissions over the vehicle's full life: manufacturing + operation + disposal. The claim may be true for manufacturing alone — what matters is the total.",
      "First-principles test: If manufacturing an EV battery produces, say, 8 tons more CO2 than a conventional car, but the EV emits 2 tons/year less in operation (on average grid electricity), the EV breaks even at 4 years and saves emissions thereafter over a typical 10-15 year life."
    ],
    referenceSolution: {
      approach: "Apply lifecycle emissions accounting to evaluate whether the manufacturing comparison is the right frame for the 'greenness' question.",
      reasoning: "The claim is a classic partial-frame fallacy — it selects one lifecycle phase that favors the conclusion. Full lifecycle analysis: Phase 1 — Manufacturing: EV battery production is carbon-intensive. A 75kWh battery pack produces approximately 6-10 tons of CO2 in manufacturing. A conventional car produces approximately 6-8 tons total. Net EV manufacturing penalty: ~2-4 tons CO2. Phase 2 — Operation: A conventional car emits ~4.6 metric tons of CO2/year (EPA average). An EV on the average US grid emits approximately 1.5-2 tons/year equivalent. Annual saving: ~2.5-3 tons. Break-even: 2-4 ton penalty ÷ 2.5-3 tons/year saving = less than 2 years. Phase 3 — Disposal/recycling: Battery recycling is improving; not currently a large net-positive or net-negative. Conclusion: The headline is technically true for manufacturing in isolation but misleading as a total lifecycle claim. EVs break even within 2 years and save 20-35 tons of CO2 over a typical vehicle life.",
      commonMistakes: "Accepting the headline framing (manufacturing only) as the full picture. Not distinguishing grid electricity source from gasoline as the relevant operational comparison. Ignoring that the manufacturing penalty is a one-time cost while the operational saving is annual.",
      alternatives: "Could also analyze regionally — in coal-heavy grids (Poland, parts of Asia), the operational saving is smaller and break-even takes longer."
    },
    rubric: [
      { id: "fp-023-r1", text: "Identifies the partial-frame error: manufacturing comparison excludes operational and disposal phases" },
      { id: "fp-023-r2", text: "Applies full lifecycle analysis (manufacturing + operation + disposal)" },
      { id: "fp-023-r3", text: "Calculates approximate break-even timeline (~2 years)" },
      { id: "fp-023-r4", text: "Concludes the claim is misleading at the whole-life level even if true for manufacturing" },
      { id: "fp-023-r5", text: "Notes that the answer varies with grid electricity source" }
    ]
  },

  {
    id: "fp-024",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "Why do some industries (airlines, hotels, car rentals) use dynamic pricing that changes prices constantly, while others (grocery stores, coffee shops) use fixed prices? Analyze this from first principles.",
    context: undefined,
    hints: [
      "Think about what conditions make dynamic pricing economically rational. What does the seller gain, and what do they need in order to gain it?",
      "Dynamic pricing requires: a fixed or perishable inventory, the ability to identify demand differences across customers, and low costs of changing prices. Which industries have all three?",
      "Airlines: fixed inventory (seats), perishable (unsold seat = zero revenue after departure), demand segmentation (business vs. leisure), cheap price-change technology. Coffee shops: unlimited effective supply (can make more cups), non-perishable inventory (beans), low demand variation, high menu-change cost. Dynamic pricing is optimal only when marginal revenue from price discrimination exceeds the operational cost of implementing it."
    ],
    referenceSolution: {
      approach: "Identify the economic conditions that make dynamic pricing rational, then apply them to explain the industry differences.",
      reasoning: "Dynamic pricing is rational when: (1) Inventory is fixed and capacity cannot be easily expanded — you cannot make more Tuesday flights once demand is known. (2) Inventory is perishable — an empty airline seat at departure has zero value forever. (3) Demand is heterogeneous — different customers have different willingness to pay (business travelers vs. vacationers). (4) Demand is predictable enough to price — airlines know from booking patterns who is a business traveler. (5) Price changes are cheap to implement — digital systems make airline repricing near-zero cost. Fixed-price industries lack one or more conditions: Grocery stores have non-perishable goods (a can of soup loses no value if unsold today), effectively unlimited supply (just reorder), and high cost of changing prices (relabeling shelves). Coffee shops have infinite effective supply (just brew more), very low demand variation across time, and high friction in price changes (menus, customer expectation). Conclusion: Dynamic pricing emerges from the combination of fixed+perishable supply, heterogeneous demand, and cheap price-change technology.",
      commonMistakes: "Saying 'airlines do it to make more money' without identifying why other industries with the same profit motive don't do the same. Ignoring the role of perishability as distinct from fixed supply.",
      alternatives: "Could also analyze from mechanism design: dynamic pricing is a price discrimination strategy — the feasibility depends on whether the seller can prevent arbitrage (resale) between customer segments."
    },
    rubric: [
      { id: "fp-024-r1", text: "Identifies fixed + perishable supply as a necessary condition for dynamic pricing" },
      { id: "fp-024-r2", text: "Identifies demand heterogeneity (willingness to pay variation) as a second condition" },
      { id: "fp-024-r3", text: "Identifies low price-change cost as a third condition" },
      { id: "fp-024-r4", text: "Explains why grocery stores and coffee shops fail one or more conditions" },
      { id: "fp-024-r5", text: "Derives a general rule rather than just describing the specific industries" }
    ]
  },

  {
    id: "fp-025",
    trackId: "first-principles-thinking",
    subSkill: "first-principles-analysis",
    secondarySkills: ["structured-argumentation", "assumption-validation"],
    difficulty: "medium",
    question: "A government proposes a minimum wage increase from $12 to $20/hour, arguing it will 'lift working families out of poverty without causing job losses.' Analyze this claim using first principles, identifying the key assumptions and what evidence would validate or invalidate each.",
    context: "The proposal applies to all employers in a mid-sized city (population 500,000). The current unemployment rate is 4.2%. Local industries include retail, food service, hospitality, and a growing tech sector.",
    hints: [
      "Start with the economic model: what does basic supply-demand theory predict? Then identify what conditions would cause the standard prediction to be wrong.",
      "Standard prediction: higher minimum wage → higher labor cost → employers hire fewer low-wage workers → unemployment rises. But empirical evidence is more mixed. What assumptions does the standard model make that may not hold?",
      "Key assumptions to test: (1) Employers are price-takers in the labor market (competitive market). If they have monopsony power, a minimum wage can actually increase employment. (2) Demand for low-wage labor is price-elastic. If demand is inelastic (e.g., restaurants must have servers), employment may not fall much. (3) The wage increase doesn't get absorbed through automation or hour reductions. (4) The poverty-reduction math: does $20/hour actually move a family above the poverty line, accounting for hours worked and household composition?"
    ],
    referenceSolution: {
      approach: "Decompose the claim into its economic sub-claims, test each assumption, and identify what evidence would confirm or disconfirm the policy prediction.",
      reasoning: "Claim 1: 'Will lift families out of poverty.' Test: At $20/hour × 40 hours × 52 weeks = $41,600/year. Federal poverty line for a family of 4 is ~$31,200. So a single full-time worker at $20/hour would clear the poverty line. But assumptions: (a) full-time hours — many minimum wage workers are part-time; at 25 hours/week, annual income is $26,000, below poverty. (b) Single-earner families — two-earner households have higher income already. Evidence needed: what fraction of minimum wage workers are full-time heads of household? Claim 2: 'Without causing job losses.' Standard model predicts job losses via labor demand curve (higher price → lower quantity demanded). This assumes: (a) Competitive labor market — but food service and retail are monopsonistic locally; employers have wage-setting power. Monopsony model predicts minimum wages can actually increase employment up to the competitive wage. (b) Elastic demand — evidence needed: price elasticity of demand for low-wage labor in local industries. Empirical: Card-Krueger (1994) and Seattle studies show mixed results; job losses are smaller than theory predicts in monopsonistic markets. (c) No substitution — evidence needed: what automation options exist in local industries at what cost threshold? A $20/hour wage makes a $15,000 kiosk economically rational in 1 year. Net assessment: the poverty claim holds for full-time workers but not part-time workers. The no-job-loss claim depends on local market structure — more credible if monopsony is significant.",
      commonMistakes: "Accepting or rejecting the claim based purely on theory without engaging with the empirical evidence. Not distinguishing the poverty claim from the employment claim — they have different evidence requirements. Applying a generic model without considering the specific local industry mix.",
      alternatives: "Could also analyze through the earned income tax credit (EITC) lens: EITC achieves similar poverty-reduction goals without the labor demand distortion, as an alternative policy design."
    },
    rubric: [
      { id: "fp-025-r1", text: "Separates the poverty-reduction claim from the no-job-loss claim and tests each independently" },
      { id: "fp-025-r2", text: "Identifies part-time hours as a condition that undermines the poverty claim" },
      { id: "fp-025-r3", text: "Explains the monopsony model as a condition under which the no-job-loss claim could hold" },
      { id: "fp-025-r4", text: "Identifies automation substitution as a job-loss mechanism not captured in standard model" },
      { id: "fp-025-r5", text: "Specifies what evidence would validate or invalidate each assumption" },
      { id: "fp-025-r6", text: "Reaches a conditional conclusion rather than a blanket accept/reject" }
    ]
  },

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
