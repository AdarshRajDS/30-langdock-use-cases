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
  /** Optional link to live demo or related project */
  liveDemoUrl?: string;
}
