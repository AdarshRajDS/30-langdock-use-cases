"use client";

import { getAllCategories } from "@/lib/useCases";
import type { UseCaseCategory } from "@/types/useCase";

interface CategoryFilterProps {
  selected: UseCaseCategory | "All";
  onSelect: (category: UseCaseCategory | "All") => void;
  query: string;
  onQueryChange: (query: string) => void;
  resultCount: number;
}

export function CategoryFilter({
  selected,
  onSelect,
  query,
  onQueryChange,
  resultCount,
}: CategoryFilterProps) {
  const categories = getAllCategories();

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative flex-1 sm:max-w-sm">
          <span className="sr-only">Search use cases</span>
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by title, category, or day..."
            className="w-full rounded-full border-2 border-charcoal bg-cream px-5 py-2.5 text-sm text-charcoal placeholder:text-muted focus:bg-green-light focus:outline-none"
          />
        </label>
        <p className="text-sm font-medium text-muted">
          Showing {resultCount} use case{resultCount !== 1 ? "s" : ""}
        </p>
      </div>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by category"
      >
        <button
          type="button"
          onClick={() => onSelect("All")}
          className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-all ${
            selected === "All"
              ? "border-charcoal bg-green text-charcoal"
              : "border-charcoal bg-cream text-muted hover:bg-green-light hover:text-charcoal"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onSelect(cat)}
            className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-all ${
              selected === cat
                ? "border-charcoal bg-green text-charcoal"
                : "border-charcoal bg-cream text-muted hover:bg-green-light hover:text-charcoal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
