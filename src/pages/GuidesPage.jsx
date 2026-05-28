import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import GuideCard from '@/components/GuideCard';
import ContactSection from '@/components/sections/ContactSection';
import UsefulLinksSection from '@/components/sections/UsefulLinksSection';
import { Sparkles } from 'lucide-react';

const GuidesPage = () => {
  const guides = [
    {
      title: "Getting Started with React 18",
      description: "A comprehensive introduction to the new features in React 18, including concurrency, automatic batching, and transitions.",
      category: "Web Development"
    },
    {
      title: "Mastering Drone Flight Paths",
      description: "Learn how to plan and execute complex cinematic flight paths for professional aerial videography.",
      category: "Drone Videography"
    },
    {
      title: "Principles of Clean UI Design",
      description: "Essential rules for creating clutter-free, intuitive user interfaces that improve user engagement and retention.",
      category: "Design"
    },
    {
      title: "Node.js Performance Optimization",
      description: "Techniques for identifying bottlenecks and improving the throughput of your Node.js backend services.",
      category: "Backend"
    },
    {
      title: "Breaking into Tech: A Developer's Journey",
      description: "My personal advice and roadmap for aspiring developers looking to land their first role in the tech industry.",
      category: "Career"
    },
    {
      title: "Writing Effective Documentation",
      description: "How to write technical documentation that your team and users will actually want to read.",
      category: "Career"
    },
    {
      title: "Understanding CSS Grid & Flexbox",
      description: "A visual guide to mastering modern CSS layout systems for responsive web design.",
      category: "Web Development"
    },
    {
      title: "Color Theory for Developers",
      description: "Practical color theory concepts to help developers make better design decisions without a designer.",
      category: "Design"
    },
    {
      title: "API Security Best Practices",
      description: "Critical security measures every backend developer should implement to protect their APIs.",
      category: "Backend"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Guides & Tutorials - Brandon's Portfolio</title>
        <meta 
          name="description" 
          content="In-depth guides and tutorials on web development, drone videography, design, and software engineering." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[80px]"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 transition-colors duration-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Knowledge Base
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Guides</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                Sharing my knowledge and experiences across software development, design, and aerial cinematography.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Useful Links Section */}
        <UsefulLinksSection />

        {/* Guides Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Latest Articles</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {guides.map((guide, index) => (
                <GuideCard
                  key={index}
                  title={guide.title}
                  description={guide.description}
                  category={guide.category}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
};

export default GuidesPage;