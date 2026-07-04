import type { UseCase, UseCaseCategory } from "@/types/useCase";

function dayFolder(day: number): string {
  return String(day).padStart(2, "0");
}

function imagePaths(day: number) {
  const folder = `/use-cases/day-${dayFolder(day)}`;
  const version = "v2";
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
