import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const metrics = [
  { value: '10', label: 'Key systems secured' },
  { value: '20+', label: 'Team members led' },
  { value: '15+', label: 'Cross-time-zone meetings / mo' },
  { value: '20+', label: 'Apple certifications' },
];

const values = [
  {
    k: 'I',
    title: 'Software & Development',
    body:
      'Building practical applications and automation tools. Python, JavaScript, React, agentic AI integration. Focused on shipping real solutions, not abstractions.',
  },
  {
    k: 'II',
    title: 'Project & Team Leadership',
    body:
      'Coordinating cross-functional, international teams; chairing weekly status meetings; translating between stakeholders and engineers; delivering on schedule.',
  },
  {
    k: 'III',
    title: 'Hardware & Technical Analysis',
    body:
      'Apple-certified repair across iPhones, iPads, MacBooks. Data recovery, secure transfers, advanced diagnostics on Windows, macOS, iOS, Android.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-canvas">
      {/* Banner */}
      <div className="w-full bg-emerald">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <User size={20} className="text-white" strokeWidth={2} />
          <h2 className="font-display font-bold text-xl tracking-wide text-white">
            About
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        {/* Impact metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display font-bold text-3xl md:text-4xl text-emerald">
                {m.value}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wide text-inkMuted mt-1 leading-snug">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Photo */}
          <motion.figure
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-canvasAlt">
              <img
                src="https://horizons-cdn.hostinger.com/0d63ad3f-8456-4ea9-bf68-6ad4e4438075/51ed36a95009e805b0797b013602d1bd.jpg"
                alt="Brandon Henrickson"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="font-mono text-[10px] tracking-[0.3em] uppercase text-inkMuted mt-3">
              Fig. 01 — Brandon Henrickson, Duluth MN
            </figcaption>
          </motion.figure>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-inkSoft text-base md:text-lg leading-[1.75] text-pretty"
          >
            <p>
              I'm a fast-learning Computer Science graduate from the University of
              St. Thomas and a Certified Apple Technician. My background spans
              software development, project coordination, business analysis, and
              hands-on hardware repair — a combination that has trained me to move
              between strategy and execution without losing the thread.
            </p>
            <p>
              At Turnberry/Orbia I led a cybersecurity update initiative across 10
              key systems and chaired weekly meetings with 20+ employees and
              cross-time-zone teammates. At Geek Squad I diagnose and repair devices
              across Windows, macOS, iOS, and Android. On my own time I build
              automation tools, design portfolio sites, and fly drones.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {values.map((row, i) => (
            <motion.div
              key={row.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-lg p-6 transition-colors duration-300 hover:border-emerald"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald text-white font-mono font-bold text-sm">
                {row.k}
              </span>
              <h3 className="font-display font-bold text-xl text-ink mt-4 mb-2 leading-tight">
                {row.title}
              </h3>
              <p className="text-inkSoft leading-[1.75] text-pretty">{row.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
