import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

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
    <section id="skills" className="bg-canvasAlt">
      {/* Banner */}
      <div className="w-full bg-emerald">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Zap size={20} className="text-white" strokeWidth={2} />
          <h2 className="font-display font-bold text-xl tracking-wide text-white">
            Skills
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty mb-12 max-w-2xl">
          Languages, platforms, and craft skills I use day-to-day — grouped
          the same way as on the résumé so what you see here is what shows
          up on the job.
        </p>

        <div className="space-y-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-inkMuted mb-3">
                {cat.title}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-surface border border-border rounded px-4 py-2 transition-colors duration-300 hover:border-emerald hover:text-emerald group"
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
};

export default SkillsSection;
