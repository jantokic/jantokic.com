# Project Context: Backend Developer Portfolio with 3D Gallery

## Project Overview

This is a **professional portfolio website for a freelance backend developer based in Germany**. It's built using a V0 photography gallery template that has been transformed into a stunning project showcase with 3D flying animations.

### What Makes This Special
- Opens with an **immersive 3D gallery** showing project screenshots flying through space
- Projects are **clickable** - click any flying image to see detailed case study
- After scrolling through projects, **automatically transitions** to traditional portfolio sections
- **Animation resumes** when scrolling back up to the gallery
- Clean **white aesthetic** with dark mode support - professional and creative

---

## Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **UI Library**: React 19
- **3D Graphics**: Three.js + React Three Fiber + React Three Drei
- **Styling**: Tailwind CSS v3.4.18
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Geist Sans, Geist Mono, Instrument Serif
- **Theme**: next-themes for dark/light mode switching

---

## Project Structure

```
/app
├── page.tsx                    # Homepage with 3D gallery + all sections
├── layout.tsx                  # Root layout with SEO metadata
├── globals.css                 # Global Tailwind styles
└── /projects/[slug]/page.tsx   # Dynamic project detail pages

/components
└── InfiniteGallery.tsx         # 3D gallery component (MODIFIED - now clickable with scroll completion)

/lib
├── projects.ts                 # Project data structure and 7 backend projects
└── utils.ts                    # Utility functions

/public
├── /projects                   # Project screenshot images (placeholder)
├── 1-8.webp                    # Original sample images
└── placeholder-user.jpg        # Profile photo placeholder

package.json                    # Dependencies (pnpm)
next.config.mjs                 # Next.js config
postcss.config.mjs              # PostCSS config
tailwind.config.js              # Tailwind CSS config
tsconfig.json                   # TypeScript config
```

---

## Key Modifications Made

### 1. InfiniteGallery Component (`components/InfiniteGallery.tsx`)

**Added Features:**
- **Click handlers** - Images are now clickable, passes `imageIndex` to parent
- **Scroll completion detection** - Tracks scroll distance and completes after viewing all projects
- **Reset capability** - Can resume animation when scrolling back to gallery section
- **Callbacks**: `onImageClick`, `onScrollComplete`, `resetGallery` prop

**How Scroll Completion Works:**
- Threshold: `images.length * 3.5` (for 7 projects = ~25 scroll distance)
- Once threshold reached, stops capturing scroll events
- Allows natural page scrolling to continue to sections below
- When gallery comes back into viewport (IntersectionObserver), resets and resumes

### 2. Homepage (`app/page.tsx`)

**Added Sections (below 3D gallery):**
1. **About Me** - Bio, location (Germany), professional background
2. **Skills & Technologies** - Organized by categories (Languages, Frameworks, Databases, Tools, Practices)
3. **Career Timeline** - Visual timeline with years, roles, companies
4. **Featured Projects** - Grid view of all projects with cards
5. **Contact/Footer** - Social links, CTA buttons

**Key Features:**
- IntersectionObserver detects when gallery is in viewport
- State management for `galleryComplete` and `resetGallery`
- Text overlay uses `absolute` positioning (stays within gallery section, not entire page)
- Instructions change when gallery completes: "Scroll down to continue" with arrow

### 3. Project Detail Pages (`app/projects/[slug]/page.tsx`)

Beautiful case study pages for each project:
- Hero section with title, category, year
- Full-width hero image
- Overview, Challenges & Solutions, Results & Impact
- Sidebar with Role, Duration, Tech Stack
- Additional screenshots
- Related projects section
- Back button to return to homepage

### 4. Project Data (`lib/projects.ts`)

**7 Backend-Focused Projects:**
1. Distributed Payment Processing System (Go, PostgreSQL, Kafka)
2. E-Commerce Microservices Migration (Node.js, TypeScript, MongoDB)
3. Real-Time Analytics Pipeline (Python, Spark, Airflow)
4. Multi-Tenant Authentication Service (Java, Spring Boot, OAuth2)
5. Warehouse Inventory API (Python, FastAPI, Elasticsearch)
6. Multi-Channel Notification System (Node.js, RabbitMQ)
7. API Gateway & Rate Limiter (Go, Redis, Kong)

**Project Interface:**
```typescript
interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  techStack: string[];
  challenges: string[];
  outcomes: string[];
  duration: string;
  category: string;
  image: string;
  images: string[];
  year: string;
}
```

### 5. SEO & Metadata (`app/layout.tsx`)

