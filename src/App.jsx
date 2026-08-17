import React, { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/contexts/ThemeContext';

// Lazy-load everything but the homepage.
const GuidesPage = lazy(() => import('./pages/GuidesPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TroubleshooterPage = lazy(() => import('./pages/TroubleshooterPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/troubleshooter" element={<TroubleshooterPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
