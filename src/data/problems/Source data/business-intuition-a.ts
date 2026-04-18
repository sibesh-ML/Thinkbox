import type { Problem } from '@/types';

export const businessIntuitionProblemsA: Problem[] = [

  // ── UNIT ECONOMICS (bi-001 to bi-005) ─────────────────────────────────────

  {
    id: "bi-001",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: [],
    difficulty: "easy",
    question: "A SaaS company charges $120/month per seat. Acquiring each customer costs $600 in sales and marketing. Monthly churn is 2%. What is the customer lifetime value (LTV) and the LTV:CAC ratio?",
    context: "Monthly revenue per customer: $120. Customer acquisition cost (CAC): $600. Monthly churn rate: 2%.",
    hints: [
      "Start by figuring out how long, on average, a customer stays before churning.",
      "Average customer lifetime = 1 / monthly churn rate. Then LTV = monthly revenue × average lifetime months.",
      "Lifetime = 1 / 0.02 = 50 months. LTV = $120 × 50 = $6,000. LTV:CAC = $6,000 / $600 = 10×."
    ],
    referenceSolution: {
      approach: "Calculate average customer lifetime from churn rate, then multiply by monthly revenue to get LTV. Divide LTV by CAC to get the ratio.",
      reasoning: "Average lifetime = 1 / churn rate = 1 / 0.02 = 50 months. LTV = $120/month × 50 months = $6,000. LTV:CAC = $6,000 / $600 = 10×. A 10× ratio is excellent — the rule of thumb for healthy SaaS is LTV:CAC ≥ 3×. This business retains customers well relative to acquisition cost.",
      commonMistakes: "Forgetting that lifetime = 1/churn (not 1 minus churn). Using annual revenue instead of monthly. Not computing the ratio — just stating LTV without comparing to CAC.",
      alternatives: "You can also frame it as payback period: $600 CAC / $120 monthly revenue = 5 months to recover the acquisition cost, which is fast. Both LTV:CAC and payback period tell the same story."
    },
    rubric: [
      { id: "bi-001-r1", text: "Correctly calculates average customer lifetime as 1/churn = 50 months" },
      { id: "bi-001-r2", text: "LTV = $120 × 50 = $6,000" },
      { id: "bi-001-r3", text: "LTV:CAC ratio = 10×" },
      { id: "bi-001-r4", text: "Interprets the 10× ratio as healthy (benchmark ≥ 3×)" }
    ]
  },

  {
    id: "bi-002",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: [],
    difficulty: "easy",
    question: "A coffee shop sells 300 cups per day at $4.50 each. The variable cost per cup (beans, milk, cup, lid) is $1.20. Fixed daily costs (rent, staff, utilities) total $650. Is this location profitable on a daily basis?",
    context: "Daily volume: 300 cups. Selling price: $4.50/cup. Variable cost: $1.20/cup. Daily fixed costs: $650.",
    hints: [
      "First calculate contribution margin per cup (price minus variable cost), then total contribution margin for the day.",
      "Contribution margin per cup = $4.50 - $1.20 = $3.30. Total contribution = $3.30 × 300 cups.",
      "Total contribution = $990. Subtract fixed costs: $990 - $650 = $340 daily profit."
    ],
    referenceSolution: {
      approach: "Calculate contribution margin per unit, multiply by volume to get total contribution, then subtract fixed costs.",
      reasoning: "Contribution margin per cup = $4.50 - $1.20 = $3.30. Total daily contribution = $3.30 × 300 = $990. Daily profit = $990 - $650 fixed costs = $340. The location is profitable. Monthly profit ≈ $340 × 30 = $10,200. The contribution margin ratio is $3.30 / $4.50 = 73%, which is high — typical for coffee. The fixed cost coverage ratio is $990 / $650 = 1.52×, meaning the business covers its fixed costs with 52% room to spare.",
      commonMistakes: "Applying variable cost to all revenue instead of per unit first. Confusing gross profit with contribution margin. Forgetting to subtract fixed costs from total contribution.",
      alternatives: "Alternatively: total revenue = $4.50 × 300 = $1,350. Total variable cost = $1.20 × 300 = $360. Gross profit = $990. Net profit = $990 - $650 = $340. Same result."
    },
    rubric: [
      { id: "bi-002-r1", text: "Contribution margin per cup = $3.30" },
      { id: "bi-002-r2", text: "Total contribution margin = $990" },
      { id: "bi-002-r3", text: "Daily profit = $340 after fixed costs" },
      { id: "bi-002-r4", text: "Correctly identifies the shop as profitable" }
    ]
  },

  {
    id: "bi-003",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: ["mental-math"],
    difficulty: "easy",
    question: "An e-commerce retailer has a 3% conversion rate, average order value of $85, and gross margin of 40%. They spend $0.80 per click on Google Ads. What is the maximum they can profitably spend per click?",
    context: "Conversion rate: 3% (3 purchases per 100 clicks). Average order value (AOV): $85. Gross margin: 40%. Current CPC: $0.80.",
    hints: [
      "Work out how much gross profit each purchase generates, then figure out how much profit is generated per click on average.",
      "Gross profit per order = $85 × 40% = $34. With 3% conversion, the expected gross profit per click = $34 × 0.03.",
      "Expected gross profit per click = $34 × 0.03 = $1.02. The business can spend up to $1.02/click and break even on the ad unit."
    ],
    referenceSolution: {
      approach: "Calculate gross profit per order, then multiply by conversion rate to get expected gross profit per click. That is the break-even CPC.",
      reasoning: "Gross profit per order = $85 × 0.40 = $34. Expected value per click = $34 × 0.03 = $1.02. The break-even CPC is $1.02. Currently paying $0.80, so there is $0.22 of margin per click. That said, gross margin doesn't account for overhead — if operating expenses are 25% of revenue, then net profit per order is only ($85 × 0.15) = $12.75, and break-even CPC drops to $12.75 × 0.03 = $0.38. At $0.80 they may be unprofitable on a fully-loaded basis.",
      commonMistakes: "Using revenue per click instead of gross profit per click. Forgetting to multiply by conversion rate. Not distinguishing gross margin from net margin.",
      alternatives: "Reverse: at $0.80 CPC, 100 clicks cost $80. 3 conversions × $34 gross profit = $102 gross profit. Net = $102 - $80 = $22 on 100 clicks, or $0.22 per click."
    },
    rubric: [
      { id: "bi-003-r1", text: "Gross profit per order = $34" },
      { id: "bi-003-r2", text: "Expected gross profit per click = $1.02" },
      { id: "bi-003-r3", text: "Identifies $1.02 as the gross-margin break-even CPC" },
      { id: "bi-003-r4", text: "Notes that overhead could lower the true break-even CPC" }
    ]
  },

  {
    id: "bi-004",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: [],
    difficulty: "easy",
    question: "A mobile app has 2 million monthly active users (MAU). 5% are paying subscribers at $9.99/month. Annual server costs are $1.8M. What is the monthly revenue, and does subscription revenue cover server costs?",
    context: "MAU: 2,000,000. Paid conversion rate: 5%. Subscription price: $9.99/month. Annual server costs: $1,800,000.",
    hints: [
      "Calculate the number of paying users first, then multiply by the subscription price.",
      "Paying users = 2,000,000 × 5% = 100,000. Monthly revenue = 100,000 × $9.99.",
      "Monthly revenue = $999,000 ≈ $1M. Monthly server cost = $1.8M / 12 = $150,000. Revenue covers server costs with about $849K left over."
    ],
    referenceSolution: {
      approach: "Calculate paying user count, multiply by price for monthly revenue, then compare to amortized monthly server cost.",
      reasoning: "Paying users = 2,000,000 × 0.05 = 100,000. Monthly revenue = 100,000 × $9.99 = $999,000. Monthly server cost = $1,800,000 / 12 = $150,000. Server cost as % of revenue = $150,000 / $999,000 ≈ 15%. Revenue covers server costs 6.6× over. The cost-per-MAU for servers = $150,000 / 2,000,000 = $0.075/user/month — very efficient. Revenue per MAU = $999,000 / 2,000,000 = $0.50/user/month, well above server cost.",
      commonMistakes: "Applying 5% conversion to revenue instead of to user count. Forgetting to divide annual server costs by 12. Comparing annual revenue to annual costs inconsistently.",
      alternatives: "Annual revenue = $999K × 12 ≈ $12M. Annual server cost = $1.8M. Server cost ratio = 15% of revenue — comfortable for a SaaS/app business."
    },
    rubric: [
      { id: "bi-004-r1", text: "Paying users = 100,000" },
      { id: "bi-004-r2", text: "Monthly revenue ≈ $999,000" },
      { id: "bi-004-r3", text: "Monthly server cost = $150,000" },
      { id: "bi-004-r4", text: "Concludes revenue comfortably covers server costs (~6.6× coverage)" }
    ]
  },

  {
    id: "bi-005",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "medium",
    question: "A food delivery startup pays drivers $8 per delivery and charges restaurants a 20% commission on the order value. Average order value is $35. The startup also charges customers a $3 delivery fee. At what order volume does the per-delivery economics break even, given that the platform spends $2 per order on payment processing and support?",
    context: "Driver pay: $8/delivery. Restaurant commission: 20% of order value. Average order value: $35. Customer delivery fee: $3. Payment processing + support: $2/order.",
    hints: [
      "List all revenue sources per delivery and all variable costs per delivery separately.",
      "Revenue per delivery = restaurant commission + delivery fee = (20% × $35) + $3. Variable costs = driver pay + processing.",
      "Revenue = $7 + $3 = $10. Costs = $8 + $2 = $10. The unit economics break exactly even at any volume — there is no per-order profit to scale."
    ],
    referenceSolution: {
      approach: "Calculate per-delivery revenue and per-delivery variable costs. Compare them to find the unit margin.",
      reasoning: "Revenue per delivery: restaurant commission = 20% × $35 = $7; delivery fee = $3; total = $10. Variable costs per delivery: driver pay = $8; payment/support = $2; total = $10. Unit margin = $10 - $10 = $0. The business breaks exactly even on a per-delivery basis before any fixed costs (engineering, marketing, HQ). This is the structural problem with food delivery: at a $35 AOV and 20% commission, the unit economics are marginal. To generate positive unit margin, the startup needs either higher AOV, higher commission rate, lower driver pay, or additional revenue streams. For example, if AOV grew to $50: commission = $10, total revenue = $13, unit margin = +$3.",
      commonMistakes: "Forgetting the customer delivery fee as a revenue item. Treating driver pay as a fixed cost. Not recognizing that zero unit margin means fixed costs make the business unprofitable at any scale.",
      alternatives: "Sensitivity: increasing commission to 25% on $35 order = $8.75 revenue from restaurant → total revenue $11.75, unit margin $1.75. Or reducing driver pay to $7 (tips-based model) → unit margin $1. Small changes have outsized impact because margins are razor thin."
    },
    rubric: [
      { id: "bi-005-r1", text: "Revenue per delivery correctly calculated as $10 (commission $7 + fee $3)" },
      { id: "bi-005-r2", text: "Variable cost per delivery correctly calculated as $10 (driver $8 + processing $2)" },
      { id: "bi-005-r3", text: "Identifies zero unit margin — business breaks even at the delivery level" },
      { id: "bi-005-r4", text: "Recognizes that fixed costs make this structurally loss-making" },
      { id: "bi-005-r5", text: "Proposes at least one lever to improve unit economics (AOV, commission, cost)" }
    ]
  },

  // ── SUPPLY & DEMAND (bi-006 to bi-010) ────────────────────────────────────

  {
    id: "bi-006",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: [],
    difficulty: "easy",
    question: "A concert venue has 5,000 seats. Tickets priced at $80 sell out consistently. The venue tests raising prices to $100 and sells 4,200 seats. Which price generates more revenue, and what does this suggest about price elasticity?",
    context: "Capacity: 5,000 seats. Price A: $80 → 5,000 tickets sold. Price B: $100 → 4,200 tickets sold.",
    hints: [
      "Calculate total revenue at each price point by multiplying price by quantity sold.",
      "Revenue at $80 = $80 × 5,000. Revenue at $100 = $100 × 4,200. Compare the two.",
      "Revenue at $80 = $400,000. Revenue at $100 = $420,000. Higher price wins. Demand is relatively inelastic — a 25% price increase caused only a 16% drop in quantity."
    ],
    referenceSolution: {
      approach: "Compute revenue = price × quantity for each scenario, compare, and calculate price elasticity of demand.",
      reasoning: "Revenue at $80: $80 × 5,000 = $400,000. Revenue at $100: $100 × 4,200 = $420,000. The $100 price generates $20,000 more revenue (+5%). Price elasticity of demand = % change in quantity / % change in price = (-16%) / (+25%) = -0.64. Since |elasticity| < 1, demand is inelastic — a price increase raises total revenue. The venue should raise prices. At full capacity (5,000 seats at $100), revenue would be $500,000, but the demand constraint caps it at 4,200 seats.",
      commonMistakes: "Comparing per-unit revenue instead of total revenue. Not calculating elasticity. Assuming higher price is always worse for revenue.",
      alternatives: "If the venue could add premium seating for the 800 unsold spots at $150 (e.g., VIP upgrade), revenue could increase further: $420,000 + (800 × $150) = $540,000."
    },
    rubric: [
      { id: "bi-006-r1", text: "Revenue at $80 = $400,000; revenue at $100 = $420,000" },
      { id: "bi-006-r2", text: "Correctly identifies $100 pricing as higher revenue" },
      { id: "bi-006-r3", text: "Calculates or describes price elasticity as inelastic (|e| < 1)" },
      { id: "bi-006-r4", text: "Concludes price should be raised from $80" }
    ]
  },

  {
    id: "bi-007",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: [],
    difficulty: "easy",
    question: "A city has 10,000 vacant apartments. Demand is 9,000 apartments at the current rent of $2,000/month. The city passes rent control capping rent at $1,500/month. Demand rises to 11,000 apartments and supply drops to 8,000. Describe the market outcome.",
    context: "Pre-control: supply = 10,000, demand = 9,000 at $2,000/month (market is roughly balanced with slight surplus). Post-control: rent capped at $1,500, demand = 11,000, supply = 8,000.",
    hints: [
      "When a price ceiling is set below the market price, compare the new quantity demanded to the new quantity supplied.",
      "At $1,500: demand = 11,000, supply = 8,000. Quantity demanded exceeds quantity supplied. What do we call this gap?",
      "Shortage = demand - supply = 11,000 - 8,000 = 3,000 apartments. Rent control creates a shortage — more people want apartments than are available."
    ],
    referenceSolution: {
      approach: "Identify that the price ceiling ($1,500) is below the pre-control equilibrium ($2,000), then compute the resulting shortage.",
      reasoning: "The price ceiling is binding (below the market price). At $1,500/month: quantity demanded = 11,000 apartments, quantity supplied = 8,000 apartments. Shortage = 11,000 - 8,000 = 3,000 apartments. Before rent control, supply (10,000) exceeded demand (9,000) by 1,000 units — the market was near equilibrium with a slight landlord-side surplus. After rent control, 3,000 people who want apartments cannot find one. Landlords face lower returns and reduce supply (convert units to condos, defer maintenance, leave units empty). Demand rises because the artificially low price attracts more renters.",
      commonMistakes: "Confusing surplus with shortage. Thinking rent control solves housing affordability by only looking at price, not quantity. Missing the supply reduction effect.",
      alternatives: "Long-run effects are typically worse: supply continues to shrink as landlords exit the market, widening the shortage beyond 3,000 units."
    },
    rubric: [
      { id: "bi-007-r1", text: "Identifies the price ceiling is binding (below market equilibrium)" },
      { id: "bi-007-r2", text: "Shortage = 11,000 - 8,000 = 3,000 apartments" },
      { id: "bi-007-r3", text: "Explains why demand increases and supply decreases at lower price" },
      { id: "bi-007-r4", text: "Concludes rent control creates a housing shortage" }
    ]
  },

  {
    id: "bi-008",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: ["estimation-chains"],
    difficulty: "easy",
    question: "A rideshare platform notices that on Friday nights at 10 PM, trip requests spike to 3× the normal rate while driver supply only increases by 20%. If normal trip requests are 1,000/hour with 900 drivers active, what is the demand-supply gap on Friday nights?",
    context: "Normal: 1,000 trip requests/hour, 900 active drivers. Friday 10 PM: requests spike 3×, driver supply increases 20%.",
    hints: [
      "Calculate the new Friday night values for both demand (requests) and supply (drivers) separately.",
      "Friday demand = 1,000 × 3 = 3,000 requests. Friday supply = 900 × 1.2 = 1,080 drivers.",
      "Gap = 3,000 - 1,080 = 1,920 unmet requests. Demand exceeds supply by ~1,920 trips/hour, justifying surge pricing."
    ],
    referenceSolution: {
      approach: "Apply the multipliers to each side of the market independently, then compute the gap.",
      reasoning: "Friday demand = 1,000 × 3 = 3,000 trip requests/hour. Friday supply = 900 × 1.20 = 1,080 active drivers. Demand-supply gap = 3,000 - 1,080 = 1,920 trips/hour. This gap represents ~64% of demand that cannot be met (1,920 / 3,000). Surge pricing is the market mechanism to close this gap: higher prices reduce demand (some riders choose not to travel) and increase supply (more drivers go online for the earnings). A 2× surge might reduce demand by 30% (to 2,100) and increase supply by 50% (to 1,620), closing the gap to 480.",
      commonMistakes: "Applying the 20% increase to demand instead of supply. Computing the ratio of demand to supply rather than the absolute gap. Not interpreting what the gap means for pricing strategy.",
      alternatives: "Gap as a ratio: 3,000 / 1,080 = 2.78× — meaning supply would need to almost triple to match demand without surge pricing."
    },
    rubric: [
      { id: "bi-008-r1", text: "Friday demand = 3,000 requests/hour" },
      { id: "bi-008-r2", text: "Friday supply = 1,080 drivers" },
      { id: "bi-008-r3", text: "Demand-supply gap = 1,920" },
      { id: "bi-008-r4", text: "Connects the gap to the rationale for surge pricing" }
    ]
  },

  {
    id: "bi-009",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: [],
    difficulty: "easy",
    question: "A semiconductor shortage causes the price of a microchip to rise from $10 to $25. One laptop manufacturer passes the full cost increase to customers ($15 higher laptop price). A competitor absorbs the increase and holds laptop prices flat. What are the strategic trade-offs for each approach?",
    context: "Chip price increase: $10 → $25 (+$15). Manufacturer A passes on $15 to customers. Manufacturer B absorbs the $15 hit to gross margin.",
    hints: [
      "Think about the short-term financial impact on each company and the market share implications.",
      "Manufacturer A preserves margin per unit but risks losing price-sensitive customers. Manufacturer B protects market share but compresses margins.",
      "Compare: A keeps margin but may lose volume; B keeps volume but loses margin per unit. The better strategy depends on the shortage duration and each company's financial resilience."
    ],
    referenceSolution: {
      approach: "Analyze the revenue, margin, and market share implications of each pricing strategy in the context of a temporary supply shock.",
      reasoning: "Manufacturer A (pass through): Revenue per unit rises by $15, gross margin per unit stays flat (or improves if customers absorb it). Risk: price-sensitive customers switch to Manufacturer B or delay purchases. If demand is elastic, volume drops and total profit may fall. Manufacturer B (absorb): Revenue per unit stays flat, but gross margin per unit falls by $15. If chips were $10 and margin was 20% on a $500 laptop ($100 margin), absorbing $15 per chip erodes 15% of the margin entirely. The upside: potential market share gain from A's customers. Trade-off depends on: (1) duration of shortage — temporary = absorb; permanent = pass through; (2) competitive dynamics — if all competitors pass through, B gains share; (3) financial runway — B needs capital to sustain compressed margins.",
      commonMistakes: "Treating one strategy as universally better. Ignoring the impact of shortage duration. Not considering whether the competitor can sustain the absorption long-term.",
      alternatives: "A third option: partial pass-through (e.g., raise price by $7.50) hedges both risks. Also: locking in chip supply via long-term contracts avoids the problem entirely."
    },
    rubric: [
      { id: "bi-009-r1", text: "Identifies the margin vs. volume trade-off for each manufacturer" },
      { id: "bi-009-r2", text: "Notes that Manufacturer B's margin shrinks by $15/unit" },
      { id: "bi-009-r3", text: "Considers shortage duration as a key variable" },
      { id: "bi-009-r4", text: "Recognizes competitive dynamics — if all pass through, B gains share" }
    ]
  },

  {
    id: "bi-010",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: ["first-principles-analysis"],
    difficulty: "medium",
    question: "Uber launches in a new city with 500 drivers and 2,000 daily riders. After 6 months, it has 2,000 drivers and 8,000 riders. A competitor enters with 200 drivers and identical pricing. Uber's rider growth slows to 10% per month while the competitor grows riders at 25% per month. At this growth rate, in how many months does the competitor's rider base exceed Uber's? What does this imply about network effects in rideshare?",
    context: "Uber at month 6: 2,000 drivers, 8,000 riders, 10%/month rider growth. Competitor at month 6: ~200 drivers, assume 500 riders, 25%/month rider growth.",
    hints: [
      "Set up the exponential growth formula for each platform: riders(t) = starting riders × (1 + growth rate)^t.",
      "Uber: 8,000 × 1.10^t. Competitor: 500 × 1.25^t. Find t where competitor exceeds Uber.",
      "Set 500 × 1.25^t = 8,000 × 1.10^t. Divide: (1.25/1.10)^t = 16. Take logs: t × ln(1.136) = ln(16). t ≈ 22 months."
    ],
    referenceSolution: {
      approach: "Set up exponential growth equations for both platforms and solve for the crossover point algebraically.",
      reasoning: "Uber riders at month t (from month 6): 8,000 × 1.10^t. Competitor riders: 500 × 1.25^t. Set equal: 500 × 1.25^t = 8,000 × 1.10^t. Divide both sides by 500 × 1.10^t: (1.25/1.10)^t = 16. (1.1364)^t = 16. Take natural log: t × ln(1.1364) = ln(16). t = ln(16) / ln(1.1364) = 2.773 / 0.1278 ≈ 21.7 months ≈ 22 months. Implication: Despite a 16× rider deficit, the competitor closes the gap in under 2 years by growing 2.5× faster. This implies that rideshare network effects are local and not winner-take-all — a competitor with adequate driver supply in specific zones can grow rapidly. True network effects would require t → ∞ (impossible to catch up), but here the crossover is finite.",
      commonMistakes: "Using linear instead of exponential growth. Getting the ratio inverted. Concluding 'Uber can never be beaten' — the math shows otherwise.",
      alternatives: "Sanity check: at t=20, Uber = 8,000 × 1.1^20 = 8,000 × 6.73 = 53,840. Competitor = 500 × 1.25^20 = 500 × 86.7 = 43,350. At t=22, Uber = 8,000 × 8.14 = 65,100; Competitor = 500 × 135.5 = 67,750. Confirmed crossover ~22 months."
    },
    rubric: [
      { id: "bi-010-r1", text: "Sets up exponential growth equations for both platforms" },
      { id: "bi-010-r2", text: "Correctly isolates (1.25/1.10)^t = 16" },
      { id: "bi-010-r3", text: "Arrives at crossover ≈ 22 months" },
      { id: "bi-010-r4", text: "Interprets result as evidence that rideshare network effects are local, not absolute" },
      { id: "bi-010-r5", text: "Provides sanity check or alternative validation of the answer" }
    ]
  },

  // ── MARKET DYNAMICS (bi-011 to bi-015) ────────────────────────────────────

  {
    id: "bi-011",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: [],
    difficulty: "easy",
    question: "The US smartphone market has ~270 million users. Total smartphone revenue last year was $81 billion. Apple holds 55% market share by revenue, Samsung holds 25%, and others hold 20%. What is Apple's implied average selling price (ASP) relative to Samsung's?",
    context: "Total US smartphone revenue: $81B. Market shares: Apple 55%, Samsung 25%, Others 20%. US smartphone users: 270 million.",
    hints: [
      "Calculate each company's dollar revenue from their market share, then estimate units sold to find ASP.",
      "Apple revenue = $81B × 55% = $44.6B. Samsung revenue = $81B × 25% = $20.25B. You need unit volumes to compute ASP — estimate from overall market units.",
      "If market revenue share ≠ unit share, ASP differs. Apple holds ~18% of US unit market share vs. 55% revenue share, implying much higher ASP: ~$900+ vs. Samsung's ~$400."
    ],
    referenceSolution: {
      approach: "Calculate each company's revenue from market share, then use estimated unit shares to derive ASP and compare.",
      reasoning: "Apple revenue = $81B × 0.55 = $44.55B. Samsung revenue = $81B × 0.25 = $20.25B. For ASP, need unit volumes. Assume Apple has ~18% US unit share (roughly 270M × 0.18 = 48.6M units) and Samsung ~35% unit share (270M × 0.35 = 94.5M units). Apple ASP = $44.55B / 48.6M = ~$917. Samsung ASP = $20.25B / 94.5M = ~$214. Apple's ASP is ~4.3× Samsung's. This explains Apple's dominance on revenue despite lower unit share: premium pricing strategy. Revenue market share is a much better indicator of pricing power than unit market share.",
      commonMistakes: "Confusing revenue market share with unit market share. Calculating revenue correctly but not going the extra step to compare ASP. Assuming both companies have the same unit volumes.",
      alternatives: "Industry data suggests Apple US unit share ~55-57% in recent quarters, not 18% — but revenue/unit share premium for Apple vs. Samsung persists (Apple ASP ~$900 vs Samsung average ~$500 including budget models)."
    },
    rubric: [
      { id: "bi-011-r1", text: "Apple revenue = ~$44.6B, Samsung revenue = ~$20.25B" },
      { id: "bi-011-r2", text: "Recognizes that ASP requires unit volume data, not just revenue share" },
      { id: "bi-011-r3", text: "Derives or estimates that Apple ASP >> Samsung ASP" },
      { id: "bi-011-r4", text: "Explains the strategic implication: Apple wins on value, not volume" }
    ]
  },

  {
    id: "bi-012",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: ["market-sizing"],
    difficulty: "easy",
    question: "The US gym membership market is worth $35 billion annually. Planet Fitness has 17 million members and charges $10-25/month. Equinox has 1 million members and charges $200-300/month. Which company likely has more total revenue, and what does this reveal about market segmentation?",
    context: "US gym market: $35B/year. Planet Fitness: 17M members, avg $15/month. Equinox: 1M members, avg $250/month.",
    hints: [
      "Calculate annual revenue for each gym chain using members × monthly price × 12.",
      "Planet Fitness: 17M × $15/month × 12 months = ? Equinox: 1M × $250/month × 12 = ?",
      "Planet Fitness: $3.06B/year. Equinox: $3.0B/year. Nearly identical revenue from opposite ends of the market — volume vs. premium pricing."
    ],
    referenceSolution: {
      approach: "Calculate annual revenue for each chain and compare, then interpret the market segmentation implications.",
      reasoning: "Planet Fitness annual revenue = 17,000,000 × $15/month × 12 = $3.06B. Equinox annual revenue = 1,000,000 × $250/month × 12 = $3.0B. Both generate approximately $3 billion in annual revenue. Planet Fitness represents 8.7% of the $35B market, Equinox represents 8.6% — nearly identical market share by revenue despite 17× difference in member count. Market segmentation insight: the fitness market is bifurcating. The mass market (value segment) and premium segment can each be $3B+ businesses with completely different unit economics. Planet Fitness serves 17× more customers but at 1/17th the price. This is classic 'good enough' disruption vs. premium positioning coexisting.",
      commonMistakes: "Assuming more members = more revenue without checking prices. Not computing annual figures (using monthly). Missing the strategic insight about market segmentation.",
      alternatives: "Combined they represent ~17.5% of the $35B market, leaving ~$29B for thousands of smaller gyms, boutique studios, and corporate chains — showing how fragmented the industry is."
    },
    rubric: [
      { id: "bi-012-r1", text: "Planet Fitness revenue ≈ $3.06B/year" },
      { id: "bi-012-r2", text: "Equinox revenue ≈ $3.0B/year" },
      { id: "bi-012-r3", text: "Notes both achieve similar revenue via opposite strategies" },
      { id: "bi-012-r4", text: "Interprets this as evidence of viable market bifurcation (value vs. premium)" }
    ]
  },

  {
    id: "bi-013",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: [],
    difficulty: "easy",
    question: "A new entrant launches a project management SaaS at $5/user/month. The market leader charges $15/user/month and has 500,000 customers averaging 10 seats each. The entrant captures 5% of the market in year 1. What is the entrant's year-1 ARR, and how does the pricing strategy affect the market leader?",
    context: "Market leader: $15/user/month, 500,000 customers, 10 seats/customer avg = 5M users. New entrant: $5/user/month, captures 5% of market (by customer count) in year 1.",
    hints: [
      "Calculate the number of customers the entrant wins (5% of 500,000), then their total users and ARR.",
      "Entrant customers = 500,000 × 5% = 25,000. Total users = 25,000 × 10 = 250,000. ARR = 250,000 users × $5/month × 12.",
      "Entrant ARR = $15M. At 1/3 the price, it threatens the market leader's pricing power and signals the market that $15 may be above equilibrium."
    ],
    referenceSolution: {
      approach: "Calculate entrant's user base from market share, convert to ARR, then analyze the competitive pressure on the market leader's pricing.",
      reasoning: "Entrant customers = 500,000 × 0.05 = 25,000. Users = 25,000 × 10 = 250,000. ARR = 250,000 × $5 × 12 = $15,000,000. Market leader impact: they lose 25,000 customers (5% of base). Revenue lost = 25,000 × 10 × $15 × 12 = $45M ARR. If the leader matches price, they lose $10/user/month on 5M users = $600M ARR — a far worse outcome than losing 5% of customers. The pricing gap of 3× creates a classic innovator's dilemma: matching the entrant destroys more value than ignoring them. The market leader will likely respond with a 'good enough' tier or freemium rather than dropping core prices.",
      commonMistakes: "Not computing the entrant's ARR in annual terms. Missing the asymmetric price-matching dilemma for the market leader.",
      alternatives: "If the entrant grows 100% YoY, year-2 ARR = $30M with 50,000 customers — compounding threat that justifies earlier response."
    },
    rubric: [
      { id: "bi-013-r1", text: "Entrant captures 25,000 customers = 250,000 users" },
      { id: "bi-013-r2", text: "Entrant year-1 ARR = $15M" },
      { id: "bi-013-r3", text: "Quantifies the revenue the market leader loses ($45M ARR)" },
      { id: "bi-013-r4", text: "Explains the pricing dilemma: matching entrant costs far more than ignoring them" }
    ]
  },

  {
    id: "bi-014",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: [],
    difficulty: "easy",
    question: "Amazon's marketplace charges sellers a 15% referral fee. A seller's product costs $20 to make and sells for $60 on Amazon. Shipping and fulfillment (FBA) costs $8. What is the seller's net margin? If Amazon raises the fee to 17%, what happens to the seller's profit?",
    context: "Product COGS: $20. Selling price: $60. Amazon referral fee: 15% of selling price. FBA (fulfillment): $8.",
    hints: [
      "Calculate the Amazon referral fee in dollars, then subtract all costs from the selling price.",
      "Referral fee = 15% × $60 = $9. Net to seller = $60 - $9 (fee) - $8 (FBA) - $20 (COGS).",
      "Current net = $60 - $9 - $8 - $20 = $23. At 17%: fee = $10.20, net = $60 - $10.20 - $8 - $20 = $21.80."
    ],
    referenceSolution: {
      approach: "Build a per-unit P&L: revenue minus Amazon fee, fulfillment cost, and COGS.",
      reasoning: "Current scenario: Amazon referral fee = 15% × $60 = $9. Net to seller = $60 - $9 - $8 - $20 = $23. Net margin = $23 / $60 = 38.3%. At 17% fee: new fee = 17% × $60 = $10.20. Net = $60 - $10.20 - $8 - $20 = $21.80. New margin = $21.80 / $60 = 36.3%. Absolute profit drop = $23 - $21.80 = $1.20/unit (5.2% relative decrease). The fee increase has an outsized effect on net margin because it is applied to revenue, not profit. A 2 percentage point fee increase causes a $1.20 hit on a $23 profit — roughly 5% of profit. For high-volume sellers, 5% profit erosion is significant.",
      commonMistakes: "Applying the fee as a percentage of profit rather than revenue. Forgetting FBA costs. Not noting the outsized impact: a 2pp fee hike causes a 5% profit decline.",
      alternatives: "If the seller raises price to $62 to offset: new fee = 15% × $62 = $9.30. Net = $62 - $9.30 - $8 - $20 = $24.70 — better than before, assuming no demand loss."
    },
    rubric: [
      { id: "bi-014-r1", text: "Current referral fee = $9; net profit = $23" },
      { id: "bi-014-r2", text: "Net margin = 38.3%" },
      { id: "bi-014-r3", text: "At 17% fee, net profit = $21.80" },
      { id: "bi-014-r4", text: "Notes fee hike is on revenue, so its impact on profit is amplified" }
    ]
  },

  {
    id: "bi-015",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: ["analogical-reasoning", "case-analysis"],
    difficulty: "medium",
    question: "Blockbuster had 60 million customers and 9,000 stores in 2004. Netflix launched DVD-by-mail at $15.99/month (unlimited) vs. Blockbuster's average customer spending of $7/visit and 2 visits/month. Why did customers switch, even though Netflix was initially more expensive on paper? What does this reveal about how incumbents misread disruption?",
    context: "Blockbuster 2004: 60M customers, 9,000 stores, avg customer = 2 visits/month × $7/visit = $14/month. Netflix: $15.99/month unlimited DVD-by-mail. Late fees generated ~$800M/year for Blockbuster.",
    hints: [
      "Compare total cost of ownership — not just price per transaction, but including late fees, travel time, and availability.",
      "Blockbuster's $14/month headline ignores late fees. Netflix's $15.99 included no late fees and no travel. What is the true all-in cost comparison?",
      "With late fees: Blockbuster effective cost = $14 + (avg late fee per customer). Netflix = $15.99 flat. No late fees + convenience could make Netflix cheaper and better. Incumbents optimized around a profitable friction (late fees) that customers hated."
    ],
    referenceSolution: {
      approach: "Reframe the price comparison by including all customer costs (late fees, travel time, opportunity cost), then analyze why Blockbuster couldn't respond.",
      reasoning: "Headline price: Blockbuster $14/month vs. Netflix $15.99 — Netflix appears $2/month more expensive. But Blockbuster earned $800M/year in late fees from 60M customers = ~$13.33/customer/year = ~$1.11/customer/month in average late fees. True avg Blockbuster cost ≈ $15.11/month, nearly equal to Netflix. Add: travel time (2 trips × ~20 min = 40 min/month), gas/parking, limited selection, and out-of-stock titles — and Netflix was clearly better at a comparable price. Why incumbents misread disruption: Blockbuster's entire business model was optimized around the store and late fees. Their $800M late-fee revenue was 15-20% of total revenue — eliminating it was unthinkable. Their 9,000 stores were both an asset (convenience) and a $1B+ fixed cost liability. Netflix's model had no stores and no late fees — lower fixed costs, better customer experience. Blockbuster tried to copy Netflix in 2004 but was paralyzed by the need to protect existing stores and revenue streams.",
      commonMistakes: "Only comparing nominal prices without late fees. Not recognizing that Blockbuster's core revenue stream was the friction that customers hated. Treating 'more expensive' at face value.",
      alternatives: "Jobs-to-be-done framing: customers hired Blockbuster to 'watch a movie tonight' — but the job included frustration (late fees, empty shelves). Netflix hired for 'watch what you want when you want' — a better job completion at similar cost."
    },
    rubric: [
      { id: "bi-015-r1", text: "Calculates late fee impact: $800M / 60M customers ≈ $13.33/year ≈ $1.11/month" },
      { id: "bi-015-r2", text: "Shows all-in Blockbuster cost ≈ Netflix price when late fees are included" },
      { id: "bi-015-r3", text: "Identifies late fees as Blockbuster's Achilles' heel (core revenue + customer pain point)" },
      { id: "bi-015-r4", text: "Explains the structural barrier to Blockbuster copying Netflix (store fixed costs, late fee revenue)" },
      { id: "bi-015-r5", text: "Draws broader insight about incumbent blindspot: optimizing profitable frictions" }
    ]
  },

  // ── COMPETITIVE ANALYSIS (bi-016 to bi-020) ───────────────────────────────

  {
    id: "bi-016",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "Two airlines serve the same route. Airline A charges $250 and fills 85% of seats on a 180-seat plane. Airline B charges $180 and fills 95% of seats on a 160-seat plane. Which airline generates more revenue per flight, and which has better pricing power?",
    context: "Airline A: $250/seat, 180-seat plane, 85% load factor. Airline B: $180/seat, 160-seat plane, 95% load factor.",
    hints: [
      "Calculate revenue per flight for each: price × seats × load factor.",
      "Airline A: $250 × 180 × 0.85 = ? Airline B: $180 × 160 × 0.95 = ?",
      "Airline A revenue = $38,250. Airline B revenue = $27,360. Airline A generates 40% more revenue despite a lower load factor."
    ],
    referenceSolution: {
      approach: "Compute revenue per flight = price × capacity × load factor, then compare pricing power.",
      reasoning: "Airline A: $250 × 180 × 0.85 = $250 × 153 = $38,250 per flight. Airline B: $180 × 160 × 0.95 = $180 × 152 = $27,360 per flight. Airline A generates $10,890 (40%) more revenue per flight. Pricing power analysis: Airline A charges 39% more ($250 vs. $180) while carrying roughly the same number of passengers (153 vs. 152). This implies A has significant pricing power — customers are willing to pay 39% more without substantially fewer bookings. B achieves near-perfect load factor but leaves revenue on the table. B could likely raise prices by 10-15% (to $198-$207) and still maintain high occupancy, increasing revenue closer to $30,000+.",
      commonMistakes: "Comparing load factor instead of revenue. Concluding B is 'more efficient' because of higher load factor. Not noting that A's revenue advantage comes entirely from pricing, not volume.",
      alternatives: "Revenue per seat (yield): A = $38,250 / 153 passengers = $250 (just the fare, trivially). Revenue per available seat: A = $38,250 / 180 = $212.50. B = $27,360 / 160 = $171. RASM (revenue per available seat mile) is the industry standard metric."
    },
    rubric: [
      { id: "bi-016-r1", text: "Airline A revenue per flight = $38,250" },
      { id: "bi-016-r2", text: "Airline B revenue per flight = $27,360" },
      { id: "bi-016-r3", text: "Both carry roughly the same number of passengers (153 vs. 152)" },
      { id: "bi-016-r4", text: "Concludes A has stronger pricing power despite lower load factor" }
    ]
  },

  {
    id: "bi-017",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "A new burger chain opens 200 meters from an established McDonald's. The McDonald's location serves 400 customers/day. In month 1, the new chain takes 20% of McDonald's customers while adding 30 new customers from people who previously didn't visit either. What are the net customer counts for each after month 1?",
    context: "McDonald's baseline: 400 customers/day. New chain opens: steals 20% of McDonald's customers + attracts 30 new customers to the area.",
    hints: [
      "Calculate how many McDonald's customers switch to the new chain, then compute what's left.",
      "Stolen customers = 400 × 20% = 80. McDonald's remaining = 400 - 80 = 320. New chain = 80 stolen + 30 new.",
      "McDonald's: 320/day. New chain: 110/day. New chain expanded the total market: 400 → 430 customers/day total."
    ],
    referenceSolution: {
      approach: "Track customer flows: stolen customers shift from McDonald's to new chain; new customers are additive to the market.",
      reasoning: "McDonald's loses 20% of 400 = 80 customers. McDonald's new count = 400 - 80 = 320 customers/day. New chain gets 80 stolen + 30 new customers = 110 customers/day. Total market grows from 400 to 430 customers/day (+7.5% market expansion). McDonald's still commands 320/430 = 74% of the local market. The new entrant has 26% share on day one — significant, but McDonald's remains dominant. Key insight: the new chain both diverted existing customers (competitive effect) and created new demand (market expansion effect). The 30 new customers suggest some people weren't going to either previously — perhaps the new chain's menu or brand draws a different segment.",
      commonMistakes: "Double-counting stolen customers. Forgetting that the 30 new customers are net new to the market. Not computing market shares after the entry.",
      alternatives: "If the competitive effect worsens over time (e.g., 40% diversion by month 6), McDonald's drops to 240/day while new chain grows to 190. Market share flips significantly."
    },
    rubric: [
      { id: "bi-017-r1", text: "McDonald's loses 80 customers (20% of 400)" },
      { id: "bi-017-r2", text: "McDonald's month-1 count = 320/day" },
      { id: "bi-017-r3", text: "New chain = 80 + 30 = 110/day" },
      { id: "bi-017-r4", text: "Notes total market expanded from 400 to 430 (30 new customers)" }
    ]
  },

  {
    id: "bi-018",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: ["mece-decomposition"],
    difficulty: "easy",
    question: "You are analyzing two competing cloud storage services. Service A has 50 million users, $2/user/month ARPU, 5% monthly churn, and 8% monthly new user growth. Service B has 20 million users, $4/user/month ARPU, 2% monthly churn, and 4% monthly new user growth. Which service has a stronger competitive position, and why?",
    context: "Service A: 50M users, $2/user/month, 5% monthly churn, 8% monthly growth. Service B: 20M users, $4/user/month, 2% monthly churn, 4% monthly growth.",
    hints: [
      "Compare monthly revenue, net growth rate (growth minus churn), and implied LTV for each service.",
      "Net growth: A = 8% - 5% = 3%/month. B = 4% - 2% = 2%/month. LTV: A = $2 / 5% = $40. B = $4 / 2% = $200.",
      "A is larger and faster growing in absolute terms, but B's LTV is 5× higher and churn is 60% lower. B retains customers better — stronger product-market fit signal."
    ],
    referenceSolution: {
      approach: "Compare services on revenue, net growth rate, LTV, and churn as independent indicators of competitive position.",
      reasoning: "Monthly revenue: A = 50M × $2 = $100M. B = 20M × $4 = $80M. Service A earns 25% more revenue. Net monthly growth rate: A = 8% - 5% = 3%/month. B = 4% - 2% = 2%/month. A is growing faster in net terms. LTV = ARPU / churn rate: A = $2 / 0.05 = $40. B = $4 / 0.02 = $200. Service B's LTV is 5× higher. Interpretation: Service A has scale and raw growth, but 5% monthly churn is high (loses 46% of users annually). Service B has a deeply loyal base that pays 2× more and churns 60% less. B's competitive moat is stronger (high switching costs, engaged users), even though A is currently larger. If growth rates persist, A grows to 50M × 1.03^12 = ~71M users/year and B grows to 20M × 1.02^12 = ~25.4M — A remains larger, but B's economics are superior.",
      commonMistakes: "Declaring A the winner purely based on revenue or user count. Not computing LTV. Missing the churn-adjusted growth rate.",
      alternatives: "A's annual churn = ~46% (1 - (1-0.05)^12), meaning it replaces nearly half its user base each year — a treadmill. B's annual churn = ~21%. B's retention is fundamentally healthier."
    },
    rubric: [
      { id: "bi-018-r1", text: "Monthly revenue: A = $100M, B = $80M" },
      { id: "bi-018-r2", text: "Net growth rate: A = 3%/month, B = 2%/month" },
      { id: "bi-018-r3", text: "LTV: A = $40, B = $200 (5× higher for B)" },
      { id: "bi-018-r4", text: "Concludes B has stronger competitive moat despite smaller size" },
      { id: "bi-018-r5", text: "Notes A's high churn as a structural weakness (treadmill effect)" }
    ]
  },

  {
    id: "bi-019",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: [],
    difficulty: "easy",
    question: "A pharmacy chain has 3,000 locations. A mail-order pharmacy startup claims to offer the same drugs at 15% lower prices with 2-day delivery. What are the incumbent's defensible advantages, and under what conditions should it view the startup as a genuine threat?",
    context: "Incumbent: 3,000 pharmacy locations, immediate fulfillment, pharmacist consultations, insurance relationships, drive-through pickup. Startup: mail-order, 15% cheaper, 2-day delivery, no brick-and-mortar.",
    hints: [
      "Think about which customer segments value each advantage — not all pharmacy customers are the same.",
      "For chronic medication patients, 2-day delivery and 15% savings matter most. For acute prescriptions (antibiotics, pain relief), same-day access matters most.",
      "Chronic medications are the vulnerability: 30-60% of prescriptions are maintenance drugs where the startup's model is clearly superior. Acute care and emergency fills are the incumbent's defensible ground."
    ],
    referenceSolution: {
      approach: "Segment the customer base by prescription type and urgency, then map which provider has advantage in each segment.",
      reasoning: "Incumbent advantages: (1) Immediate fulfillment — critical for acute medications (antibiotics, pain relief, emergency fills). (2) Pharmacist face-to-face consultation — medication counseling, drug interaction checks. (3) Insurance/PBM relationships — complex billing, prior authorizations. (4) Walk-in convenience for unplanned needs. (5) Controlled substance fulfillment (state regulations often require in-person). Startup advantages: (1) 15% cost savings on all maintenance medications. (2) 2-day delivery is fine for 30-day refills ordered in advance. (3) No geographic constraint. Threat conditions: The startup is a genuine threat if: chronic (maintenance) medication patients represent >50% of the incumbent's script volume and revenue (true — ~70-80% of US prescriptions are maintenance drugs). Mail order already has 15-20% of the prescription market. Startup can integrate PBM/insurance billing. The incumbent should launch its own mail-order service (most large chains have) and ensure in-store pharmacists offer value-added services that mail-order cannot.",
      commonMistakes: "Treating all prescriptions as equivalent. Dismissing the startup because incumbents have brand/scale. Not segmenting by acute vs. chronic medications.",
      alternatives: "CVS launched CVS Caremark precisely to compete in the mail-order channel. Walgreens acquired specialty pharmacies. The response is to bifurcate the model, not defend the old one."
    },
    rubric: [
      { id: "bi-019-r1", text: "Identifies acute vs. chronic medication as the key segmentation" },
      { id: "bi-019-r2", text: "Lists incumbent's defensible advantages: immediate fulfillment, consultations, controlled substances" },
      { id: "bi-019-r3", text: "Recognizes chronic maintenance drugs (~70-80% of scripts) as the vulnerability" },
      { id: "bi-019-r4", text: "States conditions under which startup is a genuine threat (insurance integration, chronic-heavy mix)" }
    ]
  },

  {
    id: "bi-020",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: ["hypothesis-trees", "structured-argumentation"],
    difficulty: "medium",
    question: "Spotify has 600 million MAU and 220 million paid subscribers. Apple Music has 100 million paid subscribers. Both charge ~$11/month. Spotify's gross margin is ~27%, Apple Music's estimated gross margin is ~5% (Apple uses music as a device ecosystem driver). What are the strategic implications of this margin difference for a potential new entrant?",
    context: "Spotify: 600M MAU, 220M paid subscribers, $11/month, ~27% gross margin. Apple Music: 100M paid subscribers, ~$11/month, ~5% gross margin. Apple treats music as an ecosystem driver for $400+ hardware.",
    hints: [
      "Calculate annual revenue and gross profit for each competitor. Then think about what each company can afford to spend and why.",
      "Spotify gross profit: 220M × $11 × 12 × 27% ≈ $7.8B revenue × 27% = $2.1B. Apple Music gross profit: 100M × $11 × 12 × 5% = ~$660M. Apple can sustain this because music drives iPhone sales.",
      "A new entrant competing on price faces Spotify's scale and Apple's willingness to price at near-cost. The only viable entry is a differentiated niche — hi-fi audio, podcasters, live events — not head-on competition."
    ],
    referenceSolution: {
      approach: "Quantify each competitor's economics, identify their strategic motivations, then map the competitive threat landscape for a new entrant.",
      reasoning: "Spotify annual revenue = 220M × $11 × 12 = $29.0B. Gross profit = $29.0B × 27% = $7.8B. Apple Music annual revenue = 100M × $11 × 12 = $13.2B. Gross profit = $13.2B × 5% = $660M. Apple's music business is effectively a loss-leader for iPhone ($400-$1,200). Apple can sustain 5% gross margin indefinitely because each retained iPhone user is worth hundreds of dollars in hardware margin. A new entrant's strategic dilemma: (1) Competing on price: Spotify can fund losses from investor capital; Apple doesn't care about music profitability. Both can price below cost longer than a new entrant. (2) Competing on content: Spotify has 100M+ tracks and exclusive podcasts; Apple has deep label relationships. Barriers are enormous. (3) Viable niche entry: Hi-fi audio (Tidal, Amazon Music HD), creator monetization tools, live performance integration, or genre-specific platforms (e.g., classical, jazz). The lesson: when an incumbent is loss-leading and a second incumbent is cross-subsidizing, head-on competition is nearly impossible. Margin analysis reveals the structural barrier.",
      commonMistakes: "Ignoring that Apple subsidizes music with hardware margins. Calculating Spotify's margin without contextualizing against Apple's motivation. Proposing head-on price competition without acknowledging the asymmetric financial positions.",
      alternatives: "Amazon Music follows a similar strategy (bundled with Prime at near-zero incremental cost). Three of the four major streaming services have cross-subsidized economics — the market is structurally hostile to pure-play new entrants."
    },
    rubric: [
      { id: "bi-020-r1", text: "Spotify gross profit ≈ $7.8B; Apple Music gross profit ≈ $660M" },
      { id: "bi-020-r2", text: "Identifies Apple's cross-subsidy from hardware as key asymmetry" },
      { id: "bi-020-r3", text: "Concludes head-on price competition is unviable against these two" },
      { id: "bi-020-r4", text: "Proposes a differentiated niche entry strategy" },
      { id: "bi-020-r5", text: "Draws the structural lesson: margin analysis reveals competitive moat depth" }
    ]
  },

  // ── BUSINESS MODEL EVALUATION (bi-021 to bi-025) ──────────────────────────

  {
    id: "bi-021",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: [],
    difficulty: "easy",
    question: "A newsletter has 100,000 subscribers. It monetizes through sponsorships at $50 CPM (cost per thousand opens). The open rate is 35%. The newsletter sends 4 issues/month. What is the maximum monthly sponsorship revenue if it sells one sponsor slot per issue?",
    context: "Subscribers: 100,000. Open rate: 35%. Sponsorship rate: $50 CPM (per 1,000 opens). Frequency: 4 issues/month. Sponsor slots: 1 per issue.",
    hints: [
      "CPM is based on opens, not total subscribers. Calculate opens per issue first.",
      "Opens per issue = 100,000 × 35% = 35,000. Sponsorship revenue per issue = (35,000 / 1,000) × $50.",
      "Revenue per issue = 35 × $50 = $1,750. Monthly revenue = $1,750 × 4 = $7,000."
    ],
    referenceSolution: {
      approach: "Convert subscribers to opens using open rate, apply CPM rate, then multiply by frequency.",
      reasoning: "Opens per issue = 100,000 × 0.35 = 35,000. CPM revenue per issue = (35,000 / 1,000) × $50 = 35 × $50 = $1,750. Monthly revenue (4 issues) = $1,750 × 4 = $7,000. Annual revenue = $7,000 × 12 = $84,000. Revenue per subscriber = $84,000 / 100,000 = $0.84/subscriber/year. To improve revenue, the newsletter could: (1) Add more sponsor slots per issue (2× = $14,000/month), (2) Move to cost-per-click pricing if CTR is high, (3) Add a paid tier — even 2% conversion at $10/month = $2,000/month, (4) Grow subscriber base.",
      commonMistakes: "Applying CPM to total subscribers instead of opens. Forgetting to multiply by number of issues. Confusing CPM (per thousand) with flat rate.",
      alternatives: "If the newsletter had 5 sponsor slots at $50 CPM: monthly revenue = $1,750 × 5 × 4 = $35,000. Slot count is the largest lever after list size."
    },
    rubric: [
      { id: "bi-021-r1", text: "Opens per issue = 35,000 (100,000 × 35%)" },
      { id: "bi-021-r2", text: "Revenue per issue = $1,750 (35 × $50)" },
      { id: "bi-021-r3", text: "Monthly revenue = $7,000 (4 issues)" },
      { id: "bi-021-r4", text: "Identifies at least one lever to increase revenue (slots, paid tier, growth)" }
    ]
  },

  {
    id: "bi-022",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: ["fermi-problems"],
    difficulty: "easy",
    question: "A parking lot business buys a 50-space lot for $2M. It charges $15/day and the lot is 60% occupied on weekdays (Mon-Fri) and 30% occupied on weekends. Operating costs (attendant, lighting, maintenance) are $3,000/month. What is the annual net profit, and what is the simple payback period on the $2M investment?",
    context: "Spaces: 50. Weekday rate: $15/day, 60% occupancy. Weekend rate: $15/day, 30% occupancy. Monthly operating costs: $3,000. Purchase price: $2,000,000.",
    hints: [
      "Calculate revenue separately for weekdays and weekends, then combine for annual revenue.",
      "Weekday revenue: 50 spaces × 60% × $15 × 261 weekdays/year. Weekend revenue: 50 spaces × 30% × $15 × 104 weekend days/year.",
      "Weekday: $117,450. Weekend: $23,400. Total annual revenue: $140,850. Annual costs: $36,000. Net profit: $104,850. Payback: $2M / $104,850 ≈ 19 years."
    ],
    referenceSolution: {
      approach: "Calculate daily revenue for each day type, multiply by annual day count, subtract operating costs, then compute payback period.",
      reasoning: "Weekdays per year: 52 weeks × 5 = 260 days (approx. 261 for slight variation; use 260). Weekday daily revenue = 50 × 0.60 × $15 = $450/day. Annual weekday revenue = $450 × 260 = $117,000. Weekend days: 52 × 2 = 104 days. Weekend daily revenue = 50 × 0.30 × $15 = $225/day. Annual weekend revenue = $225 × 104 = $23,400. Total annual revenue = $117,000 + $23,400 = $140,400. Annual operating costs = $3,000 × 12 = $36,000. Annual net profit = $140,400 - $36,000 = $104,400. Payback period = $2,000,000 / $104,400 = 19.2 years. This is a very long payback — parking lots work as real estate plays (land appreciation) rather than pure cash-flow investments. The 5.2% cash-on-cash return ($104K / $2M) is below most real estate benchmarks of 7-10%.",
      commonMistakes: "Not separating weekday and weekend occupancy. Forgetting to multiply by days in a year. Not computing payback period. Missing the insight about real estate appreciation.",
      alternatives: "If weekend occupancy increased to 60% (special events, pricing strategy): weekend revenue = $450 × 104 = $46,800. New total = $163,800. Net profit = $127,800. Payback = 15.7 years — still long but better."
    },
    rubric: [
      { id: "bi-022-r1", text: "Weekday annual revenue ≈ $117,000" },
      { id: "bi-022-r2", text: "Weekend annual revenue ≈ $23,400" },
      { id: "bi-022-r3", text: "Annual net profit ≈ $104,400" },
      { id: "bi-022-r4", text: "Payback period ≈ 19 years" },
      { id: "bi-022-r5", text: "Interprets this as a real estate appreciation play rather than pure cash-flow investment" }
    ]
  },

  {
    id: "bi-023",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: ["sanity-checks"],
    difficulty: "easy",
    question: "A B2B software company has three pricing tiers: Starter ($99/month, avg 50 users), Growth ($499/month, avg 200 users), and Enterprise ($2,000/month, avg 1,000 users). They have 1,000 Starter, 200 Growth, and 30 Enterprise customers. What is the MRR? What percentage of MRR comes from Enterprise, and what is the ARPU per user across all tiers?",
    context: "Tiers: Starter ($99/mo, 50 users avg), Growth ($499/mo, 200 users avg), Enterprise ($2,000/mo, 1,000 users avg). Customers: 1,000 Starter, 200 Growth, 30 Enterprise.",
    hints: [
      "Calculate MRR for each tier separately: number of customers × monthly price. Sum them for total MRR.",
      "Starter MRR = 1,000 × $99 = $99,000. Growth MRR = 200 × $499 = $99,800. Enterprise MRR = 30 × $2,000 = $60,000.",
      "Total MRR = $258,800. Enterprise share = $60,000 / $258,800 = 23%. Total users = 50K + 40K + 30K = 120K. ARPU = $258,800 / 120,000 ≈ $2.16/user/month."
    ],
    referenceSolution: {
      approach: "Calculate per-tier MRR, sum to total, then compute Enterprise share and user-weighted ARPU.",
      reasoning: "Starter MRR = 1,000 × $99 = $99,000. Growth MRR = 200 × $499 = $99,800. Enterprise MRR = 30 × $2,000 = $60,000. Total MRR = $258,800. Enterprise revenue share = $60,000 / $258,800 = 23.2%. Total users: Starter = 1,000 × 50 = 50,000; Growth = 200 × 200 = 40,000; Enterprise = 30 × 1,000 = 30,000; Total = 120,000 users. ARPU = $258,800 / 120,000 = $2.16/user/month. Insight: Despite only 30 Enterprise customers (2.4% of customer count), they contribute 23% of MRR. The per-user price is highest at Starter ($99/50 = $1.98/user) and lowest at Enterprise ($2,000/1,000 = $2.00/user) — minimal volume discount. The Growth tier has the worst per-user economics ($499/200 = $2.50/user — actually the highest, suggesting Growth customers pay most per user).",
      commonMistakes: "Mixing up customer count and user count. Not computing per-tier user counts. Missing the insight that Enterprise drives disproportionate revenue.",
      alternatives: "Per-user monthly price by tier: Starter $1.98, Growth $2.50, Enterprise $2.00. Growth tier customers pay the most per user — a pricing anomaly worth investigating."
    },
    rubric: [
      { id: "bi-023-r1", text: "Total MRR = $258,800 (Starter $99K + Growth $99.8K + Enterprise $60K)" },
      { id: "bi-023-r2", text: "Enterprise share of MRR = 23%" },
      { id: "bi-023-r3", text: "Total users = 120,000" },
      { id: "bi-023-r4", text: "ARPU per user ≈ $2.16/month" },
      { id: "bi-023-r5", text: "Notes Enterprise customers (2.4% of count) drive 23% of revenue — concentration insight" }
    ]
  },

  {
    id: "bi-024",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: ["decomposition-to-fundamentals"],
    difficulty: "easy",
    question: "A franchise burger chain has 1,500 locations. Corporate charges franchisees 6% royalty on gross sales plus 4% for the national ad fund. Each location averages $1.2M in annual sales. The average franchisee's net margin before royalties is 18%. What is the franchisee's actual take-home profit, and what is corporate's annual royalty revenue?",
    context: "Locations: 1,500. Avg annual sales per location: $1.2M. Royalty fee: 6% of gross sales. Ad fund fee: 4% of gross sales. Franchisee net margin before fees: 18%.",
    hints: [
      "Calculate the total fee percentage and the dollar amount charged per location per year.",
      "Total fees = 6% + 4% = 10% of $1.2M = $120,000/year per location. Franchisee profit before fees = 18% × $1.2M = $216,000.",
      "Franchisee take-home = $216,000 - $120,000 = $96,000. Net margin after fees = $96,000 / $1.2M = 8%. Corporate royalty revenue = $72,000 × 1,500 = $108M."
    ],
    referenceSolution: {
      approach: "Calculate per-location fees, subtract from pre-fee profit for franchisee take-home, then scale royalties to corporate level.",
      reasoning: "Per location annual sales: $1.2M. Royalty fee = 6% × $1.2M = $72,000. Ad fund fee = 4% × $1.2M = $48,000. Total fees = $120,000/location/year. Franchisee profit before fees = 18% × $1.2M = $216,000. Franchisee take-home profit = $216,000 - $120,000 = $96,000. Franchisee net margin after all fees = $96,000 / $1.2M = 8%. Corporate royalty revenue (6% only, ad fund is passed through to advertising) = $72,000 × 1,500 = $108M/year. If corporate collects both: $120,000 × 1,500 = $180M/year total from franchisees. The franchise model gives corporate high-margin royalty income (nearly 100% gross margin on royalties) while franchisees bear all operating risk. Franchisee's 8% net margin is typical for QSR franchises.",
      commonMistakes: "Applying fees to profit instead of gross sales. Forgetting the ad fund on top of royalty. Not distinguishing royalty revenue from ad fund pass-through.",
      alternatives: "Return on investment: if a franchisee invests $500,000 to open a location, $96,000 annual profit = 19.2% return — reasonably attractive for a lower-risk (proven brand) business."
    },
    rubric: [
      { id: "bi-024-r1", text: "Total fees = 10% × $1.2M = $120,000/location/year" },
      { id: "bi-024-r2", text: "Franchisee take-home = $96,000 (8% net margin)" },
      { id: "bi-024-r3", text: "Corporate royalty revenue = $108M/year (6% × $1.2M × 1,500)" },
      { id: "bi-024-r4", text: "Identifies franchise model as near-100% gross margin for corporate on royalties" }
    ]
  },

  {
    id: "bi-025",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: ["challenging-defaults", "multi-skill-synthesis"],
    difficulty: "medium",
    question: "A BNPL (Buy Now Pay Later) startup charges merchants 3% on each transaction and lends money to consumers at 0% interest for 4 installments over 6 weeks. The startup funds its loans at a 6% annual cost of capital. Average transaction size is $200. Default rate is 2% of loan volume. What is the net revenue per transaction, and why does the model depend critically on transaction volume rather than per-transaction margin?",
    context: "Merchant fee: 3% of transaction. Consumer interest rate: 0% (no interest charged to consumer). Funding cost: 6% annual rate. Avg transaction: $200. Default rate: 2% of loan volume. Loan duration: 6 weeks.",
    hints: [
      "Calculate the merchant fee revenue, the cost of capital for the 6-week loan, and the expected default loss per transaction.",
      "Merchant fee = 3% × $200 = $6. Funding cost for 6 weeks = 6% × (6/52) × $200 = $1.38. Default loss = 2% × $200 = $4.",
      "Net revenue = $6 - $1.38 - $4 = $0.62 per transaction. With ~$0.62 margin on $200, you need enormous volume to build a real business — the model is a volume game."
    ],
    referenceSolution: {
      approach: "Build a per-transaction P&L: merchant fee minus funding cost minus expected default loss. Then analyze the volume implications of the thin margin.",
      reasoning: "Merchant fee = 3% × $200 = $6.00. Cost of capital for a 6-week loan: 6% annual × (6/52 weeks) × $200 = 0.06 × 0.1154 × $200 = $1.38. Expected default loss = 2% × $200 = $4.00. Net revenue per transaction = $6.00 - $1.38 - $4.00 = $0.62. Net margin = $0.62 / $200 = 0.31% — extremely thin. To generate $100M in annual revenue: need $100M / $0.62 = 161 million transactions/year, or at $200 average: $32.2 billion in GMV. This is why BNPL players (Affirm, Klarna, Afterpay) are valued on GMV multiples and require massive transaction volumes. Volume sensitivity: if default rate rises to 3% (common in economic downturns): default loss = $6, net revenue = $6 - $1.38 - $6 = -$1.38 — the transaction is underwater. The model has almost no margin buffer against rising defaults, which is its core risk.",
      commonMistakes: "Forgetting the funding cost (cost of capital to lend money). Using annual cost of capital without prorating for the 6-week loan period. Not recognizing how thin the margin is until you compute it.",
      alternatives: "Late fees are a major revenue lever: if 15% of borrowers pay late at a $10 fee, that adds $1.50/transaction expected value. Net revenue rises to $2.12/transaction — 3.4× improvement from one fee. This is why BNPL companies face regulatory scrutiny over late fees."
    },
    rubric: [
      { id: "bi-025-r1", text: "Merchant fee = $6 per transaction" },
      { id: "bi-025-r2", text: "Funding cost = $1.38 (6% annual prorated for 6 weeks)" },
      { id: "bi-025-r3", text: "Default loss = $4.00 (2% × $200)" },
      { id: "bi-025-r4", text: "Net revenue = $0.62 per transaction (0.31% margin)" },
      { id: "bi-025-r5", text: "Explains why this requires massive GMV scale to generate meaningful revenue" },
      { id: "bi-025-r6", text: "Identifies default rate sensitivity as the key structural risk" }
    ]
  },

];
