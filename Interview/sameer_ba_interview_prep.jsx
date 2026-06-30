import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
// Palette: deep navy interview room feel — calm, professional, focused
// Signature: a live "HR is speaking" indicator that pulses when question loads
const C = {
  bg:          "#07090E",
  panel:       "#0E1219",
  panelBorder: "#181F2C",
  raised:      "#131A26",
  accent:      "#4F7EF7",   // interview blue
  accentGlow:  "#4F7EF720",
  gold:        "#E8B84B",
  goldSoft:    "#2C2109",
  green:       "#2DD4A0",
  greenSoft:   "#092E22",
  red:         "#F26464",
  redSoft:     "#2C0E0E",
  textPrimary: "#EDF1FA",
  textSec:     "#6B82A0",
  textMuted:   "#2E3D52",
  hr:          "#1E2A3C",
};

// ─── ALL INTERVIEW Q&A ────────────────────────────────────────────────────────
const ROUNDS = [
  {
    id: "intro",
    label: "Round 1 — Introduction",
    icon: "👋",
    color: C.accent,
    colorSoft: C.accentGlow,
    questions: [
      {
        id: 1,
        hr: "Good morning, Sameer. Please take a seat. So — tell me about yourself.",
        tip: "60–90 seconds. Structure: Present → Past → Future. Smile, slow down, make eye contact.",
        why: "HR is checking confidence, communication, and whether you know your own story. This is not a formality — it sets the entire tone of the interview.",
        answer: `"Good morning! Thank you for having me.

I'm Sameer Hawal — a Computer Science Engineering graduate with a strong specialization in data analytics and business intelligence. Over the past year, I've built five end-to-end Power BI dashboards focused on financial analytics — covering IPO performance risk, cash flow and liquidity monitoring, profitability analysis, and expense control. Each one was designed to answer a real business question, not just display data.

Beyond the technical side, I served as Vice-Chair of IEEE Computer Society and coordinated a national-level technical symposium with 300+ participants — which gave me hands-on experience in stakeholder management, cross-functional coordination, and structured problem-solving under pressure.

I'm currently completing my Microsoft PL-300 certification and a Generative AI program. I'm drawn to Business Analyst roles because I naturally think in business problems first and data solutions second — and I want to be at that bridge between business stakeholders and data teams.

I'm excited about this opportunity because it aligns with exactly where I want to grow."`,
        dos: ["Start with your name and current status", "Mention 1–2 strongest projects by name", "End with why THIS role excites you"],
        donts: ["Don't recite your resume line by line", "Don't say 'I am a hardworking person'", "Don't speak for more than 90 seconds"],
      },
      {
        id: 2,
        hr: "Interesting background. Why do you want to be a Business Analyst specifically — and not a Data Analyst or developer?",
        tip: "This is a motive-testing question. They want to know you chose BA deliberately, not as a fallback.",
        why: "BAs are the bridge between business and tech. If you can't articulate why that bridge matters to you personally, they'll doubt your commitment.",
        answer: `"That's a great question — and I've thought about it carefully.

I realized that what excites me most is not the dashboard itself, but the conversation before it: understanding what decision a stakeholder is trying to make, what information they're missing, and why it's blocking them.

When I built my Cash Flow and Liquidity Risk dashboard, the most valuable moment wasn't writing the DAX formula — it was deciding that the right metric to show wasn't cash balance, but the current ratio trend with a risk flag. That decision came from understanding the business question, not the data.

Business Analysts live in that problem-definition space. Data Analysts execute on it. Developers build it. I want to be the person who defines what problem is worth solving and translates that into something a data team can act on.

My finance domain knowledge — liquidity risk, profitability metrics, KPI design — gives me a head start in understanding business context, not just technical context. That's the combination I want to build my career on."`,
        dos: ["Show that you understand what a BA actually does", "Connect it to a real moment in your projects", "Sound deliberate, not desperate"],
        donts: ["Don't say 'because it doesn't require coding'", "Don't say 'I like communication and working with people' — too generic"],
      },
      {
        id: 3,
        hr: "What do you know about what a Business Analyst does day-to-day?",
        tip: "Factual knowledge check. Be specific — not textbook definitions.",
        why: "They're checking if you've researched the role or if you're winging it. Specific knowledge = serious candidate.",
        answer: `"From my research and understanding, a Business Analyst's day typically involves three core activities:

First, requirements gathering — meeting with business stakeholders to understand their pain points, current processes, and what outcomes they need. This often means facilitating structured interviews or workshops and documenting those needs as Business Requirement Documents or user stories.

Second, analysis and translation — taking those business requirements and breaking them down into functional specifications that developers, data engineers, or BI teams can build from. This is where tools like process flow diagrams, use cases, and data flow diagrams come in.

Third, validation and communication — reviewing deliverables to ensure they solve the original business problem, presenting findings to leadership, and managing feedback loops between teams.

In a data-focused BA role specifically, there's also significant time spent in data — writing SQL queries to validate data, reviewing dashboards for accuracy, and helping stakeholders interpret what the data means for their decisions.

I've done versions of the first and third in my academic and IEEE coordination work — and the second is where my Power BI and SQL skills directly contribute."`,
        dos: ["Show you know the full cycle, not just 'requirements'", "Connect your existing experience to the role"],
        donts: ["Don't just say 'they gather requirements and make documents'", "Don't pretend you've done it all professionally"],
      },
    ],
  },
  {
    id: "technical",
    label: "Round 2 — Technical & Domain",
    icon: "⚙️",
    color: C.green,
    colorSoft: "#092E22",
    questions: [
      {
        id: 4,
        hr: "Walk me through how you would approach a situation where a client says 'our sales are dropping but we don't know why.'",
        tip: "This is a BA case question. Structure your thinking clearly. Use a framework — don't jump to solutions.",
        why: "BAs are paid to think structurally. A disorganized answer here — even with good ideas — signals you'd be difficult to work with in real requirements sessions.",
        answer: `"Great scenario. I'd approach this in four structured steps:

Step 1 — Understand the full picture before touching any data.
I'd start by asking: What does 'dropping' mean exactly — revenue, units, transactions, or customer count? Over what time period? Compared to what baseline — last year, last quarter, or a target? Is it happening across all products, regions, and channels, or is it concentrated somewhere?

Step 2 — Decompose the problem.
Revenue = Volume × Price. So the drop is coming from one or both. I'd also segment by: geography, product line, customer segment, and sales channel. The goal is to isolate WHERE the drop is happening before asking WHY.

Step 3 — Generate hypotheses.
Based on the segmentation, I'd form 3–4 testable hypotheses:
• External: Competitor pricing, market slowdown, seasonality
• Internal: Product issue, pricing change, lost key account, reduced marketing spend

Step 4 — Validate with data.
I'd write SQL queries joining sales transactions with customer and product data, compute YoY and QoQ comparisons, and build a drill-down dashboard in Power BI showing revenue bridge by segment — so the client can visually see which driver is dominant.

I'd present findings with a clear 'So what': not just 'sales dropped in Region X' but 'Region X accounts for 40% of the total decline — driven by a 23% drop in repeat customer transactions since the pricing change in Q3.'"`,
        dos: ["Structure before solution — always", "Show you know the difference between symptoms and causes", "End with a business insight, not just a data output"],
        donts: ["Don't immediately say 'I'd look at the data'", "Don't skip the stakeholder conversation step"],
      },
      {
        id: 5,
        hr: "What is a BRD — Business Requirements Document — and what does it contain?",
        tip: "Pure knowledge check. Be specific, not textbook.",
        why: "BRD knowledge is table stakes for a BA role. Not knowing this is an instant red flag.",
        answer: `"A BRD — Business Requirements Document — is a formal document that captures what a business wants a system or process to do, written from the business perspective rather than the technical perspective.

A well-structured BRD typically contains:

1. Executive Summary — The business problem being solved and the project's objective
2. Business Objectives — Specific, measurable goals: 'Reduce monthly close time from 5 days to 2 days'
3. Scope — What is included and, critically, what is explicitly excluded
4. Stakeholders — Who is involved, their roles, and their decision-making authority
5. Current State — How the process works today, including pain points
6. Future State — What the process should look like after the solution is delivered
7. Functional Requirements — What the system must DO: 'The dashboard must display current ratio updated daily'
8. Non-Functional Requirements — How it must perform: speed, security, accessibility
9. Assumptions and Constraints — Budget, timeline, technology limitations
10. Acceptance Criteria — How we'll know the solution is successful

The BRD is NOT a technical specification — it stays at the 'what' level, not the 'how' level. The technical team translates it into an FRD or Technical Design Document afterward.

In my projects, I effectively wrote informal BRDs for myself — defining the business question, the required metrics, and the acceptance criteria before building each dashboard."`,
        dos: ["List the actual sections with brief descriptions", "Distinguish BRD from FRD/TDD", "Connect it to your own experience honestly"],
        donts: ["Don't give a one-line definition", "Don't confuse BRD with project plan"],
      },
      {
        id: 6,
        hr: "You're given a dataset. Walk me through your process of analyzing it as a Business Analyst.",
        tip: "Show your analytical thinking process — not just your tools.",
        why: "They want to see if you have a systematic approach or if you just 'explore randomly'. Structure = seniority signal.",
        answer: `"My process has five clear stages:

Stage 1 — Understand the business context first.
Before opening the data, I'd ask: What decision will this analysis support? Who is the audience? What does 'success' look like as an output? Without this, I'm just exploring randomly.

Stage 2 — Understand the data structure.
I'd look at: How many rows and columns? What is the grain of the data — is one row one transaction, one customer, or one day? What are the data types? Which columns are keys or identifiers? I'd run basic SQL or Excel checks: COUNT, DISTINCT, NULL counts per column.

Stage 3 — Data quality assessment.
Check for: Missing values — how many and in which columns? Duplicates — are there repeated records that shouldn't exist? Outliers — are there values that seem impossible (negative revenue, future dates)? Inconsistent formats — date stored as text, mixed currency.

Stage 4 — Exploratory analysis.
Now I explore: distributions, trends over time, relationships between variables. In Power BI, I'd build an initial EDA dashboard — revenue by period, by segment, top/bottom performers. I look for patterns, anomalies, and surprises.

Stage 5 — Insight generation and communication.
I translate findings into business language: not 'Column C has a skewed distribution' but 'The top 20% of customers account for 68% of revenue — and their purchase frequency dropped 15% this quarter.'

The output is always a recommendation, not just a finding."`,
        dos: ["Show a structured process — not random exploration", "Use business language in the final stage", "Mention data quality — often forgotten"],
        donts: ["Don't start with 'I'd open Excel/Power BI'", "Don't skip the business context step"],
      },
      {
        id: 7,
        hr: "What is the difference between a use case and a user story?",
        tip: "Classic BA theory question. Keep it concise and give an example.",
        why: "Shows whether you understand Agile vs Waterfall BA methodology — many companies use both.",
        answer: `"Both are ways to capture requirements from the user's perspective, but they differ in format, depth, and context:

Use Case (typically Waterfall / structured):
• More detailed and formal
• Describes a complete interaction: actor, preconditions, main flow, alternate flows, exceptions
• Written from a system perspective: 'When the Finance Manager clicks Export, the system generates a PDF report with all visible KPIs'
• Best for: Complex systems where every edge case must be documented

User Story (Agile):
• Short, simple, conversational
• Format: 'As a [role], I want [action] so that [benefit]'
• Example: 'As a Finance Manager, I want to filter the dashboard by quarter so that I can compare performance periods quickly.'
• Acceptance criteria are added separately
• Best for: Iterative development where requirements evolve

Quick analogy: A use case is a full recipe with every step documented. A user story is a sticky note on the fridge that says 'Make lasagna for 6 — vegetarian option needed.'

In my Power BI projects, every dashboard started with an informal user story: 'As a portfolio analyst, I want to see risk-adjusted returns per IPO so that I can identify real wealth creators vs listing-day hype.' That framing kept me focused on the business need throughout."`,
        dos: ["Give the format for both", "Use a concrete example", "Tie it to your own experience"],
        donts: ["Don't say they're 'basically the same thing'", "Don't give only textbook definitions without examples"],
      },
      {
        id: 8,
        hr: "A stakeholder keeps changing their requirements mid-project. How do you handle this?",
        tip: "This tests your professional maturity and stakeholder management skill. No right or wrong — they want process.",
        why: "Scope creep is the #1 reason analytics projects fail. BAs are the first line of defense against it.",
        answer: `"This is one of the most common and challenging situations a BA faces, and I'd handle it in three steps:

Step 1 — Understand WHY before reacting.
I'd first ask: Why is the requirement changing? Is it because the business reality changed — a new competitor, a regulatory update, or a strategic shift? Or is it because the original requirement wasn't captured clearly enough? The response is different for each cause.

Step 2 — Document and assess impact.
I'd acknowledge the change, document it formally in a Change Request, and assess the impact: How much additional time does this add? Does it affect other requirements? What is the priority relative to existing scope? This keeps the conversation objective and data-driven rather than emotional.

Step 3 — Communicate trade-offs clearly.
I'd present the stakeholder with options: 'We can add this new requirement, but it will push delivery by 2 weeks and remove Feature X from this sprint. Or we can deliver the original scope and add this in Phase 2.' The stakeholder makes the call — but I give them the information to make it well.

The preventive measure is stronger upfront requirements gathering — spending more time on 'What does done look like?' at the start reduces mid-project changes significantly.

In my IEEE coordinator role, I handled exactly this when two judges changed their session format 24 hours before the event. I documented the change, assessed the room and schedule impact, communicated the trade-off to the organizing team, and we made an informed decision together."`,
        dos: ["Show empathy first, then process", "Give concrete steps", "Tie it to a real experience"],
        donts: ["Don't say 'I would tell them no'", "Don't say 'I'd just accommodate whatever they want'"],
      },
    ],
  },
  {
    id: "hr",
    label: "Round 3 — HR & Behavioural",
    icon: "🤝",
    color: C.gold,
    colorSoft: C.goldSoft,
    questions: [
      {
        id: 9,
        hr: "Tell me about a time you had to work with incomplete or ambiguous information to solve a problem.",
        tip: "STAR method. Use your Engine Oil or Liquidity Risk project — they're perfect for this.",
        why: "BAs operate in ambiguity constantly. This tests your comfort with uncertainty and your problem-solving maturity.",
        answer: `"Situation: When I built my Engine Oil Condition Detection dashboard, the raw sensor data I received had no documentation — no data dictionary, no column descriptions, no explanation of what the threshold values meant.

Task: I needed to classify oil health into Healthy, Warning, and Critical categories accurately enough for a maintenance team to act on it.

Action: Rather than guessing, I took a structured approach to the ambiguity:
First, I treated the data like a detective would — I analyzed the distributions of each column, looked for natural clusters and breakpoints, and identified which variables correlated with obvious anomalies.
Second, I researched engineering standards for oil condition monitoring to validate my threshold assumptions against industry norms.
Third, I built the classification logic as a transparent, documented calculation in Power Query — so anyone reviewing it could see exactly what rules drove each category, and the thresholds could be updated if a domain expert disagreed.

Result: The dashboard was structured so that maintenance teams could understand the logic without needing to see the code — and the documented assumptions meant the model was auditable and trustworthy even without a formal data source specification.

The lesson: Ambiguity isn't a blocker — it's a reason to document your assumptions more carefully, not less."`,
        dos: ["Use STAR structure clearly", "Show you documented your assumptions", "End with a lesson learned"],
        donts: ["Don't pick a trivial example", "Don't make it sound like you panicked"],
      },
      {
        id: 10,
        hr: "What is your biggest weakness — and be honest, please.",
        tip: "The most mishandled question in interviews. Real weakness + real plan = real trust.",
        why: "They're testing self-awareness and honesty. A fake weakness destroys credibility instantly.",
        answer: `"I'll be genuinely honest with you.

My biggest gap right now is experience with formal requirements documentation — specifically, writing structured BRDs and facilitating live stakeholder requirements workshops with real business users. My projects were self-initiated, which means I was both the business stakeholder and the analyst. I defined my own requirements rather than eliciting them from someone else.

I've been addressing this directly: I've studied BA documentation frameworks and templates, I understand the theory of requirements elicitation techniques — interviews, observation, workshops, prototyping — and I've practiced translating my own project scopes into structured requirement documents.

But I want to be honest: the gap between knowing the process and running a real stakeholder session with a resistant or unclear business user is real, and I'll need supervised experience in my first role to close it fully.

What I bring to offset this: I'm a strong analytical thinker, I've managed real stakeholders in high-pressure situations through my IEEE role, and I learn rapidly with structured feedback. I'd rather tell you this honestly than overpromise and underdeliver."`,
        dos: ["Name a REAL, role-relevant weakness", "Show a specific action plan", "End with a compensating strength"],
        donts: ["Never say 'I'm a perfectionist'", "Never say 'I work too hard'", "Don't pick an irrelevant weakness (e.g. cooking)"],
      },
      {
        id: 11,
        hr: "Where do you see yourself in 3 years — and how does this role fit that path?",
        tip: "Show ambition, but tie it to value for the company — not just personal gain.",
        why: "Companies want to know if you'll stay and grow. If your 3-year plan sounds like you want to leave in 1 year, it's a red flag.",
        answer: `"In 3 years, I see myself as a mid-level Business Analyst who can independently own the full BA lifecycle on a project — from initial stakeholder discovery through requirements documentation, to delivery validation and post-implementation review.

More specifically, I want to develop deep expertise in financial and operational analytics BA work, where I can combine my Power BI and SQL technical skills with strong business domain knowledge to deliver insight-driven recommendations — not just well-documented requirements.

This role is a direct step on that path because it gives me the environment I need right now: real stakeholder interactions, structured mentorship, and exposure to business problems at a scale I can't create on my own.

In 3 years, I'd like to be the person who junior analysts come to when they're not sure how to frame a requirements conversation — someone who has enough domain depth and process experience to mentor others.

I'm not in a rush to skip steps. I want to build a foundation that's solid enough to grow from — and this role is where I'd lay that foundation."`,
        dos: ["Be specific about skills you want to develop", "Connect it to value for the company", "Sound like you want to grow here, not through here"],
        donts: ["Don't say 'I want to be a manager in 2 years'", "Don't give a vague 'I want to learn and grow' answer"],
      },
      {
        id: 12,
        hr: "Why should we hire you over other candidates? You're a fresher — what's your edge?",
        tip: "This is your closing argument. Be bold, be specific, be honest. No adjectives — only evidence.",
        why: "Every fresher says 'I'm hardworking and eager to learn.' You need to say something only you can say.",
        answer: `"Three things differentiate me — and I'll be specific rather than descriptive:

First, finance domain depth that most freshers don't have. I didn't build generic sample dashboards — I built an IPO risk evaluation system with Sharpe ratio and max drawdown, a liquidity risk monitoring dashboard with a DAX-driven risk flag, and a 5-year profitability trend analysis. These are real business intelligence deliverables in the finance domain. If your team works on financial data, I can contribute meaningfully from week one — not after a 3-month ramp-up.

Second, I think in business problems, not data problems. My IPO project didn't start with 'let me visualize some data.' It started with: 'How would a fund manager actually evaluate whether an IPO created real wealth?' That's the BA mindset — and it comes naturally to me because I practiced it through every project.

Third, I'm not a blank slate professionally. Managing a national symposium with 300+ participants, coordinating 3 parallel event tracks, briefing judges, and handling real-time escalations — that's stakeholder management. I've done it under pressure, and I can show you what I learned from it.

I'm not the finished product — I know that. But I'm the fresher who already thinks like a BA, knows the domain, and will close the remaining gap faster than most because I have the right foundation."`,
        dos: ["Lead with specific evidence — not adjectives", "Show domain knowledge as the differentiator", "Acknowledge you're a fresher — don't pretend otherwise"],
        donts: ["Don't start with 'I am a hard worker'", "Don't say 'I am a quick learner' — prove it instead"],
      },
      {
        id: 13,
        hr: "Do you have any questions for me?",
        tip: "NEVER say no. This signals disinterest. Prepare 2–3 sharp questions. Ask about the team and the work — not salary or WFH.",
        why: "Good questions show you're genuinely interested, thinking like a BA, and evaluating the role — not just desperate for any job.",
        answer: `Ask these — in this order:

Question 1 (about the work):
"Could you walk me through what a typical first 90 days looks like for a BA in this team — specifically the kinds of stakeholder interactions I'd be involved in from the start?"

WHY THIS WORKS: Shows you're thinking about real contribution, not just 'learning the ropes'.

Question 2 (about the team):
"What does success look like for a Business Analyst in this role after 6 months — what would you hope I've contributed by then?"

WHY THIS WORKS: Signals you want to deliver value, not just occupy a seat. Also gives you intelligence on what they actually prioritize.

Question 3 (if they seem open):
"Is there a particular domain or business problem the team is currently focused on where an analyst with a finance background might contribute most quickly?"

WHY THIS WORKS: Shows domain awareness and signals you've thought about how to be useful specifically — not generically.

IMPORTANT: After they answer each question, engage with the answer. Say 'That's interesting — does the team find that [follow-up]?' You're having a conversation, not running a checklist.`,
        dos: ["Ask about the work and the team", "Engage with their answers genuinely", "Prepare 3 questions in case 1 gets answered during the interview"],
        donts: ["Never ask about salary in round 1 or 2", "Never ask 'What does your company do?'", "Never say 'No, I think I have everything I need'"],
      },
    ],
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function PulsingDot({ color }) {
  return (
    <span style={{ position: "relative", display: "inline-block", width: 10, height: 10 }}>
      <span style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        background: color, opacity: 0.4,
        animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
      }} />
      <span style={{
        position: "relative", display: "block", width: 10, height: 10,
        borderRadius: "50%", background: color,
      }} />
    </span>
  );
}

