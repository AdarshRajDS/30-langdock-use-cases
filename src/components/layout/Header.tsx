import Link from "next/link";
import { siteConfig } from "@/data/site";
import { getPublishedCount } from "@/lib/useCases";

export function Header() {
  const publishedCount = getPublishedCount();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-charcoal bg-cream">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-charcoal bg-green text-sm font-bold text-charcoal">
            30
          </span>
          <div className="hidden sm:block">
            <p className="editorial-heading text-sm font-bold leading-tight text-charcoal">
              Langdock Use Cases
            </p>
            <p className="text-xs font-medium text-muted">
              {publishedCount} of {siteConfig.totalDays} published
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          <Link
            href="/#use-cases"
            className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-green-light hover:text-charcoal"
          >
            Use Cases
          </Link>
          <Link
            href="/#about"
            className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-green-light hover:text-charcoal"
          >
            About
          </Link>
          <Link href="/#contact" className="btn-primary px-4 py-2 text-sm">
            Connect
          </Link>
        </nav>
      </div>
    </header>
  );
}
