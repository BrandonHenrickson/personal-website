import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import { BookOpen } from 'lucide-react';

const GuidesPage = () => {
  return (
    <>
      <Helmet>
        <title>Guides — Brandon Henrickson</title>
        <meta
          name="description"
          content="Guides and write-ups by Brandon Henrickson — coming soon."
        />
      </Helmet>

      <div className="min-h-screen bg-canvas">
        <Navigation />

        {/* Banner */}
        <div className="w-full bg-emerald pt-16">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
            <BookOpen size={20} className="text-white" strokeWidth={2} />
            <h1 className="font-display font-bold text-xl tracking-wide text-white">
              Guides
            </h1>
          </div>
        </div>

        {/* Empty state — content coming later */}
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-inkMuted">
            Coming soon
          </p>
          <p className="mt-3 text-inkSoft">
            Guides and write-ups are on the way.
          </p>
        </div>
      </div>
    </>
  );
};

export default GuidesPage;
