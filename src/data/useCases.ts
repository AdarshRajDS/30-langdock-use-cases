import type { UseCase, UseCaseCategory } from "@/types/useCase";

function dayFolder(day: number): string {
  return String(day).padStart(2, "0");
}

function imagePaths(day: number) {
  const folder = `/use-cases/day-${dayFolder(day)}`;
  const version = "v4";
  return {
    workflowImage: `${folder}/workflow.png?${version}`,
    architectureDiagram: `${folder}/architecture.png?${version}`,
  };
}

export const useCases: UseCase[] = [
  {
    day: 1,
    title: "AI Consulting Lead-to-Meeting Automation",
    slug: "ai-consulting-lead-to-meeting-automation",
    category: "Sales",
    status: "published",
    summary:
      "Turns a website AI maturity assessment or consultation request into a HubSpot contact, personalized email, calendar event, and follow-up log.",
    businessProblem:
      "Website leads often require manual CRM updates, email writing, meeting scheduling, and follow-up tracking. These small steps create friction and slow down response time.",
    whyItMatters: [
      "First response time strongly influences conversion for consulting and B2B services.",
      "Manual CRM entry leads to incomplete records and lost context before sales calls.",
      "Personalized follow-up requires synthesizing form answers, company context, and maturity scores.",
      "Without orchestration, each lead triggers five separate manual tasks across tools.",
    ],
    workflow: [
      "Website form submission",
      "Langdock webhook receives lead data",
      "Lead data is validated and normalized",
      "HubSpot contact is created or updated",
      "Lead can be enriched with public company context",
      "AI maturity score is interpreted",
      "Personalized email is generated",
      "Google Calendar event and Google Meet link are created if consultation is requested",
      "Activity is logged back into HubSpot",
    ],
    architecture: {
      description:
        "A webhook-driven orchestration flow connecting the public assessment form to CRM, email, and calendar systems through Langdock as the central automation layer.",
      steps: [
        "Website form → Langdock webhook",
        "Validation & normalization layer",
        "HubSpot CRM integration",
        "AI enrichment & email generation",
        "Google Calendar / Meet scheduling",
        "Activity logging & follow-up trail",
      ],
    },
    tools: [
      "Langdock",
      "Website form",
      "HubSpot",
      "Gmail",
      "Google Calendar",
      "Google Meet",
    ],
    langdockRole: [
      "Receives webhook data",
      "Validates and normalizes lead information",
      "Orchestrates CRM, email, and calendar actions",
      "Generates personalized communication",
      "Logs activity for follow-up",
    ],
    businessValue: [
      "Faster lead response",
      "Less manual admin",
      "Cleaner CRM data",
      "Better follow-up consistency",
      "More context before sales conversations",
    ],
    extensions: [
      "Add lead scoring",
      "Add Slack notification",
      "Add proposal draft generation",
      "Add industry-specific AI roadmap recommendation",
      "Add multi-language email generation",
    ],
    images: imagePaths(1),
    liveDemoUrl: "https://glowing-bonbon-f9fc9a.netlify.app/#assessment",
  },
  {
    day: 2,
    title: "Supplier Delay Risk & Production Impact Alert",
    slug: "supplier-delay-risk-production-impact-alert",
    category: "Supply Chain",
    status: "published",
    summary:
      "Turns supplier delay emails into structured delay data, ERP-style context, production risk assessment, internal alerts, supplier responses, and delay logs.",
    businessProblem:
      "Supplier delay emails are often handled manually. The real question is not only what changed, but whether the delay will affect inventory, work orders, production lines, or customer commitments.",
    whyItMatters: [
      "Supplier delays hidden in inboxes can cascade into production stoppages.",
      "Buyers need PO context, stock levels, and demand signals — not just a new ETA.",
      "Inconsistent triage leads to either over-reaction or missed escalations.",
      "Structured delay logs enable supplier performance tracking over time.",
    ],
    workflow: [
      "Supplier delay email arrives in Gmail",
      "Langdock extracts PO number, item code, old ETA, new ETA, delay reason, and confidence",
      "Delay case is validated before continuing",
      "Google Sheets acts as a mock ERP layer",
      "Langdock looks up purchase orders, PO items, stock balance, production demand, and work orders",
      "Langdock builds a unified ERP context object",
      "Production risk is calculated as low, medium, or high",
      "Internal alert is drafted",
      "Supplier reply is drafted or sent",
      "Delay case is logged for tracking",
    ],
    architecture: {
      description:
        "Email-triggered workflow that extracts structured delay data, enriches it with ERP-style inventory and production context, assesses risk, and generates targeted communications.",
      steps: [
        "Gmail trigger → Langdock extraction",
        "Validation & confidence check",
        "Google Sheets ERP lookup",
        "Risk calculation engine",
        "Alert & reply generation",
        "Structured delay logging",
      ],
    },
    tools: [
      "Langdock",
      "Gmail",
      "Google Sheets as mock ERP",
      "Gmail drafts",
      "Future ERPNext integration",
    ],
    langdockRole: [
      "Watches for supplier delay emails",
      "Extracts structured data from unstructured email",
      "Validates required fields and confidence",
      "Enriches the case with ERP-style context",
      "Calculates production risk",
      "Generates internal and supplier communications",
      "Creates a structured delay log",
    ],
    businessValue: [
      "Faster response to supplier delays",
      "Better visibility for buyers and planners",
      "More consistent production risk decisions",
      "Less manual checking across tools",
      "Structured tracking and follow-up",
    ],
    extensions: [
      "Replace Google Sheets with ERPNext API",
      "Add Slack or Teams escalation",
      "Add approval step before supplier email is sent",
      "Add alternate supplier recommendation",
      "Add production schedule adjustment recommendation",
      "Add supplier performance analytics",
    ],
    images: imagePaths(2),
  },
  {
    day: 3,
    title: "Production Shift Handover Summary Agent",
    slug: "production-shift-handover-summary-agent",
    category: "Production",
    status: "published",
    summary:
      "Turns messy factory shift notes into a structured next-shift handover summary, issue classification, open actions, risk visibility, and optional email delivery to the production team.",
    businessProblem:
      "In many factories, shift handovers are still captured through notebooks, WhatsApp messages, Excel notes, verbal updates, and incomplete forms. The next shift may miss machine issues, material shortages, quality defects, safety concerns, or unresolved actions — not because notes were never written, but because they were never structured.",
    whyItMatters: [
      "Incomplete handovers create continuity gaps between shifts on the factory floor.",
      "Machine vibration, production shortfalls, and material shortages need clear ownership before the next shift starts.",
      "Quality defects and safety observations can be lost in unstructured notes.",
      "Without structured open actions, the same issues repeat shift after shift.",
      "Production continuity depends on context — not just output numbers.",
    ],
    workflow: [
      "Operator submits shift handover through Langdock native agent form",
      "Production Shift Handover Agent reads shift date, line, plant, and main shift notes",
      "Agent extracts production issues from messy natural-language input",
      "Issues are classified into production, maintenance, material, quality, safety, planning, and escalation",
      "Risk level is calculated as low, medium, or high based on defined rules",
      "Agent generates handover summary, key issues, next-shift impact, and open actions",
      "Facts, assumptions, and recommendations are separated for clarity",
      "Human review is flagged when safety, quality hold, or urgent escalation is detected",
      "Structured JSON output is produced for downstream logging or dashboards",
      "Gmail Send Email action delivers the summary to the next-shift team",
    ],
    architecture: {
      description:
        "MVP architecture using a Langdock native agent form and Production Shift Handover Agent with knowledge-base rules, structured output template, and optional Gmail delivery — designed for fast proof-of-value before full workflow orchestration.",
      steps: [
        "Langdock native agent form intake",
        "Production Shift Handover Agent + KB rules",
        "Issue extraction & classification",
        "Risk assessment & open action list",
        "Structured handover summary output",
        "Gmail Send Email to next shift",
      ],
    },
    tools: [
      "Langdock",
      "Langdock native agent form",
      "Production Shift Handover Agent",
      "Knowledge base (handover rules & output template)",
      "Gmail Send Email action",
      "Future: Google Sheets log",
      "Future: Slack / Teams alert",
    ],
    langdockRole: [
      "Captures messy shift notes through a native agent form",
      "Extracts and classifies production, maintenance, material, quality, and safety issues",
      "Applies risk rules and flags items needing human review",
      "Generates structured handover summary and open action list",
      "Produces JSON output reusable in email, sheets, or dashboards",
      "Sends handover summary via Gmail to the next-shift team",
      "Avoids blame framing — focused on continuity, not employee monitoring",
    ],
    businessValue: [
      "Messy shift notes become structured next-shift summaries",
      "Better continuity between morning, afternoon, and night shifts",
      "Clearer visibility of machine, material, quality, and safety risks",
      "Open actions with owners instead of lost verbal updates",
      "Faster proof-of-value without building a custom screen or database first",
      "Foundation for full workflow automation and production logging later",
    ],
    extensions: [
      "Move from agent form to full workflow with form trigger and logging",
      "Add Google Sheet open action log",
      "Add Slack or Teams escalation for high-risk handovers",
      "Add recurring issue detection across shifts",
      "Create maintenance ticket from machine breakdown notes",
      "Integrate with MES, CMMS, or QMS systems",
      "Build shift dashboard and weekly production risk report",
      "Package handover logic as a reusable Langdock skill",
    ],
    images: imagePaths(3),
  },
  {
    day: 4,
    title: "Inventory Stockout Early Warning Agent",
    slug: "day-4-inventory-stockout-early-warning",
    category: "Supply Chain",
    categoryLabel: "Supply Chain / Inventory Planning / Production Planning",
    status: "published",
    summary:
      "A Langdock workflow that monitors open demand, inventory balance, and purchase orders to detect stockout risk before production or customer delivery is affected.",
    businessProblem:
      "In many operations teams, inventory shortage risk is still checked manually. Planners move between ERP screens, spreadsheets, purchase order lists, supplier updates, and production demand to answer one basic question: will we have enough stock before the demand date?\n\nThe problem is not only low stock. The real problem is late visibility.\n\nWhen stock, demand, open purchase orders, ETA, lead time, and planner ownership are not connected, teams discover shortages only after the risk has already become urgent. This creates production delays, emergency purchasing, expedited freight, supplier firefighting, and poor customer communication.",
    whyItMatters: [
      "Stockouts are often discovered too late — when production is already planned, a work order is released, or a customer order is at risk.",
      "Inventory shortages are common, but a material may look available in one system while demand, reservations, PO timing, and supplier ETA tell a different story.",
      "Data is scattered across inventory records, open demand, purchase orders, supplier updates, and planning files — making shortage detection slow, reactive, and inconsistent.",
      "Manual checking between systems means planners answer the same question repeatedly without a connected view of risk.",
      "Late visibility drives emergency expediting, production delays, and poor customer communication that could be avoided with earlier alerts.",
    ],
    workflow: [
      "Manual or scheduled trigger starts the workflow",
      "Langdock reads Open Demand from Airtable",
      "Langdock loops through each open demand item",
      "Langdock builds item context using item code, order reference, demand date, and demand quantity",
      "Langdock reads matching Inventory Balance",
      "Langdock reads matching Purchase Orders",
      "Langdock reads Item Master for item name, buyer, planner, supplier, lead time, and criticality",
      "Langdock builds an enriched business context",
      "Deterministic risk scoring calculates projected availability, shortage quantity, and risk level",
      "AI analysis is used only for Medium or High risk cases or when data is unclear",
      "Langdock writes the result to Airtable Stockout Risk Log",
      "Langdock sends a Slack alert to the planner only for Medium or High risk",
      "Open risk cases can be followed up and escalated",
    ],
    architecture: {
      description:
        "Langdock acts as the intelligence and orchestration layer. Airtable stores operational data as a mock ERP, while Langdock reads records, validates context, calculates stockout risk, decides whether action is needed, sends Slack alerts, and logs cases for follow-up.",
      steps: [
        "Trigger (manual or scheduled)",
        "Read open demand from Airtable",
        "Build and validate item context",
        "Enrich with inventory, PO, and item master data",
        "Score stockout risk (deterministic first)",
        "Act on medium and high risk (Slack alert)",
        "Log case to Airtable risk log",
        "Follow up and escalate open cases",
      ],
      diagramCaption:
        "Airtable acts as the operational database, while Langdock orchestrates risk scoring, Slack alerts, and Airtable logging.",
    },
    tools: [
      "Langdock Workflow",
      "Airtable (mock ERP / operational database)",
      "Slack (planner alerts)",
      "Google Workspace (optional documentation & reporting)",
    ],
    langdockRole: [
      "Reads open demand, inventory balance, purchase orders, and item master from Airtable",
      "Loops through each demand item and builds enriched business context",
      "Calculates projected availability, shortage quantity, and risk level using deterministic rules first",
      "Uses AI analysis only for medium or high risk cases, or when data is unclear",
      "Writes every risk decision to the Airtable Stockout Risk Log for auditability",
      "Sends Slack alerts to planners for medium and high risk cases only",
      "Keeps low-risk cases logged without unnecessary AI calls or notifications",
    ],
    riskLogic: {
      high: [
        "Demand exceeds projected available stock before the demand date",
        "Incoming PO arrives after the demand date",
        "No relevant open PO exists",
        "ETA is missing or delayed",
        "Critical or express demand may affect production or customer delivery",
      ],
      medium: [
        "Stock can cover demand only if incoming PO arrives on time",
        "Stock cover is low",
        "PO ETA is close to demand date",
        "Planner monitoring is needed",
      ],
      low: [
        "Current stock and confirmed incoming supply cover open demand",
        "No immediate production or customer impact is identified",
      ],
    },
    businessValue: [
      "Earlier shortage visibility before production or delivery is affected",
      "Fewer production delays from late-discovered material gaps",
      "Less emergency expediting and supplier firefighting",
      "Better planner prioritisation with clear risk classification",
      "Clear ownership and follow-up through logged risk cases",
      "Stronger audit trail for every risk decision",
      "Better customer delivery reliability",
      "Lower firefighting across supply chain teams",
    ],
    extensions: [
      "Replace Airtable with ERPNext, SAP, Oracle, Dynamics, or Odoo",
      "Connect WMS for warehouse-level stock visibility",
      "Add supplier portal for ETA confirmation",
      "Add Slack escalation for overdue high-risk cases",
      "Add Gmail-triggered urgent stockout checks",
      "Add weekly shortage trend reporting and dashboard",
      "Add customer order delay communication as a follow-up workflow",
    ],
    governance: [
      "Airtable is used only for the approved inventory stockout risk purpose",
      "Only minimum required operational data is processed",
      "No supplier email is sent automatically",
      "No purchase order or financial commitment is created automatically",
      "High-risk cases require human review",
      "Missing or unclear information is marked instead of guessed",
      "Every risk decision is logged for auditability",
      "Slack alerts are internal planner notifications only",
    ],
    seoTitle:
      "Day 4: Inventory Stockout Early Warning Agent | Langdock Use Cases",
    seoDescription:
      "A practical Langdock workflow that detects inventory stockout risk early by connecting open demand, inventory balance, purchase orders, Slack alerts, and Airtable risk logging.",
    images: imagePaths(4),
  },
];

export const categories: UseCaseCategory[] = [
  "Sales",
  "Marketing",
  "Supply Chain",
  "Logistics",
  "Production",
  "Maintenance",
  "HR",
  "Knowledge Management",
  "Customer Support",
  "Data Workflows",
  "Operations",
];