function ScoreBar({ label, val, color }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: C.textSec }}>{label}</span>
        <span style={{ fontSize: 11, fontWeight: 700, color }}>{val}%</span>
      </div>
      <div style={{ height: 4, background: C.panelBorder, borderRadius: 2, overflow: "hidden" }}>
        <div style={{ width: `${val}%`, height: "100%", background: color, borderRadius: 2 }} />
      </div>
    </div>
  );
}

function QuestionCard({ q, roundColor }) {
  const [phase, setPhase] = useState("closed"); // closed | question | tip | answer | debrief
  const contentRef = useRef(null);

  const steps = [
    { id: "question", label: "See Question", color: roundColor },
    { id: "tip",      label: "Get Calm Tip", color: C.gold },
    { id: "answer",   label: "Model Answer", color: C.green },
    { id: "debrief",  label: "Do's & Don'ts", color: C.accent },
  ];

  return (
    <div style={{
      background: C.panel, border: `1px solid ${C.panelBorder}`,
      borderRadius: 14, marginBottom: 12, overflow: "hidden",
      transition: "box-shadow 0.2s",
      boxShadow: phase !== "closed" ? `0 0 0 1px ${roundColor}30` : "none",
    }}>
      {/* Header */}
      <div
        onClick={() => setPhase(phase === "closed" ? "question" : "closed")}
        style={{
          padding: "15px 18px", cursor: "pointer",
          display: "flex", gap: 12, alignItems: "flex-start",
        }}
      >
        <div style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: 8,
          background: roundColor + "20", border: `1px solid ${roundColor}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 800, color: roundColor,
        }}>Q{q.id}</div>
        <div style={{ flex: 1 }}>
          {phase !== "closed" && (
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <PulsingDot color={roundColor} />
              <span style={{ fontSize: 10, color: roundColor, fontWeight: 700, letterSpacing: 1 }}>HR IS ASKING</span>
            </div>
          )}
          <div style={{ fontSize: 13, color: C.textPrimary, fontWeight: 600, lineHeight: 1.5, fontStyle: "italic" }}>
            "{q.hr}"
          </div>
        </div>
        <span style={{ color: C.textMuted, fontSize: 15, flexShrink: 0 }}>
          {phase === "closed" ? "▼" : "▲"}
        </span>
      </div>

      {/* Phase navigation */}
      {phase !== "closed" && (
        <div ref={contentRef}>
          {/* Step pills */}
          <div style={{
            display: "flex", gap: 6, padding: "0 18px 14px", flexWrap: "wrap",
          }}>
            {steps.map(s => (
              <button key={s.id} onClick={() => setPhase(s.id)} style={{
                padding: "5px 14px", borderRadius: 20, border: "none", cursor: "pointer",
                fontSize: 11, fontWeight: 700,
                background: phase === s.id ? s.color : C.raised,
                color: phase === s.id ? "#08090F" : C.textSec,
                transition: "all 0.15s",
              }}>{s.label}</button>
            ))}
          </div>

          {/* QUESTION PHASE */}
          {phase === "question" && (
            <div style={{ padding: "0 18px 18px" }}>
              <div style={{
                background: C.raised, borderRadius: 10, padding: 16,
                borderLeft: `3px solid ${roundColor}`,
              }}>
                <div style={{ fontSize: 11, color: roundColor, fontWeight: 700, marginBottom: 8, letterSpacing: 0.5 }}>
                  WHY THEY ASK THIS
                </div>
                <div style={{ fontSize: 12.5, color: C.textSec, lineHeight: 1.7 }}>{q.why}</div>
              </div>
              <div style={{ marginTop: 10, fontSize: 12, color: C.textMuted, textAlign: "center" }}>
                → Read the question. Take a breath. Then tap "Get Calm Tip" before answering.
              </div>
            </div>
          )}

          {/* TIP PHASE */}
          {phase === "tip" && (
            <div style={{ padding: "0 18px 18px" }}>
              <div style={{
                background: C.goldSoft, border: `1px solid ${C.gold}40`,
                borderRadius: 10, padding: 16,
              }}>
                <div style={{ fontSize: 11, color: C.gold, fontWeight: 700, marginBottom: 8, letterSpacing: 0.5 }}>
                  🧘 CALM YOURSELF — BEFORE YOU SPEAK
                </div>
                <div style={{ fontSize: 13, color: "#D4A84B", lineHeight: 1.75 }}>{q.tip}</div>
              </div>
              <div style={{
                marginTop: 12, background: C.raised, borderRadius: 10, padding: 14,
                fontSize: 12, color: C.textSec, lineHeight: 1.7,
              }}>
                <span style={{ color: C.textPrimary, fontWeight: 700 }}>Breathing trick: </span>
                When the HR asks the question — don't rush. Say <em style={{ color: C.gold }}>"That's a great question — let me think for a moment."</em> Then take ONE slow breath. It signals confidence, not uncertainty.
              </div>
            </div>
          )}

          {/* ANSWER PHASE */}
          {phase === "answer" && (
            <div style={{ padding: "0 18px 18px" }}>
              <div style={{
                background: C.greenSoft, border: `1px solid ${C.green}30`,
                borderRadius: 10, padding: 16,
              }}>
                <div style={{ fontSize: 11, color: C.green, fontWeight: 700, marginBottom: 10, letterSpacing: 0.5 }}>
                  ✅ MODEL ANSWER — INTERNALIZE, DON'T MEMORIZE
                </div>
                <div style={{
                  fontSize: 12.5, color: "#8ECFB8", lineHeight: 1.85,
                  whiteSpace: "pre-line",
                }}>{q.answer}</div>
              </div>
            </div>
          )}

          {/* DEBRIEF PHASE */}
          {phase === "debrief" && (
            <div style={{ padding: "0 18px 18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div style={{
                  background: C.greenSoft, border: `1px solid ${C.green}30`,
                  borderRadius: 10, padding: 14,
                }}>
                  <div style={{ fontSize: 11, color: C.green, fontWeight: 700, marginBottom: 10, letterSpacing: 0.5 }}>
                    ✅ DO THIS
                  </div>
                  {q.dos.map((d, i) => (
                    <div key={i} style={{ display: "flex", gap: 7, marginBottom: 8, alignItems: "flex-start" }}>
                      <span style={{ color: C.green, fontSize: 12, flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: 11.5, color: "#8ECFB8", lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>
                <div style={{
                  background: C.redSoft, border: `1px solid ${C.red}30`,
                  borderRadius: 10, padding: 14,
                }}>
                  <div style={{ fontSize: 11, color: C.red, fontWeight: 700, marginBottom: 10, letterSpacing: 0.5 }}>
                    ❌ AVOID THIS
                  </div>
                  {q.donts.map((d, i) => (
                    <div key={i} style={{ display: "flex", gap: 7, marginBottom: 8, alignItems: "flex-start" }}>
                      <span style={{ color: C.red, fontSize: 12, flexShrink: 0 }}>✕</span>
                      <span style={{ fontSize: 11.5, color: "#C88888", lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeRound, setActiveRound] = useState("intro");
  const [showMindset, setShowMindset] = useState(false);

  const round = ROUNDS.find(r => r.id === activeRound);
  const totalQ = ROUNDS.reduce((s, r) => s + r.questions.length, 0);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.textPrimary, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>

      {/* HEADER */}
      <div style={{
        background: C.panel, borderBottom: `1px solid ${C.panelBorder}`,
        padding: "20px 18px 16px",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 10, color: C.accent, fontWeight: 700, letterSpacing: 2.5, marginBottom: 6 }}>
            BUSINESS ANALYST · INTERVIEW COMMAND CENTER
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>
                Sameer — You're Ready.
              </h1>
              <div style={{ fontSize: 12, color: C.textSec, marginTop: 4 }}>
                {totalQ} questions · 3 interview rounds · Model answers from your real projects
              </div>
            </div>
            <div style={{
              background: C.accentGlow, border: `1px solid ${C.accent}40`,
              borderRadius: 10, padding: "10px 16px", textAlign: "center", flexShrink: 0,
            }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: C.accent }}>{totalQ}</div>
              <div style={{ fontSize: 9, color: C.textMuted, fontWeight: 600, letterSpacing: 0.5 }}>Q&As</div>
            </div>
          </div>

          {/* Score bars */}
          <div style={{ marginTop: 16 }}>
            <ScoreBar label="Introduction Readiness" val={90} color={C.accent} />
            <ScoreBar label="Technical & Domain" val={85} color={C.green} />
            <ScoreBar label="HR & Behavioural" val={88} color={C.gold} />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 16px" }}>

        {/* MINDSET BANNER */}
        <div
          onClick={() => setShowMindset(!showMindset)}
          style={{
            marginTop: 16, background: C.goldSoft, border: `1px solid ${C.gold}40`,
            borderRadius: 12, padding: "12px 16px", cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.gold }}>
              🧘 Pre-Interview Mindset — Read This First
            </div>
            <span style={{ color: C.gold, fontSize: 14 }}>{showMindset ? "▲" : "▼"}</span>
          </div>
          {showMindset && (
            <div style={{ marginTop: 12, fontSize: 12, color: "#C4993A", lineHeight: 1.85 }}>
              {[
                ["You are not being judged — you are being evaluated.", "There is a difference. A judge decides your worth. An evaluator checks fit. You are 100% fit for this role based on your projects."],
                ["Silence is not weakness.", "When a tough question lands — pause. Say 'Let me think about that for a moment.' Interviewers respect thinking. They distrust speed without substance."],
                ["Your projects are real.", "Sharpe ratio, max drawdown, liquidity risk flag, ETL logic — these are not student experiments. These are production-level analytics deliverables. Own them completely."],
                ["Answers don't need to be perfect. They need to be honest.", "If you don't know something, say: 'I don't have direct experience with that yet, but here's how I'd approach it logically.' Honesty + framework = confident fresher."],
                ["Your body communicates before your words do.", "Sit straight. Slow your breathing. Speak 20% slower than you think you should. Make eye contact for 3–4 seconds at a time. Smile genuinely when you shake hands."],
              ].map(([title, body], i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ fontWeight: 700, color: C.gold, marginBottom: 3 }}>{i + 1}. {title}</div>
                  <div>{body}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ROUND TABS */}
        <div style={{
          display: "flex", gap: 6, marginTop: 14,
          background: C.panel, border: `1px solid ${C.panelBorder}`,
          borderRadius: 11, padding: 4,
        }}>
          {ROUNDS.map(r => (
            <button key={r.id} onClick={() => setActiveRound(r.id)} style={{
              flex: 1, padding: "9px 4px", borderRadius: 8, border: "none",
              cursor: "pointer", fontSize: 11, fontWeight: 700,
              background: activeRound === r.id ? r.color : "transparent",
              color: activeRound === r.id ? "#08090F" : C.textSec,
              transition: "all 0.15s",
              lineHeight: 1.3,
            }}>
              {r.icon} {r.label.split("—")[1]?.trim() || r.label}
            </button>
          ))}
        </div>

        {/* ROUND LABEL */}
        <div style={{
          marginTop: 14, marginBottom: 4,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: round.color }}>{round.label}</div>
          <div style={{ fontSize: 11, color: C.textSec }}>{round.questions.length} questions</div>
        </div>

        {/* HOW TO USE */}
        <div style={{
          background: C.raised, borderRadius: 8, padding: "9px 13px",
          fontSize: 11, color: C.textSec, lineHeight: 1.6, marginBottom: 14,
        }}>
          💡 Tap a card → read WHY they ask → calm yourself with the tip → study the model answer → check do's & don'ts
        </div>

        {/* QUESTION CARDS */}
        {round.questions.map(q => (
          <QuestionCard key={q.id} q={q} roundColor={round.color} />
        ))}

        {/* FOOTER */}
        <div style={{
          marginTop: 16, padding: "14px 16px",
          background: C.panel, border: `1px solid ${C.panelBorder}`,
          borderRadius: 12, marginBottom: 30,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.textPrimary, marginBottom: 8 }}>
            🎯 Last thing before you walk in:
          </div>
          {[
            "Print or screenshot your project dashboards — be ready to share screen or show on phone",
            "Have your resume printed × 2 copies",
            "Know the company's industry and what data problems they face",
            "Arrive 10 minutes early. Use that time to breathe, not review notes",
            "End every answer with a clear conclusion — never trail off mid-sentence",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
              <span style={{ color: C.accent, flexShrink: 0, fontSize: 12 }}>→</span>
              <span style={{ fontSize: 12, color: C.textSec, lineHeight: 1.5 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
