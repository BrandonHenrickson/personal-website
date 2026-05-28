import React from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon, ExternalLink, GraduationCap, Palette, Layout, Code, Terminal, Database } from 'lucide-react';

const UsefulLinksSection = () => {
  const links = [
    {
      title: "React Documentation",
      description: "The official documentation for React. Essential for learning hooks, components, and best practices.",
      url: "https://react.dev",
      icon: Code,
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      title: "MDN Web Docs",
      description: "Resources for developers, by developers. The go-to place for HTML, CSS, and JavaScript references.",
      url: "https://developer.mozilla.org",
      icon: GraduationCap,
      color: "text-yellow-500 dark:text-yellow-400"
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.",
      url: "https://tailwindcss.com",
      icon: Palette,
      color: "text-cyan-500 dark:text-cyan-400"
    },
    {
      title: "Framer Motion",
      description: "A production-ready motion library for React. Powering the animations on this website.",
      url: "https://www.framer.com/motion/",
      icon: Layout,
      color: "text-purple-500 dark:text-purple-400"
    },
    {
      title: "Lucide Icons",
      description: "Beautiful & consistent icon toolkit made by the community. Used throughout this portfolio.",
      url: "https://lucide.dev",
      icon: LinkIcon,
      color: "text-red-500 dark:text-red-400"
    },
    {
      title: "Vite Guide",
      description: "Next Generation Frontend Tooling. Fast build times and hot module replacement.",
      url: "https://vitejs.dev",
      icon: Terminal,
      color: "text-green-500 dark:text-green-400"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-10"
        >
          <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl mr-4 border border-blue-200 dark:border-blue-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-colors duration-300">
            <LinkIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Useful Resources</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group block relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800/80 border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-600/5 dark:to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 bg-gray-100 dark:bg-gray-800/80 rounded-lg group-hover:bg-white dark:group-hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-700/50 group-hover:border-gray-200 dark:group-hover:border-gray-600/50`}>
                    <link.icon className={`w-6 h-6 ${link.color} transition-colors`} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinksSection;