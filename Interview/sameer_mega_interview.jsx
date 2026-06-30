import { useState, useMemo } from "react";

const C = {
  bg:"#05070C", panel:"#0A0E16", raised:"#0F141F", border:"#161E2C",
  accent:"#4F7EF7", accentS:"#0E1C3D",
  green:"#2DD4A0", greenS:"#062218",
  gold:"#E8B84B", goldS:"#221A05",
  purple:"#A78BFA", purpleS:"#150F30",
  red:"#F26464", redS:"#220A0A",
  cyan:"#22D3EE", cyanS:"#041820",
  orange:"#FB923C", orangeS:"#200E04",
  pink:"#F472B6", pinkS:"#220A18",
  text:"#ECF0FA", textSec:"#64748B", textMuted:"#253040",
};

const CATEGORIES = [
  { id:"project",   label:"🗂️ Project",         color:C.accent,  colorS:C.accentS  },
  { id:"role",      label:"💼 Role & Company",   color:C.green,   colorS:C.greenS   },
  { id:"hr",        label:"🤝 HR & Behavioural", color:C.gold,    colorS:C.goldS    },
  { id:"powerbi",   label:"📊 Power BI",         color:C.purple,  colorS:C.purpleS  },
  { id:"excel",     label:"📋 Excel",            color:C.cyan,    colorS:C.cyanS    },
  { id:"sql",       label:"🗄️ SQL",              color:C.orange,  colorS:C.orangeS  },
  { id:"python",    label:"🐍 Python",           color:C.pink,    colorS:C.pinkS    },
  { id:"analytics", label:"📈 Analytics & AI",   color:C.red,     colorS:C.redS     },
  { id:"math",      label:"🔢 Logical & Math",   color:C.gold,    colorS:C.goldS    },
];

