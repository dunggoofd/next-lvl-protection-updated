# CLAUDE.md — NextLvl Protection Website

## Project Overview

**NextLvl Protection** is a Brisbane-based premium automotive and window protection services business. This repo is a single-page application (SPA) built with React + TypeScript + Vite, serving as the public marketing website.

**Business details (hardcoded throughout):**
- Phone: `0411 164 886`
- Email: `halo@nextlvlprotection.com.au`
- Address: Unit 16, 18-24 Loam St, Acacia Ridge QLD 4110
- Hours: Mon–Fri 9am–5:30pm · Sat–Sun Closed
- Certifications: SunTek PPF Authorised · Solar Gard VTX PRO Certified · 3M Window Films Authorised · Ceramic Pro Certified

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | ~5.9 | Type safety |
| Vite | 7 | Build tool / dev server |
| React Router DOM | 7 | Client-side routing |
| GSAP | 3 | Animations (hero entrance, parallax, accordion, form transitions) |
| Lucide React | latest | Icons |

No state management library. No CSS-in-JS library. No testing framework currently configured.

---

## Development Commands

```bash
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Type-check (tsc -b) then Vite build → dist/
npm run preview    # Serve the dist/ build locally
npm run lint       # ESLint (TypeScript + React hooks rules)
```

Always run `npm run build` before committing to catch TypeScript errors — the type-check runs as part of the build step.

---

## Repository Structure

```
src/
├── App.tsx               # Router, lazy imports, Layout shell, ScrollToTop
├── main.tsx              # React root mount
├── index.css             # Global design system (CSS custom properties, utility classes)
├── App.css               # (minimal, largely unused — prefer index.css)
├── assets/
│   └── hero-home.jpg     # Local hero image (only local asset; all other images are Unsplash URLs)
├── components/           # Shared UI components (see below)
└── pages/                # One file per route (see route map below)
```

---

## Routing

All routes are registered in `src/App.tsx` using React Router v7. All pages are **lazy-loaded** via `React.lazy()` with a branded `<Suspense>` fallback.

Every route is wrapped in a shared `<Layout>` component:
```
Layout = <Navbar /> + <main><Outlet /></main> + <Footer />
```

`<ScrollToTop>` resets scroll position to top instantly on every route change.

### Route Map

| Path | Component | Category |
|---|---|---|
| `/` | `HomePage` | Core |
| `/ppf-brisbane` | `PPFPage` | Core service |
| `/ceramic-coating-brisbane` | `CeramicCoatingPage` | Core service |
| `/automotive-window-tinting-brisbane` | `AutomotiveTintPage` | Core service |
| `/residential-window-tinting-brisbane` | `ResidentialTintPage` | Core service |
| `/commercial-window-tinting-brisbane` | `CommercialTintPage` | Core service |
| `/get-a-quote` | `GetAQuotePage` | Conversion |
| `/gallery` | `GalleryPage` | Content |
| `/about` | `AboutPage` | Content |
| `/ppf-questions` | `PPFQuestionsPage` | FAQ |
| `/ceramic-coating-questions` | `CeramicQuestionsPage` | FAQ |
| `/automotive-tinting-questions` | `AutoTintQuestionsPage` | FAQ |
| `/residential-tinting-questions` | `ResidentialTintQuestionsPage` | FAQ |
| `/commercial-tinting-questions` | `CommercialTintQuestionsPage` | FAQ |
| `/ppf-new-car-brisbane` | `PPFNewCarPage` | PPF variation |
| `/ppf-dark-paint-brisbane` | `PPFDarkPaintPage` | PPF variation |
| `/ppf-stone-chip-protection-brisbane` | `PPFStoneChipPage` | PPF variation |
| `/ppf-resale-value-brisbane` | `PPFResalePage` | PPF variation |
| `/suntek-ppf-brisbane` | `SunTekPPFPage` | PPF variation |
| `/ppf-cost-brisbane` | `PPFCostPage` | PPF variation |
| `/ppf-warranty-brisbane` | `PPFWarrantyPage` | PPF variation |
| `/partial-ppf-brisbane` | `PPFPartialPage` | PPF variation |
| `/ppf-self-healing-brisbane` | `PPFSelfHealingPage` | PPF variation |
| `/gloss-vs-matte-ppf-brisbane` | `PPFGlossMattePage` | PPF variation |
| `/ppf-near-me-brisbane` | `PPFNearMePage` | PPF variation |
| `/ceramic-coating-new-car-brisbane` | `CeramicNewCarPage` | Ceramic variation |
| `/ceramic-coating-cost-brisbane` | `CeramicCostPage` | Ceramic variation |
| `/ceramic-coating-uv-brisbane` | `CeramicBrisbanePage` | Ceramic variation |
| `/ceramic-coating-paint-correction-brisbane` | `CeramicCorrectionPage` | Ceramic variation |
| `/ceramic-glass-coating-brisbane` | `CeramicGlassPage` | Ceramic variation |
| `/ceramic-coating-wheels-brisbane` | `CeramicWheelsPage` | Ceramic variation |
| `/ceramic-ppf-brisbane` | `CeramicPPFComboPage` | Ceramic variation |
| `/ceramic-coating-longevity-brisbane` | `CeramicLongevityPage` | Ceramic variation |
| `/ceramic-vs-dealer-paint-protection-brisbane` | `CeramicVsDealerPage` | Ceramic variation |
| `/ceramic-coating-matte-paint-brisbane` | `CeramicMattePage` | Ceramic variation |
| `/ceramic-coating-maintenance-brisbane` | `CeramicMaintenancePage` | Ceramic variation |
| `/ceramic-coating-resale-brisbane` | `CeramicResalePage` | Ceramic variation |
| `/ceramic-coating-near-me-brisbane` | `CeramicNearMePage` | Ceramic variation |

