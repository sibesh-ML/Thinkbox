import type { Problem } from '@/types';

export const assumptionBuildingProblemsB: Problem[] = [
  // ── IDENTIFYING UNKNOWNS (ab-026 to ab-030) ──────────────────────────────

  {
    id: "ab-026",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["unit-economics"],
    difficulty: "medium",
    question: "A SaaS company reports its customer acquisition cost (CAC) as $400 and claims profitability because its average revenue per user (ARPU) is $600/year. An analyst says this means each customer pays back in 8 months. What unknowns are buried in this payback period claim?",
    context: "The company has been operating for 2 years, has 800 customers, and spends $320,000/year on sales and marketing.",
    hints: [
      "The payback period formula is CAC ÷ (monthly revenue per customer). Work out whether the numbers given are actually consistent, then ask what factors would change the real payback period.",
      "CAC and ARPU are averages — consider what the distribution looks like. Also think about gross margin: does ARPU equal gross profit per user, or revenue?",
      "Key unknowns: (1) gross margin — if COGS is 40%, gross profit is $360/yr not $600, extending payback to ~13 months; (2) CAC blending — is $400 an average across all channels or just one? (3) Churn — if customers leave before month 8, payback is never achieved; (4) whether $400 CAC includes onboarding costs or just marketing spend; (5) whether ARPU is contractual or actual (usage-based)."
    ],
    referenceSolution: {
      approach: "Decompose payback period = CAC ÷ (monthly gross profit per customer). Question each variable and identify what is omitted from the simple calculation.",
      reasoning: "The claim uses revenue ($600/yr = $50/mo) as though it equals profit. Real payback = CAC ÷ (ARPU × gross margin). If gross margin is 60%, payback = $400 ÷ $30 = 13 months, not 8. Additional unknowns: (1) Customer lifetime — if average churn is 25%/year, median lifetime is ~3 years and many customers churn before payback. (2) CAC calculation — the company spends $320k/yr acquiring presumably new customers; if it acquired 200 new customers last year, CAC = $1,600, not $400. The $400 figure may be blending new and existing customers. (3) Expansion revenue — does the $600 ARPU grow over time (which helps) or is it fixed? (4) Servicing costs post-acquisition — customer success, support headcount may not be in the $400 CAC. Each unknown can materially shift profitability.",
      commonMistakes: "Accepting the payback calculation without checking gross margin. Failing to notice the CAC arithmetic inconsistency ($320k/yr implies much higher CAC if denominator is only new-year customers). Treating ARPU as equivalent to gross profit.",
      alternatives: "LTV/CAC ratio is another framing: LTV = ARPU × gross margin ÷ churn rate. With unknown churn, LTV is indeterminate. Framing the unknowns against LTV/CAC makes their impact explicit."
    },
    rubric: [
      { id: "ab-026-r1", text: "Identifies gross margin as missing from payback calculation" },
      { id: "ab-026-r2", text: "Notices the CAC arithmetic inconsistency ($320k spend vs. 800 customers)" },
      { id: "ab-026-r3", text: "Names churn as an unknown that affects whether payback is ever achieved" },
      { id: "ab-026-r4", text: "Distinguishes revenue from gross profit per customer" },
      { id: "ab-026-r5", text: "Identifies at least one additional unknown beyond gross margin and churn" }
    ]
  },

  {
    id: "ab-027",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["market-sizing"],
    difficulty: "medium",
    question: "A city government wants to build a new public library. The planning team estimates it needs to serve 'the local population of 120,000 residents.' Before sizing the building, what are the critical unknowns that determine how large and what type of facility is actually needed?",
    context: undefined,
    hints: [
      "Not all 120,000 residents will use a library equally. Think about who uses libraries, how often, for what purpose, and what competing options exist.",
      "Separate demand-side unknowns (who needs what) from supply-side unknowns (how space translates to capacity). Consider digital vs. physical library usage trends.",
      "Key unknowns: (1) active library usage rate — typically 20–40% of a population holds library cards; (2) peak simultaneous occupancy vs. annual visits — both drive different sizing decisions; (3) use-case mix — study space, children's programs, digital access, community events, book borrowing each require different floor plans; (4) demographic profile — age distribution shifts demand toward children's sections vs. quiet study areas; (5) existing library capacity and geographic distribution; (6) digital substitution trend — physical book borrowing is declining while digital and event-space use grows."
    ],
    referenceSolution: {
      approach: "Segment the 120,000 residents by usage behavior, then map usage types to space requirements. Identify which unknowns most affect total square footage versus layout.",
      reasoning: "Step 1 — Usage rate: If 30% are active users (36,000), and each visits 12× per year, total annual visits ≈ 432,000. Peak day visits (assuming 5% of annual on busiest Saturday) ≈ 21,600. If each visitor spends 1 hour and the library is open 10 hrs, peak concurrent occupancy ≈ 2,160. Step 2 — Use-case split: Industry benchmarks suggest 40% book browsing/borrowing, 30% study/computer use, 20% children's programming, 10% community events. Each function has different space/person ratios. Step 3 — Unknown demographic shifts: an aging population needs larger print and accessibility features; a young family neighborhood needs extensive children's space. Step 4 — Collection size: physical book collection drives stacks square footage; digital transition changes this dramatically. Step 5 — Site constraints: parking, adjacency to transit affects catchment and peak load timing. Without knowing these, the '120,000 population' figure alone can justify anything from a 5,000 sq ft branch to a 100,000 sq ft central library.",
      commonMistakes: "Treating 120,000 as the number of simultaneous users. Ignoring peak vs. average demand (a library must be sized for peak, not average). Overlooking the shift from physical books to digital and community-event use.",
      alternatives: "Benchmarking: the American Library Association recommends 0.4–0.6 sq ft per capita for library space, giving 48,000–72,000 sq ft — but this is an average that conceals all the unknowns above and is useful only as a sanity check."
    },
    rubric: [
      { id: "ab-027-r1", text: "Distinguishes total population from active user population" },
      { id: "ab-027-r2", text: "Identifies peak concurrent occupancy as the key sizing driver" },
      { id: "ab-027-r3", text: "Names at least 3 distinct use cases that require different space types" },
      { id: "ab-027-r4", text: "Mentions demographic profile as an unknown affecting space mix" },
      { id: "ab-027-r5", text: "Notes digital vs. physical usage trend as a structural unknown" }
    ]
  },

  {
    id: "ab-028",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["first-principles-analysis"],
    difficulty: "hard",
    question: "A pharmaceutical company's internal model projects that a new drug will achieve 35% market share within 5 years of launch, generating $2.1B in annual revenue. The model's single-page summary shows: total addressable market = $6B, share = 35%, price = $15,000/patient/year, patients treated = 140,000. Identify every significant unknown hidden in this projection and explain why each matters.",
    context: "The drug treats a chronic autoimmune disease. There are currently 2 approved competitors. The drug showed 60% efficacy vs. 45% for the leading competitor in a Phase 3 trial. Launch is 18 months away.",
    hints: [
      "Work through the revenue formula backwards: revenue = patients × price. What determines how many patients actually start and stay on this drug? What determines whether the price holds?",
      "The TAM of $6B implies a specific patient population and treatment rate. Question both. Also: a 35% share in a 3-player market sounds logical but what does the share trajectory look like and what drives physician switching?",
      "Key unknowns cluster into 4 areas: (A) Market size — is the $6B based on diagnosed+treated patients only? What is the diagnosis rate, treatment rate, and how might they change? (B) Pricing — will payers reimburse at $15k, or will formulary restrictions cap access? (C) Competitive dynamics — will competitors reprice, launch new formulations, or sign exclusive formulary deals before launch? (D) Clinical translation — 60% efficacy in trial vs. 45% competitor does not automatically translate to share; physician inertia, side-effect profiles, and real-world outcomes matter."
    ],
    referenceSolution: {
      approach: "Decompose the projection into its value drivers, then for each driver identify: what the model assumes, what the actual unknown is, and what the range of outcomes looks like.",
      reasoning: "Revenue = patients × price × adherence × net price after rebates. Breaking down each: (A) Patient count unknowns: Total autoimmune disease prevalence vs. diagnosed rate (often 50–70% for autoimmune conditions) vs. treatment-eligible rate (patients who have failed first-line therapies) vs. actually-treated rate (patient access, physician awareness). If 35% share means 140,000 patients, that implies a treated market of 400,000 — model should state this and the diagnosis/treatment funnel assumptions explicitly. (B) Price unknowns: Gross price ($15k) vs. net price after mandatory PBM rebates (often 20–40% in autoimmune), Medicaid best-price rules, and copay assistance programs. Net price could be $9k–$12k. (C) Share trajectory unknowns: 35% by year 5 requires a specific ramp — is year 1 share 5%? 15%? The NPV impact of a slow vs. fast ramp is enormous. Physician adoption follows an S-curve; key unknown is where the inflection point is. (D) Competitive response unknowns: Will competitor 1 drop price to defend share? Will they achieve formulary exclusivity by offering deeper rebates? Is competitor 3 (a biosimilar? a new MOA?) entering before year 5? (E) Trial-to-real-world translation: 60% vs. 45% efficacy was in a selected trial population. Real-world patients are older, have comorbidities, and adhere less — the real-world efficacy gap may be smaller. (F) Adherence/persistence unknowns: Chronic disease drugs have 30–50% 1-year discontinuation rates. Does the 140,000 patients figure represent prevalent users (stock) or incident starts (flow)? These are very different numbers. Any single one of these unknowns can move the revenue figure by 20–40%.",
      commonMistakes: "Focusing only on market share and ignoring net price erosion. Treating trial efficacy improvement as directly proportional to market share gain — physicians are slow to switch stable patients. Ignoring the distinction between gross and net price in pharmaceutical markets. Treating 'market share' as a static outcome rather than a trajectory with NPV implications.",
      alternatives: "A scenario tree: branch on (1) formulary access: broad vs. restricted, (2) competitive response: passive vs. aggressive repricing, (3) real-world efficacy gap: maintains vs. narrows. Even 2 branches per variable gives 8 scenarios, and the revenue range across scenarios likely spans $0.8B–$3.5B, making the single-point $2.1B projection misleading as a decision input."
    },
    rubric: [
      { id: "ab-028-r1", text: "Distinguishes gross price from net price after rebates" },
      { id: "ab-028-r2", text: "Identifies the patient funnel (prevalence → diagnosed → treated → on-drug) as a source of unknowns" },
      { id: "ab-028-r3", text: "Questions the share trajectory (ramp speed), not just the end-state 35%" },
      { id: "ab-028-r4", text: "Notes competitive response as an unknown that can undermine the projection" },
      { id: "ab-028-r5", text: "Distinguishes trial efficacy from real-world effectiveness" },
      { id: "ab-028-r6", text: "Identifies adherence/persistence as a driver of the effective patient count" }
    ]
  },

  {
    id: "ab-029",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["case-analysis"],
    difficulty: "hard",
    question: "A private equity firm is considering acquiring a chain of 50 petrol stations. Their investment thesis rests on three assumptions: (1) fuel margins will hold at 4¢/litre over the 5-year hold period, (2) convenience store revenue per station will grow 3% annually, and (3) they can reduce operating costs by 15% through centralized procurement. For each assumption, identify the critical unknowns that determine whether it will hold.",
    context: undefined,
    hints: [
      "For fuel margins, think about who sets the margin and what forces compress or expand it. For convenience store growth, think about what drives footfall and basket size. For cost reduction, think about what 'centralizing procurement' actually requires and what can go wrong.",
      "Fuel margin is a spread between wholesale and retail price — both sides can move. Convenience store growth depends on whether the 3% is real or nominal, and what macro trends (EV adoption, online grocery) might disrupt it. Cost savings require integration work with its own unknowns.",
      "Assumption 1 unknowns: oil price volatility (wholesale input), competitor pricing behavior (retail ceiling), regulatory changes (fuel duty), EV adoption reducing volume (even if margin/litre holds, absolute profit falls if litres sold decline). Assumption 2 unknowns: is 3% real or nominal growth? Inflation-adjusted, this could be flat. What is the current convenience store mix — tobacco (declining), food-to-go (growing), lottery? Online grocery delivery trends affecting top-up shopping. Assumption 3 unknowns: what % of costs are actually addressable by procurement (labor is usually 40–50% and not reducible by centralization); supplier concentration (if few suppliers, limited negotiating leverage); integration timeline (savings in year 1 or year 3?)."
    ],
    referenceSolution: {
      approach: "For each of the three assumptions, identify: (a) the mechanism by which it holds, (b) the key variable that could break it, and (c) the direction and magnitude of risk.",
      reasoning: "Assumption 1 — Fuel margin at 4¢/litre: The mechanism is that wholesale-to-retail spread stays constant. Unknowns: (i) Volume — if EV penetration grows from 5% to 20% of new car sales by hold exit, fuel demand may fall 3–5% per year, reducing absolute margin dollars even if per-litre margin holds. (ii) Competitive intensity — a hypermarket or supermarket with petrol stations nearby can absorb thin fuel margins to drive footfall, undercutting the 4¢ assumption. (iii) Regulatory risk — carbon pricing or fuel duty increases can compress retail margins if stations cannot pass through costs immediately. (iv) Crude oil volatility — sudden spikes followed by retail price stickiness can invert the margin temporarily. Assumption 2 — Convenience store 3% growth: (i) Inflation adjustment: if inflation is 3%, real growth is 0%. (ii) Category mix: tobacco accounts for ~20% of convenience store revenue in many markets and is secularly declining 5–7%/year. If tobacco mix is high here, offsetting growth in food-to-go must be strong. (iii) Footfall linkage to fuel: EV drivers do not stop for fuel; petrol stations will lose the incidental convenience shopper over time. (iv) Competition: convenience stores compete with supermarket click-and-collect, food delivery apps, and 24-hour grocery chains. Assumption 3 — 15% cost reduction via centralized procurement: (i) Cost base composition: if 45% of costs are labor and 20% are rent (both not reducible by procurement), addressable costs are ~35% of total. A 15% total reduction requires reducing addressable costs by 43% — very aggressive. (ii) Supplier concentration: if each station currently has bespoke local supplier relationships with better terms than centralized contracts can achieve, centralization could increase costs. (iii) Integration risk: procurement centralization requires IT systems, renegotiation timelines, and management bandwidth — savings may arrive in year 3, not year 1, materially affecting IRR. (iv) Labor renegotiation: if 15% includes headcount reduction, labor law or union agreements may block it.",
      commonMistakes: "Treating all three assumptions as independent when EV adoption simultaneously weakens both fuel margin (volume) and convenience store footfall. Accepting 3% growth without asking whether it is real or nominal. Underestimating the proportion of costs that are not addressable by procurement.",
      alternatives: "A sensitivity table: model the base case and then stress each assumption by its likely downside (fuel margin drops to 2¢, convenience store growth is 0%, cost savings are 8% not 15%). The combined downside scenario likely turns the investment thesis negative, revealing which assumption is the most critical to validate in due diligence."
    },
    rubric: [
      { id: "ab-029-r1", text: "Identifies EV adoption as a volume risk to fuel margin assumption even if per-litre margin holds" },
      { id: "ab-029-r2", text: "Questions whether 3% convenience store growth is real or nominal" },
      { id: "ab-029-r3", text: "Identifies that labor costs are not reducible by procurement centralization" },
      { id: "ab-029-r4", text: "Notes tobacco category decline as a headwind to convenience store growth" },
      { id: "ab-029-r5", text: "Identifies integration timeline risk as affecting IRR (savings arriving late)" },
      { id: "ab-029-r6", text: "Notes that EV adoption affects both assumption 1 and assumption 2 simultaneously" }
    ]
  },

  {
    id: "ab-030",
    trackId: "assumption-building",
    subSkill: "identifying-unknowns",
    secondarySkills: ["cross-domain-reasoning"],
    difficulty: "hard",
    question: "A national government is modeling the economic impact of a universal basic income (UBI) pilot of $1,000/month for all adult citizens of a mid-sized city (population 200,000). The model assumes: GDP impact = total UBI payments × 1.5 fiscal multiplier. List the critical unknowns this model ignores, explain the mechanism by which each matters, and assess which unknowns are most likely to make the model systematically wrong.",
    context: "The UBI is to be funded by a temporary federal grant. The pilot runs for 2 years. The city has 30% below the poverty line and significant unemployment.",
    hints: [
      "The model uses a single fiscal multiplier applied to gross payments. Think about what determines the actual multiplier — it varies dramatically based on how recipients spend money and how the program is funded. Also, this model counts UBI payments as new GDP, but is that right?",
      "Key issues: (1) The multiplier of 1.5 is borrowed from infrastructure spending research — does it apply to cash transfers? (2) What happens to labor supply — do some workers reduce hours, reducing GDP? (3) Does the federal funding source affect the local multiplier? (4) Is this a stock or flow effect — does GDP stay elevated after the pilot ends?",
      "The most systematic error: applying a construction/infrastructure multiplier to cash transfers. Cash transfer multipliers depend heavily on marginal propensity to consume (MPC) of recipients and whether money leaks out of the local economy. If recipients spend 30% on online retailers (Amazon) and 20% on national chains, local economic multiplier is much lower than 1.5. Also the model ignores behavioral responses: some recipients may reduce work hours, reducing the tax base and partially offsetting UBI payments."
    ],
    referenceSolution: {
      approach: "Audit the model formula for hidden assumptions, identify each structural unknown, then rank by magnitude of potential bias.",
      reasoning: "The formula GDP_impact = payments × 1.5 contains several deep unknowns: (1) Source of the multiplier: The 1.5 figure is typically derived from infrastructure or government purchases multipliers. Cash transfer multipliers in the literature range from 0.5 to 1.8 depending on the economy's state, with most estimates for direct transfers to low-income populations around 1.5–2.0 in recessions but lower in near-full-employment settings. Unknown: what is the city's current output gap? (2) Local vs. national spending leakage: The fiscal multiplier assumes spending recirculates locally. If 40% of UBI spending goes to non-local retailers (online, national chains, imports), the local multiplier could be 0.9–1.1. The city's economic structure (what is produced and sold locally) is a critical unknown. (3) Labor supply response: UBI may reduce labor force participation at the margin. If 5% of recipients reduce work hours by 20%, this reduces earned income by roughly 1% of the labor pool, partially offsetting UBI gains. This effect is unknown and contested in the literature. (4) Price effects: If housing supply is inelastic, a demand shock from $1,000/month × adult population could push up rents, reducing real purchasing power. The 200,000 population city likely has ~140,000 adults; at $1,000/month = $1.68B/year in additional demand. If 30% goes to rent in an inelastic housing market, local rents may rise 10–15%, clawing back gains from non-homeowners. (5) Behavioral and psychological effects: The model treats UBI as a simple demand injection. But if recipients invest in education, mental health improves and productivity rises — a positive effect the model misses. If recipients reduce precautionary saving, that also affects the multiplier. (6) Funding source counterfactual: Federal grants do not reduce local taxes, so this is a true demand injection. However, if the model is meant to inform a permanent UBI funded by local taxes, the multiplier could be near-zero (taxes reduce spending elsewhere in the same economy). The temporary federal funding is a critical — and favorable — assumption that must be stated. Most systematic bias: The model likely overstates GDP impact because (a) local spending leakage is unaccounted for, and (b) labor supply responses are ignored. The housing price effect could further reduce real welfare gains even if nominal GDP rises.",
      commonMistakes: "Assuming the multiplier applies to the full payment amount without asking what fraction re-circulates locally. Confusing nominal GDP increase with real welfare improvement (price effects matter). Treating the labor supply response as zero by default. Not questioning whether a 2-year pilot can produce lasting GDP effects vs. temporary demand boosts.",
      alternatives: "A more rigorous model would: (1) estimate local spending share (say 65%) to get locally-circulating payments; (2) apply a locally-appropriate multiplier (say 1.2 for this city); (3) subtract estimated labor supply reduction; (4) add housing price offset. This would likely yield a GDP impact of 0.7–0.9× payments rather than 1.5×."
    },
    rubric: [
      { id: "ab-030-r1", text: "Questions whether the 1.5 multiplier is appropriate for cash transfers vs. infrastructure spending" },
      { id: "ab-030-r2", text: "Identifies local spending leakage (non-local retailers) as reducing the effective local multiplier" },
      { id: "ab-030-r3", text: "Notes labor supply response as an unknown that could partially offset UBI gains" },
      { id: "ab-030-r4", text: "Identifies housing price inflation as a real-vs-nominal GDP distortion" },
      { id: "ab-030-r5", text: "Notes that the federal funding source is a critical assumption that changes if UBI is locally funded" },
      { id: "ab-030-r6", text: "Assesses which unknowns create systematic (directional) bias vs. random uncertainty" }
    ]
  },

  // ── SENSIBLE DEFAULTS (ab-031 to ab-035) ─────────────────────────────────

  {
    id: "ab-031",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["fermi-problems"],
    difficulty: "medium",
    question: "You are estimating the annual cost of running a small urban coffee shop with no data available. Walk through the key cost categories, state a sensible default assumption for each, and briefly justify why each default is reasonable.",
    context: "The coffee shop seats 20 people, is in a mid-tier city, and is open 7 days a week, 7am–7pm.",
    hints: [
      "Break costs into the major categories: rent, labor, cost of goods sold (COGS), utilities, and other. For each, anchor to something you know — per-square-foot rent rates, minimum wage, typical food-service gross margins.",
      "A coffee shop's biggest costs are typically labor (~35%), rent (~15%), and COGS (~30%). Use these industry benchmarks as starting defaults and work backwards from plausible revenue.",
      "Defaults: Rent ~$3,500/month for 600 sq ft in a mid-tier city ($70/sq ft/yr). Labor: 2 baristas + 1 manager = ~$8,000/month total. COGS: 30% of revenue. Revenue: 100 customers/day × $5 average ticket = $500/day = $180k/year. This gives COGS ~$54k, rent ~$42k, labor ~$96k, utilities ~$6k, other ~$12k. Total ~$210k costs vs ~$180k revenue — tight, which is consistent with the thin-margin reality of coffee shops."
    ],
    referenceSolution: {
      approach: "Enumerate cost categories, assign a default value for each using real-world anchors, then sanity-check the total against known industry benchmarks.",
      reasoning: "Step 1 — Revenue baseline: 20-seat shop, 7am–7pm (12 hrs), mid-tier city. Assume each seat turns over 2× during peak hours (2 hrs morning, 2 hrs lunch) and 0.5× otherwise. Rough estimate: 80–120 customers/day. Use 100 as default. Average ticket: $4.50 (coffee) × mix = ~$5 including occasional food. Revenue = 100 × $5 × 365 = $182,500/yr. Step 2 — Cost defaults: (a) Rent: 600 sq ft (20 seats at 30 sq ft/seat) × $70/sq ft/yr = $42,000/yr. Justification: $70/sq ft is mid-market for retail in a non-gateway city. (b) Labor: 2 baristas (full-time equivalent) at $14/hr × 2,000 hrs + 1 part-time manager equivalent × 1,000 hrs × $20/hr = $56,000 + $20,000 = $76,000/yr. Add 20% for payroll taxes/benefits = $91,000. Justification: labor-heavy business, 2–3 staff for 12-hr operation is minimum. (c) COGS: 30% of revenue = $54,750. Justification: coffee gross margin is typically 65–70%; 30% COGS is standard industry default. (d) Utilities: $500/month = $6,000/yr. Justification: commercial espresso machines are energy-intensive; $500 is a reasonable lower-bound for a small space. (e) Other (POS, insurance, supplies, marketing, card fees): $1,000/month = $12,000/yr. Total costs: $42k + $91k + $55k + $6k + $12k = $206,000/yr against $182,500 revenue. EBITDA = –$23,500 (loss). This is realistic — most independent coffee shops operate near breakeven or loss; the default assumptions are consistent with industry data.",
      commonMistakes: "Assuming revenue without grounding it in footfall and ticket size. Using residential rent rates instead of commercial. Forgetting payroll taxes and benefits on top of base wages. Not doing a sanity-check against the implicit profit margin.",
      alternatives: "Top-down default: industry data suggests coffee shop revenue averages $200k–$400k/yr for independents, with a 5–15% net margin. Working from a $250k revenue mid-point with 10% margin gives $25k profit and $225k costs — consistent with the bottom-up estimate."
    },
    rubric: [
      { id: "ab-031-r1", text: "Identifies all four major cost categories: rent, labor, COGS, utilities/other" },
      { id: "ab-031-r2", text: "Anchors rent to a per-square-foot or per-month default with justification" },
      { id: "ab-031-r3", text: "Sets COGS as a percentage of revenue (not a fixed number), consistent with industry norms" },
      { id: "ab-031-r4", text: "Includes payroll taxes/benefits on top of base wages" },
      { id: "ab-031-r5", text: "Performs a sanity check against overall profitability or industry benchmarks" }
    ]
  },

  {
    id: "ab-032",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: [],
    difficulty: "medium",
    question: "A software engineering team is estimating a project with no prior experience in the domain. They have a list of 12 features, each rated S/M/L/XL by a tech lead. They need to give management a delivery timeline. What sensible defaults should the team set for translating story sizes to time, and how should they account for unknowns in their estimate?",
    context: "Team size: 4 developers, 1 QA engineer. No existing codebase — greenfield project. Target stack is familiar to the team.",
    hints: [
      "Story point estimation needs anchoring to real time. Start with a default 'points per sprint' and 'hours per point' approach, then adjust for greenfield overhead, integration testing, and uncertainty buffer.",
      "A common default for experienced teams is 1 story point = 0.5–1 day of development. On a greenfield project, add 20–30% overhead for setup, architecture decisions, and integration work not captured in feature estimates.",
      "Sensible defaults: S = 1 day, M = 3 days, L = 6 days, XL = 10 days (developer effort). A 4-developer team has ~80 dev-days per 2-week sprint (accounting for meetings, reviews, etc., use 70% utilization = 56 actual dev-days/sprint). Add 25% contingency for greenfield unknowns. Then estimate total dev-days from the feature mix and divide by 56 days/sprint."
    ],
    referenceSolution: {
      approach: "Establish size-to-duration defaults, apply utilization and overhead adjustments, sum the estimate, and add an explicit uncertainty buffer.",
      reasoning: "Step 1 — Size defaults: S = 1 dev-day, M = 3 dev-days, L = 6 dev-days, XL = 12 dev-days. These are grounded in typical agile team experience; a Medium story (3 days) can be designed, coded, and reviewed within a sprint with some buffer. Step 2 — Utilization: 4 developers × 10 days/sprint = 40 raw dev-days. Deduct: daily standup (0.25 hrs × 10 days × 4 people = 10 hrs = 1.25 dev-days), sprint ceremonies (planning, retro, review ≈ 1 day/sprint/person × 4 = 4 dev-days), code reviews (≈ 15% of time = 6 dev-days). Effective capacity ≈ 40 – 1.25 – 4 – 6 = 28.75 dev-days per sprint. Round to 28 dev-days. Step 3 — QA time: QA typically needs 30% of dev time for testing. 28 × 0.3 = 8.4 QA days per sprint. With 1 QA engineer (10 days/sprint, 80% utilization = 8 days), this is roughly balanced. Step 4 — Greenfield overhead: Add 25% to feature estimates for architecture spikes, integration setup, CI/CD pipeline, and decisions made in the moment. Step 5 — Estimate from feature mix: If the 12 features are 3S + 4M + 3L + 2XL, total dev-days = 3×1 + 4×3 + 3×6 + 2×12 = 3+12+18+24 = 57 dev-days × 1.25 (greenfield) = 71 dev-days. Sprints = 71 ÷ 28 = 2.5 sprints. Add 1 sprint buffer for QA cycles, bug fixes, and final integration = ~3.5 sprints = 7 weeks. Report as: '7–9 weeks with medium confidence; confidence would improve after the first sprint of actual velocity data.'",
      commonMistakes: "Using raw developer-days without accounting for meetings, reviews, and ceremonies. Not adding a greenfield overhead factor. Not accounting for QA time in the timeline. Giving a single-point estimate without a range or confidence level.",
      alternatives: "Three-point estimation (optimistic, most likely, pessimistic) for each feature. PERT formula: expected = (O + 4ML + P) / 6. This makes uncertainty explicit and produces a weighted estimate that is more reliable than summing point estimates."
    },
    rubric: [
      { id: "ab-032-r1", text: "Sets explicit size-to-duration defaults (S/M/L/XL mapped to days)" },
      { id: "ab-032-r2", text: "Applies a utilization rate to developer capacity (accounting for meetings and ceremonies)" },
      { id: "ab-032-r3", text: "Adds a greenfield or uncertainty overhead factor" },
      { id: "ab-032-r4", text: "Accounts for QA time separately from development time" },
      { id: "ab-032-r5", text: "Provides the estimate as a range with explicit confidence level, not a single number" }
    ]
  },

  {
    id: "ab-033",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["supply-demand"],
    difficulty: "hard",
    question: "You are advising a government on whether to build a new 4-lane highway connecting two cities 150 km apart. No traffic study has been done yet. Set sensible default assumptions for each key input in a 30-year cost-benefit analysis, and explain which defaults are most likely to introduce systematic bias.",
    context: "The two cities have populations of 800,000 and 400,000 respectively. The current route is a 2-lane road with high congestion. The highway will cost an estimated $1.2B to build and $15M/year to maintain.",
    hints: [
      "A highway CBA requires: traffic volume (vehicles/day), value of time saved per vehicle, reduction in accidents, induced demand, and discount rate. For each, think about what the standard government default is and where that default tends to be optimistic.",
      "Induced demand is the most commonly ignored factor: new highway capacity generates new trips that partially fill the new lanes, meaning travel time savings erode over time. Most government models underestimate this effect.",
      "Key defaults: traffic volume = 15,000–25,000 vehicles/day (based on population served); time saving = 30 min at $15/hr value of time = $7.50/vehicle; discount rate = 3.5–5%; induced demand factor = 30–50% of new capacity fills with new trips within 10 years. The systematic biases: (1) induced demand is typically set to zero or very low; (2) construction cost overruns average 44% for road projects globally; (3) traffic growth projections often don't model modal shift to alternatives."
    ],
    referenceSolution: {
      approach: "Set defaults for each CBA input using established benchmarks, flag the directional bias of each default, and identify which defaults have the highest expected error.",
      reasoning: "Input 1 — Traffic volume: Between two cities of 800k and 400k, a reasonable default is 15,000–20,000 vehicles/day on opening year. Justify: cities of this size in comparable countries support this range; 20,000 is mid-range for an inter-urban connection. Growth rate default: 1.5–2% per year (matching GDP per capita growth). Input 2 — Value of time: Government standard is typically 50–70% of average hourly wage for personal travel, 100% for freight. Default: $12/hr personal, $20/hr commercial. Time saving per trip: 150 km at 110 km/h vs. 150 km at 70 km/h (congested) = 81 min vs. 128 min = 47 min saving. Default: 40 min (round down for mixed traffic). Value per vehicle trip: $12 × 40/60 = $8. Input 3 — Induced demand: The fundamental law of road congestion (Downs–Thomson paradox) suggests 50–100% of new lane-miles will be filled by induced demand within 5–10 years. Standard government default: 0–20%. This is the most systematically biased assumption — governments almost universally underestimate induced demand, leading to overstated long-term time savings. Default set here: 40% induced demand (conservative but realistic). Input 4 — Accident reduction: Standard default = 25–35% reduction in fatalities and serious injuries on upgraded roads. Assign $3M per statistical life. If current road has 5 deaths/year, saving 1.5 lives/year = $4.5M/yr benefit. Input 5 — Discount rate: Government standard 3–5%. Use 3.5% (consistent with long-run risk-free rate). Lower discount rates favor long-payback projects like infrastructure. Input 6 — Construction cost: Budget is $1.2B. Apply a reference class forecast: globally, road infrastructure projects average 44% cost overrun (Flyvbjerg et al.). Adjusted expected cost: $1.2B × 1.44 = $1.73B. This default is almost always ignored by governments, creating systematic optimism bias. Systematic bias assessment: (A) Induced demand underestimation — directionally overstates long-term time savings by 20–40%; (B) Construction cost optimism — understates capital cost by ~40% on average; (C) Discount rate sensitivity — at 3.5%, a 30-year project favors infrastructure; at 7%, many road projects become NPV-negative. The combination of (A) and (B) means most government road CBAs are optimistic by 40–80% on net benefits.",
      commonMistakes: "Setting traffic growth too high (2–3% compounds to implausible volumes over 30 years). Ignoring induced demand entirely. Not applying a cost overrun adjustment. Using a single discount rate without sensitivity testing.",
      alternatives: "Reference class forecasting (Flyvbjerg): instead of building up from scratch, start with the distribution of outcomes for similar projects and adjust. For road projects, median NPV is positive but mean NPV is often negative due to cost overruns and demand shortfalls — the mean reflects what will actually happen if you build many such roads."
    },
    rubric: [
      { id: "ab-033-r1", text: "Sets explicit defaults for traffic volume, value of time, and discount rate with justifications" },
      { id: "ab-033-r2", text: "Includes induced demand as a default (not zero) and explains the mechanism" },
      { id: "ab-033-r3", text: "Applies a construction cost overrun adjustment using reference class data" },
      { id: "ab-033-r4", text: "Identifies which defaults create systematic optimism bias vs. conservative bias" },
      { id: "ab-033-r5", text: "Notes that induced demand erosion of time savings is typically the most undercounted factor" }
    ]
  },

  {
    id: "ab-034",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["estimation-chains"],
    difficulty: "hard",
    question: "A startup is launching a B2B software product and needs to model its first 3-year revenue trajectory to present to investors. The founder has no comparable company data. Walk through the sensible defaults for each stage of the go-to-market funnel and explain how to construct a defensible (but honest) model from first principles.",
    context: "The product targets mid-size companies (100–500 employees) in the manufacturing sector. ACV (annual contract value) is $24,000. The team has 2 salespeople and 1 marketer.",
    hints: [
      "A B2B SaaS funnel goes: market → ICP-qualified leads → SQL → demo → proposal → closed-won → renewals. Set a default conversion rate at each stage based on industry benchmarks, then model how a 3-person GTM team can work these numbers.",
      "Key benchmarks: MQL-to-SQL conversion ~20–30%, SQL-to-demo ~50–60%, demo-to-close ~20–25% for enterprise. Outbound-generated leads close at lower rates (~15%). A B2B SaaS rep can manage 40–60 active opportunities; 2 reps working outbound can generate ~5–8 new SQLs per week each.",
      "Bottom up: 2 reps × 6 SQLs/week = 12 SQLs/week = ~600 SQLs/year. At 50% demo rate = 300 demos. At 20% close rate = 60 new customers/year in year 1. At $24k ACV = $1.44M ARR by end of year 1 (but recognized ratably). Year 2 adds 60 more plus ~80% renewal of year 1 = 48 + 60 = 108 customers. This gives ~$2.6M ARR by end of year 2. The key uncertainty to flag: ramp time — new reps typically take 6 months to reach full productivity."
    ],
    referenceSolution: {
      approach: "Build a funnel model from activity rates upward, apply industry-standard conversion defaults at each stage, account for ramp time and churn, and explicitly flag where the defaults are weakest.",
      reasoning: "Step 1 — Sales capacity defaults: A fully ramped B2B SaaS rep in an SMB/mid-market segment can close 3–6 new accounts per month (industry default: 4). Ramp time: 3–6 months; use 4 months as default. In year 1, each rep contributes ~8 full months of production: 2 reps × 8 months × 4 accounts/month = 64 new customers in year 1. Step 2 — Revenue recognition: ACV $24k ÷ 12 = $2,000/month MRR per customer. Average customer acquired in month M generates (13-M)/12 × $24k revenue in year 1. Simple default: average customer acquired in month 7 (mid-year), contributing 6 months of revenue = $12,000. Total year 1 revenue: 64 × $12,000 = $768,000. ARR at end of year 1: 64 × $24,000 = $1,536,000. Step 3 — Churn default: B2B SaaS mid-market churn default = 8–12%/year. Use 10%. Step 4 — Year 2 build: Start with 64 customers, lose 6 (10% churn), add 64 × 1.2 (rep productivity improves after year 1 ramp) × 12 months ≈ 76 new customers. End of year 2: 64 – 6 + 76 = 134 customers. ARR: $3.2M. Step 5 — Year 3: Team likely adds 1–2 more reps by now (model conservatively: 1 additional rep, 12-month ramp). 134 – 13 + 96 = 217 customers. ARR: $5.2M. Step 6 — Flag weak defaults: (a) Rep productivity of 4 accounts/month assumes a well-defined ICP and a working playbook — neither exists in year 1. A 50% haircut (2 accounts/month in year 1) is more conservative. (b) Churn of 10% is an industry average; year 1–2 churn for unproven products is often 20–25%. (c) 6 SQLs/week per rep assumes outbound sequences are running from day 1 — in reality, the first 2–3 months are spent building messaging and sequences. Honest model: present base case, downside case (rep productivity halved, 20% churn), and describe what would need to be true for upside case to materialize.",
      commonMistakes: "Not accounting for rep ramp time (modeling full productivity from month 1). Calculating ARR as if all customers were acquired on January 1. Using optimistic churn rates for an early-stage product. Not flagging which defaults are least defensible.",
      alternatives: "Top-down sanity check: if the total ICP market is 10,000 companies, and year 3 ARR implies 217 customers, that is 2.2% market penetration — plausible for a 3-year-old startup. If the ICP is only 500 companies, 217 customers in year 3 is 43% penetration — implausible and a signal that either the ICP is too narrow or the funnel math is wrong."
    },
    rubric: [
      { id: "ab-034-r1", text: "Accounts for rep ramp time in year 1 revenue calculation" },
      { id: "ab-034-r2", text: "Recognizes revenue ratably (not as full ACV on day of close)" },
      { id: "ab-034-r3", text: "Sets an explicit churn default and applies it to build ARR trajectory" },
      { id: "ab-034-r4", text: "Uses industry benchmark conversion rates or rep productivity figures with justification" },
      { id: "ab-034-r5", text: "Explicitly flags which defaults are weakest and what would make them wrong" },
      { id: "ab-034-r6", text: "Performs a market penetration sanity check against total ICP size" }
    ]
  },

  {
    id: "ab-035",
    trackId: "assumption-building",
    subSkill: "sensible-defaults",
    secondarySkills: ["rebuilding-mental-models"],
    difficulty: "hard",
    question: "A policy analyst needs to estimate the 10-year fiscal impact of raising the minimum wage from $10 to $15/hour nationally with no prior econometric models available. What sensible defaults should she set for the key economic parameters, and how should she handle the parameters where economists genuinely disagree?",
    context: "The national workforce is 160 million workers. Current share earning below $15/hour is approximately 22% (35 million workers).",
    hints: [
      "The fiscal impact channels are: (1) increased payroll tax revenue from higher wages, (2) reduced SNAP/EITC/Medicaid spending as workers earn more, (3) potential employment loss reducing tax receipts and increasing unemployment spending. The big uncertainty is employment elasticity — how many jobs are lost per 1% wage increase?",
      "Employment elasticity of minimum wage is the most contested parameter. Economists' estimates range from –0.1 to –0.5 for low-wage workers (meaning a 10% wage increase reduces employment by 1–5%). The Congressional Budget Office uses –0.15 to –0.45 depending on the scenario.",
      "Default approach: use the median estimate from the empirical literature for contested parameters, present a range from low to high, and clearly label which assumptions drive the most uncertainty. Employment elasticity default: –0.1 (optimistic) to –0.3 (pessimistic). At –0.1: a 50% wage hike reduces employment by 5%, or 1.75M jobs. At –0.3: 5.25M jobs lost. The sign and scale of the fiscal impact can flip between these scenarios."
    ],
    referenceSolution: {
      approach: "Enumerate each fiscal channel, set a default for its key parameter using literature consensus where it exists and a range where there is genuine disagreement, then compute fiscal impact under each scenario.",
      reasoning: "Channel 1 — Payroll tax revenue increase: Workers kept employed and earning more. If 35M workers earn $10/hr and move to $15/hr (50% increase), and all are kept employed (optimistic), payroll tax on incremental $5/hr: 35M × $5 × 2,000 hrs/yr × 15.3% payroll tax rate = $53.6B/yr additional payroll taxes. Default: assume 75% employment retention (mid-case), giving $40B/yr. Channel 2 — Reduced means-tested benefit spending: Workers earning more may lose SNAP, EITC, and Medicaid eligibility. Default: $3,000/worker-year in reduced government transfers (consistent with CBO estimates), × 35M × 75% retention = $78.75B/yr savings. Channel 3 — Employment loss cost: Displaced workers receive unemployment insurance (~$400/week × 26 weeks = $10,400 per displaced worker) and reduce tax revenue. At –0.2 elasticity: 35M × 50% wage increase × 0.2 = 3.5M jobs lost. Cost: 3.5M × $10,400 = $36.4B UI cost; plus lost payroll taxes: 3.5M × $20,000/yr × 15.3% = $10.7B. Channel 3 total: ~$47B/yr cost. Net fiscal impact (mid-case): $40B + $78.75B – $47B = +$71.75B/yr net positive. At pessimistic elasticity (–0.4): jobs lost = 7M; cost = $94B; net = +$25B. At optimistic (–0.05): jobs lost = 0.875M; net = +$107B. Key contested parameters: (a) Employment elasticity — use –0.1 to –0.4 range; label this clearly as where economists disagree. (b) Transfer reduction — depends heavily on benefit cliff design; some workers may see partial reductions, not full elimination. Default: 60% of theoretical maximum reduction. (c) Wage pass-through to prices — higher minimum wages raise prices, potentially reducing real consumption and employment in exposed sectors. Default: 0.7% price increase per 10% minimum wage increase (standard estimate). Flag this does not appear in fiscal model but affects real-economy outcomes.",
      commonMistakes: "Using only one employment elasticity scenario and presenting it as the answer. Not separating fiscal impact from economic welfare impact (the fiscal position can improve even if total welfare falls, or vice versa). Forgetting that EITC is partially offset by the wage increase (EITC phases out as earnings rise).",
      alternatives: "Peer review anchor: CBO's 2021 analysis of a $15 minimum wage projected net federal savings of $65B/yr over 10 years in the central scenario, with a range from near-zero to $120B depending on employment effects. Use this as a reality check on the model's output."
    },
    rubric: [
      { id: "ab-035-r1", text: "Identifies all three major fiscal channels: payroll tax revenue, benefit reductions, and employment loss costs" },
      { id: "ab-035-r2", text: "Uses a range for employment elasticity reflecting genuine academic disagreement" },
      { id: "ab-035-r3", text: "Applies a retention rate to employed workers (does not assume 100% employment is maintained)" },
      { id: "ab-035-r4", text: "Recognizes EITC or means-tested benefits as both a cost savings and a partial confound" },
      { id: "ab-035-r5", text: "Presents the fiscal impact as a range tied to the elasticity assumption, not a single number" },
      { id: "ab-035-r6", text: "Distinguishes fiscal impact from broader economic welfare impact" }
    ]
  },

  // ── BOUNDING ESTIMATES (ab-036 to ab-040) ────────────────────────────────

  {
    id: "ab-036",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["orders-of-magnitude"],
    difficulty: "medium",
    question: "Without doing any research, establish a credible lower and upper bound for the total number of commercial flights that operate globally in a single day. Explain your reasoning for each bound and state what you think the true answer is closest to.",
    context: undefined,
    hints: [
      "Think about how many large airports exist globally and how many flights they each handle. Also consider the number of large aircraft manufacturers and roughly how many planes are in service.",
      "Lower bound: use a conservative number of airports and flights per airport. Upper bound: think about how many planes are physically in the air at any moment and extrapolate to a full day.",
      "Lower bound reasoning: ~200 major commercial airports globally, each handling minimum 20 flights/day = 4,000 flights (clearly too low — this misses thousands of smaller airports). Better lower bound: 1,000 airports × 10 flights/day = 10,000 flights. Upper bound: ~25,000 commercial aircraft in service globally, each flying ~1.5 flights/day average = 37,500 flights. True answer: industry data suggests ~100,000 flights/day globally pre-COVID."
    ],
    referenceSolution: {
      approach: "Establish independent lower and upper bounds using different anchors, check they bracket a plausible range, then triangulate.",
      reasoning: "Approach A — Airport anchor: IATA lists ~1,400 airports handling commercial flights. Major hubs (100+) average ~500 flights/day. Mid-tier airports (~400) average ~50 flights/day. Small airports (~900) average ~10 flights/day. Total: 100×500 + 400×50 + 900×10 = 50,000 + 20,000 + 9,000 = 79,000 flights/day. Approach B — Fleet anchor: Global commercial jet fleet ≈ 25,000–28,000 aircraft. Average utilization: long-haul aircraft fly ~1 flight/day, short-haul ~3–4 flights/day. Mix: ~30% long-haul (25,000 × 0.3 × 1 = 7,500) + 70% short-haul (25,000 × 0.7 × 3 = 52,500) = ~60,000 flights. Approach C — Passengers anchor: ~4 billion passenger-trips per year pre-COVID. Average flight carries ~150 passengers. 4B ÷ 150 = 26.7M flights/year = 73,000/day. Triangulation: three approaches give 60,000–79,000/day. Lower bound (conservative): 40,000 (assuming fleet utilization is lower, many small planes not counted). Upper bound: 120,000 (if regional/charter flights are included). Best estimate: ~80,000–100,000 commercial flights per day globally. The bounds from different anchors are consistent at the order-of-magnitude level, giving confidence in the 10^5 range.",
      commonMistakes: "Setting bounds that are too wide to be useful (e.g., 1,000 to 1 million). Not using multiple independent approaches to triangulate. Forgetting regional and short-haul carriers which represent the majority of flight frequency.",
      alternatives: "Radar coverage: air traffic control tracking data is publicly available (e.g., Flightradar24). On a typical day, ~180,000 flights are tracked globally including private aviation. Commercial-only figure is ~100,000–110,000."
    },
    rubric: [
      { id: "ab-036-r1", text: "Uses at least two independent anchoring approaches (airports, fleet, or passengers)" },
      { id: "ab-036-r2", text: "Lower bound is reasoned from a conservative interpretation, not just a guess" },
      { id: "ab-036-r3", text: "Upper bound is reasoned from a different anchor or generous interpretation" },
      { id: "ab-036-r4", text: "Both bounds bracket the true answer (~100,000) without being trivially wide" },
      { id: "ab-036-r5", text: "States a best estimate with reasoning for where within the range it falls" }
    ]
  },

  {
    id: "ab-037",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["physical-estimation"],
    difficulty: "medium",
    question: "A civil engineer needs a quick bounding estimate for how long it would take to fill the new Olympic swimming pool at a venue using a standard garden hose, in case the main fill system fails. Establish a tight lower and upper bound and derive a best estimate.",
    context: "An Olympic swimming pool holds 2,500,000 litres (2.5 megalitres). A standard garden hose at typical household pressure delivers 10–20 litres per minute.",
    hints: [
      "This is a straightforward rate problem once you bound the fill rate. Think about what makes a garden hose fast (high pressure, wide bore) vs. slow (low pressure, length reduces pressure). Then do the division.",
      "Lower bound on time: use the fastest plausible fill rate (20 L/min). Upper bound: use the slowest (10 L/min). Then think about whether a single hose or multiple hoses could be used.",
      "At 20 L/min: 2,500,000 ÷ 20 = 125,000 minutes = 86.8 days. At 10 L/min: 250,000 minutes = 173.6 days. With 10 hoses running simultaneously: 8.7–17.4 days. The answer is weeks to months — clearly impractical for a failed fill system, which is itself a useful conclusion."
    ],
    referenceSolution: {
      approach: "Bound the fill rate, compute time = volume ÷ rate for each bound, check units, and state the practical implication.",
      reasoning: "Volume: 2.5 × 10^6 litres. Fill rate range: 10–20 L/min (standard garden hose). Lower bound on time (fastest rate): 2.5×10^6 ÷ 20 = 125,000 min ÷ 60 min/hr ÷ 24 hr/day = 86.8 days ≈ 87 days. Upper bound on time (slowest rate): 2.5×10^6 ÷ 10 = 250,000 min = 173.6 days ≈ 174 days. Best estimate: 120–130 days at typical flow. With a second hose in parallel: halve the time to 60–87 days. Unit check: L ÷ (L/min) = minutes ✓. Practical conclusion: a single garden hose would take 3–6 months to fill an Olympic pool — clearly unusable as an emergency backup. Even 100 garden hoses running simultaneously would take 1–2 days, which might be feasible for a less urgent refill. This highlights why the calculation matters: it drives a decision about whether to pursue the hose option at all.",
      commonMistakes: "Forgetting to convert minutes to days (a common unit error on large numbers). Not stating the practical implication of the bound (what decision does it inform?). Forgetting that multiple hoses can run in parallel.",
      alternatives: "Cross-check with a mains water supply: a standard 25mm supply pipe delivers ~400 L/min. At that rate: 2.5×10^6 ÷ 400 = 6,250 min = 4.3 days. This is the realistic alternative to the hose and shows why mains supply vs. garden hose is a qualitatively different category."
    },
    rubric: [
      { id: "ab-037-r1", text: "Correctly bounds the garden hose flow rate at 10–20 L/min" },
      { id: "ab-037-r2", text: "Computes both lower and upper time bounds and converts units to days" },
      { id: "ab-037-r3", text: "States a best estimate within the bounded range" },
      { id: "ab-037-r4", text: "Draws a practical conclusion from the bounds (e.g., the approach is impractical)" }
    ]
  },

  {
    id: "ab-038",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["economic-estimation"],
    difficulty: "hard",
    question: "A think tank needs an order-of-magnitude estimate for the total annual cost to the UK economy of workplace procrastination. There is no published data. Establish rigorous lower and upper bounds and justify each. What key assumptions drive the spread between your bounds?",
    context: "UK workforce: approximately 33 million employed workers. Average UK salary: approximately £35,000/year.",
    hints: [
      "This requires estimating: (1) what fraction of workers procrastinate significantly, (2) how much time per day is lost to procrastination, and (3) how to translate lost time into economic cost. Each has a lower and upper bound. The product of three bounds gives bounds on the total.",
      "Lower bound approach: assume only 20% of workers procrastinate meaningfully, for 15 minutes/day, costing the fraction of their salary that corresponds to 15 min/8 hr day. Upper bound: 80% of workers, 90 minutes/day.",
      "Lower bound: 33M × 20% × 15/480 × £35,000 = 33M × 0.2 × 0.031 × £35k = £7.2B/yr. Upper bound: 33M × 80% × 90/480 × £35k = 33M × 0.8 × 0.1875 × £35k = £173B/yr. Best estimate: ~£50–70B using middle assumptions (50% workers, 45 min/day). This is 2–5% of UK GDP (~£2.3T), which is in line with US studies (~$600B/year for a US workforce 5x larger)."
    ],
    referenceSolution: {
      approach: "Decompose into three uncertain parameters (prevalence, time lost, cost per hour), bound each independently, then compound the bounds to get total cost bounds.",
      reasoning: "Parameter 1 — Prevalence (% of workers who procrastinate meaningfully): Lower bound: 20% (only serial procrastinators with clear productivity impact). Upper bound: 90% (essentially everyone procrastinates at least a little). Best estimate: 50%. Justification: research by Pychyl and Steel (2007) suggests ~20% are chronic procrastinators; however, situational procrastination likely affects a much broader population. Parameter 2 — Time lost per day (for those who procrastinate): Lower bound: 15 min/day (trivial, a few email diversions). Upper bound: 2 hours/day (consistent with severe cases studied in laboratory settings). Best estimate: 45–60 min/day. Justification: Surveys of workers consistently find 25–75 minute estimates; 45 minutes is a reasonable central case. Parameter 3 — Cost per hour: Use fully-loaded labor cost (salary + National Insurance + pension + overhead). Average salary £35k/yr ÷ 1,800 working hours = £19.4/hr. Add 30% overhead: £25/hr. Bounds: £15/hr (just salary) to £30/hr (full overhead). Lower bound total: 33M × 20% × 0.25 hrs/day × 220 working days × £15 = 33M × 0.2 × 0.25 × 220 × £15 = 33M × 165 = £5.4B/yr. Upper bound total: 33M × 90% × 2 hrs/day × 220 × £30 = 33M × 0.9 × 2 × 220 × £30 = 33M × £11,880 = £392B/yr. Best estimate: 33M × 50% × 0.75 × 220 × £25 = 33M × £2,062.5 = £68B/yr. Note: bounds span two orders of magnitude (£5B–£400B), revealing enormous parameter uncertainty. Sanity check: £68B = ~3% of UK GDP. US research suggests procrastination costs ~2–5% of GDP, so this is consistent. Key assumption driving spread: time lost per procrastinating worker (a 12× range vs. 4.5× range for prevalence). Reducing uncertainty on time-per-worker would tighten the estimate most efficiently.",
      commonMistakes: "Applying the full average salary to all 33M workers without first segmenting by prevalence. Not separating the three parameters and bounding each independently. Not identifying which parameter drives the most uncertainty in the final range.",
      alternatives: "Lost output approach: if procrastination reduces effective work hours by X%, GDP loss = UK GDP × X%. At 3%, loss = £70B. This top-down approach gives a similar answer and serves as a useful sanity check."
    },
    rubric: [
      { id: "ab-038-r1", text: "Decomposes the problem into at least three independent parameters" },
      { id: "ab-038-r2", text: "Sets and justifies a lower and upper bound for each parameter separately" },
      { id: "ab-038-r3", text: "Correctly compounds parameter bounds to get total cost bounds" },
      { id: "ab-038-r4", text: "Uses a loaded labor cost (not just salary) for the cost-per-hour parameter" },
      { id: "ab-038-r5", text: "Identifies which parameter drives the widest uncertainty in the final range" },
      { id: "ab-038-r6", text: "Performs a GDP-percentage sanity check on the best estimate" }
    ]
  },

  {
    id: "ab-039",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["sanity-checks"],
    difficulty: "hard",
    question: "A startup claims it can reduce food waste in UK supermarkets by 40% through AI-powered demand forecasting, generating £800M in annual savings for a 10-supermarket chain. Before accepting this claim, establish bounding estimates for each component and identify which parts of the claim are implausible.",
    context: "UK supermarkets collectively waste approximately £3B of food per year at retail. The 10-supermarket chain represents roughly 15% of UK grocery market share.",
    hints: [
      "Work backwards: if the chain has 15% market share, its food waste share is ~£450M/yr (15% × £3B). A 40% reduction would save £180M, not £800M. So one of the assumptions is already inconsistent. Identify which one and what the correct range should be.",
      "The inconsistency: £800M saving from a chain with 15% market share and £450M total waste implies saving 178% of total waste — impossible. Either the chain's share is higher, the total UK food waste figure is larger, or the savings figure is wrong.",
      "Correct calculation: £3B × 15% = £450M waste at this chain. 40% reduction = £180M. Even if we're generous with total UK waste (some estimates go to £5B at retail), 15% × £5B × 40% = £300M. The £800M figure is implausible by a factor of 3–5× unless the scope is much larger than a 10-supermarket chain or the market share figure is wrong."
    ],
    referenceSolution: {
      approach: "Establish upper bounds for each element of the claim, identify the arithmetic inconsistency, and assess which assumption would need to change to make the claim valid.",
      reasoning: "Step 1 — Total UK supermarket food waste: Published estimates range from £1.9B (WRAP 2015) to £3.5B (including supply chain) to £5B+ (including portion that is markdown not waste). Use £3B retail waste as central estimate, noting the range is £2B–£5B. Step 2 — Chain's share of waste: 15% market share implies roughly 15% of waste = £450M. However, waste rate may not scale linearly with market share — large discounters may waste less per £ of sales. Bound: £300M–£600M. Step 3 — AI demand forecasting waste reduction: Academic literature and case studies (e.g., Walmart) suggest 20–30% reduction in waste is achievable with excellent demand forecasting. The 40% claim is at the optimistic edge of documented outcomes. Bound: 15%–40%. Step 4 — Financial saving from waste reduction: Avoided waste = reduced stock purchased + avoided disposal cost. Each £ of food waste represents: ~£0.65 purchase cost + £0.05–0.10 disposal cost. Total recoverable saving: up to £0.75 per £ of waste prevented. Step 5 — Upper bound on savings: £600M × 40% × £0.75/£ waste = £180M. Even at the most generous parameters: £600M × 40% × £0.75 = £180M. The £800M claim requires either: (a) the chain has 50%+ market share (implausible), or (b) the total UK retail food waste is £15B+ (implausible), or (c) the model counts revenue recapture from markdown prevention (sold at discount rather than wasted) — this is a legitimate way to expand the figure but should be disclosed. Verdict: the £800M figure is implausible by factor 3–4× on central assumptions. The most credible bounded range is £100M–£200M/year.",
      commonMistakes: "Accepting the £800M figure without checking it against total waste for this chain. Not distinguishing purchase cost saved from revenue recaptured from markdowns. Treating the 40% reduction figure as plausible without benchmarking it against actual AI waste reduction case studies.",
      alternatives: "Revenue recapture framing: if 'savings' includes the margin recaptured by selling reduced-price items rather than writing them off, the calculation changes. A £1 item sold at £0.40 markdown vs. £0 waste generates £0.40 revenue. If 50% of 'waste' is actually markdown-able, the total addressable saving increases. But the startup should make this explicit, and it still does not reach £800M for a 15% market share chain."
    },
    rubric: [
      { id: "ab-039-r1", text: "Computes the chain's estimated food waste from market share and total UK figure" },
      { id: "ab-039-r2", text: "Identifies the arithmetic inconsistency (£800M > total waste for a 15% chain)" },
      { id: "ab-039-r3", text: "Bounds the achievable waste reduction percentage against published benchmarks" },
      { id: "ab-039-r4", text: "Accounts for the fact that not all waste value is recoverable (purchase cost fraction)" },
      { id: "ab-039-r5", text: "Proposes what assumption would need to change for £800M to be valid, and assesses plausibility" }
    ]
  },

  {
    id: "ab-040",
    trackId: "assumption-building",
    subSkill: "bounding-estimates",
    secondarySkills: ["mece-decomposition"],
    difficulty: "hard",
    question: "A satellite internet provider claims it can serve 'the entire unconnected world' — approximately 3 billion people — with its constellation of 1,000 satellites. Establish bounding estimates for whether 1,000 satellites is physically sufficient for this task, and identify the most critical constraint.",
    context: "Each satellite is in Low Earth Orbit (LEO) at ~550 km altitude. Each satellite can serve users within a roughly 1,100 km radius footprint on the ground. The satellites use Ka-band with approximately 20 Gbps per satellite total capacity.",
    hints: [
      "There are two separate constraints: geographic coverage (can 1,000 satellites cover the physical area?) and bandwidth (can 20 Gbps × 1,000 satellites serve 3 billion users?). Check both independently.",
      "Geographic coverage: Earth's surface area is ~510M km². Each satellite footprint: π × 1,100² ≈ 3.8M km². If satellites provide continuous coverage, you need Earth surface ÷ footprint area = ~135 satellites just for area coverage (ignoring orbital mechanics). But not all satellites cover the right areas simultaneously. Bandwidth: 3B users × minimum bandwidth = total needed. Even at 1 Mbps, 3B users need 3 × 10^18 bits per second = 3 exabits/s. 1,000 satellites × 20 Gbps = 20 × 10^12 bits/s = 20 terabits/s. That covers 20 million users at 1 Mbps, not 3 billion.",
      "The binding constraint is bandwidth, not coverage. 1,000 satellites at 20 Gbps each provide 20 Tbps total. Serving 3B users even at 256 Kbps (minimal internet) requires 768 Tbps — 38× more capacity than 1,000 satellites provide."
    ],
    referenceSolution: {
      approach: "Decompose the claim into two separate feasibility checks (coverage area and bandwidth), bound each, identify which is the binding constraint, and state what it would take to actually serve 3 billion users.",
      reasoning: "Check 1 — Geographic coverage: Earth's surface ≈ 510M km². LEO satellite at 550 km altitude has a coverage radius ≈ 1,100 km (using a 45° elevation angle mask). Footprint area = π × 1,100² ≈ 3.8M km². 'Slots' needed for full Earth coverage: 510M ÷ 3.8M = ~134 simultaneous in-view satellites. 1,000 satellites in a well-designed constellation can provide continuous global coverage — coverage is not the binding constraint. But: unconnected populations are concentrated in Africa, South Asia, and Southeast Asia. These regions have the highest population density of unconnected users. Coverage of these high-density areas requires more satellites per unit area, not just global average. This is a nuance but not the binding constraint. Check 2 — Bandwidth: 1,000 satellites × 20 Gbps = 20,000 Gbps = 20 Tbps total. The 3 billion unconnected users: not all simultaneously active. Assume 10% concurrent usage (conservative internet default): 300M active users. Minimum useful bandwidth: 1 Mbps per active user (email, messaging, basic web). Required bandwidth: 300M × 1 Mbps = 300,000 Gbps = 300 Tbps. Gap: 300 Tbps needed vs. 20 Tbps available = 15× shortfall. Even at 128 Kbps (just SMS/email): 300M × 0.000128 Gbps = 38,400 Gbps = 38 Tbps — still 2× short. At 1% concurrent usage: 30M users × 1 Mbps = 30 Tbps — still 1.5× short of available capacity. Conclusion: Bandwidth is the binding constraint by 1.5–15× depending on usage assumptions. Providing minimum internet speeds to all 3 billion users simultaneously is not possible with 1,000 satellites at 20 Gbps each. To serve 3 billion at 1% concurrent usage and 1 Mbps: need 30,000 Gbps ÷ 20 Gbps/satellite = 1,500 satellites minimum. For 10% concurrent: 15,000 satellites. Note: Starlink is deploying ~12,000+ satellites to serve a much smaller target market at higher speeds, which is consistent with this calculation.",
      commonMistakes: "Only checking one constraint (coverage) and not checking bandwidth. Assuming all 3 billion users would be simultaneously active (10% concurrent is a standard internet default). Not checking whether the calculation is internally consistent with known systems like Starlink.",
      alternatives: "Cross-check with Starlink: Starlink targets ~100M subscribers at speeds of 50–200 Mbps using ~12,000 satellites. That implies 600–2,400 Gbps per million users, or 6,000–24,000 Gbps for 10M simultaneous users. At this standard, serving 3B users at even low speeds requires 10,000–100,000 satellites, consistent with the bandwidth calculation above."
    },
    rubric: [
      { id: "ab-040-r1", text: "Separates the problem into coverage and bandwidth constraints and checks both" },
      { id: "ab-040-r2", text: "Correctly computes total satellite bandwidth (1,000 × 20 Gbps = 20 Tbps)" },
      { id: "ab-040-r3", text: "Applies a realistic concurrent usage rate (not 100% simultaneous)" },
      { id: "ab-040-r4", text: "Identifies bandwidth (not coverage) as the binding constraint" },
      { id: "ab-040-r5", text: "Estimates the shortfall factor (how many more satellites would be needed)" },
      { id: "ab-040-r6", text: "Validates against a known real-world system (e.g., Starlink) as a sanity check" }
    ]
  },

  // ── SENSITIVITY ANALYSIS (ab-041 to ab-045) ──────────────────────────────

  {
    id: "ab-041",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["unit-economics"],
    difficulty: "medium",
    question: "A restaurant owner is deciding whether to add delivery service. His model projects: 50 new delivery orders/day at $22 average ticket, 30% food COGS, 20% platform fee to the delivery app, yielding $5.50 profit per order. He concludes delivery adds $100,375/year. Which single assumption, if changed, has the largest impact on the conclusion, and what is the break-even value for that assumption?",
    context: undefined,
    hints: [
      "Work out the profit per order calculation first to verify the $5.50 figure. Then vary each assumption by a fixed percentage (say ±20%) and see which one moves the output most. The percentage change in output relative to percentage change in input is the elasticity.",
      "Profit per order = revenue – COGS – platform fee = $22 – ($22×0.30) – ($22×0.20) = $22 – $6.60 – $4.40 = $11. Wait — this doesn't match the $5.50. What's missing? There must be additional costs (packaging, driver incentive, etc.). Identifying the missing cost is itself a key insight.",
      "The $5.50 implies additional costs of ~$5.50 ($22 – $6.60 – $4.40 – $5.50 = $5.50 in missing costs). Likely packaging ($1) + incremental kitchen labor ($3–4) + other ($0.50). With this full cost structure, sensitivity to order volume is highest: losing 10 orders/day (to 40/day) costs $20,075/year. Platform fee sensitivity is also high: at 30% platform fee, profit drops to $3.30/order and annual profit drops to $60,225 — a 40% reduction."
    ],
    referenceSolution: {
      approach: "Reconstruct the full cost model, identify the missing cost category, then perform a one-at-a-time sensitivity analysis across all key assumptions.",
      reasoning: "Step 1 — Reconcile the model: $22 ticket × (1 – 0.30 COGS – 0.20 platform fee) = $22 × 0.50 = $11 contribution. But reported profit is $5.50. The gap = $5.50/order in unmodeled costs. Likely: packaging ($1), incremental labor per delivery order ($3), other overheads ($1.50). Revised model: profit = $22 – $6.60 – $4.40 – $5.50 = $5.50 ✓. Step 2 — Annual baseline: 50 orders/day × $5.50 × 365 = $100,375. Step 3 — Sensitivity analysis: (a) Order volume: –10 orders (50→40): $5.50 × 40 × 365 = $80,300. Impact: –$20,075 (–20%). A 20% drop in assumptions → 20% drop in profit. Elasticity = 1.0. (b) Average ticket (–10%, $22→$19.80): New contribution = $19.80 × 0.50 – $5.50 = $4.40. Annual = $4.40 × 50 × 365 = $80,300. Impact: –$20,075 (–20%). Elasticity = 2.0 (10% ticket change → 20% profit change) because fixed costs per order stay constant while revenue drops. (c) Platform fee (20%→25%): New fee = $22×0.25 = $5.50. Profit = $22 – $6.60 – $5.50 – $5.50 = $4.40/order. Annual = $80,300. Impact: –$20,075. Elasticity similar to ticket. (d) COGS (30%→35%): New COGS = $7.70. Profit = $22 – $7.70 – $4.40 – $5.50 = $4.40. Annual = $80,300. Step 4 — Break-even: At what order volume does profit = 0? 0 = profit/order × volume × 365. Profit/order must be ≥ 0. The $5.50 fixed cost per order exists regardless of volume. If ticket price or other variable costs change such that margin is negative, delivery always loses money. The 'break-even order price' is: ($6.60 + $4.40 + $5.50) ÷ (1) = revenue must be ≥ $16.50/order. Current $22 provides $5.50 headroom. Key finding: average ticket is the most sensitive assumption because it drives both revenue and fixed-cost coverage simultaneously. A 25% drop in average ticket ($22→$16.50) makes delivery exactly break even. This is plausible if delivery customers order fewer items than dine-in customers.",
      commonMistakes: "Not noticing the $5.50 gap in the cost model. Treating sensitivity analysis as only varying one assumption at a time without noting that in reality assumptions can move together (ticket price and order volume are correlated). Not computing a break-even value for the most sensitive assumption.",
      alternatives: "A tornado chart would rank all assumptions by their impact on annual profit, with order volume, ticket size, and platform fee all showing similar elasticity — confirming that no single assumption dominates, and that a combined moderate downside (fewer orders at lower ticket and higher platform fee) quickly erases the profit."
    },
    rubric: [
      { id: "ab-041-r1", text: "Identifies the $5.50 gap between contribution margin and reported profit (missing costs)" },
      { id: "ab-041-r2", text: "Tests at least 3 assumptions in a one-at-a-time sensitivity analysis" },
      { id: "ab-041-r3", text: "Computes the elasticity or % impact of each assumption change" },
      { id: "ab-041-r4", text: "Identifies average ticket as a high-sensitivity input (drives both revenue and contribution simultaneously)" },
      { id: "ab-041-r5", text: "States the break-even value for the most critical assumption" }
    ]
  },

  {
    id: "ab-042",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: [],
    difficulty: "medium",
    question: "A model for the number of electric vehicles (EVs) on UK roads in 2030 assumes: 10% annual growth in EV sales, starting from 800,000 EVs in 2024. A policy analyst asks: 'How sensitive is the 2030 projection to the growth rate assumption?' Calculate the 2030 fleet size at three growth rate scenarios (5%, 10%, 15%) and explain what the sensitivity pattern reveals about the decision to use 10% as the central case.",
    context: undefined,
    hints: [
      "Use the compound growth formula: fleet in 2030 = 800,000 × (1 + growth rate)^6. Compute this for 5%, 10%, and 15%. Then compare the outputs — is the relationship between growth rate and fleet size linear or non-linear?",
      "At 10%: 800,000 × 1.1^6 = 800,000 × 1.772 = 1,417,600. At 5%: 800,000 × 1.05^6 = 800,000 × 1.340 = 1,072,000. At 15%: 800,000 × 1.15^6 = 800,000 × 2.313 = 1,850,400.",
      "The output range is 1.07M to 1.85M — a factor of 1.73× despite only a ±5 percentage point change in growth rate. This reveals high sensitivity to the growth rate assumption over 6 years of compounding. If growth rate is uncertain by ±5pp, the fleet projection is uncertain by almost 2×, which may make 2030 infrastructure planning difficult."
    ],
    referenceSolution: {
      approach: "Apply the compound growth formula at each scenario, compute the range and ratio of outputs, and interpret the sensitivity pattern for the decision maker.",
      reasoning: "Calculation: Base = 800,000 EVs in 2024. Years to 2030 = 6. At 5%: 800,000 × (1.05)^6 = 800,000 × 1.3401 = 1,072,080 ≈ 1.07M. At 10%: 800,000 × (1.10)^6 = 800,000 × 1.7716 = 1,417,280 ≈ 1.42M. At 15%: 800,000 × (1.15)^6 = 800,000 × 2.3131 = 1,850,480 ≈ 1.85M. Range: 1.07M to 1.85M — a 73% spread from lowest to highest (relative to the 10% base case: –25% to +30%). The relationship is non-linear (exponential): moving from 10% to 15% (+5pp) adds 432,000 vehicles, while moving from 5% to 10% (+5pp) adds 345,000. The upside is larger than the downside in absolute terms. Implications for using 10% as central case: (1) If 10% is the mid-point of a symmetric uncertainty range, the fleet estimate is not symmetric — the mean expectation is slightly above 1.42M due to the convex (exponential) relationship. A more accurate central estimate would average the three scenarios: (1.07+1.42+1.85)/3 = 1.45M. (2) Infrastructure planning should be stress-tested against the 1.85M scenario (15% growth) because: public charging infrastructure has long build times and undersupply creates a political problem; oversupply is less damaging. (3) The sensitivity implies that a ±50% change in growth rate (5% to 15%) causes a ±30% change in fleet size — this is meaningful non-linearity that a linear assumption would miss. Policy takeaway: report the full range (1.1M–1.85M) and plan infrastructure for the upper bound.",
      commonMistakes: "Using simple (not compound) growth: 800,000 × (1 + 0.10 × 6) = 800,000 × 1.6 = 1.28M — significantly underestimates due to ignoring compounding. Not noting the asymmetry of the sensitivity (upside larger than downside in absolute terms). Treating the three-scenario range as a probability distribution without noting that the scenarios are not equally likely.",
      alternatives: "Monte Carlo: if growth rate is uniformly distributed between 5%–15%, the expected fleet is (mean of uniform) at (1.07+1.85)/2 = 1.46M, which is slightly above the point estimate at 10% due to Jensen's inequality (E[f(x)] > f(E[x]) for convex functions)."
    },
    rubric: [
      { id: "ab-042-r1", text: "Applies compound growth formula correctly (not simple growth)" },
      { id: "ab-042-r2", text: "Computes correct fleet sizes for all three scenarios (approx. 1.07M, 1.42M, 1.85M)" },
      { id: "ab-042-r3", text: "Notes the non-linearity (upside scenario larger than downside in absolute terms)" },
      { id: "ab-042-r4", text: "Interprets what the sensitivity spread means for infrastructure planning decisions" },
      { id: "ab-042-r5", text: "Notes that the 73% output range from a ±5pp input range indicates high sensitivity" }
    ]
  },

  {
    id: "ab-043",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["competitive-analysis"],
    difficulty: "hard",
    question: "A venture capital firm is modeling returns on a $5M investment in a B2B SaaS company. Their model projects a 6× return in 5 years based on: 40% annual ARR growth, 7× ARR exit multiple at sale, and 20% annual dilution from new funding rounds. Perform a structured sensitivity analysis showing which of these three assumptions is most critical to the return, and identify the compound scenario that just fails to return the fund (i.e., returns less than 1×).",
    context: "Current ARR: $2M. The fund invested at a $10M post-money valuation (50% ownership after investment).",
    hints: [
      "The return formula: exit value = ARR in year 5 × exit multiple. Investor's share = 50% × (1 – dilution)^5. Return multiple = (exit value × investor's share) ÷ $5M. First verify the 6× return under the stated assumptions, then vary each assumption one at a time.",
      "ARR in year 5 at 40% growth: $2M × 1.4^5 = $2M × 5.378 = $10.76M. Exit value = $10.76M × 7 = $75.3M. Investor's share after 20% annual dilution for 5 years: 50% × 0.8^5 = 50% × 0.328 = 16.4%. Investor's proceeds = $75.3M × 16.4% = $12.35M. Return multiple = $12.35M ÷ $5M = 2.47×. Wait — this doesn't match the claimed 6×. What's wrong in the model?",
      "The 6× claim may assume dilution applies differently, or the starting ownership is higher, or additional rounds reset the calculation. The discrepancy itself is the key finding — the stated assumptions do not produce the claimed 6× return. The actual return under stated assumptions is ~2.5×. To get 6×: need ARR in year 5 × 7 × ownership% = $30M, so ownership × ARR must be high enough. This means the model has an internal inconsistency worth flagging to the VC."
    ],
    referenceSolution: {
      approach: "Build the return model from stated assumptions, verify (or refute) the claimed return, then perform one-at-a-time sensitivity analysis and find the 1× break-even surface.",
      reasoning: "Step 1 — Base case verification: ARR year 5 = $2M × 1.4^5 = $2M × 5.378 = $10.76M. Exit value at 7× ARR = $75.3M. Ownership after 5 years of 20% dilution: 50% × 0.8^5 = 50% × 0.3277 = 16.4%. Investor proceeds = $75.3M × 16.4% = $12.35M. Return = $12.35M ÷ $5M = 2.47×, not 6×. The claim of 6× is inconsistent with stated assumptions. The discrepancy matters: either the dilution is much lower (perhaps 20% total, not per year), or there is a pro-rata provision that maintains ownership, or the starting ownership is higher than 50%. With zero dilution: $75.3M × 50% = $37.65M. Return = 7.53×. With total (not annual) 20% dilution: ownership = 40%, proceeds = $30.1M, return = 6.03×. The 6× return is consistent only if the 20% figure means total dilution over 5 years, not annual dilution. Step 2 — Sensitivity to each assumption (using corrected total-dilution interpretation, 40% ownership at exit): Baseline: $10.76M × 7 × 0.40 = $30.1M → 6.02×. Growth rate sensitivity (ARR growth 40%→30%): $2M × 1.3^5 = $7.43M × 7 × 0.40 = $20.8M → 4.16×. Growth rate sensitivity (40%→50%): $2M × 1.5^5 = $15.19M × 7 × 0.40 = $42.5M → 8.51×. Change from ±10pp: –1.86× to +2.49×. Exit multiple sensitivity (7×→5×): $10.76M × 5 × 0.40 = $21.5M → 4.3×. (7×→9×): $10.76M × 9 × 0.40 = $38.7M → 7.75×. Change from ±2×: –1.72× to +1.73×. Dilution sensitivity (40%→30% ownership): $10.76M × 7 × 0.30 = $22.6M → 4.52×. (40%→50%): $10.76M × 7 × 0.50 = $37.65M → 7.53×. Step 3 — Ranking by sensitivity: Growth rate has the largest absolute impact (compounded over 5 years), followed by dilution, then exit multiple. Step 4 — Break-even (1× return) scenarios: Need proceeds = $5M. $5M = ARR_5 × multiple × ownership ÷ $5M → ARR_5 × multiple × ownership = $25M. At baseline ownership 40% and multiple 7×: ARR_5 must be ≥ $8.93M, requiring growth ≥ 35% per year. If growth drops to 20% and multiple falls to 5× with ownership diluted to 30%: ARR_5 = $2M × 1.2^5 = $4.98M × 5 × 0.30 = $7.47M → return = 1.49× (still above 1×). To fail at 1×: growth 15%, multiple 4×, ownership 25%: $2M × 1.15^5 = $4.02M × 4 × 0.25 = $4.02M → 0.8×. This compound downside scenario (15% growth, 4× multiple, 25% ownership) returns 80 cents on the dollar. Critical finding: individually, each assumption can drop substantially and the investment still returns > 1×. The fund only fails in a compound downside scenario where all three assumptions are unfavorable simultaneously.",
      commonMistakes: "Not catching the internal inconsistency (6× claim inconsistent with annual dilution assumption). Varying only one assumption when the problem asks for compound scenarios. Not distinguishing annual from total dilution.",
      alternatives: "A grid analysis across growth rate (20%, 30%, 40%, 50%) and exit multiple (4×, 5×, 7×, 9×) with fixed ownership (40%) shows the full return surface and reveals that the 1× return line sits at roughly growth=20%, multiple=5× — useful for due diligence prioritization."
    },
    rubric: [
      { id: "ab-043-r1", text: "Correctly builds the return model and identifies the inconsistency with the 6× claim" },
      { id: "ab-043-r2", text: "Resolves the inconsistency (annual vs. total dilution) and verifies the 6× return under the corrected interpretation" },
      { id: "ab-043-r3", text: "Performs one-at-a-time sensitivity on all three assumptions" },
      { id: "ab-043-r4", text: "Ranks assumptions by sensitivity and identifies ARR growth as most impactful (due to compounding)" },
      { id: "ab-043-r5", text: "Finds a specific compound scenario that returns less than 1× (with all three assumptions deteriorated)" },
      { id: "ab-043-r6", text: "Notes that individual assumption changes do not cause failure — only combination of bad outcomes does" }
    ]
  },

  {
    id: "ab-044",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["decomposition-to-fundamentals"],
    difficulty: "hard",
    question: "A climate model estimates that a proposed reforestation program of 100 million hectares of new forest will sequester 3 gigatonnes of CO₂ per year by 2050. A critic argues this estimate is 'hopelessly optimistic.' Using sensitivity analysis, examine the key assumptions that determine sequestration, quantify the range of plausible outcomes, and assess whether the optimism critique is justified.",
    context: "The program targets degraded lands across tropical, temperate, and boreal zones. Tropical forests sequester ~10 tonnes CO₂/ha/yr; temperate ~5 tonnes/ha/yr; boreal ~2 tonnes/ha/yr. Typical reforestation projects have 30–60% survival rates at 10 years.",
    hints: [
      "The sequestration formula is: sequestered CO₂ = area × survival rate × sequestration rate per hectare. The 3 Gt implies an average of 30 tonnes/ha/yr across 100M ha, which is above even the tropical maximum. Something doesn't add up. Identify the issue.",
      "30 tonnes/ha/yr (implied by 3 Gt ÷ 100M ha) is 3× the tropical rate. This means either the area is wrong, the per-hectare rate is overstated, or the estimate includes carbon storage in soil and wood products. The survival rate factor alone would reduce actual sequestration by 40–70%. A realistic range is 0.5–1.5 Gt/yr, not 3 Gt/yr.",
      "Sensitivity levers: (1) biome mix — if 50% tropical, 30% temperate, 20% boreal, weighted average = 0.5×10 + 0.3×5 + 0.2×2 = 7.4 t/ha/yr; (2) survival rate — at 50% survival: 7.4 × 0.5 = 3.7 t/ha/yr; (3) establishment lag — by 2050, trees planted in 2025 have 25 years of growth but start near zero; (4) additionality — does this actually prevent deforestation elsewhere or just offset it?"
    ],
    referenceSolution: {
      approach: "Reverse-engineer the implied per-hectare rate, compare against known sequestration rates, apply a structured sensitivity analysis across biome mix, survival rate, and time lag, then assess the direction and likely magnitude of model error.",
      reasoning: "Step 1 — Implied rate check: 3 Gt ÷ 100M ha = 30 t CO₂/ha/yr. This exceeds tropical forest sequestration rates (~10 t/ha/yr for young fast-growing trees, declining as forests mature to ~2–4 t/ha/yr). The model appears to use young-tree growth rates as a permanent annual rate — a significant optimism bias. Step 2 — Biome mix sensitivity: Program targets tropical (50%), temperate (30%), boreal (20%). Weighted sequestration rate: (0.5×10) + (0.3×5) + (0.2×2) = 5 + 1.5 + 0.4 = 6.9 t/ha/yr. This is already less than 30 — so the model's starting point seems to assume all planting is at peak tropical rate. Step 3 — Survival rate: 50% survival reduces effective area to 50M ha: 50M × 6.9 = 345 Mt/yr ≈ 0.35 Gt/yr. At 70% survival (optimistic): 70M × 6.9 = 483 Mt/yr ≈ 0.48 Gt/yr. Step 4 — Establishment lag: Trees planted in 2025 don't reach full sequestration rates until 2035–2040 in tropical zones, 2045 in temperate, never fully in boreal by 2050. Average realization by 2050 is perhaps 60% of potential: 0.48 × 0.6 = 0.29 Gt/yr. Step 5 — Additionality risk: If 20% of planted areas displace grasslands or other ecosystems with their own carbon stocks, the net sequestration benefit is reduced. And if 10% of the forested area is subsequently re-cleared (deforestation risk), that further reduces net impact. Step 6 — Plausible range: Low scenario (poor biome mix, 30% survival, high displacement): ~0.1–0.15 Gt/yr. Central scenario (mixed biome, 50% survival, moderate additionality): ~0.3–0.5 Gt/yr. High scenario (tropical-heavy, 70% survival, high additionality): ~0.8–1.2 Gt/yr. The 3 Gt/yr claim is 2.5–30× above the plausible range. The critic's characterization of 'hopelessly optimistic' is justified on the numbers. However: nuance — if the model includes soil carbon, wood products carbon (harvested timber), and ocean carbon flux effects, the figure could be higher, but these effects are much harder to verify and often double-counted. The key optimism drivers are: (1) using peak young-tree rates as permanent, (2) ignoring survival rate, (3) ignoring establishment lag.",
      commonMistakes: "Accepting the 3 Gt figure without checking the implied per-hectare rate. Ignoring the difference between young-tree growth rates and mature forest steady-state sequestration. Not accounting for survival rate. Treating additionality as binary (either fully counted or ignored) rather than probabilistic.",
      alternatives: "Cross-check: the IPCC AR6 report estimates nature-based solutions including reforestation can contribute 1–2 Gt CO₂/yr in cost-effective mitigation by 2030 globally under ambitious scenarios. A single program claiming 3 Gt/yr would represent 150–300% of all nature-based solutions globally — a clear red flag from an external benchmark."
    },
    rubric: [
      { id: "ab-044-r1", text: "Computes the implied sequestration rate (30 t/ha/yr) and identifies it as inconsistent with known rates" },
      { id: "ab-044-r2", text: "Applies a biome-mix weighted average rate correctly" },
      { id: "ab-044-r3", text: "Applies a survival rate to reduce effective area" },
      { id: "ab-044-r4", text: "Accounts for establishment lag (trees don't sequester fully from year 1)" },
      { id: "ab-044-r5", text: "Derives a plausible range (approximately 0.15–1.2 Gt/yr) substantially below the 3 Gt claim" },
      { id: "ab-044-r6", text: "Validates against an external benchmark (e.g., IPCC nature-based solutions estimate)" }
    ]
  },

  {
    id: "ab-045",
    trackId: "assumption-building",
    subSkill: "sensitivity-analysis",
    secondarySkills: ["ambiguous-problem-solving"],
    difficulty: "hard",
    question: "A hospital is deciding whether to implement a new AI diagnostic tool that, in trials, improved early cancer detection rates from 72% to 85%. The health economics team estimates the tool saves 40 QALYs (quality-adjusted life years) per year at the hospital, justifying a purchase price of £2M (at a cost-effectiveness threshold of £30,000/QALY). Perform a sensitivity analysis to identify which assumptions would make this investment not cost-effective, and what real-world factors could make the trial-based QALY estimate unreliable.",
    context: "The hospital screens 5,000 patients per year for this cancer type. The 5-year survival rate for early-stage detection is 90%; for late-stage detection it is 30%. Average QALYs gained per additional early detection: 8 QALYs.",
    hints: [
      "Start by independently calculating the implied number of additional early detections per year from the given data, and check whether this is consistent with the 40 QALYs claim.",
      "Additional early detections = 5,000 × (85% – 72%) = 5,000 × 13% = 650 additional early detections. But wait — not all of these actually change outcomes: some late-stage patients would have been caught by other means or survived anyway. The incremental survival benefit is (90% – 30%) = 60 percentage points improvement in 5-year survival per shifted patient. QALYs = 650 × 0.60 × 8 = 3,120 QALYs/year. But the model claims only 40 QALYs. Either the calculation is wrong or the 650 additional detections figure needs heavy discounting.",
      "The 40 QALY figure implies: 40 ÷ 8 = 5 additional patients with improved survival per year, suggesting only 5 of the 650 additional early detections produce meaningful outcome changes. This discounting could be justified if: most 'additional' early detections are indolent cancers that would not have caused death anyway (overdiagnosis), or if late-stage patients would have been caught at a later screen anyway. This overdiagnosis factor is the key sensitivity."
    ],
    referenceSolution: {
      approach: "Reconstruct the QALY calculation from first principles, identify the reconciliation between the raw detection improvement and the 40 QALY claim, then stress-test the key assumptions.",
      reasoning: "Step 1 — Raw calculation: Additional early detections/year = 5,000 × (0.85 – 0.72) = 650. Survival benefit per shifted patient = 90% – 30% = 60 percentage points additional 5-year survival. QALYs per additional early detection = 0.60 × 8 = 4.8 QALYs. Total QALYs = 650 × 4.8 = 3,120 QALYs/year. This implies cost-effectiveness = £2M ÷ 3,120 = £641/QALY — enormously cost-effective and not consistent with the £2M price tag being right at the £30,000 threshold. Step 2 — Reconciling with 40 QALYs: For 40 QALYs to be correct, the model must apply a very large discount to the 650 additional detections. Effective discount: 40 ÷ 3,120 = 1.3%. This suggests the model assumes: (a) most 'additional' early detections are overdiagnosis — indolent cancers that would never cause symptoms or death. For some cancer types (e.g., thyroid, prostate, some breast subtypes), overdiagnosis rates of 50–80% are documented. (b) Lead time bias — early detection may extend measured survival time without extending actual life (patients just know about cancer earlier, not live longer). (c) Incremental effect vs. trial effect: trial conditions (specialist radiologists, controlled protocols) may not replicate in routine clinical practice. Step 3 — Sensitivity analysis: Variable 1 — Overdiagnosis rate: At 90% overdiagnosis: effective detections = 65. QALYs = 65 × 4.8 = 312 (still 8× more than 40). At 98% overdiagnosis: 13 effective detections → 62 QALYs. At 99%: 6.5 → 31 QALYs. For the model to yield 40 QALYs, overdiagnosis rate ≈ 99%. This is extreme and would need explicit justification. Variable 2 — Real-world vs. trial performance: If hospital radiologists perform at 70% of trial performance (a realistic degradation), additional early detections = 650 × 0.70 = 455. QALYs without overdiagnosis = 2,184. Variable 3 — QALY value per early detection: If 8 QALYs (trial assumption) is reduced to 4 (due to lead-time bias, quality of life adjustments): QALYs = 650 × 0.60 × 4 = 1,560. Step 4 — The 40 QALY figure is only plausible if: (a) the cancer being screened has an extremely high overdiagnosis rate (>98%), AND/OR (b) the QALY gain per early detection is dramatically lower than 8. For the investment to be at exactly the threshold, the model has been parameterized to produce a favorable verdict — this is a form of backward induction that should trigger skepticism. Cost-effectiveness threshold test: if QALYs are truly 40, the tool at £2M costs £50,000/QALY — above the NICE threshold of £30,000. At £30,000/QALY threshold, the tool would need to generate 67 QALYs to be worth £2M. At 3,120 QALYs, the tool is worth £93.6M — far above its price. The 40 QALY estimate appears heavily discounted, but the basis for the discount is not transparent.",
      commonMistakes: "Not computing the independent QALY estimate to check against the 40 QALY claim. Accepting overdiagnosis as a valid discount without quantifying what rate is implied. Not distinguishing between cost-effectiveness (value per QALY) and budget impact (total cost). Ignoring the real-world vs. trial performance degradation.",
      alternatives: "A threshold analysis approach: instead of fixing assumptions and varying outputs, ask 'what overdiagnosis rate makes this investment exactly cost-effective?' Answer: ~98.7% overdiagnosis rate. If the true overdiagnosis rate for this cancer type is known from literature, the investment verdict follows immediately."
    },
    rubric: [
      { id: "ab-045-r1", text: "Independently computes the raw QALY estimate from the given data (~3,120 QALYs/yr)" },
      { id: "ab-045-r2", text: "Identifies the 40 QALY claim as implying an extreme discount (~99% overdiagnosis or equivalent)" },
      { id: "ab-045-r3", text: "Identifies overdiagnosis and lead-time bias as the key QALY discount mechanisms" },
      { id: "ab-045-r4", text: "Notes real-world vs. trial performance degradation as a sensitivity variable" },
      { id: "ab-045-r5", text: "Computes the implied cost-per-QALY under the stated 40 QALY figure and notes it exceeds the NICE threshold" },
      { id: "ab-045-r6", text: "Performs a threshold analysis (what discount rate makes the tool exactly cost-effective)" }
    ]
  },

  // ── ASSUMPTION VALIDATION (ab-046 to ab-050) ─────────────────────────────

  {
    id: "ab-046",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["structured-argumentation"],
    difficulty: "medium",
    question: "A management consultant recommends that a retailer close its 20 lowest-performing stores, with the argument: 'These stores collectively lose £4M per year, so closing them will save £4M and lift company profits by £4M.' What assumption is embedded in this recommendation, how would you test it, and what evidence would cause you to reject the consultant's conclusion?",
    context: undefined,
    hints: [
      "The embedded assumption is that closing a store eliminates all of its costs and loses only its current revenue. Think about what costs might not disappear when a store closes (fixed vs. variable cost structure), and whether the store's losses include allocated overheads that will be redistributed.",
      "Key assumption: the £4M loss is 'avoidable.' But if the stores' costs include allocated corporate overheads (IT, HR, procurement), those costs don't disappear — they get reallocated to remaining stores, which then look less profitable. The stores may be contribution-positive (covering their own direct costs and contributing to overheads) even while showing a net accounting loss.",
      "Test: calculate contribution margin per store (revenue minus direct/variable costs only). If contribution margin is positive (say, £2M total contribution across the 20 stores), closing them reduces overall profit by £2M despite eliminating the £4M accounting loss. Evidence to reject: if direct store costs exceed store revenue, closure is definitely beneficial. If contribution is positive, closure is likely harmful."
    ],
    referenceSolution: {
      approach: "Identify the fixed-vs-variable cost assumption embedded in the recommendation, design a test using contribution margin analysis, and specify the evidence threshold for accepting or rejecting the recommendation.",
      reasoning: "The consultant's argument assumes: (1) the £4M loss is fully avoidable (all costs are directly attributable to the stores and will cease if stores close); (2) there is no revenue transfer to other stores or channels when these stores close; (3) closing 20 stores has no effect on supplier negotiating power, brand perception, or network economics. Testing assumption (1) — avoidable cost analysis: Request a P&L breakdown per store separating: (a) directly attributable variable costs (staff wages, store-specific COGS, local rent); (b) allocated fixed costs (a share of IT, HR, procurement, marketing, warehousing that would continue regardless). If allocated overhead is £6M across the 20 stores and direct costs are £2M below revenue, the true contribution per store is positive. Example: if 20 stores each generate: Revenue £500k, COGS £300k, direct labor £150k, allocated overhead £80k = reported loss (£30k). Direct contribution = £500k – £300k – £150k = £50k positive per store = £1M total positive contribution. Closing them would save £0 in overhead but lose £1M in contribution → profit falls by £1M instead of rising by £4M. Testing assumption (2) — revenue transfer: Do customers of closed stores go to nearby open stores or online? If 30% of revenue transfers, the lost contribution is reduced but not eliminated. Testing assumption (3) — network effects: For a retailer, having fewer locations may reduce 'retailer presence' in a market, affecting brand negotiating power with suppliers or landlords. Empirical test: Compare markets where this retailer has high vs. low store density — do high-density markets show better supplier terms or higher comparable store sales? Evidence to reject: if contribution analysis shows the 20 stores collectively contribute positively to overheads. This requires store-level P&L with overhead allocation clearly separated.",
      commonMistakes: "Accepting accounting profit (net of allocated overheads) as the relevant measure for a closure decision. Ignoring revenue transfer effects. Not considering supply chain or purchasing power effects of a smaller store network.",
      alternatives: "Incremental analysis: model the company P&L with 20 stores and without. The difference is the true closure impact. This is equivalent to contribution analysis but forces explicit modeling of what costs actually stop vs. continue."
    },
    rubric: [
      { id: "ab-046-r1", text: "Identifies the 'avoidable cost' assumption as the critical embedded assumption" },
      { id: "ab-046-r2", text: "Distinguishes allocated overhead from directly avoidable costs" },
      { id: "ab-046-r3", text: "Proposes a specific test (contribution margin analysis) to validate or refute the assumption" },
      { id: "ab-046-r4", text: "States the evidence threshold (contribution positive vs. negative) for rejecting the recommendation" },
      { id: "ab-046-r5", text: "Considers at least one secondary effect (revenue transfer or network economies)" }
    ]
  },

  {
    id: "ab-047",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["challenging-defaults"],
    difficulty: "medium",
    question: "A startup's growth model assumes that word-of-mouth is the primary acquisition channel, with a viral coefficient of K = 1.3 (each user invites 1.3 new users). The founders claim this means the product will 'grow exponentially forever.' Identify the assumptions that must hold for this to be true, explain why each is likely to fail over time, and describe how you would test the true K-factor before scaling marketing spend.",
    context: undefined,
    hints: [
      "A viral coefficient K > 1 does produce exponential growth, but only if: (1) K stays constant over time, (2) the invited users convert at the same rate as the initial invitees, (3) the invited users also invite at the same rate. In practice, all three degrade as you exhaust high-propensity networks.",
      "K = (invites sent per user) × (conversion rate of invites). If each user sends 2 invites and 65% convert: K = 2 × 0.65 = 1.3. But early users are the most enthusiastic — they invite their closest contacts who are most likely to convert. As the network saturates, later users send fewer invites and invitees are less likely to convert.",
      "To validate K: measure it empirically at different cohort stages. Does cohort 1 (early adopters) have K = 1.4 while cohort 5 (later mass-market users) has K = 0.9? If K is declining across cohorts, the growth will decelerate and eventually stop. Test: track invites sent and conversion rate by user acquisition cohort and date."
    ],
    referenceSolution: {
      approach: "Decompose K into its components, identify the hidden stationarity assumptions, explain the mechanism of degradation, and design an empirical test.",
      reasoning: "K = (invites sent per user per cycle) × (conversion rate per invite). The K = 1.3 claim assumes both factors are constant. Hidden assumptions: (1) Constant invitation rate: Early users (innovators/early adopters) are more evangelical and send more invites. As the product reaches mainstream users, word-of-mouth enthusiasm decreases. Mechanism: Each user has a finite social network; once high-propensity contacts have been invited, remaining contacts are lower-fit or already using the product. (2) Constant conversion rate: Early invitees receive recommendations from trusted contacts who have genuinely high affinity for the product. As the network expands, invitees are more distant contacts with lower trust or lower product-market fit. Conversion rates typically decline from ~70% (friends of founding cohort) to ~20% (sixth-degree connections). (3) Constant cycle time: If cycles get longer (users take longer to invite after joining), growth slows even with K > 1. (4) Infinite addressable market: K > 1 leads to exponential growth only if there is always an uninvited potential user. In a finite market, growth slows as the pool of uninvited users shrinks. Why each fails: Saturation of high-propensity networks is the primary failure mode — empirically, K tends to decline from 1.2–1.4 at launch to 0.6–0.8 within 6–12 months for most viral consumer products. Testing methodology: (a) Cohort analysis: measure K for users acquired in month 1 vs. month 3 vs. month 6. A declining K over cohorts signals network saturation. (b) Funnel decomposition: track invitation rate (invites sent per user) and conversion rate separately. Identify which component is degrading faster. (c) Social graph distance: measure whether later invitees are on average farther (in social graph distance) from the founding cohort. Farther connections → lower conversion. (d) Time-to-invite: track how long after joining a user sends their first invite. Increasing lag → effectively lower K per unit time. Evidence standard: if K is stable across cohorts 1–5 and at least 3 months of data shows K > 1.1 consistently, the viral growth assumption is better-supported. A single K measurement at launch is insufficient to justify scaling spend.",
      commonMistakes: "Treating a single K measurement as evidence of permanent viral growth. Not decomposing K into invitation rate and conversion rate. Ignoring the finite-market constraint on exponential growth. Not designing a longitudinal test (K needs to be measured across cohorts, not once).",
      alternatives: "The Bass Diffusion Model provides a theoretical framework for how viral growth evolves over time in a finite market. It predicts that growth is S-shaped (initially exponential, then leveling as the market saturates), which is consistent with observed K degradation."
    },
    rubric: [
      { id: "ab-047-r1", text: "Decomposes K into invitation rate × conversion rate" },
      { id: "ab-047-r2", text: "Identifies at least 3 hidden stationarity assumptions (invitation rate, conversion rate, cycle time, finite market)" },
      { id: "ab-047-r3", text: "Explains the mechanism by which each assumption degrades over time" },
      { id: "ab-047-r4", text: "Designs a cohort-based empirical test to measure K degradation over time" },
      { id: "ab-047-r5", text: "States an evidence standard — what data would be sufficient to support the viral growth assumption" }
    ]
  },

  {
    id: "ab-048",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["market-dynamics"],
    difficulty: "hard",
    question: "A retail bank's credit risk model assumes that mortgage default rates will not exceed 3% per year under any housing market scenario, based on historical data from 2000–2019. A risk manager argues this is an adequate assumption for stress-testing. Critically evaluate this assumption, identify the conditions under which it would fail, and propose a validation framework that does not rely solely on historical default rates.",
    context: "The bank's mortgage portfolio is concentrated in two major cities (65% of exposure). Average loan-to-value (LTV) ratio is 78%. The model uses OLS regression on 20 years of macro variables (unemployment, GDP, house prices).",
    hints: [
      "The 2000–2019 dataset excludes the early 1990s recession, which saw UK mortgage defaults of 6–8% in some regions. The data also excludes scenarios of rapidly rising interest rates combined with a house price correction — a scenario not present in the data. The assumption also misses geographic concentration risk.",
      "Key failure conditions: (1) interest rate shock — the dataset covers a period of secular low and falling rates; rising rates increase default risk in ways the model has never seen; (2) house price correction — at 78% LTV, a 25% price fall puts many borrowers in negative equity, increasing default rates even if they can afford payments, as walkaway decisions become rational; (3) geographic concentration — if 65% is in 2 cities, a local economic shock (major employer closure, regional recession) can produce cluster defaults that are not captured by national macro variables.",
      "Validation approaches beyond historical data: (1) scenario analysis using hypothetical stress paths (not based on historical data); (2) structural models that derive default probability from LTV distribution and assumed price paths; (3) comparison with default rates in other countries during stress periods; (4) reverse stress testing — find the scenario that produces 3% default rate, then assess its plausibility."
    ],
    referenceSolution: {
      approach: "Evaluate the 2000–2019 data for regime coverage gaps, identify the mechanisms that could produce defaults exceeding 3%, and design a multi-method validation framework that addresses each gap.",
      reasoning: "Critique of the historical data assumption: (1) The dataset represents a structurally benign period: from 2000–2019, UK base rates fell from 6% to 0.75%, house prices rose almost continuously (with the exception of 2008–2009), unemployment never exceeded 8.5%, and QE suppressed mortgage arrears in 2009–2012. A model calibrated to this period will systematically underestimate tail risk in structurally different environments. (2) The 2007–2008 crisis is included, but the UK mortgage market was partly protected by QE and forbearance. The stress scenario from this period in UK data is milder than in equivalent US data. (3) The pre-2000 experience (1990–1993 recession with 15% interest rates, 5%+ default rates in some regions) is excluded. (4) Specific failure conditions: (a) Interest rate normalization: Post-2022 rate increases show that refinancing at 5–6% (vs. 1.5% origination rate) produces significant payment stress for new fixed-rate-end borrowers. Model has never seen a large rate shock in the portfolio training data. (b) LTV concentration: At 78% average LTV, a house price fall of 23% creates average negative equity across the portfolio. Rational default (walkaway) rates increase non-linearly past the negative equity threshold. The 3% cap assumes house prices do not fall enough to reach this threshold nationwide. (c) Geographic concentration risk: The two-city concentration (65%) creates correlated default exposure. If either city experiences a major employer departure or planning moratorium, regional unemployment spikes and house prices fall together — a scenario not captured in national macro variables. (d) Model specification: OLS regression is linear and cannot capture the non-linear relationship between unemployment and default at extreme values. A 2% unemployment increase from 4% to 6% has different default implications than from 6% to 8%. (e) Excluded variables: buy-to-let exposure, interest-only mortgages, second-charge lending — all increase vulnerability in stress scenarios. Validation framework: (1) Historical analogy: Apply the UK 1990–1993 macro path to the current portfolio (adjusted for LTV mix, income multiples). What is the implied default rate? (2) Structural model: Build a loan-by-loan model using LTV distribution + assumed house price paths. Set thresholds (e.g., negative equity + unemployment shock) and compute default probability. This is model-independent. (3) Cross-country benchmarks: During 2008–2012, US, Ireland, and Spain experienced 5–15% mortgage default rates with LTV distributions similar to this bank's portfolio. These outcomes provide out-of-sample evidence the 3% cap ignores. (4) Reverse stress test: Find the combination of (a) house price fall, (b) unemployment increase, and (c) interest rate increase that produces exactly 3% default. Ask: is this scenario truly improbable? If house prices –25%, unemployment +5pp, rates +3pp produces 3% default, and this scenario is plausible in 2024, the cap is not conservative. (5) Monte Carlo with fat-tailed distributions: Replace OLS regression with a model that allows extreme tail events. The 2008 shock is in the top 1% of historical observations — if the distribution is assumed normal, tail events are undersampled.",
      commonMistakes: "Accepting historical data coverage as evidence that all relevant scenarios have been observed. Not considering the non-linearity of default rates at extreme macro values. Treating geographic concentration as a diversification benefit rather than a correlated risk. Not using out-of-sample evidence (other countries) to test model limits.",
      alternatives: "The Merton model for credit risk provides a structural alternative: default occurs when asset value (house price) falls below debt value (mortgage balance). Using the current LTV distribution and a house price volatility estimate, this model predicts default probability without relying on historical default frequency — and can be stress-tested analytically."
    },
    rubric: [
      { id: "ab-048-r1", text: "Identifies that the 2000–2019 dataset misses structurally different rate and price regimes" },
      { id: "ab-048-r2", text: "Explains the negative equity mechanism: LTV + price fall → rational default increases non-linearly" },
      { id: "ab-048-r3", text: "Notes geographic concentration as a correlated risk not captured by national macro variables" },
      { id: "ab-048-r4", text: "Identifies OLS linearity as a model limitation for capturing tail risk" },
      { id: "ab-048-r5", text: "Proposes at least 3 validation methods that do not rely solely on the historical data" },
      { id: "ab-048-r6", text: "Uses cross-country data (US/Ireland/Spain 2008–2012) as out-of-sample evidence against the 3% cap" }
    ]
  },

  {
    id: "ab-049",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["analogical-reasoning"],
    difficulty: "hard",
    question: "A city transport authority is evaluating a proposal to introduce congestion pricing on central city roads, projecting that peak-hour traffic will fall by 25% — enough to reduce average journey times by 12 minutes. The projection is based on a transport model using price elasticity of demand of –0.3 for driving. Critically examine the assumptions embedded in using this elasticity, and propose a validation framework using both internal data and analogies from other cities.",
    context: "The proposed charge is £12 for driving into the city centre during peak hours. Current peak-hour traffic volume is 85,000 vehicle-trips per day. Public transport capacity would increase by 15% alongside the charge.",
    hints: [
      "Price elasticity of –0.3 means a 1% price increase reduces demand by 0.3%. But what is the 'price' of driving currently? Parking, fuel, and opportunity cost make up the implicit price. A £12 charge on a zero-priced road means the percentage price increase is technically infinite — making elasticity-based projections unreliable.",
      "The –0.3 elasticity is a long-run estimate from various travel demand studies. Short-run elasticity is typically lower (–0.1 to –0.2) because people cannot easily change jobs, homes, or routines. Long-run elasticity (–0.4 to –0.6) takes 3–5 years as people relocate or change behavior. Which applies here?",
      "Validation approach: Use London's Congestion Charge (2003) as an analogy. London introduced an £8 charge and achieved a 25–30% reduction in traffic in year 1. Stockholm saw 20% reduction at comparable charges. But London had very extensive public transport, and the charge was gradually accepted. The authority should check: does the elasticity match London's experience given this city's transit capacity and car-dependency?"
    ],
    referenceSolution: {
      approach: "Decompose the elasticity assumption, identify its applicability conditions, test it against analogous city implementations, and design a validation framework for the specific context.",
      reasoning: "Assumption 1 — Elasticity of –0.3 is stable and applicable: The elasticity figure is borrowed from aggregate travel demand studies, typically estimated across many contexts. Problems: (a) Base price issue — elasticity is measured as percentage change in quantity per percentage change in price. If the current 'price' of driving includes only fuel and parking (say £5 average), adding £12 means a 240% price increase. A –0.3 elasticity implies 72% demand reduction — clearly wrong. The model must be using a full generalized cost of travel (including time value), which changes the base. If generalized cost is £30 (including £15 time cost), a £12 charge is a 40% increase, implying 12% demand reduction — only half the claimed 25%. The assumed elasticity base matters enormously. (b) Short vs. long-run: –0.3 is typically a medium-run estimate. Short-run (year 1) elasticity is –0.1 to –0.2 for congestion pricing. The 25% demand reduction may take 3–5 years to materialize. In year 1, the journey time improvement will be less than 12 minutes. (c) Heterogeneous responses: Some trips are highly inelastic (essential workers with no transit alternative), others very elastic (discretionary car use). Average elasticity masks bimodal distribution. The 25% reduction assumes average elasticity across all trip types. Assumption 2 — 25% demand reduction produces 12-minute journey time improvement: Congestion is highly non-linear — a small percentage reduction in traffic near capacity can produce large journey time improvements (BPR function). The 12-minute improvement assumes a specific starting congestion level and a specific traffic flow model. If the BPR parameters are wrong (e.g., roads are not near capacity), the journey time improvement could be much less. Analogical validation from other cities: London Congestion Charge (2003): £8 charge → 25–30% reduction in car trips in the charging zone in year 1. But London had: (a) exceptionally dense public transit (Tube + buses), (b) over 50% of commuters already using public transit. Stockholm congestion pricing (2006–present): 20% reduction at SEK 20–60 charges. Gothenburg (2013): 10–15% reduction, slower than modeled. Milan (Area C, 2012): 30% reduction but from a much higher base of car dependency. Pattern: cities with strong transit see 20–30% reduction. Car-dependent cities with weak transit see 5–15%. This city's transit capacity increase (15%) needs to be sufficient to absorb displaced drivers. If 25% fewer car trips = ~21,000 trips/day shifted, and transit increase absorbs 12,750 extra trips (15% × 85,000 ÷ transit share), the transit absorption may be insufficient, leading to crowding and reversion to car use. Validation framework: (1) Calibrate elasticity to generalized cost baseline (include time, fuel, parking in the base price, not zero). (2) Segment trips by necessity and transit availability; apply different elasticities to each segment. (3) Run transport model at short-run elasticity for year 1 prediction, long-run for year 5 steady state. (4) Apply BPR function to translate traffic reduction to journey time improvement, sensitivity-testing BPR parameters. (5) Use London and Stockholm as analogues; adjust for local transit capacity and car-dependency ratio. (6) Pilot: consider a 3-month trial and measure actual elasticity empirically.",
      commonMistakes: "Applying elasticity to a zero (or near-zero) price base, which makes percentage price changes meaningless. Not distinguishing short-run from long-run elasticity and which is appropriate for a year 1 projection. Not checking whether transit capacity can absorb displaced drivers.",
      alternatives: "A four-stage transport model (trip generation, distribution, mode choice, assignment) is the standard validation approach for congestion pricing. It explicitly models transit absorption, mode shift, and trip suppression separately — rather than applying a single elasticity to all trip types."
    },
    rubric: [
      { id: "ab-049-r1", text: "Identifies the base price problem (elasticity applied to what baseline price?)" },
      { id: "ab-049-r2", text: "Distinguishes short-run from long-run elasticity and notes which is relevant for a year 1 projection" },
      { id: "ab-049-r3", text: "Notes heterogeneous elasticity (essential vs. discretionary trips) as a problem with applying average elasticity" },
      { id: "ab-049-r4", text: "Questions whether transit capacity increase is sufficient to absorb displaced drivers" },
      { id: "ab-049-r5", text: "Uses at least two city analogies (London, Stockholm, or others) to calibrate the projection" },
      { id: "ab-049-r6", text: "Proposes a multi-element validation framework including segmentation, short-run calibration, and analogue comparison" }
    ]
  },

  {
    id: "ab-050",
    trackId: "assumption-building",
    subSkill: "assumption-validation",
    secondarySkills: ["full-case-interview"],
    difficulty: "hard",
    question: "A major grocery retailer is considering launching a private-label premium range to compete with branded goods. Their business case rests on three core assumptions: (1) 15% gross margin improvement vs. branded equivalents; (2) brand equity transfer — customers will trust the private label enough to pay 90% of the branded price; and (3) no material cannibalization of existing mid-tier private label range. For each assumption, design a validation test using data the retailer already has access to, and specify the decision rule — what result would cause you to reject the recommendation?",
    context: "The retailer is the UK's third-largest grocer by market share (18%). It currently has a mid-tier private label and no premium range. Category: ready meals.",
    hints: [
      "For assumption (1), the margin improvement claim requires knowing the branded manufacturer's margin, the retailer's buying terms, and the cost of own-label production. The retailer has buying data for the branded goods and can model own-label production costs. What data do they need and how would they validate the 15% figure?",
      "For assumption (2), brand equity transfer can be tested with existing customers and transaction data. Willingness to pay at 90% of branded price implies the private label must be perceived as nearly equivalent. How would you test this without launching the product?",
      "For assumption (3), cannibalization can be estimated from within-category substitution patterns. Does the retailer see customers trading up from its mid-tier range to brands in categories where it has no premium private label? If so, a premium private label would capture some of that trade-up rather than creating new demand."
    ],
    referenceSolution: {
      approach: "For each of the three assumptions, specify the data source, test design, metric, and decision threshold that would validate or refute the assumption before commitment.",
      reasoning: "Assumption 1 — 15% gross margin improvement: The validation decomposes into: (a) current branded COGS: the retailer knows its buying price for branded ready meals (say £3.50 retail, buying at £2.45 = 30% gross margin). (b) Own-label production cost: obtain quotes from 2–3 co-manufacturers for equivalent recipe/quality spec. Target cost to achieve 45% gross margin (15pp improvement) at 90% of branded price: if branded = £4.00, own-label retail = £3.60. COGS target = £3.60 × (1–0.45) = £1.98. Request quotes for this spec and compare to £2.45 branded COGS. Test design: issue RFQ (request for quotation) to co-manufacturers with product spec. If 3 credible manufacturers quote below £1.98, the margin assumption is validated. Decision rule: reject if lowest credible quote exceeds £2.20 (leaving only 39% gross margin, not the claimed 45%). Assumption 2 — Brand equity transfer, WTP at 90% of branded price: Data already held: (a) price elasticity of branded ready meals — the retailer's transaction data can show how branded sales respond to price promotions. If branded volume increases sharply at –10% vs. branded price, consumers are price-sensitive, supporting WTP at 90%. (b) Competitor private label analogues: does Waitrose's premium own-label (Waitrose 1) price at 85–95% of branded? If competitors successfully maintain 90% pricing, this supports the assumption. (c) Conjoint analysis or concept test with loyalty card holders: survey the top 20% of ready meal buyers with willingness-to-pay questions. Test design: pull loyalty card data for the top 30% of ready meal buyers by spend. Identify their current branded vs. own-label split. Customers already buying own-label at 80% of branded price demonstrate WTP close to branded. Run a concept test (product image + price) with a sample of customers. Decision rule: reject if concept test shows WTP median below 82% of branded price (indicating the 90% assumption is too aggressive and margin target falls through). Assumption 3 — No material cannibalization of mid-tier own-label: The retailer already has transaction data showing whether premium range introduction in other categories cannibalized its mid-tier range. Test design: (a) Internal category analysis: identify 3–5 categories where the retailer introduced a premium own-label in the past 3 years. Measure mid-tier private label volume 12 months before and after premium introduction. (b) Basket analysis: do customers buying branded ready meals also buy mid-tier own-label in other categories? If brand and mid-tier already co-exist in baskets, adding premium may cannibalize brand spending (good) not mid-tier spending. (c) Analogues: Tesco Finest introduction (2000) — did it cannibalize Tesco's value range or primarily capture market share from brands? Data from Companies House filings and industry reports. Decision rule: reject if internal category analysis shows mid-tier private label volume fell > 8% in the 12 months after premium range introduction in analogous categories. An 8% cannibalization on mid-tier would offset approximately 40% of the premium margin gain (depending on relative volumes). Overall decision framework: all three assumptions should be validated before launch. If assumptions 1 and 3 are validated but assumption 2 is rejected (WTP below 82%), the team should consider pricing at 82% of branded and recalculating the margin — it may still be profitable but with reduced premium positioning.",
      commonMistakes: "Proposing market research (surveys) as the primary validation tool when the retailer already has transaction data that can answer the question. Not specifying a quantitative decision threshold for each assumption. Testing assumptions sequentially rather than in parallel (all three can be tested simultaneously, reducing launch timeline risk). Not considering that cannibalization could be positive (cannibalizing branded sales is the entire point).",
      alternatives: "A controlled store trial: launch the premium range in 10 stores matched to 10 control stores and measure: (1) premium range gross margin vs. target, (2) branded volume change in trial vs. control stores (WTP revealed, not stated), (3) mid-tier volume change in trial vs. control. This tests all three assumptions simultaneously with real behavior rather than stated intentions — but takes 12–16 weeks and risks copying by competitors."
    },
    rubric: [
      { id: "ab-050-r1", text: "For assumption 1: specifies co-manufacturer RFQ as the validation test with a specific COGS threshold" },
      { id: "ab-050-r2", text: "For assumption 2: uses transaction data or competitor analogues, not just stated-preference survey" },
      { id: "ab-050-r3", text: "For assumption 3: uses internal category history (analogous categories) to measure cannibalization" },
      { id: "ab-050-r4", text: "Specifies a quantitative decision rule (rejection threshold) for each assumption" },
      { id: "ab-050-r5", text: "Notes that cannibalization of branded sales is desirable, and only mid-tier cannibalization is harmful" },
      { id: "ab-050-r6", text: "Proposes an integrated validation approach (all three tested in parallel or via store trial)" }
    ]
  }
];
