export type UseCaseStatus = "published" | "coming-soon";

export type UseCaseCategory =
  | "Sales"
  | "Marketing"
  | "Supply Chain"
  | "Logistics"
  | "Production"
  | "Maintenance"
  | "HR"
  | "Knowledge Management"
  | "Customer Support"
  | "Data Workflows"
  | "Operations";

export interface UseCaseImages {
  workflowImage?: string;
  architectureDiagram?: string;
  videoUrl?: string;
}

export interface UseCaseArchitecture {
  description: string;
  steps: string[];
  diagramCaption?: string;
}

export interface UseCaseRiskLogic {
  high: string[];
  medium: string[];
  low: string[];
}

export interface UseCasePolicyGate {
  humanReview: string[];
  autoRoute: string[];
}

export interface UseCase {
  day: number;
  title: string;
  slug: string;
  category: UseCaseCategory;
  status: UseCaseStatus;
  summary: string;
  businessProblem: string;
  whyItMatters: string[];
  workflow: string[];
  architecture: UseCaseArchitecture;
  tools: string[];
  langdockRole: string[];
  businessValue: string[];
  extensions: string[];
  images: UseCaseImages;
  /** Optional display label, e.g. "Supply Chain / Inventory Planning" */
  categoryLabel?: string;
  /** Optional risk classification rules */
  riskLogic?: UseCaseRiskLogic;
  /** Optional policy gate rules for human review vs auto-route */
  policyGate?: UseCasePolicyGate;
  /** Optional governance and responsible AI notes */
  governance?: string[];
  /** Optional SEO overrides */
  seoTitle?: string;
  seoDescription?: string;
  /** Optional link to live demo or related project */
  liveDemoUrl?: string;
}