const QA = [
  // ── PROJECT ──────────────────────────────────────────────────────────────
  {
    id:1, cat:"project",
    q:"From the projects you made — what insights did you get?",
    a:`"From my five Power BI projects, I drew several meaningful insights:

From the IPO Finance Analytics project: I found that most IPOs that show a high listing-day gain often underperform over a 6-month and 1-year horizon. The Sharpe Ratio revealed that very few IPOs actually justified the risk investors took. This is an insight that retail investors rarely have access to.

From the Cash Flow & Liquidity Risk project: I observed that companies with strong revenue can still face liquidity stress if their working capital cycle is poor — meaning they earn money but collect it late while paying vendors early. The current ratio trend line made this visible at a glance.

From the Financial Performance project: I found that while revenue was growing year on year, profit margins were quietly shrinking — indicating that costs were growing faster than revenue. Without a trend view, this would have been invisible in a monthly report.

From the Engine Oil dashboard: I found that oil degradation follows a predictable pattern — and warning signals appear 2 to 3 maintenance cycles before actual failure. Early intervention reduces emergency repair costs significantly.

The common insight across all projects: raw data never speaks for itself. The insight only emerges when you define the right question first and then build the right metric to answer it."`,
  },
  {
    id:2, cat:"project",
    q:"How did you help and contribute to company growth through your projects?",
    a:`"While my projects were built independently, each one was designed to solve a real business problem that directly impacts growth:

My Financial Performance dashboard reduced manual reporting effort by 40% — meaning the finance team spends less time compiling reports and more time on actual analysis. That is a direct productivity gain.

My Cash Flow dashboard provides early warning of liquidity risk — preventing the cash crises that cause companies to take expensive emergency loans or miss vendor payments. Avoiding one such crisis can save lakhs of rupees.

My IPO Analytics dashboard gives investors data-driven insight for investment decisions — reducing losses from poor IPO choices and improving portfolio quality.

My Expense Control dashboard makes cost overruns visible before they become losses — enabling managers to intervene early.

My Engine Oil dashboard enables proactive maintenance scheduling — preventing unplanned machine downtime that can cost a manufacturing company ₹50,000 to ₹5 lakh per hour.

In a real company setting, these are not incremental improvements — they are decisions that directly affect revenue, cost, and operational continuity. That is how data analysis contributes to growth."`,
  },
  {
    id:3, cat:"project",
    q:"What are your key insights and key findings from your projects?",
    a:`"Key findings across my projects:

IPO Project: Only 30–40% of IPOs with high listing gains maintained positive returns at 6 months. Sharpe Ratio below 0.5 was a consistent predictor of poor long-term performance.

Cash Flow Project: Companies with current ratio below 1.2 showed recurring cash stress patterns, even when their annual profit was positive.

Financial Performance Project: Year-over-year revenue growth above 10% masked a declining profit margin — costs were growing at 14% while revenue grew at 10%.

Expense Control Project: Employee expense and finance costs together accounted for 70–75% of total operating costs — making them the primary levers for margin improvement.

Engine Oil Project: Oil health degraded fastest in the first 20% and last 20% of its operational cycle — with a relatively stable middle period. Scheduling maintenance in the early warning window reduced critical failures by an estimated 50%.

The overarching finding: every business has a metric that matters most, and every problem has an early signal. The job of a data analyst is to find that signal before the crisis arrives."`,
  },

  // ── ROLE & COMPANY ────────────────────────────────────────────────────────
  {
    id:4, cat:"role",
    q:"Why does a company require a data analyst?",
    a:`"Every company generates enormous amounts of data — sales records, customer behaviour, financial transactions, operational logs. But data alone does not drive decisions. Decisions require insight — and insight requires a data analyst.

A data analyst helps a company in four specific ways:

First, converting raw data into clear, actionable reports that management can act on — without needing to understand the underlying data themselves.

Second, identifying trends and patterns that are invisible in spreadsheets — such as seasonal sales patterns, customer churn signals, or rising cost categories.

Third, measuring business performance through KPIs and dashboards — so the company always knows whether it is on track to meet its goals.

Fourth, reducing decision-making time. Without a data analyst, a manager waits days for a report. With a data analyst and a live dashboard, the answer is available in seconds.

In short, a company needs a data analyst because data without analysis is just noise. A data analyst turns that noise into a clear signal."`,
  },
  {
    id:5, cat:"role",
    q:"What will you do as a data analyst in a company?",
    a:`"As a data analyst, my day-to-day responsibilities would include:

One — Collecting and cleaning data from various sources: databases, Excel files, APIs, or CRM systems. Raw data is almost always messy and needs to be structured before analysis.

Two — Exploring the data through Exploratory Data Analysis to understand distributions, outliers, and patterns before drawing any conclusions.

Three — Building dashboards and reports in Power BI or Excel that give stakeholders a clear, real-time view of business performance.

Four — Designing KPIs in collaboration with business teams — deciding what to measure and what good looks like.

Five — Identifying anomalies and insights — for example, if sales drop in a specific region, diagnosing the cause and presenting findings to management.

Six — Writing SQL queries to extract specific data from company databases for ad-hoc analysis requests.

Seven — Communicating findings clearly to non-technical audiences — translating data insights into business language that decision-makers can act on.

In summary, I turn raw business data into decisions."`,
  },
  {
    id:6, cat:"role",
    q:"Why are you planning to become a data analyst?",
    a:`"I chose data analytics deliberately, not by default.

During my engineering course, I worked with a financial dataset and realised that the most valuable moment was not the analysis itself — it was the insight that emerged from it. The moment when a pattern in numbers revealed something real about a business decision — that was what excited me.

I then built five end-to-end dashboards across finance and operations — IPO risk analysis, liquidity monitoring, profitability analysis, expense control, and machine health monitoring. Each project reinforced the same feeling: data analysis sits at the centre of every business decision.

I also discovered that I naturally think in business problems first and technical solutions second. When I built my cash flow dashboard, I did not start with Power BI — I started with the question: how would a CFO know a cash crisis is coming before it arrives?

That is the mindset of a data analyst. And it is the mindset I want to build my career on."`,
  },
  {
    id:7, cat:"role",
    q:"We need a team member, not a team leader. What is your opinion?",
    a:`"I completely understand and respect that. As a fresher joining the organisation, my priority is to learn, contribute, and earn trust — not to lead.

Being an effective team member means three things to me:

First, understanding the team's goals and aligning my work to support them — not pursuing my own agenda.

Second, communicating clearly and proactively — updating the team on progress, flagging blockers early, and never letting a problem sit silently.

Third, being reliable. If I commit to delivering a report by Thursday, it is ready by Thursday.

I served as Vice-Chair of IEEE and Technical Coordinator for a national symposium — both roles where I had to follow direction, coordinate with peers, and support a larger team goal. I learned more in those roles by listening than by directing.

I am here to contribute and grow. Leadership is something I will earn over time, not claim on day one."`,
  },
  {
    id:8, cat:"role",
    q:"What do you know about our company? (Generic framework)",
    a:`"I always research a company before an interview. Here is my framework for answering this question genuinely:

Before every interview, I find out: what the company does, which industry it serves, who its major clients or products are, recent news or announcements, and how data analytics fits into their business model.

For a data-focused company, I would specifically look at: what data products or services they offer, what tools their team uses (Power BI, Tableau, Python), and what business problems their analysts typically solve.

During the interview, I connect this research to my own experience: 'I noticed your company works heavily in financial analytics — my IPO and cash flow projects are directly aligned with that domain.'

If I genuinely do not know something about the company, I say so honestly and ask: 'Could you tell me more about how the analytics team is structured here?' — which shows curiosity and preparation."`,
  },
  {
    id:9, cat:"role",
    q:"Where do you see yourself in 5 years?",
    a:`"In 5 years, I see myself as a Senior Data Analyst or Analytics Lead who can independently own the full analytics lifecycle — from stakeholder requirement gathering to final insight delivery.

More specifically:
In Year 1–2: I want to master the fundamentals in a real business environment — working with production databases, handling messy real-world data, and delivering dashboards that stakeholders actually use.

In Year 3: I want to develop deep domain expertise — whether in finance analytics, operations, or whatever industry I am working in — so I can anticipate what questions the business will ask before they ask them.

In Year 4–5: I want to lead analytics projects, mentor junior analysts, and contribute to the organisation's data strategy — not just execute requests, but proactively identify opportunities where data can drive decisions.

I am also investing in Generative AI skills — because in 5 years, every data analyst will need to understand how AI augments their work. I want to be ahead of that curve, not catching up to it."`,
  },
  {
    id:10, cat:"role",
    q:"Why must we hire you in our company?",
    a:`"Three specific reasons — not adjectives, but evidence:

First: Finance domain depth. I have built five dashboards in financial and operational analytics — IPO risk, cash flow, profitability, expense control, and machine health monitoring. I understand what metrics matter in a business context, not just how to build charts. That domain knowledge is rare in a fresher.

Second: I think in business problems, not just data problems. When I built my cash flow dashboard, I did not start with the tool — I started with the question a CFO would ask on a Monday morning. That framing — problem first, tool second — is what makes analysis actually useful to a business.

Third: I have demonstrated real-world delivery. Five completed, deployed dashboards with live links. SQL practice validated on two platforms — 50+ LeetCode and 60+ HackerRank. Completing PL-300 and Generative AI certifications simultaneously.

I am a fresher — I know that. But I am a fresher who already thinks and delivers like an analyst. I will close any remaining gap faster than most because the foundation is already solid."`,
  },
  {
    id:11, cat:"role",
    q:"Tell me about yourself and your academic background.",
    a:`"I am Sameer Hawal, a Computer Science Engineering graduate from DKTE Society's Textile and Engineering Institute, Kolhapur — with a CGPA of 7.67.

During my degree, I specialised in data analytics and built five end-to-end Power BI dashboards covering financial analytics, operational monitoring, and investment risk analysis. These were not tutorial projects — each one was designed around a real business question.

Beyond academics, I served as Vice-Chair of the IEEE Computer Society chapter and Technical Coordinator for Tech-Symposium 2K25 — a national-level event with 300+ participants — which gave me hands-on experience in stakeholder management and cross-functional coordination.

Technically, I work with Power BI and Advanced DAX, SQL across MySQL and PostgreSQL, Python with Pandas and NumPy, and Advanced Excel. I am currently completing the Microsoft PL-300 certification and a Generative AI for Data Professionals program.

My academic background gave me the technical foundation. My projects gave me the business thinking. And my leadership roles gave me the communication and coordination skills. Together, I believe that is a strong starting point for a data analyst role."`,
  },
  {
    id:12, cat:"role",
    q:"What is the difference between a data analyst, business analyst, and finance analyst?",
    a:`"All three work with data — but they serve different purposes:

Data Analyst: Focuses on collecting, cleaning, and analysing raw data to find patterns and trends. The output is insights, dashboards, and reports. Tools: SQL, Python, Power BI, Excel. The question they answer is: 'What is happening in the data?'

Business Analyst: Focuses on understanding business processes and requirements, translating them into solutions — which may or may not involve data. The output is requirements documents, process improvements, and stakeholder communication. The question they answer is: 'What does the business need, and how do we solve it?'

Finance Analyst: Focuses specifically on financial data — revenue, costs, margins, risk, valuations, and investment performance. The output is financial models, forecasts, and investment recommendations. The question they answer is: 'How is the company performing financially, and what should we do about it?'

My profile sits at the intersection of all three — I build data-driven dashboards (data analyst), design them around business questions (business analyst mindset), and specialise in financial metrics like Sharpe ratio, liquidity risk, and operating margin (finance analyst knowledge)."`,
  },
  {
    id:13, cat:"role",
    q:"If we select you as a data analyst, what will you do in the first 3 months?",
    a:`"I would structure my first 3 months in three phases:

Month 1 — Learn:
Understand the business: what the company does, who the stakeholders are, what decisions they make regularly.
Understand the data: what systems exist, where data lives, what the data quality looks like.
Shadow existing reports and dashboards — understand what is already built and why.
Ask more questions than I answer.

Month 2 — Contribute:
Take ownership of one small, defined deliverable — a recurring report, a dashboard update, or a data cleaning task.
Write SQL queries to extract and validate data independently.
Identify one inefficiency in the current reporting process and propose a solution.

Month 3 — Deliver:
Build or improve one dashboard that solves a real business problem.
Present findings to at least one stakeholder and receive feedback.
Document my work so it can be maintained by the team.

The goal of Month 1 is to understand. Month 2 is to contribute. Month 3 is to deliver. I do not aim to impress in week one — I aim to build trust over 90 days."`,
  },
  {
    id:14, cat:"role",
    q:"What is Business Analytics?",
    a:`"Business Analytics is the practice of using data, statistical methods, and technology to analyse business performance and support better decision-making.

It has three levels:

Descriptive Analytics — What happened? Looking at historical data to understand past performance. Example: 'Our Q2 revenue was ₹6.9 crore — up 15% from Q1.'

Predictive Analytics — What will happen? Using statistical models and patterns to forecast future outcomes. Example: 'Based on Q1 and Q2 trends, Q3 revenue is projected at ₹7.5 crore.'

Prescriptive Analytics — What should we do? Recommending actions based on data. Example: 'To reach the Q3 target, we should increase marketing spend in the North region by 20%.'

Business analytics is not just about charts and reports. It is about using data to make better business decisions faster. Every dashboard I have built is a form of business analytics — turning raw financial and operational data into clear decisions for non-technical managers."`,
  },

  // ── HR & BEHAVIOURAL ─────────────────────────────────────────────────────
  {
    id:15, cat:"hr",
    q:"Why did you choose data analytics as a career?",
    a:`"I chose data analytics because it sits at the intersection of everything I find meaningful — problem solving, business thinking, and working with numbers that have real consequences.

The moment that confirmed this was when I built my first financial dashboard. I was looking at 5 years of revenue and expense data and I noticed something no one had flagged: revenue was growing, but profit margins were quietly shrinking. The company looked healthy on the surface — but the trend told a different story.

That discovery — finding a hidden truth inside data — felt genuinely valuable. Not because it was technically impressive, but because a real decision-maker could act on it.

I also realised that data analysis is not going to become less important. Every industry — finance, healthcare, retail, manufacturing — is moving toward data-driven decisions. I want to be deeply skilled at something that will matter more in 10 years than it does today. Data analytics is that skill."`,
  },
  {
    id:16, cat:"hr",
    q:"Why do you want to join our company?",
    a:`"I research every company I interview with, so my answer here is always specific.

The general framework I use: I look at what domain the company operates in, what kind of data problems they solve, and how the analytics team is positioned within the organisation.

I then connect that to my own experience: if it is a finance-domain company, I highlight my IPO analytics and cash flow projects. If it is an operations or manufacturing company, I highlight my engine oil condition monitoring project. If it is a tech or product company, I highlight my SQL and Python skills.

The underlying reason in every case: I want to work somewhere where data analysis directly influences business decisions — not just produces reports that sit in inboxes. I want to be in a room where the dashboard I built changes what the team does on Monday morning.

That is what drives me, and I choose companies where that environment exists."`,
  },
  {
    id:17, cat:"hr",
    q:"Revenue is increased by 20% but profit margin is declined. What is the scenario?",
    a:`"This is a very important business scenario and it signals one thing clearly: costs are growing faster than revenue.

Here is the analysis:

If revenue grew 20% but profit margin declined, it means the expenses grew by more than 20%. For example: Revenue was ₹100 crore, now ₹120 crore — a 20% increase. But if total costs went from ₹80 crore to ₹105 crore — that is a 31% increase in costs. Profit goes from ₹20 crore to ₹15 crore. Margin drops from 20% to 12.5%.

This happens due to several reasons: aggressive hiring without proportional revenue impact, increased raw material or logistics costs, heavy discounting to drive volume, new market expansion costs, or operational inefficiencies at scale.

As a data analyst, I would segment expenses by category — employee cost, marketing, operations, finance charges — and identify which category grew disproportionately. I would also check whether the revenue growth came from volume or pricing — because volume growth often requires more cost to sustain.

The action: present a cost-to-revenue ratio trend to management, identify the top two or three cost drivers, and recommend where cost control measures should be focused."`,
  },

  // ── POWER BI ─────────────────────────────────────────────────────────────
  {
    id:18, cat:"powerbi",
    q:"What are the key features of Power BI?",
    a:`"Power BI has several key features that make it the leading business intelligence tool:

One — Data Connectivity: Connects to 100+ data sources — Excel, SQL databases, APIs, SharePoint, Salesforce, Azure, Google Analytics, and more.

Two — Power Query (ETL): A built-in data transformation layer where you clean, reshape, and model data before it enters the report. Uses M language.

Three — DAX (Data Analysis Expressions): A formula language for creating calculated measures and columns — the core of all advanced analytics in Power BI.

Four — Interactive Visualisations: 30+ built-in chart types — bar, line, pie, map, matrix, KPI card, scatter, waterfall, treemap, gauge — all interactive with cross-filtering.

Five — Real-time Dashboards: Supports live data connections and streaming datasets for real-time monitoring.

Six — Power BI Service: A cloud platform for publishing, sharing, and collaborating on reports — with scheduled data refresh and role-level security.

Seven — Natural Language Q&A: Users can type questions in plain English and Power BI generates a visual answer automatically.

Eight — Mobile App: All reports are accessible on iOS and Android through the Power BI mobile app.

Nine — Row-Level Security (RLS): Controls which users see which data — for example, a regional manager sees only their region's data.

Ten — AI Visuals: Built-in AI features like Key Influencers, Decomposition Tree, and Smart Narrative."`,
  },
  {
    id:19, cat:"powerbi",
    q:"What are charts and treemaps in Power BI?",
    a:`"Charts are visual representations of data that make patterns and comparisons easier to understand than raw numbers.

Common chart types in Power BI:
Bar/Column Chart: Compares values across categories. Use for 'which product sold most?'
Line Chart: Shows trends over time. Use for 'how did revenue change month by month?'
Pie/Donut Chart: Shows proportional breakdown. Use for 'what percentage does each region contribute?'
Scatter Chart: Shows relationships between two variables. Use for 'does advertising spend correlate with sales?'
Waterfall Chart: Shows cumulative effect of positive and negative values. Perfect for financial bridge analysis.
KPI Card: Shows a single number with a target comparison. Use for 'is our profit margin above or below target?'
Gauge Chart: Shows progress toward a goal on a scale — like a speedometer.

Treemap specifically:
A treemap displays hierarchical data as nested rectangles. Each rectangle's size represents the value of that item. The larger the rectangle, the larger the value.

Use case: 'Show me sales by product category and sub-category in one view.' The biggest rectangle is the highest-selling category, and within it, smaller rectangles show sub-categories.

Treemaps are ideal when you have two levels of hierarchy and want to see both the overall proportion and the breakdown within each category simultaneously."`,
  },
  {
    id:20, cat:"powerbi",
    q:"What is Power Query in Power BI? What is Group By?",
    a:`"Power Query is the data transformation and preparation layer inside Power BI. Before data enters the data model, Power Query allows you to clean it, reshape it, and structure it correctly.

Common Power Query operations:
Removing duplicates and null values
Changing data types — converting text dates to date format
Splitting columns — separating 'First Last' into two columns
Unpivoting — converting columns into rows for time-series analysis
Merging queries — joining two tables, like a SQL JOIN
Appending queries — stacking two tables vertically, like SQL UNION

Power Query uses the M language internally, but most operations are done through a graphical interface. All transformation steps are recorded and reapplied automatically every time data refreshes.

Group By in Power Query:
Group By aggregates data — similar to GROUP BY in SQL.

Example: You have a sales table with thousands of rows — one row per transaction. You want total sales per region. In Power Query, you use Group By: select the Region column, choose Sum of Sales Amount. Power Query collapses all transactions into one row per region with the summed value.

This is extremely useful for creating summary tables that feed into visuals without writing DAX measures."`,
  },
  {
    id:21, cat:"powerbi",
    q:"What is the difference between New Measure, New Column, and New Table in Power BI?",
    a:`"These are the three ways to add calculated data to a Power BI model:

New Measure:
A measure is a dynamic calculation evaluated at query time — it recalculates every time the filter context changes (when a slicer is selected, for example).
Measures do NOT add a column to the table — they are virtual calculations.
Example: Total Sales = SUM(Sales[Amount])
Use when: calculating KPIs, ratios, aggregations, percentage growth.
Best practice: Always prefer measures for aggregations — they are memory-efficient.

New Column (Calculated Column):
A calculated column adds a physical column to the table — computed row by row at data load time.
It is stored in memory and consumes model size.
Example: Profit Margin Col = Sales[Profit] / Sales[Revenue]
Use when: you need a per-row value for filtering, slicing, or as a dimension.
Example: classifying orders as 'High', 'Medium', 'Low' value based on amount.

New Table (Calculated Table):
Creates an entirely new table using DAX — not loaded from a data source.
Example: creating a date table — CALENDAR(DATE(2020,1,1), DATE(2026,12,31))
Use when: you need a reference table, a date dimension, or a filtered subset of an existing table for specific analysis.

Summary: Measures for calculations. Columns for row-level classification. Tables for creating new data structures."`,
  },
  {
    id:22, cat:"powerbi",
    q:"What is the difference between a Filter and a Slicer in Power BI?",
    a:`"Both filter data — but they work differently and serve different purposes:

Slicer:
A slicer is a visual element placed directly on the report canvas.
Users can see and interact with it — clicking on values to filter the report.
It is visible to the report consumer.
Example: A dropdown showing all years — the user selects 2025 and all visuals update.
Best for: giving end users interactive control over what they see.

Filter Pane (Filter):
A filter is applied behind the scenes in the Filter Pane — on the right side of the Power BI Desktop.
Filters can be applied at three levels:
  → Visual-level filter: applies only to one specific visual
  → Page-level filter: applies to all visuals on one page
  → Report-level filter: applies to all visuals across all pages
Filters can be hidden from the report consumer — they work silently.
Best for: permanent restrictions that should not be changed by users — for example, excluding test data or restricting a report to a specific time period.

Key difference in one line:
A slicer is visible and user-controlled. A filter is set by the report developer and can be hidden from users.

In my dashboards, I use slicers for year, region, and category selection — and report-level filters to permanently exclude null or test records from all visuals."`,
  },
  {
    id:23, cat:"powerbi",
    q:"You have sales data. You want top 5 sales by product. How will you calculate it?",
    a:`"There are two approaches — one using DAX and one using the built-in visual filter:

Method 1 — Visual-level Top N Filter (simplest):
Drag Product to the Axis and Sales to the Values of a bar chart.
In the Filter Pane, go to the Product filter.
Change filter type from 'Basic filtering' to 'Top N'.
Set N = 5, drag the Sales measure into the 'By value' field.
The chart automatically shows only the top 5 products by sales.

Method 2 — Using DAX RANKX (for more control):
Create a measure: Product Rank = RANKX(ALL(Products[ProductName]), [Total Sales],, DESC, Dense)
Then create a measure: Top 5 Sales = IF([Product Rank] <= 5, [Total Sales], BLANK())
Use this measure in your visual — it will only show values for the top 5 ranked products.

RANKX is more flexible — you can change the ranking logic, handle ties with the Dense parameter, and use it across different dimensions.

In my Financial Performance dashboard, I used RANKX to show the top-performing business segments by revenue — with the rank dynamically updating when year slicers change."`,
  },
  {
    id:24, cat:"powerbi",
    q:"What is Table View and Model View in Power BI?",
    a:`"Power BI Desktop has three views — Report View, Table View, and Model View. Each serves a different purpose:

Table View (Data View):
Shows the actual data inside each table — like looking at a spreadsheet.
You can see all rows and columns of a loaded table.
You can add calculated columns here.
Use it to: inspect data quality, verify that transformations worked correctly, check values of calculated columns row by row.
Shortcut: the table icon on the left sidebar.

Model View:
Shows the relationships between all tables in the data model — like a diagram.
You can see how tables are connected — which column joins to which.
You can create, edit, or delete relationships between tables here.
You can set cardinality (one-to-many, many-to-many) and cross-filter direction.
Use it to: design and verify your star schema, manage table relationships, ensure the model is correctly structured for DAX to work properly.

Report View:
Where you build and design the actual report pages with visuals, slicers, and layouts. This is what the end user sees.

In my projects, I always check the Model View after connecting multiple tables to ensure the star schema relationships are correct — because incorrect relationships cause DAX measures to calculate wrong results."`,
  },
  {
    id:25, cat:"powerbi",
    q:"What is a Scatter Chart in Power BI?",
    a:`"A Scatter Chart plots two numerical variables on X and Y axes to show the relationship or correlation between them.

Each data point is a dot on the chart. The position of the dot tells you both values for that data point simultaneously.

When to use: 'Does advertising spend affect sales?' — X axis: Ad Spend, Y axis: Sales. If dots trend upward left to right, there is a positive correlation.

Power BI Scatter Chart components:
X Axis: First numerical variable
Y Axis: Second numerical variable
Legend: Colour-code dots by category (e.g., by region)
Size: Make dots larger or smaller based on a third value (e.g., profit)
Play Axis: Animate the chart over time — each frame shows a different time period (great for presentations)

Real use case from my projects: In the IPO Analytics project, I could use a scatter chart to plot Sharpe Ratio (X) against Total Return (Y) for each IPO — immediately showing which IPOs delivered high returns with low risk versus high returns with high risk. Each dot would be one IPO, and the size could represent the listing gain percentage."`,
  },
  {
    id:26, cat:"powerbi",
    q:"What is the Visual Pane, Data Pane, and Filter Pane in Power BI?",
    a:`"These are three panels on the right side of Power BI Desktop — each serving a distinct purpose:

Visualisations Pane (Visual Pane):
Located on the right side when a visual is selected.
Contains: the gallery of all available chart types (bar, line, pie, matrix, KPI, etc.)
Below the chart gallery: Fields wells — where you drag fields to define what goes on the Axis, Values, Legend, Tooltips, etc.
Also contains: the Format tab (to customise colours, fonts, borders, titles) and the Analytics tab (for trend lines, reference lines, forecast).

Data Pane (Fields Pane):
Shows all the tables and columns available in your data model.
You drag fields from here into your visuals or into DAX formulas.
Measures appear with a calculator icon. Columns appear with a field icon.
This is your inventory of everything available to work with.

Filter Pane:
Three levels of filters — visual-level, page-level, and report-level.
You drag fields here to apply permanent or conditional filters.
Can be locked or hidden from the report consumer.
Example: Always filter out records where Sales = 0 at the page level, so all visuals on the page automatically exclude zero-value records.

Together these three panes are the control centre of Power BI report building."`,
  },
  {
    id:27, cat:"powerbi",
    q:"What is a Table and what is Data in Power BI?",
    a:`"In Power BI:

Table: A structured collection of rows and columns that holds data. Every data source you connect to — whether Excel, SQL, CSV, or API — is loaded as a table in Power BI. Tables are the foundation of the data model. Example: a Sales table with columns for Date, Product, Region, Quantity, and Amount.

Data / Fields: The individual columns within a table. Each column holds one type of information — for example, the Date column, the Product Name column, or the Sales Amount column.

Key relationship: A Power BI model can contain multiple tables connected by relationships — just like a relational database. A Sales table might relate to a Products table (via Product ID) and a Date table (via Date). This network of connected tables is called the data model.

In practice: when I built my Financial Performance dashboard, I had multiple tables: one for financial transactions, one for a date dimension, and one for company segments. The relationships between these tables allowed my DAX measures to calculate revenue by year, by segment, and by any combination — dynamically responding to slicer selections."`,
  },
  {
    id:28, cat:"powerbi",
    q:"Can we ask questions using Q&A in Power BI?",
    a:`"Yes — Power BI has a built-in Q&A feature that allows users to ask questions in plain English and receive an automatic visual response.

How it works: A user types a question like 'What is total sales by region in 2025?' and Power BI interprets the natural language query, selects the appropriate data, and generates a chart automatically.

Where to find it: In Power BI Desktop, insert a Q&A visual on the report canvas. In Power BI Service (cloud), there is a Q&A box at the top of any dashboard.

How Power BI understands the question: It uses the column names, table names, and synonyms defined in the data model. If your columns are named clearly — 'Sales Amount' instead of 'Col_7' — Q&A works much better.

Limitation: Q&A works best with simple questions on clean, well-named data models. Complex multi-step analytical questions still require DAX measures.

You can also add synonyms — for example, telling Power BI that 'revenue' and 'sales' mean the same column — so user questions are interpreted correctly regardless of the exact wording they use."`,
  },
  {
    id:29, cat:"powerbi",
    q:"What is the LOOKUPVALUE function in Power BI?",
    a:`"LOOKUPVALUE is a DAX function that retrieves a value from one table based on matching criteria in another — similar to VLOOKUP in Excel, but more powerful.

Syntax:
LOOKUPVALUE(result_column, search_column, search_value)

Example:
I have a Sales table with Product ID, and a separate Products table with Product ID and Product Name.
In the Sales table, I want to add a Product Name column:
Product Name = LOOKUPVALUE(Products[ProductName], Products[ProductID], Sales[ProductID])

This searches the Products table for the matching Product ID and returns the Product Name.

When to use vs when NOT to use:
Use LOOKUPVALUE when tables are NOT formally related in the model — as a workaround.
If tables ARE properly related in the model, use RELATED() instead — it is faster and cleaner.

Important note: LOOKUPVALUE can only return one matching value. If there are multiple matches, it returns an error unless you use LOOKUPVALUE with additional search conditions to narrow it to a unique match."`,
  },
  {
    id:30, cat:"powerbi",
    q:"If Excel exists, why do we need Power BI?",
    a:`"Excel and Power BI serve different purposes — and at scale, Excel breaks down in ways that Power BI handles effortlessly.

Excel limitations at scale:
Excel becomes slow and unstable with more than 100,000 rows of data.
Sharing a report means emailing a file — which creates version control problems immediately.
Every time data updates, someone must manually open, refresh, and redistribute the file.
Excel charts are static — they do not respond to user interaction.
There is no central access control — you cannot restrict which rows of data a specific user sees.

Power BI advantages:
Handles millions of rows through the in-memory VertiPaq engine — without slowing down.
Published reports update automatically on a schedule — no manual effort.
All users always see the same, current version — no version chaos.
Visuals are fully interactive — slicers, drill-through, cross-filtering work in real time.
Row-level security ensures each user sees only their authorised data.
Accessible on any device — laptop, tablet, mobile — without installing anything.

Simple analogy: Excel is a powerful personal notebook. Power BI is a live television broadcast. One is for individual use; the other is for an entire organisation to consume simultaneously, in real time."`,
  },
  {
    id:31, cat:"powerbi",
    q:"What is data connectivity in Power BI?",
    a:`"Data connectivity refers to the ability of Power BI to connect to and import data from external sources.

Power BI supports three connectivity modes:

Import Mode: Data is copied from the source into Power BI's in-memory engine (VertiPaq) at refresh time. Fastest query performance. Data freshness depends on refresh schedule (hourly, daily, etc.). Best for most business reporting scenarios.

DirectQuery Mode: No data is stored in Power BI. Every visual sends a live SQL query to the source database. Always real-time but performance depends on the source database speed. Best for very large datasets or compliance requirements that prohibit data copying.

Live Connection: Used specifically with Analysis Services (SSAS) or Power BI Datasets. Power BI connects to an existing data model without importing or modelling locally. The model is maintained centrally.

Types of data sources Power BI connects to:
Files: Excel, CSV, PDF, JSON, XML
Databases: SQL Server, MySQL, PostgreSQL, Oracle, SAP
Cloud services: Azure, Salesforce, Google Analytics, SharePoint
APIs: Any REST API via Web connector
Online services: Power BI Dataflows, Dataverse, OneDrive"`,
  },
  {
    id:32, cat:"powerbi",
    q:"What is Merge and Append in Power Query?",
    a:`"Both are ways to combine data from multiple queries in Power Query — but they work differently:

Merge Query (equivalent to SQL JOIN):
Combines two tables horizontally — matching rows based on a common key column.
The result adds columns from one table onto the other.
Join types available: Inner, Left Outer, Right Outer, Full Outer, Left Anti, Right Anti.
Example: You have a Sales table and a Products table. You merge them on Product ID to add the Product Name and Category columns to each sales row.

Append Query (equivalent to SQL UNION):
Combines two tables vertically — stacking one table on top of another.
Both tables must have the same columns (or Power Query fills missing columns with null).
Example: You have Sales data for 2024 in one Excel file and 2025 in another. You append them to create one combined table with all years.

Memory tip:
Merge = JOIN = adds columns (horizontal combination)
Append = UNION = adds rows (vertical stacking)

In my projects: I used Merge to join IPO listing data with sector classification tables, and Append to combine financial data from multiple quarterly files into one annual table for trend analysis."`,
  },
  {
    id:33, cat:"powerbi",
    q:"You have sales data with Country and Sales columns. Calculate total sales for ONE specific country. What function do you use?",
    a:`"I would use the CALCULATE function with a FILTER or direct filter argument in DAX.

Method 1 — CALCULATE with direct filter (recommended):
India Sales = CALCULATE([Total Sales], Sales[Country] = 'India')

This calculates total sales while applying a filter that restricts the calculation to rows where Country equals India only.

Method 2 — CALCULATE with FILTER function:
India Sales = CALCULATE([Total Sales], FILTER(Sales, Sales[Country] = 'India'))

Both give the same result. Method 1 is preferred for simple equality filters — it is cleaner and more efficient.

Method 3 — Using a slicer (if the user needs to select the country):
Keep [Total Sales] = SUM(Sales[Amount]) as the measure.
Add a Country slicer to the report.
When the user selects India, the measure automatically filters to India's total.

This third approach is more flexible in a dashboard context — the user can switch countries without needing a separate measure for each country.

In my Cash Flow dashboard, I used CALCULATE with country/segment filters to create region-specific KPIs alongside the overall total, allowing side-by-side comparison."`,
  },
  {
    id:34, cat:"powerbi",
    q:"What is conditional formatting in Power BI?",
    a:`"Conditional formatting in Power BI automatically changes the colour, font, or icon of a value in a visual based on rules or thresholds — making important information immediately visible without the user needing to scan through numbers.

Types of conditional formatting:

Background Colour: Changes the cell or card background based on value. Example: profit margin below 10% turns red, 10–20% turns amber, above 20% turns green.

Font Colour: Changes the text colour based on conditions.

Icons: Adds status icons — arrows, traffic lights, flags — based on value ranges.

Data Bars: Adds a horizontal bar inside a table cell proportional to the value — like an in-cell bar chart.

Rules-based vs Field-based:
Rules-based: You define specific thresholds — if value < 10, colour = red.
Field-based: The colour is driven by a DAX measure — giving you full control over the logic.

Real example from my projects:
In my Cash Flow dashboard, I used conditional formatting on the Current Ratio KPI card:
Below 1.0 → Red background with 'Risk' label
1.0 to 1.5 → Amber → 'Caution'
Above 1.5 → Green → 'Healthy'
This made the liquidity risk flag immediately visible to any non-technical manager looking at the dashboard."`,
  },
  {
    id:35, cat:"powerbi",
    q:"How do you check duplicates in Power BI?",
    a:`"There are two places to check for duplicates in Power BI — Power Query (before loading data) and DAX (after loading):

Method 1 — Power Query (recommended — fix at source):
Open Power Query Editor.
Select the column you want to check.
Right-click → 'Remove Duplicates' to remove them, OR
Go to Home → 'Keep Rows' → 'Keep Duplicates' to isolate and inspect the duplicate rows.
The column distribution bar at the top of each column also shows 'Distinct' vs 'Unique' counts — if Distinct is less than the total row count, duplicates exist.

Method 2 — DAX measure to count duplicates:
Duplicate Count = COUNTROWS(Sales) - DISTINCTCOUNT(Sales[OrderID])
If this measure returns a number greater than zero, duplicates exist.

Method 3 — Create a validation table in Power Query:
Group By the key column and count rows.
Filter where count > 1.
The resulting table shows all duplicate key values.

Best practice: Always check for duplicates in Power Query before data enters the model — because duplicates cause double-counting in SUM measures, and that leads to incorrect business reporting. In my Financial Performance dashboard, I added a duplicate-check step in Power Query for transaction IDs before loading, ensuring all KPI calculations were accurate."`,
  },

  // ── EXCEL ─────────────────────────────────────────────────────────────────
  {
    id:36, cat:"excel",
    q:"Suppose sales of a company dropped 15% in Q4. How will you analyse it in Excel?",
    a:`"I would approach this in four structured steps in Excel:

Step 1 — Confirm and quantify the drop:
Calculate Q4 sales for the current year vs Q4 of the prior year using a simple formula:
YoY Change % = (Q4 Current - Q4 Prior) / Q4 Prior × 100
Confirm the 15% figure and check if it is a year-on-year drop or quarter-on-quarter.

Step 2 — Segment to isolate the problem:
Create a Pivot Table with Sales as values and dimensions like: Region, Product Category, Customer Segment, Sales Channel.
Look for which segment drove the decline — is it one region? One product? One customer type?

Step 3 — Build a trend view:
Create a line chart showing monthly or quarterly sales for the past 2 years.
Look for: Is this drop seasonal (does Q4 always dip)? Is it a new trend or a one-off?

Step 4 — Correlate with external factors:
Add a column for marketing spend, pricing changes, or competitor events if data is available.
Use CORREL() function to check if any factor correlates with the sales drop.

Final output: A one-page Excel summary with: the confirmed 15% drop by segment, a trend chart, top 3 hypotheses for the cause, and a recommended next step."`,
  },
  {
    id:37, cat:"excel",
    q:"A client says a number in your report is incorrect. How do you handle it?",
    a:`"This is a situation every data analyst faces, and the correct response is: stay calm, validate first, and respond with facts — not defensiveness.

Step 1 — Thank them and acknowledge:
'Thank you for flagging this — let me verify the number immediately.' Never argue without checking.

Step 2 — Trace the number back to its source:
In Excel, I would trace the formula: click the cell, check the formula bar, use 'Trace Precedents' (Formulas → Trace Precedents) to follow the formula chain back to the raw data.
Verify: Does the raw data match what the client says it should be?

Step 3 — Check for the common causes:
Wrong date range filter — is the formula pulling Q3 instead of Q4?
Wrong aggregation — is it summing when it should be averaging?
Duplicate records — is the source data double-counting transactions?
Currency or unit mismatch — is the data in thousands and the report shows full values?

Step 4 — Respond honestly:
If you find an error: acknowledge it, fix it, explain what caused it and what you will do to prevent it again.
If the data is correct: calmly walk the client through the calculation logic with transparency — show them the source data and the steps.

In both cases: document the issue and resolution in writing for future reference.

Key principle: A data analyst's credibility depends on accuracy. One wrong number addressed transparently builds more trust than ten correct numbers taken for granted."`,
  },
  {
    id:38, cat:"excel",
    q:"A client wants to see the Top 5 products. How will you show the data in Excel?",
    a:`"I would use two methods depending on whether the client wants a static view or an interactive one:

Method 1 — LARGE function (static):
If I have a product sales table, I use:
=LARGE(SalesRange, 1) for the highest
=LARGE(SalesRange, 2) for the second highest, and so on.
Pair with INDEX-MATCH to return the product names alongside the values.

Method 2 — Sort and Filter (quickest for a one-time report):
Select the data, go to Data → Sort, sort by Sales Amount in Descending order.
Then Data → Filter, and manually take the top 5 rows.
Format as a clean table with borders and number formatting.

Method 3 — Pivot Table with Top 10 Filter (most professional):
Create a Pivot Table with Product in Rows and Sum of Sales in Values.
Right-click on the Product label → Filter → Top 10.
Change 10 to 5 and select 'Top' by 'Sum of Sales'.
The Pivot Table automatically shows and updates the top 5.

For a client presentation, I would use Method 3 — formatted as a clean table with a bar chart alongside it, showing the top 5 products visually. This is more readable and impactful than a plain table of numbers."`,
  },

  // ── SQL ───────────────────────────────────────────────────────────────────
  {
    id:39, cat:"sql",
    q:"What are the types of SQL commands?",
    a:`"SQL commands are divided into five categories:

DDL — Data Definition Language: Defines the structure of the database.
CREATE — creates a table or database
ALTER — modifies an existing table (adds or removes columns)
DROP — deletes a table permanently (structure AND data)
TRUNCATE — deletes all data from a table but keeps the structure

DML — Data Manipulation Language: Manipulates the data inside tables.
INSERT — adds new rows
UPDATE — modifies existing rows
DELETE — removes specific rows

DQL — Data Query Language: Retrieves data.
SELECT — the most used command — fetches rows from one or more tables

DCL — Data Control Language: Controls access.
GRANT — gives a user permission to access a table
REVOKE — removes a user's permission

TCL — Transaction Control Language: Manages transactions.
COMMIT — saves all changes made in the current transaction permanently
ROLLBACK — undoes changes back to the last commit
SAVEPOINT — sets a marker within a transaction to roll back to partially"`,
  },
  {
    id:40, cat:"sql",
    q:"What is the syntax to delete a record from a table in SQL?",
    a:`"To delete specific records from a table, use the DELETE command with a WHERE clause:

DELETE FROM table_name WHERE condition;

Example:
DELETE FROM Sales WHERE OrderID = 1001;
This deletes only the row where OrderID equals 1001.

DELETE FROM Employees WHERE Department = 'HR' AND Salary < 30000;
This deletes all HR employees earning below 30,000.

CRITICAL WARNING — Always use WHERE with DELETE:
DELETE FROM Sales; — with no WHERE clause — deletes EVERY ROW in the Sales table. The table structure remains but all data is gone.

Difference between DELETE, TRUNCATE, and DROP:
DELETE: Removes specific rows (with WHERE) or all rows (without WHERE). Can be rolled back. Slow on large tables because it logs each deleted row.
TRUNCATE: Removes ALL rows from a table instantly. Cannot be rolled back in most databases. Keeps the table structure intact. Much faster than DELETE for clearing a full table.
DROP: Removes the entire table — structure AND data. Cannot be rolled back.

Memory tip: DELETE removes records. TRUNCATE empties the table. DROP destroys the table entirely."`,
  },
  {
    id:41, cat:"sql",
    q:"What is the difference between DROP and TRUNCATE in SQL? Does TRUNCATE delete the table structure?",
    a:`"This is a very commonly asked SQL question. Here is the clear answer:

TRUNCATE:
Removes ALL data rows from a table instantly.
The table STRUCTURE is preserved — columns, data types, constraints, and indexes all remain intact.
The table still exists — it is just empty.
TRUNCATE cannot be rolled back in most databases (it is auto-committed).
Faster than DELETE because it does not log individual row deletions.
Syntax: TRUNCATE TABLE TableName;

DROP:
Removes the ENTIRE table — both the data AND the structure.
After DROP, the table no longer exists in the database.
Can be rolled back in some databases if inside a transaction.
Syntax: DROP TABLE TableName;

To answer directly: No, TRUNCATE does not delete the structure of the table. It only removes the data. The table exists after TRUNCATE — it is just empty.

What is the structure of a table?
The structure (also called schema) includes: column names, data types for each column (INT, VARCHAR, DATE), constraints (PRIMARY KEY, NOT NULL, FOREIGN KEY), and indexes. TRUNCATE preserves all of this. DROP removes all of this."`,
  },
  {
    id:42, cat:"sql",
    q:"What is a NULL subquery and what is a Correlated subquery?",
    a:`"These are two different SQL concepts:

NULL in SQL:
NULL means the absence of a value — it is not zero, not an empty string, it is unknown.
You cannot compare NULL with = or !=. You must use IS NULL or IS NOT NULL.
Example: SELECT * FROM Employees WHERE ManagerID IS NULL; — finds employees with no manager (top-level executives).
NULL in calculations: Any arithmetic operation with NULL returns NULL. 5 + NULL = NULL.

Subquery:
A subquery is a query nested inside another query.
Example: SELECT Name FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);
The inner query calculates the average salary first. The outer query returns names of employees earning above average.

Correlated Subquery:
A correlated subquery is a subquery that references a column from the outer query — it runs once for EVERY row in the outer query.
Example: Find employees who earn more than the average salary in their own department:
SELECT Name, Department, Salary FROM Employees e1
WHERE Salary > (SELECT AVG(Salary) FROM Employees e2 WHERE e2.Department = e1.Department);
The inner query uses e1.Department from the outer query — so it recalculates for each employee.
Correlated subqueries are powerful but slower than regular subqueries because they execute repeatedly."`,
  },
  {
    id:43, cat:"sql",
    q:"What are SQL constraints?",
    a:`"SQL constraints are rules applied to table columns to enforce data integrity — ensuring that invalid or inconsistent data cannot be entered into the database.

The main SQL constraints:

PRIMARY KEY: Uniquely identifies each row. Cannot be NULL. Only one per table. Example: OrderID INT PRIMARY KEY.

FOREIGN KEY: Links a column to the PRIMARY KEY of another table — enforcing referential integrity. Example: CustomerID in Orders table must exist in the Customers table.

NOT NULL: Ensures a column cannot contain a NULL value. Example: CustomerName VARCHAR(100) NOT NULL.

UNIQUE: Ensures all values in a column are different — but unlike PRIMARY KEY, a column can be NULL (once). Example: Email VARCHAR must be unique across all users.

CHECK: Ensures values meet a specified condition. Example: CHECK (Salary > 0) prevents negative salaries.

DEFAULT: Assigns a default value when no value is provided. Example: OrderDate DATE DEFAULT GETDATE() automatically uses today's date.

INDEX: Not a constraint technically, but often defined with table creation — improves query performance by creating a lookup structure on a column.

In my financial projects, if I were designing the underlying SQL database, I would use: PRIMARY KEY on transaction IDs, FOREIGN KEY linking transactions to company and date tables, NOT NULL on all financial amount columns, and CHECK to ensure amounts are non-negative."`,
  },
  {
    id:44, cat:"sql",
    q:"What are the different types of indexes in SQL?",
    a:`"An index is a data structure that improves the speed of data retrieval operations on a database table — like an index at the back of a book helps you find a topic without reading every page.

Types of indexes:

Clustered Index: Physically sorts and stores the data rows in the table based on the index key. Only ONE clustered index per table. The Primary Key is usually the clustered index by default. When you query by the clustered index column, it is extremely fast.

Non-Clustered Index: Creates a separate lookup structure that points to the actual data rows. A table can have multiple non-clustered indexes. Use on columns frequently used in WHERE, JOIN, or ORDER BY clauses.

Unique Index: Ensures all values in the indexed column are unique — similar to a UNIQUE constraint. Can be clustered or non-clustered.

Composite Index: An index on two or more columns together. Useful when queries frequently filter on multiple columns simultaneously. Example: Index on (Region, ProductCategory) for queries that filter by both.

Full-Text Index: Enables fast searching of text data — used for large text columns where LIKE searches would be slow.

When NOT to over-index: Indexes speed up reads but slow down INSERT, UPDATE, and DELETE because the index must be maintained with every data change. Over-indexing a heavily-written table can hurt performance."`,
  },

  // ── PYTHON ────────────────────────────────────────────────────────────────
  {
    id:45, cat:"python",
    q:"Why do we use Python in data analysis?",
    a:`"Python is one of the two most important tools in a data analyst's toolkit — alongside SQL. Here is why:

One — Data handling at scale: The Pandas library allows you to load, clean, reshape, and analyse datasets with millions of rows in seconds — far beyond what Excel can handle.

Two — Data cleaning automation: Python can automate repetitive cleaning tasks — removing duplicates, fixing date formats, handling missing values — that would take hours manually in Excel.

Three — Statistical analysis: Libraries like NumPy (numerical computing), SciPy (statistical functions), and Statsmodels enable statistical tests — correlation, regression, hypothesis testing — that Excel cannot do reliably at scale.

Four — Data visualisation: Matplotlib and Seaborn create publication-quality charts. For exploratory analysis, Python visualisations help analysts understand data distributions before building a dashboard.

Five — Automation and pipelines: Python scripts can automate the entire data workflow — extract data from a source, clean it, analyse it, and email a report — running on a schedule without human intervention.

Six — Integration with machine learning: When analysis requires prediction — forecasting sales, predicting churn — Python's scikit-learn library extends data analysis into machine learning seamlessly.

Simple truth: SQL gets the data. Python cleans and analyses it. Power BI presents it. All three work together in a professional data analyst workflow."`,
  },
  {
    id:46, cat:"python",
    q:"What is the difference between an application and a library?",
    a:`"Application:
A complete, standalone software product that end users interact with directly to perform tasks.
It has a user interface — graphical or command-line.
Examples: Microsoft Excel, Power BI Desktop, Google Chrome, WhatsApp.
You install and run it. It is the finished product.

Library:
A collection of pre-written code (functions, classes, modules) that developers import into their own programs to perform specific tasks — without building those functions from scratch.
A library is NOT a standalone product. It has no user interface. It runs only within a program.
Examples in Python: Pandas (data manipulation), NumPy (numerical computing), Matplotlib (plotting), Scikit-learn (machine learning).

Analogy:
A library is like a toolkit in a workshop — a set of tools (hammer, screwdriver, drill) that a craftsman uses to build something. The toolkit itself is not the final product. The chair the craftsman builds using those tools is the application.

In data analysis: I write a Python script (my application) that imports Pandas (a library) to clean data, uses Matplotlib (another library) to plot it, and saves the output. I am the developer. Pandas is my toolkit."`,
  },
  {
    id:47, cat:"python",
    q:"What is the difference between Matplotlib and Power BI?",
    a:`"Both create visualisations — but they serve completely different purposes and audiences:

Matplotlib:
A Python library for creating charts and plots programmatically — written in code.
Output: static images (PNG, PDF) or charts embedded in a Jupyter notebook.
Audience: data analysts and data scientists doing exploratory analysis — for their own understanding.
Interactivity: none by default (though libraries like Plotly add interactivity).
Use case: 'I want to quickly plot the distribution of IPO returns to understand the data pattern before building a dashboard.'
No sharing infrastructure — you share a file or a notebook.

Power BI:
A complete Business Intelligence platform for building interactive dashboards shared with business users.
Output: live, interactive reports published to the cloud — accessible by anyone in the organisation.
Audience: business stakeholders, managers, executives — non-technical users.
Interactivity: full — slicers, drill-through, cross-filtering, mobile access, scheduled refresh.
Use case: 'I want the CFO to see the cash flow trend every Monday morning without anyone preparing a report.'

If Matplotlib exists, why Power BI?
Because Matplotlib produces a chart for an analyst. Power BI produces a product for a business. A CFO cannot run a Python script. But a CFO can use a Power BI dashboard on their phone."`,
  },
  {
    id:48, cat:"python",
    q:"What is a loop in Python?",
    a:`"A loop is a programming construct that repeats a block of code multiple times — until a condition is met or a sequence is exhausted.

Python has two main types of loops:

For Loop — iterates over a sequence (list, range, string, DataFrame):
Used when you KNOW how many times you want to repeat.

Syntax:
for variable in sequence:
    code to repeat

Example:
for i in range(1, 6):
    print(i)
Output: 1, 2, 3, 4, 5

Data analysis example:
for column in df.columns:
    print(df[column].isnull().sum())
This loops through every column in a DataFrame and prints the count of missing values — a common data quality check.

While Loop — repeats as long as a condition is True:
Used when you do NOT know in advance how many iterations are needed.

Syntax:
while condition:
    code to repeat

Example:
count = 1
while count <= 5:
    print(count)
    count += 1
Output: 1, 2, 3, 4, 5

Key difference:
For loop: iterates a known number of times over a sequence.
While loop: continues until a condition becomes False — runs indefinitely if the condition never becomes False (infinite loop — avoid this)."`,
  },
  {
    id:49, cat:"python",
    q:"What is the difference between a dataset and data?",
    a:`"Data:
Data refers to raw, individual facts, values, or observations — without context or structure.
Example: 250000, 'Mumbai', 'Electronics', 2025-06-01 — these are individual pieces of data.
By itself, a single data point tells you very little.

Dataset:
A dataset is a structured, organised collection of related data points — usually in a tabular format with rows and columns.
Each row represents one observation or record. Each column represents one attribute or variable.
Example: A sales dataset with columns for Date, City, Product Category, and Sales Amount — and 10,000 rows of transactions. That collection of rows and columns together is a dataset.

Analogy: Individual grains of rice are 'data.' A measured cup of rice ready for cooking is a 'dataset' — organised, measured, and ready to work with.

In data analysis, the workflow is:
1. Raw data exists in various forms — database tables, log files, sensor readings, Excel files.
2. A data analyst structures and combines this raw data into a dataset.
3. The dataset is then cleaned, analysed, and used to generate insights.

In Power BI and Python terms: when I import an Excel file into Power BI or load a CSV with pd.read_csv() in Python, I am creating a dataset from raw data."`,
  },
  {
    id:50, cat:"python",
    q:"What is the difference between a for loop and a while loop in Python? Give syntax of both.",
    a:`"For Loop:
Purpose: Iterates over a known sequence — list, range, string, tuple, or DataFrame.
Use when: You know exactly how many times to repeat, or you are iterating through items in a collection.

Syntax:
for variable in sequence:
    # code block

Examples:
for i in range(5):          # runs 5 times: i = 0,1,2,3,4
    print(i)

fruits = ['apple','mango','banana']
for fruit in fruits:
    print(fruit)            # prints each fruit

# Data analysis use:
for col in df.columns:
    print(col, df[col].dtype)   # prints column name and type

While Loop:
Purpose: Repeats as long as a condition remains True.
Use when: You do not know in advance how many iterations are needed — you loop until something changes.

Syntax:
while condition:
    # code block
    # MUST update the condition inside, otherwise infinite loop!

Examples:
x = 0
while x < 5:
    print(x)
    x += 1              # x increases each iteration; stops when x reaches 5

Key differences at a glance:
For loop: sequence-driven, finite, iterates over items
While loop: condition-driven, potentially infinite, continues until condition is False

Common mistake: forgetting to update the condition variable in a while loop — causing an infinite loop that freezes the program."`,
  },
  {
    id:51, cat:"python",
    q:"What are the data types in Python?",
    a:`"Python has several built-in data types:

Numeric Types:
int — integer (whole number): age = 25
float — decimal number: salary = 45000.50
complex — complex number: c = 3 + 4j (rare in data analysis)

Text Type:
str — string (text): name = 'Sameer'

Boolean Type:
bool — True or False: is_active = True

Sequence Types:
list — ordered, mutable collection: [1, 2, 3, 'apple'] — can change items
tuple — ordered, immutable collection: (1, 2, 3) — cannot change items
range — sequence of numbers: range(0, 10)

Mapping Type:
dict — key-value pairs: {'name': 'Sameer', 'age': 22}

Set Types:
set — unordered, unique values: {1, 2, 3, 4} — no duplicates
frozenset — immutable set

None Type:
NoneType — represents absence of value: result = None

In data analysis context:
Pandas adds its own types on top: int64, float64, object (text), datetime64, bool, category.
When I load data in Python, checking data types with df.dtypes is always one of my first steps — because a date stored as 'object' type will not allow date calculations until converted to datetime64."`,
  },

  // ── ANALYTICS & AI ───────────────────────────────────────────────────────
  {
    id:52, cat:"analytics",
    q:"What do you know about EDA (Exploratory Data Analysis)?",
    a:`"EDA is the process of examining a dataset before formal analysis to understand its structure, patterns, distributions, and anomalies. It is always the first step in any data project.

EDA has five core activities:

One — Understand the shape of data:
How many rows and columns? What are the data types? What does each column represent?
df.shape, df.info(), df.dtypes in Python. Filters and row count in Excel or Power Query.

Two — Check data quality:
How many missing values per column? Are there duplicates? Are there impossible values (negative age, future dates)?
df.isnull().sum(), df.duplicated().sum() in Python.

Three — Univariate analysis — one variable at a time:
What is the distribution of each numerical column? What are the min, max, mean, median, standard deviation?
df.describe() in Python. Histograms and box plots visually.

Four — Bivariate analysis — two variables together:
How do two variables relate? Is there a correlation between advertising spend and sales?
df.corr() for correlation matrix. Scatter plots visually.

Five — Identify outliers:
Are there extreme values that could distort analysis?
Box plots and IQR method identify outliers.

After EDA, the analyst knows: what data is available, what is reliable, what needs cleaning, and what relationships are worth investigating further. Skipping EDA and jumping straight to analysis is the most common mistake made by inexperienced analysts."`,
  },
  {
    id:53, cat:"analytics",
    q:"What do you mean by insights? What is a KPI and how do you use it?",
    a:`"Insights:
An insight is a non-obvious finding from data that leads to a specific, actionable business decision.

Important distinction:
Observation: 'North region sales dropped 18% in Q1.' — This is a fact.
Insight: 'North region sales dropped 18% in Q1, driven by a 35% decline in the enterprise customer segment — where our two largest contracts expired and were not renewed. The SME segment actually grew 12%.' — This is an insight. It tells you WHERE to act.

An insight must be: specific, surprising or non-obvious, and actionable. A number without context is never an insight.

KPI (Key Performance Indicator):
A KPI is a measurable value that shows how effectively a business is achieving its key objectives.

What makes a good KPI:
Specific — 'Operating Profit Margin' not 'how we are doing'
Measurable — a number with a unit
Has a target — 15% margin target, current at 12%
Actionable — management can do something based on it

Examples of KPIs I built:
Profit Margin % — measures revenue efficiency
Current Ratio — measures short-term liquidity health
YoY Revenue Growth % — measures business momentum
Sharpe Ratio — measures risk-adjusted investment performance

How to use KPIs: Display them prominently on dashboards as large card visuals with target comparison and trend direction. Add conditional formatting so below-target KPIs immediately stand out in red — without the manager needing to read the number."`,
  },
  {
    id:54, cat:"analytics",
    q:"We have a CRM system. Why do we need a data analyst?",
    a:`"A CRM (Customer Relationship Management) system stores customer data — contacts, interactions, deals, and sales history. But storing data is not the same as understanding it.

Here is why a data analyst is still needed:

One — CRM data needs cleaning: CRM systems accumulate duplicate contacts, inconsistent data entry, missing fields, and stale records. A data analyst identifies and resolves these issues so the data is reliable.

Two — CRM reports are pre-built but limited: Most CRM tools (Salesforce, HubSpot) provide standard reports. But when a business needs a custom insight — 'which product has the highest repeat purchase rate among customers acquired through referrals in Q2?' — no pre-built CRM report will answer that. A data analyst writes the SQL query or builds the custom analysis.

Three — Cross-functional analysis: CRM data alone does not tell the full story. Combining CRM data with financial data, marketing spend data, and operational data reveals insights that no single system can show. A data analyst integrates these sources.

Four — Predictive insights: A CRM tells you what customers did. A data analyst, using CRM data plus analytics, can predict which customers are likely to churn, which deals are most likely to close, and which segments are highest value. That is the difference between historical reporting and forward-looking intelligence."`,
  },
  {
    id:55, cat:"analytics",
    q:"What is happening globally in terms of AI?",
    a:`"AI is currently in the most transformative phase since the internet — here is what is happening:

Large Language Models (LLMs): Models like GPT-4, Claude, and Gemini have made AI accessible to non-technical users for the first time. You can now generate text, code, images, and analysis by simply asking in plain English.

Generative AI in business: Companies are integrating AI into every function — customer service chatbots, code generation, document summarisation, data analysis, and marketing automation. McKinsey estimates GenAI could add $2.6 trillion to $4.4 trillion annually to the global economy.

AI Agents: The next wave — autonomous AI systems that can take multi-step actions independently. Instead of answering a question, an AI Agent can research, analyse, write a report, and send it — all without human intervention at each step.

AI in data analytics specifically: Power BI now has Copilot — you describe what you want in English and it builds a report. Python's AI libraries allow analysts to add forecasting and anomaly detection without a machine learning degree. Data analysis is becoming faster — but the need for human judgment to frame the right question remains irreplaceable.

Regulation: Governments worldwide — EU AI Act, India's evolving AI policy — are building frameworks to govern AI use, especially in high-stakes domains like finance, healthcare, and hiring.

For a data analyst: AI is not a replacement — it is an accelerator. Analysts who use AI tools effectively will be significantly more productive than those who do not."`,
  },
  {
    id:56, cat:"analytics",
    q:"Name the GenAI tools to develop a website or application.",
    a:`"Several Generative AI tools are specifically designed for building websites and applications:

Website/Frontend Generation:
Bolt.new — AI that generates full-stack web applications from a text prompt. You describe the app, it writes the code and deploys it.
V0 by Vercel — generates React UI components from text descriptions. Type 'create a dashboard with a sidebar and charts' and it generates the code.
Cursor — an AI-powered code editor (built on VS Code) that generates, edits, and debugs code using AI assistance. Widely used by developers.
GitHub Copilot — AI code completion integrated into code editors. Suggests entire functions and blocks of code as you type.

No-Code/Low-Code with AI:
Webflow + AI — design and build websites visually with AI layout suggestions.
Bubble — no-code app builder with AI workflow automation.
Framer — AI-powered website builder that generates designs from text.

For GenAI Application Development specifically:
OpenAI API — integrate GPT-4 into any application for text, image, and code generation.
Anthropic Claude API — build AI-powered applications using Claude.
Google Gemini API — Google's multimodal AI for application integration.
LangChain — a framework for building complex AI-powered applications with chains of AI calls and tool use.

As someone completing a Generative AI certification, I am familiar with the API-level integration approach — understanding how to connect LLM APIs into data workflows and business applications."`,
  },
  {
    id:57, cat:"analytics",
    q:"What is the role of an ML Engineer, AI Architect, Data Architect, and Data Engineer?",
    a:`"These four roles sit in the broader data ecosystem — each with distinct responsibilities:

ML Engineer (Machine Learning Engineer):
Builds, trains, and deploys machine learning models in production.
Takes a data scientist's model and makes it work reliably at scale in a real system.
Skills: Python, TensorFlow/PyTorch, MLOps, cloud deployment (AWS SageMaker, Azure ML).
Responsibility: 'The churn prediction model runs in production, serves 1 million predictions daily, and retrains automatically every week.'

AI Architect:
Designs the overall AI strategy and technical architecture for an organisation.
Decides which AI tools, models, and platforms to use and how they integrate with existing systems.
More strategic and senior — often a leadership role.

Data Architect:
Designs the structure of the entire data ecosystem — how data flows from source systems to storage to analytics.
Defines data models, data warehouse schema, data lake design, and data governance standards.
Responsibility: 'All financial data flows from ERP to Snowflake data warehouse, structured in a star schema, accessible by Power BI.'

Data Engineer:
Builds and maintains the pipelines that move and transform data from source to destination — the infrastructure layer.
Skills: Python, SQL, Apache Spark, Kafka, Airflow, cloud platforms.
Responsibility: 'The ETL pipeline runs nightly, extracting data from 10 source systems, transforming it, and loading it into the data warehouse for analysts to query.'

Data Analyst sits above all these: while the data engineer provides the clean data and the data architect designs the system, the data analyst uses that data to answer business questions and generate insights."`,
  },
  {
    id:58, cat:"analytics",
    q:"What do you know about AI Agents and Automation? Why is every organisation rushing for it?",
    a:`"AI Agents:
An AI Agent is an autonomous AI system that can perceive its environment, make decisions, and take multi-step actions to complete a goal — without needing a human to approve each step.

Example: Instead of a human analyst manually pulling data, cleaning it, running analysis, writing a summary, and emailing it — an AI Agent does all of these steps automatically, triggered by a schedule or an event.

Agentic workflow: Task → AI Agent reasons about steps needed → Uses tools (web search, SQL queries, file read/write, API calls) → Produces output → Takes action (sends email, updates dashboard, posts to Slack).

Automation:
Traditional automation executes fixed, pre-programmed rules — 'if sales < target, send alert email.' It cannot handle exceptions or make judgment calls.

AI-powered automation is different — it can handle variability, interpret unstructured data, and make decisions in situations it has not explicitly been programmed for.

Why every organisation is rushing:
One — Cost reduction: A task that takes a human analyst 3 hours daily can be automated to run in 3 minutes.
Two — Speed: AI processes data and generates reports in real time — human analysts cannot compete on speed alone.
Three — Scale: An AI Agent can monitor 10,000 data points simultaneously. A human cannot.
Four — Competitive pressure: If your competitor deploys AI automation and you do not, they make decisions faster with lower operational cost.

For a data analyst: understanding AI agents and automation is increasingly part of the role — not just building dashboards, but designing automated insight workflows."`,
  },
  {
    id:59, cat:"analytics",
    q:"What is Data Modelling?",
    a:`"Data modelling is the process of designing how data is structured, organised, and related within a database or analytics system — before any analysis is done.

Think of it as designing the blueprint of a building before construction begins. A poorly designed data model makes every query slow and every report inaccurate. A well-designed model makes analysis fast and reliable.

Key data modelling concepts:

Star Schema (most common in BI):
One central Fact Table surrounded by multiple Dimension Tables.
Fact Table: contains measurable events — sales transactions, financial entries. Has many rows.
Dimension Tables: contain descriptive context — Products, Customers, Dates, Regions. Have fewer rows.
Relationships: Fact table links to each dimension via a foreign key.
Why it works: Power BI's DAX engine is optimised for star schema — queries run fast and measures calculate correctly.

Relationships:
One-to-Many: One customer can have many orders. One product can appear in many sales rows.
Many-to-Many: One student can take many courses. One course can have many students. Handled via a bridge table.

Cardinality:
The type of relationship between two tables — one-to-one, one-to-many, many-to-many.

In my projects: I designed a star schema for every Power BI dashboard — a central fact table for financial transactions connected to a Date dimension, Company dimension, and Segment dimension. This structure allowed all my DAX measures to work correctly and all slicers to filter consistently across visuals."`,
  },
  {
    id:60, cat:"analytics",
    q:"Do you know finance companies and healthcare companies that work on data and need data analysts?",
    a:`"Yes — data analytics is critical in both sectors:

Finance Companies that need Data Analysts:
Banks: HDFC Bank, ICICI Bank, SBI, Kotak Mahindra Bank — use data analysts for credit risk modelling, fraud detection, customer segmentation, and branch performance reporting.
NBFCs: Bajaj Finance, Muthoot Finance — loan portfolio analysis, delinquency tracking, collection efficiency dashboards.
Stock Brokers and Investment Platforms: Zerodha, Groww, Upstox — IPO performance analytics, trading pattern analysis, user behaviour analysis. My IPO Analytics project directly aligns here.
Insurance: HDFC Life, LIC, Star Health — claims analysis, risk pricing, customer lifetime value.
Asset Management: Mirae Asset, SBI Mutual Fund — portfolio performance, risk-adjusted return analysis. My Sharpe Ratio work applies here.
Big 4 (Financial Services): Deloitte, EY, KPMG, PwC — financial advisory analytics, audit data analysis.

Healthcare Companies that need Data Analysts:
Hospital Networks: Apollo Hospitals, Fortis, Manipal — patient outcome analysis, bed occupancy optimisation, revenue cycle management.
Pharma: Sun Pharma, Dr. Reddy's, Cipla — clinical trial data analysis, sales force effectiveness, drug demand forecasting.
Health Tech Startups: Practo, PharmEasy, 1mg — user behaviour analytics, supply chain optimisation.
Health Insurance: Star Health, Niva Bupa — claims pattern analysis, fraud detection, premium pricing models.

In both sectors, the core skills needed are exactly my profile: SQL, Power BI, Excel, and financial or domain-specific KPI knowledge."`,
  },

  // ── LOGICAL & MATH ────────────────────────────────────────────────────────
  {
    id:61, cat:"math",
    q:"1 data analyst takes 1 hour to clean 5 datasets. How long will 10 data analysts take to clean 10 datasets?",
    a:`"This is a classic logical reasoning question — not a trick, but it tests whether you think carefully before answering.

Let me solve it step by step:

Given: 1 analyst cleans 5 datasets in 1 hour.
Rate per analyst: 5 datasets per hour.

Question: How long for 10 analysts to clean 10 datasets?

Total work: 10 datasets.
With 10 analysts working simultaneously, the total capacity is: 10 analysts × 5 datasets/hour = 50 datasets per hour.

Time needed = Total datasets ÷ Total capacity per hour
Time = 10 ÷ 50 = 0.2 hours = 12 minutes.

Answer: 10 data analysts will take 12 minutes to clean 10 datasets.

Why this trips people up: The instinct is to say '1 hour' — because 1 analyst took 1 hour for 5 datasets, so 10 analysts for 10 datasets 'seems similar.' But 10 analysts working in parallel multiply the capacity tenfold, so the same volume of work is completed much faster.

The key principle: when you increase both the number of workers AND the amount of work proportionally, the time decreases because the increase in workers outpaces the increase in work."`,
  },
  {
    id:62, cat:"math",
    q:"5 data analysts take 5 hours to clean 5 datasets. How long will 10 data analysts take to clean 10 datasets?",
    a:`"This is the classic 5-5-5 / 10-10 logic puzzle. Let me solve it carefully:

Given: 5 analysts clean 5 datasets in 5 hours.
Rate per analyst: 1 dataset per analyst in 5 hours.
Or: each analyst cleans 1/5 of a dataset per hour.

With 10 analysts for 10 datasets:
Total work = 10 datasets.
Total capacity = 10 analysts × (1/5 dataset per hour) = 2 datasets per hour.
Time = 10 datasets ÷ 2 datasets per hour = 5 hours.

Answer: 10 data analysts will take 5 hours to clean 10 datasets.

Why the answer is still 5 hours: Both the number of analysts AND the number of datasets doubled. Doubling the team doubles the capacity, but doubling the datasets doubles the work. The two effects cancel out perfectly — leaving the time unchanged at 5 hours.

Memory rule for these questions: If workers and tasks scale proportionally, time stays constant. Time only changes when workers and tasks scale disproportionately."`,
  },
  {
    id:63, cat:"math",
    q:"Amazon sales in Year 1 are ₹1 crore. Sales double every year. What are sales in Year 5?",
    a:`"This is compound doubling — an exponential growth problem.

Formula: Year N Sales = Year 1 Sales × 2^(N-1)

Year 1: ₹1 crore
Year 2: ₹1 crore × 2 = ₹2 crore
Year 3: ₹2 crore × 2 = ₹4 crore
Year 4: ₹4 crore × 2 = ₹8 crore
Year 5: ₹8 crore × 2 = ₹16 crore

Answer: Year 5 sales = ₹16 crore.

Using the formula directly: 1 × 2^(5-1) = 1 × 2^4 = 1 × 16 = ₹16 crore. ✓

Why interviewers ask this: It tests your understanding of exponential growth — which is critical for financial forecasting and compound interest calculations. It also tests whether you can apply a formula quickly.

Extension: If they ask 'what is the total revenue over 5 years?'
Total = 1 + 2 + 4 + 8 + 16 = ₹31 crore.

Formula for sum of geometric series: Total = a × (r^n - 1) / (r - 1) = 1 × (2^5 - 1) / (2-1) = 31 crore."`,
  },
  {
    id:64, cat:"math",
    q:"Q1 sales are ₹60,00,000 and Q2 sales are ₹69,00,000. What is the growth percentage?",
    a:`"Growth percentage formula:

Growth % = ((New Value - Old Value) / Old Value) × 100

Calculation:
New Value (Q2) = ₹69,00,000
Old Value (Q1) = ₹60,00,000

Growth % = ((69,00,000 - 60,00,000) / 60,00,000) × 100
Growth % = (9,00,000 / 60,00,000) × 100
Growth % = 0.15 × 100
Growth % = 15%

Answer: Q2 sales grew by 15% compared to Q1.

How to verify quickly: 10% of ₹60 lakh = ₹6 lakh. 5% = ₹3 lakh. 10% + 5% = 15% = ₹9 lakh. Q2 is ₹9 lakh more than Q1. So 15% is correct. ✓

In Power BI DAX: This is exactly what I built in my Financial Performance dashboard:
QoQ Growth % = DIVIDE([Q2 Sales] - [Q1 Sales], [Q1 Sales], 0) formatted as a percentage.

And for a dynamic Year-over-Year version using time intelligence:
YoY Growth % = DIVIDE([Current Year Sales] - [Prior Year Sales], [Prior Year Sales], 0)"`,
  },
  {
    id:65, cat:"math",
    q:"North region sales are going down by 18% in Q1. What will you do as a data analyst?",
    a:`"I would approach this as a structured investigation — not a panic response. Here are the exact steps:

Step 1 — Confirm and scope the problem:
Verify the 18% drop: is it compared to last year's Q1 or last quarter (Q4)? Both comparisons matter and may tell different stories.
Check if it is a revenue drop, volume drop, or both — because the cause and solution differ.

Step 2 — Segment to find the root cause:
Break down North region sales by: Product category, Customer segment (enterprise vs SME vs retail), Sales channel (online vs offline vs distributor), City or state within the North region.
Identify whether the drop is concentrated in one sub-segment or broad-based. A concentrated drop has a specific cause. A broad-based drop suggests market or economic factors.

Step 3 — Compare against benchmarks:
Did other regions also drop, or is it North-specific?
If South and East are flat or growing, the North problem is regional — possibly a sales team issue, a local competitor, or a distribution problem.
If all regions dropped, it is a company-wide or market-wide issue.

Step 4 — Correlate with operational data:
Check: Did we lose key accounts in the North? Did a competitor launch in Q1? Did we change pricing or promotions? Were there supply or delivery issues?

Step 5 — Present findings:
Build a one-page summary for management: Confirmed 18% drop. Concentrated in enterprise segment. Two largest accounts (Account A and Account B) did not renew. SME segment is stable. Recommended action: customer retention outreach to at-risk enterprise accounts in Q2.

That is how a data analyst turns a sales problem into an actionable recommendation."`,
  },
];

