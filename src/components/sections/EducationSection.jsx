import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck, HeartHandshake } from 'lucide-react';

const coursework = [
  { code: 'CISC 310', name: 'Database Analysis & Design' },
  { code: 'CISC 340', name: 'Web Development' },
  { code: 'CISC 370', name: 'Computer Architecture' },
  { code: 'CISC 350', name: 'Information Security' },
  { code: 'CISC 230', name: 'Data Structures' },
  { code: 'CISC 315', name: 'Operating Systems' },
];

const credentials = [
  {
    icon: GraduationCap,
    title: 'Bachelor of Science',
    subtitle: 'Computer Science',
    org: 'University of St. Thomas',
    period: '2016 — 2020',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Apple Technician',
    subtitle: 'Tech ID — T242A46274',
    org: 'iPhone · iPad · iOS · macOS · MacBook',
    period: 'Active',
  },
  {
    icon: HeartHandshake,
    title: 'Geek Squad Academy',
    subtitle: 'Volunteer Educator',
    org: 'Best Buy Foundation',
    period: 'June — July 2026',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-canvas">
      {/* Banner */}
      <div className="w-full bg-emerald">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <GraduationCap size={20} className="text-white" strokeWidth={2} />
          <h2 className="font-display font-bold text-xl tracking-wide text-white">
            Education
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty mb-10 max-w-2xl">
          A formal foundation in computer science, sharpened by industry
          certification and continuing volunteer work that gives back to the
          field.
        </p>

        {/* Credentials card grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {credentials.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-surface border border-border rounded-lg p-5 transition-colors duration-300 hover:border-emerald"
            >
              <c.icon size={22} className="text-emerald" strokeWidth={1.75} />
              <h3 className="font-display font-bold text-xl text-ink mt-4 leading-tight">
                {c.title}
              </h3>
              <p className="text-inkSoft mt-1">{c.subtitle}</p>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-inkMuted mt-2">
                {c.org}
              </p>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-emeraldText mt-3">
                {c.period}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Coursework */}
        <p className="font-mono text-xs uppercase tracking-widest text-inkMuted mt-12 mb-4">
          Coursework — St. Thomas
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {coursework.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center gap-3 bg-surface border border-border rounded px-4 py-2.5 transition-colors duration-300 hover:border-emerald"
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-emerald shrink-0 w-16">
                {c.code}
              </span>
              <span className="text-ink text-sm">{c.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
