import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const { author } = siteConfig;

  return (
    <footer id="contact" className="border-t-2 border-charcoal bg-cream-dark">
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="decorative-line" />
            <h2 className="editorial-heading mb-4 text-3xl font-bold text-charcoal sm:text-4xl">
              Built by {author.name}
            </h2>
            <p className="mb-2 text-lg font-bold text-green-dark">
              {author.role}
            </p>
            <p className="mb-6 max-w-md text-muted leading-relaxed">
              {author.bio}
            </p>
            <p className="mb-8 max-w-md text-sm text-muted leading-relaxed">
              {author.contactMessage}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-5 py-2.5 text-sm"
              >
                LinkedIn
              </a>
              <a
                href={author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-5 py-2.5 text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div>
              <h3 className="editorial-heading mb-4 text-xl font-bold text-charcoal">
                About this project
              </h3>
              <p className="text-muted leading-relaxed">
                A 30-day public challenge documenting practical Langdock
                automation workflows for real business problems — one new use
                case published every day.
              </p>
            </div>
            <div className="paper-card-static p-6">
              <p className="editorial-heading mb-2 text-lg font-bold text-charcoal">
                Want to connect?
              </p>
              <p className="mb-4 text-sm text-muted">
                Reach out on LinkedIn to discuss AI workflow automation or
                Langdock implementations.
              </p>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 text-sm"
              >
                Message on LinkedIn →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t-2 border-charcoal/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {author.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <Link href="/#use-cases" className="text-muted hover:text-charcoal">
              All use cases
            </Link>
            <Link href="/#about" className="text-muted hover:text-charcoal">
              Challenge
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
