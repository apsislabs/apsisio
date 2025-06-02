#!/bin/bash

# Directory to search (default is current)
DIR="${1:-.}"

# Quality setting for WebP (default is 80)
QUALITY="${2:-80}"

# Find and convert supported image files
find "$DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.bmp" -o -iname "*.tiff" \) | while read -r IMG; do
    BASENAME=$(basename "$IMG")
    OUTFILE="${IMG%.*}.webp"

    echo "Converting: $BASENAME → $(basename "$OUTFILE")"
    cwebp -q "$QUALITY" "$IMG" -o "$OUTFILE"
done

echo "Conversion complete."
