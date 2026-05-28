import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProjectCard = ({ title, description, techStack, delay = 0 }) => {
  const { toast } = useToast();

  const handleViewProject = () => {
    toast({
      title: "🚧 Project View Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-500/30 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <Button
        onClick={handleViewProject}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all"
      >
        View Project <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default ProjectCard;