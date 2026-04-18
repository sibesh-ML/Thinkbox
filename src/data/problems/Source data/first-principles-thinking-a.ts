import type { Problem } from '@/types';

export const firstPrinciplesThinkingProblemsA: Problem[] = [
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
  }
];
