import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Compass, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Page Not Found — Brandon Henrickson</title>
      <meta name="robots" content="noindex" />
    </Helmet>

    <div className="min-h-screen bg-canvas">
      <Navigation />

      <main id="main" tabIndex={-1}>
        {/* Banner */}
        <div className="w-full bg-emerald pt-16">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
            <Compass size={20} className="text-white" strokeWidth={2} />
            <h1 className="font-display font-bold text-xl tracking-wide text-white">
              404 — Page Not Found
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="font-display font-bold text-6xl md:text-7xl text-emerald">404</p>
          <p className="mt-4 text-inkSoft text-base md:text-lg leading-[1.75] max-w-xl mx-auto">
            That page doesn’t exist — it may have moved, or the link was mistyped.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 bg-emerald text-white px-6 py-3 rounded font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-emeraldHover"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </div>
      </main>
    </div>
  </>
);

export default NotFoundPage;
