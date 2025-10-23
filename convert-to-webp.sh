#!/bin/bash

# Script to convert all project images to WebP format
# Uses cwebp (official WebP encoder)

PROJECT_DIR="/Users/jantokic/Development/personal-page/public/projects"

echo "🔄 Converting all images to WebP format..."
echo ""

# Function to convert a single image
convert_to_webp() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    
    # Skip if already webp
    if [[ "$input_file" == *.webp ]]; then
        echo "⏭️  Skipping (already WebP): $(basename "$input_file")"
        return
    fi
    
    # Skip if output already exists
    if [[ -f "$output_file" ]]; then
        echo "⏭️  Skipping (WebP exists): $(basename "$output_file")"
        return
    fi
    
    echo "🖼️  Converting: $(basename "$input_file") → $(basename "$output_file")"
    
    # Convert using cwebp with quality 85
    cwebp -q 85 "$input_file" -o "$output_file" > /dev/null 2>&1
    
    if [[ $? -eq 0 ]]; then
        # Get file sizes
        original_size=$(du -h "$input_file" | cut -f1)
        new_size=$(du -h "$output_file" | cut -f1)
        
        # Calculate percentage savings
        original_bytes=$(stat -f%z "$input_file")
        new_bytes=$(stat -f%z "$output_file")
        savings=$(echo "scale=1; (($original_bytes - $new_bytes) * 100) / $original_bytes" | bc)
        
        echo "   ✅ Success! $original_size → $new_size (${savings}% smaller)"
    else
        echo "   ❌ Failed to convert"
    fi
}

# Convert all images in the projects directory
total=0
converted=0

while IFS= read -r file; do
    ((total++))
    if [[ ! "$file" == *.webp ]]; then
        convert_to_webp "$file"
        ((converted++))
    fi
done < <(find "$PROJECT_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \))

echo ""
echo "✨ Conversion complete!"
echo "   Processed: $total files"
echo "   Converted: $converted files"
echo ""
echo "📝 Next steps:"
echo "   1. Verify the WebP images look good"
echo "   2. To remove original files: find $PROJECT_DIR -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -delete"

