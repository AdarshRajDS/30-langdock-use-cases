import { siteConfig } from "@/data/site";
import { getPublishedCount } from "@/lib/useCases";

export function ChallengeIntro() {
  const { challenge } = siteConfig;
  const publishedCount = getPublishedCount();

  return (
    <section id="about" className="border-b-2 border-charcoal bg-green-light">
      <div className="section-container py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="decorative-line" />
            <h2 className="editorial-heading mb-6 text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
              {challenge.headline}
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              {challenge.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="paper-card-static p-8">
              <p className="editorial-heading text-5xl font-bold text-charcoal">
                {publishedCount}
                <span className="text-2xl text-muted">
                  {" "}
                  / {siteConfig.totalDays}
                </span>
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-green-dark">
                Workflows published
              </p>
            </div>

            <div className="paper-card-static p-8">
              <p className="chapter-label mb-4">Coverage across domains</p>
              <div className="flex flex-wrap gap-2">
                {challenge.domains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-full border-2 border-charcoal bg-green-soft px-3 py-1 text-xs font-bold text-charcoal"
                  >
                    {domain}
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
