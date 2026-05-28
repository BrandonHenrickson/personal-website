import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Globe, Laptop, MapPin } from 'lucide-react';

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
    title: 'Twelve countries, one perspective',
    body:
      'Gained diverse cultural perspectives through extensive travel — adaptability that translates directly to working with international teams.',
    countries: [
      'Italy', 'San Marino', 'Vatican City', 'Switzerland',
      'Austria', 'Germany', 'Czechia', 'Slovakia',
      'Poland', 'Netherlands', 'England', 'Canada',
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
    <section id="accomplishments" className="section-pad bg-paperAlt/40">
      <div className="container-edge">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-20">
          <div className="col-span-12 lg:col-span-5">
            <p className="section-marker mb-4">08 / Beyond the Résumé</p>
            <h2 className="display text-5xl lg:text-6xl text-ink">
              The other
              <br />
              <span className="italic text-editorial">things.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-inkSoft text-lg leading-relaxed text-pretty">
              A few accomplishments that shape how I work — a language I keep
              alive, a passport with some mileage on it, and a deep stack of
              Apple-hardware credentials.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative border-t border-ink/20 pt-8"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-editorial">
                  {String(i + 1).padStart(2, '0')} / {item.eyebrow}
                </span>
                <item.icon size={20} strokeWidth={1.25} className="text-ink" />
              </div>
              <h3 className="font-display text-3xl text-ink leading-tight mb-4">
                {item.title}
              </h3>
              <p className="text-inkSoft leading-relaxed mb-5 text-pretty">{item.body}</p>

              {item.countries && (
                <div className="flex flex-wrap gap-1.5">
                  {item.countries.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.15em] uppercase text-inkMuted border border-rule px-2 py-1"
                    >
                      <MapPin size={9} />
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {item.skills && (
                <ul className="space-y-1">
                  {item.skills.map((s) => (
                    <li
                      key={s}
                      className="flex items-baseline gap-2 text-sm text-inkSoft border-b border-rule py-1.5"
                    >
                      <span className="font-mono text-[10px] text-editorial">·</span>
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-[0.2em] uppercase text-inkMuted border border-rule px-2.5 py-1"
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
