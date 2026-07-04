import Link from "next/link";
import type { UseCase } from "@/types/useCase";

interface UseCaseNavProps {
  previous?: UseCase;
  next?: UseCase;
}

export function UseCaseNav({ previous, next }: UseCaseNavProps) {
  return (
    <nav
      className="mt-16 grid gap-4 border-t-2 border-charcoal/10 pt-10 sm:grid-cols-2"
      aria-label="Use case navigation"
    >
      {previous ? (
        <Link href={`/use-cases/${previous.slug}`} className="paper-card group p-6">
          <p className="chapter-label mb-1">← Previous</p>
          <p className="mb-1 text-xs font-bold text-green-dark">
            Day {String(previous.day).padStart(2, "0")}
          </p>
          <p className="editorial-heading text-lg font-bold text-charcoal group-hover:text-green-dark">
            {previous.title}
          </p>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/use-cases/${next.slug}`}
          className="paper-card group p-6 text-right sm:ml-auto"
        >
          <p className="chapter-label mb-1">Next →</p>
          <p className="mb-1 text-xs font-bold text-green-dark">
            Day {String(next.day).padStart(2, "0")}
          </p>
          <p className="editorial-heading text-lg font-bold text-charcoal group-hover:text-green-dark">
            {next.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
