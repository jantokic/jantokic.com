# Project Context: Backend Developer Portfolio with 3D Gallery

## Project Overview

This is a **professional portfolio website for Jan Tokic, a freelance backend developer based in Munich, Germany**. It's built using a V0 photography gallery template that has been transformed into a stunning project showcase with 3D flying animations.

**Live Site**: https://jantokic.com (deployed on Vercel)

### What Makes This Special
- Opens with an **immersive 3D gallery** showing project screenshots flying through space
- Projects are **clickable** - click any flying image to see detailed case study
- After scrolling through projects, **automatically transitions** to traditional portfolio sections
- **Animation resumes** when scrolling back up to the gallery
- Clean **white aesthetic** with dark mode support - professional and creative
- **Bilingual** - Full English and German translations with language switcher

---

## Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **UI Library**: React 19
- **3D Graphics**: Three.js + React Three Fiber + React Three Drei
- **Styling**: Tailwind CSS v3.4.18
- **Language**: TypeScript
- **Icons**: Lucide React + simple-icons (for brand icons)
- **Fonts**: Geist Sans, Geist Mono, Instrument Serif
- **Theme**: next-themes for dark/light mode switching
- **i18n**: next-intl v4.3.12 for translations (English/German)
- **Package Manager**: pnpm 10.0.0
- **Analytics**: Vercel Analytics + Speed Insights

---

## Project Structure

```
/app
├── page.tsx                         # Root redirect to /en
├── layout.tsx                       # Root layout with fonts and theme provider
├── globals.css                      # Global Tailwind styles with dark mode
└── /[locale]                        # Locale-based routing
    ├── layout.tsx                   # Locale layout with NextIntlClientProvider
    ├── page.tsx                     # Homepage with 3D gallery + all sections
    ├── /contact/page.tsx            # Contact page with form
    └── /projects/[slug]/page.tsx    # Dynamic project detail pages

/components
├── InfiniteGallery.tsx              # 3D gallery component (clickable with scroll completion)
├── LanguageSwitcher.tsx             # Language toggle (EN/DE)
└── BrandIcon.tsx                    # Wrapper for simple-icons brand logos

/lib
├── projects.ts                      # Project data structure (7 backend projects)
└── utils.ts                         # Utility functions

/messages
├── en.json                          # English translations
└── de.json                          # German translations

/public
├── /projects                        # Project screenshot images
└── placeholder-user.jpg             # Profile photo placeholder

i18n.ts                              # i18n configuration
routing.ts                           # next-intl routing configuration
middleware.ts                        # Locale detection middleware
package.json                         # Dependencies (pnpm)
next.config.mjs                      # Next.js config with next-intl plugin
postcss.config.mjs                   # PostCSS config
tailwind.config.js                   # Tailwind CSS v3 config
tsconfig.json                        # TypeScript config
```

---

## Key Features

### 1. **Internationalization (i18n)**

**Status**: ✅ Fully implemented with English and German

**Implementation**:
- Uses `next-intl` v4.3.12 for translations
- Locale-based routing: `/en` and `/de`
- Middleware handles automatic locale detection
- Translation files in `/messages/en.json` and `/messages/de.json`
- Language switcher in footer with globe icon (🌐 EN | DE)

**Translated Sections**:
- Navigation labels
- Gallery instructions
- Intro/About section (bio, education, current role)
- Work experience (all 4 positions)
- Projects section
- Connect/Contact section
- Footer

**Configuration Files**:
- `i18n.ts` - Main i18n configuration using `getRequestConfig`
- `routing.ts` - Routing configuration with `defineRouting`
- `middleware.ts` - Locale detection and routing middleware

### 2. **InfiniteGallery Component** (`components/InfiniteGallery.tsx`)

**Features**:
- Click handlers - Images are clickable, passes `imageIndex` to parent
- Scroll completion detection - Tracks scroll distance
- Reset capability - Animation resumes when scrolling back
- Callbacks: `onImageClick`, `onScrollComplete`, `resetGallery` prop

