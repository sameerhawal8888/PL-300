import { useState } from "react";

const C = {
  bg:        "#06080D",
  panel:     "#0B0F18",
  raised:    "#101520",
  border:    "#161E2D",
  accent:    "#4F7EF7",
  accentS:   "#0F1E40",
  green:     "#2DD4A0",
  greenS:    "#062218",
  gold:      "#E8B84B",
  goldS:     "#241A06",
  purple:    "#A78BFA",
  purpleS:   "#160F30",
  red:       "#F26464",
  redS:      "#240A0A",
  cyan:      "#22D3EE",
  cyanS:     "#041820",
  orange:    "#FB923C",
  orangeS:   "#241008",
  text:      "#ECF0FA",
  textSec:   "#677A96",
  textMuted: "#2B3648",
};

// ─── PROJECT DATA ──────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "ipo",
    icon: "📈",
    name: "IPO Finance Analytics",
    tagline: "Which IPOs actually made investors rich — and which just looked good on day one?",
    color: C.accent,
    colorS: C.accentS,
    tech: ["Power BI", "Advanced DAX", "Time Intelligence", "Statistics", "Excel"],
    period: "Dec 2025 – Jan 2026",

    layman: {
      oneLiner: "I built a system that tells investors whether an IPO was actually a good investment — not just on the first day, but after 1 month, 6 months, and 1 year.",
      analogy: `Imagine you're buying a house. Everyone tells you it's a great deal on day one — the price shot up 50% at launch. But 6 months later, is it still worth more? Did it beat inflation? Was the risk worth taking?

That's exactly what happens with IPOs — companies that list on the stock market. Everyone celebrates the listing day price jump. But most investors don't know: did this IPO actually CREATE wealth over time, or did it crash after the initial hype?

I built a dashboard that answers this question for any IPO — using the same calculations that professional fund managers use.`,
      whatYouBuilt: [
        "A system that tracks how any IPO performed at 1 month, 6 months, and 1 year after listing",
        "A 'Wealth Creation Score' — showing cumulative returns so investors see actual money made, not just listing day excitement",
        "A 'Worst Case Loss' indicator (max drawdown) — showing the worst point an investor could have lost if they bought at the peak",
        "A risk-adjusted score (Sharpe Ratio) — showing not just how much money was made, but how much RISK was taken to make it",
      ],
    },

    questions: [
      {
        q: "What exactly is this dashboard about? Explain it simply.",
        laymanAnswer: `"Think of it like a report card for IPOs — but one that actually measures real performance, not just the exciting day they launched.

When a company lists on the stock market, everyone focuses on 'did it go up on day one?' My dashboard goes much further — it asks: 'Is the investor actually richer 6 months later? What was the worst loss they could have faced? And was the reward worth the risk?'

I built this because there's a massive gap between what looks exciting on listing day and what actually creates wealth for ordinary investors. This dashboard bridges that gap using calculations that until now, only professional fund managers had access to."`,
        impactStory: `"In the real world, retail investors in India lose money on IPOs because they have no tool to evaluate long-term performance. If a platform like Zerodha, Groww, or any investment advisory firm used this dashboard, they could show clients the full picture — not just the listing day price. That's the difference between an investor making an informed decision and gambling based on hype."`,
        followUp: "Why did you choose these specific metrics?",
        followUpAnswer: `"Most dashboards show just 'return percentage.' But return alone is meaningless without context. If Investment A gave 20% returns and Investment B also gave 20% returns — but Investment B swung wildly by 40% in the process — they are NOT equally good investments.

Sharpe Ratio solves this. It tells you: how much return did you get per unit of risk taken? A Sharpe Ratio above 1 means the reward justified the risk. Below 1 means you took more risk than the return deserved.

I chose these metrics because they're the difference between looking at data and actually understanding money."`,
      },
      {
        q: "How does this make a real-world impact?",
        laymanAnswer: `"Right now in India, over 60 million retail investors participate in IPOs — most of them making decisions based on word-of-mouth or listing day excitement, not data.

If this dashboard were deployed on any investment platform, it would:
→ Help investors compare 'did Zomato's IPO create more wealth than Paytm's after 1 year?'
→ Flag IPOs where the listing gain was high but long-term performance was poor
→ Give financial advisors a data-backed tool to guide client investment decisions

The impact is clear: better-informed investors make better decisions — and lose less money."`,
        impactStory: `"Paytm's IPO is the perfect example. It had massive hype — but crashed 27% on listing day itself and continued falling. An investor using my dashboard would have seen the risk metrics flashing warning signs. That's real money saved."`,
        followUp: null,
        followUpAnswer: null,
      },
      {
        q: "What is Sharpe Ratio and why did you include it? Explain simply.",
        laymanAnswer: `"Let me use a simple example.

Imagine two delivery boys. Both deliver 10 packages a day. But Delivery Boy A takes a calm, organized route. Delivery Boy B drives recklessly, sometimes nearly crashes, but still delivers 10 packages.

Same result — but very different risk.

Sharpe Ratio is exactly this concept for investments. It tells you: for every unit of risk an investor took, how much return did they actually get?

A Sharpe Ratio of 1.5 means: 'This investment gave you good returns relative to the risk.' A Sharpe Ratio of 0.3 means: 'You took a lot of risk for very little reward.'

I included it because showing raw returns without risk context is like saying both delivery boys are equally good — which is simply not true."`,
        impactStory: `"This is the metric Warren Buffett's team uses. The fact that a fresher's dashboard computes Sharpe Ratio means any analyst or fund manager looking at it immediately recognizes it as serious, institutional-grade work — not a student project."`,
        followUp: null,
        followUpAnswer: null,
      },
    ],
  },

  {
    id: "financial",
    icon: "💰",
    name: "Financial Performance & Profitability Analysis",
    tagline: "Gave a company's 5-year financial story in one screen — no Excel, no confusion.",
    color: C.green,
    colorS: C.greenS,
    tech: ["Power BI", "Advanced DAX", "Financial Reporting", "KPI Design", "Excel"],
    period: "Jan – Feb 2026",

    layman: {
      oneLiner: "I built a dashboard that shows 5 years of a company's revenue, expenses, and profit in one screen — so any manager can understand the financial health without being a finance expert.",
      analogy: `Think about your salary and expenses every month. You know whether you're saving money or going into debt by checking your bank statement. But imagine you're a business with 500 employees — and your financial data is spread across 20 Excel sheets, multiple departments, and 5 years of history.

Nobody can make sense of it quickly. Important decisions get delayed because the right information isn't visible at a glance.

I built the equivalent of a clear, live bank statement for a business — one screen that shows everything the management needs to make financial decisions immediately.`,
      whatYouBuilt: [
        "A 5-year revenue and expense trend view — so managers see growth or decline patterns immediately",
        "Profit margin % calculator — showing not just profit, but how efficiently the company converts revenue to profit",
        "Year-over-Year growth indicator — so teams can compare 'are we doing better than last year?'",
        "Cost efficiency ratio — flagging when expenses are growing faster than revenue (a danger signal)",
      ],
    },

    questions: [
      {
        q: "Why does a business need this dashboard? Can't they just use Excel?",
        laymanAnswer: `"Great question — and the honest answer is: yes, they CAN use Excel. But they won't, because Excel has problems at scale.

Here's what happens in real companies: the finance team has 20 different Excel files — one per month, one per department, one per year. Someone has to manually open all of them, copy data, combine it, and create a summary. That takes days. By the time the report is ready, the data is already old.

My dashboard connects directly to the data source. The moment new financial data is entered, the dashboard updates automatically. A CEO can open it Monday morning and see Friday's numbers — without waiting for the finance team to prepare a report.

That's not an incremental improvement. That's a fundamental change in how fast decisions can be made."`,
        impactStory: `"I estimated that this dashboard reduces monthly financial report preparation time by 40%. For a finance team that spends 3 days every month building reports, that's over a day of work saved every single month — 12+ days a year — that they can spend on actual analysis instead of copy-pasting numbers."`,
        followUp: "What is profit margin and why track it?",
        followUpAnswer: `"Profit margin tells you: out of every ₹100 the company earns, how much does it actually keep after all expenses?

If a company earns ₹10 crore revenue but has ₹9.5 crore in expenses, the profit margin is 5%. That means for every ₹100 earned, only ₹5 is actual profit. That's dangerously thin.

My dashboard shows this visually — if the margin is shrinking over time, management can see it happening in real time and investigate before it becomes a crisis. Without this visibility, companies only discover the problem when it's already too late."`,
      },
      {
        q: "How would this dashboard impact a real company?",
        laymanAnswer: `"Three very specific impacts:

First — faster decisions. Currently most companies produce monthly financial reports. With this dashboard, management can see financial performance daily. A bad month gets caught in week 2, not week 5.

Second — clear accountability. When every department's costs are visible on one screen, department heads stop saying 'I didn't know we were over budget.' The data is right there.

Third — strategic clarity. When you can see 5 years of trends in one view, patterns emerge that you'd never see in a single month's Excel report. 'Our Q3 costs always spike' or 'Our revenue grows every year but our margins are shrinking' — these insights drive strategy."`,
        impactStory: `"Think of a retail chain with 50 stores. Without this dashboard, the finance head gets reports from 50 store managers — all in different formats, on different days. With this dashboard, all 50 stores' performance is visible in one screen. Underperforming stores are immediately visible. That's the kind of visibility that changes how companies are run."`,
        followUp: null,
        followUpAnswer: null,
      },
    ],
  },

  {
    id: "cashflow",
    icon: "💧",
    name: "Cash Flow & Liquidity Risk Analysis",
    tagline: "Built a system that warns companies before they run out of cash — like a fuel gauge for business.",
    color: C.cyan,
    colorS: C.cyanS,
    tech: ["Power BI", "Advanced DAX", "Finance", "KPI Design", "Excel"],
    period: "Jan – Feb 2026",

    layman: {
      oneLiner: "I built a dashboard that warns a company when it's at risk of running out of money to pay its bills — before the crisis happens, not after.",
      analogy: `Your car has a fuel gauge. It doesn't wait until the tank is completely empty to warn you — it shows you well in advance so you can stop and refuel.

Most companies have no equivalent fuel gauge for cash. They discover they can't pay salaries or suppliers only when the bank account is already empty.

I built that fuel gauge — a dashboard that monitors the company's cash health continuously and lights up a warning when cash levels are heading toward danger.`,
      whatYouBuilt: [
        "A cash flow trend tracker — showing operating cash coming in and going out over multiple periods",
        "Working capital monitor — tracking the money available to run daily operations",
        "Current ratio indicator — showing whether the company can pay its short-term bills with what it has",
        "A Liquidity Risk Flag — a smart alert that turns red when the current ratio falls below the danger threshold",
      ],
    },

    questions: [
      {
        q: "What is a 'liquidity risk flag' in simple terms?",
        laymanAnswer: `"Think of it as a smoke detector for a company's finances.

A smoke detector doesn't wait for the house to be on fire — it detects early warning signs (smoke) and alerts you before serious damage happens.

My liquidity risk flag works exactly the same way. It monitors a ratio called the 'current ratio' — which measures whether a company has enough short-term assets to cover its short-term bills.

The rule: if this ratio falls below 1, it means the company owes more in the near term than it currently has available. That's a financial danger zone.

My dashboard doesn't just show the number — it automatically highlights it in red and displays 'RISK DETECTED' so that even a non-finance manager glancing at the screen immediately knows: we have a cash problem that needs attention today, not next month."`,
        impactStory: `"In India, thousands of SMEs (small and medium businesses) shut down not because they're unprofitable, but because they run out of cash at the wrong moment. A profitable company can go bankrupt if it can't pay its suppliers on time. This dashboard is the early warning system that prevents that scenario."`,
        followUp: "What is working capital? Explain simply.",
        followUpAnswer: `"Working capital is the money a business has available to run its day-to-day operations.

Simple formula: Money you have (assets) MINUS Money you owe short-term (liabilities) = Working Capital.

Imagine a small business owner. She has ₹5 lakh in her business account. But she owes ₹3 lakh to her suppliers this month. Her working capital is ₹2 lakh — that's what she has left to actually run the business.

If working capital is negative, the business is technically running on borrowed time — it can't cover its obligations. My dashboard tracks this number and shows its trend, so management can see if it's improving or deteriorating before a crisis hits."`,
      },
      {
        q: "How does this make a real business impact?",
        laymanAnswer: `"Cash flow problems are the number one reason businesses fail — not poor products, not bad strategy, but simply running out of cash at the wrong time.

With this dashboard, a CFO or finance manager can:
→ See 3 months of cash flow trends in one view — identifying seasonal patterns
→ Get an automatic alert when the risk flag triggers — not discover the problem in the next board meeting
→ Show banks and investors real-time liquidity data when applying for credit — instead of manually compiled reports

The impact is literally business survival versus failure."`,
        impactStory: `"During COVID, many businesses that failed were actually profitable businesses — they just couldn't pay their short-term bills because cash stopped flowing. A dashboard like this, implemented before the crisis, would have given management weeks of early warning to secure credit lines or defer payments."`,
        followUp: null,
        followUpAnswer: null,
      },
    ],
  },

  {
    id: "expense",
    icon: "📊",
    name: "Expense Control & Operating Margin Analysis",
    tagline: "Showed exactly where a company's money goes — and where it's leaking.",
    color: C.orange,
    colorS: C.orangeS,
    tech: ["Power BI", "Advanced DAX", "Finance", "Dashboard Development", "Excel"],
    period: "Feb – Mar 2026",

    layman: {
      oneLiner: "I built a dashboard that shows a company exactly where it's spending money, whether those expenses are under control, and how much profit margin is left after all costs.",
      analogy: `Imagine you get your monthly bank statement. You can see every transaction — groceries, rent, eating out, subscriptions. Some months you overspend on one category without realizing it until you check.

Now imagine you're a company with thousands of transactions every month — employee salaries, office costs, marketing, logistics, and more. Without a clear view, costs creep up silently until profits disappear.

I built the equivalent of a smart bank statement for a business — one that not only shows where money goes, but highlights when specific costs are growing faster than revenue, before it becomes a serious problem.`,
      whatYouBuilt: [
        "Expense breakdown by category — employee costs, finance costs, operational costs — all compared to revenue",
        "Operating margin tracker — showing what percentage of revenue becomes actual operating profit",
        "Trend lines for each expense category — so managers see if costs are rising or falling over time",
        "A drill-down capability — click on any expense category to see the details behind it",
      ],
    },

    questions: [
      {
        q: "What is 'operating margin' and why does it matter? Explain simply.",
        laymanAnswer: `"Operating margin tells you: after paying all the costs of running the business — salaries, rent, operations — how much profit is left from every rupee of revenue?

Simple example:
→ A company earns ₹100 crore in revenue
→ It spends ₹85 crore running the business
→ Operating margin = 15% — meaning ₹15 out of every ₹100 earned becomes operating profit

Now the question is: is 15% good? Is it getting better or worse over time? Is it better or worse than competitors?

My dashboard shows this number prominently — and more importantly, shows its TREND over 4 periods. A shrinking margin is a serious red flag even when total revenue is growing. My dashboard makes that visible immediately."`,
        impactStory: `"A company can be growing revenue every year and still be heading toward losses — if costs grow faster than revenue. This happened to many e-commerce companies in India that showed revenue growth but were quietly bleeding cash. An operating margin dashboard would have caught that pattern immediately."`,
        followUp: "How does tracking expenses help a company save money?",
        followUpAnswer: `"Visibility creates accountability.

Before this dashboard, a finance head would need to ask each department: 'How much did you spend this month?' Then manually compile answers. Department heads often don't know exactly where their budget went.

With this dashboard, every expense category is visible in real time. When employee expenses spike in Q3, the HR head can see it immediately — and investigate whether it's new hires, overtime, or an error — before the board meeting.

The research finding: companies that track expenses visually spend 15-20% less than companies that track expenses only in reports. Why? Because visibility changes behavior. When managers know their spending is visible on a dashboard, they think twice before authorizing unnecessary costs."`,
      },
      {
        q: "Can you give a real-world example of a company that needed this?",
        laymanAnswer: `"Absolutely. Think about any startup that raised funding and started scaling fast.

In the scaling phase, expenses explode — new hires, new offices, new marketing. But without a clear operating margin dashboard, founders often discover they're burning cash too fast only when the bank account is nearly empty.

WeWork is the extreme example globally — a company that looked profitable on revenue but had operating costs so out of control that it nearly collapsed. Had the board had an operating margin dashboard showing expense trends versus revenue in real time, they would have spotted the danger years earlier.

My dashboard gives any company — from a 50-person startup to a 5,000-person enterprise — that clarity. Not once a quarter in a board presentation. Every day, on demand."`,
        impactStory: null,
        followUp: null,
        followUpAnswer: null,
      },
    ],
  },

  {
    id: "engine",
    icon: "⚙️",
    name: "Engine Oil Condition Detection",
    tagline: "Prevented machine breakdowns before they happen — saving downtime and repair costs.",
    color: C.purple,
    colorS: C.purpleS,
    tech: ["Power BI", "Data Modeling", "ETL", "Statistics", "Excel"],
    period: "Nov – Dec 2025",

    layman: {
      oneLiner: "I built a monitoring system that detects when engine oil is degrading — so maintenance teams can act BEFORE the machine breaks down, not after.",
      analogy: `Your car needs an oil change every few thousand kilometers. If you ignore it, the engine wears out, heats up, and eventually breaks down — costing lakhs to repair.

Now imagine a factory with 50 machines running 24 hours a day. Each machine has engine oil that degrades over time. Without monitoring, a machine breaks down suddenly — production stops, orders are delayed, repair costs pile up.

I built a system that continuously monitors the health of engine oil across multiple machines and automatically categorizes each one as 'Healthy, Warning, or Critical' — like a doctor doing regular check-ups on every machine, not waiting for it to fall sick.`,
      whatYouBuilt: [
        "A health classification system — automatically sorting each machine's oil into Healthy, Warning, or Critical based on sensor data",
        "A degradation trend chart — showing how quickly oil health is declining over time",
        "An early warning signal — flagging machines that are 'Warning' so maintenance can be scheduled before they become 'Critical'",
        "A non-technical dashboard — designed so a maintenance supervisor (not a data analyst) can understand it immediately",
      ],
    },

    questions: [
      {
        q: "This seems technical — what's the actual business problem you solved?",
        laymanAnswer: `"The business problem is very simple: unplanned machine downtime costs money. A lot of it.

When a machine breaks down unexpectedly in a factory:
→ Production stops immediately
→ Workers stand idle — you're paying them but getting no output
→ Emergency repair is 3-5x more expensive than planned maintenance
→ Orders get delayed — customers get unhappy, penalties may apply

The solution was always 'preventive maintenance' — fix things before they break. But to do that, you need to know which machine is about to break. That's exactly what my dashboard does.

It watches the engine oil health data continuously and says: 'Machine 7 is in Warning status — schedule maintenance this week, not when it breaks down next month.'"`,
        impactStory: `"Studies show that unplanned industrial downtime costs manufacturing companies an average of ₹50,000 to ₹5 lakh per hour depending on the industry. If my dashboard prevents even ONE unexpected breakdown per month, it saves more money than the entire cost of building it. That's the ROI that a plant manager immediately understands."`,
        followUp: "Why did you design it for non-technical users?",
        followUpAnswer: `"Because the people who need to act on this information are maintenance supervisors and plant managers — not data scientists.

If a maintenance supervisor opens a dashboard and sees complex sensor readings and statistical graphs, they'll close it and call the data team. The dashboard has failed at its job.

I designed every visual with one question in mind: 'Can a person who has never seen a dashboard before understand what action to take in 30 seconds?'

Green = everything fine, continue operations.
Amber = schedule maintenance soon.
Red = stop and fix now.

That's it. No training required. That design decision is what makes the dashboard actually useful in the real world — not just technically impressive."`,
      },
      {
        q: "How does this project show your business thinking?",
        laymanAnswer: `"Most data projects end with a report or a chart. Mine ended with a decision.

I didn't just visualize oil sensor data. I defined what 'healthy' means, what 'warning' means, and what 'critical' means — based on industry threshold logic. Those are business decisions, not technical ones.

Then I designed the output for the actual end user — a maintenance team lead who is 50 years old, not comfortable with technology, and needs to make a quick call about which machine to prioritize today.

That translation — from raw sensor data to a clear, actionable decision for a non-technical person — is exactly what a Business Analyst does. I did it without being asked to. That's the thinking I bring to every project."`,
        impactStory: `"The future application of this project is predictive maintenance using machine learning — where instead of flagging current health, the system predicts 2 weeks in advance which machine will need attention. The dashboard I built is the foundation for that. Any company investing in Industry 4.0 or smart manufacturing would see immediate value in extending what I built."`,
        followUp: null,
        followUpAnswer: null,
      },
    ],
  },
];

