"use client";

import Link from "next/link";
import type { UseCase } from "@/types/useCase";

interface UseCaseCardProps {
  useCase: UseCase;
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  const dayLabel = String(useCase.day).padStart(2, "0");

  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className="paper-card group flex h-full flex-col p-6 sm:p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
      aria-label={`Day ${useCase.day}: ${useCase.title}`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="chapter-label">Day {dayLabel}</span>
        <span className="rounded-full border-2 border-charcoal bg-green-soft px-3 py-1 text-xs font-bold text-charcoal">
          {useCase.category}
        </span>
      </div>

      <h3 className="editorial-heading mb-4 text-2xl font-bold leading-snug text-charcoal sm:text-3xl">
        {useCase.title}
      </h3>

      <p className="mb-8 flex-1 text-muted leading-relaxed">
        {useCase.summary}
      </p>

      <div className="flex items-center justify-between border-t-2 border-charcoal/10 pt-5">
        <span className="text-sm font-bold text-charcoal transition-colors group-hover:text-green-dark">
          Read workflow →
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-charcoal bg-green text-sm font-bold text-charcoal">
          {dayLabel}
        </span>
      </div>
    </Link>
  );
}
