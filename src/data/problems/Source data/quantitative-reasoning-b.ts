import type { Problem } from '@/types';

export const quantitativeReasoningProblemsB: Problem[] = [
  // ── ORDERS OF MAGNITUDE (qr-026 to qr-030) ────────────────────────────────

  {
    id: "qr-026",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: [],
    difficulty: "medium",
    question: "A pharmaceutical company claims its new drug candidate has a binding affinity of 3 nM (nanomolar) while the existing drug binds at 2 μM (micromolar). A competitor's molecule binds at 500 pM (picomolar). Without precise division, rank all three by potency and estimate how many orders of magnitude the best candidate outperforms the worst.",
    context: "In pharmacology, lower binding affinity values (measured in molar concentration) mean higher potency — the drug works at lower doses.",
    hints: [
      "Higher potency = lower concentration needed. Convert all three to the same unit (e.g., nanomolar) and rank from smallest to largest value.",
      "1 μM = 1,000 nM. 1 pM = 0.001 nM. So: existing drug = 2,000 nM, new candidate = 3 nM, competitor = 0.5 nM.",
      "Ranking from most to least potent: competitor (0.5 nM) > new candidate (3 nM) > existing drug (2,000 nM). Best vs worst: 2,000 / 0.5 = 4,000× ≈ 3.6 orders of magnitude — call it roughly 3–4 orders."
    ],
    referenceSolution: {
      approach: "Convert all concentrations to a common unit, rank by value (smallest = most potent), and compute the ratio between extremes.",
      reasoning: "Existing drug: 2 μM = 2 × 10^−6 M = 2,000 nM. New candidate: 3 nM = 3 × 10^−9 M. Competitor: 500 pM = 0.5 nM = 5 × 10^−10 M. Ranking (most to least potent): competitor (0.5 nM) > new candidate (3 nM) > existing drug (2,000 nM). Ratio of worst to best: 2,000 nM / 0.5 nM = 4,000×. log₁₀(4,000) ≈ 3.6, so roughly 3–4 orders of magnitude. The new drug is 667× more potent than the existing drug; the competitor is 6× better than the new drug.",
      commonMistakes: "Treating lower affinity value as less potent. Forgetting to convert pM → nM (factor of 1,000). Comparing μM to nM without conversion. Saying the new drug 'beats the competitor' when it doesn't.",
      alternatives: "Work entirely in molar: existing = 2×10^−6, new = 3×10^−9, competitor = 5×10^−10. Exponent differences: −6 vs −10 is 4 orders of magnitude, confirming the result."
    },
    rubric: [
      { id: "qr-026-r1", text: "Correctly converts all three values to a common unit" },
      { id: "qr-026-r2", text: "Ranks potency correctly: competitor > new candidate > existing drug" },
      { id: "qr-026-r3", text: "Estimates the best-vs-worst ratio as ~3–4 orders of magnitude" },
      { id: "qr-026-r4", text: "Recognizes that lower concentration = higher potency" }
    ]
  },

  {
    id: "qr-027",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: ["market-sizing"],
    difficulty: "medium",
    question: "A startup claims it has processed '10 billion API calls to date' and is growing at 50% month-over-month. Its current monthly run-rate is 800 million calls. Without a spreadsheet, sanity-check whether 10 billion cumulative calls is plausible given the growth trajectory, and estimate how many months of history that implies.",
    context: undefined,
    hints: [
      "With exponential growth, cumulative calls are dominated by recent months. Think about how fast the sum of a geometric series grows.",
      "In a 50%-growth series, the most recent month alone is ~800M. The month before was ~533M, before that ~355M. Each month back, divide by 1.5. Sum until you approach 10B total.",
      "Rough sum of geometric series: total ≈ current_month / (1 − 1/1.5) × (1 − (1/1.5)^n). Or simply note that the sum of all prior months converges to about 2–3× the most recent month in fast-growth regimes. 800M × 3 ≈ 2.4B — far below 10B. You'd need ~14–16 months of back-history to accumulate 10B."
    ],
    referenceSolution: {
      approach: "Model cumulative calls as a geometric series summing backward from the current month, and compare to the claimed 10B figure.",
      reasoning: "Current month: 800M. Series going back: 800, 533, 356, 237, 158, 105, 70, 47, 31, 21, 14, 9, 6, 4, 3 (in millions). Running sum after 6 months back: ~1.95B. After 10 months: ~2.4B. After 15 months: ~2.7B (series converges to ~800M / (1 − 2/3) = 2.4B in the infinite limit). So 50% MoM growth with current 800M run-rate can only explain ~2–3B cumulative. To reach 10B, you'd need to assume much longer history or earlier periods with much higher growth. The claim of 10B is roughly 4–5× too high given the stated trajectory — about half an order of magnitude inconsistency.",
      commonMistakes: "Forgetting that a geometric series with ratio < 1 converges. Assuming cumulative ≈ months × average, which overstates for flat growth and understates for exponential. Not flagging the inconsistency.",
      alternatives: "Alternatively: for the sum to reach 10B at 50% MoM, you'd need ~20+ months of prior history — but then the starting call volume would be tiny (800M / 1.5^20 ≈ 60,000 calls), making a 'startup' story plausible but the 50% MoM claim for that entire window questionable."
    },
    rubric: [
      { id: "qr-027-r1", text: "Recognizes cumulative calls as a geometric series and applies that framing" },
      { id: "qr-027-r2", text: "Correctly estimates the series converges to roughly 2–3× the current monthly run-rate" },
      { id: "qr-027-r3", text: "Identifies that 10B is inconsistent with the stated trajectory by 3–5× (within one order of magnitude)" },
      { id: "qr-027-r4", text: "Proposes what would need to be true for 10B to be plausible" }
    ]
  },

  {
    id: "qr-028",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "hard",
    question: "A climate scientist states: 'Humanity emits about 40 billion tonnes of CO₂ per year. The atmosphere contains roughly 5 × 10^18 kg of air. CO₂ currently makes up about 420 ppm of that air. At this emission rate — ignoring natural absorption — how many years would it take to double atmospheric CO₂?' Verify the scientist's setup with order-of-magnitude reasoning, then identify the single biggest source of uncertainty.",
    context: "1 ppm CO₂ by volume ≈ 1 ppm CO₂ by mass (molecular weight of CO₂ is 44 vs air's average ~29, but the conversion factor is close enough for order-of-magnitude work: 1 ppm by mass ≈ 7.8 Gt CO₂).",
    hints: [
      "First compute the current total mass of atmospheric CO₂: 420 ppm × mass per ppm. Then figure out how much CO₂ must be added to reach 840 ppm. Finally divide by the emission rate.",
      "Current CO₂ mass ≈ 420 × 7.8 Gt ≈ 3,276 Gt ≈ 3.3 × 10^3 Gt. To double, you need to add another ~3,300 Gt. Annual emissions are ~40 Gt/yr.",
      "Time = 3,300 Gt / 40 Gt/yr ≈ 82 years. The biggest uncertainty is the natural carbon cycle: oceans and land currently absorb about half of human emissions, so real doubling time is closer to 160+ years — but the problem says to ignore that, making 80 years the clean analytical answer."
    ],
    referenceSolution: {
      approach: "Compute current atmospheric CO₂ mass from ppm concentration, determine the additional mass required to double it, then divide by annual emission rate.",
      reasoning: "Step 1 — Current CO₂ mass: 420 ppm × 7.8 Gt/ppm = 3,276 Gt ≈ 3.3 × 10^3 Gt CO₂. Cross-check: total atmosphere = 5 × 10^18 kg = 5 × 10^15 t = 5 × 10^6 Gt. At 420 ppm by mass: 5 × 10^6 Gt × 420 × 10^−6 = 2,100 Gt. (The ppm-by-volume vs by-mass correction shifts this; the context gives 7.8 Gt/ppm as the right factor, giving 3,276 Gt — use that.) Step 2 — Mass to double: another ~3,300 Gt needed. Step 3 — Years at 40 Gt/yr: 3,300 / 40 ≈ 82 years. Order-of-magnitude check: 3 × 10^3 / 4 × 10^1 = 0.75 × 10^2 ≈ 10^2 years. Answer is ~80 years, solidly in the 10^2 range. Biggest uncertainty: natural carbon sinks absorb ~50% of emissions. Including that pushes the doubling time to ~160 years — a factor of 2, not orders of magnitude, but it's the dominant real-world modifier.",
      commonMistakes: "Using mass-of-atmosphere directly without applying the ppm fraction. Forgetting to convert between Gt and kg consistently. Doubling the emission rate instead of computing additional mass needed. Ignoring the ppm-by-volume vs by-mass distinction (which matters at the factor-of-2 level).",
      alternatives: "Can also approach as: current CO₂ ≈ 420 ppm → 840 ppm requires +420 ppm more. At 7.8 Gt/ppm, that's 3,276 Gt ÷ 40 Gt/yr ≈ 82 years. Same answer, different entry point."
    },
    rubric: [
      { id: "qr-028-r1", text: "Correctly computes current atmospheric CO₂ mass using the ppm factor (~3,000–3,300 Gt)" },
      { id: "qr-028-r2", text: "Recognizes that doubling requires adding a mass equal to the current stock" },
      { id: "qr-028-r3", text: "Arrives at ~80 years (within a factor of 2) using clean order-of-magnitude arithmetic" },
      { id: "qr-028-r4", text: "Identifies natural carbon sinks as the dominant real-world uncertainty" },
      { id: "qr-028-r5", text: "Does not conflate ppm-by-volume and ppm-by-mass as a fatal error" }
    ]
  },

  {
    id: "qr-029",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: ["decomposition-to-fundamentals"],
    difficulty: "hard",
    question: "An engineer proposes storing the entire US Library of Congress digitally — estimated at 10 terabytes — on a single modern hard drive. They then claim: 'If we encoded every atom in a grain of sand as one bit, we could store all human knowledge ever written on a single grain of sand.' Evaluate both claims with order-of-magnitude reasoning. Which claim is plausible and which is wildly off?",
    context: "A modern hard drive holds up to 20 TB. A grain of sand is roughly 0.5 mm in diameter (spherical). Silicon dioxide density ≈ 2.6 g/cm³. Avogadro's number ≈ 6 × 10^23. Molecular weight of SiO₂ ≈ 60 g/mol.",
    hints: [
      "For claim 1: compare 10 TB to 20 TB — straightforward. For claim 2: you need to count atoms in a grain of sand, then compare to the number of bits needed for all human knowledge.",
      "Volume of a 0.5mm sphere: V = (4/3)π(0.025 cm)³ ≈ 6.5 × 10^−5 cm³. Mass = 6.5 × 10^−5 × 2.6 ≈ 1.7 × 10^−4 g. Moles of SiO₂ = 1.7 × 10^−4 / 60 ≈ 2.8 × 10^−6 mol. Atoms per formula unit = 3 (Si + 2O), so atoms ≈ 3 × 6 × 10^23 × 2.8 × 10^−6 ≈ 5 × 10^18.",
      "5 × 10^18 bits ≈ 5 × 10^18 / 8 bytes ≈ 6 × 10^17 bytes ≈ 600 petabytes ≈ 0.6 exabytes. Estimates of all human knowledge ever written range from 100 exabytes to a few zettabytes. So a grain of sand encodes perhaps 0.6 / 100,000 of all human knowledge — the second claim is off by at least 5 orders of magnitude."
    ],
    referenceSolution: {
      approach: "Evaluate claim 1 by comparing two known quantities. Evaluate claim 2 by computing atom count in a grain of sand and converting to bits, then comparing to estimated total human knowledge.",
      reasoning: "Claim 1: LoC at 10 TB vs 20 TB drive — plausible, within a factor of 2. Claim 2: Volume of sand grain (r = 0.025 cm): V = (4/3)π(0.025)³ ≈ 6.5 × 10^−5 cm³. Mass: 6.5 × 10^−5 cm³ × 2.6 g/cm³ = 1.7 × 10^−4 g. Moles SiO₂: 1.7 × 10^−4 / 60 ≈ 2.8 × 10^−6 mol. Atoms: 2.8 × 10^−6 × 6 × 10^23 × 3 ≈ 5 × 10^18 atoms. Capacity: 5 × 10^18 bits ÷ 8 ≈ 6 × 10^17 bytes ≈ 600 PB. All human written knowledge: estimates range from ~10^20 to 10^21 bytes (100 EB to 1 ZB). Ratio: 600 PB / 100 EB = 6 × 10^17 / 10^20 = 6 × 10^−3 ≈ 0.006. The grain of sand holds less than 1% of the claimed target — off by at least 2–3 orders of magnitude relative to conservative estimates, and 4–5 orders vs larger estimates. Verdict: claim 1 is plausible; claim 2 is false by multiple orders of magnitude.",
      commonMistakes: "Forgetting that SiO₂ has 3 atoms per molecule. Treating 'all human knowledge' as the same as the Library of Congress (it's not — LoC ≈ 10 TB of text, but all video/audio/data is vastly larger). Using diameter instead of radius when computing sphere volume.",
      alternatives: "Shortcut: 5 × 10^18 bits ≈ 0.5 exabytes. Estimates of all digital content ever created exceed 100 zettabytes — that's 10^23 bytes, so a grain of sand falls short by ~5 orders of magnitude on the most expansive definition."
    },
    rubric: [
      { id: "qr-029-r1", text: "Correctly evaluates claim 1 as plausible (10 TB vs 20 TB drive capacity)" },
      { id: "qr-029-r2", text: "Computes grain of sand volume and mass correctly (within factor of 3)" },
      { id: "qr-029-r3", text: "Derives atom count in range 10^18 to 10^19" },
      { id: "qr-029-r4", text: "Converts atom count to storage capacity in petabytes range" },
      { id: "qr-029-r5", text: "Concludes claim 2 is off by at least 2–3 orders of magnitude with explicit comparison" }
    ]
  },

  {
    id: "qr-030",
    trackId: "quantitative-reasoning",
    subSkill: "orders-of-magnitude",
    secondarySkills: ["assumption-validation"],
    difficulty: "hard",
    question: "A venture capital pitch deck states: 'The global sports apparel market is $200 billion. We are targeting the $50 billion premium segment. If we capture just 0.1% of that, we generate $50 million in revenue in Year 1.' Identify every order-of-magnitude claim in the deck, check each one for internal consistency, and explain why the '0.1% = $50M' framing is misleading even if all the numbers are correct.",
    context: undefined,
    hints: [
      "Check: does 0.1% of $50B equal $50M? Then ask: is '0.1% market share in Year 1' actually a small ask for a startup, or does it sound small but require massive scale?",
      "0.1% × $50B = $50M — the arithmetic is correct. But $50M in Year 1 revenue as a startup requires enormous operational scale. Compare to: how many customers at what average order value?",
      "If average order value is $100 (premium apparel), $50M requires 500,000 paying customers in Year 1. For a new brand, acquiring 500,000 customers is a massive ask. The 'just 0.1%' framing makes it sound easy while hiding the operational reality."
    ],
    referenceSolution: {
      approach: "Verify each numerical claim arithmetically, then reframe '0.1% of a large market' in operational terms to expose what achieving it actually requires.",
      reasoning: "Check 1 — Market sizes: Global sports apparel $200B → premium segment $50B = 25% of total. Plausible. Check 2 — Arithmetic: 0.1% × $50B = 0.001 × 5 × 10^10 = 5 × 10^7 = $50M. Correct. Check 3 — Operational translation: At $150 average order value (premium), $50M / $150 = ~333,000 transactions. If customers buy 2 items/year, that's ~167,000 unique customers. Acquiring 167,000 premium customers in Year 1 with zero brand history typically requires $10–50M in marketing spend — often more than the revenue itself. The '0.1%' framing is misleading because percentages of trillion-dollar markets collapse the difficulty of reaching absolute scale. Any number sounds small as a percentage of a huge base. This is a classic cognitive trap in pitch decks.",
      commonMistakes: "Accepting the 0.1% framing at face value without translating to customer count. Failing to check whether 25% of a $200B market being 'premium' is reasonable. Not questioning the implied customer acquisition cost.",
      alternatives: "Can also reframe as: to earn $50M at a 30% gross margin, you need $150M in gross revenue — wait, no: $50M IS the revenue target. At 30% gross margin, that's $15M gross profit. Series A startups rarely sustain $15M gross profit in Year 1. The numbers are internally consistent but operationally implausible for a genuine startup."
    },
    rubric: [
      { id: "qr-030-r1", text: "Verifies the 0.1% × $50B = $50M arithmetic is correct" },
      { id: "qr-030-r2", text: "Translates $50M revenue into an operational metric (customer count, transactions)" },
      { id: "qr-030-r3", text: "Identifies that the percentage framing obscures the operational challenge" },
      { id: "qr-030-r4", text: "Notes an implicit assumption about customer acquisition cost or brand-building timeline" },
      { id: "qr-030-r5", text: "Explains why small percentages of large markets are a common misleading framing in pitches" }
    ]
  },

  // ── MENTAL MATH (qr-031 to qr-035) ───────────────────────────────────────

  {
    id: "qr-031",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: [],
    difficulty: "medium",
    question: "A SaaS company has 4,800 customers paying an average of $375/month. They raise prices by 12% but lose 8% of their customer base as a result. What is the new monthly recurring revenue, and did revenue go up or down? Work this out without a calculator.",
    context: undefined,
    hints: [
      "Compute the original MRR first. Then apply the two multipliers: new price × new customer count. Don't add percentages — multiply them.",
      "Original MRR = 4,800 × $375 = $1,800,000. New price = $375 × 1.12 = $420. New customer count = 4,800 × 0.92 = 4,416.",
      "New MRR = 4,416 × $420. Break this down: 4,000 × 420 = 1,680,000; 416 × 420 = 174,720. Total = $1,854,720. That's above $1.8M, so revenue increased by ~$55K or about 3%."
    ],
    referenceSolution: {
      approach: "Calculate original MRR, apply price and churn multipliers separately, then multiply new price by new customer count.",
      reasoning: "Original MRR: 4,800 × $375. Use 4,800 × 400 = 1,920,000 minus 4,800 × 25 = 120,000 → $1,800,000. Combined multiplier: 1.12 × 0.92 = 1.0304 (net effect is +3.04%). New MRR = $1,800,000 × 1.0304 ≈ $1,854,720. Alternatively: new price = $420, new customers = 4,416. 4,416 × 420: (4,400 × 420) + (16 × 420) = 1,848,000 + 6,720 = $1,854,720. Revenue increased by ~$55K (~3%). Key insight: 12% price increase more than offsets 8% churn. A useful shortcut: revenue change ≈ price% + volume% = +12% − 8% = +4% (rough approximation; exact is +3.04% because it's multiplicative, not additive).",
      commonMistakes: "Adding percentages instead of multiplying: 12% − 8% = +4% is an approximation, not exact. Getting confused between multiplying 4,416 × 420 — break it into chunks. Forgetting that 'lose 8%' means multiply by 0.92.",
      alternatives: "Recognize that price × volume = P × V, so ΔRevenue% ≈ ΔP% + ΔV% for small changes. 1.12 × 0.92 = 1.0304 confirms the +3% result."
    },
    rubric: [
      { id: "qr-031-r1", text: "Correctly calculates original MRR as $1,800,000" },
      { id: "qr-031-r2", text: "Applies price and churn as multipliers (not additions)" },
      { id: "qr-031-r3", text: "Arrives at new MRR in range $1,840,000–$1,870,000" },
      { id: "qr-031-r4", text: "Correctly concludes revenue increased (not decreased)" }
    ]
  },

  {
    id: "qr-032",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: [],
    difficulty: "medium",
    question: "You are offered a loan of $240,000 at 6% annual interest for 30 years with monthly payments. Using the rule of thumb that a 30-year fixed mortgage at 6% costs roughly $6 per $1,000 borrowed per month, estimate the monthly payment and the total interest paid over the life of the loan. Then explain why the total interest is more than the principal.",
    context: undefined,
    hints: [
      "Apply the rule of thumb directly to get the monthly payment. Then multiply by total months to get total paid. Subtract principal to get interest.",
      "Monthly payment ≈ $6 × (240,000 / 1,000) = $6 × 240 = $1,440. Total months = 30 × 12 = 360. Total paid = $1,440 × 360.",
      "$1,440 × 360 = $1,440 × 300 + $1,440 × 60 = 432,000 + 86,400 = $518,400. Total interest = $518,400 − $240,000 = $278,400 — slightly more than the original principal."
    ],
    referenceSolution: {
      approach: "Apply the $6/$1,000 rule of thumb to estimate monthly payment, multiply by 360 months for total cost, subtract principal to find total interest.",
      reasoning: "Monthly payment: $6 × 240 = $1,440. Total payments: $1,440 × 360 = $518,400. Total interest = $518,400 − $240,000 = $278,400. Note: the exact payment using the amortization formula is $1,438.92, so the rule of thumb is very accurate here. Why total interest > principal: in the early years of a 30-year mortgage, nearly all of each payment goes to interest because the balance is high. You're paying 6% × $240,000 / 12 = $1,200 in interest in month 1 alone — meaning only $240 goes to principal. It takes about 22 years to pay off half the principal. The compounding effect of front-loaded interest payments causes total interest to approach or exceed the principal on long-term loans.",
      commonMistakes: "Forgetting to multiply by 12 to get months from years. Using total interest as the monthly figure. Thinking 6% × $240K × 30 = $432K is the total interest (that's simple interest, not amortized).",
      alternatives: "Simple interest check: 6% × $240K = $14,400/year × 30 = $432,000 — higher than the amortized $278,400 because with amortization you're paying down principal each month, reducing the outstanding balance."
    },
    rubric: [
      { id: "qr-032-r1", text: "Correctly applies the $6/$1,000 rule to get ~$1,440/month" },
      { id: "qr-032-r2", text: "Multiplies by 360 months correctly to get ~$518,400 total" },
      { id: "qr-032-r3", text: "Computes total interest ~$278,400" },
      { id: "qr-032-r4", text: "Explains why front-loaded interest causes total interest to approach principal" }
    ]
  },

  {
    id: "qr-033",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: ["unit-economics"],
    difficulty: "hard",
    question: "A ride-sharing company processes 18 million trips per day globally. The average trip fare is $14.20, of which the driver earns 72%. The platform takes the remaining 28%. Operating costs run at 18% of gross bookings. What is the platform's daily net revenue (after driver payouts and operating costs)? Now estimate the annual run-rate and compare it to a reported annual revenue of $9.4 billion — is the figure plausible?",
    context: undefined,
    hints: [
      "Net revenue to platform per trip = 28% of $14.20. Then subtract operating costs from gross bookings, not from the platform's take. Read carefully: operating costs are 18% of gross bookings.",
      "Gross bookings/day = 18M × $14.20. Platform take = 28% of gross. Operating costs = 18% of gross. Net platform revenue = (28% − 18%) × gross = 10% × gross.",
      "Gross bookings = 18M × $14.20 = $255.6M/day. Net = 10% × $255.6M = $25.56M/day. Annual = $25.56M × 365 ≈ $9.33B. Reported $9.4B is very plausible."
    ],
    referenceSolution: {
      approach: "Compute gross daily bookings, identify platform net margin as (take rate − operating cost rate), multiply, then annualize.",
      reasoning: "Daily gross bookings: 18,000,000 × $14.20. Compute 18M × 14 = $252M and 18M × 0.20 = $3.6M → total $255.6M/day. Platform take: 28% × $255.6M = $71.57M/day. Operating costs: 18% × $255.6M = $46.01M/day. Net = $71.57M − $46.01M = $25.56M/day. Shortcut: net margin on gross = 28% − 18% = 10%. 10% × $255.6M = $25.56M. Annual: $25.56M × 365 = $25.56M × 300 + $25.56M × 65 = $7,668M + $1,661M ≈ $9,329M ≈ $9.33B. Reported $9.4B is within 0.7% — the given assumptions are a tight match. The figure is highly plausible.",
      commonMistakes: "Applying operating costs to platform take (28% portion) rather than gross bookings. Treating driver payout and operating cost as the same category. Arithmetic error on 18M × $14.20 (easy to drop a digit).",
      alternatives: "Can also state: platform keeps 10 cents of every dollar of gross bookings. $255.6M/day × 10% × 365 = same result."
    },
    rubric: [
      { id: "qr-033-r1", text: "Correctly computes gross daily bookings (~$255.6M)" },
      { id: "qr-033-r2", text: "Applies operating costs to gross bookings, not just platform take" },
      { id: "qr-033-r3", text: "Correctly derives 10% net margin on gross bookings" },
      { id: "qr-033-r4", text: "Annualizes correctly (~$9.3B)" },
      { id: "qr-033-r5", text: "Concludes $9.4B reported figure is plausible and explains why" }
    ]
  },

  {
    id: "qr-034",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: [],
    difficulty: "hard",
    question: "A server farm has 12,000 servers. Each server consumes 400W under load and 150W at idle. The farm runs 35% of servers at full load and the rest at idle at any given moment. Electricity costs $0.08/kWh. What is the monthly electricity bill? Now a cooling overhead multiplier of 1.4× (Power Usage Effectiveness of 1.4) is added — what is the new bill, and what percentage increase does the PUE add?",
    context: "Power Usage Effectiveness (PUE) is the ratio of total facility power to IT equipment power. A PUE of 1.4 means 40% extra power is consumed by cooling, lighting, and other overhead.",
    hints: [
      "Calculate total IT power draw: (servers at load × 400W) + (servers at idle × 150W). Convert to kW. Multiply by hours in a month and cost per kWh.",
      "Servers at load: 12,000 × 35% = 4,200. Servers at idle: 7,800. Total power: 4,200 × 400W + 7,800 × 150W = 1,680,000W + 1,170,000W = 2,850,000W = 2,850 kW.",
      "Monthly energy = 2,850 kW × 720 hours = 2,052,000 kWh. Cost = 2,052,000 × $0.08 = $164,160. With PUE 1.4: total power = 2,850 × 1.4 = 3,990 kW. New bill = 3,990 × 720 × 0.08 = $229,824. PUE adds 40% to the bill."
    ],
    referenceSolution: {
      approach: "Compute total IT power draw from load/idle split, calculate monthly energy in kWh, apply cost rate, then scale by PUE multiplier.",
      reasoning: "Servers at load: 12,000 × 0.35 = 4,200. Servers at idle: 7,800. IT power: (4,200 × 400) + (7,800 × 150) = 1,680,000 + 1,170,000 = 2,850,000 W = 2,850 kW. Monthly hours: 30 × 24 = 720h. Energy: 2,850 kW × 720h = 2,052,000 kWh. IT electricity cost: 2,052,000 × $0.08 = $164,160. With PUE 1.4: effective power = 2,850 × 1.4 = 3,990 kW. New energy = 3,990 × 720 = 2,872,800 kWh. New bill = 2,872,800 × $0.08 = $229,824. PUE increase: ($229,824 − $164,160) / $164,160 = 40% — exactly the overhead fraction. Mental math check: PUE of 1.4 always adds exactly 40% to the IT power bill, regardless of the underlying load.",
      commonMistakes: "Applying PUE as an additive 40% to the bill dollar amount before computing it (same result here but wrong path). Using 30.5 days instead of 30 (minor, fine for estimation). Forgetting idle servers still draw power.",
      alternatives: "Since PUE of 1.4 always multiplies IT power by 1.4, you can shortcut: new bill = $164,160 × 1.4 = $229,824. The 40% premium is definitionally equal to PUE − 1."
    },
    rubric: [
      { id: "qr-034-r1", text: "Correctly computes IT power draw using load/idle split (~2,850 kW)" },
      { id: "qr-034-r2", text: "Uses 720 hours/month correctly" },
      { id: "qr-034-r3", text: "Calculates base monthly bill (~$164,160)" },
      { id: "qr-034-r4", text: "Applies PUE multiplier correctly to arrive at ~$229,824" },
      { id: "qr-034-r5", text: "States that PUE of 1.4 always adds exactly 40% to the IT power cost" }
    ]
  },

  {
    id: "qr-035",
    trackId: "quantitative-reasoning",
    subSkill: "mental-math",
    secondarySkills: ["bounding-estimates"],
    difficulty: "hard",
    question: "A bond has a face value of $10,000, pays a coupon of 4.5% annually, and matures in 8 years. It is currently trading at $9,200. Without a financial calculator, estimate the approximate yield to maturity using the back-of-envelope YTM formula, and determine whether this bond is trading at a premium or discount and why.",
    context: "The approximate YTM formula is: YTM ≈ [Annual Coupon + (Face Value − Price) / Years to Maturity] / [(Face Value + Price) / 2]. This is an approximation, accurate to within 10–20 basis points for most bonds.",
    hints: [
      "Identify each component: annual coupon = 4.5% × $10,000 = $450. Capital gain = ($10,000 − $9,200) / 8 years = $100/year. Average value = ($10,000 + $9,200) / 2 = $9,600.",
      "YTM ≈ ($450 + $100) / $9,600 = $550 / $9,600.",
      "$550 / $9,600 ≈ 5.73%. Since YTM (5.73%) > coupon rate (4.5%), the bond must be trading at a discount — which it is ($9,200 < $10,000 face value)."
    ],
    referenceSolution: {
      approach: "Apply the approximate YTM formula, interpreting each component, then connect the coupon-vs-YTM relationship to the discount/premium status.",
      reasoning: "Annual coupon: $10,000 × 4.5% = $450. Capital gain amortized: ($10,000 − $9,200) / 8 = $800 / 8 = $100/year. Average price: ($10,000 + $9,200) / 2 = $9,600. Approximate YTM = ($450 + $100) / $9,600 = $550 / $9,600 ≈ 0.0573 = 5.73%. Since YTM 5.73% > coupon rate 4.5%, the bond trades at a discount. Intuition: when interest rates rise above the coupon rate, investors demand a lower price to compensate — the bond must cheapen until the total return (coupon + price appreciation) matches prevailing rates. Discount/premium check: price $9,200 < face $10,000 → discount confirmed. Mental math: 550/9,600 → round to 550/10,000 = 5.5% (lower bound), then adjust up slightly for denominator being smaller → ~5.7%.",
      commonMistakes: "Dividing capital gain by face value rather than years (getting 8% instead of $100/year). Forgetting to average the price and face value in the denominator. Confusing 'discount' terminology (a bond at a discount trades below face, not below par value defined as cost).",
      alternatives: "Bounding: annual return is at least coupon/price = $450/$9,200 = 4.89%. Adding the amortized capital gain of ~1% gives roughly 5.7–5.9%. Both bounds confirm the answer is between 5% and 6%."
    },
    rubric: [
      { id: "qr-035-r1", text: "Correctly identifies annual coupon as $450" },
      { id: "qr-035-r2", text: "Amortizes the capital gain correctly as $100/year" },
      { id: "qr-035-r3", text: "Uses average of face and price ($9,600) as denominator" },
      { id: "qr-035-r4", text: "Arrives at YTM in range 5.5%–6.0%" },
      { id: "qr-035-r5", text: "Correctly explains the discount relationship: YTM > coupon → price < face" }
    ]
  },

  // ── UNIT ANALYSIS (qr-036 to qr-040) ─────────────────────────────────────

  {
    id: "qr-036",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: [],
    difficulty: "medium",
    question: "A water treatment plant processes 50 million gallons per day. It must add chlorine at 2 parts per million by mass. Chlorine costs $0.80 per pound. What is the daily chlorine cost? (1 gallon of water ≈ 8.34 lbs)",
    context: undefined,
    hints: [
      "ppm by mass means 2 lbs of chlorine per 1,000,000 lbs of water. First find the total mass of water treated per day.",
      "Total water mass: 50 × 10^6 gallons × 8.34 lbs/gallon = 417,000,000 lbs/day. Chlorine needed: 2 ppm = 2/1,000,000 × 417,000,000 lbs.",
      "Chlorine: 2/10^6 × 4.17 × 10^8 = 834 lbs/day. Cost: 834 × $0.80 = $667.20/day."
    ],
    referenceSolution: {
      approach: "Convert gallons to pounds using the density conversion, apply the ppm ratio to find chlorine mass, multiply by unit cost.",
      reasoning: "Water mass/day: 50 × 10^6 gal × 8.34 lbs/gal = 4.17 × 10^8 lbs. Chlorine at 2 ppm by mass: 2 × 10^−6 × 4.17 × 10^8 = 834 lbs. Daily cost: 834 × $0.80 = $667.20. Unit check: [lbs water/day] × [lbs Cl / lbs water] = [lbs Cl/day]; [lbs Cl/day] × [$/lb] = [$/day]. ✓",
      commonMistakes: "Treating ppm as parts per million by volume rather than mass (small error here since water density ≈ 1 but the problem specifies mass). Forgetting the gallon-to-pound conversion and dividing by volume instead. Multiplying 2 × 10^−6 × 50 × 10^6 (skipping the mass conversion entirely) — gives 100 lbs, wrong.",
      alternatives: "Work in metric: 50M gallons ≈ 189,000 m³/day = 189,000,000 liters ≈ 189,000 metric tonnes. 2 ppm × 189,000 t = 378 kg = 834 lbs. ✓"
    },
    rubric: [
      { id: "qr-036-r1", text: "Converts gallons to pounds correctly using 8.34 lbs/gallon" },
      { id: "qr-036-r2", text: "Applies ppm correctly as a mass ratio (not a volume ratio)" },
      { id: "qr-036-r3", text: "Arrives at ~834 lbs of chlorine per day" },
      { id: "qr-036-r4", text: "Computes cost ~$667/day and performs a unit check" }
    ]
  },

  {
    id: "qr-037",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: [],
    difficulty: "medium",
    question: "A car gets 32 miles per gallon. Gas costs $3.80 per gallon. You drive 14,000 miles per year. Express your annual gas cost in dollars, then convert it to a cost per mile and a cost per day. Show all unit conversions explicitly.",
    context: undefined,
    hints: [
      "Annual cost = miles/year ÷ (miles/gallon) × ($/gallon). Set up the units first.",
      "Gallons/year = 14,000 miles/year ÷ 32 miles/gallon = 437.5 gallons/year. Annual cost = 437.5 × $3.80.",
      "Annual cost = $1,662.50. Cost per mile = $1,662.50 / 14,000 ≈ $0.1188/mile ≈ $0.119/mile. Cost per day = $1,662.50 / 365 ≈ $4.55/day."
    ],
    referenceSolution: {
      approach: "Chain unit conversions: miles/year → gallons/year → $/year → $/mile and $/day.",
      reasoning: "Gallons/year: 14,000 mi/yr ÷ 32 mi/gal = 437.5 gal/yr. Unit check: [mi/yr] / [mi/gal] = [gal/yr] ✓. Annual cost: 437.5 gal/yr × $3.80/gal = $1,662.50/yr. Unit check: [gal/yr] × [$/gal] = [$/yr] ✓. Cost/mile: $1,662.50/yr ÷ 14,000 mi/yr = $0.1188/mi ≈ 11.9¢/mile. Unit: [$/yr] / [mi/yr] = [$/mi] ✓. Cost/day: $1,662.50/yr ÷ 365 days/yr ≈ $4.55/day. Unit: [$/yr] / [days/yr] = [$/day] ✓.",
      commonMistakes: "Multiplying miles by MPG instead of dividing. Forgetting to convert to per-mile or per-day at the end. Arithmetic error: 437.5 × 3.80 = 437.5 × 4 − 437.5 × 0.20 = 1,750 − 87.50 = $1,662.50.",
      alternatives: "Direct chain: $3.80/gal ÷ 32 mi/gal = $0.1188/mi. Then $0.1188/mi × 14,000 mi/yr = $1,662.50/yr. Same result from a different starting point."
    },
    rubric: [
      { id: "qr-037-r1", text: "Shows unit cancellation explicitly at each step" },
      { id: "qr-037-r2", text: "Correctly divides miles by MPG to get gallons" },
      { id: "qr-037-r3", text: "Computes annual cost ~$1,662" },
      { id: "qr-037-r4", text: "Correctly derives cost per mile (~11.9¢) and per day (~$4.55)" }
    ]
  },

  {
    id: "qr-038",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: ["physical-estimation"],
    difficulty: "hard",
    question: "A solar panel rated at 400 watts (peak) covers an area of 2 m². The average solar irradiance at a mid-latitude location is 5 peak sun hours per day. If electricity sells for $0.12/kWh and the panel degrades at 0.5% per year, what is the total revenue generated by one panel over 25 years? Show all unit conversions and the effect of degradation.",
    context: "Peak sun hours (PSH) is a simplification: 5 PSH/day means the panel receives the equivalent of 5 hours of peak (1,000 W/m²) irradiance daily. Panel rating is at standard test conditions (1,000 W/m² irradiance).",
    hints: [
      "Daily energy = panel rating × peak sun hours = 400W × 5h = 2,000 Wh = 2 kWh/day. Annual energy in year 1 = 2 kWh/day × 365 days = 730 kWh.",
      "With 0.5% annual degradation, output in year n is 730 × (0.995)^(n−1) kWh. Sum over 25 years is a geometric series: S = 730 × [1 − (0.995)^25] / [1 − 0.995].",
      "(0.995)^25 ≈ e^(25 × ln 0.995) ≈ e^(−0.1256) ≈ 0.882. S = 730 × (1 − 0.882) / 0.005 = 730 × 0.118 / 0.005 = 730 × 23.6 ≈ 17,228 kWh. Revenue = 17,228 × $0.12 ≈ $2,067."
    ],
    referenceSolution: {
      approach: "Compute year-1 annual output using peak sun hours, model degradation as a geometric series, sum over 25 years, convert to revenue.",
      reasoning: "Year-1 daily output: 400 W × 5 h = 2,000 Wh = 2 kWh. Unit check: [W] × [h] = [Wh] → /1000 = [kWh] ✓. Year-1 annual: 2 kWh/day × 365 days/yr = 730 kWh/yr. Output year n: 730 × (0.995)^(n−1). 25-year sum (geometric series, a=730, r=0.995, n=25): S = 730 × (1 − 0.995^25) / (1 − 0.995). (0.995)^25: use ln(0.995) ≈ −0.00501; 25 × (−0.00501) = −0.1253; e^(−0.1253) ≈ 0.882. S = 730 × (0.118 / 0.005) = 730 × 23.6 = 17,228 kWh. Revenue = 17,228 × $0.12 = $2,067.36. Simplified version (ignoring degradation): 730 × 25 = 18,250 kWh → $2,190 — degradation reduces lifetime output by about 6%, confirming the geometric series result is in the right ballpark.",
      commonMistakes: "Using simple interest depreciation instead of compound (0.5% × 25 = 12.5% total) vs geometric (11.8% total) — similar but not identical. Forgetting to convert Wh to kWh. Treating PSH as literal hours of sunshine rather than an equivalent energy metric.",
      alternatives: "Approximation: since degradation is small (0.5%/yr), use midpoint output at year 12–13: 730 × 0.995^12 ≈ 730 × 0.942 ≈ 688 kWh/yr. Total ≈ 688 × 25 = 17,200 kWh ≈ $2,064. Nearly identical result."
    },
    rubric: [
      { id: "qr-038-r1", text: "Correctly converts watts × peak sun hours to kWh/day with unit tracking" },
      { id: "qr-038-r2", text: "Sets up annual output as a geometric series with ratio 0.995" },
      { id: "qr-038-r3", text: "Correctly applies the geometric series sum formula (or an equivalent midpoint approximation)" },
      { id: "qr-038-r4", text: "Arrives at lifetime output in range 16,500–18,000 kWh" },
      { id: "qr-038-r5", text: "Computes revenue ~$2,000–$2,200 and notes degradation reduces output by ~6–7%" }
    ]
  },

  {
    id: "qr-039",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: ["challenging-defaults"],
    difficulty: "hard",
    question: "A data scientist reports: 'Our model processes 45 MB/s of streaming data. We store 90 days of history. The raw storage requirement is 45 MB/s × 90 days = 4,050 MB — under 4 GB, well within budget.' Identify every unit error in this reasoning and compute the correct storage requirement.",
    context: undefined,
    hints: [
      "The scientist multiplied MB/s by days without converting days to seconds. What is 90 days in seconds?",
      "90 days × 24 hr/day × 3600 s/hr = 7,776,000 seconds. The correct storage = 45 MB/s × 7,776,000 s.",
      "45 × 7,776,000 = 349,920,000 MB = 349,920 GB ≈ 350 TB — not 4 GB. The error is a factor of ~86,400 (seconds per day), which is nearly 5 orders of magnitude."
    ],
    referenceSolution: {
      approach: "Identify the unit mismatch (MB/s × days ≠ MB), convert days to seconds, recompute storage, and quantify the magnitude of the error.",
      reasoning: "Error 1: The scientist multiplied [MB/s] × [days] and got [MB]. But [MB/s] × [days] = [MB × days / s] — not a unit of storage. You must convert days to seconds first. Error 2 (implicit): The result '4,050 MB' is dimensionally nonsensical unless the 90 is treated as seconds, which it isn't. Correct calculation: 90 days × 24 h/day × 3,600 s/h = 90 × 86,400 = 7,776,000 seconds. Storage = 45 MB/s × 7,776,000 s = 349,920,000 MB = 349,920 GB ≈ 342 TB (using 1 TB = 1,024 GB) or 350 TB (using 1 TB = 1,000 GB). The scientist is off by a factor of 86,400 (seconds per day) = 8.64 × 10^4 ≈ 5 orders of magnitude. '4 GB well within budget' vs '350 TB required' is a catastrophic planning error.",
      commonMistakes: "Missing that the unit problem is the 's' in MB/s not being cancelled. Confusing MB and MiB (minor issue here). Not quantifying the magnitude of the error (just saying 'it's wrong' without the 86,400 factor).",
      alternatives: "Can also note: 45 MB/s × 3,600 s/hr = 162,000 MB/hr = 162 GB/hr. 162 GB/hr × 24 hr/day = 3,888 GB/day. 3,888 × 90 days = 349,920 GB ≈ 350 TB. Same answer."
    },
    rubric: [
      { id: "qr-039-r1", text: "Identifies the unit error: mixing MB/s (a rate) with days (time without converting to seconds)" },
      { id: "qr-039-r2", text: "Converts 90 days to seconds correctly (7,776,000 s)" },
      { id: "qr-039-r3", text: "Computes correct storage ~350 TB" },
      { id: "qr-039-r4", text: "Quantifies the magnitude of the error (~86,400× off, or ~5 orders of magnitude)" },
      { id: "qr-039-r5", text: "Notes the practical implication: a planning error that would cause a system failure" }
    ]
  },

  {
    id: "qr-040",
    trackId: "quantitative-reasoning",
    subSkill: "unit-analysis",
    secondarySkills: [],
    difficulty: "hard",
    question: "A chemical plant produces 800 tonnes of polymer per day. The reaction requires 2.4 kg of catalyst per tonne of polymer, and the catalyst is recycled at 92% efficiency per cycle. If catalyst costs $1,200/kg and the cycle time (catalyst in process then regenerated) is 8 hours, what is the net daily catalyst cost, accounting for losses only? Then determine whether it's more cost-effective to regenerate the catalyst or buy fresh catalyst for each cycle.",
    context: undefined,
    hints: [
      "Total catalyst needed per cycle ≈ how much polymer per cycle × 2.4 kg/tonne. A cycle is 8 hours, so how many tonnes are produced per cycle?",
      "Production per cycle: 800 tonnes/day × (8 h / 24 h) = 266.7 tonnes/cycle. Catalyst needed per cycle: 266.7 × 2.4 = 640 kg. At 92% recycling, 8% is lost per cycle: 640 × 0.08 = 51.2 kg lost/cycle. Cycles per day: 24/8 = 3.",
      "Daily catalyst loss: 51.2 kg/cycle × 3 cycles/day = 153.6 kg/day. Daily cost = 153.6 × $1,200 = $184,320. Compare to buying fresh: 3 cycles × 640 kg/cycle × $1,200 = $2,304,000/day. Recycling saves $2,304,000 − $184,320 = $2,119,680/day — overwhelmingly cost-effective."
    ],
    referenceSolution: {
      approach: "Compute polymer production per cycle, catalyst required, losses at 8% per cycle, scale to daily losses, then compare net loss cost vs full replacement cost.",
      reasoning: "Cycle time: 8h. Cycles/day: 24/8 = 3. Polymer per cycle: 800/3 = 266.7 t/cycle. Catalyst per cycle: 266.7 × 2.4 = 640 kg/cycle. Loss per cycle: 640 × (1 − 0.92) = 640 × 0.08 = 51.2 kg/cycle. Daily loss: 51.2 × 3 = 153.6 kg/day. Daily cost of losses: 153.6 × $1,200 = $184,320/day. If instead buying fresh catalyst each cycle: 3 × 640 × $1,200 = $2,304,000/day. Net savings from recycling: $2,304,000 − $184,320 = $2,119,680/day ≈ $2.1M/day. Unit check: [kg lost/cycle] × [cycles/day] = [kg/day]; [kg/day] × [$/kg] = [$/day] ✓. Recycling is ~12.5× cheaper than replacement (1/0.08 = 12.5).",
      commonMistakes: "Using daily production without dividing into cycles. Computing catalyst loss as 8% of daily catalyst needs without accounting for recycled material re-entering the next cycle (here recycling is within each cycle — the framing supports this approach). Forgetting to multiply losses per cycle by number of cycles.",
      alternatives: "Shortcut: if recycling efficiency is 92%, the fraction consumed per unit processed = 8% of total catalyst in service. Net cost per tonne of polymer = 2.4 kg/t × 8% × $1,200/kg = $230.40/tonne. Daily: 800 × $230.40 = $184,320 — same answer."
    },
    rubric: [
      { id: "qr-040-r1", text: "Correctly computes number of cycles per day (3)" },
      { id: "qr-040-r2", text: "Determines catalyst per cycle (640 kg) and loss per cycle (51.2 kg)" },
      { id: "qr-040-r3", text: "Scales daily catalyst loss to 153.6 kg and cost to ~$184,320/day" },
      { id: "qr-040-r4", text: "Computes fresh-catalyst alternative cost (~$2.3M/day)" },
      { id: "qr-040-r5", text: "Concludes recycling is vastly more cost-effective (12.5× cheaper) with unit-checked arithmetic" }
    ]
  },

  // ── SANITY CHECKS (qr-041 to qr-045) ─────────────────────────────────────

  {
    id: "qr-041",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: [],
    difficulty: "medium",
    question: "A financial model projects that a new restaurant location will generate $4.2 million in revenue in its first year of operation. The restaurant seats 80 people, is open 7 days a week, and serves lunch and dinner. Sanity-check this revenue projection using at least two independent approaches.",
    context: undefined,
    hints: [
      "Approach 1: Work from capacity. At full occupancy for both meals, how much revenue could the restaurant theoretically earn?",
      "Approach 2: Use industry benchmark — a typical full-service restaurant does $600–$1,200 in sales per square foot per year. A 80-seat restaurant is roughly 3,000–4,000 sq ft.",
      "Approach 1: 80 seats × 2 meals/day × $35 avg check × 365 days × 80% occupancy ≈ $1,635,200. $4.2M requires 245% of realistic capacity — implausible. Approach 2: 3,500 sq ft × $800/sq ft = $2.8M. Still below $4.2M."
    ],
    referenceSolution: {
      approach: "Two independent sanity checks: (1) capacity-based revenue ceiling, (2) industry revenue-per-square-foot benchmark.",
      reasoning: "Approach 1 — Capacity: 80 seats × 2 seatings/day × 365 days = 58,400 covers/year at 100% occupancy. Average check ~$35 (mid-range lunch/dinner). Revenue ceiling = 58,400 × $35 = $2,044,000. Even at 100% occupancy, max revenue is ~$2M. $4.2M would require 2× full capacity — impossible without a third seating or much higher check average. Approach 2 — Benchmark: An 80-seat restaurant with ~15 sq ft per seat is roughly 1,200 sq ft dining room; total footprint ~2,000–2,500 sq ft. Industry benchmark: $500–$900/sq ft/year for mid-range. At 2,500 sq ft × $900 = $2.25M. $4.2M implies $1,680/sq ft — achievable only at high-end NYC restaurants with alcohol-heavy revenue mix. Verdict: $4.2M is plausible only for high-end/high-volume venues (think fast-casual with 3+ table turns), not a typical 80-seat restaurant. The projection needs scrutiny.",
      commonMistakes: "Using 365 × 3 meals instead of 2 (most restaurants don't serve breakfast). Not applying a realistic occupancy rate (100% is unachievable). Accepting the projection without checking capacity limits.",
      alternatives: "A third check: typical revenue per seat/year for casual dining ≈ $10,000–$15,000. 80 seats × $15,000 = $1.2M. For fine dining, up to $30,000–$50,000/seat → 80 × $40,000 = $3.2M. $4.2M exceeds even fine dining norms for 80 seats."
    },
    rubric: [
      { id: "qr-041-r1", text: "Performs at least two independent sanity checks" },
      { id: "qr-041-r2", text: "Capacity check correctly applies seats × seatings × check average × days" },
      { id: "qr-041-r3", text: "Arrives at a capacity ceiling significantly below $4.2M (~$1.6–$2.0M)" },
      { id: "qr-041-r4", text: "Applies a reasonable industry benchmark as a second check" },
      { id: "qr-041-r5", text: "Clearly states the projection is implausible for a standard 80-seat format" }
    ]
  },

  {
    id: "qr-042",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: ["hypothesis-trees"],
    difficulty: "medium",
    question: "An e-commerce analytics report states: 'We had 2.3 million visits last month. Our conversion rate improved from 1.8% to 2.4%. Revenue grew from $1.4M to $2.1M.' Sanity-check whether all three numbers are consistent with each other, and identify any implicit assumption.",
    context: undefined,
    hints: [
      "Check: does visits × conversion rate × average order value = revenue? You have visits and conversion rates for both months but need to back out AOV from the revenue figures.",
      "Old: 2.3M × 1.8% = 41,400 orders. AOV = $1.4M / 41,400 = $33.82. New: 2.3M × 2.4% = 55,200 orders. Expected revenue = 55,200 × $33.82 = $1.87M. But reported revenue = $2.1M.",
      "The gap: $2.1M − $1.87M ≈ $230K. If orders = 55,200, implied AOV = $2.1M / 55,200 = $38.04. AOV increased ~12.5% alongside the conversion rate jump — the report omits this. The numbers are consistent only if AOV also rose."
    ],
    referenceSolution: {
      approach: "Back out orders from visits × conversion, then compute implied AOV for each period to check internal consistency.",
      reasoning: "Assuming visits = 2.3M in both months (report implies this by not changing the visits figure). Old orders: 2.3M × 0.018 = 41,400. Old AOV: $1,400,000 / 41,400 = $33.82. New orders: 2.3M × 0.024 = 55,200. Revenue at old AOV: 55,200 × $33.82 = $1,866,864 ≈ $1.87M. Reported revenue: $2.1M. Implied new AOV: $2,100,000 / 55,200 = $38.04. The implicit assumption: AOV also increased by ~$4.22 (+12.5%). The report attributes the revenue gain to conversion rate improvement, but ~40% of the gain actually comes from a higher average order value. The numbers are internally consistent only if the unstated AOV increase is real. If someone assumed AOV was flat, they'd underestimate revenue by ~$230K.",
      commonMistakes: "Accepting 'conversion rate improved → revenue grew' without checking the magnitude. Not noticing that the revenue jump (+50%) exceeds what conversion rate improvement alone (+33%) would explain. Forgetting that revenue = orders × AOV, not just orders.",
      alternatives: "Revenue growth decomposition: conversion rate effect = 55,200/41,400 − 1 = +33.3%. Actual revenue growth = +50%. Difference = 16.7% must come from AOV growth. This matches: $38.04/$33.82 = +12.5% AOV on a higher base of orders."
    },
    rubric: [
      { id: "qr-042-r1", text: "Correctly calculates orders in both periods using visits × conversion rate" },
      { id: "qr-042-r2", text: "Backs out AOV from revenue / orders for both periods" },
      { id: "qr-042-r3", text: "Identifies that AOV increased ~12–13% and this is not disclosed in the report" },
      { id: "qr-042-r4", text: "States the numbers are internally consistent only if AOV also rose" }
    ]
  },

  {
    id: "qr-043",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: ["first-principles-analysis"],
    difficulty: "hard",
    question: "A health tech startup claims its wearable device detects early-stage atrial fibrillation with 97% sensitivity and 95% specificity. They pitch this as: 'For every 1,000 people screened, we catch 97% of AFib cases and have only a 5% false alarm rate — a near-perfect device.' Identify what is mathematically wrong with this description and calculate the positive predictive value (PPV) for a population where AFib prevalence is 1.5%. Is this a clinically useful screening tool?",
    context: "Sensitivity = P(positive test | has disease). Specificity = P(negative test | no disease). Positive Predictive Value (PPV) = P(has disease | positive test). PPV depends heavily on disease prevalence.",
    hints: [
      "The startup conflates specificity (5% false positive rate in sick people) with the overall false alarm rate. In a low-prevalence population, most positives will be false alarms. Use Bayes' theorem or a 2×2 table.",
      "In 1,000 people with 1.5% prevalence: 15 have AFib, 985 don't. True positives: 15 × 97% = 14.55 ≈ 15. False positives: 985 × (1 − 95%) = 985 × 5% = 49.25 ≈ 49.",
      "Total positive tests = 15 + 49 = 64. PPV = 15/64 ≈ 23.4%. For every 3 alarms the device raises, only 1 person actually has AFib. The '5% false alarm rate' claim is misleading — the actual false alarm rate among people who test positive is 77%."
    ],
    referenceSolution: {
      approach: "Build a 2×2 contingency table using prevalence, sensitivity, and specificity. Compute PPV and explain the base-rate neglect in the pitch.",
      reasoning: "Population: 1,000 people. Prevalence 1.5% → 15 with AFib, 985 without. True positives (TP): 15 × 0.97 = 14.55 ≈ 15. False negatives (FN): 15 × 0.03 = 0.45 ≈ 0. False positives (FP): 985 × (1 − 0.95) = 985 × 0.05 = 49.25 ≈ 49. True negatives (TN): 985 × 0.95 = 935.75 ≈ 936. Total positive tests: 15 + 49 = 64. PPV = TP / (TP + FP) = 15 / 64 = 23.4%. Errors in the pitch: (1) '97% of AFib cases caught' is sensitivity — true but misses the FP context. (2) '5% false alarm rate' refers to 1 − specificity among non-diseased people, not the overall proportion of alarms that are false. The actual false discovery rate = FP / (FP + TP) = 49/64 = 76.6%. Clinical utility: a device that is wrong 77% of the time it fires is borderline useful as a screening tool — it needs confirmatory ECG for all positives, raising the cost and reducing net benefit. It may still be worthwhile if the disease is serious, but the framing is misleading.",
      commonMistakes: "Interpreting '5% false alarm rate' as the proportion of total alarms that are false (it isn't — it's the false positive rate among non-diseased). Forgetting that prevalence dominates PPV in low-prevalence settings. Computing PPV without building the 2×2 table.",
      alternatives: "Bayes' theorem: P(AFib|+) = P(+|AFib) × P(AFib) / P(+) = 0.97 × 0.015 / (0.97 × 0.015 + 0.05 × 0.985) = 0.01455 / (0.01455 + 0.04925) = 0.01455 / 0.0638 ≈ 22.8%. Same answer (small rounding difference)."
    },
    rubric: [
      { id: "qr-043-r1", text: "Identifies the base-rate neglect error in the pitch" },
      { id: "qr-043-r2", text: "Builds a correct 2×2 contingency table with ~15 TPs and ~49 FPs per 1,000" },
      { id: "qr-043-r3", text: "Computes PPV ≈ 23% correctly" },
      { id: "qr-043-r4", text: "Explains that the '5% false alarm rate' is the false positive rate among non-diseased, not among all alarms" },
      { id: "qr-043-r5", text: "Offers a nuanced clinical judgment (still potentially useful as screening, but framing is misleading)" }
    ]
  },

  {
    id: "qr-044",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: ["structured-argumentation"],
    difficulty: "hard",
    question: "An engineer presents a growth model: 'Our platform has 10,000 users today. We're growing at 15% per month. In 24 months we'll have 10,000 × 1.15^24 users.' They compute this as approximately 277,000 users and conclude the market size is adequate since the total addressable market is 5 million. Identify two different sanity checks that challenge this projection and quantify both.",
    context: undefined,
    hints: [
      "Check 1: Verify the arithmetic — is 1.15^24 ≈ 27.7? Check 2: Challenge the assumption that 15% MoM growth is sustainable for 24 months. What does that imply about growth rate over time?",
      "1.15^24: use the rule that 1.15^5 ≈ 2 (actually 2.01). So 1.15^20 ≈ 2^4 = 16. 1.15^24 = 1.15^20 × 1.15^4 ≈ 16 × 1.75 = 28. So 10,000 × 28 = 280,000. Arithmetic checks out.",
      "Penetration check: 277,000 / 5,000,000 = 5.5% market penetration. For a fast-growing tech platform, 5.5% of TAM in 2 years is aggressive but not absurd. BUT: the implicit month-24 growth rate is still 15% MoM = 180% annually. Net adds in month 24 alone = 277,000 × 0.15 = 41,550 new users per month. That's 4× the total user base today being added in a single month. Is the growth machinery (sales, marketing, infrastructure) scaling to support that?"
    ],
    referenceSolution: {
      approach: "Sanity check 1: verify the exponential arithmetic. Sanity check 2: examine whether the implied scale of monthly net adds in month 24 is operationally plausible.",
      reasoning: "Check 1 — Arithmetic: 1.15^24. Rule: ln(1.15) ≈ 0.1398. 24 × 0.1398 = 3.355. e^3.355 ≈ 28.6. So 10,000 × 28.6 ≈ 286,000. Engineer's 277,000 is close (1.15^24 = 28.63). ✓ Arithmetic is approximately correct. Check 2 — Operational plausibility of growth rate: If users grow 15%/month, monthly net adds also grow 15%/month (since net adds = 0.15 × user base). In month 1: 1,500 new users. In month 12: ~1,500 × 1.15^11 ≈ 1,500 × 4.65 ≈ 7,000. In month 24: ~1,500 × 1.15^23 ≈ 1,500 × 24.9 ≈ 37,300. Month-24 net adds (37,000) are 3.7× the entire current user base. This requires the growth machinery — paid acquisition, word-of-mouth, sales team — to scale by 25× in 24 months. Any single bottleneck (CAC, sales capacity, brand awareness) could break the trajectory. Check 3 (bonus) — Market saturation: 277,000 / 5,000,000 = 5.5% penetration. Historically, platforms slow down well before 5% TAM penetration unless targeting underserved niches. The model doesn't include an S-curve slowdown.",
      commonMistakes: "Only checking the arithmetic and declaring it correct without examining sustainability. Not computing what 15% MoM means in absolute net adds at month 24. Treating 5.5% TAM penetration as automatically safe.",
      alternatives: "Can also benchmark: very few SaaS companies sustain 15% MoM for 24 months. Even hypergrowth companies typically decelerate from 20%+ to 5–8% MoM within 12–18 months. The question is not whether the arithmetic is right but whether the assumption is realistic."
    },
    rubric: [
      { id: "qr-044-r1", text: "Verifies exponential arithmetic correctly (~28× multiplier, ~277–286K users)" },
      { id: "qr-044-r2", text: "Computes monthly net adds in month 24 (~37,000–42,000 users/month)" },
      { id: "qr-044-r3", text: "Identifies that month-24 net adds are 3–4× the entire current user base as an operational flag" },
      { id: "qr-044-r4", text: "Performs a TAM penetration check (5.5%)" },
      { id: "qr-044-r5", text: "Notes that the model omits S-curve deceleration and growth machinery scaling" }
    ]
  },

  {
    id: "qr-045",
    trackId: "quantitative-reasoning",
    subSkill: "sanity-checks",
    secondarySkills: ["supply-demand"],
    difficulty: "hard",
    question: "A city announces a plan to build 50,000 new affordable housing units over 10 years to address a housing shortage. The mayor claims this will reduce rents by 15%. You are asked to sanity-check this claim. The city currently has 800,000 rental units, with 96% occupancy. The population grows at 1.5% per year, with average household size of 2.4 people, and the city currently has 2.2 million residents.",
    context: undefined,
    hints: [
      "First determine current rental demand and whether vacancy rate signals scarcity. Then project new demand from population growth over 10 years. Compare new supply (50,000) to new demand.",
      "Current renters: 800,000 units × 96% = 768,000 occupied. Current vacancy: 32,000 units (4%). Typical healthy vacancy is 5–6%. Population in 10 years: 2.2M × 1.015^10 ≈ 2.2M × 1.161 = 2.55M. New residents: 350,000. New households: 350,000 / 2.4 = 146,000 new units needed.",
      "Supply added: 50,000. Demand growth: 146,000. Net new gap: 146,000 − 50,000 = 96,000 units. Far from solving the shortage — supply grows less than demand growth. Expect continued upward pressure on rents, not a 15% reduction."
    ],
    referenceSolution: {
      approach: "Compute current market tightness (vacancy rate), project 10-year demand from population growth, compare to planned supply addition, and assess the rent reduction claim.",
      reasoning: "Current market: 800,000 units × 4% vacancy = 32,000 vacant. Healthy vacancy ≈ 5–6% (rule of thumb: vacancy below 5% indicates tight market). City is already short of equilibrium by ~8,000–16,000 units. Population growth: 2.2M × (1.015)^10. Use ln approximation: 1.5% × 10 = 15% → 2.2M × 1.15 = 2.53M (exact: 2.2M × 1.161 = 2.554M). New residents: ~354,000. New households: 354,000 / 2.4 ≈ 147,500 new units needed over 10 years. Supply addition: 50,000. Units added as fraction of new demand: 50,000 / 147,500 = 34%. The city adds only 1 unit for every 3 needed by new residents — let alone catching up on the existing shortage. For rents to fall, supply must grow faster than demand. Here it grows at 34% of demand pace. A 15% rent reduction is not supported; the more likely outcome is continued rent growth, albeit slightly moderated. The claim appears to be politically motivated or based on flawed modeling.",
      commonMistakes: "Forgetting to account for population growth adding new demand (treating supply addition as net change without a demand side). Using 50,000 units compared to total stock (800K) rather than to incremental demand. Confusing the effect of affordable-only units on overall market rents (affordability programs affect specific tiers, not always the broad market).",
      alternatives: "Economic lens: supply elasticity of housing — adding 50K / 800K = 6.25% more supply over 10 years while demand grows ~18% (147K/800K). Net: supply/demand ratio worsens. Standard microeconomics predicts rent increase, not decrease."
    },
    rubric: [
      { id: "qr-045-r1", text: "Computes current vacancy rate (4%) and identifies the market as already tight" },
      { id: "qr-045-r2", text: "Projects 10-year population growth to ~2.55M using compound growth" },
      { id: "qr-045-r3", text: "Converts population growth to new housing demand (~147,000 units)" },
      { id: "qr-045-r4", text: "Compares supply addition (50K) to demand growth (147K) and identifies a 97K-unit shortfall" },
      { id: "qr-045-r5", text: "Concludes the 15% rent reduction claim is not supported and explains the supply-demand logic" },
      { id: "qr-045-r6", text: "Notes the existing shortage (below-equilibrium vacancy) as a compounding factor" }
    ]
  },

  // ── ESTIMATION CHAINS (qr-046 to qr-050) ─────────────────────────────────

  {
    id: "qr-046",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["fermi-problems"],
    difficulty: "medium",
    question: "Estimate the number of commercial flights in the air over the continental United States at any given moment on a weekday afternoon. Show your full estimation chain.",
    context: undefined,
    hints: [
      "Start with total daily flights in the US, then reason about how they're distributed across the day and typical flight duration.",
      "The US handles about 45,000 commercial flights per day. A typical domestic flight is ~2.5 hours. But flights cluster in morning and afternoon waves — peak afternoon has maybe 1.5× the average hourly density.",
      "Average flights in air at any time = daily flights × avg duration / 24h = 45,000 × 2.5 / 24 ≈ 4,688. Peak afternoon multiplier ~1.3× → ~6,000. Reported real-world answer: ~5,000–7,000 at any moment."
    ],
    referenceSolution: {
      approach: "Chain: daily flights → average duration → average simultaneous flights, adjusted for daytime clustering.",
      reasoning: "Step 1 — Daily flights: The FAA handles ~45,000 commercial flights/day in the US (well-known anchor). Step 2 — Average flight duration: domestic average ~2.5 hours (short hauls 1h, cross-country 5h, weighted toward 2–3h). Step 3 — Average simultaneous flights: Little's Law analog: flights in system = flight rate × average duration. Rate = 45,000 flights / 24h = 1,875 flights/hour. In air at once = 1,875/hr × 2.5h = 4,688 flights. Step 4 — Peak afternoon adjustment: flights don't distribute evenly. 90% of flights occur in ~16 active hours, and peak is ~1.4× hourly average. Peak simultaneous flights ≈ 4,688 × (24/16) × 1.0 ≈ 7,000, or more simply: at peak hours, ~1.4 × 4,688 ≈ 6,600. Best estimate: 5,000–7,000 flights in the air at peak afternoon. Actual: ~5,000–7,000. ✓",
      commonMistakes: "Using number of aircraft in the US fleet (~7,000–8,000) and assuming all are in the air (they're not — most are on the ground at any moment). Forgetting to multiply by duration when applying Little's Law. Not adjusting for the fact that most flights occur in daylight hours.",
      alternatives: "Alternative anchor: ~900 commercial aircraft are in the air over the US at any given moment per FlightAware data. Wait — that's a lower anchor for tracking purposes. FAA OPSNET shows ~5,000 IFR flights active at peak. Use either anchor and reason around it."
    },
    rubric: [
      { id: "qr-046-r1", text: "States a reasonable daily flight count (~40,000–50,000)" },
      { id: "qr-046-r2", text: "Uses average flight duration of 2–3 hours" },
      { id: "qr-046-r3", text: "Applies Little's Law or equivalent logic to get simultaneous flights" },
      { id: "qr-046-r4", text: "Adjusts for daytime clustering or peak hours" },
      { id: "qr-046-r5", text: "Arrives at 4,000–8,000 simultaneous flights" }
    ]
  },

  {
    id: "qr-047",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["market-sizing"],
    difficulty: "medium",
    question: "Estimate the annual revenue of all Starbucks locations in the United States. Build your estimate from the bottom up (per-location economics) and then cross-check with a top-down approach (US coffee market).",
    context: undefined,
    hints: [
      "Bottom-up: how many US Starbucks locations? What is the average revenue per location? Top-down: what is the US coffee shop market, and what share does Starbucks hold?",
      "There are ~16,000 Starbucks in the US. Average transactions per day: ~500 at $7 average ticket. Revenue per location: 500 × $7 × 365 = $1.28M/year. Total: 16,000 × $1.28M.",
      "Bottom-up: $20.5B. Top-down: US coffee shop market ~$50B, Starbucks ~40% share = $20B. Both converge near $20B. Actual Starbucks US revenue: ~$18–20B. ✓"
    ],
    referenceSolution: {
      approach: "Bottom-up: locations × revenue per location. Top-down: total market × market share. Compare and reconcile.",
      reasoning: "Bottom-up: US Starbucks locations ≈ 16,000 (company-operated + licensed). Average daily transactions: ~500 per store (busy urban stores do 800+, suburban/drive-through 400). Average ticket: $6.50–$7.50; use $7. Daily revenue per store: 500 × $7 = $3,500. Annual: $3,500 × 365 = $1,277,500 ≈ $1.28M. Total US: 16,000 × $1.28M = $20.5B. Top-down: US coffee shop/café market ≈ $50B (IBISWorld estimates). Starbucks US market share in coffee retail: ~35–40%. 40% × $50B = $20B. Both approaches give ~$20B. Actual Starbucks North America revenue (mostly US) is reported at ~$18–20B. ✓",
      commonMistakes: "Using total global Starbucks stores (~36,000) instead of US only. Using too low an average ticket ($4 instead of $7 — missing food items and complex drinks). Not doing both approaches and comparing.",
      alternatives: "Can anchor on Starbucks employee count (~350,000 US employees) × revenue per employee (~$55,000–$60,000) = $19–21B. Another cross-check."
    },
    rubric: [
      { id: "qr-047-r1", text: "States reasonable US store count (~15,000–17,000)" },
      { id: "qr-047-r2", text: "Estimates daily transactions and average ticket plausibly (400–600 × $6–$8)" },
      { id: "qr-047-r3", text: "Bottom-up estimate in range $15B–$25B" },
      { id: "qr-047-r4", text: "Performs a top-down cross-check using market size and share" },
      { id: "qr-047-r5", text: "Both approaches converge and candidate reconciles any differences" }
    ]
  },

  {
    id: "qr-048",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["mece-decomposition", "economic-estimation"],
    difficulty: "hard",
    question: "Estimate the total annual economic cost of traffic congestion in the United States. Structure your estimate using a MECE decomposition, quantify each component with explicit assumptions, and cross-check your final number against a plausible external benchmark.",
    context: "Economic cost of congestion includes: time lost by commuters, excess fuel consumption, freight/logistics delays (which pass through to prices), and environmental costs. You do not need to compute all four — pick the two most material and note the others.",
    hints: [
      "Most material components: (1) time cost of commuter delay, (2) freight/logistics delay costs. Start with how many US workers commute and how much extra time congestion adds.",
      "~115 million US workers commute by car. Average extra congestion delay: ~50 hours/year (INRIX data often cited at 40–60 hrs). Value of time: $20–$25/hr for personal time. Total time cost: 115M × 50 × $22 = $126.5B.",
      "Freight: ~$700B/year in trucking industry. Congestion adds ~5–10% cost → $35–70B. Combined total: $126B + $50B ≈ $180B. External benchmark: INRIX/Texas A&M report cites ~$87B (personal time only, conservative). Broader economic cost estimates reach $200B+. Our estimate is in the right range."
    ],
    referenceSolution: {
      approach: "MECE decomposition: personal time loss + freight delay cost. Quantify each with explicit assumptions. Cross-check against published benchmarks.",
      reasoning: "MECE decomposition of congestion costs: (A) Personal time loss — most material. (B) Freight/logistics delay — significant. (C) Excess fuel burn — smaller, partly captured by B. (D) Environmental costs — hardest to quantify, smallest near-term monetary value. Focus on A and B. Component A — Personal time: US labor force ≈ 160M. Car commuters: ~75% = 120M. Average annual congestion delay: 40–50 hours (INRIX estimates 51 hours/year for average American driver). Value of time: use 50% of median wage = $18/hr (standard transport economics multiplier). Total: 120M × 45h × $18 = $97.2B ≈ $100B. Component B — Freight: US trucking revenue ≈ $875B. Congestion raises costs: ~5–8% premium on urban/metro freight. 6% × $875B = $52.5B in excess cost. These pass through to consumer prices. Combined estimate: $100B + $53B = $153B. Round to $150–160B. Cross-check: INRIX 2022 report: $81B (US personal time loss only). Texas A&M Urban Mobility Report: $74B personal + delivery delay combined. These are conservative methodologies. Broader macro estimates including supply chain effects: $200B+. Our $150B is consistent with mid-range estimates. The MECE structure ensures no double-counting between personal and freight.",
      commonMistakes: "Double-counting time costs (including both personal and freight delay as full-value economic losses without netting). Using GDP per capita as value of time (overstates — should be wage or 50% of wage). Not doing a cross-check. Failing to justify the MECE-ness of the decomposition.",
      alternatives: "Top-down: US GDP ≈ $27T. Traffic congestion costs estimated at 0.5–0.8% of GDP → $135B–$216B. Consistent with bottom-up."
    },
    rubric: [
      { id: "qr-048-r1", text: "Provides a MECE decomposition with at least 2 distinct non-overlapping cost categories" },
      { id: "qr-048-r2", text: "Quantifies personal time cost with explicit commuter count, hours, and value-of-time assumption" },
      { id: "qr-048-r3", text: "Quantifies freight/logistics cost with explicit trucking industry size and delay percentage" },
      { id: "qr-048-r4", text: "Arrives at total in the range $100B–$250B" },
      { id: "qr-048-r5", text: "Performs a cross-check (GDP-based or published-benchmark comparison)" },
      { id: "qr-048-r6", text: "Avoids double-counting and explicitly notes smaller categories that were excluded" }
    ]
  },

  {
    id: "qr-049",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["sensitivity-analysis", "bounding-estimates"],
    difficulty: "hard",
    question: "You are asked to estimate the number of piano tuners in Chicago. After building your base estimate, identify the two assumptions your answer is most sensitive to, and compute how much your final estimate changes if each of those assumptions is off by 50% in either direction.",
    context: "This is a classic Fermi problem. The goal is not just to get the right number, but to understand which links in your estimation chain dominate the uncertainty.",
    hints: [
      "Standard chain: Chicago population → households → pianos → tunings/year → tuner capacity → number of tuners. Build this out step by step.",
      "Chicago metro: ~2.7M city, ~9M metro. Use city: 2.7M / 2.5 people/household = 1.08M households. ~1 in 20 households has a piano = 54,000 pianos. Each piano tuned ~1× per year = 54,000 tunings/year. A tuner does ~4 per day × 250 days = 1,000/year. Tuners needed = 54,000 / 1,000 = 54.",
      "Most sensitive assumption: pianos per household (1/20 could range from 1/10 to 1/50 — 5× swing). Second: tuner productivity (3–5 per day). If piano prevalence is 1/10 instead of 1/20, tuner count doubles to ~108. If it's 1/50, count drops to ~22. The answer has a natural range of 20–110, with ~54 as central estimate."
    ],
    referenceSolution: {
      approach: "Build Fermi chain, identify the two highest-sensitivity assumptions, compute upper/lower bounds for each.",
      reasoning: "Base chain: Chicago population: 2.7M. Average household: 2.5 people → 1.08M households. Fraction with piano: 1/20 (pianos are relatively rare — maybe 1 in 15–20 middle-class households) → 54,000 pianos. Annual tunings per piano: 1.0 (concert pianos tune before each performance; home pianos often once a year or less; average ~1) → 54,000 tunings/year. Tuner capacity: 4 tunings/day × 250 working days/year = 1,000 tunings/year per tuner. Number of tuners: 54,000 / 1,000 = 54. Sensitivity analysis: Assumption 1 (piano prevalence — most uncertain): 1/20 is the central case. High: 1/10 → 108 tuners. Low: 1/30 → 36 tuners. 50% shift in prevalence (1/20 → 1/30 or 1/13): tuners range 36–83. Impact: ±50% prevalence → ±50% tuner count (linear). Assumption 2 (tuner productivity): 4/day is central. High: 6/day → 900/yr → 60 tuners. Low: 3/day → 750/yr → 72 tuners. Less sensitive: ±25% in productivity gives ±13% in tuner count. Conclusion: piano prevalence dominates the uncertainty, followed by hours worked per year. Published estimates for Chicago: ~125 piano tuners (Yellow Pages data) — suggesting piano prevalence is closer to 1/10, not 1/20. The sensitivity analysis reveals where to invest more research.",
      commonMistakes: "Not distinguishing city from metro population (2.7M vs 9M makes a 3× difference). Using 2 tunings/piano/year instead of 1 (concert halls skew perception). Not quantifying the sensitivity analysis — just qualitatively saying 'piano prevalence matters.'",
      alternatives: "Alternative anchor: Piano tuners are a regulated trade; Illinois DELPHI data or Yellow Pages shows ~125–150 in Chicago metro. Working backward: 125 tuners × 1,000/yr = 125,000 tunings → 125,000 pianos in metro area of 9M → ~1 per 72 people → ~1 per 30 households. Slightly higher prevalence than 1/20."
    },
    rubric: [
      { id: "qr-049-r1", text: "Builds complete estimation chain from population to pianos to tuner capacity to tuner count" },
      { id: "qr-049-r2", text: "Base estimate in range 30–150 tuners" },
      { id: "qr-049-r3", text: "Identifies piano prevalence as the most sensitive assumption" },
      { id: "qr-049-r4", text: "Quantifies how a ±50% change in prevalence affects the final estimate" },
      { id: "qr-049-r5", text: "Identifies a second sensitive assumption (tuner productivity or tuning frequency) and quantifies its effect" },
      { id: "qr-049-r6", text: "Concludes that prevalence dominates uncertainty and notes what additional data would most improve the estimate" }
    ]
  },

  {
    id: "qr-050",
    trackId: "quantitative-reasoning",
    subSkill: "estimation-chains",
    secondarySkills: ["rebuilding-mental-models", "cross-domain-reasoning"],
    difficulty: "hard",
    question: "You are a consultant advising a government on whether to build a high-speed rail (HSR) line between two cities 400 km apart. Build a multi-step estimation chain to determine: (1) the annual ridership needed to break even on operating costs, (2) whether that ridership is plausible given the population corridor, and (3) identify the single factor most likely to make or break the project's viability. Assume construction is sunk; this is purely an operating economics question.",
    context: "Typical HSR operating costs: $0.08–$0.15 per seat-km. Typical HSR ticket price: $0.15–$0.30 per passenger-km. Average load factor: 65–75%. Train capacity: 400–600 seats. Frequency: assume 10 round trips per day initially.",
    hints: [
      "Step 1: Compute annual operating cost. 10 round trips/day × 400 km × 2 × 365 days = total seat-km/year. At $0.10/seat-km, that's operating cost. Step 2: Compute revenue per passenger at 70% load and $0.20/passenger-km.",
      "Seat-km/year: 10 trips × 800 km/round trip × 500 seats × 365 = 1.46 × 10^9 seat-km/year. Op cost: 1.46B × $0.10 = $146M/year. Revenue per trip at 70% load: 500 × 70% = 350 passengers × 400 km × $0.20 = $28,000/trip. Annual revenue: $28,000 × 10 trips × 2 directions × 365 = $204.4M.",
      "Revenue ($204M) > Op cost ($146M) at 70% load → the line would be operationally profitable at these parameters. Break-even ridership: $146M / ($0.20 × 400 km) = $146M / $80 per passenger ≈ 1.825M passengers/year. Plausibility check: two cities 400 km apart with combined metro population of 3–5M could generate 5–15M intercity trips/year (demand model); capturing 15–30% of that gives 750K–4.5M — plausible."
    ],
    referenceSolution: {
      approach: "Chain: train-days × seats → seat-km → operating cost → revenue at assumed load factor → break-even passengers → demand plausibility check.",
      reasoning: "Step 1 — Annual seat-km: 10 round trips/day × 2 directions × 400 km × 500 seats/train × 365 days = 10 × 2 × 400 × 500 × 365 = 1,460,000,000 seat-km/year = 1.46 × 10^9. Step 2 — Annual operating cost: 1.46 × 10^9 × $0.10/seat-km = $146M. Step 3 — Break-even passengers: Revenue per passenger = 400 km × $0.20/km = $80. Break-even passengers = $146M / $80 = 1.825M passengers/year. Step 4 — Revenue at 70% load: Passengers/year = 10 trips × 2 directions × 365 days × 500 seats × 70% = 2,555,000 ≈ 2.56M. Revenue = 2.56M × $80 = $204.8M. Net operating surplus = $204.8M − $146M = $58.8M. The line breaks even at ~71% of 70% load = ~50% load factor. Step 5 — Demand plausibility: Combined population of two 400 km-apart cities (e.g., London-Birmingham scale): 2–5M. Annual intercity trips between such cities: typically 20–50M by all modes (road + air + existing rail). HSR target capture: 15–25% = 3–12M trips. 1.825M break-even is well within plausible range. Step 6 — Critical factor: Load factor is the dominant variable. The line is profitable at 70% load but could easily fall to 50% in early years. Revenue is linear in load factor but costs are fixed — a 20% load factor drop cuts revenue by $58M, wiping out the surplus. The key uncertainty is demand ramp-up speed in years 1–5, not long-run economics.",
      commonMistakes: "Confusing seat-km (supply side) with passenger-km (demand side). Forgetting to multiply by 2 for round-trip. Using daily figures and forgetting to annualize. Not computing break-even and just saying 'it depends on ridership.'",
      alternatives: "Alternate critical factor framing: ticket price elasticity. If governments cap fares at $0.15/km instead of $0.20, revenue drops 25% → $153M vs $146M cost → nearly break-even, making cost overruns or lower-than-expected load fatal. Price regulation risk may be more critical than demand volume."
    },
    rubric: [
      { id: "qr-050-r1", text: "Correctly computes annual seat-km (~1.46 × 10^9) with explicit chain" },
      { id: "qr-050-r2", text: "Derives annual operating cost (~$146M)" },
      { id: "qr-050-r3", text: "Calculates break-even ridership (~1.8M passengers/year)" },
      { id: "qr-050-r4", text: "Performs a demand plausibility check using population corridor logic" },
      { id: "qr-050-r5", text: "Identifies load factor (or fare regulation) as the single most critical variable" },
      { id: "qr-050-r6", text: "Quantifies how a change in the critical variable affects operating economics" }
    ]
  },
];
