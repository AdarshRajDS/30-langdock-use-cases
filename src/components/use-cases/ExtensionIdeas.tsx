"use client";

import { useState } from "react";

interface ExtensionIdeasProps {
  extensions: string[];
}

export function ExtensionIdeas({ extensions }: ExtensionIdeasProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="extensions" className="scroll-mt-24">
      <h2 className="editorial-heading mb-8 text-2xl font-bold text-charcoal sm:text-3xl">
        Future extensions
      </h2>
      <div className="space-y-3">
        {extensions.map((ext, index) => (
          <div
            key={ext}
            className="overflow-hidden rounded-xl border-2 border-charcoal bg-cream"
          >
            <button
              type="button"
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-green-light sm:px-6"
              aria-expanded={expanded === index}
            >
              <span className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-charcoal bg-green text-xs font-bold text-charcoal">
                  +
                </span>
                <span className="text-sm font-bold text-charcoal sm:text-base">
                  {ext}
                </span>
              </span>
              <span className="font-bold text-muted" aria-hidden="true">
                {expanded === index ? "−" : "+"}
              </span>
            </button>
            {expanded === index && (
              <div className="border-t-2 border-charcoal/10 px-5 py-4 sm:px-6">
                <p className="text-sm text-muted">
                  This extension can be layered onto the existing workflow
                  without changing the core orchestration pattern.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
