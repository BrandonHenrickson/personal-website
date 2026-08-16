import React, { useEffect, useRef } from 'react';

/*
 * Top-down figure that wanders the hero band leaving fading footprints.
 * Canvas behind the content; pointer-events-none; sizes to its parent;
 * honors prefers-reduced-motion (draws one static trail and stops).
 */
const FOOT_LIFE = 9000; // ms a footprint stays before fully fading
const STRIDE = 26; // px of travel between footprints
const FOOT_ALPHA = 0.16;

const FootprintsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const drawFoot = (p, alpha) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, 3, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // Reduced motion: lay down one gentle static trail and stop.
    if (reduceMotion) {
      let side = 1;
      for (let i = 0; i < 14; i += 1) {
        const t = i / 13;
        const x = width * (0.2 + t * 0.6);
        const y = height * (0.5 + Math.sin(t * Math.PI * 1.5) * 0.18);
        const angle = 0.2;
        const perp = angle + Math.PI / 2;
        side *= -1;
        drawFoot(
          { x: x + Math.cos(perp) * 5 * side, y: y + Math.sin(perp) * 5 * side, angle },
          FOOT_ALPHA
        );
      }
      return () => ro.disconnect();
    }

    const walker = {
      x: width * 0.3,
      y: height * 0.55,
      angle: Math.random() * Math.PI * 2,
      speed: 0.8,
    };
    let prints = [];
    let sinceStep = 0;
    let footSide = 1;
    let raf;
    let last = performance.now();

    const tick = (now) => {
      const dt = Math.min(now - last, 50);
      last = now;
      ctx.clearRect(0, 0, width, height);

      // Wander with a gentle random walk, steering back when near an edge.
      walker.angle += (Math.random() - 0.5) * 0.22;
      const edgeX = Math.min(walker.x, width - walker.x);
      const edgeY = Math.min(walker.y, height - walker.y);
      if (edgeX < 70 || edgeY < 70) {
        const toCenter = Math.atan2(height / 2 - walker.y, width / 2 - walker.x);
        let diff = toCenter - walker.angle;
        diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        walker.angle += diff * 0.06;
      }

      const dist = walker.speed * (dt / 16);
      walker.x = Math.max(8, Math.min(width - 8, walker.x + Math.cos(walker.angle) * dist));
      walker.y = Math.max(8, Math.min(height - 8, walker.y + Math.sin(walker.angle) * dist));

      sinceStep += dist;
      if (sinceStep >= STRIDE) {
        sinceStep = 0;
        footSide *= -1;
        const perp = walker.angle + Math.PI / 2;
        const off = 5 * footSide;
        prints.push({
          x: walker.x + Math.cos(perp) * off,
          y: walker.y + Math.sin(perp) * off,
          angle: walker.angle,
          t0: now,
        });
      }

      prints = prints.filter((p) => now - p.t0 < FOOT_LIFE);
      prints.forEach((p) => {
        const alpha = (1 - (now - p.t0) / FOOT_LIFE) * FOOT_ALPHA;
        drawFoot(p, alpha);
      });

      // The walker: a soft top-down figure (shoulders + head).
      ctx.save();
      ctx.translate(walker.x, walker.y);
      ctx.rotate(walker.angle + Math.PI / 2);
      ctx.fillStyle = 'rgba(255,255,255,0.20)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 5, 7, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.30)';
      ctx.beginPath();
      ctx.arc(0, -1, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default FootprintsBackground;
