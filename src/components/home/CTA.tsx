import Link from "next/link";
import { siteConfig } from "@/data/site";

export function CTA() {
  const { author } = siteConfig;

  return (
    <section className="green-band">
      <div className="section-container py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="editorial-heading mb-6 text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            30 practical Langdock workflows for real business problems.
          </h2>
          <p className="mb-10 text-charcoal/70 leading-relaxed">
            Follow along as new workflows are published daily. Reach out if you
            want to discuss AI automation for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#use-cases" className="btn-secondary">
              Browse all use cases
            </Link>
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
