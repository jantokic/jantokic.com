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
- **X**: `<BrandIcon name="siX" />` (simple-icons)
- **LinkedIn**: `<Linkedin />` from Lucide (deprecated but works - Microsoft didn't give simple-icons rights)

**Note**: Lucide brand icons are deprecated but LinkedIn still works and is necessary since it's not in simple-icons.

### 6. **Personal Information**

**Contact**:
- Email: jan@jantokic.com
- GitHub: https://github.com/jantokic
- LinkedIn: https://linkedin.com/in/jan-tokic
- X: https://x.com/tokicjan

**Work Experience** (displayed in order):
1. **Software Engineer II** at Elevantiq (2024-2025, Vienna)
2. **Founding Engineer** at Mira Trading (2024-2025, London)
3. **Founding Engineer** at Copile (2022-2024, Vienna)
4. **Software Engineering Intern** at IBM iX (2022, Vienna)

**Education**:
- Currently studying B.Sc. Information Engineering at Technical University of Munich

**Skills**: TypeScript, Java, Python, Go, Next.js, Solana, Docker, Kubernetes, Databases

### 7. **Project Data** (`lib/projects.ts`)

**9 Real Projects** (actual work from Jan's career):
1. **Richard** - Autonomous AI Research Engine (Mar-Jun 2025)
2. **Mira Trading** - Solana Trading Bot (Oct 2024 - Mar 2025)
3. **Copile** - B2B Crypto Trading Platform (Sep 2022 - Mar 2024)
4. **Elevantiq** - Enterprise E-Commerce Infrastructure (Apr 2024 - Present)
5. **IBM Austria** - Headless Commerce Storefront (Jul-Sep 2022)
6. **Vendure** - Open-Source Headless Commerce Contributions (2024)
7. **Synapse** - AI Knowledge System (Oct 2025 Hackathon - 2nd place)
8. **DreamCook** - E-Commerce Community Platform (Jul 2020 - Jun 2022)
9. **Acid Node** - Solana Validator Infrastructure (Sep 2022 - Jan 2023)

**Project Links** (optional per project):
- GitHub repositories
- X/Twitter accounts
- Live websites
- Demo links
- YouTube videos (for hackathon projects)

---

## Recent Updates (Latest Session - October 2025)

### 1. Real Project Data Integration
- ✅ Replaced all placeholder projects with real projects from Jan's career
- ✅ Updated all 9 projects with accurate descriptions, tech stacks, and outcomes
- ✅ Added proper timelines and durations for each project
- ✅ Included specific metrics and achievements (revenue, users, performance gains)

### 2. Elevantiq Project Updates
- ✅ Changed slug from `elevantiq-order-processing` to `elevantiq-ecommerce-infrastructure`
- ✅ Updated description to focus on 3 major projects (Stocker, FlowTech, Feddersen)
- ✅ Removed specific revenue numbers, now says "millions of orders annually"
- ✅ Highlighted monorepo migration (7-8 repos → Nx monorepo)
- ✅ Added Infisical (secrets manager) to tech stack
- ✅ Updated duration to 1.5 years (Apr 2024 - Present)
- ✅ Changed year to '2024' to reflect start year

### 3. Project Links System
- ✅ Added optional `links` object to Project interface
- ✅ Supports: `github`, `x`, `website`, `demo`, `youtube`
- ✅ Links section appears in project detail page sidebar
- ✅ Only displays if at least one link is provided
- ✅ Added links to 5 projects:
  - **Copile**: X, Website, GitHub
  - **Mira**: X
  - **DreamCook**: X
  - **Richard**: Website (with "Private - Internal Use Only" note)
  - **Synapse**: Demo, GitHub, YouTube

### 4. Gallery Improvements
- ✅ Removed Elevantiq, IBM, and Vendure from 3D gallery (still accessible via Featured Projects)
- ✅ Reordered gallery so Richard appears first/most prominently
- ✅ Swapped Richard and Synapse positions for optimal initial visibility
- ✅ Gallery now shows 6 projects instead of 9

### 5. Mobile Fixes
- ✅ Fixed Featured Projects section visibility on mobile
- ✅ Reduced IntersectionObserver threshold from 0.3 to 0.1
- ✅ Explicitly remove `opacity-0` class when section becomes visible
- ✅ Adjusted rootMargin from -20% to -10% for earlier trigger

### 6. Project Detail Page Enhancements
- ✅ Added `object-contain` for Elevantiq hero image (prevents text cutoff)
- ✅ Other projects still use `object-cover` for full coverage
- ✅ Added Links section in sidebar with social/project links
- ✅ Integrated brand icons (GitHub, X) and external link indicators
- ✅ Added Video icon for YouTube links

### 7. Metadata & Favicon
- ✅ Added metadata to root layout with title and description
- ✅ Configured favicon path explicitly (`/favicon.ico`)
- ✅ Updated page metadata for SEO

### 8. Selected Work Updates
- ✅ Updated Elevantiq link to point to new slug
- ✅ Changed button text from "View project details" to "View details"
- ✅ Updated translations in both English and German

### 9. Richard Project Updates
- ✅ Changed duration from "8 weeks (2024)" to "3 months (Mar 2025 - Jun 2025)"
- ✅ Updated timeline to reflect actual project dates

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
- [x] Replace `/placeholder-user.jpg` with actual profile photo (now `/headshot-user.png`)
- [ ] Replace project images in `/public/projects/` with real screenshots (partially done)
- [ ] Optimize images to `.webp` format where needed

### Project Data
- [x] Updated `lib/projects.ts` with all real project details
- [x] Verified all descriptions, tech stacks, and outcomes are accurate
- [x] Added project links (GitHub, X, websites, demos, YouTube)

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

### Gallery Filtering
- Not all projects appear in the 3D gallery
- Excluded projects: Elevantiq, IBM, Vendure (still in Featured Projects section)
- Gallery shows 6 projects: Richard, Mira, Copile, Synapse, DreamCook, Acid Node
- Richard and Synapse positions swapped so Richard appears first/most prominently
- Filtered array used for both display and click handling

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

*Last Updated: October 2025 - Real project data integration, Elevantiq updates, project links system, gallery filtering, mobile fixes, and metadata improvements*
