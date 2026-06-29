import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import FootprintsBackground from '@/components/FootprintsBackground';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { k: 'B.S.', v: ['Computer Science', '2020'] },
  { k: 'Certified', v: ['Apple Technician', 'T242A46274'] },
  { k: 'Stack', v: ['Java', 'Python', 'Claude Code', 'Website Design'] },
  { k: 'Specialized', v: ['Drone Videography', '3D Printing', '3D Printing Software'] },
];

const quickNav = [
  { label: 'About', target: '#about' },
  { label: 'Experience', target: '#work' },
  { label: 'Education', target: '#education' },
  { label: 'Projects', target: '#blog' },
  { label: 'Skills', target: '#skills' },
  { label: 'Drone', target: '#drone' },
  { label: 'Contact', target: '#contact' },
];

const HeroSection = () => {
  const scrollTo = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex flex-col bg-canvas">
      {/* Emerald hero band */}
      <div className="relative overflow-hidden w-full bg-emerald pt-32 pb-24 px-6">
        <FootprintsBackground />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white">
              Open to Opportunities · Duluth / Remote
            </span>
          </motion.div>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-white/70 mb-6"
          >
            Software Dev · Data Analysis · Project Mgmt
          </motion.p>

          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em]"
          >
            Brandon Henrickson
          </motion.h1>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 max-w-2xl text-base sm:text-lg text-white/90 leading-[1.75] text-pretty"
          >
            Computer Science graduate and Certified Apple Technician building
            dependable software, leading cross-functional teams, and shipping
            data-driven solutions with a methodical, business-minded approach.
          </motion.p>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/Brandon-Henrickson-Resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-white/70 text-white px-6 py-3 rounded font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-white hover:text-emerald"
            >
              <FileText size={14} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 border border-white/70 text-white px-6 py-3 rounded font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-white hover:text-emerald"
            >
              <Mail size={14} />
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats + quick-nav, overlapping the emerald band edge */}
      <div className="max-w-4xl mx-auto px-6 w-full -mt-12 pb-16 md:pb-24">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={5}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((row) => (
            <div
              key={row.k}
              className="bg-surface border border-border rounded-lg p-5 text-center transition-colors duration-300 hover:border-emerald"
            >
              <p className="font-display font-bold text-xl text-ink">{row.k}</p>
              <div className="mt-2 space-y-0.5">
                {row.v.map((line) => (
                  <p
                    key={line}
                    className="font-mono text-[11px] leading-snug tracking-wide text-inkMuted"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.nav
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={6}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8"
          aria-label="Section quick navigation"
        >
          {quickNav.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              className="bg-surface border border-emerald text-emerald rounded px-4 py-3 font-mono text-sm transition-colors duration-300 hover:bg-emerald hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Brandon-Henrickson-Resume.pdf"
            download
            className="flex items-center justify-center bg-surface border border-emerald text-emerald rounded px-4 py-3 font-mono text-sm transition-colors duration-300 hover:bg-emerald hover:text-white"
          >
            Resume
          </a>
        </motion.nav>
      </div>
    </section>
  );
};

export default HeroSection;
