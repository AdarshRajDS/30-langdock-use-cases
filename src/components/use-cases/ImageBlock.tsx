"use client";

import Image from "next/image";
import { useState } from "react";

interface DiagramBlockProps {
  src?: string;
  alt: string;
  label: string;
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-charcoal bg-green-light p-8 text-center">
      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-charcoal bg-green text-xl font-bold text-charcoal">
        ◈
      </span>
      <p className="text-sm font-bold text-charcoal">{label}</p>
      <p className="mt-1 text-xs text-muted">Add image to public folder</p>
    </div>
  );
}

export function DiagramBlock({ src, alt, label }: DiagramBlockProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return <Placeholder label={`${label} coming soon`} />;
  }

  return (
    <div className="overflow-hidden rounded-xl border-2 border-charcoal bg-cream">
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        className="h-auto w-full object-contain"
        sizes="(max-width: 768px) 100vw, 900px"
        onError={() => setError(true)}
      />
    </div>
  );
}

interface UseCaseImagesSectionProps {
  title: string;
  workflowImage?: string;
  architectureDiagram?: string;
  videoUrl?: string;
}

export function UseCaseImagesSection({
  title,
  workflowImage,
  architectureDiagram,
  videoUrl,
}: UseCaseImagesSectionProps) {
  return (
    <section id="diagrams" className="scroll-mt-24">
      <h2 className="editorial-heading mb-8 text-2xl font-bold text-charcoal sm:text-3xl">
        Diagrams
      </h2>
      <div className="space-y-10">
        <div>
          <p className="chapter-label mb-3">Architecture overview</p>
          <p className="mb-4 text-sm text-muted">
            End-to-end flow from trigger to integrations and business value.
          </p>
          <DiagramBlock
            src={architectureDiagram}
            alt={`${title} architecture diagram`}
            label="Architecture diagram"
          />
        </div>
        <div>
          <p className="chapter-label mb-3">Langdock workflow</p>
          <p className="mb-4 text-sm text-muted">
            The live automation built in Langdock — nodes, logic, and connections.
          </p>
          <DiagramBlock
            src={workflowImage}
            alt={`${title} Langdock workflow`}
            label="Workflow diagram"
          />
        </div>
        {videoUrl && (
          <div>
            <p className="chapter-label mb-3">Video walkthrough</p>
            <div className="aspect-video overflow-hidden rounded-xl border-2 border-charcoal">
              <iframe
                src={videoUrl}
                title={`${title} video walkthrough`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