**Scroll Behavior**:
- Threshold: `images.length * 3.5` (for 7 projects = ~25 scroll distance)
- Once threshold reached, stops capturing scroll events
- Allows natural page scrolling to sections below
- IntersectionObserver detects when gallery is back in viewport and resets

### 3. **Homepage** (`app/[locale]/page.tsx`)

**Sections**:
1. **3D Gallery** - Immersive flying gallery (always light mode)
2. **Intro** - Name, title, bio, skills pills, profile photo
3. **Selected Work** - Timeline of 4 work experiences
4. **Featured Projects** - Grid of 7 projects with preview images
5. **Connect** - Email, contact form link, social grid (GitHub, LinkedIn, X)
6. **Footer** - Copyright, language switcher, theme toggle

**Key Features**:
- Profile photo in sidebar (circular, 160px on desktop)
- Education section: B.Sc. Information Engineering at TU Munich
- Current role: Software Engineer II at Elevantiq
- Location: Munich, Germany
- Left navigation dots (desktop only) for section jumping
- Dark mode support (except gallery which stays white)
- Project preview images with hover effects

### 4. **Contact Page** (`app/[locale]/contact/page.tsx`)

**Features**:
- Dedicated contact form page
- Contact info: email, location, social links
- Services list
- Contact form (opens mailto for now)
- Quick stats cards (response time, projects, uptime)

**Accessible from**:
- Homepage Connect section has "Contact Form" link

### 5. **Brand Icons**

