import type { Problem } from '@/types';

export const assumptionBuildingProblems: Problem[] = [
  // ── IDENTIFYING UNKNOWNS (ab-001 to ab-005) ──────────────────────────────

  {
    id: "ab-001",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: [],
    difficulty: "easy",
    question: "A bakery owner wants to estimate how many croissants to bake tomorrow morning. She says, 'I'll just bake the same as today.' What are the key unknowns she is ignoring that could make tomorrow's demand significantly different from today's?",
    context: undefined,
    hints: [
      "Think about what factors drive demand for a bakery item on any given day.",
      "Consider temporal factors (day of week, holidays), external factors (weather, local events), and internal factors (promotions, staff).",
      "Key unknowns include: day of week (weekends differ from weekdays), whether tomorrow is a holiday, local events nearby, weather forecast, and whether any promotions are running tomorrow."
    ],
    referenceSolution: {
      approach: "Enumerate the categories of factors that influence daily demand, then identify which ones could vary between today and tomorrow.",
      reasoning: "Demand drivers fall into several categories: (1) Temporal — day of week (weekend demand is typically higher), public holidays. (2) External — weather (cold mornings drive pastry sales), nearby events (markets, concerts). (3) Competitive — whether a competitor is closed or running a sale. (4) Internal — planned promotions, price changes, staff capacity. The owner's assumption that 'tomorrow equals today' is only valid if all these factors are identical, which is rarely true.",
      commonMistakes: "Listing only one or two unknowns rather than systematically scanning categories. Confusing unknowns (things we don't know) with risks (things that could go wrong). Forgetting that demand can also be lower than today, not just higher.",
      alternatives: "A simple framework: PEST (Political/holiday, External/weather, Social/events, Temporal/day) applied to a bakery context surfaces most of the relevant unknowns quickly."
    },
    rubric: [
      { id: "ab-001-r1", text: "Identifies at least 3 distinct categories of demand drivers" },
      { id: "ab-001-r2", text: "Names day-of-week or holiday as an unknown" },
      { id: "ab-001-r3", text: "Names at least one external factor (weather or local event)" },
      { id: "ab-001-r4", text: "Explains why 'same as today' is an insufficient assumption" }
    ]
  },

  {
    id: "ab-002",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["mece-decomposition"],
    difficulty: "easy",
    question: "An investor is evaluating whether to fund a food-delivery startup. The startup's pitch says: 'We charge restaurants 15% commission, so at 1,000 daily orders averaging $25 each, we make $3,750 per day.' List the critical unknowns embedded in this revenue projection.",
    context: undefined,
    hints: [
      "Revenue = orders × average order value × commission rate. Which of these three components contains hidden assumptions?",
      "Also consider unknowns outside the revenue formula: what is driving those 1,000 orders? Are there costs subtracted from commission? Is the commission stable?",
      "Key unknowns: whether 1,000 orders/day is current or projected (and what drives growth to that level), whether $25 average order value holds across all restaurant types, whether the 15% commission applies to all restaurants or just some, and what costs are deducted before this becomes profit."
    ],
    referenceSolution: {
      approach: "Decompose the revenue formula into its components (orders, AOV, commission rate) and interrogate each for unstated assumptions. Then look beyond the formula to the business model.",
      reasoning: "(1) Order volume: Is 1,000 orders/day current or a target? What is the current number? What conversion and retention assumptions underpin reaching that level? (2) Average order value: Does this vary by cuisine type, time of day, or geography? A single average masks distribution. (3) Commission rate: Are all restaurants on 15%? Do large chains negotiate lower rates? (4) Gross vs. net: Is payment processing, refunds, and cancellations deducted? (5) Sustainability: Can the startup maintain 15% if competitors undercut? Together these unknowns can easily halve or double the real revenue figure.",
      commonMistakes: "Accepting the revenue formula at face value and only questioning one number. Forgetting that commission rate is negotiable and may not be uniform. Not distinguishing gross revenue from net revenue.",
      alternatives: "A MECE decomposition: separate the 'revenue model' unknowns (rate, value, volume) from 'execution' unknowns (can they actually achieve this?) and 'competitive' unknowns (will this hold under pressure?)."
    },
    rubric: [
      { id: "ab-002-r1", text: "Questions whether 1,000 orders/day is current vs. projected" },
      { id: "ab-002-r2", text: "Identifies that average order value may not be uniform" },
      { id: "ab-002-r3", text: "Notes that 15% commission may not apply to all restaurants" },
      { id: "ab-002-r4", text: "Distinguishes gross revenue from net (mentions costs or deductions)" },
      { id: "ab-002-r5", text: "Organizes unknowns into at least 2 distinct categories" }
    ]
  },

  {
    id: "ab-003",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: [],
    difficulty: "easy",
    question: "A city planner proposes widening a congested highway from 4 lanes to 6 lanes to reduce commute times. Before accepting or rejecting the proposal, what are the key unknowns you need to identify?",
    context: undefined,
    hints: [
      "Think about what causes congestion — is lane count always the binding constraint?",
      "Consider: Where does the congestion actually occur? What happens to demand when capacity increases? Are there alternative causes?",
      "Key unknowns: Where exactly is the bottleneck (on-ramps, intersections, or the highway itself)? What share of commuters would shift to this route if it became faster (induced demand)? What are the costs and construction disruption timelines? Are there alternative modes that could be improved instead?"
    ],
    referenceSolution: {
      approach: "Identify unknowns by questioning the causal chain: capacity increase → reduced congestion → shorter commutes. Each arrow contains assumptions.",
      reasoning: "(1) Location of the binding constraint: If congestion is caused by a bottleneck at one interchange, adding lanes to the middle stretch does nothing. (2) Induced demand: Research shows expanded road capacity often attracts more drivers, potentially restoring original congestion levels (the 'induced demand' effect). The extent depends on elasticity of demand, which is unknown. (3) Commute time vs. congestion: Time savings depend on where commuters are going — if their destinations are off this highway, widening helps less. (4) Cost and feasibility: Right-of-way, environmental approvals, construction time. (5) Alternatives foregone: The same budget might reduce commute times more via transit or remote work incentives.",
      commonMistakes: "Assuming more lanes always means less congestion without considering induced demand. Ignoring where the actual bottleneck is. Treating 'commute time' as identical to 'highway travel time'.",
      alternatives: "Frame as a logic tree: Does the proposal address the true cause? (bottleneck location) → Even if it does, will capacity stay available? (induced demand) → Is this the best use of the budget? (alternatives)"
    },
    rubric: [
      { id: "ab-003-r1", text: "Identifies the location of the actual bottleneck as unknown" },
      { id: "ab-003-r2", text: "Raises induced demand as a key unknown" },
      { id: "ab-003-r3", text: "Questions whether lane count is the true binding constraint" },
      { id: "ab-003-r4", text: "Mentions cost, feasibility, or alternative uses of resources" }
    ]
  },

  {
    id: "ab-004",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: [],
    difficulty: "easy",
    question: "A doctor says a new drug reduced blood pressure in a trial, so she recommends it to all her hypertensive patients. What unknowns should be surfaced before accepting this recommendation?",
    context: undefined,
    hints: [
      "Think about what makes a trial result applicable to a specific patient population.",
      "Consider: Who was in the trial? How large was the effect? What were the side effects? How does this drug compare to existing drugs?",
      "Key unknowns: Trial population characteristics (age, comorbidities, severity), magnitude of blood pressure reduction (was it clinically meaningful?), side effect profile, duration of effect, drug interactions, and how it compares to existing, cheaper treatments."
    ],
    referenceSolution: {
      approach: "Identify unknowns by tracing from 'trial result' to 'recommendation for all patients' — each step contains hidden assumptions about generalizability.",
      reasoning: "(1) Population match: If the trial enrolled middle-aged men with mild hypertension, the result may not generalize to elderly women with severe hypertension. (2) Effect size: 'Reduced blood pressure' is vague — a 2 mmHg reduction may be statistically significant but clinically irrelevant. (3) Safety profile: Absolute risk reduction vs. adverse event rate must be weighed. (4) Duration: Was the trial 4 weeks or 4 years? Long-term effects are unknown. (5) Comparative effectiveness: Are existing drugs equally or more effective with fewer side effects? (6) Cost: Is this drug affordable for all patients?",
      commonMistakes: "Focusing only on whether the drug 'works' and ignoring who it works for and at what cost. Treating statistical significance as clinical significance. Ignoring the comparison to existing treatments.",
      alternatives: "Use the PICO framework (Population, Intervention, Comparison, Outcome) to surface all the unknowns systematically."
    },
    rubric: [
      { id: "ab-004-r1", text: "Questions whether the trial population matches the intended patients" },
      { id: "ab-004-r2", text: "Asks about the magnitude of the effect, not just direction" },
      { id: "ab-004-r3", text: "Raises side effects or safety profile as an unknown" },
      { id: "ab-004-r4", text: "Compares this drug to existing alternatives" }
    ]
  },

  {
    id: "ab-005",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["issue-trees"],
    difficulty: "medium",
    question: "A tech company's sales have declined 20% year-over-year. The VP of Sales concludes: 'Our sales team is underperforming — we need to hire more reps.' Systematically identify the unknowns that must be resolved before accepting or rejecting this diagnosis.",
    context: "The company sells B2B software. Last year's team had 30 reps. The market has been volatile.",
    hints: [
      "A 20% revenue decline could stem from many sources: sales execution, product, pricing, market, or customer retention. Which of these is assumed away?",
      "Build an issue tree: Revenue = New sales + Renewals. For each branch, ask what data you'd need to confirm that branch is healthy or broken.",
      "Key unknowns: Did renewals decline (churn) or new sales? Did average deal size shrink or did win rate fall? Did the number of qualified leads change? Did competitors improve or prices shift? Are the existing 30 reps actually underperforming relative to quota, or is quota set on stale assumptions?"
    ],
    referenceSolution: {
      approach: "Decompose revenue into its components using an issue tree, then identify the unknowns needed to isolate the root cause before prescribing a solution.",
      reasoning: "Revenue decline could stem from: (A) Fewer new deals — but is that because reps aren't closing (execution), or because there are fewer leads (pipeline), or because fewer leads are qualified (market)? (B) Smaller deals — is pricing pressure from competitors, or are reps discounting? (C) Higher churn — existing customers leaving reduces net revenue regardless of new sales performance. Without knowing which branch is causing the decline, hiring more reps could be entirely wrong: if the issue is churn, product quality, or pricing, more reps won't fix it. Critical unknowns: rep quota attainment rate, inbound lead volume trend, churn rate, win rate vs. prior year, competitive win/loss data, and average selling price trend.",
      commonMistakes: "Jumping to a solution (hire more reps) before diagnosing the root cause. Treating 'sales declined' as equivalent to 'sales team underperformed.' Ignoring that the market itself may have contracted.",
      alternatives: "A simple revenue decomposition: Revenue = Leads × Win Rate × Deal Size × (1 − Churn). Identifying which variable changed most points directly to the cause."
    },
    rubric: [
      { id: "ab-005-r1", text: "Distinguishes new sales decline from churn as separate possible causes" },
      { id: "ab-005-r2", text: "Questions whether lead volume (not just rep performance) declined" },
      { id: "ab-005-r3", text: "Asks for rep quota attainment data before judging underperformance" },
      { id: "ab-005-r4", text: "Considers market-level or competitive factors as potential causes" },
      { id: "ab-005-r5", text: "Identifies at least 4 distinct unknowns and organizes them into categories" }
    ]
  },

  // ── SENSIBLE DEFAULTS (ab-006 to ab-010) ─────────────────────────────────

  {
    id: "ab-006",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: [],
    difficulty: "easy",
    question: "You are estimating how many people attend a typical NBA game and you have no data available. What sensible default would you use for arena capacity, and how would you justify it?",
    context: undefined,
    hints: [
      "Think about what you know about large indoor sports arenas from general knowledge. What's a reasonable range?",
      "NBA arenas are purpose-built for basketball. They are smaller than NFL stadiums and larger than college gyms. What capacity feels right?",
      "A sensible default is 18,000–20,000 seats, based on the fact that major NBA arenas (Madison Square Garden, Staples Center, United Center) are commonly cited as holding around 18,000–21,000 for basketball. In the absence of data, 18,000–19,000 is a reasonable central estimate."
    ],
    referenceSolution: {
      approach: "Anchor on a reference class (purpose-built professional basketball arenas in North America), draw on general knowledge of comparable venues, and state a justified default with an explicit range.",
      reasoning: "Reference class: major professional indoor sports arenas. Known data points: Madison Square Garden ~20,000, Staples Center ~19,000, United Center ~21,000, smaller markets ~17,000–18,000. A sensible default for a 'typical NBA arena' is ~18,500 seats. This is justified because: (a) it falls in the middle of the observed range, (b) it matches the most commonly cited figure in sports coverage, and (c) it can easily be adjusted up or down if specific team data becomes available. Attendance is often 90–100% of capacity for popular teams, so assuming ~90% gives ~16,500 actual attendees per game.",
      commonMistakes: "Picking an extreme (10,000 or 50,000) without justification. Confusing NBA arena capacity with NFL stadium capacity (~70,000). Using college basketball venues as the reference class.",
      alternatives: "If you recall the league average attendance figure (~18,000 per game), that directly provides the default without needing to reason from capacity."
    },
    rubric: [
      { id: "ab-006-r1", text: "States a capacity default in the range 17,000–21,000 seats" },
      { id: "ab-006-r2", text: "Names at least one specific arena or comparable venue as an anchor" },
      { id: "ab-006-r3", text: "Distinguishes capacity from actual attendance" },
      { id: "ab-006-r4", text: "Explains the reasoning behind the chosen default" }
    ]
  },

  {
    id: "ab-007",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["estimation-chains"],
    difficulty: "easy",
    question: "A consultant is building a staffing model for a new call center and needs a default figure for 'average call handle time' before any operational data is available. How should she choose a sensible default, and what is a reasonable value?",
    context: undefined,
    hints: [
      "Think about the range of call types in a generic customer service call center. Short calls (quick questions) and long calls (complex issues) both happen.",
      "Industry benchmarks for call centers are publicly available. What would a reasonable average look like given a mix of simple and complex calls?",
      "A sensible default is 4–6 minutes (240–360 seconds) average handle time, based on widely cited customer service industry benchmarks of ~4–5 minutes for general call centers, with technical support centers averaging closer to 6–8 minutes. The choice depends on the type of center; for a general default, 5 minutes is defensible."
    ],
    referenceSolution: {
      approach: "Reference the known distribution of call types, anchor to industry benchmarks, and pick the midpoint of a defensible range as the default.",
      reasoning: "Call handle time = talk time + hold time + after-call work. For a general customer service center: simple calls (billing questions, status checks) might be 2–3 minutes; complex calls (complaints, technical issues) might be 8–12 minutes. A typical center handles roughly 60–70% routine calls and 30–40% complex calls. Weighted average: 0.65 × 2.5 min + 0.35 × 9 min ≈ 1.6 + 3.2 ≈ 4.8 minutes. This aligns with industry benchmark data (~4–5 minutes for general service). Default: 5 minutes. Flag that technical support centers should use 6–8 minutes.",
      commonMistakes: "Using a very short default (1–2 minutes) which underestimates staffing needs and leads to understaffing. Using 10+ minutes which is only appropriate for specialized support. Not specifying whether 'handle time' includes after-call work.",
      alternatives: "If the company has a peer competitor's published operational metrics, those would provide a better anchor than a generic industry benchmark."
    },
    rubric: [
      { id: "ab-007-r1", text: "States a default in the range 4–8 minutes" },
      { id: "ab-007-r2", text: "References industry benchmarks or a reference class" },
      { id: "ab-007-r3", text: "Distinguishes that the default varies by center type" },
      { id: "ab-007-r4", text: "Explains the reasoning rather than stating the number without justification" }
    ]
  },

  {
    id: "ab-008",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: [],
    difficulty: "easy",
    question: "You are designing a financial model for a new grocery store and need a default assumption for gross margin. No specific data is available. What default would you use and why?",
    context: undefined,
    hints: [
      "Grocery stores are known for being low-margin businesses. Think about how that compares to software or restaurants.",
      "The grocery industry has well-known margin profiles. Fresh produce and meat are lower margin; packaged goods are higher. What does a blended average look like?",
      "A sensible default for grocery gross margin is 25–30%, with 27% being a common industry benchmark. This reflects the mix of fresh (15–20% margin) and packaged/private label (35–40% margin) products. Net margin after operating costs is much lower (~1–3%), which is why high volume matters."
    ],
    referenceSolution: {
      approach: "Reference the grocery industry's known margin structure, note the mix of product categories, and select a blended default with explicit caveats.",
      reasoning: "Grocery gross margins by category: fresh produce ~20%, meat ~22%, dairy ~25%, packaged goods ~30–35%, private label ~40%. A typical grocery store generates roughly 25–35% blended gross margin, with industry leaders like Kroger and Walmart Grocery reporting ~25–27%. For a new independent grocer (likely less buying power), 25–28% is a reasonable default. Critical caveat: net operating margin is only 1–3% because of labor, rent, and shrink. The model should not confuse gross and net margin.",
      commonMistakes: "Using a net margin figure as gross margin (1–3% is net, not gross). Using a software or retail apparel margin (50–60%) — entirely wrong reference class. Failing to note that scale affects margin (large chains get better supplier terms).",
      alternatives: "Public filings from Kroger, Albertsons, or Whole Foods provide disclosed gross margin figures that could anchor a more precise default."
    },
    rubric: [
      { id: "ab-008-r1", text: "States a gross margin default in the range 22–35%" },
      { id: "ab-008-r2", text: "Correctly identifies grocery as a low-margin industry" },
      { id: "ab-008-r3", text: "Distinguishes gross margin from net operating margin" },
      { id: "ab-008-r4", text: "Notes that margin varies by product category or store scale" }
    ]
  },

  {
    id: "ab-009",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: [],
    difficulty: "easy",
    question: "A researcher needs a default assumption for the average number of hours per day that a typical American adult watches TV or video content, for use in a time-use study before specific survey data arrives. What is a sensible default and how is it justified?",
    context: undefined,
    hints: [
      "Think about what you know about American media consumption habits. Is it closer to 1 hour, 3 hours, or 6 hours per day?",
      "The Bureau of Labor Statistics American Time Use Survey and Nielsen both publish data on this. What range do those sources suggest?",
      "A sensible default is 4–5 hours per day of total screen/video content, based on Nielsen's consistently reported figure of ~4.5 hours of daily TV viewing for US adults, supplemented by ~1 hour of streaming. Note that this varies heavily by age group (older adults watch more; younger adults shift to mobile)."
    ],
    referenceSolution: {
      approach: "Reference known survey data from authoritative sources (BLS ATUS, Nielsen) and pick the published central estimate as the default, with explicit caveats about demographic variation.",
      reasoning: "Nielsen reports that American adults watch approximately 4–4.5 hours of television per day on average. The BLS American Time Use Survey reports ~3.1 hours of 'watching TV' as a primary activity, but secondary activity (TV on in background) pushes total screen time higher. Combined traditional TV + streaming (Netflix, YouTube, etc.) likely totals 4–5 hours. Sensible default: 4.5 hours per day for an average adult. Caveats: (1) Ages 18–24 watch significantly less traditional TV (~2–3 hours) but more streaming; (2) Ages 55+ watch 6+ hours; (3) Day of week matters (weekends higher).",
      commonMistakes: "Using 1–2 hours (underestimate — doesn't account for how much passive viewing occurs). Using 8+ hours (overestimate — only true for some retirees). Not distinguishing traditional TV from streaming.",
      alternatives: "The BLS ATUS figure (3.1 hours primary activity) is also defensible if the study only tracks intentional viewing, not background TV."
    },
    rubric: [
      { id: "ab-009-r1", text: "States a default in the range 3–5.5 hours per day" },
      { id: "ab-009-r2", text: "References a specific authoritative source (Nielsen, BLS, or equivalent)" },
      { id: "ab-009-r3", text: "Notes demographic variation (age group differences)" },
      { id: "ab-009-r4", text: "Distinguishes traditional TV from total video/streaming content" }
    ]
  },

  {
    id: "ab-010",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["market-sizing", "unit-economics"],
    difficulty: "medium",
    question: "You are building a quick market-sizing model for a new B2B SaaS product targeting mid-market companies (100–1,000 employees). You need sensible defaults for: (a) number of mid-market companies in the US, (b) average contract value (ACV), and (c) typical SaaS sales cycle length. Justify each default.",
    context: undefined,
    hints: [
      "For company count: The US Census Bureau publishes data on businesses by employee size. There are roughly 6 million employer businesses in the US — what fraction have 100–1,000 employees?",
      "For ACV: B2B SaaS pricing typically scales with seats or usage. Mid-market deals are significantly larger than SMB but smaller than enterprise. Think $20K–$150K range.",
      "Defaults: ~90,000–100,000 mid-market companies (Census data shows ~80K with 100–999 employees), ACV ~$50,000–$80,000 (mid-market SaaS benchmark), sales cycle ~3–6 months."
    ],
    referenceSolution: {
      approach: "For each default, identify the authoritative reference class, state the central estimate with a range, and note sensitivity to the specific product type.",
      reasoning: "(a) Mid-market company count: US Census Bureau Statistics of US Businesses shows approximately 80,000–100,000 companies with 100–999 employees. Sensible default: 90,000. (b) ACV: Mid-market B2B SaaS deals typically range $25K–$150K annually. Industry benchmarks from SaaS Capital and OpenView put the median around $50K–$75K. Sensible default: $60,000 (adjustable based on product category — HR software skews higher, point solutions lower). (c) Sales cycle: Mid-market enterprise sales typically require 3–9 months. The benchmark median is ~90–120 days (3–4 months). Sensible default: 4 months. Implication: These defaults yield a total addressable revenue of 90,000 × $60,000 = $5.4B TAM, with new sales requiring 4 months per deal to close.",
      commonMistakes: "Using SMB company counts (millions) instead of mid-market (tens of thousands). Using SMB ACV ($5K–$10K) or enterprise ACV ($200K+) for mid-market. Underestimating sales cycle length (2 weeks is realistic only for PLG/SMB).",
      alternatives: "Venture databases (PitchBook, Crunchbase) or industry reports (Gartner, Forrester) can refine company counts and ACVs for specific verticals."
    },
    rubric: [
      { id: "ab-010-r1", text: "States a mid-market company count default of 75,000–120,000" },
      { id: "ab-010-r2", text: "States an ACV default of $40,000–$100,000" },
      { id: "ab-010-r3", text: "States a sales cycle default of 3–6 months" },
      { id: "ab-010-r4", text: "Cites a specific source or reference class for at least two defaults" },
      { id: "ab-010-r5", text: "Notes that each default should be adjusted for the specific product type" }
    ]
  },

  // ── BOUNDING ESTIMATES (ab-011 to ab-015) ────────────────────────────────

  {
    id: "ab-011",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: [],
    difficulty: "easy",
    question: "Without doing precise research, establish a reasonable lower bound and upper bound for the number of commercial flights departing US airports on a typical weekday. Explain how you arrive at each bound.",
    context: undefined,
    hints: [
      "Think about how many major airports there are in the US and how many flights depart from each. Start with the most and least active airports.",
      "Lower bound: imagine a slow day at a regional airport. Upper bound: think about a hub like Atlanta (Hartsfield) or Chicago (O'Hare). How many flights per hour do those handle?",
      "Bounds: Lower ~20,000 departures (plausible floor: ~500 airports × 40 flights average — understimates hubs). Upper ~50,000 departures (~500 airports × 100 flights average — overestimates small airports). Best estimate: ~25,000–30,000 daily departures (FAA data confirms ~25,000–28,000 on typical days)."
    ],
    referenceSolution: {
      approach: "Construct bounds by anchoring on the extreme cases (maximum hub activity and minimum regional airport activity), then converge on a central estimate.",
      reasoning: "Lower bound logic: Assume only the ~30 major hub airports operate, each with ~200 departures/day. 30 × 200 = 6,000. This is clearly a floor — it ignores hundreds of regional airports. So lower bound is at least 10,000–15,000. Upper bound logic: There are ~5,000 public-use airports in the US, but commercial service operates from ~500. If each averaged 100 commercial departures/day, that's 50,000. Large hubs (ATL, ORD, LAX) have 700–900 daily departures each. Adding 10 mega-hubs × 700 = 7,000 plus 490 smaller airports × 40 = 19,600, total ~27,000. This is a consistent estimate from both approaches. Credible range: 20,000–35,000 commercial departures on a weekday.",
      commonMistakes: "Confusing total aircraft movements (takeoffs + landings + cargo) with commercial passenger departures. Forgetting that most of the ~5,000 US airports handle no commercial service. Not checking that lower and upper bounds are meaningfully different.",
      alternatives: "Anchor on FAA ATC system data: roughly 45,000 total flights/day including cargo and general aviation, of which ~25,000–28,000 are scheduled commercial passenger departures."
    },
    rubric: [
      { id: "ab-011-r1", text: "States a lower bound with explicit reasoning (not just a number)" },
      { id: "ab-011-r2", text: "States an upper bound with explicit reasoning" },
      { id: "ab-011-r3", text: "Lower bound is less than 20,000 and upper bound is more than 20,000 but less than 100,000" },
      { id: "ab-011-r4", text: "Distinguishes commercial departures from total aircraft movements" }
    ]
  },

  {
    id: "ab-012",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["orders-of-magnitude"],
    difficulty: "easy",
    question: "A journalist is writing about global deforestation. She wants to report how many trees are cut down per year worldwide. Without access to research, establish a lower bound and upper bound for this figure and explain the reasoning.",
    context: undefined,
    hints: [
      "Start by thinking about deforestation area. The Amazon alone loses roughly 10,000–15,000 km² per year. How many other major deforestation zones are there?",
      "Once you have a rough area per year, convert to number of trees by estimating tree density in tropical forests (~400 trees per hectare is a commonly cited figure).",
      "Lower bound: ~5 billion trees/year (conservative: only large-scale deforestation counted). Upper bound: ~20 billion trees/year (includes logging, agriculture clearing, urban expansion globally). FAO and research estimates suggest ~15 billion trees cut per year globally."
    ],
    referenceSolution: {
      approach: "Estimate annual deforested area globally, convert to number of trees using a defensible density figure, and construct bounds by varying the key assumptions.",
      reasoning: "Step 1 — Deforested area: The Amazon loses ~10,000 km²/year; other tropical regions (Congo Basin, Southeast Asia) add roughly the same again; temperate logging adds more. Global total: perhaps 150,000–200,000 km² per year of all forest loss. Step 2 — Tree density: Tropical forests average ~400 trees/hectare (trees ≥10 cm diameter). Secondary forests and temperate forests are lower (~200/ha). Blended average: ~300 trees/hectare. Step 3 — Conversion: 200,000 km² = 20 million hectares. 20M ha × 300 trees/ha = 6 billion trees. Lower bound: 3 billion (lower density or area estimate). Upper bound: 20 billion (higher density, includes all woody plants). Published estimates (Nature 2015 study) suggest ~15 billion trees are cut annually, but this includes natural mortality. Deforestation specifically: 3–7 billion.",
      commonMistakes: "Confusing deforestation (permanent clearing) with total tree mortality (includes natural death). Forgetting to convert km² to hectares (1 km² = 100 ha). Using tree density from temperate forests for tropical deforestation.",
      alternatives: "Top-down: if global forest cover is 4 billion hectares and 1.5% is lost annually, that's 60M ha × 300 trees/ha = 18 billion trees. Broader than deforestation-only but provides an upper ceiling."
    },
    rubric: [
      { id: "ab-012-r1", text: "Uses area of deforestation as an intermediate step" },
      { id: "ab-012-r2", text: "Applies a tree density figure with explicit justification" },
      { id: "ab-012-r3", text: "States a lower bound less than 5 billion and upper bound greater than 10 billion" },
      { id: "ab-012-r4", text: "Distinguishes deforestation from total tree mortality" }
    ]
  },

  {
    id: "ab-013",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: [],
    difficulty: "easy",
    question: "A startup founder wants to know: 'What's the maximum revenue a single physical coffee shop location could realistically generate in a year?' Construct an upper bound using first-principles reasoning.",
    context: undefined,
    hints: [
      "Think about the physical constraints: How many customers can a coffee shop serve per hour? How many hours per day is it open? What is the average transaction value?",
      "At maximum: imagine peak throughput — a very efficient espresso bar at a busy transit hub. How many drinks per hour? What's the ceiling on transaction value?",
      "Upper bound logic: 60 customers/hour × 16 hours/day × 365 days × $8 average ticket = ~$2.8M/year. A realistic high-performing shop would be $1–2M. Exceptional high-volume locations (airports, office towers) can hit $3–4M."
    ],
    referenceSolution: {
      approach: "Identify the binding physical constraints (throughput per hour × operating hours × ticket size × days per year) and push each to its realistic maximum to construct an upper bound.",
      reasoning: "Throughput ceiling: A barista can make ~3–4 espresso drinks per minute at peak; with 2 baristas, ~6/minute or 360/hour. But customers also need to queue, order, and pay — realistic peak throughput is ~80–100 customers/hour for a fast-service setup. Operating hours: a 24/7 shop is theoretically possible but not typical; 18 hours/day is a practical upper bound. Average ticket: coffee + food item could be $8–12; use $10 as a generous average. Upper bound: 100 customers/hr × 18 hrs/day × 365 days × $10 = $65.7M. That's clearly unrealistic — you can't sustain 100 customers/hour all 18 hours. Realistic peak 4 hours at 80/hr + 14 hours at 30/hr = 320 + 420 = 740 customers/day × $10 = $7,400/day × 365 = $2.7M/year. This is the practical upper bound for an exceptional location.",
      commonMistakes: "Assuming peak throughput continues all operating hours (it doesn't — there are off-peak hours). Forgetting that seating capacity also limits throughput. Not distinguishing a transit-hub counter from a sit-down café.",
      alternatives: "Anchor on known public data: Starbucks reports ~$1.5M average annual revenue per US company-operated store; high-traffic urban stores reportedly reach $3–5M. This provides a sanity check on the bottom-up estimate."
    },
    rubric: [
      { id: "ab-013-r1", text: "Builds the upper bound from physical throughput constraints, not just intuition" },
      { id: "ab-013-r2", text: "Uses the formula: customers × hours × days × ticket size" },
      { id: "ab-013-r3", text: "Explicitly accounts for variation between peak and off-peak hours" },
      { id: "ab-013-r4", text: "States a final upper bound in the range $2M–$5M and explains why higher is implausible" }
    ]
  },

  {
    id: "ab-014",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: [],
    difficulty: "easy",
    question: "A policy analyst needs to estimate the minimum possible cost per QALY (quality-adjusted life year) that any medical intervention could achieve. Construct a defensible lower bound using reasoning from first principles.",
    context: "A QALY is a standard measure of health benefit: 1 QALY = one additional year of perfect health. Common cost-effectiveness thresholds are $50,000–$150,000 per QALY.",
    hints: [
      "Think about the cheapest possible health intervention that is known to save lives or years of healthy life. Examples: oral rehydration therapy, vitamin A supplementation, childhood vaccines.",
      "The cheapest interventions in global health cost a few dollars and can save decades of healthy life in a young child. What does that imply for cost per QALY?",
      "Lower bound: oral rehydration therapy costs ~$1–5 per treatment, can prevent a childhood death (preventing the loss of ~40–60 QALYs). Cost per QALY: $1–5 / 50 QALYs ≈ $0.02–$0.10 per QALY. Vitamin A supplementation: ~$1–2 per child per year, saves roughly 1 QALY per 50 children treated, so ~$50–100 per QALY. Lower bound is therefore in the range of $1–$100 per QALY for the most cost-effective global health interventions."
    ],
    referenceSolution: {
      approach: "Identify the most cost-effective known health interventions in global health economics, use their cost and QALY yield to set the lower bound, and justify why no intervention plausibly achieves a lower cost per QALY.",
      reasoning: "The most cost-effective interventions are typically: (1) Oral rehydration salts — prevents child death from diarrhea, cost ~$0.50–$2 per treatment course, prevents ~50 lost QALYs per death averted; cost per QALY ~$0.01–$0.05. (2) Vitamin A supplementation — ~$1–2/child, ~0.01–0.02 QALYs gained per child treated; cost per QALY ~$50–200. (3) Childhood vaccines — ~$15–40 for a full schedule, prevents multiple disease deaths; cost per QALY ~$100–500. The absolute lower bound from empirical evidence is ~$1–10 per QALY for the most effective interventions in low-income settings. No intervention can have negative cost per QALY unless it also saves money (some preventive interventions do), which would technically mean the cost per QALY is zero or negative — but that requires the intervention itself to cost less than the healthcare costs it averts.",
      commonMistakes: "Using rich-country reference prices (everything looks expensive) rather than global health data. Forgetting that a preventive intervention in a child averts many more QALYs than the same intervention in an elderly patient. Confusing cost-effectiveness with cost savings.",
      alternatives: "The Disease Control Priorities project (DCP3) and WHO-CHOICE database publish empirical cost-per-QALY data that would provide a directly referenced lower bound."
    },
    rubric: [
      { id: "ab-014-r1", text: "Uses a real global health intervention as the anchor for the lower bound" },
      { id: "ab-014-r2", text: "Correctly calculates cost per QALY from cost per treatment and QALYs averted" },
      { id: "ab-014-r3", text: "States a lower bound in the range $1–$500 per QALY with clear reasoning" },
      { id: "ab-014-r4", text: "Notes that the bound depends on age (years of life remaining) and setting (income level)" }
    ]
  },

  {
    id: "ab-015",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["fermi-problems", "sanity-checks"],
    difficulty: "medium",
    question: "An engineer is designing a new inter-city rail line and needs a bounding estimate for capital cost per kilometer before any detailed engineering is done. Construct a lower bound and upper bound using comparable projects, and identify which factors push a project toward each extreme.",
    context: "The line will run about 200 km through a mix of flat farmland and one mid-sized city.",
    hints: [
      "Think about what drives rail construction costs: tunnels and elevated sections are far more expensive than at-grade track. What types of rail lines are cheapest and most expensive per km?",
      "Reference classes: High-speed rail (HSR) in Europe averages $20M–$80M per km at-grade; urban metro tunnels run $200M–$1B+ per km. Conventional intercity rail at-grade is much cheaper.",
      "Lower bound: simple at-grade track on flat land, minimal signaling — ~$5M–$10M per km (comparable to freight rail upgrades). Upper bound: significant urban sections requiring elevated or tunneled track, HSR-standard, seismic zone — ~$80M–$150M per km. For the specific 200 km mixed route, a realistic range is $15M–$50M per km depending on city section treatment."
    ],
    referenceSolution: {
      approach: "Identify the reference class of comparable rail projects, extract the range of observed costs per km, and map each end of the range to specific project characteristics.",
      reasoning: "Lower bound drivers: (a) at-grade construction on flat terrain (no tunnels, no elevated sections), (b) conventional speed (not high-speed), (c) low labor cost jurisdiction, (d) minimal expropriation costs, (e) reuse of existing right-of-way. Comparable projects: freight rail upgrades $3–8M/km, simple passenger upgrades $8–15M/km. Lower bound for this project: ~$8M/km. Upper bound drivers: (a) elevated viaducts through the city (~$50M/km), (b) high-speed standard (heavier earthworks), (c) complex signaling, (d) land acquisition in urban area, (e) environmental mitigation. Comparable: Amtrak NEC at ~$50M/km, European HSR at $30–80M/km. Upper bound: ~$80–100M/km for the city section, $15–20M/km for rural sections. Blended for 200 km (say 30 km urban, 170 km rural): (30 × $80M + 170 × $15M) / 200 = ($2.4B + $2.55B) / 200 = ~$25M/km blended. Range: $12M–$40M/km blended.",
      commonMistakes: "Using metro tunnel costs as the reference class for inter-city rail (10× too high for at-grade sections). Not accounting for the difference in cost per km between the urban and rural sections of the same line. Ignoring that the city section alone drives a disproportionate share of total cost.",
      alternatives: "The World Bank's Railway Reform toolkit and International Railway Statistics database contain empirical cost data for comparable projects in similar countries that could anchor a more precise estimate."
    },
    rubric: [
      { id: "ab-015-r1", text: "States a lower bound of $5M–$20M/km with explicit reference to at-grade construction" },
      { id: "ab-015-r2", text: "States an upper bound of $50M–$150M/km with reference to urban/tunneled sections" },
      { id: "ab-015-r3", text: "Identifies tunneling and elevated track as the primary cost multiplier" },
      { id: "ab-015-r4", text: "Treats the urban section and rural section separately in the analysis" },
      { id: "ab-015-r5", text: "Names at least one comparable real project as an anchor" }
    ]
  },

  // ── SENSITIVITY ANALYSIS (ab-016 to ab-020) ──────────────────────────────

  {
    id: "ab-016",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "A simple business model estimates annual profit as: Profit = (Price − Cost) × Volume − Fixed Costs = ($50 − $30) × 10,000 − $150,000 = $50,000. Which single variable, if wrong by 10%, has the largest impact on profit?",
    context: undefined,
    hints: [
      "To test sensitivity, change each variable by 10% (up or down) and see how much profit changes. Start with price.",
      "Price × 10% = $5 change. That affects every unit sold: $5 × 10,000 = $50,000 change in profit. Now compare to volume and cost.",
      "Price sensitivity: ±$5 × 10,000 = ±$50,000 (100% swing). Cost sensitivity: ±$3 × 10,000 = ±$30,000 (60% swing). Volume sensitivity: ±1,000 units × $20 margin = ±$20,000 (40% swing). Fixed cost sensitivity: ±$15,000 (30% swing). Price is the most sensitive variable."
    ],
    referenceSolution: {
      approach: "Apply a one-at-a-time sensitivity test: hold all other variables constant, change each by ±10%, and compute the resulting change in profit as a percentage of base profit.",
      reasoning: "Base profit = $50,000. (1) Price +10%: New price = $55. Profit = ($55 − $30) × 10,000 − $150,000 = $250,000 − $150,000 = $100,000. Change = +$50,000 = +100%. (2) Cost +10%: New cost = $33. Profit = ($50 − $33) × 10,000 − $150,000 = $170,000 − $150,000 = $20,000. Change = −$30,000 = −60%. (3) Volume +10%: 11,000 units. Profit = $20 × 11,000 − $150,000 = $220,000 − $150,000 = $70,000. Change = +$20,000 = +40%. (4) Fixed costs +10%: $165,000. Profit = $200,000 − $165,000 = $35,000. Change = −$15,000 = −30%. Ranking by impact: Price (100%) > Cost (60%) > Volume (40%) > Fixed Costs (30%). Price is by far the most sensitive lever.",
      commonMistakes: "Testing a 1% change and misinterpreting the result (scale to 10% consistently). Forgetting that profit margins are thin, so a small absolute change in revenue or cost becomes a large percentage change in profit. Not testing both upside and downside.",
      alternatives: "Sensitivity can also be expressed as elasticity: % change in profit per 1% change in each variable. This normalizes comparisons and is useful for communicating results to stakeholders."
    },
    rubric: [
      { id: "ab-016-r1", text: "Tests each variable by changing it by 10% while holding others constant" },
      { id: "ab-016-r2", text: "Correctly calculates the profit impact of a 10% price change as +$50,000" },
      { id: "ab-016-r3", text: "Correctly identifies price as the most sensitive variable" },
      { id: "ab-016-r4", text: "Ranks all four variables by sensitivity" }
    ]
  },

  {
    id: "ab-017",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "A population model projects that a city will have 1.2 million residents in 10 years, based on an assumed annual growth rate of 2%. How sensitive is this projection to the growth rate assumption? Calculate the projected population under 1%, 2%, and 3% annual growth.",
    context: undefined,
    hints: [
      "Use the compound growth formula: P = P₀ × (1 + r)^t, where P₀ is current population, r is annual growth rate, and t is years.",
      "You'll need to know (or estimate) the current population. If the 2% projection gives 1.2M in 10 years, work backward: P₀ = 1,200,000 / (1.02)^10 ≈ 1,200,000 / 1.219 ≈ 984,000.",
      "At 1%: 984,000 × (1.01)^10 ≈ 984,000 × 1.105 ≈ 1,087,000. At 2%: 1,200,000 (given). At 3%: 984,000 × (1.03)^10 ≈ 984,000 × 1.344 ≈ 1,322,000. The 3% vs 1% scenarios differ by ~235,000 people — a 22% spread — from just a 2 percentage point difference in the growth assumption."
    ],
    referenceSolution: {
      approach: "Back-calculate the current population from the given projection, then apply the compound growth formula at three growth rates to quantify the sensitivity.",
      reasoning: "Step 1 — Current population: P₀ = 1,200,000 / (1.02)^10. (1.02)^10 ≈ 1.2190. P₀ ≈ 984,000. Step 2 — Scenario analysis: At 1%: 984,000 × (1.01)^10 = 984,000 × 1.1046 ≈ 1,087,000. At 2%: 984,000 × 1.2190 ≈ 1,200,000 (confirmed). At 3%: 984,000 × (1.03)^10 = 984,000 × 1.3439 ≈ 1,322,000. Step 3 — Interpretation: Switching from 2% to 3% growth adds 122,000 residents (10% more). Switching from 2% to 1% reduces the projection by 113,000 (9.4% less). Over 10 years, the 1% vs. 3% scenario differs by 235,000 people — a spread that would significantly change infrastructure planning decisions (schools, water, transit). The model is moderately sensitive to the growth rate assumption.",
      commonMistakes: "Using simple (non-compound) growth: P = P₀ × (1 + r × t) instead of P₀ × (1 + r)^t. Misinterpreting 'sensitive' — the absolute difference is large (235K people) even if the percentage difference is moderate (22%). Not communicating what the sensitivity means for the decision at hand.",
      alternatives: "Present results as a range: 'The projection has a ±10% uncertainty band just from the growth rate assumption.' This framing is more useful for planning than three individual point estimates."
    },
    rubric: [
      { id: "ab-017-r1", text: "Correctly derives the current population (~984,000) before running scenarios" },
      { id: "ab-017-r2", text: "Uses compound growth formula, not simple linear growth" },
      { id: "ab-017-r3", text: "Calculates all three scenarios within ±5% of the correct values" },
      { id: "ab-017-r4", text: "Interprets the sensitivity in terms relevant to planning decisions" }
    ]
  },

  {
    id: "ab-018",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["unit-economics"],
    difficulty: "easy",
    question: "A subscription app charges $10/month. Its model assumes: 10,000 subscribers, 5% monthly churn, and $2 monthly cost per subscriber. Which assumption — subscriber count, churn rate, or cost per subscriber — has the greatest impact on annual net revenue? Show your analysis.",
    context: undefined,
    hints: [
      "Model steady-state net revenue: Revenue = Average subscribers × $10/month × 12. Average subscribers under churn: if churn is 5%, steady-state subscribers = new additions / churn rate. But since we're told 10,000 subscribers, treat that as the current steady-state number.",
      "Simplify: Annual net revenue = 10,000 × ($10 − $2) × 12 = $960,000. Now change each variable by 10% and see how much revenue changes.",
      "Subscriber count: ±1,000 subscribers × $8 net margin × 12 = ±$96,000. Cost per subscriber: ±$0.20 × 10,000 × 12 = ±$24,000. Churn: 10% change in churn (from 5% to 5.5%) reduces steady-state subscribers by ~9%, so revenue drops ~$86,000. Subscriber count has the highest sensitivity."
    ],
    referenceSolution: {
      approach: "Fix annual net revenue in a simplified model, then apply a one-at-a-time 10% sensitivity test to each assumption.",
      reasoning: "Baseline: Annual net revenue = 10,000 × ($10 − $2) × 12 = $960,000. Sensitivity tests (±10% of each assumption): (1) Subscriber count ±10%: 9,000 or 11,000 subscribers. Revenue = 9,000 × $8 × 12 = $864,000 or 11,000 × $8 × 12 = $1,056,000. Change = ±$96,000 (±10%). (2) Churn rate: at 5% churn, steady-state subs = monthly new / 0.05. If churn rises to 5.5% (10% worse), steady-state subs fall proportionally: 10,000 × (5%/5.5%) ≈ 9,091. Revenue = 9,091 × $8 × 12 = $872,736. Change ≈ −$87,000 (−9%). (3) Cost per subscriber ±10%: cost changes from $2 to $2.20. Net margin falls from $8 to $7.80. Revenue = 10,000 × $7.80 × 12 = $936,000. Change = −$24,000 (−2.5%). Ranking: Subscriber count (10%) > Churn (~9%) > Cost per subscriber (2.5%). The model is most sensitive to subscriber count and churn — both should be tracked closely.",
      commonMistakes: "Testing churn as a flat subscriber number change rather than modeling its effect on steady-state subscriber count. Treating all three as equally impactful. Forgetting that cost per subscriber only affects the margin, not the gross revenue.",
      alternatives: "A tornado chart would visually rank these sensitivities and is a standard way to communicate one-at-a-time sensitivity results to business stakeholders."
    },
    rubric: [
      { id: "ab-018-r1", text: "Correctly calculates baseline annual net revenue as $960,000" },
      { id: "ab-018-r2", text: "Applies the 10% sensitivity test to all three variables" },
      { id: "ab-018-r3", text: "Correctly identifies subscriber count as the most sensitive variable" },
      { id: "ab-018-r4", text: "Models churn's effect on steady-state subscribers rather than treating it as a fixed cost" }
    ]
  },

  {
    id: "ab-019",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "A scientist assumes that global average temperature will rise 2°C by 2100 and projects that sea levels will rise 50 cm as a result. However, peer-reviewed estimates of sea level rise per degree of warming range from 20 cm/°C to 60 cm/°C. How sensitive is the 50 cm projection to this range of estimates, and what is the practical implication for coastal planning?",
    context: undefined,
    hints: [
      "The projection uses a single-point assumption (25 cm per °C of warming). What happens if the true relationship is at the low end or high end of the peer-reviewed range?",
      "Low estimate: 2°C × 20 cm/°C = 40 cm. High estimate: 2°C × 60 cm/°C = 120 cm. Central estimate: 50 cm. How large is this range relative to the central estimate?",
      "The range spans 40 cm to 120 cm — a 3× spread. For coastal planning (sea walls, flood zones), 40 cm vs. 120 cm is the difference between manageable adaptation and major displacement. The sensitivity analysis reveals that 'plan for 50 cm' is not robust — coastal planners should design for at least the upper bound."
    ],
    referenceSolution: {
      approach: "Apply the full range of the underlying scientific estimate to the projection, quantify the resulting outcome range, and interpret the range in the context of the planning decision.",
      reasoning: "The model: Sea level rise = Temperature rise × Sensitivity parameter. Temperature rise = 2°C (assumed). Sensitivity range: 20–60 cm/°C. Low scenario: 2 × 20 = 40 cm. Central: 2 × 25 = 50 cm. High: 2 × 60 = 120 cm. The range is 40–120 cm, a factor of 3 from low to high. The central estimate (50 cm) is close to the low end of the high-impact scenarios. For coastal planning, 40 cm of sea level rise would affect different areas than 120 cm — the difference could mean millions of people in low-lying regions. Planning to the central estimate is inappropriate when: (a) the range is wide and asymmetric (upside and downside are not equal), and (b) the cost of being wrong on the high side (insufficient protection) is much greater than being wrong on the low side (over-engineering). The robust recommendation is to plan for the 80th–95th percentile estimate.",
      commonMistakes: "Treating the central estimate as sufficiently accurate without examining the range. Ignoring the asymmetry: under-preparing for flooding is much more costly than over-preparing. Not connecting the sensitivity analysis to the decision logic.",
      alternatives: "Monte Carlo simulation treating the sensitivity parameter as a distribution would give a probability-weighted range and allow planners to design to a specific percentile (e.g., 'plan for 90th percentile sea level rise')."
    },
    rubric: [
      { id: "ab-019-r1", text: "Calculates the full range: 40 cm (low) to 120 cm (high)" },
      { id: "ab-019-r2", text: "Notes that the range is a 3× spread, not a small uncertainty" },
      { id: "ab-019-r3", text: "Identifies asymmetric cost of under-planning vs. over-planning" },
      { id: "ab-019-r4", text: "Recommends planning to the upper end of the range rather than the central estimate" }
    ]
  },

  {
    id: "ab-020",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["business-model-evaluation", "first-principles-analysis"],
    difficulty: "medium",
    question: "An e-commerce company has the following unit economics: CAC = $80, LTV = $200 (based on: $40 average order margin × 5 average orders over lifetime). The company's investors say 'LTV/CAC > 2, so the business is healthy.' Perform a sensitivity analysis to test how robust this conclusion is.",
    context: "The LTV formula is: Avg Order Margin × Avg Orders per Customer. The company assumes a 20% gross margin on $200 average order value, and 5 orders per customer lifetime.",
    hints: [
      "LTV depends on two assumptions: order margin and orders per customer. CAC is the third variable. Test all three.",
      "If margin falls from 20% to 15% (competitive pressure), and orders per customer drop from 5 to 4 (higher churn), what happens to LTV/CAC?",
      "Downside: Order margin = 15% × $200 = $30. Orders = 4. LTV = $30 × 4 = $120. LTV/CAC = $120/$80 = 1.5 — below the 2× threshold. The 'healthy' conclusion is fragile. Moderate pessimism about two assumptions breaks the investment thesis."
    ],
    referenceSolution: {
      approach: "Decompose LTV into its components, identify the most uncertain assumptions, run a scenario matrix (base/optimistic/pessimistic for each), and test whether the LTV/CAC conclusion holds across scenarios.",
      reasoning: "Base case: Margin = $40 (20% × $200), Orders = 5, LTV = $200, CAC = $80, LTV/CAC = 2.5. Sensitivity on order margin: if competition forces margin to 15% ($30/order), LTV = $150, LTV/CAC = 1.875 — borderline. At 10% margin ($20), LTV = $100, LTV/CAC = 1.25 — clearly unhealthy. Sensitivity on orders per customer: at 3 orders, LTV = $120, LTV/CAC = 1.5. At 7 orders, LTV = $280, LTV/CAC = 3.5. Sensitivity on CAC: if acquisition costs rise to $120, LTV/CAC = $200/$120 = 1.67 — below threshold. Combined downside (15% margin, 4 orders, $100 CAC): LTV = $120, LTV/CAC = 1.2. The base-case looks attractive, but the business is fragile: any two assumptions moving moderately in the wrong direction breaks the unit economics. Key risk: orders per customer (churn) and gross margin (pricing power) are the most uncertain variables.",
      commonMistakes: "Accepting LTV/CAC at face value without stress-testing the inputs. Not recognizing that LTV compounds two uncertain variables (margin and retention). Using gross margin instead of contribution margin (excluding fulfillment costs, returns, and discounts from 'margin').",
      alternatives: "A 2×2 scenario matrix (high/low margin × high/low retention) shows the full range more clearly than one-at-a-time sensitivity. Presenting this matrix to investors surfaces the conditions under which the thesis fails."
    },
    rubric: [
      { id: "ab-020-r1", text: "Tests sensitivity on all three variables: margin, orders per customer, and CAC" },
      { id: "ab-020-r2", text: "Correctly calculates LTV under at least two alternative scenarios" },
      { id: "ab-020-r3", text: "Identifies a plausible downside scenario where LTV/CAC falls below 2" },
      { id: "ab-020-r4", text: "Concludes that the 'healthy' claim is fragile, not robust" },
      { id: "ab-020-r5", text: "Identifies which of the three variables carries the most uncertainty or risk" }
    ]
  },

  // ── ASSUMPTION VALIDATION (ab-021 to ab-025) ─────────────────────────────

  {
    id: "ab-021",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: [],
    difficulty: "easy",
    question: "A product manager assumes that users want a faster checkout process on the company's e-commerce site. Before investing in a full redesign, how would you validate or invalidate this assumption with minimal cost and time?",
    context: undefined,
    hints: [
      "Think about the cheapest, fastest ways to test whether checkout speed is actually the issue. What data do you already have? What can you observe?",
      "Existing analytics (checkout funnel drop-off data, session recordings) can reveal whether users abandon at speed-related steps. User interviews can surface what they actually find frustrating.",
      "Cheapest validation path: (1) Review existing analytics for drop-off rates at each checkout step. (2) Watch session recordings of abandoned checkouts. (3) Run 5 user interviews focused on checkout friction. (4) Survey users who abandoned carts asking why. This takes days, not months, and either confirms the assumption or reveals the real issue (e.g., unexpected shipping costs, required account creation)."
    ],
    referenceSolution: {
      approach: "Apply the Build-Measure-Learn framework at the cheapest level: use existing data first, then qualitative research, before any engineering investment.",
      reasoning: "Step 1 — Existing data (no cost, 1 day): Pull checkout funnel analytics. If drop-off is concentrated at step 3 of 5, that's a diagnostic signal. If it's spread evenly, speed is unlikely to be the primary issue. Step 2 — Session recordings (free with tools like Hotjar, 2–3 days): Watch actual user behavior. Do users pause and look confused, or do they move quickly and just leave? Step 3 — User interviews (low cost, 3–5 days): Recruit 5 users who abandoned checkout in the last 30 days. Ask open-ended questions about their experience. Step 4 — Exit surveys (1–2 days to set up): One-question popup on cart abandonment: 'What stopped you from completing your purchase?' The key insight: if users say 'checkout was slow,' the assumption is validated. If they say 'shipping was too expensive' or 'I had to create an account,' the assumption is wrong, and the redesign would have been wasted investment.",
      commonMistakes: "Skipping the analytics step and going straight to building a prototype. Asking users 'Do you want a faster checkout?' (leading question) instead of asking about their experience. Building a full MVP to test a hypothesis that existing data could answer in hours.",
      alternatives: "An A/B test of a simplified checkout (fewer fields) vs. the current flow would also validate the assumption in 1–2 weeks with real behavioral data, though it requires some engineering investment."
    },
    rubric: [
      { id: "ab-021-r1", text: "Starts with existing analytics data before any new research" },
      { id: "ab-021-r2", text: "Includes at least one qualitative method (interviews or session recordings)" },
      { id: "ab-021-r3", text: "Describes what a validated vs. invalidated outcome would look like" },
      { id: "ab-021-r4", text: "Proposes a validation path that takes days, not months" }
    ]
  },

  {
    id: "ab-022",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["structured-argumentation"],
    difficulty: "easy",
    question: "A nonprofit organization assumes that financial barriers are the primary reason low-income families don't access preventive healthcare. What is the minimum evidence needed to validate this assumption, and what alternative explanations should be tested alongside it?",
    context: undefined,
    hints: [
      "What evidence would confirm that cost is the #1 barrier? What evidence would suggest other factors (awareness, time, cultural trust, geography) are more important?",
      "Think about what data you'd compare: Do low-income families access free services at the same rate as paid services? Do free clinics see full utilization? Are there geographic or cultural patterns?",
      "Minimum evidence: (1) Utilization data from free/subsidized clinics in the target population (if utilization is also low, cost is not the only barrier). (2) Survey data asking families directly about barriers — validated instruments like BRFSS include access questions. (3) Comparison to populations with health insurance coverage (if insured low-income families still underuse preventive care, cost is not the primary driver). Alternative hypotheses: lack of awareness of available services, distrust of healthcare institutions, time constraints (can't take time off work), transportation barriers, language or cultural barriers."
    ],
    referenceSolution: {
      approach: "Define the counterfactual test (what would the world look like if the assumption is true vs. false?), identify the cheapest data source that distinguishes the hypothesis from alternatives, and enumerate competing explanations.",
      reasoning: "If financial barriers are the primary reason: (a) We would expect utilization to increase when cost is removed. (b) Free clinics and Medicaid-covered services would see high utilization. (c) The gap between insured and uninsured families would be large. Evidence to gather: (1) Utilization rates at federally qualified health centers (FQHCs), which charge on a sliding scale — if still underutilized, cost is not the only factor. (2) Published research: studies on Medicaid expansion show utilization rises but doesn't fully close the gap, suggesting other barriers exist. (3) Direct surveys of the target population, using open-ended questions to avoid leading respondents toward the cost answer. Alternative barriers that should be tested: time (preventive care requires scheduling in advance, which is harder for hourly workers), trust (historical medical mistreatment of minority communities), geography (clinic proximity), language, and cultural norms about seeking care preemptively. A validated assumption means cost is the #1 factor AND addressing cost alone produces a meaningful improvement. An invalidated assumption means other barriers dominate even when cost is removed.",
      commonMistakes: "Treating 'financial barriers exist' as the same as 'financial barriers are the primary reason' — even if cost matters, it may not be the dominant factor. Designing surveys that prime respondents to answer 'cost' (e.g., asking 'Do financial barriers prevent you from accessing care?' instead of 'What gets in the way of visiting a doctor?').",
      alternatives: "Natural experiments: compare preventive care utilization before and after a free clinic opened in a target neighborhood. If utilization rose substantially, the financial barrier hypothesis is supported."
    },
    rubric: [
      { id: "ab-022-r1", text: "Identifies utilization of free/subsidized services as a key test" },
      { id: "ab-022-r2", text: "Lists at least 3 alternative barriers (not just cost)" },
      { id: "ab-022-r3", text: "Distinguishes 'cost matters' from 'cost is the primary barrier'" },
      { id: "ab-022-r4", text: "Proposes a research method that avoids leading respondents toward the cost answer" }
    ]
  },

  {
    id: "ab-023",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: [],
    difficulty: "easy",
    question: "An algorithm is trained to predict employee performance based on historical data. The team assumes that past performance is a reliable predictor of future performance. What would you need to verify to validate this assumption, and what could make it false?",
    context: undefined,
    hints: [
      "What does it mean for past performance to be a 'reliable predictor'? Think about: Is the relationship statistically stable? Are there confounds? Does the future resemble the past?",
      "Consider: What if the roles change? What if the historical data reflects biased evaluation? What if performance has a large situational component (the job changes, the team changes)?",
      "Validation tests: (1) Measure correlation between historical ratings and future ratings for the same employees over time. (2) Test for systematic biases in historical evaluations (e.g., gender, race correlations in past ratings). (3) Verify that the job characteristics are stable between the training period and the deployment period."
    ],
    referenceSolution: {
      approach: "Identify the three components of 'reliable predictor': statistical validity (does the correlation exist?), stability (does it hold over time and context?), and fairness (is it free of systematic bias?).",
      reasoning: "(1) Statistical validity: Compute the autocorrelation of performance ratings over time for the same employees. If an employee rated high in year 1 is consistently rated high in years 2–5, the assumption has some support. Typical research suggests performance autocorrelation is moderate (~0.4–0.6), not high. (2) Contextual stability: Does the relationship hold when employees change roles, managers, or teams? If a high performer in a small startup becomes average in a large corporation, past performance reflects context as much as individual capability. (3) Bias in historical data: If historical evaluations systematically underrated certain demographic groups, the model learns a biased signal. Checking for disparate impact in historical data is essential. (4) Non-stationarity: Does the job itself change? Past performance as a software engineer in 2015 may not predict performance in 2025 if the required skills have shifted. The assumption is invalidated if: the autocorrelation is low, ratings are biased, or the job context has meaningfully changed.",
      commonMistakes: "Assuming that using 'data' automatically validates the assumption — the data can be biased, incomplete, or from a different context. Ignoring that performance is partly situational (driven by manager quality, team composition, resources) rather than purely individual.",
      alternatives: "Compare the model's predictions to a simple baseline (e.g., 'predict the same rating as last year') to determine whether the machine learning model adds predictive value beyond the simplest possible assumption."
    },
    rubric: [
      { id: "ab-023-r1", text: "Tests the statistical correlation between past and future performance" },
      { id: "ab-023-r2", text: "Raises potential bias in historical evaluations as a validity threat" },
      { id: "ab-023-r3", text: "Identifies contextual changes (role, manager, job requirements) as a validity threat" },
      { id: "ab-023-r4", text: "Explains what a validated vs. invalidated outcome looks like in concrete terms" }
    ]
  },

  {
    id: "ab-024",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: [],
    difficulty: "easy",
    question: "A restaurant owner assumes that adding a vegan section to her menu will attract new customers without alienating existing ones. Before making the investment, how can she validate both parts of this assumption — that vegans will come, and that existing customers won't leave?",
    context: undefined,
    hints: [
      "Think about two separate tests: one for demand from new customers, one for reaction from existing customers. These are independent hypotheses.",
      "For demand: How could she test vegan demand without a full menu redesign? For retention: How could she test whether existing customers care about the change?",
      "Demand test: Run a 2-week specials board with vegan dishes and track order rates + new customer identification. Retention test: Survey a sample of regular customers about the proposed change before implementing it."
    ],
    referenceSolution: {
      approach: "Separate the assumption into two distinct testable hypotheses, design a low-cost experiment for each, and define what outcomes would validate or invalidate each.",
      reasoning: "Hypothesis 1 — Vegans will come: The cheapest test is to add 2–3 vegan dishes as weekly specials (no menu reprint required) and track: (a) how many are ordered per week, (b) whether new customers come in and identify as vegan (staff can ask 'How did you hear about us?'). A validated result: vegan specials sell at the rate of comparable non-vegan specials, and at least 5–10 new customers per week mention the vegan option as the reason they came. An invalidated result: vegan specials sell poorly or new customers don't cite the menu as a draw. Hypothesis 2 — Existing customers won't be alienated: This is an opinion/attitude question. Test it with: (a) a brief table survey of regulars ('We're thinking about adding a vegan section — any thoughts?'), (b) an email to loyalty members, (c) observation of whether customers read or comment on vegan specials. A validated result: strong neutral or positive reactions. An invalidated result: vocal objections or customers saying they'd come less often if the menu 'changed too much.'",
      commonMistakes: "Testing only one hypothesis (demand from vegans) and assuming the retention hypothesis is obviously true. Investing in a full menu redesign before running the specials experiment. Conflating 'interesting idea' responses in surveys with actual behavioral change.",
      alternatives: "A soft launch at one location (if the restaurant has multiple) before rolling out chainwide is a higher-fidelity test that produces actual behavioral data rather than stated preferences."
    },
    rubric: [
      { id: "ab-024-r1", text: "Separates the assumption into two distinct hypotheses (demand + retention)" },
      { id: "ab-024-r2", text: "Proposes a low-cost test for demand (specials or limited trial)" },
      { id: "ab-024-r3", text: "Proposes a test for existing customer sentiment (survey or observation)" },
      { id: "ab-024-r4", text: "Defines what a validated vs. invalidated outcome looks like for each hypothesis" }
    ]
  },

  {
    id: "ab-025",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["challenging-defaults", "cross-domain-reasoning"],
    difficulty: "medium",
    question: "A city government assumes that building more public parks will increase neighborhood satisfaction and property values. Before committing $50M to a park-building program, design a validation framework that tests this assumption rigorously, including identification of confounding factors and a plan for measuring causal impact rather than mere correlation.",
    context: "The city has 20 neighborhoods. Five already have above-average park access. The other 15 are the target for new parks.",
    hints: [
      "Correlation vs. causation is the core problem. High-income neighborhoods tend to have both good parks and high property values — how do you tell whether parks cause higher values, or whether wealthy neighborhoods simply invest in both?",
      "A difference-in-differences (DiD) design compares treated neighborhoods (new parks) to similar untreated control neighborhoods before and after park construction. What controls would you need?",
      "Framework: (1) Pre-construction baseline survey of satisfaction in all 15 target neighborhoods + 5 comparison neighborhoods. (2) Randomize (or quasi-randomize) which 7–8 of the 15 get parks first. (3) Measure satisfaction + property values at 1 and 3 years post-construction. (4) Compare change in treated vs. control neighborhoods (DiD). Confounds to control: income trends, other city investments, demographic shifts."
    ],
    referenceSolution: {
      approach: "Design a quasi-experimental evaluation using difference-in-differences, identify the key confounding variables, establish a baseline before intervention, and define the success criteria for causal impact.",
      reasoning: "The core challenge is causal identification: parks and high property values are correlated, but wealthier areas may get better parks because of higher political capital, not the reverse. To establish causation, you need a comparison group that is similar to treated neighborhoods but doesn't receive parks, observed both before and after treatment. Framework: (1) Baseline data collection (6 months before construction): resident satisfaction survey, property value data, demographic profile, existing amenity count — in all 15 target and 5 comparison neighborhoods. (2) Quasi-random assignment: assign parks to neighborhoods based on a predetermined scoring system (infrastructure readiness, cost, etc.) rather than satisfaction scores — this makes the assignment less correlated with the outcome. (3) Control group: the 7 neighborhoods that score just below the cutoff for receiving parks in the first wave serve as the control group. (4) Outcome measurement: at 12, 24, and 36 months post-opening, re-survey satisfaction and re-measure property values. (5) DiD analysis: compare the change in satisfied residents (%) in park vs. no-park neighborhoods. Key confounds to control: (a) Simultaneous city investments (road repaving, new transit — did treated neighborhoods also get other improvements?), (b) Regional economic trends (if the whole city gentrifies, parks get credit for underlying trends), (c) Selection bias (did residents who want parks self-select into treated neighborhoods?). Success criterion: parks cause ≥5 percentage point increase in neighborhood satisfaction and ≥3% increase in property values within 3 years, after controlling for confounds.",
      commonMistakes: "Comparing only 'before vs. after' in treated neighborhoods without a control group (any trend in the city would then appear to be caused by parks). Using property value data without controlling for broader real estate trends. Measuring satisfaction with a leading question ('Are you satisfied with the new park?') instead of overall neighborhood satisfaction.",
      alternatives: "A regression discontinuity design — comparing neighborhoods just above and just below a threshold score for park eligibility — is another way to establish causal impact if random assignment is not feasible. Existing academic literature on green space and property values can also serve as a prior to inform the expected effect size."
    },
    rubric: [
      { id: "ab-025-r1", text: "Identifies the core correlation vs. causation problem explicitly" },
      { id: "ab-025-r2", text: "Proposes a comparison group (control neighborhoods) rather than only a before/after comparison" },
      { id: "ab-025-r3", text: "Establishes a pre-intervention baseline for both treated and control groups" },
      { id: "ab-025-r4", text: "Names at least 2 confounding variables that must be controlled" },
      { id: "ab-025-r5", text: "Defines a specific, measurable success criterion for the validation" },
      { id: "ab-025-r6", text: "Distinguishes between measuring correlation and establishing causal impact" }
    ]
  },
  // ── IDENTIFYING UNKNOWNS (ab-026 to ab-030) ──────────────────────────────

  {
    id: "ab-026",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["unit-economics"],
    difficulty: "medium",
    question: "A SaaS company reports its customer acquisition cost (CAC) as $400 and claims profitability because its average revenue per user (ARPU) is $600/year. An analyst says this means each customer pays back in 8 months. What unknowns are buried in this payback period claim?",
    context: "The company has been operating for 2 years, has 800 customers, and spends $320,000/year on sales and marketing.",
    hints: [
      "The payback period formula is CAC ÷ (monthly revenue per customer). Work out whether the numbers given are actually consistent, then ask what factors would change the real payback period.",
      "CAC and ARPU are averages — consider what the distribution looks like. Also think about gross margin: does ARPU equal gross profit per user, or revenue?",
      "Key unknowns: (1) gross margin — if COGS is 40%, gross profit is $360/yr not $600, extending payback to ~13 months; (2) CAC blending — is $400 an average across all channels or just one? (3) Churn — if customers leave before month 8, payback is never achieved; (4) whether $400 CAC includes onboarding costs or just marketing spend; (5) whether ARPU is contractual or actual (usage-based)."
    ],
    referenceSolution: {
      approach: "Decompose payback period = CAC ÷ (monthly gross profit per customer). Question each variable and identify what is omitted from the simple calculation.",
      reasoning: "The claim uses revenue ($600/yr = $50/mo) as though it equals profit. Real payback = CAC ÷ (ARPU × gross margin). If gross margin is 60%, payback = $400 ÷ $30 = 13 months, not 8. Additional unknowns: (1) Customer lifetime — if average churn is 25%/year, median lifetime is ~3 years and many customers churn before payback. (2) CAC calculation — the company spends $320k/yr acquiring presumably new customers; if it acquired 200 new customers last year, CAC = $1,600, not $400. The $400 figure may be blending new and existing customers. (3) Expansion revenue — does the $600 ARPU grow over time (which helps) or is it fixed? (4) Servicing costs post-acquisition — customer success, support headcount may not be in the $400 CAC. Each unknown can materially shift profitability.",
      commonMistakes: "Accepting the payback calculation without checking gross margin. Failing to notice the CAC arithmetic inconsistency ($320k/yr implies much higher CAC if denominator is only new-year customers). Treating ARPU as equivalent to gross profit.",
      alternatives: "LTV/CAC ratio is another framing: LTV = ARPU × gross margin ÷ churn rate. With unknown churn, LTV is indeterminate. Framing the unknowns against LTV/CAC makes their impact explicit."
    },
    rubric: [
      { id: "ab-026-r1", text: "Identifies gross margin as missing from payback calculation" },
      { id: "ab-026-r2", text: "Notices the CAC arithmetic inconsistency ($320k spend vs. 800 customers)" },
      { id: "ab-026-r3", text: "Names churn as an unknown that affects whether payback is ever achieved" },
      { id: "ab-026-r4", text: "Distinguishes revenue from gross profit per customer" },
      { id: "ab-026-r5", text: "Identifies at least one additional unknown beyond gross margin and churn" }
    ]
  },

  {
    id: "ab-027",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["market-sizing"],
    difficulty: "medium",
    question: "A city government wants to build a new public library. The planning team estimates it needs to serve 'the local population of 120,000 residents.' Before sizing the building, what are the critical unknowns that determine how large and what type of facility is actually needed?",
    context: undefined,
    hints: [
      "Not all 120,000 residents will use a library equally. Think about who uses libraries, how often, for what purpose, and what competing options exist.",
      "Separate demand-side unknowns (who needs what) from supply-side unknowns (how space translates to capacity). Consider digital vs. physical library usage trends.",
      "Key unknowns: (1) active library usage rate — typically 20–40% of a population holds library cards; (2) peak simultaneous occupancy vs. annual visits — both drive different sizing decisions; (3) use-case mix — study space, children's programs, digital access, community events, book borrowing each require different floor plans; (4) demographic profile — age distribution shifts demand toward children's sections vs. quiet study areas; (5) existing library capacity and geographic distribution; (6) digital substitution trend — physical book borrowing is declining while digital and event-space use grows."
    ],
    referenceSolution: {
      approach: "Segment the 120,000 residents by usage behavior, then map usage types to space requirements. Identify which unknowns most affect total square footage versus layout.",
      reasoning: "Step 1 — Usage rate: If 30% are active users (36,000), and each visits 12× per year, total annual visits ≈ 432,000. Peak day visits (assuming 5% of annual on busiest Saturday) ≈ 21,600. If each visitor spends 1 hour and the library is open 10 hrs, peak concurrent occupancy ≈ 2,160. Step 2 — Use-case split: Industry benchmarks suggest 40% book browsing/borrowing, 30% study/computer use, 20% children's programming, 10% community events. Each function has different space/person ratios. Step 3 — Unknown demographic shifts: an aging population needs larger print and accessibility features; a young family neighborhood needs extensive children's space. Step 4 — Collection size: physical book collection drives stacks square footage; digital transition changes this dramatically. Step 5 — Site constraints: parking, adjacency to transit affects catchment and peak load timing. Without knowing these, the '120,000 population' figure alone can justify anything from a 5,000 sq ft branch to a 100,000 sq ft central library.",
      commonMistakes: "Treating 120,000 as the number of simultaneous users. Ignoring peak vs. average demand (a library must be sized for peak, not average). Overlooking the shift from physical books to digital and community-event use.",
      alternatives: "Benchmarking: the American Library Association recommends 0.4–0.6 sq ft per capita for library space, giving 48,000–72,000 sq ft — but this is an average that conceals all the unknowns above and is useful only as a sanity check."
    },
    rubric: [
      { id: "ab-027-r1", text: "Distinguishes total population from active user population" },
      { id: "ab-027-r2", text: "Identifies peak concurrent occupancy as the key sizing driver" },
      { id: "ab-027-r3", text: "Names at least 3 distinct use cases that require different space types" },
      { id: "ab-027-r4", text: "Mentions demographic profile as an unknown affecting space mix" },
      { id: "ab-027-r5", text: "Notes digital vs. physical usage trend as a structural unknown" }
    ]
  },

  {
    id: "ab-028",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["first-principles-analysis"],
    difficulty: "hard",
    question: "A pharmaceutical company's internal model projects that a new drug will achieve 35% market share within 5 years of launch, generating $2.1B in annual revenue. The model's single-page summary shows: total addressable market = $6B, share = 35%, price = $15,000/patient/year, patients treated = 140,000. Identify every significant unknown hidden in this projection and explain why each matters.",
    context: "The drug treats a chronic autoimmune disease. There are currently 2 approved competitors. The drug showed 60% efficacy vs. 45% for the leading competitor in a Phase 3 trial. Launch is 18 months away.",
    hints: [
      "Work through the revenue formula backwards: revenue = patients × price. What determines how many patients actually start and stay on this drug? What determines whether the price holds?",
      "The TAM of $6B implies a specific patient population and treatment rate. Question both. Also: a 35% share in a 3-player market sounds logical but what does the share trajectory look like and what drives physician switching?",
      "Key unknowns cluster into 4 areas: (A) Market size — is the $6B based on diagnosed+treated patients only? What is the diagnosis rate, treatment rate, and how might they change? (B) Pricing — will payers reimburse at $15k, or will formulary restrictions cap access? (C) Competitive dynamics — will competitors reprice, launch new formulations, or sign exclusive formulary deals before launch? (D) Clinical translation — 60% efficacy in trial vs. 45% competitor does not automatically translate to share; physician inertia, side-effect profiles, and real-world outcomes matter."
    ],
    referenceSolution: {
      approach: "Decompose the projection into its value drivers, then for each driver identify: what the model assumes, what the actual unknown is, and what the range of outcomes looks like.",
      reasoning: "Revenue = patients × price × adherence × net price after rebates. Breaking down each: (A) Patient count unknowns: Total autoimmune disease prevalence vs. diagnosed rate (often 50–70% for autoimmune conditions) vs. treatment-eligible rate (patients who have failed first-line therapies) vs. actually-treated rate (patient access, physician awareness). If 35% share means 140,000 patients, that implies a treated market of 400,000 — model should state this and the diagnosis/treatment funnel assumptions explicitly. (B) Price unknowns: Gross price ($15k) vs. net price after mandatory PBM rebates (often 20–40% in autoimmune), Medicaid best-price rules, and copay assistance programs. Net price could be $9k–$12k. (C) Share trajectory unknowns: 35% by year 5 requires a specific ramp — is year 1 share 5%? 15%? The NPV impact of a slow vs. fast ramp is enormous. Physician adoption follows an S-curve; key unknown is where the inflection point is. (D) Competitive response unknowns: Will competitor 1 drop price to defend share? Will they achieve formulary exclusivity by offering deeper rebates? Is competitor 3 (a biosimilar? a new MOA?) entering before year 5? (E) Trial-to-real-world translation: 60% vs. 45% efficacy was in a selected trial population. Real-world patients are older, have comorbidities, and adhere less — the real-world efficacy gap may be smaller. (F) Adherence/persistence unknowns: Chronic disease drugs have 30–50% 1-year discontinuation rates. Does the 140,000 patients figure represent prevalent users (stock) or incident starts (flow)? These are very different numbers. Any single one of these unknowns can move the revenue figure by 20–40%.",
      commonMistakes: "Focusing only on market share and ignoring net price erosion. Treating trial efficacy improvement as directly proportional to market share gain — physicians are slow to switch stable patients. Ignoring the distinction between gross and net price in pharmaceutical markets. Treating 'market share' as a static outcome rather than a trajectory with NPV implications.",
      alternatives: "A scenario tree: branch on (1) formulary access: broad vs. restricted, (2) competitive response: passive vs. aggressive repricing, (3) real-world efficacy gap: maintains vs. narrows. Even 2 branches per variable gives 8 scenarios, and the revenue range across scenarios likely spans $0.8B–$3.5B, making the single-point $2.1B projection misleading as a decision input."
    },
    rubric: [
      { id: "ab-028-r1", text: "Distinguishes gross price from net price after rebates" },
      { id: "ab-028-r2", text: "Identifies the patient funnel (prevalence → diagnosed → treated → on-drug) as a source of unknowns" },
      { id: "ab-028-r3", text: "Questions the share trajectory (ramp speed), not just the end-state 35%" },
      { id: "ab-028-r4", text: "Notes competitive response as an unknown that can undermine the projection" },
      { id: "ab-028-r5", text: "Distinguishes trial efficacy from real-world effectiveness" },
      { id: "ab-028-r6", text: "Identifies adherence/persistence as a driver of the effective patient count" }
    ]
  },

  {
    id: "ab-029",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["case-analysis"],
    difficulty: "hard",
    question: "A private equity firm is considering acquiring a chain of 50 petrol stations. Their investment thesis rests on three assumptions: (1) fuel margins will hold at 4¢/litre over the 5-year hold period, (2) convenience store revenue per station will grow 3% annually, and (3) they can reduce operating costs by 15% through centralized procurement. For each assumption, identify the critical unknowns that determine whether it will hold.",
    context: undefined,
    hints: [
      "For fuel margins, think about who sets the margin and what forces compress or expand it. For convenience store growth, think about what drives footfall and basket size. For cost reduction, think about what 'centralizing procurement' actually requires and what can go wrong.",
      "Fuel margin is a spread between wholesale and retail price — both sides can move. Convenience store growth depends on whether the 3% is real or nominal, and what macro trends (EV adoption, online grocery) might disrupt it. Cost savings require integration work with its own unknowns.",
      "Assumption 1 unknowns: oil price volatility (wholesale input), competitor pricing behavior (retail ceiling), regulatory changes (fuel duty), EV adoption reducing volume (even if margin/litre holds, absolute profit falls if litres sold decline). Assumption 2 unknowns: is 3% real or nominal growth? Inflation-adjusted, this could be flat. What is the current convenience store mix — tobacco (declining), food-to-go (growing), lottery? Online grocery delivery trends affecting top-up shopping. Assumption 3 unknowns: what % of costs are actually addressable by procurement (labor is usually 40–50% and not reducible by centralization); supplier concentration (if few suppliers, limited negotiating leverage); integration timeline (savings in year 1 or year 3?)."
    ],
    referenceSolution: {
      approach: "For each of the three assumptions, identify: (a) the mechanism by which it holds, (b) the key variable that could break it, and (c) the direction and magnitude of risk.",
      reasoning: "Assumption 1 — Fuel margin at 4¢/litre: The mechanism is that wholesale-to-retail spread stays constant. Unknowns: (i) Volume — if EV penetration grows from 5% to 20% of new car sales by hold exit, fuel demand may fall 3–5% per year, reducing absolute margin dollars even if per-litre margin holds. (ii) Competitive intensity — a hypermarket or supermarket with petrol stations nearby can absorb thin fuel margins to drive footfall, undercutting the 4¢ assumption. (iii) Regulatory risk — carbon pricing or fuel duty increases can compress retail margins if stations cannot pass through costs immediately. (iv) Crude oil volatility — sudden spikes followed by retail price stickiness can invert the margin temporarily. Assumption 2 — Convenience store 3% growth: (i) Inflation adjustment: if inflation is 3%, real growth is 0%. (ii) Category mix: tobacco accounts for ~20% of convenience store revenue in many markets and is secularly declining 5–7%/year. If tobacco mix is high here, offsetting growth in food-to-go must be strong. (iii) Footfall linkage to fuel: EV drivers do not stop for fuel; petrol stations will lose the incidental convenience shopper over time. (iv) Competition: convenience stores compete with supermarket click-and-collect, food delivery apps, and 24-hour grocery chains. Assumption 3 — 15% cost reduction via centralized procurement: (i) Cost base composition: if 45% of costs are labor and 20% are rent (both not reducible by procurement), addressable costs are ~35% of total. A 15% total reduction requires reducing addressable costs by 43% — very aggressive. (ii) Supplier concentration: if each station currently has bespoke local supplier relationships with better terms than centralized contracts can achieve, centralization could increase costs. (iii) Integration risk: procurement centralization requires IT systems, renegotiation timelines, and management bandwidth — savings may arrive in year 3, not year 1, materially affecting IRR. (iv) Labor renegotiation: if 15% includes headcount reduction, labor law or union agreements may block it.",
      commonMistakes: "Treating all three assumptions as independent when EV adoption simultaneously weakens both fuel margin (volume) and convenience store footfall. Accepting 3% growth without asking whether it is real or nominal. Underestimating the proportion of costs that are not addressable by procurement.",
      alternatives: "A sensitivity table: model the base case and then stress each assumption by its likely downside (fuel margin drops to 2¢, convenience store growth is 0%, cost savings are 8% not 15%). The combined downside scenario likely turns the investment thesis negative, revealing which assumption is the most critical to validate in due diligence."
    },
    rubric: [
      { id: "ab-029-r1", text: "Identifies EV adoption as a volume risk to fuel margin assumption even if per-litre margin holds" },
      { id: "ab-029-r2", text: "Questions whether 3% convenience store growth is real or nominal" },
      { id: "ab-029-r3", text: "Identifies that labor costs are not reducible by procurement centralization" },
      { id: "ab-029-r4", text: "Notes tobacco category decline as a headwind to convenience store growth" },
      { id: "ab-029-r5", text: "Identifies integration timeline risk as affecting IRR (savings arriving late)" },
      { id: "ab-029-r6", text: "Notes that EV adoption affects both assumption 1 and assumption 2 simultaneously" }
    ]
  },

  {
    id: "ab-030",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["cross-domain-reasoning"],
    difficulty: "hard",
    question: "A national government is modeling the economic impact of a universal basic income (UBI) pilot of $1,000/month for all adult citizens of a mid-sized city (population 200,000). The model assumes: GDP impact = total UBI payments × 1.5 fiscal multiplier. List the critical unknowns this model ignores, explain the mechanism by which each matters, and assess which unknowns are most likely to make the model systematically wrong.",
    context: "The UBI is to be funded by a temporary federal grant. The pilot runs for 2 years. The city has 30% below the poverty line and significant unemployment.",
    hints: [
      "The model uses a single fiscal multiplier applied to gross payments. Think about what determines the actual multiplier — it varies dramatically based on how recipients spend money and how the program is funded. Also, this model counts UBI payments as new GDP, but is that right?",
      "Key issues: (1) The multiplier of 1.5 is borrowed from infrastructure spending research — does it apply to cash transfers? (2) What happens to labor supply — do some workers reduce hours, reducing GDP? (3) Does the federal funding source affect the local multiplier? (4) Is this a stock or flow effect — does GDP stay elevated after the pilot ends?",
      "The most systematic error: applying a construction/infrastructure multiplier to cash transfers. Cash transfer multipliers depend heavily on marginal propensity to consume (MPC) of recipients and whether money leaks out of the local economy. If recipients spend 30% on online retailers (Amazon) and 20% on national chains, local economic multiplier is much lower than 1.5. Also the model ignores behavioral responses: some recipients may reduce work hours, reducing the tax base and partially offsetting UBI payments."
    ],
    referenceSolution: {
      approach: "Audit the model formula for hidden assumptions, identify each structural unknown, then rank by magnitude of potential bias.",
      reasoning: "The formula GDP_impact = payments × 1.5 contains several deep unknowns: (1) Source of the multiplier: The 1.5 figure is typically derived from infrastructure or government purchases multipliers. Cash transfer multipliers in the literature range from 0.5 to 1.8 depending on the economy's state, with most estimates for direct transfers to low-income populations around 1.5–2.0 in recessions but lower in near-full-employment settings. Unknown: what is the city's current output gap? (2) Local vs. national spending leakage: The fiscal multiplier assumes spending recirculates locally. If 40% of UBI spending goes to non-local retailers (online, national chains, imports), the local multiplier could be 0.9–1.1. The city's economic structure (what is produced and sold locally) is a critical unknown. (3) Labor supply response: UBI may reduce labor force participation at the margin. If 5% of recipients reduce work hours by 20%, this reduces earned income by roughly 1% of the labor pool, partially offsetting UBI gains. This effect is unknown and contested in the literature. (4) Price effects: If housing supply is inelastic, a demand shock from $1,000/month × adult population could push up rents, reducing real purchasing power. The 200,000 population city likely has ~140,000 adults; at $1,000/month = $1.68B/year in additional demand. If 30% goes to rent in an inelastic housing market, local rents may rise 10–15%, clawing back gains from non-homeowners. (5) Behavioral and psychological effects: The model treats UBI as a simple demand injection. But if recipients invest in education, mental health improves and productivity rises — a positive effect the model misses. If recipients reduce precautionary saving, that also affects the multiplier. (6) Funding source counterfactual: Federal grants do not reduce local taxes, so this is a true demand injection. However, if the model is meant to inform a permanent UBI funded by local taxes, the multiplier could be near-zero (taxes reduce spending elsewhere in the same economy). The temporary federal funding is a critical — and favorable — assumption that must be stated. Most systematic bias: The model likely overstates GDP impact because (a) local spending leakage is unaccounted for, and (b) labor supply responses are ignored. The housing price effect could further reduce real welfare gains even if nominal GDP rises.",
      commonMistakes: "Assuming the multiplier applies to the full payment amount without asking what fraction re-circulates locally. Confusing nominal GDP increase with real welfare improvement (price effects matter). Treating the labor supply response as zero by default. Not questioning whether a 2-year pilot can produce lasting GDP effects vs. temporary demand boosts.",
      alternatives: "A more rigorous model would: (1) estimate local spending share (say 65%) to get locally-circulating payments; (2) apply a locally-appropriate multiplier (say 1.2 for this city); (3) subtract estimated labor supply reduction; (4) add housing price offset. This would likely yield a GDP impact of 0.7–0.9× payments rather than 1.5×."
    },
    rubric: [
      { id: "ab-030-r1", text: "Questions whether the 1.5 multiplier is appropriate for cash transfers vs. infrastructure spending" },
      { id: "ab-030-r2", text: "Identifies local spending leakage (non-local retailers) as reducing the effective local multiplier" },
      { id: "ab-030-r3", text: "Notes labor supply response as an unknown that could partially offset UBI gains" },
      { id: "ab-030-r4", text: "Identifies housing price inflation as a real-vs-nominal GDP distortion" },
      { id: "ab-030-r5", text: "Notes that the federal funding source is a critical assumption that changes if UBI is locally funded" },
      { id: "ab-030-r6", text: "Assesses which unknowns create systematic (directional) bias vs. random uncertainty" }
    ]
  },

  // ── SENSIBLE DEFAULTS (ab-031 to ab-035) ─────────────────────────────────

  {
    id: "ab-031",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["fermi-problems"],
    difficulty: "medium",
    question: "You are estimating the annual cost of running a small urban coffee shop with no data available. Walk through the key cost categories, state a sensible default assumption for each, and briefly justify why each default is reasonable.",
    context: "The coffee shop seats 20 people, is in a mid-tier city, and is open 7 days a week, 7am–7pm.",
    hints: [
      "Break costs into the major categories: rent, labor, cost of goods sold (COGS), utilities, and other. For each, anchor to something you know — per-square-foot rent rates, minimum wage, typical food-service gross margins.",
      "A coffee shop's biggest costs are typically labor (~35%), rent (~15%), and COGS (~30%). Use these industry benchmarks as starting defaults and work backwards from plausible revenue.",
      "Defaults: Rent ~$3,500/month for 600 sq ft in a mid-tier city ($70/sq ft/yr). Labor: 2 baristas + 1 manager = ~$8,000/month total. COGS: 30% of revenue. Revenue: 100 customers/day × $5 average ticket = $500/day = $180k/year. This gives COGS ~$54k, rent ~$42k, labor ~$96k, utilities ~$6k, other ~$12k. Total ~$210k costs vs ~$180k revenue — tight, which is consistent with the thin-margin reality of coffee shops."
    ],
    referenceSolution: {
      approach: "Enumerate cost categories, assign a default value for each using real-world anchors, then sanity-check the total against known industry benchmarks.",
      reasoning: "Step 1 — Revenue baseline: 20-seat shop, 7am–7pm (12 hrs), mid-tier city. Assume each seat turns over 2× during peak hours (2 hrs morning, 2 hrs lunch) and 0.5× otherwise. Rough estimate: 80–120 customers/day. Use 100 as default. Average ticket: $4.50 (coffee) × mix = ~$5 including occasional food. Revenue = 100 × $5 × 365 = $182,500/yr. Step 2 — Cost defaults: (a) Rent: 600 sq ft (20 seats at 30 sq ft/seat) × $70/sq ft/yr = $42,000/yr. Justification: $70/sq ft is mid-market for retail in a non-gateway city. (b) Labor: 2 baristas (full-time equivalent) at $14/hr × 2,000 hrs + 1 part-time manager equivalent × 1,000 hrs × $20/hr = $56,000 + $20,000 = $76,000/yr. Add 20% for payroll taxes/benefits = $91,000. Justification: labor-heavy business, 2–3 staff for 12-hr operation is minimum. (c) COGS: 30% of revenue = $54,750. Justification: coffee gross margin is typically 65–70%; 30% COGS is standard industry default. (d) Utilities: $500/month = $6,000/yr. Justification: commercial espresso machines are energy-intensive; $500 is a reasonable lower-bound for a small space. (e) Other (POS, insurance, supplies, marketing, card fees): $1,000/month = $12,000/yr. Total costs: $42k + $91k + $55k + $6k + $12k = $206,000/yr against $182,500 revenue. EBITDA = –$23,500 (loss). This is realistic — most independent coffee shops operate near breakeven or loss; the default assumptions are consistent with industry data.",
      commonMistakes: "Assuming revenue without grounding it in footfall and ticket size. Using residential rent rates instead of commercial. Forgetting payroll taxes and benefits on top of base wages. Not doing a sanity-check against the implicit profit margin.",
      alternatives: "Top-down default: industry data suggests coffee shop revenue averages $200k–$400k/yr for independents, with a 5–15% net margin. Working from a $250k revenue mid-point with 10% margin gives $25k profit and $225k costs — consistent with the bottom-up estimate."
    },
    rubric: [
      { id: "ab-031-r1", text: "Identifies all four major cost categories: rent, labor, COGS, utilities/other" },
      { id: "ab-031-r2", text: "Anchors rent to a per-square-foot or per-month default with justification" },
      { id: "ab-031-r3", text: "Sets COGS as a percentage of revenue (not a fixed number), consistent with industry norms" },
      { id: "ab-031-r4", text: "Includes payroll taxes/benefits on top of base wages" },
      { id: "ab-031-r5", text: "Performs a sanity check against overall profitability or industry benchmarks" }
    ]
  },

  {
    id: "ab-032",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: [],
    difficulty: "medium",
    question: "A software engineering team is estimating a project with no prior experience in the domain. They have a list of 12 features, each rated S/M/L/XL by a tech lead. They need to give management a delivery timeline. What sensible defaults should the team set for translating story sizes to time, and how should they account for unknowns in their estimate?",
    context: "Team size: 4 developers, 1 QA engineer. No existing codebase — greenfield project. Target stack is familiar to the team.",
    hints: [
      "Story point estimation needs anchoring to real time. Start with a default 'points per sprint' and 'hours per point' approach, then adjust for greenfield overhead, integration testing, and uncertainty buffer.",
      "A common default for experienced teams is 1 story point = 0.5–1 day of development. On a greenfield project, add 20–30% overhead for setup, architecture decisions, and integration work not captured in feature estimates.",
      "Sensible defaults: S = 1 day, M = 3 days, L = 6 days, XL = 10 days (developer effort). A 4-developer team has ~80 dev-days per 2-week sprint (accounting for meetings, reviews, etc., use 70% utilization = 56 actual dev-days/sprint). Add 25% contingency for greenfield unknowns. Then estimate total dev-days from the feature mix and divide by 56 days/sprint."
    ],
    referenceSolution: {
      approach: "Establish size-to-duration defaults, apply utilization and overhead adjustments, sum the estimate, and add an explicit uncertainty buffer.",
      reasoning: "Step 1 — Size defaults: S = 1 dev-day, M = 3 dev-days, L = 6 dev-days, XL = 12 dev-days. These are grounded in typical agile team experience; a Medium story (3 days) can be designed, coded, and reviewed within a sprint with some buffer. Step 2 — Utilization: 4 developers × 10 days/sprint = 40 raw dev-days. Deduct: daily standup (0.25 hrs × 10 days × 4 people = 10 hrs = 1.25 dev-days), sprint ceremonies (planning, retro, review ≈ 1 day/sprint/person × 4 = 4 dev-days), code reviews (≈ 15% of time = 6 dev-days). Effective capacity ≈ 40 – 1.25 – 4 – 6 = 28.75 dev-days per sprint. Round to 28 dev-days. Step 3 — QA time: QA typically needs 30% of dev time for testing. 28 × 0.3 = 8.4 QA days per sprint. With 1 QA engineer (10 days/sprint, 80% utilization = 8 days), this is roughly balanced. Step 4 — Greenfield overhead: Add 25% to feature estimates for architecture spikes, integration setup, CI/CD pipeline, and decisions made in the moment. Step 5 — Estimate from feature mix: If the 12 features are 3S + 4M + 3L + 2XL, total dev-days = 3×1 + 4×3 + 3×6 + 2×12 = 3+12+18+24 = 57 dev-days × 1.25 (greenfield) = 71 dev-days. Sprints = 71 ÷ 28 = 2.5 sprints. Add 1 sprint buffer for QA cycles, bug fixes, and final integration = ~3.5 sprints = 7 weeks. Report as: '7–9 weeks with medium confidence; confidence would improve after the first sprint of actual velocity data.'",
      commonMistakes: "Using raw developer-days without accounting for meetings, reviews, and ceremonies. Not adding a greenfield overhead factor. Not accounting for QA time in the timeline. Giving a single-point estimate without a range or confidence level.",
      alternatives: "Three-point estimation (optimistic, most likely, pessimistic) for each feature. PERT formula: expected = (O + 4ML + P) / 6. This makes uncertainty explicit and produces a weighted estimate that is more reliable than summing point estimates."
    },
    rubric: [
      { id: "ab-032-r1", text: "Sets explicit size-to-duration defaults (S/M/L/XL mapped to days)" },
      { id: "ab-032-r2", text: "Applies a utilization rate to developer capacity (accounting for meetings and ceremonies)" },
      { id: "ab-032-r3", text: "Adds a greenfield or uncertainty overhead factor" },
      { id: "ab-032-r4", text: "Accounts for QA time separately from development time" },
      { id: "ab-032-r5", text: "Provides the estimate as a range with explicit confidence level, not a single number" }
    ]
  },

  {
    id: "ab-033",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["supply-demand"],
    difficulty: "hard",
    question: "You are advising a government on whether to build a new 4-lane highway connecting two cities 150 km apart. No traffic study has been done yet. Set sensible default assumptions for each key input in a 30-year cost-benefit analysis, and explain which defaults are most likely to introduce systematic bias.",
    context: "The two cities have populations of 800,000 and 400,000 respectively. The current route is a 2-lane road with high congestion. The highway will cost an estimated $1.2B to build and $15M/year to maintain.",
    hints: [
      "A highway CBA requires: traffic volume (vehicles/day), value of time saved per vehicle, reduction in accidents, induced demand, and discount rate. For each, think about what the standard government default is and where that default tends to be optimistic.",
      "Induced demand is the most commonly ignored factor: new highway capacity generates new trips that partially fill the new lanes, meaning travel time savings erode over time. Most government models underestimate this effect.",
      "Key defaults: traffic volume = 15,000–25,000 vehicles/day (based on population served); time saving = 30 min at $15/hr value of time = $7.50/vehicle; discount rate = 3.5–5%; induced demand factor = 30–50% of new capacity fills with new trips within 10 years. The systematic biases: (1) induced demand is typically set to zero or very low; (2) construction cost overruns average 44% for road projects globally; (3) traffic growth projections often don't model modal shift to alternatives."
    ],
    referenceSolution: {
      approach: "Set defaults for each CBA input using established benchmarks, flag the directional bias of each default, and identify which defaults have the highest expected error.",
      reasoning: "Input 1 — Traffic volume: Between two cities of 800k and 400k, a reasonable default is 15,000–20,000 vehicles/day on opening year. Justify: cities of this size in comparable countries support this range; 20,000 is mid-range for an inter-urban connection. Growth rate default: 1.5–2% per year (matching GDP per capita growth). Input 2 — Value of time: Government standard is typically 50–70% of average hourly wage for personal travel, 100% for freight. Default: $12/hr personal, $20/hr commercial. Time saving per trip: 150 km at 110 km/h vs. 150 km at 70 km/h (congested) = 81 min vs. 128 min = 47 min saving. Default: 40 min (round down for mixed traffic). Value per vehicle trip: $12 × 40/60 = $8. Input 3 — Induced demand: The fundamental law of road congestion (Downs–Thomson paradox) suggests 50–100% of new lane-miles will be filled by induced demand within 5–10 years. Standard government default: 0–20%. This is the most systematically biased assumption — governments almost universally underestimate induced demand, leading to overstated long-term time savings. Default set here: 40% induced demand (conservative but realistic). Input 4 — Accident reduction: Standard default = 25–35% reduction in fatalities and serious injuries on upgraded roads. Assign $3M per statistical life. If current road has 5 deaths/year, saving 1.5 lives/year = $4.5M/yr benefit. Input 5 — Discount rate: Government standard 3–5%. Use 3.5% (consistent with long-run risk-free rate). Lower discount rates favor long-payback projects like infrastructure. Input 6 — Construction cost: Budget is $1.2B. Apply a reference class forecast: globally, road infrastructure projects average 44% cost overrun (Flyvbjerg et al.). Adjusted expected cost: $1.2B × 1.44 = $1.73B. This default is almost always ignored by governments, creating systematic optimism bias. Systematic bias assessment: (A) Induced demand underestimation — directionally overstates long-term time savings by 20–40%; (B) Construction cost optimism — understates capital cost by ~40% on average; (C) Discount rate sensitivity — at 3.5%, a 30-year project favors infrastructure; at 7%, many road projects become NPV-negative. The combination of (A) and (B) means most government road CBAs are optimistic by 40–80% on net benefits.",
      commonMistakes: "Setting traffic growth too high (2–3% compounds to implausible volumes over 30 years). Ignoring induced demand entirely. Not applying a cost overrun adjustment. Using a single discount rate without sensitivity testing.",
      alternatives: "Reference class forecasting (Flyvbjerg): instead of building up from scratch, start with the distribution of outcomes for similar projects and adjust. For road projects, median NPV is positive but mean NPV is often negative due to cost overruns and demand shortfalls — the mean reflects what will actually happen if you build many such roads."
    },
    rubric: [
      { id: "ab-033-r1", text: "Sets explicit defaults for traffic volume, value of time, and discount rate with justifications" },
      { id: "ab-033-r2", text: "Includes induced demand as a default (not zero) and explains the mechanism" },
      { id: "ab-033-r3", text: "Applies a construction cost overrun adjustment using reference class data" },
      { id: "ab-033-r4", text: "Identifies which defaults create systematic optimism bias vs. conservative bias" },
      { id: "ab-033-r5", text: "Notes that induced demand erosion of time savings is typically the most undercounted factor" }
    ]
  },

  {
    id: "ab-034",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["estimation-chains"],
    difficulty: "hard",
    question: "A startup is launching a B2B software product and needs to model its first 3-year revenue trajectory to present to investors. The founder has no comparable company data. Walk through the sensible defaults for each stage of the go-to-market funnel and explain how to construct a defensible (but honest) model from first principles.",
    context: "The product targets mid-size companies (100–500 employees) in the manufacturing sector. ACV (annual contract value) is $24,000. The team has 2 salespeople and 1 marketer.",
    hints: [
      "A B2B SaaS funnel goes: market → ICP-qualified leads → SQL → demo → proposal → closed-won → renewals. Set a default conversion rate at each stage based on industry benchmarks, then model how a 3-person GTM team can work these numbers.",
      "Key benchmarks: MQL-to-SQL conversion ~20–30%, SQL-to-demo ~50–60%, demo-to-close ~20–25% for enterprise. Outbound-generated leads close at lower rates (~15%). A B2B SaaS rep can manage 40–60 active opportunities; 2 reps working outbound can generate ~5–8 new SQLs per week each.",
      "Bottom up: 2 reps × 6 SQLs/week = 12 SQLs/week = ~600 SQLs/year. At 50% demo rate = 300 demos. At 20% close rate = 60 new customers/year in year 1. At $24k ACV = $1.44M ARR by end of year 1 (but recognized ratably). Year 2 adds 60 more plus ~80% renewal of year 1 = 48 + 60 = 108 customers. This gives ~$2.6M ARR by end of year 2. The key uncertainty to flag: ramp time — new reps typically take 6 months to reach full productivity."
    ],
    referenceSolution: {
      approach: "Build a funnel model from activity rates upward, apply industry-standard conversion defaults at each stage, account for ramp time and churn, and explicitly flag where the defaults are weakest.",
      reasoning: "Step 1 — Sales capacity defaults: A fully ramped B2B SaaS rep in an SMB/mid-market segment can close 3–6 new accounts per month (industry default: 4). Ramp time: 3–6 months; use 4 months as default. In year 1, each rep contributes ~8 full months of production: 2 reps × 8 months × 4 accounts/month = 64 new customers in year 1. Step 2 — Revenue recognition: ACV $24k ÷ 12 = $2,000/month MRR per customer. Average customer acquired in month M generates (13-M)/12 × $24k revenue in year 1. Simple default: average customer acquired in month 7 (mid-year), contributing 6 months of revenue = $12,000. Total year 1 revenue: 64 × $12,000 = $768,000. ARR at end of year 1: 64 × $24,000 = $1,536,000. Step 3 — Churn default: B2B SaaS mid-market churn default = 8–12%/year. Use 10%. Step 4 — Year 2 build: Start with 64 customers, lose 6 (10% churn), add 64 × 1.2 (rep productivity improves after year 1 ramp) × 12 months ≈ 76 new customers. End of year 2: 64 – 6 + 76 = 134 customers. ARR: $3.2M. Step 5 — Year 3: Team likely adds 1–2 more reps by now (model conservatively: 1 additional rep, 12-month ramp). 134 – 13 + 96 = 217 customers. ARR: $5.2M. Step 6 — Flag weak defaults: (a) Rep productivity of 4 accounts/month assumes a well-defined ICP and a working playbook — neither exists in year 1. A 50% haircut (2 accounts/month in year 1) is more conservative. (b) Churn of 10% is an industry average; year 1–2 churn for unproven products is often 20–25%. (c) 6 SQLs/week per rep assumes outbound sequences are running from day 1 — in reality, the first 2–3 months are spent building messaging and sequences. Honest model: present base case, downside case (rep productivity halved, 20% churn), and describe what would need to be true for upside case to materialize.",
      commonMistakes: "Not accounting for rep ramp time (modeling full productivity from month 1). Calculating ARR as if all customers were acquired on January 1. Using optimistic churn rates for an early-stage product. Not flagging which defaults are least defensible.",
      alternatives: "Top-down sanity check: if the total ICP market is 10,000 companies, and year 3 ARR implies 217 customers, that is 2.2% market penetration — plausible for a 3-year-old startup. If the ICP is only 500 companies, 217 customers in year 3 is 43% penetration — implausible and a signal that either the ICP is too narrow or the funnel math is wrong."
    },
    rubric: [
      { id: "ab-034-r1", text: "Accounts for rep ramp time in year 1 revenue calculation" },
      { id: "ab-034-r2", text: "Recognizes revenue ratably (not as full ACV on day of close)" },
      { id: "ab-034-r3", text: "Sets an explicit churn default and applies it to build ARR trajectory" },
      { id: "ab-034-r4", text: "Uses industry benchmark conversion rates or rep productivity figures with justification" },
      { id: "ab-034-r5", text: "Explicitly flags which defaults are weakest and what would make them wrong" },
      { id: "ab-034-r6", text: "Performs a market penetration sanity check against total ICP size" }
    ]
  },

  {
    id: "ab-035",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["rebuilding-mental-models"],
    difficulty: "hard",
    question: "A policy analyst needs to estimate the 10-year fiscal impact of raising the minimum wage from $10 to $15/hour nationally with no prior econometric models available. What sensible defaults should she set for the key economic parameters, and how should she handle the parameters where economists genuinely disagree?",
    context: "The national workforce is 160 million workers. Current share earning below $15/hour is approximately 22% (35 million workers).",
    hints: [
      "The fiscal impact channels are: (1) increased payroll tax revenue from higher wages, (2) reduced SNAP/EITC/Medicaid spending as workers earn more, (3) potential employment loss reducing tax receipts and increasing unemployment spending. The big uncertainty is employment elasticity — how many jobs are lost per 1% wage increase?",
      "Employment elasticity of minimum wage is the most contested parameter. Economists' estimates range from –0.1 to –0.5 for low-wage workers (meaning a 10% wage increase reduces employment by 1–5%). The Congressional Budget Office uses –0.15 to –0.45 depending on the scenario.",
      "Default approach: use the median estimate from the empirical literature for contested parameters, present a range from low to high, and clearly label which assumptions drive the most uncertainty. Employment elasticity default: –0.1 (optimistic) to –0.3 (pessimistic). At –0.1: a 50% wage hike reduces employment by 5%, or 1.75M jobs. At –0.3: 5.25M jobs lost. The sign and scale of the fiscal impact can flip between these scenarios."
    ],
    referenceSolution: {
      approach: "Enumerate each fiscal channel, set a default for its key parameter using literature consensus where it exists and a range where there is genuine disagreement, then compute fiscal impact under each scenario.",
      reasoning: "Channel 1 — Payroll tax revenue increase: Workers kept employed and earning more. If 35M workers earn $10/hr and move to $15/hr (50% increase), and all are kept employed (optimistic), payroll tax on incremental $5/hr: 35M × $5 × 2,000 hrs/yr × 15.3% payroll tax rate = $53.6B/yr additional payroll taxes. Default: assume 75% employment retention (mid-case), giving $40B/yr. Channel 2 — Reduced means-tested benefit spending: Workers earning more may lose SNAP, EITC, and Medicaid eligibility. Default: $3,000/worker-year in reduced government transfers (consistent with CBO estimates), × 35M × 75% retention = $78.75B/yr savings. Channel 3 — Employment loss cost: Displaced workers receive unemployment insurance (~$400/week × 26 weeks = $10,400 per displaced worker) and reduce tax revenue. At –0.2 elasticity: 35M × 50% wage increase × 0.2 = 3.5M jobs lost. Cost: 3.5M × $10,400 = $36.4B UI cost; plus lost payroll taxes: 3.5M × $20,000/yr × 15.3% = $10.7B. Channel 3 total: ~$47B/yr cost. Net fiscal impact (mid-case): $40B + $78.75B – $47B = +$71.75B/yr net positive. At pessimistic elasticity (–0.4): jobs lost = 7M; cost = $94B; net = +$25B. At optimistic (–0.05): jobs lost = 0.875M; net = +$107B. Key contested parameters: (a) Employment elasticity — use –0.1 to –0.4 range; label this clearly as where economists disagree. (b) Transfer reduction — depends heavily on benefit cliff design; some workers may see partial reductions, not full elimination. Default: 60% of theoretical maximum reduction. (c) Wage pass-through to prices — higher minimum wages raise prices, potentially reducing real consumption and employment in exposed sectors. Default: 0.7% price increase per 10% minimum wage increase (standard estimate). Flag this does not appear in fiscal model but affects real-economy outcomes.",
      commonMistakes: "Using only one employment elasticity scenario and presenting it as the answer. Not separating fiscal impact from economic welfare impact (the fiscal position can improve even if total welfare falls, or vice versa). Forgetting that EITC is partially offset by the wage increase (EITC phases out as earnings rise).",
      alternatives: "Peer review anchor: CBO's 2021 analysis of a $15 minimum wage projected net federal savings of $65B/yr over 10 years in the central scenario, with a range from near-zero to $120B depending on employment effects. Use this as a reality check on the model's output."
    },
    rubric: [
      { id: "ab-035-r1", text: "Identifies all three major fiscal channels: payroll tax revenue, benefit reductions, and employment loss costs" },
      { id: "ab-035-r2", text: "Uses a range for employment elasticity reflecting genuine academic disagreement" },
      { id: "ab-035-r3", text: "Applies a retention rate to employed workers (does not assume 100% employment is maintained)" },
      { id: "ab-035-r4", text: "Recognizes EITC or means-tested benefits as both a cost savings and a partial confound" },
      { id: "ab-035-r5", text: "Presents the fiscal impact as a range tied to the elasticity assumption, not a single number" },
      { id: "ab-035-r6", text: "Distinguishes fiscal impact from broader economic welfare impact" }
    ]
  },

  // ── BOUNDING ESTIMATES (ab-036 to ab-040) ────────────────────────────────

  {
    id: "ab-036",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["orders-of-magnitude"],
    difficulty: "medium",
    question: "Without doing any research, establish a credible lower and upper bound for the total number of commercial flights that operate globally in a single day. Explain your reasoning for each bound and state what you think the true answer is closest to.",
    context: undefined,
    hints: [
      "Think about how many large airports exist globally and how many flights they each handle. Also consider the number of large aircraft manufacturers and roughly how many planes are in service.",
      "Lower bound: use a conservative number of airports and flights per airport. Upper bound: think about how many planes are physically in the air at any moment and extrapolate to a full day.",
      "Lower bound reasoning: ~200 major commercial airports globally, each handling minimum 20 flights/day = 4,000 flights (clearly too low — this misses thousands of smaller airports). Better lower bound: 1,000 airports × 10 flights/day = 10,000 flights. Upper bound: ~25,000 commercial aircraft in service globally, each flying ~1.5 flights/day average = 37,500 flights. True answer: industry data suggests ~100,000 flights/day globally pre-COVID."
    ],
    referenceSolution: {
      approach: "Establish independent lower and upper bounds using different anchors, check they bracket a plausible range, then triangulate.",
      reasoning: "Approach A — Airport anchor: IATA lists ~1,400 airports handling commercial flights. Major hubs (100+) average ~500 flights/day. Mid-tier airports (~400) average ~50 flights/day. Small airports (~900) average ~10 flights/day. Total: 100×500 + 400×50 + 900×10 = 50,000 + 20,000 + 9,000 = 79,000 flights/day. Approach B — Fleet anchor: Global commercial jet fleet ≈ 25,000–28,000 aircraft. Average utilization: long-haul aircraft fly ~1 flight/day, short-haul ~3–4 flights/day. Mix: ~30% long-haul (25,000 × 0.3 × 1 = 7,500) + 70% short-haul (25,000 × 0.7 × 3 = 52,500) = ~60,000 flights. Approach C — Passengers anchor: ~4 billion passenger-trips per year pre-COVID. Average flight carries ~150 passengers. 4B ÷ 150 = 26.7M flights/year = 73,000/day. Triangulation: three approaches give 60,000–79,000/day. Lower bound (conservative): 40,000 (assuming fleet utilization is lower, many small planes not counted). Upper bound: 120,000 (if regional/charter flights are included). Best estimate: ~80,000–100,000 commercial flights per day globally. The bounds from different anchors are consistent at the order-of-magnitude level, giving confidence in the 10^5 range.",
      commonMistakes: "Setting bounds that are too wide to be useful (e.g., 1,000 to 1 million). Not using multiple independent approaches to triangulate. Forgetting regional and short-haul carriers which represent the majority of flight frequency.",
      alternatives: "Radar coverage: air traffic control tracking data is publicly available (e.g., Flightradar24). On a typical day, ~180,000 flights are tracked globally including private aviation. Commercial-only figure is ~100,000–110,000."
    },
    rubric: [
      { id: "ab-036-r1", text: "Uses at least two independent anchoring approaches (airports, fleet, or passengers)" },
      { id: "ab-036-r2", text: "Lower bound is reasoned from a conservative interpretation, not just a guess" },
      { id: "ab-036-r3", text: "Upper bound is reasoned from a different anchor or generous interpretation" },
      { id: "ab-036-r4", text: "Both bounds bracket the true answer (~100,000) without being trivially wide" },
      { id: "ab-036-r5", text: "States a best estimate with reasoning for where within the range it falls" }
    ]
  },

  {
    id: "ab-037",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["physical-estimation"],
    difficulty: "medium",
    question: "A civil engineer needs a quick bounding estimate for how long it would take to fill the new Olympic swimming pool at a venue using a standard garden hose, in case the main fill system fails. Establish a tight lower and upper bound and derive a best estimate.",
    context: "An Olympic swimming pool holds 2,500,000 litres (2.5 megalitres). A standard garden hose at typical household pressure delivers 10–20 litres per minute.",
    hints: [
      "This is a straightforward rate problem once you bound the fill rate. Think about what makes a garden hose fast (high pressure, wide bore) vs. slow (low pressure, length reduces pressure). Then do the division.",
      "Lower bound on time: use the fastest plausible fill rate (20 L/min). Upper bound: use the slowest (10 L/min). Then think about whether a single hose or multiple hoses could be used.",
      "At 20 L/min: 2,500,000 ÷ 20 = 125,000 minutes = 86.8 days. At 10 L/min: 250,000 minutes = 173.6 days. With 10 hoses running simultaneously: 8.7–17.4 days. The answer is weeks to months — clearly impractical for a failed fill system, which is itself a useful conclusion."
    ],
    referenceSolution: {
      approach: "Bound the fill rate, compute time = volume ÷ rate for each bound, check units, and state the practical implication.",
      reasoning: "Volume: 2.5 × 10^6 litres. Fill rate range: 10–20 L/min (standard garden hose). Lower bound on time (fastest rate): 2.5×10^6 ÷ 20 = 125,000 min ÷ 60 min/hr ÷ 24 hr/day = 86.8 days ≈ 87 days. Upper bound on time (slowest rate): 2.5×10^6 ÷ 10 = 250,000 min = 173.6 days ≈ 174 days. Best estimate: 120–130 days at typical flow. With a second hose in parallel: halve the time to 60–87 days. Unit check: L ÷ (L/min) = minutes ✓. Practical conclusion: a single garden hose would take 3–6 months to fill an Olympic pool — clearly unusable as an emergency backup. Even 100 garden hoses running simultaneously would take 1–2 days, which might be feasible for a less urgent refill. This highlights why the calculation matters: it drives a decision about whether to pursue the hose option at all.",
      commonMistakes: "Forgetting to convert minutes to days (a common unit error on large numbers). Not stating the practical implication of the bound (what decision does it inform?). Forgetting that multiple hoses can run in parallel.",
      alternatives: "Cross-check with a mains water supply: a standard 25mm supply pipe delivers ~400 L/min. At that rate: 2.5×10^6 ÷ 400 = 6,250 min = 4.3 days. This is the realistic alternative to the hose and shows why mains supply vs. garden hose is a qualitatively different category."
    },
    rubric: [
      { id: "ab-037-r1", text: "Correctly bounds the garden hose flow rate at 10–20 L/min" },
      { id: "ab-037-r2", text: "Computes both lower and upper time bounds and converts units to days" },
      { id: "ab-037-r3", text: "States a best estimate within the bounded range" },
      { id: "ab-037-r4", text: "Draws a practical conclusion from the bounds (e.g., the approach is impractical)" }
    ]
  },

  {
    id: "ab-038",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["economic-estimation"],
    difficulty: "hard",
    question: "A think tank needs an order-of-magnitude estimate for the total annual cost to the UK economy of workplace procrastination. There is no published data. Establish rigorous lower and upper bounds and justify each. What key assumptions drive the spread between your bounds?",
    context: "UK workforce: approximately 33 million employed workers. Average UK salary: approximately £35,000/year.",
    hints: [
      "This requires estimating: (1) what fraction of workers procrastinate significantly, (2) how much time per day is lost to procrastination, and (3) how to translate lost time into economic cost. Each has a lower and upper bound. The product of three bounds gives bounds on the total.",
      "Lower bound approach: assume only 20% of workers procrastinate meaningfully, for 15 minutes/day, costing the fraction of their salary that corresponds to 15 min/8 hr day. Upper bound: 80% of workers, 90 minutes/day.",
      "Lower bound: 33M × 20% × 15/480 × £35,000 = 33M × 0.2 × 0.031 × £35k = £7.2B/yr. Upper bound: 33M × 80% × 90/480 × £35k = 33M × 0.8 × 0.1875 × £35k = £173B/yr. Best estimate: ~£50–70B using middle assumptions (50% workers, 45 min/day). This is 2–5% of UK GDP (~£2.3T), which is in line with US studies (~$600B/year for a US workforce 5x larger)."
    ],
    referenceSolution: {
      approach: "Decompose into three uncertain parameters (prevalence, time lost, cost per hour), bound each independently, then compound the bounds to get total cost bounds.",
      reasoning: "Parameter 1 — Prevalence (% of workers who procrastinate meaningfully): Lower bound: 20% (only serial procrastinators with clear productivity impact). Upper bound: 90% (essentially everyone procrastinates at least a little). Best estimate: 50%. Justification: research by Pychyl and Steel (2007) suggests ~20% are chronic procrastinators; however, situational procrastination likely affects a much broader population. Parameter 2 — Time lost per day (for those who procrastinate): Lower bound: 15 min/day (trivial, a few email diversions). Upper bound: 2 hours/day (consistent with severe cases studied in laboratory settings). Best estimate: 45–60 min/day. Justification: Surveys of workers consistently find 25–75 minute estimates; 45 minutes is a reasonable central case. Parameter 3 — Cost per hour: Use fully-loaded labor cost (salary + National Insurance + pension + overhead). Average salary £35k/yr ÷ 1,800 working hours = £19.4/hr. Add 30% overhead: £25/hr. Bounds: £15/hr (just salary) to £30/hr (full overhead). Lower bound total: 33M × 20% × 0.25 hrs/day × 220 working days × £15 = 33M × 0.2 × 0.25 × 220 × £15 = 33M × 165 = £5.4B/yr. Upper bound total: 33M × 90% × 2 hrs/day × 220 × £30 = 33M × 0.9 × 2 × 220 × £30 = 33M × £11,880 = £392B/yr. Best estimate: 33M × 50% × 0.75 × 220 × £25 = 33M × £2,062.5 = £68B/yr. Note: bounds span two orders of magnitude (£5B–£400B), revealing enormous parameter uncertainty. Sanity check: £68B = ~3% of UK GDP. US research suggests procrastination costs ~2–5% of GDP, so this is consistent. Key assumption driving spread: time lost per procrastinating worker (a 12× range vs. 4.5× range for prevalence). Reducing uncertainty on time-per-worker would tighten the estimate most efficiently.",
      commonMistakes: "Applying the full average salary to all 33M workers without first segmenting by prevalence. Not separating the three parameters and bounding each independently. Not identifying which parameter drives the most uncertainty in the final range.",
      alternatives: "Lost output approach: if procrastination reduces effective work hours by X%, GDP loss = UK GDP × X%. At 3%, loss = £70B. This top-down approach gives a similar answer and serves as a useful sanity check."
    },
    rubric: [
      { id: "ab-038-r1", text: "Decomposes the problem into at least three independent parameters" },
      { id: "ab-038-r2", text: "Sets and justifies a lower and upper bound for each parameter separately" },
      { id: "ab-038-r3", text: "Correctly compounds parameter bounds to get total cost bounds" },
      { id: "ab-038-r4", text: "Uses a loaded labor cost (not just salary) for the cost-per-hour parameter" },
      { id: "ab-038-r5", text: "Identifies which parameter drives the widest uncertainty in the final range" },
      { id: "ab-038-r6", text: "Performs a GDP-percentage sanity check on the best estimate" }
    ]
  },

  {
    id: "ab-039",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["sanity-checks"],
    difficulty: "hard",
    question: "A startup claims it can reduce food waste in UK supermarkets by 40% through AI-powered demand forecasting, generating £800M in annual savings for a 10-supermarket chain. Before accepting this claim, establish bounding estimates for each component and identify which parts of the claim are implausible.",
    context: "UK supermarkets collectively waste approximately £3B of food per year at retail. The 10-supermarket chain represents roughly 15% of UK grocery market share.",
    hints: [
      "Work backwards: if the chain has 15% market share, its food waste share is ~£450M/yr (15% × £3B). A 40% reduction would save £180M, not £800M. So one of the assumptions is already inconsistent. Identify which one and what the correct range should be.",
      "The inconsistency: £800M saving from a chain with 15% market share and £450M total waste implies saving 178% of total waste — impossible. Either the chain's share is higher, the total UK food waste figure is larger, or the savings figure is wrong.",
      "Correct calculation: £3B × 15% = £450M waste at this chain. 40% reduction = £180M. Even if we're generous with total UK waste (some estimates go to £5B at retail), 15% × £5B × 40% = £300M. The £800M figure is implausible by a factor of 3–5× unless the scope is much larger than a 10-supermarket chain or the market share figure is wrong."
    ],
    referenceSolution: {
      approach: "Establish upper bounds for each element of the claim, identify the arithmetic inconsistency, and assess which assumption would need to change to make the claim valid.",
      reasoning: "Step 1 — Total UK supermarket food waste: Published estimates range from £1.9B (WRAP 2015) to £3.5B (including supply chain) to £5B+ (including portion that is markdown not waste). Use £3B retail waste as central estimate, noting the range is £2B–£5B. Step 2 — Chain's share of waste: 15% market share implies roughly 15% of waste = £450M. However, waste rate may not scale linearly with market share — large discounters may waste less per £ of sales. Bound: £300M–£600M. Step 3 — AI demand forecasting waste reduction: Academic literature and case studies (e.g., Walmart) suggest 20–30% reduction in waste is achievable with excellent demand forecasting. The 40% claim is at the optimistic edge of documented outcomes. Bound: 15%–40%. Step 4 — Financial saving from waste reduction: Avoided waste = reduced stock purchased + avoided disposal cost. Each £ of food waste represents: ~£0.65 purchase cost + £0.05–0.10 disposal cost. Total recoverable saving: up to £0.75 per £ of waste prevented. Step 5 — Upper bound on savings: £600M × 40% × £0.75/£ waste = £180M. Even at the most generous parameters: £600M × 40% × £0.75 = £180M. The £800M claim requires either: (a) the chain has 50%+ market share (implausible), or (b) the total UK retail food waste is £15B+ (implausible), or (c) the model counts revenue recapture from markdown prevention (sold at discount rather than wasted) — this is a legitimate way to expand the figure but should be disclosed. Verdict: the £800M figure is implausible by factor 3–4× on central assumptions. The most credible bounded range is £100M–£200M/year.",
      commonMistakes: "Accepting the £800M figure without checking it against total waste for this chain. Not distinguishing purchase cost saved from revenue recaptured from markdowns. Treating the 40% reduction figure as plausible without benchmarking it against actual AI waste reduction case studies.",
      alternatives: "Revenue recapture framing: if 'savings' includes the margin recaptured by selling reduced-price items rather than writing them off, the calculation changes. A £1 item sold at £0.40 markdown vs. £0 waste generates £0.40 revenue. If 50% of 'waste' is actually markdown-able, the total addressable saving increases. But the startup should make this explicit, and it still does not reach £800M for a 15% market share chain."
    },
    rubric: [
      { id: "ab-039-r1", text: "Computes the chain's estimated food waste from market share and total UK figure" },
      { id: "ab-039-r2", text: "Identifies the arithmetic inconsistency (£800M > total waste for a 15% chain)" },
      { id: "ab-039-r3", text: "Bounds the achievable waste reduction percentage against published benchmarks" },
      { id: "ab-039-r4", text: "Accounts for the fact that not all waste value is recoverable (purchase cost fraction)" },
      { id: "ab-039-r5", text: "Proposes what assumption would need to change for £800M to be valid, and assesses plausibility" }
    ]
  },

  {
    id: "ab-040",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["mece-decomposition"],
    difficulty: "hard",
    question: "A satellite internet provider claims it can serve 'the entire unconnected world' — approximately 3 billion people — with its constellation of 1,000 satellites. Establish bounding estimates for whether 1,000 satellites is physically sufficient for this task, and identify the most critical constraint.",
    context: "Each satellite is in Low Earth Orbit (LEO) at ~550 km altitude. Each satellite can serve users within a roughly 1,100 km radius footprint on the ground. The satellites use Ka-band with approximately 20 Gbps per satellite total capacity.",
    hints: [
      "There are two separate constraints: geographic coverage (can 1,000 satellites cover the physical area?) and bandwidth (can 20 Gbps × 1,000 satellites serve 3 billion users?). Check both independently.",
      "Geographic coverage: Earth's surface area is ~510M km². Each satellite footprint: π × 1,100² ≈ 3.8M km². If satellites provide continuous coverage, you need Earth surface ÷ footprint area = ~135 satellites just for area coverage (ignoring orbital mechanics). But not all satellites cover the right areas simultaneously. Bandwidth: 3B users × minimum bandwidth = total needed. Even at 1 Mbps, 3B users need 3 × 10^18 bits per second = 3 exabits/s. 1,000 satellites × 20 Gbps = 20 × 10^12 bits/s = 20 terabits/s. That covers 20 million users at 1 Mbps, not 3 billion.",
      "The binding constraint is bandwidth, not coverage. 1,000 satellites at 20 Gbps each provide 20 Tbps total. Serving 3B users even at 256 Kbps (minimal internet) requires 768 Tbps — 38× more capacity than 1,000 satellites provide."
    ],
    referenceSolution: {
      approach: "Decompose the claim into two separate feasibility checks (coverage area and bandwidth), bound each, identify which is the binding constraint, and state what it would take to actually serve 3 billion users.",
      reasoning: "Check 1 — Geographic coverage: Earth's surface ≈ 510M km². LEO satellite at 550 km altitude has a coverage radius ≈ 1,100 km (using a 45° elevation angle mask). Footprint area = π × 1,100² ≈ 3.8M km². 'Slots' needed for full Earth coverage: 510M ÷ 3.8M = ~134 simultaneous in-view satellites. 1,000 satellites in a well-designed constellation can provide continuous global coverage — coverage is not the binding constraint. But: unconnected populations are concentrated in Africa, South Asia, and Southeast Asia. These regions have the highest population density of unconnected users. Coverage of these high-density areas requires more satellites per unit area, not just global average. This is a nuance but not the binding constraint. Check 2 — Bandwidth: 1,000 satellites × 20 Gbps = 20,000 Gbps = 20 Tbps total. The 3 billion unconnected users: not all simultaneously active. Assume 10% concurrent usage (conservative internet default): 300M active users. Minimum useful bandwidth: 1 Mbps per active user (email, messaging, basic web). Required bandwidth: 300M × 1 Mbps = 300,000 Gbps = 300 Tbps. Gap: 300 Tbps needed vs. 20 Tbps available = 15× shortfall. Even at 128 Kbps (just SMS/email): 300M × 0.000128 Gbps = 38,400 Gbps = 38 Tbps — still 2× short. At 1% concurrent usage: 30M users × 1 Mbps = 30 Tbps — still 1.5× short of available capacity. Conclusion: Bandwidth is the binding constraint by 1.5–15× depending on usage assumptions. Providing minimum internet speeds to all 3 billion users simultaneously is not possible with 1,000 satellites at 20 Gbps each. To serve 3 billion at 1% concurrent usage and 1 Mbps: need 30,000 Gbps ÷ 20 Gbps/satellite = 1,500 satellites minimum. For 10% concurrent: 15,000 satellites. Note: Starlink is deploying ~12,000+ satellites to serve a much smaller target market at higher speeds, which is consistent with this calculation.",
      commonMistakes: "Only checking one constraint (coverage) and not checking bandwidth. Assuming all 3 billion users would be simultaneously active (10% concurrent is a standard internet default). Not checking whether the calculation is internally consistent with known systems like Starlink.",
      alternatives: "Cross-check with Starlink: Starlink targets ~100M subscribers at speeds of 50–200 Mbps using ~12,000 satellites. That implies 600–2,400 Gbps per million users, or 6,000–24,000 Gbps for 10M simultaneous users. At this standard, serving 3B users at even low speeds requires 10,000–100,000 satellites, consistent with the bandwidth calculation above."
    },
    rubric: [
      { id: "ab-040-r1", text: "Separates the problem into coverage and bandwidth constraints and checks both" },
      { id: "ab-040-r2", text: "Correctly computes total satellite bandwidth (1,000 × 20 Gbps = 20 Tbps)" },
      { id: "ab-040-r3", text: "Applies a realistic concurrent usage rate (not 100% simultaneous)" },
      { id: "ab-040-r4", text: "Identifies bandwidth (not coverage) as the binding constraint" },
      { id: "ab-040-r5", text: "Estimates the shortfall factor (how many more satellites would be needed)" },
      { id: "ab-040-r6", text: "Validates against a known real-world system (e.g., Starlink) as a sanity check" }
    ]
  },

  // ── SENSITIVITY ANALYSIS (ab-041 to ab-045) ──────────────────────────────

  {
    id: "ab-041",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["unit-economics"],
    difficulty: "medium",
    question: "A restaurant owner is deciding whether to add delivery service. His model projects: 50 new delivery orders/day at $22 average ticket, 30% food COGS, 20% platform fee to the delivery app, yielding $5.50 profit per order. He concludes delivery adds $100,375/year. Which single assumption, if changed, has the largest impact on the conclusion, and what is the break-even value for that assumption?",
    context: undefined,
    hints: [
      "Work out the profit per order calculation first to verify the $5.50 figure. Then vary each assumption by a fixed percentage (say ±20%) and see which one moves the output most. The percentage change in output relative to percentage change in input is the elasticity.",
      "Profit per order = revenue – COGS – platform fee = $22 – ($22×0.30) – ($22×0.20) = $22 – $6.60 – $4.40 = $11. Wait — this doesn't match the $5.50. What's missing? There must be additional costs (packaging, driver incentive, etc.). Identifying the missing cost is itself a key insight.",
      "The $5.50 implies additional costs of ~$5.50 ($22 – $6.60 – $4.40 – $5.50 = $5.50 in missing costs). Likely packaging ($1) + incremental kitchen labor ($3–4) + other ($0.50). With this full cost structure, sensitivity to order volume is highest: losing 10 orders/day (to 40/day) costs $20,075/year. Platform fee sensitivity is also high: at 30% platform fee, profit drops to $3.30/order and annual profit drops to $60,225 — a 40% reduction."
    ],
    referenceSolution: {
      approach: "Reconstruct the full cost model, identify the missing cost category, then perform a one-at-a-time sensitivity analysis across all key assumptions.",
      reasoning: "Step 1 — Reconcile the model: $22 ticket × (1 – 0.30 COGS – 0.20 platform fee) = $22 × 0.50 = $11 contribution. But reported profit is $5.50. The gap = $5.50/order in unmodeled costs. Likely: packaging ($1), incremental labor per delivery order ($3), other overheads ($1.50). Revised model: profit = $22 – $6.60 – $4.40 – $5.50 = $5.50 ✓. Step 2 — Annual baseline: 50 orders/day × $5.50 × 365 = $100,375. Step 3 — Sensitivity analysis: (a) Order volume: –10 orders (50→40): $5.50 × 40 × 365 = $80,300. Impact: –$20,075 (–20%). A 20% drop in assumptions → 20% drop in profit. Elasticity = 1.0. (b) Average ticket (–10%, $22→$19.80): New contribution = $19.80 × 0.50 – $5.50 = $4.40. Annual = $4.40 × 50 × 365 = $80,300. Impact: –$20,075 (–20%). Elasticity = 2.0 (10% ticket change → 20% profit change) because fixed costs per order stay constant while revenue drops. (c) Platform fee (20%→25%): New fee = $22×0.25 = $5.50. Profit = $22 – $6.60 – $5.50 – $5.50 = $4.40/order. Annual = $80,300. Impact: –$20,075. Elasticity similar to ticket. (d) COGS (30%→35%): New COGS = $7.70. Profit = $22 – $7.70 – $4.40 – $5.50 = $4.40. Annual = $80,300. Step 4 — Break-even: At what order volume does profit = 0? 0 = profit/order × volume × 365. Profit/order must be ≥ 0. The $5.50 fixed cost per order exists regardless of volume. If ticket price or other variable costs change such that margin is negative, delivery always loses money. The 'break-even order price' is: ($6.60 + $4.40 + $5.50) ÷ (1) = revenue must be ≥ $16.50/order. Current $22 provides $5.50 headroom. Key finding: average ticket is the most sensitive assumption because it drives both revenue and fixed-cost coverage simultaneously. A 25% drop in average ticket ($22→$16.50) makes delivery exactly break even. This is plausible if delivery customers order fewer items than dine-in customers.",
      commonMistakes: "Not noticing the $5.50 gap in the cost model. Treating sensitivity analysis as only varying one assumption at a time without noting that in reality assumptions can move together (ticket price and order volume are correlated). Not computing a break-even value for the most sensitive assumption.",
      alternatives: "A tornado chart would rank all assumptions by their impact on annual profit, with order volume, ticket size, and platform fee all showing similar elasticity — confirming that no single assumption dominates, and that a combined moderate downside (fewer orders at lower ticket and higher platform fee) quickly erases the profit."
    },
    rubric: [
      { id: "ab-041-r1", text: "Identifies the $5.50 gap between contribution margin and reported profit (missing costs)" },
      { id: "ab-041-r2", text: "Tests at least 3 assumptions in a one-at-a-time sensitivity analysis" },
      { id: "ab-041-r3", text: "Computes the elasticity or % impact of each assumption change" },
      { id: "ab-041-r4", text: "Identifies average ticket as a high-sensitivity input (drives both revenue and contribution simultaneously)" },
      { id: "ab-041-r5", text: "States the break-even value for the most critical assumption" }
    ]
  },

  {
    id: "ab-042",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: [],
    difficulty: "medium",
    question: "A model for the number of electric vehicles (EVs) on UK roads in 2030 assumes: 10% annual growth in EV sales, starting from 800,000 EVs in 2024. A policy analyst asks: 'How sensitive is the 2030 projection to the growth rate assumption?' Calculate the 2030 fleet size at three growth rate scenarios (5%, 10%, 15%) and explain what the sensitivity pattern reveals about the decision to use 10% as the central case.",
    context: undefined,
    hints: [
      "Use the compound growth formula: fleet in 2030 = 800,000 × (1 + growth rate)^6. Compute this for 5%, 10%, and 15%. Then compare the outputs — is the relationship between growth rate and fleet size linear or non-linear?",
      "At 10%: 800,000 × 1.1^6 = 800,000 × 1.772 = 1,417,600. At 5%: 800,000 × 1.05^6 = 800,000 × 1.340 = 1,072,000. At 15%: 800,000 × 1.15^6 = 800,000 × 2.313 = 1,850,400.",
      "The output range is 1.07M to 1.85M — a factor of 1.73× despite only a ±5 percentage point change in growth rate. This reveals high sensitivity to the growth rate assumption over 6 years of compounding. If growth rate is uncertain by ±5pp, the fleet projection is uncertain by almost 2×, which may make 2030 infrastructure planning difficult."
    ],
    referenceSolution: {
      approach: "Apply the compound growth formula at each scenario, compute the range and ratio of outputs, and interpret the sensitivity pattern for the decision maker.",
      reasoning: "Calculation: Base = 800,000 EVs in 2024. Years to 2030 = 6. At 5%: 800,000 × (1.05)^6 = 800,000 × 1.3401 = 1,072,080 ≈ 1.07M. At 10%: 800,000 × (1.10)^6 = 800,000 × 1.7716 = 1,417,280 ≈ 1.42M. At 15%: 800,000 × (1.15)^6 = 800,000 × 2.3131 = 1,850,480 ≈ 1.85M. Range: 1.07M to 1.85M — a 73% spread from lowest to highest (relative to the 10% base case: –25% to +30%). The relationship is non-linear (exponential): moving from 10% to 15% (+5pp) adds 432,000 vehicles, while moving from 5% to 10% (+5pp) adds 345,000. The upside is larger than the downside in absolute terms. Implications for using 10% as central case: (1) If 10% is the mid-point of a symmetric uncertainty range, the fleet estimate is not symmetric — the mean expectation is slightly above 1.42M due to the convex (exponential) relationship. A more accurate central estimate would average the three scenarios: (1.07+1.42+1.85)/3 = 1.45M. (2) Infrastructure planning should be stress-tested against the 1.85M scenario (15% growth) because: public charging infrastructure has long build times and undersupply creates a political problem; oversupply is less damaging. (3) The sensitivity implies that a ±50% change in growth rate (5% to 15%) causes a ±30% change in fleet size — this is meaningful non-linearity that a linear assumption would miss. Policy takeaway: report the full range (1.1M–1.85M) and plan infrastructure for the upper bound.",
      commonMistakes: "Using simple (not compound) growth: 800,000 × (1 + 0.10 × 6) = 800,000 × 1.6 = 1.28M — significantly underestimates due to ignoring compounding. Not noting the asymmetry of the sensitivity (upside larger than downside in absolute terms). Treating the three-scenario range as a probability distribution without noting that the scenarios are not equally likely.",
      alternatives: "Monte Carlo: if growth rate is uniformly distributed between 5%–15%, the expected fleet is (mean of uniform) at (1.07+1.85)/2 = 1.46M, which is slightly above the point estimate at 10% due to Jensen's inequality (E[f(x)] > f(E[x]) for convex functions)."
    },
    rubric: [
      { id: "ab-042-r1", text: "Applies compound growth formula correctly (not simple growth)" },
      { id: "ab-042-r2", text: "Computes correct fleet sizes for all three scenarios (approx. 1.07M, 1.42M, 1.85M)" },
      { id: "ab-042-r3", text: "Notes the non-linearity (upside scenario larger than downside in absolute terms)" },
      { id: "ab-042-r4", text: "Interprets what the sensitivity spread means for infrastructure planning decisions" },
      { id: "ab-042-r5", text: "Notes that the 73% output range from a ±5pp input range indicates high sensitivity" }
    ]
  },

  {
    id: "ab-043",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["competitive-analysis"],
    difficulty: "hard",
    question: "A venture capital firm is modeling returns on a $5M investment in a B2B SaaS company. Their model projects a 6× return in 5 years based on: 40% annual ARR growth, 7× ARR exit multiple at sale, and 20% annual dilution from new funding rounds. Perform a structured sensitivity analysis showing which of these three assumptions is most critical to the return, and identify the compound scenario that just fails to return the fund (i.e., returns less than 1×).",
    context: "Current ARR: $2M. The fund invested at a $10M post-money valuation (50% ownership after investment).",
    hints: [
      "The return formula: exit value = ARR in year 5 × exit multiple. Investor's share = 50% × (1 – dilution)^5. Return multiple = (exit value × investor's share) ÷ $5M. First verify the 6× return under the stated assumptions, then vary each assumption one at a time.",
      "ARR in year 5 at 40% growth: $2M × 1.4^5 = $2M × 5.378 = $10.76M. Exit value = $10.76M × 7 = $75.3M. Investor's share after 20% annual dilution for 5 years: 50% × 0.8^5 = 50% × 0.328 = 16.4%. Investor's proceeds = $75.3M × 16.4% = $12.35M. Return multiple = $12.35M ÷ $5M = 2.47×. Wait — this doesn't match the claimed 6×. What's wrong in the model?",
      "The 6× claim may assume dilution applies differently, or the starting ownership is higher, or additional rounds reset the calculation. The discrepancy itself is the key finding — the stated assumptions do not produce the claimed 6× return. The actual return under stated assumptions is ~2.5×. To get 6×: need ARR in year 5 × 7 × ownership% = $30M, so ownership × ARR must be high enough. This means the model has an internal inconsistency worth flagging to the VC."
    ],
    referenceSolution: {
      approach: "Build the return model from stated assumptions, verify (or refute) the claimed return, then perform one-at-a-time sensitivity analysis and find the 1× break-even surface.",
      reasoning: "Step 1 — Base case verification: ARR year 5 = $2M × 1.4^5 = $2M × 5.378 = $10.76M. Exit value at 7× ARR = $75.3M. Ownership after 5 years of 20% dilution: 50% × 0.8^5 = 50% × 0.3277 = 16.4%. Investor proceeds = $75.3M × 16.4% = $12.35M. Return = $12.35M ÷ $5M = 2.47×, not 6×. The claim of 6× is inconsistent with stated assumptions. The discrepancy matters: either the dilution is much lower (perhaps 20% total, not per year), or there is a pro-rata provision that maintains ownership, or the starting ownership is higher than 50%. With zero dilution: $75.3M × 50% = $37.65M. Return = 7.53×. With total (not annual) 20% dilution: ownership = 40%, proceeds = $30.1M, return = 6.03×. The 6× return is consistent only if the 20% figure means total dilution over 5 years, not annual dilution. Step 2 — Sensitivity to each assumption (using corrected total-dilution interpretation, 40% ownership at exit): Baseline: $10.76M × 7 × 0.40 = $30.1M → 6.02×. Growth rate sensitivity (ARR growth 40%→30%): $2M × 1.3^5 = $7.43M × 7 × 0.40 = $20.8M → 4.16×. Growth rate sensitivity (40%→50%): $2M × 1.5^5 = $15.19M × 7 × 0.40 = $42.5M → 8.51×. Change from ±10pp: –1.86× to +2.49×. Exit multiple sensitivity (7×→5×): $10.76M × 5 × 0.40 = $21.5M → 4.3×. (7×→9×): $10.76M × 9 × 0.40 = $38.7M → 7.75×. Change from ±2×: –1.72× to +1.73×. Dilution sensitivity (40%→30% ownership): $10.76M × 7 × 0.30 = $22.6M → 4.52×. (40%→50%): $10.76M × 7 × 0.50 = $37.65M → 7.53×. Step 3 — Ranking by sensitivity: Growth rate has the largest absolute impact (compounded over 5 years), followed by dilution, then exit multiple. Step 4 — Break-even (1× return) scenarios: Need proceeds = $5M. $5M = ARR_5 × multiple × ownership ÷ $5M → ARR_5 × multiple × ownership = $25M. At baseline ownership 40% and multiple 7×: ARR_5 must be ≥ $8.93M, requiring growth ≥ 35% per year. If growth drops to 20% and multiple falls to 5× with ownership diluted to 30%: ARR_5 = $2M × 1.2^5 = $4.98M × 5 × 0.30 = $7.47M → return = 1.49× (still above 1×). To fail at 1×: growth 15%, multiple 4×, ownership 25%: $2M × 1.15^5 = $4.02M × 4 × 0.25 = $4.02M → 0.8×. This compound downside scenario (15% growth, 4× multiple, 25% ownership) returns 80 cents on the dollar. Critical finding: individually, each assumption can drop substantially and the investment still returns > 1×. The fund only fails in a compound downside scenario where all three assumptions are unfavorable simultaneously.",
      commonMistakes: "Not catching the internal inconsistency (6× claim inconsistent with annual dilution assumption). Varying only one assumption when the problem asks for compound scenarios. Not distinguishing annual from total dilution.",
      alternatives: "A grid analysis across growth rate (20%, 30%, 40%, 50%) and exit multiple (4×, 5×, 7×, 9×) with fixed ownership (40%) shows the full return surface and reveals that the 1× return line sits at roughly growth=20%, multiple=5× — useful for due diligence prioritization."
    },
    rubric: [
      { id: "ab-043-r1", text: "Correctly builds the return model and identifies the inconsistency with the 6× claim" },
      { id: "ab-043-r2", text: "Resolves the inconsistency (annual vs. total dilution) and verifies the 6× return under the corrected interpretation" },
      { id: "ab-043-r3", text: "Performs one-at-a-time sensitivity on all three assumptions" },
      { id: "ab-043-r4", text: "Ranks assumptions by sensitivity and identifies ARR growth as most impactful (due to compounding)" },
      { id: "ab-043-r5", text: "Finds a specific compound scenario that returns less than 1× (with all three assumptions deteriorated)" },
      { id: "ab-043-r6", text: "Notes that individual assumption changes do not cause failure — only combination of bad outcomes does" }
    ]
  },

  {
    id: "ab-044",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["decomposition-to-fundamentals"],
    difficulty: "hard",
    question: "A climate model estimates that a proposed reforestation program of 100 million hectares of new forest will sequester 3 gigatonnes of CO₂ per year by 2050. A critic argues this estimate is 'hopelessly optimistic.' Using sensitivity analysis, examine the key assumptions that determine sequestration, quantify the range of plausible outcomes, and assess whether the optimism critique is justified.",
    context: "The program targets degraded lands across tropical, temperate, and boreal zones. Tropical forests sequester ~10 tonnes CO₂/ha/yr; temperate ~5 tonnes/ha/yr; boreal ~2 tonnes/ha/yr. Typical reforestation projects have 30–60% survival rates at 10 years.",
    hints: [
      "The sequestration formula is: sequestered CO₂ = area × survival rate × sequestration rate per hectare. The 3 Gt implies an average of 30 tonnes/ha/yr across 100M ha, which is above even the tropical maximum. Something doesn't add up. Identify the issue.",
      "30 tonnes/ha/yr (implied by 3 Gt ÷ 100M ha) is 3× the tropical rate. This means either the area is wrong, the per-hectare rate is overstated, or the estimate includes carbon storage in soil and wood products. The survival rate factor alone would reduce actual sequestration by 40–70%. A realistic range is 0.5–1.5 Gt/yr, not 3 Gt/yr.",
      "Sensitivity levers: (1) biome mix — if 50% tropical, 30% temperate, 20% boreal, weighted average = 0.5×10 + 0.3×5 + 0.2×2 = 7.4 t/ha/yr; (2) survival rate — at 50% survival: 7.4 × 0.5 = 3.7 t/ha/yr; (3) establishment lag — by 2050, trees planted in 2025 have 25 years of growth but start near zero; (4) additionality — does this actually prevent deforestation elsewhere or just offset it?"
    ],
    referenceSolution: {
      approach: "Reverse-engineer the implied per-hectare rate, compare against known sequestration rates, apply a structured sensitivity analysis across biome mix, survival rate, and time lag, then assess the direction and likely magnitude of model error.",
      reasoning: "Step 1 — Implied rate check: 3 Gt ÷ 100M ha = 30 t CO₂/ha/yr. This exceeds tropical forest sequestration rates (~10 t/ha/yr for young fast-growing trees, declining as forests mature to ~2–4 t/ha/yr). The model appears to use young-tree growth rates as a permanent annual rate — a significant optimism bias. Step 2 — Biome mix sensitivity: Program targets tropical (50%), temperate (30%), boreal (20%). Weighted sequestration rate: (0.5×10) + (0.3×5) + (0.2×2) = 5 + 1.5 + 0.4 = 6.9 t/ha/yr. This is already less than 30 — so the model's starting point seems to assume all planting is at peak tropical rate. Step 3 — Survival rate: 50% survival reduces effective area to 50M ha: 50M × 6.9 = 345 Mt/yr ≈ 0.35 Gt/yr. At 70% survival (optimistic): 70M × 6.9 = 483 Mt/yr ≈ 0.48 Gt/yr. Step 4 — Establishment lag: Trees planted in 2025 don't reach full sequestration rates until 2035–2040 in tropical zones, 2045 in temperate, never fully in boreal by 2050. Average realization by 2050 is perhaps 60% of potential: 0.48 × 0.6 = 0.29 Gt/yr. Step 5 — Additionality risk: If 20% of planted areas displace grasslands or other ecosystems with their own carbon stocks, the net sequestration benefit is reduced. And if 10% of the forested area is subsequently re-cleared (deforestation risk), that further reduces net impact. Step 6 — Plausible range: Low scenario (poor biome mix, 30% survival, high displacement): ~0.1–0.15 Gt/yr. Central scenario (mixed biome, 50% survival, moderate additionality): ~0.3–0.5 Gt/yr. High scenario (tropical-heavy, 70% survival, high additionality): ~0.8–1.2 Gt/yr. The 3 Gt/yr claim is 2.5–30× above the plausible range. The critic's characterization of 'hopelessly optimistic' is justified on the numbers. However: nuance — if the model includes soil carbon, wood products carbon (harvested timber), and ocean carbon flux effects, the figure could be higher, but these effects are much harder to verify and often double-counted. The key optimism drivers are: (1) using peak young-tree rates as permanent, (2) ignoring survival rate, (3) ignoring establishment lag.",
      commonMistakes: "Accepting the 3 Gt figure without checking the implied per-hectare rate. Ignoring the difference between young-tree growth rates and mature forest steady-state sequestration. Not accounting for survival rate. Treating additionality as binary (either fully counted or ignored) rather than probabilistic.",
      alternatives: "Cross-check: the IPCC AR6 report estimates nature-based solutions including reforestation can contribute 1–2 Gt CO₂/yr in cost-effective mitigation by 2030 globally under ambitious scenarios. A single program claiming 3 Gt/yr would represent 150–300% of all nature-based solutions globally — a clear red flag from an external benchmark."
    },
    rubric: [
      { id: "ab-044-r1", text: "Computes the implied sequestration rate (30 t/ha/yr) and identifies it as inconsistent with known rates" },
      { id: "ab-044-r2", text: "Applies a biome-mix weighted average rate correctly" },
      { id: "ab-044-r3", text: "Applies a survival rate to reduce effective area" },
      { id: "ab-044-r4", text: "Accounts for establishment lag (trees don't sequester fully from year 1)" },
      { id: "ab-044-r5", text: "Derives a plausible range (approximately 0.15–1.2 Gt/yr) substantially below the 3 Gt claim" },
      { id: "ab-044-r6", text: "Validates against an external benchmark (e.g., IPCC nature-based solutions estimate)" }
    ]
  },

  {
    id: "ab-045",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["ambiguous-problem-solving"],
    difficulty: "hard",
    question: "A hospital is deciding whether to implement a new AI diagnostic tool that, in trials, improved early cancer detection rates from 72% to 85%. The health economics team estimates the tool saves 40 QALYs (quality-adjusted life years) per year at the hospital, justifying a purchase price of £2M (at a cost-effectiveness threshold of £30,000/QALY). Perform a sensitivity analysis to identify which assumptions would make this investment not cost-effective, and what real-world factors could make the trial-based QALY estimate unreliable.",
    context: "The hospital screens 5,000 patients per year for this cancer type. The 5-year survival rate for early-stage detection is 90%; for late-stage detection it is 30%. Average QALYs gained per additional early detection: 8 QALYs.",
    hints: [
      "Start by independently calculating the implied number of additional early detections per year from the given data, and check whether this is consistent with the 40 QALYs claim.",
      "Additional early detections = 5,000 × (85% – 72%) = 5,000 × 13% = 650 additional early detections. But wait — not all of these actually change outcomes: some late-stage patients would have been caught by other means or survived anyway. The incremental survival benefit is (90% – 30%) = 60 percentage points improvement in 5-year survival per shifted patient. QALYs = 650 × 0.60 × 8 = 3,120 QALYs/year. But the model claims only 40 QALYs. Either the calculation is wrong or the 650 additional detections figure needs heavy discounting.",
      "The 40 QALY figure implies: 40 ÷ 8 = 5 additional patients with improved survival per year, suggesting only 5 of the 650 additional early detections produce meaningful outcome changes. This discounting could be justified if: most 'additional' early detections are indolent cancers that would not have caused death anyway (overdiagnosis), or if late-stage patients would have been caught at a later screen anyway. This overdiagnosis factor is the key sensitivity."
    ],
    referenceSolution: {
      approach: "Reconstruct the QALY calculation from first principles, identify the reconciliation between the raw detection improvement and the 40 QALY claim, then stress-test the key assumptions.",
      reasoning: "Step 1 — Raw calculation: Additional early detections/year = 5,000 × (0.85 – 0.72) = 650. Survival benefit per shifted patient = 90% – 30% = 60 percentage points additional 5-year survival. QALYs per additional early detection = 0.60 × 8 = 4.8 QALYs. Total QALYs = 650 × 4.8 = 3,120 QALYs/year. This implies cost-effectiveness = £2M ÷ 3,120 = £641/QALY — enormously cost-effective and not consistent with the £2M price tag being right at the £30,000 threshold. Step 2 — Reconciling with 40 QALYs: For 40 QALYs to be correct, the model must apply a very large discount to the 650 additional detections. Effective discount: 40 ÷ 3,120 = 1.3%. This suggests the model assumes: (a) most 'additional' early detections are overdiagnosis — indolent cancers that would never cause symptoms or death. For some cancer types (e.g., thyroid, prostate, some breast subtypes), overdiagnosis rates of 50–80% are documented. (b) Lead time bias — early detection may extend measured survival time without extending actual life (patients just know about cancer earlier, not live longer). (c) Incremental effect vs. trial effect: trial conditions (specialist radiologists, controlled protocols) may not replicate in routine clinical practice. Step 3 — Sensitivity analysis: Variable 1 — Overdiagnosis rate: At 90% overdiagnosis: effective detections = 65. QALYs = 65 × 4.8 = 312 (still 8× more than 40). At 98% overdiagnosis: 13 effective detections → 62 QALYs. At 99%: 6.5 → 31 QALYs. For the model to yield 40 QALYs, overdiagnosis rate ≈ 99%. This is extreme and would need explicit justification. Variable 2 — Real-world vs. trial performance: If hospital radiologists perform at 70% of trial performance (a realistic degradation), additional early detections = 650 × 0.70 = 455. QALYs without overdiagnosis = 2,184. Variable 3 — QALY value per early detection: If 8 QALYs (trial assumption) is reduced to 4 (due to lead-time bias, quality of life adjustments): QALYs = 650 × 0.60 × 4 = 1,560. Step 4 — The 40 QALY figure is only plausible if: (a) the cancer being screened has an extremely high overdiagnosis rate (>98%), AND/OR (b) the QALY gain per early detection is dramatically lower than 8. For the investment to be at exactly the threshold, the model has been parameterized to produce a favorable verdict — this is a form of backward induction that should trigger skepticism. Cost-effectiveness threshold test: if QALYs are truly 40, the tool at £2M costs £50,000/QALY — above the NICE threshold of £30,000. At £30,000/QALY threshold, the tool would need to generate 67 QALYs to be worth £2M. At 3,120 QALYs, the tool is worth £93.6M — far above its price. The 40 QALY estimate appears heavily discounted, but the basis for the discount is not transparent.",
      commonMistakes: "Not computing the independent QALY estimate to check against the 40 QALY claim. Accepting overdiagnosis as a valid discount without quantifying what rate is implied. Not distinguishing between cost-effectiveness (value per QALY) and budget impact (total cost). Ignoring the real-world vs. trial performance degradation.",
      alternatives: "A threshold analysis approach: instead of fixing assumptions and varying outputs, ask 'what overdiagnosis rate makes this investment exactly cost-effective?' Answer: ~98.7% overdiagnosis rate. If the true overdiagnosis rate for this cancer type is known from literature, the investment verdict follows immediately."
    },
    rubric: [
      { id: "ab-045-r1", text: "Independently computes the raw QALY estimate from the given data (~3,120 QALYs/yr)" },
      { id: "ab-045-r2", text: "Identifies the 40 QALY claim as implying an extreme discount (~99% overdiagnosis or equivalent)" },
      { id: "ab-045-r3", text: "Identifies overdiagnosis and lead-time bias as the key QALY discount mechanisms" },
      { id: "ab-045-r4", text: "Notes real-world vs. trial performance degradation as a sensitivity variable" },
      { id: "ab-045-r5", text: "Computes the implied cost-per-QALY under the stated 40 QALY figure and notes it exceeds the NICE threshold" },
      { id: "ab-045-r6", text: "Performs a threshold analysis (what discount rate makes the tool exactly cost-effective)" }
    ]
  },

  // ── ASSUMPTION VALIDATION (ab-046 to ab-050) ─────────────────────────────

  {
    id: "ab-046",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["structured-argumentation"],
    difficulty: "medium",
    question: "A management consultant recommends that a retailer close its 20 lowest-performing stores, with the argument: 'These stores collectively lose £4M per year, so closing them will save £4M and lift company profits by £4M.' What assumption is embedded in this recommendation, how would you test it, and what evidence would cause you to reject the consultant's conclusion?",
    context: undefined,
    hints: [
      "The embedded assumption is that closing a store eliminates all of its costs and loses only its current revenue. Think about what costs might not disappear when a store closes (fixed vs. variable cost structure), and whether the store's losses include allocated overheads that will be redistributed.",
      "Key assumption: the £4M loss is 'avoidable.' But if the stores' costs include allocated corporate overheads (IT, HR, procurement), those costs don't disappear — they get reallocated to remaining stores, which then look less profitable. The stores may be contribution-positive (covering their own direct costs and contributing to overheads) even while showing a net accounting loss.",
      "Test: calculate contribution margin per store (revenue minus direct/variable costs only). If contribution margin is positive (say, £2M total contribution across the 20 stores), closing them reduces overall profit by £2M despite eliminating the £4M accounting loss. Evidence to reject: if direct store costs exceed store revenue, closure is definitely beneficial. If contribution is positive, closure is likely harmful."
    ],
    referenceSolution: {
      approach: "Identify the fixed-vs-variable cost assumption embedded in the recommendation, design a test using contribution margin analysis, and specify the evidence threshold for accepting or rejecting the recommendation.",
      reasoning: "The consultant's argument assumes: (1) the £4M loss is fully avoidable (all costs are directly attributable to the stores and will cease if stores close); (2) there is no revenue transfer to other stores or channels when these stores close; (3) closing 20 stores has no effect on supplier negotiating power, brand perception, or network economics. Testing assumption (1) — avoidable cost analysis: Request a P&L breakdown per store separating: (a) directly attributable variable costs (staff wages, store-specific COGS, local rent); (b) allocated fixed costs (a share of IT, HR, procurement, marketing, warehousing that would continue regardless). If allocated overhead is £6M across the 20 stores and direct costs are £2M below revenue, the true contribution per store is positive. Example: if 20 stores each generate: Revenue £500k, COGS £300k, direct labor £150k, allocated overhead £80k = reported loss (£30k). Direct contribution = £500k – £300k – £150k = £50k positive per store = £1M total positive contribution. Closing them would save £0 in overhead but lose £1M in contribution → profit falls by £1M instead of rising by £4M. Testing assumption (2) — revenue transfer: Do customers of closed stores go to nearby open stores or online? If 30% of revenue transfers, the lost contribution is reduced but not eliminated. Testing assumption (3) — network effects: For a retailer, having fewer locations may reduce 'retailer presence' in a market, affecting brand negotiating power with suppliers or landlords. Empirical test: Compare markets where this retailer has high vs. low store density — do high-density markets show better supplier terms or higher comparable store sales? Evidence to reject: if contribution analysis shows the 20 stores collectively contribute positively to overheads. This requires store-level P&L with overhead allocation clearly separated.",
      commonMistakes: "Accepting accounting profit (net of allocated overheads) as the relevant measure for a closure decision. Ignoring revenue transfer effects. Not considering supply chain or purchasing power effects of a smaller store network.",
      alternatives: "Incremental analysis: model the company P&L with 20 stores and without. The difference is the true closure impact. This is equivalent to contribution analysis but forces explicit modeling of what costs actually stop vs. continue."
    },
    rubric: [
      { id: "ab-046-r1", text: "Identifies the 'avoidable cost' assumption as the critical embedded assumption" },
      { id: "ab-046-r2", text: "Distinguishes allocated overhead from directly avoidable costs" },
      { id: "ab-046-r3", text: "Proposes a specific test (contribution margin analysis) to validate or refute the assumption" },
      { id: "ab-046-r4", text: "States the evidence threshold (contribution positive vs. negative) for rejecting the recommendation" },
      { id: "ab-046-r5", text: "Considers at least one secondary effect (revenue transfer or network economies)" }
    ]
  },

  {
    id: "ab-047",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["challenging-defaults"],
    difficulty: "medium",
    question: "A startup's growth model assumes that word-of-mouth is the primary acquisition channel, with a viral coefficient of K = 1.3 (each user invites 1.3 new users). The founders claim this means the product will 'grow exponentially forever.' Identify the assumptions that must hold for this to be true, explain why each is likely to fail over time, and describe how you would test the true K-factor before scaling marketing spend.",
    context: undefined,
    hints: [
      "A viral coefficient K > 1 does produce exponential growth, but only if: (1) K stays constant over time, (2) the invited users convert at the same rate as the initial invitees, (3) the invited users also invite at the same rate. In practice, all three degrade as you exhaust high-propensity networks.",
      "K = (invites sent per user) × (conversion rate of invites). If each user sends 2 invites and 65% convert: K = 2 × 0.65 = 1.3. But early users are the most enthusiastic — they invite their closest contacts who are most likely to convert. As the network saturates, later users send fewer invites and invitees are less likely to convert.",
      "To validate K: measure it empirically at different cohort stages. Does cohort 1 (early adopters) have K = 1.4 while cohort 5 (later mass-market users) has K = 0.9? If K is declining across cohorts, the growth will decelerate and eventually stop. Test: track invites sent and conversion rate by user acquisition cohort and date."
    ],
    referenceSolution: {
      approach: "Decompose K into its components, identify the hidden stationarity assumptions, explain the mechanism of degradation, and design an empirical test.",
      reasoning: "K = (invites sent per user per cycle) × (conversion rate per invite). The K = 1.3 claim assumes both factors are constant. Hidden assumptions: (1) Constant invitation rate: Early users (innovators/early adopters) are more evangelical and send more invites. As the product reaches mainstream users, word-of-mouth enthusiasm decreases. Mechanism: Each user has a finite social network; once high-propensity contacts have been invited, remaining contacts are lower-fit or already using the product. (2) Constant conversion rate: Early invitees receive recommendations from trusted contacts who have genuinely high affinity for the product. As the network expands, invitees are more distant contacts with lower trust or lower product-market fit. Conversion rates typically decline from ~70% (friends of founding cohort) to ~20% (sixth-degree connections). (3) Constant cycle time: If cycles get longer (users take longer to invite after joining), growth slows even with K > 1. (4) Infinite addressable market: K > 1 leads to exponential growth only if there is always an uninvited potential user. In a finite market, growth slows as the pool of uninvited users shrinks. Why each fails: Saturation of high-propensity networks is the primary failure mode — empirically, K tends to decline from 1.2–1.4 at launch to 0.6–0.8 within 6–12 months for most viral consumer products. Testing methodology: (a) Cohort analysis: measure K for users acquired in month 1 vs. month 3 vs. month 6. A declining K over cohorts signals network saturation. (b) Funnel decomposition: track invitation rate (invites sent per user) and conversion rate separately. Identify which component is degrading faster. (c) Social graph distance: measure whether later invitees are on average farther (in social graph distance) from the founding cohort. Farther connections → lower conversion. (d) Time-to-invite: track how long after joining a user sends their first invite. Increasing lag → effectively lower K per unit time. Evidence standard: if K is stable across cohorts 1–5 and at least 3 months of data shows K > 1.1 consistently, the viral growth assumption is better-supported. A single K measurement at launch is insufficient to justify scaling spend.",
      commonMistakes: "Treating a single K measurement as evidence of permanent viral growth. Not decomposing K into invitation rate and conversion rate. Ignoring the finite-market constraint on exponential growth. Not designing a longitudinal test (K needs to be measured across cohorts, not once).",
      alternatives: "The Bass Diffusion Model provides a theoretical framework for how viral growth evolves over time in a finite market. It predicts that growth is S-shaped (initially exponential, then leveling as the market saturates), which is consistent with observed K degradation."
    },
    rubric: [
      { id: "ab-047-r1", text: "Decomposes K into invitation rate × conversion rate" },
      { id: "ab-047-r2", text: "Identifies at least 3 hidden stationarity assumptions (invitation rate, conversion rate, cycle time, finite market)" },
      { id: "ab-047-r3", text: "Explains the mechanism by which each assumption degrades over time" },
      { id: "ab-047-r4", text: "Designs a cohort-based empirical test to measure K degradation over time" },
      { id: "ab-047-r5", text: "States an evidence standard — what data would be sufficient to support the viral growth assumption" }
    ]
  },

  {
    id: "ab-048",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["market-dynamics"],
    difficulty: "hard",
    question: "A retail bank's credit risk model assumes that mortgage default rates will not exceed 3% per year under any housing market scenario, based on historical data from 2000–2019. A risk manager argues this is an adequate assumption for stress-testing. Critically evaluate this assumption, identify the conditions under which it would fail, and propose a validation framework that does not rely solely on historical default rates.",
    context: "The bank's mortgage portfolio is concentrated in two major cities (65% of exposure). Average loan-to-value (LTV) ratio is 78%. The model uses OLS regression on 20 years of macro variables (unemployment, GDP, house prices).",
    hints: [
      "The 2000–2019 dataset excludes the early 1990s recession, which saw UK mortgage defaults of 6–8% in some regions. The data also excludes scenarios of rapidly rising interest rates combined with a house price correction — a scenario not present in the data. The assumption also misses geographic concentration risk.",
      "Key failure conditions: (1) interest rate shock — the dataset covers a period of secular low and falling rates; rising rates increase default risk in ways the model has never seen; (2) house price correction — at 78% LTV, a 25% price fall puts many borrowers in negative equity, increasing default rates even if they can afford payments, as walkaway decisions become rational; (3) geographic concentration — if 65% is in 2 cities, a local economic shock (major employer closure, regional recession) can produce cluster defaults that are not captured by national macro variables.",
      "Validation approaches beyond historical data: (1) scenario analysis using hypothetical stress paths (not based on historical data); (2) structural models that derive default probability from LTV distribution and assumed price paths; (3) comparison with default rates in other countries during stress periods; (4) reverse stress testing — find the scenario that produces 3% default rate, then assess its plausibility."
    ],
    referenceSolution: {
      approach: "Evaluate the 2000–2019 data for regime coverage gaps, identify the mechanisms that could produce defaults exceeding 3%, and design a multi-method validation framework that addresses each gap.",
      reasoning: "Critique of the historical data assumption: (1) The dataset represents a structurally benign period: from 2000–2019, UK base rates fell from 6% to 0.75%, house prices rose almost continuously (with the exception of 2008–2009), unemployment never exceeded 8.5%, and QE suppressed mortgage arrears in 2009–2012. A model calibrated to this period will systematically underestimate tail risk in structurally different environments. (2) The 2007–2008 crisis is included, but the UK mortgage market was partly protected by QE and forbearance. The stress scenario from this period in UK data is milder than in equivalent US data. (3) The pre-2000 experience (1990–1993 recession with 15% interest rates, 5%+ default rates in some regions) is excluded. (4) Specific failure conditions: (a) Interest rate normalization: Post-2022 rate increases show that refinancing at 5–6% (vs. 1.5% origination rate) produces significant payment stress for new fixed-rate-end borrowers. Model has never seen a large rate shock in the portfolio training data. (b) LTV concentration: At 78% average LTV, a house price fall of 23% creates average negative equity across the portfolio. Rational default (walkaway) rates increase non-linearly past the negative equity threshold. The 3% cap assumes house prices do not fall enough to reach this threshold nationwide. (c) Geographic concentration risk: The two-city concentration (65%) creates correlated default exposure. If either city experiences a major employer departure or planning moratorium, regional unemployment spikes and house prices fall together — a scenario not captured in national macro variables. (d) Model specification: OLS regression is linear and cannot capture the non-linear relationship between unemployment and default at extreme values. A 2% unemployment increase from 4% to 6% has different default implications than from 6% to 8%. (e) Excluded variables: buy-to-let exposure, interest-only mortgages, second-charge lending — all increase vulnerability in stress scenarios. Validation framework: (1) Historical analogy: Apply the UK 1990–1993 macro path to the current portfolio (adjusted for LTV mix, income multiples). What is the implied default rate? (2) Structural model: Build a loan-by-loan model using LTV distribution + assumed house price paths. Set thresholds (e.g., negative equity + unemployment shock) and compute default probability. This is model-independent. (3) Cross-country benchmarks: During 2008–2012, US, Ireland, and Spain experienced 5–15% mortgage default rates with LTV distributions similar to this bank's portfolio. These outcomes provide out-of-sample evidence the 3% cap ignores. (4) Reverse stress test: Find the combination of (a) house price fall, (b) unemployment increase, and (c) interest rate increase that produces exactly 3% default. Ask: is this scenario truly improbable? If house prices –25%, unemployment +5pp, rates +3pp produces 3% default, and this scenario is plausible in 2024, the cap is not conservative. (5) Monte Carlo with fat-tailed distributions: Replace OLS regression with a model that allows extreme tail events. The 2008 shock is in the top 1% of historical observations — if the distribution is assumed normal, tail events are undersampled.",
      commonMistakes: "Accepting historical data coverage as evidence that all relevant scenarios have been observed. Not considering the non-linearity of default rates at extreme macro values. Treating geographic concentration as a diversification benefit rather than a correlated risk. Not using out-of-sample evidence (other countries) to test model limits.",
      alternatives: "The Merton model for credit risk provides a structural alternative: default occurs when asset value (house price) falls below debt value (mortgage balance). Using the current LTV distribution and a house price volatility estimate, this model predicts default probability without relying on historical default frequency — and can be stress-tested analytically."
    },
    rubric: [
      { id: "ab-048-r1", text: "Identifies that the 2000–2019 dataset misses structurally different rate and price regimes" },
      { id: "ab-048-r2", text: "Explains the negative equity mechanism: LTV + price fall → rational default increases non-linearly" },
      { id: "ab-048-r3", text: "Notes geographic concentration as a correlated risk not captured by national macro variables" },
      { id: "ab-048-r4", text: "Identifies OLS linearity as a model limitation for capturing tail risk" },
      { id: "ab-048-r5", text: "Proposes at least 3 validation methods that do not rely solely on the historical data" },
      { id: "ab-048-r6", text: "Uses cross-country data (US/Ireland/Spain 2008–2012) as out-of-sample evidence against the 3% cap" }
    ]
  },

  {
    id: "ab-049",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["analogical-reasoning"],
    difficulty: "hard",
    question: "A city transport authority is evaluating a proposal to introduce congestion pricing on central city roads, projecting that peak-hour traffic will fall by 25% — enough to reduce average journey times by 12 minutes. The projection is based on a transport model using price elasticity of demand of –0.3 for driving. Critically examine the assumptions embedded in using this elasticity, and propose a validation framework using both internal data and analogies from other cities.",
    context: "The proposed charge is £12 for driving into the city centre during peak hours. Current peak-hour traffic volume is 85,000 vehicle-trips per day. Public transport capacity would increase by 15% alongside the charge.",
    hints: [
      "Price elasticity of –0.3 means a 1% price increase reduces demand by 0.3%. But what is the 'price' of driving currently? Parking, fuel, and opportunity cost make up the implicit price. A £12 charge on a zero-priced road means the percentage price increase is technically infinite — making elasticity-based projections unreliable.",
      "The –0.3 elasticity is a long-run estimate from various travel demand studies. Short-run elasticity is typically lower (–0.1 to –0.2) because people cannot easily change jobs, homes, or routines. Long-run elasticity (–0.4 to –0.6) takes 3–5 years as people relocate or change behavior. Which applies here?",
      "Validation approach: Use London's Congestion Charge (2003) as an analogy. London introduced an £8 charge and achieved a 25–30% reduction in traffic in year 1. Stockholm saw 20% reduction at comparable charges. But London had very extensive public transport, and the charge was gradually accepted. The authority should check: does the elasticity match London's experience given this city's transit capacity and car-dependency?"
    ],
    referenceSolution: {
      approach: "Decompose the elasticity assumption, identify its applicability conditions, test it against analogous city implementations, and design a validation framework for the specific context.",
      reasoning: "Assumption 1 — Elasticity of –0.3 is stable and applicable: The elasticity figure is borrowed from aggregate travel demand studies, typically estimated across many contexts. Problems: (a) Base price issue — elasticity is measured as percentage change in quantity per percentage change in price. If the current 'price' of driving includes only fuel and parking (say £5 average), adding £12 means a 240% price increase. A –0.3 elasticity implies 72% demand reduction — clearly wrong. The model must be using a full generalized cost of travel (including time value), which changes the base. If generalized cost is £30 (including £15 time cost), a £12 charge is a 40% increase, implying 12% demand reduction — only half the claimed 25%. The assumed elasticity base matters enormously. (b) Short vs. long-run: –0.3 is typically a medium-run estimate. Short-run (year 1) elasticity is –0.1 to –0.2 for congestion pricing. The 25% demand reduction may take 3–5 years to materialize. In year 1, the journey time improvement will be less than 12 minutes. (c) Heterogeneous responses: Some trips are highly inelastic (essential workers with no transit alternative), others very elastic (discretionary car use). Average elasticity masks bimodal distribution. The 25% reduction assumes average elasticity across all trip types. Assumption 2 — 25% demand reduction produces 12-minute journey time improvement: Congestion is highly non-linear — a small percentage reduction in traffic near capacity can produce large journey time improvements (BPR function). The 12-minute improvement assumes a specific starting congestion level and a specific traffic flow model. If the BPR parameters are wrong (e.g., roads are not near capacity), the journey time improvement could be much less. Analogical validation from other cities: London Congestion Charge (2003): £8 charge → 25–30% reduction in car trips in the charging zone in year 1. But London had: (a) exceptionally dense public transit (Tube + buses), (b) over 50% of commuters already using public transit. Stockholm congestion pricing (2006–present): 20% reduction at SEK 20–60 charges. Gothenburg (2013): 10–15% reduction, slower than modeled. Milan (Area C, 2012): 30% reduction but from a much higher base of car dependency. Pattern: cities with strong transit see 20–30% reduction. Car-dependent cities with weak transit see 5–15%. This city's transit capacity increase (15%) needs to be sufficient to absorb displaced drivers. If 25% fewer car trips = ~21,000 trips/day shifted, and transit increase absorbs 12,750 extra trips (15% × 85,000 ÷ transit share), the transit absorption may be insufficient, leading to crowding and reversion to car use. Validation framework: (1) Calibrate elasticity to generalized cost baseline (include time, fuel, parking in the base price, not zero). (2) Segment trips by necessity and transit availability; apply different elasticities to each segment. (3) Run transport model at short-run elasticity for year 1 prediction, long-run for year 5 steady state. (4) Apply BPR function to translate traffic reduction to journey time improvement, sensitivity-testing BPR parameters. (5) Use London and Stockholm as analogues; adjust for local transit capacity and car-dependency ratio. (6) Pilot: consider a 3-month trial and measure actual elasticity empirically.",
      commonMistakes: "Applying elasticity to a zero (or near-zero) price base, which makes percentage price changes meaningless. Not distinguishing short-run from long-run elasticity and which is appropriate for a year 1 projection. Not checking whether transit capacity can absorb displaced drivers.",
      alternatives: "A four-stage transport model (trip generation, distribution, mode choice, assignment) is the standard validation approach for congestion pricing. It explicitly models transit absorption, mode shift, and trip suppression separately — rather than applying a single elasticity to all trip types."
    },
    rubric: [
      { id: "ab-049-r1", text: "Identifies the base price problem (elasticity applied to what baseline price?)" },
      { id: "ab-049-r2", text: "Distinguishes short-run from long-run elasticity and notes which is relevant for a year 1 projection" },
      { id: "ab-049-r3", text: "Notes heterogeneous elasticity (essential vs. discretionary trips) as a problem with applying average elasticity" },
      { id: "ab-049-r4", text: "Questions whether transit capacity increase is sufficient to absorb displaced drivers" },
      { id: "ab-049-r5", text: "Uses at least two city analogies (London, Stockholm, or others) to calibrate the projection" },
      { id: "ab-049-r6", text: "Proposes a multi-element validation framework including segmentation, short-run calibration, and analogue comparison" }
    ]
  },

  {
    id: "ab-050",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["full-case-interview"],
    difficulty: "hard",
    question: "A major grocery retailer is considering launching a private-label premium range to compete with branded goods. Their business case rests on three core assumptions: (1) 15% gross margin improvement vs. branded equivalents; (2) brand equity transfer — customers will trust the private label enough to pay 90% of the branded price; and (3) no material cannibalization of existing mid-tier private label range. For each assumption, design a validation test using data the retailer already has access to, and specify the decision rule — what result would cause you to reject the recommendation?",
    context: "The retailer is the UK's third-largest grocer by market share (18%). It currently has a mid-tier private label and no premium range. Category: ready meals.",
    hints: [
      "For assumption (1), the margin improvement claim requires knowing the branded manufacturer's margin, the retailer's buying terms, and the cost of own-label production. The retailer has buying data for the branded goods and can model own-label production costs. What data do they need and how would they validate the 15% figure?",
      "For assumption (2), brand equity transfer can be tested with existing customers and transaction data. Willingness to pay at 90% of branded price implies the private label must be perceived as nearly equivalent. How would you test this without launching the product?",
      "For assumption (3), cannibalization can be estimated from within-category substitution patterns. Does the retailer see customers trading up from its mid-tier range to brands in categories where it has no premium private label? If so, a premium private label would capture some of that trade-up rather than creating new demand."
    ],
    referenceSolution: {
      approach: "For each of the three assumptions, specify the data source, test design, metric, and decision threshold that would validate or refute the assumption before commitment.",
      reasoning: "Assumption 1 — 15% gross margin improvement: The validation decomposes into: (a) current branded COGS: the retailer knows its buying price for branded ready meals (say £3.50 retail, buying at £2.45 = 30% gross margin). (b) Own-label production cost: obtain quotes from 2–3 co-manufacturers for equivalent recipe/quality spec. Target cost to achieve 45% gross margin (15pp improvement) at 90% of branded price: if branded = £4.00, own-label retail = £3.60. COGS target = £3.60 × (1–0.45) = £1.98. Request quotes for this spec and compare to £2.45 branded COGS. Test design: issue RFQ (request for quotation) to co-manufacturers with product spec. If 3 credible manufacturers quote below £1.98, the margin assumption is validated. Decision rule: reject if lowest credible quote exceeds £2.20 (leaving only 39% gross margin, not the claimed 45%). Assumption 2 — Brand equity transfer, WTP at 90% of branded price: Data already held: (a) price elasticity of branded ready meals — the retailer's transaction data can show how branded sales respond to price promotions. If branded volume increases sharply at –10% vs. branded price, consumers are price-sensitive, supporting WTP at 90%. (b) Competitor private label analogues: does Waitrose's premium own-label (Waitrose 1) price at 85–95% of branded? If competitors successfully maintain 90% pricing, this supports the assumption. (c) Conjoint analysis or concept test with loyalty card holders: survey the top 20% of ready meal buyers with willingness-to-pay questions. Test design: pull loyalty card data for the top 30% of ready meal buyers by spend. Identify their current branded vs. own-label split. Customers already buying own-label at 80% of branded price demonstrate WTP close to branded. Run a concept test (product image + price) with a sample of customers. Decision rule: reject if concept test shows WTP median below 82% of branded price (indicating the 90% assumption is too aggressive and margin target falls through). Assumption 3 — No material cannibalization of mid-tier own-label: The retailer already has transaction data showing whether premium range introduction in other categories cannibalized its mid-tier range. Test design: (a) Internal category analysis: identify 3–5 categories where the retailer introduced a premium own-label in the past 3 years. Measure mid-tier private label volume 12 months before and after premium introduction. (b) Basket analysis: do customers buying branded ready meals also buy mid-tier own-label in other categories? If brand and mid-tier already co-exist in baskets, adding premium may cannibalize brand spending (good) not mid-tier spending. (c) Analogues: Tesco Finest introduction (2000) — did it cannibalize Tesco's value range or primarily capture market share from brands? Data from Companies House filings and industry reports. Decision rule: reject if internal category analysis shows mid-tier private label volume fell > 8% in the 12 months after premium range introduction in analogous categories. An 8% cannibalization on mid-tier would offset approximately 40% of the premium margin gain (depending on relative volumes). Overall decision framework: all three assumptions should be validated before launch. If assumptions 1 and 3 are validated but assumption 2 is rejected (WTP below 82%), the team should consider pricing at 82% of branded and recalculating the margin — it may still be profitable but with reduced premium positioning.",
      commonMistakes: "Proposing market research (surveys) as the primary validation tool when the retailer already has transaction data that can answer the question. Not specifying a quantitative decision threshold for each assumption. Testing assumptions sequentially rather than in parallel (all three can be tested simultaneously, reducing launch timeline risk). Not considering that cannibalization could be positive (cannibalizing branded sales is the entire point).",
      alternatives: "A controlled store trial: launch the premium range in 10 stores matched to 10 control stores and measure: (1) premium range gross margin vs. target, (2) branded volume change in trial vs. control stores (WTP revealed, not stated), (3) mid-tier volume change in trial vs. control. This tests all three assumptions simultaneously with real behavior rather than stated intentions — but takes 12–16 weeks and risks copying by competitors."
    },
    rubric: [
      { id: "ab-050-r1", text: "For assumption 1: specifies co-manufacturer RFQ as the validation test with a specific COGS threshold" },
      { id: "ab-050-r2", text: "For assumption 2: uses transaction data or competitor analogues, not just stated-preference survey" },
      { id: "ab-050-r3", text: "For assumption 3: uses internal category history (analogous categories) to measure cannibalization" },
      { id: "ab-050-r4", text: "Specifies a quantitative decision rule (rejection threshold) for each assumption" },
      { id: "ab-050-r5", text: "Notes that cannibalization of branded sales is desirable, and only mid-tier cannibalization is harmful" },
      { id: "ab-050-r6", text: "Proposes an integrated validation approach (all three tested in parallel or via store trial)" }
    ]
  }
];
