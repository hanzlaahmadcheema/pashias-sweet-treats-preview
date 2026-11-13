# Pashia's Sweet Treats — Preview Website

Preview website for **Pashia's Sweet Treats** (hobby bakery in Avery Ranch, Austin,
TX 78717), built as a client preview: the business reviews the site and tells
us what to fix or add, then decides whether to make it theirs.

- **Stack:** Next.js 15 (App Router, static export) + React 19 + Tailwind CSS 3
- **Deploy:** Vercel (git route, same pattern as the Smiles Dental Care,
  Phoenix Rise, Wendy's Sweet Treats and Mom's Sweet Lab previews)
- **Design:** mobile-first, following the patterns of the top bakery sites
  (photo-led hero, menu cards, one-click order path, story band, DM-to-order
  flow)

## Facts used (verified 2026-11-13)

- Hobby baker in **Avery Ranch, Austin, TX 78717**; Facebook
  facebook.com/102933315060291 — the business's only website presence.
  No owner name, phone, email, street address or prices published — DM only.
- "Loves to try new trends in baking and make creative cakes and sweet
  goodies." 5-star rated (1 review). Active — posts as recent as Aug 2026.
- From her Facebook posts: graduation cakes, 30th-birthday doodle cakes, LEGO
  11th-birthday cakes, whiskey / black-and-gold cakes, floral cakes, 40th
  milestone cakes, flower cakes, ladybug cakes, heart-shaped vintage cakes
  (any color/design, custom quote or printed photo), bento cakes (biggest
  order: 17 bentos, 17 unique flavors).
- CAUTION: a different "CAKE O'clock" exists in Hyderabad, India (+91 phone)
  — never use it.

## Build / QC

- `npm run build` — static export to `out/`
- Playwright QC at `../qc/run-qc.py` (390px + 1440px): single h1, no
  horizontal overflow, DM links to the Facebook page, disclaimer banner,
  reveal animations, order-form validation + success state.

## Images

All photography is from Unsplash (CDN links, verified by downloading and
viewing each photo): rainbow layer cake (hero), pink drip birthday cake,
lavender floral cake with cupcakes, chocolate cherry layer cake, "Happy
Birthday" chocolate plate (story band). Rejected: photo-1530103862676
(balloons, not a cake).
