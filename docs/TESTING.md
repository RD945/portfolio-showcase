# Scribble Testing Guide

## Commands

```bash
npm install
npm run typecheck
npm run build
npm test
npm run test:performance
```

If Playwright Chromium is not installed locally:

```bash
npx playwright install chromium
```

## Functional Coverage

The functional suite lives in `tests/site.spec.js` and starts an isolated Vite server on port `5175`.

- Responsive widths: 320, 360, 390, 768, 1024, 1440, and 1920 pixels.
- No horizontal overflow and a visible primary heading at every width.
- Mobile menu opening, `aria-expanded`, local work navigation, and menu close behavior.
- Service accordion expansion and accessible region state.
- The floating contact prompt is intentionally absent; the page uses an inline project CTA.
- The mobile contact card is text-only, visible, usable, and free of horizontal overflow.
- Skip link keyboard behavior and `#main` focus destination.
- Image/video decoding, optimized portfolio media transfer, failed requests, HTTP error responses, page errors, and zero external runtime resources.
- Reduced-motion behavior, touch target sizing, desktop/mobile screenshots, and phone landscape overflow.

Screenshots are written to `test-results/desktop.png` and `test-results/mobile.png`.

## Performance Coverage

The performance suite lives in `tests/performance.spec.js`. It builds the production site and starts a fresh Vite preview server on port `4173`.

Each profile runs three cold-cache iterations:

- Desktop fast: 1440 x 1000, 20 ms latency, 20 Mbps, 1x CPU.
- Mobile fast: 390 x 844, 40 ms latency, 10 Mbps, 4x CPU.
- Mobile slow 4G: 390 x 844, 150 ms latency, 1.6 Mbps, 4x CPU.

Every iteration must satisfy:

- CLS below 0.1.
- LCP below 1000 ms.
- Load event below 1000 ms.
- Zero external runtime resources.
- Zero failed requests and HTTP error responses.

## Optimization Rules

- Fonts and images are served from `public/assets` with no third-party runtime requests.
- The hero is text-first; portfolio WebM media is viewport-loaded, dimensioned, and selected by device width.
- The contact CTA is text-only, so it does not ship an unused illustration or reserve an empty media column.
- Inter is limited to a small local Latin file with `font-display: swap`.
- Below-the-fold reveal motion uses `IntersectionObserver`; hero LCP content is not delayed by reveal animation.
- Reduced motion disables scrolling, reveal, accordion, and image transitions.
- Responsive layout is checked at desktop, phone, and landscape phone sizes.
