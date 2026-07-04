import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ProcessStrip } from "@/components/use-cases/ProcessStrip";
import { getLatestPublishedUseCase } from "@/lib/useCases";

export function Hero() {
  const latest = getLatestPublishedUseCase();

  return (
    <section className="border-b-2 border-charcoal bg-cream">
      <div className="section-container py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl">
          <span className="eyebrow mb-8">Practical AI automation library</span>

          <h1 className="editorial-heading mb-6 text-4xl font-bold leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl xl:text-7xl">
            30 Days. 30 Langdock Use Cases.
          </h1>

          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-charcoal sm:text-xl">
            Practical AI workflows for real business problems — built,
            documented, and shared one day at a time.
          </p>

          <p className="mb-10 max-w-2xl text-muted leading-relaxed">
            This is a public challenge to explore how Langdock connects
            triggers, business data, AI reasoning, and real actions into
            useful automation workflows.
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <Link href="/#use-cases" className="btn-primary">
              Explore the use cases
            </Link>
            {latest && (
              <Link href={`/use-cases/${latest.slug}`} className="btn-secondary">
                View latest workflow →
              </Link>
            )}
          </div>

          <div className="paper-card-static p-6 sm:p-8">
            <p className="chapter-label mb-4">Workflow orchestration</p>
            <ProcessStrip />
            <p className="mt-4 text-sm text-muted">
              AI is not just chat. It is workflow orchestration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
