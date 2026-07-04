import { Hero } from "@/components/home/Hero";
import { ChallengeIntro } from "@/components/home/ChallengeIntro";
import { FeaturedUseCase } from "@/components/home/FeaturedUseCase";
import { UseCaseGrid } from "@/components/use-cases/UseCaseGrid";
import { WhyLangdock } from "@/components/home/WhyLangdock";
import { WorkflowOrchestration } from "@/components/home/WorkflowOrchestration";
import { CTA } from "@/components/home/CTA";
import { getLatestPublishedUseCase } from "@/lib/useCases";

export default function HomePage() {
  const latest = getLatestPublishedUseCase();

  return (
    <>
      <Hero />
      <ChallengeIntro />
      {latest && <FeaturedUseCase useCase={latest} />}
      <UseCaseGrid />
      <WhyLangdock />
      <WorkflowOrchestration />
      <CTA />
    </>
  );
}
