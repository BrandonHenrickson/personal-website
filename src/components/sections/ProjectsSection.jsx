import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Backend', 'Full Stack'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.',
      techStack: ['React', 'Firebase', 'TailwindCSS'],
      category: 'Frontend'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform for business intelligence with customizable charts and real-time data processing.',
      techStack: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      category: 'Full Stack'
    },
    {
      title: 'REST API Service',
      description: 'Scalable microservices architecture for handling high-traffic applications with robust authentication.',
      techStack: ['Node.js', 'Express', 'Redis', 'JWT'],
      category: 'Backend'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Modern social media management interface with post scheduling, analytics, and engagement tracking.',
      techStack: ['React', 'Framer Motion', 'Chart.js'],
      category: 'Frontend'
    },
    {
      title: 'Real-time Chat Application',
      description: 'WebSocket-based messaging platform with end-to-end encryption and multimedia support.',
      techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'Full Stack'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing expertise across different technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;