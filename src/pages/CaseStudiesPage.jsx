import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Layers, ArrowLeft, ArrowRight } from 'lucide-react';

/*
 * Case studies live in this array. Each `content` item is a block:
 *   { type: 'p',   text }                 paragraph
 *   { type: 'h2',  text }                 section heading
 *   { type: 'ul',  items: [...] }         bullet list
 *   { type: 'metrics', items: [{ value, label }] }   results callout row
 */
const caseStudies = [
  {
    slug: 'receipt-automation',
    title: 'Automating a Business’s Bookkeeping',
    meta: 'Freelance IT Automation Consultant · Python / VBScript · 2024–2025',
    tags: ['Python', 'Automation', 'Excel / COM'],
    excerpt:
      'A local business was hand-typing every receipt into a spreadsheet. I replaced that with a tool that reads the PDF and files the ledger itself.',
    content: [
      { type: 'h2', text: 'The problem' },
      {
        type: 'p',
        text: 'A local business tracked every purchase by manually typing receipts into an Excel ledger. It was slow and error-prone, and it got worse as the business grew — more sales meant more late nights of data entry.',
      },
      { type: 'h2', text: 'Constraints' },
      {
        type: 'p',
        text: 'The owner trusted Excel and wasn’t going to adopt new software. So the rule was simple: don’t replace the spreadsheet, feed it. Whatever I built had to disappear into the workflow they already had.',
      },
      { type: 'h2', text: 'My approach' },
      {
        type: 'ul',
        items: [
          'Parse each receipt PDF in Python to pull the fields that matter — date, vendor, total.',
          'Drive Excel directly through its COM automation interface so every existing formula and format keeps working — no exported CSVs, no reformatting.',
          'Trigger it from a watched folder: drop a receipt PDF in, and the ledger updates on its own. Nothing new to learn.',
        ],
      },
      { type: 'h2', text: 'The result' },
      {
        type: 'metrics',
        items: [
          { value: '0', label: 'manual receipt entries' },
          { value: '↑', label: 'reporting accuracy' },
          { value: '0', label: 'change to the owner’s habits' },
        ],
      },
      {
        type: 'p',
        text: 'The tool eliminated manual receipt entry and improved financial-reporting accuracy — a script never mistypes a number — without asking anyone to change how they worked.',
      },
      { type: 'h2', text: 'What it shows' },
      {
        type: 'p',
        text: 'The hard part of automation is rarely the code; it’s fitting into a workflow people already trust. I measured success by how little anyone noticed it running.',
      },
    ],
  },
  {
    slug: 'cybersecurity-program',
    title: 'A Vulnerability-Management Program from Scratch',
    meta: 'Project Coordinator · Turnberry / Orbia · 2021–2022',
    tags: ['Power BI', 'Cybersecurity', 'Leadership'],
    excerpt:
      'Vulnerability data was scattered and invisible to leadership. I built the dashboards and the weekly cadence that turned it into a managed program.',
    content: [
      { type: 'h2', text: 'The problem' },
      {
        type: 'p',
        text: 'Security posture across the org’s key systems was hard to see. Vulnerability data existed but wasn’t surfaced in a way leadership could act on, and there was no regular process driving remediation.',
      },
      { type: 'h2', text: 'My approach' },
      {
        type: 'ul',
        items: [
          'Designed Power BI dashboards that surfaced vulnerability metrics and project milestones across 10 key systems, so risk was visible at a glance.',
          'Instituted weekly vulnerability-management meetings with 20+ employees — reviewing progress, walking through simulated real-world attacks, and assigning remediation.',
          'Drove concrete hardening: two-step verification and essential hardware upgrades on the key systems.',
          'Coordinated a distributed, international team across 15+ cross-time-zone meetings a month to keep remediation moving.',
        ],
      },
      { type: 'h2', text: 'The result' },
      {
        type: 'metrics',
        items: [
          { value: '10', label: 'systems with measurably lower vulnerability scores' },
          { value: '20+', label: 'employees engaged in the weekly program' },
          { value: '15+', label: 'team members using the reporting solution' },
        ],
      },
      {
        type: 'p',
        text: 'Vulnerability scores dropped measurably across all 10 systems, and remediation became a routine, cross-departmental habit instead of an afterthought.',
      },
      { type: 'h2', text: 'What it shows' },
      {
        type: 'p',
        text: 'The dashboards mattered, but the program mattered more. Turning scattered data into a weekly cadence people actually followed is what moved the numbers.',
      },
    ],
  },
];

