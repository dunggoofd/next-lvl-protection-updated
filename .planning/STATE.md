# Project State — NextLvl Protection

## Project Reference

**Core value**: Every prestige car owner in Brisbane searching for PPF, ceramic coating, or window tinting should find NextLvl Protection first — and the site should convert that visit into a quote request.

**Current focus**: Phase 1 — FAQ Accuracy

---

## Current Position

| Field | Value |
|-------|-------|
| Active phase | Phase 1: FAQ Accuracy |
| Active plan | None (not yet planned) |
| Status | Not started |
| Last updated | 2026-03-01 |

**Progress**: [ ] Phase 1 — [ ] Phase 2 — [ ] Phase 3

---

## Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| FAQ pages with verified answers | 5/5 | 0/5 |
| Google reviews visible on site | 3+ | 0 |
| Quote form email delivery | Working | Not wired |

---

## Accumulated Context

### Decisions
- FAQ verification must use minimum 2 authoritative sources per topic (manufacturer specs, industry bodies, trade publications)
- Reviews integration must be low/no-cost (no paid review APIs) — Google Places embed or manual curation preferred
- Quote form delivery should use a simple serverless approach compatible with Vercel static deployment (e.g. Formspree, EmailJS, or Vercel serverless function)

### Key Constraints
- React SPA — no SSR; all SEO via meta tags and JSON-LD
- Vercel auto-deploys from GitHub main — test locally before pushing
- FAQ answers must be technically accurate for expert buyers (wrong answers damage credibility)

### Blockers
- None identified yet

### Pending Todos

1 todo — `.planning/todos/pending/`

- **Run discuss-phase before planning Phase 1** (`planning`) — Phase 1 needs CONTEXT.md before plan-phase. Run `/gsd:discuss-phase 1` first, then `/gsd:plan-phase 1`.

---

## Session Continuity

**To resume**: Read `.planning/ROADMAP.md` for phase structure, then run `/gsd:plan-phase 1` to create the Phase 1 execution plan.
