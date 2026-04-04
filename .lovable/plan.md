

## Plan: Edit uploaded image to match slideshow style and add as hero-06

The existing hero images share a moody, dark, warm-toned architectural photography aesthetic with low-key lighting. The uploaded image is brighter and more natural. It needs color grading to match.

### Changes

1. **Process the image** using Python (Pillow) to color-grade it:
   - Reduce brightness and increase contrast to match the dark, moody tone
   - Apply a warm color shift (slight orange/amber tint)
   - Reduce saturation slightly for that muted, cinematic look
   - Convert to WebP format at high quality
   - Save as `public/images/hero-06.webp`

2. **`src/pages/Index.tsx`** — Add `"/images/hero-06.webp"` to the `images` array

