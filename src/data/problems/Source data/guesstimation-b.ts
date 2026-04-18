import type { Problem } from '@/types';

export const guesstimationProblemsB: Problem[] = [

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
      "100 exabytes/month = 100 × 10^18 bytes × 8 bits/byte ÷ (30 × 24 × 3600 s) ≈ 2.5 × 10^14 bits/second. Each bit ≈ 1 electron (in a wire, an electron travels ~1 mm/s but the signal travels at ~2/3 c). Electrons in a 1-meter wire: use the electron density approach. Final answer is in the range of 50 grams — an often-cited figure is about 50-80 grams."
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