**Adding a new route**: register it in `App.tsx` (`lazy` import + `<Route>` entry), create the page file under `src/pages/`.

---

## Components

All shared components live in `src/components/`. Each is a default export.

### `Navbar`
Fixed, pill-shaped floating navbar. Transitions from transparent to frosted-glass on scroll (threshold: 60px). Has a desktop dropdown for Services and a full-screen mobile overlay (GSAP staggered entrance). Mobile breakpoint: 768px — desktop nav hides, hamburger shows.

**Mobile sticky bottom bar** (`mobile-sticky-bar` CSS class): renders a fixed bar at the bottom on mobile with three quick-action links: Call, Quote, Directions.

### `Footer`
Four-column grid: Brand/contact · Services links · Common Questions links · Service areas. Bottom bar with copyright and utility links.

### `CTABlock`
Section component used at the bottom of every service page. Renders a two-column layout: CTA copy + phone number on the left, `<QuoteForm>` card on the right.

Props:
```ts
{ service: string; defaultService?: string }
// service → displayed in heading "Book Your {service} in Brisbane."
// defaultService → pre-selects a value in QuoteForm's service dropdown
```

### `QuoteForm`
Three-step multi-step form with GSAP slide transitions between steps.
- Step 1: Service selection + vehicle or property details (conditional on service)
- Step 2: Package/preference details (conditional on service)
- Step 3: Contact details (name, mobile, email, suburb, date, referral)

Form submission is currently mocked (1.4s timeout, no actual API call). Success state shows a phone number CTA.

### `FAQAccordion`
Accordion with GSAP height animations. Single item open at a time. Accepts `{ q: string; a: string }[]`.

### `PackageVisualizer`
Tab-based package selector with an SVG diagram on the right. Supports three diagram types:
- `'car'` — Shows which panels are highlighted based on the active tier name (string matching on tier name)
- `'house'` — Static, all windows highlighted
- `'building'` — Static grid of glazing panels highlighted

```ts
interface PackageTier {
  name: string;
  subtitle: string;
  inclusions: string[];
  price: string;        // e.g. "From $599" or "POA"
  recommended?: boolean; // shows "Most Popular" badge
}
```

### `BeforeAfterSlider`
Draggable before/after image comparison using pointer events + ref-based DOM updates. The `left` prop is set directly via `useEffect` on the DOM element, bypassing React re-renders for performance.

Props: `{ before: string; after: string; alt?: string; height?: number }`

### `TrustBadges`
Renders pill-shaped certification badges. Filter which badges appear by passing a `services` array:
```ts
services?: ('ppf' | 'tint' | 'window' | 'ceramic')[]
```

### `Reviews`
Star-rating review cards grid. Accepts an optional `aggregate` prop for the overall score line.
```ts
{ reviews: Review[]; aggregate?: { score: number; count: number } }
```

---

## Design System (`src/index.css`)

