import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-edge">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 mb-20">
          <div className="col-span-12 lg:col-span-4">
            <p className="section-marker mb-4">02 / About</p>
            <h2 className="display text-5xl lg:text-6xl text-ink">
              A methodical
              <br />
              <span className="italic text-editorial">approach</span> to
              <br />
              complex work.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-6 text-inkSoft text-lg leading-relaxed text-pretty"
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

        {/* Photo + values strip */}
        <div className="hairline mb-16" />

        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="col-span-12 lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-paperAlt">
              <img
                src="https://horizons-cdn.hostinger.com/0d63ad3f-8456-4ea9-bf68-6ad4e4438075/51ed36a95009e805b0797b013602d1bd.jpg"
                alt="Brandon Henrickson"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
            </div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-inkMuted mt-3">
              Fig. 01 — Brandon Henrickson, Duluth MN
            </p>
          </motion.div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-10">
            {[
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
            ].map((row, i) => (
              <motion.div
                key={row.k}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid grid-cols-12 gap-4 border-b border-rule pb-8"
              >
                <div className="col-span-2">
                  <span className="font-mono text-xs tracking-[0.3em] text-editorial">
                    {row.k}
                  </span>
                </div>
                <div className="col-span-10">
                  <h3 className="font-display text-2xl text-ink mb-2 leading-tight">
                    {row.title}
                  </h3>
                  <p className="text-inkSoft leading-relaxed text-pretty">{row.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
