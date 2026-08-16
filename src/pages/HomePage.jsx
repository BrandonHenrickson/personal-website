import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import WorkHistorySection from '@/components/sections/WorkHistorySection';
import DroneVideographySection from '@/components/sections/DroneVideographySection';
import BlogSection from '@/components/sections/BlogSection';
import AccomplishmentsSection from '@/components/sections/AccomplishmentsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EngineeringSection from '@/components/sections/EngineeringSection';
import ContactSection from '@/components/sections/ContactSection';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when arriving from another page (e.g. /guides -> /#about)
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Brandon Henrickson — Software Developer & Project Manager</title>
        <link rel="canonical" href="https://www.greatbrandino.com/" />
        <meta
          name="description"
          content="Portfolio of Brandon Henrickson — software developer & project manager in Duluth, MN. Accessible, fast, secure React site featuring automation work, data analysis, and a live D3.js troubleshooting app."
        />
      </Helmet>
      
      <div className="scroll-smooth bg-canvas min-h-screen">
        <Navigation />
        <main id="main" tabIndex={-1}>
          <HeroSection />
          <AboutSection />
          <WorkHistorySection />
          <EducationSection />
          <BlogSection />
          <DroneVideographySection />
          <SkillsSection />
          <EngineeringSection />
          <AccomplishmentsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default HomePage;