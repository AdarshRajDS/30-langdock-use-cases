"use client";

import { siteConfig } from "@/data/site";

interface StickySideNavProps {
  sections: { id: string; label: string }[];
  day: number;
}

export function StickySideNav({ sections, day }: StickySideNavProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-6">
        <div className="paper-card-static p-5">
          <p className="chapter-label mb-1">Progress</p>
          <p className="editorial-heading text-2xl font-bold text-charcoal">
            Day {day}{" "}
            <span className="text-muted">/ {siteConfig.totalDays}</span>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full border-2 border-charcoal bg-cream">
            <div
              className="h-full bg-green transition-all"
              style={{ width: `${(day / siteConfig.totalDays) * 100}%` }}
            />
          </div>
        </div>

        <nav aria-label="Page sections">
          <p className="chapter-label mb-3">On this page</p>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-green-light hover:text-charcoal"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export function MobileProgressBar({ day }: { day: number }) {
  return (
    <div className="sticky top-16 z-40 border-b-2 border-charcoal bg-green-light px-5 py-2 lg:hidden">
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="text-charcoal">
          Day {day} of {siteConfig.totalDays}
        </span>
        <span className="text-muted">
          {Math.round((day / siteConfig.totalDays) * 100)}%
        </span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full border border-charcoal bg-cream">
        <div
          className="h-full bg-green"
          style={{ width: `${(day / siteConfig.totalDays) * 100}%` }}
        />
      </div>
    </div>
  );
}
