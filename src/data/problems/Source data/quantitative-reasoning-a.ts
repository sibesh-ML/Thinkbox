import type { Problem } from '@/types';

export const quantitativeReasoningProblemsA: Problem[] = [
  // ── ORDERS OF MAGNITUDE (qr-001 to qr-005) ────────────────────────────────

  {
    id: "qr-001",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: [],
    difficulty: "easy",
    question: "A streaming service stores 50 million user profiles, each averaging 2 KB. A data warehouse stores 5 billion transaction records, each averaging 500 bytes. Without precise calculation, which dataset is larger, and by roughly how many orders of magnitude?",
    context: undefined,
    hints: [
      "Convert both to the same unit (bytes) and compare the exponents, not the precise numbers.",
      "50 million × 2 KB = 10^8 bytes. 5 billion × 500 bytes = 5 × 10^11 bytes. Now compare powers of 10.",
      "Profiles: ~10^8 bytes (100 MB). Transactions: ~5 × 10^11 bytes (500 GB). The transactions dataset is roughly 3–4 orders of magnitude larger."
    ],
    referenceSolution: {
      approach: "Express each dataset in the same unit and compare the leading powers of 10, ignoring small multiplicative constants.",
      reasoning: "Profiles: 50 × 10^6 profiles × 2 × 10^3 bytes = 10^11 bytes... wait, recalculate: 50 × 10^6 × 2 × 10^3 = 100 × 10^9 = 10^11 bytes (100 GB). Transactions: 5 × 10^9 × 500 = 5 × 10^9 × 5 × 10^2 = 25 × 10^11 = 2.5 × 10^12 bytes (2.5 TB). Ratio: 2.5 × 10^12 / 10^11 ≈ 25×, so roughly 1–1.5 orders of magnitude larger. The transaction warehouse is about 10–25× larger — within one order of magnitude difference.",
      commonMistakes: "Confusing KB (10^3 bytes) with kibibytes or megabytes. Forgetting to multiply both dimensions (count × size). Trying to compute exact figures instead of comparing exponents.",
      alternatives: "You can also convert directly to GB: profiles ≈ 100 GB, transactions ≈ 2,500 GB. Ratio is 25×, clearly less than two orders of magnitude apart."
    },
    rubric: [
      { id: "qr-001-r1", text: "Converts both datasets to a common unit before comparing" },
      { id: "qr-001-r2", text: "Correctly identifies the transaction dataset as larger" },
      { id: "qr-001-r3", text: "States the difference is roughly one order of magnitude (not zero, not three)" },
      { id: "qr-001-r4", text: "Does not attempt unnecessary precise arithmetic" }
    ]
  },

  {
    id: "qr-002",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: [],
    difficulty: "easy",
    question: "The US national debt is approximately $33 trillion. The US population is approximately 330 million people. Without a calculator, estimate the per-capita debt to the nearest order of magnitude.",
    context: undefined,
    hints: [
      "Per-capita means total divided by number of people. Set up the division in powers of 10.",
      "$33 trillion = 3.3 × 10^13. 330 million people = 3.3 × 10^8. Divide the two expressions.",
      "3.3 × 10^13 ÷ 3.3 × 10^8 = 10^5 = $100,000 per person."
    ],
    referenceSolution: {
      approach: "Write both numbers in scientific notation and divide, simplifying the coefficients and subtracting the exponents.",
      reasoning: "$33 trillion = 3.3 × 10^13. 330 million = 3.3 × 10^8. Division: (3.3 / 3.3) × 10^(13−8) = 1 × 10^5 = $100,000. Each American's share of the national debt is on the order of $100,000.",
      commonMistakes: "Mixing up trillion (10^12) and billion (10^9). Getting the exponent subtraction wrong. Reporting the answer as '$10,000' or '$1,000,000' — off by an order of magnitude.",
      alternatives: "Round $33T to $30T and 330M to 300M: $30T / 300M = $100K. Same answer, slightly easier arithmetic."
    },
    rubric: [
      { id: "qr-002-r1", text: "Correctly converts trillion and million to powers of 10" },
      { id: "qr-002-r2", text: "Subtracts exponents when dividing in scientific notation" },
      { id: "qr-002-r3", text: "Arrives at ~$100,000 per person (within factor of 2)" },
      { id: "qr-002-r4", text: "Shows or explains the exponent arithmetic explicitly" }
    ]
  },

  {
    id: "qr-003",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: [],
    difficulty: "easy",
    question: "A human hair is about 70 micrometers wide. A red blood cell is about 7 micrometers in diameter. A typical bacterium is about 1 micrometer. A virus is about 100 nanometers. Arrange these from largest to smallest and state how many orders of magnitude separate the hair from the virus.",
    context: undefined,
    hints: [
      "Convert everything to the same unit (nanometers or micrometers) to compare directly.",
      "1 micrometer = 1,000 nanometers. So the hair is 70,000 nm, RBC is 7,000 nm, bacterium is 1,000 nm, virus is 100 nm.",
      "Largest to smallest: hair (70,000 nm) → RBC (7,000 nm) → bacterium (1,000 nm) → virus (100 nm). From 70,000 to 100 is a factor of 700 — between 2 and 3 orders of magnitude."
    ],
    referenceSolution: {
      approach: "Convert all measurements to nanometers, sort them, and compute the ratio between extremes as a power of 10.",
      reasoning: "Hair: 70 μm = 70,000 nm = 7 × 10^4 nm. RBC: 7 μm = 7,000 nm = 7 × 10^3 nm. Bacterium: 1 μm = 1,000 nm = 10^3 nm. Virus: 100 nm = 10^2 nm. Order: hair > RBC > bacterium > virus. Ratio of hair to virus: 7 × 10^4 / 10^2 = 7 × 10^2 = 700×. That is between 10^2 and 10^3, so approximately 2–3 orders of magnitude (closer to 3 if we call 700 ≈ 10^2.85).",
      commonMistakes: "Confusing micrometers and nanometers — failing to convert before comparing. Saying '3 orders of magnitude' when it's closer to 2.85 (acceptable approximation). Reversing the order.",
      alternatives: "You can also work entirely in micrometers: hair = 70, RBC = 7, bacterium = 1, virus = 0.1. Ratio from hair to virus = 700×, same conclusion."
    },
    rubric: [
      { id: "qr-003-r1", text: "Converts all units to a common scale before comparing" },
      { id: "qr-003-r2", text: "Correctly orders: hair > RBC > bacterium > virus" },
      { id: "qr-003-r3", text: "Computes the hair-to-virus ratio as ~700× (2–3 orders of magnitude)" },
      { id: "qr-003-r4", text: "Does not confuse micrometers and nanometers" }
    ]
  },

  {
    id: "qr-004",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: ["fermi-problems"],
    difficulty: "easy",
    question: "Google processes approximately 8.5 billion searches per day. A typical search query returns results in 200 milliseconds. Estimate how many search queries Google is processing simultaneously at any given moment.",
    context: undefined,
    hints: [
      "Think about how many searches start per second, and how long each search takes to complete.",
      "Queries per second = 8.5 billion / 86,400 seconds. Then multiply by the duration of each query in seconds.",
      "~100,000 queries/second × 0.2 seconds = ~20,000 queries in-flight at any moment. That's on the order of 10^4."
    ],
    referenceSolution: {
      approach: "Convert daily volume to a per-second rate, then multiply by query duration to get the average number of concurrent queries (Little's Law).",
      reasoning: "Queries/day: 8.5 × 10^9. Seconds/day: 86,400 ≈ 10^5. Queries/second: 8.5 × 10^9 / 10^5 ≈ 85,000 ≈ 10^5. Each query takes 0.2 seconds. Concurrent queries = 10^5 queries/sec × 0.2 sec ≈ 20,000 ≈ 2 × 10^4. Google handles roughly tens of thousands of simultaneous searches.",
      commonMistakes: "Forgetting to convert days to seconds. Using 24 hours instead of 86,400 seconds. Confusing queries in-flight with queries per second.",
      alternatives: "Use Little's Law explicitly: L = λW, where λ is arrival rate and W is service time. Same calculation, different framing. Useful in systems design contexts."
    },
    rubric: [
      { id: "qr-004-r1", text: "Converts daily query count to a per-second rate" },
      { id: "qr-004-r2", text: "Applies Little's Law or equivalent (concurrent = rate × duration)" },
      { id: "qr-004-r3", text: "Arrives at ~10,000–100,000 concurrent queries (within one order of magnitude)" },
      { id: "qr-004-r4", text: "States the answer as an order-of-magnitude estimate, not a false-precision number" }
    ]
  },

  {
    id: "qr-005",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "medium",
    question: "A city of 1 million people wants to replace all incandescent streetlights (400W each) with LED streetlights (80W each). There are approximately 10 streetlights per 1,000 residents. Estimate the annual energy savings in kWh, then determine which of these input assumptions, if wrong by 2×, would most change the final answer: (a) number of streetlights, (b) wattage difference, or (c) hours of operation per year.",
    context: undefined,
    hints: [
      "First estimate total streetlights, then compute watts saved per light, then multiply by annual hours (streetlights run ~12 hours/night).",
      "Streetlights: 10 per 1,000 residents × 1,000,000 residents = 10,000 lights. Power saved per light: 400W − 80W = 320W. Annual hours: 365 × 12 = 4,380 hours.",
      "Annual savings = 10,000 × 320W × 4,380 hrs = 10,000 × 320 × 4,380 Wh ÷ 1,000 = kWh. All three inputs multiply together equally — a 2× error in any one of them changes the result by 2×. Ask whether any assumption is more uncertain than the others."
    ],
    referenceSolution: {
      approach: "Build a multiplicative chain (streetlights × watts saved × hours), compute the savings, then analyze which input carries the most uncertainty.",
      reasoning: "Streetlights: 10/1,000 × 1,000,000 = 10,000. Power saved per light: 400 − 80 = 320W = 0.32 kW. Annual hours: 365 × 12 ≈ 4,380 hrs. Annual savings = 10,000 × 0.32 × 4,380 = 14,016,000 kWh ≈ 14 million kWh. For sensitivity: since the formula is A × B × C, each input enters linearly. A 2× error in any single variable changes output by 2×. The interesting question is which is most uncertain: (a) streetlight density varies widely by city type (5–20 per 1,000), making it easily off by 2×; (b) the wattage difference is known precisely from specs; (c) hours of operation are set by policy and fairly stable (~10–14 hrs/night). Therefore, streetlight count density is the most uncertain input and deserves a range estimate.",
      commonMistakes: "Forgetting to convert W to kW before multiplying by hours. Assuming all inputs are equally uncertain without examining their nature. Giving a single-point estimate without noting the most sensitive variable.",
      alternatives: "Could also express savings in monetary terms (at $0.12/kWh, savings = ~$1.7M/year) or CO2 terms to make the answer more decision-relevant."
    },
    rubric: [
      { id: "qr-005-r1", text: "Correctly estimates ~10,000 streetlights from the given density" },
      { id: "qr-005-r2", text: "Uses 320W (not 80W or 400W) as the per-light saving" },
      { id: "qr-005-r3", text: "Annual savings estimate is in the range of 10–20 million kWh" },
      { id: "qr-005-r4", text: "Identifies that all three inputs multiply equally, so sensitivity is about uncertainty, not formula structure" },
      { id: "qr-005-r5", text: "Correctly identifies streetlight density as the most uncertain assumption" }
    ]
  },

  // ── MENTAL MATH (qr-006 to qr-010) ────────────────────────────────────────

  {
    id: "qr-006",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: [],
    difficulty: "easy",
    question: "A software engineer earns $130,000/year. Their employer pays an additional 15% in payroll taxes and benefits. What is the total annual cost of this employee to the company?",
    context: undefined,
    hints: [
      "You need to find 115% of $130,000. Break this into 100% + 15%.",
      "15% of $130,000 = 10% + 5% = $13,000 + $6,500 = $19,500.",
      "Total cost = $130,000 + $19,500 = $149,500."
    ],
    referenceSolution: {
      approach: "Compute 15% of the salary by splitting into 10% + 5%, then add to the base.",
      reasoning: "10% of $130,000 = $13,000. 5% = half of that = $6,500. 15% = $13,000 + $6,500 = $19,500. Total = $130,000 + $19,500 = $149,500.",
      commonMistakes: "Calculating 15% of the wrong base (e.g., after-tax income). Using a calculator dependency for simple percentage arithmetic. Getting 10% wrong by moving the decimal incorrectly.",
      alternatives: "Multiply $130,000 × 1.15 directly: $130,000 × 1.1 = $143,000; $130,000 × 0.05 = $6,500; total = $149,500."
    },
    rubric: [
      { id: "qr-006-r1", text: "Decomposes 15% into 10% + 5%" },
      { id: "qr-006-r2", text: "Correctly computes 10% and 5% of $130,000" },
      { id: "qr-006-r3", text: "Final answer is $149,500" },
      { id: "qr-006-r4", text: "Does not rely on a calculator for this computation" }
    ]
  },

  {
    id: "qr-007",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: [],
    difficulty: "easy",
    question: "A store is offering a 35% discount on a $240 jacket, then charging 8% sales tax on the discounted price. What is the final price?",
    context: undefined,
    hints: [
      "First find the discounted price: take 35% off $240. Then apply 8% tax to that result.",
      "35% of $240 = 10% × 3.5 = $24 × 3.5 = $84 off. Discounted price = $240 − $84 = $156.",
      "8% of $156 = 10% − 2% = $15.60 − $3.12 = $12.48. Final price = $156 + $12.48 = $168.48."
    ],
    referenceSolution: {
      approach: "Break each percentage into multiples of 10% and 1% to avoid difficult multiplication, applying discount first then tax.",
      reasoning: "Discount: 35% = 30% + 5%. 30% of $240 = $72. 5% of $240 = $12. Total discount = $84. Discounted price = $156. Tax: 8% of $156. 10% of $156 = $15.60. 2% of $156 = $3.12. 8% = 10% − 2% = $15.60 − $3.12 = $12.48. Final price = $156.00 + $12.48 = $168.48.",
      commonMistakes: "Applying tax before the discount. Computing 35% + 8% = 43% off the original price (wrong — you can't combine discount and tax this way). Rounding prematurely.",
      alternatives: "Multiply: $240 × 0.65 × 1.08. Compute 0.65 × 1.08 = 0.702 first, then $240 × 0.702 = $168.48. Same answer, slightly different path."
    },
    rubric: [
      { id: "qr-007-r1", text: "Applies discount before tax, not the other way around" },
      { id: "qr-007-r2", text: "Correctly computes 35% of $240 = $84" },
      { id: "qr-007-r3", text: "Correctly computes discounted price of $156" },
      { id: "qr-007-r4", text: "Final answer is $168.48 (or within $0.10 due to rounding)" }
    ]
  },

  {
    id: "qr-008",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: ["unit-economics"],
    difficulty: "easy",
    question: "A SaaS company has 4,800 monthly subscribers paying $25/month. They want to model the impact of a price increase to $30/month, expecting to lose 12% of subscribers. What is the expected change in monthly revenue?",
    context: undefined,
    hints: [
      "Compute current revenue, then compute new revenue (new price × retained subscribers), then find the difference.",
      "Current revenue: 4,800 × $25 = $120,000. Subscribers lost: 12% of 4,800 = 576. Remaining: 4,224.",
      "New revenue: 4,224 × $30. Break this into 4,000 × $30 + 224 × $30 = $120,000 + $6,720 = $126,720. Change = +$6,720."
    ],
    referenceSolution: {
      approach: "Calculate current revenue, apply churn to get new subscriber count, compute new revenue, and subtract to find the delta.",
      reasoning: "Current: 4,800 × $25 = $120,000/month. Churn: 12% × 4,800 = 576 subscribers lost. New count: 4,800 − 576 = 4,224. New revenue: 4,224 × $30. Decompose: 4,000 × 30 = $120,000; 224 × 30 = $6,720. Total = $126,720. Increase = $126,720 − $120,000 = $6,720/month (+5.6%).",
      commonMistakes: "Forgetting to compute the remaining subscriber count (applying price increase to all 4,800). Rounding 12% of 4,800 to 600 instead of 576 (meaningfully changes the result). Treating the 12% as revenue lost rather than subscribers lost.",
      alternatives: "Use algebra: ΔRevenue = N_new × P_new − N_old × P_old = 4,224 × 30 − 4,800 × 25."
    },
    rubric: [
      { id: "qr-008-r1", text: "Correctly computes 12% of 4,800 = 576 churned subscribers" },
      { id: "qr-008-r2", text: "Uses 4,224 (not 4,800) as the new subscriber base" },
      { id: "qr-008-r3", text: "New revenue is $126,720" },
      { id: "qr-008-r4", text: "Revenue change is +$6,720/month" }
    ]
  },

  {
    id: "qr-009",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: [],
    difficulty: "easy",
    question: "You're splitting a restaurant bill of $187 among 4 people. You want to leave an 18% tip on the pre-tax total. What does each person owe (tip included), assuming the bill shown is pre-tax?",
    context: undefined,
    hints: [
      "First compute the tip amount, then find the total including tip, then divide by 4.",
      "18% of $187: 10% = $18.70, 8% = roughly $15. Tip ≈ $33.66. Total ≈ $220.66.",
      "Alternatively: 18% ≈ 20% − 2%. 20% of $187 = $37.40. 2% of $187 = $3.74. Tip = $33.66. Total = $220.66. Per person = $220.66 ÷ 4 ≈ $55.17."
    ],
    referenceSolution: {
      approach: "Decompose 18% as (20% − 2%), compute tip, add to bill, divide by 4 people.",
      reasoning: "18% tip: use 20% − 2% method. 20% of $187 = $37.40. 2% of $187 = $3.74. Tip = $37.40 − $3.74 = $33.66. Total bill = $187.00 + $33.66 = $220.66. Per person = $220.66 / 4 = $55.165 ≈ $55.17.",
      commonMistakes: "Computing 18% as 10% + 8% = $18.70 + $14.96 = $33.66 (correct but harder mentally). Dividing the tip by 4 instead of the full total. Forgetting to add the tip before dividing.",
      alternatives: "Multiply $187 × 1.18 directly. Or estimate: $187/4 = $46.75 base; 18% of $46.75 ≈ $8.42; total per person ≈ $55.17."
    },
    rubric: [
      { id: "qr-009-r1", text: "Computes 18% of $187 correctly (~$33.66)" },
      { id: "qr-009-r2", text: "Adds tip to bill before dividing (total ~$220.66)" },
      { id: "qr-009-r3", text: "Per-person amount is approximately $55.17" },
      { id: "qr-009-r4", text: "Uses a decomposition trick (e.g., 20% − 2%) rather than brute-force multiplication" }
    ]
  },

  {
    id: "qr-010",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: ["market-sizing"],
    difficulty: "medium",
    question: "A retail chain has 320 stores. Average store revenue is $2.4M/year. The company spends 68% of revenue on cost of goods sold (COGS), 18% on operating expenses, and 4% on taxes. What is the company's annual net profit, and what is the net profit margin?",
    context: undefined,
    hints: [
      "Start with total revenue: 320 × $2.4M. Then determine what percentage of revenue is left after all costs.",
      "Total costs as % of revenue: 68% + 18% + 4% = 90%. Net profit margin = 100% − 90% = 10%.",
      "Total revenue = 320 × $2.4M = $768M. Net profit = 10% × $768M = $76.8M."
    ],
    referenceSolution: {
      approach: "Compute total revenue from store count and average, then subtract all cost percentages from 100% to find margin, then apply margin to revenue.",
      reasoning: "Total revenue: 320 × $2.4M. Do 300 × $2.4M = $720M, then 20 × $2.4M = $48M. Total = $768M. Cost percentages: 68% + 18% + 4% = 90%. Net profit margin = 10%. Net profit = 10% of $768M = $76.8M.",
      commonMistakes: "Computing each cost in dollars and subtracting sequentially (more error-prone than summing percentages first). Getting 320 × 2.4 wrong — a common arithmetic slip. Forgetting taxes as a cost.",
      alternatives: "Could compute each cost separately: COGS = 68% × $768M = $522.2M; OpEx = 18% × $768M = $138.2M; Taxes = 4% × $768M = $30.7M; Profit = $768M − $522.2M − $138.2M − $30.7M = $76.9M (same, rounding differences)."
    },
    rubric: [
      { id: "qr-010-r1", text: "Total revenue is $768M" },
      { id: "qr-010-r2", text: "Sums cost percentages correctly to 90%" },
      { id: "qr-010-r3", text: "Net profit margin is 10%" },
      { id: "qr-010-r4", text: "Net profit is $76.8M" },
      { id: "qr-010-r5", text: "Shows a systematic approach rather than sequential subtraction" }
    ]
  },

  // ── UNIT ANALYSIS (qr-011 to qr-015) ──────────────────────────────────────

  {
    id: "qr-011",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "A car travels 65 miles per hour for 2.5 hours, then 45 miles per hour for 1 hour. What is the total distance? Show your unit labels at each step.",
    context: undefined,
    hints: [
      "Distance = speed × time. Make sure the units multiply to give miles.",
      "Segment 1: 65 mi/hr × 2.5 hr = ? miles. Segment 2: 45 mi/hr × 1 hr = ? miles.",
      "Segment 1: 65 × 2.5 = 162.5 miles. Segment 2: 45 × 1 = 45 miles. Total = 207.5 miles."
    ],
    referenceSolution: {
      approach: "Apply distance = rate × time to each segment with explicit unit labeling, then sum.",
      reasoning: "Segment 1: 65 mi/hr × 2.5 hr = 162.5 mi (hours cancel). Segment 2: 45 mi/hr × 1 hr = 45 mi. Total = 162.5 + 45 = 207.5 miles.",
      commonMistakes: "Adding the speeds together and multiplying by total time (wrong — speeds apply to different time intervals). Forgetting to sum both segments. Dropping the units and losing track of what the numbers represent.",
      alternatives: "Could compute average speed if needed: 207.5 mi / 3.5 hr ≈ 59.3 mph average — useful sanity check (between 45 and 65)."
    },
    rubric: [
      { id: "qr-011-r1", text: "Writes distance = rate × time with units shown" },
      { id: "qr-011-r2", text: "Hours cancel correctly in each segment" },
      { id: "qr-011-r3", text: "Segment 1 = 162.5 miles, Segment 2 = 45 miles" },
      { id: "qr-011-r4", text: "Total distance = 207.5 miles" }
    ]
  },

  {
    id: "qr-012",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "A water pump moves 120 gallons per minute. A swimming pool holds 18,000 gallons. How long will it take to fill the pool? Give your answer in hours and minutes.",
    context: undefined,
    hints: [
      "Time = volume / flow rate. Check that the units work out to minutes.",
      "18,000 gallons ÷ 120 gallons/minute = ? minutes.",
      "18,000 / 120 = 150 minutes = 2 hours 30 minutes."
    ],
    referenceSolution: {
      approach: "Divide total volume by flow rate to get time, then convert minutes to hours and minutes.",
      reasoning: "Time = 18,000 gal ÷ 120 gal/min. Units: gal ÷ (gal/min) = gal × (min/gal) = min. Value: 18,000 / 120 = 150 min. Convert: 150 min = 2 × 60 + 30 = 2 hours 30 minutes.",
      commonMistakes: "Multiplying instead of dividing. Not converting minutes to hours. Canceling units incorrectly (e.g., forgetting that dividing by a rate inverts it).",
      alternatives: "Could also reason: at 120 gal/min, the pump moves 7,200 gal/hour. 18,000 / 7,200 = 2.5 hours. Same answer via unit conversion first."
    },
    rubric: [
      { id: "qr-012-r1", text: "Sets up time = volume / rate with correct unit cancellation shown" },
      { id: "qr-012-r2", text: "Division gives 150 minutes" },
      { id: "qr-012-r3", text: "Converts to 2 hours 30 minutes" },
      { id: "qr-012-r4", text: "Units are tracked explicitly through the calculation" }
    ]
  },

  {
    id: "qr-013",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: ["identifying-unknowns"],
    difficulty: "easy",
    question: "A formula for energy cost of running a data center is given as: Cost = Power (kW) × Time (hours) × Rate ($/kWh). A server rack draws 8 kilowatts, runs 24 hours a day, and electricity costs $0.11 per kWh. What is the monthly electricity cost for this rack (assume 30 days)?",
    context: undefined,
    hints: [
      "Plug the values into the formula. Check what units you expect for Cost: kW × hours × $/kWh.",
      "kW × hours = kWh. kWh × $/kWh = $. The units work out to dollars.",
      "Monthly hours = 24 × 30 = 720 hours. Cost = 8 kW × 720 hr × $0.11/kWh = $633.60."
    ],
    referenceSolution: {
      approach: "Plug values into the formula, verify unit cancellation yields dollars, then compute.",
      reasoning: "Monthly hours = 24 hr/day × 30 days = 720 hours. Cost = 8 kW × 720 hr × $0.11/kWh. Unit check: kW × hr × $/kWh = kWh × $/kWh = $. Value: 8 × 720 = 5,760 kWh; 5,760 × $0.11 = $633.60.",
      commonMistakes: "Using daily hours (24) instead of monthly (720). Forgetting to multiply kW × hours to get kWh before applying the rate. Treating kW and kWh as interchangeable.",
      alternatives: "Compute daily cost first: 8 × 24 × $0.11 = $21.12/day. Multiply by 30 = $633.60/month."
    },
    rubric: [
      { id: "qr-013-r1", text: "Demonstrates unit cancellation: kW × hr × $/kWh = $" },
      { id: "qr-013-r2", text: "Correctly computes monthly hours as 720" },
      { id: "qr-013-r3", text: "Monthly energy usage = 5,760 kWh" },
      { id: "qr-013-r4", text: "Monthly cost = $633.60" }
    ]
  },

  {
    id: "qr-014",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "A nutritionist says a food has 4.5 calories per gram of carbohydrate. A cereal serving contains 38 grams of carbohydrates. How many calories from carbohydrates are in one serving? If the total serving is 180 calories, what percentage comes from carbohydrates?",
    context: undefined,
    hints: [
      "Calories from carbs = grams of carbs × calories per gram. Check the unit: g × cal/g = cal.",
      "38 g × 4.5 cal/g = 171 calories from carbs.",
      "Percentage = 171 / 180 × 100 = 95%. That seems high — worth a sanity check."
    ],
    referenceSolution: {
      approach: "Multiply grams by the caloric density to get calories, then divide by total to find the percentage.",
      reasoning: "Calories from carbs: 38 g × 4.5 cal/g = 171 cal. Units: g × cal/g = cal ✓. Percentage: 171 / 180 × 100 = 95%. This is indeed very high, suggesting the cereal is almost entirely carbohydrates — plausible for a sugary cereal with little protein or fat.",
      commonMistakes: "Dividing instead of multiplying (getting cal/g ÷ g = cal/g², nonsensical). Not confirming that grams cancel. Expressing percentage as a decimal (0.95) instead of 95%.",
      alternatives: "Round 38 × 4.5: 40 × 4.5 = 180, minus 2 × 4.5 = 9, so 171. Quick mental check matches."
    },
    rubric: [
      { id: "qr-014-r1", text: "Shows unit cancellation: g × cal/g = cal" },
      { id: "qr-014-r2", text: "Calories from carbs = 171" },
      { id: "qr-014-r3", text: "Percentage from carbs = 95%" },
      { id: "qr-014-r4", text: "Notes that 95% is very high (sanity observation)" }
    ]
  },

  {
    id: "qr-015",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: ["bounding-estimates"],
    difficulty: "medium",
    question: "A clinical trial measures drug concentration in blood as 250 micrograms per deciliter (μg/dL). The safe therapeutic range is 1.5 to 3.0 mg/L. Is the measured concentration within the safe range? Show full unit conversion.",
    context: undefined,
    hints: [
      "You need to convert μg/dL to mg/L (or vice versa) before comparing. These are not the same unit.",
      "1 mg = 1,000 μg. 1 L = 10 dL. So 1 mg/L = 1,000 μg / 10 dL = 100 μg/dL.",
      "250 μg/dL = 250 / 100 mg/L = 2.5 mg/L. The safe range is 1.5–3.0 mg/L. 2.5 is within range."
    ],
    referenceSolution: {
      approach: "Convert both sides to the same unit through explicit dimensional analysis, then compare.",
      reasoning: "Convert 250 μg/dL to mg/L. Step 1: μg to mg: 250 μg × (1 mg / 1,000 μg) = 0.25 mg. Step 2: dL to L: divide numerator and multiply denominator by 10: 0.25 mg/dL × (10 dL/L) = 2.5 mg/L. Alternatively: 1 mg/L = 100 μg/dL (since 1 mg = 1,000 μg and 1 L = 10 dL, so mg/L = 1,000/10 μg/dL = 100 μg/dL). 250 μg/dL ÷ 100 = 2.5 mg/L. The therapeutic range is 1.5–3.0 mg/L. 2.5 is within range — the patient is in the safe window.",
      commonMistakes: "Confusing the direction of conversion (multiplying when should divide or vice versa). Forgetting that dL to L is × 10 (not ÷ 10) when it's in the denominator. Skipping the unit check and comparing numbers without aligning units.",
      alternatives: "Convert the safe range to μg/dL instead: 1.5 mg/L × 100 = 150 μg/dL; 3.0 × 100 = 300 μg/dL. Safe range = 150–300 μg/dL. Measured = 250 μg/dL. Within range."
    },
    rubric: [
      { id: "qr-015-r1", text: "Identifies that units must be aligned before comparison" },
      { id: "qr-015-r2", text: "Correctly converts μg to mg (÷ 1,000) and dL to L (÷ 0.1 = × 10)" },
      { id: "qr-015-r3", text: "Measured concentration = 2.5 mg/L" },
      { id: "qr-015-r4", text: "Correctly concludes the measurement is within the 1.5–3.0 mg/L safe range" },
      { id: "qr-015-r5", text: "Shows conversion factor for each unit dimension explicitly" }
    ]
  },

  // ── SANITY CHECKS (qr-016 to qr-020) ──────────────────────────────────────

  {
    id: "qr-016",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: [],
    difficulty: "easy",
    question: "A consultant presents a slide claiming: 'Our marketing campaign increased website conversions by 0.3%, boosting monthly revenue from $800,000 to $1,400,000.' Identify at least two numerical red flags in this claim.",
    context: undefined,
    hints: [
      "Focus on whether the numbers are internally consistent. What does a 0.3% conversion increase imply for revenue?",
      "A 0.3% relative increase in conversions should produce roughly 0.3% more revenue (assuming price and traffic are unchanged). What would that be on $800,000?",
      "0.3% of $800,000 = $2,400. But the claim shows $600,000 revenue increase. That's 75% growth, not 0.3%. Either the metric cited is wrong or the revenue numbers are fabricated."
    ],
    referenceSolution: {
      approach: "Cross-check the implied causal link: if conversions increased by X%, revenue should increase by approximately X% (holding other factors constant). Compare the implied increase to what's claimed.",
      reasoning: "Red flag 1 (magnitude mismatch): A 0.3% conversion improvement on $800K base would yield roughly $800K × 0.003 = $2,400 in additional revenue, not $600,000. The revenue jump is 250× larger than the conversion increase would explain. Red flag 2 (implied growth rate): $800K → $1,400K is a 75% revenue increase in one month. That's implausible for an established business from a single campaign. Red flag 3 (units confusion): 0.3% might be percentage points (e.g., conversion rate went from 1.7% to 2.0%) — but even that's only a 17% improvement in conversion rate, implying ~17% revenue growth, not 75%.",
      commonMistakes: "Accepting both numbers at face value without checking consistency. Assuming 'conversion rate' and 'conversion count' are equivalent. Missing that 75% monthly revenue growth is extraordinary.",
      alternatives: "Could also flag the implausibility of 75% MoM growth as a standalone sanity check, independent of the conversion metric claim."
    },
    rubric: [
      { id: "qr-016-r1", text: "Computes what 0.3% of $800K actually equals (~$2,400)" },
      { id: "qr-016-r2", text: "Notes the gap between implied ($2,400) and claimed ($600,000) revenue increase" },
      { id: "qr-016-r3", text: "Flags the 75% MoM revenue growth as extraordinarily high" },
      { id: "qr-016-r4", text: "Identifies at least two distinct numerical inconsistencies" }
    ]
  },

  {
    id: "qr-017",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: [],
    difficulty: "easy",
    question: "A friend tells you they drove from New York City to Los Angeles (roughly 2,800 miles) in 28 hours without stopping. Does this pass a basic sanity check?",
    context: undefined,
    hints: [
      "Compute the average speed implied by this claim: miles / hours.",
      "2,800 miles / 28 hours = 100 mph average. Is this achievable on US roads?",
      "100 mph sustained for 28 hours is not realistic: US highway speed limits are 65–80 mph, traffic in major cities would slow you down, and refueling stops are required. The claim fails a sanity check."
    ],
    referenceSolution: {
      approach: "Compute implied average speed from distance and time, then check it against known constraints (speed limits, human limits, fuel).",
      reasoning: "Implied speed = 2,800 mi / 28 hr = 100 mph. Sanity issues: (1) US interstate speed limits are 65–75 mph; sustained 100 mph is illegal and impractical. (2) Even at 75 mph with zero stops: 2,800 / 75 ≈ 37 hours, not 28. (3) A typical car has 300–400 mile range per tank; at 100 mph, refueling would be needed every 3–4 hours, adding time. (4) Driving 28 hours continuously without sleep is dangerous and unrealistic. Verdict: claim fails sanity check.",
      commonMistakes: "Not computing the implied speed and accepting the claim intuitively. Not knowing approximate US speed limits. Ignoring fuel stops and human fatigue.",
      alternatives: "Google Maps estimate for this drive is ~40 hours of driving. Even fast drivers do it in 3 days. 28 hours is clearly impossible."
    },
    rubric: [
      { id: "qr-017-r1", text: "Computes implied average speed as 100 mph" },
      { id: "qr-017-r2", text: "Compares to known speed limits (~65–75 mph on US interstates)" },
      { id: "qr-017-r3", text: "Notes the minimum drive time at legal speeds would be ~37+ hours" },
      { id: "qr-017-r4", text: "Identifies at least one additional constraint (fuel, fatigue, traffic)" }
    ]
  },

  {
    id: "qr-018",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: ["challenging-defaults"],
    difficulty: "easy",
    question: "A startup pitch deck states: 'The global market for our product is $4 trillion. If we capture just 1% market share, that's $40 billion in revenue in Year 3.' Apply a sanity check to this projection.",
    context: undefined,
    hints: [
      "Start with the math: is $40B equal to 1% of $4T? Then question whether 'just 1%' is actually achievable.",
      "1% of $4T = $40B. The math is correct. But is reaching $40B revenue in 3 years realistic?",
      "Compare to known benchmarks: the fastest-growing companies in history (Amazon, Google, Salesforce) took 10–20 years to reach $40B in revenue. A startup reaching that in 3 years has never happened."
    ],
    referenceSolution: {
      approach: "Verify the arithmetic is correct, then sanity-check the business assumption using real-world benchmarks.",
      reasoning: "Math check: 1% × $4T = $0.01 × $4,000B = $40B. The arithmetic is correct. Business sanity check: $40B in Year 3 revenue would make this company one of the largest in the world almost instantly. For context: Amazon took ~20 years to reach $40B revenue; Google ~10 years; Salesforce never reached it that fast. No startup has ever achieved $40B in Year 3. This is the 'TAM fallacy' — the market is large, but the '1%' feels small while actually representing an enormous absolute number. The 1% assumption is not 'conservative'; it's wildly optimistic given zero market share today.",
      commonMistakes: "Only checking the arithmetic without questioning the business assumption. Accepting 'just 1%' as modest without computing the absolute dollar figure in context. Not benchmarking against real companies.",
      alternatives: "Ask: what do comparable companies look like in Year 3? Most funded startups have $10–50M ARR in Year 3. That's 0.001% of $4T, not 1%."
    },
    rubric: [
      { id: "qr-018-r1", text: "Confirms the arithmetic is correct (1% × $4T = $40B)" },
      { id: "qr-018-r2", text: "Questions whether $40B in Year 3 is achievable, not just whether 1% sounds small" },
      { id: "qr-018-r3", text: "Provides a real-world benchmark (e.g., fastest-growing companies took 10+ years)" },
      { id: "qr-018-r4", text: "Names the TAM fallacy or equivalent concept" }
    ]
  },

  {
    id: "qr-019",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: [],
    difficulty: "easy",
    question: "An engineering report states that a new bridge design can support 'up to 5,000 kilograms per square meter' of load. The bridge deck is 200 meters long and 10 meters wide. A reviewer claims the bridge can hold 10,000 metric tons total. Is the reviewer's claim correct?",
    context: undefined,
    hints: [
      "Total capacity = load per area × total area. Compute the total area of the bridge deck first.",
      "Area = 200 m × 10 m = 2,000 m². Capacity = 5,000 kg/m² × 2,000 m² = 10,000,000 kg.",
      "10,000,000 kg = 10,000 metric tons (since 1 metric ton = 1,000 kg). The reviewer is correct."
    ],
    referenceSolution: {
      approach: "Multiply load capacity per unit area by total area to get total capacity, then convert to the stated unit.",
      reasoning: "Area = 200 m × 10 m = 2,000 m². Total capacity = 5,000 kg/m² × 2,000 m² = 10,000,000 kg. Unit conversion: 1 metric ton = 1,000 kg, so 10,000,000 kg ÷ 1,000 = 10,000 metric tons. The reviewer is correct.",
      commonMistakes: "Using length or perimeter instead of area. Forgetting to convert kg to metric tons. Confusing 'metric ton' (1,000 kg) with 'short ton' (907 kg) or 'long ton' (1,016 kg).",
      alternatives: "Could convert first: 5,000 kg/m² = 5 metric tons/m². Then 5 t/m² × 2,000 m² = 10,000 metric tons. Same result."
    },
    rubric: [
      { id: "qr-019-r1", text: "Correctly computes bridge deck area as 2,000 m²" },
      { id: "qr-019-r2", text: "Multiplies kg/m² by m² to get total kg" },
      { id: "qr-019-r3", text: "Converts 10,000,000 kg to 10,000 metric tons" },
      { id: "qr-019-r4", text: "Confirms the reviewer's claim is correct" }
    ]
  },

  {
    id: "qr-020",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: ["assumption-validation"],
    difficulty: "medium",
    question: "A financial model projects that a new coffee shop will earn $850,000 in revenue in its first year. The shop seats 40 people, is open 14 hours a day, 360 days a year, and the average transaction is $8. Run a sanity check on the revenue projection using these operating parameters.",
    context: undefined,
    hints: [
      "Estimate the maximum possible revenue if every seat turned over every hour, and compare to the projection.",
      "Max throughput: 40 seats × 14 hours = 560 customer-hours per day. If average stay is 30 min, max customers/day = 1,120. At $8 each = $8,960/day max.",
      "If max daily revenue is ~$9,000, annual max would be ~$9,000 × 360 = $3.24M. The projection of $850K implies 26% of theoretical max — does that seem like a reasonable occupancy rate for a new coffee shop?"
    ],
    referenceSolution: {
      approach: "Compute maximum theoretical revenue from the operating parameters, then express the projection as a utilization rate and assess plausibility.",
      reasoning: "Assume average customer stay = 30 minutes (2 turns/hour per seat). Max customers/day = 40 seats × 2 turns/hr × 14 hrs = 1,120 customers. Max daily revenue = 1,120 × $8 = $8,960. Annual max = $8,960 × 360 = $3,225,600 ≈ $3.2M. Projection: $850K. Implied utilization: $850K / $3.2M ≈ 26.5%. For a new coffee shop, 25–30% of theoretical maximum is on the low but plausible end (independent cafés often run at 30–50% capacity). The projection appears reasonable — slightly conservative — but the key assumption is the 30-min average stay. If average stay is 20 minutes (3 turns/hr), max revenue rises to $4.8M and 26% becomes 18%, still plausible. The projection holds up to scrutiny.",
      commonMistakes: "Projecting revenue without checking against a capacity ceiling. Assuming 100% occupancy is the baseline. Not identifying the average stay time as the critical hidden assumption.",
      alternatives: "Could approach from the demand side: local catchment area population × visit frequency. Or compare to industry benchmarks: a well-performing independent café does $500K–$1M/year. $850K is at the upper-middle range — achievable but optimistic for Year 1."
    },
    rubric: [
      { id: "qr-020-r1", text: "Estimates maximum daily customers using a reasonable average stay time" },
      { id: "qr-020-r2", text: "Computes maximum theoretical annual revenue (~$3–4M range)" },
      { id: "qr-020-r3", text: "Expresses $850K projection as a utilization rate (~20–30%)" },
      { id: "qr-020-r4", text: "Identifies average stay time as the key hidden assumption" },
      { id: "qr-020-r5", text: "Reaches a reasoned conclusion (plausible, not guaranteed)" }
    ]
  },

  // ── ESTIMATION CHAINS (qr-021 to qr-025) ──────────────────────────────────

  {
    id: "qr-021",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["fermi-problems"],
    difficulty: "easy",
    question: "Estimate how many piano tuners work in Chicago. Walk through your estimation chain step by step.",
    context: "This is a classic Fermi estimation problem. The goal is to build a logical chain of estimates that leads to a reasonable answer range, not to find the exact number.",
    hints: [
      "Start with Chicago's population, estimate what fraction of households own pianos, and how often they need tuning.",
      "Chicago population ~2.7M. ~3 people per household = ~900,000 households. Maybe 1 in 20 own a piano = 45,000 pianos.",
      "Each piano needs tuning ~1x per year. A tuner does ~4 jobs/day × 250 working days = 1,000 tunings/year per tuner. 45,000 ÷ 1,000 = ~45 tuners."
    ],
    referenceSolution: {
      approach: "Chain together: population → households → piano ownership rate → annual tunings needed → capacity per tuner → number of tuners.",
      reasoning: "Chicago population: ~2.7M. Average household size: 2.5–3 persons → ~900,000–1,000,000 households. Piano ownership: roughly 1 in 20–25 households own a piano (5%) → ~40,000–50,000 pianos. Tuning frequency: once per year on average. Annual tunings needed: ~45,000. A tuner's capacity: 4 appointments/day × 5 days/week × 50 weeks = 1,000 tunings/year. Number of tuners: 45,000 / 1,000 = 45 tuners. The actual answer (often cited) is approximately 40–80 tuners in Chicago. Our estimate of 45 is well within that range.",
      commonMistakes: "Starting with pianos per person instead of per household (leads to undercounting). Forgetting that not all tuners work full time. Skipping the capacity calculation and guessing tuner count directly.",
      alternatives: "Could approach from supply side: how many piano tuner listings in Chicago Yellow Pages (historical benchmark: ~81, so our estimate of ~45 is on the low side but in the right order of magnitude)."
    },
    rubric: [
      { id: "qr-021-r1", text: "Starts with Chicago's population (~2.7M)" },
      { id: "qr-021-r2", text: "Chains through: households → piano ownership rate → annual tuning demand" },
      { id: "qr-021-r3", text: "Estimates tuner capacity in tunings per year" },
      { id: "qr-021-r4", text: "Final estimate is in the range of 25–100 tuners" },
      { id: "qr-021-r5", text: "Each step is explained with a rationale, not just stated" }
    ]
  },

  {
    id: "qr-022",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["market-sizing"],
    difficulty: "easy",
    question: "Estimate the annual revenue of all Starbucks locations in the United States. Build your estimate from the ground up — do not use any memorized figures for total Starbucks revenue.",
    context: undefined,
    hints: [
      "Think about number of US locations, then estimate revenue per location per day.",
      "Starbucks has roughly 16,000 US stores. Peak hours drive most volume — estimate customer throughput per hour during peak and off-peak times.",
      "~16,000 stores × ~$1.5M/year per store = ~$24B. (Industry benchmark: US Starbucks revenue ≈ $18–20B, so this is in the right ballpark.)"
    ],
    referenceSolution: {
      approach: "Estimate number of US Starbucks stores, then build a daily revenue estimate per store from customer count and average ticket size.",
      reasoning: "Store count: roughly 16,000 US locations. Daily revenue per store: think about a typical Starbucks. Morning rush (7–9am): ~1 customer/30 sec × 2 hours = ~240 customers. Midday (9am–12pm): ~1 customer/min × 3 hours = ~180. Afternoon (12–6pm): ~1 customer/2 min × 6 hours = ~180. Evening (6–9pm): ~1 customer/3 min × 3 hours = ~60. Total: ~660 customers/day. Average ticket: $6–7 (mix of coffee, food, merchandise). Daily revenue: 660 × $6.50 ≈ $4,300. Annual: $4,300 × 365 ≈ $1.57M/store. Total US: 16,000 × $1.57M ≈ $25B. (Actual US revenue ~$18–20B, so we're about 25% high — likely overestimating customer count.)",
      commonMistakes: "Guessing store revenue without building from customer count. Assuming all hours are equally busy. Forgetting that many Starbucks are drive-through only (higher throughput). Not closing the loop with a sanity check.",
      alternatives: "Could anchor on known data: US coffee shop market is ~$50B; Starbucks has ~50% share → $25B. Consistent with our estimate."
    },
    rubric: [
      { id: "qr-022-r1", text: "Estimates US store count in the range of 12,000–18,000" },
      { id: "qr-022-r2", text: "Builds daily revenue from customer throughput × average ticket" },
      { id: "qr-022-r3", text: "Per-store annual revenue estimated in the $1M–$2M range" },
      { id: "qr-022-r4", text: "Total estimate is in the $15B–$30B range" },
      { id: "qr-022-r5", text: "Identifies one source of potential error in the chain" }
    ]
  },

  {
    id: "qr-023",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["physical-estimation"],
    difficulty: "easy",
    question: "Estimate how many tennis balls would fit inside a school bus. Show your estimation chain.",
    context: undefined,
    hints: [
      "Estimate the interior volume of a school bus, then the volume of a tennis ball, then divide and apply a packing efficiency factor.",
      "School bus interior: roughly 6m long × 2m wide × 1.5m high ≈ 18 cubic meters. Tennis ball diameter: ~6.7 cm, radius ~3.35 cm.",
      "Tennis ball volume ≈ (4/3)π(3.35)³ ≈ 157 cm³. Bus volume = 18m³ = 18,000,000 cm³. Packing efficiency ~64%. Balls = 18,000,000 × 0.64 / 157 ≈ 73,000 balls."
    ],
    referenceSolution: {
      approach: "Estimate bus interior volume in cm³, compute tennis ball volume using sphere formula, divide with a packing efficiency correction (~64% for random sphere packing).",
      reasoning: "Bus interior: ~6m long × 2m wide × 1.5m high = 18 m³ = 18,000,000 cm³. Tennis ball: diameter ≈ 6.7 cm (standard: 6.54–6.86 cm), radius = 3.35 cm. Volume = (4/3)π r³ = (4/3) × 3.14 × (3.35)³ = 4.19 × 37.6 ≈ 157 cm³. Without packing efficiency: 18,000,000 / 157 ≈ 115,000 balls. With random packing ~64%: 115,000 × 0.64 ≈ 74,000 balls. A reasonable estimate is 50,000–100,000 tennis balls.",
      commonMistakes: "Forgetting packing efficiency (spheres can't fill 100% of space). Using diameter instead of radius in the sphere formula. Confusing m³ and cm³ conversion (1 m³ = 10^6 cm³, not 10^3).",
      alternatives: "Estimate using 'cube approximation' for the ball: treat as a 7 cm cube → 343 cm³ per 'slot'. 18,000,000 / 343 ≈ 52,500 balls. This already accounts for packing waste. Answers in the 50K–100K range all pass."
    },
    rubric: [
      { id: "qr-023-r1", text: "Estimates bus interior volume reasonably (15–25 m³ range)" },
      { id: "qr-023-r2", text: "Uses approximately correct tennis ball size (~6.7 cm diameter)" },
      { id: "qr-023-r3", text: "Applies a packing efficiency factor or equivalent correction" },
      { id: "qr-023-r4", text: "Correctly converts m³ to cm³ (× 10^6)" },
      { id: "qr-023-r5", text: "Final estimate is in the range of 40,000–120,000 balls" }
    ]
  },

  {
    id: "qr-024",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["economic-estimation"],
    difficulty: "easy",
    question: "Estimate the total annual amount Americans spend on gasoline. Build your chain from the US population down.",
    context: undefined,
    hints: [
      "Start with US population, estimate the fraction who drive, then average miles driven per year, then fuel efficiency, then price per gallon.",
      "US population ~330M. About 220M licensed drivers, ~180M actively driving. Average ~15,000 miles/year at ~25 mpg = 600 gallons/year per driver.",
      "180M drivers × 600 gal × $3.50/gal = $378B/year. (Actual: ~$400–500B/year including all road vehicles.)"
    ],
    referenceSolution: {
      approach: "Chain from driver count → miles per year → gallons per year → cost per gallon → total spending.",
      reasoning: "US population: 330M. Licensed drivers: ~220M (~67% of population). Active drivers: ~180M. Annual miles: ~15,000 miles/driver (US average is ~14,200). Fuel efficiency: ~28 mpg average (improving with EVs/hybrids, but average fleet is older). Gallons per driver: 15,000 / 28 ≈ 535 gallons. Rounding to 550 gallons. Price: $3.50/gallon (rough average for regular). Per driver annual spend: 550 × $3.50 = $1,925. Total: 180M × $1,925 ≈ $346B. Add commercial vehicles (trucks, fleets ~20% more): ~$415B. Official EIA data: ~$400–450B/year. Our estimate of $350–420B is well-calibrated.",
      commonMistakes: "Using total population instead of driver count. Forgetting to convert miles to gallons (need to divide by mpg, not multiply). Using a fuel efficiency that is too low (old 20 mpg assumption) or too high.",
      alternatives: "Could also estimate from the supply side: US gasoline consumption is ~8.8 million barrels/day × 42 gallons/barrel × 365 × $3.50 = ~$473B. Consistent with our estimate."
    },
    rubric: [
      { id: "qr-024-r1", text: "Estimates number of active US drivers (150M–200M range)" },
      { id: "qr-024-r2", text: "Uses reasonable miles/year (~12,000–18,000) and mpg (~25–30)" },
      { id: "qr-024-r3", text: "Computes gallons per driver per year" },
      { id: "qr-024-r4", text: "Total annual spending estimate is in the $300B–$600B range" },
      { id: "qr-024-r5", text: "Identifies one assumption that could significantly shift the estimate" }
    ]
  },

  {
    id: "qr-025",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["mece-decomposition", "sensitivity-analysis"],
    difficulty: "medium",
    question: "A city government wants to estimate the cost of converting all residential buildings to solar power. The city has 500,000 residents. Build a full estimation chain, identify the three most uncertain inputs, and describe how a 2× error in each would affect the final answer.",
    context: "Assume the goal is to cover 100% of residential electricity demand with rooftop solar panels. You may use reasonable estimates for all inputs.",
    hints: [
      "Break the problem into: number of residential units → average electricity consumption per unit → solar panel capacity needed → cost per installed watt → total installation cost.",
      "Average US household: ~10,000 kWh/year. 1 kW of solar generates ~1,200–1,500 kWh/year in a typical city. So each household needs ~7–8 kW of panels. At $3/watt installed, that's ~$21,000–$24,000 per household.",
      "Households: 500,000 residents ÷ 2.5 people/household = 200,000 households. Total: 200,000 × $22,500 ≈ $4.5B. Most uncertain: cost per watt (varies $2–5), local solar irradiance (varies by geography), and actual electricity consumption."
    ],
    referenceSolution: {
      approach: "Build a multiplicative chain: households → kWh demand → kW panel capacity → installed cost per watt → total cost. Then analyze sensitivity of each input.",
      reasoning: "Step 1 — Households: 500,000 residents ÷ 2.5 people/household = 200,000 residential units. Step 2 — Electricity demand: US average ~10,000 kWh/household/year. Step 3 — Solar capacity needed: 1 kW of solar in a mid-latitude US city generates ~1,300 kWh/year. Panels needed per household: 10,000 / 1,300 ≈ 7.7 kW. Step 4 — Installed cost: ~$3.00/watt (2024 residential average, after federal incentives ~$2.50; gross ~$3.50). Use $3.00/watt. Cost per household: 7,700 W × $3.00 = $23,100. Step 5 — Total: 200,000 × $23,100 = $4.62B ≈ $4.6 billion. Sensitivity analysis: (a) Cost per watt ($2–$5 range): 2× change → 2× output change → range $2.3B–$9.2B. This is the highest dollar-impact variable. (b) Solar irradiance (1,000–1,600 kWh/kW/year): 2× change → inversely affects panel size needed → range $2.3B–$9.2B. Equally impactful. (c) Electricity consumption per household (5,000–15,000 kWh/year): 2× change → 2× change in panel size → same range. All three inputs enter linearly; the most uncertain is probably cost per watt (highly variable by installer, region, financing) and irradiance (varies by climate zone).",
      commonMistakes: "Using per-capita consumption instead of per-household. Confusing kW (power) with kWh (energy). Not noting that irradiance is location-dependent. Treating sensitivity as purely arithmetic without noting which variables are empirically most uncertain.",
      alternatives: "Could decompose by building type (apartment vs. single-family) since they have very different roof-to-unit ratios and consumption patterns — apartments share roofs, so per-unit capacity may be limited by roof space."
    },
    rubric: [
      { id: "qr-025-r1", text: "Correctly derives ~200,000 residential units from population" },
      { id: "qr-025-r2", text: "Uses per-household (not per-capita) electricity consumption" },
      { id: "qr-025-r3", text: "Converts kWh demand to kW panel capacity using an irradiance assumption" },
      { id: "qr-025-r4", text: "Final cost estimate is in the $2B–$10B range" },
      { id: "qr-025-r5", text: "Identifies three specific uncertain inputs with justification" },
      { id: "qr-025-r6", text: "Shows how a 2× error in each input propagates through the chain" }
    ]
  },
];
