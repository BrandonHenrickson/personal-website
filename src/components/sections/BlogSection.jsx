import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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
    <section id="blog" className="section-pad">
      <div className="container-edge">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-20">
          <div className="col-span-12 lg:col-span-5">
            <p className="section-marker mb-4">05 / Selected Work</p>
            <h2 className="display text-5xl lg:text-6xl text-ink">
              Things I have
              <br />
              <span className="italic text-editorial">built &amp; shipped.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-inkSoft text-lg leading-relaxed text-pretty">
              Four projects that cover the range — a portfolio site, an
              automation tool that replaced manual work, cybersecurity reporting
              at scale, and an ongoing personal practice in aerial film.
            </p>
          </div>
        </div>

        <div className="border-t border-ink/15">
          {projects.map((p, i) => {
            const Wrapper = p.external ? 'a' : 'a';
            const linkProps = p.external
              ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: p.href };
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-b border-rule"
              >
                <Wrapper
                  {...linkProps}
                  className="grid grid-cols-12 gap-y-4 lg:gap-x-12 items-start py-10 group cursor-pointer"
                >
                  <div className="col-span-12 lg:col-span-1">
                    <span className="font-mono text-xs tracking-[0.3em] text-editorial">
                      {p.n}
                    </span>
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <h3 className="font-display text-3xl lg:text-4xl text-ink leading-[1.05] tracking-tight mb-2 group-hover:text-accentBlue transition-colors duration-500 flex items-start gap-2">
                      <span>{p.title}</span>
                      <ArrowUpRight
                        size={20}
                        className="text-inkMuted shrink-0 mt-1 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      />
                    </h3>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-inkMuted">
                      {p.tag} · {p.year}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    <p className="text-inkSoft leading-relaxed mb-4 text-pretty">
                      {p.body}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[10px] tracking-[0.15em] uppercase text-inkMuted border border-rule px-2 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
