import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Network, ArrowUpRight, Maximize2 } from 'lucide-react';

const APP_URL = 'https://brandonhenrickson.github.io/tech-troubleshooter-framework/';

const h2 = 'font-display font-bold text-2xl text-ink mt-10 mb-3 leading-tight';
const p = 'text-inkSoft leading-[1.8] text-pretty my-4';

const features = [
  '295 nodes across five branches — Windows, macOS, browsers, Microsoft Office, and email.',
  'Live search that highlights matches and auto-expands the path to them.',
  'A slide-in detail panel with steps, commands (with a copy button), warnings, and error codes.',
  'Zoom, pan, and reset so a large tree stays navigable.',
];

const stack = ['D3.js', 'JavaScript', 'Data Visualization', 'GitHub Pages'];

const TroubleshooterPage = () => (
  <>
    <Helmet>
      <title>Tech Troubleshooter Framework — Brandon Henrickson</title>
      <link rel="canonical" href="https://www.greatbrandino.com/troubleshooter" />
      <meta
        name="description"
        content="An interactive D3.js decision tree of 295 Windows, macOS, browser, Office, and email fixes — built by Brandon Henrickson."
      />
    </Helmet>

    <div className="min-h-screen bg-canvas">
      <Navigation />

      <main id="main" tabIndex={-1}>
        {/* Banner */}
        <div className="w-full bg-emerald pt-16">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
            <Network size={20} className="text-white" strokeWidth={2} />
            <h1 className="font-display font-bold text-xl tracking-wide text-white">
              Tech Troubleshooter Framework
            </h1>
          </div>
        </div>

        {/* Write-up */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <p className={p}>
            The Tech Troubleshooter Framework is an interactive map of how to fix
            common computer problems. It turns years of hands-on repair
            experience into a searchable, visual decision tree — click a symptom,
            drill down through categories, and land on the exact command or
            step-by-step fix.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {stack.map((s) => (
              <span
                key={s}
                className="font-mono text-xs bg-emeraldLight text-emeraldText px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>

          <h2 className={h2}>How it&apos;s built</h2>
          <p className={p}>
            It&apos;s a single-page app in vanilla HTML, CSS, and JavaScript — no
            framework, no build step. D3 v7 lays out a 295-node tree from one JSON
            file; the interface adds live search, zoom and pan, collapsible
            branches, and a detail panel with copyable commands. It&apos;s hosted
            free on GitHub Pages and updates with a single{' '}
            <span className="font-mono text-sm">git push</span>.
          </p>

          <h2 className={h2}>What&apos;s inside</h2>
          <ul className="my-4 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex gap-3 text-inkSoft leading-[1.8] text-pretty">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <p className={p}>
            Want the build story? I wrote up how it&apos;s built in{' '}
            <Link
              to="/guides"
              className="text-emerald hover:text-emeraldHover underline underline-offset-2"
            >
              Guides
            </Link>
            .
          </p>

          {/* Live embed */}
          <h2 className={h2}>Try it live</h2>
          <p className={p}>
            The real app, running right here. Click any category to expand it, or
            search to jump straight to a fix.
          </p>

          <div className="rounded-lg border border-border overflow-hidden shadow-sm bg-surface">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-4 py-2.5 bg-canvasAlt border-b border-border">
              <span className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
              </span>
              <span className="flex-1 truncate font-mono text-[11px] text-inkMuted text-center">
                brandonhenrickson.github.io/tech-troubleshooter-framework
              </span>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the app full screen in a new tab"
                className="shrink-0 -m-1.5 p-1.5 text-inkMuted hover:text-emerald transition-colors"
              >
                <Maximize2 size={15} />
              </a>
            </div>

            <iframe
              src="/tsf/index.html"
              title="Tech Troubleshooter Framework — live interactive app"
              loading="lazy"
              className="w-full h-[70vh] min-h-[520px] bg-white"
            />
          </div>

          <p className="md:hidden mt-3 font-mono text-[11px] uppercase tracking-widest text-inkMuted">
            Best explored on a larger screen — tap “Open the full app”.
          </p>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-emerald text-white px-6 py-3 rounded font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-emeraldHover"
          >
            Open the full app
            <ArrowUpRight size={14} />
          </a>
        </div>
      </main>
    </div>
  </>
);

export default TroubleshooterPage;
