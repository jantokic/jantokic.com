# Jan Tokic - Software Engineer Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://jantokic.com)

## Overview

Professional portfolio website showcasing backend engineering projects with an immersive 3D gallery experience. Built with Next.js 15, Three.js, and React Three Fiber.

## Features

- **3D Flying Gallery** - Interactive project showcase with clickable images
- **Smart Scroll Transitions** - Seamlessly transitions from 3D gallery to traditional sections
- **Dark Mode Support** - Clean design with light/dark theme switching
- **Project Case Studies** - Detailed pages for each project with tech stack, challenges, and outcomes
- **Responsive Design** - Optimized for all devices
- **Vercel Analytics** - Performance monitoring and visitor tracking

## Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **UI Library**: React 19
- **3D Graphics**: Three.js + React Three Fiber + React Three Drei
- **Styling**: Tailwind CSS v3.4.18
- **Language**: TypeScript
- **Theme**: next-themes
- **Package Manager**: pnpm 10.0.0
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10.0.0+

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
/app
├── page.tsx                    # Homepage with 3D gallery + sections
├── layout.tsx                  # Root layout with SEO & Analytics
├── globals.css                 # Global styles with dark mode
└── /projects/[slug]/page.tsx   # Dynamic project detail pages

/components
└── InfiniteGallery.tsx         # 3D gallery with scroll detection

/lib
├── projects.ts                 # Project data
└── utils.ts                    # Utility functions

/public
└── /projects                   # Project screenshots
```

## Key Components

### 3D Gallery (`components/InfiniteGallery.tsx`)
- Clickable project images flying through 3D space
- Smart scroll completion detection
- Automatic animation reset when scrolling back

### Project Pages (`app/projects/[slug]/page.tsx`)
- Dynamic routing for each project
- Detailed case studies with challenges and outcomes
- Tech stack showcase
- Related projects section

## Customization

To customize for your own use:

1. **Personal Info**: Update contact details in `app/page.tsx`
2. **Projects**: Modify project data in `lib/projects.ts`
3. **SEO**: Update metadata in `app/layout.tsx`
4. **Images**: Replace placeholder images in `/public/projects/`
5. **Profile Photo**: Replace `/placeholder-user.jpg`

## Deployment

Deployed on Vercel at [jantokic.com](https://jantokic.com)

To deploy your own:

1. Push to GitHub
2. Import to Vercel
3. Configure environment (automatic for Next.js)
4. Deploy

## License

© 2025 Jan Tokic. All rights reserved.
