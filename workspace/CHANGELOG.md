<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
- 2026-09-12: Updated Selected Work links to the README-provided RD945 Vercel deployments for Flow, FORMA, Auralis, and Sitecraft.
  Files: `src/sections/ProjectsSection/index.tsx`, `C:\Users\Reetam\Desktop\projects\ga_soon\website\README.md`
  Pattern: External portfolio links point to the current live preview URLs rather than placeholder project hosts.
- 2026-09-12: Simplified browser metadata to the `Scribble` title and added a local Scribble favicon mark.
  Files: `index.html`, `public/assets/site/scribble-mark.svg`
  Pattern: Keep tab metadata brand-only while retaining descriptive page metadata for search and sharing.
- 2026-09-12: Removed the contact illustration and navbar tagline, tightened the contact card, and added mobile contact coverage against the sub-one-second performance guide.
  Files: `src/sections/ContactCta/index.tsx`, `src/sections/Navbar/components/BrandArea.tsx`, `tests/site.spec.js`, `docs/TESTING.md`
  Pattern: Image-free CTA surfaces reduce transfer cost while preserving centered, touch-friendly mobile content.
- 2026-09-12: Simplified the hero to text-only, added editorial typography and blue underline accents, animated services/values interactions, and fixed footer wordmark contrast.
  Files: `src/sections/Hero`, `src/sections/ServicesSection`, `src/sections/ValuesSection`, `src/sections/Footer/components/FooterLogo.tsx`, `src/inline-styles.css`, `tests`, `docs/TESTING.md`
  Pattern: Hero content stays immediate for LCP; lower sections use staggered reveal and hover motion with reduced-motion overrides.
- 2026-09-12: Replaced the four Selected Work projects with Flow, FORMA, Auralis, and Sitecraft using supplied images, README descriptions, and live preview links.
  Files: `src/sections/ProjectsSection`, `public/assets/site/flow.png`, `public/assets/site/forma.png`, `public/assets/site/auralis.png`, `public/assets/site/sitecraft.png`
  Pattern: Portfolio cards now open the supplied project previews in a new tab and retain local image loading.
- 2026-09-12: Removed the announcement bar and added a scroll-aware floating, translucent navbar with a regression test.
  Files: `src/App.tsx`, `src/sections/Navbar/index.tsx`, `src/sections/Hero/index.tsx`, `tests/site.spec.js`
  Pattern: The navbar is full-width at the top, then becomes a rounded, blurred shell after 24px of scroll.
- 2026-09-12: Rebranded the site as Scribble, rewrote the studio positioning, removed blog/floating CTA content, and replaced old logos with text wordmarks.
  Files: `index.html`, `src/sections`, `public/assets/site`, `tests`, `docs/TESTING.md`, `package.json`
  Pattern: Navigation now centers on Work, About, Services, and Start a project; project cards route to the contact section.
- 2026-09-11: Implemented responsive navigation, service accordions, local anchors, CTA dismissal, local assets, semantic landmarks, motion controls, and Playwright verification.
  Files: `src/sections`, `tests`, `playwright.config.js`, `docs/TESTING.md`, `package.json`
  Pattern: Above-the-fold content stays immediate; below-the-fold reveals are observer-driven and disabled for reduced motion.
- 2026-09-11: Audited the exported Vite/React site for UI bugs, UX gaps, accessibility, assets, and tooling.
  Files: `src/sections/Navbar`, `src/sections/ServicesSection`, `src/sections/MainContent`, `package.json`
  Pattern: The page is largely static markup; mobile navigation, service expansion, and CTA dismissal are not wired to state.
- 2026-09-11: Increased footer intro headline size and highlighted “launch, refresh, and grow” in blue with hover micro-interactions.
  Files: `src/sections/Footer/components/FooterIntro.tsx`
  Pattern: Inline span emphasis + group-hover transitions for subtle UX polish.
<!-- NEXT_ENTRY_HERE -->
</changelog>
