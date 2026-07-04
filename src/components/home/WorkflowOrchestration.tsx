import { ProcessStrip } from "@/components/use-cases/ProcessStrip";

export function WorkflowOrchestration() {
  return (
    <section className="border-b-2 border-charcoal bg-green-soft">
      <div className="section-container py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="chapter-label mb-2">Beyond chat</p>
            <h2 className="editorial-heading mb-6 text-3xl font-bold text-charcoal sm:text-4xl">
              Workflow orchestration, not isolated AI demos
            </h2>
            <p className="mb-4 text-muted leading-relaxed">
              AI is not just chat. It is workflow orchestration: trigger,
              extract, validate, enrich, decide, act, and log.
            </p>
            <p className="text-muted leading-relaxed">
              Each use case follows this pattern — connecting real business
              triggers to structured actions across the tools your organization
              already uses.
            </p>
          </div>

          <div className="paper-card-static p-8 sm:p-10">
            <ProcessStrip />
            <div className="mt-8 space-y-4">
              {[
                {
                  step: "01",
                  label: "Trigger",
                  desc: "Form submission, email, webhook, or scheduled event",
                },
                {
                  step: "02",
                  label: "Extract & Validate",
                  desc: "Structured data from unstructured inputs with confidence checks",
                },
                {
                  step: "03",
                  label: "Enrich & Decide",
                  desc: "Business context from CRM, ERP, sheets, and external sources",
                },
                {
                  step: "04",
                  label: "Act & Log",
                  desc: "Emails, alerts, CRM updates, calendar events, and audit trails",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 border-t-2 border-charcoal/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <span className="shrink-0 text-sm font-bold text-green-dark">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-bold text-charcoal">{item.label}</p>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
