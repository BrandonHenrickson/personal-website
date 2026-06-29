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
        <title>Brandon - Software Developer & Project Manager</title>
        <meta 
          name="description" 
          content="Brandon's portfolio showcasing expertise in software development, project management, and technical analysis. Explore projects built with React, Node.js, and modern web technologies." 
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
          <AccomplishmentsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default HomePage;