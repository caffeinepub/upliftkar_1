# Specification

## Summary
**Goal:** Fix broken logo rendering by using the uploaded logo image consistently across the frontend.

**Planned changes:**
- Add `IMG_20260213_043356_921-2.webp` to the frontend’s public/static assets so it is accessible from a stable URL.
- Update the centralized branding config (`frontend/src/lib/brand.ts`) so `BRAND.logo.path` points to `IMG_20260213_043356_921-2.webp` and uses appropriate English alt text.
- Audit the frontend for any remaining logo references (including `/assets/upliftkar-logo.webp` and other old paths) and replace them so all logo placements use `BRAND.logo.path`.

**User-visible outcome:** All logo locations (including header/navigation and footer) display the uploaded UPLIFTKAR logo correctly with no broken image icons.
