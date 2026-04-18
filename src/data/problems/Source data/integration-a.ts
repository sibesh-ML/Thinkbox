import type { Problem } from '@/types';

export const integrationProblemsA: Problem[] = [

  // ── CASE ANALYSIS (in-001 to in-005) ─────────────────────────────────────

  {
    id: "in-001",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["mece-decomposition", "unit-economics", "mental-math"],
    difficulty: "easy",
    question: "A regional gym chain has seen member count hold steady at 4,000 but monthly revenue drop from $240,000 to $192,000 over the past year. Diagnose the revenue decline and recommend one immediate action.",
    context: "The gym operates 3 locations. Membership tiers: Basic ($40/month, 60% of members), Standard ($65/month, 30%), Premium ($90/month, 10%). One year ago the tier mix was 50% Basic, 35% Standard, 15% Premium. No price changes have been made. Churn and new-member acquisition have been roughly equal.",
    hints: [
      "Revenue = members × average revenue per member. If member count is flat, focus on what changed in the revenue-per-member figure.",
      "Calculate last year's average revenue per member versus today's. The tier mix has shifted — work out the blended ARPM for each period.",
      "Last year ARPM: 0.50×$40 + 0.35×$65 + 0.15×$90 = $20+$22.75+$13.50 = $56.25. Today ARPM: 0.60×$40 + 0.30×$65 + 0.10×$90 = $24+$19.50+$9 = $52.50. Drop of $3.75/member × 4,000 = $15,000/month × 12 ≈ $180,000/year."
    ],
    referenceSolution: {
      approach: "Use MECE decomposition to separate volume effects from price/mix effects. Then apply unit economics (ARPM) to quantify the mix shift. Finally, frame a recommendation using the issue tree.",
      reasoning: "Revenue = members × ARPM. Members are flat at 4,000, so the decline is entirely a mix effect. ARPM last year: (0.50×$40) + (0.35×$65) + (0.15×$90) = $56.25. ARPM today: (0.60×$40) + (0.30×$65) + (0.10×$90) = $52.50. The $3.75 drop × 4,000 members = $15,000/month revenue lost, or $180,000 annually — consistent with the $48,000 gap ($240K–$192K = $48K/month). Members are downgrading from Premium and Standard to Basic. The immediate action is a retention offer targeting current Basic members who were previously on higher tiers: a limited-time upgrade incentive (e.g., one free month at Standard) to reverse the mix shift.",
      commonMistakes: "Blaming churn or volume when member count is explicitly flat. Failing to decompose revenue into volume × rate. Recommending a price cut instead of addressing the mix problem.",
      alternatives: "Could also frame as a revenue bridge: prior revenue – current revenue = $48K/month gap, then attribute 100% to mix. An alternative action is a loyalty program that rewards tenure on higher tiers rather than a discount."
    },
    rubric: [
      { id: "in-001-r1", text: "Correctly identifies the problem as a tier mix shift, not a volume or price problem" },
      { id: "in-001-r2", text: "Calculates ARPM for both periods and quantifies the gap ($3.75/member)" },
      { id: "in-001-r3", text: "Verifies the math reconciles with the stated revenue drop" },
      { id: "in-001-r4", text: "Recommends a specific action targeting the mix reversal" }
    ]
  },

  {
    id: "in-002",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["issue-trees", "supply-demand", "assumption-validation"],
    difficulty: "easy",
    question: "A small-town hardware store has been losing customers to an online retailer that opened a distribution center 50 miles away two years ago. Should the owner compete on price, double down on service, or pivot to a different product mix?",
    context: "The store turns over $800K/year, down from $1.1M two years ago. Margin is 38% on current sales. The owner has interviewed 40 departing customers: 25 cited price (online is ~15% cheaper on average), 10 cited convenience (free shipping), and 5 cited product range (online has 10× the SKUs). Local contractor businesses (B2B) account for 35% of current revenue and have not declined. The town has 8,000 residents and a growing population of weekend-home owners.",
    hints: [
      "Build an issue tree separating the customer base into segments that are leaving versus staying. Ask why each segment behaves differently.",
      "The B2B contractor segment is sticky — why? What makes them different from retail customers who left? That's your clue to where defensible value lives.",
      "Price competition against a scaled online retailer is likely a losing game. Service and specialization (contractor relationships, project consultation, weekend-home niche) are the defensible moats."
    ],
    referenceSolution: {
      approach: "Use an issue tree to segment customers (B2B vs. retail, price-sensitive vs. service-seeking). Apply supply-demand logic to assess where the store has structural pricing power. Validate assumptions about what the growing weekend-homeowner segment actually needs.",
      reasoning: "The store is losing price-sensitive retail customers — a segment where it cannot win long-term against a scaled competitor with 15% lower prices. But B2B contractors (35% of revenue, stable) value reliability, credit terms, and same-day availability — attributes an online retailer cannot match. The weekend-home population is a growing segment likely to value in-person consultation (they don't know local building codes, material requirements, contractor referrals). Strategy: abandon the price war, invest in contractor relationships (net-30 terms, job-site delivery, dedicated account reps) and develop a home-project consultation service for weekend-home owners. Adjust SKU mix toward project-oriented bundles rather than commodity hardware. This turns the problem into a differentiation play rather than a cost play.",
      commonMistakes: "Treating all customers as one segment. Recommending price matching without analyzing whether margin supports it (38% gross margin at $800K = $304K gross; a 15% price cut would reduce margin to ~27% assuming unchanged costs). Ignoring the B2B stability signal.",
      alternatives: "Could calculate break-even for a loyalty/discount program: a 5% price reduction to win back price-sensitive customers would cost ~$40K/year on current retail volume. Compare that to the investment required to grow the B2B and weekend-home segments."
    },
    rubric: [
      { id: "in-002-r1", text: "Segments customers into at least two groups and analyzes each separately" },
      { id: "in-002-r2", text: "Identifies B2B stability as evidence of a defensible value proposition" },
      { id: "in-002-r3", text: "Concludes price competition is structurally unwinnable and explains why" },
      { id: "in-002-r4", text: "Recommends a specific differentiation strategy tied to the weekend-homeowner opportunity or B2B deepening" },
      { id: "in-002-r5", text: "Validates or challenges at least one assumption (e.g., whether the weekend-home segment is large enough)" }
    ]
  },

  {
    id: "in-003",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["hypothesis-trees", "market-dynamics", "sensitivity-analysis"],
    difficulty: "easy",
    question: "A hospital system's emergency department wait times have risen from an average of 45 minutes to 95 minutes over 18 months despite no reduction in staffing. The CEO wants to know if this is a capacity problem, a flow problem, or a demand problem — and what to fix first.",
    context: "ED has 40 treatment bays. Average daily visits: 18 months ago = 280; today = 340 (21% increase). Average treatment time per patient: 18 months ago = 52 minutes; today = 68 minutes. Discharge-to-bed-open lag (time between patient leaving and bay being cleaned/available): 18 months ago = 8 minutes; today = 22 minutes. Staff count unchanged. Boarding (patients admitted to hospital but waiting in ED for inpatient beds): 18 months ago = 5% of visits; today = 18% of visits.",
    hints: [
      "Model ED throughput as a system: throughput = capacity / cycle time. Identify which variables have changed and by how much.",
      "The wait time increase has multiple contributing causes. Use a hypothesis tree to separate demand-side (more patients) from supply-side (slower throughput) from flow-side (boarding, discharge lag) causes.",
      "Boarding is particularly significant: 18% of 340 = ~61 patients/day occupying bays while waiting for inpatient beds. That's 61 × (however long they wait) hours of bay-time lost to non-ED patients."
    ],
    referenceSolution: {
      approach: "Build a hypothesis tree with three branches: demand increase, capacity constraint, flow/process failure. Quantify each branch's contribution to wait time increase. Use sensitivity analysis to rank which fix has the largest impact per dollar.",
      reasoning: "Three factors are simultaneously at work. (1) Demand: visits up 21% (280→340/day) with the same 40 bays means average utilization rose from 280×(52/60)/40 = 6.07 hours/bay to 340×(68/60)/40 = 9.63 hours/bay — the ED went from 76% to 120% theoretical utilization, which explains queuing. (2) Treatment time: 52→68 minutes (+31%) — this may reflect sicker patients, documentation burden, or staffing mix issues; needs further investigation but is a significant driver. (3) Flow: discharge lag tripled (8→22 min) and boarding quintupled (5%→18%). Boarding is the highest-leverage fix because it is a downstream (inpatient capacity) problem causing an upstream (ED) bottleneck. Reducing boarding from 18% to 8% would free approximately 34 bay-hours/day. Fix order: (1) address inpatient boarding with hospital-wide bed management; (2) investigate treatment time increase; (3) reduce discharge lag through housekeeping process change.",
      commonMistakes: "Treating this as purely a staffing problem. Failing to notice that theoretical utilization exceeds 100%, which by queuing theory produces exponentially growing waits. Treating boarding as an ED problem when it originates in inpatient capacity.",
      alternatives: "Could use Little's Law formally: L = λW. Average patients in system = arrival rate × average time in system. If arrivals = 340/day = 14.2/hour and we want W = 45 min, then L = 14.2 × 0.75 = 10.6 patients in system. But bays = 40, so at 10.6 average occupancy the utilization is 26% — that seems fine. The disconnect is that boarding patients occupy bays but are counted as 'in system' for far longer than a treatment visit, so effective λ and W are both higher."
    },
    rubric: [
      { id: "in-003-r1", text: "Identifies all three contributing causes: demand increase, longer treatment time, and flow problems" },
      { id: "in-003-r2", text: "Quantifies the utilization change (from ~76% to over 100%)" },
      { id: "in-003-r3", text: "Correctly identifies boarding as a downstream inpatient problem, not an ED staffing problem" },
      { id: "in-003-r4", text: "Prioritizes fixes by impact and recommends a sequenced action plan" },
      { id: "in-003-r5", text: "Uses sensitivity-style reasoning to compare the impact of each lever" }
    ]
  },

  {
    id: "in-004",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["framework-selection", "competitive-analysis", "first-principles-analysis"],
    difficulty: "medium",
    question: "A mid-size law firm specializing in employment law is considering launching a consumer-facing legal subscription service ($49/month for unlimited consultations via app). Two partners support it, two oppose it. Structure a decision framework and give a recommendation.",
    context: "The firm has 12 partners, 40 associates, $22M annual revenue, and 92% utilization rates. Its current client base is 80% corporate (companies defending employment claims) and 20% individual plaintiffs. The subscription model would serve individual workers — often the opposing side in current matters. Average associate fully-loaded cost: $180,000/year. A subscription service would require 3 dedicated associates, a tech platform ($400K build, $80K/year maintenance), and marketing. The market: 150 million US workers, ~8% face a workplace legal issue annually, and only 12% of those currently get legal help.",
    hints: [
      "Before evaluating financial viability, check for a structural problem: what happens to the firm's corporate clients if they learn it is also advising the workers suing them?",
      "Use a framework that separates strategic fit (does this align with what the firm is?) from financial viability (do the numbers work?) from execution risk (can they pull it off?).",
      "The conflict-of-interest issue is likely fatal to this idea in its current form. A first-principles analysis: the firm's value proposition to corporate clients is dedicated, undivided advocacy. A subscription service to workers directly contradicts that."
    ],
    referenceSolution: {
      approach: "Select a three-lens framework: (1) strategic alignment / conflict of interest, (2) unit economics and market sizing, (3) execution feasibility. Apply first-principles reasoning to the conflict-of-interest question before running the financial model.",
      reasoning: "Strategic: The firm's core business is defending corporations against employee claims. Simultaneously advising employees — even on unrelated matters — creates real and perceived conflicts. Bar rules (Model Rules 1.7, 1.9) would require conflict checks for every subscriber. If Subscriber X works at Client Corp Y and has an employment issue with Corp Y, the firm cannot serve them. With a large subscription base, this conflict would arise constantly, eroding the service's value proposition. This is potentially fatal. Financial (assuming the conflict is solved or the service is spun off separately): TAM = 150M workers × 8% with issues = 12M events/year. Addressable share capturing 1% = 120,000 subscribers × $49 = $5.9M/year revenue. Cost: 3 associates × $180K = $540K + $80K maintenance + marketing (estimate $500K/year) = ~$1.1M/year. Platform payback: $400K / ($5.9M – $1.1M) operating margin ≈ 1 month — but this assumes 120,000 subscribers, which is aggressive for a law firm brand. Execution: 92% utilization means the firm is already capacity-constrained; dedicating 3 associates reduces corporate capacity. Recommendation: Do not pursue under the current firm brand. If there is genuine interest, spin out a separate entity with separate attorneys to avoid conflict issues.",
      commonMistakes: "Running the financial model without checking the conflict-of-interest question first. Assuming corporate and consumer clients are separable without checking bar rules. Ignoring the utilization constraint.",
      alternatives: "Alternative framing: view the subscription service as a marketing funnel — workers with serious claims become plaintiff clients. But this makes the conflict-of-interest problem worse, not better, since it directly pits the firm against its corporate clients."
    },
    rubric: [
      { id: "in-004-r1", text: "Identifies conflict of interest as the primary structural barrier before financial analysis" },
      { id: "in-004-r2", text: "Selects and applies a multi-lens framework (strategy, financials, execution) rather than jumping to one dimension" },
      { id: "in-004-r3", text: "Correctly estimates rough TAM and unit economics of the subscription model" },
      { id: "in-004-r4", text: "Notes the 92% utilization as a capacity constraint" },
      { id: "in-004-r5", text: "Gives a clear recommendation (reject or spin off) with reasoning" }
    ]
  },

  {
    id: "in-005",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["mece-decomposition", "market-sizing", "economic-estimation"],
    difficulty: "medium",
    question: "A city government is evaluating whether to subsidize electric vehicle charging infrastructure or invest the same budget in expanding bus rapid transit. Both options cost $40M. Analyze which investment better serves the city's stated goals of reducing emissions and improving mobility equity, and recommend one.",
    context: "City population: 600,000. Car ownership rate: 58% of households (average 1.4 cars per household owning). Current EV share of registered vehicles: 4%. Bus ridership: 180,000 trips/day. The bottom income quartile has a car ownership rate of 22%; the top quartile has 91%. Current bus routes cover 70% of the city area, with 30% coverage gaps mostly in lower-income outer neighborhoods. Average car trip emits 2.8 kg CO2; average bus trip emits 0.4 kg CO2 per passenger.",
    hints: [
      "Decompose each option by its two goal dimensions: emissions reduction and mobility equity. Score each option on each dimension before combining.",
      "For emissions: EV charging helps current car owners switch to EVs. Who are current car owners? Check the income distribution. For equity: expanding bus routes helps people without cars. Again, check the income distribution.",
      "The income-ownership data is a strong signal: lower-income residents are much less likely to own cars. EV charging primarily benefits middle- and upper-income households. Bus expansion directly benefits the unserved 30% of city area, which is disproportionately lower-income."
    ],
    referenceSolution: {
      approach: "Use MECE decomposition to evaluate each option against each stated goal independently. Apply market-sizing reasoning to estimate the population served by each. Use economic estimation for emissions impact. Combine into a recommendation.",
      reasoning: "EMISSIONS: Current car fleet: 600K × (assume 2.3 people/household) = ~261K households × 58% ownership = ~151K car-owning households × 1.4 cars = ~212K vehicles. 4% are EVs → ~203K ICE vehicles. A $40M subsidy might install ~2,000 charging stations (estimate $20K each for public Level 2), which could accelerate EV adoption among, say, 10% of car-owning households = 15,100 additional EVs. If each ICE vehicle emits 2.8 kg CO2 per trip at ~4 trips/day: 15,100 vehicles × 4 trips × 2.8 kg × 365 days = ~62M kg CO2/year avoided. EQUITY: Bus rapid transit at $40M could extend routes into underserved areas (30% of city area). Lower-income neighborhoods are in coverage gaps. The bottom quartile has only 22% car ownership; these residents depend on transit. Adding BRT in the 30% gap area serves approximately 600K × 30% area × (assume similar density) × transit-dependent share — a rough estimate of 80,000–120,000 residents gaining meaningfully improved mobility. RECOMMENDATION: BRT better serves the equity goal directly. On emissions, both options reduce CO2, but BRT's per-trip emission advantage (0.4 vs. 2.8 kg) means that every trip shifted from car to bus avoids more CO2 than converting one car to electric. BRT wins on both equity and likely emissions per dollar. Recommendation: invest in BRT, with a note to pursue EV charging through private investment or separate federal grants that don't draw from the equity budget.",
      commonMistakes: "Treating both goals as equal without checking which population each option actually serves. Failing to connect the income-ownership data to the equity analysis. Computing absolute emissions without considering how many people each investment reaches.",
      alternatives: "Could frame as cost-effectiveness: emissions avoided per dollar spent. BRT likely wins because modal shift (car to bus) avoids 2.4 kg CO2/trip vs. ICE-to-EV's smaller saving per vehicle, and at lower per-beneficiary cost for equity."
    },
    rubric: [
      { id: "in-005-r1", text: "Evaluates each investment against both goals (emissions and equity) separately before combining" },
      { id: "in-005-r2", text: "Uses the income-car ownership data to determine which population each investment serves" },
      { id: "in-005-r3", text: "Estimates approximate emissions impact for at least one option with reasonable assumptions" },
      { id: "in-005-r4", text: "Identifies that EV charging is regressive (benefits car owners, who skew wealthier) relative to BRT" },
      { id: "in-005-r5", text: "Gives a clear recommendation with justification tied to both goal dimensions" }
    ]
  },

  // ── MULTI-SKILL SYNTHESIS (in-006 to in-010) ──────────────────────────────

  {
    id: "in-006",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["fermi-problems", "unit-economics", "orders-of-magnitude"],
    difficulty: "easy",
    question: "Estimate whether a food truck selling burritos at a major urban university (40,000 students) could generate enough revenue to be a viable full-time business for the owner-operator.",
    context: "The food truck operates 5 days per week during the academic year (36 weeks). The university campus has dining halls that serve breakfast and dinner; the food truck operates at lunch only. Burritos sell for $11 each. The owner-operator pays herself a salary. You may assume reasonable values for costs you are not given.",
    hints: [
      "Start with demand: how many students might buy a burrito from a food truck on a given day? Factor in competition from dining halls and other options.",
      "Estimate reasonable operating costs: ingredients (food cost ratio for Mexican fast-casual is typically 28-32%), truck payment or lease, fuel, permits, and the owner's salary.",
      "Check the math: is daily revenue enough to cover daily costs with margin? Then annualize to check viability."
    ],
    referenceSolution: {
      approach: "Estimate demand using Fermi reasoning (population × capture rate). Build a unit economics model (revenue per day, costs per day). Annualize and check orders-of-magnitude for plausibility.",
      reasoning: "DEMAND: 40,000 students; maybe 60% are on campus on any given day = 24,000 present. Of those, perhaps 20% buy lunch off-campus (the rest use dining halls or bring food) = 4,800 potential off-campus lunch buyers. The food truck might capture 5-10% of those = 240-480 customers/day. Use 300 as a central estimate. REVENUE: 300 burritos × $11 = $3,300/day. COSTS: Food cost at 30% = $990. Truck lease/depreciation ≈ $60/day (assume $1,500/month / 22 operating days). Fuel/propane ≈ $30/day. Permits/insurance ≈ $20/day. Owner salary target: $60,000/year / (36 weeks × 5 days) = $333/day. Total costs ≈ $990 + $60 + $30 + $20 + $333 = $1,433/day. Operating profit before owner pay: $3,300 – $1,100 = $2,200. After owner pay: $2,200 – $333 = $1,867/day operating profit. That's substantial — but this ignores slow days, equipment repairs, and off-season. Annual revenue: $3,300 × 180 days = $594,000. Annual profit (rough): $1,867 × 180 = $336,000. This is highly viable. Sanity check: $594K revenue for a food truck is on the high end but not unrealistic for a high-traffic university location. The key assumption is 300 sales/day — if it's 150, profit halves but still viable.",
      commonMistakes: "Assuming all 40,000 students are potential customers each day. Using retail food cost ratios (much higher) instead of food service ratios. Forgetting the owner's salary as a cost.",
      alternatives: "Sensitivity check: break-even volume at given cost structure (excluding owner salary) = $1,100 / $11 = 100 burritos/day. That is a low bar, further confirming viability."
    },
    rubric: [
      { id: "in-006-r1", text: "Applies realistic capture rate to student population (not treating all 40K as daily buyers)" },
      { id: "in-006-r2", text: "Includes food cost, fixed operating costs, and owner salary in the cost model" },
      { id: "in-006-r3", text: "Arrives at an annualized revenue and profit figure" },
      { id: "in-006-r4", text: "Sanity-checks the result and identifies the key assumption (daily sales volume)" }
    ]
  },

  {
    id: "in-007",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["issue-trees", "business-model-evaluation", "identifying-unknowns"],
    difficulty: "easy",
    question: "A nonprofit literacy organization has been offered a $500,000 grant to expand its tutoring program from one city to three additional cities. The board is excited, but the executive director is cautious. What questions must be answered before accepting, and what is the most likely hidden risk?",
    context: "Current program: 1 city, 200 tutors (all volunteers), 1,200 students served annually, $280,000 operating budget. The grant would fund 3 years of expansion salaries (2 regional coordinators × 3 years), marketing in new cities, and onboarding materials. After year 3, the expectation is that the expanded programs are self-sustaining through local donations and government grants. The organization has one full-time staff member and three part-time contractors.",
    hints: [
      "Draw an issue tree: what must be true for the expansion to succeed? Separate the short-term (can we launch?) from the long-term (can we sustain?).",
      "The grant covers 3 years of specific costs. What costs does it NOT cover? What happens in year 4?",
      "The sustainability assumption (self-sustaining via local donations after year 3) is the riskiest part. Has the organization tested this in its current city? What evidence do they have?"
    ],
    referenceSolution: {
      approach: "Build an issue tree separating launch feasibility, year 1-3 execution capacity, and post-grant sustainability. Use the identifying-unknowns skill to catalog what is not in the grant offer. Apply business model evaluation to assess whether the post-grant model is credible.",
      reasoning: "LAUNCH: The organization has 1 full-time staff. Adding 3 cities simultaneously is a 4× geographic expansion of a team that has never expanded before. The grant covers regional coordinator salaries but not the executive director's additional management load, travel, or back-office systems needed to manage 4 locations. EXECUTION: Volunteer recruitment is the core program driver. Does the model work in cities where the organization has no brand recognition? What is the plan to recruit 200 tutors in each new city? SUSTAINABILITY: The grant assumes that after 3 years, each new city generates its own funding. This is a strong assumption. Has the current city achieved donation self-sufficiency? (The current $280K budget presumably comes from somewhere — grants? individual donors? — and that model took years to build.) The hidden risk: the organization accepts the grant, expands, then cannot sustain the expansion after year 3, leaving 3,600 additional students enrolled in programs that must be shut down — worse than not expanding. KEY QUESTIONS: (1) What is the current city's funding mix and how long did it take to build? (2) Does the grant cover expansion of back-office capacity (accounting, volunteer coordination systems)? (3) What is the contingency plan if local fundraising in new cities falls short of projections?",
      commonMistakes: "Treating a grant as 'free money' without analyzing what it does and does not cover. Failing to model the post-grant state. Not accounting for the organizational capacity constraint (1 full-time staff).",
      alternatives: "Alternative framing: negotiate to expand to 1 additional city rather than 3, with a stronger sustainability plan, and use the remaining grant funds to build back-office capacity."
    },
    rubric: [
      { id: "in-007-r1", text: "Identifies post-grant sustainability as the primary risk, not launch feasibility" },
      { id: "in-007-r2", text: "Catalogs costs the grant does NOT cover (back office, ED management load)" },
      { id: "in-007-r3", text: "Raises the volunteer recruitment question for markets with no brand presence" },
      { id: "in-007-r4", text: "Articulates the downside scenario: expanded programs that must be shut down" },
      { id: "in-007-r5", text: "Provides specific questions the board must answer before accepting" }
    ]
  },

  {
    id: "in-008",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["decomposition-to-fundamentals", "supply-demand", "sanity-checks"],
    difficulty: "medium",
    question: "Housing in a mid-size city (population 350,000) has become unaffordable for median-income households. The mayor is considering three policies: (A) upzone residential areas to allow 4-story apartment buildings, (B) implement rent control on units built before 2000, (C) offer $15,000 down-payment assistance grants to first-time buyers. Evaluate each policy using supply-demand reasoning and recommend which to prioritize.",
    context: "Median household income: $58,000. Median home price: $420,000. Median rent for 2BR: $1,850/month. Standard affordability threshold: housing costs ≤ 30% of gross income. Rental vacancy rate: 2.1%. Homeownership rate: 42% (down from 54% in 2010). City housing stock: 140,000 units, 60% built before 2000. Annual new construction: 800 units/year. Estimated housing deficit (units needed to restore 5% vacancy): 4,200 units.",
    hints: [
      "Test each policy against the fundamental supply-demand problem: is the city short of housing supply, or is the demand side the issue? The vacancy rate is a strong signal.",
      "Rent control affects price but not quantity. Upzoning affects quantity. Down-payment assistance affects who can access existing supply but not the quantity. Use these distinctions to evaluate each policy.",
      "Run a rough affordability calculation: at $58K income, the 30% threshold is $1,450/month or $17,400/year. Compare to actual rent ($1,850/month) and mortgage payment on median home price."
    ],
    referenceSolution: {
      approach: "Decompose to fundamentals: what does each policy actually change (supply, demand, price, or access)? Apply supply-demand analysis. Sanity-check each policy's likely effect size against the stated housing deficit.",
      reasoning: "FUNDAMENTALS: Affordability threshold at $58K = $58,000 × 30% / 12 = $1,450/month. Current rent = $1,850 → $400/month unaffordable. Mortgage on $420K at 7% 30yr = ~$2,800/month → deeply unaffordable for median buyer. Vacancy = 2.1% (healthy = 5%), indicating a supply shortage of approximately 4,200 units. The core problem is supply. POLICY A (Upzoning): Increases potential supply. Effect depends on whether developers build. At 800 units/year current pace, the deficit takes 5+ years to close even with upzoning. But upzoning is necessary (though not sufficient) to close the gap. Long-term downward pressure on prices. POLICY B (Rent control): Affects 60% × 140,000 = 84,000 units. Protects existing tenants but (per economic consensus) reduces rental supply over time as landlords convert units or let them deteriorate. Does not address the root cause (supply shortage). May worsen vacancy by encouraging current tenants to hold units longer. POLICY C (Down-payment assistance): $15,000 grants help buyers afford the 20% down payment (~$84,000 needed for $420K home). Helps individual buyers access existing ownership units but does not increase supply. With a 2.1% vacancy rate, this may simply bid up prices. RECOMMENDATION: Prioritize Policy A (upzoning) as the root-cause solution. Policy C can complement it for equity (helping lower-income first-time buyers once more supply exists). Avoid Policy B or pair it with supply-side reforms to prevent the known negative supply effects.",
      commonMistakes: "Evaluating rent control purely on its protective effect for current tenants without considering supply effects. Recommending all three policies without prioritizing. Failing to connect the 2.1% vacancy rate to the supply diagnosis.",
      alternatives: "Could add a fourth option: incentivize conversions of commercial space to residential. Also worth noting that upzoning alone doesn't guarantee construction — may need development incentives alongside."
    },
    rubric: [
      { id: "in-008-r1", text: "Correctly diagnoses a supply shortage as the root cause using the vacancy rate" },
      { id: "in-008-r2", text: "Evaluates each policy by what it actually changes (supply, demand, price, or access)" },
      { id: "in-008-r3", text: "Notes that rent control does not increase supply and may reduce it" },
      { id: "in-008-r4", text: "Calculates the affordability gap quantitatively ($400/month rent shortfall)" },
      { id: "in-008-r5", text: "Gives a prioritized recommendation (upzoning first) with clear reasoning" }
    ]
  },

  {
    id: "in-009",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["estimation-chains", "population-estimation", "pyramid-principle"],
    difficulty: "medium",
    question: "You are advising a health insurance company considering entering the telemedicine market. Estimate the addressable market size, identify the two largest risks, and structure a one-page recommendation for the CEO using the Pyramid Principle.",
    context: "The US has approximately 335 million people. About 91% have health insurance (public or private). Telemedicine penetration: approximately 22% of insured people used at least one telemedicine visit in the past year. Average revenue per telemedicine visit to the platform: $45 (after payer reimbursement). The company currently covers 4.2 million members. Top three telemedicine competitors (Teladoc, MDLive, Amwell) collectively hold ~65% market share. The company's medical management team has clinical expertise but no technology platform or software engineers.",
    hints: [
      "Market sizing: work from total insured population → current telemedicine users → revenue potential. Then estimate what share is realistically capturable.",
      "For risks, think about what could go wrong: competitive (incumbents have scale), execution (no tech capability), financial (reimbursement rates may change), regulatory, or strategic (member behavior may not shift).",
      "Pyramid Principle structure: lead with your recommendation (the answer), then layer in the supporting arguments (market opportunity, competitive reality, risk mitigation), not the analysis."
    ],
    referenceSolution: {
      approach: "Use an estimation chain to size the market. Apply competitive analysis to assess entry difficulty. Structure the output in Pyramid Principle format: recommendation first, then supporting pillars.",
      reasoning: "MARKET SIZE: US insured population = 335M × 91% = ~305M insured. Current telemedicine users = 305M × 22% = ~67M users/year. Average 2.3 visits/user/year (estimate) = ~154M visits/year. At $45/visit = ~$6.9B total US telemedicine market. Capturable share: the company covers 4.2M members. If 22% use telemedicine and average 2.3 visits, that's 4.2M × 22% × 2.3 = ~2.1M visits/year × $45 = ~$95M potential captive revenue. But this assumes the company captures 100% of its own members' telemedicine spend, which requires either buying or building a platform. RISKS: (1) Build/buy risk — no tech capability. Building takes 2-3 years; buying a platform costs $200M–$1B+ (Teladoc acquired Livongo for $18.5B). Partnering (whitelabeling a competitor's platform) is faster but creates dependency. (2) Competitive moat — if members can access Teladoc directly, the insurer's platform must offer something better (lower cost-share, tighter EHR integration). PYRAMID STRUCTURE: RECOMMENDATION: Partner with an existing telemedicine platform rather than build or buy, using the company's 4.2M member base as a distribution advantage. ARGUMENT 1: Market is large and growing ($6.9B US), and the company has a captive addressable pool of ~$95M/year. ARGUMENT 2: Build/buy is too slow/expensive; partnership captures 80% of value at 10% of cost. ARGUMENT 3: Manage competitive risk by negotiating exclusive or preferred rates and integrating telemedicine into member benefits design.",
      commonMistakes: "Sizing the total US market without identifying the realistic capturable segment (own member base). Recommending build without costing it. Delivering recommendations as analysis rather than applying Pyramid Principle (answer-first).",
      alternatives: "Could also recommend against entry if the margin on $95M revenue doesn't exceed the partnership investment — worth calculating: if partnership costs $15M/year and the insurer earns $5/visit margin, 2.1M visits = $10.5M gross — potentially margin-negative. This would flip the recommendation."
    },
    rubric: [
      { id: "in-009-r1", text: "Estimates total US telemedicine market size using an estimation chain (population → users → visits → revenue)" },
      { id: "in-009-r2", text: "Identifies the capturable segment (own member base) as distinct from total market" },
      { id: "in-009-r3", text: "Names build/buy/partner tradeoff and identifies lack of tech capability as primary execution risk" },
      { id: "in-009-r4", text: "Structures the output recommendation-first (Pyramid Principle), not analysis-first" },
      { id: "in-009-r5", text: "Includes a second distinct risk beyond execution (competitive, financial, or regulatory)" }
    ]
  },

  {
    id: "in-010",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["challenging-defaults", "market-dynamics", "scqa-framework"],
    difficulty: "medium",
    question: "A successful local bookstore owner is being approached by investors who want to fund 10 new locations over 3 years. The owner's instinct is to say yes — growth is exciting. Challenge the default assumption that expansion is the right move, and structure your pushback using the SCQA framework.",
    context: "Current store: 1 location, 12 years old, $1.1M annual revenue, 18% net margin ($198,000 profit). Owner takes $85,000 salary, leaving $113,000 retained. 80% of revenue is books; 20% is events, gifts, and a small café. The investor term sheet: $2M for 30% equity, with the expectation of 10 stores in 3 years and a potential acquisition exit in 5 years. Independent bookstore failure rate within 5 years: approximately 35%. National bookstore chains have struggled (Borders collapsed; Barnes & Noble has been shrinking).",
    hints: [
      "Challenge the default: what is the owner giving up by accepting the investment? Equity, control, and the low-stress profitability of a single well-run store.",
      "Apply market dynamics: why has every large bookstore chain struggled? What makes the current store successful? Can that be replicated at scale?",
      "SCQA: Situation (profitable independent, offered growth capital) → Complication (the things that make it work may not scale) → Question (should I accept?) → Answer (here is the recommendation)."
    ],
    referenceSolution: {
      approach: "Challenge the default assumption that growth is good by examining what the current store's success depends on. Apply market dynamics analysis to the chain bookstore track record. Structure the argument using SCQA.",
      reasoning: "SITUATION: The store is profitable, stable, and generating $113K retained earnings beyond owner salary on a $2M valuation implied by the 30% equity offer. COMPLICATION: (1) What makes this store work — 12 years of community trust, the owner's personal curation and relationships — may not transfer to 10 new locations managed by hired staff. (2) The chain bookstore model has failed repeatedly (Borders bankrupt, Barnes & Noble in decline). Adding more stores doesn't create a competitive moat; it creates overhead. (3) The investor's exit goal is acquisition — who buys 10 indie bookstores? If no acquirer materializes, the owner is left with a larger, more complex operation they gave up 30% of. (4) The 35% failure rate for indie bookstores means 3-4 of the 10 new stores likely fail, dragging down the profitable core. (5) The $2M investment is for 30% equity — implying a $6.7M valuation. The current store earns $198K net; at a 10× multiple that's $1.98M. The investor's valuation implies 3.3× the current store's value based on growth that hasn't happened. QUESTION: Is growth + exit really better than a well-run, owner-controlled single location generating $198K/year indefinitely? ANSWER: Do not accept on current terms. Counter-offer: a smaller raise for 1-2 additional locations (not 10), with no exit obligation and a buyback provision. Or simply decline and grow organically if at all.",
      commonMistakes: "Treating the investment offer as unambiguously positive. Failing to calculate the implied valuation and compare it to what the current store is actually worth. Not identifying what specifically makes the current store work and whether that scales.",
      alternatives: "Could accept if the investor terms include management support and the owner is personally ready for a CEO role managing multi-location operations — but the business case needs more validation first."
    },
    rubric: [
      { id: "in-010-r1", text: "Identifies at least two specific reasons why the single-store success may not transfer to 10 locations" },
      { id: "in-010-r2", text: "References the chain bookstore failure pattern as evidence against the growth thesis" },
      { id: "in-010-r3", text: "Calculates or estimates the implied valuation and notes the gap from current earnings" },
      { id: "in-010-r4", text: "Structures the argument using SCQA (or a close equivalent: situation → problem → question → answer)" },
      { id: "in-010-r5", text: "Gives a concrete alternative to outright rejection (smaller deal, organic growth, counter-terms)" }
    ]
  },

  // ── AMBIGUOUS PROBLEM SOLVING (in-011 to in-015) ─────────────────────────

  {
    id: "in-011",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["sensible-defaults", "bounding-estimates", "framework-selection"],
    difficulty: "easy",
    question: "Your manager tells you 'sales are down' and asks you to figure out why. You have access to the company's internal data systems but no further context. Describe your first 30 minutes of analysis: what questions you ask, what data you pull, and what hypotheses you form.",
    context: "You work as a business analyst at a B2B software company selling project management tools. The company has approximately 800 paying customers, ranging from small teams (5 seats) to enterprise (500+ seats). Revenue is a mix of monthly and annual subscriptions. You have access to: CRM data, billing records, product usage analytics, support ticket logs, and a recent customer satisfaction survey (NPS: 34, down from 47 six months ago).",
    hints: [
      "Before pulling data, clarify the question: 'sales are down' could mean new sales fell, revenue fell, or both. These have different causes. Which metric, over what time period, versus what baseline?",
      "Use sensible defaults to structure your first pass: revenue can only fall if (a) fewer new customers, (b) more churn, (c) lower average contract value, or (d) some combination. This is your MECE framework.",
      "The NPS drop is a clue. Form a hypothesis: customer satisfaction fell, which may be causing higher churn or reducing expansion revenue — both reduce revenue without necessarily reducing new sales."
    ],
    referenceSolution: {
      approach: "Clarify the ambiguous statement before analyzing. Use a MECE revenue decomposition as a framework. Form bounded hypotheses. The NPS data provides a pre-existing clue that should anchor early hypotheses.",
      reasoning: "STEP 1 — CLARIFY: Ask what 'down' means precisely: (a) new ARR bookings down? (b) total revenue down? (c) both? Over what period (month? quarter? year-on-year)? The answer changes the analysis entirely. STEP 2 — DECOMPOSE: Revenue = (existing customers × average contract value) + new customers – churned customers. In a subscription business, churn and expansion (upsell/downsell) are often larger drivers than new sales. STEP 3 — PULL KEY METRICS (first 10 min): Monthly revenue trend for past 12 months. New customer count per month. Churned customers per month (and their ARR contribution). Average contract value trend. STEP 4 — FORM HYPOTHESES: H1 (Churn-driven): The NPS drop from 47 to 34 suggests satisfaction issues. Dissatisfied customers churn. Check if churn rate increased in the 2-3 months following the NPS decline. H2 (New sales slowdown): Check new customer additions per month — are they flat or declining? Compare to prior year seasonality. H3 (Contraction): Are existing customers downgrading (fewer seats)? Check seat counts over time. STEP 5 — BOUND: The 13-point NPS drop is large enough to materially affect churn in a B2B SaaS context. This should be the lead hypothesis to test first. EXPECTED OUTPUT after 30 min: A confirmed definition of 'down,' a revenue bridge showing contribution of churn vs. new sales vs. expansion, and a prioritized set of 2-3 hypotheses to investigate next.",
      commonMistakes: "Jumping into data without clarifying the question. Treating 'sales down' as definitely meaning new customer acquisition (it could be churn). Ignoring the NPS clue which is already provided.",
      alternatives: "Could also start with the support ticket log to see if there is a product issue or specific feature complaint driving the satisfaction drop — this is a faster qualitative signal than waiting for billing data."
    },
    rubric: [
      { id: "in-011-r1", text: "Starts by clarifying what 'sales are down' means before pulling data" },
      { id: "in-011-r2", text: "Uses a MECE revenue decomposition (new + existing – churn) as the organizing framework" },
      { id: "in-011-r3", text: "Incorporates the NPS data as a leading hypothesis clue" },
      { id: "in-011-r4", text: "Identifies at least 3 specific data pulls (revenue trend, churn, new customers) with clear purpose for each" },
      { id: "in-011-r5", text: "Defines what a 30-minute deliverable looks like (prioritized hypotheses, not the final answer)" }
    ]
  },

  {
    id: "in-012",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["assumption-validation", "rebuilding-mental-models", "logic-trees"],
    difficulty: "easy",
    question: "A parent asks: 'My teenage daughter spends 6 hours a day on social media. Should I be worried?' Treat this as an analytically ambiguous problem. What clarifying questions would change your answer, and what does the research actually suggest about the relationship between social media use and teen wellbeing?",
    context: "You are advising the parent as someone who has studied the topic. The parent has a 15-year-old daughter. The 6 hours/day figure is self-reported by the daughter. The parent has noticed the daughter seems 'more anxious' lately but cannot point to a specific change.",
    hints: [
      "The question contains multiple hidden assumptions: that 6 hours is a lot, that social media causes harm, that anxiety and social media are causally linked. Challenge each.",
      "Clarifying questions: What type of content? Passive scrolling vs. active connection? What time of day (especially sleep displacement)? Has anything else changed (school stress, friendships, family)?",
      "The research on social media and teen wellbeing is more nuanced than public discourse suggests. The effect sizes are real but small for most teens; specific high-risk uses (passive consumption, social comparison content, night use displacing sleep) are more reliably harmful."
    ],
    referenceSolution: {
      approach: "Rebuild the mental model: challenge the implicit causal chain (time → harm). Use a logic tree to separate the different mechanisms by which social media might or might not affect wellbeing. Validate assumptions with what research actually shows.",
      reasoning: "IMPLICIT ASSUMPTIONS TO CHALLENGE: (1) 6 hours is 'a lot' — compared to what? Average US teen screen time including TV, gaming, and social is 7-8 hours/day. (2) Social media causes anxiety — the causal direction is contested; anxious teens may seek social media, not the reverse. (3) The self-reported figure is accurate — self-reports of screen time are typically underestimates by 20-40%. CLARIFYING QUESTIONS THAT CHANGE THE ANALYSIS: (a) Is this 6 hours of active social connection (texting friends, video calls) vs. passive scrolling of curated content? Active use shows near-zero negative effects; passive consumption shows moderate negative effects. (b) Does use extend after 10 pm? Sleep displacement is the most robust harm mechanism in the literature. (c) What platforms? TikTok/Instagram (visually comparative) vs. Discord (friend groups) have different effect profiles. (d) Has anything else changed (friend conflict, academic pressure, parental relationship)? Anxiety has many causes. WHAT RESEARCH SUGGESTS: Jean Twenge's work shows correlations between high social media use and depression in teen girls; but Jonathan Haidt's critics (Amy Orben, Andrew Przybylski) note effect sizes are small (r ≈ 0.05-0.10), comparable to wearing glasses or eating potatoes. The more reliable findings are specific: (1) night use displacing sleep → significantly worse mental health; (2) passive comparison content on Instagram/TikTok → moderate negative effects for girls; (3) active social connection → neutral or positive. RECOMMENDATION: Don't focus on hours. Focus on: type of content, time of day use, and what the daughter herself reports about how it makes her feel. The conversation with the daughter is more valuable than a screen-time limit.",
      commonMistakes: "Accepting the causal assumption (social media → anxiety) without questioning it. Treating 6 hours as definitively harmful without context. Ignoring the possibility that anxiety is the cause, not the consequence, of high social media use.",
      alternatives: "Could also recommend a simple experiment: 1-week partial reduction in social media (by 2 hours) and self-report of mood, with the daughter participating voluntarily — this generates personal evidence rather than relying on population studies."
    },
    rubric: [
      { id: "in-012-r1", text: "Challenges at least two implicit assumptions (causation direction, what '6 hours' means, self-report accuracy)" },
      { id: "in-012-r2", text: "Distinguishes active vs. passive social media use as having different effects" },
      { id: "in-012-r3", text: "Identifies sleep displacement as the most robust harm mechanism" },
      { id: "in-012-r4", text: "Accurately represents the research nuance (real but small effect sizes, contested causation)" },
      { id: "in-012-r5", text: "Gives a practical recommendation that focuses on use quality rather than raw hours" }
    ]
  },

  {
    id: "in-013",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["mece-decomposition", "unit-economics", "sensitivity-analysis"],
    difficulty: "medium",
    question: "A city is debating whether to build a new light rail line at a cost of $1.2 billion. Proponents claim it will 'transform urban mobility.' Opponents say it will never pay for itself. Evaluate both claims with quantitative reasoning, identify the key assumptions that determine who is right, and state what you would need to know to give a definitive answer.",
    context: "Proposed route: 14 miles, connecting downtown to the airport and two dense residential neighborhoods. Projected ridership: 28,000 daily boardings at full build-out (Year 5). Ticket price: $3.50/boarding. Operating cost estimate: $18M/year (labor, maintenance, power). Construction timeline: 4 years. City population: 480,000. Current bus route on the same corridor carries 8,000 daily boardings.",
    hints: [
      "Test the 'pay for itself' claim: calculate annual farebox revenue at projected ridership and compare to operating costs + annualized capital cost.",
      "Use sensitivity analysis: what ridership level is needed to cover operating costs? To cover the full cost of capital? How does this compare to the projection?",
      "The 'transform mobility' claim is harder to quantify but can be bounded: what % of current car trips on that corridor would need to shift to rail to have a meaningful emissions or congestion impact?"
    ],
    referenceSolution: {
      approach: "Build a financial model to evaluate the 'pay for itself' claim. Use sensitivity analysis to find break-even ridership. Apply MECE decomposition to the 'transform mobility' claim (mobility = access + speed + equity + emissions). Identify the 3 key assumptions that drive the answer.",
      reasoning: "FINANCIAL MODEL: Annual farebox revenue at 28,000 boardings/day × 365 × $3.50 = $35.7M/year. Operating costs: $18M/year. Operating surplus: $17.7M/year. Capital cost annualized: $1.2B over 30-year bond at 4% = annual payment ≈ $70M/year. Total annual cost: $18M + $70M = $88M/year. Revenue covers only $35.7M / $88M = 40.6% of total costs. Opponents are right: this line will not pay for itself financially. BREAK-EVEN RIDERSHIP: Operating break-even only: $18M / ($3.50 × 365) = 14,085 boardings/day — achievable. Full cost break-even: $88M / ($3.50 × 365) = 68,904 boardings/day — would require more than doubling the projection. 'TRANSFORM MOBILITY' CLAIM: The corridor currently carries 8,000 bus boardings. Adding 28,000 rail boardings = 20,000 incremental trips, most likely shifted from cars. Car trips on a 14-mile urban corridor: assume average trip is 8 miles at 2.8 kg CO2/trip. 20,000 × 2.8 kg = 56,000 kg/day = 20,500 tonnes CO2/year. At a city of 480,000 and typical urban car fleet of 0.5 cars per person making 2 trips/day = 480,000 trips/day on all city roads — this corridor shift is ~4% of total trips. Meaningful but not transformative unless the city has a network plan. KEY ASSUMPTIONS: (1) Ridership projection accuracy — transit projections are notoriously optimistic; actual ridership at Year 5 could be 60-80% of projection. (2) Induced demand — if rail is faster and more reliable, it may generate new trips that would not have been made, improving the ridership case. (3) Economic development premium — transit investment often raises property values along the corridor; property tax uplift could partially fund the capital cost. VERDICT: The financial 'pay for itself' claim is false by standard infrastructure accounting. The mobility transformation claim depends on whether this is the first line of a network (high strategic value) or an isolated investment (lower value). The key question: Is this part of a broader transit network plan?",
      commonMistakes: "Comparing farebox revenue only to operating costs (ignoring capital cost). Accepting ridership projections without a sensitivity check. Failing to note that 'pay for itself' can mean different things (farebox recovery vs. total economic value).",
      alternatives: "Economic value framing: travel time savings for 28,000 daily riders × average time saved × value of time. If average time saved is 15 minutes at $15/hour value, that's $28,000 × 0.25 hours × $15 × 365 = $38.3M/year in user value — slightly above operating cost, but far short of full capital cost."
    },
    rubric: [
      { id: "in-013-r1", text: "Correctly calculates annual farebox revenue and compares it to both operating costs and full annualized costs" },
      { id: "in-013-r2", text: "Calculates break-even ridership for both operating and full-cost coverage" },
      { id: "in-013-r3", text: "Quantifies the 'transformation' claim (% of city trips, emissions impact)" },
      { id: "in-013-r4", text: "Identifies at least 2 key assumptions that could change the verdict (ridership accuracy, network effect, property tax uplift)" },
      { id: "in-013-r5", text: "States a nuanced verdict: financially it won't pay for itself, but may be justified on broader grounds" }
    ]
  },

  {
    id: "in-014",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["analogical-reasoning", "competitive-analysis", "market-dynamics"],
    difficulty: "medium",
    question: "Streaming music is dominated by Spotify and Apple Music. A founder asks whether there is still a viable path to a profitable niche streaming music service. Use analogical reasoning from other media markets to structure your answer.",
    context: "Spotify has 600M+ users, 240M+ paid, and still loses money on thin margins (licensing costs ~75% of revenue). Apple Music is profitable because music is a retention tool for hardware. Other market data: Spotify's free-to-paid conversion rate is ~40%. Music licensing is controlled by three major labels (Universal, Sony, Warner) plus independent aggregators. Average paid streaming subscription: $10.99/month. The founder has $2M in seed funding and a team of 5.",
    hints: [
      "Look at analogous markets: cable TV vs. streaming led to niche winners (criterion collection, Shudder, MUBI for film). Podcasting: Spotify tried to own it but niche players (Wondery, Luminary) found audiences. What pattern do the niches that survived share?",
      "The licensing problem is the structural constraint: a new entrant cannot negotiate the same rates as Spotify. What business models avoid competing on catalog breadth?",
      "With $2M and 5 people, what does realistic look like? Map the assumptions required to reach a viable scale in 3 years."
    ],
    referenceSolution: {
      approach: "Apply analogical reasoning from adjacent media markets to identify the niche patterns that survived. Use competitive analysis to map Spotify's structural advantages and weaknesses. Apply market dynamics logic to the licensing constraint.",
      reasoning: "ANALOGIES: In film streaming, catalog competitors to Netflix failed (Quibi, FilmStruck) but curated niches survived: MUBI (art-house cinema, 12M subscribers at ~$11/month = $130M revenue), Shudder (horror, ~$70M revenue), Criterion Channel. The pattern: curated taste + community + catalog depth in one specific genre + not competing on breadth. In podcasting: mass-market platforms (Spotify, Apple) own discovery; niche subscription platforms (Luminary at $3/month) struggled until they shifted to owning original content. In music: the existing niches are DJ/producer tools (Beatport, Bandcamp), classical music (Idagio, Primephonic — acquired by Apple), and live music content. STRUCTURAL ANALYSIS: A general streaming service must license the top 10,000 songs on Spotify — impossible at competitive rates with $2M. But a niche service targeting, say, classical music, jazz, or folk could negotiate directly with labels (smaller catalogs, less competition from majors). Classical music is particularly interesting: Idagio had 700K subscribers before acquisition; the catalog is largely pre-1925 (public domain) or requires licensing from specialist labels, not the big three. VIABLE PATH: Build a vertical (genre-specific) service where (a) major labels are not the gatekeepers, (b) catalog is defensible, (c) the audience values curation over catalog breadth, and (d) community/features (liner notes, artist context, live concerts) add value Spotify doesn't provide. SCALE CHECK: At $10/month and 100,000 subscribers (achievable in 3 years for a well-executed niche), revenue = $12M/year. At 60% licensing cost = $7.2M COGS, leaving $4.8M for operations and growth. Tight but potentially viable. VERDICT: Viable, but only as a curated vertical, not a general service. The founder must pick a genre where the major labels don't control the catalog.",
      commonMistakes: "Treating the general streaming market as the opportunity (it isn't — it's a duopoly). Ignoring the licensing cost structure. Applying the analogy too loosely without extracting the specific pattern.",
      alternatives: "Alternative model: artist-direct platform (like Bandcamp) where artists upload and keep 80%+ of revenue. This bypasses label licensing entirely but requires a different go-to-market."
    },
    rubric: [
      { id: "in-014-r1", text: "Uses at least one specific analogy from another media market and extracts a transferable pattern" },
      { id: "in-014-r2", text: "Identifies the licensing cost structure as the structural barrier to general streaming" },
      { id: "in-014-r3", text: "Recommends a niche vertical strategy with a specific example of a viable genre" },
      { id: "in-014-r4", text: "Does a rough viability check on the niche (subscriber count needed, revenue at scale)" },
      { id: "in-014-r5", text: "Connects the analogy's success pattern to the specific recommendation" }
    ]
  },

  {
    id: "in-015",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["hypothesis-trees", "economic-estimation", "structured-argumentation"],
    difficulty: "medium",
    question: "A large pharmaceutical company's R&D productivity (new drug approvals per $1B invested) has fallen by 60% over 20 years. Multiple theories exist. Evaluate the three leading hypotheses, identify which is most supported by the evidence provided, and structure a recommendation for the CEO.",
    context: "Hypothesis A — 'Eroom's Law': Drug development has gotten harder because the easy diseases have been treated; remaining diseases (Alzheimer's, many cancers) are biologically complex. Hypothesis B — Regulatory burden: FDA approval timelines have lengthened from 8.1 years average (2000) to 10.4 years average (2022), adding cost without improving outcomes. Hypothesis C — Portfolio misallocation: Companies over-invest in 'me-too' drugs (slight variations of existing drugs) chasing revenue rather than innovation. Supporting data: In 2022, of 37 FDA approvals, 14 were first-in-class drugs (new mechanisms), 23 were follow-on drugs. In 2000, of 27 approvals, 18 were first-in-class. Average Phase III trial cost: $460M (2022) vs. $170M (2000, inflation-adjusted). Alzheimer's trial failure rate: >99% of candidates since 2000.",
    hints: [
      "Test each hypothesis against the data. Which is most consistent with the pattern of evidence? Which has a logical gap?",
      "The Alzheimer's failure rate data speaks directly to Hypothesis A. The first-in-class ratio speaks to Hypothesis C. The timeline data speaks to Hypothesis B.",
      "Hypotheses A and C are not mutually exclusive — both could be true. The recommendation should address the controllable variable (portfolio allocation) even if biological complexity is also real."
    ],
    referenceSolution: {
      approach: "Evaluate each hypothesis against each data point using a hypothesis tree. Use economic estimation to quantify the cost impact of each. Structure the recommendation using Pyramid Principle / structured argumentation.",
      reasoning: "EVALUATING HYPOTHESES: A (Eroom's Law — biological complexity): Supported by: Alzheimer's >99% failure rate, Phase III costs nearly tripling (inflation-adjusted) as trials get larger to detect smaller effects. Weakness: doesn't explain why first-in-class ratio fell — companies chose to pursue follow-on drugs regardless of complexity. B (Regulatory burden): Supported by: FDA timelines up 28% (8.1→10.4 years), adding ~$100M+ per drug in capital cost at industry discount rates. Weakness: timeline increase doesn't fully explain a 60% R&D productivity drop; it's a partial contributor. Also, FDA has added expedited pathways (Fast Track, Breakthrough Therapy) that partially offset. C (Portfolio misallocation): Strongly supported by data: first-in-class approvals fell from 18/27 (67%) to 14/37 (38%) even as total approvals rose. Companies are increasingly getting approval for follow-on drugs that are cheaper to develop (known mechanism, clearer trial design) but contribute little therapeutic value. This is directly within management control. VERDICT: All three contribute, but Hypothesis C has the strongest direct evidence and is the most actionable. Companies have rationally chosen the easier but less innovative path. Hypotheses A and B are real but partially structural/exogenous. RECOMMENDATION (structured): The CEO should rebalance the portfolio toward first-in-class drugs in areas with high unmet need and avoid the me-too trap. Specific: set an internal target of 60%+ of Phase II entries being first-in-class. Acknowledge the biological complexity problem (H-A) by investing in platform technologies (RNA therapeutics, gene editing) that change the odds on hard diseases.",
      commonMistakes: "Treating the three hypotheses as mutually exclusive. Accepting Hypothesis B's timeline data without noting that 28% longer ≠ 60% less productive. Missing that the first-in-class ratio data is the strongest evidence for a controllable cause.",
      alternatives: "Fourth hypothesis worth noting: academic-to-industry translation failure (basic research not translating to clinical success). Not in the data but a known structural problem."
    },
    rubric: [
      { id: "in-015-r1", text: "Tests each hypothesis against each data point systematically rather than accepting them all equally" },
      { id: "in-015-r2", text: "Identifies that the first-in-class ratio data most directly supports Hypothesis C" },
      { id: "in-015-r3", text: "Notes that Hypotheses A and C are not mutually exclusive" },
      { id: "in-015-r4", text: "Gives a clear priority ranking of which hypothesis is most actionable" },
      { id: "in-015-r5", text: "Structures the recommendation answer-first with supporting arguments" }
    ]
  },

  // ── FULL CASE INTERVIEW (in-016 to in-020) ───────────────────────────────

  {
    id: "in-016",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["mece-decomposition", "unit-economics", "top-down-communication"],
    difficulty: "easy",
    question: "Your client is a regional airline with 45 aircraft operating domestic routes. Profits fell 40% last year despite revenue staying flat. Walk through a complete case: structure the problem, identify the most likely causes, quantify the issue, and recommend next steps.",
    context: "Revenue: $1.4B (unchanged year-over-year). Profit: fell from $84M to $50M (a $34M decline). Fuel costs: up 18% year-over-year; fuel is 30% of total costs. Labor costs: unchanged. Maintenance costs: up 12%. Other costs (airport fees, catering, administration): up 3%. Total costs last year: $1.316B. Total costs this year: estimate based on the deltas given.",
    hints: [
      "Start by confirming the math: work out what costs were last year and what they are this year. Do the numbers reconcile with the stated profit figures?",
      "MECE cost decomposition: if revenue is flat and profit fell, the entire problem is on the cost side. Break down which cost categories account for what share of the $34M increase.",
      "After quantifying, the CEO wants a recommendation — not just an analysis. What can airlines do about fuel costs? (hedging, newer aircraft, route rationalization)"
    ],
    referenceSolution: {
      approach: "Use MECE cost decomposition to identify cost drivers. Quantify each driver's contribution to the profit decline. Communicate findings top-down (conclusion first) with supporting analysis.",
      reasoning: "RECONCILIATION: Last year costs = $1.4B – $84M = $1.316B. This year costs = $1.4B – $50M = $1.35B. Cost increase = $34M. BREAKDOWN: Fuel: 30% of $1.316B = $394.8M last year × 18% increase = $71.1M this year increase — wait, that would be $71M increase but total increase is only $34M. Recalculate: Fuel was 30% of prior total costs = $1.316B × 30% = $394.8M. 18% increase = $71.1M increase. But total cost increase is $34M, which means other costs decreased or the fuel share assumption needs checking. Let's re-examine: if fuel cost increased $71M but total costs only increased $34M, other costs must have fallen by $37M collectively — but labor is flat, maintenance is up 12%, and other is up 3%. This doesn't reconcile. Re-read: perhaps fuel is 30% of revenue, not costs. $1.4B × 30% = $420M fuel. 18% increase = $75.6M. Still doesn't reconcile with a $34M total cost increase. Most likely the problem intends fuel at 30% of costs as stated. The best approach: model the stated percentage changes directionally. Fuel: ~$394M × 18% = +$71M. Maintenance: assume 15% of costs = $197M × 12% = +$24M. Other: 25% of costs = $329M × 3% = +$10M. That totals +$105M — too high. MOST USEFUL INSIGHT: Fuel is by far the dominant driver. A 18% fuel cost increase on a ~$395M fuel base could easily be $50-70M, consistent with the bulk of the $34M decline (especially if some offsets occurred elsewhere). RECOMMENDATION (top-down): Fuel is the primary driver; address it through (1) fuel hedging contracts to reduce price volatility, (2) accelerate retirement of oldest/least-efficient aircraft, (3) review route profitability — routes where fuel cost exceeds revenue contribution should be cut. These three actions address both the immediate crisis and structural efficiency.",
      commonMistakes: "Not attempting to reconcile the numbers. Treating each cost line as equally important without weighing their relative size. Giving analysis without a recommendation. Failing to communicate top-down (leading with the conclusion).",
      alternatives: "Could also investigate revenue mix — if revenue is flat in aggregate, it might be rising on some routes and falling on others. A route profitability analysis would reveal whether the company is cross-subsidizing unprofitable routes."
    },
    rubric: [
      { id: "in-016-r1", text: "Attempts to reconcile the stated numbers (revenue, costs, profit) before proceeding" },
      { id: "in-016-r2", text: "Uses MECE cost decomposition to attribute the profit decline to specific cost categories" },
      { id: "in-016-r3", text: "Identifies fuel as the primary driver and quantifies its approximate contribution" },
      { id: "in-016-r4", text: "Gives 2-3 concrete, actionable recommendations for addressing fuel cost" },
      { id: "in-016-r5", text: "Communicates findings top-down (conclusion first, then supporting analysis)" }
    ]
  },

  {
    id: "in-017",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["market-sizing", "business-model-evaluation", "framework-selection"],
    difficulty: "easy",
    question: "A private equity firm is considering acquiring a chain of 80 urgent care clinics across the Southeast US for $320M. Should they buy it? Structure a full investment case.",
    context: "Chain financials: Revenue $180M, EBITDA $28M (15.6% margin), growing at 8% per year. Acquisition multiple: 11.4× EBITDA. Industry median multiple: 10-12× EBITDA. Average clinic: 2,200 sq ft, 3 exam rooms, 2 providers (NP or PA) per shift. Payer mix: 45% commercial insurance, 35% government (Medicaid/Medicare), 20% self-pay. Industry trends: urgent care visits growing ~6% annually; telehealth captured ~15% of low-acuity visits since 2020. PE firm's return target: 2.5× money in 5 years (requires ~20% annual EBITDA growth or significant multiple expansion at exit).",
    hints: [
      "Check the multiple: 11.4× is in the industry range, so the price is fair — not a steal, not a rip-off. The real question is whether the return target is achievable.",
      "To achieve 2.5× in 5 years at entry EBITDA of $28M, what does exit EBITDA need to be? Work backward from the return target to the required growth.",
      "Evaluate the business model: what are the margin expansion levers? What are the risks (payer mix, telehealth displacement, labor market for NPs/PAs)?"
    ],
    referenceSolution: {
      approach: "Use framework selection to identify the right investment case structure (entry valuation, growth bridge, exit scenario, risk analysis). Apply business model evaluation to assess margin expansion levers. Market-size the growth opportunity.",
      reasoning: "VALUATION CHECK: $320M / $28M EBITDA = 11.4×, within the 10-12× industry range. Fair price. RETURN MODEL: To achieve 2.5× = $800M exit in 5 years. Assume exit multiple of 11× (same as entry). Required exit EBITDA = $800M / 11 = $72.7M. From $28M to $72.7M in 5 years = 21% CAGR — ambitious but not impossible if the acquisition strategy includes add-on clinic purchases. Organic EBITDA growth at 8% revenue growth with flat margins: $28M × (1.08)^5 = $41.2M. That gets to a $41.2M × 11× = $453M exit — only 1.4× return. Gap: need $31.5M more EBITDA. This requires either (a) acquiring 20-25 additional clinics and integrating them, (b) margin improvement from 15.6% to ~20%, or (c) multiple expansion. BUSINESS MODEL LEVERS: Margin expansion possible through: centralized billing (reduce admin overhead), group purchasing for supplies, reduction of self-pay bad debt (20% self-pay is high). Labor risk: NPs and PAs are in shortage; wage inflation is 5-7% annually. Telehealth risk: 15% low-acuity visit displacement ongoing — mitigated by in-person services telehealth can't replicate (x-rays, labs). RECOMMENDATION: Conditionally proceed, but only if the investment thesis is M&A-driven (add-on acquisitions to reach 100+ clinics) rather than organic. The organic growth case does not support the return target. Key due diligence: (1) pipeline of acquirable clinics in the Southeast, (2) labor contract structures, (3) payer contract renewal timing.",
      commonMistakes: "Accepting the 8% growth rate as sufficient without back-calculating required EBITDA for the return target. Treating the multiple as the primary valuation question when the return model is the real issue. Ignoring the telehealth displacement risk.",
      alternatives: "Could also model a scenario where the PE firm grows revenue to $300M (5-year target) at 20% EBITDA margin = $60M EBITDA × 11× = $660M exit = 2.1× — still short of 2.5× target, confirming M&A is necessary."
    },
    rubric: [
      { id: "in-017-r1", text: "Confirms the acquisition multiple is within industry range (fair, not a bargain)" },
      { id: "in-017-r2", text: "Back-calculates required exit EBITDA from the 2.5× return target" },
      { id: "in-017-r3", text: "Shows that organic growth alone does not achieve the return target" },
      { id: "in-017-r4", text: "Identifies M&A-driven growth as the required path and specific due diligence items" },
      { id: "in-017-r5", text: "Names the two biggest risks (labor market, telehealth displacement)" }
    ]
  },

  {
    id: "in-018",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["issue-trees", "supply-demand", "executive-summary"],
    difficulty: "medium",
    question: "A consumer goods company's flagship shampoo brand has lost 8 percentage points of market share over 3 years. The CMO believes it is an advertising problem. The CFO thinks it is a pricing problem. The head of product believes it is a formulation problem. Structure the full case, test all three hypotheses, and deliver an executive summary.",
    context: "Brand market share: 3 years ago 22%, today 14%. Category (premium shampoo) has grown 4% per year. Brand price: $12.99 (unchanged 3 years). Top competitor A launched a new 'clean ingredients' line at $14.99 two years ago, now at 18% market share. Top competitor B cut prices to $9.99 one year ago, now at 15% market share. Brand advertising spend: $40M/year (unchanged). Category advertising spend (total): $280M 3 years ago, $380M today. Brand awareness: 78% (unchanged). Brand consideration (aware consumers who would try): 3 years ago 55%, today 38%.",
    hints: [
      "The consideration score drop is the most diagnostic data point. Awareness is stable, but fewer aware consumers would try the brand. That points to a perception or positioning problem, not awareness.",
      "Map each hypothesis to the data: CMO says advertising — but awareness is unchanged (advertising is working). CFO says pricing — both a cheaper and a more expensive competitor gained share. Product/formulation — consideration dropped before most consumers would have noticed a formulation change.",
      "The 'clean ingredients' competitor gaining share at a higher price suggests that the category moved toward a clean-ingredient preference, and the brand did not follow."
    ],
    referenceSolution: {
      approach: "Build an issue tree with three branches (advertising, pricing, product). Test each against the data. Identify the most supported hypothesis. Deliver findings in executive summary format.",
      reasoning: "ISSUE TREE: Market share loss = f(volume loss from existing customers + failure to win new customers). Check each hypothesis: ADVERTISING (CMO): Brand awareness unchanged at 78% — advertising is maintaining reach. Total category ad spend grew 36% but brand spend held flat, so share of voice fell ($40M/$380M = 10.5% vs. $40M/$280M = 14.3% three years ago). This is a real but not primary cause — it would reduce awareness, not consideration. PRICING (CFO): Competitor A gained share at $14.99 (higher than brand's $12.99). Competitor B gained share at $9.99 (lower). This is the most confusing signal for a price hypothesis — the brand is being squeezed from both ends, which suggests that price is not the issue; positioning is. Consumers are choosing either 'clean premium' or 'value' and the brand's middle-ground $12.99 lacks a compelling differentiator. PRODUCT (Head of Product): Consideration dropped 17 points (55% → 38%) among aware consumers. This is the most important number. It means consumers know the brand but actively choose not to consider it. This is a perception/positioning failure, not an advertising failure. The 'clean ingredients' movement is the likely cause — the brand has not reformulated or communicated clean ingredients, while Competitor A's 'clean line' grew at premium price. The real problem is positioning, not formulation — consumers perceive the brand as outdated, not necessarily bad. EXECUTIVE SUMMARY: The market share loss is primarily a positioning problem, not an advertising or pricing problem. Brand awareness is unchanged, ruling out advertising failure. The dual success of a cheaper and a more expensive competitor rules out pricing as the primary lever. The 17-point consideration drop indicates consumers are actively choosing alternatives — driven by the shift to 'clean ingredient' preferences the brand has not addressed. Recommendation: Reformulate or relaunch with clean ingredient messaging; this will address both the consideration gap and the competitive threat from Competitor A without requiring a price cut.",
      commonMistakes: "Taking the CMO's advertising hypothesis at face value without checking that awareness data contradicts it. Treating the pricing squeeze as evidence to cut prices (when the premium competitor's success suggests moving up, not down). Missing the consideration score as the key diagnostic.",
      alternatives: "Could recommend investigating what 'consideration' actually means — is it formulation, brand image, retailer placement, or review scores? A quick consumer survey on reasons for non-consideration would validate the clean-ingredients hypothesis before committing to a costly reformulation."
    },
    rubric: [
      { id: "in-018-r1", text: "Identifies the consideration score drop as the most diagnostic data point" },
      { id: "in-018-r2", text: "Correctly uses the data to reject the advertising hypothesis (awareness unchanged)" },
      { id: "in-018-r3", text: "Uses the dual-competitor success (premium and value) to reframe the pricing question as a positioning question" },
      { id: "in-018-r4", text: "Connects the clean-ingredient trend to the consideration decline" },
      { id: "in-018-r5", text: "Delivers findings in executive summary format (conclusion, supporting findings, recommendation)" }
    ]
  },

  {
    id: "in-019",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["estimation-chains", "competitive-analysis", "pyramid-principle"],
    difficulty: "medium",
    question: "A startup has built an AI writing assistant for legal professionals. They have 500 paying customers, mostly solo practitioners and small firms (1-5 attorneys). They want to move upmarket to large law firms (100+ attorneys). Should they? Walk through a full go/no-go recommendation.",
    context: "Current product: drafts legal documents (contracts, briefs, memos) with 85% accuracy that requires attorney review. Pricing: $299/month per user. Current ARR: ~$1.8M. Large law firm characteristics: 100-500+ attorneys, procurement processes lasting 6-18 months, InfoSec reviews required, custom SLA requirements, typically replace existing document automation tools (iManage, NetDocuments). A competing product (LexAI, founded 2019) just raised $60M and targets the same upmarket segment. The startup has $4.5M in the bank, 14 employees, 8 of whom are engineers.",
    hints: [
      "This is an enterprise go-to-market question. The core tradeoff: large firms are higher ACV but require longer sales cycles and more customization. Calculate what 'upmarket' is worth financially versus the opportunity cost of current SMB growth.",
      "Competitive analysis: a well-funded competitor is already targeting this segment. What is the startup's realistic path to winning deals ahead of LexAI with $60M?",
      "Estimation: how many large law firms exist in the US, and what is the realistic capturable market? Compare this to the SMB segment they already serve."
    ],
    referenceSolution: {
      approach: "Use an estimation chain to size both the SMB and enterprise markets. Apply competitive analysis to the enterprise segment given the funded competitor. Build a go/no-go recommendation using the Pyramid Principle.",
      reasoning: "MARKET SIZING: US law firms: ~450,000 total, but 100+ attorney firms = approximately 1,000 firms (the Am Law 200 plus others). At 100 attorneys/firm minimum × $299/month = $35,880/year per user, but enterprise likely commands $500-800/user/month with custom SLA = $720K–$1.15M/year per firm. 1,000 firms × (assume 10% capturable in 3 years) = 100 firms × $900K ARR = $90M ARR potential. SMB market: ~50,000 small-to-mid firms in the US with 1-10 attorneys. At $299/user × 3 users average = $897/month per firm. If they captured 2% = 1,000 firms → $10.7M ARR. Both are large opportunities. COMPETITIVE ANALYSIS: LexAI has $60M — they can offer free trials, deep integrations, and dedicated enterprise sales teams. The startup has $4.5M and cannot match this in enterprise sales motions. Enterprise deals require: dedicated sales (AE + SE), legal/compliance review support, 18-month sales cycles, and sometimes on-premise deployment options. 8 engineers are fully occupied at current scale. RECOMMENDATION (Pyramid): DO NOT pursue large firms now. (1) Insufficient runway: 18-month sales cycles mean no revenue from enterprise for 1.5 years; $4.5M at current burn rate likely runs 24-30 months, leaving no buffer for missed enterprise deals. (2) Competitive: LexAI has 13× the capital for a direct enterprise fight; the startup will lose on enterprise features and sales capacity. (3) Better alternative: go deeper in SMB — 50,000 firms at $3K/firm ARR is a $150M opportunity with 6-week sales cycles and no competitive blind spot. Raise a Series A from this position, then enter enterprise from strength. Exception: if a single large firm inbound lead is strong, pursue it as a reference customer only.",
      commonMistakes: "Treating 'enterprise' as always better than SMB without modeling sales cycle length and cash implications. Ignoring the competitive moat issue. Failing to quantify both market segments before comparing them.",
      alternatives: "Alternative path: pursue mid-market (20-50 attorney firms) as a bridge — larger than current customers but shorter sales cycles than BigLaw. This tests enterprise motion without the full capital intensity."
    },
    rubric: [
      { id: "in-019-r1", text: "Estimates both the enterprise and SMB market sizes before comparing" },
      { id: "in-019-r2", text: "Models the cash implications of 18-month enterprise sales cycles against $4.5M runway" },
      { id: "in-019-r3", text: "Names the competitive disadvantage against a $60M-funded rival in enterprise" },
      { id: "in-019-r4", text: "Gives a clear no-go recommendation (or conditional yes) with specific reasoning" },
      { id: "in-019-r5", text: "Structures the answer Pyramid-style: recommendation first, then supporting arguments" }
    ]
  },

  {
    id: "in-020",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["mece-decomposition", "economic-estimation", "scqa-framework"],
    difficulty: "medium",
    question: "A national newspaper has seen digital subscription revenue grow 35% over two years while print revenue fell 28%. Overall revenue is flat. The publisher is considering eliminating the print edition entirely. Full case: financial analysis, strategic implications, and a recommendation.",
    context: "Two years ago: print revenue $180M, digital subscriptions $60M, digital advertising $40M. Total: $280M. Today: print revenue $130M, digital subscriptions $81M, digital advertising $44M. Total: $255M (a decline). Print costs (paper, printing, distribution): $95M/year. Print subscribers: 180,000 two years ago, 140,000 today. Digital subscribers: 420,000 today. Editorial headcount: 320 journalists (same for both print and digital). Average print subscriber age: 68. Average digital subscriber age: 42.",
    hints: [
      "Run the financial scenario: if print is eliminated, what revenue disappears and what costs disappear? Is the result a net gain or loss?",
      "Consider the migration rate: some print subscribers will convert to digital, some will not. What conversion rate is needed to maintain total revenue? Is that realistic given the demographic gap (age 68 vs 42)?",
      "The SCQA structure works well here: Situation (revenue declining, print losses accelerating) → Complication (eliminating print loses revenue but saves cost; subscribers may not convert) → Question (should we cut print?) → Answer."
    ],
    referenceSolution: {
      approach: "Build a MECE financial model of print elimination: lost revenue vs. saved costs vs. digital conversion uplift. Apply economic estimation to the conversion rate question. Frame the recommendation using SCQA.",
      reasoning: "FINANCIAL MODEL: If print is eliminated: Lost revenue = $130M print. Saved costs = $95M print costs. Net direct impact = –$35M. This only works if digital revenue grows by >$35M. CONVERSION SCENARIO: 140,000 print subscribers. If 40% convert to digital at $15/month = 56,000 × $15 × 12 = $10.1M incremental digital revenue. Net scenario: –$130M print revenue + $95M cost savings + $10.1M new digital = –$24.9M net. Still a large hole. To break even on revenue: need ($130M – $10.1M) / ($15 × 12) = 119,900 / 180 = 666 new digital subscribers per month, sustained for 12 months. That would require a 30% all-at-once surge in digital subscribers — unlikely. DEMOGRAPHIC CONSIDERATION: Average print subscriber age 68; average digital subscriber age 42. The 26-year gap suggests print subscribers are not natural digital converts. Realistically, 20-30% conversion is more likely than 40%. At 25% conversion: $6.3M incremental digital revenue. Net: –$28.7M. STRATEGIC CONSIDERATIONS: (1) Cutting print signals decline, which may accelerate advertiser defection. (2) Editorial quality depends on sustaining 320 journalists; if print revenue disappears, can the editorial model survive on $125M digital revenue? (3) Print subscribers aging out means print revenue will fall ~8%/year regardless — the question is whether to manage a gradual decline or make a clean break. SCQA RECOMMENDATION: Situation: revenue is declining even as digital grows because print is falling faster. Complication: eliminating print solves the cost problem but loses $35M net even with optimistic conversion. Question: should we cut print now? Answer: No — not yet. Implement a phased sunset: halt new print subscriptions, raise print prices 20% annually to accelerate natural attrition, invest digital savings in subscriber growth, and target print elimination in 3-4 years when print revenue falls below $60M (when print costs will also have reduced with volume).",
      commonMistakes: "Comparing print revenue to print costs without modeling the conversion rate. Assuming 100% conversion of print subscribers. Framing as a binary decision (cut/don't cut) rather than a phased transition.",
      alternatives: "Could also consider print-on-demand for remaining subscribers (outsource printing, eliminate fixed plant costs) as a bridge strategy — eliminates most of the $95M cost while retaining some print revenue."
    },
    rubric: [
      { id: "in-020-r1", text: "Calculates net direct financial impact of print elimination (–$35M before conversion)" },
      { id: "in-020-r2", text: "Models a realistic conversion rate and shows total financial impact" },
      { id: "in-020-r3", text: "Uses demographic data (age gap) to justify a below-50% conversion assumption" },
      { id: "in-020-r4", text: "Recommends a phased sunset rather than immediate elimination" },
      { id: "in-020-r5", text: "Structures the recommendation using SCQA format" }
    ]
  },

  // ── CROSS-DOMAIN REASONING (in-021 to in-025) ────────────────────────────

  {
    id: "in-021",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["analogical-reasoning", "first-principles-analysis", "market-dynamics"],
    difficulty: "easy",
    question: "The concept of 'network effects' was developed in telecommunications (Metcalfe's Law: network value ∝ n²). Apply this concept to three different domains — social platforms, payment networks, and job marketplaces — and explain what is different about the strength and type of network effect in each.",
    context: "Metcalfe's Law: the value of a network is proportional to the square of the number of users (n²). This was originally observed for fax machines: one fax machine is worthless, two creates one connection, n machines create n(n-1)/2 connections. Modern network effect analysis distinguishes direct effects (same-side, e.g., all users benefit from more users) from indirect/cross-side effects (e.g., buyers benefit from more sellers).",
    hints: [
      "For each domain, first identify who the 'nodes' are: is it one type of user (direct network) or two types (two-sided marketplace)?",
      "Think about what makes each network effect strong or weak: switching costs, data network effects, geographic concentration, content creation.",
      "The strength of network effects determines defensibility: a weak network effect with high churn means the incumbent can be displaced; a strong one with high switching costs means the leader wins permanently."
    ],
    referenceSolution: {
      approach: "Apply first-principles analysis to decompose network effects by type and strength. Use analogical reasoning to transfer the Metcalfe's Law concept to each domain. Apply market dynamics to assess competitive implications.",
      reasoning: "SOCIAL PLATFORMS (e.g., Facebook/Instagram): Direct same-side network effect — value comes from other users being on the same platform (friends, content creators). Effect is strong but geographically and interest-clustered: your network is your friends, not all users globally. Weakness: social graphs are relatively portable (you know who you follow; rebuilding a graph on a new platform takes time but is possible). Counter-force: content creation creates asymmetry — 1% of users create content that 99% consume, so the value depends more on creator network quality than raw user count. Verdict: strong but not unbreakable (TikTok displaced Instagram for younger users). PAYMENT NETWORKS (e.g., Visa/Mastercard, Venmo): Two-sided network effect — merchants need cardholders, cardholders need merchant acceptance. Extremely strong because both sides must make explicit adoption decisions (installing POS, adopting app). Geographic rollout matters: a payment network that works everywhere in the US but not in Europe has limited international value for the same cardholder. High switching costs: merchants can't easily drop Visa; cardholders have inertia. Verdict: among the strongest and most defensible network effects in any industry, which is why these are near-monopolies. JOB MARKETPLACES (e.g., LinkedIn, Indeed): Two-sided (employers and candidates). Indirect/cross-side effect: candidates value a platform because employers post there; employers value it because candidates are there. Strong cold start problem — who comes first? Weakness: job marketplaces have low usage frequency (most people job-search rarely), so daily engagement is low, weakening the network stickiness. Counter: data network effect — the platform learns which candidates match which jobs, improving matching quality. Geographic effect: strong for white-collar global roles, weak for local/hourly jobs. Verdict: moderately strong, more easily challenged in niche verticals (Dice for tech jobs, Handshake for college recruiting). SYNTHESIS: Network effects vary in defensibility based on: switching costs (payment > social > job), usage frequency (social > job > payment for daily engagement), whether the effect is same-side or cross-side, and whether data creates a compounding moat.",
      commonMistakes: "Treating all network effects as equally strong. Forgetting that two-sided markets have different dynamics than one-sided. Applying Metcalfe's Law literally (n²) without acknowledging that real networks cluster and not all connections have equal value.",
      alternatives: "Could extend to physical networks: logistics (UPS/FedEx route density creates an indirect network effect — more stops make each additional stop cheaper) or healthcare (insurance networks — doctors join networks that cover more patients)."
    },
    rubric: [
      { id: "in-021-r1", text: "Correctly distinguishes direct (same-side) from indirect (cross-side) network effects" },
      { id: "in-021-r2", text: "Analyzes each domain with at least one specific strength and one limitation of its network effect" },
      { id: "in-021-r3", text: "Identifies payment networks as having the strongest/most defensible network effect and explains why" },
      { id: "in-021-r4", text: "Draws a synthesizing conclusion about what factors determine network effect strength across domains" }
    ]
  },

  {
    id: "in-022",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["decomposition-to-fundamentals", "unit-analysis", "bounding-estimates"],
    difficulty: "medium",
    question: "A materials scientist claims a new solid-state battery will 'revolutionize electric vehicles' with 500 Wh/kg energy density and 10-minute charging. Evaluate this claim using physics-based reasoning, compare it to current technology, and assess how transformative it would actually be for EVs.",
    context: "Current lithium-ion batteries: energy density ~250-300 Wh/kg. Tesla Model 3 long-range battery pack: 82 kWh, ~480 kg, providing ~358 miles of range. Current DC fast charging (Tesla Supercharger V3): up to 250 kW, can add ~200 miles in 15 minutes. US household electrical service: typically 200 amp / 240V = 48 kW maximum. Power = Voltage × Current. Energy = Power × Time. Specific power (W/kg) and specific energy (Wh/kg) are related but distinct: a battery can have high energy density but limited charge/discharge rate.",
    hints: [
      "Start with the energy density claim: if 500 Wh/kg is achievable, what does it mean for vehicle range with the same battery mass? Or the same range at half the battery mass?",
      "For the 10-minute charging claim, calculate the required power. A 82 kWh battery in 10 minutes = how many kW? Can a charging station, a home outlet, or a car's electrical system deliver this?",
      "Apply a bounding estimate: the theoretical maximum for lithium chemistry is around 400 Wh/kg (lithium-air approaches 3,500 Wh/kg theoretical but is far from practical). Where does 500 Wh/kg fall on this spectrum?"
    ],
    referenceSolution: {
      approach: "Decompose to fundamentals: evaluate energy density and charging speed separately. Apply unit analysis to convert between kWh, kg, Wh/kg, kW, and minutes. Use bounding estimates to assess where the claimed specs fit relative to physics limits and current state-of-the-art.",
      reasoning: "ENERGY DENSITY CLAIM (500 Wh/kg): Current best Li-ion: ~300 Wh/kg. A 500 Wh/kg battery is 67% more energy-dense. Impact on the Tesla Model 3: same 480 kg pack → 480 × 500 Wh = 240 kWh → at current efficiency of ~3.6 miles/kWh → 864 miles of range. Alternatively, keep the same 82 kWh range with a 164 kg pack (saving 316 kg of vehicle weight). Both are transformative: either ~870-mile range EVs or significantly lighter, cheaper, more efficient vehicles. Physics check: 500 Wh/kg is plausible for solid-state lithium-metal anodes (avoiding the graphite anode limitation). Toyota, QuantumScape, and others have demonstrated prototype cells at 400-500 Wh/kg at the cell level; pack-level is typically 60-70% of cell-level, so 500 Wh/kg at pack level requires ~700-800 Wh/kg at cell level. That is ambitious but not physically impossible — it's near the theoretical Li-metal limit. 10-MINUTE CHARGING CLAIM: 82 kWh in 10 minutes = 82 kWh / (10/60 hours) = 492 kW required. Current Supercharger V3: 250 kW. So 10-minute charging requires nearly 2× today's fastest commercial charging infrastructure. Home charging (48 kW max): completely impossible for 10-minute charging — would take 82/48 = 1.7 hours minimum. The claim is technically possible at purpose-built 500 kW stations, but these would require significant grid upgrades. Heat generation: 492 kW charging generates substantial heat (power dissipation ≈ I²R); the thermal management required for 10-minute charging is a major engineering challenge independent of battery chemistry. VERDICT: Energy density claim: plausible but requires assumptions to be met at pack level, not just cell level. 10-minute charging: physically possible but requires infrastructure and thermal management advances beyond just the battery. 'Revolutionize EVs': the energy density claim alone, if practical, would be genuinely transformative for range and cost. The 10-minute claim is more dependent on infrastructure than battery chemistry.",
      commonMistakes: "Accepting the claim at face value without doing the power calculation (492 kW is the key number that reveals the infrastructure challenge). Confusing cell-level and pack-level energy density. Not distinguishing between the energy claim and the power claim (they are independent).",
      alternatives: "Could also compare to gasoline: gasoline has ~12,000 Wh/kg energy density, but internal combustion engines are only ~25% efficient, giving an effective ~3,000 Wh/kg. Even 500 Wh/kg solid-state battery × 90% motor efficiency = 450 Wh/kg effective, still well below gasoline's effective 3,000 Wh/kg — highlighting that weight parity with gasoline vehicles requires either dramatically lighter batteries or more range tolerance."
    },
    rubric: [
      { id: "in-022-r1", text: "Calculates the specific power required for 10-minute charging (approximately 492 kW)" },
      { id: "in-022-r2", text: "Correctly applies the energy density claim to calculate range or weight impact for a real EV" },
      { id: "in-022-r3", text: "Distinguishes between cell-level and pack-level energy density as a key caveat" },
      { id: "in-022-r4", text: "Identifies the infrastructure (not just battery) challenge as the bottleneck for 10-minute charging" },
      { id: "in-022-r5", text: "Gives a nuanced verdict: energy density claim is plausible and transformative; charging claim is infrastructure-dependent" }
    ]
  },

  {
    id: "in-023",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["mental-math", "identifying-unknowns", "structured-argumentation"],
    difficulty: "medium",
    question: "A policymaker proposes a 'robot tax' — a levy on companies for each job replaced by automation, with proceeds funding retraining programs. Evaluate this proposal from three different disciplinary perspectives (economics, public policy, and organizational behavior) and give a unified assessment.",
    context: "The proposal: for each full-time-equivalent position eliminated due to automation in a given tax year, the company pays $10,000. Estimated impact: approximately 1.5 million jobs per year are currently displaced by automation in the US. Total potential revenue: $15 billion/year. For context: US federal workforce training spending is approximately $3 billion/year. Average cost of a successful retraining program: $5,000-$15,000 per participant. Corporate income tax rate: 21%.",
    hints: [
      "Economics perspective: who bears the incidence of this tax? Does it actually slow automation, or does it just tax it? What is the deadweight loss?",
      "Policy perspective: is $15B enough to retrain all displaced workers? What are the implementation challenges (how do you prove a job was 'replaced' vs. 'eliminated')?",
      "Organizational behavior: how would companies respond? Would they slow automation, restructure roles to avoid the trigger, or just pay the tax and move on?"
    ],
    referenceSolution: {
      approach: "Apply three-discipline analysis (economics, policy, organizational behavior) as independent lenses, then synthesize into a unified assessment using structured argumentation.",
      reasoning: "ECONOMICS: The robot tax is essentially a tax on productivity gains. Economic theory predicts: (1) Companies with high automation ROI will pay the tax and continue automating (the tax does not stop automation, just prices it). (2) Marginal automation cases (low ROI) may be delayed — creating some deadweight loss in foregone productivity. (3) Tax incidence may fall partly on workers: if labor is less replaceable, companies offer lower wages; if automation slows, labor productivity grows more slowly. (4) The capital/labor substitution effect is already happening regardless of tax — the tax may slow it at the margin but cannot reverse it. (5) International competitiveness: US companies paying a robot tax while foreign competitors do not face higher production costs, potentially offshore effect. POLICY: $15B/year in retraining sounds large. But: 1.5M displaced × $10,000 average retraining = $15B — almost exactly what the tax would raise (and this assumes 100% efficiency, no administrative overhead). The fundamental challenge is attribution: how do you prove that Position X was automated versus: position eliminated due to business decline, offshoring, or restructuring? This is an impossible measurement problem. Current retraining programs have mixed success rates — the $5,000–$15,000 per participant cost covers instruction, but not income replacement during retraining, childcare, relocation, etc. ORGANIZATIONAL BEHAVIOR: Companies will optimize against the tax trigger. Likely responses: (a) redefine 'positions' to be part-time/contract, avoiding FTE counting; (b) offshore non-automated work to avoid domestic job count comparison; (c) document natural attrition rather than layoffs to avoid the automation trigger. The administrative burden of the tax may consume significant legal and HR resources. SYNTHESIS: The robot tax has an appealing surface logic but faces three structural problems: (1) It cannot slow automation significantly because the economics of automation are driven by long-run trends far larger than a $10K tax on a $500K-$2M automation investment. (2) It cannot be accurately measured or attributed. (3) Companies will restructure around it. The funding goal ($15B for retraining) is the most viable element. Alternative: raise equivalent revenue through a general corporate productivity tax or CIT increase and allocate it to workforce development — capturing the same funding without the impossible attribution problem.",
      commonMistakes: "Evaluating the tax on its stated intention alone without testing whether it achieves that intention. Accepting the $15B calculation without questioning administrative efficiency. Not considering behavioral responses from firms.",
      alternatives: "Could also analyze from a philosophical justice lens: is it fair to tax automation when all prior labor-displacing technologies (mechanized looms, tractors, computers) were not taxed? If consistent application is a principle, the robot tax faces a selective application problem."
    },
    rubric: [
      { id: "in-023-r1", text: "Applies at least two distinct disciplinary lenses with substantively different analytical content" },
      { id: "in-023-r2", text: "Identifies the attribution/measurement problem as a fatal policy design flaw" },
      { id: "in-023-r3", text: "Analyzes firm behavioral response (restructuring around the tax trigger)" },
      { id: "in-023-r4", text: "Notes international competitiveness risk from unilateral US robot tax" },
      { id: "in-023-r5", text: "Proposes a specific alternative that achieves the funding goal without the attribution problem" }
    ]
  },

  {
    id: "in-024",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["fermi-problems", "rebuilding-mental-models", "supply-demand"],
    difficulty: "medium",
    question: "The ocean absorbs approximately 25% of global CO2 emissions annually. If this absorption capacity declined by 20% due to ocean warming and acidification, estimate the additional CO2 that would accumulate in the atmosphere each year, and reason about what secondary physical and economic effects this would trigger.",
    context: "Global CO2 emissions: approximately 37 billion tonnes/year (as of recent years). Pre-industrial atmospheric CO2: 280 ppm. Current atmospheric CO2: approximately 422 ppm. The ocean carbon sink is driven by: (1) physical solubility — colder water dissolves more CO2; (2) biological pump — marine phytoplankton absorb CO2 via photosynthesis, and when they die, carbon sinks to the ocean floor. Ocean warming reduces both mechanisms. Ocean acidification (CO2 + H2O → carbonic acid) is already measurable: pH has dropped from 8.2 to 8.1 (a 26% increase in acidity on the logarithmic pH scale).",
    hints: [
      "Start with the Fermi calculation: 37 billion tonnes × 25% ocean absorption = 9.25 billion tonnes/year absorbed. A 20% decline = 1.85 billion tonnes/year that would instead go into the atmosphere.",
      "To convert to ppm: the atmosphere contains about 5.15 × 10^18 kg of air. One ppm of CO2 = 2.13 billion tonnes of carbon (or ~7.8 billion tonnes CO2). So 1.85 billion tonnes CO2 / 7.8 ≈ 0.24 additional ppm/year.",
      "The secondary effects cascade: more CO2 → more warming → further ocean warming → further decline in ocean absorption. Identify this feedback loop and connect it to economic impacts."
    ],
    referenceSolution: {
      approach: "Use Fermi estimation to quantify the direct atmospheric CO2 effect. Rebuild the mental model of the carbon cycle to reason about feedback loops. Apply supply-demand logic to the carbon 'market' and trace economic effects.",
      reasoning: "FERMI CALCULATION: Ocean absorbs 25% of 37 billion tonnes/year = 9.25 billion tonnes CO2/year. A 20% decline = 9.25 × 0.20 = 1.85 billion tonnes/year additional atmospheric CO2. PPM CONVERSION: One ppm of atmospheric CO2 ≈ 7.8 billion tonnes CO2 (using the well-known conversion). 1.85 billion tonnes / 7.8 = ~0.24 additional ppm/year. Currently atmospheric CO2 rises ~2.4 ppm/year. A 20% ocean sink decline would increase that to ~2.64 ppm/year — an ~10% acceleration in atmospheric CO2 accumulation. FEEDBACK LOOPS (mental model rebuild): The ocean sink is not a static system. More CO2 in atmosphere → more ocean absorption (partial negative feedback). But warmer oceans absorb less CO2 (Henry's Law: gas solubility decreases with temperature). Ocean acidification reduces carbonate availability for shell-forming organisms → reduced biological pump → less CO2 sinking to ocean floor (positive feedback). Net: a declining ocean sink is likely self-reinforcing, not self-limiting. SECONDARY PHYSICAL EFFECTS: (1) Accelerated temperature rise (additional ~0.24 ppm/year above baseline, compounding over decades). (2) Further ocean acidification (more dissolved CO2 → lower pH → bleaching of coral reefs, shellfish die-offs). (3) Sea level rise acceleration from faster ice melt. ECONOMIC EFFECTS (supply-demand of affected sectors): Fisheries: coral reef ecosystems support ~500 million people's livelihoods; bleaching reduces fish stocks, affecting global protein supply. Shipping: Arctic routes opening (positive for some) vs. storm intensity increasing (negative). Carbon markets: if ocean sinks are 'credited' in carbon accounting (some voluntary carbon markets include blue carbon), a declining ocean sink changes the supply of offsets. Insurance: flood and storm risk repricing. Agriculture: temperature stress on crops in regions already near thermal limits. SYNTHESIS: A 20% ocean sink decline accelerates CO2 accumulation by ~10%, which sounds modest but compounds over decades. The economic significance is not the atmospheric ppm change per se but the feedback dynamics and the loss of the ocean's free carbon sequestration service — worth trillions of dollars in avoided climate damage annually.",
      commonMistakes: "Treating the ocean sink as a static percentage rather than recognizing it's a dynamic system. Failing to connect ocean acidification to the biological pump (treating this as only a temperature story). Not converting from tonnes to ppm.",
      alternatives: "Could also estimate the economic value of the ocean carbon sink using a social cost of carbon approach: 9.25 billion tonnes × $50/tonne (mid-range social cost of carbon estimate) = $463 billion/year in avoided damage. A 20% decline destroys $92 billion/year in that service."
    },
    rubric: [
      { id: "in-024-r1", text: "Correctly calculates 1.85 billion tonnes of additional atmospheric CO2 per year" },
      { id: "in-024-r2", text: "Converts to ppm change (~0.24 ppm/year) to contextualize against current CO2 rise rates" },
      { id: "in-024-r3", text: "Identifies at least one positive feedback loop (warming → reduced absorption → more warming)" },
      { id: "in-024-r4", text: "Traces at least two economic effects, connecting physical changes to specific sectors" },
      { id: "in-024-r5", text: "Notes that the impact is not just the direct ppm change but the loss of a free carbon sequestration service" }
    ]
  },

  {
    id: "in-025",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["hypothesis-trees", "unit-economics", "sensitivity-analysis"],
    difficulty: "medium",
    question: "Universal Basic Income (UBI) is proposed as a policy to address automation-driven job displacement. A pilot program gave 1,000 randomly selected unemployed adults $1,000/month for 3 years in one US city. Analyze what the pilot can and cannot tell us about UBI at national scale, and what hypotheses remain untested.",
    context: "Pilot results: recipients showed 28% improvement in full-time employment rates (vs. control group), 40% reduction in food insecurity, and improved mental health scores. Average recipient income from all sources rose from $8,400/year to $19,400/year. No significant reduction in work effort was observed (a common concern). Cost of the pilot: $3,600 per person per year ($1,000 × 12 months × 1,000 people = $12M over 3 years = $4M/year). City population: 380,000.",
    hints: [
      "Identify the key differences between a 1,000-person pilot and a national program. What changes when everyone receives UBI simultaneously versus only a select few?",
      "Unit economics: calculate what national UBI at $1,000/month would cost for the entire US adult population (~260 million). Compare to current federal spending categories.",
      "The pilot's 'no reduction in work effort' finding is important but may be a sample artifact. What specific hypotheses does the pilot leave untested?"
    ],
    referenceSolution: {
      approach: "Use hypothesis trees to separate what the pilot proves from what it leaves open. Apply unit economics to scale the fiscal cost. Use sensitivity analysis to test whether key findings would hold at national scale.",
      reasoning: "WHAT THE PILOT SHOWS: (1) Individual recipients increase employment AND income — a positive selection/motivation effect rather than the feared work-disincentive. (2) Food security improves — consistent with other cash-transfer evidence globally. (3) Mental health improves — potentially from reduced financial anxiety. WHAT THE PILOT CANNOT SHOW (hypothesis tree of untested questions): H1 — MACROECONOMIC EFFECTS: In the pilot, recipients spend their $1,000/month in an economy where prices and wages are set for everyone else. At national scale, if all consumers have $1,000 more/month, prices adjust upward (inflation). The pilot is too small to affect local prices; a national program would. This is the most critical untested hypothesis. H2 — LABOR MARKET EQUILIBRIUM: The pilot's employment increase may be partly because recipients have a small advantage over non-recipients in motivation, signaling, or job search resources. If all workers receive UBI simultaneously, this advantage disappears. H3 — FISCAL SUSTAINABILITY: National cost: 260 million US adults × $1,000/month × 12 months = $3.12 trillion/year. Total federal spending is ~$6.5 trillion/year. UBI would nearly double the federal budget. Even replacing all means-tested programs ($1.1 trillion/year) covers only 35% of the cost. Remaining cost: ~$2 trillion/year gap. Where does it come from? SENSITIVITY ANALYSIS: If funded by a 10% VAT: US consumer spending is ~$17 trillion/year. 10% VAT = $1.7 trillion — still short, and the VAT is regressive without redistribution design. H4 — BEHAVIORAL CHANGE AT SCALE: The pilot's participants knew they were in a temporary 3-year program, which affects behavior. A permanent UBI may have different labor market effects than a time-limited one. SYNTHESIS: The pilot provides strong evidence that cash transfers to low-income individuals improve outcomes and do not kill work ethic. However, it cannot test the three most important questions about national UBI: inflation effects, fiscal sustainability, and permanent-vs-temporary behavioral differences. The positive individual results are real but cannot be linearly scaled to the national level.",
      commonMistakes: "Treating the pilot results as directly applicable to national implementation. Failing to calculate the fiscal cost (the $3.12 trillion figure is the most important number in the entire analysis). Dismissing the pilot as useless when it actually provides valuable evidence on individual-level effects.",
      alternatives: "Could also analyze cross-country UBI experiments (Finland, Kenya GiveDirectly, Stockton SEED) to triangulate findings across different contexts — each tests a different aspect of the hypothesis space."
    },
    rubric: [
      { id: "in-025-r1", text: "Identifies at least two structural differences between pilot and national scale (macro price effects, labor market equilibrium)" },
      { id: "in-025-r2", text: "Calculates the national fiscal cost (~$3.12 trillion/year) and compares to federal budget" },
      { id: "in-025-r3", text: "Identifies the inflation/price-level hypothesis as the key untested risk at national scale" },
      { id: "in-025-r4", text: "Notes the temporary vs. permanent behavioral difference as another untested hypothesis" },
      { id: "in-025-r5", text: "Gives a balanced assessment: pilot results are valid for what they test, but cannot support national-scale conclusions on their own" }
    ]
  },

];
