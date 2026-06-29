import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, MapPin, AlertCircle } from 'lucide-react';

const DroneVideographySection = () => {
  const [imageErrors, setImageErrors] = useState({});
  const onImgError = (id) => setImageErrors((prev) => ({ ...prev, [id]: true }));

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
          Aerial cinematography across Minnesota landscapes and events —
          shot on DJI Air 2S, DJI Air 3, and DJI Mini 3 Pro. A short demo
          reel and selected frames below.
        </p>

        {/* Featured video */}
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

        {/* Frame grid */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {[
            {
              id: 'urban',
              src: 'https://images.unsplash.com/photo-1673862968164-d8842a59bd2d',
              title: 'Urban Dusk',
              place: 'Minnesota Skyline',
            },
            {
              id: 'harbor',
              src: 'https://horizons-cdn.hostinger.com/0d63ad3f-8456-4ea9-bf68-6ad4e4438075/259ac8bf8a85221d7cbf298f8bed170c.png',
              title: "Grandma's Marathon",
              place: 'Duluth Waterfront, 2025',
            },
          ].map((frame, i) => (
            <motion.figure
              key={frame.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-surface border border-border rounded-lg overflow-hidden transition-colors duration-300 hover:border-emerald"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-canvasAlt">
                {imageErrors[frame.id] ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-inkMuted">
                    <AlertCircle size={26} strokeWidth={1.25} />
                    <p className="font-mono text-xs tracking-wider mt-2">Image unavailable</p>
                  </div>
                ) : (
                  <img
                    src={frame.src}
                    alt={frame.title}
                    onError={() => onImgError(frame.id)}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.04]"
                  />
                )}
              </div>
              <figcaption className="flex items-baseline justify-between gap-4 px-5 py-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-emerald mb-1">
                    Frame 0{i + 2}
                  </p>
                  <h3 className="font-display font-bold text-lg text-ink leading-tight">
                    {frame.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-inkMuted shrink-0">
                  <MapPin size={12} />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                    {frame.place}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DroneVideographySection;
