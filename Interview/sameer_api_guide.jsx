import { useState } from "react";

const C = {
  bg:        "#06080E",
  panel:     "#0C1018",
  raised:    "#111722",
  border:    "#171F2E",
  accent:    "#4F7EF7",
  accentS:   "#1A2A4F",
  green:     "#2DD4A0",
  greenS:    "#082E22",
  gold:      "#E8B84B",
  goldS:     "#2C1F08",
  purple:    "#A78BFA",
  purpleS:   "#1E1535",
  red:       "#F26464",
  redS:      "#2C0C0C",
  cyan:      "#22D3EE",
  cyanS:     "#062028",
  text:      "#EDF1FA",
  textSec:   "#6B82A0",
  textMuted: "#2E3D52",
};

// ─── ALL API CONTENT ──────────────────────────────────────────────────────────
const MODULES = [
  // ── MODULE 1: WHAT IS AN API ─────────────────────────────────────────────
  {
    id: "what",
    icon: "🔌",
    label: "What is an API?",
    color: C.accent,
    colorS: C.accentS,
    sections: [
      {
        title: "The Simple Definition",
        content: `API stands for Application Programming Interface.

In plain English: An API is a messenger that lets two software applications talk to each other.

Think of it like a waiter in a restaurant:
→ You (the user/app) are sitting at the table
→ The kitchen (server/database) has the food (data)
→ The waiter (API) takes your order to the kitchen and brings back exactly what you asked for

You never go into the kitchen directly. You never see how the food is made. You just get your order — cleanly and reliably.`,
        example: `Real example:
When you open Zomato and see restaurant ratings — those ratings come from a database. The Zomato app sends an API request to Zomato's server: "Give me all restaurants near Kolhapur with rating > 4." The server sends back the data. The app displays it.

You never saw the database. The database never saw you. The API handled everything in between.`,
        baAngle: `Why a BA needs to know this:
Stakeholders will often say "Can we pull data from [some system] into our dashboard?" That's an API question. You need to understand what's possible, what needs to be connected, and how to write that requirement clearly for a developer.`,
      },
      {
        title: "API vs Database — Key Difference",
        content: `A common confusion freshers have:

DATABASE = where data lives (MySQL, PostgreSQL, SQL Server)
API = how you access data from a system without touching the database directly

Why not just access the database directly?
→ Security: You can't give every app direct database access
→ Control: APIs expose only what you're allowed to see
→ Standardization: APIs give a consistent format regardless of how the backend is built

As a BA, your dashboards (Power BI) often pull from APIs — not raw databases — especially for cloud data sources like Salesforce, Google Analytics, or financial market data.`,
        example: `Your IPO Analytics project:
The stock price data you used — in a real company scenario, that data would come from a financial market API (like NSE India API, Alpha Vantage, or Bloomberg API). Your Power BI would connect to that API endpoint to pull fresh prices daily — not to a raw database you own.`,
        baAngle: null,
      },
    ],
  },

  // ── MODULE 2: HOW APIs WORK ───────────────────────────────────────────────
  {
    id: "how",
    icon: "⚙️",
    label: "How APIs Work",
    color: C.green,
    colorS: C.greenS,
    sections: [
      {
        title: "The Request–Response Cycle",
        content: `Every API interaction has two parts:

1. REQUEST — Your app asks for something
   • WHO to ask: the API endpoint (a URL)
   • WHAT to ask: the method (GET, POST, PUT, DELETE)
   • WHAT INFO to send: headers + body (if needed)

2. RESPONSE — The server replies
   • STATUS CODE: Did it work? (200 = yes, 404 = not found, 500 = server error)
   • DATA: The actual information, usually in JSON format`,
        example: `Visual flow:

[Your App / Power BI]
      ↓  REQUEST
      "GET /api/ipo-data?symbol=ZOMATO"
      ↓
[API Server]
      ↓  RESPONSE
      { "symbol": "ZOMATO", "listingPrice": 116, "issuePrice": 76 }
      ↓
[Your Dashboard shows the data]

The URL structure: https://api.example.com/v1/ipo-data
→ https://api.example.com  = the base URL (the restaurant)
→ /v1/                     = version (v1 = first version of the API)
→ /ipo-data                = endpoint (the specific dish you ordered)
→ ?symbol=ZOMATO           = query parameter (your customization)`,
        baAngle: `BA use case:
When writing requirements for a dashboard that pulls live data, you'd document: "The dashboard shall connect to the Pricing API endpoint /v1/prices?market=NSE and refresh every 15 minutes." That specificity is what a developer needs from you.`,
      },
      {
        title: "HTTP Methods — The Four You Must Know",
        content: `Every API request uses a METHOD that tells the server what action to take:

┌──────────┬────────────────────────────────┬───────────────────────┐
│ METHOD   │ WHAT IT DOES                   │ REAL EXAMPLE          │
├──────────┼────────────────────────────────┼───────────────────────┤
│ GET      │ READ / fetch data              │ Load a dashboard      │
│ POST     │ CREATE new data                │ Submit a new report   │
│ PUT      │ UPDATE existing data           │ Edit a record         │
│ DELETE   │ REMOVE data                    │ Delete a report entry │
└──────────┴────────────────────────────────┴───────────────────────┘

As a BA, you mostly care about GET (reading data for reports/dashboards) and POST (submitting data through forms or workflows).`,
        example: `Interview moment:
Interviewer: "If a user submits a new expense report through your system, what HTTP method would that use?"

Your answer: "That would be a POST request — because we're creating a new record in the system. If the user later edits it, that would be a PUT request. If the finance team pulls the report to review it, that's a GET request."

Knowing this tells the interviewer you can write precise functional requirements — not just vague ones.`,
        baAngle: null,
      },
    ],
  },

  // ── MODULE 3: REST vs SOAP ────────────────────────────────────────────────
  {
    id: "types",
    icon: "📋",
    label: "API Types",
    color: C.purple,
    colorS: C.purpleS,
    sections: [
      {
        title: "REST API — The Modern Standard",
        content: `REST = Representational State Transfer

REST is the most common API type you'll encounter in modern companies. It's:
→ Simple and lightweight
→ Uses standard HTTP methods (GET, POST, PUT, DELETE)
→ Returns data in JSON format (easy to read and use in Power BI)
→ Stateless: each request is independent — the server doesn't remember previous requests

Most modern APIs are REST: Swiggy, Paytm, Razorpay, Google Maps, NSE, Salesforce — all REST.`,
        example: `REST API response (JSON format):
{
  "company": "Zomato",
  "ipo_date": "2021-07-23",
  "issue_price": 76,
  "listing_price": 116,
  "listing_gain_pct": 52.6,
  "current_price": 224,
  "sharpe_ratio": 1.34
}

This is exactly the kind of data your IPO Analytics dashboard would consume from a real financial data API. Power BI has a built-in REST API connector that can fetch this JSON and transform it using Power Query.`,
        baAngle: `BA requirement example:
"The system shall expose a REST API endpoint GET /api/ipo-performance that returns listing_gain_pct, sharpe_ratio, and max_drawdown for each symbol. Response format: JSON. Authentication: API key in request header."`,
      },
      {
        title: "SOAP API — The Legacy Enterprise Standard",
        content: `SOAP = Simple Object Access Protocol

SOAP is older, more complex, and still widely used in:
→ Banking and financial institutions (SWIFT, core banking)
→ Government systems
→ Large enterprise ERP systems (SAP, Oracle)
→ Healthcare (HL7)

Key differences from REST:
→ Uses XML format (more verbose than JSON)
→ Has strict rules and contracts (WSDL document)
→ More secure and reliable — which is why banks still use it
→ Harder to work with and slower to develop`,
        example: `SOAP XML (what it looks like — you don't need to write this, just recognize it):

<soap:Envelope>
  <soap:Body>
    <GetIPOData>
      <Symbol>ZOMATO</Symbol>
      <Date>2021-07-23</Date>
    </GetIPOData>
  </soap:Body>
</soap:Envelope>

Why BAs need to know SOAP exists:
If you join a bank or insurance company, their core systems likely use SOAP. When a stakeholder says "can we pull account data from the core banking system?" — you need to know that's a SOAP integration, not a simple REST call, and that it requires significant development effort.`,
        baAngle: `In an interview: "Our company uses a legacy banking system. Would you know what API type it likely uses?"
Your answer: "Legacy financial systems typically use SOAP APIs because of their strict security contracts and XML-based data standards. I'd verify by checking if they have a WSDL document — that's the signature of a SOAP service. For any new integrations, I'd recommend REST where possible since it's significantly easier to work with and most modern BI tools like Power BI have native REST connectors."`,
      },
      {
        title: "GraphQL — The New Challenger",
        content: `GraphQL is a newer alternative to REST, developed by Facebook.

Key difference from REST:
→ REST: The server decides what data you get from each endpoint
→ GraphQL: YOU decide exactly what fields you want — one request, any data shape

Why it matters for BAs:
→ More efficient for dashboards — fetch only the columns you need
→ Reduces over-fetching (getting 50 fields when you only need 5)
→ Increasingly used by product companies: Shopify, GitHub, Twitter

Basic awareness level is enough for most BA roles. Just know it exists and why companies choose it.`,
        example: `GraphQL query (you choose exactly what you want):

query {
  company(symbol: "ZOMATO") {
    ipo_date
    listing_gain_pct
    sharpe_ratio
  }
}

vs REST which would return ALL 50 fields for Zomato whether you need them or not.

Interview answer if asked about GraphQL:
"GraphQL gives the client control over which fields are returned, making it more efficient for data-heavy applications like analytics dashboards where you often need specific columns from large datasets. REST is simpler and more widely supported — I'd choose REST as the default and GraphQL when the data requirements are highly variable across different consumers of the same API."`,
        baAngle: null,
      },
    ],
  },

  // ── MODULE 4: API SECURITY ────────────────────────────────────────────────
  {
    id: "security",
    icon: "🔐",
    label: "API Security",
    color: C.gold,
    colorS: C.goldS,
    sections: [
      {
        title: "Authentication vs Authorization",
        content: `Two concepts every BA must know:

AUTHENTICATION = WHO are you?
Proving your identity to the API (like showing your ID at the door)

AUTHORIZATION = WHAT can you do?
What actions are you allowed to take once you're inside (like your access level inside the building)

Example:
→ You log into Power BI Service (Authentication — proving who you are)
→ You can view reports but not publish them (Authorization — your role limits what you can do)

As a BA, when writing requirements: "The API shall authenticate using OAuth 2.0 and authorize users based on their role — Viewer, Editor, or Admin."`,
        example: null,
        baAngle: `Common BA requirement:
"Only users with the Finance Manager role shall be authorized to access the /api/financials/raw endpoint. All other roles shall receive a 403 Forbidden response."

This is role-based access control (RBAC) — a very common requirement you'll document as a BA.`,
      },
      {
        title: "API Keys, OAuth, and JWT — The Three You'll Encounter",
        content: `Three authentication methods — know what each is:

1. API KEY
→ A unique string given to your app to identify itself
→ Sent in every request header: Authorization: ApiKey abc123xyz
→ Simple but less secure — if someone gets your key, they have access
→ Common for: public data APIs, Power BI data sources, financial market APIs
→ Your IPO data API would likely use API key auth

2. OAuth 2.0
→ The "Login with Google/Facebook" standard
→ User gives permission to an app to access their data on another platform
→ More secure — generates temporary access tokens, not permanent keys
→ Common for: Salesforce, Google Analytics, Microsoft APIs, LinkedIn
→ When Power BI connects to your company's cloud data, it uses OAuth

3. JWT (JSON Web Token)
→ A compact, self-contained token that carries user info
→ Used within company systems — user logs in, gets a JWT, uses it for all subsequent API calls
→ Automatically expires — more secure than API keys
→ Common for: enterprise internal APIs, mobile apps`,
        example: `How to answer in interview:
"If a stakeholder wants to integrate our Power BI dashboards with Salesforce CRM data, I'd document that the integration requires OAuth 2.0 authentication — Power BI has a native Salesforce connector that handles this. If we're connecting to a financial market data provider, I'd check whether they use API key or OAuth and document the key management requirement: who stores it, how it's rotated, and who has access."`,
        baAngle: null,
      },
    ],
  },

  // ── MODULE 5: STATUS CODES ────────────────────────────────────────────────
  {
    id: "status",
    icon: "📡",
    label: "Status Codes",
    color: C.cyan,
    colorS: C.cyanS,
    sections: [
      {
        title: "HTTP Status Codes — What They Mean",
        content: `Every API response has a status code — a 3-digit number that tells you what happened.

As a BA, you need to recognize these when reviewing technical specs, testing APIs, or diagnosing why a dashboard isn't loading data.

2xx = SUCCESS ✅
→ 200 OK          : Request succeeded, data returned
→ 201 Created     : New record created successfully (after a POST)
→ 204 No Content  : Success but nothing to return (after a DELETE)

3xx = REDIRECTS 🔄
→ 301 Moved Permanently : The endpoint has a new URL
→ 304 Not Modified      : Data hasn't changed, use cached version

4xx = CLIENT ERRORS ❌ (Something wrong with YOUR request)
→ 400 Bad Request   : Your request was malformed or missing required fields
→ 401 Unauthorized  : You're not authenticated — provide credentials
→ 403 Forbidden     : You're authenticated but not authorized for this action
→ 404 Not Found     : The endpoint doesn't exist or the record wasn't found
→ 429 Too Many Reqs : You've exceeded the API rate limit

5xx = SERVER ERRORS 💥 (Something wrong on THEIR end)
→ 500 Internal Server Error : The server crashed — not your fault
→ 502 Bad Gateway           : Upstream server issue
→ 503 Service Unavailable   : Server is down for maintenance`,
        example: `BA scenario:
Your Power BI dashboard stops refreshing. The error log shows "401 Unauthorized."

Your analysis: "The API key or OAuth token has expired. This is an authentication issue, not a data issue. The fix is to regenerate and update the credentials in Power BI's data source settings — not to rebuild the dashboard."

This is the kind of first-level diagnosis a good BA can do without needing to call a developer.`,
        baAngle: `Requirement writing example:
"The system shall return a 404 status with message 'Symbol not found' when a requested ticker does not exist in the database. The system shall return a 429 status with a Retry-After header when rate limits are exceeded."

Writing error scenarios in requirements = advanced BA skill. Most freshers forget error cases.`,
      },
    ],
  },

  // ── MODULE 6: APIs IN POWER BI ────────────────────────────────────────────
  {
    id: "powerbi",
    icon: "📊",
    label: "APIs in Power BI",
    color: C.red,
    colorS: C.redS,
    sections: [
      {
        title: "How Power BI Connects to APIs",
        content: `Power BI has multiple ways to consume API data — as a BA you should know these exist:

1. Built-in Connectors (no code needed)
Power BI has native connectors for: Salesforce, Google Analytics, SharePoint, Azure, Dynamics 365, SAP, Snowflake. These handle authentication automatically — you just sign in.

2. Web Connector (REST API — any URL)
Power BI → Get Data → Web → paste the API URL → Power Query fetches and transforms the JSON response. This is how you'd connect to a financial market API for your IPO dashboard.

3. Custom Connector (.mez file)
For company-specific APIs that don't have a native connector — developers build a custom connector. As a BA, you'd write the requirement: "A custom Power BI connector shall be developed for the internal FinOps API using OAuth 2.0."

4. Dataflow / Dataverse
For enterprise: API data is fetched and stored in Microsoft Dataverse, then Power BI reads from that — a more managed, governable approach.`,
        example: `Real scenario for your project:
"Instead of uploading a static Excel file of IPO data, I could connect Power BI to the NSE India API or a financial data provider like Alpha Vantage using the Web Connector. The Power Query M code would fetch fresh IPO prices daily, and the dashboard would auto-refresh without manual data updates."

Saying this in an interview shows you understand live data architecture — not just static file uploads.`,
        baAngle: `BA requirement for a real project:
"The Power BI dashboard shall refresh automatically every 24 hours by connecting to the financial data REST API (GET /api/v1/ipo-performance). Authentication: API key stored in Power BI Service credentials manager. If the API returns a 5xx error, the dashboard shall display the last successful refresh timestamp and an error notification."`,
      },
      {
        title: "Rate Limits — Critical for Dashboard Design",
        content: `APIs control how many requests you can make in a given time — called a rate limit.

Example: "100 requests per hour per API key"

Why BAs must care about this:
→ If your Power BI dashboard refreshes every 5 minutes and the API has a 100 req/hour limit — you'll hit the limit in under 9 hours and get a 429 error. The dashboard stops showing data.

→ This is a functional requirement you must capture: "The system shall not exceed [API provider's] rate limit of [X] requests per [period]. The refresh schedule shall be designed accordingly."

Types of rate limits you'll encounter:
→ Per minute: High-volume real-time APIs (stock prices)
→ Per hour: Standard business APIs
→ Per day: Free-tier data providers (Alpha Vantage free tier = 25 req/day)
→ Per month: Paid APIs with usage-based billing`,
        example: `Interview answer:
"When designing a dashboard that pulls from a third-party API, I'd always document the rate limit as a constraint in the BRD and specify it as a non-functional requirement. I'd also recommend building a caching layer — store the API response in Power BI's imported storage — rather than using DirectQuery which sends a new API request every time a user interacts with a visual. This respects rate limits and improves dashboard performance."`,
        baAngle: null,
      },
    ],
  },

  // ── MODULE 7: BA INTERVIEW QUESTIONS ──────────────────────────────────────
  {
    id: "interview",
    icon: "🎤",
    label: "API Interview Q&A",
    color: C.accent,
    colorS: C.accentS,
    sections: [
      {
        title: "10 Real API Questions Asked to BA Freshers",
        content: `These are questions actually asked at Accenture, TCS, Wipro, Capgemini, and product companies:`,
        example: null,
        baAngle: null,
        qas: [
          {
            q: "What is an API? Explain it to a non-technical stakeholder.",
            a: `"Think of an API like a power socket in your house. You don't need to understand the electrical wiring inside the walls — you just plug in your device and it works. An API is the socket: it gives your application a safe, standard way to access data or features from another system, without needing to know how that system is built internally.

For your dashboard specifically: when you see live exchange rates or stock prices updating automatically, an API is delivering that data in the background — without anyone manually downloading and uploading a file."`,
          },
          {
            q: "What is the difference between GET and POST?",
            a: `"GET is for reading data — like opening a report to view it. No data is changed on the server. GET requests can be bookmarked and cached.

POST is for creating or submitting data — like filling out a form and clicking submit. The data goes in the request body, and a new record is created on the server.

Analogy: GET is asking a librarian 'show me this book.' POST is asking the librarian 'add this new book to your catalogue.'"`,
          },
          {
            q: "What does a 401 error mean vs a 403 error?",
            a: `"401 Unauthorized means you haven't proven who you are yet — you need to authenticate first. It's like trying to enter a building without showing your ID badge.

403 Forbidden means you've proven who you are, but you don't have permission to do that specific thing — like showing your ID badge but your access level doesn't allow you into a restricted floor.

In a BI context: if our Power BI dashboard gets a 401 error, the API credentials have expired and need to be refreshed. If it gets a 403, the service account doesn't have the right permissions for that data endpoint — which is an authorization/role configuration fix."`,
          },
          {
            q: "What is JSON and why is it used in APIs?",
            a: `"JSON stands for JavaScript Object Notation. It's a lightweight text format for structuring data that's easy for both humans to read and machines to parse.

APIs use JSON because it's simple, compact, and universally supported. Every major programming language and BI tool — including Power BI — can read and process JSON natively.

A quick example: instead of a massive XML document, JSON represents the same data in a clean key-value format:
{ 'company': 'Zomato', 'ipo_price': 76, 'listing_gain': 52.6 }

Power Query in Power BI has a built-in JSON parser — so when I connect Power BI to a REST API, it automatically reads the JSON response and converts it into a table structure I can use in my data model."`,
          },
          {
            q: "What is an API endpoint?",
            a: `"An API endpoint is a specific URL that represents a particular resource or action in the API — it's the 'address' of what you're requesting.

For example, if a financial data API has these endpoints:
→ /api/v1/ipo-list — returns all IPOs
→ /api/v1/ipo/{symbol} — returns data for one specific IPO
→ /api/v1/market/nse/live — returns live NSE market data

Each endpoint is a different 'door' into the system, and each returns different data. As a BA, when I write integration requirements, I'd specify exactly which endpoint the dashboard connects to, what parameters it sends, and what response format it expects — so the developer has no ambiguity."`,
          },
          {
            q: "What is API documentation and why does it matter to a BA?",
            a: `"API documentation is the official guide that describes what an API does, what endpoints it has, what parameters each endpoint accepts, what the response looks like, authentication requirements, and rate limits.

It matters enormously to a BA because:
1. It tells you what data is available — before you promise a stakeholder a feature, you check if the API actually exposes that data
2. It reveals constraints — rate limits, required fields, data freshness
3. It's the source of truth for writing integration requirements

When I connect Power BI to a data source, I'd always read the API docs first to understand the available endpoints and response structure before writing the functional requirement for the data team."`,
          },
          {
            q: "What is a webhook? How is it different from an API?",
            a: `"A regular API is 'pull' — your app goes and asks for data whenever it needs it (you call the API).

A webhook is 'push' — the other system automatically sends data to your app when something happens (they call you).

Analogy:
→ API = You checking your phone every 5 minutes to see if you got a message
→ Webhook = Getting a notification the moment a message arrives

Business example: Instead of your dashboard polling a payment API every minute to check for new transactions, a webhook pushes a notification to your system the moment any transaction is completed. More efficient, more real-time.

As a BA, I'd specify webhooks in requirements when: real-time event-driven updates are needed, polling would exceed rate limits, or the business needs instant notifications — like a payment confirmation or a risk threshold breach alert."`,
          },
          {
            q: "How would you write a requirement for an API integration?",
            a: `"I'd document five elements:

1. Endpoint: GET /api/v1/ipo-performance?symbol={ticker}
2. Authentication: API key in request header (X-API-Key: [key])
3. Response format: JSON with fields — symbol, listing_price, gain_pct, sharpe_ratio
4. Refresh schedule: Daily at 6:00 AM IST
5. Error handling: On 5xx response, retain last successful data and display data-as-of timestamp; on 4xx, display 'Data unavailable' alert

This level of detail means a developer can build it without a single follow-up question — which is the BA's job."`,
          },
          {
            q: "What is the difference between REST and SOAP?",
            a: `"Both are ways to build APIs, but they have different design philosophies:

REST is modern, lightweight, uses JSON, and works over standard HTTP. It's flexible, easy to use, and supported by virtually every tool including Power BI. Most new APIs — Swiggy, Paytm, Razorpay, Google — are REST.

SOAP is older, more structured, uses XML, and has strict contracts defined by a WSDL document. It's more verbose and harder to work with, but it's still used in banking, insurance, and government systems because of its strict security and reliability standards.

In practice: if a stakeholder from a bank says 'we need to integrate with our core banking system,' I'd expect SOAP. If they say 'we want to pull data from Salesforce or Google Analytics,' that's REST. The BA needs to flag this distinction in the BRD because SOAP integrations have significantly higher development effort."`,
          },
          {
            q: "A stakeholder says: 'I want real-time data in my Power BI dashboard.' What do you ask and what do you tell them?",
            a: `"Great scenario — this is exactly where a BA adds value.

First, I'd clarify what 'real-time' actually means to them:
→ Do they mean every second? Every minute? Every hour?
→ Most business decisions don't actually need sub-second data — they need 'current enough' data

Then I'd explain the three options and their trade-offs:
1. DirectQuery: Power BI sends a live query to the data source each time — truly real-time, but requires the source to be a database, not a flat file, and can be slow for complex dashboards.
2. Scheduled Refresh: Data refreshes every 30 minutes or 1 hour. Meets 'real-time' needs for 90% of business use cases at much lower cost.
3. Streaming Dataset: For genuinely real-time data (sensor readings, live transactions) — Power BI Streaming Dataset with push API.

I'd document the agreed refresh frequency as a functional requirement and note the rate limit constraint if an external API is involved. Most stakeholders, once they understand the cost and complexity difference, choose scheduled refresh — and it meets their actual business need."`,
          },
        ],
      },
    ],
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function CodeBlock({ children }) {
  return (
    <div style={{
      background: "#030507", borderRadius: 8, padding: "12px 14px",
      fontFamily: "monospace", fontSize: 11.5, color: "#7EC8A8",
      lineHeight: 1.8, border: `1px solid ${C.border}`,
      whiteSpace: "pre-wrap", wordBreak: "break-word", marginTop: 8,
    }}>{children}</div>
  );
}

function SectionCard({ section, color, colorS }) {
  const [open, setOpen] = useState(false);
  const hasQAs = section.qas && section.qas.length > 0;
  const [openQ, setOpenQ] = useState(null);

  return (
    <div style={{
      background: open ? colorS : C.panel,
      border: `1px solid ${open ? color + "50" : C.border}`,
      borderRadius: 12, marginBottom: 10, overflow: "hidden",
      transition: "all 0.18s",
    }}>
      <div onClick={() => setOpen(!open)} style={{
        padding: "14px 16px", cursor: "pointer",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{section.title}</div>
        <span style={{ color: C.textMuted, fontSize: 14 }}>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div style={{ padding: "0 16px 16px" }}>

          {/* Main content */}
          {section.content && (
            <div style={{
              fontSize: 12.5, color: C.textSec, lineHeight: 1.8,
              whiteSpace: "pre-line", marginBottom: section.example || section.baAngle || hasQAs ? 14 : 0,
            }}>{section.content}</div>
          )}

          {/* Example */}
          {section.example && (
            <div style={{ marginBottom: section.baAngle ? 14 : 0 }}>
              <div style={{ fontSize: 10, color: color, fontWeight: 700, letterSpacing: 0.5, marginBottom: 6 }}>
                💡 EXAMPLE / REAL SCENARIO
              </div>
              <CodeBlock>{section.example}</CodeBlock>
            </div>
          )}

          {/* BA Angle */}
          {section.baAngle && (
            <div style={{
              background: C.raised, border: `1px solid ${color}30`,
              borderRadius: 9, padding: 13, borderLeft: `3px solid ${color}`,
            }}>
              <div style={{ fontSize: 10, color: color, fontWeight: 700, letterSpacing: 0.5, marginBottom: 6 }}>
                🎯 BA ANGLE — HOW TO USE THIS IN YOUR ROLE
              </div>
              <div style={{ fontSize: 12, color: "#8EA8C0", lineHeight: 1.75 }}>{section.baAngle}</div>
            </div>
          )}

          {/* Q&As */}
          {hasQAs && section.qas.map((qa, i) => (
            <div key={i} style={{
              background: openQ === i ? C.accentS : C.raised,
              border: `1px solid ${openQ === i ? C.accent + "40" : C.border}`,
              borderRadius: 10, marginBottom: 8, overflow: "hidden",
            }}>
              <div onClick={() => setOpenQ(openQ === i ? null : i)} style={{
                padding: "12px 14px", cursor: "pointer",
                display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10,
              }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", flex: 1 }}>
                  <span style={{
                    flexShrink: 0, fontSize: 10, fontWeight: 800, color: C.accent,
                    background: C.accentS, padding: "3px 7px", borderRadius: 4,
                  }}>Q{i + 1}</span>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: C.text, lineHeight: 1.45 }}>{qa.q}</div>
                </div>
                <span style={{ color: C.textMuted, fontSize: 13, flexShrink: 0 }}>{openQ === i ? "▲" : "▼"}</span>
              </div>
              {openQ === i && (
                <div style={{ padding: "0 14px 14px" }}>
                  <div style={{ fontSize: 10, color: C.green, fontWeight: 700, letterSpacing: 0.5, marginBottom: 8 }}>
                    ✅ HOW TO ANSWER
                  </div>
                  <div style={{
                    fontSize: 12, color: "#8ECFB8", lineHeight: 1.85,
                    whiteSpace: "pre-line", background: C.greenS,
                    border: `1px solid ${C.green}25`, borderRadius: 8, padding: 13,
                  }}>{qa.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("what");
  const mod = MODULES.find(m => m.id === active);

  const conceptModules = MODULES.filter(m => m.id !== "interview");
  const interviewModule = MODULES.find(m => m.id === "interview");

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>

      {/* HEADER */}
      <div style={{
        background: C.panel, borderBottom: `1px solid ${C.border}`,
        padding: "20px 18px 16px",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 10, color: C.accent, fontWeight: 700, letterSpacing: 2.5, marginBottom: 6 }}>
            BUSINESS ANALYST INTERVIEW · API FUNDAMENTALS
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>APIs for Business Analysts</h1>
              <div style={{ fontSize: 12, color: C.textSec, marginTop: 3 }}>
                6 concept modules · 10 interview Q&As · Power BI API connection guide
              </div>
            </div>
            <div style={{
              background: C.accentS, border: `1px solid ${C.accent}40`,
              borderRadius: 10, padding: "9px 14px", textAlign: "center", flexShrink: 0,
            }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: C.accent }}>10</div>
              <div style={{ fontSize: 9, color: C.textMuted, fontWeight: 600 }}>INTERVIEW Q&As</div>
            </div>
          </div>

          {/* Confidence banner */}
          <div style={{
            marginTop: 12, background: C.goldS, border: `1px solid ${C.gold}40`,
            borderRadius: 8, padding: "9px 13px", fontSize: 12, color: "#C4993A", lineHeight: 1.5,
          }}>
            💡 <strong style={{ color: C.gold }}>BA level needed:</strong> You don't need to build APIs. You need to understand them well enough to write requirements, talk to developers confidently, and diagnose integration issues. This guide covers exactly that.
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>

        {/* MODULE NAV — horizontal scroll */}
        <div style={{
          display: "flex", gap: 6, marginTop: 16, overflowX: "auto",
          paddingBottom: 4,
        }}>
          {MODULES.map(m => (
            <button key={m.id} onClick={() => setActive(m.id)} style={{
              flexShrink: 0, padding: "8px 14px", borderRadius: 20, border: "none",
              cursor: "pointer", fontSize: 11, fontWeight: 700,
              background: active === m.id ? m.color : C.panel,
              color: active === m.id ? "#06080E" : C.textSec,
              border: `1px solid ${active === m.id ? m.color : C.border}`,
              transition: "all 0.15s", whiteSpace: "nowrap",
            }}>{m.icon} {m.label}</button>
          ))}
        </div>

        {/* ACTIVE MODULE */}
        <div style={{ marginTop: 16, marginBottom: 10 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: mod.color, marginBottom: 4 }}>
            {mod.icon} {mod.label}
          </div>
          <div style={{ height: 2, width: 40, background: mod.color, borderRadius: 1, marginBottom: 14 }} />
        </div>

        {mod.sections.map((sec, i) => (
          <SectionCard key={i} section={sec} color={mod.color} colorS={mod.colorS} />
        ))}

        {/* QUICK REFERENCE CHEAT SHEET */}
        {active === "status" && (
          <div style={{
            marginTop: 16, background: C.cyanS, border: `1px solid ${C.cyan}30`,
            borderRadius: 12, padding: 16,
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.cyan, marginBottom: 12 }}>
              📋 Quick Reference — Status Code Cheat Sheet
            </div>
            {[
              ["200", "OK", C.green, "Success — data returned"],
              ["201", "Created", C.green, "New record made (after POST)"],
              ["400", "Bad Request", C.gold, "Your request is broken"],
              ["401", "Unauthorized", C.red, "Not authenticated — log in"],
              ["403", "Forbidden", C.red, "Not authorized — wrong role"],
              ["404", "Not Found", C.red, "Endpoint or record missing"],
              ["429", "Too Many Requests", C.gold, "Rate limit exceeded"],
              ["500", "Server Error", C.red, "Their problem, not yours"],
              ["503", "Unavailable", C.red, "Server down/maintenance"],
            ].map(([code, name, color, desc]) => (
              <div key={code} style={{
                display: "flex", gap: 10, alignItems: "center",
                padding: "7px 0", borderBottom: `1px solid ${C.border}`,
              }}>
                <span style={{
                  fontSize: 12, fontWeight: 800, color, fontFamily: "monospace",
                  minWidth: 36,
                }}>{code}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color, minWidth: 110 }}>{name}</span>
                <span style={{ fontSize: 11, color: C.textSec }}>{desc}</span>
              </div>
            ))}
          </div>
        )}

        {/* GLOSSARY */}
        <div style={{
          marginTop: 20, background: C.panel, border: `1px solid ${C.border}`,
          borderRadius: 12, padding: 16, marginBottom: 30,
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 12 }}>
            📖 API Glossary — 15 Terms You Must Know
          </div>
          {[
            ["API", "Application Programming Interface — a messenger between two systems"],
            ["Endpoint", "A specific URL that represents one resource or action in an API"],
            ["Request", "What your app sends to the API (method + URL + headers + body)"],
            ["Response", "What the API sends back (status code + data)"],
            ["JSON", "JavaScript Object Notation — the standard data format for REST APIs"],
            ["REST", "Modern API architecture using HTTP methods and JSON"],
            ["SOAP", "Older API architecture using XML — common in banking/enterprise"],
            ["GET", "HTTP method to READ/fetch data — no data is changed"],
            ["POST", "HTTP method to CREATE new data on the server"],
            ["Authentication", "Proving WHO you are to the API (login / API key)"],
            ["Authorization", "Proving WHAT you're allowed to do (your role/permissions)"],
            ["API Key", "A unique string that identifies your app to the API"],
            ["OAuth 2.0", "A standard for secure delegated access — 'Login with Google'"],
            ["Rate Limit", "Maximum number of API requests allowed in a time period"],
            ["Webhook", "Push notification — the API calls YOU when something happens"],
          ].map(([term, def]) => (
            <div key={term} style={{
              display: "flex", gap: 12, padding: "8px 0",
              borderBottom: `1px solid ${C.border}`, alignItems: "flex-start",
            }}>
              <span style={{
                fontSize: 11, fontWeight: 800, color: C.accent,
                fontFamily: "monospace", minWidth: 110, flexShrink: 0,
              }}>{term}</span>
              <span style={{ fontSize: 12, color: C.textSec, lineHeight: 1.5 }}>{def}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
