import type { Module } from '@/types';

export const problemStructuringModules: Module[] = [
  // module 1.1
  {
    id: "1.1",
    trackId: "problem-structuring",
    title: "Why Structure Matters",
    hook: `A hospital's infection rate is rising. The administrator calls a meeting. For two hours, people debate hand-washing protocols, staffing levels, cleaning schedules, and ventilation — cycling back over the same ground repeatedly. At the end: no decision, a follow-up meeting scheduled, and the infection rate still climbing. The problem wasn't a shortage of ideas. It was the absence of structure. Without a shared framework for what question they were actually trying to answer, every voice added noise instead of signal.`,
    concept: `## The Hidden Cost of Unstructured Thinking

Most people believe that thinking harder leads to better answers. But there is a more fundamental variable: how you organize your thinking before you begin. Structure is not a constraint on creativity — it is the scaffold that makes rigorous creativity possible.

### What Unstructured Thinking Actually Looks Like

When people tackle a complex problem without structure, they tend to:

- **Anchor on the first plausible cause** and build a case for it, unconsciously filtering out disconfirming evidence
- **Conflate symptoms with root causes** — treating the visible problem (infections rising) as though it *is* the problem, when it is merely a signal that some underlying mechanism has changed
- **Cycle through the same handful of ideas** without realizing it, because there is no map of what has and hasn't been considered
- **Mistake activity for progress** — more conversation, more data requests, more meetings — without movement toward resolution

The psychologist Daniel Kahneman calls this "substituting an easier question for the harder one." When a problem feels intractable, the brain quietly switches to a related but simpler question it *can* answer, and we don't notice the swap.

### What Structure Actually Does

Structure does four things that unaided intuition cannot reliably do:

**1. Separates diagnosis from prescription.** Before asking "what should we do?" you must first answer "what is actually happening and why?" These are different cognitive tasks. Mixing them creates solutions chasing the wrong problem.

**2. Makes your thinking auditable.** If you cannot show someone the steps from observation to conclusion, you cannot verify whether those steps are valid. Structure creates a chain of reasoning that can be inspected, challenged, and improved.

**3. Manages cognitive load.** Working memory is limited. A written, organized breakdown of a problem frees mental bandwidth to think about each piece deeply rather than trying to juggle everything at once.

**4. Surfaces gaps.** An unstructured list of factors may feel complete. A structured breakdown makes it immediately visible when a whole category is missing.

### The Polya Parallel

George Polya, the mathematician, spent decades studying how good problem-solvers think. His conclusion in *How to Solve It* (1945): experts don't just "think harder" — they follow a sequence. Understand the problem. Devise a plan. Carry out the plan. Look back. The sequence is elementary, but the discipline of following it separates those who make progress from those who spin.

The insight isn't that Polya's four steps are magic. It's that *having* steps — committing to an order of operations — prevents the most common failure modes: jumping to solutions before understanding the problem, abandoning approaches prematurely, and never checking whether your answer actually addresses what was asked.

### The Consulting Analogy

McKinsey's problem-solving approach — popularized by Barbara Minto in *The Pyramid Principle* — starts with a deceptively simple requirement: define the problem before solving it. Not sketch the problem. Not gesture at the problem. Define it: What decision needs to be made? By whom? With what information? By when?

This sounds bureaucratic until you realize that most workplace "problems" are actually arguments about the answer to a question no one has explicitly stated. Structuring forces that question into the open.

### Structure Is Not a Formula

A critical misconception: structure means using a pre-built framework (SWOT, 5 Forces, 2x2 matrix). These tools are useful shortcuts, but they are not structure itself. Structure is the underlying discipline of:

- Making your decomposition of a problem explicit
- Ensuring the pieces are logically related
- Checking that the pieces are complete
- Keeping diagnostic work separate from solution work

A SWOT analysis can be done with or without structure. The difference is whether you've first confirmed that the strengths/weaknesses/opportunities/threats framing actually fits the decision at hand.

### The Real Payoff

The hospital administrator who pauses the meeting and says "Before we discuss solutions, let's agree on what the root cause might be — and let's list out *all* the categories of possible cause systematically" changes the entire trajectory. Not because the list contains a magic answer, but because it forces the group to be exhaustive rather than reactive, and to separate what they know from what they're assuming.

That pause — that structural move — is learnable. And once learned, it is one of the highest-leverage habits in analytical work.`,
    deepDive: `## How Structure Fails — and How to Make It Work

Understanding why structure matters is necessary but not sufficient. The harder skill is knowing *how* to apply it under the messy conditions of real problems: time pressure, incomplete information, political dynamics, and genuine uncertainty.

### The Three Structural Moves

Every structured problem-solving approach, regardless of its specific framework, relies on three core moves:

**Move 1: Problem framing.** What is the actual question? Not the presenting complaint, but the decision that needs to be made. Good framing specifies: the decision-maker, the decision options, the criteria for a good answer, and the constraints (time, resources, information available).

**Move 2: Decomposition.** Break the problem into components that are logically independent. The gold standard is MECE — Mutually Exclusive, Collectively Exhaustive (covered in Module 1.2). The goal is to ensure you've covered the problem space without double-counting.

**Move 3: Prioritization.** Not all components are equally important or equally uncertain. Good structure includes a hypothesis about where to look first, based on what matters most and what you know least.

### The Minto Pyramid

Barbara Minto's *Pyramid Principle* (developed at McKinsey, published 1987) offers a specific structural model: every document or argument should be organized as a pyramid. The apex is the single governing question or recommendation. The layer below it contains the key supporting arguments. Each of those is supported by the layer below it, and so on.

The power of the pyramid is that it forces you to answer: what is the *one thing* this analysis says? And does every piece of evidence support that one thing, or am I hedging?

The limitation: the pyramid is a *communication* structure, not a *discovery* structure. It's how you present findings, not necessarily how you find them. Imposing pyramid structure too early can prematurely close off hypotheses.

### Hypothesis-First vs. Data-First

There are two broad approaches to structured problem-solving:

**Hypothesis-first (deductive):** Formulate a specific hypothesis about the root cause or solution, then gather targeted evidence to confirm or disconfirm it. This is faster when you have domain expertise. It's the approach McKinsey famously uses: start with the answer.

**Data-first (inductive):** Gather and organize available evidence, then let patterns suggest hypotheses. This is safer when you genuinely don't know what to expect, or when premature hypotheses could create confirmation bias.

Most real analytical work oscillates between both: form a hypothesis early to focus data-gathering, but remain genuinely open to revision when the data contradicts the hypothesis.

### Failure Mode 1: Fake Structure

The most dangerous failure is the appearance of structure without its substance. A list of bullet points is not a structure. A 2x2 matrix filled with vague labels is not a structure. A PowerPoint deck organized by business unit rather than by logical question is not a structure.

Fake structure is worse than no structure because it produces false confidence. It feels organized. It looks professional. But it obscures rather than clarifies the underlying logic.

The test: can you explain, for each element in your breakdown, why it is distinct from every other element, and why together they cover the full problem space? If not, the structure is fake.

### Failure Mode 2: Premature Commitment

Choosing a framework before understanding the problem. If your company's revenue is declining, you might be tempted to immediately run a "profitability framework" (revenue vs. cost breakdown). But if the real issue is competitive positioning, that framework produces a precise answer to the wrong question.

The fix: always spend time in the framing phase asking "what would have to be true for this framework to be the right one?"

### Failure Mode 3: Ignoring the Human System

Problems don't exist in the abstract. They exist in organizations, relationships, and incentive structures. A technically perfect problem structure that ignores political dynamics will produce recommendations that die on the vine. Good problem structuring includes mapping: who needs to decide, who has the relevant information, and whose support is needed for action.

### When to Trust Intuition Instead

Structure is not always the right tool. For simple, routine decisions with well-understood cause-and-effect relationships, structured analysis is overkill and may actually slow you down. Structure earns its cost on complex problems where: (1) the stakes are high enough to warrant careful analysis, (2) the problem has multiple interacting components, (3) multiple people need to agree on a course of action, or (4) you need to be able to explain your reasoning.

Knowing when *not* to structure is part of the skill.`,
    workedExamples: [
      {
        title: "Restaurant Revenue Decline",
        problem: "A restaurant owner notices revenue has dropped 20% over the past three months compared to the same period last year. She asks her manager to \"figure out what's going wrong.\"",
        walkthrough: `**Step 1: Restate the question precisely.**

Before doing anything, clarify what question actually needs answering. "What's going wrong" is too vague. A better formulation: *"What is the primary driver of the 20% revenue decline, and is it something within our control to address?"*

This restatement matters because it separates diagnosis (what's driving it?) from feasibility (can we fix it?).

**Step 2: Decompose revenue into its components.**

Revenue = (Number of covers) × (Average spend per cover)

This is a structural move: it splits one number into two that have different causes and different solutions. A drop in covers suggests a traffic/acquisition problem. A drop in average spend suggests a menu or upsell problem.

**Step 3: Look at the data with the structure in mind.**

Suppose the data shows: covers are down 18%, average spend is roughly flat. The problem is almost entirely in covers (traffic), not spend.

**Step 4: Now decompose covers.**

Covers = (New customers) + (Returning customers)

Suppose: new customers are roughly flat; returning customers are down sharply.

This is now a much more specific problem: *"Why are existing customers coming back less frequently?"*

**Step 5: Generate hypotheses for that specific question.**

- Quality has declined
- A competitor has opened nearby
- Pricing has increased and customers are reducing frequency
- A specific menu change has disappointed regulars

**Step 6: Identify the fastest test for each hypothesis.**

- Quality: check recent review trends on Google/Yelp, run a customer survey
- Competitor: check Google Maps for new openings in the area
- Pricing: compare current menu prices to 12 months ago
- Menu change: look at when the decline started relative to when menu changes occurred

**What structure added here:** By decomposing before hypothesizing, we avoided spending time investigating the wrong level of the problem (e.g., spending two weeks analyzing menu pricing when the real issue was a new competitor). The structure pointed us toward the right question before we spent resources.`,
        commonMistakes: `**Common mistake:** Jumping immediately to "let's survey customers" or "let's look at Yelp reviews" without first decomposing the revenue drivers. This produces information but not direction — you end up with a pile of feedback that's hard to act on because you don't know what you're looking for.

The structural move (revenue → covers → new vs. returning) takes five minutes and saves hours of unfocused analysis.`,
      },
      {
        title: "Why My Presentation Was Ignored",
        problem: "A product manager prepared a detailed 40-slide analysis recommending a major feature investment. The leadership team listened politely and then continued with their original plan. She wants to understand why.",
        walkthrough: `**Step 1: Resist the first hypothesis.**

The natural, unstructured reaction is to assume the audience was wrong, or that they had a political agenda, or that they "just don't get it." These may be true, but anchoring on them prevents diagnosis.

**Step 2: Frame the question correctly.**

The question is not "why was I ignored?" (which invites grievance) but: *"What caused the gap between my recommendation and their decision?"*

**Step 3: Decompose possible causes.**

A recommendation fails to land for one of three reasons:
1. **The problem framing was different** — they were answering a different question than she was
2. **The evidence was insufficient or unconvincing** — they weren't persuaded by the data
3. **The presentation structure made the conclusion hard to reach** — they got lost or disengaged before the key argument

These are mutually exclusive and together cover the main possibility space.

**Step 4: Apply the structure to the specific situation.**

- On framing: Did she confirm with leadership beforehand what decision they were actually trying to make? (If they were asking "should we do X or Y this quarter?" and her analysis addressed a 3-year horizon, there's a framing mismatch.)
- On evidence: Did her analysis address the concerns that leadership cares most about? (If they weight competitive risk above revenue opportunity, and her analysis focused on revenue, she answered a different question.)
- On structure: Did she lead with the recommendation or bury it? (Minto's principle: state the answer first. If the conclusion was on slide 38, most people never got there.)

**Step 5: Check the framing question directly.**

She goes back to the meeting notes. Leadership's stated concern before the meeting was: "We need to prioritize this quarter given engineering capacity." Her analysis recommended a multi-quarter investment without addressing the capacity constraint.

**Diagnosis:** Framing mismatch. She analyzed "should we build this?" when the real question was "given constraints, what's the highest priority use of the next sprint?"

**Step 6: What changes next time?**

Before preparing analysis, confirm the specific decision to be made, the constraints that are non-negotiable, and the criteria leadership will use to evaluate options. Structure your analysis around their question, not a general version of it.`,
        commonMistakes: `**Common mistake:** Treating a failed recommendation as primarily a persuasion problem ("I need better slides") rather than a structure problem ("I may have analyzed the wrong question"). Better visuals on a misframed analysis will not save it.

The structural discipline here is the same as the restaurant example: decompose possible causes before hypothesizing, so you solve the real problem rather than the most visible one.`,
      },
    ],
    guidedProblems: ["ps-001", "ps-002", "ps-003"],
    takeaways: [
      "Before generating solutions, write down the specific question you are trying to answer — not the presenting complaint, but the decision that needs to be made.",
      "Separate diagnostic work (what is happening and why) from solution work (what should we do). Mixing them produces solutions for the wrong problem.",
      "Use decomposition to map the problem space before hypothesizing — this prevents anchoring on the first plausible explanation.",
      "When a structured analysis fails to persuade, diagnose the gap: framing mismatch, insufficient evidence, or structural clarity — not just poor presentation.",
    ],
    deeperReading: [
      { title: "How to Solve It", author: "George Polya" },
      { title: "The Pyramid Principle: Logic in Writing and Thinking", author: "Barbara Minto" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
      { title: "The McKinsey Way", author: "Ethan Rasiel" },
    ],
    recommendedNext: "1.2",
  },

  // module 1.2
  {
    id: "1.2",
    trackId: "problem-structuring",
    title: "MECE Breakdowns",
    hook: `A consulting team spent three weeks analyzing a client's cost structure. Their final report categorized costs under "Operations," "Infrastructure," and "Support Functions." When the CFO reviewed it, she pointed out that IT costs appeared in all three categories, depending on who had done the interview. The analysis was useless — not because the data was wrong, but because the categories overlapped. They had to start over. Three weeks, gone. The cause: no one had verified the breakdown was MECE.`,
    concept: `## MECE: The Foundation of Clean Analysis

MECE — Mutually Exclusive, Collectively Exhaustive — is the single most important structural principle in problem decomposition. It sounds academic until you encounter its absence: overlapping categories, gaps in coverage, double-counted numbers. MECE is what separates analysis that can be acted on from analysis that generates confusion.

### What It Means, Precisely

**Mutually Exclusive** means each element of your breakdown belongs to exactly one category. There is no overlap. An item cannot be in two buckets simultaneously.

**Collectively Exhaustive** means the categories together cover the entire problem space. Nothing is left out. Every possible instance of the thing you're analyzing fits into one of your categories.

Together, these two conditions mean your breakdown is a *partition* — a clean division of a whole into non-overlapping, complete parts.

### Why Both Conditions Are Necessary

Violating mutual exclusivity produces **double-counting**: the same cost appears in two buckets, the same root cause is counted twice, the same customer segment is addressed by two strategies. This corrupts analysis.

Violating collective exhaustiveness produces **blind spots**: entire categories of cause, cost, or opportunity are invisible because they don't fit your framework. This leads to incomplete solutions that feel comprehensive.

The two conditions work together. A breakdown can be mutually exclusive but not collectively exhaustive (covers only part of the space, cleanly). It can be collectively exhaustive but not mutually exclusive (covers everything, but with overlaps). Only when both hold do you have a reliable analytical foundation.

### The Set Theory Underpinning

MECE is essentially applied set theory. If you have a universe U (say, "all reasons our revenue might decline") and you define categories A, B, C... then:

- Mutual exclusivity: A ∩ B = ∅, A ∩ C = ∅, B ∩ C = ∅ (no overlaps)
- Collective exhaustiveness: A ∪ B ∪ C = U (everything is covered)

This framing makes it easy to test a proposed breakdown: draw a Venn diagram in your head. Do any circles overlap? Is there space outside all circles?

### Common MECE Structures

Some breakdowns naturally lend themselves to MECE:

**Mathematical identities** are always MECE by construction:
- Revenue = Price × Volume
- Profit = Revenue − Cost
- Market share = Our sales / Total market sales

Because these are definitional relationships, the components cannot overlap and together must sum to the whole.

**Process steps** can be MECE if each step is discrete and together they span the full process:
- Awareness → Consideration → Purchase → Retention (a customer journey)
- Input → Processing → Output (a generic process)

**Physical or organizational categories** can be MECE if the categories are defined precisely:
- Geography by region (if regions don't overlap and all territories are assigned)
- Customer segments by industry vertical (if companies can only be in one vertical)

**Logical dichotomies** are the simplest MECE structure:
- Internal factors / External factors
- Controllable / Not controllable
- Demand-side / Supply-side

### Where MECE Breaks Down in Practice

MECE is a standard, not a guarantee. Real-world breakdowns face several tensions:

**The granularity problem:** A breakdown can be MECE at one level of specificity and non-MECE at another. "Large companies and small companies" is MECE if you define the cutoff clearly. But "large companies, medium companies, and small companies" requires precise definitions to avoid overlap at the boundary.

**The "other" trap:** Adding an "other/miscellaneous" category makes any breakdown trivially collectively exhaustive, but the "other" bucket is analytically useless. A good breakdown should minimize what falls into "other."

**Forced MECE:** Sometimes a natural phenomenon doesn't decompose cleanly. Costs can genuinely be shared across functions. A customer's behavior can genuinely span multiple segments. Forcing MECE on a fundamentally overlapping phenomenon produces categories that misrepresent reality.

### MECE as a Discipline, Not a Checklist

The point of MECE is not to pass a formal test. It's to cultivate a habit of thinking: whenever you decompose a problem, pause and ask: "Are these categories truly separate? Have I covered everything?" That pause catches errors that would otherwise go unnoticed until the analysis fails.

Barbara Minto's original formulation in *The Pyramid Principle* emphasized MECE as a test for whether your supporting arguments genuinely add up to your main claim. If two supporting points are really saying the same thing (overlap), or if there's an obvious counter-argument that none of your points address (gap), your pyramid fails the MECE test.

### MECE and Cognitive Efficiency

Beyond analytical integrity, MECE serves a cognitive function: it makes problem spaces navigable. When you know your categories are exhaustive, you can work through them systematically and stop when you've covered all of them. Without MECE, you're never sure you've finished — which is exactly the condition that produces three-hour meetings cycling over the same ground.`,
    deepDive: `## Building and Testing MECE Breakdowns

### The Three-Step Test

For any proposed breakdown, apply three questions in sequence:

**1. The overlap test:** Take any two categories in your breakdown. Can you think of a real-world item that plausibly belongs to both? If yes, you have a mutual exclusivity violation. Common sources of overlap: vague category definitions, categories defined by different principles (one by geography, one by size, one by behavior), and categories inherited from an organizational structure that doesn't reflect the actual phenomenon.

**2. The coverage test:** Imagine the most unusual, edge-case instance of the thing you're analyzing. Does it fit into one of your categories? If not, you have a collective exhaustiveness gap. Better: think about the breakdown from the opposite direction — what are the *known* ways this phenomenon varies, and does your breakdown capture all of them?

**3. The principle test:** Is your breakdown organized around a single principle, or are categories defined by different logics mixed together? "Customers by geography" and "customers by purchase frequency" and "enterprise customers" in the same breakdown mixes three different organizing principles. This almost always produces overlap.

### The Top-Down vs. Bottom-Up Construction

**Top-down:** Start with a high-level MECE partition, then sub-divide each category using a nested MECE partition. This produces a tree structure where every level is MECE within itself. The advantage: systematically ensures coverage. The risk: the top-level partition may not be the most analytically useful one for the specific problem.

**Bottom-up:** Start by listing all known components (individual cost items, all identified root causes, all proposed solutions), then group them into categories. The advantage: starts from what you actually know. The risk: the categories that naturally emerge may not be MECE — groups may overlap, or the grouping principle may shift partway through.

For most problems, the hybrid approach works best: use a standard top-level partition as a starting scaffold, then check what falls out below it against what you know from the bottom up.

### Common MECE Frameworks and Their Limitations

**McKinsey's standard business decomposition:**
- Revenue / Cost (for profitability problems)
- External / Internal (for diagnosis problems)
- Short-term / Long-term (for prioritization problems)

These are useful starting points but frequently need adaptation. "External/Internal" is MECE conceptually, but in practice, many factors (like price) involve both internal decisions and external market conditions.

**The 4Ps (Product, Price, Place, Promotion):** A common marketing framework. It is MECE in the sense that these four categories collectively describe the marketing mix, but "Place" and "Promotion" can overlap (in-store promotions), and "Product" and "Price" interact (premium positioning). Use it as a checklist, not a watertight partition.

**The 3Cs (Company, Customer, Competitor):** A useful top-level MECE structure for competitive analysis. Genuinely non-overlapping and together covers the main actors in a competitive situation.

### Failure Mode: MECE Theater

The most common failure in professional settings: people learn the word "MECE," declare their breakdowns "MECE," and never actually check. The theater of structure without its substance.

Symptoms of MECE theater:
- Categories defined vaguely enough that any item could fit in multiple places
- A breakdown that was taken from a standard template without verifying it fits the specific problem
- "Other" as a catch-all that contains 30% of the cases
- No one in the room can explain why a specific borderline item goes in category A rather than category B

The fix: force specificity. For each category, write one sentence defining what is included and what is excluded. If you can't write that sentence, the category isn't well-defined.

### When Good Enough Is Enough

Perfect MECE is rarely achievable on complex real-world problems. The practical standard is: MECE enough that the breakdown doesn't actively mislead. If "other" is 5% of cases and genuinely miscellaneous, that's fine. If the categories overlap in one minor edge case that doesn't affect the main analysis, that's fine.

The key question: does a failure of MECE in this breakdown affect the conclusions you're going to draw? If the overlap is in a region of the problem space you're not going to analyze, it's a cosmetic flaw. If the overlap is at the heart of your analysis, it's fatal.`,
    workedExamples: [
      {
        title: "Decomposing Employee Attrition",
        problem: "An HR director wants to understand why the company's annual employee turnover is 22% — well above the industry average of 14%. She asks her team to break down the causes so they can target interventions.",
        walkthrough: `**Step 1: Identify the phenomenon to decompose.**

The phenomenon is "employee departures." Before proposing categories, ask: what organizing principle will produce a MECE breakdown?

**Step 2: Choose an organizing principle.**

Option A: Voluntary vs. Involuntary departures
- Voluntary: employee chose to leave
- Involuntary: company ended the relationship

This is a logical dichotomy — genuinely MECE. Every departure is either voluntary or involuntary. No departure is both.

Option B: Functional area (Sales, Engineering, Operations...)
- This is useful for identifying *where* attrition is concentrated, but it's a different question. Apply after Option A to drill down.

**Step 3: Apply the first level and look at the data.**

Suppose: 18% of the 22% is voluntary; 4% is involuntary. The problem is primarily voluntary departures. Now apply a second-level MECE breakdown to voluntary departures only.

**Step 4: Decompose voluntary departures.**

A MECE breakdown of reasons employees voluntarily leave:
- Compensation and benefits (left for better pay/benefits elsewhere)
- Career development (left because advancement was limited here)
- Manager relationship (left due to direct manager issues)
- Work environment (left due to culture, flexibility, workload)
- External opportunity (left for a specific role they wouldn't have sought otherwise)

**Step 5: Test for MECE.**

Overlap test: Can one departure be in two categories? Yes — someone might leave for both better pay AND better career development. This is a real tension. The solution: for classification purposes, assign each departure to its *primary* reason (requiring exit interview data to be coded to a single primary driver).

Coverage test: Is there a common reason we've missed? What about "personal circumstances" (moving cities, family, health)? This doesn't fit any of the five categories cleanly. Add: "Personal/life circumstances" as a sixth category with a clear definition of what it includes.

**Step 6: Apply and analyze.**

Suppose exit interview data shows: 35% compensation, 28% career development, 18% manager relationship, 12% work environment, 4% external opportunity, 3% personal.

Now the breakdown is actionable. The top two drivers (compensation + career development) account for 63% of voluntary attrition. A focused intervention in those two areas addresses the majority of the problem.

**What MECE added:** Without the MECE discipline, HR might have run surveys asking about all factors simultaneously and gotten responses inflated by social desirability or recency bias. The MECE breakdown forced a primary-reason coding that produces actionable data rather than "everything matters a little."`,
        commonMistakes: `**Common mistake:** Skipping the organizing principle and immediately listing causes: "pay, manager issues, culture, remote work policy, career growth, benefits, company direction..." This produces a list that may cover the space but certainly has overlaps (culture and manager issues overlap significantly) and no structure that guides analysis.

The discipline is: choose a principle first, construct categories from it, then test.`,
      },
      {
        title: "Budgeting for a Product Launch",
        problem: "A startup founder needs to break down the budget for a new product launch into categories that will be tracked monthly. She wants to make sure she has accounted for every major spend area.",
        walkthrough: `**Step 1: Define the scope of the breakdown.**

The universe: "all money spent on the product launch." The purpose: monthly tracking and budget control.

**Step 2: Propose a first-cut MECE breakdown.**

By business function:
- Product development (building/finishing the product)
- Marketing and demand generation (creating awareness and leads)
- Sales and customer acquisition (converting leads to customers)
- Operations and infrastructure (delivering and supporting the product)
- General and administrative (overhead not allocated above)

**Step 3: Test for mutual exclusivity.**

Overlap test: Does "marketing" overlap with "sales"? In many companies, yes — SDR salaries might be "sales" or "marketing." The fix: define a clear rule. "Marketing covers anything before a qualified lead is created. Sales covers anything after." Write this definition down. Now the boundary is explicit.

Does "operations" overlap with "product development"? Possibly — QA engineers could be in either. Define: "Product development covers all work done before launch. Operations covers all work done after launch." Clear boundary.

**Step 4: Test for collective exhaustiveness.**

Coverage test: Go through known spend items and check that each fits somewhere:
- Office space / utilities → G&A ✓
- Software licenses for developers → Product development ✓
- PR agency for launch → Marketing ✓
- Conference sponsorship → Marketing ✓
- Customer success hires → Operations ✓
- Legal fees for IP → G&A ✓
- Freelance copywriter → Marketing ✓

What about: a contractor who does both product work and post-launch support? → Needs to be allocated by time. The MECE breakdown reveals the allocation rule needed.

**Step 5: Add a sub-level for the largest categories.**

Marketing is 40% of the budget. Apply a nested MECE breakdown:
- Paid acquisition (search, social, display ads)
- Content and SEO
- Events and PR
- Design and creative

Test: mutually exclusive (each spend item has a clear home), collectively exhaustive (covers all marketing spend categories).

**Step 6: Validate with a different lens.**

Check: does this breakdown hold at the level of vendors/contractors? Take the actual vendor list and verify each vendor maps to exactly one category. If any vendor doesn't map cleanly, either the category definitions need sharpening or the vendor's work spans categories and needs to be split.

**What MECE added:** A budget that is MECE can be aggregated and compared month-to-month without double-counting. A non-MECE budget produces totals that don't match actuals, confusion about what's included where, and arguments in monthly reviews about which line items belong where.`,
        commonMistakes: `**Common mistakes in budget breakdowns:**

1. **Mixing time-based and function-based categories:** "Pre-launch, marketing, sales, post-launch" — "pre-launch" and "post-launch" are time-based; "marketing" and "sales" are function-based. An expense can be both "marketing" and "pre-launch." Not MECE.

2. **Skipping the definition step:** Assuming everyone agrees what "operations" includes without writing it down. The first month of actuals reveals everyone had a different mental model.

3. **Treating the framework as fixed:** Starting with a template from a previous project without verifying it fits the current product's cost structure. If this is a software product with significant hosting costs, "operations/infrastructure" needs to be a first-class category, not a sub-line.`,
      },
    ],
    guidedProblems: ["ps-004", "ps-005", "ps-006"],
    takeaways: [
      "Before proposing a breakdown, choose a single organizing principle — mixing multiple principles (geography, behavior, size) in the same level creates overlap.",
      "Test every breakdown with two checks: (1) can any real item belong to two categories? (2) can you think of an item that fits in none?",
      "Write a one-sentence definition for each category specifying what is included and what is excluded — vague categories are the primary cause of MECE failure in practice.",
      "When perfect MECE is impossible (overlapping real-world phenomena), define explicit allocation rules rather than pretending the overlap doesn't exist.",
    ],
    deeperReading: [
      { title: "The Pyramid Principle: Logic in Writing and Thinking", author: "Barbara Minto" },
      { title: "The McKinsey Way", author: "Ethan Rasiel" },
      { title: "Case in Point: Complete Case Interview Preparation", author: "Marc Cosentino" },
      { title: "Thinking in Systems", author: "Donella Meadows" },
    ],
    recommendedNext: "1.3",
  },

  // module 1.3
  {
    id: "1.3",
    trackId: "problem-structuring",
    title: "Issue Trees",
    hook: `A management team had been losing sleep over a competitor's new low-price offering. For months, their response was to discuss the threat in general terms — "we need to differentiate," "maybe we should lower prices too," "customer retention is crucial." Nine months in, market share had declined another 4% and no coherent strategy existed. When a new analyst joined and asked "can we draw an issue tree for this problem?", the room went quiet. Within 90 minutes, they had identified the precise two sub-questions that actually needed answering — questions that had been buried under months of unfocused discussion.`,
    concept: `## Issue Trees: Making Complexity Navigable

An issue tree is a hierarchical decomposition of a problem into its constituent questions. It transforms an amorphous question — "why are we losing market share?" — into a structured map of every sub-question that, if answered, would collectively answer the main question.

The issue tree is perhaps the most practically powerful tool in analytical problem-solving, because it solves the most common failure in tackling complex problems: not knowing where to start, or worse, not knowing whether you've actually finished.

### The Core Idea

Every complex question can be broken down into more specific questions. Those specific questions can be broken down further. At some level of specificity, the sub-questions are answerable by a straightforward analysis or data lookup. The issue tree maps this hierarchy.

A simple example: "Is our new product commercially viable?" breaks into:
- Is there sufficient market demand?
- Can we deliver it at a competitive cost?
- Can we reach the target customer effectively?
- What are the key risks to the business model?

Each of those breaks into further sub-questions. "Is there sufficient market demand?" becomes:
- How large is the total addressable market?
- What share could we realistically capture?
- Is the market growing or declining?

And so on, until each leaf node is a question answerable with specific analysis.

### Why It Works: The Logic of Decomposition

The issue tree works because of a logical property: if you answer all the sub-questions at any given level, you have fully answered the parent question. This is the same MECE principle applied to questions rather than categories.

This property does two things. First, it makes the problem finite: instead of an open-ended search for "what do we need to know?", you have a defined list. Second, it makes progress visible: you can track which sub-questions are answered, partially answered, or unanswered — and see how close you are to answering the parent question.

### Two Types of Issue Trees

**Issue trees (diagnostic):** Used when you don't know the answer and need to find it. The tree maps all possible explanations for an observation. Example: "Why did profit decline?" The tree covers all possible drivers — revenue changes, cost changes — and sub-divides until you can identify which specific driver explains the observed decline.

**Hypothesis trees (solution-seeking):** Used when you already have a hypothesis and need to test it, or when you need to evaluate options. Example: "Should we enter the Japanese market?" The tree maps all the key questions that must be answered to make that decision. The structure is designed to confirm or disconfirm the hypothesis efficiently.

Victor Cheng, former McKinsey consultant and author of *Case Interview Secrets*, distinguishes these as "issue trees" (problem diagnosis) versus "hypothesis trees" (solution evaluation). In practice, most real analyses move between both modes.

### The Consulting Connection

The issue tree is the backbone of the case interview format used by McKinsey, Bain, BCG, and similar firms. When an interviewer says "our client's profits are declining," they want to see a candidate rapidly construct a mental issue tree that structures the problem, then move systematically through it using data provided. The speed of construction, the MECE quality of the decomposition, and the ability to prioritize which branches to explore first — these are exactly what's being assessed.

This is not a coincidence. The case interview tests the skill that consulting work requires most: turning an ambiguous problem into a structured analysis quickly and reliably.

### The Power of the Hypothesis-First Variant

One of McKinsey's most-discussed practices is "leading with the answer": before you've done the full analysis, form a hypothesis about what the answer is, and structure your work to test it. This sounds presumptuous, but it has a strong rationale.

If you enter an analysis with no hypothesis, you have no basis for prioritizing which branches of the issue tree to explore first. You'll work through the tree systematically from left to right, spending equal time on branches that are almost certainly irrelevant and branches that are likely critical. This is slow and expensive.

If you enter with a hypothesis (even a weak one based on pattern recognition and domain knowledge), you can prioritize the branches that would confirm or disconfirm it most quickly. You focus effort where it matters. And if the hypothesis is wrong, the tree structure ensures you don't miss the correct explanation — you just move to the next branch.

The hypothesis-first approach requires intellectual honesty: you must be willing to abandon the hypothesis when evidence doesn't support it. Consultants who fall in love with their hypotheses produce the phenomenon of "analysis to support a conclusion already reached." The tree is the safeguard: it forces you to work through all the relevant branches, not just the ones supporting your preferred answer.

### Analogy: The Medical Diagnostic Process

A physician examining a patient with unexplained fatigue constructs, mentally, something like an issue tree:

- Could this be metabolic? (Thyroid, diabetes, anemia?)
- Could this be psychological? (Depression, anxiety, sleep disorder?)
- Could this be infectious? (Chronic infection, post-viral syndrome?)
- Could this be cardiovascular? (Heart failure, arrhythmia?)

This isn't just a list. It's a MECE decomposition of possible causes, organized by medical system. The physician then prioritizes tests based on prior probability and the cost of missing a serious diagnosis. This is hypothesis-first issue tree navigation in clinical practice.

The experienced physician is faster not because they know more facts, but because their issue tree is more refined — they've seen hundreds of patients and have better priors for which branches are worth pursuing first.`,
    deepDive: `## Building Issue Trees That Actually Work

### The Construction Process

**Step 1: Define the root question precisely.** The root question should be the exact decision that needs to be made or the exact observation that needs explaining. Not "what's wrong with the business?" but "why did operating margin decline from 18% to 12% in the past six months?" Precision at the root determines whether the tree branches in a useful direction.

**Step 2: Apply a MECE breakdown at the first level.** The first-level breakdown should cover all possible explanations/components at the highest level of abstraction. For a profit decline problem, the first level is almost always: revenue drivers / cost drivers. This is MECE because profit = revenue − cost. Nothing else can explain a profit change.

**Step 3: Expand only the branches that need expansion.** If the first-level data shows revenue is flat and all cost increase is concentrated in one line item, only that cost branch needs expansion. Don't build out the full tree for completeness — build out branches where questions remain.

**Step 4: Stop when questions become answerable.** The tree is done when each leaf node is a question that can be answered with a specific analysis or data source. "Has raw material cost increased?" is answerable. "Are there cost issues?" is not.

**Step 5: Prioritize branches.** Before diving into analysis, annotate the tree with your hypothesis about which branches are most likely to explain the phenomenon. Start there. You're not committing to this being right — you're making the search efficient.

### Issue Tree vs. Brainstorm: The Key Difference

A brainstorm produces a list of ideas or factors. An issue tree produces a structured hierarchy of questions. The difference matters:

- A brainstorm is complete when the group runs out of ideas. An issue tree is complete when the MECE test passes at each level.
- A brainstorm can't tell you what's missing. An issue tree can, because gaps become structurally visible.
- A brainstorm output can't be easily prioritized. An issue tree output can, because the hierarchy shows which questions are upstream of others.

### The Three-Level Rule

For most business problems, three levels of the issue tree is sufficient to reach answerable leaf nodes. If you need five or six levels, the root question is probably too broad, or the problem genuinely requires deep technical expertise at lower levels.

Practical tip: keep the tree to three levels during the first-draft construction. If a branch is still unanswerable at level three, mark it for further expansion rather than trying to build the full depth immediately. Premature depth in one branch creates an imbalanced tree and wastes time.

### Failure Mode 1: Copying a Standard Framework Uncritically

The most common mistake among people learning issue trees is using a standard consulting framework (profitability framework, 3C framework, McKinsey 7S) as the issue tree without checking whether the framework fits the problem.

Standard frameworks are useful starting points, but they're generic. A profitability framework assumes the problem is about profit. A 3C framework assumes the relevant actors are company, customer, competitor. If the problem is about operational resilience, not profit, neither framework is right.

The discipline: start from the specific root question, build the first-level decomposition from logic (what categories of thing could cause this?), and only reach for a framework if it maps cleanly to what logic suggests.

### Failure Mode 2: Building Breadth Before Depth

A common error is building the entire first level and second level before going deep on any branch. This feels thorough but is often inefficient — you spend time building branches you'll never need because the answer is concentrated in one part of the tree.

The better approach: build the first level completely (for MECE), identify the most promising branch based on available data and your hypothesis, go deep on that branch first, then expand other branches only if the answer isn't found.

### Failure Mode 3: Losing the Link to the Root

As trees grow, it's easy to forget what the root question was. Analysts get absorbed in a particular branch (say, a detailed cost driver analysis) and the work starts to answer a sub-question that, it turns out, isn't actually material to the root question.

The fix: maintain a copy of the root question at the top of every working document. Before adding any analysis, ask: "how does this answer a question in my tree, and how does that question connect to the root?"

### When to Use a Hypothesis Tree Instead

If you already have a clear point of view on the answer — either from domain expertise, pattern matching to similar problems, or preliminary data — switch to hypothesis tree mode. The hypothesis tree starts with the proposed answer at the root and builds a tree of claims that, if true, would support the answer. Each leaf node is a claim that needs to be substantiated.

The difference in practice: issue trees are exploratory (where is the answer?), hypothesis trees are confirmatory (is this answer right?). Expert consultants often compress the two: generate a hypothesis quickly from pattern recognition, then build a hybrid tree that tests the hypothesis while leaving room to discover if it's wrong.`,
    workedExamples: [
      {
        title: "Declining Online Subscription Renewals",
        problem: "A SaaS company's annual subscription renewal rate has dropped from 85% to 72% over 18 months. Leadership needs to understand why before the next board meeting in three weeks.",
        walkthrough: `**Step 1: Define the root question precisely.**

"Why has the annual renewal rate declined from 85% to 72% over 18 months?"

This is a diagnostic (issue tree) question. We're looking for the cause, not evaluating a solution.

**Step 2: First-level MECE breakdown.**

What categories of thing can explain a renewal rate decline? Apply a logic-based decomposition:

- **Customer-side factors:** The customer's situation changed (financial, strategic, personnel)
- **Product-side factors:** The product's value delivery changed (functionality, reliability, usability)
- **Competitive factors:** A better alternative became available
- **Relationship/service factors:** The customer experience outside the product changed (support, success, onboarding)

Test: Are these MECE? Minimal overlap (a new competitor offering lower price spans competitive and customer-side, but can be assigned to competitive). Coverage: think of a common churn reason — "the champion left the company." That fits customer-side (personnel change). "Product is slow." Product-side. MECE passes.

**Step 3: Apply preliminary data to prioritize.**

Check available data before building further:
- Do churned customers cite a reason in exit surveys? (If 60% cite "we found a cheaper alternative," competitive is the primary branch.)
- Is churn concentrated in a specific customer cohort (size, industry, signup year)? (If newer customers churn at 35% but older customers churn at only 8%, the issue is onboarding/early value, not a competitor.)

Suppose data shows: churn is concentrated in customers who signed up in the past 12 months, and exit survey most common response is "didn't get value we expected."

**Step 4: Prioritize the product-side branch and expand it.**

"Product didn't deliver expected value" breaks into:
- **Expectation mismatch:** Were customers promised functionality that doesn't exist?
- **Adoption failure:** Did customers not use the product enough to get value?
- **Product quality:** Did the product fail to work as intended?

Check: In the 12-month cohort that churns, what is the feature adoption rate? (If only 20% of churned customers ever used more than two features, adoption failure is likely dominant over expectation mismatch.)

**Step 5: Go one level deeper on adoption failure.**

Why might customers fail to adopt?
- Onboarding is insufficient (no guided setup, no training)
- The product requires significant configuration before delivering value ("time-to-value" is too long)
- No internal champion driving adoption post-purchase
- Product is not integrated into workflows customers already use

**Step 6: Identify the answerable leaf nodes.**

Each of these can be answered with specific data or analysis:
- Onboarding: what does the onboarding funnel completion rate look like for churned vs. retained customers?
- Time-to-value: how many days between signup and first significant use for churned vs. retained?
- Champion: do churned accounts have a designated internal owner?
- Integration: what % of churned accounts used the API or integrations?

**Step 7: State the preliminary hypothesis.**

Based on what we've seen: "The primary driver of the renewal rate decline is adoption failure among new customers, specifically attributable to a long time-to-value and insufficient onboarding support."

This is testable. It implies specific fixes. And the issue tree ensures we haven't missed alternative explanations — we've checked competitive, customer-side, and relationship factors and found no strong signal there.`,
        commonMistakes: `**Common mistake:** Starting with "let's survey all churned customers" before building the issue tree. This produces undifferentiated feedback across all possible causes. The issue tree focuses the survey: you ask specifically about adoption, onboarding, and time-to-value because the tree told you those are the highest-priority branches to investigate.`,
      },
      {
        title: "Evaluating a Market Entry Decision",
        problem: "A mid-sized US software company is considering entering the German market. The CEO wants a structured analysis to decide whether to proceed, and if so, how.",
        walkthrough: `**Step 1: Recognize this is a hypothesis tree, not an issue tree.**

Unlike the churn problem (diagnostic), this is an evaluation problem. There's a proposed action: "Enter Germany." The tree should be structured to evaluate that hypothesis.

Root question: "Should we enter the German market, and if so, with what approach?"

**Step 2: First-level breakdown of what needs to be true.**

For market entry to be the right decision, all of the following need to be true (or mitigatable where false):
- **Market opportunity is sufficient:** There's meaningful demand for our product in Germany
- **We can win:** We have a sustainable competitive advantage in that market
- **We can deliver:** We can serve German customers at acceptable cost and quality
- **The economics work:** The investment required produces acceptable returns

Test: Are these MECE? These are the four fundamental conditions for any expansion decision. Nothing that would change the go/no-go decision is outside these four.

**Step 3: Expand each branch.**

Market opportunity:
- Total addressable market size in Germany
- Is demand growing or shrinking?
- Are there regulatory or cultural barriers to adoption?
- Is there demonstrated pull (existing inbound interest from Germany)?

We can win:
- Who are the incumbent competitors in Germany?
- What is their market position and customer loyalty?
- What is our differentiation relative to those competitors?
- Are there local-market advantages (language, compliance, relationships) that we'd need to overcome?

We can deliver:
- Do we need GDPR compliance? (We do. Are we compliant?)
- Do we need German-language support? What's the cost?
- What are the legal/entity requirements for operating in Germany?
- Do we have the team bandwidth for this?

Economics:
- What is the realistic customer acquisition cost in Germany?
- What is expected revenue per customer given local pricing norms?
- What is the capital requirement and payback period?
- What is the opportunity cost (what else could we invest this resource in)?

**Step 4: Identify the key uncertainties and highest-stakes branches.**

Two branches are particularly uncertain: market opportunity (we have limited German market data) and economics (CAC in a new geography is always uncertain). These should be investigated first.

Two branches are more knowable: GDPR compliance is binary and legal advice can resolve it quickly. Competitive landscape can be researched via public sources relatively easily.

**Step 5: Form working hypotheses for each branch.**

- Market opportunity: Strong — Germany has a large B2B software market, we have English-language inbound interest from two German enterprise prospects.
- Competitive: Moderate risk — there is one strong local competitor, but their product is older and customer reviews cite poor UX.
- Delivery: Moderate burden — GDPR requires some work but is not a blocker; German support would require a hire.
- Economics: Uncertain — without local market validation, payback period modeling is speculative.

**Step 6: Identify the decision-forcing question.**

If all other branches are positive, does the economics branch kill the decision? The answer: the CEO should not make a "proceed/don't proceed" decision without at least a pilot data point on German CAC. Recommendation: run a 90-day pilot with a small budget specifically to estimate CAC, then re-evaluate with real data.

The issue tree produced not just a go/no-go recommendation but a specific next step: what data do we need before deciding?`,
        commonMistakes: `**Common mistake:** Building the issue tree at the wrong level. A frequent error is expanding "competitive landscape" into 12 sub-questions while leaving "can we deliver" as a single unexamined node. The imbalanced tree reflects the analyst's existing knowledge (they know a lot about competitors) rather than where the genuine uncertainty lies.

Always expand the branches where uncertainty is highest, not where you happen to have the most data.`,
      },
    ],
    guidedProblems: ["ps-011", "ps-012", "ps-013"],
    takeaways: [
      "Start every issue tree by writing the root question precisely — vague root questions produce unfocused trees that branch in all directions simultaneously.",
      "Use issue trees (exploratory) when looking for a cause; switch to hypothesis trees (confirmatory) when you already have a plausible answer to test.",
      "Prioritize branches based on two factors: prior probability (what do you already know?) and stakes (what branches, if wrong, would most damage your recommendation?).",
      "When the tree reaches leaf nodes that are answerable with specific data or analysis, stop building and start investigating — the construction phase is over.",
    ],
    deeperReading: [
      { title: "Case Interview Secrets", author: "Victor Cheng" },
      { title: "The Pyramid Principle: Logic in Writing and Thinking", author: "Barbara Minto" },
      { title: "Case in Point: Complete Case Interview Preparation", author: "Marc Cosentino" },
      { title: "The McKinsey Mind", author: "Ethan Rasiel and Paul Friga" },
    ],
    recommendedNext: "1.4",
  },

  // module 1.4
  {
    id: "1.4",
    trackId: "problem-structuring",
    title: "Logic Trees",
    hook: `A product team was debating whether to rebuild their mobile app from scratch or continue patching the existing codebase. The discussion ran for months, with advocates on both sides citing costs, timelines, and risk. No one agreed. Then someone drew a simple diagram: "IF we rebuild, THEN costs are X, delivery is Y months, risk is Z. IF we patch, THEN costs are A, delivery is B months, risk is C. Our decision criterion is: lowest total cost of ownership over 3 years. Therefore..." Within one meeting, the team reached a conclusion. The decision hadn't changed — the logic structure had just made it visible.`,
    concept: `## Logic Trees: Following Chains of Cause and Consequence

Where issue trees map the structure of a *question*, logic trees map the structure of an *argument* or a *causal process*. A logic tree is a visual representation of if-then reasoning: if condition X is true, then consequence Y follows; if Y follows and condition Z also holds, then W is the conclusion.

Logic trees appear under several names — decision trees, causal diagrams, argument maps, influence diagrams — but they share a common underlying structure: nodes connected by logical or causal relationships, where the truth or value of a node is derived from the nodes that feed into it.

### The Two Primary Forms

**Causal chains:** Used to trace why something happened. "Customer satisfaction declined" → "because product delivery times increased" → "because the warehouse automation system failed" → "because the system wasn't maintained during the holiday hiring surge." Each arrow represents a causal link. Reading the chain backward gives you the root cause; reading it forward shows the propagation path.

**Decision trees:** Used to evaluate choices under uncertainty. A decision tree maps possible choices (decision nodes) and their uncertain consequences (chance nodes), producing a structure that shows the expected value of each option given a probability distribution over outcomes.

Both forms rely on the same underlying discipline: making logical relationships explicit rather than implicit.

### Why Explicit Logic Matters

Most human reasoning happens in implicit chains: "we should rebuild because patching is getting expensive." This compressed sentence contains several hidden premises: that the current patching cost will continue to escalate, that a rebuild is achievable within a reasonable budget, that the rebuild cost does not exceed the accumulated savings from stopping the patching. Each of these premises can be wrong.

When reasoning stays implicit, disagreements are difficult to resolve because people are often arguing about different hidden premises while appearing to argue about the same conclusion. Making the logic explicit — literally drawing the chain — surfaces the hidden premises and makes them debatable.

This is what happened in the mobile app example. The debate wasn't really about "rebuild vs. patch" as a philosophical position. It was about different beliefs about future patching cost trajectories, rebuild timelines, and discount rates. The logic tree made those beliefs explicit, which is what allowed the team to find the crux of the disagreement and resolve it with data.

### The If-Then Foundation

Every logical claim can be expressed as an if-then statement. "We should enter Germany" is short for "If the German market is large enough, and if we can win there, and if the economics work, then we should enter Germany." Each "if" is a premise that can be evaluated independently. If any premise is false, the conclusion may not follow — but now you know *which* premise to contest.

This structure, formalized, is the basis of deductive logic. A valid argument is one where the conclusion necessarily follows from the premises. The logic tree is a way to check whether your argument is valid by making the if-then structure visible.

### Causal Chains and Root Cause Analysis

In operational and engineering contexts, logic trees are used for root cause analysis (RCA). The most well-known form is the "5 Whys" technique: ask "why did this happen?" five times, each time going one level deeper in the causal chain. The purpose is to find the root cause — the upstream node in the causal chain that, if addressed, prevents the problem from recurring.

The 5 Whys is a simplified logic tree with exactly one branch at each level. The full version (used in Six Sigma, fault tree analysis, and reliability engineering) is a tree with multiple possible causes at each level, connected by AND/OR logic: the failure happens if cause A AND cause B are both present, or if cause C alone occurs.

The power of making this logic explicit is the same: it surfaces assumptions, enables targeted investigation, and produces an actionable map from symptom to root cause.

### The Decision Tree as Expected Value Machine

In decision theory, a decision tree is a formal tool for calculating the expected value of choices under uncertainty. Each decision node represents a choice; each chance node represents an uncertain outcome with an associated probability. The "value" at a terminal node represents the outcome if you reach that path. Working backward from the terminal nodes (using expected value at each chance node) tells you which decision has the highest expected value.

The formal machinery matters less than the underlying discipline: explicitly mapping what happens under different scenarios, estimating the probability of each, and weighting outcomes by probability. This prevents two common decision errors:

- **Best-case thinking:** deciding based on the best possible outcome without weighting by its probability
- **Worst-case paralysis:** refusing to decide because the worst outcome is catastrophic, without weighing its probability against less severe scenarios

The decision tree forces both the optimist and the pessimist to be explicit about their probability estimates — which makes the disagreement resolvable.

### Analogy: The Legal Argument

A well-structured legal argument is a logic tree. The top node is the verdict. Below it: the legal standard that must be met (e.g., "beyond reasonable doubt"). Below that: the specific elements of the charge that must be established. Below each element: the evidence that establishes it. Each step is an explicit logical link.

When a defense attorney challenges a conviction, they are doing so by attacking a node in the prosecution's logic tree: either the evidence doesn't establish the element it claims to establish, or the element doesn't support the legal standard in the way claimed. The logic tree structure is what makes legal argument precise.`,
    deepDive: `## Building Logic Trees That Hold Up

### Step-by-Step Causal Chain Construction

**1. Start with the observation to be explained** (or the decision to be made). Put this at the top.

**2. Ask: what is the immediate cause of this?** Not the root cause — the nearest upstream cause. "Customer satisfaction declined" → immediate cause might be "product delivery times increased." This is one level up.

**3. Ask: and what caused that?** Go one more level. "Delivery times increased" → "warehouse automation system failed." Another level.

**4. Continue until you reach a cause that is:**
- Independently verifiable
- Within the organization's sphere of influence
- Where intervention is possible

**5. At each step, ask: is this the only cause, or are there others?** If there are multiple independent causes (not AND-linked but OR-linked), the tree branches. Capture all of them.

**6. Validate each causal link:** Is the relationship directional and consistent? Does the cause always (or usually) produce the effect? Is there a plausible mechanism? An unvalidated causal link is a hypothesis, not a fact — mark it as such.

### AND vs. OR Logic in Trees

At any node in a logic tree, multiple inputs can combine in two ways:

**AND logic:** All of the upstream inputs must be true for the downstream effect to occur. Example: "System failure" AND "no backup in place" → "Data loss." If the backup exists, data loss doesn't occur even if the system fails.

**OR logic:** Any of the upstream inputs is sufficient to cause the downstream effect. Example: "Hardware failure" OR "Software bug" OR "Human error" → "System outage." Any one alone is sufficient.

Failure trees in engineering (fault tree analysis) use AND/OR explicitly, with standard symbols. The distinction matters for intervention design: to prevent an AND outcome, you only need to eliminate one input. To prevent an OR outcome, you need to eliminate all inputs.

### Logic Validity vs. Factual Accuracy

A logic tree can be logically valid but factually wrong. "If we enter Germany, we will capture 5% of the market in year one. 5% of the German market generates $10M. Therefore entering Germany generates $10M in year one." Valid form, but the 5% estimate may be wrong.

Always distinguish: (1) is the logical form valid? (does the conclusion follow from the premises?) and (2) are the premises factually accurate?

This distinction prevents a common error: accepting a confident-sounding conclusion because it follows logically from premises that haven't been scrutinized.

### Failure Mode 1: Missing Branches

The most dangerous failure in causal chains: there is another cause that hasn't been mapped. The team "solves" the problem by addressing the visible cause, but the problem recurs via the unmapped cause.

Mitigation: always ask "what else could have caused this?" even when a cause has been identified. Root cause analysis isn't done when you've found *a* cause — it's done when you have good reason to believe you've found *the* cause (or all major contributors).

### Failure Mode 2: Confusing Correlation with Causation

Two events that reliably co-occur are not necessarily linked causally. A logic tree built on correlational relationships produces plausible-sounding but unreliable causal chains. When a causal link is based on correlation, mark it explicitly as "hypothesized causal link — not yet confirmed."

The test for causation: does manipulating the upstream variable change the downstream variable? If you can't run the experiment, look for natural experiments (situations where the variable changed for an unrelated reason and you can observe the downstream effect).

### Failure Mode 3: Undocumented Probability Estimates

In decision trees, the expected value calculation depends on the probability estimates assigned to chance nodes. If these are not made explicit, participants can disagree about the conclusion while actually disagreeing about the probability estimate — a resolvable empirical disagreement masquerading as a value disagreement.

Fix: always document the probability estimates and their basis. "P(rebuild is on schedule) = 0.6, based on the team's track record on last three initiatives." Now the disagreement becomes: is 0.6 the right estimate? That's a discussion you can actually resolve.

### The Minimum Viable Logic Tree

For time-pressed situations, a useful shortcut: the three-link chain. Identify (1) the root cause you believe is responsible, (2) the mechanism by which it produces the observed effect, and (3) the observation you're trying to explain. Verify that each link is valid. This won't catch all edge cases, but it forces you to state your logic explicitly and check whether it holds — which is the core discipline.`,
    workedExamples: [
      {
        title: "Root Cause Analysis of a Server Outage",
        problem: "An e-commerce platform experienced a 4-hour outage during peak shopping hours. The engineering team needs to determine the root cause and prevent recurrence.",
        walkthrough: `**Step 1: Define the observation at the top of the causal chain.**

"Website unavailable to customers for 4 hours on [date]"

**Step 2: Identify the immediate technical cause.**

"Primary database became unresponsive" (confirmed from monitoring logs)

Link: Database unresponsive → Website unavailable. Causal mechanism: website directly queries the database on every page load; no caching layer was in place.

**Step 3: Ask why the database became unresponsive.**

Review database metrics during the incident window:
- CPU: 100% sustained for 40 minutes before unresponsiveness
- Active queries: 50x above normal baseline
- Slow queries: 20 queries each running >30 seconds

Immediate cause: CPU saturation from slow queries.

**Step 4: Ask why slow queries spiked.**

Look at query logs. Identifying: one type of query — a product search query — was responsible for 80% of the load. That query was running a full-table scan on the products table.

**Step 5: Ask why it was doing a full-table scan.**

Database schema review: a new column was added to the products table two days ago. The search query filters by this column. The column has no index.

**Step 6: Ask why no index was created.**

Schema change review process: the column was added via a migration that was reviewed by one engineer and merged without a DBA review. Index creation was in the TODO comments but not required for the migration to pass.

**Step 7: Ask why DBA review wasn't required.**

Code review policy: DBA review is required for migrations that modify existing tables in high-traffic databases, but this migration was classified as a "new column addition" (not a modification) and escaped the trigger.

**Step 8: Identify root causes.**

There are two independent contributing causes:
1. **Technical root cause:** Missing index on a high-cardinality column used in a high-traffic query
2. **Process root cause:** Code review policy has a classification gap that allowed a high-impact migration to bypass DBA review

**Step 9: Map AND/OR logic.**

Was the outage an AND or OR outcome?
- If the index existed, no CPU saturation. Outage prevented even without process fix. ✓
- If DBA review was required, the missing index would have been caught. Outage prevented.

Both are necessary conditions in the causal chain — fixing either one prevents recurrence. But only fixing the process root cause prevents *future* instances of the same class of problem.

**Step 10: State the recommendations linked to the tree.**

From the logic tree:
1. **Immediate fix:** Add the missing index (addresses technical root cause)
2. **Process fix:** Revise migration classification policy to require DBA review for all new columns in tables with >1M rows (addresses process root cause)
3. **Resilience fix:** Add read replica and caching layer to prevent any single database issue from causing full outage (addresses the architectural fragility that made the impact severe)

Each recommendation traces directly back to a specific node in the causal chain.`,
        commonMistakes: `**Common mistake:** Stopping at step 4 ("slow queries caused the problem") and declaring "the fix is to optimize the query." This is a symptom fix, not a root cause fix. The query was written correctly — it just ran against a table without the necessary index. The index was missing because the process didn't require it to be created. Without the process fix, the next developer who adds a column for filtering will produce the same outage.

The logic tree forces you to ask "why?" enough times to reach a cause where the fix prevents recurrence, not just recovery.`,
      },
      {
        title: "Build vs. Buy Software Decision",
        problem: "A 60-person company needs a CRM system. The software team has proposed building a custom CRM. The operations head prefers buying an off-the-shelf solution. The CEO needs to decide.",
        walkthrough: `**Step 1: Define the decision and its criterion.**

Decision: "Should we build a custom CRM or buy an off-the-shelf solution?"
Criterion: "Minimize total cost of ownership over 3 years while meeting core requirements."

**Step 2: Map the decision tree structure.**

Decision node: Build vs. Buy

For each option, identify the key uncertain outcomes (chance nodes) and their values.

**BUILD branch:**

Chance node 1: Development timeline
- Best case (30% probability): delivered in 6 months, cost $180K
- Base case (50% probability): delivered in 10 months, cost $280K
- Delayed case (20% probability): delivered in 16 months, cost $450K + $90K business cost (lost productivity)

Chance node 2: Post-launch maintenance
- Annual ongoing maintenance: $60-90K/year (range based on feature requests and technical debt)

Build expected cost: (0.3 × $180K) + (0.5 × $280K) + (0.2 × $540K) + (3 years × $75K avg maintenance)
= $54K + $140K + $108K + $225K = **$527K over 3 years**

**BUY branch:**

License cost: $48K/year = $144K over 3 years
Implementation/setup: $35K
Customization and integration: $25K
Training: $8K
Annual support/admin: $12K/year = $36K over 3 years

Buy total: $144K + $35K + $25K + $8K + $36K = **$248K over 3 years**

**Step 3: Check the logical completeness of the comparison.**

Are we comparing apples to apples? Does the off-the-shelf solution meet all core requirements?

Check against requirements list:
- Contact management ✓
- Pipeline tracking ✓
- Email integration ✓
- Custom reporting ✗ (requires add-on or workaround)

Custom reporting is a gap. What is the cost of addressing it?
- Option A: Additional module for the off-the-shelf tool: $15K/year
- Option B: Accept reduced reporting capability (business cost: estimated $20K/year in analyst time for manual exports)

Adjust Buy scenario: Buy + module = $248K + $45K = **$293K over 3 years**

**Step 4: Test the key assumptions.**

The build cost model is sensitive to:
- Development timeline probability estimates (20% chance of delay may be too optimistic for a 60-person company with competing priorities)
- Maintenance cost estimate (custom CRM maintenance often exceeds initial estimates as requirements change)

What if we use conservative estimates for build (40% probability of delay, $100K/year maintenance)?
Revised Build expected cost: (0.3 × $180K) + (0.3 × $280K) + (0.4 × $540K) + (3 × $100K)
= $54K + $84K + $216K + $300K = **$654K over 3 years**

**Step 5: Identify the decision.**

Under base assumptions: Buy ($293K) vs. Build ($527K) → Buy wins.
Under conservative assumptions: Buy ($293K) vs. Build ($654K) → Buy wins even more decisively.

The logic tree also reveals: build only wins if (a) the timeline is fast, (b) maintenance is low, AND (c) the off-the-shelf tool fails to meet future requirements. All three conditions must hold simultaneously.

**Step 6: State the decision and its logical basis.**

"We recommend buying an off-the-shelf CRM with the custom reporting module. Under all reasonable probability estimates, the 3-year cost is $200-350K lower than building. Building only makes sense if all of the following are true: (a) development completes in under 8 months, (b) annual maintenance stays below $50K, and (c) the off-the-shelf solution fails to accommodate at least two major future requirements. None of these conditions is likely given the company's current engineering capacity."

This is an explicit, auditable conclusion derived from a documented logic tree — not an assertion.`,
        commonMistakes: `**Common mistakes in build vs. buy decisions:**

1. **Comparing only direct costs:** Many teams compare software license cost to developer salaries without accounting for probability-weighted outcomes, ongoing maintenance, or opportunity cost of engineering time.

2. **Ignoring the delay probability:** "We'll build it in 6 months" is a point estimate with no uncertainty range. A decision tree forces you to assign probabilities to different timeline scenarios — which typically shifts the analysis substantially.

3. **Not defining the decision criterion upfront:** Teams often argue about "build vs. buy" without agreeing whether they're optimizing for cost, control, time-to-deploy, or strategic flexibility. The criterion should be defined before the logic tree is built, not inferred from whichever analysis confirms your preferred answer.`,
      },
    ],
    guidedProblems: ["ps-021", "ps-022", "ps-023"],
    takeaways: [
      "When building a causal chain, distinguish AND-logic (all causes required) from OR-logic (any cause sufficient) — the distinction determines how many upstream conditions you need to address to prevent recurrence.",
      "Use decision trees to make probability estimates explicit: best-case, base-case, and worst-case scenarios with assigned probabilities force you to reason about uncertainty rather than assume your preferred scenario.",
      "Validate each causal link separately — a chain of four plausible-sounding links where one is unsupported produces an unreliable conclusion with apparent rigor.",
      "When a logic tree reveals a root cause, trace the fix back to the root rather than the symptom to prevent recurrence rather than just recovery.",
    ],
    deeperReading: [
      { title: "How to Solve It", author: "George Polya" },
      { title: "Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts", author: "Annie Duke" },
      { title: "The Art of Thinking Clearly", author: "Rolf Dobelli" },
      { title: "Seeking Wisdom: From Darwin to Munger", author: "Peter Bevelin" },
    ],
    recommendedNext: "1.5",
  },

  // module 1.5
  {
    id: "1.5",
    trackId: "problem-structuring",
    title: "Choosing the Right Structure",
    hook: `Two consultants are given the same client problem: "Our growth has stalled." The first opens her laptop and starts building a revenue/cost breakdown — it's the framework she knows best. After two weeks, her team presents a thorough profitability analysis showing the business is actually quite efficient. The client thanks her and remains stuck. The second consultant spends 30 minutes asking questions before choosing a framework. He realizes growth has stalled because the company has maxed out its core customer segment, not because of cost or margin issues. He applies a market segmentation and growth vectors analysis. Two weeks later, the client has a new growth strategy. Same problem, different framework choice, completely different outcome.`,
    concept: `## Framework Selection: The Meta-Skill of Analytical Thinking

Learning MECE decompositions, issue trees, and logic trees is learning tools. The meta-skill — the skill above those skills — is knowing which tool to apply when. This is framework selection, and it is where the transition from competent analyst to expert problem-solver happens.

### Why Framework Selection Is Hard

Most people learn a small number of frameworks and apply them repeatedly. This works when problems are homogeneous (if you only ever work on profitability problems, the profitability framework is always right). It fails when problems are diverse — which is the reality of most strategic and organizational work.

The failure mode has a name in psychology: the law of the instrument, or "Maslow's hammer": "If the only tool you have is a hammer, you tend to see every problem as a nail." An analyst who knows only the profitability framework will apply it to every problem and produce analysis that is technically accurate but strategically irrelevant whenever the problem isn't fundamentally about profitability.

The fix requires developing a second layer of skill: diagnosing *what kind* of problem you have before choosing the tool to address it.

### The Problem Taxonomy

Not all problems are the same. Before choosing a framework, classify the problem:

**Type 1: Diagnostic problems** — "Why is X happening?"
- Something is wrong (declining revenue, rising costs, customer complaints, employee turnover)
- You need to identify the cause
- Best served by: issue trees, causal chains, root cause analysis frameworks
- Key question: what categories of cause could explain this observation?

**Type 2: Decision problems** — "Should we do X, or X vs. Y?"
- A choice needs to be made
- You need to evaluate options against a criterion
- Best served by: decision trees, hypothesis trees, pro/con frameworks with explicit weighting
- Key question: what does "good" look like, and how does each option score against it?

**Type 3: Design problems** — "How should we do X?"
- The direction is decided; the approach needs to be specified
- You need to generate and evaluate options for implementation
- Best served by: design criteria frameworks, constraint mapping, process trees
- Key question: what constraints and objectives must the solution satisfy?

**Type 4: Discovery problems** — "What is happening in X?"
- You know something is occurring but don't yet know enough to formulate a hypothesis
- You need to explore before structuring
- Best served by: open-ended data exploration, qualitative research, situational frameworks (3C, PEST)
- Key question: what don't we know that we need to know?

Confusing problem types is the most common source of framework mismatch. Applying a decision framework to a diagnostic problem (evaluating options before you know the cause) produces suboptimal solutions. Applying a discovery framework to a decision problem (exploring widely when you need to decide) wastes time.

### The Three Diagnostic Questions

Before selecting a framework, ask:

**1. What decision will this analysis inform?** (If you can't answer this, the analysis has no purpose — go back to framing.) The decision determines whether you need a diagnostic, decision, or design framework.

**2. What do we already know?** (If you have strong prior knowledge, a hypothesis-first approach is more efficient. If you're genuinely uncertain, start broader.) The knowledge state determines how much initial exploration is needed before structuring.

**3. What is the primary source of uncertainty?** (Is the uncertainty about facts, about causation, about stakeholder preferences, or about what will happen in the future?) The uncertainty type determines which framework is most robust — some frameworks are better under causal uncertainty; others handle stakeholder disagreement; others handle future uncertainty.

### The Framework Matching Heuristic

For common business problems, a rough matching guide:

- "Profits are declining" → Profitability framework (Revenue/Cost tree), but first confirm the problem is in profit and not growth
- "Growth has stalled" → Growth levers analysis (new markets, new products, new customers, more from existing), Porter's Five Forces, market segmentation
- "We should enter market X" → Market attractiveness assessment + company capability fit + economic model
- "Customer satisfaction is declining" → Customer journey mapping + root cause analysis by touchpoint
- "We should acquire company X" → Strategic fit (capabilities, markets, synergies) + financial model + integration risk
- "Operations are inefficient" → Process mapping + value/waste categorization + constraint analysis (Theory of Constraints)
- "Our culture needs to change" → Stakeholder analysis + change management framework — NOT a financial framework

### When to Use Multiple Frameworks Simultaneously

Complex problems often require multiple frameworks applied to different aspects:

A market entry decision might use:
- A market attractiveness framework (for "is there opportunity?")
- A competitive positioning framework (for "can we win?")
- A financial model (for "does it make economic sense?")
- A decision tree (for "what are the key uncertainties and their impact?")

The skill here is modular composition: each framework handles a distinct sub-question, and together they address the full decision. This is different from confusedly mixing elements of multiple frameworks into one incoherent hybrid.

### Pattern Recognition: The Expert's Shortcut

The highest level of framework selection skill is pattern recognition: seeing a problem and immediately knowing what class it belongs to and what type of structure fits it. This is not magic — it's accumulated experience. Experts have seen hundreds of problems and built a mental library of "problem-type → framework" mappings.

Victor Cheng describes this as developing "business intuition": the ability to quickly pattern-match a client's situation to a known problem archetype and retrieve the appropriate analytical structure. This is why experienced consultants can structure a problem in minutes where novices take hours — not because they're thinking faster, but because they've reduced a novel problem to a familiar class.

The practical implication: the way to develop framework selection skill is to consciously label the problems you work on. Not just "we solved the revenue problem," but "this was a diagnostic problem where the primary uncertainty was in the demand side, and we used a customer segmentation tree." Building this labeled library accelerates the pattern recognition that expertise requires.`,
    deepDive: `## How Expert Problem-Solvers Actually Choose Frameworks

### The McKinsey Framework Selection Process

McKinsey's approach, as described by multiple former consultants, follows a consistent pattern: before any framework is chosen, the engagement team spends time on "scoping" — establishing precisely what question the client needs answered and what the constraints on the answer are (timeline, resources, what must remain fixed, who needs to agree on the answer).

Only after this scoping is a framework selected, and the criterion is simple: what framework will produce the most useful answer to the scoped question in the available time? Not "what framework do we know best" or "what framework did we use on the last engagement."

This discipline — scope before structure — prevents the most common framework mismatch.

### The Hypothesis Screen

Before committing to a framework, run a rapid hypothesis screen:

1. What would the answer look like if the problem is primarily a revenue problem? (Does that match what I know?)
2. What if it's primarily a competitive problem?
3. What if it's primarily an operational problem?
4. What if it's primarily a talent/organizational problem?

The hypothesis that best explains the observable facts points to the right framework. This takes 5-10 minutes and frequently prevents days of wasted analysis.

### Framework Selection Errors and Their Costs

**Error 1: Framework familiarity bias.** Using the framework you know best rather than the one that fits the problem. Cost: analysis that is technically impressive but strategically irrelevant.

**Error 2: Framework complexity bias.** Using the most sophisticated or comprehensive framework available, regardless of fit. Cost: over-engineering the analysis, obscuring the key insight in complexity, and wasting time.

**Error 3: Framework completeness bias.** Running every relevant framework to avoid missing anything. Cost: dilution — you run five analyses at shallow depth rather than one at sufficient depth. Good analysis is depth where it matters, not breadth everywhere.

**Error 4: Skipping framework selection entirely.** Going directly from "here's the problem" to "here's the analysis" without choosing a structure. Cost: unstructured analysis that's hard to communicate, hard to prioritize, and hard to check for completeness.

### The Simplest Effective Frameworks for Common Situations

Part of good framework selection is knowing when *not* to use a complex framework. For most problems, the simplest framework that answers the question is the right one:

- **Issue tree with MECE first level:** Works for almost any diagnostic problem with sufficient specificity in the root question
- **Pro/con with explicit weighting:** Sufficient for most decisions where the primary uncertainty is preference, not probability
- **3-horizon model (now/next/later):** Useful for prioritization when the question is "what should we work on?"
- **Hypothesis + three supporting claims + three tests:** Sufficient for most single-issue analytical questions

The elaborate frameworks — Porter's Five Forces, McKinsey 7S, the BCG matrix — are worth their complexity when the problem genuinely involves the dynamics they were designed to capture. They're not worth it when a two-level issue tree would have been sufficient.

### Building Your Personal Framework Library

The highest-leverage investment in analytical skill is developing a personal taxonomy of problem types and the frameworks that work best for each. This means:

1. After completing any significant analysis, label what type of problem it was and which framework produced the most useful insight
2. When a framework *didn't* work well, note why — what type of problem does it fail on?
3. When you encounter a new framework, categorize it: what type of problem is it designed for? What are its assumptions?

This library is what distinguishes the analyst who needs an hour to structure a problem from the expert who needs ten minutes.

### The Failure of "Best Practice" Thinking

A final caution: there is no universal "best" framework. Frameworks are tools designed for specific conditions. The profitability framework assumes the problem is about profit drivers. The 3C framework assumes the relevant actors are company, customer, competitor. The McKinsey 7S assumes the issue is organizational design.

When a problem doesn't match a framework's assumptions, forcing the framework produces analysis that is systematically misleading — it answers a well-structured question that wasn't the one you needed to answer.

The meta-skill of framework selection is ultimately the skill of identifying which assumptions are valid for the problem at hand, and choosing the tool whose assumptions match.`,
    workedExamples: [
      {
        title: "Diagnosing the Wrong Framework Choice",
        problem: "A retail chain hired consultants to figure out why its best stores were significantly outperforming its worst stores (measured by revenue per square foot). The first team ran a detailed cost benchmarking analysis. After three weeks, they showed that the high-performing stores were not materially more efficient on costs. The client was frustrated. A second team came in. They chose a different framework and found the answer in two weeks.",
        walkthrough: `**Step 1: Identify what question the first team answered.**

The first team ran a cost benchmarking analysis. This answers: "Are there operational cost differences between high and low performing stores?"

The answer was "no."

**Step 2: Identify what question actually needs answering.**

The problem statement is: "Why do high-performing stores outperform on revenue per square foot?"

Revenue per square foot = (Traffic × Conversion rate × Average transaction value) / Square footage

The first team analyzed cost. But cost doesn't appear in this equation at all. They answered a question that couldn't produce the answer being sought, because the metric in question is purely revenue-driven.

**Step 3: Apply the problem taxonomy.**

What type of problem is this?
- Diagnostic problem: "why does X vary across stores?"
- Primary variable: revenue per square foot (not profit)
- Primary unknowns: what drives traffic? What drives conversion? What drives average spend?

The right framework: a revenue driver tree applied to the performance gap between high and low performers, followed by operational analysis of the specific drivers where the gap is largest.

**Step 4: Apply the corrected framework.**

Revenue per square foot breakdown:
- Traffic: high-performing stores generate 40% more foot traffic
  - Location factors: high-performers are in higher-foot-traffic locations
  - Marketing: high-performers spend more on local marketing, OR are in locations with better anchor stores
- Conversion: similar across stores (75% vs. 73%)
- Average transaction: similar across stores ($47 vs. $45)
- Square footage: high-performers average 15% smaller footprint

**Step 5: Focus analysis where the gap is.**

The gap is almost entirely in traffic, and within traffic, in location quality. High-performing stores are systematically in better locations.

This is a fundamentally different insight than cost efficiency. It suggests: the path to improving low-performing stores is location remediation (if leases allow), not operational efficiency.

**Step 6: Diagnose why the first framework was chosen.**

The consultants defaulted to cost benchmarking because:
1. Cost analysis is a standard deliverable with clear methodology
2. The team had a cost analysis template from previous engagements
3. No one explicitly asked "what type of problem is this?" before selecting the framework

The scoping conversation that should have happened: "We want to understand performance differences. Is the hypothesis that operations are different (pointing to cost/process analysis) or that customer drivers are different (pointing to traffic/conversion analysis)? What do we already know?" That conversation would have revealed that store managers all reported similar operations but very different customer traffic — pointing to a traffic/location analysis, not a cost analysis.`,
        commonMistakes: `**Common mistake:** Validating the framework choice by whether the analysis is thorough, not whether it can answer the question. The first team's cost analysis was thorough. It was just thoroughly answering the wrong question.

The discipline: before committing to a framework, ask "what answer could this framework produce, and if it produced that answer, would it resolve the client's actual question?" If the answer is "no" or "not necessarily," the framework is wrong regardless of how well it can be executed.`,
      },
      {
        title: "Selecting Between Competing Frameworks for a Strategy Decision",
        problem: "A mid-market software company (50M ARR, growing 15% YoY) is deciding whether to expand into enterprise accounts (>1000 employees) or to deepen its position in the mid-market. The CEO asks for a structured recommendation.",
        walkthrough: `**Step 1: Classify the problem.**

This is a decision problem: "Should we pursue enterprise or double down on mid-market?"

The decision criterion is implied but needs to be made explicit. Ask: optimize for what, over what time horizon?
After a brief conversation: "Maximize revenue growth over 3 years, while keeping burn rate below current levels."

**Step 2: Consider which frameworks could apply.**

Framework options for a market strategy decision:

A) **Porter's Five Forces:** Analyzes the competitive structure of an industry. Useful if the question is "is this market attractive?" but less useful for "which of two markets should we focus on" — it would need to be applied to both markets and compared.

B) **Ansoff Matrix:** Maps four growth strategies: market penetration, market development, product development, diversification. Enterprise is "market development" (new segment, same product). Mid-market deepening is "market penetration" (same market, more share). This framework names the choice but doesn't resolve it.

C) **Growth levers analysis + capability fit:** Identify the growth potential of each option (market size, our potential share, timeline to revenue) and compare against our current capabilities (sales motion, product fit, team expertise).

D) **Customer segmentation + unit economics comparison:** Compare the unit economics (CAC, LTV, sales cycle, support cost) of enterprise vs. mid-market customers based on current data.

**Step 3: Choose the right framework for the decision criterion.**

The criterion is revenue growth over 3 years at current burn. This points to an economic comparison, not a qualitative attractiveness assessment.

Framework D (unit economics comparison) and Framework C (growth potential + capability fit) together address the criterion directly. Porter's Five Forces and Ansoff Matrix are conceptually interesting but don't answer the economic question.

**Step 4: Apply the selected frameworks.**

Unit economics comparison (using company data):

| Metric | Mid-market | Enterprise |
|---|---|---|
| Average ACV | $18K | $80K |
| Sales cycle | 45 days | 180 days |
| CAC | $12K | $65K |
| Gross margin | 72% | 68% |
| Gross profit per customer | $13K | $54K |
| LTV (5yr churn) | $68K | $290K |
| LTV/CAC ratio | 5.7x | 4.5x |
| Months to recoup CAC | 11 months | 18 months |

Growth potential assessment:
- Mid-market TAM (US, company's vertical): ~8,000 companies, current penetration ~3%
- Enterprise TAM (same vertical): ~800 companies, current penetration: 0%
- Mid-market growth rate (segment): 12%/year
- Enterprise growth rate (segment): 22%/year

**Step 5: Apply the framework to the decision criterion.**

3-year revenue model:

*Mid-market deepening:* Add 100 new mid-market customers/year (from 47 current/year, improving conversion and sales capacity). By year 3: +300 customers × $18K ACV = +$5.4M ARR. Burn impact: requires 3 additional AEs × $120K = $360K/year.

*Enterprise expansion:* Develop enterprise capability (6 months), then add 10 enterprise accounts in year 1 scaling to 25/year. By year 3: ~50 enterprise accounts × $80K ACV = +$4M ARR. Burn impact: requires 2 enterprise AEs + solutions engineer + longer ramp = $600K/year additional, plus 6-month delay.

**Step 6: Synthesize.**

Under the stated criterion (revenue growth + burn constraint), mid-market deepening generates more revenue by year 3 at lower incremental cost. Enterprise has better long-term LTV economics but the 3-year horizon and burn constraint disfavors it given the slower ramp.

Recommendation: "Double down on mid-market for the next 18 months while building the foundation for enterprise (product hardening, compliance certifications, one pilot enterprise account). Revisit enterprise expansion at the next funding round when the burn constraint is lifted."

The framework choice made this recommendation possible by comparing options on the decision criterion directly, rather than producing a qualitative assessment of "which market is better" in the abstract.`,
        commonMistakes: `**Common mistakes in framework selection for strategy decisions:**

1. **Using a framework because it sounds sophisticated:** Teams use Porter's Five Forces because it signals rigor. But if the decision is about unit economics, a spreadsheet model is more rigorous than Five Forces.

2. **Not surfacing the decision criterion before choosing a framework:** "Revenue growth" and "sustainable long-term competitive position" point to different frameworks. The decision criterion must be explicit before the framework can be matched.

3. **Running all frameworks and averaging the results:** "Porter's says mid-market, the unit economics say mid-market, Ansoff says it could go either way, so we recommend mid-market." This is not synthesis — it's false rigor. Each framework's conclusion should be weighed by its relevance to the decision criterion.`,
      },
    ],
    guidedProblems: ["ps-031", "ps-032", "ps-033"],
    takeaways: [
      "Classify the problem type first — diagnostic, decision, design, or discovery — before selecting a framework, because the same surface problem can require fundamentally different structures.",
      "Run a hypothesis screen before committing to a framework: what would the answer look like under the three most plausible framings? The framing that best fits observable facts points to the right framework.",
      "When multiple frameworks could apply, select the one whose assumptions most closely match the actual problem and whose outputs directly address the decision criterion — not the one you know best.",
      "After every analysis, label the problem type and which framework worked (or didn't) — this labeled experience library is how expert framework-selection intuition develops.",
    ],
    deeperReading: [
      { title: "The McKinsey Way", author: "Ethan Rasiel" },
      { title: "Case Interview Secrets", author: "Victor Cheng" },
      { title: "Competitive Strategy", author: "Michael E. Porter" },
      { title: "Good Strategy Bad Strategy", author: "Richard Rumelt" },
    ],
    recommendedNext: "",
  },
];
