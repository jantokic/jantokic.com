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
