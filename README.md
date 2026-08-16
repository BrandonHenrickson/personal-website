# greatbrandino.com

Personal portfolio for **Brandon Henrickson** — software developer & project manager in Duluth, MN.

**Live:** https://www.greatbrandino.com

A React single-page site (with a few routed pages) built to double as a working demonstration of front-end engineering — not a list of skills, but a site that is itself accessible, fast, secure, and shipped on a modern toolchain.

## Stack

- **React 18** · **Vite** · **Tailwind CSS**
- **Framer Motion** for restrained animation
- **React Router** with route-level code splitting (`React.lazy` / `Suspense`)
- **react-helmet** for per-page metadata
- **Vercel** (CI/CD on every push) · **Cloudflare Web Analytics** · **Web3Forms** contact

## Engineering highlights

- **Accessibility** — semantic HTML, skip link, `<main>` landmarks, `aria-current`, visible focus states, `prefers-reduced-motion`. Lighthouse Accessibility: 100.
- **Performance** — route code-splitting, lazy-loaded media, resource hints.
- **SEO** — JSON-LD (`Person` / `WebSite`), `sitemap.xml`, `robots.txt`, per-route canonical URLs.
- **Security** — Content-Security-Policy plus HSTS, `X-Content-Type-Options`, `X-Frame-Options`, Referrer-Policy, and Permissions-Policy (see `vercel.json`).
- **PWA** — web app manifest; installable.
- **Resilience** — `<noscript>` fallback and graceful degradation.

Live Lighthouse (mobile): Accessibility / Best Practices / SEO all 100.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build to dist/
```

## How this was built

This site was built with **Claude** (Anthropic) as an AI pair-programmer — architecture, implementation, and iterative review. I directed the work, made the product and design decisions, and reviewed every change. Using these tools well is part of the craft now, and I'd rather be upfront about it than pretend otherwise.

---

© 2026 Brandon Henrickson.
