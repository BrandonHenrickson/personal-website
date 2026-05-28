import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

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
    <section id="work" className="section-pad bg-paperAlt/40">
      <div className="container-edge">
        {/* Header */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-20">
          <div className="col-span-12 lg:col-span-5">
            <p className="section-marker mb-4">03 / Experience</p>
            <h2 className="display text-5xl lg:text-6xl text-ink">
              A record of
              <br />
              <span className="italic text-editorial">delivered</span> work.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-inkSoft text-lg leading-relaxed text-pretty">
              Five roles across hardware repair, freelance consulting, project
              coordination, and business analysis — chronicled in the same
              language as the printed résumé.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.position + exp.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-y-6 lg:gap-x-12 border-t border-ink/15 py-12 group"
            >
              <div className="col-span-12 lg:col-span-3">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-editorial mb-2">
                  {String(i + 1).padStart(2, '0')} / Period
                </p>
                <p className="font-mono text-sm text-ink">{exp.period}</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-inkMuted">
                  <MapPin size={11} />
                  <span className="font-mono tracking-wider uppercase">{exp.location}</span>
                </p>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <h3 className="font-display text-3xl lg:text-4xl text-ink leading-[1.05] tracking-tight mb-2 group-hover:text-accentBlue transition-colors duration-500">
                  {exp.position}
                </h3>
                <p className="font-sans text-sm tracking-wide text-inkSoft uppercase">
                  {exp.company}
                </p>
              </div>

              <ul className="col-span-12 lg:col-span-5 space-y-3 text-inkSoft leading-relaxed text-pretty">
                {exp.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="font-mono text-[10px] text-editorial pt-2 shrink-0">
                      ·
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
};

export default WorkHistorySection;
