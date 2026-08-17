import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Check, ArrowUpRight } from 'lucide-react';

const REPO_URL = 'https://github.com/BrandonHenrickson/personal-website';

// Each chip links to live, third-party proof of the claim.
const evidence = [
  {
    label: 'Lighthouse A11y 100',
    href: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.greatbrandino.com',
  },
  {
    label: 'HTTP security headers',
    href: 'https://securityheaders.com/?q=https%3A%2F%2Fwww.greatbrandino.com&followRedirects=on',
  },
  {
    label: 'Structured data',
    href: 'https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.greatbrandino.com',
  },
  { label: 'Open source', href: REPO_URL },
];

const groups = [
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Semantic HTML', 'Responsive CSS'],
  },
  {
    title: 'Engineering practices',
    skills: [
      'Accessibility (WCAG)',
      'Performance / Core Web Vitals',
      'SEO & structured data',
      'Security headers / CSP',
      'Code splitting',
      'Progressive enhancement',
    ],
  },
  {
    title: 'Tooling & delivery',
    skills: ['Git', 'CI/CD (Vercel)', 'REST / fetch APIs', 'D3.js data viz', 'Cloudflare', 'PWA manifest'],
  },
];

const EngineeringSection = () => (
  <section id="engineering" className="bg-canvas">
    {/* Banner */}
    <div className="w-full bg-emerald">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
        <Code2 size={20} className="text-white" strokeWidth={2} />
        <h2 className="font-display font-bold text-xl tracking-wide text-white">
          Engineering
        </h2>
      </div>
    </div>

    {/* Content */}
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty mb-4 max-w-2xl">
        This site is its own résumé — and it&apos;s open source. Every practice
        below is one it actually uses; the chips below link to live proof, and
        the whole thing is yours to read.
      </p>

      <a
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-mono text-sm text-emerald hover:text-emeraldHover underline underline-offset-4 mb-8"
      >
        Read the source on GitHub
        <ArrowUpRight size={15} />
      </a>

      {/* Evidence chips — each links to independent verification */}
      <ul className="flex flex-wrap gap-2 mb-12">
        {evidence.map((e) => (
          <li key={e.label}>
            <a
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs bg-emeraldLight text-emeraldText px-3 py-1.5 rounded-full transition-colors hover:bg-emerald hover:text-white"
            >
              <Check size={12} strokeWidth={3} aria-hidden="true" />
              {e.label}
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      <div className="space-y-10">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.06 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-inkMuted mb-3">
              {g.title}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {g.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 bg-surface border border-border rounded px-4 py-2 transition-colors duration-300 hover:border-emerald group"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald shrink-0" />
                  <span className="font-mono text-sm text-ink group-hover:text-emerald transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EngineeringSection;