Updated with:
- Title template: "Backend Engineer Portfolio | Freelance Developer Germany"
- Description, keywords for SEO
- Open Graph tags for social sharing
- Twitter card metadata
- Proper robots meta

---

## Recent Updates (Latest Session)

### 1. Package Manager Migration
- **Switched from npm to pnpm**: Updated `package.json` with `"packageManager": "pnpm@10.0.0"`
- **Removed npm files**: Deleted `node_modules/` and `package-lock.json`
- **Generated pnpm lockfile**: Fresh `pnpm-lock.yaml` created

### 2. Tailwind CSS Downgrade & Configuration
- **Downgraded from v4 to v3.4.18**: Fixed compatibility issues with Next.js 15.2.4
- **Updated PostCSS config**: Changed from `@tailwindcss/postcss` to standard `tailwindcss` + `autoprefixer`
- **Created Tailwind config**: Added `tailwind.config.js` with proper theme extensions
- **Updated CSS format**: Converted from OKLCH to HSL color format for v3 compatibility

### 3. Dark Mode Implementation
- **Added next-themes**: Theme switching support throughout the site
- **Updated layout**: Added `ThemeProvider` wrapper with `attribute="class"` and `defaultTheme="light"`
- **CSS variables**: Complete HSL color system for both light and dark modes
- **Theme toggle**: Added sun/moon icon in footer for theme switching
- **Gallery exception**: 3D gallery section remains white background (no dark mode)

### 4. Typography Overhaul
- **Consistent monospace styling**: Applied `font-mono uppercase tracking-wider font-semibold` throughout
- **Headings**: Large monospace text with proper spacing
- **Body text**: Small monospace text for descriptions and labels
- **Gallery text**: Kept original serif styling for "I create; therefore I am"
- **All pages updated**: Main page, project details, and contact page

### 5. Navigation Improvements
- **Fixed left navigation**: All 5 buttons now work correctly
- **Gallery section detection**: Added gallery to intersection observer
- **Improved scrolling**: Gallery button scrolls to top, others scroll to sections
- **Active state tracking**: Buttons highlight based on current section

### 6. Project Detail Page Enhancements
- **Better back navigation**: "Back to Projects" links to `/#projects` instead of top
- **Next.js 15 compatibility**: Updated `params` to be awaited in async functions
- **Consistent typography**: Applied monospace styling throughout

### 7. Build & Deployment Fixes
- **Vercel compatibility**: Fixed pnpm version mismatch issues
- **Build optimization**: All 12 pages generate successfully
- **Error resolution**: Fixed Next.js 15 dynamic route parameter warnings

### 8. Code Cleanup
- **Removed v0-minimalist-portfolio**: Deleted unnecessary directory and duplicate files
- **Streamlined dependencies**: Only essential packages remain
- **Clean project structure**: Organized and optimized file layout

---

## Current Behavior

### User Flow:
1. **Landing** → See 3D flying gallery with 7 project screenshots
2. **Scroll through projects** → Navigate with mouse wheel, arrows, or touch
3. **Click any project** → Opens detailed case study page
4. **Scroll past projects (threshold reached)** → Gallery completes
5. **Text indicator changes** → "Scroll down to continue" ↓ appears
6. **Continue scrolling** → Page scrolls normally to About/Skills/Career/Projects/Contact
7. **Text stays in gallery** → "I create; therefore I am" doesn't overlay content below
8. **Scroll back up** → Gallery detects, resets, animation resumes

### Scroll Threshold:
- Formula: `images.length * 3.5`
- For 7 projects: ~25 scroll distance
- Completes after viewing projects approximately once

---

## Known Configuration

### package.json Scripts:
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```
Note: Removed `--turbopack` flag (not supported in this Next.js version)

### Build Output:
- All 11 pages generate successfully (1 homepage + 7 project pages + 3 system)
- Static generation using `generateStaticParams`
- No build errors

---

## What Needs Customization

### 1. Personal Information (app/page.tsx)
- [ ] Update email: `your.email@example.com`
- [ ] Update GitHub URL: `https://github.com/yourusername`
- [ ] Update LinkedIn URL: `https://linkedin.com/in/yourusername`
- [ ] Customize "About Me" bio text
- [ ] Replace profile photo: `/placeholder-user.jpg`
- [ ] Update skills arrays with actual tech stack
- [ ] Modify career timeline with real experience

### 2. Projects (lib/projects.ts)
- [ ] Replace with actual project details
- [ ] Update project descriptions
- [ ] Change tech stacks to match real projects
- [ ] Update challenges and outcomes
- [ ] Replace placeholder images in `/public/projects/` with real screenshots