The entire visual language is defined with CSS custom properties. **Never hardcode colour values** — always use the tokens.

### Colour tokens
```css
--color-bg-primary      /* #F8F9FB — page background */
--color-bg-secondary    /* #FFFFFF — section alternate */
--color-bg-tertiary     /* #EEF0F5 */
--color-surface         /* rgba(255,255,255,0.80) — card/glass backgrounds */
--color-surface-raised  /* rgba(255,255,255,0.95) */
--color-accent          /* #1A1F2E — primary brand colour (dark navy) */
--color-accent-bright   /* #0D1117 */
--color-accent-dim      /* rgba(26,31,46,0.12) */
--color-text-primary    /* #0D1117 */
--color-text-secondary  /* #4A5368 */
--color-text-muted      /* #8A94A8 */
--color-border          /* rgba(0,0,0,0.09) */
--color-border-subtle   /* rgba(0,0,0,0.05) */
--color-border-bright   /* rgba(26,31,46,0.20) */
--glow-blue             /* rgba(59,100,220,0.10) */
```

### Typography tokens
```css
--font-display   /* 'Syne', sans-serif */
--font-body      /* 'DM Sans', sans-serif */

/* Also used inline: 'Bebas Neue', sans-serif — display/hero headings */

--size-hero   /* clamp(72px, 12vw, 160px) */
--size-h1     /* clamp(40px, 6vw, 80px) */
--size-h2     /* clamp(28px, 4vw, 48px) */
--size-h3     /* clamp(18px, 2.5vw, 24px) */
--size-body   /* 16px */
--size-small  /* 14px */
--size-label  /* 12px */
--tracking-display  /* -0.02em */
--tracking-label    /* 0.1em */
```

### Layout tokens
```css
--section-padding-y  /* clamp(80px, 10vw, 140px) */
--section-padding-x  /* clamp(20px, 8vw, 120px) */
```

### Reusable CSS classes
| Class | Purpose |
|---|---|
| `.btn-primary` | Dark filled pill button with slide hover animation |
| `.btn-ghost` | Frosted glass outline pill button |
| `.card` | Glassmorphism card with hover lift + glow |
| `.section` | Standard section with padding tokens |
| `.container` | Max-width 1280px centered wrapper |
| `.font-display` | Apply Bebas Neue |
| `.font-syne` | Apply Syne |
| `.noise-overlay` | Adds SVG noise texture via `::after` pseudo-element |
| `.radial-glow` | Subtle blue radial gradient background |
| `.text-accent` | `color: var(--color-accent)` |
| `.text-muted` | `color: var(--color-text-muted)` |
| `.section-number` | Decorative oversized numbering (hidden on mobile) |
| `.mobile-sticky-bar` | Fixed bottom bar, shown only on mobile |
| `.accordion-item/trigger/body/body-inner` | FAQ accordion structure |
| `.ba-slider/after/handle/chip` | Before/after slider structure |

### Styling conventions
- **Inline styles (`style={{...}}`)** are used for layout, spacing, and one-off values inside page components.
- **CSS classes** are used for repeated patterns (buttons, cards, sections) defined in `index.css`.
- **No Tailwind, no CSS modules, no styled-components.**
- Responsive overrides for grid layouts use **CSS class-based rules**, not `[style*="..."]` attribute selectors. Attribute selectors targeting React inline styles are unreliable in practice — React's client-side style serialisation does not guarantee a format that attribute selectors can consistently match.
- **Pattern for any new two-column or multi-column grid:**
  1. Add a semantic `className` to the grid element (e.g. `className="my-section-grid"`).
  2. Add a `@media (max-width: 900px)` rule in `index.css` that sets `grid-template-columns: 1fr !important` on that class.
  3. Keep the inline `style` for desktop layout as-is — the `!important` in the class rule overrides it on mobile.
- **Existing responsive classes** (already in `index.css`):
  | Class | Collapses at |
  |---|---|
  | `.differentiators-grid` | 900px → `1fr` |
  | `.cta-grid` | 900px → `1fr`; card padding reduces at 640px |
  | `.form-grid-2` | 640px → `1fr` |
  | `.form-grid-3` | 640px → `1fr` |
- Mobile breakpoints: primary at `900px` (grid collapse), `768px` (nav switch), `640px` (misc flex adjustments).

---

## Page Conventions

Every service page follows this consistent section order:

