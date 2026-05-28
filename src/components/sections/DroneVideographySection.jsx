import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, MapPin, AlertCircle } from 'lucide-react';

const DroneVideographySection = () => {
  const [imageErrors, setImageErrors] = useState({});
  const onImgError = (id) => setImageErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="drone" className="section-pad">
      <div className="container-edge">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <p className="section-marker mb-4">06 / Drone Videography</p>
            <h2 className="display text-5xl lg:text-6xl text-ink">
              The same place,
              <br />
              <span className="italic text-editorial">from above.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-inkSoft text-lg leading-relaxed text-pretty">
              Aerial cinematography across Minnesota landscapes and events —
              shot on DJI Air 2S, DJI Air 3, and DJI Mini 3 Pro. A short demo
              reel and selected frames below.
            </p>
          </div>
        </div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-ink overflow-hidden"
        >
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/rCQk9rpxhMI?start=58"
              title="Brandon Henrickson — Drone Cinematography Reel"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-y-3 lg:gap-x-12 mt-4 mb-16">
          <p className="col-span-12 lg:col-span-6 font-mono text-[10px] tracking-[0.3em] uppercase text-inkMuted">
            Reel 01 — Demo · 4K · 60FPS
          </p>
          <p className="col-span-12 lg:col-span-6 lg:text-right font-mono text-[10px] tracking-[0.3em] uppercase text-editorial">
            Featured Project
          </p>
        </div>

        {/* Frame grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paperAlt">
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
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
              </div>
              <figcaption className="flex items-baseline justify-between gap-4 mt-4 pb-4 border-b border-rule">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-editorial mb-1">
                    Frame 0{i + 2}
                  </p>
                  <h3 className="font-display text-2xl text-ink leading-tight">
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
