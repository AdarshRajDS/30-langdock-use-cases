interface WorkflowStepsProps {
  steps: string[];
  title?: string;
}

export function WorkflowSteps({
  steps,
  title = "Step-by-step workflow",
}: WorkflowStepsProps) {
  return (
    <section id="workflow" className="scroll-mt-24">
      <h2 className="editorial-heading mb-8 text-2xl font-bold text-charcoal sm:text-3xl">
        {title}
      </h2>
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex gap-4 rounded-xl border-2 border-charcoal bg-cream p-5 sm:gap-6 sm:p-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-charcoal bg-green text-sm font-bold text-charcoal">
              {index + 1}
            </span>
            <p className="pt-2 text-charcoal leading-relaxed">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
