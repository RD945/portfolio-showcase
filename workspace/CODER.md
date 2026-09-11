<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## 2026-09-11
- The app is a Vite/React site with a Playwright functional and cold-load performance suite; run `npm run typecheck`, `npm test`, and `npm run test:performance` before release.
- Primary UI interactions are implemented in `src/sections/Navbar`, `src/sections/ServicesSection`, and `src/sections/MainContent`; below-the-fold reveal motion is reduced-motion aware.
- Runtime images are local under `public/assets`; the four Selected Work cards use supplied Flow, FORMA, Auralis, and Sitecraft previews and link to the current RD945 Vercel deployments.
- The navbar starts full-width and switches to a rounded translucent shell after 24px of scroll; keep its state covered by `tests/site.spec.js`.
- The hero is intentionally text-only with a local system serif display stack; service and value reveal/hover effects live in `src/inline-styles.css` and must retain reduced-motion overrides.
- The contact CTA is intentionally image-free and centered on desktop/mobile; its mobile visibility and no-overflow behavior are covered in `tests/site.spec.js`.
- Browser tab metadata is intentionally brand-only: `title` is `Scribble` and the favicon is `public/assets/site/scribble-mark.svg`.

## 2026-09-11
- Footer tagline text lives in `src/sections/Footer/components/FooterIntro.tsx`; wrap key words in a `<span>` for targeted color emphasis and micro-interactions.

</coder>