1. **Hero** — full-viewport, parallax background image (Unsplash URL), `<TrustBadges>`, H1, subtitle, CTA buttons
2. **Packages** — `<PackageVisualizer>` with `tiers` data
3. **Benefits** — 2-column grid of `<div className="card">` items with Lucide icons
4. **Process** — 3-step numbered cards
5. **Inclusions** — checklist section
6. **Warranty / Aftercare** — two-column card layout
7. **Before / After** — `<BeforeAfterSlider>` grid
8. **Reviews** — `<Reviews>` with page-specific testimonials
9. **FAQ** — `<FAQAccordion>` + link to the dedicated questions page
10. **Philosophy** — full-width display type statement
11. **CTA** — `<CTABlock>` with the form
12. **Internal links** — related service `<Link>` buttons

Variation/SEO pages (e.g. `PPFCostPage`, `CeramicMaintenancePage`) are lighter: they omit `PackageVisualizer` and `PackageVisualizer`-related sections but keep the hero, FAQ, reviews, and `CTABlock` pattern.

### Hero animation pattern (used on every page)
```tsx
const heroRef = useRef<HTMLElement>(null);
const heroBgRef = useRef<HTMLDivElement>(null);
const heroContentRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const els = heroContentRef.current?.querySelectorAll('.hero-anim');
    if (els) gsap.from(els, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
    if (heroBgRef.current && heroRef.current) {
      gsap.to(heroBgRef.current, { scrollTrigger: { trigger: heroRef.current, scrub: true }, y: '20%', ease: 'none' });
    }
  });
  return () => ctx.revert(); // Always clean up GSAP context
}, []);
```

All animated elements inside the hero get `className="hero-anim"` — this is how GSAP selects them.

### JSON-LD structured data
Every service page renders a `<script type="application/ld+json">` block using `dangerouslySetInnerHTML`. Schema type is `Service` with `LocalBusiness` provider. Always include this when creating new service pages.

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "...",
  "provider": {
    "@type": "LocalBusiness",
    "name": "NextLvl Protection",
    "telephone": "0411164886",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 16, 18-24 Loam St",
      "addressLocality": "Acacia Ridge",
      "addressRegion": "QLD",
      "postalCode": "4110"
    }
  },
  "areaServed": "Brisbane",
  "description": "...",
})}} />
```

---

## GSAP Usage

- `gsap` and `ScrollTrigger` are imported from the `gsap` package.
- `gsap.registerPlugin(ScrollTrigger)` is called at the module level in every page that uses scroll-based animations.
- Always use `gsap.context()` with a cleanup `return () => ctx.revert()` inside `useEffect` to prevent animation leaks on unmount.
- `FAQAccordion` uses imperative GSAP height tweens on `div` refs — not React state for height — to avoid layout thrash.

---

## Adding a New Page

1. Create `src/pages/YourNewPage.tsx` — follow the page conventions above.
2. Add a `lazy` import in `src/App.tsx`.
3. Add a `<Route>` inside the `<Route element={<Layout />}>` block in `src/App.tsx`.
4. If it's an SEO/variation page, add it to the relevant section in the footer or as an internal link on its parent service page.

---

## Business Content Rules

- All copy is Brisbane/Queensland specific — reference the location, UV conditions, and local context.
- Prices must match what's in the service page `tiers` arrays:
  - PPF: Impact Shield from $599 · Front End from $1,490 · Track from $2,290 · Full Wrap POA
  - Ceramic: Essential from $699 · Protection from $1,299 · Elite from $1,999 · Signature POA
  - Automotive Tint: from $290
  - Residential Tint: from $390
  - Commercial Tint: POA
- Response time commitment: "within 2 business hours"
- The business does not offer cheap/generic options — copy always emphasises SunTek, quality, and precision.

---

## ESLint

Config is `eslint.config.js` (flat config format). Rules applied to all `.ts` and `.tsx` files:
- `@eslint/js` recommended
- `typescript-eslint` recommended
- `eslint-plugin-react-hooks` recommended
- `eslint-plugin-react-refresh` (Vite mode)

Run `npm run lint` to check. The build does not fail on lint errors — run lint separately.

---

## Git Workflow

- Active development branch: `claude/claude-md-mm6fhpcef5sb3l3f-WZvHg`
- Main branch: `master`
- Commit messages follow the pattern: `feat:`, `fix:`, `refactor:`, `docs:`
- Push with: `git push -u origin <branch-name>`
