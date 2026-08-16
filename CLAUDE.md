# personal-website — Brandon Henrickson portfolio

Recruiter-facing single-page portfolio. React + Vite + Tailwind, deployed on Vercel.

- **Live:** https://www.greatbrandino.com (Vercel, auto-deploys from GitHub `main`)
- **Repo:** github.com/BrandonHenrickson/personal-website (private)
- **Deploy:** `git push origin main` → Vercel builds (`npm run build`, output dir `dist`) and ships in ~1–2 min. No manual upload. Domain DNS stays at Hostinger (apex ALIAS + www CNAME → Vercel). Was on Netlify until 2026-06-30 (free build credits ran out).

> Maintenance: when you change routes, sections, the design system, the build, or deploy, update this file **and** the workspace-level `../CLAUDE.md`, and date-stamp the change.

## Commands
- `npm install` — first-time deps
- `npm run dev` — local dev at http://localhost:3000
- `npm run build` — production build to `dist/`
- `npm run lint` — eslint (quiet)

⚠️ **Build gotcha:** in some shells `npm run build` (script: `node tools/generate-llms.js || true && vite build`) reports success without actually running Vite. To get a real build + real error output, run **`npx vite build`** directly. Vercel's cloud build runs fine regardless.

## Stack
- React 18 · Vite 4 · Tailwind 3 · Framer Motion
- React Router 7 — routes: `/` (HomePage), `/guides` (GuidesPage), `/privacy` (PrivacyPage), `/troubleshooter` (TroubleshooterPage), `*` → `NotFoundPage` (custom 404). Every route except `/` is lazy-loaded (`React.lazy`/`Suspense` in `App.jsx` = code splitting)
- Radix UI / shadcn-style primitives in `src/components/ui/`
- react-helmet for per-page title/meta; lucide-react for icons
- Supabase JS installed but unused; ThemeContext exists but is inert (no light/dark toggle)

## Design system (do NOT hardcode hex — use the Tailwind tokens in `tailwind.config.js`)
- **Fonts:** Fraunces (`font-display`), IBM Plex Sans (`font-sans`), IBM Plex Mono (`font-mono`)
- **Emerald tokens:** `emerald #065F46`, `emeraldHover`, `emeraldLight`, `emeraldText`; `canvas`/`canvasAlt`, `surface`/`surfaceHover`, `border`/`borderHover`, `ink`/`inkSoft`/`inkMuted`, `codeBlock`/`codeText`
- **Section pattern:** each section = full-width emerald banner (icon + title) over a `max-w-4xl` white-card content area, alternating `bg-canvas` / `bg-canvasAlt`.

## Where content lives (edit data arrays, not markup)
- `src/components/sections/*` — each section keeps its content in a top-of-file array (e.g. `experiences`, `projects`, `categories`, `credentials`, `metrics`, `values`).
- `src/pages/GuidesPage.jsx` — the `guides` array holds article metadata + `content` blocks (`p` / `h2` / `ul` / `code`); add a guide by copying an object.
- `src/components/Navigation.jsx` — `navLinks` array (anchors + the `/guides` route link).
- `index.html` — page title, description, favicon, Open Graph / Twitter meta.

## Notable pieces
- `src/components/FootprintsBackground.jsx` — canvas: a top-down figure that wanders the hero band leaving fading footprints. `pointer-events-none`, honors `prefers-reduced-motion`. Mounted inside the hero's `relative overflow-hidden` emerald band; content sits at `z-10`.
- **Contact form** → **Web3Forms**: the React form POSTs JSON to `https://api.web3forms.com/submit` with the access key in `ContactSection.jsx` (`WEB3FORMS_ACCESS_KEY`) + a `botcheck` honeypot; Web3Forms emails submissions to b.henrickson17@gmail.com. (Replaced Netlify Forms during the Vercel migration.)
- **SPA routing + security headers on Vercel:** `vercel.json` `rewrites` all paths → `/index.html`, and its `headers` set the CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`, Referrer/Permissions-Policy. The CSP allowlists Cloudflare, jsdelivr (D3), Google Fonts, Unsplash/Hostinger images, YouTube frames, and Web3Forms — **add any new external origin there or it gets blocked**; `frame-ancestors 'self'` is what lets `/troubleshooter` embed `/tsf`. (Old `public/_redirects`/`.htaccess` remain, ignored.)
- **Engineering baseline (all live-verified):** a11y — `.skip-link` + `<main id="main">` landmarks, `:focus-visible`, `aria-current` active nav (Lighthouse A11y 100); perf — route code-splitting + `loading="lazy"` media + `preconnect`; SEO — JSON-LD (`Person`+`WebSite`) in `index.html`, `public/sitemap.xml` + `public/robots.txt`, and **per-route self-canonicals set via react-helmet on each page** (NOT a static one in `index.html` — that would wrongly canonicalize every route to `/`); PWA — `public/manifest.webmanifest`; resilience — `<noscript>` in `index.html`. Live Lighthouse (mobile) = A11y / Best-Practices / SEO / Agentic-Browsing all 100.
- **`tools/generate-llms.js`** emits a spec-compliant `/llms.txt` (H1 + `>` summary + page list) during `npm run build`. ⚠️ Its `isMainModule` guard only fires on POSIX (Vercel); run directly on Windows it no-ops.
- **`vite.config.js` is intentionally minimal** — the Hostinger Horizons editor plugins + inline error-reporting scripts were removed (they injected 5 inline `<script>`s and monkey-patched `console`/`fetch`, which blocked the CSP).

## Tech Troubleshooter embed
- `/troubleshooter` embeds the D3 app **same-origin** from `public/tsf/` (index.html, style.css, main.js, arf.json). GitHub Pages sends headers that block cross-origin framing (`ERR_BLOCKED_BY_RESPONSE`), so the app is mirrored in rather than iframed from github.io. `public/tsf/index.html` is `noindex`.
- It's a **snapshot** — when the `tech-troubleshooter-framework` repo changes, re-copy those 4 files into `public/tsf/`. The "Open the full app" button still points at the canonical github.io URL.

## Gotchas
- `dist/ruvector.db` is a stray local artifact (not produced by the build, not in git, not deployed) — ignore/delete locally.
- Git shows LF→CRLF warnings on Windows; harmless.

## Known unfinished
- Guides articles (3) are **drafts** pending Brandon's review of facts/voice; code snippets are illustrative.
- Open Graph share image is the headshot (no custom 1200×630 card yet).
- ThemeContext is dead code; several legacy components in `src/components/` are unused.
