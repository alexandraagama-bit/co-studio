

## Plan: Make footer text smaller on mobile

Add responsive text sizing to the three footer elements so they shrink on small screens and fit in one line.

### Changes

**`src/pages/Index.tsx`** — Add `max-sm:text-xs` to all three footer text elements (the two `<p>` tags and the `<a>` tag), reducing font size on screens below 640px. Also reduce footer padding on mobile with `max-sm:p-3` to give more horizontal space.

