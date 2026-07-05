import type { UseCase } from "@/types/useCase";
import { siteConfig } from "@/data/site";

interface UseCaseHeaderProps {
  useCase: UseCase;
}

export function UseCaseHeader({ useCase }: UseCaseHeaderProps) {
  const dayLabel = String(useCase.day).padStart(2, "0");

  return (
    <header className="border-b-2 border-charcoal bg-green-light">
      <div className="section-container py-12 sm:py-16 lg:py-20">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="eyebrow">Day {dayLabel} of {siteConfig.totalDays}</span>
          <span className="rounded-full border-2 border-charcoal bg-green-soft px-3 py-1 text-xs font-bold text-charcoal">
            {useCase.category}
          </span>
          {useCase.categoryLabel && (
            <span className="rounded-full border-2 border-charcoal bg-cream px-3 py-1 text-xs font-bold text-muted">
              {useCase.categoryLabel}
            </span>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
          <p
            className="editorial-heading text-7xl font-bold leading-none text-charcoal/15 sm:text-8xl lg:text-9xl"
            aria-hidden="true"
          >
            {dayLabel}
          </p>
          <div>
            <h1 className="editorial-heading mb-4 text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              {useCase.title}
            </h1>
            <p className="max-w-3xl text-lg text-muted leading-relaxed">
              {useCase.summary}
            </p>
            {useCase.liveDemoUrl && (
              <a
                href={useCase.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 px-5 py-2.5 text-sm"
              >
                View live demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
