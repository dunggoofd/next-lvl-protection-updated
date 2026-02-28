# NextLvl Protection — Website

## What This Is

NextLvl Protection is a premium automotive protection studio based in Acacia Ridge, Brisbane, offering paint protection film (PPF), ceramic coating, and window tinting. This site is the business's primary lead-generation and SEO asset — built in React/Vite/TypeScript with 40+ pages targeting Brisbane-specific search queries, deployed on Vercel via GitHub.

## Core Value

Every prestige car owner in Brisbane searching for PPF, ceramic coating, or window tinting should find NextLvl Protection first — and the site should convert that visit into a quote request.

## Requirements

### Validated

- ✓ 40-page SPA with React Router v7, lazy-loaded pages — Phase 0
- ✓ PageMeta (title, description, canonical) on all pages — Phase 0
- ✓ JSON-LD structured data on all pages (LocalBusiness, Service, FAQPage, etc.) — Phase 0
- ✓ sitemap.xml and robots.txt — Phase 0
- ✓ Accessible Navbar with keyboard navigation and ARIA — Phase 0
- ✓ QuoteForm with client-side validation and aria-invalid — Phase 0
- ✓ CSS-based hover states (no inline JS style mutations) — Phase 0
- ✓ Centralised GSAP plugin registration — Phase 0
- ✓ NotFoundPage (404) and PrivacyPolicyPage — Phase 0
- ✓ Human-readable /sitemap page in footer — Phase 0

### Active

- [ ] FAQ answers verified for accuracy across all 5 questions pages (PPF, Ceramic, AutoTint, ResidentialTint, CommercialTint) — cross-checked against authoritative industry sources
- [ ] Google reviews embedded on site with aggregate rating schema
- [ ] "Leave a review" CTA for post-job customers
- [ ] Quote form wired to backend (email delivery of enquiries)
- [ ] Real job photos replacing Unsplash placeholders in Gallery

### Out of Scope

- Blog / editorial content — not needed for v1 SEO strategy; long-tail pages cover it
- User accounts / booking system — quote form is sufficient for current business volume
- eCommerce / online payments — jobs require in-person assessment
- Dark mode — brand is defined, no toggle needed

## Context

- **Stack:** React 19, Vite, TypeScript, React Router v7, GSAP + ScrollTrigger, deployed Vercel
- **Repo:** https://github.com/dunggoofd/next-lvl-protection-updated (branch: main → auto-deploys)
- **Business:** SunTek Authorised PPF, Solar Gard VTX PRO Certified, 3M Authorised Window Film installer. Unit 16, 18-24 Loam St, Acacia Ridge QLD 4110. Mon–Fri 8am–5pm.
- **Target customer:** Prestige car owners (BMW, Porsche, Tesla, Range Rover) who research thoroughly and prioritise quality over price
- **SEO target:** #1 Brisbane rankings for "PPF Brisbane", "ceramic coating Brisbane", "window tinting Brisbane" and ~35 long-tail variations
- **Current state:** All technical SEO foundations complete. Content accuracy not yet verified. No live enquiry delivery from form. Gallery uses placeholder images.

## Constraints

- **Tech stack:** React SPA (no SSR) — all SEO relies on correct meta tags + structured data; no server-side rendering available
- **Deployment:** Vercel via GitHub push to main — no build config changes without testing locally first
- **Content:** FAQ answers must be technically accurate for PPF/ceramic/tinting industry — wrong answers damage credibility with expert buyers
- **Budget:** Solo operator — prefer low/no-cost integrations (no paid review APIs)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| SPA over SSR/Next.js | Simpler deployment, existing investment in Vite setup | — Pending (monitor Core Web Vitals) |
| PageMeta via useEffect (not react-helmet) | No extra dependency, sufficient for SPA | ✓ Good |
| GSAP centralised in App.tsx | Eliminated duplicate registerPlugin across 31 pages | ✓ Good |
| CSS class-based hover (not inline JS) | Cleaner, more maintainable, no event listener overhead | ✓ Good |
| Sitemap covers all 40 routes | All pages indexable from day one | — Pending (monitor GSC indexing) |

---
*Last updated: 2026-03-01 after project initialization*