**Implementation**:
- Uses `simple-icons` v15.17.0 for brand logos
- `BrandIcon` component wraps simple-icons for easy use
- **GitHub**: `<BrandIcon name="siGithub" />` (simple-icons)
- **X (Twitter)**: `<BrandIcon name="siX" />` (simple-icons)
- **LinkedIn**: `<Linkedin />` from Lucide (deprecated but works - Microsoft didn't give simple-icons rights)

**Note**: Lucide brand icons are deprecated but LinkedIn still works and is necessary since it's not in simple-icons.

### 6. **Personal Information**

**Contact**:
- Email: jan@jantokic.com
- GitHub: https://github.com/jantokic
- LinkedIn: https://linkedin.com/in/jan-tokic
- X (Twitter): https://x.com/tokicjan

**Work Experience** (displayed in order):
1. **Software Engineer II** at Elevantiq (2024-2025, Vienna)
2. **Founding Engineer** at Mira Trading (2024-2025, London)
3. **Founding Engineer** at Copile (2022-2024, Vienna)
4. **Software Engineering Intern** at IBM iX (2022, Vienna)

**Education**:
- Currently studying B.Sc. Information Engineering at Technical University of Munich

**Skills**: TypeScript, Java, Python, Go, Next.js, Solana, Docker, Kubernetes, Databases

### 7. **Project Data** (`lib/projects.ts`)

**7 Backend-Focused Projects**:
1. Distributed Payment Processing System (Go, PostgreSQL, Kafka)
2. E-Commerce Microservices Migration (Node.js, TypeScript, MongoDB)
3. Real-Time Analytics Pipeline (Python, Spark, Airflow)
4. Multi-Tenant Authentication Service (Java, Spring Boot, OAuth2)
5. Warehouse Inventory API (Python, FastAPI, Elasticsearch)
6. Multi-Channel Notification System (Node.js, RabbitMQ)
7. API Gateway & Rate Limiter (Go, Redis, Kong)

---

## Recent Updates (Latest Session)

### 1. Vercel Analytics & Speed Insights
- ✅ Added `@vercel/analytics` and `@vercel/speed-insights`
- ✅ Integrated into root layout
- ✅ Tracks page views and Web Vitals automatically

### 2. Internationalization (i18n)
- ✅ Installed and configured `next-intl` v4.3.12
- ✅ Created English and German translation files
- ✅ Restructured app to use `[locale]` routing
- ✅ Added language switcher component in footer
- ✅ Translated all sections (intro, work, projects, connect)
- ✅ Middleware for automatic locale detection
- ✅ URLs: `/en` (English) and `/de` (German)

### 3. Personal Information Updates
- ✅ Updated email from `jan.tokic@proton.me` to `jan@jantokic.com`
- ✅ Added Twitter/X link: https://x.com/tokicjan
- ✅ Changed "Twitter" to "X" throughout the site
- ✅ Updated both homepage and contact page

### 4. Profile Photo
- ✅ Added circular profile photo to intro section sidebar
- ✅ Location: Top of sidebar, above "Currently" section
- ✅ Size: 128px mobile, 160px desktop
- ✅ Placeholder: `/placeholder-user.jpg`

### 5. Education Section
- ✅ Added education info to intro sidebar
- ✅ Shows "Studying" (not completed yet)
- ✅ B.Sc. Information Engineering
- ✅ Technical University of Munich

### 6. Featured Projects Enhancement
- ✅ Added project preview images to cards
- ✅ Images have hover zoom effect (scale-105)
- ✅ Aspect ratio: 16:9 (aspect-video)
- ✅ Uses same images from 3D gallery

### 7. Social Links Grid
- ✅ Changed from 2 columns to 3 columns (2 mobile, 3 desktop)
- ✅ Added X (Twitter) as third social link
- ✅ All social cards have consistent hover effects
- ✅ Icons shown next to labels

### 8. Contact Page Access
- ✅ Added "Contact Form" link on homepage
- ✅ Located in Connect section next to email
- ✅ Separator: bullet (•) between email and contact form link

### 9. Brand Icons Migration
- ✅ Installed `simple-icons` v15.17.0
- ✅ Created `BrandIcon` component wrapper
- ✅ Migrated GitHub to simple-icons (`siGithub`)
- ✅ Migrated X/Twitter to simple-icons (`siX`)
- ✅ LinkedIn stays on Lucide (deprecated but works - not in simple-icons)
- ✅ Removed all deprecated Lucide brand icon imports except LinkedIn

### 10. Work Experience Updates
- ✅ Reordered: Elevantiq first, then Mira Trading
- ✅ Updated years: Both 2024-2025 (not just 2024)
- ✅ Made company names bigger and more prominent
- ✅ Added locations: Vienna (Elevantiq, Copile, IBM iX), London (Mira Trading)
- ✅ Changed IBM Austria to IBM iX
- ✅ Updated all job descriptions with new copy

### 11. Layout Improvements
- ✅ Work section: Bigger years, skills on right side (desktop)
- ✅ Skills wrap below on mobile
- ✅ 3-column grid: Year (2 cols) | Content (7 cols) | Skills (3 cols)

### 12. Updated README
- ✅ Removed all V0 references
- ✅ Updated with proper project description
- ✅ Added installation instructions
- ✅ Listed all features (i18n, analytics, dark mode, etc.)
- ✅ Professional deployment instructions

---

## Current Behavior

### User Flow:
1. **Landing** → See 3D flying gallery with 7 project screenshots
2. **Scroll through projects** → Navigate with mouse wheel, arrows, or touch
3. **Click any project** → Opens detailed case study page
4. **Scroll past projects** → Gallery completes, text changes to "Scroll down to continue"
5. **Continue scrolling** → Intro, Work, Projects, Connect sections
6. **Scroll back up** → Gallery detects, resets, animation resumes
7. **Switch language** → Click EN/DE in footer to toggle languages
8. **Toggle theme** → Sun/Moon icon in footer for light/dark mode

### URL Structure:
- `/` → Redirects to `/en`
- `/en` → English version of homepage
- `/de` → German version of homepage
- `/en/contact` → English contact page
- `/de/contact` → German contact page
- `/en/projects/[slug]` → English project detail
- `/de/projects/[slug]` → German project detail

---

## Configuration

### package.json Scripts:
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

### Dependencies:
- next: 15.2.4
- react: 19
- next-intl: 4.3.12
- next-themes
- simple-icons: 15.17.0
- lucide-react
- three, @react-three/fiber, @react-three/drei
- tailwindcss: 3.4.18
- @vercel/analytics
- @vercel/speed-insights

### Build Output:
- All pages generate successfully
- English homepage + 7 project pages
- German homepage + 7 project pages
- Contact pages for both languages
- Static generation using `generateStaticParams`

---

## What Needs Customization

### Images
- [ ] Replace `/placeholder-user.jpg` with actual profile photo
- [ ] Replace project images in `/public/projects/` with real screenshots
- [ ] All should be `.webp` format for optimization

### Project Data
- [ ] Update `lib/projects.ts` with actual project details if needed
- [ ] Verify all descriptions, tech stacks, and outcomes are accurate

---

## Important Technical Notes

### i18n Implementation
- Uses `next-intl` with routing configuration
- Middleware handles locale detection and redirects
- Translation files are JSON with nested keys
- `useTranslations()` hook in client components
- `getMessages()` in server components

### Icon Implementation
- `simple-icons` for GitHub (`siGithub`) and X (`siX`)
- Lucide React for LinkedIn (deprecated but works - not in simple-icons)
- `BrandIcon` component wraps simple-icons for consistent usage
- All icons inherit `currentColor` from parent

### Scroll Behavior
- Gallery uses `event.preventDefault()` to capture scroll **only while active**
- Once threshold reached, releases scroll control
- IntersectionObserver (threshold: 0.5) watches gallery section
- Resets when gallery comes back into view

### Dark Mode
- Uses `next-themes` with `attribute="class"` mode
- Default theme: light
- Gallery section always stays white (no dark mode)
- All other sections support dark mode
- Theme toggle in footer (sun/moon icon)

### Translation Keys
All translation keys follow this structure:
- `nav.*` - Navigation labels
- `gallery.*` - Gallery instructions
- `intro.*` - Intro section content
- `work.*` - Work experience (nested by company key)
- `projects.*` - Projects section
- `connect.*` - Contact/social section
- `footer.*` - Footer text

---

## Common Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Clean build
rm -rf .next && pnpm dev
```

---

## Known Issues & Solutions

### Issue: Translation showing as undefined
**Solution**: Check that the translation key exists in both `en.json` and `de.json`

### Issue: 404 on locale routes
**Solution**: Restart dev server and clear `.next` folder

### Issue: LinkedIn icon not showing
**Solution**: LinkedIn is not in simple-icons - use Lucide's `<Linkedin />` instead

### Issue: Language switcher not working
**Solution**: Uses `useRouter` and `usePathname` from `@/routing`, not `next/navigation`

---

## Design Philosophy

- **Adaptive theming** - Clean white aesthetic with dark mode support
- **Monospace typography** - Technical, professional, consistent throughout
- **Progressive enhancement** - 3D gallery first, then traditional sections
- **Backend-focused** - Emphasizes systems, architecture, scalability
- **Germany/Austria-based freelancer** - Professional, European context
- **Bilingual** - Serves both English and German-speaking clients
- **Gallery exception** - 3D gallery remains white for optimal text visibility
- **Future-proof icons** - Using simple-icons where possible for longevity

---

## Deployment

**Live URL**: https://jantokic.com

**Hosting**: Vercel
- Automatic deployments from main branch
- Environment: Production
- Analytics enabled
- Speed Insights enabled

**Custom Domain**: jantokic.com
- Configured in Vercel
- SSL automatically provisioned

---

## Future Enhancements

Potential features to add:
1. Backend demo/showcase section with live API
2. Blog/articles section for technical writing
3. Testimonials from clients/colleagues
4. More detailed project case studies with architecture diagrams
5. Resume/CV download functionality
6. Contact form backend integration (currently mailto)
7. More languages (if targeting other markets)
8. Custom 404 page
9. Loading states and animations
10. Image optimization with Next.js Image component

---

*Last Updated: Current session - Full i18n implementation, analytics integration, brand icons migration, profile photo, education section, and contact updates*