// ─── SEARCH + FILTER LOGIC ────────────────────────────────────────────────────
export default function App() {
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch]       = useState("");
  const [openId, setOpenId]       = useState(null);

  const filtered = useMemo(() => {
    return QA.filter(q => {
      const catMatch  = activeCat === "all" || q.cat === activeCat;
      const srchMatch = search.trim() === "" ||
        q.q.toLowerCase().includes(search.toLowerCase()) ||
        q.a.toLowerCase().includes(search.toLowerCase());
      return catMatch && srchMatch;
    });
  }, [activeCat, search]);

  const catColor = (id) => {
    const c = CATEGORIES.find(c => c.id === id);
    return c ? c.color : C.accent;
  };
  const catColorS = (id) => {
    const c = CATEGORIES.find(c => c.id === id);
    return c ? c.colorS : C.accentS;
  };

  return (
    <div style={{ minHeight:"100vh", background:C.bg, color:C.text,
      fontFamily:"'DM Sans','Segoe UI',sans-serif" }}>

      {/* ── HEADER ── */}
      <div style={{ background:C.panel, borderBottom:`1px solid ${C.border}`,
        padding:"18px 16px 14px" }}>
        <div style={{ maxWidth:740, margin:"0 auto" }}>
          <div style={{ fontSize:10, color:C.accent, fontWeight:700,
            letterSpacing:2.5, marginBottom:5 }}>
            FRESHER INTERVIEW MASTERGUIDE · SAMEER HAWAL · DATA ANALYST
          </div>
          <div style={{ display:"flex", justifyContent:"space-between",
            alignItems:"flex-start", gap:10 }}>
            <div>
              <h1 style={{ margin:0, fontSize:20, fontWeight:900 }}>
                80+ Interview Questions & Answers
              </h1>
              <div style={{ fontSize:12, color:C.textSec, marginTop:3 }}>
                Project · Role · HR · Power BI · Excel · SQL · Python · Analytics · Logic
              </div>
            </div>
            <div style={{ background:C.accentS, border:`1px solid ${C.accent}50`,
              borderRadius:10, padding:"8px 14px", textAlign:"center", flexShrink:0 }}>
              <div style={{ fontSize:24, fontWeight:900, color:C.accent }}>{QA.length}</div>
              <div style={{ fontSize:9, color:C.textMuted, fontWeight:700 }}>Q&As</div>
            </div>
          </div>

          {/* Search */}
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="🔍  Search any question or keyword..."
            style={{
              width:"100%", marginTop:12, padding:"10px 14px", borderRadius:9,
              background:C.raised, border:`1px solid ${C.border}`,
              color:C.text, fontSize:13, outline:"none", boxSizing:"border-box",
            }}
          />
        </div>
      </div>

      <div style={{ maxWidth:740, margin:"0 auto", padding:"0 14px" }}>

        {/* ── CATEGORY PILLS ── */}
        <div style={{ display:"flex", gap:6, marginTop:14, overflowX:"auto",
          paddingBottom:4, flexWrap:"nowrap" }}>
          <button onClick={() => setActiveCat("all")} style={{
            flexShrink:0, padding:"6px 14px", borderRadius:20, border:"none",
            cursor:"pointer", fontSize:11, fontWeight:700,
            background: activeCat==="all" ? C.accent : C.panel,
            color: activeCat==="all" ? "#fff" : C.textSec,
            border:`1px solid ${activeCat==="all" ? C.accent : C.border}`,
          }}>All ({QA.length})</button>
          {CATEGORIES.map(cat => {
            const count = QA.filter(q => q.cat === cat.id).length;
            const active = activeCat === cat.id;
            return (
              <button key={cat.id} onClick={() => setActiveCat(cat.id)} style={{
                flexShrink:0, padding:"6px 14px", borderRadius:20, border:"none",
                cursor:"pointer", fontSize:11, fontWeight:700,
                background: active ? cat.color : C.panel,
                color: active ? "#06080D" : C.textSec,
                border:`1px solid ${active ? cat.color : C.border}`,
              }}>{cat.label} ({count})</button>
            );
          })}
        </div>

        {/* Count line */}
        <div style={{ fontSize:11, color:C.textMuted, margin:"10px 0 4px" }}>
          Showing {filtered.length} questions
          {search && ` matching "${search}"`}
        </div>

        {/* ── Q CARDS ── */}
        {filtered.map(q => {
          const color  = catColor(q.cat);
          const colorS = catColorS(q.cat);
          const isOpen = openId === q.id;
          return (
            <div key={q.id}
              onClick={() => setOpenId(isOpen ? null : q.id)}
              style={{
                background: isOpen ? colorS : C.panel,
                border:`1px solid ${isOpen ? color+"60" : C.border}`,
                borderRadius:12, padding:"13px 15px", marginBottom:9,
                cursor:"pointer", transition:"all 0.16s",
              }}>
              {/* Header row */}
              <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                <div style={{
                  flexShrink:0, minWidth:30, height:30, borderRadius:7,
                  background:color+"20", border:`1px solid ${color}40`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:11, fontWeight:800, color,
                }}>Q{q.id}</div>
                <div style={{ flex:1 }}>
                  {/* Category tag */}
                  <span style={{
                    fontSize:9, fontWeight:700, padding:"2px 7px", borderRadius:4,
                    background:color+"18", color, letterSpacing:0.3, marginBottom:5,
                    display:"inline-block",
                  }}>
                    {CATEGORIES.find(c=>c.id===q.cat)?.label}
                  </span>
                  <div style={{ fontSize:13, fontWeight:600, color:C.text,
                    lineHeight:1.45, marginTop:3 }}>{q.q}</div>
                </div>
                <span style={{ color:C.textMuted, fontSize:15,
                  flexShrink:0, marginTop:3 }}>{isOpen?"▲":"▼"}</span>
              </div>

              {/* Answer */}
              {isOpen && (
                <div style={{ marginTop:13, paddingTop:13,
                  borderTop:`1px solid ${C.border}` }}>
                  <div style={{ fontSize:10, color:C.green, fontWeight:700,
                    letterSpacing:0.5, marginBottom:9 }}>
                    ✅ HOW TO ANSWER — SPEAK THIS IN YOUR OWN WORDS
                  </div>
                  <div style={{
                    background:C.greenS, border:`1px solid ${C.green}25`,
                    borderRadius:9, padding:"12px 14px",
                    fontSize:12.5, color:"#7ECFB0", lineHeight:1.85,
                    whiteSpace:"pre-line",
                  }}>{q.a}</div>
                  <div style={{ marginTop:10, fontSize:11, color:C.textMuted,
                    fontStyle:"italic" }}>
                    💡 Internalize the structure — don't memorize word for word. Sound natural.
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div style={{ textAlign:"center", padding:"40px 20px",
            color:C.textSec, fontSize:13 }}>
            No questions found for "{search}". Try a different keyword.
          </div>
        )}

        <div style={{ textAlign:"center", fontSize:11, color:C.textMuted,
          padding:"16px 0 30px", lineHeight:1.7 }}>
          Tap any card to expand the answer · Search by keyword · Filter by category<br/>
          Read the answer, then say it out loud in your own voice. That's how you own it.
        </div>
      </div>
    </div>
  );
}
