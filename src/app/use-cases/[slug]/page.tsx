import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UseCaseHeader } from "@/components/use-cases/UseCaseHeader";
import { WorkflowSteps } from "@/components/use-cases/WorkflowSteps";
import { BusinessValueCards } from "@/components/use-cases/BusinessValueCards";
import { ExtensionIdeas } from "@/components/use-cases/ExtensionIdeas";
import { UseCaseImagesSection } from "@/components/use-cases/ImageBlock";
import { UseCaseNav } from "@/components/use-cases/UseCaseNav";
import {
  StickySideNav,
  MobileProgressBar,
} from "@/components/use-cases/StickySideNav";
import { siteConfig } from "@/data/site";
import { useCases } from "@/data/useCases";
import { getUseCaseBySlug, getAdjacentUseCases } from "@/lib/useCases";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    return { title: "Use case not found" };
  }

  const title = `Day ${useCase.day}: ${useCase.title}`;

  return {
    title,
    description: useCase.summary,
    openGraph: {
      title,
      description: useCase.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: useCase.summary,
    },
  };
}

const navSections = [
  { id: "problem", label: "Business problem" },
  { id: "why", label: "Why it matters" },
  { id: "workflow", label: "Workflow" },
  { id: "architecture", label: "Architecture" },
  { id: "tools", label: "Tools" },
  { id: "langdock", label: "Langdock role" },
  { id: "business-value", label: "Business value" },
  { id: "extensions", label: "Extensions" },
  { id: "diagrams", label: "Diagrams" },
];

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  const { previous, next } = getAdjacentUseCases(useCase.day);

  return (
    <>
      <MobileProgressBar day={useCase.day} />
      <UseCaseHeader useCase={useCase} />

      <div className="section-container py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <StickySideNav sections={navSections} day={useCase.day} />

          <div className="min-w-0 space-y-16">
            <section id="problem" className="scroll-mt-24">
              <h2 className="editorial-heading mb-4 text-2xl font-bold text-charcoal sm:text-3xl">
                Business problem
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {useCase.businessProblem}
              </p>
            </section>

            <section id="why" className="scroll-mt-24">
              <h2 className="editorial-heading mb-6 text-2xl font-bold text-charcoal sm:text-3xl">
                Why this matters
              </h2>
              <ul className="space-y-3">
                {useCase.whyItMatters.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border-2 border-charcoal bg-green-light p-4"
                  >
                    <span className="mt-0.5 font-bold text-green-dark" aria-hidden="true">
                      →
                    </span>
                    <span className="text-charcoal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <WorkflowSteps steps={useCase.workflow} />

            <section id="architecture" className="scroll-mt-24">
              <h2 className="editorial-heading mb-4 text-2xl font-bold text-charcoal sm:text-3xl">
                Architecture
              </h2>
              <p className="mb-6 text-muted leading-relaxed">
                {useCase.architecture.description}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {useCase.architecture.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-xl border-2 border-charcoal bg-cream p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-charcoal bg-green text-xs font-bold text-charcoal">
                      {index + 1}
                    </span>
                    <span className="text-sm font-bold text-charcoal">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section id="tools" className="scroll-mt-24">
              <h2 className="editorial-heading mb-6 text-2xl font-bold text-charcoal sm:text-3xl">
                Tools & connections
              </h2>
              <div className="flex flex-wrap gap-2">
                {useCase.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border-2 border-charcoal bg-green-soft px-4 py-2 text-sm font-bold text-charcoal"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            <section id="langdock" className="scroll-mt-24">
              <h2 className="editorial-heading mb-6 text-2xl font-bold text-charcoal sm:text-3xl">
                Langdock role
              </h2>
              <ul className="space-y-3">
                {useCase.langdockRole.map((role) => (
                  <li
                    key={role}
                    className="flex gap-3 rounded-xl border-2 border-charcoal bg-green-soft p-4"
                  >
                    <span className="font-bold text-green-dark" aria-hidden="true">
                      ◈
                    </span>
                    <span className="text-charcoal leading-relaxed">{role}</span>
                  </li>
                ))}
              </ul>
            </section>

            <BusinessValueCards values={useCase.businessValue} />
            <ExtensionIdeas extensions={useCase.extensions} />

            <UseCaseImagesSection
              title={useCase.title}
              workflowImage={useCase.images.workflowImage}
              architectureDiagram={useCase.images.architectureDiagram}
              videoUrl={useCase.images.videoUrl}
            />

            <div className="paper-card-static bg-green p-8 text-center sm:p-10">
              <p className="editorial-heading mb-2 text-xl font-bold text-charcoal">
                Questions about this workflow?
              </p>
              <p className="mb-6 text-sm text-charcoal/70">
                {siteConfig.author.contactMessage}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/#use-cases" className="btn-secondary px-5 py-2.5 text-sm">
                  ← All use cases
                </Link>
                <a
                  href={siteConfig.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-5 py-2.5 text-sm"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <UseCaseNav previous={previous} next={next} />
          </div>
        </div>
      </div>
    </>
  );
}
