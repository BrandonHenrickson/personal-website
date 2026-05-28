import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileText, Mail } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HeroSection = () => {
  const scrollTo = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pt-28 pb-12 overflow-hidden"
    >
      {/* Top eyebrow row */}
      <div className="container-edge w-full">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex items-center justify-between border-b border-rule pb-4 mb-16"
        >
          <span className="eyebrow">Portfolio / 2026 Edition</span>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-inkMuted hidden sm:inline">
            Duluth, MN — Available
          </span>
        </motion.div>
      </div>

      {/* Main hero composition */}
      <div className="container-edge w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12">
          {/* Left: name + identity */}
          <div className="col-span-12 lg:col-span-8">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="show"
              custom={1}
              className="eyebrow mb-6"
            >
              01 / Introduction
            </motion.p>

            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="show"
              custom={2}
              className="display text-[14vw] sm:text-[10vw] lg:text-[8.5vw] xl:text-[9rem] text-ink"
            >
              Brandon
              <br />
              <span className="italic font-normal text-editorial">Henrickson.</span>
            </motion.h1>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 max-w-xl"
            >
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-inkMuted mb-4">
                Software Dev · Data Analysis · Project Mgmt
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-inkSoft text-pretty">
                Computer Science graduate and Certified Apple Technician building
                dependable software, leading cross-functional teams, and shipping
                data-driven solutions with a methodical, business-minded approach.
              </p>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href="/Brandon-Henrickson-Resume.pdf"
                download
                className="btn-primary"
              >
                <FileText size={14} />
                Download Resume
              </a>
              <button onClick={() => scrollTo('#contact')} className="btn-ghost">
                <Mail size={14} />
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Right: stats column */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={5}
            className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l border-rule flex flex-col justify-end"
          >
            <p className="eyebrow mb-6">At a Glance</p>
            <dl className="space-y-6">
              {[
                { k: 'B.S.', v: 'Computer Science · 2020' },
                { k: 'Certified', v: 'Apple Technician · T242A46274' },
                { k: 'Stack', v: 'Python · Java · JavaScript · React' },
                { k: 'Specialized', v: 'Drone Videography · 3D · CAD' },
              ].map((row) => (
                <div key={row.k} className="border-b border-rule pb-4">
                  <dt className="font-mono text-[10px] tracking-[0.3em] uppercase text-editorial mb-1">
                    {row.k}
                  </dt>
                  <dd className="font-display text-lg text-ink leading-tight">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="container-edge w-full mt-16 group"
        aria-label="Scroll to next section"
      >
        <div className="flex items-center justify-between border-t border-rule pt-4">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-inkMuted group-hover:text-ink transition-colors">
            Scroll · Continue
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="text-ink"
          >
            <ArrowDownRight size={18} />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
