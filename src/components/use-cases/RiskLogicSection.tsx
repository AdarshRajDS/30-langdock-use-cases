import type { UseCaseRiskLogic } from "@/types/useCase";

interface RiskLogicSectionProps {
  riskLogic: UseCaseRiskLogic;
}

export function RiskLogicSection({ riskLogic }: RiskLogicSectionProps) {
  const levels = [
    {
      key: "high" as const,
      label: "High risk",
      items: riskLogic.high,
      className: "bg-green border-charcoal",
      badgeClass: "bg-charcoal text-cream",
    },
    {
      key: "medium" as const,
      label: "Medium risk",
      items: riskLogic.medium,
      className: "bg-green-light border-charcoal",
      badgeClass: "bg-green-dark text-cream",
    },
    {
      key: "low" as const,
      label: "Low risk",
      items: riskLogic.low,
      className: "bg-green-soft border-charcoal",
      badgeClass: "bg-charcoal/80 text-cream",
    },
  ];

  return (
    <section id="risk-logic" className="scroll-mt-24">
      <h2 className="editorial-heading mb-4 text-2xl font-bold text-charcoal sm:text-3xl">
        Risk logic
      </h2>
      <p className="mb-8 text-muted leading-relaxed">
        Deterministic scoring runs first. AI analysis is used only for medium or
        high risk cases, or when data is unclear.
      </p>
      <div className="grid gap-6 lg:grid-cols-3">
        {levels.map((level) => (
          <div
            key={level.key}
            className={`paper-card-static p-6 ${level.className}`}
          >
            <span
              className={`mb-4 inline-block rounded-full border-2 border-charcoal px-3 py-1 text-xs font-bold ${level.badgeClass}`}
            >
              {level.label}
            </span>
            <ul className="space-y-2">
              {level.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-charcoal leading-relaxed"
                >
                  <span className="font-bold text-green-dark" aria-hidden="true">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
