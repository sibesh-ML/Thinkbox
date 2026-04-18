import type { Problem } from '@/types';

export const guesstimationProblemsA: Problem[] = [

  // ── FERMI PROBLEMS (ge-001 to ge-005) ─────────────────────────────────────

  {
    id: "ge-001",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: ["mece-decomposition"],
    difficulty: "easy",
    question: "How many piano tuners are there in Chicago?",
    context: "Chicago has a population of roughly 2.7 million people. Assume this is a classic Fermi problem where you have no reference data — you must build the answer from scratch.",
    hints: [
      "Start with the number of pianos, not the number of tuners. Think about who owns pianos and how many households or institutions there are.",
      "Decompose piano ownership by segment: residential households, schools, churches, hotels, bars/restaurants, recording studios. Each segment has a different ownership rate.",
      "Roughly: 1 million households in Chicago, ~5% own pianos = 50,000 residential pianos. Add ~5,000 institutional pianos (schools, churches, etc.). Total ~55,000 pianos. Each piano tuned once per year = 55,000 tunings/year. One tuner can do 4 tunings/day × 250 workdays = 1,000 tunings/year. So 55,000 / 1,000 ≈ 55 tuners."
    ],
    referenceSolution: {
      approach: "Estimate the number of pianos in Chicago, determine how often they are tuned, and divide by the annual capacity of one tuner.",
      reasoning: "Step 1 — Population to households: Chicago population = 2.7M, average household size ≈ 2.7 people → ~1 million households. Step 2 — Piano ownership rate: pianos are expensive and bulky; maybe 5% of households own one → 50,000 residential pianos. Step 3 — Institutional pianos: ~700 schools (10 pianos each = 7,000), ~1,000 churches (2 pianos each = 2,000), hotels/restaurants/studios ≈ 1,000 total. Institutional total ≈ 10,000. Step 4 — Grand total: 50,000 + 10,000 = 60,000 pianos. Step 5 — Tunings per year: a well-maintained piano is tuned 1-2 times per year. Use 1 tuning/year → 60,000 tunings/year. Step 6 — Tuner capacity: a tuner drives between appointments; realistically 4 tunings/day. Working 250 days/year → 1,000 tunings/tuner/year. Step 7 — Number of tuners: 60,000 / 1,000 = 60 tuners. Order-of-magnitude range: 40–80. The actual Yellow Pages figure Fermi used was ~50.",
      commonMistakes: "Forgetting institutional pianos (schools, churches) which add ~15-20% to the total. Assuming tuners work 8 hours of pure tuning — travel time between jobs reduces effective capacity significantly. Tuning too frequently (every 3 months) or not frequently enough (every 5 years).",
      alternatives: "Could approach from the supply side: how many people advertise piano tuning services in a city this size? In a metro of 3M, niche service trades tend to have roughly one provider per 50,000 people as a rough heuristic, suggesting ~60 — consistent with the demand-side estimate."
    },
    rubric: [
      { id: "ge-001-r1", text: "Estimates the number of pianos rather than guessing tuners directly" },
      { id: "ge-001-r2", text: "Distinguishes residential from institutional piano ownership" },
      { id: "ge-001-r3", text: "Accounts for tuner capacity (tunings per day × working days)" },
      { id: "ge-001-r4", text: "Arrives at an answer in the range of 30–150 tuners" },
      { id: "ge-001-r5", text: "States key assumptions explicitly" }
    ]
  },

  {
    id: "ge-002",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: ["orders-of-magnitude"],
    difficulty: "easy",
    question: "How many golf balls fit inside a standard school bus?",
    context: "Treat the school bus as an empty rectangular box. A standard US school bus is approximately 35 feet long, 8 feet wide, and 6 feet tall (interior). A golf ball has a diameter of 1.68 inches.",
    hints: [
      "Convert everything to the same units first. Think of the bus as a rectangular box and the golf balls as spheres packed inside.",
      "Calculate the volume of the bus, then the volume of one golf ball. Spheres don't pack perfectly — packing efficiency for random sphere packing is about 64%.",
      "Bus volume: 35 × 8 × 6 ft = 1,680 ft³ = 2,903,040 in³. Golf ball volume: (4/3)π(0.84)³ ≈ 2.48 in³. At 64% packing: 2,903,040 × 0.64 / 2.48 ≈ 749,000 golf balls."
    ],
    referenceSolution: {
      approach: "Calculate the interior volume of the bus, calculate the volume of a golf ball, apply a sphere-packing efficiency factor, and divide.",
      reasoning: "Step 1 — Bus interior volume: 35 ft × 8 ft × 6 ft = 1,680 ft³. Convert: 1,680 × 12³ = 1,680 × 1,728 = 2,903,040 in³. Step 2 — Golf ball volume: diameter = 1.68 in, radius = 0.84 in. Volume = (4/3)π r³ = (4/3) × 3.14159 × (0.84)³ = 4.189 × 0.593 ≈ 2.48 in³. Step 3 — Packing efficiency: random packing of spheres fills ~64% of space; face-centered cubic packing fills ~74%. Use 64% for a realistic estimate. Step 4 — Number of golf balls: (2,903,040 × 0.64) / 2.48 = 1,857,946 / 2.48 ≈ 749,000. Round to ~500,000–1,000,000 as the plausible range. Best estimate: ~750,000.",
      commonMistakes: "Forgetting to apply a packing efficiency factor — spheres leave ~36% of space as air gaps. Using the exterior dimensions of the bus rather than interior. Forgetting to convert units consistently.",
      alternatives: "Sanity check: a cubic foot contains ~1,728 in³. At 64% packing with 2.48 in³ per ball: ~446 balls per cubic foot. 1,680 ft³ × 446 ≈ 749,000. Checks out."
    },
    rubric: [
      { id: "ge-002-r1", text: "Correctly computes or estimates the bus volume in consistent units" },
      { id: "ge-002-r2", text: "Correctly computes or estimates the golf ball volume" },
      { id: "ge-002-r3", text: "Applies a packing efficiency factor (50–74% range is acceptable)" },
      { id: "ge-002-r4", text: "Final answer is in the range of 300,000 – 1,500,000" }
    ]
  },

  {
    id: "ge-003",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: ["estimation-chains"],
    difficulty: "easy",
    question: "How many times does the average person's heart beat in a lifetime?",
    context: "Assume an average human lifespan and typical resting heart rate. You do not need to account for exercise-induced variation — use a single average rate.",
    hints: [
      "Break this into: beats per minute × minutes per hour × hours per day × days per year × years in a lifetime.",
      "Average resting heart rate is about 70 beats per minute. Average lifespan in developed countries is roughly 78 years.",
      "70 bpm × 60 min/hr × 24 hr/day × 365 days/yr × 78 years = 70 × 525,600 min/year × 78 ≈ 2.87 billion beats."
    ],
    referenceSolution: {
      approach: "Build an estimation chain: beats per minute → minutes per year → years per lifetime.",
      reasoning: "Step 1 — Beats per minute: average resting heart rate ≈ 70 bpm (range 60-100 bpm for healthy adults). Step 2 — Minutes per year: 60 min/hr × 24 hr/day × 365 days/yr = 525,600 min/year. Step 3 — Lifetimes: average lifespan ≈ 78 years. Step 4 — Total beats: 70 × 525,600 × 78 = 70 × 40,996,800 = 2,869,776,000 ≈ 2.87 billion beats. Order of magnitude: ~3 × 10⁹. Range check: a 60-year-old couch potato (lower activity) vs. an athlete with resting rate of 50 bpm would give 2.5B vs. a sedentary person at 80 bpm for 70 years giving 2.95B — the estimate is robust across reasonable variation.",
      commonMistakes: "Forgetting to multiply by minutes per hour (using beats per hour directly). Using 80 years but forgetting that heart rate slows slightly with age and was higher in youth — averaging to 70 bpm covers this. Confusing beats per minute with beats per second.",
      alternatives: "A useful anchor: 1 billion seconds ≈ 31.7 years. So a lifetime of 78 years ≈ 2.46 billion seconds. At ~70 beats per minute = 1.17 beats/second → 2.46B × 1.17 ≈ 2.88B. Same answer, different path."
    },
    rubric: [
      { id: "ge-003-r1", text: "States the resting heart rate assumption (60–80 bpm is acceptable)" },
      { id: "ge-003-r2", text: "Correctly chains: beats/min × min/hr × hr/day × days/yr × years" },
      { id: "ge-003-r3", text: "Final answer is between 2 billion and 4 billion beats" },
      { id: "ge-003-r4", text: "Performs a quick sanity check on the reasonableness of the result" }
    ]
  },

  {
    id: "ge-004",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: [],
    difficulty: "easy",
    question: "How many haircuts are given in the United States every day?",
    context: "The US has a population of approximately 335 million people. Focus on commercial haircuts (at a salon or barbershop), not home haircuts.",
    hints: [
      "Start by thinking about how often different groups of people get haircuts. Men and women have very different average haircut frequencies.",
      "Men get haircuts roughly every 4-6 weeks; women every 8-12 weeks on average. These frequencies vary a lot, so use a weighted average for the whole population.",
      "Roughly: 167M men × 8 cuts/year + 168M women × 5 cuts/year = 1,336M + 840M = 2,176M cuts/year ÷ 365 ≈ 6 million cuts/day."
    ],
    referenceSolution: {
      approach: "Segment the US population by gender, estimate average haircut frequency for each group, compute total annual haircuts, then divide by 365.",
      reasoning: "Step 1 — Population split: US population 335M, roughly 50/50 → 167M men, 168M women. Step 2 — Haircut frequency by gender: Men visit a barber/salon on average every 5 weeks → 52/5 ≈ 10 cuts/year. Women visit less frequently, roughly every 10 weeks → 52/10 ≈ 5 cuts/year. Step 3 — Annual haircuts: Men: 167M × 10 = 1,670M. Women: 168M × 5 = 840M. Total: 2,510M haircuts/year. Step 4 — Per day: 2,510M / 365 ≈ 6.9M ≈ 7 million haircuts per day. Range: 5M–10M/day is defensible depending on frequency assumptions.",
      commonMistakes: "Using a single frequency for all people. Forgetting children — children get haircuts too (often more frequently than adults). Not adjusting for the fact that some adults cut their own hair or have family members cut it.",
      alternatives: "Supply-side check: US has ~80,000 barbershops and ~300,000 salons = 380,000 establishments. Average 2 stylists each = 760,000 stylists. At 8 cuts/day × 5 days × 50 weeks = 2,000 cuts/year per stylist → 760,000 × 2,000 / 365 ≈ 4.2M/day. Somewhat lower but same order of magnitude — reconcilable by including mobile stylists and home visits."
    },
    rubric: [
      { id: "ge-004-r1", text: "Segments population rather than using a single undifferentiated average" },
      { id: "ge-004-r2", text: "Uses different haircut frequencies for men and women" },
      { id: "ge-004-r3", text: "Correctly converts annual total to a daily figure" },
      { id: "ge-004-r4", text: "Final answer is between 3 million and 15 million per day" }
    ]
  },

  {
    id: "ge-005",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: ["sensitivity-analysis", "bounding-estimates"],
    difficulty: "medium",
    question: "How many commercial aircraft are in the air over the United States at any given moment on a typical Tuesday afternoon?",
    context: "Consider only commercial passenger jets, not private planes, cargo aircraft, or military aircraft. 'In the air' means airborne and in US airspace.",
    hints: [
      "Think about this from the demand side: how many commercial flights depart US airports each day, and what is the average flight duration?",
      "US airports handle roughly 45,000 commercial flights per day total. If the average flight duration is 2.5 hours, you can calculate the average number airborne at any moment.",
      "If 45,000 flights/day × 2.5 hrs average duration, that's 112,500 aircraft-hours/day ÷ 24 hours = ~4,700 aircraft aloft at any average moment. Tuesday afternoon is a peak period, so it could be 1.3–1.5× the daily average → ~6,000–7,000 aircraft."
    ],
    referenceSolution: {
      approach: "Use Little's Law: average number in system = arrival rate × average time in system. Here: aircraft aloft = (flights/day) × (average duration in days).",
      reasoning: "Step 1 — Daily commercial flights in the US: the FAA handles ~45,000 commercial flights per day on average. Step 2 — Average flight duration: a mix of short hops (LAX-SFO, 1 hr) and transcontinental flights (JFK-LAX, 5 hrs). Weighted average duration ≈ 2.5 hours. Step 3 — Apply Little's Law: aircraft aloft on average = 45,000 flights/day × (2.5 hrs / 24 hrs/day) = 45,000 × 0.104 = 4,688. Step 4 — Time-of-day adjustment: air traffic is not uniform. Tuesday afternoon (2-5 PM) is a peak period. Flight volume during peak hours is roughly 1.4× the daily average. Peak aircraft aloft ≈ 4,688 × 1.4 ≈ 6,600. Step 5 — Sensitivity check: if average duration is 2 hrs instead of 2.5: 45,000 × (2/24) × 1.4 ≈ 5,250. If 3 hrs: ≈ 7,875. The estimate is robust at 5,000–8,000. Best estimate: ~5,000–7,000 aircraft.",
      commonMistakes: "Not accounting for the non-uniform distribution of flights throughout the day (most flights don't happen at 3 AM). Confusing total aircraft in the US fleet (~7,500 mainline jets) with the number airborne — not all are flying at once. Forgetting that some aircraft are short-haul and turn around multiple times per day.",
      alternatives: "Fleet utilization approach: US mainline + regional carriers operate ~7,500 commercial aircraft. Aircraft average 10-12 flight hours per day. At any moment, fraction airborne = 11 hours aloft / 24 hours = 46% → 7,500 × 0.46 ≈ 3,450. This is lower than the Little's Law approach because it counts aircraft, not flights (some aircraft make multiple short hops). Reconciling: 3,450–6,600 gives a range of 4,000–7,000."
    },
    rubric: [
      { id: "ge-005-r1", text: "Uses a structured approach (Little's Law or equivalent) rather than guessing" },
      { id: "ge-005-r2", text: "States the key inputs: daily flights and average duration" },
      { id: "ge-005-r3", text: "Adjusts for time-of-day variation (peak vs. average)" },
      { id: "ge-005-r4", text: "Performs a sensitivity check or cross-validation with an alternative approach" },
      { id: "ge-005-r5", text: "Final answer is in the range of 3,000–10,000 aircraft" }
    ]
  },

  // ── MARKET SIZING (ge-006 to ge-010) ──────────────────────────────────────

  {
    id: "ge-006",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: ["unit-economics"],
    difficulty: "easy",
    question: "What is the annual market size of the US coffee shop industry in dollars?",
    context: "Include all revenues from coffee shops (Starbucks, Dunkin', independent cafes, etc.) — coffee drinks, food, merchandise. Do not include grocery or home coffee products.",
    hints: [
      "You can approach this from the demand side (how many Americans buy coffee shop coffee, and how often?) or the supply side (how many coffee shops, what is average revenue per shop?).",
      "Supply-side: the US has roughly 35,000 Starbucks-equivalent coffee shops. An average coffee shop does about $400,000–$500,000 per year in revenue.",
      "35,000 shops × $450,000/year = $15.75 billion. Add Starbucks specifically (~16,000 US locations × $1.7M/year average = $27B), which suggests the total market is significantly larger. Better estimate: 38,000 locations at a weighted average of ~$950K = ~$36B."
    ],
    referenceSolution: {
      approach: "Use a supply-side approach: number of coffee shop locations × average annual revenue per location.",
      reasoning: "Step 1 — Number of US coffee shop locations: Starbucks has ~16,000 US locations. Dunkin' has ~9,500. Independent and regional chains make up roughly the same combined count as both majors → total ≈ 38,000–40,000 locations. Use 38,000. Step 2 — Average annual revenue per location: this varies enormously. Starbucks stores average ~$1.7M/year. Dunkin' averages ~$900K/year. Independent shops average ~$250K/year. Weighted average: Starbucks (16K × $1.7M) + Dunkin' (9.5K × $0.9M) + others (12.5K × $0.4M) = $27.2B + $8.55B + $5B = $40.75B. Step 3 — Total market: ~$41 billion. Order-of-magnitude range: $30B–$50B. The actual IBISWorld figure for 2023 was ~$48B (including Starbucks food which is a growing share).",
      commonMistakes: "Using a single average revenue figure for all shops — Starbucks stores are dramatically higher-revenue than independents and this drives the total significantly. Forgetting food revenue, which at Starbucks is now ~20-25% of sales. Confusing locations with companies.",
      alternatives: "Demand-side check: 130M US coffee drinkers × 3 coffee shop visits/week × 52 weeks × $6 average spend = 130M × 156 × $6 = $121B. This is too high because not all coffee drinkers go to shops; most make coffee at home most days. Adjusting to 1 coffee shop visit/week: 130M × 52 × $6 = $40.6B. Consistent with supply-side."
    },
    rubric: [
      { id: "ge-006-r1", text: "Uses a structured approach (supply-side or demand-side) stated explicitly" },
      { id: "ge-006-r2", text: "Accounts for the revenue difference between chains (Starbucks) and independents" },
      { id: "ge-006-r3", text: "Includes food revenue, not just beverages" },
      { id: "ge-006-r4", text: "Final answer is between $20B and $70B" },
      { id: "ge-006-r5", text: "Performs at least one cross-check or sanity test" }
    ]
  },

  {
    id: "ge-007",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: ["market-dynamics"],
    difficulty: "easy",
    question: "How large is the US market for pet food, in annual dollars?",
    context: "Include all commercially sold pet food: dry kibble, wet/canned food, raw/freeze-dried, treats, and supplements. Focus on the US only.",
    hints: [
      "Start with the number of pets in the US, then think about how much owners spend per pet per year.",
      "The US has about 90 million dogs and 94 million cats as pets. Other pets (birds, fish, reptiles) have much lower food spend.",
      "Dogs: 90M × $500/year = $45B. Cats: 94M × $250/year = $23.5B. Other pets: maybe $3B. Total ≈ $71B. This is likely high — check against per-household spend."
    ],
    referenceSolution: {
      approach: "Estimate from the demand side: number of pets by type × average annual food spend per pet.",
      reasoning: "Step 1 — Pet population: US has ~90M pet dogs and ~94M pet cats. Other pets (birds, fish, small mammals, reptiles) total ~200M in number but very low food cost per animal. Step 2 — Annual food spend per pet: Dogs eat more and food is more expensive. Premium kibble for a medium dog: 30 lbs/month × $1.50/lb × 12 = $540/year. Budget end: $200/year. Average (mix of premium, standard, treats): ~$400/year. Cats: average ~$200/year (smaller, eat less, but many owners buy wet food). Other pets: very low, maybe $30/year average. Step 3 — Total spend: Dogs: 90M × $400 = $36B. Cats: 94M × $200 = $18.8B. Other: 200M × $30 = $6B. Total: $60.8B. Step 4 — Range: $50B–$75B. The actual APPA figure for 2023 was ~$58B. Our estimate of ~$61B is on target.",
      commonMistakes: "Using per-pet figures that are too high by including vet bills or accessories. Forgetting that not every household pet eats commercial food (some dog owners cook for their pets or feed table scraps). Underestimating the number of cats — cats slightly outnumber dogs in the US.",
      alternatives: "Household approach: 67% of US households (≈90M) own pets; average pet-owning household spends ~$700/year on pet food → 90M × $700 = $63B. Very consistent with the per-animal approach."
    },
    rubric: [
      { id: "ge-007-r1", text: "Estimates the pet population rather than using household data alone" },
      { id: "ge-007-r2", text: "Differentiates between dogs and cats (different spend per animal)" },
      { id: "ge-007-r3", text: "Includes treats and supplements as part of 'pet food'" },
      { id: "ge-007-r4", text: "Final answer is between $35B and $90B" }
    ]
  },

  {
    id: "ge-008",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: [],
    difficulty: "easy",
    question: "What is the total annual revenue of the US gym and fitness club industry?",
    context: "Include all commercial gym memberships and class fees (Planet Fitness, Equinox, CrossFit boxes, yoga studios, etc.). Exclude at-home fitness equipment sales and personal training done outside gyms.",
    hints: [
      "Think about what fraction of Americans have gym memberships, the average membership cost, and then add class-based studios as a separate segment.",
      "About 20% of Americans (67M people) have some form of gym membership. Average monthly fee is around $40/month for a standard gym.",
      "67M members × $40/month × 12 months = $32B from memberships alone. Add premium studios and class revenue for another $8-10B → total ~$40B."
    ],
    referenceSolution: {
      approach: "Estimate total membership revenue from the demand side, then add class/studio revenue as a separate segment.",
      reasoning: "Step 1 — Gym membership base: approximately 20% of US adults have gym memberships → 260M adults × 0.20 = 52M gym members. Step 2 — Average membership fee: Budget gyms (Planet Fitness, ~$10-25/month) serve roughly 40% of members. Mid-tier gyms (24-Hour Fitness, LA Fitness, ~$40-60/month) serve ~45%. Premium gyms (Equinox, ~$200/month) serve ~5%. Boutique studios (CrossFit, yoga, ~$150/month) serve ~10%. Weighted average: (0.40×$17) + (0.45×$50) + (0.05×$200) + (0.10×$150) = $6.8 + $22.5 + $10 + $15 = $54.30/month. Step 3 — Annual membership revenue: 52M × $54.30 × 12 = $33.9B. Step 4 — Additional revenues: day passes, personal training fees at gyms, pro shops ≈ 15% additional → $33.9B × 1.15 ≈ $39B. Range: $30B–$50B. Actual IBISWorld 2023 figure: ~$37B.",
      commonMistakes: "Using only the modal (most common) gym price — the mix of budget to premium gyms is wide and the weighted average is higher than the $10/month Planet Fitness everyone remembers. Forgetting boutique studios (yoga, Pilates, cycling) which are a significant and fast-growing segment.",
      alternatives: "Supply-side: ~40,000 gym/fitness facilities in the US. Average revenue per facility: large gyms at $2M/year, smaller studios at $400K/year. Mix of 60% large, 40% small → weighted average $1.4M. 40,000 × $1.4M = $56B. Somewhat high; the discrepancy comes from the 'large gym' average being overestimated for mid-tier gyms."
    },
    rubric: [
      { id: "ge-008-r1", text: "Estimates gym membership penetration (acceptable range: 15–25% of adults)" },
      { id: "ge-008-r2", text: "Uses a weighted average price across budget/mid/premium tiers rather than a single price" },
      { id: "ge-008-r3", text: "Includes boutique studios or class-based revenue as a segment" },
      { id: "ge-008-r4", text: "Final answer is between $20B and $60B" }
    ]
  },

  {
    id: "ge-009",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: ["decomposition-to-fundamentals"],
    difficulty: "easy",
    question: "Estimate the annual market size of the US wedding industry.",
    context: "Include all direct spending related to weddings: venues, catering, photography, flowers, attire (dress, suit, etc.), music, invitations, honeymoon travel, and rings. US only.",
    hints: [
      "Start with how many weddings happen in the US each year, then estimate the average total spend per wedding.",
      "Roughly 2 million weddings take place in the US each year. The average American wedding costs between $25,000 and $35,000.",
      "2M weddings × $30,000 average spend = $60 billion. The actual figure is ~$57-70B depending on the source and what is included."
    ],
    referenceSolution: {
      approach: "Estimate annual number of weddings × average spend per wedding, then cross-check by decomposing spend per wedding into categories.",
      reasoning: "Step 1 — Annual weddings: US population 335M. Age at first marriage averages ~28 (women) to 30 (men). Of each birth cohort of ~4M, roughly 70% eventually marry. At steady state, about 2M couples marry each year. Step 2 — Average spend per wedding: Venue + catering: ~$12,000 (largest cost). Photography/video: ~$3,000. Flowers/decor: ~$2,500. Wedding attire: ~$2,000. Music (DJ or band): ~$2,000. Invitations/stationery: ~$500. Rings (engagement + wedding bands): ~$6,000 (but ring often bought separately before the wedding). Honeymoon: ~$5,000. Miscellaneous (hair, makeup, transportation): ~$2,000. Total per wedding (excluding ring): ~$29,000. Including ring: ~$35,000. Step 3 — Total market: 2M × $32,000 (midpoint) = $64B. Range: $55B–$75B. Actual reported figure (~2023): $57B–$72B depending on methodology.",
      commonMistakes: "Forgetting that engagement rings are often purchased separately and months in advance — they may or may not be counted in 'wedding industry' depending on the definition. Underestimating catering costs, which are the single largest line item. Not accounting for the wide distribution — 20% of couples spend >$50K while 20% spend under $10K.",
      alternatives: "Industry supply-side: ~600,000 wedding-related businesses in the US. Average revenue per vendor ≈ $100K/year (mix of large venues at $500K to solo photographers at $60K). 600,000 × $100K = $60B. Consistent."
    },
    rubric: [
      { id: "ge-009-r1", text: "Estimates the number of annual US weddings (acceptable: 1.5M–2.5M)" },
      { id: "ge-009-r2", text: "Decomposes average spend into at least 4 distinct line items" },
      { id: "ge-009-r3", text: "Addresses the ring question — whether to include or exclude it" },
      { id: "ge-009-r4", text: "Final answer is between $40B and $100B" }
    ]
  },

  {
    id: "ge-010",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: ["competitive-analysis", "assumption-validation"],
    difficulty: "medium",
    question: "You are advising a startup that wants to enter the US market for meal kit delivery (like HelloFresh or Blue Apron). Estimate the current size of that market and the realistic addressable market for a new entrant.",
    context: "Meal kit delivery: customers pay $8-12 per serving for boxes of pre-portioned ingredients with recipes, delivered to their door. Focus on the US market. Estimate both total market size and the realistic share a new entrant could capture.",
    hints: [
      "Start by sizing the total market: how many US households subscribe to a meal kit service, and what do they pay per year? Then consider how concentrated the market is.",
      "Roughly 8–10 million US households subscribe to a meal kit service. Average spend is ~$150–200/month. The top 3 players (HelloFresh, Home Chef, Everyplate) hold ~80% of the market.",
      "Total market: 9M households × $175/month × 12 = ~$18.9B. But churn is very high in this industry (50-70% annual). Realistically addressable for a new entrant without massive marketing spend: 1-3% market share = $190M–$570M, achievable only after several years of operation."
    ],
    referenceSolution: {
      approach: "Size the total market top-down, then estimate addressable share using market concentration and customer economics.",
      reasoning: "Step 1 — Total market size: US has ~130M households. Meal kit penetration is low — roughly 7% of households have ever tried a meal kit; active subscribers are ~3-4% → ~4M–5M households currently subscribed. Average plan: 3 meals × 2 servings × $10/serving = $60/week; many subscribe for 2-3 weeks/month → $120-180/month. Use $150/month. Total: 4.5M × $150 × 12 = $8.1B. Step 2 — Market concentration: HelloFresh holds ~65% share, Home Chef ~15%, EveryPlate (HelloFresh brand) accounts for part of the HelloFresh total. Top 3 players control ~80%+ of the market. This is a winner-take-most dynamic driven by logistics scale. Step 3 — Realistic entrant share: in mature, concentrated markets, new entrants without differentiation typically capture 1-5% within 3-5 years. At $8B total market: 1% = $80M, 5% = $400M. A new entrant needs a clear wedge (niche cuisine, dietary restriction, hyper-local sourcing) to justify customer acquisition against giants with far lower CAC. Step 4 — The total addressable market (TAM) for a new entrant might be the niche, not the whole: e.g., the 'plant-based meal kit' sub-market is perhaps 15% of total → $1.2B TAM for a vegan-focused entrant, of which 10-15% share = $120M–$180M.",
      commonMistakes: "Treating the total US market as the addressable market without considering that 80% is locked up by entrenched players with structural advantages (logistics networks, supplier contracts). Overestimating subscriber count — meal kits have extremely high churn rates and the active subscriber base is much smaller than the 'ever tried' population. Ignoring that the industry has been shrinking since the pandemic boom.",
      alternatives: "Cross-check: HelloFresh reported ~$2.7B US revenue in 2022. At 65% market share, total market = $2.7B / 0.65 = $4.1B. This is lower than our estimate because our subscriber count may be too high or spend too high. Adjusting down: 3M active subscribers × $120/month × 12 = $4.3B. Consistent with public data."
    },
    rubric: [
      { id: "ge-010-r1", text: "Estimates active subscribers (not just trial users) as the demand base" },
      { id: "ge-010-r2", text: "Calculates average annual spend per subscriber" },
      { id: "ge-010-r3", text: "Addresses market concentration and what it means for a new entrant" },
      { id: "ge-010-r4", text: "Distinguishes TAM from the realistic addressable market for a new entrant" },
      { id: "ge-010-r5", text: "Acknowledges high churn as a structural challenge in this market" },
      { id: "ge-010-r6", text: "Final total market estimate is between $3B and $20B" }
    ]
  },

  // ── PHYSICAL ESTIMATION (ge-011 to ge-015) ────────────────────────────────

  {
    id: "ge-011",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: ["unit-analysis"],
    difficulty: "easy",
    question: "How much does a fully loaded Boeing 747 weigh at takeoff?",
    context: "A Boeing 747-400 is a large four-engine wide-body passenger aircraft. Estimate the maximum takeoff weight by reasoning from its components: structure, fuel, passengers and luggage, cargo.",
    hints: [
      "Break the weight into four parts: the empty aircraft structure, the fuel load, the passengers and their luggage, and belly cargo.",
      "A 747 has a structural (empty) weight of roughly 180,000 kg. It holds up to 57,000 gallons of jet fuel. A gallon of jet fuel weighs about 6.7 lbs (~3 kg).",
      "Structure: 180,000 kg. Fuel: 57,000 gal × 3 kg/gal = 171,000 kg. Passengers (400 people): 400 × 95 kg (person + luggage) = 38,000 kg. Cargo: ~15,000 kg. Total: ~404,000 kg ≈ 400 metric tons."
    ],
    referenceSolution: {
      approach: "Decompose maximum takeoff weight (MTOW) into: empty weight + fuel + passengers & bags + cargo.",
      reasoning: "Step 1 — Empty operating weight: a 747-400 empty operating weight is approximately 178,000 kg (this includes aircraft structure, engines, crew, water, galleys). Step 2 — Fuel: a 747 has a fuel capacity of ~57,000 gallons. Jet-A fuel density ≈ 0.8 kg/L = 3.03 kg/gal. Full fuel load: 57,000 × 3.03 = 172,710 kg ≈ 173,000 kg. Step 3 — Passengers and luggage: 747-400 seats ~400 passengers in a mixed-class configuration. IATA standard weight for passenger + carry-on + checked bag ≈ 95 kg (summer) to 100 kg (winter). Use 97 kg: 400 × 97 = 38,800 kg. Step 4 — Belly cargo: a 747 has large lower-deck cargo holds (~150 m³). Partially filled on passenger flights ≈ 10,000–15,000 kg typical. Use 12,000 kg. Step 5 — MTOW: 178,000 + 173,000 + 38,800 + 12,000 = 401,800 kg ≈ 400 metric tons. Actual 747-400 MTOW: 412,775 kg (412.8 metric tons). Our estimate is within 3%.",
      commonMistakes: "Underestimating the fuel load — fuel is the second-largest component by weight on a long-haul flight, nearly as heavy as the aircraft itself. Forgetting that empty weight includes crew, galley equipment, and water. Using passenger weight without luggage.",
      alternatives: "Rule of thumb cross-check: MTOW of large commercial jets is typically 2.0–2.5× the empty operating weight. 178,000 × 2.3 = 409,400 kg. Consistent with our detailed estimate."
    },
    rubric: [
      { id: "ge-011-r1", text: "Decomposes MTOW into at least 3 distinct weight categories" },
      { id: "ge-011-r2", text: "Correctly estimates fuel weight (acknowledges fuel is very heavy, approaching the aircraft's own weight)" },
      { id: "ge-011-r3", text: "Uses a per-passenger weight that includes luggage" },
      { id: "ge-011-r4", text: "Final answer is between 300 and 500 metric tons" }
    ]
  },

  {
    id: "ge-012",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: [],
    difficulty: "easy",
    question: "How many liters of water are in an Olympic swimming pool?",
    context: "An Olympic-size swimming pool has standard dimensions: 50 meters long, 25 meters wide, and 2 meters deep. Estimate the volume and convert to liters.",
    hints: [
      "Volume is length × width × depth. Make sure you know the relationship between cubic meters and liters.",
      "50m × 25m × 2m = 2,500 cubic meters. How many liters is a cubic meter?",
      "1 cubic meter = 1,000 liters. So 2,500 m³ = 2,500,000 liters = 2.5 million liters."
    ],
    referenceSolution: {
      approach: "Calculate the volume of the rectangular pool in cubic meters and convert to liters.",
      reasoning: "Step 1 — Pool dimensions: Olympic standard is 50 m × 25 m × 2 m depth. Step 2 — Volume in cubic meters: V = 50 × 25 × 2 = 2,500 m³. Step 3 — Convert to liters: 1 m³ = 1,000 L. Volume = 2,500 × 1,000 = 2,500,000 L = 2.5 million liters. Step 4 — Weight check: water has a density of 1 kg/L, so 2.5M liters = 2,500 metric tons of water. This is about 6× the weight of a loaded 747 — plausible for a large pool. Step 5 — Real-world check: this is also equivalent to about 660,000 US gallons. A typical backyard pool holds ~50,000 gallons → an Olympic pool holds ~13 backyard pools' worth. Feels right.",
      commonMistakes: "Confusing cubic meters and liters (the most common error). Using the wrong depth — Olympic pools are 2m deep, not 1m or 1.5m. Forgetting to verify the answer with a physical intuition check.",
      alternatives: "Using feet: ~164 ft × 82 ft × 6.6 ft = 88,763 ft³ × 28.3 L/ft³ = 2,512,000 L. Consistent. In US gallons: 2,500 m³ = 660,430 gallons."
    },
    rubric: [
      { id: "ge-012-r1", text: "Uses correct Olympic pool dimensions (50m × 25m × 2m)" },
      { id: "ge-012-r2", text: "Correctly converts cubic meters to liters (×1,000)" },
      { id: "ge-012-r3", text: "Final answer: 2,500,000 liters (±10%)" },
      { id: "ge-012-r4", text: "Includes a physical intuition check on the result" }
    ]
  },

  {
    id: "ge-013",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: ["sanity-checks"],
    difficulty: "easy",
    question: "How many sheets of paper would you need to stack to reach the height of the Empire State Building?",
    context: "The Empire State Building is 443 meters tall to its roof (not including the antenna). A standard sheet of copy paper has a thickness of approximately 0.1 mm (100 micrometers).",
    hints: [
      "This is a straightforward unit conversion problem. Just divide the height of the building by the thickness of one sheet.",
      "Convert both to the same units. The building is 443 meters = 443,000 mm. Each sheet is 0.1 mm.",
      "443,000 mm ÷ 0.1 mm/sheet = 4,430,000 sheets = 4.43 million sheets."
    ],
    referenceSolution: {
      approach: "Divide the building height by the thickness of one sheet of paper, using consistent units.",
      reasoning: "Step 1 — Building height: 443 meters = 443,000 mm = 44,300 cm. Step 2 — Paper thickness: one sheet of standard 80 g/m² copy paper ≈ 0.1 mm = 100 micrometers. This can be estimated: a ream of 500 sheets is about 5 cm thick → 5 cm / 500 = 0.01 cm = 0.1 mm per sheet. Consistent. Step 3 — Number of sheets: 443,000 mm ÷ 0.1 mm = 4,430,000 sheets ≈ 4.43 million sheets. Step 4 — Sanity check: 4.43 million sheets ÷ 500 sheets/ream = 8,860 reams. At ~$5/ream this would cost ~$44,000 in paper — not implausible for a 443-meter stack. Weight: 4.43M sheets × 5 grams/sheet ≈ 22 metric tons. Sounds like a lot but is plausible for a paper column.",
      commonMistakes: "Getting confused by unit prefixes: forgetting that 1 mm = 0.001 m and thus 443 m = 443,000 mm. Estimating paper thickness as 1 mm (10× too thick) — a common error. Not checking the reasonableness of the answer.",
      alternatives: "If you don't know paper thickness: one ream (500 sheets) is about 2 inches = 5.08 cm. Per sheet: 5.08/500 = 0.01 cm = 0.1 mm. You can derive the thickness from a ream."
    },
    rubric: [
      { id: "ge-013-r1", text: "Converts both quantities to the same unit before dividing" },
      { id: "ge-013-r2", text: "Uses a paper thickness of 0.05–0.2 mm (reasonable range)" },
      { id: "ge-013-r3", text: "Final answer is between 2 million and 9 million sheets" },
      { id: "ge-013-r4", text: "Includes a sanity check (e.g., reams, weight, or cost)" }
    ]
  },

  {
    id: "ge-014",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: ["analogical-reasoning"],
    difficulty: "easy",
    question: "How much does the air in a typical classroom weigh?",
    context: "Assume a standard rectangular classroom: 10 meters long, 8 meters wide, 3 meters tall. Air at sea level and room temperature has a density of approximately 1.2 kg per cubic meter.",
    hints: [
      "Calculate the volume of the room, then multiply by the density of air.",
      "Volume = 10 × 8 × 3 = 240 cubic meters. Air density ≈ 1.2 kg/m³.",
      "240 m³ × 1.2 kg/m³ = 288 kg ≈ 290 kg. That is about the weight of two large adults — surprisingly heavy for something invisible."
    ],
    referenceSolution: {
      approach: "Calculate room volume and multiply by air density.",
      reasoning: "Step 1 — Room volume: 10 m × 8 m × 3 m = 240 m³. Step 2 — Air density at standard conditions (20°C, sea level): 1.2 kg/m³. This can be estimated from first principles: air is ~78% N₂ (molar mass 28 g/mol) and ~21% O₂ (32 g/mol). Effective molar mass ≈ 29 g/mol. At STP, 1 mole of gas = 22.4 L → 1 m³ = 1000L/22.4L × 29 g = 1,295 g ≈ 1.2 kg/m³. Step 3 — Weight of air: 240 × 1.2 = 288 kg ≈ 290 kg. Step 4 — Intuition check: 290 kg is about the weight of two adults or three large suitcases. It seems surprisingly heavy, but air is denser than most people intuit. A 1-liter water bottle contains about 1.2 grams of air. 240 m³ = 240,000 liters × 1.2 g = 288,000 g = 288 kg. Consistent.",
      commonMistakes: "Assuming air is negligibly light — this is a common intuition failure. Air has real mass. Using air density of 1.2 g/m³ instead of 1.2 kg/m³ (off by 1,000×).",
      alternatives: "Atmospheric pressure approach: pressure at sea level = 101,325 Pa = 101,325 N/m² = weight of air column per m² of floor area. For our 80 m² classroom, the total weight of all air above is 80 × 101,325 N / 9.8 m/s² ≈ 827,000 kg. But this is the weight of the entire atmosphere above the floor, not just the room air — not the right approach for this problem."
    },
    rubric: [
      { id: "ge-014-r1", text: "Calculates room volume correctly (length × width × height)" },
      { id: "ge-014-r2", text: "Uses air density in the range 1.0–1.3 kg/m³" },
      { id: "ge-014-r3", text: "Final answer is between 200 kg and 400 kg" },
      { id: "ge-014-r4", text: "Notes the surprising intuition that air has significant mass" }
    ]
  },

  {
    id: "ge-015",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: ["bounding-estimates", "first-principles-analysis"],
    difficulty: "medium",
    question: "Estimate the total length of all roads in the United States, in kilometers.",
    context: "Include all paved and unpaved roads: interstates, state highways, county roads, city streets, and private rural roads. You do not need to differentiate by type — just estimate a total.",
    hints: [
      "Think about the US as a grid. The continental US is roughly 4,500 km east-west and 2,500 km north-south. But roads don't just connect the coasts — they fill in a fine-grained grid within this space.",
      "Consider the US at different scales: interstate highways (~80,000 km), state routes, county roads (the largest category), and city streets. The density of roads per square kilometer differs dramatically between urban and rural areas.",
      "The US has about 9.8M km² of land area. Average road density (all roads) is about 0.67 km of road per km² of land. 9.8M × 0.67 ≈ 6.6M km. Cross-check: ~4 million miles of roads reported by FHWA. 4M miles × 1.61 = 6.4M km. Consistent."
    ],
    referenceSolution: {
      approach: "Estimate from two independent approaches — a grid/density model and a segment-type build-up — and cross-check them.",
      reasoning: "Approach 1 — Area density model: The continental US covers ~7.7M km² (Alaska adds 1.7M km², Hawaii adds 0.028M km²). Total US ≈ 9.8M km². Road density varies: urban areas (cities, suburbs) have high density (~5-10 km/km²); rural areas have low density (~0.2-0.3 km/km²). About 5% of US land is urban/suburban, 95% is rural. Weighted density: 0.05 × 7 + 0.95 × 0.25 = 0.35 + 0.2375 = 0.5875 km/km². Total: 9.8M × 0.59 ≈ 5.8M km. Approach 2 — Segment build-up: Interstate highways: 77,000 km. US routes + state routes: ~500,000 km. County roads (the largest category — rural farm roads, logging roads): ~4,000,000 km. City streets and local roads: ~1,500,000 km. Total: ~6.1M km. Both approaches converge on 5.5–6.5 million km. The FHWA reports approximately 6.6M km (4.1M miles) of public roads in the US, not counting private roads. Including private roads: ~7.5M km total.",
      commonMistakes: "Vastly underestimating county and rural roads — the interstate highway system is the most visible but represents only 1% of total road length. Forgetting Alaska has enormous land area but relatively few roads. Not including local city streets, which add up to a large total across thousands of municipalities.",
      alternatives: "Population-driven approach: 335M Americans, average of ~1 person per 20 meters of road (a rough heuristic for developed nations) → 335M × 20m = 6,700,000 km = 6.7M km. Very consistent."
    },
    rubric: [
      { id: "ge-015-r1", text: "Uses at least two independent estimation approaches" },
      { id: "ge-015-r2", text: "Recognizes that county/rural roads dominate the total length" },
      { id: "ge-015-r3", text: "Applies different road densities for urban vs. rural areas" },
      { id: "ge-015-r4", text: "Final answer is between 3 million and 12 million km" },
      { id: "ge-015-r5", text: "Cross-checks the two estimates and identifies whether they converge" }
    ]
  },

  // ── POPULATION ESTIMATION (ge-016 to ge-020) ──────────────────────────────

  {
    id: "ge-016",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: [],
    difficulty: "easy",
    question: "How many people in the United States are currently in college or university?",
    context: "Include all undergraduate and graduate students at two-year and four-year institutions, both public and private. US only.",
    hints: [
      "Think about the college-age population (18–22) and what fraction attends college, then add older students and graduate students.",
      "The US has about 20 million people aged 18–22. About 65% of high school graduates immediately enroll in college. But many students are older than 22.",
      "Roughly: ~13M traditional-age undergrads + 4M adult undergrads (part-time, older) + 3M graduate students = ~20M total. The actual NCES figure is about 19–20M."
    ],
    referenceSolution: {
      approach: "Estimate undergraduate enrollment from the 18-22 age cohort, then add older undergrads and graduate students.",
      reasoning: "Step 1 — Traditional-age undergrads (18-22): the 18-22 age cohort in the US ≈ 22M people (335M × 5/78 year life expectancy). About 60-65% of this cohort is enrolled in college at any given time (accounts for those not going and those who've graduated early). 22M × 0.62 = 13.6M. Step 2 — Non-traditional undergrads: adults over 22 returning to school, part-time students, community college students. This is a large group — roughly 4-6M additional. Use 5M. Step 3 — Graduate students: master's and doctoral students. About 3M people are enrolled in graduate programs. Step 4 — Total: 13.6M + 5M + 3M = 21.6M ≈ 20M. The actual NCES 2022 figure is ~19.4M total postsecondary enrollment. Our estimate of 20-22M is slightly high but within 10%.",
      commonMistakes: "Forgetting non-traditional (adult/part-time) students — they represent nearly 40% of all college students. Forgetting graduate students, who add 3M to the total. Using 100% enrollment for the 18-22 cohort — many in this group work rather than attending college.",
      alternatives: "Institutional approach: the US has ~4,000 colleges and universities, with an average of ~5,000 students each → 20M students. This heuristic works well because the distribution is extremely wide (500-student liberal arts college to 60,000-student state university) and 5,000 is a reasonable weighted average."
    },
    rubric: [
      { id: "ge-016-r1", text: "Identifies traditional-age and non-traditional students as separate segments" },
      { id: "ge-016-r2", text: "Separately estimates graduate students" },
      { id: "ge-016-r3", text: "Uses a college enrollment rate less than 100% for the 18-22 cohort" },
      { id: "ge-016-r4", text: "Final answer is between 15M and 25M students" }
    ]
  },

  {
    id: "ge-017",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: ["identifying-unknowns"],
    difficulty: "easy",
    question: "How many left-handed people are there in the United States?",
    context: "Estimate the number of left-handed Americans, given that handedness has a known approximate distribution in the human population.",
    hints: [
      "Left-handedness is not rare but is definitely a minority. Think about people you know — how many are left-handed?",
      "Research consistently shows that about 10% of the human population is left-handed, with slight variation by country and gender (men slightly more likely to be left-handed).",
      "US population: 335M × 10% = 33.5 million left-handed Americans."
    ],
    referenceSolution: {
      approach: "Apply the known population prevalence of left-handedness to the US population.",
      reasoning: "Step 1 — Prevalence of left-handedness: multiple large studies show approximately 10% of humans are left-handed (range: 8-13% depending on the study and how handedness is measured). This is consistent across most modern cultures. Men are slightly more likely to be left-handed (~12%) than women (~8%). Step 2 — US population: 335M total. Adult/child ratio doesn't matter here since handedness is fixed by early childhood. Step 3 — Number of left-handed Americans: 335M × 0.10 = 33.5 million. Using the gender-adjusted rate: 167M men × 0.12 + 168M women × 0.08 = 20M + 13.4M = 33.4M — essentially the same. Step 4 — Sanity check: in a group of 10 people, 1 is left-handed on average. Think of your own social circle — does this match observation? For most people, yes.",
      commonMistakes: "Thinking left-handedness is rarer than it is (e.g., 1-2%) — this was more common in older data from eras when left-handedness was suppressed by forcing children to write with their right hand. Modern data consistently shows ~10%.",
      alternatives: "Could approach from personal observation: if you ask 30 people about their dominant hand, you'd expect 3 left-handed. Scale: if 1 in 10 people in the US of 335M is left-handed → 33.5M."
    },
    rubric: [
      { id: "ge-017-r1", text: "States the approximately 10% prevalence rate (acceptable range: 8-13%)" },
      { id: "ge-017-r2", text: "Applies the rate to the correct US population figure" },
      { id: "ge-017-r3", text: "Final answer is between 25M and 45M" },
      { id: "ge-017-r4", text: "Provides a personal observation or intuition check" }
    ]
  },

  {
    id: "ge-018",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: ["mece-decomposition"],
    difficulty: "easy",
    question: "How many doctors (physicians) are practicing medicine in the United States right now?",
    context: "Include all licensed, actively practicing MDs and DOs — primary care, specialists, surgeons. Include hospital-employed and private-practice physicians. Do not include dentists, optometrists, or nurses.",
    hints: [
      "Think about the doctor-to-patient ratio: a typical primary care physician has a panel of about 2,000 patients. But specialists see fewer, more complex patients.",
      "The US has ~335M people. If the average physician (across all types) effectively serves about 300 people, you can estimate from there. But primary care and specialists have very different panel sizes.",
      "About 1 doctor per 400 Americans is a common WHO/OECD benchmark for developed countries. 335M / 400 = ~840,000 physicians. The actual AAMC figure is ~1.1 million licensed physicians, of whom ~900,000 are actively practicing."
    ],
    referenceSolution: {
      approach: "Use the population-to-physician ratio as a primary estimate, then cross-check with a medical school output approach.",
      reasoning: "Step 1 — Population ratio approach: the US has roughly 2.6 physicians per 1,000 population (OECD data), or 1 per ~385 people. 335M / 385 = 870,000 physicians. Step 2 — Medical school output cross-check: the US has ~155 MD-granting medical schools graduating ~20,000 MDs/year, plus ~35 DO schools graduating ~8,000 DOs/year. Total new physicians: ~28,000/year. A physician career spans roughly 35 years (residency entry ~26, retirement ~65). At steady state, total active physicians ≈ 28,000 × 35 = 980,000. Step 3 — Reconciling: population ratio gives ~870K, output approach gives ~980K. Both round to ~900,000. Actual AAMC figure for actively practicing physicians: ~900,000–1.1M. Use 900,000 as best estimate. Step 4 — Specialty breakdown (for completeness): primary care ~30% = 270K, internal medicine subspecialties ~25%, surgical specialties ~20%, other specialties ~25%.",
      commonMistakes: "Using a ratio from a less physician-intensive country. Not accounting for the time physicians spend in residency (typically 3-7 years post-medical-school) before independent practice — slightly reduces the effective pool. Confusing licensed physicians with actively practicing ones (many licensed MDs work in research, administration, or industry).",
      alternatives: "Hospital-centric approach: the US has ~6,000 hospitals. Average staff: large academic medical centers have 500+ physicians; community hospitals have 50-200. Weighted average of ~150 per hospital → 6,000 × 150 = 900,000. Plus private practice doctors not affiliated with hospitals → total could reach 1.1M. Consistent."
    },
    rubric: [
      { id: "ge-018-r1", text: "Uses a population-to-physician ratio approach or medical school output approach" },
      { id: "ge-018-r2", text: "Cross-validates with a second independent method" },
      { id: "ge-018-r3", text: "Final answer is between 600,000 and 1.5 million physicians" },
      { id: "ge-018-r4", text: "Distinguishes active practicing physicians from licensed or total physicians" }
    ]
  },

  {
    id: "ge-019",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: [],
    difficulty: "easy",
    question: "How many people in the world speak English as their first language?",
    context: "First language (L1) speakers only — people who grew up speaking English at home. Do not include the much larger number of people who speak English as a second or foreign language.",
    hints: [
      "Identify the countries where English is the primary native language: USA, UK, Canada, Australia, New Zealand, Ireland, and a handful of Caribbean nations.",
      "The US alone has 335M people with about 75% speaking English natively. The UK has 67M (near 100% L1 English). Canada: 38M (60% L1 English). Australia: 26M (80%). New Zealand: 5M (75%). Add smaller countries.",
      "US: 335M × 0.75 = 251M. UK: 67M. Canada: 38M × 0.60 = 23M. Australia: 26M × 0.80 = 21M. NZ: 5M × 0.75 = 3.75M. Others: ~10M. Total: ~376M."
    ],
    referenceSolution: {
      approach: "Enumerate the major English-speaking countries and estimate the native English-speaking population of each.",
      reasoning: "Step 1 — United States: 335M total. Roughly 75-78% of Americans speak English as their primary home language (others speak Spanish, Chinese, etc. at home). L1 English: 335M × 0.76 = 255M. Step 2 — United Kingdom: 67M, nearly all L1 English (some Welsh, Scottish Gaelic, etc., but English is overwhelmingly dominant). Use 65M. Step 3 — Canada: 38M total. About 56-60% are L1 English (the rest are L1 French or other languages). L1 English: 38M × 0.58 = 22M. Step 4 — Australia: 26M, ~80% L1 English → 21M. Step 5 — New Zealand: 5M, ~75% L1 English → 3.75M. Step 6 — Ireland: 5M, ~95% L1 English → 4.75M. Step 7 — South Africa: 60M, ~10% L1 English → 6M. Step 8 — Caribbean and other countries: Barbados, Jamaica, Trinidad, Belize, Guyana, etc. → ~5M combined. Step 9 — Total: 255 + 65 + 22 + 21 + 3.75 + 4.75 + 6 + 5 = 382.5M ≈ 380M L1 English speakers. This is consistent with commonly cited figures of 370-400M.",
      commonMistakes: "Including L2 speakers (India, Nigeria, Philippines, etc.) — these countries have hundreds of millions of English speakers but almost none are L1 speakers. India alone has 1.4B people but fewer than 250,000 L1 English speakers. Not adjusting the US figure for the significant Spanish-dominant population.",
      alternatives: "Some linguists count a broader 'dominant language' category that includes people who are functionally native but technically bilingual from birth (e.g., many Canadians). This raises the count to 400-430M."
    },
    rubric: [
      { id: "ge-019-r1", text: "Correctly distinguishes L1 from L2 English speakers" },
      { id: "ge-019-r2", text: "Identifies at least 4 major English-speaking countries" },
      { id: "ge-019-r3", text: "Applies a realistic L1 rate for the US (less than 100%)" },
      { id: "ge-019-r4", text: "Final answer is between 300M and 500M people" }
    ]
  },

  {
    id: "ge-020",
    trackId: "guesstimation",
    subSkill: "population-estimation",
    secondarySkills: ["supply-demand", "challenging-defaults"],
    difficulty: "medium",
    question: "How many software engineers are currently employed in the United States? Then estimate how this compares to what the economy 'needs' — is there a shortage or surplus?",
    context: "Include all workers whose primary role is writing, reviewing, or architecting software code: full-stack developers, frontend/backend engineers, mobile developers, DevOps engineers, embedded systems engineers. Exclude data scientists, IT support, and project managers unless they primarily write code.",
    hints: [
      "The BLS tracks 'software developers, quality assurance analysts, and testers' as a category. Think about what fraction of the US working population is in software-adjacent roles.",
      "The US working population is ~165M. Tech industry employment is ~5M, but software engineers exist in every industry (banks, hospitals, manufacturing). The share of all workers who are software engineers is probably 2-3%.",
      "BLS reports ~4.4M 'software developers and related' roles. At roughly $120K median salary, this represents ~$528B in annual wages. Demand signals: job postings, offshoring rate, and H-1B visa demand all suggest demand exceeds domestic supply in certain specialties."
    ],
    referenceSolution: {
      approach: "Estimate total employed software engineers from occupation share, then analyze demand signals to assess shortage/surplus.",
      reasoning: "Step 1 — US employed workforce: ~165M workers. Step 2 — Share in software engineering: not all tech workers write code. Estimate: 2.5% of all workers are software engineers → 165M × 0.025 = 4.1M. Step 3 — Cross-check with industry breakdowns: tech sector employs ~5M total; ~60% write code = 3M. But software engineers in non-tech industries (banking, healthcare, auto, retail) add another 1.5M → total ~4.5M. These estimates bracket 4.1M nicely. Best estimate: ~4.4M. (BLS 2023 actual: ~4.4M 'software developers, QA analysts, and testers'.) Step 4 — Shortage or surplus analysis? Demand signals: (a) H-1B visa program is oversubscribed every year by 3:1 — 65,000 cap, ~200,000 applications. (b) Average time-to-fill software engineer roles: 45-60 days vs. 30 days for average roles. (c) ~800,000 computing job openings consistently exceeding domestic CS graduate supply of ~100,000/year. (d) Offshore outsourcing: ~$40B/year in software offshoring. Conclusion: structural shortage in software engineering, particularly in AI/ML, security, and embedded systems. The shortage is partially masked by layoffs in 2023-2024 (Meta, Google, Amazon all cut headcount), which created temporary local surplus.",
      commonMistakes: "Conflating 'tech workers' with 'software engineers' — many tech workers are in sales, marketing, operations. Not accounting for software engineers in non-tech industries (a large population). Mistaking cyclical fluctuation (2023-24 tech layoffs) for structural change in supply-demand balance.",
      alternatives: "University output approach: US CS departments graduate ~100,000 BS/MS computer science graduates per year. With a career length of ~35 years at steady state: 100,000 × 35 = 3.5M — lower than our estimate, which is reconciled by the large number of bootcamp graduates (~80,000/year), career switchers, and foreign-born engineers on work visas."
    },
    rubric: [
      { id: "ge-020-r1", text: "Estimates total software engineers at 3M–6M (uses structured reasoning, not a guess)" },
      { id: "ge-020-r2", text: "Cross-checks against at least one other data source or method" },
      { id: "ge-020-r3", text: "Analyzes at least two concrete demand signals (visa data, job openings, offshoring, etc.)" },
      { id: "ge-020-r4", text: "Distinguishes structural shortage from cyclical fluctuation" },
      { id: "ge-020-r5", text: "Reaches a clear directional conclusion (shortage vs. surplus) with stated reasoning" }
    ]
  },

  // ── ECONOMIC ESTIMATION (ge-021 to ge-025) ────────────────────────────────

  {
    id: "ge-021",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["unit-economics"],
    difficulty: "easy",
    question: "What is the total amount Americans spend on gasoline each year?",
    context: "Include all gasoline purchased by US consumers for personal vehicles. Do not include commercial fleet fuel, diesel, or jet fuel.",
    hints: [
      "Start with the number of registered personal vehicles, then estimate miles driven per year and fuel economy to get total gallons, then multiply by the price.",
      "The US has ~280 million registered vehicles. Average American drives ~12,000 miles/year. Average fuel economy is about 25 MPG for the current fleet.",
      "280M vehicles × 12,000 miles / 25 MPG = 134.4 billion gallons × $3.50/gallon ≈ $470 billion/year."
    ],
    referenceSolution: {
      approach: "Estimate total gallons consumed (vehicles × miles/year ÷ MPG) then multiply by average pump price.",
      reasoning: "Step 1 — Vehicle count: the US has approximately 280 million registered light-duty vehicles (cars, SUVs, pickup trucks). Not all are driven regularly — assume 90% are active → 252M actively used vehicles. Step 2 — Annual miles per vehicle: the average American drives about 13,500 miles/year (FHWA data). Some cars sit idle, so 12,000 miles/year as a fleet average is reasonable. Step 3 — Fleet fuel economy: the current US vehicle fleet averages about 25 MPG. Newer vehicles average ~28 MPG, but older vehicles drag this down. Use 25 MPG. Step 4 — Total gallons: 252M × 12,000 miles / 25 MPG = 252M × 480 = 120.96 billion gallons ≈ 121 billion gallons. Step 5 — Average pump price: gasoline averaged approximately $3.50/gallon in the US in 2023 (range $2.80-$4.20 across the year and regions). Step 6 — Total annual spend: 121 billion gallons × $3.50 = $423 billion ≈ $425 billion. EIA actual data: ~$450-$500B annually in recent years. Our estimate of $425B is within 10%.",
      commonMistakes: "Forgetting that not all 280M registered vehicles are driven — a meaningful fraction sit in garages or driveways. Using the number of licensed drivers rather than vehicles (there are more vehicles than drivers in the US). Using the sticker MPG rather than the real-world fleet average (older vehicles bring down the average significantly).",
      alternatives: "GDP share approach: US GDP ≈ $27T. Energy spending is typically 8-10% of GDP. Personal gasoline is one sub-component. Total US energy spending: ~$2.5T, of which gasoline is perhaps 18% → $450B. Consistent."
    },
    rubric: [
      { id: "ge-021-r1", text: "Uses the formula: vehicles × miles/year ÷ MPG × price/gallon" },
      { id: "ge-021-r2", text: "States all four inputs with explicit assumptions" },
      { id: "ge-021-r3", text: "Uses a realistic fleet MPG (20-30 MPG acceptable)" },
      { id: "ge-021-r4", text: "Final answer is between $250B and $700B" }
    ]
  },

  {
    id: "ge-022",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["orders-of-magnitude"],
    difficulty: "easy",
    question: "Estimate the total value of all US dollar bills currently in circulation.",
    context: "Consider only physical paper currency (Federal Reserve Notes) in circulation — not coins, not bank deposits, not digital money. Include all denominations: $1, $5, $10, $20, $50, $100.",
    hints: [
      "Think about the mix of denominations. The $100 bill dominates by value — nearly 80% of all US currency value is in $100 bills.",
      "There are roughly 50 billion individual dollar bills in circulation. But they are not equally distributed by denomination. In value terms, $100s dominate.",
      "About 16.4 billion $100 bills × $100 = $1.64T in $100s. Total currency in circulation is approximately $2.3 trillion."
    ],
    referenceSolution: {
      approach: "Estimate the total face value of currency in circulation by denomination, focusing on $100 bills which dominate by value.",
      reasoning: "Step 1 — Federal Reserve data (can be estimated): Total currency in circulation is reported by the Fed. Let's estimate it. US population: 335M. GDP: $27T. For a developed economy, the ratio of currency in circulation to GDP (the 'currency ratio') is roughly 8-10%. At 8%: $27T × 0.08 = $2.16T. Step 2 — Denomination breakdown (by count): The Fed reports approximately 53 billion notes in circulation. By count: $100 bills = 16.4B notes; $20s = 9.1B; $1s = 12B; $5s = 3.2B; $10s = 2.2B; $50s = 1.4B. Step 3 — By value: $100 bills: 16.4B × $100 = $1,640B = $1.64T. $20 bills: 9.1B × $20 = $182B. $50 bills: 1.4B × $50 = $70B. $10 bills: 2.2B × $10 = $22B. $5 bills: 3.2B × $5 = $16B. $1 bills: 12B × $1 = $12B. Total ≈ $1.94T ≈ $2T. Actual Federal Reserve reported figure: ~$2.3T (2023). Our estimate of $2T is within 15%. Key insight: $100 bills represent ~80% of value but only ~31% of count.",
      commonMistakes: "Assuming a uniform distribution across denominations — this dramatically underestimates total value since $100 bills dominate. Forgetting that a large fraction of $100 bills circulate outside the US (estimated 40-60% of all $100 bills are held abroad as a store of value in dollarized economies).",
      alternatives: "Velocity approach: GDP = Money × Velocity. M0 (currency) turns over roughly 10-15 times per year in transactions. GDP ≈ $27T. M0 = $27T / 12 = $2.25T. Consistent."
    },
    rubric: [
      { id: "ge-022-r1", text: "Recognizes that $100 bills dominate total value (not total count)" },
      { id: "ge-022-r2", text: "Uses at least two denominations in the calculation" },
      { id: "ge-022-r3", text: "Final answer is between $1T and $4T" },
      { id: "ge-022-r4", text: "Notes that a significant fraction of US dollars circulate internationally" }
    ]
  },

  {
    id: "ge-023",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["supply-demand"],
    difficulty: "easy",
    question: "How much money do Americans spend on Halloween each year (total national spending)?",
    context: "Include all Halloween-related spending: candy, costumes, decorations, greeting cards, and party supplies. US only. Exclude spending on non-Halloween items that happen to be bought in October.",
    hints: [
      "Start with the participating population. About 65-70% of Americans participate in Halloween in some way. Then estimate spend per participant.",
      "There are ~335M Americans. Participants: ~230M. Average spend per participant varies widely — a family going all-out on decorations vs. someone who just buys a $5 bag of candy.",
      "Average spend per participant: ~$35-40 (mix of candy-only participants at $20 and decoration-heavy households at $100+). 230M × $37 ≈ $8.5B."
    ],
    referenceSolution: {
      approach: "Estimate the participating population × average spend, broken down by major spending categories.",
      reasoning: "Step 1 — Participating population: National Retail Federation surveys show ~70% of Americans participate in Halloween. 335M × 0.70 = 234.5M ≈ 235M participants. Step 2 — Average spend per participant by category: Candy: ~$30/participating household (350M people / 2.7 people per household = 130M households × 0.70 participation × $30 = $2.73B). But individuals also buy candy at work etc. Estimate candy total: $3.5B. Costumes: ~70M children in US, ~70% dress up = 49M children × $30/costume = $1.47B. Adults: ~165M adults, 25% wear costumes = 41M × $35 = $1.44B. Total costumes: $2.9B. Decorations: ~50% of households decorate → 65M households × $25 = $1.63B. Cards/party supplies/other: ~$1B. Step 3 — Total: $3.5B + $2.9B + $1.63B + $1B = $9.03B ≈ $9B. Actual NRF 2023 reported figure: $12.2B. Our estimate of ~$9B is within 35% — the higher actual reflects higher per-person spending in recent years due to inflation and increased adult participation.",
      commonMistakes: "Forgetting adult costume spending — adults in the US participate in Halloween at high rates, not just children. Undercounting candy (it is sold to every household that distributes, plus individuals buy it for personal consumption and office parties). Using household count without distinguishing participation rate.",
      alternatives: "Per capita approach: 335M Americans × $30/person average (some spend $0, some spend $200) = $10B. Simple but reasonable given actual data."
    },
    rubric: [
      { id: "ge-023-r1", text: "Estimates the participating population (not all 335M)" },
      { id: "ge-023-r2", text: "Decomposes spending into at least 3 categories (candy, costumes, decorations)" },
      { id: "ge-023-r3", text: "Includes adult costume spending, not only children's" },
      { id: "ge-023-r4", text: "Final answer is between $5B and $20B" }
    ]
  },

  {
    id: "ge-024",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["mental-math", "sanity-checks"],
    difficulty: "easy",
    question: "If you saved $1 every second starting from birth, how long would it take to save $1 million? And $1 billion?",
    context: "This is a pure calculation problem. Assume you save exactly $1 per second, 24 hours a day, 7 days a week, from the moment you are born. Calculate the time in human-meaningful units (days, years).",
    hints: [
      "Calculate seconds per day, then per year. Divide the target by the rate.",
      "There are 86,400 seconds in a day and roughly 31.5 million seconds in a year.",
      "$1 million: 1,000,000 seconds ÷ 86,400 sec/day ≈ 11.6 days. $1 billion: 1,000,000,000 ÷ 31,536,000 sec/year ≈ 31.7 years."
    ],
    referenceSolution: {
      approach: "Calculate seconds per year, divide target amounts by rate of $1/second.",
      reasoning: "Step 1 — Seconds per unit of time: 60 sec/min × 60 min/hr = 3,600 sec/hr. 3,600 × 24 = 86,400 sec/day. 86,400 × 365 = 31,536,000 sec/year ≈ 31.5M sec/year. Step 2 — Time to $1 million: 1,000,000 sec ÷ 86,400 sec/day = 11.57 days. So $1M ≈ 11.6 days. Step 3 — Time to $1 billion: 1,000,000,000 sec ÷ 31,536,000 sec/year = 31.7 years. So $1B ≈ almost 32 years — within a human working lifetime. Step 4 — Time to $1 trillion: 1,000,000,000,000 ÷ 31,536,000 ≈ 31,710 years. More than recorded human history. Step 5 — Intuition: this illustrates why the difference between a million and a billion is so much larger than people intuit. A million seconds is less than 2 weeks; a billion seconds is 31+ years. The 1,000× difference in dollars maps to a 1,000× difference in time.",
      commonMistakes: "Mixing up millions and billions in the calculation. Not converting the final answer into meaningful human units (saying '1 billion seconds' without converting to years). Missing the key insight: this is a powerful demonstration of the psychological difference between large numbers.",
      alternatives: "Memory anchor: 1 million seconds ≈ 11.6 days. 1 billion seconds ≈ 31.7 years. 1 trillion seconds ≈ 31,700 years. These anchors are very useful for reasoning about large numbers in other contexts."
    },
    rubric: [
      { id: "ge-024-r1", text: "Correctly calculates seconds per day (86,400) and per year (~31.5M)" },
      { id: "ge-024-r2", text: "Arrives at ~11.6 days for $1M (acceptable range: 10-14 days)" },
      { id: "ge-024-r3", text: "Arrives at ~31.7 years for $1B (acceptable range: 28-36 years)" },
      { id: "ge-024-r4", text: "Notes the key insight about how much larger $1B is than $1M in time terms" }
    ]
  },

  {
    id: "ge-025",
    trackId: "guesstimation",
    subSkill: "economic-estimation",
    secondarySkills: ["decomposition-to-fundamentals", "assumption-validation", "market-dynamics"],
    difficulty: "medium",
    question: "Estimate the total annual economic cost of traffic congestion in the United States — including both direct costs (fuel wasted, time lost) and indirect costs (late deliveries, pollution, accident risk). How does this compare to the annual GDP?",
    context: "Consider all US urban areas where congestion is significant. 'Economic cost' means the value lost due to congestion relative to a world where traffic flowed freely. Do not include the cost of the road infrastructure itself.",
    hints: [
      "The two largest costs are time lost and fuel wasted. Start by estimating the number of hours lost to congestion per commuter per year, then scale to the national level.",
      "The Texas A&M Transportation Institute estimates the average US urban commuter loses about 54 hours per year to congestion. There are roughly 130 million commuters in the US.",
      "Time cost: 130M commuters × 54 hrs × $20/hr (average opportunity cost) = $140B. Fuel waste: 130M commuters × 20 gallons extra/year × $3.50 = $9.1B. Freight delay costs: significant — trucks and delivery vehicles also sit in traffic. Add $20-30B. Total direct costs: ~$165-180B. Indirect costs (supply chain disruption, emissions-related health costs, accident risk) add another 30-40%. Grand total: $220-250B ≈ 1% of US GDP ($27T)."
    ],
    referenceSolution: {
      approach: "Decompose total congestion cost into: (1) commuter time lost, (2) fuel wasted by personal vehicles, (3) commercial freight delay costs, (4) indirect costs. Sum and compare to GDP.",
      reasoning: "Step 1 — Commuter time cost: US has ~130M workers. About 85% commute by car → 110M car commuters. Average annual delay from congestion: ~54 hours (TTI Urban Mobility Report). Opportunity cost of time: use $20/hour (reflects mix of work time and personal time). Time cost: 110M × 54 hrs × $20 = $118.8B ≈ $119B. Step 2 — Fuel wasted (personal vehicles): at 54 hours of idling/slow driving, the average commuter wastes roughly 21 gallons of extra fuel per year. 110M commuters × 21 gallons × $3.50/gallon = $8.1B. Step 3 — Commercial freight delay: trucking industry carries ~$900B of goods annually. Congestion adds ~3-5% cost to urban freight → $27-45B in additional costs, most of which is driver time. Use $35B. Step 4 — Indirect costs: (a) Supply chain disruptions from unreliable transit times: hard to quantify, but commonly estimated at 15-20% of direct costs → ~$25B. (b) Health costs from additional vehicle emissions: ~$10B. (c) Additional accident risk during stop-and-go traffic: ~$5B. Total indirect: ~$40B. Step 5 — Grand total: $119B + $8B + $35B + $40B = $202B ≈ $200B. This is approximately 0.74% of US GDP ($27T). Published estimates (TTI, FHWA) typically put total congestion cost at $87B–$190B in direct costs alone, with total economic cost estimates ranging up to $300B when full indirect costs are included. Our $200B is within this range. Step 6 — GDP comparison: $200B / $27,000B = 0.74% of GDP — roughly similar to the entire US airline industry's annual revenue.",
      commonMistakes: "Counting only commuter time and forgetting commercial freight, which is often the largest single category of congestion cost. Using a wage rate rather than opportunity cost of time (people value leisure time at roughly 50-70% of their wage). Forgetting that trucks idle less efficiently than cars and waste disproportionately more fuel. Not addressing indirect costs despite them being included in the question.",
      alternatives: "Top-down approach: if 30% of US lane-miles experience significant congestion (30% × 9M lane-km = 2.7M congested lane-km), and each km of congested road creates X cost per day... this is harder to parameterize but directionally gives a similar answer. GDP ratio sanity check: most developed nations' congestion costs are 1-3% of GDP. For the US at 0.74%, this seems plausible given the US also has relatively high car ownership and sprawling cities but also decent highway infrastructure."
    },
    rubric: [
      { id: "ge-025-r1", text: "Separately quantifies commuter time cost and fuel waste as the two primary direct costs" },
      { id: "ge-025-r2", text: "Includes commercial freight delay as a distinct cost category" },
      { id: "ge-025-r3", text: "Addresses at least one indirect cost category (emissions, supply chain, accidents)" },
      { id: "ge-025-r4", text: "Computes the cost as a percentage of US GDP" },
      { id: "ge-025-r5", text: "Total estimate falls between $100B and $500B" },
      { id: "ge-025-r6", text: "States the key assumptions (hours lost per commuter, opportunity cost of time) explicitly" }
    ]
  },

];
