import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Geek Squad',
    location: 'Duluth, MN',
    position: 'Advanced Repair Agent',
    period: 'June 2025 — Present',
    bullets: [
      'Perform expert-level troubleshooting and diagnostic repairs on desktops, laptops, and phones across Windows, macOS, iOS, and Android platforms.',
      'Execute advanced data recovery and secure data transfer protocols to ensure the integrity of critical client information.',
      'Serve as a Certified Apple Technician, conducting precision hardware repairs on iPhones and iPads while maintaining strict Apple GSX standards.',
      'Communicate technical diagnostics and repair timelines effectively to clients, ensuring high satisfaction and trust.',
    ],
  },
  {
    company: 'Freelance',
    location: 'Remote',
    position: 'Independent Website Designer',
    period: 'January 2026 — Present',
    bullets: [
      'Developed a professional user-friendly portfolio site (greatbrandino.com), using the platform to document custom software including automation tools, and to feature personal drone videography.',
      'Established a professional digital identity that boasts advanced computer science concepts with practical, business-oriented IT solutions.',
    ],
  },
  {
    company: 'Freelance',
    location: 'Duluth, MN',
    position: 'IT Automation Consultant',
    period: 'June 2024 — May 2025',
    bullets: [
      'Designed and implemented a custom Python / VBScript automation tool to digitize a manual bookkeeping process for a local business.',
      'Eliminated manual data entry by developing a script that parses PDF receipts and populates Excel spreadsheets via API/COM automation, without interrupting workflow.',
      'Drastically reduced administrative overhead and increased data accuracy for financial reporting.',
    ],
  },
  {
    company: 'Turnberry / Orbia',
    location: 'Minneapolis, MN',
    position: 'Project Coordinator',
    period: 'November 2021 — October 2022',
    bullets: [
      'Instituted a rigorous cybersecurity update initiative that incorporated two-step verification and essential hardware upgrades, leading to a measurable decrease in vulnerability scores across 10 key systems.',
      'Initiated weekly vulnerability management meetings focused on progress reports that involved over 20 employees, reviewing simulated real-world attacks to strengthen incident response capabilities.',
      'Chaired weekly meetings and delivered project status reports to senior colleagues in an effective manner.',
      'Implemented an advanced reporting solution that captured essential cybersecurity metrics and project milestones; utilized by over 15 team members.',
      'Coordinated complex scheduling across a diverse international team; facilitated 15+ cross-time-zone meetings each month, increasing project completion rates.',
    ],
  },
  {
    company: 'Johnson Brothers',
    location: 'St. Paul, MN',
    position: 'Business Analyst Intern',
    period: 'May 2021 — August 2021',
    bullets: [
      'Modernized operations by conducting end-to-end testing for a new website and routing tools, ensuring a user-friendly experience.',
      'Validated the complete integration of Omnitracs with legacy systems, establishing data synchronization for inventory and routing.',
      'Played a key role in the Wave 3 Omnitracs implementation, testing data transfers and developing upgrade plans.',
      'Facilitated new website design (JBHub 2.0), providing feedback to enhance sales rep experiences.',
      'Advocated for ERP modernization to streamline processes, increase efficiency, and improve environmental sustainability.',
      'Designed impactful dashboards and reports in Power BI to communicate complex cybersecurity risk data.',
    ],
  },
];

const WorkHistorySection = () => {
  return (
    <section id="work" className="bg-canvasAlt">
      {/* Banner */}
      <div className="w-full bg-emerald">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Briefcase size={20} className="text-white" strokeWidth={2} />
          <h2 className="font-display font-bold text-xl tracking-wide text-white">
            Work Experience
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty mb-10 max-w-2xl">
          Five roles across hardware repair, freelance consulting, project
          coordination, and business analysis — chronicled in the same
          language as the printed résumé.
        </p>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.position + exp.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-surface border border-border rounded-lg p-6 transition-all duration-300 hover:border-emerald hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-emerald text-white font-mono font-bold text-sm">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xl text-ink leading-tight">
                    {exp.position}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm text-inkMuted">
                    <span>{exp.company}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="mt-4 space-y-2 pl-1">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-3 text-inkSoft leading-[1.75] text-pretty">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistorySection;
