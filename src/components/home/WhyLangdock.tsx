import { siteConfig } from "@/data/site";

export function WhyLangdock() {
  return (
    <section className="border-b-2 border-charcoal bg-cream">
      <div className="section-container py-16 lg:py-24">
        <div className="mb-12 max-w-3xl">
          <div className="decorative-line" />
          <h2 className="editorial-heading mb-6 text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            Why Langdock?
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Langdock acts as the orchestration layer between business tools, AI
            agents, data sources, and actions. The goal is not to create isolated
            AI demos, but connected workflows that solve operational problems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.langdockFeatures.map((feature) => (
            <div key={feature.title} className="paper-card p-6">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-charcoal bg-green text-xs font-bold text-charcoal">
                {feature.icon}
              </span>
              <h3 className="editorial-heading mb-2 text-lg font-bold text-charcoal">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
