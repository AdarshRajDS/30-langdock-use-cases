import { siteConfig } from "@/data/site";

export function ProcessStrip() {
  const steps = siteConfig.processSteps;

  return (
    <div
      className="flex flex-wrap items-center gap-2 sm:gap-3"
      aria-label="Workflow orchestration steps"
    >
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2 sm:gap-3">
          <span className="rounded-full border-2 border-charcoal bg-green-light px-3 py-1.5 text-xs font-bold text-charcoal sm:text-sm">
            {step}
          </span>
          {index < steps.length - 1 && (
            <span className="font-bold text-charcoal/30" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
