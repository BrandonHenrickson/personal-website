import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Languages, Globe, Laptop, MapPin } from 'lucide-react';

const items = [
  {
    icon: Languages,
    eyebrow: 'Language',
    title: 'Conversational Italian',
    body:
      'Developed intermediate proficiency through study and travel, fostering cultural understanding and effective cross-cultural communication.',
    tags: ['Intermediate', 'Cultural Immersion'],
  },
  {
    icon: Globe,
    eyebrow: 'Travel',
    title: 'Thirteen countries, one perspective',
    body:
      'Gained diverse cultural perspectives through extensive travel — adaptability that translates directly to working with international teams.',
    countries: [
      'Italy', 'San Marino', 'Vatican City', 'Switzerland',
      'Austria', 'Germany', 'Czechia', 'Slovakia',
      'Poland', 'Netherlands', 'Portugal', 'England', 'Canada',
    ],
  },
  {
    icon: Laptop,
    eyebrow: 'Certification',
    title: 'Apple Certified Technician',
    body:
      'Geek Squad certified, with 20+ Apple-specific certifications covering iPhone, iPad, and MacBook hardware repair to strict Apple GSX standards.',
    skills: ['iPhone Repair', 'iPad Support', 'MacBook Service', 'Display Replacement', 'Battery Handling'],
  },
];

const AccomplishmentsSection = () => {
  return (
    <section id="accomplishments" className="bg-canvasAlt">
      {/* Banner */}
      <div className="w-full bg-emerald">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Trophy size={20} className="text-white" strokeWidth={2} />
          <h2 className="font-display font-bold text-xl tracking-wide text-white">
            Accomplishments
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty mb-10 max-w-2xl">
          A few accomplishments that shape how I work — a language I keep
          alive, a passport with some mileage on it, and a deep stack of
          Apple-hardware credentials.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center bg-surface border border-border rounded-lg p-6 transition-colors duration-300 hover:border-emerald"
            >
              <item.icon size={32} strokeWidth={1.5} className="text-emerald" />
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-inkMuted mt-3">
                {item.eyebrow}
              </p>
              <h3 className="font-display font-bold text-lg text-ink leading-tight mt-1">
                {item.title}
              </h3>
              <p className="text-inkSoft text-sm leading-[1.7] text-pretty mt-3">
                {item.body}
              </p>

              {item.countries && (
                <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                  {item.countries.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.1em] uppercase bg-emeraldLight text-emeraldText px-2 py-1 rounded-full"
                    >
                      <MapPin size={9} />
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {item.skills && (
                <ul className="w-full space-y-1.5 mt-4 text-left">
                  {item.skills.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-sm text-inkSoft"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              {item.tags && (
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-[0.15em] uppercase bg-emeraldLight text-emeraldText px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
