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
