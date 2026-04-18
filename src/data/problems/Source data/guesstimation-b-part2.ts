import type { Problem } from '@/types';

export const guesstimationProblemsB2: Problem[] = [
  {
    id: "ge-039",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: ["unit-analysis", "orders-of-magnitude"],
    difficulty: "medium",
    question: "How much does the Atlantic Ocean weigh?",
    context: "Estimate the total mass of water in the Atlantic Ocean in kilograms.",
    hints: [
      "Start by estimating the volume of the Atlantic Ocean — think of it as a rough rectangular basin.",
      "The Atlantic is roughly 9,000 km long, 4,000 km wide on average, and 3,300 m deep on average.",
      "Seawater density is approximately 1,025 kg/m³ — close enough to 1,000 kg/m³ for an order-of-magnitude estimate."
    ],
    referenceSolution: {
      approach: "Estimate volume from dimensions, multiply by density.",
      reasoning: `Dimensions: length ~9,000 km = 9×10⁶ m, average width ~4,000 km = 4×10⁶ m, average depth ~3,300 m ≈ 3×10³ m.
Volume = 9×10⁶ × 4×10⁶ × 3×10³ = 108×10¹⁵ m³ ≈ 1×10¹⁷ m³.
(Actual Atlantic volume ~3×10¹⁷ m³; our simple rectangle underestimates because the basin isn't rectangular — acceptable.)
Mass = volume × density = 1×10¹⁷ m³ × 1,025 kg/m³ ≈ 1×10²⁰ kg.
Plausible range: 1×10²⁰ – 3×10²⁰ kg.`,
      commonMistakes: "Mixing up km and m when computing volume, or forgetting to cube the unit conversion (1 km = 10³ m, so 1 km³ = 10⁹ m³).",
      alternatives: "Look up the Atlantic's area (~85 million km²) and multiply by mean depth (~3.3 km): 85×10⁶ × 3.3 = 2.8×10⁸ km³ ≈ 3×10¹⁷ m³, giving ~3×10²⁰ kg — a better match to actuals."
    },
    rubric: [
      { id: "r1", text: "Estimates volume using length × width × depth (or area × depth)" },
      { id: "r2", text: "Correctly converts km to m (or uses consistent units throughout)" },
      { id: "r3", text: "Applies seawater density ~1,000–1,025 kg/m³" },
      { id: "r4", text: "Final answer is within one order of magnitude of 10²⁰ kg" },
      { id: "r5", text: "Notes that a rectangular approximation underestimates the true volume" }
    ]
  },
  {
    id: "ge-040",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: ["decomposition-to-fundamentals", "orders-of-magnitude", "sanity-checks"],
    difficulty: "hard",
    question: "If all the energy stored in global crude oil reserves were converted to electricity, how long could it power the entire world?",
    context: "Assume 100% conversion efficiency for this theoretical maximum estimate.",
    hints: [
      "Estimate proven global crude oil reserves in barrels, then convert to joules using the energy content of oil.",
      "World total primary energy consumption is roughly 6×10²⁰ joules per year (about 580 EJ/year).",
      "One barrel of oil contains approximately 6.1×10⁹ joules of energy."
    ],
    referenceSolution: {
      approach: "Calculate total energy in oil reserves, divide by annual world energy consumption.",
      reasoning: `Step 1 — Oil reserves: Proven global crude oil reserves ≈ 1.7 trillion barrels = 1.7×10¹² barrels.
Step 2 — Energy per barrel: ~6.1×10⁹ J/barrel.
Step 3 — Total energy: 1.7×10¹² × 6.1×10⁹ = ~1×10²² J.
Step 4 — World energy use per year: ~5.8×10²⁰ J/year (580 EJ).
Step 5 — Duration: 1×10²² / 5.8×10²⁰ ≈ 17 years.
Plausible range: 15–25 years (sensitive to assumed reserves and current consumption rate).
Sanity check: Known reserves-to-production ratio for oil is ~50 years, but that's production rate, not total world energy — so 17 years at full world usage is consistent.`,
      commonMistakes: "Confusing oil production rate with total reserves. Using calorific value of oil in kcal without converting to joules. Forgetting that world energy consumption includes all fuels, not just oil.",
      alternatives: "Can triangulate: global oil consumption ~100 million barrels/day = 3.65×10¹⁰ barrels/year. At that rate, 1.7×10¹² barrels lasts ~47 years. But oil is only ~33% of world energy, so powering the whole world from oil alone would exhaust it faster: 47 × 0.33 ≈ 16 years — consistent."
    },
    rubric: [
      { id: "r1", text: "States a reasonable estimate for global proven oil reserves (~1–2 trillion barrels)" },
      { id: "r2", text: "Uses energy content per barrel (~6 GJ) or equivalent" },
      { id: "r3", text: "Correctly estimates world annual energy consumption (~500–700 EJ)" },
      { id: "r4", text: "Performs division to get years, answer in 10–30 year range" },
      { id: "r5", text: "Provides a sanity check or independent triangulation path" },
      { id: "r6", text: "Notes assumption of 100% conversion efficiency as unrealistic" }
    ]
  },
  {
    id: "ge-041",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: ["mece-decomposition", "sanity-checks"],
    difficulty: "medium",
    question: "How many people in the United States are currently in prison or jail?",
    context: "Include both federal/state prisons and local jails.",
    hints: [
      "The US population is approximately 330 million. Think about incarceration rates relative to other countries.",
      "Break down by type: state prisons, federal prisons, and local jails each hold different populations.",
      "The US has the highest incarceration rate in the world — roughly 2 million people total as of recent years."
    ],
    referenceSolution: {
      approach: "Estimate from incarceration rate × population, then cross-check by institution type.",
      reasoning: `Bottom-up: US population 330 million. US incarceration rate ~655 per 100,000 (highest globally).
Incarcerated = 330,000,000 × (655/100,000) = 330,000,000 × 0.00655 ≈ 2.16 million.
Cross-check by category: State prisons ~1.3M, federal prisons ~0.15M, local jails ~0.7M → total ~2.15M. Consistent.
Plausible range: 1.8–2.2 million.`,
      commonMistakes: "Confusing 'prison' (sentenced >1 year) with 'jail' (local, pre-trial or short sentences). Underestimating because the US rate is unusually high vs. other developed nations.",
      alternatives: "Top-down: if 1 in 150 Americans is incarcerated, 330M / 150 ≈ 2.2 million."
    },
    rubric: [
      { id: "r1", text: "Uses US population ~330 million as anchor" },
      { id: "r2", text: "Applies an incarceration rate or ratio to arrive at estimate" },
      { id: "r3", text: "Final answer in range 1.5–2.5 million" },
      { id: "r4", text: "Distinguishes between prisons and jails or notes both are included" }
    ]
  },
  {
    id: "ge-042",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: ["mece-decomposition", "estimation-chains"],
    difficulty: "medium",
    question: "How many practicing dentists are there in the United States?",
    hints: [
      "Think about how many patients a dentist can see per day and per year, then work backward from the number of dental visits Americans make annually.",
      "Americans average about 1–2 dental visits per year; roughly 60–65% of Americans visit a dentist in any given year.",
      "A full-time dentist typically sees 8–12 patients per day."
    ],
    referenceSolution: {
      approach: "Estimate annual dental visits, divide by annual visits per dentist.",
      reasoning: `US population: 330 million. Fraction visiting dentist per year: ~60% = 200 million people, averaging 1.5 visits each = 300 million visits/year.
Dentist capacity: 10 patients/day × 250 working days/year = 2,500 visits/dentist/year.
Dentists needed: 300,000,000 / 2,500 = 120,000 dentists.
Adjustment: not all dentists are full-time; add ~15% buffer → ~140,000.
Actual US figure: ~200,000 licensed dentists (not all active). Our estimate is reasonable given that many dentists work part-time or in administration.
Plausible range: 120,000–200,000.`,
      commonMistakes: "Assuming 100% of Americans visit a dentist annually. Underestimating patients per day. Forgetting part-time and specialist dentists.",
      alternatives: "Supply-side: 1 dentist per ~1,500–1,700 Americans is a common rule of thumb. 330M / 1,600 ≈ 206,000 — consistent with actuals."
    },
    rubric: [
      { id: "r1", text: "Estimates annual dental visits using population × visit rate" },
      { id: "r2", text: "Estimates annual capacity per dentist (working days × patients/day)" },
      { id: "r3", text: "Divides total visits by per-dentist capacity" },
      { id: "r4", text: "Final answer in range 100,000–250,000" },
      { id: "r5", text: "Notes a sanity check or alternative approach" }
    ]
  },
  {
    id: "ge-043",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: ["decomposition-to-fundamentals", "sensitivity-analysis", "estimation-chains"],
    difficulty: "hard",
    question: "How many people worldwide are currently on an airplane at any given moment?",
    hints: [
      "Start with total annual air passengers globally, then figure out what fraction of a year any single trip occupies.",
      "Global air traffic is roughly 4 billion passengers per year (pre-COVID levels, which have largely recovered).",
      "Average flight duration is about 2.5 hours; average time from check-in to landing is about 4 hours."
    ],
    referenceSolution: {
      approach: "Convert annual passengers to a snapshot count using average flight time.",
      reasoning: `Step 1 — Annual passengers: ~4.5 billion/year.
Step 2 — Average time in the air per trip: ~2.5 hours.
Step 3 — Hours per year: 365 × 24 = 8,760 hours.
Step 4 — Passengers in air at any moment: 4,500,000,000 × (2.5 / 8,760) = 4.5×10⁹ × 2.85×10⁻⁴ ≈ 1.28 million.
Rounding: ~1.2–1.3 million people airborne at any moment.
Sensitivity check: if average flight is 3 hours instead of 2.5, answer rises to ~1.5M. If 2 hours, ~1.0M. Order of magnitude is stable.
Independent check: ~100,000 flights/day globally, average 150 passengers/flight = 15M passenger-flights/day. Average flight ~2.5h out of 24h → 15M × (2.5/24) ≈ 1.56M. Broadly consistent.`,
      commonMistakes: "Using total passengers per year without converting to a point-in-time count. Forgetting that not all hours are equally busy (traffic is higher during day, lower at night) — but for a global estimate this averages out.",
      alternatives: "Plane count: ~25,000 commercial aircraft in service, average ~60% utilization → 15,000 in air at once, average 150 passengers → 2.25 million. Slightly high due to generous utilization, but same order of magnitude."
    },
    rubric: [
      { id: "r1", text: "States global annual passenger figure (~4–5 billion)" },
      { id: "r2", text: "Uses average flight duration to convert annual flow to snapshot stock" },
      { id: "r3", text: "Correctly divides flight hours by hours per year (or equivalent)" },
      { id: "r4", text: "Final answer in range 1–3 million" },
      { id: "r5", text: "Provides a second independent triangulation path" },
      { id: "r6", text: "Tests sensitivity to average flight duration assumption" }
    ]
  },
  {
    id: "ge-044",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: ["challenging-defaults", "sensitivity-analysis", "analogical-reasoning"],
    difficulty: "hard",
    question: "A consultant claims: 'There are approximately 500,000 full-time equivalent software developers in India.' Evaluate this estimate — is it too low, about right, or too high? Show your reasoning.",
    context: "India is a major global IT hub. Evaluate the claim from two independent angles.",
    hints: [
      "Consider India's total workforce (~500 million), its education system output in engineering, and the IT sector's known scale.",
      "Indian IT companies (TCS, Infosys, Wipro, HCL alone) employ over 1.5 million people combined. Add mid-size and startup employees.",
      "'Full-time equivalent software developer' should include employees doing software work — not just those with 'developer' in their title."
    ],
    referenceSolution: {
      approach: "Triangulate from (1) IT sector employment data and (2) engineering graduate pipeline.",
      reasoning: `Path 1 — IT sector employment:
Top 4 Indian IT firms (TCS, Infosys, Wipro, HCL): ~1.5 million employees combined.
Mid-tier IT firms (Tech Mahindra, Cognizant India, etc.): ~500,000 more.
Startups, product companies, in-house tech teams: ~500,000–1,000,000.
Total IT sector employees: ~2.5–3 million.
Fraction doing software development (vs. BPO, sales, HR): ~50–60% → 1.25–1.8 million FTE developers.

Path 2 — Graduate pipeline:
India graduates ~1.5 million engineering students/year; ~40% in CS/IT = 600,000/year.
Employment rate in software: ~50% = 300,000 new developers/year.
Career length ~20–25 years → steady-state stock ≈ 300,000 × 22 ≈ 6.6 million. But many work abroad or leave the field — discount by ~75% → ~1.7 million active in India.

Conclusion: Both paths suggest ~1.3–1.8 million FTE developers in India. The consultant's figure of 500,000 is TOO LOW by a factor of 3–4×.`,
      commonMistakes: "Accepting the claim without stress-testing it. Forgetting that major IT firms alone exceed 500K developers. Conflating total IT employees with developers only.",
      alternatives: "NASSCOM data: India's IT-BPM sector employs ~5.4 million; ~35% in software development = ~1.9 million — consistent with our estimate."
    },
    rubric: [
      { id: "r1", text: "Uses at least two independent estimation paths" },
      { id: "r2", text: "Correctly identifies that top Indian IT firms alone exceed 500K developers" },
      { id: "r3", text: "Arrives at a revised estimate in the 1–2 million range" },
      { id: "r4", text: "Concludes the consultant's figure is too low (not just off)" },
      { id: "r5", text: "States what fraction of IT employees are actual developers vs. other roles" },
      { id: "r6", text: "Provides a numerical reason for the undercount, not just intuition" }
    ]
  },
  {
    id: "ge-045",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: ["rebuilding-mental-models", "decomposition-to-fundamentals", "estimation-chains"],
    difficulty: "hard",
    question: "How many people in the world are currently alive who were born before 1940?",
    context: "Estimate the number of living people born before January 1, 1940 (i.e., aged 86+ as of 2026).",
    hints: [
      "Start from the world's current elderly population distribution. About 9% of the world's population is aged 65+.",
      "Survival rates drop sharply after age 80: globally only about 2–3% of people reach 90, and less than 0.5% reach 95.",
      "Think about it in cohorts: how many people were born per year in the 1930s globally, and what fraction are still alive?"
    ],
    referenceSolution: {
      approach: "Estimate global births in the 1930s, apply survival rates, sum the cohorts.",
      reasoning: `Step 1 — Global births in the 1930s:
World population ~2.3 billion in 1930. Crude birth rate ~35 per 1,000/year.
Annual births ≈ 2.3B × 0.035 = ~80 million/year. Over 10 years (1930–1939): ~800 million born.
But most of those died in childhood — infant mortality ~150–200/1,000 in 1930s. Surviving to age 5: ~75% of births ≈ 600 million.

Step 2 — Survival to age 86+:
Of those born ~1930–1939, now 86–96 years old.
Global life expectancy was ~60 in 1930; survival to 86 from birth cohort: roughly 5–8%.
Using 6%: 800M × 0.06 = 48 million.

Step 3 — Cross-check with current demographic data:
World population ~8.1 billion. People aged 80+: roughly 1.8% of population = 146 million aged 80+.
People aged 86+: ~0.6% of global population = 8.1B × 0.006 ≈ 49 million.
Both paths converge on ~45–55 million.
Plausible range: 40–60 million.`,
      commonMistakes: "Using current birth rates instead of 1930s rates. Forgetting high childhood mortality in that era inflates the apparent cohort size. Using life expectancy as a cutoff (it's a mean, not a maximum).",
      alternatives: "Use UN demographic data: world aged 80+ ≈ 146M; aged 85+ ≈ 70M; aged 90+ ≈ 24M. Born before 1940 (age 86+) interpolates to ~60M — consistent with our 40–60M range."
    },
    rubric: [
      { id: "r1", text: "Estimates 1930s global birth cohort using birth rate × population" },
      { id: "r2", text: "Applies a survival rate to age 86 from birth (not from current age)" },
      { id: "r3", text: "OR uses current world population with % aged 86+ as a second path" },
      { id: "r4", text: "Both independent paths produce consistent order-of-magnitude results" },
      { id: "r5", text: "Final answer in range 30–80 million" },
      { id: "r6", text: "Notes that high infant/child mortality in 1930s affects the surviving cohort" }
    ]
  },
  {
    id: "ge-046",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["unit-economics", "market-dynamics"],
    difficulty: "medium",
    question: "How much money does McDonald's make in revenue per year in the United States?",
    hints: [
      "Estimate the number of US McDonald's locations, then estimate revenue per location per day.",
      "McDonald's has about 13,500 US locations. Think about how many customers visit each store per day.",
      "Average transaction size at McDonald's is roughly $7–9."
    ],
    referenceSolution: {
      approach: "Locations × daily transactions × average spend × days per year.",
      reasoning: `Locations: ~13,500 US stores.
Customers per location per day: peak hours 11am–1pm and 5pm–7pm plus breakfast. Estimate 1,000 customers/day (a busy fast food store).
Average spend: $8 per transaction.
Daily revenue per store: 1,000 × $8 = $8,000.
Annual revenue per store: $8,000 × 365 = ~$2.9 million.
Total US system revenue: 13,500 × $2.9M = ~$39 billion.
Actual US systemwide sales: ~$45–50 billion. Our estimate is in the right range (we may have slightly underestimated customers).
Plausible range: $35–50 billion.`,
      commonMistakes: "Confusing McDonald's reported revenue (which is mainly franchise fees + company-owned stores, ~$23B globally) with systemwide sales (~$100B globally). The question asks for total sales, not corporate revenue.",
      alternatives: "Top-down: McDonald's US market share ~20% of US fast food, total fast food market ~$350B → McDonald's ~$70B. This is high because McDonald's share is actually ~14–15% → ~$50B. Consistent."
    },
    rubric: [
      { id: "r1", text: "Uses a realistic count of US McDonald's locations (~12,000–14,000)" },
      { id: "r2", text: "Estimates customers per day per store (500–1,500 is reasonable)" },
      { id: "r3", text: "Applies average transaction value ($6–10)" },
      { id: "r4", text: "Final answer in range $25–60 billion" },
      { id: "r5", text: "Distinguishes or notes the difference between systemwide sales and corporate revenue" }
    ]
  },
  {
    id: "ge-047",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["unit-economics", "supply-demand"],
    difficulty: "medium",
    question: "What is the total annual revenue of the global commercial airline industry?",
    hints: [
      "Start with global passengers per year (~4.5 billion) and estimate average ticket price.",
      "Don't forget cargo — it's a significant revenue stream, especially for long-haul carriers.",
      "Budget airlines have much lower average fares (~$80–120) than long-haul international carriers (~$500–800)."
    ],
    referenceSolution: {
      approach: "Passenger revenue + cargo revenue.",
      reasoning: `Passenger revenue:
4.5 billion passengers/year. Mix: ~60% short-haul/budget (avg $100), ~30% medium-haul (avg $300), ~10% long-haul (avg $700).
Revenue = 4.5B × (0.6×100 + 0.3×300 + 0.1×700) = 4.5B × (60 + 90 + 70) = 4.5B × $220 = $990 billion.
Rounded: ~$900 billion from passengers.

Cargo revenue: ~15–20% of total airline revenue.
If passengers = 80% of revenue → total = $990B / 0.8 ≈ $1.24 trillion.

Actual industry revenue (2023): ~$900B–$1.0T total. Our estimate is slightly high due to generous average fares.
Plausible range: $700 billion – $1.2 trillion.`,
      commonMistakes: "Ignoring cargo revenue. Using a single average fare across all routes. Not accounting for the mix between budget and premium carriers.",
      alternatives: "IATA reports: 2023 global airline revenue ~$964 billion. Triangulation from revenue per RPK (revenue passenger kilometer): ~0.10–0.12 USD/RPK × ~9 trillion RPKs = $900B–$1.1T."
    },
    rubric: [
      { id: "r1", text: "Uses global passenger count as a starting anchor" },
      { id: "r2", text: "Segments by flight type or uses a weighted average fare" },
      { id: "r3", text: "Includes cargo or ancillary revenue as a separate component" },
      { id: "r4", text: "Final answer in range $500B – $1.5T" },
      { id: "r5", text: "Notes the wide variance in fares by route type" }
    ]
  },
  {
    id: "ge-048",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["decomposition-to-fundamentals", "unit-economics", "estimation-chains"],
    difficulty: "hard",
    question: "Estimate the total value of all residential real estate in the United States.",
    hints: [
      "Start with the number of housing units in the US (~140 million) and estimate average home value.",
      "Not all housing units are owner-occupied — about 64% are owner-occupied, and rental properties also have value.",
      "Average US home value is roughly $300,000–$350,000 (as of 2024), but this varies enormously by region."
    ],
    referenceSolution: {
      approach: "Housing units × average value, segmented by type.",
      reasoning: `Total US housing units: ~142 million.
Types: Single-family (~60%) = 85M units, multifamily/condo (~30%) = 43M units, mobile/other (~10%) = 14M units.
Average values: Single-family ~$380,000; Multifamily per unit ~$200,000 (lower because many are rentals/older); Mobile/other ~$100,000.
Total = 85M × $380K + 43M × $200K + 14M × $100K
= $32.3T + $8.6T + $1.4T = $42.3 trillion.
Alternative simple estimate: 142M × $320,000 average = $45.4 trillion.
Actual Fed Reserve estimate (2024): ~$45–47 trillion. Both approaches converge well.
Plausible range: $38–50 trillion.`,
      commonMistakes: "Using only owner-occupied homes and ignoring rental properties (which also have market value). Using median home price for the average when the distribution is right-skewed (mean > median). Forgetting multifamily unit count.",
      alternatives: "GDP multiplier: US GDP ~$28T. Residential real estate is typically ~150–170% of GDP in the US → $28T × 1.6 ≈ $45T. Consistent."
    },
    rubric: [
      { id: "r1", text: "Uses total housing unit count (~130–150 million), not just owner-occupied homes" },
      { id: "r2", text: "Applies a reasonable average value per unit ($250K–$400K)" },
      { id: "r3", text: "Segments by housing type OR notes that the mean is higher than the median" },
      { id: "r4", text: "Final answer in range $30T–$60T" },
      { id: "r5", text: "Provides a GDP-based or other independent sanity check" },
      { id: "r6", text: "Shows all multiplication steps numerically" }
    ]
  },
  {
    id: "ge-049",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["market-dynamics", "competitive-analysis", "sensitivity-analysis"],
    difficulty: "hard",
    question: "How large is the global market for bottled water (in USD revenue per year)?",
    hints: [
      "Think about per-capita consumption by region: North America and Europe consume much more per person than Sub-Saharan Africa, but Asia has the largest population.",
      "A 500ml bottle of water retails for $0.50–$2 in developed markets and $0.10–$0.50 in developing markets.",
      "Consider that a significant share of bottled water is sold in bulk (large jugs, office dispensers) at lower per-liter prices."
    ],
    referenceSolution: {
      approach: "Segment world population by region, estimate annual spend per capita, sum up.",
      reasoning: `Region segmentation:
North America (370M): $120/person/year (heavy single-serve use) = $44B
Europe (750M): $60/person/year = $45B
China (1.4B): $30/person/year (growing rapidly) = $42B
Rest of Asia (2.3B): $15/person/year = $35B
Latin America (650M): $25/person/year = $16B
Middle East/Africa/Other (1.1B): $8/person/year = $9B
Total: ~$191B ≈ $200 billion.

Cross-check: Global bottled water volume ~500 billion liters/year. Average price ~$0.35/liter = $175 billion. Consistent.
Actual market (2023): ~$280–300B (higher because premium water and sparkling are growing fast). Our estimate is in the right zone.
Plausible range: $150B–$300B.`,
      commonMistakes: "Applying rich-world per-capita spend globally. Ignoring the premium/sparkling segment. Forgetting large-format (bulk/dispenser) which is lower margin but high volume in developing markets.",
      alternatives: "Volume approach: global consumption ~500B liters/year at average $0.40/liter → $200B. Or: segment by still vs. sparkling: still ~80% of volume at $0.30/liter, sparkling ~20% at $0.80/liter → blended $0.40/liter → $200B."
    },
    rubric: [
      { id: "r1", text: "Segments world population by region with different spending rates" },
      { id: "r2", text: "Uses a realistic per-capita spend that varies by income level" },
      { id: "r3", text: "Provides a volume-based cross-check (liters × price)" },
      { id: "r4", text: "Final answer in range $100B–$400B" },
      { id: "r5", text: "Notes the premium/sparkling segment as an upside factor" },
      { id: "r6", text: "Tests sensitivity of result to key assumptions" }
    ]
  },
  {
    id: "ge-050",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["multi-skill-synthesis", "analogical-reasoning", "challenging-defaults", "sensitivity-analysis"],
    difficulty: "hard",
    question: "A startup claims its app has 10 million monthly active users and is worth $500 million (a $50/MAU valuation). Is this valuation reasonable? Estimate what range of valuations would be justified.",
    context: "The app is a consumer social/utility app with no current revenue. Use comparable benchmarks from similar companies.",
    hints: [
      "Think about what $50/MAU implies about future monetization — at typical ad RPMs or subscription rates, what LTV does this assume?",
      "Well-known benchmarks: Facebook valued ~$55/MAU at IPO (2012, with ad revenue). Snapchat IPO ~$60/MAU (but losing money). Instagram was acquired at ~$30/MAU (2012, pre-revenue).",
      "Consider the path to monetization: if the app shows ads at $5 CPM with 3 page views/session, 15 sessions/month, what is annual revenue per user?"
    ],
    referenceSolution: {
      approach: "Estimate justified value from monetization potential; compare to $50/MAU claim.",
      reasoning: `Step 1 — Monetization estimate:
Ad revenue path: 15 sessions/month × 3 pages/session = 45 page views/month. At $5 CPM = $0.225/user/month = $2.70/year.
At 10M MAU: annual run-rate revenue = $27 million.
SaaS-style revenue multiple for high-growth: 10–20×. Value = $27M × 15 = $405M. This surprisingly supports ~$40/MAU.

Step 2 — Comparable benchmarks:
Pre-revenue consumer apps have traded at $30–$80/MAU depending on engagement, growth rate, and strategic value.
$50/MAU falls in the middle of this range.

Step 3 — Stress test assumptions:
If engagement is lower (5 sessions/month instead of 15): revenue/user = $0.90/year → $9M × 15× = $135M → $13.5/MAU. Now $500M looks very high.
If engagement is high and subscription potential exists: $5–10/user/year in subscriptions → revenue $50–100M/year → $750M–$1.5B at 15× multiple.

Conclusion: $50/MAU is plausible IF the app has strong engagement (15+ sessions/month) and a clear monetization path. It is NOT justified for a low-engagement utility with weak retention. The claim is defensible but hinges on engagement data the startup hasn't disclosed.`,
      commonMistakes: "Treating MAU-based valuations as universally valid without checking underlying engagement. Ignoring that 'monthly active' can be defined loosely. Applying the same multiple regardless of growth rate or strategic context.",
      alternatives: "DCF shortcut: if app monetizes at $3/MAU/year, grows 30%/year for 5 years, then reaches steady state — NPV of future cash flows at 15% discount ≈ $3 × (growth factor) ≈ $40–60/MAU, supporting the claim under optimistic assumptions."
    },
    rubric: [
      { id: "r1", text: "Estimates a bottom-up monetization value per MAU (ad, subscription, or transaction)" },
      { id: "r2", text: "Applies a revenue multiple to arrive at a total valuation" },
      { id: "r3", text: "Compares the result to the $50/MAU claim and states whether it's high/low/reasonable" },
      { id: "r4", text: "References at least one comparable company or benchmark" },
      { id: "r5", text: "Tests a low-engagement scenario to show the estimate is assumption-sensitive" },
      { id: "r6", text: "Concludes with a conditional judgment (e.g., 'reasonable IF engagement is X')" }
    ]
  }
];
