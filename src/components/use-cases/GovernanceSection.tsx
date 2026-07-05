interface GovernanceSectionProps {
  items: string[];
}

export function GovernanceSection({ items }: GovernanceSectionProps) {
  return (
    <section id="governance" className="scroll-mt-24">
      <h2 className="editorial-heading mb-4 text-2xl font-bold text-charcoal sm:text-3xl">
        Governance & responsible AI
      </h2>
      <p className="mb-6 text-muted leading-relaxed">
        This workflow follows purpose limitation, data minimisation, human
        oversight, and auditability principles.
      </p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl border-2 border-charcoal bg-cream p-4"
          >
            <span className="font-bold text-green-dark" aria-hidden="true">
              ◈
            </span>
            <span className="text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
