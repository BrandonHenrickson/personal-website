import React from 'react';
import { motion } from 'framer-motion';
import { Film, MapPin } from 'lucide-react';

const videos = [
  { id: '1pA4lVgWD1s', place: 'Malta' },
  { id: 'PECGtGSLD0c', place: 'Sicily' },
  { id: 'S3x3krRHfM4', place: 'Taormina' },
  { id: '9t4dEKpymbo', place: 'Lisbon' },
  { id: '8VIGCWMtpWM', place: 'Tower of Belém' },
  { id: 'JFi3HXTJgOw', place: 'Poland' },
  { id: '3E2oGiYgYyg', place: 'Czechia' },
  { id: 'ikbYz6LjfME', place: 'Duluth' },
];

const DroneVideographySection = () => {
  return (
    <section id="drone" className="bg-canvas">
      {/* Banner */}
      <div className="w-full bg-emerald">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Film size={20} className="text-white" strokeWidth={2} />
          <h2 className="font-display font-bold text-xl tracking-wide text-white">
            Drone Videography
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty mb-10 max-w-2xl">
          Aerial cinematography from travels across Europe and back home in
          Minnesota — shot on DJI Air 2S, DJI Air 3, and DJI Mini 3 Pro. A demo
          reel up top, plus clips from each place below.
        </p>

        {/* Featured reel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="bg-surface border border-border border-t-2 border-t-emerald rounded-lg overflow-hidden shadow-sm"
        >
          <div className="relative aspect-video w-full bg-codeBlock">
            <iframe
              src="https://www.youtube.com/embed/rCQk9rpxhMI?start=58"
              title="Brandon Henrickson — Drone Cinematography Reel"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex items-center justify-between gap-3 px-5 py-3 border-t border-border">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-inkMuted">
              Reel 01 — Demo · 4K · 60FPS
            </p>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-emerald">
              Featured Project
            </p>
          </div>
        </motion.div>

        {/* Per-location clips */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {videos.map((v, i) => (
            <motion.figure
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group bg-surface border border-border rounded-lg overflow-hidden transition-colors duration-300 hover:border-emerald"
            >
              <div className="relative aspect-video w-full bg-codeBlock">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={`${v.place} — Drone footage`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
                <h3 className="font-display font-bold text-lg text-ink leading-tight">
                  {v.place}
                </h3>
                <span className="flex items-center gap-1.5 text-inkMuted shrink-0">
                  <MapPin size={12} />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                    Drone
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DroneVideographySection;
