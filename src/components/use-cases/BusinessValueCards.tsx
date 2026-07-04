interface BusinessValueCardsProps {
  values: string[];
}

export function BusinessValueCards({ values }: BusinessValueCardsProps) {
  return (
    <section id="business-value" className="scroll-mt-24">
      <h2 className="editorial-heading mb-8 text-2xl font-bold text-charcoal sm:text-3xl">
        Business value
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {values.map((value) => (
          <div key={value} className="paper-card-static bg-green-soft p-6">
            <span className="mb-3 inline-block h-1 w-8 rounded-full bg-green" />
            <p className="font-bold text-charcoal leading-relaxed">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
