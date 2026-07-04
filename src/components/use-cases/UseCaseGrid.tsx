"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/data/site";
import { getAllUseCases, getPublishedCount } from "@/lib/useCases";
import type { UseCaseCategory } from "@/types/useCase";
import { UseCaseCard } from "./UseCaseCard";
import { CategoryFilter } from "./CategoryFilter";

export function UseCaseGrid() {
  const allUseCases = getAllUseCases();
  const publishedCount = getPublishedCount();
  const [category, setCategory] = useState<UseCaseCategory | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allUseCases.filter((uc) => {
      const matchesCategory = category === "All" || uc.category === category;
      const matchesQuery =
        !normalizedQuery ||
        uc.title.toLowerCase().includes(normalizedQuery) ||
        uc.summary.toLowerCase().includes(normalizedQuery) ||
        uc.category.toLowerCase().includes(normalizedQuery) ||
        `day ${uc.day}`.includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [allUseCases, category, query]);

  return (
    <section id="use-cases" className="green-soft-band">
      <div className="section-container py-16 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <div className="decorative-line" />
          <h2 className="editorial-heading mb-4 text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            Published workflows
          </h2>
          <p className="text-muted leading-relaxed">
            {publishedCount} of {siteConfig.totalDays} use cases live — a new
            workflow added every day. Filter by category or search by title.
          </p>
        </div>

        <CategoryFilter
          selected={category}
          onSelect={setCategory}
          query={query}
          onQueryChange={setQuery}
          resultCount={filtered.length}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-muted">
            No use cases match your search. Try a different category or keyword.
          </p>
        )}
      </div>
    </section>
  );
}
