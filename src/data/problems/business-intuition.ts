import type { Problem } from '@/types';

export const businessIntuitionProblems: Problem[] = [

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

  // ── UNIT ECONOMICS (bi-026 to bi-030) ─────────────────────────────────────

  {
    id: "bi-026",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: ["sensitivity-analysis"],
    difficulty: "medium",
    question: "A B2B SaaS company has monthly churn of 1.5% but also expands existing accounts — net revenue retention (NRR) is 108%. CAC is $4,200 and average MRR per customer is $350. Using NRR-adjusted LTV, is the unit economics healthy, and how sensitive is the conclusion to a 2% monthly churn scenario?",
    context: "Monthly churn: 1.5%. Net revenue retention (NRR): 108% annually. CAC: $4,200. Average MRR per customer: $350. NRR reflects expansion revenue offsetting churn on a net basis.",
    hints: [
      "Standard LTV uses 1/churn × MRR, but NRR > 100% means existing customers grow over time — you need to incorporate that expansion into LTV.",
      "One approach: annualize NRR to a monthly growth factor. Monthly NRR factor ≈ 108%^(1/12) ≈ 1.0064. Effective monthly revenue growth net of churn changes LTV materially.",
      "Adjusted LTV = MRR / (monthly churn − monthly expansion rate). Monthly expansion ≈ 0.64%, churn = 1.5%, so net = 0.86%. Adjusted LTV = $350 / 0.0086 ≈ $40,700. LTV:CAC ≈ 9.7×. At 2% churn: net = 2% − 0.64% = 1.36%, LTV = $350 / 0.0136 ≈ $25,700, LTV:CAC ≈ 6.1× — still healthy but materially lower."
    ],
    referenceSolution: {
      approach: "Convert NRR to a monthly expansion rate, then compute LTV as MRR divided by (gross churn − net monthly expansion). Run the same model at 2% churn for sensitivity.",
      reasoning: "Annual NRR of 108% implies monthly net revenue growth of 108%^(1/12) − 1 ≈ 0.643%. Standard LTV = 1/churn × MRR = $350/0.015 = $23,333, LTV:CAC = 5.6×. But with expansion, effective net churn = 1.5% − 0.643% = 0.857%. Adjusted LTV = $350 / 0.00857 ≈ $40,840. LTV:CAC = $40,840 / $4,200 ≈ 9.7× — very healthy. Sensitivity at 2% gross churn: net churn = 2% − 0.643% = 1.357%. LTV = $350 / 0.01357 ≈ $25,790. LTV:CAC ≈ 6.1×. The business remains healthy under the stress scenario. Key takeaway: NRR > 100% is a powerful LTV amplifier; ignoring expansion revenue understates LTV by ~75% here.",
      commonMistakes: "Using gross churn without netting out expansion. Computing LTV:CAC without adjusting for NRR and then concluding 5.6× is the right answer. Not converting annual NRR to a monthly rate before subtracting from monthly churn.",
      alternatives: "Alternatively use cohort-based LTV: project monthly revenue for each cohort applying monthly churn and 0.643% expansion, discount at a WACC of ~10% annually, and sum present values. This gives a more precise but more complex figure in the same ballpark."
    },
    rubric: [
      { id: "bi-026-r1", text: "Converts annual NRR 108% to monthly expansion rate ~0.64%" },
      { id: "bi-026-r2", text: "Computes adjusted LTV using net churn (gross churn − expansion rate)" },
      { id: "bi-026-r3", text: "Adjusted LTV:CAC ≈ 9.7× and identifies this as healthy" },
      { id: "bi-026-r4", text: "Correctly models 2% churn scenario and arrives at LTV:CAC ≈ 6.1×" },
      { id: "bi-026-r5", text: "Articulates why ignoring NRR materially understates LTV" }
    ]
  },

  {
    id: "bi-027",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: [],
    difficulty: "medium",
    question: "A food delivery marketplace pays couriers $8 per delivery and charges restaurants a 25% commission. Average order value is $32. The platform also offers customers a $5 first-order discount that costs the platform directly. What is the contribution margin per order, and what order volume is needed to cover $400,000 in monthly fixed costs?",
    context: "Commission to platform: 25% of $32 = $8. Courier payment: $8/delivery. First-order discount cost (amortized): assume 20% of orders are first-time users, so discount cost per order = $5 × 20% = $1. Monthly fixed costs: $400,000.",
    hints: [
      "Revenue per order comes from the commission. Variable costs include the courier payout and the amortized discount. Work out the net margin per order.",
      "Revenue per order = 25% × $32 = $8. Variable costs = $8 (courier) + $1 (amortized discount) = $9. Contribution margin per order = $8 − $9.",
      "Contribution margin = −$1 per order — the platform loses money on every order at current economics. To cover $400K fixed costs at −$1/order, you'd need negative volume, which is nonsensical. The platform needs to either raise commission, cut courier rates, or reduce discounting."
    ],
    referenceSolution: {
      approach: "Compute revenue and variable cost per order, derive contribution margin, then divide fixed costs by contribution margin to find break-even volume.",
      reasoning: "Revenue per order = 25% × $32 = $8.00. Variable costs: courier = $8.00, amortized first-order discount = $5 × 20% = $1.00. Total variable cost = $9.00. Contribution margin = $8.00 − $9.00 = −$1.00 per order. With negative contribution margin, no order volume covers fixed costs — the business structurally loses money at the unit level before fixed costs. This is the classic 'grow into profitability' trap: adding volume makes losses worse, not better. To fix: raise commission to 30% (revenue = $9.60, CM = +$0.60), reduce courier cost, or reduce first-order discount frequency. At 30% commission: break-even = $400,000 / $0.60 = ~667,000 orders/month.",
      commonMistakes: "Forgetting to amortize the discount across all orders (not just new users). Treating restaurant commission as the full order value rather than 25% of it. Not identifying the negative contribution margin as a structural business model problem.",
      alternatives: "A useful reframe: contribution margin per order at 25% commission = ($8 commission − $8 courier) = $0 before discounts. Every discount dollar comes out of an already zero-margin unit. The business only works if LTV from repeat customers offsets the negative first-order contribution."
    },
    rubric: [
      { id: "bi-027-r1", text: "Revenue per order correctly calculated as $8 (25% × $32)" },
      { id: "bi-027-r2", text: "Amortized discount cost = $1/order (20% × $5)" },
      { id: "bi-027-r3", text: "Identifies contribution margin as −$1 per order" },
      { id: "bi-027-r4", text: "Recognizes break-even volume is impossible at current economics" },
      { id: "bi-027-r5", text: "Proposes a concrete fix and recalculates break-even volume" }
    ]
  },

  {
    id: "bi-028",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: ["mental-math", "estimation-chains"],
    difficulty: "hard",
    question: "A consumer fintech lends $1,000 payday loans at 15% monthly interest (flat) with a 2-week loan term. Default rate is 8%. The cost of funds is 6% annually. Servicing cost per loan is $12. What is the net profit per loan, and what annualized ROE does this represent if equity capital covers 10% of the loan book?",
    context: "Loan principal: $1,000. Monthly interest rate (flat): 15%, so 2-week interest = 7.5%. Default rate: 8% (assume full principal lost on default). Cost of funds: 6% p.a. = 0.5% per month = 0.25% per 2-week period. Servicing cost: $12 per loan. Equity cushion: 10% of principal = $100 per loan.",
    hints: [
      "Revenue per loan = interest charged × (1 − default rate). Costs = cost of funds for the period + servicing cost + expected default loss (principal × default rate).",
      "Interest revenue = $1,000 × 7.5% × (1 − 8%) = $69. Cost of funds = $1,000 × 0.25% = $2.50. Expected principal loss = $1,000 × 8% = $80. Servicing = $12. Net = $69 − $2.50 − $80 − $12.",
      "Net profit per loan = $69 − $94.50 = −$25.50. The business loses money at 8% default. To break even, default rate must be below roughly 5.6%. ROE calculation: if it were profitable, annualize the per-loan profit over 26 two-week cycles per year and divide by $100 equity."
    ],
    referenceSolution: {
      approach: "Build a per-loan P&L: interest revenue net of defaults, minus cost of funds, minus servicing, minus expected default loss. Then annualize profit and divide by equity capital per loan for ROE.",
      reasoning: "Interest revenue (performing loans): $1,000 × 7.5% = $75. Adjusted for defaults (8% don't pay): $75 × (1 − 0.08) = $69. Expected principal loss: $1,000 × 0.08 = $80. Cost of funds for 2 weeks: $1,000 × (6%/26) = $1,000 × 0.2308% ≈ $2.31. Servicing: $12. Total costs: $80 + $2.31 + $12 = $94.31. Net profit per loan: $69 − $94.31 = −$25.31. The loan is unprofitable at 8% default. Break-even default rate: Revenue at d default = $75(1−d) − $1,000d − $14.31 = 0 → $75 − $75d − $1,000d = $14.31 → $1,075d = $60.69 → d ≈ 5.6%. ROE framing: if the business ran at 5% default (net profit ≈ $75×0.95 − $50 − $14.31 = $71.25 − $64.31 = $6.94 per loan), annualized over 26 cycles = $6.94 × 26 = $180.44 per year on $100 equity = 180% ROE — extraordinarily high if defaults are controlled, but a knife's edge business.",
      commonMistakes: "Applying interest rate to full principal without adjusting for default probability. Forgetting to include principal loss as a cost (only treating defaults as lost interest). Using monthly cost of funds rather than bi-weekly. Not annualizing for ROE.",
      alternatives: "Approach via loan loss reserve: regulators typically require reserving the full expected loss ($80) upfront, which makes the economics even more extreme. This also explains why payday lenders require high rates — the default economics dominate all other costs."
    },
    rubric: [
      { id: "bi-028-r1", text: "Interest revenue adjusted for default rate = $69" },
      { id: "bi-028-r2", text: "Expected principal loss correctly included as $80 cost" },
      { id: "bi-028-r3", text: "Net loss per loan ≈ −$25 at 8% default" },
      { id: "bi-028-r4", text: "Derives break-even default rate ≈ 5.6%" },
      { id: "bi-028-r5", text: "Correctly annualizes per-loan profit and calculates ROE on equity capital" },
      { id: "bi-028-r6", text: "Articulates the knife's-edge nature of payday lending economics" }
    ]
  },

  {
    id: "bi-029",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: ["mece-decomposition"],
    difficulty: "hard",
    question: "A SaaS company claims its business is healthy: 'LTV:CAC of 4×, payback period of 18 months, NRR of 95%.' Identify the internal inconsistency in these three metrics and explain what the true picture implies.",
    context: "Stated metrics: LTV:CAC = 4×. Payback period = 18 months. NRR = 95% (net revenue retention — accounts expand/contract net of churn on existing cohorts). Assume gross margin of 70%.",
    hints: [
      "Payback period = CAC / (MRR × gross margin). If payback is 18 months, work backwards to find the implied LTV given the churn implied by NRR.",
      "NRR of 95% means annually, the existing base shrinks by 5% net — this implies significant churn. Annualized churn exceeding expansion. Work out what LTV:CAC must be if NRR = 95%.",
      "If NRR = 95%, net annual revenue retention implies monthly net churn ≈ (1 − 0.95^(1/12)) ≈ 0.427%/month net loss. LTV = MRR / 0.00427 ≈ 234 months × MRR. Payback = 18 months means CAC = 18 × MRR × 0.70 = 12.6 × MRR. LTV:CAC = (234 × MRR) / (12.6 × MRR) ≈ 18.6×, not 4×. Something is wrong — the three metrics are inconsistent unless gross margin or churn assumptions differ from stated."
    ],
    referenceSolution: {
      approach: "Use two metrics to derive the implied third, then compare against the stated third. The inconsistency reveals either a reporting error or metric manipulation.",
      reasoning: "From NRR = 95%: monthly net churn = 1 − 0.95^(1/12) ≈ 0.427%/month. LTV = MRR / net churn = MRR / 0.00427 ≈ 234 × MRR. From payback period = 18 months at 70% gross margin: CAC = 18 × MRR × 0.70 = 12.6 × MRR. Implied LTV:CAC from NRR + payback = 234 / 12.6 ≈ 18.6×, not 4×. Alternatively: from LTV:CAC = 4× and payback = 18 months, implied churn = 1/(4 × CAC / MRR) = 1/(4 × 18 × 0.70) ≈ 1/50.4 = ~2%/month, which implies NRR ≈ (1−0.02)^12 ≈ 79%, far below 95%. The three metrics are mutually inconsistent. Likely explanation: LTV:CAC of 4× was calculated with a high gross churn input that doesn't match the NRR number, or the payback period excludes certain CAC components. This is a common red flag in fundraising decks — metrics cherry-picked from different calculation methods.",
      commonMistakes: "Accepting all three metrics at face value and calling the business healthy. Not cross-checking internal consistency. Failing to work backwards from two metrics to derive the implied third.",
      alternatives: "A simpler inconsistency check: if payback = 18 months and LTV:CAC = 4×, then LTV = 4 × CAC = 4 × 18-month gross profit = 72 months of gross profit, implying average customer life = 72 / 0.70 ≈ 103 months = ~8.6 years. At NRR of 95%, average retention = 1/0.0427 ≈ 23 months. 103 months vs. 23 months — a 4.5× discrepancy."
    },
    rubric: [
      { id: "bi-029-r1", text: "Converts NRR 95% to monthly net churn rate ≈ 0.427%" },
      { id: "bi-029-r2", text: "Derives LTV from NRR-implied churn and compares to stated LTV:CAC" },
      { id: "bi-029-r3", text: "Uses payback period to infer CAC in MRR multiples" },
      { id: "bi-029-r4", text: "Clearly identifies the internal inconsistency across all three metrics" },
      { id: "bi-029-r5", text: "Proposes a plausible explanation for the discrepancy (e.g., different churn definitions)" }
    ]
  },

  {
    id: "bi-030",
    trackId: "business-intuition",
    subSkill: "unit-economics",
    secondarySkills: ["first-principles-analysis"],
    difficulty: "hard",
    question: "A direct-to-consumer mattress brand has: AOV $900, gross margin 45%, blended CAC $180, repeat purchase rate of 15% within 3 years, and a referral rate of 0.3 referred customers per buyer. What is the true LTV of a customer when you include referral and repeat purchase value, and does the business have good unit economics?",
    context: "AOV: $900. Gross margin: 45%. Blended CAC: $180. Repeat purchase within 3 years: 15% probability. Referral: each customer refers 0.3 new customers on average, each with the same profile. Discount rate: 0% (simplify). Each referred customer saves the full $180 CAC.",
    hints: [
      "LTV has three components here: (1) direct gross profit from initial purchase, (2) expected gross profit from repeat purchase, (3) value of referrals (avoided CAC). Work each out separately.",
      "Direct GP = $900 × 45% = $405. Repeat GP = $405 × 15% = $60.75. Referral value = 0.3 × $180 = $54 (avoided CAC). Sum these for total LTV.",
      "Total LTV = $405 + $60.75 + $54 = $519.75. LTV:CAC = $519.75 / $180 ≈ 2.9×. Just below the 3× threshold. The referral and repeat components add 28% to direct-only LTV ($405), so they are meaningful — but not enough to make the economics clearly strong."
    ],
    referenceSolution: {
      approach: "Build a multi-component LTV model: first-order gross profit + repeat purchase expected value + referral value (CAC avoided per referred customer). Then compare total LTV to CAC.",
      reasoning: "Component 1 — initial purchase: GP = $900 × 0.45 = $405. Component 2 — repeat purchase: 15% probability × $405 GP = $60.75. Component 3 — referrals: each customer generates 0.3 new customers. Each referred customer has the same LTV profile, but the referral value to the business is the CAC saved = 0.3 × $180 = $54. (Note: referral value could also include the full LTV of the referred customer net of their own referrals — but to avoid infinite recursion, attribute only the direct CAC saving here.) Total LTV = $405 + $60.75 + $54 = $519.75. LTV:CAC = $519.75 / $180 = 2.89×. This falls just below the 3× rule of thumb for healthy direct-to-consumer. The business has marginal unit economics — viable but with little cushion for CAC inflation or margin compression. The strong referral rate (0.3) is a genuine asset: without referrals, LTV:CAC drops to ($405 + $60.75) / $180 = 2.59×.",
      commonMistakes: "Ignoring referral value entirely. Double-counting by applying the full LTV of the referred customer (creates circular calculation). Not including repeat purchase probability. Computing LTV:CAC only from the initial purchase gross margin.",
      alternatives: "A more rigorous approach includes discounted cash flows across the 3-year horizon, but at 0% discount rate this simplifies to the summed components. If the referred customers themselves generate 0.3 further referrals, the geometric sum of referral value = 0.3/(1−0.3) × $180 = $77.14 per customer, and total LTV = $405 + $60.75 + $77.14 = $542.89, LTV:CAC = 3.02× — just above the threshold."
    },
    rubric: [
      { id: "bi-030-r1", text: "First-order gross profit = $405" },
      { id: "bi-030-r2", text: "Expected repeat purchase value = $60.75" },
      { id: "bi-030-r3", text: "Referral value = $54 (avoided CAC)" },
      { id: "bi-030-r4", text: "Total LTV ≈ $520, LTV:CAC ≈ 2.9×" },
      { id: "bi-030-r5", text: "Assesses economics as marginal but viable, with referral rate as a key driver" }
    ]
  },

  // ── SUPPLY AND DEMAND (bi-031 to bi-035) ──────────────────────────────────

  {
    id: "bi-031",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: [],
    difficulty: "medium",
    question: "A city has 10,000 Airbnb listings. The platform introduces a 'dynamic surge pricing' feature during a major festival, raising average nightly rates from $120 to $180. Occupancy drops from 75% to 60%. Did total revenue for hosts increase or decrease, and what does this imply about price elasticity?",
    context: "Listings: 10,000. Pre-surge: price $120/night, occupancy 75%. Post-surge: price $180/night, occupancy 60%. Assume a 3-night festival window.",
    hints: [
      "Calculate total revenue (price × occupancy × nights × listings) for both scenarios. Revenue = price × quantity where quantity = listings × occupancy rate × nights.",
      "Pre-surge revenue = $120 × 0.75 × 10,000 × 3 = $2.7M. Post-surge = $180 × 0.60 × 10,000 × 3.",
      "Post-surge = $3.24M. Revenue increased by $540K (+20%). Price elasticity of demand = % change in quantity / % change in price = (−20%) / (+50%) = −0.40. Inelastic demand (|e| < 1) — guests tolerate the price increase, so hosts benefit from surging."
    ],
    referenceSolution: {
      approach: "Compute total revenue in both scenarios (price × occupancy × volume × time), compare the outcomes, then calculate price elasticity of demand.",
      reasoning: "Pre-surge total revenue: $120 × 0.75 × 10,000 × 3 = $2,700,000. Post-surge total revenue: $180 × 0.60 × 10,000 × 3 = $3,240,000. Revenue increased by $540,000 (+20%). Quantity demanded fell from 7,500 nightly bookings to 6,000 (−20%). Price rose from $120 to $180 (+50%). Price elasticity of demand = −20% / +50% = −0.40. Since |e| = 0.40 < 1, demand is inelastic — the surge pricing works in favor of hosts. This is typical for festival periods: guests who want to attend cannot easily substitute, so they absorb price increases. The platform's dynamic pricing extracts this consumer surplus. Note: if elasticity were −1 or lower (elastic), revenue would have fallen.",
      commonMistakes: "Forgetting to multiply by occupancy rate to get actual bookings. Computing elasticity as price change / quantity change rather than % change / % change. Not interpreting the elasticity value relative to the elastic/inelastic boundary of 1.",
      alternatives: "Revenue can also be analyzed via the elasticity rule: when |e| < 1, a price increase always raises total revenue. Conversely, platforms should lower prices when demand is elastic to maximize total transaction volume (and therefore their commission take)."
    },
    rubric: [
      { id: "bi-031-r1", text: "Pre-surge revenue = $2.7M" },
      { id: "bi-031-r2", text: "Post-surge revenue = $3.24M, increase of $540K" },
      { id: "bi-031-r3", text: "Price elasticity = −0.40 (inelastic)" },
      { id: "bi-031-r4", text: "Correctly links inelastic demand to why surging benefits hosts" }
    ]
  },

  {
    id: "bi-032",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: ["market-sizing"],
    difficulty: "medium",
    question: "A city introduces rent control that caps annual rent increases at 2% while market rents are growing at 8% per year. After 5 years, what percentage below market will rent-controlled apartments be, and what supply-side responses should a business analyst expect?",
    context: "Base rent: $2,000/month. Market growth: 8%/year compounded. Rent control cap: 2%/year compounded. Time horizon: 5 years. Assume all apartments start at market rate.",
    hints: [
      "Compound both the rent-controlled price and the market price over 5 years, then compare.",
      "Market rent after 5 years = $2,000 × (1.08)^5. Controlled rent = $2,000 × (1.02)^5. The gap is the discount to market.",
      "Market: $2,000 × 1.469 = $2,938. Controlled: $2,000 × 1.104 = $2,208. Controlled is $730 below market (24.8% discount). Supply-side: landlords convert to condos, defer maintenance, reduce new construction, favor short-term rentals to avoid rent control."
    ],
    referenceSolution: {
      approach: "Compound both price paths over 5 years and compare. Then apply supply-demand logic to predict landlord and developer responses to the below-market price floor.",
      reasoning: "Market rent: $2,000 × (1.08)^5 = $2,000 × 1.4693 = $2,938.60. Controlled rent: $2,000 × (1.02)^5 = $2,000 × 1.1041 = $2,208.16. Gap = $730.44, representing a 24.8% discount versus market ($730 / $2,939). Supply-side responses: (1) Conversion — landlords convert rental units to condos for sale to exit rent control. (2) Reduced maintenance — below-market rents compress margins, making maintenance investment irrational. (3) Supply contraction — new construction falls because expected returns are capped; developers shift to commercial or owner-occupied projects. (4) Alternative channels — Airbnb or short-term rentals may be exempt, drawing supply away. (5) Selection effects — landlords prefer high-income tenants unlikely to complain or leave. Net result: the policy reduces supply of affordable rentals over time, creating a housing shortage — the classic unintended consequence of rent control documented extensively in economics literature.",
      commonMistakes: "Using simple interest instead of compound growth. Computing the gap as a dollar amount without expressing as a percentage. Analyzing only the demand side (tenants benefit) without considering supply-side responses.",
      alternatives: "A useful framing is the 'wedge' model: rent control creates a wedge between price paid by tenants and price received by landlords. As the wedge grows, quantity supplied falls (landlords exit or under-invest) while quantity demanded rises (rents are cheap), creating a shortage."
    },
    rubric: [
      { id: "bi-032-r1", text: "Market rent after 5 years ≈ $2,939 using compound growth" },
      { id: "bi-032-r2", text: "Controlled rent ≈ $2,208, representing ~25% discount to market" },
      { id: "bi-032-r3", text: "Identifies at least 3 supply-side responses (condo conversion, reduced construction, etc.)" },
      { id: "bi-032-r4", text: "Recognizes the policy creates shortage rather than increased affordability long-term" }
    ]
  },

  {
    id: "bi-033",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: ["assumption-validation"],
    difficulty: "hard",
    question: "A ride-hailing platform operates in a city with 50,000 daily trips. During morning rush (7–9 AM), demand spikes to 8,000 trips/hour but driver supply is only 3,000 drivers available. The platform's surge algorithm raises prices by 2× until supply equals demand. If each driver completes 1.5 trips/hour at surge pricing, what surge multiplier actually clears the market, and what does 2× fail to account for?",
    context: "Baseline: 50,000 trips/day, ~2,083 trips/hour average. Rush hour demand: 8,000 trips/hour. Available drivers: 3,000. Trip completion rate at surge: 1.5 trips/driver/hour. Platform's blunt surge: 2×. Assume driver supply is inelastic in the short run (drivers already on the road or committed).",
    hints: [
      "Market clearing requires supply of trips = demand for trips. Supply = drivers × trips/hour. Demand falls as price rises — you need to know the demand elasticity to find the clearing price.",
      "Supply at rush = 3,000 drivers × 1.5 trips/hr = 4,500 trips/hour. Demand needs to fall from 8,000 to 4,500 — a 43.75% reduction. Use elasticity to find the required price increase.",
      "If demand elasticity = −0.5 (inelastic), needed price increase = 43.75% / 0.5 = 87.5% → multiplier of 1.875×. At −1.0 elasticity: multiplier = 1.4375×. At elasticity −0.3 (very inelastic): multiplier = 2.46×. The 2× multiplier is only correct for a specific elasticity. The flaw is applying a fixed multiplier without modeling the actual demand response."
    ],
    referenceSolution: {
      approach: "Calculate supply-side trip capacity, determine the demand reduction required to clear the market, then use demand elasticity to back-solve for the required price multiplier. Show that 2× is only correct for a specific elasticity value.",
      reasoning: "Supply capacity: 3,000 drivers × 1.5 trips/hr = 4,500 trips/hour. Required demand reduction: (8,000 − 4,500) / 8,000 = 43.75%. Using elasticity formula: % change in quantity = elasticity × % change in price. Rearranging: % change in price = −43.75% / elasticity. At elasticity −0.5: price increase = 43.75% / 0.5 = 87.5% → surge multiplier = 1.875×. At elasticity −1.0: price increase = 43.75% → multiplier = 1.4375×. At elasticity −0.3: price increase = 146% → multiplier = 2.46×. The 2× multiplier clears the market only at elasticity ≈ −0.438. What 2× fails to account for: (1) Demand elasticity varies by route, time of day, and rider income — a single multiplier cannot optimize all segments. (2) Supply elasticity — at 2×, some off-duty drivers may log on, increasing the supply side (making the clearing price lower than 2×). (3) The algorithm doesn't model trip completion rate changes (e.g., drivers cherry-pick longer trips at surge). (4) Passenger cancellation cascades: high surge causes mass cancellations, creating phantom demand.",
      commonMistakes: "Ignoring that supply is also a function of price (drivers log on at surge). Not computing the supply-side trip capacity first. Applying 2× to demand without testing whether it actually clears the market. Missing that elasticity is a required input.",
      alternatives: "Platforms like Uber use machine-learning models that estimate real-time demand elasticity by segment rather than applying a fixed multiplier. The theoretical framework here is the same, but elasticity is estimated from historical data rather than assumed."
    },
    rubric: [
      { id: "bi-033-r1", text: "Supply at rush = 3,000 × 1.5 = 4,500 trips/hour" },
      { id: "bi-033-r2", text: "Required demand reduction = 43.75%" },
      { id: "bi-033-r3", text: "Correctly uses elasticity formula to back-solve for price multiplier" },
      { id: "bi-033-r4", text: "Shows 2× is only correct for a specific elasticity (≈ −0.44)" },
      { id: "bi-033-r5", text: "Identifies supply-side response (drivers log on) as a flaw in the static model" },
      { id: "bi-033-r6", text: "Raises at least one additional real-world complication (e.g., trip length selection, cancellations)" }
    ]
  },

  {
    id: "bi-034",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: ["decomposition-to-fundamentals"],
    difficulty: "hard",
    question: "A pharmaceutical company holds a patent on a drug that 200,000 patients need annually. At $5,000/year, 180,000 patients can afford it. At $8,000/year, 120,000 patients purchase it. The company is considering raising price to $8,000. Analyze the revenue, social welfare, and strategic implications including the threat of generic entry.",
    context: "Drug: patented, no substitutes. Patient demand schedule (linear): at $5,000 → 180,000 patients; at $8,000 → 120,000 patients. Total need: 200,000. Patent expires in 4 years. Generic manufacturing cost: ~$200/patient/year. Production cost for the innovator: $800/patient/year.",
    hints: [
      "Calculate revenue at both price points. Note that 20,000 patients who need the drug get it at $5,000 but not at $8,000 — use this to estimate the demand curve slope.",
      "Revenue at $5,000 = $5,000 × 180,000 = $900M. Revenue at $8,000 = $8,000 × 120,000 = $960M. Revenue increases by $60M (+6.7%), but 60,000 patients lose access. Compute producer surplus and identify consumer surplus loss.",
      "The price increase raises revenue by 6.7% but sacrifices 33% of patients. Strategically, it also invites government intervention, accelerates generic investment incentive, and risks reputational damage that could affect other pipeline drugs. The $60M incremental revenue must be weighed against these risks."
    ],
    referenceSolution: {
      approach: "Compare revenue, patient access, and producer surplus at both price points. Model the demand curve to estimate deadweight loss. Then analyze strategic risks including patent cliff, generic entry acceleration, and regulatory response.",
      reasoning: "Revenue comparison: at $5,000 → $5,000 × 180,000 = $900M. At $8,000 → $8,000 × 120,000 = $960M. Revenue gain = $60M (+6.7%). Patient access: 60,000 patients lose access at the higher price. Demand curve slope: (180,000 − 120,000) / ($8,000 − $5,000) = −20 patients per $1 price increase. Demand curve: Q = 300,000 − 20P. Producer surplus (profit) at $5,000: ($5,000 − $800) × 180,000 = $756M. At $8,000: ($8,000 − $800) × 120,000 = $864M. Profit increases by $108M (not just $60M) because margin per unit rises. Deadweight loss from price increase: the 60,000 patients who lose access represent lost social value. Using the midpoint: average willingness to pay of excluded patients ≈ ($5,000 + $8,000)/2 = $6,500 (by linear interpolation). Deadweight loss ≈ (½) × $3,000 price increase × 60,000 patients = $90M. Strategic risks at $8,000: (1) Patent expires in 4 years — generic entry at $200/unit eliminates revenue entirely; higher prices now increase the generic market incentive. (2) Government price intervention: above $8,000, government negotiation or compulsory licensing risk rises sharply. (3) Reputational risk affects pipeline drugs and regulatory goodwill. Recommendation: the $108M profit gain over 4 years = $432M cumulative. But if aggressive pricing accelerates generic entry by 1 year (loss of ~$960M revenue), the NPV of pricing high is negative. The calculation depends on how much the $3,000 increase shifts the generic entry date.",
      commonMistakes: "Comparing revenue without comparing profit (ignoring the production cost of $800 makes the profit calculation wrong). Ignoring the social welfare / deadweight loss dimension. Not considering the strategic dynamic with generics and regulators.",
      alternatives: "A sophisticated approach models the pricing problem as a game between the innovator and generic manufacturers: generic entry timing depends on the expected market size post-patent. Higher prices create larger post-patent markets, attracting more generic investment and earlier entry."
    },
    rubric: [
      { id: "bi-034-r1", text: "Revenue calculated correctly at both price points ($900M vs $960M)" },
      { id: "bi-034-r2", text: "Profit (producer surplus) calculated using cost: $756M vs $864M" },
      { id: "bi-034-r3", text: "Deadweight loss estimated at ~$90M from excluded patients" },
      { id: "bi-034-r4", text: "Identifies generic entry incentive as a strategic cost of higher pricing" },
      { id: "bi-034-r5", text: "Discusses regulatory / reputational risk beyond pure economics" },
      { id: "bi-034-r6", text: "Arrives at a nuanced recommendation weighing short-term profit vs strategic risk" }
    ]
  },

  {
    id: "bi-035",
    trackId: "business-intuition",
    subSkill: "supply-demand",
    secondarySkills: [],
    difficulty: "hard",
    question: "An e-commerce platform for handmade goods (like Etsy) has 500,000 active sellers and 5 million active buyers. Average purchase frequency is 4 orders/buyer/year. The platform raises seller listing fees by 30%. Model the two-sided market effects and predict the net impact on transaction volume after 12 months.",
    context: "Sellers: 500,000. Buyers: 5,000,000. Purchase frequency: 4 orders/buyer/year = 20M orders/year baseline. Listing fee increase: 30%. Assume seller price elasticity of supply: −0.6 (moderately elastic — some will leave or reduce listings). Buyer demand elasticity: −0.4 with respect to buyer-facing price. Sellers pass through ~50% of cost increases to buyer prices.",
    hints: [
      "A two-sided market fee increase has three compounding effects: (1) sellers exit or reduce supply, (2) sellers raise prices (pass-through), which reduces buyer demand, (3) fewer buyers reduces value for remaining sellers (network effect). Model steps 1 and 2 first.",
      "Step 1 — seller supply reduction: 30% fee increase × −0.6 elasticity = −18% reduction in seller participation. Active sellers: 500,000 × (1 − 0.18) = 410,000. Step 2 — price pass-through: sellers pass 50% of 30% fee increase to buyers = 15% buyer price increase. Buyer demand falls: 15% × −0.4 = −6%.",
      "Orders after seller exit: proportional to seller count drop of −18% (assuming seller count drives listing supply). Orders after buyer price increase: additional −6%. Combined: 0.82 × 0.94 = 0.771 of baseline. 20M × 0.771 = 15.4M orders. Loss of 4.6M orders (−23%). Plus potential negative network effects as fewer sellers reduce buyer engagement."
    ],
    referenceSolution: {
      approach: "Model the two-sided market in stages: (1) seller supply response to fee, (2) price pass-through to buyers and buyer demand response, (3) network effects. Calculate compounded impact on transaction volume.",
      reasoning: "Baseline: 20M orders/year. Stage 1 — seller exit: 30% fee increase × seller price elasticity of supply (−0.6) = −18% reduction in active sellers. Sellers: 500,000 → 410,000. Assuming transaction volume is proportional to seller count, orders fall to 20M × 0.82 = 16.4M. Stage 2 — price pass-through: sellers pass 50% of 30% fee increase = 15% higher buyer prices. Buyer demand response: 15% × (−0.4) = −6% reduction in purchase frequency. Orders after pass-through: 16.4M × 0.94 = 15.4M. Stage 3 — network effects: fewer sellers reduce marketplace value for buyers (less selection, discovery). This is harder to quantify but could further reduce buyer frequency. Even ignoring network effects, the fee increase causes 20M → 15.4M orders, a 23% decline. Platform revenue calculation: original 20M orders at (say) $3 listing fee average → $60M. New: 15.4M orders at $3.90 (30% higher) = $60.1M. Revenue is essentially flat while destroying 23% of volume. This is a classic platform mispricing error — the fee increase fails to account for the two-sided elasticity amplification.",
      commonMistakes: "Modeling only the seller side or only the buyer side, not both. Ignoring price pass-through (treating buyer demand as stable). Not checking whether platform revenue actually improves (it barely does here). Missing the two-sided network effect dynamic.",
      alternatives: "A Lerner index approach: optimal platform take rate = 1 / |elasticity| on each side. At seller elasticity −0.6 and buyer elasticity −0.4, optimal fees are much lower than current post-increase levels. The platform is past the revenue-maximizing fee on both sides."
    },
    rubric: [
      { id: "bi-035-r1", text: "Seller exit modeled using supply elasticity: −18% reduction in sellers" },
      { id: "bi-035-r2", text: "Price pass-through of 50% × 30% = 15% buyer price increase applied" },
      { id: "bi-035-r3", text: "Buyer demand response: −6% from buyer price elasticity" },
      { id: "bi-035-r4", text: "Combined order volume decline ≈ 23% (0.82 × 0.94 = 0.771)" },
      { id: "bi-035-r5", text: "Checks whether platform revenue actually improves (finds it barely does)" },
      { id: "bi-035-r6", text: "Raises two-sided network effects as an additional amplifier of volume loss" }
    ]
  },

  // ── MARKET DYNAMICS (bi-036 to bi-040) ────────────────────────────────────

  {
    id: "bi-036",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: [],
    difficulty: "medium",
    question: "A streaming music service holds 35% market share in a market growing at 12% per year. Its own revenue is growing at 8% per year. Is the company gaining or losing competitive position, and if current trends continue, what share will it hold in 3 years?",
    context: "Current market share: 35%. Market growth rate: 12%/year. Company revenue growth: 8%/year. Assume market size today = $10B (indexed to 100 for simplicity).",
    hints: [
      "If the market grows faster than the company, the company's share is declining. Calculate both market size and company revenue in 3 years.",
      "Market in 3 years = 100 × (1.12)^3 = 140.5. Company revenue in 3 years (starting at 35) = 35 × (1.08)^3 = 44.1.",
      "Market share in year 3 = 44.1 / 140.5 = 31.4%. The company is losing ~3.6 percentage points of share over 3 years — losing competitive position despite absolute revenue growth."
    ],
    referenceSolution: {
      approach: "Compound both market size and company revenue independently over 3 years. Divide company revenue by market size each year to track share trajectory.",
      reasoning: "Index market to 100 today. Market after 3 years: 100 × (1.12)^3 = 140.5. Company revenue today: 35 (35% of 100). Company revenue after 3 years: 35 × (1.08)^3 = 35 × 1.2597 = 44.1. Market share year 3: 44.1 / 140.5 = 31.4%. Share is declining from 35% to 31.4% — a loss of 3.6 percentage points. This is a critical insight: absolute growth metrics (company growing 8% YoY) can mask relative decline. In a 12%-growth market, growing at 8% means losing ground. The company needs to grow at or above 12% to maintain share. Share-based thinking reveals competitive weakness that revenue growth hides.",
      commonMistakes: "Concluding the company is doing well because revenue is growing. Not compounding over 3 years (just applying rates once). Forgetting that market share is a relative, not absolute, measure.",
      alternatives: "Calculate year-by-year: Year 1: market = 112, company = 37.8, share = 33.75%. Year 2: 125.4, 40.8, 32.5%. Year 3: 140.5, 44.1, 31.4%. The trajectory makes the share erosion visible annually."
    },
    rubric: [
      { id: "bi-036-r1", text: "Market compounds to 140.5 over 3 years at 12%" },
      { id: "bi-036-r2", text: "Company revenue compounds to 44.1 at 8%" },
      { id: "bi-036-r3", text: "Year-3 market share = 31.4%" },
      { id: "bi-036-r4", text: "Explicitly identifies the company as losing competitive position despite absolute revenue growth" }
    ]
  },

  {
    id: "bi-037",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: ["analogical-reasoning"],
    difficulty: "medium",
    question: "A new entrant EV startup is launching in a market dominated by one incumbent with 70% share. The startup has superior battery technology but no brand and limited distribution. Using the Innovator's Dilemma framework, which customer segment should the startup target first, and why does going after the incumbent's core customers directly risk failure?",
    context: "Market: electric vehicles. Incumbent: 70% market share, strong brand, dealership network, strong margins on mid-to-high-end models. Startup: superior range (450 miles vs 280 miles), unknown brand, direct-to-consumer only, limited service network. Incumbent's customer base: 60% suburban families seeking reliability, 25% fleet/commercial buyers, 15% early adopters.",
    hints: [
      "The Innovator's Dilemma says disruptors typically start where incumbents are weakest or least incentivized to compete — often a low-margin, underserved, or non-consuming segment.",
      "Look at the incumbent's segments: fleet/commercial buyers may be over-served on brand but under-served on total cost of ownership. Early adopters want the best technology regardless of brand. Suburban families are loyal to reliability and brand — hardest to convert.",
      "Best entry: early adopters (15%) who explicitly value superior technology. Second: fleet/commercial (25%) who are price/TCO sensitive and less brand-loyal. Avoid suburban families (60%) where brand trust and service network are key decision factors the startup lacks."
    ],
    referenceSolution: {
      approach: "Apply the Innovator's Dilemma framework: identify where the incumbent is least motivated to defend and where the startup's advantages (superior tech) matter most. Use customer segmentation to select the beachhead market.",
      reasoning: "The Innovator's Dilemma (Christensen) predicts that incumbents will rationally ignore disruptors who target low-end or niche markets because those segments are low-margin or small. The startup's superior range (450 vs 280 miles) is its core advantage. Segment analysis: (1) Early adopters (15%): maximum willingness to pay for new technology, low brand loyalty, already direct-to-consumer comfortable. Best fit. (2) Fleet/commercial (25%): buy on total cost of ownership (TCO). At 450-mile range, fleet operators save on charging infrastructure costs and downtime. Brand matters less; decisions are rational/commercial. Strong second target. (3) Suburban families (60%): prioritize reliability, dealership service proximity, and brand trust — exactly what the startup lacks. Competing here directly is where the startup will lose. Why direct incumbency attack fails: the incumbent will respond (it has the resources) and the startup cannot match on service network, brand trust, and financing options. The startup's beachhead strategy should be: early adopters → fleet operators → gradual suburban penetration once service network expands. The incumbent, meanwhile, won't cut prices or invest in range improvement to chase a small 15% segment — the Dilemma in action.",
      commonMistakes: "Recommending the startup compete for suburban families because it's the largest segment. Ignoring the startup's distribution constraint (no dealerships). Applying generic competitive strategy without integrating the Innovator's Dilemma logic.",
      alternatives: "An alternative framing: Jobs-to-Be-Done. Fleet operators hire a vehicle to minimize total cost per mile driven. Superior range directly addresses this job better than the incumbent. This job-based framing arrives at the same recommendation via a different analytical lens."
    },
    rubric: [
      { id: "bi-037-r1", text: "Identifies early adopters as the primary beachhead target" },
      { id: "bi-037-r2", text: "Identifies fleet/commercial as a strong secondary target based on TCO logic" },
      { id: "bi-037-r3", text: "Explains why suburban families are the worst initial target" },
      { id: "bi-037-r4", text: "Correctly applies Innovator's Dilemma logic: incumbent ignores niche disruptors" },
      { id: "bi-037-r5", text: "Articulates a beachhead-then-expand strategic sequence" }
    ]
  },

  {
    id: "bi-038",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: ["issue-trees"],
    difficulty: "hard",
    question: "A regional bank has seen its net interest margin (NIM) fall from 3.2% to 2.4% over 4 years while total assets grew from $8B to $11B. Is the bank more or less profitable, and what market dynamic best explains the NIM compression? Quantify the impact of NIM compression versus asset growth on net interest income.",
    context: "Year 0: Assets $8B, NIM 3.2%. Year 4: Assets $11B, NIM 2.4%. Net Interest Income (NII) = Assets × NIM. Assume no change in non-interest income or expenses for this analysis.",
    hints: [
      "Calculate Net Interest Income (NII) in both years: NII = Assets × NIM.",
      "Year 0 NII = $8B × 3.2% = $256M. Year 4 NII = $11B × 2.4% = $264M. NII grew by $8M (+3.1%). The bank is slightly more profitable in absolute NII terms.",
      "To isolate the effects: if NIM had stayed at 3.2%, NII would be $11B × 3.2% = $352M. The $88M gap between $352M and $264M is the cost of NIM compression. Asset growth generated a $88M nominal lift ($8B → $11B at 3.2% would be $352M vs base $256M = +$96M), but NIM compression erased most of it."
    ],
    referenceSolution: {
      approach: "Compute NII in both periods. Decompose the NII change into a volume effect (asset growth) and a margin effect (NIM compression). Diagnose the market dynamic driving compression.",
      reasoning: "NII Year 0: $8,000M × 3.2% = $256M. NII Year 4: $11,000M × 2.4% = $264M. Absolute NII growth: +$8M (+3.1%). Decomposition: Volume effect (holding NIM constant at 3.2%): ($11,000M − $8,000M) × 3.2% = $3,000M × 3.2% = +$96M. Margin effect (applying new NIM to Year 4 assets): $11,000M × (2.4% − 3.2%) = $11,000M × (−0.8%) = −$88M. Check: $256M + $96M − $88M = $264M. Asset growth added $96M; NIM compression subtracted $88M; net gain = $8M. The bank needed to grow assets by 37.5% just to stay roughly flat in NII. Market dynamics explaining NIM compression over 4 years: (1) Low interest rate environment (post-GFC / pre-2022): deposit rates floor at near-zero while loan yields compress as banks compete for creditworthy borrowers. (2) Competitive pressure from fintechs and larger national banks offering lower-rate products. (3) Asset mix shift to lower-yield securities (e.g., MBS, Treasuries) as loan demand is inadequate. (4) Regulatory capital requirements pushing banks toward safer, lower-yielding assets. The bank ran faster to stay in place — a structural margin squeeze masked by volume growth.",
      commonMistakes: "Not decomposing the change into volume and margin effects — just noting NII went from $256M to $264M. Concluding the bank is 'doing well' because NII is up slightly. Not identifying the macro dynamics driving NIM compression.",
      alternatives: "An alternative decomposition uses Year 4 NIM for the volume effect and Year 0 assets for the margin effect — this gives slightly different attribution depending on convention, but the message is the same: margin compression nearly fully offset the benefit of 37.5% asset growth."
    },
    rubric: [
      { id: "bi-038-r1", text: "NII Year 0 = $256M, Year 4 = $264M" },
      { id: "bi-038-r2", text: "Volume effect = +$96M from asset growth" },
      { id: "bi-038-r3", text: "Margin effect = −$88M from NIM compression" },
      { id: "bi-038-r4", text: "Net NII change = +$8M (correctly reconciled)" },
      { id: "bi-038-r5", text: "Identifies at least 2 market dynamics explaining NIM compression (rates, fintech competition, etc.)" },
      { id: "bi-038-r6", text: "Frames the situation as 'running to stand still' — asset growth masking structural margin erosion" }
    ]
  },

  {
    id: "bi-039",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: ["hypothesis-trees"],
    difficulty: "hard",
    question: "A B2B software company selling project management tools has watched average contract value (ACV) fall 22% over 3 years while new logo count grew 18%. Total ARR grew 8%. Construct a hypothesis tree for why ACV is declining and identify the 2 most likely root causes to investigate first.",
    context: "3 years ago: 500 customers, ACV $20,000, ARR $10M. Today: 590 customers (+18%), ACV $15,600 (−22%), ARR $9.2M... wait, re-check: ARR = 590 × $15,600 = $9.2M, but stated ARR grew 8%. There is an inconsistency — the analyst should detect this. Assume correct figures: 590 customers, ACV $15,600, ARR = $9.2M. The '8% ARR growth' claim is false.",
    hints: [
      "First, check the arithmetic: 590 × $15,600 = $9.2M, not 8% growth from $10M. Flag this as a data integrity issue before analyzing ACV decline.",
      "On ACV decline: a hypothesis tree branches by whether the decline is: (a) mix shift — more smaller customers coming in at lower ACVs, vs. (b) pricing pressure — same-sized customers paying less, vs. (c) product/packaging — tiers being downgraded.",
      "Most likely root causes to investigate: (1) Downmarket expansion — ICP shifted from mid-market to SMB, which has lower ACVs by definition. (2) Discount inflation — sales team is discounting to hit logo targets, sacrificing ACV. Both are testable by segmenting new logo ACV vs renewal ACV."
    ],
    referenceSolution: {
      approach: "Catch the arithmetic inconsistency first. Then build a structured hypothesis tree for ACV decline and prioritize the most testable, highest-impact hypotheses.",
      reasoning: "Data integrity check: 590 customers × $15,600 ACV = $9,204,000. Base ARR = 500 × $20,000 = $10,000,000. Actual ARR change = −7.96%, not +8%. The 8% growth claim is incorrect — a critical catch for any business analyst. Hypothesis tree for ACV decline (MECE branches): Branch 1 — Customer Mix: (1a) New customers skewing smaller (SMB vs. mid-market), (1b) Enterprise customers churning, leaving lower-ACV cohort. Branch 2 — Pricing: (2a) Increased discounting by sales team, (2b) Market pricing pressure from competitors undercutting. Branch 3 — Product/Packaging: (3a) Customers buying fewer seats/modules than before, (3b) Price tier rebalancing shifted revenue to lower tier. Top 2 to investigate first: (1) New logo ACV vs. renewal ACV segmentation — if new logos average $10,000 while renewals average $22,000, this is a downmarket expansion problem. This is a structural issue requiring ICP redefinition. (2) Discount analysis by sales rep — if average discount has grown from 10% to 30%, this is a sales execution / incentive alignment problem (reps paid on logos, not ACV). These two are prioritized because they're quickly testable with existing CRM data and have the highest leverage for remediation.",
      commonMistakes: "Not catching the arithmetic inconsistency in the stated ARR growth. Building a flat list of hypotheses rather than a tree structure. Proposing hypotheses that are difficult to test immediately (e.g., 'product is inferior') without specifying how to test them.",
      alternatives: "A useful diagnostic shortcut: compare ACV of deals closed in the past 12 months vs. ACV of deals closed 36 months ago. If the cohort ACV is declining, it's an acquisition-side problem (ICP or discounting). If the declining ACV is from existing customers reducing spend, it's a retention/expansion problem."
    },
    rubric: [
      { id: "bi-039-r1", text: "Identifies the arithmetic inconsistency: actual ARR ≈ $9.2M, not 8% growth" },
      { id: "bi-039-r2", text: "Builds a MECE hypothesis tree with at least 3 branches" },
      { id: "bi-039-r3", text: "Prioritizes downmarket mix shift as a primary hypothesis" },
      { id: "bi-039-r4", text: "Prioritizes discount inflation as a second primary hypothesis" },
      { id: "bi-039-r5", text: "Specifies a concrete data test for each hypothesis (e.g., new logo ACV vs. renewal ACV)" }
    ]
  },

  {
    id: "bi-040",
    trackId: "business-intuition",
    subSkill: "market-dynamics",
    secondarySkills: ["cross-domain-reasoning"],
    difficulty: "hard",
    question: "A fintech lending platform in Southeast Asia charges 24% APR on personal loans. Traditional banks charge 12% APR. The fintech has 3× the market share growth rate of banks but its NPL (non-performing loan) ratio is 6% vs banks' 2%. A regulator asks: is the fintech creating or destroying economic value, and should it be regulated to a 15% APR cap?",
    context: "Fintech APR: 24%. Bank APR: 12%. Fintech NPL: 6%. Bank NPL: 2%. Fintech serves primarily thin-file customers (no traditional credit history). Banks serve prime customers. Total credit-served population: fintech 2M borrowers (average loan $800), banks 10M borrowers (average loan $3,500). Consider both financial returns and access-to-credit externalities.",
    hints: [
      "A 24% APR sounds exploitative, but consider: (1) what risk-adjusted return does the fintech actually earn? (2) what happens to the 2M fintech borrowers if the cap forces the fintech out of the market?",
      "Fintech risk-adjusted net interest margin: 24% − 6% NPL loss − ~8% cost of funds − ~4% operating cost ≈ 6% net margin. This is not a supernormal profit. The 15% cap would yield: 15% − 6% − 8% − 4% = −3% — the fintech exits, leaving 2M thin-file borrowers without credit.",
      "Economic value created = financial surplus for borrowers who gain access × their willingness to pay (revealed by taking 24% loans). If borrowers valued the credit at > 24% (e.g., 60% APR informal lenders were the alternative), the fintech creates massive economic value. Capping at 15% destroys access."
    ],
    referenceSolution: {
      approach: "Compute fintech's risk-adjusted net margin to assess if profits are supernormal. Model the counterfactual (what happens to thin-file borrowers if the fintech exits). Weigh credit access externalities against the financial cost of high rates.",
      reasoning: "Fintech P&L per loan dollar: Interest revenue: 24%. Loan losses (NPL): −6%. Cost of funds (emerging market capital): −8% (estimated). Operating cost (digital lending): −4%. Net margin ≈ 6%. This is a reasonable but not supernormal margin. Banks earn: 12% − 2% − 4% − 3% = +3% margin on prime customers — fintech earns more margin because it takes more risk on underserved borrowers. APR cap at 15%: 15% − 6% − 8% − 4% = −3%. At 15% cap, the fintech is unprofitable and exits. 2M borrowers return to: (a) informal lenders at 60-120% APR (common in SEA), or (b) no credit at all. Consumer surplus analysis: a borrower taking a 24% APR loan values the credit at ≥ 24%. If the counterfactual is a 60% APR informal lender, the consumer surplus created by the fintech = (60% − 24%) × $800 = $288/borrower/year. Across 2M borrowers: $576M in annual consumer surplus. Total economic value created: $576M consumer surplus + credit access for 2M previously excluded borrowers. Conclusion: the fintech is creating significant economic value by expanding credit access to thin-file borrowers who would otherwise pay much more or have no access. A 15% APR cap would be destructive to the people it intends to protect. Better regulatory approaches: transparency requirements, default rate reporting, and consumer education, not price caps.",
      commonMistakes: "Judging 24% APR as exploitative without risk-adjusting for the 6% NPL and cost of funds. Not considering the counterfactual (what happens to 2M borrowers if fintech exits). Conflating high nominal APR with supernormal economic profit.",
      alternatives: "A welfare economics framework: the regulator should compare (1) consumer surplus under fintech (24% APR but wide access) vs. (2) consumer surplus under cap (15% APR but 2M lose access). As long as the demand curve for credit by thin-file borrowers is steeply sloped (inelastic), restricting quantity is more harmful than the price premium."
    },
    rubric: [
      { id: "bi-040-r1", text: "Computes fintech risk-adjusted net margin ≈ 6% (not supernormal)" },
      { id: "bi-040-r2", text: "Models 15% cap scenario and shows fintech becomes unprofitable (−3% margin)" },
      { id: "bi-040-r3", text: "Identifies the counterfactual: thin-file borrowers resort to informal credit at 60%+ APR" },
      { id: "bi-040-r4", text: "Estimates consumer surplus created by fintech ($288/borrower if counterfactual is 60% APR)" },
      { id: "bi-040-r5", text: "Concludes cap destroys value for intended beneficiaries" },
      { id: "bi-040-r6", text: "Proposes a superior regulatory alternative (transparency, not price cap)" }
    ]
  },

  // ── COMPETITIVE ANALYSIS (bi-041 to bi-045) ───────────────────────────────

  {
    id: "bi-041",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: [],
    difficulty: "medium",
    question: "A SaaS company has a Net Promoter Score (NPS) of +42 and its closest competitor has NPS +68. The company's 12-month gross revenue retention (GRR) is 88% vs. the competitor's 94%. Sales cycle is 45 days vs. competitor's 30 days. Rank these gaps by strategic urgency and explain which gap to close first.",
    context: "Your company vs. competitor: NPS: 42 vs. 68 (gap: 26 points). GRR: 88% vs. 94% (gap: 6 ppts). Sales cycle: 45 days vs. 30 days (gap: 15 days). Assume ARR is $20M with 500 customers and average ACV of $40,000.",
    hints: [
      "Translate each metric gap into a dollar impact on the business. GRR gap is the most quantifiable — what does an 88% vs 94% GRR difference mean in ARR lost per year?",
      "GRR gap cost: at $20M ARR, 88% GRR means $2.4M churned. At 94%, you'd churn only $1.2M — a $1.2M/year difference. Sales cycle gap: 15 days shorter would accelerate bookings timing. NPS gap: less directly quantifiable but leads to the GRR gap.",
      "GRR is the most urgent gap ($1.2M/year direct loss, compounds each year). Sales cycle is second (affects capital efficiency and competitive win rates). NPS is the root cause underlying GRR — fixing product/service quality would lift both. Start with GRR diagnostics, which will surface the NPS root cause."
    ],
    referenceSolution: {
      approach: "Quantify each metric gap in dollar or opportunity terms. Prioritize by urgency: recurring losses outrank one-time efficiency gains. Identify causal links between metrics.",
      reasoning: "GRR gap quantification: current ARR = $20M. At 88% GRR: annual churn = $20M × 12% = $2.4M. At competitor's 94% GRR: churn = $20M × 6% = $1.2M. Annual difference = $1.2M/year. Crucially, this compounds — each year of underperformance leaves you with a smaller base. Over 3 years: cumulative ARR difference is ~$3.9M. Sales cycle gap: 15 days shorter cycle on 500 customers/year at $40,000 ACV = faster cash conversion and ~2 extra deals per quarter caught in the pipeline window. Dollar impact: harder to quantify but perhaps $200K-500K in incremental annual bookings. NPS gap: NPS predicts future churn, word-of-mouth, and expansion revenue. A 26-point gap is significant but lagging — the GRR gap is NPS manifesting as actual dollars lost. Priority ranking: (1) GRR is most urgent — $1.2M/year compounding loss, directly addresses the financial gap. (2) NPS is the root cause — fixing product/support quality will lift both NPS and GRR. (3) Sales cycle is important but second-order — even perfect sales efficiency doesn't help if you're losing customers on the back end. Recommended action: conduct churn interviews to identify the top 3 reasons for the 12% GRR gap; address those product/service issues, which will improve both GRR and NPS.",
      commonMistakes: "Prioritizing NPS over GRR without quantifying the financial impact. Treating the three metrics as independent rather than recognizing NPS → GRR causality. Not compounding the GRR gap over multiple years.",
      alternatives: "A 'leaky bucket' framing: if you add $4M of new ARR per year but churn $2.4M (vs competitor's $1.2M), your net new ARR is only $1.6M vs. competitor's $2.8M. The GRR gap is literally widening the bucket hole — it's a structural disadvantage that outpaces any sales improvement."
    },
    rubric: [
      { id: "bi-041-r1", text: "Quantifies GRR gap as $1.2M/year in additional ARR loss" },
      { id: "bi-041-r2", text: "Ranks GRR as most urgent gap due to recurring, compounding dollar impact" },
      { id: "bi-041-r3", text: "Identifies NPS as root cause underlying GRR (not a separate problem)" },
      { id: "bi-041-r4", text: "Sales cycle ranked as lowest priority with appropriate justification" },
      { id: "bi-041-r5", text: "Recommends churn interviews as the first concrete diagnostic step" }
    ]
  },

  {
    id: "bi-042",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: ["framework-selection"],
    difficulty: "medium",
    question: "Amazon enters the B2B procurement software market with a product priced 40% below incumbents and backed by AWS integration. A mid-size incumbent ($80M ARR, profitable) must respond. Use Porter's Five Forces to assess the threat and recommend a defensive strategy.",
    context: "Incumbent: $80M ARR, 15% net margin, 1,200 enterprise customers, deep product integrations. Amazon's product: 40% price undercut, AWS native, unlimited storage/compute bundled. Amazon's disadvantage: no enterprise sales team, no professional services, no legacy system integrations.",
    hints: [
      "Apply Porter's Five Forces to quantify the threat: focus on threat of new entrants (Amazon) and buyer bargaining power. Then identify where the incumbent has defensible advantages.",
      "Amazon's strengths: price, distribution through AWS marketplace, bundling. Amazon's weaknesses: no enterprise sales motion, no integrations, no services. Which customer segments are most at risk vs. most defensible?",
      "Most at risk: new customers with no switching costs, AWS-native companies. Most defensible: existing customers with deep integrations (high switching cost), regulated industries needing specialized compliance. Strategy: protect high-integration customers, cede commodity/low-complexity segment, accelerate enterprise services and vertical specialization."
    ],
    referenceSolution: {
      approach: "Apply all five forces, weight by relevance, then derive a strategic response that exploits the incumbent's structural advantages and concedes where it cannot compete.",
      reasoning: "Porter's Five Forces analysis: (1) Threat of New Entrants (Amazon): HIGH. Amazon has capital, distribution (AWS marketplace), brand, and a 40% price advantage. Mitigating factor: enterprise procurement software has long sales cycles, complex implementations, and regulatory requirements that are hard to scale. (2) Buyer Bargaining Power: INCREASING. Amazon's entry gives buyers a credible outside option, strengthening their negotiating position — existing customers will use this to renegotiate. (3) Threat of Substitutes: MEDIUM. Amazon's product may not fully substitute (no legacy integrations, no PS), but it substitutes for the simpler use cases. (4) Supplier Power: LOW (software, not relevant). (5) Competitive Rivalry: INTENSIFYING — other incumbents may also cut prices in response. Strategic response: Do not engage in a price war — at 15% net margin, a 40% price cut would be devastating. Segment the customer base: (A) At-risk: SMB/mid-market customers with low integration depth — Amazon can serve these. Consider gracefully exiting or creating a lower-tier product. (B) Defensible: enterprise customers with 5+ integrations and compliance requirements — reinforce stickiness with deeper integration, dedicated CSM, SLA guarantees. (C) Offense: become the anti-Amazon play by emphasizing data sovereignty (many enterprises distrust Amazon with procurement data), non-cloud-lock-in, and industry-specific compliance. Quantify: if 30% of ARR ($24M) is at risk (SMB, low integration), protect the $56M fortress with the resources freed from the at-risk segment.",
      commonMistakes: "Recommending a price war (suicide at 15% margin). Only applying 2-3 of the five forces. Not segmenting which customers are vulnerable vs. defensible. Treating Amazon as an undifferentiated threat rather than a threat in specific customer segments.",
      alternatives: "A 'core competencies' framework (Hamel & Prahalad) reaches the same conclusion: the incumbent's core competencies (enterprise relationships, integrations, domain expertise) are exactly what Amazon lacks. Build moats around these rather than competing on Amazon's terms."
    },
    rubric: [
      { id: "bi-042-r1", text: "Applies all five forces with relevant commentary for each" },
      { id: "bi-042-r2", text: "Segments customers into at-risk vs. defensible based on integration depth" },
      { id: "bi-042-r3", text: "Explicitly recommends against a price war with quantitative justification" },
      { id: "bi-042-r4", text: "Identifies data sovereignty / non-Amazon lock-in as a differentiation angle" },
      { id: "bi-042-r5", text: "Quantifies the at-risk ARR (~$24M) and the defensible fortress ($56M)" }
    ]
  },

  {
    id: "bi-043",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: ["sanity-checks"],
    difficulty: "hard",
    question: "Two competitors in the cloud storage market have the following metrics. Company A: $500M ARR, growing 25% YoY, gross margin 72%, NRR 118%, CAC payback 14 months. Company B: $800M ARR, growing 12% YoY, gross margin 68%, NRR 105%, CAC payback 20 months. Which company has the stronger competitive position in 5 years, and what is the projected ARR gap?",
    context: "Company A: $500M ARR, 25% growth, 72% gross margin, NRR 118%, CAC payback 14 months. Company B: $800M ARR, 12% growth, 68% gross margin, NRR 105%, CAC payback 20 months. Assume both companies have similar new logo acquisition budgets and current trends continue. NRR effects compound on existing ARR each year.",
    hints: [
      "Compound both ARR bases at their respective growth rates for 5 years. Note that NRR >100% acts as a multiplier on existing ARR beyond the stated growth rate — or the growth rate may already incorporate NRR.",
      "If the stated growth rate already includes NRR expansion, just compound: A: $500M × (1.25)^5, B: $800M × (1.12)^5.",
      "A: $500M × 3.052 = $1,526M. B: $800M × 1.762 = $1,410M. Company A overtakes Company B in ARR in approximately year 4-5 and ends with ~$116M more ARR. Company A also has structurally better unit economics (higher NRR, faster payback, higher margins) — a compounding advantage."
    ],
    referenceSolution: {
      approach: "Project ARR for both companies over 5 years using compound growth. Compare unit economics quality across all five metrics to assess which has the stronger strategic position. Identify the year of crossover.",
      reasoning: "ARR projection assuming stated growth rates include NRR: Company A: $500M × (1.25)^5 = $500M × 3.0518 = $1,525.9M. Company B: $800M × (1.12)^5 = $800M × 1.7623 = $1,409.8M. Company A overtakes Company B in ARR in ~Year 4 and leads by $116M in Year 5. Year-by-year crossover: Year 1: A=$625M, B=$896M (B leads by $271M). Year 2: A=$781M, B=$1,004M (B leads $223M). Year 3: A=$977M, B=$1,124M (B leads $148M). Year 4: A=$1,221M, B=$1,259M (B leads $38M). Year 5: A=$1,526M, B=$1,410M (A leads $116M). Unit economics comparison: NRR 118% vs. 105% — Company A retains and expands existing revenue dramatically faster (compounding advantage). Each cohort of A's customers is worth more over time. CAC payback 14 vs. 20 months — A recovers acquisition costs 30% faster, freeing capital for growth. Gross margin 72% vs. 68% — A has more cash to invest in R&D, S&M. Assessment: Company A has the stronger competitive position in 5 years on all dimensions — growth rate, unit economics efficiency, NRR expansion, and capital efficiency. Company B's current ARR lead is an artifact of earlier scale, not superior competitiveness. This is a classic 'quality beats size' story in SaaS.",
      commonMistakes: "Declaring Company B the winner because it has more ARR today. Not running the 5-year projection. Ignoring NRR as a compounding mechanism. Treating all five metrics as equally important rather than synthesizing them into a holistic view.",
      alternatives: "A Rule of 40 comparison: A = 25% growth + 72% gross margin proxy ≈ 97 (excellent). B = 12% + 68% ≈ 80 (good). By Rule of 40, Company A is already a better business — its 5-year projection is consistent with this. Note: Rule of 40 typically uses free cash flow margin, not gross margin, but directionally the comparison holds."
    },
    rubric: [
      { id: "bi-043-r1", text: "Correctly compounds A to ~$1,526M and B to ~$1,410M over 5 years" },
      { id: "bi-043-r2", text: "Identifies the crossover year (~Year 4)" },
      { id: "bi-043-r3", text: "Explains why NRR 118% vs 105% is a compounding structural advantage" },
      { id: "bi-043-r4", text: "Synthesizes all five metrics into a consistent conclusion favoring Company A" },
      { id: "bi-043-r5", text: "Articulates why Company B's current ARR lead is not evidence of competitive superiority" }
    ]
  },

  {
    id: "bi-044",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: ["rebuilding-mental-models"],
    difficulty: "hard",
    question: "A venture-backed startup in the HR tech space claims: 'We have a defensible moat because our data network effect gets stronger with every new customer.' Evaluate this claim rigorously. What conditions must be true for a data network effect to be a real moat, and does the HR tech context satisfy them?",
    context: "HR tech platform: helps companies run performance reviews, employee surveys, and succession planning. Product claims: (1) More companies → more benchmark data → better insights. (2) AI models improve as more data is fed in. (3) Customers can compare themselves to industry benchmarks. The startup has 800 customers across 20 industries. Incumbents (Workday, SAP) have 10,000+ customers each.",
    hints: [
      "A genuine data network effect requires: (1) more data materially improves the product, (2) the improvement is captured by users (not just the company), (3) the improvement is hard to replicate from alternative data sources.",
      "Test each condition for HR benchmarking: Does the 801st customer's data improve benchmarks for customer #1? Only if they're in the same industry segment. With 800 customers across 20 industries, you have ~40 per industry — is that enough for statistically meaningful benchmarks?",
      "The claim is partially valid but overstated. At 40 customers per industry, benchmarks are noisy. Incumbents with 500+ per industry have genuinely better data. The startup's 'data moat' is not yet real. The moat becomes real at scale — but getting there requires winning customers before the moat exists (a chicken-and-egg problem)."
    ],
    referenceSolution: {
      approach: "Apply a structured test for genuine data network effects: (1) marginal value of additional data, (2) beneficiary (user vs. company), (3) substitutability of data, (4) threshold effects. Evaluate each condition for the specific HR tech context.",
      reasoning: "Four conditions for a real data network effect: Condition 1 — Marginal data improvement: Does the (n+1)th customer's data materially improve the product for existing customers? In benchmarking, statistical law of large numbers means marginal improvement diminishes rapidly. At 40 customers per industry, confidence intervals are wide. At 400, they narrow significantly. At 40, the startup's benchmarks may have ±25% error bands — not useful enough to drive decisions. Verdict: weak, below the threshold. Condition 2 — User-captured value: If the data improves the company's AI model but the output quality to users doesn't visibly improve, it's a company moat not a user network effect. In HR tech, users want better benchmarks, not better model accuracy — these are related but not identical. Verdict: partially satisfied. Condition 3 — Data substitutability: Can this data be obtained elsewhere? HR benchmarks are available from compensation surveys (Radford, Mercer), industry associations, and public pay transparency laws. The startup's proprietary data is not the only source. Verdict: weak moat — substitutable data. Condition 4 — Threshold effects: The 'moat' only becomes real after reaching a minimum viable scale per industry vertical. At 800 customers across 20 industries, the startup is below threshold in most verticals. Incumbents (Workday, SAP) with 500+ per industry have genuinely better benchmarks today. Conclusion: the claim is a VC narrative, not yet a real moat. The startup has a future potential data moat if it reaches ~500 customers per vertical, but currently has a data disadvantage vs. incumbents. The moat must be earned through customer acquisition — it doesn't exist yet and therefore cannot drive customer acquisition today (circular logic).",
      commonMistakes: "Accepting the data network effect claim at face value. Not testing the conditions that make data network effects real. Ignoring incumbents' data advantage. Confusing model improvement with user-visible product improvement.",
      alternatives: "A simpler test: ask 'would the 500th customer get a meaningfully better product than the 100th customer?' In the HR benchmarking context, the answer at industry level depends on the vertical size — in a niche industry (say, specialty chemicals, 5 customers), the data moat is useless. This highlights that data network effects are only as strong as the relevant data pool, which may be small."
    },
    rubric: [
      { id: "bi-044-r1", text: "Applies a structured test with multiple conditions (not just accepting the claim)" },
      { id: "bi-044-r2", text: "Quantifies the industry-level sample size (~40/industry) and assesses statistical significance" },
      { id: "bi-044-r3", text: "Identifies data substitutability as a weakness (Radford, pay transparency, etc.)" },
      { id: "bi-044-r4", text: "Identifies the threshold problem: moat is future/potential, not current" },
      { id: "bi-044-r5", text: "Notes the circular logic: moat requires scale which requires winning customers before moat exists" },
      { id: "bi-044-r6", text: "Compares data depth to incumbents (Workday/SAP with 500+ per industry)" }
    ]
  },

  {
    id: "bi-045",
    trackId: "business-intuition",
    subSkill: "competitive-analysis",
    secondarySkills: ["multi-skill-synthesis"],
    difficulty: "hard",
    question: "A $2B public company in the cybersecurity market is considering acquiring a $400M-ARR startup for $2.4B (6× ARR). The startup grows at 35% YoY with 125% NRR and 60% gross margins. The acquirer grows at 8% with 100% NRR and 75% gross margins. Model the financial impact of the acquisition on the acquirer's combined growth rate and gross margin, and assess whether the 6× ARR multiple is justified.",
    context: "Acquirer: $2B ARR, 8% growth, 75% gross margin, NRR 100%. Acquirer market cap: $6B (3× ARR). Target: $400M ARR, 35% growth, 60% gross margin, NRR 125%. Acquisition price: $2.4B (6× ARR). Assume the acquirer takes on $2.4B in debt at 5% annual interest to fund the deal. Ignore integration costs for simplicity.",
    hints: [
      "Compute combined ARR, combined growth rate (weighted by ARR size), and combined gross margin (weighted). Then model the interest cost of $2.4B debt.",
      "Combined ARR = $2,400M. Weighted growth rate = ($2,000M × 8% + $400M × 35%) / $2,400M. Weighted gross margin = ($2,000M × 75% + $400M × 60%) / $2,400M.",
      "Combined growth ≈ 12.5%. Combined GM ≈ 72.5%. Annual interest cost: $2.4B × 5% = $120M. This eliminates most of the target's gross profit ($400M × 60% = $240M GP) — the deal is immediately dilutive to free cash flow. Whether 6× is justified depends on whether the growth acceleration ($2B ARR growing 12.5% vs. 8%) creates enough enterprise value to offset $120M/year in financing costs."
    ],
    referenceSolution: {
      approach: "Compute combined operating metrics (ARR, growth, gross margin) using weighted averages. Add the financing cost to assess cash flow impact. Value the deal using the accretion to the acquirer's implied enterprise value.",
      reasoning: "Step 1 — Combined metrics: ARR = $2,000M + $400M = $2,400M. Weighted growth = ($2,000M × 8% + $400M × 35%) / $2,400M = ($160M + $140M) / $2,400M = $300M / $2,400M = 12.5%. Weighted gross margin = ($2,000M × 75% + $400M × 60%) / $2,400M = ($1,500M + $240M) / $2,400M = $1,740M / $2,400M = 72.5%. Step 2 — Financing cost: $2.4B × 5% = $120M/year interest. The target generates $240M gross profit annually. After interest: $240M − $120M = $120M net contribution to the acquirer — a 30% return on cost ignoring integration. Step 3 — EV accretion: at 3× ARR multiple (acquirer's own multiple), the target's $400M ARR is worth $1.2B to the acquirer's market cap. But the deal cost $2.4B — a $1.2B premium over the acquirer's own ARR multiple. Justification requires that: (a) the target's ARR multiple expands the acquirer's trading multiple, or (b) the growth acceleration creates enterprise value > $1.2B premium. Growth effect: without the deal, in 1 year acquirer has $2B × 1.08 = $2,160M ARR. With deal: $2,400M × 1.125 = $2,700M ARR. ARR premium = $540M at 3× = $1.62B incremental EV — exceeds the $1.2B premium. However, this ignores deal costs, integration risks, and the fact that the target's 35% growth may slow post-acquisition. The 6× multiple is defensible on growth accretion alone, but only if the target's NRR 125% and growth are maintained. NRR dilution (125% → combined 100%) is a major risk flag.",
      commonMistakes: "Not computing weighted averages for combined metrics. Ignoring the interest cost of debt financing. Not comparing the deal price to the acquirer's own trading multiple to assess the premium paid. Missing the NRR dilution risk (combined NRR will be a blend, much lower than 125%).",
      alternatives: "A DCF approach: discount the target's 5-year FCF at the acquirer's WACC. At 35% growth, declining to 15% by year 5, with 60% gross margin and 20% FCF margin: FCF Year 1 = $400M × 20% = $80M, growing to ~$170M by Year 5. NPV at 10% discount rate ≈ $500M-600M — well below $2.4B. This suggests the deal price is justified only by strategic/multiple expansion value, not standalone DCF."
    },
    rubric: [
      { id: "bi-045-r1", text: "Combined ARR = $2.4B, weighted growth = 12.5%, weighted GM = 72.5%" },
      { id: "bi-045-r2", text: "Annual interest cost = $120M (5% × $2.4B), assessed against target's gross profit" },
      { id: "bi-045-r3", text: "Compares deal price ($2.4B) to acquirer's own multiple-implied value of target ($1.2B)" },
      { id: "bi-045-r4", text: "Quantifies the growth accretion in EV terms to justify the premium" },
      { id: "bi-045-r5", text: "Identifies NRR dilution (125% → blended lower) as a key risk" },
      { id: "bi-045-r6", text: "Reaches a balanced verdict: defensible only if target's growth/NRR is maintained" }
    ]
  },

  // ── BUSINESS MODEL EVALUATION (bi-046 to bi-050) ─────────────────────────

  {
    id: "bi-046",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: [],
    difficulty: "medium",
    question: "A startup offers a 'buy now, pay later' (BNPL) product to e-commerce merchants. Merchants pay 3% of transaction value; consumers pay 0% interest if they repay in 4 installments over 8 weeks. The startup's cost of funds is 6% APR. Default rate is 4%. Operating cost is 1% of GMV. At what GMV does the business break even, and what is the profit margin at $1B GMV?",
    context: "Revenue: 3% merchant fee on GMV. Cost of funds: 6% APR on the outstanding loan balance. Average loan duration: 8 weeks = 8/52 of a year. Default rate: 4% of GMV. Operating cost: 1% of GMV. Outstanding balance ≈ 50% of GMV on average (loans amortize over 8 weeks; average outstanding is ~half).",
    hints: [
      "Revenue = 3% × GMV. Costs = (cost of funds on outstanding balance) + (defaults) + (operating costs). Outstanding balance = GMV × 50% (half the loan book is outstanding on average).",
      "Cost of funds per year = 6% × (GMV × 50%) × (8/52 year) = 6% × 50% × 15.4% × GMV = 0.462% × GMV. Default cost = 4% × GMV. Operating = 1% × GMV. Total cost = ~5.46% × GMV. Revenue = 3% × GMV.",
      "At 3% revenue and ~5.46% cost, the business loses 2.46% of GMV. This business model cannot break even — the merchant fee must rise to at least 5.46%. At $1B GMV: revenue = $30M, costs = $54.6M, loss = $24.6M. This is a structurally unprofitable BNPL model at current parameters."
    ],
    referenceSolution: {
      approach: "Build a P&L expressed as % of GMV. Revenue = merchant fee %. Variable costs = cost of funds (calculated on average outstanding balance and loan duration) + defaults + operating. Find where revenue exceeds costs.",
      reasoning: "Revenue per unit GMV: 3%. Cost of funds: 6% APR × 50% average outstanding × (8/52 year) = 6% × 0.50 × 0.1538 = 0.462% of GMV. Default cost: 4% of GMV. Operating cost: 1% of GMV. Total cost: 0.462% + 4% + 1% = 5.462% of GMV. Contribution margin: 3% − 5.462% = −2.46% of GMV. The business loses 2.46 cents per dollar of GMV processed. Break-even requires either: raising merchant fee to 5.46% (merchants currently pay ~1-2% for credit cards, so this is uncompetitive) or reducing defaults to near zero. At $1B GMV: Revenue = $30M, Cost = $54.6M, Loss = −$24.6M. This is consistent with how actual BNPL companies (Klarna, Afterpay) operated at huge losses and relied on venture capital and low-rate environments to survive. The business model has intrinsically negative unit economics unless: (1) default rates fall below ~1% (possible with better underwriting), (2) the default cost is shared with merchants (chargebacks), or (3) cross-sell revenue (e.g., consumer premium products) supplements the merchant fee.",
      commonMistakes: "Forgetting to adjust cost of funds for the loan duration (8 weeks, not a full year). Using GMV as the loan balance rather than 50% average outstanding. Not identifying that the business has negative unit economics.",
      alternatives: "Some BNPL models charge late fees or interest after the 8-week window — this changes the revenue model significantly and can make economics positive on the segment of late-payers. The sustainable BNPL model likely requires late fee revenue, lower defaults from ML underwriting, and scale-driven cost reduction."
    },
    rubric: [
      { id: "bi-046-r1", text: "Cost of funds correctly calculated: 6% × 50% × (8/52) = 0.46% of GMV" },
      { id: "bi-046-r2", text: "Total cost ≈ 5.46% of GMV (all three components)" },
      { id: "bi-046-r3", text: "Identifies negative unit economics: −2.46% contribution margin" },
      { id: "bi-046-r4", text: "At $1B GMV: $30M revenue vs $54.6M cost, −$24.6M loss" },
      { id: "bi-046-r5", text: "States break-even requires merchant fee of ~5.46% or fundamentally different model" }
    ]
  },

  {
    id: "bi-047",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: ["orders-of-magnitude"],
    difficulty: "medium",
    question: "A media company earns $40M/year from advertising and is considering a subscription pivot: charging $8/month with a 15% conversion rate from its 5M monthly active users. Model the revenue impact of the pivot and identify the key business model tradeoffs.",
    context: "Current: 5M MAU, $40M ad revenue ($8 ARPU from ads). Proposed: $8/month subscription, 15% conversion rate (750,000 subscribers). Assume ad revenue on non-subscribers = $6/MAU/year (lower engagement from converted users reduces ad inventory by their departure). Non-subscribers who remain: 5M × 85% = 4.25M.",
    hints: [
      "Subscription revenue = subscribers × $8/month × 12 months. Remaining ad revenue = non-subscribers × $6/year ARPU. Total new revenue = sum these two.",
      "Subscription revenue = 750,000 × $8 × 12 = $72M. Residual ad revenue = 4.25M × $6 = $25.5M. Total = $97.5M vs $40M currently — a $57.5M increase.",
      "Revenue more than doubles. But tradeoffs: subscription revenue is more predictable but you need to maintain subscriber value; ad revenue becomes more concentrated in the remaining 85% who may be less engaged (they didn't convert — why?). Also, subscriber acquisition costs, customer support, and payment infrastructure will increase."
    ],
    referenceSolution: {
      approach: "Model new revenue streams (subscription + residual ad) and compare to current ad-only baseline. Then articulate the strategic business model tradeoffs beyond the headline revenue number.",
      reasoning: "Subscription revenue: 5M MAU × 15% conversion = 750,000 subscribers × $8/month × 12 = $72,000,000. Residual ad revenue: remaining 4,250,000 non-subscribers × $6/year ARPU = $25,500,000. Total revenue under hybrid model: $72M + $25.5M = $97.5M. Current ad-only revenue: $40M. Revenue increase: +$57.5M (+144%). The model appears highly attractive on revenue. Strategic tradeoffs: (1) Revenue quality: subscription revenue is more predictable (lower volatility) and doesn't depend on ad market cycles. (2) Remaining ad base risk: the 4.25M non-subscribers who stayed likely include less-engaged, lower-income, or privacy-conscious users — potentially less valuable to advertisers than the converted group. Ad RPM could decline, making $6/year optimistic. (3) New cost structure: subscriptions require billing infrastructure, customer support, refund management, churn management. Estimate: ~$5-10M in new OpEx. (4) Content investment: subscribers have higher content quality expectations, driving up content costs. (5) The 15% conversion assumption is critical — if actual conversion is 8%, subscription revenue = $38.4M and total = $63.9M (still higher than $40M, but the margin of safety shrinks). Sensitivity: at 10% conversion, total = $68.4M; at 5% conversion, total = $49.2M. Even at 5% conversion the hybrid model beats ad-only, which suggests the pivot is robust to conversion uncertainty.",
      commonMistakes: "Forgetting to include residual ad revenue on non-subscribers. Not questioning the conversion rate assumption. Not accounting for new costs (billing, support). Treating the revenue increase as pure profit without modeling new cost structure.",
      alternatives: "A 'jobs-to-be-done' evaluation: the real question is whether 15% of users value the content enough to pay $96/year. Benchmark: Netflix converts ~40% of trial users; Spotify converts ~25%. For a media company, 15% requires genuinely differentiated content. If content is commodity, conversion will be 3-5%."
    },
    rubric: [
      { id: "bi-047-r1", text: "Subscription revenue = $72M (750K × $96/year)" },
      { id: "bi-047-r2", text: "Residual ad revenue = $25.5M (4.25M × $6)" },
      { id: "bi-047-r3", text: "Total $97.5M vs $40M — correctly identifies revenue as more than doubling" },
      { id: "bi-047-r4", text: "Identifies at least 2 non-revenue tradeoffs (ad base quality, new cost structure, content investment)" },
      { id: "bi-047-r5", text: "Runs sensitivity on conversion rate to test robustness" }
    ]
  },

  {
    id: "bi-048",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: ["case-analysis"],
    difficulty: "hard",
    question: "A marketplace for freelance creative work (design, video, copy) charges 20% commission on transactions. GMV is $200M/year. The founder claims they can 3× revenue by 'removing the commission and charging SaaS subscriptions instead.' Model both business models at the same GMV and evaluate the founder's claim. What does the transition risk?",
    context: "Current: GMV $200M, 20% take rate = $40M revenue. Proposed SaaS model: charge freelancers $50/month and clients $200/month. Current users: 100,000 freelancers, 50,000 active clients. Assume 30% of freelancers and 40% of clients subscribe under the SaaS model. Remove commission entirely.",
    hints: [
      "Model SaaS revenue: (freelancers × conversion × $50/month × 12) + (clients × conversion × $200/month × 12). Compare to current $40M.",
      "SaaS revenue: (100,000 × 30% × $600) + (50,000 × 40% × $2,400) = $18M + $48M = $66M. This is 65% more than $40M — not 3×.",
      "To reach 3× ($120M), you'd need ~100% freelancer conversion and 100% client conversion, which is unrealistic. The 3× claim is false. Moreover, removing commission creates a free-rider problem: users can transact off-platform without paying. The transition destroys the marketplace's transaction visibility and trust enforcement."
    ],
    referenceSolution: {
      approach: "Model SaaS revenue with realistic conversion assumptions. Compare to current commission revenue. Identify structural business model risks of removing the commission.",
      reasoning: "Current revenue: $200M GMV × 20% take rate = $40M. SaaS revenue model: Freelancer subscriptions: 100,000 × 30% conversion × $50/month × 12 = $18M. Client subscriptions: 50,000 × 40% conversion × $200/month × 12 = $48M. Total SaaS revenue: $66M. Revenue increase: +$26M (+65%), not 3×. To reach 3× ($120M): Freelancer contribution needed: if freelancer rate is fixed at $18M, client contribution must = $102M. At $200/month: 50,000 × conversion × $2,400 = $102M → conversion = 85%. At client subs: $120M total. To reach 3× purely from freelancer uptick: 100,000 × conversion × $600 = $120M → 200% conversion (impossible). The 3× claim requires implausible conversion rates. Structural risks of removing the commission: (1) Disintermediation: without commission monitoring, freelancers and clients close deals offline (cutting out the marketplace entirely). The platform loses transaction data, trust enforcement, and dispute resolution leverage. (2) Revenue correlation to GMV broken: SaaS revenue is fixed regardless of GMV — if GMV grows, the platform doesn't benefit proportionally. (3) Adverse selection: the clients and freelancers who subscribe may be the lowest-volume users (high-volume users transact more but pay less under SaaS). The highest-value users go off-platform. (4) Subscriber churn: subscription models require constant product value delivery to prevent churn; the marketplace's value was the transaction itself.",
      commonMistakes: "Accepting the 3× claim without modeling it. Not questioning conversion rate assumptions. Ignoring disintermediation risk. Not recognizing that removing commission breaks the marketplace's core economic alignment.",
      alternatives: "A hybrid model (subscription + reduced commission) is common in practice: charge a lower subscription ($20/month) for platform access plus a reduced 8% commission. This reduces disintermediation incentive while adding recurring revenue. At $200M GMV: $8M × conversion + $200M × 8% = ~$22M SaaS + $16M commission = $38M — roughly revenue-neutral but with better revenue quality and reduced price sensitivity."
    },
    rubric: [
      { id: "bi-048-r1", text: "SaaS revenue correctly modeled: $18M freelancers + $48M clients = $66M" },
      { id: "bi-048-r2", text: "Disproves 3× claim: $66M is 65% increase, not 3×" },
      { id: "bi-048-r3", text: "Calculates the conversion rate required to reach 3× and identifies it as unrealistic" },
      { id: "bi-048-r4", text: "Identifies disintermediation as the primary structural risk" },
      { id: "bi-048-r5", text: "Notes revenue decoupling from GMV growth as a strategic downside" },
      { id: "bi-048-r6", text: "Proposes hybrid model or alternatives with numerical backing" }
    ]
  },

  {
    id: "bi-049",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: ["sensitivity-analysis", "bounding-estimates"],
    difficulty: "hard",
    question: "A climate tech startup sells carbon credits from reforestation projects. It costs $18/tonne to plant and monitor trees. Credits sell for $28/tonne today but the carbon credit market price is volatile (ranging $12–$55/tonne over the past 3 years). The company planted 2M trees that will absorb an estimated 500,000 tonnes of CO2 over 20 years. Evaluate the business model viability under bear, base, and bull market scenarios.",
    context: "Planting/monitoring cost: $18/tonne. Credit price range: bear $12/tonne, base $28/tonne, bull $45/tonne. Total credits: 500,000 tonnes over 20 years. Upfront investment: $9M (plant 2M trees at $4.50/tree). Annual monitoring cost: $150,000/year. Credits are sold as trees absorb carbon — roughly 25,000 tonnes/year for 20 years. Discount rate: 8%.",
    hints: [
      "Model three scenarios using NPV. Annual revenue = 25,000 tonnes × credit price. Annual cost = (monitoring $150K) + allocated planting cost ($9M / 20 years = $450K/year amortized). Net cash flow = revenue − costs.",
      "Net annual cash flow: Bear = 25K × $12 − $600K = $300K − $600K = −$300K/year. Base = 25K × $28 − $600K = $700K − $600K = $100K/year. Bull = 25K × $45 − $600K = $1,125K − $600K = $525K/year.",
      "NPV of annual cash flows over 20 years at 8% discount rate: annuity factor ≈ 9.818. Bear NPV ≈ −$300K × 9.818 = −$2.95M. Base NPV ≈ $100K × 9.818 = $982K. Bull NPV ≈ $525K × 9.818 = $5.15M. Subtract the $9M upfront investment: Bear = −$11.95M, Base = −$8.02M, Bull = −$3.85M. All three scenarios are NPV negative — the business model requires much higher prices or lower costs."
    ],
    referenceSolution: {
      approach: "Build a 20-year DCF model with three price scenarios. Compute NPV net of upfront investment. Find the break-even carbon price. Assess the business model's resilience.",
      reasoning: "Annual cash flow model: Revenue per year = 25,000 tonnes × price. Costs per year = $150,000 monitoring + $9,000,000 / 20 amortized = $150,000 + $450,000 = $600,000. Net annual cash flow: Bear ($12): $300,000 − $600,000 = −$300,000. Base ($28): $700,000 − $600,000 = +$100,000. Bull ($45): $1,125,000 − $600,000 = +$525,000. Present value of 20-year annuity at 8%: PV factor = [1 − (1.08)^−20] / 0.08 = [1 − 0.2145] / 0.08 = 9.818. NPV of operating cash flows: Bear: −$300K × 9.818 = −$2,945,400. Base: $100K × 9.818 = $981,800. Bull: $525K × 9.818 = $5,154,450. Total NPV including $9M upfront: Bear: −$9M − $2.945M = −$11.945M. Base: −$9M + $0.982M = −$8.018M. Bull: −$9M + $5.154M = −$3.846M. All scenarios are deeply NPV negative. Break-even price: need NPV operating cash flows = $9M. Annual net CF × 9.818 = $9M → annual NCF = $916,854. Revenue needed = $916,854 + $600,000 = $1,516,854/year. Per tonne: $1,516,854 / 25,000 = $60.67/tonne. Break-even at $60.67/tonne — well above today's $28 and even above the 3-year high of $55/tonne. The business model is not viable at current market prices. It requires either: a structural shift in carbon credit prices (possible but speculative), a different revenue model (e.g., biodiversity credits, government subsidies, blended finance), or a lower-cost planting model. This is common in voluntary carbon markets — project economics often depend on future price appreciation rather than current cash flow.",
      commonMistakes: "Forgetting the $9M upfront investment in the NPV calculation. Using simple payback rather than DCF. Not modeling all three scenarios. Not calculating the break-even carbon price.",
      alternatives: "A real options framing: the startup has the option to delay selling credits until market prices are high (hold inventory). At bull prices ($45), NPV is still negative — but if prices rise to $60+, the option has significant value. This is why carbon credit projects are often pitched as long-duration assets with embedded price optionality."
    },
    rubric: [
      { id: "bi-049-r1", text: "Annual net cash flows correctly calculated for all three scenarios" },
      { id: "bi-049-r2", text: "20-year annuity PV factor ≈ 9.818 applied correctly" },
      { id: "bi-049-r3", text: "All three NPVs calculated net of $9M upfront investment" },
      { id: "bi-049-r4", text: "All scenarios identified as NPV negative — model not viable at current prices" },
      { id: "bi-049-r5", text: "Break-even carbon price calculated ≈ $60.67/tonne" },
      { id: "bi-049-r6", text: "Proposes alternative revenue streams or real options framing" }
    ]
  },

  {
    id: "bi-050",
    trackId: "business-intuition",
    subSkill: "business-model-evaluation",
    secondarySkills: ["full-case-interview"],
    difficulty: "hard",
    question: "You are advising a PE firm evaluating a leveraged buyout of a regional gym chain: 120 locations, $180M EBITDA, offered at $1.26B (7× EBITDA). The deal uses 60% debt (6% interest). The gym industry faces structural threats from Peloton-style at-home fitness. Model the LBO returns under two scenarios — base (EBITDA grows 5%/year) and stress (EBITDA declines 10% in year 1 then recovers 3%/year) — and advise whether to proceed.",
    context: "Purchase price: $1.26B. Equity: 40% = $504M. Debt: 60% = $756M. Debt interest: 6%/year = $45.36M/year. EBITDA at purchase: $180M. Exit multiple assumption: 7× EBITDA after 5 years. Base scenario: EBITDA grows 5%/year. Stress scenario: EBITDA Year 1 = $162M (−10%), then grows 3%/year. Tax rate: 0% (simplify). Assume all free cash flow goes to debt repayment. Depreciation and capex net to zero.",
    hints: [
      "For each scenario: project EBITDA for years 1-5. Annual free cash flow = EBITDA − interest. Apply FCF to reduce debt. At year 5, exit value = EBITDA × 7×. Equity value = exit EV − remaining debt. Return = equity value / initial equity.",
      "Base Year 5 EBITDA = $180M × (1.05)^5 = $229.7M. Exit EV = $229.7M × 7 = $1,608M. Calculate debt reduction: Year 1 FCF = $180M × 1.05 − $45.36M... actually use beginning EBITDA for each year and reduce debt each period.",
      "In base case, equity of $504M grows to roughly $700-800M+ depending on debt paydown. MOIC ~1.5-1.6×. In stress case, Year 1 FCF = $162M − $45.36M = $116.64M (still covers interest, limited paydown). Check debt service coverage: in stress scenario, does the business remain solvent? DSCR Year 1 = $162M / $45.36M = 3.57× — safe. Equity returns in stress are significantly compressed."
    ],
    referenceSolution: {
      approach: "Build a 5-year LBO model: project EBITDA, compute FCF (EBITDA − interest), apply FCF to debt paydown, compute exit equity value, calculate MOIC and IRR. Run both scenarios and advise.",
      reasoning: "Base Scenario: Year 0 debt = $756M, equity = $504M. EBITDA: Y1=$189M, Y2=$198.5M, Y3=$208.4M, Y4=$218.8M, Y5=$229.7M. FCF = EBITDA − $45.36M interest (simplified at constant rate on original debt — a simplification; in reality interest falls as debt is repaid). FCF: Y1=$143.6M, Y2=$153.1M, Y3=$163.0M, Y4=$173.5M, Y5=$184.3M. Total FCF over 5 years = $817.5M. Ending debt = max($756M − $817.5M, 0) = $0 (debt fully repaid by ~Year 5). Exit EV = $229.7M × 7 = $1,608M. Remaining debt ≈ $0 (fully paid). Exit equity = $1,608M. MOIC = $1,608M / $504M = 3.19×. IRR ≈ 26% (solving: $504M × (1+r)^5 = $1,608M → r ≈ 26%). Strong LBO return. Stress Scenario: Y1 EBITDA = $162M. FCF Y1 = $162M − $45.36M = $116.64M. After Y1, EBITDA grows 3%/year: Y2=$166.9M, Y3=$171.9M, Y4=$177.0M, Y5=$182.3M. FCF: Y2=$121.5M, Y3=$126.6M, Y4=$131.6M, Y5=$136.9M. Total FCF = $633.2M. Ending debt = $756M − $633.2M = $122.8M remaining. Exit EV = $182.3M × 7 = $1,276M. Exit equity = $1,276M − $122.8M = $1,153M. MOIC = $1,153M / $504M = 2.29×. IRR ≈ 18%. Still above most PE hurdle rates (15%). Debt service check: worst year is Y1. DSCR = $162M / $45.36M = 3.57× — comfortably above 1.0× (solvency). The gym chain survives even the stress scenario without distress. Recommendation: proceed with conditions. Base case returns (3.2× / 26% IRR) are excellent for PE. Stress case (2.3× / 18% IRR) still clears typical PE hurdle rates of 15-20%. The key risk is whether the stress scenario is pessimistic enough — a prolonged at-home fitness trend (not just 1-year decline) could push EBITDA lower for longer. Recommend: (1) negotiate purchase price to 6× ($1.08B) given structural headwinds, improving stress case MOIC to ~2.6×, (2) contractually protect against at-home trend with digital fitness add-on bundled into memberships."
      ,
      commonMistakes: "Not deducting interest from EBITDA to get FCF. Not reducing debt with FCF. Computing exit equity as exit EV without subtracting remaining debt. Not checking debt service coverage in the stress scenario. Treating a decline in EBITDA as automatic insolvency.",
      alternatives: "A sensitivity table across purchase multiple (5×–9×) and exit multiple (5×–8×) would be standard in a real LBO model, showing the range of outcomes. At 7× entry / 5× exit (multiple compression), base case equity = $229.7M × 5 − $0 = $1,148M; MOIC = 2.28×, still viable."
    },
    rubric: [
      { id: "bi-050-r1", text: "Base case EBITDA Year 5 ≈ $229.7M and exit EV ≈ $1,608M correctly computed" },
      { id: "bi-050-r2", text: "Debt repayment modeled using FCF; debt reaches $0 in base case by Year 5" },
      { id: "bi-050-r3", text: "Base case MOIC ≈ 3.2× and IRR ≈ 26%" },
      { id: "bi-050-r4", text: "Stress scenario modeled: exit equity ≈ $1,153M, MOIC ≈ 2.3×, IRR ≈ 18%" },
      { id: "bi-050-r5", text: "Debt service coverage checked in stress year 1 (DSCR ≈ 3.57×, no distress)" },
      { id: "bi-050-r6", text: "Recommendation: proceed with conditions (price negotiation + digital hedge), with clear reasoning" }
    ]
  }

];
