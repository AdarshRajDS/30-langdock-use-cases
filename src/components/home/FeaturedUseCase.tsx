import Link from "next/link";
import type { UseCase } from "@/types/useCase";

interface FeaturedUseCaseProps {
  useCase: UseCase;
}

export function FeaturedUseCase({ useCase }: FeaturedUseCaseProps) {
  return (
    <section className="border-b-2 border-charcoal bg-cream">
      <div className="section-container py-16 lg:py-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="chapter-label mb-2">Latest workflow</p>
            <h2 className="editorial-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Day {String(useCase.day).padStart(2, "0")}
            </h2>
          </div>
          <span className="hidden rounded-full border-2 border-charcoal bg-green-soft px-4 py-1.5 text-xs font-bold text-charcoal sm:inline-block">
            {useCase.category}
          </span>
        </div>

        <div className="paper-card-static grid gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div>
            <span className="eyebrow mb-6">Featured</span>
            <h3 className="editorial-heading mb-4 text-2xl font-bold text-charcoal sm:text-3xl">
              {useCase.title}
            </h3>
            <p className="mb-8 text-muted leading-relaxed">{useCase.summary}</p>
            <Link href={`/use-cases/${useCase.slug}`} className="btn-primary">
              Read full workflow →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border-2 border-charcoal bg-green-light p-5">
              <p className="chapter-label mb-2">Business problem</p>
              <p className="text-sm text-charcoal leading-relaxed">
                {useCase.businessProblem}
              </p>
            </div>
            <div className="rounded-xl border-2 border-charcoal bg-green-soft p-5">
              <p className="chapter-label mb-3">Tools used</p>
              <div className="flex flex-wrap gap-2">
                {useCase.tools.slice(0, 5).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border-2 border-charcoal bg-cream px-3 py-1 text-xs font-bold text-charcoal"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
