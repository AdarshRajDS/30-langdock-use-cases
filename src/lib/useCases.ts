import { useCases, categories } from "@/data/useCases";
import type { UseCase, UseCaseCategory } from "@/types/useCase";

export function getAllUseCases(): UseCase[] {
  return useCases;
}

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}

export function getUseCaseByDay(day: number): UseCase | undefined {
  return useCases.find((uc) => uc.day === day);
}

export function getPublishedUseCases(): UseCase[] {
  return useCases.filter((uc) => uc.status === "published");
}

export function getLatestPublishedUseCase(): UseCase | undefined {
  const published = getPublishedUseCases();
  return published.length > 0 ? published[published.length - 1] : undefined;
}

export function getAdjacentUseCases(day: number): {
  previous: UseCase | undefined;
  next: UseCase | undefined;
} {
  return {
    previous: getUseCaseByDay(day - 1),
    next: getUseCaseByDay(day + 1),
  };
}

export function getAllCategories(): UseCaseCategory[] {
  return categories;
}

export function getPublishedCount(): number {
  return getPublishedUseCases().length;
}

export function filterUseCases(
  query: string,
  category: UseCaseCategory | "All"
): UseCase[] {
  const normalizedQuery = query.trim().toLowerCase();

  return useCases.filter((uc) => {
    const matchesCategory = category === "All" || uc.category === category;
    const matchesQuery =
      !normalizedQuery ||
      uc.title.toLowerCase().includes(normalizedQuery) ||
      uc.summary.toLowerCase().includes(normalizedQuery) ||
      uc.category.toLowerCase().includes(normalizedQuery) ||
      `day ${uc.day}`.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}

export function getNavSections(useCase: UseCase) {
  const sections = [
    { id: "problem", label: "Business problem" },
    { id: "why", label: "Why it matters" },
    { id: "workflow", label: "Workflow" },
    { id: "architecture", label: "Architecture" },
    { id: "tools", label: "Tools" },
    { id: "langdock", label: "Langdock role" },
  ];

  if (useCase.riskLogic) {
    sections.push({ id: "risk-logic", label: "Risk logic" });
  }

  sections.push(
    { id: "business-value", label: "Business value" },
    { id: "extensions", label: "Extensions" }
  );

  if (useCase.governance) {
    sections.push({ id: "governance", label: "Governance" });
  }

  sections.push({ id: "diagrams", label: "Diagrams" });

  return sections;
}

export function getCategoryIcon(category: UseCaseCategory): string {
  const icons: Record<UseCaseCategory, string> = {
    Sales: "◉",
    Marketing: "◇",
    "Supply Chain": "▣",
    Logistics: "◈",
    Production: "▲",
    Maintenance: "◎",
    HR: "◆",
    "Knowledge Management": "◐",
    "Customer Support": "◑",
    "Data Workflows": "◒",
    Operations: "◓",
  };
  return icons[category];
}