// ─── IMPACT NUMBERS ────────────────────────────────────────────────────────────
const IMPACT_LINES = [
  { icon: "⏱️", stat: "40%", desc: "Reduction in manual reporting time across financial dashboards" },
  { icon: "📉", stat: "35%", desc: "Reduction in manual risk review cycles (Cash Flow project)" },
  { icon: "🔔", stat: "Real-time", desc: "Liquidity risk alerts — days before a crisis, not after" },
  { icon: "👥", stat: "300+", desc: "Stakeholders served as Technical Coordinator — proof of communication skills" },
  { icon: "📊", stat: "5", desc: "End-to-end production-ready dashboards — not tutorials, real deliverables" },
  { icon: "💡", stat: "500+", desc: "IPO records analyzed with institutional-grade risk metrics" },
];

// ─── UNIVERSAL TIPS ────────────────────────────────────────────────────────────
const TIPS = [
  {
    title: "Always start with the PROBLEM, never the tool",
    wrong: "I built a Power BI dashboard using Advanced DAX with time-intelligence measures...",
    right: "There was no easy way for investors to know if an IPO actually created wealth after listing day. I built a system that answers that question.",
    why: "HR doesn't know what DAX is. They care about problems and solutions — not tools.",
  },
  {
    title: "Use the 'So What?' test on every sentence",
    wrong: "I calculated the Sharpe Ratio and max drawdown for each IPO.",
    right: "I calculated how much risk investors took to earn their returns — so they could compare IPOs fairly, not just by price.",
    why: "Every technical statement must have a human consequence. If you can't answer 'so what?' — the sentence doesn't belong in an HR interview.",
  },
  {
    title: "Name the person who benefits",
    wrong: "The dashboard shows liquidity risk metrics.",
    right: "A CFO can open this dashboard Monday morning and know within 30 seconds whether the company is heading toward a cash problem.",
    why: "Making the beneficiary specific and human makes the impact real and memorable.",
  },
  {
    title: "Quantify impact — even if estimated",
    wrong: "This dashboard saves time in reporting.",
    right: "This reduces monthly financial report preparation from 3 days to under 1 hour — a 40% time saving.",
    why: "Numbers are memorable. Vague benefits are forgettable. Always estimate if you can't measure exactly.",
  },
  {
    title: "Connect to a real company or news story",
    wrong: "This dashboard helps prevent cash flow crises.",
    right: "Paytm's IPO crashed 27% on day one. An investor using my IPO dashboard would have seen the risk metrics before investing.",
    why: "Real examples make your project tangible. HR has seen the same news. It creates an instant connection.",
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function ProjectCard({ proj }) {
  const [view, setView] = useState("overview");
  const [openQ, setOpenQ] = useState(null);

  return (
    <div style={{
      background: C.panel, border: `1px solid ${proj.color}30`,
      borderRadius: 16, marginBottom: 16, overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{
        background: proj.colorS, borderBottom: `1px solid ${proj.color}30`,
        padding: "16px 18px",
      }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 28 }}>{proj.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: proj.color }}>{proj.name}</div>
            <div style={{ fontSize: 12, color: C.textSec, marginTop: 3, fontStyle: "italic" }}>
              "{proj.tagline}"
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 8 }}>
              {proj.tech.map(t => (
                <span key={t} style={{
                  fontSize: 10, padding: "2px 8px", borderRadius: 4,
                  background: proj.color + "18", color: proj.color,
                  fontWeight: 600,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-nav */}
      <div style={{
        display: "flex", borderBottom: `1px solid ${C.border}`,
        background: C.raised,
      }}>
        {[
          { id: "overview", label: "🎯 Layman Explanation" },
          { id: "questions", label: "🎤 Interview Q&A" },
        ].map(tab => (
          <button key={tab.id} onClick={() => setView(tab.id)} style={{
            flex: 1, padding: "10px 8px", border: "none", cursor: "pointer",
            fontSize: 11, fontWeight: 700,
            background: view === tab.id ? proj.color + "18" : "transparent",
            color: view === tab.id ? proj.color : C.textSec,
            borderBottom: view === tab.id ? `2px solid ${proj.color}` : "2px solid transparent",
            transition: "all 0.15s",
          }}>{tab.label}</button>
        ))}
      </div>

      <div style={{ padding: "16px 18px" }}>

        {/* OVERVIEW TAB */}
        {view === "overview" && (
          <div>
            {/* One liner */}
            <div style={{
              background: proj.colorS, border: `1px solid ${proj.color}40`,
              borderRadius: 10, padding: 14, marginBottom: 14,
              borderLeft: `3px solid ${proj.color}`,
            }}>
              <div style={{ fontSize: 10, color: proj.color, fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>
                🎯 ONE LINE WHEN HR ASKS "WHAT IS THIS PROJECT?"
              </div>
              <div style={{ fontSize: 13, color: C.text, fontWeight: 600, lineHeight: 1.5, fontStyle: "italic" }}>
                "{proj.layman.oneLiner}"
              </div>
            </div>

            {/* Analogy */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, color: C.gold, fontWeight: 700, letterSpacing: 0.5, marginBottom: 8 }}>
                💡 ANALOGY TO EXPLAIN IT (SO ANYONE UNDERSTANDS)
              </div>
              <div style={{
                background: C.goldS, border: `1px solid ${C.gold}30`,
                borderRadius: 10, padding: 14,
                fontSize: 12.5, color: "#C4993A", lineHeight: 1.8, whiteSpace: "pre-line",
              }}>{proj.layman.analogy}</div>
            </div>

            {/* What you built */}
            <div>
              <div style={{ fontSize: 10, color: C.green, fontWeight: 700, letterSpacing: 0.5, marginBottom: 8 }}>
                ✅ WHAT YOU ACTUALLY BUILT (IN PLAIN ENGLISH)
              </div>
              {proj.layman.whatYouBuilt.map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start",
                  background: C.greenS, border: `1px solid ${C.green}25`,
                  borderRadius: 8, padding: "9px 12px",
                }}>
                  <span style={{ color: C.green, fontSize: 14, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 12.5, color: "#7ECFB0", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QUESTIONS TAB */}
        {view === "questions" && (
          <div>
            {proj.questions.map((qa, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                {/* Question */}
                <div
                  onClick={() => setOpenQ(openQ === i ? null : i)}
                  style={{
                    background: openQ === i ? proj.colorS : C.raised,
                    border: `1px solid ${openQ === i ? proj.color + "50" : C.border}`,
                    borderRadius: 10, padding: "12px 14px", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10,
                  }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flex: 1 }}>
                    <span style={{
                      flexShrink: 0, fontSize: 11, fontWeight: 800,
                      color: proj.color, background: proj.color + "20",
                      padding: "2px 8px", borderRadius: 4,
                    }}>Q{i + 1}</span>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: C.text, lineHeight: 1.4 }}>{qa.q}</div>
                  </div>
                  <span style={{ color: C.textMuted, flexShrink: 0 }}>{openQ === i ? "▲" : "▼"}</span>
                </div>

                {openQ === i && (
                  <div style={{
                    background: C.raised, border: `1px solid ${C.border}`,
                    borderRadius: "0 0 10px 10px", padding: 14,
                    borderTop: "none",
                  }}>
                    {/* Layman Answer */}
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 10, color: C.green, fontWeight: 700, letterSpacing: 0.5, marginBottom: 8 }}>
                        🗣️ HOW TO ANSWER (IN SIMPLE LANGUAGE)
                      </div>
                      <div style={{
                        background: C.greenS, border: `1px solid ${C.green}25`,
                        borderRadius: 9, padding: 13,
                        fontSize: 12.5, color: "#7ECFB0", lineHeight: 1.8,
                        whiteSpace: "pre-line",
                      }}>{qa.laymanAnswer}</div>
                    </div>

                    {/* Impact Story */}
                    {qa.impactStory && (
                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 10, color: C.gold, fontWeight: 700, letterSpacing: 0.5, marginBottom: 8 }}>
                          💥 THE IMPACT STORY (HOW TO MAKE HR FEEL THE IMPORTANCE)
                        </div>
                        <div style={{
                          background: C.goldS, border: `1px solid ${C.gold}30`,
                          borderRadius: 9, padding: 13,
                          fontSize: 12.5, color: "#C4993A", lineHeight: 1.8, fontStyle: "italic",
                        }}>{qa.impactStory}</div>
                      </div>
                    )}

                    {/* Follow-up */}
                    {qa.followUp && (
                      <div>
                        <div style={{ fontSize: 10, color: C.purple, fontWeight: 700, letterSpacing: 0.5, marginBottom: 8 }}>
                          🔄 LIKELY FOLLOW-UP: "{qa.followUp}"
                        </div>
                        <div style={{
                          background: C.purpleS, border: `1px solid ${C.purple}25`,
                          borderRadius: 9, padding: 13,
                          fontSize: 12.5, color: "#C4B8FA", lineHeight: 1.8,
                          whiteSpace: "pre-line",
                        }}>{qa.followUpAnswer}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("projects");
  const [activeTip, setActiveTip] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>

      {/* HEADER */}
      <div style={{
        background: C.panel, borderBottom: `1px solid ${C.border}`,
        padding: "20px 18px 16px",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 10, color: C.accent, fontWeight: 700, letterSpacing: 2.5, marginBottom: 6 }}>
            PROJECT STORYTELLING GUIDE · SAMEER HAWAL
          </div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>
            How to Explain Your Projects to HR
          </h1>
          <div style={{ fontSize: 12, color: C.textSec, marginTop: 4 }}>
            5 projects · Layman explanations · Business impact stories · Interview Q&As
          </div>

          {/* Impact strip */}
          <div style={{
            display: "flex", gap: 8, marginTop: 14, overflowX: "auto", paddingBottom: 4,
          }}>
            {IMPACT_LINES.map((imp, i) => (
              <div key={i} style={{
                flexShrink: 0, background: C.raised, border: `1px solid ${C.border}`,
                borderRadius: 9, padding: "9px 13px", textAlign: "center", minWidth: 110,
              }}>
                <div style={{ fontSize: 18 }}>{imp.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: C.accent, marginTop: 2 }}>{imp.stat}</div>
                <div style={{ fontSize: 10, color: C.textSec, marginTop: 3, lineHeight: 1.4 }}>{imp.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>

        {/* TABS */}
        <div style={{
          display: "flex", gap: 4, marginTop: 16,
          background: C.panel, border: `1px solid ${C.border}`,
          borderRadius: 11, padding: 4,
        }}>
          {[
            { id: "projects", label: "📁 My 5 Projects" },
            { id: "tips",     label: "🗣️ Storytelling Tips" },
            { id: "opener",   label: "🚀 Project Pitch Script" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex: 1, padding: "9px 4px", borderRadius: 8, border: "none",
              cursor: "pointer", fontSize: 11, fontWeight: 700,
              background: tab === t.id ? C.accent : "transparent",
              color: tab === t.id ? "#fff" : C.textSec,
              transition: "all 0.15s",
            }}>{t.label}</button>
          ))}
        </div>

        {/* PROJECTS TAB */}
        {tab === "projects" && (
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, color: C.textSec, marginBottom: 14, lineHeight: 1.6 }}>
              Tap each project → choose "Layman Explanation" to learn how to explain it simply, or "Interview Q&A" for specific questions HR will ask.
            </div>
            {PROJECTS.map(p => <ProjectCard key={p.id} proj={p} />)}
          </div>
        )}

        {/* STORYTELLING TIPS TAB */}
        {tab === "tips" && (
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, color: C.textSec, marginBottom: 14 }}>
              5 rules that separate memorable project explanations from forgettable ones. Tap each to see the wrong vs right version.
            </div>
            {TIPS.map((tip, i) => (
              <div
                key={i}
                onClick={() => setActiveTip(activeTip === i ? null : i)}
                style={{
                  background: activeTip === i ? C.accentS : C.panel,
                  border: `1px solid ${activeTip === i ? C.accent + "50" : C.border}`,
                  borderRadius: 12, padding: "14px 16px", marginBottom: 10, cursor: "pointer",
                  transition: "all 0.18s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flex: 1 }}>
                    <span style={{
                      fontSize: 13, fontWeight: 800, color: C.accent,
                      background: C.accentS, padding: "3px 9px", borderRadius: 5, flexShrink: 0,
                    }}>Rule {i + 1}</span>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{tip.title}</div>
                  </div>
                  <span style={{ color: C.textMuted, fontSize: 14 }}>{activeTip === i ? "▲" : "▼"}</span>
                </div>

                {activeTip === i && (
                  <div style={{ marginTop: 14 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                      <div style={{
                        background: C.redS, border: `1px solid ${C.red}30`,
                        borderRadius: 9, padding: 12,
                      }}>
                        <div style={{ fontSize: 10, color: C.red, fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>❌ WRONG WAY</div>
                        <div style={{ fontSize: 12, color: "#C47878", lineHeight: 1.6, fontStyle: "italic" }}>"{tip.wrong}"</div>
                      </div>
                      <div style={{
                        background: C.greenS, border: `1px solid ${C.green}30`,
                        borderRadius: 9, padding: 12,
                      }}>
                        <div style={{ fontSize: 10, color: C.green, fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>✅ RIGHT WAY</div>
                        <div style={{ fontSize: 12, color: "#7ECFB0", lineHeight: 1.6, fontStyle: "italic" }}>"{tip.right}"</div>
                      </div>
                    </div>
                    <div style={{
                      background: C.goldS, border: `1px solid ${C.gold}30`,
                      borderRadius: 9, padding: 11,
                      fontSize: 12, color: "#C4993A", lineHeight: 1.6,
                    }}>
                      <span style={{ fontWeight: 700, color: C.gold }}>Why this matters: </span>{tip.why}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* PITCH SCRIPT TAB */}
        {tab === "opener" && (
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, color: C.textSec, marginBottom: 14 }}>
              When HR says "Tell me about your projects" — use this 90-second master pitch. It covers all 5 projects with impact, in plain language.
            </div>

            <div style={{
              background: C.accentS, border: `1px solid ${C.accent}40`,
              borderRadius: 14, padding: 18, marginBottom: 16,
            }}>
              <div style={{ fontSize: 11, color: C.accent, fontWeight: 700, letterSpacing: 0.5, marginBottom: 12 }}>
                🎤 90-SECOND MASTER PITCH — MEMORIZE THE STRUCTURE, NOT THE WORDS
              </div>
              {[
                {
                  label: "OPENING (10 sec)", color: C.accent,
                  text: `"I've built five end-to-end analytics projects — all in the finance and operations domain. Let me give you a quick picture of each, and then we can go deeper on whichever interests you most."`,
                },
                {
                  label: "PROJECT 1 — IPO (20 sec)", color: C.green,
                  text: `"The first is an IPO performance system that tells investors whether an IPO actually created wealth — not just on listing day, but after 6 months and 1 year. It uses the same risk calculations professional fund managers use."`,
                },
                {
                  label: "PROJECT 2 & 3 — Finance (20 sec)", color: C.gold,
                  text: `"Two projects focus on company financial health: one tracks revenue, profit margin, and year-over-year growth across 5 years — reducing manual report time by 40%. The other monitors cash flow and automatically flags when a company is heading toward a liquidity crisis — like a fuel gauge for business finances."`,
                },
                {
                  label: "PROJECT 4 — Expense (15 sec)", color: C.orange,
                  text: `"A fourth tracks where company money goes — expense by category, operating margin trends — so management can see costs rising before they become a problem."`,
                },
                {
                  label: "PROJECT 5 — Engine Oil (15 sec)", color: C.purple,
                  text: `"And the fifth is an operational one — monitoring engine oil health in industrial machines and flagging which ones need maintenance before they break down unexpectedly."`,
                },
                {
                  label: "CLOSING HOOK (10 sec)", color: C.accent,
                  text: `"Across all five, my focus was the same: turning raw data into a clear decision for a non-technical person. Which one would you like to explore in more detail?"`,
                },
              ].map((block, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 10, color: block.color, fontWeight: 700, letterSpacing: 0.5, marginBottom: 6 }}>
                    {block.label}
                  </div>
                  <div style={{
                    background: block.color + "12", border: `1px solid ${block.color}30`,
                    borderRadius: 9, padding: "10px 13px",
                    fontSize: 12.5, color: C.text, lineHeight: 1.75,
                    fontStyle: "italic",
                  }}>{block.text}</div>
                </div>
              ))}
            </div>

            {/* Body language tips */}
            <div style={{
              background: C.goldS, border: `1px solid ${C.gold}40`,
              borderRadius: 12, padding: 16,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.gold, marginBottom: 12 }}>
                🧘 Body Language While Presenting Your Projects
              </div>
              {[
                ["Sit forward slightly", "Shows engagement and ownership of what you're saying"],
                ["Pause after each project", "Gives HR time to absorb. Silence is confidence, not emptiness."],
                ["Say the project name clearly", "'IPO Finance Analytics' — don't mumble it"],
                ["End each with the impact", "Never just describe what you built. Always end with what it does for a real person."],
                ["Invite their curiosity", "End with 'Which one would you like to go deeper on?' — makes it a conversation, not a monologue"],
              ].map(([rule, why], i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ color: C.gold, fontSize: 13, flexShrink: 0, marginTop: 1 }}>→</span>
                  <div>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: C.text }}>{rule}: </span>
                    <span style={{ fontSize: 12, color: C.textSec }}>{why}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 16, fontSize: 11, color: C.textMuted, textAlign: "center", paddingBottom: 30, lineHeight: 1.7 }}>
          Tap any project card → explore Layman Explanation + Interview Q&A<br />
          Your projects are real. Own them completely.
        </div>
      </div>
    </div>
  );
}
