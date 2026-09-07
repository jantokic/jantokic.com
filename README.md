# jantokic.com

Personal site of Jan Tokic, AI engineer in Munich. Live at [jantokic.com](https://jantokic.com).

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS 4, next-themes (light/dark), next-intl (English and German)
- Project data in `content/`, copy in `messages/`, CVs as LaTeX in `public/` (compiled with tectonic)
- Biome for lint and format, Bun, GitHub Actions CI, deployed on Vercel

## Develop

```bash
bun install
bun run dev        # http://localhost:3000
bun run check      # biome
bun run validate   # project data sanity checks
bun run build
```

## Layout

- `app/[locale]/page.tsx` — home: hero with a CSS-transform project carousel, selected work, projects, contact
- `app/[locale]/projects/[slug]/page.tsx` — project case studies, statically generated
- `components/VerticalCarousel.tsx` — the carousel, no canvas or 3D library
- `app/sitemap.ts`, `app/robots.ts`, `app/[locale]/opengraph-image.tsx` — SEO
