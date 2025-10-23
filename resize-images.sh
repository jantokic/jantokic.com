#!/bin/bash

# Script to resize and standardize all project images using ImageMagick

PROJECT_DIR="/Users/jantokic/Development/personal-page/public/projects"

# Standard sizes
BANNER_WIDTH=1200
BANNER_HEIGHT=675
GALLERY_SIZE=400  # Square for logos
VIEW_WIDTH=800
VIEW_HEIGHT=600

echo "🖼️  Standardizing image sizes with ImageMagick..."
echo ""

# Function to resize using ImageMagick (handles WebP natively)
resize_image() {
    local input_file="$1"
    local width="$2"
    local height="$3"
    
    echo "📏 Resizing: $(basename "$input_file") to ${width}x${height}"
    
    # Use ImageMagick with:
    # - resize to fill dimensions (^)
    # - crop to exact size (gravity center)
    # - quality 85 for WebP
    magick "$input_file" -resize "${width}x${height}^" -gravity center -extent "${width}x${height}" -quality 85 "$input_file"
    
    if [[ $? -eq 0 ]]; then
        new_size=$(du -h "$input_file" | cut -f1)
        echo "   ✅ Resized to ${width}x${height} ($new_size)"
    else
        echo "   ❌ Failed to resize"
    fi
}

# Process banners
echo "📦 Processing BANNERS (${BANNER_WIDTH}x${BANNER_HEIGHT})..."
for file in "$PROJECT_DIR"/banners/*.webp; do
    if [[ -f "$file" ]]; then
        resize_image "$file" "$BANNER_WIDTH" "$BANNER_HEIGHT"
    fi
done
echo ""

# Process gallery images (square for logos)
echo "🎨 Processing GALLERY images (${GALLERY_SIZE}x${GALLERY_SIZE})..."
for file in "$PROJECT_DIR"/gallery/*.webp; do
    if [[ -f "$file" ]]; then
        resize_image "$file" "$GALLERY_SIZE" "$GALLERY_SIZE"
    fi
done
echo ""

# Process view images
echo "👁️  Processing VIEW images (${VIEW_WIDTH}x${VIEW_HEIGHT})..."
for file in "$PROJECT_DIR"/views/*.webp; do
    if [[ -f "$file" ]]; then
        resize_image "$file" "$VIEW_WIDTH" "$VIEW_HEIGHT"
    fi
done
echo ""

echo "✨ Image standardization complete!"
echo ""
echo "📊 Standard sizes:"
echo "   Banners: ${BANNER_WIDTH}x${BANNER_HEIGHT} (16:9 for hero sections)"
echo "   Gallery: ${GALLERY_SIZE}x${GALLERY_SIZE} (square for logos in 3D gallery)"  
echo "   Views:   ${VIEW_WIDTH}x${VIEW_HEIGHT} (4:3 for detail pages)"