### 3. SEO (app/layout.tsx)
- [ ] Update site URL: `https://yoursite.com`
- [ ] Add actual name/brand
- [ ] Customize meta descriptions

### 4. Images Needed
- Profile photo (square, high-res)
- 7+ project screenshots (1-2 per project)
- All should be `.webp` format for optimization

---

## Important Technical Notes

### Scroll Behavior Implementation
The gallery uses:
- `event.preventDefault()` to capture scroll events **only while gallery is active**
- Once `totalScrollDistance >= threshold`, releases scroll control
- IntersectionObserver (threshold: 0.5) watches gallery section
- When gallery comes back into view AND was previously complete → resets state

### Text Overlay Positioning
- Changed from `position: fixed` to `position: absolute`
- Contained within `<section>` with `relative` positioning
- Only visible when gallery section is in viewport

### State Management
```typescript
const [galleryComplete, setGalleryComplete] = useState(false);
const [resetGallery, setResetGallery] = useState(false);
const galleryRef = useRef<HTMLElement>(null);
```

---

## Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Potential Issues & Solutions

### Issue: Text overlay still covering content
**Solution**: Check that gallery `<section>` has `position: relative` and text uses `position: absolute`

### Issue: Scroll threshold too long/short
**Solution**: Adjust multiplier in `InfiniteGallery.tsx` line 323:
```typescript
const scrollThreshold = (normalizedImages.length * 3.5); // Change 3.5
```

### Issue: Animation doesn't resume when scrolling back
**Solution**: Verify IntersectionObserver is properly set up with `threshold: 0.5` and that `galleryRef` is correctly attached

### Issue: Images not loading
**Solution**: Check that images are in `/public/projects/` and Next.js `unoptimized: true` is set in config

---

## Design Philosophy

- **Adaptive theming** - Clean white aesthetic with dark mode support
- **Monospace typography** - Technical, professional, consistent throughout
- **Progressive enhancement** - 3D gallery first, then traditional sections
- **Backend-focused** - emphasizes systems, architecture, scalability
- **Germany-based freelancer** - professional, European context
- **Gallery exception** - 3D gallery remains white for optimal text visibility

---

## Next Steps (Future Enhancements)

1. Add actual project screenshots and content
2. Integrate contact form with backend
3. Add blog/articles section
4. Implement analytics tracking
5. Add more detailed project case studies
6. Create custom 404 page
7. Add loading states for images
8. Optimize images with Next.js Image optimization
9. Add testimonials section
10. Implement i18n for German/English

---

## Questions for User

When continuing this project, you may want to ask:
- Should we add more projects or keep it at 7?
- Any specific customization to the 3D gallery animation speed/style?
- Need to integrate any external services (CMS, analytics, forms)?
- Want to add a blog section?
- Should we create different versions for different types of clients?

---

## File Changes Summary

**Modified Files:**
- `components/InfiniteGallery.tsx` - Added click, scroll completion, reset
- `app/page.tsx` - Added all sections, IntersectionObserver, state management, dark mode, typography
- `app/layout.tsx` - Updated SEO metadata, added ThemeProvider
- `app/projects/[slug]/page.tsx` - Typography updates, navigation improvements, Next.js 15 compatibility
- `app/globals.css` - Tailwind v3 migration, dark mode CSS variables
- `package.json` - pnpm migration, Tailwind v3 dependencies
- `postcss.config.mjs` - Updated for Tailwind v3 compatibility

**Created Files:**
- `lib/projects.ts` - Project data and interfaces
- `app/projects/[slug]/page.tsx` - Dynamic project pages
- `app/contact/page.tsx` - Contact page with form
- `tailwind.config.js` - Tailwind CSS v3 configuration
- `/public/projects/*.webp` - Placeholder project images (copied from originals)

**Removed Files:**
- `v0-minimalist-portfolio/` - Entire directory (duplicate components)
- `package-lock.json` - Replaced with pnpm-lock.yaml

**No Changes:**
- `components/theme-provider.tsx` - Already had correct implementation
- `lib/utils.ts` - Already had cn utility function
- `next.config.mjs` - No changes needed
- Original sample images (1-8.webp)

---

## Build Status

✅ **Last successful build**: All pages generated
✅ **No TypeScript errors** (validation skipped in config)
✅ **No linting errors** (linting skipped in config)
✅ **All routes working**: Home + 7 project detail pages

---

*Last Updated: Latest session - pnpm migration, Tailwind v3, dark mode, typography overhaul, navigation fixes, Next.js 15 compatibility*
