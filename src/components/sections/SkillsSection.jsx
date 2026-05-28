import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    n: 'A',
    title: 'Development',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'HTML / CSS',
      'Agentic AI Development',
      'Website Design',
    ],
  },
  {
    n: 'B',
    title: 'Platforms & Tools',
    skills: [
      'Windows',
      'Linux',
      'macOS',
      'iOS',
      'Git',
      'Microsoft Office Suite',
      'Adobe Creative Suite',
      'AGI (Claude / Gemini / GPT)',
    ],
  },
  {
    n: 'C',
    title: 'Hardware & Repair',
    skills: [
      'PC Repair',
      'OS Repair',
      'Software Repair',
      'Apple Product Repair',
      'Network Support',
    ],
  },
  {
    n: 'D',
    title: 'Technical Expertise',
    skills: [
      'OS Configuration',
      'Software Testing',
      'Team Leadership',
      'Project Management',
      'Data & Technical Analysis',
    ],
  },
  {
    n: 'E',
    title: 'Specialized',
    skills: [
      'Apple Certified Technician',
      'PC Building',
      'Drone Videography',
      'Photogrammetry',
      '3D Modeling',
      'CAD',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-pad bg-paperAlt/40">
      <div className="container-edge">
        {/* Header */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-20">
          <div className="col-span-12 lg:col-span-5">
            <p className="section-marker mb-4">07 / Capabilities</p>
            <h2 className="display text-5xl lg:text-6xl text-ink">
              A working
              <br />
              <span className="italic text-editorial">toolkit.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-inkSoft text-lg leading-relaxed text-pretty">
              Languages, platforms, and craft skills I use day-to-day — grouped
              the same way as on the résumé so what you see here is what shows
              up on the job.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="border-t border-ink/15">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="grid grid-cols-12 gap-y-4 lg:gap-x-12 items-start border-b border-rule py-10 group"
            >
              <div className="col-span-12 lg:col-span-1">
                <span className="font-mono text-xs tracking-[0.3em] text-editorial">
                  {cat.n}
                </span>
              </div>
              <div className="col-span-12 lg:col-span-3">
                <h3 className="font-display text-3xl lg:text-4xl text-ink leading-tight tracking-tight">
                  {cat.title}
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <ul className="flex flex-wrap gap-x-3 gap-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-sans text-base text-inkSoft border border-ink/15 px-3 py-1.5 transition-colors duration-300 hover:border-ink hover:text-ink hover:bg-paper cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
