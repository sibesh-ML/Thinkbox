import type { Problem } from '@/types';

export const assumptionBuildingProblemsA: Problem[] = [
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
];
