import type { Problem } from '@/types';

export const integrationIntegrationProblems: Problem[] = [

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


  // ── CASE ANALYSIS (in-026 to in-030) ─────────────────────────────────────

  {
    id: "in-026",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["mece-decomposition", "unit-economics", "market-dynamics"],
    difficulty: "medium",
    question: "A SaaS company's net revenue retention (NRR) dropped from 118% to 96% over 12 months. The CEO says churn is not the problem — expansion is. Diagnose whether this claim is correct and recommend one lever to restore NRR above 110%.",
    context: "The company has 400 customers. ARR = $20M. NRR is calculated as: (starting ARR + expansion – contraction – churn) / starting ARR. Last year's cohort data: starting ARR = $17M, expansion = $2.7M, contraction = $0.4M, churn = $0.3M. This year: starting ARR = $20M, expansion = $1.2M, contraction = $0.8M, churn = $1.2M. Average contract size = $50K. Top 20% of customers by ARR account for 65% of total revenue.",
    hints: [
      "Calculate NRR for both years using the formula given. Break the change into its four components: expansion delta, contraction delta, churn delta.",
      "Last year NRR = (17 + 2.7 – 0.4 – 0.3) / 17 = 19M / 17M = 111.8% ≈ 118% doesn't match — re-read the context starting ARR. This year NRR = (20 + 1.2 – 0.8 – 1.2) / 20 = 19.2 / 20 = 96%. Identify which components moved most.",
      "Expansion fell from $2.7M to $1.2M (–$1.5M), churn rose from $0.3M to $1.2M (+$0.9M), contraction rose $0.4M. All three moved adversely — the CEO's claim is partially wrong. Rank levers by impact."
    ],
    referenceSolution: {
      approach: "Use MECE decomposition of NRR into its four components. Quantify each component's contribution to the NRR change. Apply unit economics to identify the highest-leverage restoration lever.",
      reasoning: "NRR change breakdown: expansion fell $1.5M (largest driver), churn rose $0.9M, contraction rose $0.4M. Together these reduced NRR by 22 percentage points. The CEO is wrong that churn is not a problem — churn quadrupled in dollar terms ($0.3M → $1.2M) and is the second-largest driver. To restore NRR to 110%, the company needs (20M × 1.10) – 20M + 0.8M + 1.2M = $2M + $2M = $4M of additional net expansion, or some combination of expansion recovery and churn reduction. The highest-leverage single lever: implement a customer success program targeting the top 20% of customers (65% of ARR = $13M). A 10% improvement in expansion rate on that cohort adds $1.3M. Simultaneously, if churn in that segment is reduced by half, that saves $0.6M. Combined: $1.9M improvement, pushing NRR to ~106%. Full 110% requires also addressing the long tail.",
      commonMistakes: "Accepting the CEO's framing without running the numbers. Conflating logo churn (number of customers) with revenue churn. Recommending expansion tactics without noting that churn has also become material.",
      alternatives: "Could reframe as a cohort retention analysis — are newer cohorts churning faster than older ones? If so, the problem is product-market fit in recent sales, not customer success. This would change the recommended lever entirely."
    },
    rubric: [
      { id: "in-026-r1", text: "Correctly calculates NRR for both years and identifies the four-component structure" },
      { id: "in-026-r2", text: "Quantifies each component's contribution to the 22-point NRR decline" },
      { id: "in-026-r3", text: "Challenges the CEO's claim with specific evidence that churn is also a significant driver" },
      { id: "in-026-r4", text: "Recommends a specific lever with a quantified impact on NRR restoration" },
      { id: "in-026-r5", text: "Correctly identifies the top-20% customer concentration as the highest-leverage focus area" }
    ]
  },

  {
    id: "in-027",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["issue-trees", "competitive-analysis", "sensitivity-analysis"],
    difficulty: "hard",
    question: "A regional airline serving 12 mid-size cities is profitable at the route level but losing money at the company level. The board wants to know: which routes to cut, whether to cut overhead, or whether the business model is fundamentally broken. You have 90 minutes. What is your diagnosis and recommendation?",
    context: "Annual revenue: $280M. Route-level contribution margin total: $42M (15% blended). Corporate overhead: $58M. Net loss: $16M. The airline operates 48 routes. Route breakdown by contribution margin: 8 routes contribute 80% of total route CM ($33.6M), 22 routes are marginally positive ($6.3M total), 18 routes are CM-negative (–$7.9M total). Fleet: 24 aircraft. Average aircraft utilization: 9.1 hours/day. Industry benchmark: 11.5 hours/day. Load factor: 71%. Industry benchmark: 82%. Overhead breakdown: $22M labor (HQ), $18M technology/reservations, $10M regulatory/compliance, $8M marketing. The airline's 8 top routes overlap with a major low-cost carrier on 5 of them.",
    hints: [
      "Build an issue tree with two branches: route economics (contribution margin problem) and overhead leverage (fixed cost problem). The loss exists at both levels — quantify each separately.",
      "The 18 CM-negative routes are losing $7.9M. But cutting them may not save $7.9M — some costs (aircraft, crew bases) are semi-fixed. Ask what costs actually disappear if you cut a route.",
      "Utilization gap: actual 9.1 vs. benchmark 11.5 hours/day means $280M revenue on 9.1 hours/aircraft/day. If utilization reached 11.5, revenue could scale to ~$353M with similar cost base — the overhead ratio would drop from 20.7% to ~16.4%, potentially swinging to profitability without cutting routes."
    ],
    referenceSolution: {
      approach: "Use an issue tree separating route-level economics from overhead leverage. Apply sensitivity analysis to quantify what levers close the $16M gap. Use competitive analysis to assess whether the top routes are defensible.",
      reasoning: "Three simultaneous problems: (1) 18 routes destroy $7.9M in contribution margin — cutting them improves CM by up to $7.9M, but only if the associated semi-fixed costs (crew bases, slots) are genuinely avoidable. Assume 60% cost avoidance = $4.7M improvement. (2) Overhead is $58M on $280M revenue = 20.7%, while a healthy regional airline runs 14–16%. Reducing overhead to 16% would save $13M — nearly closing the gap alone. The $18M tech/reservations line is an outlier worth challenging (industry average for a 24-plane fleet is ~$8M). (3) Low-cost carrier overlap on 5 of the top 8 routes is an existential risk. If those routes deteriorate, the $33.6M CM engine collapses. Recommended sequence: (a) immediately investigate and renegotiate or insource the tech contract; (b) cut the worst 10 CM-negative routes where cost avoidance is clearest; (c) develop a competitive response plan for the 5 overlapping routes before LCC pricing pressure intensifies. Do not cut routes indiscriminately — the 22 marginal routes may cover fleet fixed costs and losing them would raise per-unit overhead on remaining routes.",
      commonMistakes: "Recommending cutting all 18 CM-negative routes as if $7.9M disappears from the P&L. Ignoring the utilization gap, which is the most powerful lever. Failing to note that LCC competition on the top routes is a strategic threat that changes the whole analysis.",
      alternatives: "A complementary approach is to model a 'fleet right-sizing' scenario: if 6 aircraft are retired (from 24 to 18), fixed fleet costs drop materially but route network shrinks. Compare this to the utilization improvement scenario to see which path to profitability has lower execution risk."
    },
    rubric: [
      { id: "in-027-r1", text: "Separates route-level economics from overhead leverage as distinct problems" },
      { id: "in-027-r2", text: "Correctly notes that cutting CM-negative routes does not save the full $7.9M due to semi-fixed costs" },
      { id: "in-027-r3", text: "Identifies the technology/reservations overhead anomaly as a high-leverage investigation target" },
      { id: "in-027-r4", text: "Quantifies the utilization gap opportunity ($280M → ~$353M) and its effect on overhead leverage" },
      { id: "in-027-r5", text: "Flags LCC competitive overlap on top routes as a strategic risk, not merely an operational issue" },
      { id: "in-027-r6", text: "Provides a prioritized recommendation sequence rather than a simultaneous list of cuts" }
    ]
  },

  {
    id: "in-028",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["hypothesis-trees", "supply-demand", "assumption-validation"],
    difficulty: "hard",
    question: "A premium consumer electronics brand has seen its gross margin compress from 52% to 41% over three years while revenue grew 35%. The CFO believes it is a cost problem. The CMO believes it is a pricing problem. Use a structured analysis to settle the debate and recommend a path to recovering 5 margin points within 18 months.",
    context: "Three years ago: revenue $400M, COGS $192M, gross profit $208M (52%). Today: revenue $540M, COGS $318.6M, gross profit $221.4M (41%). Product mix: three years ago — flagship ($400 ASP, 70% of units), mid-tier ($200 ASP, 30% of units). Today — flagship ($390 ASP, 45% of units), mid-tier ($185 ASP, 35% of units), budget ($110 ASP, 20% of units). COGS per unit three years ago: flagship $160, mid-tier $90. COGS per unit today: flagship $168, mid-tier $96, budget $72. Total units sold three years ago: ~730K. Today: ~1.1M.",
    hints: [
      "Decompose the margin change into three effects: (1) price/ASP change on existing products, (2) cost change on existing products, (3) mix shift toward lower-margin products. Quantify each.",
      "Calculate blended gross margin per unit three years ago vs. today. Three years ago blended margin: (0.70×($400–$160) + 0.30×($200–$90)) = ($168 + $33) = $201/unit. Today: (0.45×($390–$168) + 0.35×($185–$96) + 0.20×($110–$72)) = ($99.9 + $31.15 + $7.6) = $138.65/unit.",
      "Margin per unit fell from $201 to $138.65 — a 31% drop. Attribute this to: (a) ASP compression on existing lines (flagship –$10, mid-tier –$15), (b) COGS increase on existing lines (flagship +$8, mid-tier +$6), (c) addition of low-margin budget line + mix shift. Quantify in dollar terms at current volume."
    ],
    referenceSolution: {
      approach: "Build a margin bridge decomposing the 11-point GM% compression into price effect, cost effect, and mix effect. Use hypothesis trees to test the CFO vs. CMO hypotheses against the data. Apply sensitivity analysis to identify which lever closes the 5-point gap fastest.",
      reasoning: "Margin bridge at current 1.1M units: (1) Price effect on existing lines: flagship ASP –$10 × 495K units = –$4.95M; mid-tier ASP –$15 × 385K units = –$5.775M. Total price effect: –$10.7M. (2) Cost effect on existing lines: flagship COGS +$8 × 495K = +$3.96M; mid-tier COGS +$6 × 385K = +$2.31M. Total cost effect: –$6.27M. (3) Mix effect: replacing high-margin mix with 220K budget units at $38/unit margin = +$8.36M that would have been ~$201/unit in old mix = lost ~$35.9M of potential margin. Mix effect = –$27.6M. Total explained margin loss ≈ –$44.6M. Both the CFO and CMO are partially right, but mix shift is the largest single driver (62% of margin loss), price erosion is 24%, and cost inflation is 14%. The 18-month path to +5 points (from 41% to 46%) on $540M revenue requires recovering $27M of gross profit. Options: (a) discontinue budget line (saves mix dilution, but sacrifices 20% of volume — only viable if budget customers don't trade up); (b) raise budget ASP from $110 to $130 while holding COGS at $72 (margin jumps from $38 to $58, adding ~$4.4M); (c) reverse flagship price erosion via premium SKU introduction at $450+; (d) negotiate COGS reductions with contract manufacturers (a 5% COGS cut on flagship = $8.4/unit × 495K = $4.2M). Recommended combination: SKU rationalization of budget line + flagship premium variant + COGS negotiation = estimated $15–18M GP improvement, worth 2.8–3.3 margin points. Remaining gap requires demand response testing before committing.",
      commonMistakes: "Accepting either the CFO or CMO framing without running the bridge. Ignoring the mix effect, which is the largest driver. Recommending budget line discontinuation without acknowledging the volume loss risk.",
      alternatives: "A simpler framing: if the budget line had never been introduced and volume had still grown proportionally on the original two lines, what would margin be today? This counterfactual makes the mix-shift cost vivid without a full bridge."
    },
    rubric: [
      { id: "in-028-r1", text: "Builds a three-part margin bridge (price, cost, mix) and quantifies each component" },
      { id: "in-028-r2", text: "Correctly identifies mix shift as the largest driver of margin compression (~62% of loss)" },
      { id: "in-028-r3", text: "Concludes both CFO and CMO are partially correct, with evidence for each" },
      { id: "in-028-r4", text: "Proposes a specific combination of levers targeting the 5-point recovery with quantified impacts" },
      { id: "in-028-r5", text: "Identifies the budget line discontinuation risk (volume loss) and does not recommend it without caveats" }
    ]
  },

  {
    id: "in-029",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["logic-trees", "business-model-evaluation", "estimation-chains"],
    difficulty: "hard",
    question: "A newspaper publisher's digital subscription business is growing 40% year-over-year in subscribers but the business is still losing money. The publisher believes it is a 'scale problem' — they just need more subscribers. Assess whether this claim is correct and determine the subscriber count at which the business breaks even.",
    context: "Current state: 800K digital subscribers at $12/month average = $115.2M ARR. Cost structure: editorial ($45M, mostly fixed), technology platform ($18M, mostly fixed), customer acquisition ($28M, variable — $35 CAC per subscriber acquired; acquiring 800K new subscribers/year to offset 70% annual churn), customer service ($8M, variable), corporate overhead ($22M, fixed). Total costs: $121M. Net loss: $5.8M. Churn: 70% annually (meaning the current 800K base requires acquiring 560K new subscribers/year just to stay flat; the 40% growth means acquiring 800K+ new subscribers/year). ARPU increasing ~3% per year.",
    hints: [
      "Build the full P&L at current scale, then model what changes as subscriber count grows. Separate fixed from variable costs. Calculate the contribution margin per subscriber.",
      "Variable costs per subscriber: CAC = $35 (but amortized over what period?). With 70% annual churn, average subscriber tenure = 1/0.70 = ~1.4 years. LTV = $12 × 12 × 1.4 = $201.60. CAC = $35. LTV:CAC = 5.8×. But the cash flow problem is that 70% churn means you keep spending $35 CAC every 1.4 years per subscriber slot.",
      "Contribution margin per subscriber per year: $144 ARPU – ($35 CAC annualized on 70% churn = $24.50/subscriber/year) – customer service variable cost (estimate ~$10/subscriber/year) = ~$109.50/subscriber/year. Fixed costs: $45M + $18M + $22M = $85M. Break-even: $85M / $109.50 = ~776K subscribers. But the company already has 800K. So why is it losing money?"
    ],
    referenceSolution: {
      approach: "Use a logic tree to separate fixed-cost leverage from variable cost dynamics. Build a contribution margin model to find the true break-even. Apply business model evaluation to assess whether the 'scale solves it' thesis holds.",
      reasoning: "The publisher's claim deserves scrutiny. Fixed costs: $45M editorial + $18M tech + $22M overhead = $85M. Variable costs: CAC at 70% churn = $35 × (0.70 × 800K) = $19.6M; customer service at $8M on 800K = $10/subscriber. Contribution margin = $144 ARPU – ($19.6M/800K = $24.50 CAC) – $10 CS = $109.50/subscriber/year. Fixed cost coverage: $85M / $109.50 = 776K subscribers. The company has 800K — it should be profitable! The $5.8M loss suggests the stated costs don't fully reconcile. Recalculating: Revenue $115.2M – $45M – $18M – $28M – $8M – $22M = –$5.8M. The actual CAC spend is $28M, not $19.6M — meaning they are acquiring 800K new subscribers/year (for growth AND replacement), not just 560K. This means the 40% growth is burning extra CAC. Break-even at steady state (no growth): $115.2M – $45M – $18M – $19.6M – $8M – $22M = +$2.6M profit. The scale argument is misleading — the company would be profitable TODAY if it stopped growing. The real question is whether growth investment now creates durable value (i.e., is 70% churn acceptable, and will scale reduce it?). 70% annual churn is a severe structural problem: average subscriber stays only 17 months. No amount of scale solves a business where you replace your entire customer base every 14 months. Fix churn first.",
      commonMistakes: "Taking the 'scale solves it' claim at face value without modeling the contribution margin. Failing to notice that the company would be profitable at steady state. Confusing growth CAC with maintenance CAC.",
      alternatives: "Model three scenarios: (A) stop growing, reduce CAC to maintenance level — immediate profitability; (B) reduce churn to 40% (industry best) — LTV doubles, CAC efficiency improves dramatically; (C) raise ARPU via price increase — test elasticity on a segment. Scenario B has the highest long-term value but requires product investment."
    },
    rubric: [
      { id: "in-029-r1", text: "Separates fixed costs from variable costs and calculates contribution margin per subscriber" },
      { id: "in-029-r2", text: "Correctly identifies that the company is losing money due to growth CAC, not structural under-scale" },
      { id: "in-029-r3", text: "Demonstrates that at steady state (no growth), the business would be profitable" },
      { id: "in-029-r4", text: "Identifies 70% annual churn as the core structural problem that scale cannot solve" },
      { id: "in-029-r5", text: "Recommends churn reduction as the primary lever, with a clear rationale" }
    ]
  },

  {
    id: "in-030",
    trackId: "integration",
    subSkill: "case-analysis",
    secondarySkills: ["framework-selection", "market-dynamics", "first-principles-analysis"],
    difficulty: "hard",
    question: "A fast-casual restaurant chain operating 180 locations is facing a strategic inflection: its primary growth driver (new store openings) is slowing as it exhausts tier-1 and tier-2 city locations, while same-store sales growth has turned negative (–2% last year). The CEO asks: should the company (A) push into tier-3 cities, (B) invest in digital/delivery, or (C) optimize the existing store base before expanding further? You have one hour to structure a recommendation.",
    context: "Current financials: system-wide revenue $540M ($3M/store average), EBITDA margin 14% ($75.6M). New store economics: average unit volume $2.8M, build cost $650K, year-1 EBITDA margin 8% (ramps to 12% by year 3). Existing stores: 60 stores with AUV >$3.5M (top performers), 80 stores with AUV $2.5–3.5M (core), 40 stores with AUV <$2.5M (laggards, average $2.1M). Digital/delivery: currently 8% of sales; industry peers at 22–28%. Delivery margin is ~6% below dine-in margin due to platform fees. Tier-3 city pilot (12 stores): AUV $2.1M, margin 9%. Comparable chain that invested heavily in digital saw same-store sales inflect to +4% within 18 months.",
    hints: [
      "Each option has a different risk/return profile and time horizon. Structure the comparison using a clear framework: what does each option cost, what does it return, and when? Start with the status quo trajectory.",
      "The 40 laggard stores averaging $2.1M AUV are dragging the system. If their AUV matched the core ($3M), system revenue would increase by $36M with near-zero incremental capital. That's a 6.7% revenue uplift before any new stores.",
      "Digital is the most interesting option: peers at 22–28% penetration vs. current 8%. Closing half that gap on $540M revenue = +$54M incremental digital sales, but at 6% lower margin. Net margin impact: +$54M × (14%–6%) = +$4.3M EBITDA. Meanwhile, the comparable chain example suggests digital investment correlates with same-store sales inflection — which could address the –2% SSS trend."
    ],
    referenceSolution: {
      approach: "Select a portfolio strategy framework: evaluate each option on NPV, time-to-value, risk, and strategic fit. Use first-principles analysis to question whether the growth model is broken or just temporarily constrained. Apply market dynamics to assess whether tier-3 cities represent a new market or market dilution.",
      reasoning: "Status quo trajectory: –2% SSS on $540M = –$10.8M/year revenue headwind, partially offset by new stores (assume 15 new stores/year at $2.8M AUV = +$42M). Net: modest revenue growth but margin compression as laggards drag the average. Option A (Tier-3 expansion): pilot data shows AUV $2.1M and margin 9% vs. system average $3M/12%. Each new tier-3 store is 30% lower revenue and 25% lower margin than average — growth for growth's sake. NPV per tier-3 store: $2.1M × 9% = $189K EBITDA/year; at 8× EBITDA = $1.51M vs. $650K build cost. IRR ~29% vs. tier-1/2 historical ~40%. Worse unit economics, more capital, slower ramp. Option B (Digital investment): costs ~$15–20M (app, integration, marketing) over 18 months. Upside: if SSS inflects from –2% to +2% (per comparable chain), that's a $21.6M revenue swing on the existing base, worth ~$3M EBITDA at 14% margin. Digital also captures delivery demand that would otherwise go to competitors. Option C (Store optimization): 40 laggard stores at $2.1M AUV. If half can be closed/relocated and half improved to $2.8M AUV, freed capital (closures save ~$200K/year EBITDA drag each) plus improved AUV adds $8–12M EBITDA. Recommendation: Lead with C+B. Optimize the store base first (exit worst 15–20 laggards, reallocate capital) while investing in digital to address the SSS trend. Do not expand to tier-3 until the current base is healthy. This approach costs least, reverses the SSS decline, and creates a stronger platform for any future expansion.",
      commonMistakes: "Treating the three options as mutually exclusive when they can be sequenced. Ignoring the laggard store drag on the system P&L. Recommending digital without noting the margin dilution from delivery fees.",
      alternatives: "A pure financial returns analysis comparing IRR by option: tier-3 ~29%, digital ~40–50% if SSS inflects, store optimization ~60%+ (pure cost/revenue on existing capital). This framing makes the priority order obvious to a financially-oriented audience."
    },
    rubric: [
      { id: "in-030-r1", text: "Evaluates all three options on a consistent basis (NPV/IRR, time-to-value, risk) rather than qualitatively" },
      { id: "in-030-r2", text: "Identifies the laggard store drag as the most capital-efficient near-term fix" },
      { id: "in-030-r3", text: "Correctly calculates or estimates the digital opportunity and notes the margin dilution caveat" },
      { id: "in-030-r4", text: "Shows tier-3 expansion has worse unit economics than historical expansion and recommends deferral" },
      { id: "in-030-r5", text: "Recommends a sequenced strategy (C then B) rather than a single option" },
      { id: "in-030-r6", text: "Ties the digital investment recommendation back to reversing the –2% SSS trend" }
    ]
  },

  // ── MULTI-SKILL SYNTHESIS (in-031 to in-035) ──────────────────────────────

  {
    id: "in-031",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["market-sizing", "unit-economics", "structured-argumentation"],
    difficulty: "medium",
    question: "A private equity firm is evaluating a $200M acquisition of a regional pest control company. They need a quick answer: is this market worth being in at this price? Build the investment thesis in 20 minutes using market sizing, unit economics, and a structured argument.",
    context: "Target company: $85M revenue, $17M EBITDA (20% margin), growing 8% annually. Market: US residential pest control. Comparable transactions: 10–13× EBITDA multiples. The target was acquired at 11.8× EBITDA ($200M / $17M). Key operating data: 42,000 active service accounts, average contract value $185/year, customer acquisition cost $220, annual churn 18%, route density (accounts per technician route day): 22 accounts/day, technician fully-loaded cost $58K/year.",
    hints: [
      "US residential pest control market is approximately $8–10B. Build a quick sanity check: US households = ~130M, pest control penetration ~15%, average spend ~$180/year = ~$3.5B residential. Add commercial to get to $8–10B total.",
      "Unit economics: LTV = $185 × (1/0.18) = $185 × 5.6 years = $1,030. CAC = $220. LTV:CAC = 4.7×. Contribution margin per account: $185 – ($220 × 18% annualized = $39.60) = $145.40/year.",
      "Route economics: 22 accounts/day × 250 working days = 5,500 accounts/technician/year. Revenue per technician: 5,500 × $185 = $1.017M. Technician cost: $58K. Route contribution: $1.017M × 20% EBITDA margin = $203K/technician. At 42,000 accounts: ~7.6 technicians worth of capacity per technician (this simplification works for rough sizing)."
    ],
    referenceSolution: {
      approach: "Combine market sizing (TAM sanity check), unit economics (LTV:CAC, route contribution), and structured argumentation (pyramid principle: lead with thesis, support with three pillars) to build a rapid investment thesis.",
      reasoning: "Market validation: US pest control ~$9B total market, growing ~5% annually driven by climate change (expanding pest ranges), urbanization, and health awareness. The target's $85M represents ~0.95% share — significant scale but ample room for geographic expansion. Unit economics: LTV:CAC of 4.7× is healthy (threshold is 3×). Route economics: each technician generates ~$1M revenue on 5,500 accounts at $185 ACV. At $58K cost, each technician contributes ~$145K EBITDA after variable costs — implying the company's 17 EBITDA margin is supported by ~120 routes. At 8% growth, EBITDA reaches ~$25M in 4 years. Exit at 12× = $300M, vs. $200M entry = 50% return before leverage. With 50% debt financing, equity return on $100M could reach 100%+ if growth holds. The 18% churn is the key risk — at 18%, you replace your entire book every 5.5 years. If churn rises to 25%, LTV drops from $1,030 to $740 and the economics become borderline. Investment thesis: the market is attractive, unit economics are sound, but the investment success hinges on maintaining or improving churn. Diligence focus: what drives the 18% churn and is it controllable?",
      commonMistakes: "Skipping the market sizing step and going straight to multiples comparison. Failing to stress-test the churn assumption. Not converting the unit economics insight into a specific diligence question.",
      alternatives: "A pure comparable transactions approach (10–13× range, target at 11.8× = mid-range) gives a faster answer but misses the operational insight. Both approaches together make the thesis robust."
    },
    rubric: [
      { id: "in-031-r1", text: "Builds a bottom-up or top-down TAM estimate and validates the market is large enough" },
      { id: "in-031-r2", text: "Calculates LTV:CAC correctly and interprets it against a benchmark threshold" },
      { id: "in-031-r3", text: "Models the return profile (entry price, exit multiple, 4-year growth) with reasonable assumptions" },
      { id: "in-031-r4", text: "Identifies churn as the key investment risk and translates it into a specific diligence question" },
      { id: "in-031-r5", text: "Structures the answer top-down with a clear thesis and supporting pillars" }
    ]
  },

  {
    id: "in-032",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["fermi-problems", "supply-demand", "rebuilding-mental-models"],
    difficulty: "hard",
    question: "You are advising a city government that wants to reduce traffic congestion by 20% within 3 years without building new roads. Using first-principles reasoning and estimation, evaluate three policy options: (A) congestion pricing on downtown roads, (B) subsidized transit expansion, (C) remote work incentives for large employers. Which combination do you recommend and why?",
    context: "City profile: population 1.2M, 480K daily vehicle trips into the downtown core, average commute trip 8 miles. Current road capacity: ~520K daily trips before congestion onset. Transit current mode share: 18%. City budget for this initiative: $40M/year for 3 years ($120M total). Congestion pricing pilot in comparable city: reduced vehicle trips by 14% among affected routes, generated $85M/year in revenue. Transit subsidy in comparable city: 15% fare reduction increased ridership 8% (elasticity –0.53). Large employer remote work incentive comparable: $2,000/employee/year subsidy for 2+ days remote reduced downtown commutes 11% among participating employees.",
    hints: [
      "Start with the baseline: 480K trips vs. 520K capacity = the road is at 92% capacity. A 20% reduction means getting to 384K daily trips. That requires eliminating 96K daily vehicle trips.",
      "For each option, estimate: (a) how many trips does it remove, (b) what does it cost per trip removed, (c) what are the second-order effects (equity, mode shift, elasticity)?",
      "Congestion pricing is the only option that generates revenue rather than consuming budget. If it generates $85M/year in a comparable city, it could be self-funding AND fund the other options — but it has political and equity costs that the others do not."
    ],
    referenceSolution: {
      approach: "Use Fermi estimation to size the impact of each policy option. Apply supply-demand logic to understand congestion dynamics. Rebuild the mental model of 'congestion policy' from first principles: congestion is a commons problem, and the three options represent price signals, substitute supply, and demand reduction respectively.",
      reasoning: "Target: reduce from 480K to 384K daily trips (–96K). Option A (congestion pricing): comparable city reduced trips 14%. Applied to 480K = –67K trips. Cost: implementation ~$15–20M capital (proven technology), then self-funding or revenue-generating. Revenue potential: $85M/year (comparable) adjusted for city size = roughly $50–70M/year. Net: generates $50M+/year, removes 67K trips. Political risk: high. Equity concern: regressive unless low-income exemptions built in. Option B (transit subsidy): fare –15% → ridership +8%. Current transit ridership: 480K trips × 18% = 86K/day. An 8% increase = +6.9K transit trips/day. If each new transit trip replaces a car trip, removes ~7K vehicle trips. Cost: fare subsidy on 86K daily riders at ~$3/trip average = $258K/day = ~$94M/year. To achieve meaningful impact requires a much larger transit subsidy or capacity expansion — the $40M/year budget buys only partial relief. Option C (employer remote work): 11% reduction in downtown commutes among participating employees. Downtown workforce ~200K. If 40% participate (incentive cost $2K × 80K employees = $160M/year — exceeds budget). At $40M budget: 20K participating employees × 11% fewer days = 2,200 fewer daily commuters. Very limited impact at budget. Synthesis: Option A clearly dominates on impact per dollar and may be self-funding. Recommended combination: A as the primary lever (pricing signal), use A's revenue to fund targeted low-income transit subsidies (addresses equity concern) and a smaller employer remote work program for sectors where pricing is less effective (e.g., essential workers exempt from pricing). This gets to ~70K + partial offsets = close to the 96K target. The remaining gap requires monitoring and possible phase 2 transit capacity investment.",
      commonMistakes: "Evaluating each option in isolation without comparing cost-per-trip-removed. Missing that congestion pricing can fund the other options. Underestimating the transit ridership impact because the mode share math produces a small number.",
      alternatives: "A pure cost-effectiveness analysis ranking the three options: congestion pricing = negative cost (generates revenue) per trip removed; remote work = ~$18K/trip removed (expensive); transit subsidy = ~$13K/trip removed. This makes the priority clear without the full narrative."
    },
    rubric: [
      { id: "in-032-r1", text: "Correctly establishes the baseline (480K vs. 520K capacity) and quantifies the 96K trip reduction target" },
      { id: "in-032-r2", text: "Estimates trip-removal impact for all three options using the comparable-city data" },
      { id: "in-032-r3", text: "Calculates cost-per-trip-removed for each option and compares them explicitly" },
      { id: "in-032-r4", text: "Identifies congestion pricing as revenue-generating and proposes using its proceeds to fund equity mitigations" },
      { id: "in-032-r5", text: "Recommends a combined approach with a clear primary lever and supporting levers" },
      { id: "in-032-r6", text: "Acknowledges the political/equity constraint on congestion pricing and addresses it in the recommendation" }
    ]
  },

  {
    id: "in-033",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["decomposition-to-fundamentals", "competitive-analysis", "pyramid-principle"],
    difficulty: "hard",
    question: "A legacy retail bank is losing deposit market share to a neobank competitor offering 4.5% APY on savings vs. the bank's 0.4%. The bank's CEO insists they cannot match the rate because it would destroy NIM. Assess whether this is true, identify what the bank can realistically do, and deliver your answer as a crisp executive communication.",
    context: "Bank financials: $12B in deposits, average cost of funds 0.8%, net interest margin 3.1%, loan book $9B at average yield 4.9%. NIM = (interest income – interest expense) / earning assets. The neobank has $2B in deposits, no branches, technology cost structure 60% lower than the bank's. The bank has 85 branches, 1,200 employees. Annual non-interest expense: $280M. Current deposit outflow to neobank: estimated $800M over 18 months (~6.7% of base). If outflow continues at this rate, the bank loses $2B in deposits over 3 years.",
    hints: [
      "Model what matching the neobank's 4.5% rate would do to NIM. Current: interest income = $9B × 4.9% = $441M; interest expense = $12B × 0.8% = $96M. NIM = ($441M – $96M) / $12B = 2.875%. If deposit rate rises to 4.5%: interest expense = $12B × 4.5% = $540M. NIM = ($441M – $540M) / $12B = negative. CEO is correct.",
      "But the question is not binary. The bank doesn't need to match 4.5% on ALL deposits — it could offer a high-yield tier for at-risk deposits (those most likely to leave) while keeping the majority at current rates.",
      "Model a segmented approach: offer 3.5% on $2B of 'at-risk' deposits (digital-native customers, high balance, under 40). Interest expense increase: $2B × (3.5% – 0.8%) = $54M/year. Compare to the cost of losing those deposits: losing $2B in deposits forces the bank to reduce loans or fund them at wholesale rates (~4.2%). Lost NIM on $2B of loans = $2B × (4.9% – 4.2%) = $14M/year. The comparison matters."
    ],
    referenceSolution: {
      approach: "Decompose NIM from first principles to assess the CEO's claim. Apply competitive analysis to understand the neobank's structural cost advantage. Use pyramid principle to deliver a clear executive recommendation: thesis first, supporting analysis second.",
      reasoning: "The CEO is correct that a full rate match destroys NIM — interest expense would exceed interest income at 4.5% on $12B. But the real question is whether doing nothing is better. Losing $2B in deposits over 3 years forces either (a) loan book contraction or (b) wholesale funding at ~4.2%. Scenario A: $2B fewer loans = $2B × 4.9% yield lost = $98M revenue; minus savings of $2B × 0.8% = $16M. Net NIM impact: –$82M over 3 years = –$27M/year. Scenario B: replace with wholesale funding: cost = $2B × 4.2% = $84M vs. $2B × 0.8% = $16M currently. Incremental cost: $68M/year. Option C: tiered rate offer at 3.5% on $2B at-risk deposits. Incremental cost: $2B × (3.5% – 0.8%) = $54M/year. This is the cheapest option and retains the customer relationship. Recommendation (pyramid): The bank cannot match the neobank's rate structurally, but doing nothing costs more than a targeted counter-offer. Introduce a high-yield digital savings tier at 3.5% APY, available only online, for accounts above $5K. This retains at-risk deposits at a cost ($54M) lower than deposit loss ($68–82M). Pair with a digital investment to reduce the branch cost structure over 3 years, as the neobank's 60% lower tech cost is the durable competitive advantage that must be addressed.",
      commonMistakes: "Accepting the CEO's binary framing (match or don't match) without exploring segmented or tiered options. Calculating NIM impact only on the deposit side without modeling the loan funding impact of deposit loss. Failing to note that the neobank's cost advantage is the structural issue, not just the rate.",
      alternatives: "Instead of a tiered rate, the bank could acquire or partner with a neobank (buy vs. build). Or it could reposition around services that the neobank cannot offer (mortgages, business banking, wealth management) and accept deposit loss in the commodity savings segment."
    },
    rubric: [
      { id: "in-033-r1", text: "Correctly models the NIM destruction scenario at full rate match" },
      { id: "in-033-r2", text: "Models the cost of deposit loss (wholesale funding or loan contraction) as a comparison baseline" },
      { id: "in-033-r3", text: "Proposes and quantifies a tiered/segmented rate option that is cheaper than the alternatives" },
      { id: "in-033-r4", text: "Identifies the neobank's structural cost advantage as the durable competitive threat" },
      { id: "in-033-r5", text: "Delivers the recommendation in a pyramid structure: thesis, then supporting analysis" }
    ]
  },

  {
    id: "in-034",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["scqa-framework", "market-dynamics", "assumption-validation"],
    difficulty: "hard",
    question: "A pharmaceutical company is deciding whether to launch a new drug at $85,000/year vs. the incumbent at $72,000/year. The commercial team believes the 18% price premium is justified by superior efficacy. The payer team believes insurers will not cover it at that price. Structure the decision and recommend a launch price, supporting it with a complete SCQA narrative.",
    context: "Drug profile: Phase 3 trial showed 34% reduction in disease progression vs. 22% for the incumbent (a clinically meaningful difference per FDA standards). Target patient population: 180,000 US patients annually. Current market: incumbent has 78% market share, one other drug at 12%, generic option at 10%. Formulary dynamics: 3 major PBMs control 85% of commercial coverage decisions. Historical precedent: the last 'superior efficacy' drug launched at a 20% premium — achieved 28% formulary coverage in year 1, 61% by year 3. Average gross-to-net discount in this drug class: 42% (i.e., list price $85K, net price after rebates ~$49K). Estimated annual peak market share at $85K: 22%. At $75K: 31%. At $65K: 38%.",
    hints: [
      "Build a revenue model at each price point using peak market share assumptions. Revenue = price × (1 – gross-to-net discount) × patients × market share.",
      "At $85K: $85K × (1–0.42) × 180K × 0.22 = $49.3K × 180K × 0.22 = $1.95B peak revenue. At $75K: $43.5K × 180K × 0.31 = $2.43B. At $65K: $37.7K × 180K × 0.38 = $2.58B. The lower price actually generates more revenue due to access.",
      "The SCQA structure: Situation — drug has meaningfully superior efficacy. Complication — payer resistance at premium price risks formulary access. Question — what price maximizes long-term revenue while ensuring broad patient access? Answer — $75K (or test $72K to match incumbent with a small premium)."
    ],
    referenceSolution: {
      approach: "Use SCQA to frame the decision narrative. Apply market dynamics to model formulary access as a function of price. Validate the gross-to-net assumption and stress-test the market share estimates. Synthesize into a launch price recommendation.",
      reasoning: "SCQA: Situation — the new drug demonstrates clinically superior efficacy (34% vs. 22% disease progression reduction), a 55% relative improvement. This is the strongest efficacy story in the class. Complication — the 3 PBMs controlling 85% of commercial coverage use cost-effectiveness thresholds and negotiate aggressively; the payer team is right that $85K list will face access barriers. Historical precedent shows a similar drug achieved only 28% formulary coverage in year 1 at a 20% premium. Question — at what price does the company maximize net present value of peak revenue while achieving the formulary access needed to realize the efficacy advantage? Answer — at $75K list price (4% premium over incumbent), peak revenue is $2.43B vs. $1.95B at $85K. The lower price captures more market share through better formulary access, and the net price ($43.5K) is still $7K above the incumbent net price (~$41.8K at 42% discount). This preserves a meaningful pricing story with payers ('modestly priced despite superior efficacy') while avoiding the formulary access barrier. The $65K option generates slightly more revenue ($2.58B) but signals weakness and may invite future price pressure. Recommendation: Launch at $75K with a committed real-world evidence program to generate cost-effectiveness data supporting a year-3 price adjustment. The historical comparable's trajectory (28%→61% formulary coverage) suggests patience in year 1 is rewarded — but only if initial access is not blocked entirely.",
      commonMistakes: "Optimizing for list price without accounting for gross-to-net dynamics. Ignoring the market share sensitivity to price (treating it as fixed). Framing it as a binary commercial vs. payer disagreement rather than a quantifiable optimization.",
      alternatives: "A value-based pricing approach would calculate QALY gains vs. incumbent, then price at $X per QALY gained using the $100–150K/QALY threshold common among US payers. This gives a defensible ceiling price and may support $85K if the QALY math works out."
    },
    rubric: [
      { id: "in-034-r1", text: "Correctly applies gross-to-net discount to convert list prices to net prices" },
      { id: "in-034-r2", text: "Builds revenue models at all three price points and correctly identifies the $75K optimum" },
      { id: "in-034-r3", text: "Uses SCQA framework explicitly with each element correctly assigned" },
      { id: "in-034-r4", text: "Identifies that the $65K option generates more revenue but creates a price-signaling problem" },
      { id: "in-034-r5", text: "Proposes a real-world evidence program as a mechanism to support future price adjustments" }
    ]
  },

  {
    id: "in-035",
    trackId: "integration",
    subSkill: "multi-skill-synthesis",
    secondarySkills: ["orders-of-magnitude", "economic-estimation", "challenging-defaults"],
    difficulty: "hard",
    question: "A think tank has commissioned you to assess whether universal basic income (UBI) of $1,000/month for every US adult is fiscally feasible without raising taxes beyond current levels. Use estimation, economic reasoning, and first-principles thinking to assess the claim. Your output should be a structured yes/no recommendation with quantified reasoning.",
    context: "The proposal: every US adult (18+) receives $1,000/month ($12,000/year). Proponents argue this can be funded by consolidating existing welfare programs, adding a value-added tax (VAT), and capturing efficiency gains. US federal budget: $6.5T annual spending. Existing means-tested welfare programs (consolidation candidates): Social Security = $1.2T, Medicare/Medicaid = $1.5T, SNAP/Housing/TANF/other = $0.7T. Note: Social Security and Medicare are not traditional 'welfare' — recipients paid into them. Adult US population (18+): approximately 258M. Current US GDP: ~$27T.",
    hints: [
      "Start with the gross cost: 258M adults × $12,000/year = $3.096T. This is the headline number. Now ask: what existing programs could be consolidated (eliminated) to offset this cost?",
      "The proposal to eliminate Social Security and Medicare is politically and practically toxic — those are earned benefits. Realistically, only the $0.7T in means-tested non-entitlement programs could be consolidated. Net new spending: $3.1T – $0.7T = $2.4T.",
      "A 10% VAT on US consumption: US personal consumption ~$18T/year. 10% VAT = $1.8T gross, but with low-income UBI recipients now having more to spend and VAT being regressive, effective yield is lower. After compliance/avoidance and regressivity offsets: ~$1.2–1.5T. Gap: $2.4T – $1.5T = $0.9T. Not feasible without additional revenue sources or program cuts."
    ],
    referenceSolution: {
      approach: "Use orders-of-magnitude estimation to establish the gross cost. Apply economic reasoning to assess consolidation offsets. Challenge the default assumption that UBI replaces existing programs. Build a structured fiscal gap analysis.",
      reasoning: "Gross cost: 258M × $12K = $3.1T/year (roughly half the current federal budget). This is the first reality check — this is not a marginal program. Consolidation offsets: the proponents' strongest case involves eliminating redundant welfare bureaucracy ($0.7T in non-entitlement means-tested spending). Social Security and Medicare ($2.7T combined) cannot practically be replaced — recipients earned these benefits and a $12K UBI does not replace $30K in average Social Security benefits. Realistic offset: $0.7T. Net new cost: $2.4T. Revenue options: (a) 10% VAT on $18T US consumption = ~$1.5T (after evasion, international comparisons, and distributional adjustments). Remaining gap: $0.9T. (b) Additional income taxes, wealth taxes, or carbon taxes could theoretically close the gap, but these would exceed 'no new taxes' constraint. (c) Proponents also cite GDP growth from UBI spending stimulus. At a Keynesian multiplier of 1.5, the $3.1T in UBI spending could add $4.6T to GDP, generating ~$1T in additional federal tax revenue (assuming ~22% effective tax rate). This partially closes the gap but relies on optimistic multiplier assumptions. Verdict: Not feasible under the stated constraint of 'no taxes beyond current levels.' A narrower version — UBI of $500/month for adults below median income — would cost ~$800B–1T, potentially fundable through consolidation + modest VAT. The question forces a choice between the principle of universality and fiscal realism.",
      commonMistakes: "Accepting the 'consolidate welfare' framing without distinguishing earned benefits (Social Security, Medicare) from means-tested programs. Ignoring the replacement problem (UBI of $12K < average Social Security of $18K). Treating the GDP multiplier argument as reliable without caveating it.",
      alternatives: "A negative income tax (Milton Friedman's proposal) achieves similar goals at lower cost by tapering benefits above the poverty line. Modeling this alternative highlights that universality is the expensive feature of UBI, not the income floor."
    },
    rubric: [
      { id: "in-035-r1", text: "Correctly calculates gross cost ($3.1T) and contextualizes it as ~48% of the current federal budget" },
      { id: "in-035-r2", text: "Distinguishes earned entitlements from means-tested welfare and limits consolidation to realistic candidates" },
      { id: "in-035-r3", text: "Models the VAT revenue option with a reasonable yield estimate ($1.2–1.5T)" },
      { id: "in-035-r4", text: "Reaches a clear conclusion (not feasible under stated constraints) with a quantified fiscal gap" },
      { id: "in-035-r5", text: "Proposes a more feasible alternative (targeted UBI or negative income tax) to demonstrate constructive thinking" }
    ]
  },

  // ── AMBIGUOUS PROBLEM SOLVING (in-036 to in-040) ─────────────────────────

  {
    id: "in-036",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["identifying-unknowns", "sensible-defaults", "business-model-evaluation"],
    difficulty: "medium",
    question: "Your client says: 'Our customer satisfaction scores are declining but our sales are up. Should we be worried?' The question is intentionally vague. What are the critical unknowns, what sensible defaults would you apply to begin analysis, and what is your preliminary hypothesis?",
    context: "No additional data is given. You must specify what information you would need, what assumptions you would make in the absence of that data, and what your working hypothesis is based on first principles alone. The client has a B2B SaaS product, $30M ARR, 300 customers.",
    hints: [
      "The pattern 'declining satisfaction + rising sales' is a known business failure mode — identify what it typically signals. Think about customer acquisition vs. retention dynamics.",
      "Critical unknowns fall into two categories: (1) customer satisfaction data (what metric, trend, segmentation) and (2) sales data (new vs. expansion vs. renewal, which cohorts, churn rate). Without these, you cannot determine if the divergence is a lead indicator of future churn or an artifact of customer mix.",
      "Sensible defaults: in B2B SaaS, satisfaction scores are a lagging-to-leading indicator of Net Revenue Retention. Sales growth can mask underlying retention problems if new logo acquisition outpaces churn. Apply the 'leaky bucket' mental model."
    ],
    referenceSolution: {
      approach: "Use an 'identifying unknowns' framework to categorize what you need. Apply sensible defaults from B2B SaaS industry norms. Build a preliminary hypothesis using the leaky bucket model of customer economics.",
      reasoning: "Critical unknowns: (1) What satisfaction metric? NPS, CSAT, CES? Each measures something different. (2) Which customer segments are declining? New customers vs. tenured, small vs. large, self-serve vs. enterprise? (3) What is driving sales growth — new logos or expansion? (4) What is the churn rate trend? (5) How long is the lag between satisfaction decline and churn action? Sensible defaults: In B2B SaaS, NPS decline of 10+ points historically precedes revenue churn acceleration by 2–4 quarters. Satisfaction decline concentrated in high-ACV accounts is more dangerous than in low-ACV. New logo sales can mask deteriorating NRR for 6–18 months before the leaky bucket effect becomes visible. Preliminary hypothesis: Yes, this is worth worrying about. The most common cause of this pattern is rapid sales growth bringing in customers who are a poor product-market fit, leading to dissatisfaction that will convert to churn in 2–3 quarters. If this is happening, the current ARR growth is building a fragile base. Key question to answer first: is satisfaction declining in the same cohorts that are growing, or only in older cohorts? If it's the former, the growth strategy itself is creating the problem.",
      commonMistakes: "Asking for all data before forming any hypothesis. Not applying industry-specific norms to anchor the analysis. Treating the divergence as benign ('different customers are satisfied vs. buying') without testing that assumption.",
      alternatives: "An alternative hypothesis is that the product has a high learning curve and new customers are temporarily dissatisfied before becoming power users (J-curve satisfaction). This would be validated by checking if satisfaction recovers in 6–12 month cohorts."
    },
    rubric: [
      { id: "in-036-r1", text: "Identifies at least 4 specific critical unknowns with a clear explanation of why each matters" },
      { id: "in-036-r2", text: "Applies sensible defaults from B2B SaaS norms without being given industry data" },
      { id: "in-036-r3", text: "States a clear preliminary hypothesis (yes, worth worrying about) rather than refusing to commit without data" },
      { id: "in-036-r4", text: "Uses the leaky bucket or equivalent model to explain the satisfaction-sales divergence" },
      { id: "in-036-r5", text: "Identifies the cohort segmentation question as the most important next step" }
    ]
  },

  {
    id: "in-037",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["bounding-estimates", "analogical-reasoning", "market-sizing"],
    difficulty: "hard",
    question: "A founder pitches you on a startup that will provide 'AI-powered legal document review for small businesses.' They have no revenue, no customers, and no pricing decided. Using only analogical reasoning and bounding estimates, assess whether this is a venture-scale opportunity ($1B+ market) and what price point the product should target.",
    context: "The founder has built a prototype that can review standard business contracts (NDAs, service agreements, lease agreements) in 90 seconds and flag unusual clauses. It is not a law firm and cannot provide legal advice. Currently, a small business owner either (a) signs without review (most common), (b) pays a lawyer $250–500/hour for 1–2 hours of review ($250–1,000 per contract), or (c) uses a general AI chatbot (inadequate for legal specifics). US small businesses: approximately 33M. Average small business signs ~8 significant contracts per year.",
    hints: [
      "Market sizing via analogical reasoning: what is the closest existing service? Legal document review is a sub-category of legal services. US legal services market ~$350B/year. Small business share ~15% = $52B. Document review is a subset — perhaps 20% of small business legal spend = $10B. That is more than enough for a venture-scale opportunity.",
      "Pricing via analogical reasoning: what does a substitute cost? Lawyer review: $250–1,000. DIY (no review): $0 but high risk. The product must be priced between $0 and $250 but close enough to the lawyer alternative to capture the value. Industry rule of thumb: SaaS tools capture 10–20% of the value they replace.",
      "Bounding: lower bound — if 1% of 33M small businesses pay $50/month = $198M ARR. Upper bound — if 10% pay $100/month = $3.96B ARR. The range brackets a venture-scale opportunity. The question is where in the range is achievable."
    ],
    referenceSolution: {
      approach: "Use analogical reasoning to anchor market size estimates (legal services comparables) and pricing (value-based, compared to lawyer alternative). Apply bounding estimates to set a floor and ceiling on market size. Synthesize into a venture-scale assessment and pricing recommendation.",
      reasoning: "Market size: Top-down — US small business legal spend ~$52B, document review ~20% = $10B addressable. Bottom-up — 33M small businesses × 8 contracts/year × $50 addressable value per contract = $13.2B. Both approaches confirm a $10B+ market, well above the $1B threshold for venture scale. Pricing: The lawyer alternative is $250–1,000 per contract. The product captures the 90% of small businesses currently signing without review (not the 10% already paying lawyers). For this segment, the product must be priced against the cost of NOT reviewing: one bad contract can cost $10K–$100K in disputes, so willingness to pay is theoretically high. Analogical benchmarks: LegalZoom charges $299 for a standard LLC formation that lawyers charge $500–1,500 for — approximately 50% of the lawyer rate. Applying similar logic: $125–300 per contract review, or a monthly subscription for unlimited reviews. SaaS pricing for a tool used 8x/year: $49–99/month ($588–1,188/year) covers the core use case and aligns with the value proposition. At $79/month, 1% of small businesses = $31.3M ARR, 3% = $94M ARR — a seed-to-Series A opportunity. Venture scale ($100M+ ARR) requires 2.5% penetration of the 33M market or expansion to mid-market. Assessment: Yes, venture-scale opportunity exists. Price at $79/month for the subscription tier with per-contract pricing ($49/contract) for occasional users.",
      commonMistakes: "Sizing only the currently-addressable market (small businesses that already pay lawyers) rather than the total market including the non-consumption segment. Pricing based on cost-to-build rather than value delivered. Failing to distinguish between a large market and a capturable market.",
      alternatives: "A platform strategy (freemium individual → paid business) could use the individual consumer as a growth channel. Price the consumer version free, monetize businesses at $199+/month. This changes the go-to-market but not the market size assessment."
    },
    rubric: [
      { id: "in-037-r1", text: "Uses at least two independent methods (top-down and bottom-up) to size the market" },
      { id: "in-037-r2", text: "Correctly identifies the non-consumption segment (sign without review) as the primary opportunity" },
      { id: "in-037-r3", text: "Applies analogical reasoning explicitly (LegalZoom or similar) to anchor the pricing estimate" },
      { id: "in-037-r4", text: "Provides bounding estimates with a floor and ceiling and assesses venture-scale feasibility" },
      { id: "in-037-r5", text: "Recommends a specific price point with a clear rationale tied to value delivered" }
    ]
  },


  // ── AMBIGUOUS PROBLEM SOLVING (in-038 to in-040) ─────────────────────────

  {
    id: "in-038",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["mece-decomposition", "sensitivity-analysis", "unit-economics", "competitive-analysis"],
    difficulty: "medium",
    question: "A mid-size e-commerce company is deciding whether to build its own last-mile delivery fleet or continue using third-party couriers. The CFO says the build option is 'obviously cheaper at scale.' Assess the CFO's claim and recommend a decision framework for when — if ever — insourcing becomes the right call.",
    context: "Current state: 50,000 deliveries/month. Third-party couriers cost $6.50/delivery all-in. Internal estimate for a company-owned fleet: $2M upfront (vehicles, depot), $1.2M/year fixed operating costs (drivers, insurance, maintenance), plus $1.50/delivery variable cost. Growth forecast: 15% monthly volume growth for the next 12 months, then stable. The company's cost of capital is 12%. Delivery quality complaints are 3x higher with third-party couriers vs. the internal pilot.",
    hints: [
      "Calculate the total cost of each option at current volume (50K/month) and at projected volume (12 months out, compounded at 15%/month). Be careful: 15% monthly growth for 12 months means month-12 volume = 50,000 × 1.15^12 ≈ 267,000 deliveries/month.",
      "Find the break-even volume: set third-party cost ($6.50 × V) equal to internal cost ($100K fixed/month + $1.50 × V). Break-even: $5V = $100K → V = 20,000 deliveries/month. The company is already above break-even on a pure variable basis — but the upfront capex changes the picture.",
      "Payback on $2M capex: monthly savings at current volume = (6.50 – 1.50) × 50,000 – $100,000 = $250,000 – $100,000 = $150,000/month. Payback = $2M / $150K ≈ 13 months. At 12% cost of capital, NPV is positive within 18 months. The CFO's claim holds — but only if volume is sustained."
    ],
    referenceSolution: {
      approach: "Use MECE decomposition to compare total cost of ownership (fixed + variable + capex) across both options at multiple volume levels. Apply sensitivity analysis to identify the conditions under which each option wins. Incorporate the quality differential as a revenue-side factor.",
      reasoning: "Break-even analysis: Variable cost of insourcing ($1.50) vs. third-party ($6.50) = $5.00 saving/delivery. Fixed monthly cost of insourcing = $1,200,000 / 12 = $100,000/month. Break-even volume = $100,000 / $5.00 = 20,000 deliveries/month. Current volume (50,000) is 2.5x the break-even, so on a monthly cash-flow basis, insourcing is already cheaper by $150,000/month. Capex payback: $2,000,000 / $150,000 = 13.3 months. At 12% cost of capital, the net present value of the monthly savings stream over 3 years is approximately $150,000 × (1 – 1.12^{-36}/0.01) — simplified, NPV over 36 months at 1%/month discount ≈ $150,000 × 30.1 = $4.5M, minus $2M capex = $2.5M positive NPV. Quality premium: if 3x lower complaint rate translates to 1% lower churn on the customer base, and average LTV per customer is $200, even 1,000 customers saved/month = $200K lifetime value. The CFO's claim is broadly correct but conditional on: (1) volume staying above 30,000/month to maintain an adequate buffer above break-even, (2) capex being available without crowding out higher-ROI investments, and (3) operational capability to manage a fleet (often underestimated). Framework: insource when monthly volume > 30,000 AND growth is secular (not seasonal), AND the company has or can hire logistics operations capability.",
      commonMistakes: "Using only monthly variable costs and ignoring fixed costs. Forgetting to annualize the $1.2M fixed cost when computing monthly fixed cost ($100K/month). Ignoring the quality differential, which has a real revenue impact. Treating the decision as permanent rather than reversible.",
      alternatives: "A hybrid model — own a fleet for the core city (high density, high volume) and use third-party for suburban/rural deliveries — captures most of the savings with lower capex and operational risk. This is what Amazon and Walmart do at scale."
    },
    rubric: [
      { id: "in-038-r1", text: "Correctly calculates the break-even volume and confirms the company is above it" },
      { id: "in-038-r2", text: "Computes the capex payback period and assesses it relative to cost of capital" },
      { id: "in-038-r3", text: "Incorporates the quality/churn dimension as a revenue-side factor, not just a cost comparison" },
      { id: "in-038-r4", text: "Identifies the key conditions (volume floor, operational capability) that make the CFO's claim valid" },
      { id: "in-038-r5", text: "Proposes a clear decision framework rather than a binary yes/no" }
    ]
  },

  {
    id: "in-039",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["hypothesis-trees", "first-principles-analysis", "market-dynamics", "sensitivity-analysis"],
    difficulty: "hard",
    question: "A B2B software company has seen its average sales cycle lengthen from 45 days to 110 days over 18 months, while close rates remained flat at 28%. Revenue growth has slowed from 40% to 12% YoY. Diagnose the root cause and recommend a specific intervention with projected impact.",
    context: "The company sells project management software to mid-market firms (200–2,000 employees). ACV = $24,000. Sales team size grew from 8 to 20 reps over the same period. Expansion into enterprise segment (2,000+ employees) started 12 months ago. Enterprise deals average $85,000 ACV and take 180 days to close. Enterprise now represents 30% of pipeline by deal count. Customer interviews indicate 'too many stakeholders involved in approval' is the top objection. The product has not changed materially in 18 months.",
    hints: [
      "A 110-day average with 30% of deals at 180 days implies: 0.3 × 180 + 0.7 × x = 110 → x = (110 – 54) / 0.7 = 80 days for mid-market. The mid-market cycle itself has lengthened from 45 to 80 days. Both segments are slower — not just enterprise contaminating the average.",
      "Use a hypothesis tree: (A) product-side friction, (B) buyer-side friction, (C) sales process friction. Customer feedback ('too many stakeholders') points to B and C. Rule out A since the product hasn't changed. The 2.5x rep headcount growth without a corresponding process change is a strong signal of C.",
      "Revenue impact: at the old 45-day cycle with 20 reps, throughput = 20 reps × (365/45) × 0.28 × $24K = 20 × 8.1 × 0.28 × $24K = $1.09M/rep/year. Current: weighted average cycle = 110 days, weighted ACV = 0.7 × $24K + 0.3 × $85K = $42.3K. Throughput = (365/110) × 0.28 × $42.3K = 3.32 × 0.28 × $42.3K = $39.3K/deal × 3.32 deals/year = $131K/rep/year. That is a dramatic productivity drop, despite higher ACV — the longer cycle is destroying rep throughput."
    ],
    referenceSolution: {
      approach: "Decompose the average sales cycle into segment-specific cycles to isolate whether the problem is segment mix or within-segment degradation. Use a hypothesis tree to identify root causes. Quantify the revenue impact of the cycle lengthening per rep to size the intervention opportunity.",
      reasoning: "Segment decomposition: 30% enterprise at 180 days + 70% mid-market at x days = 110 days → mid-market cycle = 80 days (vs. original 45 days). Both segments are slower, ruling out 'enterprise contamination' as the sole explanation. Root cause hypothesis tree: (A) Product friction — ruled out (no material product change). (B) Buyer-side friction — 'too many stakeholders' suggests approval processes have become more complex, possibly because the company moved upmarket and is now selling to larger mid-market firms within the 200–2,000 band. (C) Sales process friction — headcount tripled from 8 to 20 reps; new reps are likely less tenured, conducting more exploratory calls, and not qualifying out slow deals early enough. Revenue productivity impact: Old model (45-day cycle, $24K ACV, 28% close rate) → $1.09M rep capacity/year. New model (110-day blended cycle, $42.3K ACV, 28%) → ~$131K rep throughput × ~3.3 deals/year = ~$430K/rep/year. Wait — recalculate: $42.3K × 28% × (365/110) = $42.3K × 0.28 × 3.32 = $39.3K/year/deal-attempt. Each rep can run ~3.32 deal cycles/year → $130K. Despite higher ACV, rep throughput fell by ~88% in annual deal value because new reps close fewer deals and the cycle is longer. Recommended intervention: implement a two-tier sales model. Separate mid-market and enterprise into distinct teams with distinct playbooks. For mid-market, enforce a 60-day qualification gate (MEDDIC or BANT) — any deal that cannot identify a single economic buyer by day 15 is disqualified. Projected impact: if mid-market cycle returns to 60 days (not 45 — some structural change is real) and enterprise stays at 180 days, blended average = 0.7 × 60 + 0.3 × 180 = 42 + 54 = 96 days. Revenue impact: mid-market rep throughput = $24K × 0.28 × (365/60) = $24K × 0.28 × 6.08 = $40.9K × 6 = ~$41K per deal cycle × 6.1 cycles = $250K/rep/year on mid-market team. A 12-rep mid-market team produces $3M/year vs. current ~$1.56M — a 92% increase.",
      commonMistakes: "Blaming the slowdown entirely on enterprise mix without testing the mid-market cycle directly. Treating the solution as 'hire more reps' rather than addressing the process root cause. Not quantifying the throughput destruction to make the business case for the intervention.",
      alternatives: "A champion-builder approach (identify and arm internal champions with pre-built approval decks and ROI models) addresses the stakeholder problem without changing team structure. This is faster to implement but addresses symptom not root cause in the sales process."
    },
    rubric: [
      { id: "in-039-r1", text: "Decomposes the blended sales cycle to show both mid-market and enterprise cycles have lengthened" },
      { id: "in-039-r2", text: "Uses a hypothesis tree to systematically identify and rule out root causes" },
      { id: "in-039-r3", text: "Quantifies the revenue-per-rep productivity impact of the longer cycle" },
      { id: "in-039-r4", text: "Recommends a specific structural intervention (two-tier team + qualification gate) with projected throughput improvement" },
      { id: "in-039-r5", text: "Distinguishes between symptoms (average cycle length) and root causes (rep tenure, qualification discipline)" }
    ]
  },

  {
    id: "in-040",
    trackId: "integration",
    subSkill: "ambiguous-problem-solving",
    secondarySkills: ["assumption-validation", "supply-demand", "orders-of-magnitude", "framework-selection"],
    difficulty: "hard",
    question: "A city government wants to reduce downtown traffic congestion by 20% within 2 years. They have a budget of $15M. Four options are on the table: (A) congestion pricing tolls on downtown entry, (B) expand bus rapid transit (BRT) on two corridors, (C) subsidize remote work for city employees, and (D) build a new parking structure to reduce circling. Recommend one primary option and one supporting option, with a quantified case.",
    context: "Downtown covers 4 square miles. Current peak-hour vehicle count: 85,000 vehicles/day. Mode split: 72% car, 18% transit, 10% walking/cycling. Congestion pricing pilots in Stockholm and London reduced vehicle entries by 18–22% on day one, but required 18–24 months of political groundwork. BRT on a comparable corridor in LA cost $12M/mile to implement and reduced parallel road traffic by 8–12%. Remote work for city employees (14,000 employees, 60% drive): a 3-day/week remote policy reduced commute trips by ~35% in a Denver pilot. Parking structures typically increase vehicle traffic by 5–12% by making driving more attractive.",
    hints: [
      "Clarify the goal: 20% reduction = 85,000 × 0.80 = 68,000 vehicles/day. Need to eliminate 17,000 vehicles/day during peak hours. Evaluate each option against this target.",
      "Congestion pricing: London achieved ~18% reduction = 15,300 vehicles. Cost of implementation: typically $5–10M for technology and administration in a city this size. Easily within budget, highest single-option impact. But: 18–24 months political groundwork — barely fits a 2-year window.",
      "BRT: $12M/mile, 2 corridors. If each corridor is 3 miles = $72M total — far over budget. Reject on cost grounds unless only partial implementation. Even partial implementation (1 corridor, 1 mile = $12M) reduces corridor traffic by 8–12% but affects only a fraction of the 85,000 total vehicles. Option D (parking structure) moves in the wrong direction — increases traffic. Rule it out."
    ],
    referenceSolution: {
      approach: "Apply a framework-selection step first: the options span supply-side (BRT, parking), demand-side (congestion pricing), and behavioral interventions (remote work). Use a structured scoring matrix (impact vs. cost vs. time) to identify the dominant option. Validate key assumptions with orders-of-magnitude checks.",
      reasoning: "Target: reduce from 85,000 to 68,000 vehicles/day (−17,000). Option D (parking structure) is eliminated immediately — it stimulates demand, not reduces it, contrary to the goal. Scoring the remaining three on impact, cost, and timeline: Congestion pricing (A): Impact — London/Stockholm precedent: 18–22% = 15,300–18,700 vehicles/day reduction. Meets or exceeds the 17,000 target alone. Cost: $5–10M for a city of this size (technology platform, signage, enforcement cameras). Timeline: 18–24 months political process is the binding constraint. BRT (B): Cost check — $12M/mile × assumed 3-mile corridors × 2 = $72M. Budget of $15M covers only 1.25 miles of one corridor. Impact of 1.25-mile BRT: proportional reduction ≈ 8–12% × (1.25/3) ≈ 3–5% of corridor traffic, representing perhaps 2,000–4,000 vehicles/day overall. Insufficient alone. Remote work (C): 14,000 city employees × 60% driving = 8,400 drivers. 3-day remote policy reduces trips by ~35% = 2,940 fewer vehicle trips/day. This is modest (~3.5% of total) but costs ~$1–2M in IT infrastructure and change management. Recommendation: Primary option = Congestion pricing (A). It is the only option that can achieve 20% reduction within budget, based on international precedent. The political timeline risk is real — the city must begin stakeholder engagement immediately and treat the political process as the critical path. Supporting option = Remote work subsidy (C). At ~$2M cost, it contributes 2,940–3,500 vehicle trip reductions (3–4%), takes effect within 6 months, and builds public goodwill for the more contentious congestion pricing rollout. Together: 18–22% from pricing + 3–4% from remote work = 21–26% total reduction. Budget: $7–10M (pricing) + $2M (remote work) = $9–12M, within the $15M envelope.",
      commonMistakes: "Recommending BRT without doing the cost-per-mile math, which blows the budget by 5x. Treating congestion pricing as impossible because it is politically difficult rather than assessing it against the goal. Failing to notice Option D actively worsens congestion. Not quantifying the remote-work impact against the 17,000 vehicle target.",
      alternatives: "A demand management approach combining congestion pricing with employer trip-reduction incentives (not just city employees) could accelerate the timeline. Requiring large downtown employers to implement parking cash-out programs or transit subsidies as a condition of operating could add 5,000–8,000 trip reductions at near-zero public cost."
    },
    rubric: [
      { id: "in-040-r1", text: "Translates the 20% goal into a specific vehicle count target (17,000 vehicles/day)" },
      { id: "in-040-r2", text: "Eliminates Option D with clear reasoning that it worsens congestion" },
      { id: "in-040-r3", text: "Performs a cost-per-mile sanity check on BRT that shows it is over budget for full implementation" },
      { id: "in-040-r4", text: "Selects congestion pricing as the primary recommendation with quantified precedent-based impact" },
      { id: "in-040-r5", text: "Correctly calculates the remote-work option's vehicle reduction and identifies its value as a complement" },
      { id: "in-040-r6", text: "Combines options to show the total impact meets the 20% target within budget" }
    ]
  },

  // ── FULL CASE INTERVIEW (in-041 to in-045) ────────────────────────────────

  {
    id: "in-041",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["mece-decomposition", "unit-economics", "market-sizing", "competitive-analysis"],
    difficulty: "medium",
    question: "Your client is a regional grocery chain with 85 stores in the US Midwest. They've seen EBITDA margins compress from 4.2% to 2.8% over 3 years while revenue grew 8% annually. They want to understand why and what to do about it. Structure your approach, diagnose the primary drivers, and recommend one strategic action with a quantified business case.",
    context: "Revenue last year: $1.4B. Product mix: 55% fresh/perishables, 30% packaged goods, 15% prepared foods. Labor costs have risen 18% over 3 years. Shrink (waste/theft) is 3.2% of revenue, vs. industry average of 2.1%. Energy costs up 22%. Average store size: 42,000 sq ft. A new 65,000 sq ft competitor (a national chain) opened in 40% of their markets over the past 2 years. Private-label penetration: 9% vs. industry average of 22%.",
    hints: [
      "EBITDA margin fell 1.4 percentage points on $1.4B revenue = $19.6M annual impact. Identify the biggest cost line movers: labor (+18%), energy (+22%), shrink (3.2% vs. 2.1% industry = 1.1pp above average × $1.4B = $15.4M excess shrink cost).",
      "Private-label gap: 9% vs. 22% industry = 13pp gap. On $1.4B revenue, that is $182M in potential private-label sales being captured by national brands. Gross margin on private label is typically 35–40% vs. 22–25% for national brands — a ~15pp margin differential.",
      "Business case for private label expansion: if the chain moves from 9% to 18% private-label penetration (halfway to industry average), private-label revenue increases by $126M. Margin uplift: 15pp × $126M = $18.9M in additional gross profit. This almost entirely offsets the $19.6M EBITDA compression."
    ],
    referenceSolution: {
      approach: "Use MECE decomposition: EBITDA = Revenue – COGS – Operating Expenses. Break each line into controllable vs. structural drivers. Apply unit economics to size the private-label opportunity as the primary strategic lever.",
      reasoning: "EBITDA compression: $1.4B × (4.2% – 2.8%) = $19.6M annual impact. Cost driver decomposition: Labor increase: if labor was ~20% of revenue ($280M), an 18% increase = $50M incremental cost, but some of this is offset by the 8% annual revenue growth. On a per-revenue-dollar basis, the labor ratio increased. Energy: smaller but meaningful at +22%. Excess shrink: 3.2% vs. 2.1% industry = 1.1pp excess on $1.4B = $15.4M — this is a discrete, controllable line and the largest single correctable driver. The new competitor opening in 40% of markets is a structural demand pressure but doesn't fully explain margin compression since revenue grew. Primary diagnosis: a combination of rising labor/energy costs and above-average shrink, with inadequate private-label penetration limiting gross margin expansion. Strategic recommendation: Accelerate private-label program. Rationale: (1) The private-label gap (9% vs. 22%) represents the most controllable, high-ROI lever available. Moving to 18% penetration adds $18.9M gross profit, matching the EBITDA compression. (2) Private-label is a competitive differentiator against national chains — it reduces price comparison shopping. (3) Investment required: sourcing partnerships, packaging ($5–8M one-time investment) — ROI is 2–4x in year one. Supporting action: tackle excess shrink ($15.4M opportunity) through improved inventory management and AI-assisted demand forecasting. Together these two levers could restore margins to 4% within 18 months.",
      commonMistakes: "Focusing on revenue growth (opening new stores, promotions) when the problem is margin compression. Treating all cost increases as structural when the shrink delta is clearly controllable. Not sizing the private-label opportunity quantitatively before recommending it.",
      alternatives: "A store rationalization strategy (closing the bottom 15 stores by EBITDA contribution) could improve margins mechanically but signals retreat to competitors and reduces revenue. More conservative: optimize the existing footprint before expansion or rationalization."
    },
    rubric: [
      { id: "in-041-r1", text: "Translates the margin compression into a dollar figure ($19.6M) before diagnosing causes" },
      { id: "in-041-r2", text: "Identifies excess shrink (3.2% vs. 2.1%) as a $15.4M controllable cost driver" },
      { id: "in-041-r3", text: "Quantifies the private-label gap and its gross margin implication with specific numbers" },
      { id: "in-041-r4", text: "Recommends private-label expansion with a full business case (revenue uplift, margin differential, investment)" },
      { id: "in-041-r5", text: "Structures the diagnosis using MECE decomposition across revenue, COGS, and OpEx" }
    ]
  },

  {
    id: "in-042",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["issue-trees", "business-model-evaluation", "supply-demand", "structured-argumentation"],
    difficulty: "hard",
    question: "A private equity firm is considering acquiring a regional hospital system (8 hospitals, 2,400 beds) for $1.8B. They are targeting a 25% IRR over a 5-year hold. The system's current EBITDA is $95M. Assess whether the investment thesis is achievable and identify the two highest-priority value creation levers with quantified targets.",
    context: "The hospital system serves a mid-size metro area (population 1.1M). Current revenue: $920M. Payer mix: 45% Medicare, 28% Medicaid, 22% commercial insurance, 5% self-pay. Average length of stay (ALOS): 4.8 days vs. national average of 4.2 days. OR utilization: 58% vs. industry best practice of 75–80%. Nurse-to-patient ratios: 1:5 on med/surg floors, vs. Magnet hospital standard of 1:4. Labor is 56% of operating expenses. Supply chain costs are 18% above peer group median. The nearest comparable hospital system sold for 9x EBITDA 18 months ago.",
    hints: [
      "IRR math: to achieve 25% IRR over 5 years from a $1.8B entry, the exit value must be $1.8B × 1.25^5 = $1.8B × 3.05 = $5.5B. At the same 9x EBITDA exit multiple, required exit EBITDA = $5.5B / 9 = $611M. Current EBITDA = $95M. Required EBITDA growth = $611M – $95M = $516M over 5 years — an increase of 543%. This is almost certainly unachievable.",
      "Recalibrate: if the entry multiple is conservative (PE buys at a discount, say $1.8B on $95M EBITDA = 18.9x — that is very high for healthcare). Re-read: at $1.8B purchase price, the EBITDA multiple is $1.8B / $95M = 18.9x. This is a high entry multiple. Alternatively, maybe they plan significant EBITDA expansion before exit.",
      "Operational levers: OR utilization from 58% to 75% — if ORs generate $8,000/hour and the system has 20 ORs operating 12 hours/day × 250 days = 60,000 OR hours/year, then 17pp utilization gain = 10,200 additional OR hours × $8,000 = $81.6M revenue. Supply chain: 18% above peer median. If supply chain is 20% of non-labor opex, and total opex is $825M, supply chain = $165M × 18% excess = $29.7M savings opportunity."
    ],
    referenceSolution: {
      approach: "Use an IRR reverse-engineering framework: calculate the required exit EBITDA to deliver 25% IRR, then assess whether identified operational levers can bridge the gap. Apply an issue tree to identify the highest-ROI value creation levers.",
      reasoning: "IRR target check: $1.8B entry × 1.25^5 = $5.49B required exit value. At 9x EBITDA exit multiple: required exit EBITDA = $610M. Gap from current $95M = $515M in EBITDA creation needed. This is a 6x EBITDA expansion — extremely aggressive. Even at an 11x exit multiple (premium for scale): $5.49B / 11 = $499M exit EBITDA needed, still a 5x expansion. The entry price of 18.9x EBITDA is the core problem — the PE firm is overpaying relative to the operational improvement potential. Value creation levers: (1) OR utilization: currently at 58% vs. best-practice 75%. Assuming 20 ORs, 12 operating hours/day, 250 days/year = 60,000 hours available. Gap = 17pp = 10,200 hours. Average OR revenue = $3,500–$5,000/hour net of variable costs (conservative due to payer mix). At $4,000/hour: 10,200 × $4,000 = $40.8M incremental EBITDA. Achievable in 2–3 years with scheduling optimization and surgeon recruitment. (2) Supply chain optimization: if total supply chain spend = $920M × 18% = $165.6M, and 18% above peer median implies peer spend = $165.6M / 1.18 = $140.3M, savings = $25.3M. Achievable through GPO renegotiation and standardization in 12–18 months. (3) ALOS reduction: from 4.8 to 4.2 days = 12.5% reduction in bed-days used. Freed capacity could accommodate 12.5% more patients at the same revenue, or fixed costs spread over more revenue. Revenue uplift: $920M × 12.5% × 40% margin contribution = $46M EBITDA if volume fills the freed capacity. Total identifiable EBITDA uplift: $40.8M + $25.3M + $46M = $112M. New exit EBITDA: $95M + $112M = $207M. Exit value at 9x: $1.86B — barely above the entry price. At 11x: $2.28B — 26% return over 5 years, which barely hits the 25% IRR. Conclusion: The investment thesis is achievable only if (a) the system can be purchased at a lower multiple than $1.8B (negotiate down to ~$1.4B), (b) all three operational levers are executed simultaneously, and (c) the exit multiple holds or expands. At the stated price, risk-adjusted IRR is likely 12–16%, not 25%. Recommend the PE firm either renegotiate the entry price or pass.",
      commonMistakes: "Not calculating the required exit EBITDA before evaluating operational levers. Treating all operational levers as additive without considering execution risk, capital required, and timeline. Ignoring the payer mix constraint — 73% government payers limits pricing power and revenue expansion.",
      alternatives: "A revenue cycle optimization play (improving Medicare/Medicaid reimbursement capture rates by 2–3pp through coding accuracy and denial management) could add $18–28M EBITDA with minimal capital investment. This is often the first lever PE firms pull in healthcare acquisitions and can be implemented within 6 months."
    },
    rubric: [
      { id: "in-042-r1", text: "Reverse-engineers the required exit EBITDA from the 25% IRR target and identifies the 6x expansion gap" },
      { id: "in-042-r2", text: "Calculates the entry EBITDA multiple (~19x) and flags it as the structural challenge to the thesis" },
      { id: "in-042-r3", text: "Quantifies the OR utilization lever with specific assumptions about hours and revenue per OR hour" },
      { id: "in-042-r4", text: "Quantifies the supply chain lever using the peer-median gap" },
      { id: "in-042-r5", text: "Synthesizes all levers into a revised exit EBITDA and tests it against the required exit value" },
      { id: "in-042-r6", text: "Reaches a clear, reasoned conclusion about the investment thesis viability (not just describing levers)" }
    ]
  },

  {
    id: "in-043",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["scqa-framework", "market-dynamics", "estimation-chains", "top-down-communication"],
    difficulty: "hard",
    question: "A major airline's domestic yield (revenue per passenger mile) has declined 11% over 24 months while load factors held steady at 83%. The CEO believes low-cost carrier (LCC) competition is entirely responsible. Structure a diagnosis, assess the CEO's hypothesis, and present your findings and recommendation in an executive-ready format.",
    context: "The airline operates 280 domestic routes. Revenue per available seat mile (RASM): 12.4¢ (down from 13.9¢). Load factor: 83% (flat). Cost per available seat mile (CASM): 11.8¢ (up from 11.1¢). LCCs have entered 60 routes (21% of network) over the past 24 months. On LCC-contested routes, fares fell 18–22%. On uncontested routes, fares fell 4–6%. The airline's fleet average age is 14.2 years (industry average: 11.1 years). The airline recently moved to a hub-and-spoke model from point-to-point on 40 routes to improve connections.",
    hints: [
      "Decompose yield decline by route type: 21% of routes contested by LCCs with 18–22% fare decline; 79% of routes with 4–6% fare decline. Weighted average expected decline: 0.21 × 20% + 0.79 × 5% = 4.2% + 3.95% = 8.15%. Actual decline is 11%. So LCC competition explains ~8pp of the 11pp decline — the CEO is partially right but about 3pp is unexplained by LCC entry alone.",
      "Other drivers for the unexplained 3pp: (1) Hub-and-spoke conversion on 40 routes likely increased average stage length (longer routing), which mechanically reduces yield per mile even at the same fare. (2) Older fleet (14.2 vs. 11.1 years) means higher maintenance CASM, not yield, but could affect on-time performance and premium cabin demand. (3) Mix shift: are premium passengers (higher yield) being lost disproportionately?",
      "Structural cost problem: CASM rose from 11.1¢ to 11.8¢ (+6.3%) while RASM fell 11%. The margin (RASM – CASM) compressed from 2.8¢ to 0.6¢ — a 79% margin compression. This is an existential problem that requires addressing both the yield and cost sides."
    ],
    referenceSolution: {
      approach: "Use SCQA framework for executive communication. Use a structured attribution analysis to decompose the yield decline into LCC competition, network changes, and other factors. Quantify the margin compression to set urgency. Present findings with a clear recommendation and two supporting actions.",
      reasoning: "SCQA framing: Situation — domestic yield has declined 11% over 24 months, compressing margins by 79% ($2.8¢ to $0.6¢ per ASM). Complication — the CEO attributes this to LCC competition, but the data suggests LCC entry explains only ~8 of the 11 percentage points. Question — what else is driving the decline, and can we profitably respond? Answer — network restructuring (hub-and-spoke conversion) is the most likely culprit for the residual 3pp decline, and cost inflation is compounding the yield problem. Attribution analysis: LCC-contested routes (60 of 280): average 20% fare decline. Uncontested routes (220 of 280): 5% decline. Weighted: 0.214 × 20% + 0.786 × 5% = 4.3% + 3.9% = 8.2%. Actual: 11%. Unexplained: 2.8pp. Hub-and-spoke conversion increases average trip distance (passengers travel through a hub), which mechanically reduces yield/mile for the same dollar fare — a 5% increase in average stage length would reduce yield by ~5% on those 40 routes. If those routes represent 14% of ASMs: 5% × 14% = 0.7pp yield impact, explaining part of the gap. Mix shift toward coach is another contributor. Margin math: at 83% load factor, RASM = $0.124, CASM = $0.118 → operating margin = 4.8%. 24 months ago: RASM = $0.139, CASM = $0.111 → margin = 20%. Margin has collapsed. Recommendations: (1) Network repricing — immediately reprice hub-and-spoke routes that were converted, reassessing whether the connection premium justifies the routing length. Consider reverting 15–20 of the 40 hub conversions. (2) Aggressive cost reduction — the CASM increase (+6.3%) must be reversed. Fleet modernization (replacing the 14.2-year average age fleet) reduces fuel and maintenance costs by $0.008–$0.012/ASM, enough to restore 1.3–2pp of margin. Financing a partial re-fleet on 30 aircraft could be revenue-neutral within 3 years. (3) On LCC routes: do not match fares on all 60 routes — segment by route profitability. On routes where LCC has >30% market share, consider code-share or capacity reduction rather than fare war.",
      commonMistakes: "Accepting the CEO's LCC hypothesis without running the attribution math. Missing the structural margin collapse ($2.8¢ to $0.6¢) as the real urgency driver. Conflating yield per mile with revenue per passenger. Not identifying the hub conversion as a mechanical yield depressor.",
      alternatives: "A premium cabin strategy — investing in business/first class upgrades on uncontested routes — could protect high-yield traffic where LCCs don't compete. Premium yields are 3–5x economy on domestic routes; capturing 2pp more premium mix would partially offset yield compression."
    },
    rubric: [
      { id: "in-043-r1", text: "Performs a weighted attribution analysis quantifying how much of the 11pp yield decline is explained by LCC entry (~8pp)" },
      { id: "in-043-r2", text: "Identifies hub-and-spoke conversion as a mechanical contributor to the unexplained yield gap" },
      { id: "in-043-r3", text: "Quantifies the margin compression (from ~20% to ~5%) to establish urgency" },
      { id: "in-043-r4", text: "Uses SCQA or equivalent framework to present findings in executive-ready structure" },
      { id: "in-043-r5", text: "Recommends differentiated LCC response (not uniform fare-matching) based on route-level profitability" },
      { id: "in-043-r6", text: "Addresses both sides of the margin problem: yield recovery and cost reduction" }
    ]
  },

  {
    id: "in-044",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["first-principles-analysis", "economic-estimation", "rebuilding-mental-models", "business-model-evaluation"],
    difficulty: "hard",
    question: "A consumer goods company is considering launching a subscription box for household cleaning products. Their category head says subscriptions 'always have better unit economics than one-time purchases.' Tear down this assumption from first principles and build the actual unit economics model for this specific category. Should they launch?",
    context: "The company currently sells cleaning products through retail (Target, Walmart, Amazon). Retail gross margin: 42%. DTC e-commerce gross margin: 61%. Average order value on Amazon: $34. Customer lifetime in retail channel: 3.2 years (estimated via repeat purchase panel). Subscription box concept: $39/month, contains $22 in COGS, $5 in packaging/fulfillment. Customer acquisition cost (CAC) via paid social: $48. Estimated monthly churn for subscription: 4.5% (based on comparable beauty subscription boxes). For retail channel, blended customer acquisition cost via trade promotion, slotting fees, and retail media: approximately $12 per new customer acquired.",
    hints: [
      "LTV for subscription: monthly contribution = $39 – $22 – $5 = $12. Monthly churn = 4.5% → average subscriber lifetime = 1/0.045 = 22.2 months. LTV = $12 × 22.2 = $266. LTV/CAC = $266/$48 = 5.5x.",
      "LTV for retail: customer buys $34 every 6 weeks (8.7x/year). Annual contribution = $34 × 8.7 × 42% = $124. Over 3.2 years: LTV = $124 × 3.2 = $397. CAC = $12. LTV/CAC = $397/$12 = 33x. The retail channel is dramatically more capital-efficient.",
      "The category head's assumption is wrong in this specific case. The 4.5% monthly churn is the killer — cleaning products are low-engagement, substitutable, and not 'delightful to receive' the way beauty or food subscriptions are. The key insight: subscription economics only beat retail when CAC is much lower OR when churn is much lower."
    ],
    referenceSolution: {
      approach: "Reconstruct unit economics from first principles for both channels: LTV = contribution margin per period × average lifetime. LTV/CAC ratio is the primary comparison metric. Identify the assumptions that would need to hold for subscriptions to outperform retail, and assess whether those assumptions are realistic for household cleaning products.",
      reasoning: "Subscription unit economics: Monthly contribution per subscriber = $39 (revenue) – $22 (COGS) – $5 (packaging/fulfillment) = $12. Average subscriber lifetime = 1 / 4.5% churn = 22.2 months. LTV = $12 × 22.2 = $266. CAC = $48. LTV/CAC = 5.5x. Payback period = $48 / $12 = 4 months. Retail unit economics: Purchase frequency: cleaning products purchased ~8x/year ($34 average order). Annual contribution = $34 × 8 × 42% = $114. LTV over 3.2 years = $114 × 3.2 = $365. CAC = $12. LTV/CAC = $365 / $12 = 30x. Note: even if we use the lower DTC margin (61%) and assume subscriptions capture that full margin, monthly contribution = $39 × (61% – packaging allocation) ≈ $39 × 0.48 = $18.7. LTV = $18.7 × 22.2 = $415. LTV/CAC = $415/$48 = 8.6x. Still below retail at 30x. The category head's assumption is incorrect in this context. Subscriptions have better gross margin percentage but far worse capital efficiency because (a) CAC is 4x higher ($48 vs. $12) and (b) churn at 4.5%/month means the average subscriber leaves after 22 months — fewer than 3 years, less than the retail customer lifetime. The break-even assumption test: for subscriptions to match retail LTV/CAC of 30x, either CAC must fall to $266/30 = $8.87 (unrealistic for paid social) OR churn must fall to a level where LTV = 30 × $48 = $1,440 → lifetime = $1,440/$12 = 120 months (10 years) — clearly unrealistic in subscription boxes. Recommendation: Do not launch a standalone subscription box. Instead, consider a subscribe-and-save model on the existing DTC/Amazon channel (similar to Amazon Subscribe & Save), which reduces acquisition cost and provides demand predictability without the full subscription box overhead. This could be trialed at low cost and captures some subscription economics without committing to the full model.",
      commonMistakes: "Accepting the assumption that higher gross margin percentage = better unit economics without building the full LTV model. Using revenue, not contribution margin, to calculate LTV. Not adjusting for the very different CAC between channels. Treating 'subscription' as a monolithic category rather than recognizing that churn rates vary enormously by category.",
      alternatives: "A loyalty program (not subscription) that rewards repeat purchase in retail could improve retail LTV without the box overhead or high churn. A hybrid model — subscription for a 'starter kit' with retail replenishment — captures the new customer acquisition benefit of subscriptions while relying on retail for retention."
    },
    rubric: [
      { id: "in-044-r1", text: "Correctly calculates subscription LTV using churn-implied lifetime (1/churn rate)" },
      { id: "in-044-r2", text: "Correctly calculates retail LTV using purchase frequency, AOV, and gross margin over customer lifetime" },
      { id: "in-044-r3", text: "Computes LTV/CAC for both channels and identifies the 5x vs. 30x divergence" },
      { id: "in-044-r4", text: "Challenges the category head's assumption with specific evidence from the unit economics" },
      { id: "in-044-r5", text: "Identifies churn rate and CAC as the two deciding variables and tests what they would need to be for subscriptions to win" },
      { id: "in-044-r6", text: "Recommends a specific alternative (subscribe-and-save or loyalty program) rather than a binary reject" }
    ]
  },

  {
    id: "in-045",
    trackId: "integration",
    subSkill: "full-case-interview",
    secondarySkills: ["pyramid-principle", "market-sizing", "challenging-defaults", "supply-demand"],
    difficulty: "hard",
    question: "A global pharmaceutical company is deciding whether to enter the generic drug manufacturing market in India. They have $400M to deploy over 3 years. Their head of strategy says the market is 'too commoditized to generate returns.' Assess this claim and recommend a go/no-go decision with a specific market entry strategy if you recommend go.",
    context: "India's pharmaceutical export market: $25B/year, growing at 11% annually. Generic drugs represent 80% of the market. India supplies ~30% of US generic drug volume. Gross margins in Indian generic manufacturing: 18–35% depending on product complexity. The company's current pharmaceutical ROIC: 22%. Typical ROIC in Indian generic manufacturing: 12–18%. Regulatory environment: US FDA inspections of Indian facilities have flagged ~30% of facilities for quality issues in the last 5 years. Key players: Sun Pharma, Dr. Reddy's, Cipla control ~45% of the export market. The company has no existing manufacturing presence in India but has FDA-approved processes and quality systems.",
    hints: [
      "The head of strategy's claim is partially correct for commodity generics but misses the stratified nature of the market. Not all generics are equal — complex generics (injectables, biosimilars, controlled substances) have margins of 30–50% and high barriers to entry. The relevant question is: which sub-segment to enter?",
      "Market size for complex generics: $25B × 80% generics × 20% complex = $4B. Growing at 11% = $4.4B in year 1. A $400M investment targeting 3% market share of the complex segment = $132M revenue. At 35% gross margin = $46M gross profit, suggesting reasonable returns if COGS and overhead are managed.",
      "Competitive advantage assessment: the company's FDA-approved quality systems are a genuine differentiator given that 30% of Indian facilities have FDA compliance issues. The ROIC gap (22% vs. 12–18%) is real for commodity generics but may narrow or invert for complex generics where quality premium holds."
    ],
    referenceSolution: {
      approach: "Use a pyramid principle structure to communicate the recommendation upfront, then build the supporting argument. Segment the generic market by complexity to challenge the 'commoditized' framing. Apply a market-sizing and return analysis to the complex generics sub-segment specifically.",
      reasoning: "Top-line recommendation: Go — but only for the complex generics sub-segment, not the commodity market. The head of strategy is correct about commodity generics (18–22% gross margin, intense price competition, 12–16% ROIC) but incorrect to apply this characterization to the entire generics market. Market segmentation: Commodity generics (tablets, capsules, standard oral formulations) = ~80% of generic volume, 18–22% margin. Complex generics (injectables, topicals, controlled-release, biosimilar reference products) = ~20% of generic volume, 30–50% margin. The $25B India pharma export market breaks down as: $25B × 80% generics = $20B, of which complex generics = $20B × 20% = $4B — growing at 11% annually = $4.4B in year 1, $5.3B in year 3. Investment return model: $400M over 3 years. Year 1: manufacturing facility construction and qualification ($120M). Year 2: FDA approval filing, staff hiring, pilot production ($160M). Year 3: commercial launch. By year 3, targeting 3% of $5.3B complex generics market = $159M revenue. At 32% gross margin = $51M gross profit. Operating expenses (SGA, R&D support) ~$20M. EBIT = $31M. On $400M invested: year-3 ROIC = 7.75% on invested base — below the company's 22% hurdle. However, by year 5 (market grows to $6.5B at 11%/year, company grows to 5% share = $325M revenue, same margin structure): EBIT = $84M. ROIC on original $400M = 21% — approaching hurdle rate. Competitive moat: the company's FDA-approved quality systems are the key differentiator in a market where 30% of competitors have FDA compliance issues. This creates a defensible premium positioning with US pharma buyers who are actively de-risking supply chains post-COVID. Go/no-go: Recommend go, with three conditions: (1) Entry restricted to complex generics (injectables and controlled-release specifically). (2) JV or acquisition of an existing Indian manufacturer with plant assets (reduces construction time by 18 months, accelerating cash flow break-even). (3) Commitment to at least a 5-year hold — returns are below hurdle in years 1–4 but reach hurdle in year 5.",
      commonMistakes: "Accepting the head of strategy's 'commoditized' framing without segmenting the market. Applying the average generic margin (18–35%) without distinguishing commodity from complex. Treating ROIC below hurdle in year 3 as a rejection signal without modeling year 5 when scale drives returns to target. Ignoring the supply chain de-risking value of a US-quality-certified Indian facility.",
      alternatives: "A licensing and offtake agreement (rather than owned manufacturing) with an existing Indian manufacturer would achieve the supply chain diversification goal with zero capital deployment. The trade-off: lower returns on the upside but no downside risk. This is the right answer if the company's 22% hurdle rate is a hard constraint."
    },
    rubric: [
      { id: "in-045-r1", text: "Segments the generic market by complexity (commodity vs. complex) and refutes the 'fully commoditized' framing" },
      { id: "in-045-r2", text: "Sizes the complex generics sub-segment using two-step decomposition ($25B × 80% × 20%)" },
      { id: "in-045-r3", text: "Builds a return model for years 3 and 5 and correctly identifies that ROIC reaches hurdle only in year 5" },
      { id: "in-045-r4", text: "Identifies FDA quality certification as the structural competitive advantage in this market" },
      { id: "in-045-r5", text: "Uses pyramid principle structure (recommendation first, then supporting evidence)" },
      { id: "in-045-r6", text: "Recommends a JV/acquisition entry mode with clear rationale, not just greenfield investment" }
    ]
  },

  // ── CROSS-DOMAIN REASONING (in-046 to in-050) ─────────────────────────────

  {
    id: "in-046",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["analogical-reasoning", "estimation-chains", "market-dynamics", "sensitivity-analysis"],
    difficulty: "medium",
    question: "A climate tech investor asks: 'Can direct air capture (DAC) of CO2 ever be cost-competitive with natural carbon sinks like forests?' Use analogical reasoning from manufacturing cost curves and economic estimation to build a view on whether and when DAC could reach price parity with forest carbon offsets.",
    context: "Current DAC cost: $400–600/tonne CO2. Current forest carbon offset price: $10–50/tonne CO2. Forest offsets face permanence and additionality risks that DAC does not — some analysts argue DAC's 'quality premium' justifies a 3–5x price premium. Historical solar PV cost curve: costs fell 89% over 10 years (2010–2020) as cumulative deployed capacity doubled roughly every 2–3 years. DAC installed capacity as of 2024: ~0.01 Mtonne/year. Global DAC capacity needed to be climate-relevant: ~1,000 Mtonne/year by 2050.",
    hints: [
      "Apply Wright's Law (learning curve): costs fall by a fixed percentage (the learning rate) for every doubling of cumulative production. Solar PV: 89% cost reduction over ~17 doublings of capacity → implies a learning rate of about 20% per doubling (since 0.8^17 ≈ 0.023 = 1 – 0.977, which is an 89% reduction approximately). Applying 20% learning rate to DAC: current cost = $500/tonne.",
      "How many doublings from 0.01 Mtonne to 1,000 Mtonne? 1,000/0.01 = 100,000. Log2(100,000) = 16.6 doublings. Cost after 16.6 doublings at 20% learning rate: $500 × 0.8^16.6 = $500 × 0.026 = $13/tonne. That is within the forest offset price range.",
      "The timeline question: if capacity doubles every 3 years (aggressive but plausible with policy support), 16.6 doublings × 3 years = ~50 years to reach 1,000 Mtonne capacity and ~$13/tonne cost. This implies price parity around 2074 — possible but requiring sustained policy and investment commitment."
    ],
    referenceSolution: {
      approach: "Apply Wright's Law (learning curve) by analogy with solar PV. Use estimation chains to compute the number of capacity doublings required and the resulting cost trajectory. Apply sensitivity analysis to the learning rate assumption. Assess quality-adjusted price parity.",
      reasoning: "Learning rate derivation: Solar PV fell 89% over roughly 17 doublings of capacity (2010–2020 deployed capacity grew from ~40 GW to ~700 GW, approximately 17 doublings if doubling every ~0.6 years — actually more like 4 doublings from 40 GW to 700 GW). More precisely: 40 GW to 700 GW = 17.5x = ~4.1 doublings. Learning rate: 0.80^4.1 = 0.41 → actually implies a 59% reduction, not 89%. Let me use the standard cited figure: solar PV learning rate ≈ 24% (cost falls 24% for each doubling of cumulative capacity). Applying 20% learning rate to DAC (slightly more conservative): Current cost = $500/tonne. Doublings from 0.01 Mtonne to 1,000 Mtonne = log2(100,000) = 16.6. Cost at 16.6 doublings: $500 × (1–0.20)^16.6 = $500 × 0.8^16.6. Computing: 0.8^16 = 0.028, 0.8^0.6 ≈ 0.87, so 0.8^16.6 ≈ 0.024. Cost = $500 × 0.024 = $12/tonne. Sensitivity: if learning rate = 15% (more conservative): 0.85^16.6 ≈ 0.071. Cost = $500 × 0.071 = $35.5/tonne — still within the forest offset range of $10–50/tonne. If learning rate = 10%: 0.9^16.6 ≈ 0.17. Cost = $85/tonne — above current forest offset prices but within the quality-adjusted premium range (3–5x = $30–250/tonne DAC break-even). Quality-adjusted price parity: forest carbon offsets sell at $10–50/tonne but have permanence risk and additionality concerns. If buyers pay a 3x quality premium for DAC, price parity occurs at $30–150/tonne DAC. Under the 10% learning rate scenario ($85/tonne at scale), DAC is competitive on a quality-adjusted basis even before reaching 1,000 Mtonne. Timeline: If global policy drives capacity doublings every 3 years (consistent with aggressive renewable deployment precedent), 16.6 doublings = 50 years → ~2074 for raw parity. But quality-adjusted parity could come earlier (~8 doublings = 24 years = 2048) if buyers price permanence correctly. Conclusion: DAC can reach cost competitiveness with forest offsets within 25–50 years, conditional on learning rates consistent with other clean energy technologies and sustained policy support. The quality premium further accelerates this crossover.",
      commonMistakes: "Comparing DAC cost to forest offsets without adjusting for quality differences (permanence, additionality). Not applying a learning curve framework — simply extrapolating linearly from current costs. Failing to bound the analysis with sensitivity to the learning rate assumption. Using the wrong baseline for 'doublings' (confusing installed capacity with annual production).",
      alternatives: "A bottom-up engineering cost model (energy cost per tonne, sorbent cost, amortized capex) rather than an analogical learning curve would give a more mechanistic view. Current DAC energy requirement: ~5–8 GJ/tonne CO2. At $20/GJ renewable energy cost: $100–160/tonne energy cost alone — meaning parity requires both learning-driven capex reduction AND continued renewable cost decline."
    },
    rubric: [
      { id: "in-046-r1", text: "Correctly applies Wright's Law / learning curve framework by analogy with solar PV" },
      { id: "in-046-r2", text: "Calculates the number of doublings required from current to climate-relevant DAC capacity (~16.6)" },
      { id: "in-046-r3", text: "Computes the cost at scale under the central learning rate assumption and arrives at a plausible price (~$12–35/tonne)" },
      { id: "in-046-r4", text: "Applies sensitivity analysis to the learning rate and shows the range of outcomes" },
      { id: "in-046-r5", text: "Adjusts for the quality premium of DAC vs. forest offsets in the parity analysis" }
    ]
  },

  {
    id: "in-047",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["decomposition-to-fundamentals", "unit-economics", "population-estimation", "framework-selection"],
    difficulty: "hard",
    question: "A government health department wants to evaluate whether a universal school lunch program (free lunch for all K-12 students, regardless of income) is cost-effective compared to the current means-tested program. Build the economic case for or against universalization, incorporating externalities from nutrition research.",
    context: "Current means-tested program: 15M students receive free/reduced lunch. Average cost to government: $3.50/meal. Current administrative cost of means-testing: $0.45/meal. Total K-12 students: 50M. A universal program would serve all 50M students. Estimated universal program meal cost: $3.20/meal (economies of scale). No administrative means-testing cost. Research evidence: students receiving free school lunch have 8% higher math test scores and 6% lower chronic absenteeism. Economic value of 1 standard deviation improvement in test scores: ~$35,000 in lifetime earnings (OECD estimate). The improvement of 8% in test scores corresponds to approximately 0.15 standard deviations for low-income students. Absenteeism cost: each day of absence reduces future earnings by approximately $200 in present value terms.",
    hints: [
      "Incremental cost of universalization: serve 35M additional students (50M – 15M). Daily cost: 35M × $3.20 = $112M/day. School days = 180/year. Annual cost = $112M × 180 = $20.2B/year. Savings from eliminating means-testing across all 50M students: 50M meals/day × $0.45 × 180 days = $4.05B/year. Net incremental cost: $20.2B – $4.05B = $16.15B/year.",
      "Benefits: For the 35M newly covered students, estimate the proportion who are low-income but currently not enrolled. The 'gap' between the 15M enrolled and the low-income population: assume 40% of students (20M) are low-income; the program already reaches 15M. So 5M additional low-income students newly covered. They receive the 8% test score benefit: 0.15 SD × $35,000 LTV × 5M students = $26.25B in lifetime earnings.",
      "But lifetime earnings are a stock value, not an annual flow. Annualizing over a 40-year work life: $26.25B / 40 = $656M/year in earnings value created. This is much smaller than the $16.15B annual cost. However, the universalization also benefits the 30M non-low-income students in ways not captured, and social externalities (reduced healthcare costs, reduced inequality) may add significantly."
    ],
    referenceSolution: {
      approach: "Decompose into incremental costs (expanded enrollment minus administrative savings) and incremental benefits (earnings uplift from nutrition/attendance improvements, plus externalities). Use a present-value framework to compare apples-to-apples. Apply sensitivity analysis to the key assumptions.",
      reasoning: "Incremental annual cost: Newly served students: 50M – 15M = 35M. Meal cost: $3.20 × 35M × 180 = $20.16B. Administrative savings (all 50M students): $0.45 × 50M × 180 = $4.05B. Net annual cost: $20.16B – $4.05B = $16.11B/year. Incremental benefit calculation: The program's documented benefits apply to food-insecure students who gain access. The gap: ~20M low-income students (40% of 50M), current program covers 15M → 5M newly food-secure students. Test score benefit: 5M × 0.15 SD × $35,000 PV lifetime earnings = $26.25B in lifetime earnings. Present value of $26.25B in earnings created over 40-year careers, discounted at 5% over 20 years of schooling delay: PV = $26.25B / (1.05^20) ≈ $26.25B / 2.65 = $9.9B. This is a one-time cohort benefit, generated each year a new cohort completes school. Annual equivalent: $9.9B is the PV of benefits for one year's cohort (say 500,000 students = 5M / 10 school years). Absenteeism: 5M students × 6% reduction in absenteeism. If baseline absenteeism = 8 days/year, 6% reduction = 0.48 days/student. PV earnings impact: 0.48 days × $200/day × 5M students = $480M in lifetime earnings/cohort/year. Total annual benefit: $10.4B (test score) + $0.48B (absenteeism) = $10.9B per annual cohort, vs. $16.1B incremental annual cost. Direct economic ROI: 0.68 — not economically self-justifying on direct education outcomes alone. However, the analysis excludes: (1) Health externalities: improved childhood nutrition reduces adult chronic disease costs. US annual cost of preventable chronic disease: $1.7T. If 0.5% reduction attributable to improved school nutrition across 5M students → $8.5B/year. (2) Stigma reduction: means-tested programs have ~60% participation of eligible students due to stigma. Universal programs reach nearly 100% — the actual incremental beneficiaries may be 8M, not 5M. (3) Teacher productivity: lower absenteeism reduces substitute teacher costs and disruption. Revised conclusion: When health externalities are included, the program is approximately break-even to slightly positive in present value terms. Recommendation: the economic case is marginal but not clearly negative. The policy recommendation depends on how one values equality of access and stigma-reduction independently of the economic analysis. A hybrid approach — universal in districts where >50% of students are low-income — would capture most benefits at lower incremental cost.",
      commonMistakes: "Comparing a lifetime earnings stock ($26.25B) directly to an annual cost flow ($16.1B) without annualizing or discounting. Ignoring the stigma/participation gap that means means-testing underserves its target population. Not including health externalities which are the largest economic benefit. Treating 35M newly covered students as all food-insecure when most are middle/upper income.",
      alternatives: "A community eligibility provision (CEP) approach — automatically universalizing in high-poverty schools without individual means-testing — costs significantly less than full universalization while capturing most of the benefit, since the highest-benefit students are concentrated in high-poverty schools."
    },
    rubric: [
      { id: "in-047-r1", text: "Correctly calculates the net incremental annual cost ($16.1B) including administrative savings" },
      { id: "in-047-r2", text: "Identifies the appropriate target population for benefit analysis (5M newly food-secure students, not all 35M)" },
      { id: "in-047-r3", text: "Converts lifetime earnings benefit to a present value that can be compared to annual costs" },
      { id: "in-047-r4", text: "Includes health externalities as a material factor that changes the cost-benefit conclusion" },
      { id: "in-047-r5", text: "Identifies the stigma/participation gap in means-tested programs as a hidden cost of the status quo" },
      { id: "in-047-r6", text: "Recommends a targeted universal approach (CEP or income-threshold universalization) as a middle path" }
    ]
  },

  {
    id: "in-048",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["physical-estimation", "orders-of-magnitude", "challenging-defaults", "economic-estimation"],
    difficulty: "hard",
    question: "A logistics startup claims it can profitably deliver groceries by autonomous drone in suburban areas at a price point of $3 per delivery. A skeptical investor says this is 'physically and economically impossible.' Using first principles and physical estimation, assess whether the $3 price point is achievable and under what conditions.",
    context: "Target delivery: a 5-mile radius suburban area, payload up to 5 lbs. Average drone speed: 45 mph. Drone acquisition cost (amortized over 5-year life, 20 flights/day): assume the drone costs $5,000. Energy cost: drone consumes 200 Wh per delivery cycle (round trip + 20% buffer). Commercial electricity: $0.12/kWh. Regulatory cost: FAA Remote ID compliance, $0.15/delivery (licensing amortized). Labor for hub operations: 1 operator per 10 drones at $25/hour. Hub lease in suburban area: $3,000/month. Each drone makes 20 deliveries/day, 350 days/year.",
    hints: [
      "Amortized drone cost per delivery: $5,000 / (5 years × 350 days × 20 flights) = $5,000 / 35,000 = $0.143/delivery. Energy cost: 200 Wh = 0.2 kWh × $0.12 = $0.024/delivery. Regulatory: $0.15/delivery. Subtotal: $0.317/delivery — surprisingly low.",
      "Labor: 1 operator per 10 drones. If a hub runs 50 drones, that's 5 operators at $25/hour for 10 hours/day = $1,250/day. Hub delivers 50 × 20 = 1,000 packages/day. Labor cost: $1,250 / 1,000 = $1.25/delivery. Hub lease: $3,000/month / (1,000 deliveries/day × 30 days) = $0.10/delivery.",
      "Total cost: $0.317 + $1.25 + $0.10 = $1.667/delivery. Under $2. The $3 price point is achievable — the investor is wrong. The key assumptions to stress-test: drone failure rate (not included), maintenance, insurance, and whether 20 flights/day is realistic in suburban density."
    ],
    referenceSolution: {
      approach: "Decompose the cost per delivery into capital costs (drone amortization), variable costs (energy, consumables), regulatory costs, and labor/overhead. Use physical estimation to derive energy consumption and flight time. Identify the key cost drivers and stress-test the model against realistic failure modes.",
      reasoning: "Cost per delivery breakdown: Drone amortization: $5,000 / (5 × 350 × 20) = $5,000 / 35,000 = $0.143. Energy: 0.2 kWh × $0.12 = $0.024. FAA/regulatory: $0.150. Labor (hub operations): 1 operator per 10 drones, $25/hr for 10-hour shift = $250/day per operator. Per drone: $250/10 = $25/drone/day. Per delivery: $25/20 = $1.25. Hub lease: $3,000/month. At 1,000 deliveries/day × 30 days = 30,000 deliveries/month: $0.10/delivery. Subtotal: $0.143 + $0.024 + $0.150 + $1.25 + $0.10 = $1.667/delivery. Items not yet included: Drone maintenance and repair: Industry estimates put maintenance at 15–20% of drone acquisition cost/year. $5,000 × 17% = $850/year per drone. Per delivery: $850 / (350 × 20) = $0.121. Insurance: Commercial drone insurance: ~$1,000/year per drone. Per delivery: $1,000 / 7,000 = $0.143. Software/fleet management: $0.05/delivery (amortized platform cost). Return logistics for packaging: $0.05/delivery. Revised total: $1.667 + $0.121 + $0.143 + $0.05 + $0.05 = $2.031/delivery. Stress-test key assumptions: If drone utilization falls to 12 deliveries/day (weather, demand gaps): amortization = $0.238, labor = $2.08, hub = $0.167 → total rises to ~$3.00/delivery. If drone cost is $8,000 (more realistic for commercial-grade): amortization = $0.229. If operator ratio is 1:5 instead of 1:10: labor doubles to $2.50 → total exceeds $4.00. Conclusion: The $3 price point is achievable under the stated assumptions. The investor's skepticism is warranted for stress-case scenarios (poor utilization, higher drone cost, stricter operator ratios) but not for the base case. The most sensitive variable is hub utilization — achieving 20 deliveries/drone/day requires sufficient suburban delivery density, which is the real go-to-market constraint, not the physical or economic model.",
      commonMistakes: "Treating the question as a binary 'possible/impossible' rather than identifying the conditions under which it is achievable. Forgetting maintenance and insurance costs (which add ~$0.26/delivery). Not stress-testing the utilization assumption, which is the most sensitive variable. Conflating the technology cost with the business model profitability (the $3 is a price, not just a cost).",
      alternatives: "A hub-and-spoke model where the drone delivers to a neighborhood pick-up box rather than door-to-door reduces labor (fewer precise landings, fewer failure points) and could lower costs further. However, it changes the value proposition from doorstep delivery to neighborhood pickup — a meaningful reduction in convenience."
    },
    rubric: [
      { id: "in-048-r1", text: "Correctly amortizes the drone acquisition cost per delivery using a 5-year life and 20 flights/day" },
      { id: "in-048-r2", text: "Calculates energy cost from physical specifications (200 Wh × $0.12/kWh)" },
      { id: "in-048-r3", text: "Includes maintenance and insurance as often-omitted cost components" },
      { id: "in-048-r4", text: "Arrives at a base-case cost below $3 and supports the achievability of the price point" },
      { id: "in-048-r5", text: "Identifies utilization (deliveries per drone per day) as the most sensitive assumption via stress-test" },
      { id: "in-048-r6", text: "Reframes the binding constraint as a go-to-market (demand density) problem, not a technology problem" }
    ]
  },

  {
    id: "in-049",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["mece-decomposition", "competitive-analysis", "hypothesis-trees", "business-model-evaluation"],
    difficulty: "hard",
    question: "A major streaming service (40M subscribers, $15/month) is considering entering the live sports rights market. They have $2B to deploy over 3 years. Their chief content officer says: 'Sports rights are overpriced and will destroy our unit economics.' The CFO says: 'Without sports, we can't reach 80M subscribers.' Both can't be right. Resolve the tension and recommend a sports strategy.",
    context: "Current financials: $600M monthly revenue ($7.2B/year), content spend $4.5B/year, gross margin 28%. Subscriber LTV = $540 (36-month average tenure × $15). CAC = $45. Subscriber growth rate: 8% per year. Churn: 2.8%/month. Without sports, projected to reach 62M subscribers in 3 years. Sports rights estimates: a mid-tier domestic sports league (soccer or basketball) costs $200–400M/year. Top-tier rights (NFL, NBA) cost $1.5–2.5B/year. Sports subscribers churn at 1.8%/month vs. non-sports 2.8%/month (based on Disney+ and Peacock data). Average sports subscriber pays $3/month premium above base plan.",
    hints: [
      "Resolve the tension first: both executives are partially correct. The CCO is right that top-tier rights (NFL/NBA) are priced above what a 40M subscriber base can economically support. The CFO is right that a sports catalyst is likely needed to reach 80M subscribers — but mid-tier sports may be the answer.",
      "Model the economics of mid-tier rights ($300M/year): revenue uplift from sports subscribers. If sports add 10M incremental subscribers at $18/month ($3 premium) and reduces their churn from 2.8% to 1.8% — what is the incremental LTV? Non-sports: LTV = $15 / 2.8% = $536. Sports: LTV = $18 / 1.8% = $1,000. Delta LTV per sports subscriber = $464.",
      "If mid-tier sports drives 8M incremental subscribers (realistic based on comparable streaming launches): incremental lifetime value = 8M × $464 = $3.7B. Cost of mid-tier rights: $300M/year × 3 years = $900M. Net value: $3.7B – $0.9B = $2.8B in incremental LTV — strongly positive. This validates mid-tier sports as a value-creating strategy."
    ],
    referenceSolution: {
      approach: "Resolve the apparent contradiction by segmenting sports rights into tiers and modeling economics independently for each tier. Use LTV/CAC framework to assess the subscriber economics impact of sports. Apply MECE decomposition to the subscriber growth model (sports vs. non-sports paths to 80M).",
      reasoning: "Diagnosing the tension: The CCO's claim ('overpriced') is correct for top-tier rights. At $2B/year for NFL rights, the company needs the rights to pay for themselves through incremental subscribers. Break-even: $2B/year ÷ incremental gross margin per subscriber. At 28% gross margin on $15/month: $4.20/month contribution. Incremental subscribers needed to break even on $2B: $2B / ($4.20 × 12 months) = 39.7M incremental subscribers per year — more than the company's entire current base. Top-tier rights are indeed uneconomic at this scale. The CFO's claim ('need sports for 80M') is assessed via the organic growth trajectory. At 8% annual growth from 40M: Year 1: 43.2M, Year 2: 46.7M, Year 3: 50.4M. The organic path reaches 50M, not 62M (implying the 8% is already modeled declining) and certainly not 80M without a catalyst. Mid-tier sports modeling: Rights cost: $300M/year. Incremental subscribers from sports launch: 10M (based on Disney+ ESPN+ integration adding ~12M subs). Sports subscriber profile: $18/month at 1.8% churn. Non-sports subscriber: $15/month at 2.8% churn. LTV comparison: Sports LTV = $18/0.018 = $1,000. Non-sports LTV = $15/0.028 = $536. Delta LTV = $464/subscriber. Revenue from sports-driven subscribers: 10M × $18 × 12 = $2.16B/year. Incremental content cost: $300M/year. Incremental gross profit: $2.16B × 28% = $605M – $300M = $305M/year contribution from the sports tier. Over 3 years, $915M contribution vs. $900M rights cost — approximately break-even on cash flow, but creates $464 × 10M = $4.64B in incremental LTV. Path to 80M: organic 50M + sports-driven 10M incremental = 60M by year 3. Still short of 80M. To reach 80M, additional levers needed: international expansion, price reduction, or top-tier rights on selected sports (not all NFL/NBA). Strategy recommendation: Acquire mid-tier sports rights ($250–350M/year, one domestic league). This is economically self-funding within 3 years and provides a 20–25% subscriber lift. It does not reach 80M alone — the CFO's 80M target requires mid-tier sports PLUS one of: (a) international expansion, (b) an ad-supported free tier, or (c) a strategic partnership/bundle. Both executives are partially right, and neither extreme (no sports, top-tier sports) is optimal. The middle path — mid-tier sports — resolves the tension.",
      commonMistakes: "Treating 'sports rights' as a monolithic category. Not modeling the churn reduction benefit of sports alongside the subscriber acquisition benefit. Comparing annual rights costs to annual revenue without building a full LTV model. Accepting one executive's framing over the other rather than finding the segmented answer.",
      alternatives: "A non-exclusive sub-licensing deal (acquiring rights to specific games rather than a whole league) could provide sports content at $50–100M/year with lower risk. This is a test-and-learn approach before committing full rights budgets. Trade-off: lower exclusivity reduces the differentiation benefit."
    },
    rubric: [
      { id: "in-049-r1", text: "Segments sports rights by tier (top-tier vs. mid-tier) and shows the economics differ fundamentally" },
      { id: "in-049-r2", text: "Calculates break-even incremental subscribers for top-tier rights and shows it exceeds the current subscriber base" },
      { id: "in-049-r3", text: "Correctly computes the LTV differential between sports and non-sports subscribers using churn rate" },
      { id: "in-049-r4", text: "Models the mid-tier sports cash flow and shows it is approximately self-funding within 3 years" },
      { id: "in-049-r5", text: "Resolves the tension between the two executives by identifying the mid-tier sports path as the resolution" },
      { id: "in-049-r6", text: "Identifies that mid-tier sports alone does not reach 80M and recommends additional levers" }
    ]
  },

  {
    id: "in-050",
    trackId: "integration",
    subSkill: "cross-domain-reasoning",
    secondarySkills: ["issue-trees", "supply-demand", "structured-argumentation", "market-sizing"],
    difficulty: "hard",
    question: "A developing country's ministry of finance is considering a sugar tax (tax on sugar-sweetened beverages) to reduce obesity rates and generate fiscal revenue. Opponents argue it is regressive, ineffective, and economically harmful. Construct a structured argument either for or against the policy, incorporating evidence from comparable implementations, economic modeling of behavioral response, and distributional analysis.",
    context: "Country profile: population 50M, median household income $8,000/year. Obesity rate: 32%. Healthcare cost of obesity-related diseases: $4.2B/year (government-funded). SSB consumption: average 1.2 liters/day per person. Proposed tax: $0.10/100ml (equivalent to ~$1.20/2-liter bottle). Estimated price elasticity of SSB demand: –0.9 (10% price increase → 9% consumption decrease). SSB market: 60M liters/day total, 80% sold by 5 domestic producers. Average SSB retail price: $0.80/liter. Tax revenue estimate: $0.10/100ml × 60M liters/day × 365 = $2.19B/year (before behavioral response). Bottom income quintile spends 6% of income on SSBs; top quintile spends 1% of income on SSBs.",
    hints: [
      "Revenue after behavioral response: price increase = $0.10/100ml = $1.00/liter. New price = $1.80/liter. Price increase as % of original = 125%. Demand reduction: –0.9 elasticity × 125% = 112.5% reduction — this would imply more than 100% demand reduction, which is impossible. The elasticity applies to small price changes. More carefully: % price increase = $1.00/$0.80 = 125%. At –0.9 elasticity: demand falls 0.9 × 125% = 112% — clearly a mathematical boundary issue. The elasticity estimate must be applied more carefully. Use: new demand = old demand × (1 + elasticity × % price change) = 60M × (1 + (–0.9 × 1.25)) = 60M × (1 – 1.125). This gives a negative demand, which reveals the price increase is too large for a linear elasticity model. Correct approach: recognize that at 125% price increase, demand likely falls by 60–70%, not 112%. Use arc elasticity or cap the demand reduction at 60%. Post-response volume: 60M × 40% = 24M liters/day. Tax revenue: 24M liters × $1.00 × 365 = $8.76B/year. Wait — this is higher than before because tax per liter is $1.00, not $0.10. Re-check: $0.10/100ml = $1.00/liter.",
      "Regressivity calculation: bottom quintile income = $8,000 × 20% = $1,600/person/year. SSB spending = 6% of income = $96/year. Tax paid = $96 × ($1.00/$0.80) × 0.40 (if demand falls 60%) — actually: original SSB spending = 6% × $1,600 = $96. New price is 2.25x higher but quantity falls 60% → new spending = $96 × 2.25 × 0.4 = $86.4. Tax component: tax per liter = $1.00/$1.80 = 55.6% of the new price. Tax paid = $86.4 × 55.6% = $48/year per bottom quintile person. As % of income: $48/$1,600 = 3.0% of income.",
      "Top quintile income = $8,000 × 5 (rough estimate for top quintile median = ~$20,000+). SSB spending = 1% = $200. New spending after price rise and demand drop: $200 × 2.25 × 0.4 = $180. Tax component = $180 × 55.6% = $100. As % of income: $100/$20,000 = 0.5%. Tax burden on bottom quintile: 3% of income. Top quintile: 0.5% of income. Regressivity ratio: 6:1. The tax is clearly regressive."
    ],
    referenceSolution: {
      approach: "Use a structured argumentation framework: present the strongest case for the policy, then assess the strongest objections (regressivity, effectiveness, economic harm), and resolve each with evidence. Use the SCQA format for communication clarity.",
      reasoning: "Argument FOR the sugar tax (with quantified rebuttals to objections): Revenue case: At $1.00/liter tax and 40% residual demand (after 60% behavioral response to a 125% price increase): Tax revenue = 60M × 40% × $1.00 × 365 = $8.76B/year. This exceeds the $4.2B annual obesity healthcare cost by 2x. Even if earmarked 50% for healthcare and 50% for general revenue, the tax can fund the entire obesity-related healthcare budget. Health effectiveness case: A 60% consumption reduction from the tax would reduce per capita SSB intake from 1.2 L/day to 0.48 L/day. Research on Mexico's SSB tax (2014, $0.10/liter) found 12% reduction at a much smaller price change; at a 125% price increase, a 60% reduction is plausible. If reducing SSB consumption 60% reduces obesity rate by 5pp over 10 years (conservative estimate from public health literature): 50M × 5% = 2.5M fewer obese individuals. Healthcare savings at $4.2B/32% obesity rate = $131/obese person/year. Savings = 2.5M × $131 = $328M/year — modest relative to tax revenue. Regressivity objection — assessed honestly: Bottom quintile tax burden: 3.0% of income. Top quintile: 0.5% of income. Regressivity ratio: 6:1. This is a legitimate concern. However: (a) If 100% of tax revenue is rebated as a flat per-capita dividend ($8.76B / 50M people = $175/person/year), the bottom quintile net position is positive: they pay $48 in tax but receive $175 dividend = net gain of $127. This is a standard 'feebate' or 'carbon dividend' model applied to SSBs. (b) The alternative (no tax, no revenue, continued high obesity costs) leaves the bottom quintile bearing the burden of obesity-related disease disproportionately. Effectiveness objection: Opponents argue consumers substitute to unsweetened beverages or sweetened foods, negating health effects. Mexico data shows modest but real effects. The 125% price increase in this case is much more aggressive than Mexico's, suggesting larger behavioral response. Economic harm objection: 80% of the market is captured by 5 domestic producers. A 60% demand reduction could cause significant job losses in the SSB sector. The affected sector generates approximately: 60M liters/day × $0.80 × 40% gross margin × 365 = $7B of gross profit → falls to $2.8B under the tax scenario. Estimated job impact: 30–50% of production workers (5,000–8,000 jobs) may be affected. This is a real cost but should be weighed against 2.5M fewer obese individuals and $8.76B in annual revenue. Recommendation: Implement the sugar tax with three design modifications: (1) Phase in over 3 years to allow producer adjustment. (2) Earmark 30% of revenue for a direct per-capita healthcare dividend to the bottom three income quintiles. (3) Exclude 100% fruit juice and dairy-based beverages to reduce substitution effects.",
      commonMistakes: "Applying linear elasticity to a 125% price increase without recognizing the mathematical boundary (elasticity × percentage change > 1 implies negative demand). Not running the distributional analysis quantitatively. Treating regressivity as a fatal objection without modeling the dividend-rebate mechanism. Conflating a tax that reduces consumption (desired) with a tax that is economically harmful (contested).",
      alternatives: "A targeted subsidy for healthy foods (vegetables, whole grains) rather than a tax on unhealthy foods has better political economy and less regressivity, but generates no revenue and has weaker behavioral evidence. The tax-and-rebate model is generally preferred by economists when revenue generation is also a goal."
    },
    rubric: [
      { id: "in-050-r1", text: "Correctly identifies the elasticity-application problem (125% price increase × 0.9 elasticity > 1) and applies a bounded demand response" },
      { id: "in-050-r2", text: "Calculates annual tax revenue after behavioral response and compares it to the $4.2B obesity healthcare cost" },
      { id: "in-050-r3", text: "Quantifies the regressivity burden (3% vs. 0.5% of income) rather than merely asserting the tax is regressive" },
      { id: "in-050-r4", text: "Models the dividend-rebate mechanism and shows the bottom quintile has a net positive position" },
      { id: "in-050-r5", text: "Addresses the economic harm objection with specific producer gross profit and employment impact estimates" },
      { id: "in-050-r6", text: "Recommends a specific implementation design (phase-in, earmarking, product exclusions) with rationale" }
    ]
  },

];
