# Project Images Structure

This folder contains all project-related images organized into three subfolders:

## Folder Structure

```
/public/projects/
├── banners/         # Large banner images for hero sections and featured project cards
├── gallery/         # Smaller images optimized for the 3D gallery animation
└── views/           # Additional detail view images shown on project detail pages
```

## Usage in Code

### Banner Images (`/projects/banners/`)
- Used in: Project detail page hero, Featured Projects section cards
- Field: `project.image`
- Aspect ratio: 16:9 (recommended)
- Examples: `richard_banner.jpeg`, `copile_banner.png`

### Gallery Images (`/projects/gallery/`)
- Used in: 3D flying gallery on homepage
- Field: `project.galleryImage`
- Should be smaller/more focused than banners
- Examples: `richard_gallery.jpeg`, `copile_gallery.png`

### View Images (`/projects/views/`)
- Used in: "More Views" section on project detail pages
- Field: `project.images` array
- Multiple images per project (view1, view2, etc.)
- Examples: `richard_view1.jpeg`, `richard_view2.jpeg`

## File Naming Convention

For consistency, use this naming pattern:
- Banners: `{project-slug}_banner.{ext}`
- Gallery: `{project-slug}_gallery.{ext}`
- Views: `{project-slug}_view{number}.{ext}`

Example for "richard-ai-research":
- `/banners/richard_banner.jpeg`
- `/gallery/richard_gallery.jpeg`
- `/views/richard_view1.jpeg`
- `/views/richard_view2.jpeg`

## Standardized Image Sizes

All project images follow these standard dimensions:

### Banner Images (1200x675px - 16:9 ratio)
- **Purpose**: Hero sections on project detail pages, Featured Projects cards
- **Aspect Ratio**: 16:9 (widescreen)
- **Format**: WebP, Quality 85
- **Example**: richard_banner.webp

### Gallery Images (400x400px - 1:1 square)
- **Purpose**: 3D flying gallery on homepage
- **Aspect Ratio**: 1:1 (square format for logos)
- **Format**: WebP, Quality 85
- **Example**: richard_gallery.webp

### View Images (800x600px - 4:3 ratio)
- **Purpose**: Additional detail images on project pages
- **Aspect Ratio**: 4:3 (traditional photo ratio)
- **Format**: WebP, Quality 85
- **Example**: richard_view1.webp, richard_view2.webp

## Conversion Scripts

Two helper scripts are available in the project root:

1. **convert-to-webp.sh** - Converts PNG/JPEG to WebP format
2. **resize-images.sh** - Resizes all images to standard dimensions

Run these scripts whenever you add new project images to ensure consistency.

## "More Views" Section

The "More Views" section on project detail pages displays up to 3 images from the `images` array:

- **First image (required)**: Project logo - should use `object-contain` to show full logo
- **Second image (optional)**: Product screenshot 1
- **Third image (optional)**: Product screenshot 2

### Layout:
- **Mobile**: Single column (stacked)
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3 columns (when all 3 images present)

### Example:
```typescript
images: [
  '/projects/views/richard_view1.webp',  // Logo (always shown)
  '/projects/views/richard_view2.webp',  // Screenshot 1 (optional)
  '/projects/views/richard_view3.webp',  // Screenshot 2 (optional)
]
```

If you only have a logo, just provide one image:
```typescript
images: ['/projects/views/project_view1.webp']
```
