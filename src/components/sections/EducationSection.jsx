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
    org: 'iPhone · iPad · macOS · MacBook',
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
    <section id="education" className="section-pad">
      <div className="container-edge">
        {/* Header */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-20">
          <div className="col-span-12 lg:col-span-5">
            <p className="section-marker mb-4">04 / Education & Credentials</p>
            <h2 className="display text-5xl lg:text-6xl text-ink">
              Trained.
              <br />
              <span className="italic text-editorial">Certified.</span>
              <br />
              Curious.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-inkSoft text-lg leading-relaxed text-pretty">
              A formal foundation in computer science, sharpened by industry
              certification and continuing volunteer work that gives back to the
              field.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12">
          {/* Credentials column */}
          <div className="col-span-12 lg:col-span-7 space-y-0">
            {credentials.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid grid-cols-12 gap-4 items-start border-t border-rule py-10 group"
              >
                <div className="col-span-2 lg:col-span-1 pt-1">
                  <c.icon size={20} className="text-editorial" strokeWidth={1.25} />
                </div>
                <div className="col-span-10 lg:col-span-8">
                  <h3 className="font-display text-3xl text-ink leading-tight mb-1 group-hover:text-accentBlue transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-inkSoft">{c.subtitle}</p>
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-inkMuted mt-2">
                    {c.org}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-3 lg:text-right">
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-editorial">
                    {c.period}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="hairline" />
          </div>

          {/* Coursework */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="section-marker mb-6">Coursework — St. Thomas</p>
            <ul className="space-y-0">
              {coursework.map((c, i) => (
                <motion.li
                  key={c.code}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-baseline justify-between gap-3 border-b border-rule py-3"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-editorial w-20 shrink-0">
                    {c.code}
                  </span>
                  <span className="text-ink text-right">{c.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
