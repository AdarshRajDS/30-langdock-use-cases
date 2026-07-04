# 30 Days. 30 Langdock Use Cases

A premium, modular website showcasing 30 practical AI automation use cases built with Langdock. Each day adds a new workflow documenting real business problems across sales, supply chain, operations, HR, and more.

**Live stack:** Next.js (App Router) · TypeScript · Tailwind CSS

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new use case (Day 3, 4, …)

You only need to edit **one file** and optionally add images.

### 1. Add a new entry to `src/data/useCases.ts`

Append a new object to the `useCases` array (currently 2 published — grows by one each day):

```typescript
{
  day: 3,
  title: "Purchase Order Confirmation Mismatch Checker",
  slug: "purchase-order-confirmation-mismatch-checker",
  category: "Supply Chain",
  status: "published",  // ← change this
  summary: "Your one-line summary...",
  businessProblem: "...",
  whyItMatters: ["...", "..."],
  workflow: ["Step 1", "Step 2", "..."],
  architecture: {
    description: "...",
    steps: ["...", "..."],
  },
  tools: ["Langdock", "Gmail", "..."],
  langdockRole: ["...", "..."],
  businessValue: ["...", "..."],
  extensions: ["...", "..."],
  images: {
    workflowImage: "/use-cases/day-03/workflow.png",
    architectureDiagram: "/use-cases/day-03/architecture.png",
  },
}
```

The homepage grid, featured section, filters, and detail page update automatically — no other code changes required.

### 2. Add images (optional)

Place images in the public folder:

```
public/use-cases/day-03/
  workflow.png          # Langdock workflow canvas
  architecture.png      # Architecture overview diagram
```

If images are missing, the site shows a styled placeholder: **"Workflow image coming soon"**.

### 3. Preview

```bash
npm run dev
```

Visit `/use-cases/purchase-order-confirmation-mismatch-checker` to review the detail page.

## Project structure

```
src/
  app/
    page.tsx                    # Homepage
    use-cases/[slug]/page.tsx   # Dynamic use case pages
    opengraph-image.tsx         # OG image for LinkedIn sharing
  components/
    home/                       # Hero, CTA, Why Langdock, etc.
    use-cases/                  # Cards, grid, filters, detail sections
    layout/                     # Header, Footer
  data/
    useCases.ts                 # ← Edit this daily
    site.ts                     # Site config, author links
  lib/
    useCases.ts                 # Helper functions
  types/
    useCase.ts                  # TypeScript types
public/
  use-cases/day-XX/             # Optional images per day
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with published use cases, filters, and challenge intro |
| `/use-cases/[slug]` | Full use case detail page with workflow, architecture, and navigation |

## Author

Built by **Adarsh Raj** — Applied AI Engineer & Data Scientist

- [LinkedIn](https://www.linkedin.com/in/adarsh-raj-ds/)
- [GitHub](https://github.com/AdarshRajDS)

Day 1 live demo: [AI Maturity Assessment](https://glowing-bonbon-f9fc9a.netlify.app/#assessment)

## Deploy

```bash
npm run build
npm start
```

Works on Vercel, Netlify, or any Node.js host.

## License

Private project — all rights reserved.
