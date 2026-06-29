# personal-website — Brandon Henrickson portfolio

Recruiter-facing single-page portfolio. React + Vite + Tailwind, deployed on Netlify.

- **Live:** https://www.greatbrandino.com (Netlify, auto-deploys from GitHub `main`)
- **Repo:** github.com/BrandonHenrickson/personal-website (private)
- **Deploy:** `git push origin main` → Netlify builds (`npm run build`, publish dir `dist`) and ships in ~1–2 min. No manual upload.

> Maintenance: when you change routes, sections, the design system, the build, or deploy, update this file **and** the workspace-level `../CLAUDE.md`, and date-stamp the change.

## Commands
- `npm install` — first-time deps
- `npm run dev` — local dev at http://localhost:3000
- `npm run build` — production build to `dist/`
- `npm run lint` — eslint (quiet)

⚠️ **Build gotcha:** in some shells `npm run build` (script: `node tools/generate-llms.js || true && vite build`) reports success without actually running Vite. To get a real build + real error output, run **`npx vite build`** directly. Netlify's cloud build runs fine regardless.

## Stack
- React 18 · Vite 4 · Tailwind 3 · Framer Motion
- React Router 7 — routes: `/` (HomePage), `/guides` (GuidesPage), `*` → `NotFoundPage` (custom 404)
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
- **Contact form** → **Netlify Forms**: the React form POSTs to `/` with `form-name=contact` + a honeypot; `public/__forms.html` is the hidden static form Netlify detects at build. Submissions appear in Netlify → Forms; **email delivery requires a Form submission notification configured in the Netlify dashboard** (Project configuration → Notifications).
- **SPA routing on Netlify:** `public/_redirects` (`/* /index.html 200`). The legacy `public/.htaccess` only applied to the old Apache host.
- **Accessibility/perf:** `.skip-link` (in `Navigation`) + `<main id="main" tabIndex={-1}>` landmark on every page; global `:focus-visible` outline in `index.css`; below-the-fold media is `loading="lazy"`.

## Gotchas
- `dist/ruvector.db` is a stray local artifact (not produced by the build, not in git, not deployed) — ignore/delete locally.
- Git shows LF→CRLF warnings on Windows; harmless.

## Known unfinished
- Guides articles (3) are **drafts** pending Brandon's review of facts/voice; code snippets are illustrative.
- Open Graph share image is the headshot (no custom 1200×630 card yet).
- ThemeContext is dead code; several legacy components in `src/components/` are unused.
