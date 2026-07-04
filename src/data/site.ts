export const siteConfig = {
  name: "30 Days. 30 Langdock Use Cases.",
  title: "30 Days. 30 Langdock Use Cases",
  description:
    "Practical AI workflow automation use cases built with Langdock across sales, supply chain, operations, HR, marketing, customer support, and data workflows.",
  url: "https://langdock-use-cases.netlify.app",
  totalDays: 30,
  author: {
    name: "Adarsh Raj",
    role: "Applied AI Engineer & Data Scientist",
    bio: "Building practical AI automation workflows with Langdock — from lead orchestration and supply chain alerts to knowledge systems and operational reporting.",
    linkedin: "https://www.linkedin.com/in/adarsh-raj-ds/",
    github: "https://github.com/AdarshRajDS",
    contactMessage:
      "Questions about these workflows or want to discuss AI automation for your organization? Connect with me on LinkedIn.",
  },
  challenge: {
    headline: "Why this challenge?",
    paragraphs: [
      "AI demos are easy. Connected business workflows are hard. This 30-day project documents how Langdock can orchestrate real operational problems — not isolated chat experiences.",
      "Each use case focuses on a concrete business problem across sales, marketing, operations, supply chain, logistics, production, maintenance, HR, knowledge management, customer support, and data workflows.",
      "A new workflow is published every day — follow along as the library grows to 30.",
    ],
    domains: [
      "Sales",
      "Marketing",
      "Operations",
      "Supply Chain",
      "Logistics",
      "Production",
      "Maintenance",
      "HR",
      "Knowledge Management",
      "Customer Support",
      "Data Workflows",
    ],
  },
  processSteps: [
    "Trigger",
    "Extract",
    "Validate",
    "Enrich",
    "Decide",
    "Act",
    "Log",
  ],
  langdockFeatures: [
    {
      title: "AI extraction",
      description:
        "Pull structured data from emails, forms, documents, and unstructured business inputs.",
      icon: "01",
    },
    {
      title: "Data validation",
      description:
        "Check required fields, confidence scores, and business rules before any action runs.",
      icon: "02",
    },
    {
      title: "Context enrichment",
      description:
        "Combine CRM, ERP, sheets, and external data into one decision-ready context.",
      icon: "03",
    },
    {
      title: "Action automation",
      description:
        "Trigger emails, calendar events, alerts, CRM updates, and logs across your stack.",
      icon: "04",
    },
  ],
} as const;
