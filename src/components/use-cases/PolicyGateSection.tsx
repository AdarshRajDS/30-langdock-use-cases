import type { UseCasePolicyGate } from "@/types/useCase";

interface PolicyGateSectionProps {
  policyGate: UseCasePolicyGate;
}

export function PolicyGateSection({ policyGate }: PolicyGateSectionProps) {
  const gates = [
    {
      key: "humanReview" as const,
      label: "Human review required",
      items: policyGate.humanReview,
      className: "bg-green border-charcoal",
      badgeClass: "bg-charcoal text-cream",
    },
    {
      key: "autoRoute" as const,
      label: "Auto-route allowed",
      items: policyGate.autoRoute,
      className: "bg-green-soft border-charcoal",
      badgeClass: "bg-green-dark text-cream",
    },
  ];

  return (
    <section id="policy-gate" className="scroll-mt-24">
      <h2 className="editorial-heading mb-4 text-2xl font-bold text-charcoal sm:text-3xl">
        Policy gate & human review
      </h2>
      <p className="mb-8 text-muted leading-relaxed">
        Langdock applies a policy gate after triage recommendation. Risky or
        low-confidence cases pause for human review; only safe tickets proceed
        to automatic routing.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        {gates.map((gate) => (
          <div
            key={gate.key}
            className={`paper-card-static p-6 ${gate.className}`}
          >
            <span
              className={`mb-4 inline-block rounded-full border-2 border-charcoal px-3 py-1 text-xs font-bold ${gate.badgeClass}`}
            >
              {gate.label}
            </span>
            <ul className="space-y-2">
              {gate.items.map((item) => (
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