const Block = ({ block }) => {
  if (block.type === 'h2') {
    return (
      <h2 className="font-display font-bold text-2xl text-ink mt-10 mb-3 leading-tight">
        {block.text}
      </h2>
    );
  }
  if (block.type === 'ul') {
    return (
      <ul className="my-4 space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-inkSoft leading-[1.8] text-pretty">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === 'metrics') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        {block.items.map((m) => (
          <div key={m.label} className="bg-surface border border-border rounded-lg p-5">
            <p className="font-display font-bold text-3xl text-emerald">{m.value}</p>
            <p className="font-mono text-[11px] uppercase tracking-wide text-inkMuted mt-2 leading-snug">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return <p className="my-4 text-inkSoft leading-[1.8] text-pretty">{block.text}</p>;
};

const CaseStudiesPage = () => {
  const [activeSlug, setActiveSlug] = useState(() => {
    const h = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
    return caseStudies.some((c) => c.slug === h) ? h : null;
  });
  const active = caseStudies.find((c) => c.slug === activeSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSlug]);

  return (
    <>
      <Helmet>
        <title>
          {active ? `${active.title} — Brandon Henrickson` : 'Case Studies — Brandon Henrickson'}
        </title>
        <link rel="canonical" href="https://www.greatbrandino.com/case-studies" />
        <meta
          name="description"
          content="Project case studies by Brandon Henrickson — problem, approach, and measurable results from real work in automation and cybersecurity."
        />
      </Helmet>

      <div className="min-h-screen bg-canvas">
        <Navigation />

        <main id="main" tabIndex={-1}>
          {/* Banner */}
          <div className="w-full bg-emerald pt-16">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
              <Layers size={20} className="text-white" strokeWidth={2} />
              <h1 className="font-display font-bold text-xl tracking-wide text-white">
                Case Studies
              </h1>
            </div>
          </div>

          {active ? (
            /* ---------- Detail view ---------- */
            <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
              <button
                onClick={() => setActiveSlug(null)}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-inkMuted hover:text-emerald transition-colors mb-8"
              >
                <ArrowLeft size={14} />
                All case studies
              </button>

              <div className="flex flex-wrap gap-2 mb-4">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs bg-emeraldLight text-emeraldText px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h2 className="font-display font-bold text-3xl md:text-4xl text-ink leading-tight">
                {active.title}
              </h2>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-inkMuted">
                {active.meta}
              </p>

              <div className="mt-8">
                {active.content.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>

              <button
                onClick={() => setActiveSlug(null)}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald hover:text-emeraldHover transition-colors mt-12"
              >
                <ArrowLeft size={14} />
                Back to all case studies
              </button>
            </article>
          ) : (
            /* ---------- List view ---------- */
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
              <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty mb-10 max-w-2xl">
                A closer look at two projects — what the problem was, how I
                approached it, and what actually changed as a result.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {caseStudies.map((c, i) => (
                  <motion.button
                    key={c.slug}
                    onClick={() => setActiveSlug(c.slug)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="group flex flex-col text-left bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-emerald hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs bg-emeraldLight text-emeraldText px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display font-bold text-lg text-ink leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-inkSoft leading-[1.7] text-pretty mt-3 flex-1">
                      {c.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-emerald group-hover:gap-2 transition-all">
                      Read the case study <ArrowRight size={14} />
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default CaseStudiesPage;
