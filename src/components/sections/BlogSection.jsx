import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    n: '01',
    title: 'greatbrandino.com',
    tag: 'Portfolio · Web Design',
    year: '2026',
    body:
      'Built a professional portfolio site (this one) on React, Vite, and Tailwind to document custom software, automation tools, and a drone videography reel. Hosted on Hostinger. Editorial type system and resume-aligned content.',
    stack: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    href: 'https://www.greatbrandino.com',
    external: true,
  },
  {
    n: '02',
    title: 'Receipt-to-Ledger Automation',
    tag: 'Python · VBScript · COM',
    year: '2024 — 2025',
    body:
      'Designed and shipped a custom Python/VBScript tool for a local business that parses PDF receipts and populates Excel ledgers via API/COM automation. Eliminated manual data entry, increased financial-reporting accuracy, and slotted into the client\'s existing workflow.',
    stack: ['Python', 'VBScript', 'Excel COM', 'PDF parsing'],
    href: '#contact',
    external: false,
  },
  {
    n: '03',
    title: 'Cybersecurity Dashboards & Vuln Program',
    tag: 'Power BI · Project Coordination',
    year: '2021 — 2022',
    body:
      'At Turnberry/Orbia, designed Power BI dashboards that surfaced vulnerability metrics across 10 key systems and instituted weekly vulnerability-management meetings with 20+ stakeholders. Chaired reporting to senior leadership.',
    stack: ['Power BI', 'Cybersecurity', 'Reporting', 'Leadership'],
    href: '#work',
    external: false,
  },
  {
    n: '04',
    title: 'Aerial Cinematography — Duluth & Beyond',
    tag: 'Drone · DJI · Color Grade',
    year: 'Ongoing',
    body:
      'Personal cinematography practice across DJI Air 2S, Air 3, and Mini 3 Pro — covering Minnesota landscapes, urban dusk skylines, and event coverage like Grandma\'s Marathon. Edited with Adobe Premiere Pro.',
    stack: ['DJI', 'Premiere Pro', 'Color', 'Photogrammetry'],
    href: '#drone',
    external: false,
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-canvasAlt">
      {/* Banner */}
      <div className="w-full bg-emerald">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Folder size={20} className="text-white" strokeWidth={2} />
          <h2 className="font-display font-bold text-xl tracking-wide text-white">
            Projects
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty mb-10 max-w-2xl">
          Four projects that cover the range — a portfolio site, an
          automation tool that replaced manual work, cybersecurity reporting
          at scale, and an ongoing personal practice in aerial film.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => {
            const linkProps = p.external
              ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: p.href };
            return (
              <motion.a
                key={p.n}
                {...linkProps}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex flex-col bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-emerald hover:shadow-sm hover:-translate-y-0.5"
              >
                <h3 className="font-display font-bold text-lg text-ink leading-snug flex items-start justify-between gap-2">
                  <span>{p.title}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-inkMuted shrink-0 mt-1 transition-colors duration-300 group-hover:text-emerald"
                  />
                </h3>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-inkMuted mt-1">
                  {p.tag} · {p.year}
                </p>
                <p className="text-inkSoft leading-[1.7] text-pretty mt-3 flex-1">
                  {p.body}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs bg-emeraldLight text-emeraldText px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
