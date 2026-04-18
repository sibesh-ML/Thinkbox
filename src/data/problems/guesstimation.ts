import type { Problem } from '@/types';

export const guesstimationProblems: Problem[] = [

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

  // ── FERMI PROBLEMS (ge-026 to ge-030) ─────────────────────────────────────

  {
    id: "ge-026",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: ["estimation-chains", "mece-decomposition"],
    difficulty: "medium",
    question: "How many commercial flights take off in the United States every day?",
    context: "Consider all scheduled commercial passenger flights operated by US carriers or departing from US airports. Exclude private aviation, military, and cargo-only flights.",
    hints: [
      "Work from the number of major airports and their throughput. The US has a tiered airport system: a few mega-hubs, many mid-size airports, and hundreds of small regional airports.",
      "Alternatively, work from total annual passenger-miles, divide by average flight distance, and then by average passengers per flight.",
      "Rough anchor: the US has about 500 commercial airports with regular service. The top 30 hubs each handle ~400-600 departures per day; mid-size airports ~50-150; small regionals ~5-20. Weighted average across 500 airports gives a total in the range of 40,000-50,000 daily departures."
    ],
    referenceSolution: {
      approach: "Segment US airports by size, estimate average daily departures per tier, multiply and sum.",
      reasoning: "Step 1 — Airport tiers: Top 30 hubs (ATL, ORD, DFW, LAX, etc.) average ~500 departures/day each → 30 × 500 = 15,000. Mid-tier airports (next 100): average ~150 departures/day → 100 × 150 = 15,000. Small/regional airports (next 370): average ~25 departures/day → 370 × 25 = 9,250. Step 2 — Sum: 15,000 + 15,000 + 9,250 = 39,250 departures/day. Round to ~45,000 accounting for variation. Step 3 — Sanity check via passenger path: ~900M domestic passengers/year ÷ 365 days = 2.47M passengers/day. Average load factor ~85% on a ~165-seat plane → ~140 passengers/flight. 2.47M ÷ 140 = ~17,600 domestic flights/day. Adding international and regional turboprops (often counted separately) brings the total back toward 45,000. Step 4 — Range: 40,000–50,000 daily departures. The FAA reports roughly 45,000 flights handled daily across the NAS.",
      commonMistakes: "Confusing departures with total movements (each flight counts as one departure and one arrival). Forgetting regional feeder flights that connect small cities to hubs. Using only the top 10 airports and ignoring the long tail of smaller airports.",
      alternatives: "Work backward from the ~25 largest US airlines. The top 4 carriers (Delta, United, American, Southwest) each operate ~3,000-4,000 flights/day → ~13,000 combined. The remaining 20+ regional and low-cost carriers add another ~30,000, reaching ~43,000 total."
    },
    rubric: [
      { id: "ge-026-r1", text: "Segments airports by size or airlines by scale rather than guessing a single average" },
      { id: "ge-026-r2", text: "Arrives at an estimate between 30,000 and 60,000 daily departures" },
      { id: "ge-026-r3", text: "Provides at least one sanity check or triangulation" },
      { id: "ge-026-r4", text: "States key assumptions (load factor, average seats, or departures per airport) explicitly" }
    ]
  },

  {
    id: "ge-027",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: ["orders-of-magnitude", "unit-analysis"],
    difficulty: "medium",
    question: "How much does the entire internet weigh?",
    context: "This is a famous Fermi question. Interpret 'weight' as the mass of the electrons in motion that carry internet traffic at any given instant — a physics-based interpretation that makes the problem tractable.",
    hints: [
      "The key insight: data is transmitted as electrons flowing through wires. Estimate total internet traffic in bits per second, convert to electron flow (current), and use the mass of an electron.",
      "Internet backbone traffic is roughly 100-200 exabytes per month globally. Convert that to bits per second to get a continuous flow rate. One bit requires moving roughly 1 electron.",
      "100 exabytes/month = 100 × 10^18 bytes × 8 bits/byte ÷ (30 × 24 × 3600 s) ≈ 2.5 × 10^14 bits/second. Each bit ≈ 1 electron (in a wire, an electron travels ~1 mm/s but the signal travels at ~2/3 c). Final answer is in the range of 50 grams — an often-cited figure is about 50-80 grams."
    ],
    referenceSolution: {
      approach: "Estimate global internet traffic in bits/second, convert to electron current, find the number of electrons in motion per second, and multiply by electron mass.",
      reasoning: "Step 1 — Global internet traffic: ~150 exabytes/month (2023 estimate). Convert: 150 × 10^18 bytes × 8 bits/byte = 1.2 × 10^21 bits/month. Divide by seconds per month (30 × 24 × 3600 = 2.592 × 10^6 s): 1.2 × 10^21 / 2.592 × 10^6 ≈ 4.6 × 10^14 bits/second. Step 2 — Electrons per bit: in copper wire, 1 bit requires approximately 1 electron of charge to flow past a point. But a more rigorous approach: current I = Q/t where Q = charge per bit. If each bit = 1 electron of charge: 4.6 × 10^14 electrons/second passing per wire. But the internet has millions of simultaneous connections. Average TCP connection ≈ 1 Mbps; total 4.6 × 10^14 bits/sec / 10^6 bits/connection = 4.6 × 10^8 simultaneous connections. Step 3 — Electrons in transit: electrons in a wire move at drift velocity (~1 mm/s). In a 1-m cable segment, electrons transit in ~1000 s. At 4.6 × 10^14 electrons/s per wire, electrons in flight at any instant per wire = 4.6 × 10^14 × 1000 s = 4.6 × 10^17. Across 4.6 × 10^8 connections: 4.6 × 10^17 × 4.6 × 10^8 is too large — correct approach: use total current. Step 4 — Simplified physics approach: total data rate = 4.6 × 10^14 bits/s. Electron charge = 1.6 × 10^-19 C. Current = 4.6 × 10^14 × 1.6 × 10^-19 C/s = 7.4 × 10^-5 A = 74 microamps total. Electrons in a 1-m wire at drift velocity 1mm/s = current × time to traverse = 74 × 10^-6 A × 1000 s = 0.074 C. Number of electrons = 0.074 / 1.6 × 10^-19 = 4.6 × 10^17. Step 5 — Mass: electron mass = 9.1 × 10^-31 kg. Total mass = 4.6 × 10^17 × 9.1 × 10^-31 = 4.2 × 10^-13 kg ≈ 50 grams depending on assumptions about wire length. Canonically cited as ~50 grams.",
      commonMistakes: "Trying to weigh the physical servers and cables rather than the electrons in motion — that would be billions of tons, not the intent of the question. Confusing signal speed (near light speed) with electron drift velocity (mm/s). Not accounting for the enormous number of simultaneous connections.",
      alternatives: "The BBC and Russell Seitz (Harvard) both arrived at ~50 grams using similar electron-mass approaches. A simpler bound: the internet carries ~5 × 10^14 bits/sec; the energy per bit in a modern fiber link is ~1 fJ = 10^-15 J; total power = 0.5 watts for signal energy alone (not including infrastructure). This sanity-checks that we are in a very low energy regime consistent with ~50 grams of electrons."
    },
    rubric: [
      { id: "ge-027-r1", text: "Correctly identifies that 'weight' refers to electrons in motion, not hardware" },
      { id: "ge-027-r2", text: "Estimates global internet traffic in bits per second within an order of magnitude" },
      { id: "ge-027-r3", text: "Applies electron charge and/or mass correctly in the calculation" },
      { id: "ge-027-r4", text: "Arrives at an answer in the range of 1 gram – 500 grams" },
      { id: "ge-027-r5", text: "Notes the counterintuitive result (very light despite enormous scale)" }
    ]
  },

  {
    id: "ge-028",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: ["estimation-chains", "sensitivity-analysis"],
    difficulty: "hard",
    question: "How many hours of YouTube video are uploaded every minute, and how much total storage does YouTube require for its entire video library?",
    context: "YouTube has been around since 2005 and has grown exponentially. Estimate both the current upload rate and the total cumulative storage. Assume standard video compression (H.264/H.265) and that YouTube stores multiple quality versions of each video.",
    hints: [
      "YouTube has publicly stated (as of 2022) that ~500 hours of video are uploaded per minute. But you should estimate this independently: start from the number of active YouTube creators and their upload frequency.",
      "For total storage: integrate the upload rate over YouTube's history, knowing that early years had far lower rates. Then account for the fact YouTube stores each video at 4-6 different quality levels (144p through 4K).",
      "Rough integration: YouTube launched in 2005. The 500 hours/minute figure is ~2022. Growth was roughly exponential from ~10 hours/minute in 2008. A rough integral over 17 years gives total video-hours. At ~1 GB per hour of compressed 1080p video, and 5x for multiple resolutions, you can estimate total petabytes."
    ],
    referenceSolution: {
      approach: "Estimate current upload rate from creator base, then integrate historically to find total library size, then convert to storage with multi-resolution multiplier.",
      reasoning: "Part A — Current upload rate: YouTube has ~800M videos total and ~50M active creators. If active creators upload ~0.5 videos/week on average, that is 50M × 0.5 / (7 × 24 × 60) = 25M / 10,080 ≈ 2,480 videos/minute. Average video length ≈ 7 minutes → 2,480 × 7 = 17,360 minutes/minute ≈ 17,000 minutes/minute of video = ~290 hours/minute. The canonical figure is ~500 hours/minute (2022), suggesting average video length closer to 12 minutes or more creators, so our estimate is in the right order of magnitude. Use 500 hours/minute as the current rate. Part B — Historical integration: 2005-2007: ~1 hour/minute (negligible); 2008: ~10 hrs/min; 2010: ~35 hrs/min; 2012: ~72 hrs/min; 2015: ~400 hrs/min; 2022: ~500 hrs/min. Simplified: assume exponential growth doubling every 2 years from 2008. Total hours uploaded from 2005-2022 (17 years): rough integral using trapezoidal approximation. Average rate over the period ≈ ~150 hrs/min (heavily weighted by recent years). 150 hrs/min × 60 min/hr × 24 hr/day × 365 days/yr × 17 years = 150 × 525,600 × 17 = 1.34 billion hours of video. Part C — Storage per hour: 1080p video (H.264) ≈ 1.5 GB/hour. YouTube stores at 6 quality levels (144p, 240p, 360p, 480p, 720p, 1080p) plus sometimes 1440p/4K. Storage ratio across all versions ≈ 3–4× the 1080p version (lower resolutions are much smaller; 4K adds ~4× 1080p but only for a fraction of videos). Blended multiplier ≈ 4×. Storage per hour of original = 1.5 GB × 4 = 6 GB. Part D — Total storage: 1.34 × 10^9 hours × 6 GB/hour = 8.04 × 10^9 GB = 8.04 exabytes. Add thumbnails, metadata, subtitles (~5%): ~8.5 exabytes. Commonly cited estimates for YouTube's storage are 1-10 exabytes, so this is consistent. Range: 3–15 exabytes.",
      commonMistakes: "Using only the current upload rate and multiplying by full history — this overstates storage because upload rates were much lower before 2015. Forgetting the multi-resolution storage multiplier (YouTube never deletes the original). Confusing hours of video with file size in GB without a conversion factor.",
      alternatives: "Google (YouTube's parent) runs approximately 1-2 million servers. If 10% are dedicated to YouTube storage, that is 100,000-200,000 servers. Modern storage servers hold ~1 PB each → 100-200 exabytes total Google capacity. YouTube would be a fraction of that, say 5%, giving 5-10 exabytes. Consistent with the demand-side estimate."
    },
    rubric: [
      { id: "ge-028-r1", text: "Estimates upload rate from first principles (creator base or historical trajectory) rather than just stating the known figure" },
      { id: "ge-028-r2", text: "Accounts for historical growth when computing total library size (not just current rate × all years)" },
      { id: "ge-028-r3", text: "Includes the multi-resolution storage multiplier" },
      { id: "ge-028-r4", text: "Estimates total storage in the range of 1–50 exabytes" },
      { id: "ge-028-r5", text: "Provides a triangulation or sanity check from a second path" }
    ]
  },

  {
    id: "ge-029",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: ["decomposition-to-fundamentals", "bounding-estimates"],
    difficulty: "hard",
    question: "How many atoms are in the human body?",
    context: "A classic physics estimation. The human body is mostly water, with proteins and minerals. Estimate the number of atoms in a 70 kg adult human body using compositional reasoning.",
    hints: [
      "The human body is ~65% oxygen, ~18% carbon, ~10% hydrogen by mass. But hydrogen atoms are the most numerous because of their low atomic mass (1 amu). Start with the dominant elements by count, not by mass.",
      "Key conversion: 1 mole of any substance contains 6.022 × 10^23 atoms (Avogadro's number). For each element, calculate moles = (mass of that element in body) / (atomic mass in g/mol), then multiply by Avogadro's number.",
      "Hydrogen: body is ~62% hydrogen by atom count. A 70 kg body contains ~7 kg of hydrogen (mostly in water). 7,000 g / 1 g/mol = 7,000 moles × 6 × 10^23 = 4.2 × 10^27 hydrogen atoms. Oxygen adds ~2.6 × 10^27; carbon ~1.6 × 10^27. Total ≈ 7 × 10^27 atoms."
    ],
    referenceSolution: {
      approach: "Decompose the body by elemental composition (by mass), convert each element's mass to moles, multiply by Avogadro's number, and sum.",
      reasoning: "Step 1 — Body composition by mass (70 kg body): Oxygen: 65% → 45.5 kg. Carbon: 18% → 12.6 kg. Hydrogen: 10% → 7.0 kg. Nitrogen: 3% → 2.1 kg. Calcium: 1.5% → 1.05 kg. Other elements (phosphorus, sulfur, sodium, etc.): 2.5% → 1.75 kg. Step 2 — Moles of each element: Oxygen: 45,500 g / 16 g/mol = 2,844 mol. Carbon: 12,600 g / 12 g/mol = 1,050 mol. Hydrogen: 7,000 g / 1 g/mol = 7,000 mol. Nitrogen: 2,100 g / 14 g/mol = 150 mol. Calcium: 1,050 g / 40 g/mol = 26 mol. Other: ~50 mol (rough). Total moles ≈ 7,000 + 2,844 + 1,050 + 150 + 26 + 50 ≈ 11,120 mol. Step 3 — Number of atoms: 11,120 mol × 6.022 × 10^23 atoms/mol = 6.7 × 10^27 atoms. Step 4 — Dominant contributor: hydrogen alone accounts for 7,000 / 11,120 = 63% of all atoms, despite being only 10% of body mass — confirming that atomic count is dominated by the lightest elements. Step 5 — Range and rounding: 5 × 10^27 – 1 × 10^28 atoms. Best estimate: ~7 × 10^27 atoms.",
      commonMistakes: "Using elemental percentages by mass to directly estimate atom count — this severely underestimates hydrogen's contribution. Forgetting that hydrogen has atomic mass 1 while oxygen has atomic mass 16, so the same mass means 16× as many hydrogen atoms. Using the wrong Avogadro's number (off by a power of 10).",
      alternatives: "Shortcut: the body is ~60% water by mass → 42 kg of water. Molar mass of water = 18 g/mol → 42,000/18 = 2,333 mol of H₂O. Each molecule has 3 atoms (2H + 1O) → 7,000 mol of atoms from water alone. Multiply by Avogadro: 4.2 × 10^27 atoms just from water. The remaining dry mass adds roughly another 2.5 × 10^27. Total: ~6.7 × 10^27. Same answer, more elegant path."
    },
    rubric: [
      { id: "ge-029-r1", text: "Uses elemental composition by mass, not just one element" },
      { id: "ge-029-r2", text: "Correctly converts mass to moles using atomic masses" },
      { id: "ge-029-r3", text: "Applies Avogadro's number correctly (within an order of magnitude of 6 × 10^23)" },
      { id: "ge-029-r4", text: "Recognizes hydrogen dominates atom count despite low mass fraction" },
      { id: "ge-029-r5", text: "Final answer is in the range of 10^27 – 10^28 atoms" }
    ]
  },

  {
    id: "ge-030",
    trackId: "guesstimation",
    subSkill: "fermi-problems",
    secondarySkills: ["challenging-defaults", "sensitivity-analysis", "estimation-chains"],
    difficulty: "hard",
    question: "A colleague claims: 'If every person on Earth shouted at the same time, the combined sound energy would be enough to boil a cup of tea.' Evaluate this claim quantitatively. Is it plausible, off by a little, or off by orders of magnitude?",
    context: "This is a viral 'fun fact' that circulates online. Your task is to actually check the math. You need to estimate total acoustic power output of 8 billion humans shouting simultaneously, compare it to the energy needed to boil a cup of tea, and determine whether the claim holds up.",
    hints: [
      "Start with the acoustic power of a single human shout. Sound intensity level of a shout is roughly 80-85 dB at 1 meter. Convert dB to watts using the reference intensity of 10^-12 W/m². Power radiated by a point source into a sphere of radius 1m gives total watts.",
      "Energy to boil a cup of tea: heat 250 mL of water from ~20°C to 100°C. Q = mcΔT. Then compare total human acoustic power × time to this energy. You'll need to decide what 'a cup of tea' means energetically.",
      "A shout produces about 0.001 watts (1 mW) of acoustic power. 8 billion people × 0.001 W = 8 × 10^6 W = 8 MW of total acoustic power. Energy to boil a cup = 4,186 J/(kg·°C) × 0.25 kg × 80°C ≈ 83,720 J. At 8 MW, you'd boil the cup in 83,720 / 8,000,000 ≈ 0.01 seconds = 10 milliseconds. The claim appears to be approximately correct — or even an understatement."
    ],
    referenceSolution: {
      approach: "Estimate acoustic power per human shout, sum over world population, compare to energy needed to raise water temperature to boiling.",
      reasoning: "Step 1 — Acoustic power of a human shout: A loud shout is approximately 80 dB at 1 meter. dB SPL = 10 × log10(I / I₀) where I₀ = 10^-12 W/m². At 80 dB: I = 10^(80/10) × 10^-12 = 10^8 × 10^-12 = 10^-4 W/m². This is intensity (power per unit area) at r = 1 m. Power radiated into a sphere of radius 1 m: P = I × 4πr² = 10^-4 × 4π × 1 = 1.26 × 10^-3 W ≈ 1 mW. Step 2 — Total acoustic power of 8 billion people: P_total = 8 × 10^9 × 1.26 × 10^-3 = 1.0 × 10^7 W = 10 megawatts. Step 3 — Energy to boil one cup of tea: 'Boil' here reasonably means 'bring to boiling point.' Mass of tea = 250 g = 0.25 kg. Temperature rise: 20°C → 100°C, ΔT = 80°C. Specific heat of water: c = 4,186 J/(kg·°C). Energy needed: Q = 0.25 × 4,186 × 80 = 83,720 J ≈ 84 kJ. Step 4 — Time to boil at total power: t = Q / P = 84,000 J / 10,000,000 W = 0.0084 seconds ≈ 8.4 milliseconds. Step 5 — Verdict: The claim is correct — in fact, the combined shout would boil the tea in under 10 milliseconds, not 'just barely' but with substantial margin. Even at a more conservative shout power of 0.3 mW (a quieter 75 dB shout), t = 84,000 / 3,000,000 ≈ 28 milliseconds — still a fraction of a second. The claim holds up. It would be off only if you required the entire cup to be vaporized (phase change requires additional 2,260 J/g × 250 g = 565,000 J, achievable in ~56 ms). Step 6 — Sensitivity check: the key variable is shout power. The claim fails only if shout power is <1 μW per person, which would require a sound level of only ~60 dB — more like a normal conversation, not a shout.",
      commonMistakes: "Using sound pressure level directly in watts without the log-to-linear conversion. Forgetting the 4πr² term to get total radiated power from intensity. Using the energy to fully vaporize water (phase change) instead of just reaching boiling point, which makes the claim seem harder to satisfy. Overlooking that 80 dB at 1m is a reasonable shout level — some assume shouts are much louder (120 dB) or much quieter.",
      alternatives: "A human body generates ~80-100 W of metabolic power at rest. Acoustic output is roughly 0.001% of metabolic power, giving 0.001 W = 1 mW per person — consistent with the dB calculation. This cross-check confirms the acoustic power estimate without any dB math."
    },
    rubric: [
      { id: "ge-030-r1", text: "Correctly converts dB to watts (or uses an equivalent acoustic power estimate of 0.1-10 mW per shout)" },
      { id: "ge-030-r2", text: "Correctly calculates energy needed to heat 250 mL of water by ~80°C" },
      { id: "ge-030-r3", text: "Divides energy by total power to find the time required" },
      { id: "ge-030-r4", text: "Reaches a defensible verdict (claim is roughly correct / the math works)" },
      { id: "ge-030-r5", text: "Identifies the key sensitive variable (acoustic power per person) and checks it" },
      { id: "ge-030-r6", text: "Provides a cross-check or alternative path to validate shout power" }
    ]
  },

  // ── MARKET SIZING (ge-031 to ge-035) ──────────────────────────────────────

  {
    id: "ge-031",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: ["mece-decomposition", "unit-economics"],
    difficulty: "medium",
    question: "What is the annual market size of the US pet food industry in dollars?",
    context: "Include all commercially sold food for dogs, cats, and other pets (birds, fish, small mammals). Exclude veterinary products, pet accessories, and services. Estimate total consumer spending.",
    hints: [
      "Start with the number of pet-owning households and the distribution of pet types. Roughly 67% of US households own at least one pet.",
      "Segment by pet type: dogs and cats dominate spending. A dog owner spends about $500-700/year on food; a cat owner about $250-350/year. Then add small pets (fish, birds, rodents) which represent a smaller market.",
      "~90M households own pets. ~48M own dogs (avg 1.5 dogs → 72M dogs × $600/yr = $43B). ~38M own cats (avg 2 cats → 76M cats × $300/yr = $23B). Other pets: ~10M households × $100/yr = $1B. Total ≈ $67B."
    ],
    referenceSolution: {
      approach: "Estimate pet-owning households by pet type, multiply by average annual food spend per pet, sum across categories.",
      reasoning: "Step 1 — US households: ~130M total. Pet ownership rate ~67% → ~87M pet-owning households. Step 2 — Dogs: ~45% of households own dogs → ~58M dog-owning households × average 1.5 dogs = 87M dogs. Average annual dog food spend: premium dry food ($400-600/yr) vs. budget ($150-200/yr). Weighted average ~$500/year. Total dog food market: 87M × $500 = $43.5B. Step 3 — Cats: ~35% of households own cats → ~45M cat-owning households × average 1.9 cats = 86M cats. Annual cat food spend: ~$250/year. Total cat food market: 86M × $250 = $21.5B. Step 4 — Other pets: birds (~9M households, $80/yr = $720M), fish (~13M households, $60/yr = $780M), small mammals/reptiles (~7M households, $120/yr = $840M). Other pets total: ~$2.3B. Step 5 — Grand total: $43.5B + $21.5B + $2.3B = $67.3B. Step 6 — Sanity check: the American Pet Products Association (APPA) reports ~$50-55B in pet food sales annually (2022-2023). Our estimate of ~$67B is about 25% high, likely because we overestimated per-pet spend or cat numbers. Adjusting dog food spend to $420/year and cat food to $220/year gives: $36.5B + $19B + $2.3B = $57.8B — much closer. Report range: $45B–$75B.",
      commonMistakes: "Forgetting to multiply by average number of pets per owning household (not all dog owners have exactly one dog). Using food costs from premium brands only without adjusting for the mix of budget and premium consumers. Ignoring the long tail of non-dog/non-cat pet food which adds a few billion.",
      alternatives: "Top-down: the total US pet industry is ~$135B (APPA 2022). Food historically represents ~40% of total pet spending → 0.40 × $135B = $54B. This top-down estimate is consistent with the bottom-up estimate of $57-67B."
    },
    rubric: [
      { id: "ge-031-r1", text: "Segments the market by pet type (at minimum dogs vs. cats)" },
      { id: "ge-031-r2", text: "Accounts for average number of pets per household (not just one per household)" },
      { id: "ge-031-r3", text: "Final estimate is in the range of $30B–$100B" },
      { id: "ge-031-r4", text: "Provides a sanity check (e.g., top-down from total pet industry size)" }
    ]
  },

  {
    id: "ge-032",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: ["supply-demand", "market-dynamics"],
    difficulty: "medium",
    question: "Estimate the annual market size of the US food delivery app industry (e.g., DoorDash, Uber Eats, Grubhub).",
    context: "Count only the Gross Merchandise Value (GMV) — the total value of food orders placed through these platforms. Do not count just platform revenue (fees); count the total order value. Include restaurant delivery and exclude grocery delivery.",
    hints: [
      "Think about how many Americans use food delivery apps and how often they order. Then estimate average order value.",
      "Food delivery app users skew toward younger adults in urban/suburban areas. Roughly 30-35% of US adults use these apps. Average order frequency is roughly 2-3 times per month for active users.",
      "~260M US adults × 30% users = 78M users × 2.5 orders/month × 12 months = 2.34B orders/year × $35 average order value = ~$82B GMV."
    ],
    referenceSolution: {
      approach: "Estimate the number of active delivery app users, multiply by order frequency, then by average order value.",
      reasoning: "Step 1 — US adults: ~260M. Food delivery app adoption: surveys suggest ~35% of US adults ordered food delivery via app in the past 12 months → 91M users. Step 2 — Order frequency: frequent users (urban, age 18-34) order ~4x/month; occasional users (suburban, age 35-55) order ~1.5x/month. Mix: 40% frequent, 60% occasional. Weighted average: 0.4 × 4 + 0.6 × 1.5 = 1.6 + 0.9 = 2.5 orders/month. Step 3 — Annual orders: 91M × 2.5 × 12 = 2.73B orders per year. Step 4 — Average order value: a typical order for 1-2 people includes $25-30 in food plus $3-5 in fees and taxes → total order value ~$38. Use $35 as a round number. Step 5 — Total GMV: 2.73B × $35 = $95.5B. Step 6 — Sanity check: DoorDash had ~$56B GMV in 2022; Uber Eats ~$55B globally (~$30B in US); Grubhub ~$8B. Total US market ~$94B from reported figures — very close to our estimate. Range: $70B–$120B.",
      commonMistakes: "Confusing platform revenue (~15-30% take rate) with GMV — the question asks for total order value, not what the platform earns. Assuming all adults use delivery apps — heavy users are younger and urban; the overall adoption rate is lower than it feels for those in cities. Using too low an average order value (ignoring fees and taxes that are part of the order total).",
      alternatives: "Supply-side: there are ~660,000 restaurants in the US. Approximately 20% are active on delivery platforms → 132,000 restaurants. Average delivery revenue per restaurant per year: ~$400-500K (a busy restaurant does 30 delivery orders/day × $35 × 365 = $383K). 132,000 × $450K = $59.4B. This underestimates because large chain restaurants have much higher volumes; adjust upward to ~$80-100B."
    },
    rubric: [
      { id: "ge-032-r1", text: "Distinguishes GMV from platform revenue and estimates GMV specifically" },
      { id: "ge-032-r2", text: "Segments users by frequency or provides a weighted average order frequency" },
      { id: "ge-032-r3", text: "Estimates average order value (food + fees) rather than just food cost" },
      { id: "ge-032-r4", text: "Final GMV estimate is in the range of $40B–$150B" }
    ]
  },

  {
    id: "ge-033",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: ["mece-decomposition", "unit-economics", "competitive-analysis"],
    difficulty: "hard",
    question: "Estimate the total annual revenue of the US gym and fitness club industry, then estimate what share of that revenue the top 5 gym chains (Planet Fitness, LA Fitness, Anytime Fitness, Equinox, Gold's Gym) collectively capture.",
    context: "Count all membership fees and ancillary revenue (personal training, classes, merchandise) from traditional gym facilities. Exclude at-home fitness (Peloton, Mirror) and boutique studios (SoulCycle, Orangetheory) from the main estimate, but address their competitive impact in your alternatives.",
    hints: [
      "Start with the number of gym members in the US. Roughly 20-22% of Americans have a gym membership. Segment by gym tier: budget ($10-25/month), mid-market ($30-60/month), premium ($80-200/month).",
      "After estimating membership revenue, add ancillary revenue. Personal training is a large upsell: roughly 15-20% of gym members buy personal training at an average of $50-80/session, ~2x/month.",
      "For market concentration: Planet Fitness alone has ~17M members. The top 5 chains collectively have ~40-50M members out of ~62M total gym members in the US. Their average revenue per member is lower than the industry average (budget chains dominate by volume). Calculate their share using revenue, not just member count."
    ],
    referenceSolution: {
      approach: "Estimate total gym memberships, segment by price tier, compute membership revenue, add ancillary revenue, then estimate top-5 concentration by revenue share.",
      reasoning: "Part A — Total market: Step 1 — US gym members: 330M population × 20% gym membership rate = 66M members. Step 2 — Segment by tier: Budget gyms ($15/month avg): 45% of members → 29.7M members × $15 × 12 = $5.35B. Mid-market ($45/month avg): 35% of members → 23.1M members × $45 × 12 = $12.5B. Premium ($120/month avg): 20% of members → 13.2M members × $120 × 12 = $19.0B. Step 3 — Membership revenue total: $5.35B + $12.5B + $19.0B = $36.85B. Step 4 — Ancillary revenue: personal training (18% of members × 2 sessions/month × $65/session × 12 months) = 11.9M × $1,560/year = $18.6B. This seems high; personal training is typically ~30% of gym revenue. Adjust: if membership revenue = $36.85B and represents ~60% of total revenue, then total revenue = $36.85B / 0.60 = $61.4B. Personal training and other ancillary = $24.6B. Step 5 — Total industry: ~$60B. Sanity check: IHRSA reported ~$35B in 2019 pre-COVID, with growth since. $40-60B post-COVID with pricing inflation is plausible. Part B — Top 5 concentration: Planet Fitness: 17M members × $24/month × 12 = $4.9B (membership) + minimal ancillary (no personal training model) ≈ $5B total. LA Fitness: ~4M members × $35/month × 12 = $1.7B + ancillary $0.5B ≈ $2.2B. Anytime Fitness: ~3M US members × $40/month × 12 = $1.4B + $0.4B ≈ $1.8B. Equinox: ~0.5M members × $200/month × 12 = $1.2B + significant PT revenue $0.8B ≈ $2.0B. Gold's Gym: ~1.5M members × $35/month × 12 = $0.63B + $0.2B ≈ $0.83B. Top 5 total: $5.0B + $2.2B + $1.8B + $2.0B + $0.83B = $11.83B. Step 6 — Market share: $11.83B / $60B = ~20% revenue concentration. Note: Planet Fitness dominates on membership count but has low revenue per member; premium chains punch above their weight on revenue.",
      commonMistakes: "Using only budget gym pricing (like Planet Fitness's $10/month) for the whole market — premium members like Equinox spend 10-20× more. Forgetting that ancillary revenue (personal training, classes) can be 30-40% of total gym revenue. Assuming the top 5 gyms capture more than 50% of revenue — the US gym market is actually fragmented, with thousands of independent and regional chains.",
      alternatives: "Top-down: US consumers spend ~2-3% of discretionary income on health and fitness. US discretionary spending ~$8T × 2.5% = $200B on health and fitness total. Gyms are roughly 25-30% of that category (vs. at-home equipment, sports gear, nutrition) → $50-60B. Consistent with bottom-up estimate."
    },
    rubric: [
      { id: "ge-033-r1", text: "Segments gym market by price tier rather than using a single average membership price" },
      { id: "ge-033-r2", text: "Includes ancillary revenue (personal training, classes) in total market estimate" },
      { id: "ge-033-r3", text: "Total market estimate is in the range of $30B–$100B" },
      { id: "ge-033-r4", text: "Estimates top-5 revenue share using revenue, not just member count" },
      { id: "ge-033-r5", text: "Notes that budget chains dominate by volume but premium chains earn more per member" },
      { id: "ge-033-r6", text: "Provides a top-down or external sanity check" }
    ]
  },

  {
    id: "ge-034",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: ["market-dynamics", "supply-demand", "business-model-evaluation"],
    difficulty: "hard",
    question: "Estimate the total annual market size of the US short-term vacation rental market (platforms like Airbnb, Vrbo, and direct bookings), and separately estimate Airbnb's share of that market.",
    context: "Include all revenue flowing to property owners/hosts from guests booking stays of 1–30 nights. Count Gross Booking Value (total guest payments), not just platform fees. Include both platform-mediated and direct-booking short-term rentals.",
    hints: [
      "Start with the number of short-term rental units available in the US. There are roughly 1.5-2 million active STR listings in the US. Alternatively, approach from the demand side: how many Americans travel for leisure each year and what share stay in STRs?",
      "A typical US STR property earns about $25,000-35,000 per year in gross revenue, but this average conceals huge variation between urban condos ($15K) and beach houses ($80K+). A national average of $28,000 per active listing is defensible.",
      "For Airbnb's share: Airbnb has ~660,000 US listings (a subset of total STR supply) and processes roughly 450M guest nights globally, with the US being ~35% of that. Average Airbnb booking ≈ 4 nights × $150/night = $600. Calculate US GMV and compare to total market."
    ],
    referenceSolution: {
      approach: "Estimate total US STR supply, apply average annual revenue per listing, then estimate Airbnb's GMV separately and compute its share.",
      reasoning: "Part A — Total STR market: Step 1 — Number of active STR listings: AirDNA and similar data providers estimate ~2M active short-term rental listings in the US (2022-2023). Step 2 — Average annual revenue per listing: This varies hugely. Urban apartments: ~$20K/year. Suburban/mountain cabins: ~$30K/year. Beach/lake properties: ~$50K/year. Estimate mix: 40% urban ($20K), 40% suburban ($30K), 20% premium destination ($55K). Weighted average: 0.4 × 20 + 0.4 × 30 + 0.2 × 55 = 8 + 12 + 11 = $31K/year. Step 3 — Total market GMV: 2M listings × $31K = $62B. Add direct bookings not on platforms (~15% of STR transactions): $62B / 0.85 = $73B total. Part B — Airbnb's US share: Step 4 — Airbnb US listings: ~660,000 US listings. Step 5 — Airbnb US gross booking nights: Airbnb reported ~450M nights globally in 2022. US share ≈ 35% → 158M nights. Average booking = 4 nights → 39.5M bookings. Average booking value: $180/night × 4 nights = $720. US GMV = 39.5M × $720 = $28.4B. Step 6 — Airbnb's platform fee (take rate): ~14% of GMV → revenue = $28.4B × 0.14 ≈ $4B (Airbnb reported $4.8B total revenue in 2022 globally; US portion ~$1.7B net revenue, consistent). Step 7 — Airbnb's market share: $28.4B / $73B = ~39% of total STR GMV. This is plausible: Airbnb is the market leader but VRBO (Expedia-owned, focused on whole homes) and direct bookings represent a significant share. Range for total market: $50B–$90B; Airbnb share: 30–45%.",
      commonMistakes: "Confusing platform net revenue (take rate × GMV) with total market GMV. The question asks for total guest payments, not what platforms earn. Assuming Airbnb = entire STR market, ignoring VRBO, Booking.com, and direct bookings. Using too low an occupancy rate — active listings on STR platforms have ~45-60% occupancy, not 100% or 20%.",
      alternatives: "Demand-side check: ~210M leisure trips taken by US adults annually (multi-night stays). If 18% of leisure travelers stay in STRs (up from ~10% in 2015, still below hotel dominance), that is 37.8M STR trips. Average trip cost: $1,500 (3 nights × $250/night for a group of 3 paying $80/person). 37.8M × $1,500 = $56.7B — within range of the supply-side $73B estimate, validating the order of magnitude."
    },
    rubric: [
      { id: "ge-034-r1", text: "Segments STR listings by property type or location to avoid a single average" },
      { id: "ge-034-r2", text: "Total GMV estimate (including all platforms and direct bookings) is in the range of $40B–$120B" },
      { id: "ge-034-r3", text: "Separates total STR market GMV from Airbnb platform revenue (take rate)" },
      { id: "ge-034-r4", text: "Estimates Airbnb's US market share using its GMV relative to total, not revenue relative to total" },
      { id: "ge-034-r5", text: "Provides demand-side or external triangulation" }
    ]
  },

  {
    id: "ge-035",
    trackId: "guesstimation",
    subSkill: "market-sizing",
    secondarySkills: ["mece-decomposition", "analogical-reasoning", "unit-economics"],
    difficulty: "hard",
    question: "Estimate the annual market size of the US cybersecurity industry. Then a colleague argues: 'Cybersecurity spending must be at least 5% of all US IT spending.' Evaluate whether this claim is plausible or not.",
    context: "Count all commercial cybersecurity spending by US organizations: software (antivirus, firewalls, SIEM, endpoint detection), hardware (security appliances), and services (managed security services, consulting, incident response). Exclude consumer antivirus and personal VPNs.",
    hints: [
      "Approach from the buyer side: segment US organizations by size (enterprise, mid-market, SMB) and estimate average annual cybersecurity spend per organization. There are roughly 6 million businesses in the US.",
      "For the 5% benchmark: US total IT spending is roughly $900B–$1T annually. If cybersecurity is 5% of that, it implies $45–50B in cybersecurity spending. Is that consistent with your bottom-up estimate?",
      "Rough numbers: ~1,000 large enterprises spend $10-50M each on cybersecurity. ~100,000 mid-market companies spend $200K-2M each. ~6M SMBs spend $5K-50K each but most spend near the low end. The long tail of SMBs actually dominates by count but mid/enterprise dominate by spend."
    ],
    referenceSolution: {
      approach: "Segment US businesses by size, estimate average annual cybersecurity spend per segment, sum, then validate against the 5% IT benchmark claim.",
      reasoning: "Part A — Bottom-up market sizing: Step 1 — Enterprise (>1,000 employees): ~20,000 companies. Average cybersecurity spend: $5M/year (Fortune 500 companies may spend $50-100M; average large enterprise ~$5M). Total: 20,000 × $5M = $100B. This is too high — large enterprises number closer to 5,000 at Fortune-500 scale. Revise: 5,000 very large (>5,000 employees) × $15M = $75B; 15,000 large (1,000-5,000) × $1.5M = $22.5B. Enterprise total: $97.5B. Still seems high. Let's recalibrate: Gartner reports total global cybersecurity spending at ~$190B (2023). US is ~40% of global → ~$76B US spending. Use this as an anchor and work backward. Step 2 — Mid-market (100-999 employees): ~100,000 companies × $200K average = $20B. Step 3 — SMB (1-99 employees): ~6M companies. Most spend very little; ~30% spend anything meaningful on dedicated cybersecurity → 1.8M companies × $5,000/year = $9B. Remainder: negligible. Step 4 — Total US cybersecurity: $76B (anchored from Gartner) or bottom-up: enterprise $40B (revised, using $2M average for 20,000 firms) + mid-market $20B + SMB $9B = $69B. Converge on $70–80B. Part B — Evaluating the 5% claim: US total IT spending ≈ $900B (Gartner). 5% of $900B = $45B. Our estimate of $70-80B suggests cybersecurity is actually 8-9% of IT spending — higher than 5%. The colleague's claim of 'at least 5%' appears to be correct, but conservative. In practice, cybersecurity as a fraction of IT has been rising rapidly (was ~3-4% in 2015, now ~8-10%). Verdict: The '5%' claim is plausible and probably an understatement as of 2023-2024.",
      commonMistakes: "Anchoring entirely on global figures without adjusting to US only (US is ~40% of global cybersecurity spend). Forgetting that large enterprises are few in number — even at $10M each, 20,000 firms only contribute $200B if every one spends $10M, which overstates it. Not adjusting for the fact that many SMBs have near-zero dedicated cybersecurity budgets.",
      alternatives: "Employee-based approach: 150M US workers in the private sector. Average employer-side cybersecurity cost per employee per year: ~$400-600 (enterprise) blended down to ~$50-100 (SMB). Blended average ~$500/employee × 150M employees = $75B. Strikingly consistent with the Gartner-anchored estimate."
    },
    rubric: [
      { id: "ge-035-r1", text: "Segments market by organization size (at least enterprise vs. SMB)" },
      { id: "ge-035-r2", text: "Bottom-up total is in the range of $40B–$150B" },
      { id: "ge-035-r3", text: "Uses a credible anchor (Gartner, IDC, or IT-spend ratio) to validate or calibrate" },
      { id: "ge-035-r4", text: "Quantitatively evaluates the '5% of IT spending' claim rather than just agreeing or disagreeing" },
      { id: "ge-035-r5", text: "Reaches a defensible verdict (5% is plausible/conservative; actual share is 7-10%)" }
    ]
  },

  // ── PHYSICAL ESTIMATION (ge-036 to ge-038) ────────────────────────────────

  {
    id: "ge-036",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: ["unit-analysis", "orders-of-magnitude"],
    difficulty: "medium",
    question: "How thick is a single sheet of paper, and if you could fold a standard sheet of paper in half 42 times, how far would the folded stack reach?",
    context: "This is a famous exponential growth problem. Estimate the thickness of a standard sheet of paper (A4 or US Letter, 80 g/m²) from first principles, then compute the height of 2^42 sheets stacked together. Express your answer in a meaningful unit (km, Earth radii, distance to Moon, etc.).",
    hints: [
      "Estimate paper thickness from the fact that a standard ream (500 sheets) of 80 g/m² paper is about 5 cm tall. This gives you thickness per sheet directly.",
      "After 42 folds, you have 2^42 layers. 2^10 ≈ 1,000, so 2^42 = 2^40 × 4 ≈ (10^3)^4 × 4 = 4 × 10^12 layers.",
      "4 × 10^12 layers × 0.1 mm per layer = 4 × 10^11 mm = 4 × 10^8 m = 400,000 km. The Moon is about 384,000 km away — 42 folds gets you to the Moon."
    ],
    referenceSolution: {
      approach: "Estimate paper thickness from a ream, compute 2^42 via powers-of-10 approximation, multiply and convert to a recognizable distance.",
      reasoning: "Step 1 — Paper thickness: a 500-sheet ream of standard 80 g/m² copy paper is approximately 5 cm (50 mm) thick. Thickness per sheet: 50 mm / 500 = 0.1 mm = 100 microns. This is consistent with the standard specification: 80 g/m² paper is typically 0.10-0.11 mm thick. Step 2 — Number of layers after 42 folds: each fold doubles the number of layers. After n folds: 2^n layers. 2^10 = 1,024 ≈ 10^3. Therefore 2^42 = 2^(10×4) × 2^2 = (2^10)^4 × 4 ≈ (10^3)^4 × 4 = 4 × 10^12. Step 3 — Height of stack: 2^42 × 0.1 mm = 4 × 10^12 × 10^-4 m = 4 × 10^8 m = 400,000 km. Step 4 — Reference distances: Moon is ~384,400 km away. The stack would reach the Moon. Earth's radius is ~6,371 km; the stack is 62 Earth radii. Earth-Sun distance = 150,000,000 km; the stack is 0.27% of the way to the Sun. Step 5 — Key insight: exponential growth is so powerful that 42 doublings of 0.1 mm reaches the Moon. This illustrates why fold-in-half problems are a standard demonstration of exponential growth. Each 10 additional folds multiplies by ~1,000 (~10 times further every 10 folds).",
      commonMistakes: "Computing 42 × 0.1 mm = 4.2 mm (linear thinking instead of exponential). Forgetting that each fold doubles all previous layers, not just adds one more layer. Misidentifying 2^42: a common error is computing 2^42 ≈ 2^40 = (2^10)^4 ≈ 10^12 but forgetting the × 4 factor (though this is minor — still reaches the Moon).",
      alternatives: "Direct computation: 2^42 = 4,398,046,511,104 ≈ 4.4 × 10^12. × 0.1 mm = 4.4 × 10^11 mm = 4.4 × 10^8 m = 440,000 km. Marginally past the Moon (384,400 km), and reaching roughly the Moon's farthest orbital distance (405,500 km). The 42-folds-to-the-Moon result is exact."
    },
    rubric: [
      { id: "ge-036-r1", text: "Estimates paper thickness correctly from a ream or from memory (acceptable range: 0.07–0.15 mm)" },
      { id: "ge-036-r2", text: "Correctly computes 2^42 using powers-of-10 approximation (acceptable range: 2×10^12 – 8×10^12)" },
      { id: "ge-036-r3", text: "Converts the final stack height to a recognizable distance unit" },
      { id: "ge-036-r4", text: "Correctly identifies the result as approximately the Earth-Moon distance (300,000–500,000 km)" },
      { id: "ge-036-r5", text: "Explicitly notes the exponential (doubling) nature of the growth" }
    ]
  },

  {
    id: "ge-037",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: ["decomposition-to-fundamentals", "bounding-estimates", "unit-analysis"],
    difficulty: "hard",
    question: "Estimate the total weight of all the cars in the United States.",
    context: "Include all registered personal passenger vehicles, light trucks, and SUVs. Exclude commercial trucks, buses, motorcycles, and trailers. Express your answer in metric tons and compare it to something tangible (e.g., a mountain, the mass of Earth's atmosphere).",
    hints: [
      "Start with the number of registered passenger vehicles in the US. There are roughly 280-290 million registered vehicles, but not all are cars — segment out commercial and heavy vehicles.",
      "The average curb weight of US passenger vehicles has been rising. In 2023, with the shift toward SUVs and trucks, the average new vehicle weighs about 4,200 lbs (1,900 kg). But the fleet includes older, lighter cars; fleet average is closer to 3,800-4,000 lbs (1,700-1,800 kg).",
      "~280M total vehicles × 75% passenger/light duty = ~210M passenger vehicles × 1,800 kg average = 3.78 × 10^11 kg = 378 million metric tons. Compare: Earth's atmosphere masses 5.15 × 10^18 kg — the car fleet is about 10^-7 of the atmosphere's mass."
    ],
    referenceSolution: {
      approach: "Estimate the number of US passenger vehicles, apply average vehicle weight, compute total mass, and compare to reference masses.",
      reasoning: "Step 1 — Total registered vehicles in the US: approximately 290 million vehicles are registered in the US (2022 data). Step 2 — Share that are passenger vehicles/light trucks (cars, SUVs, minivans, light pickups): ~85% → 290M × 0.85 = 246.5M. Exclude motorcycles (~10M) and heavy commercial vehicles (~15M): passenger vehicle count ≈ 220-250M. Use 240M. Step 3 — Average vehicle weight: The US fleet is heavily skewed toward SUVs and light trucks (>70% of new vehicle sales by 2022). Average new car weight: sedans ~3,200 lbs (1,450 kg), SUVs ~4,500 lbs (2,040 kg), light pickups ~5,000 lbs (2,270 kg). Fleet mix (including older sedans): weighted average ~4,000 lbs = 1,815 kg. Use 1,800 kg. Step 4 — Total mass: 240M × 1,800 kg = 4.32 × 10^11 kg = 432 million metric tons = 432 megatons. Step 5 — Sanity checks and comparisons: Earth's atmosphere: 5.15 × 10^18 kg. Car fleet / atmosphere = 4.32 × 10^11 / 5.15 × 10^18 = 8.4 × 10^-8 ≈ 10^-7. The Great Pyramid of Giza: ~5.9 × 10^9 kg. Car fleet ≈ 73 Great Pyramids. Mount Everest: ~8.1 × 10^14 kg. Car fleet is about 0.05% of Mt. Everest's mass. One aircraft carrier (Nimitz class): ~100,000 metric tons = 10^8 kg. Car fleet ≈ 4,320 aircraft carriers. Step 6 — Range: using 200M vehicles at 1,600 kg gives 320 megatons; using 260M vehicles at 2,000 kg gives 520 megatons. Central estimate: 400-450 megatons.",
      commonMistakes: "Using the total registered vehicle count (290M) without filtering for passenger vehicles only. Using an average weight based only on new vehicles — the fleet includes many older, lighter cars from the 2000s and 2010s. Forgetting to convert pounds to kilograms consistently (1 lb ≈ 0.454 kg, so 4,000 lbs = 1,815 kg, not 4,000 kg).",
      alternatives: "Steel content approach: average vehicle contains ~900 kg of steel/aluminum. Total: 240M × 900 kg = 216 megatons of metal. But total vehicle weight includes engine fluids, rubber, glass, plastics, which add ~50-100% more → total 430-650 megatons. Consistent with the direct weight approach. Or: the US steel industry produces ~80M metric tons/year. If average vehicle lasts 12 years and the fleet turns over completely in 12 years, annual steel demand from autos ≈ 240M × 900 kg / 12 = 18M tons/year of automotive steel. US auto industry uses ~15-17M tons/year of steel — confirms our fleet weight estimate."
    },
    rubric: [
      { id: "ge-037-r1", text: "Correctly estimates the number of US passenger vehicles (150M–280M is acceptable)" },
      { id: "ge-037-r2", text: "Uses a weight per vehicle in the range of 1,400–2,200 kg (accounting for SUV-heavy fleet)" },
      { id: "ge-037-r3", text: "Total mass estimate is in the range of 250–700 million metric tons" },
      { id: "ge-037-r4", text: "Expresses the result in a tangible comparative unit or reference mass" },
      { id: "ge-037-r5", text: "Provides a secondary sanity check (e.g., steel content, annual production, or atmospheric comparison)" }
    ]
  },

  {
    id: "ge-038",
    trackId: "guesstimation",
    subSkill: "physical-estimation",
    secondarySkills: ["first-principles-analysis", "estimation-chains", "sensitivity-analysis"],
    difficulty: "hard",
    question: "If all the water in the Earth's oceans were spread uniformly over the entire surface of the Earth (land and ocean floor alike), how deep would that layer be?",
    context: "This is a pure physical estimation. You may recall or estimate the volume of Earth's oceans and the surface area of the Earth. Show all steps including how you estimate those quantities if you don't know them precisely.",
    hints: [
      "Earth's surface area can be estimated from its radius: A = 4πr². Earth's radius is approximately 6,371 km. Surface area ≈ 4 × 3.14 × 6,371² ≈ 510 million km².",
      "Volume of Earth's oceans: the oceans cover ~71% of Earth's surface to an average depth of ~3,700 m. Volume = 0.71 × 510M km² × 3.7 km = ~1.335 billion km³. Alternatively, the canonical figure is 1.335 × 10^18 m³.",
      "Depth of uniform ocean layer = Volume / Total surface area = (1.335 × 10^18 m³) / (5.1 × 10^14 m²) = 2,617 m ≈ 2.6 km. The entire ocean spread globally would be about 2.7 km deep."
    ],
    referenceSolution: {
      approach: "Estimate Earth's surface area from its radius, estimate ocean volume from ocean surface fraction and average depth, divide to get uniform layer depth.",
      reasoning: "Step 1 — Earth's radius: r = 6,371 km ≈ 6.4 × 10^6 m. Step 2 — Earth's total surface area: A = 4πr² = 4 × 3.14159 × (6.371 × 10^6)² = 4 × 3.14159 × 4.059 × 10^13 = 5.10 × 10^14 m² = 510 million km². Step 3 — Ocean volume: Oceans cover 71% of Earth's surface → ocean surface area = 0.71 × 510M km² = 362M km² = 3.62 × 10^14 m². Average ocean depth ≈ 3,688 m (canonical value). If estimating: the deepest point (Mariana Trench) is ~11 km; shallow continental shelves ~200 m; abyssal plains ~4-5 km. A weighted average of ~3.7 km is reasonable. Volume = 3.62 × 10^14 m² × 3,688 m = 1.335 × 10^18 m³. This matches the standard value of 1.335 billion km³. Step 4 — Uniform depth if spread over all of Earth: depth = Volume / Total surface area = (1.335 × 10^18 m³) / (5.10 × 10^14 m²) = 2,618 m ≈ 2.6 km. Step 5 — Interpretation: Spreading the oceans globally would create a uniform ocean ~2.6 km deep — comparable to a significant mountain range submerged. The continents average ~840 m above sea level (and would still protrude above this layer if it were water). The continents' average elevation is less than the 2.6 km depth, so only the very highest terrain (Himalayas, Andes) would remain above water. Step 6 — Sensitivity: If average ocean depth were off by 20% (3.0 km instead of 3.7 km), the answer changes to 2.1 km — same order of magnitude. The answer is robust.",
      commonMistakes: "Confusing ocean surface area (71% of Earth) with total Earth surface area when computing volume. Using depth in km and area in m² without consistent unit conversion. Forgetting that the question asks for depth over ALL of Earth's surface, not just the current ocean area. Estimating average ocean depth as too shallow (e.g., 1 km) based on coastal experience rather than accounting for the deep abyssal plains.",
      alternatives: "Mass-based check: ocean mass ≈ 1.4 × 10^21 kg (canonical). Water density = 1,000 kg/m³. Volume = mass/density = 1.4 × 10^18 m³. Depth = 1.4 × 10^18 / 5.1 × 10^14 = 2,745 m ≈ 2.7 km. Consistent with geometry-based estimate within 5%. This cross-check confirms the answer."
    },
    rubric: [
      { id: "ge-038-r1", text: "Correctly computes or recalls Earth's surface area within a factor of 2 (acceptable range: 3×10^14 – 8×10^14 m²)" },
      { id: "ge-038-r2", text: "Correctly estimates ocean volume by combining ocean surface fraction, area, and average depth" },
      { id: "ge-038-r3", text: "Correctly divides volume by total surface area to get uniform depth" },
      { id: "ge-038-r4", text: "Final answer is in the range of 1.5 km – 4 km" },
      { id: "ge-038-r5", text: "Provides a physical interpretation (e.g., continent heights vs. water depth)" },
      { id: "ge-038-r6", text: "Cross-checks result via an alternative path (e.g., ocean mass / density)" }
    ]
  },

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
