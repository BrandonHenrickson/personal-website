import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const GuideCard = ({ title, description, category, delay = 0 }) => {
  const { toast } = useToast();

  const handleReadGuide = () => {
    toast({
      title: "🚧 Guide Content Coming Soon!",
      description: "This comprehensive guide is currently being written. Check back shortly! 🚀"
    });
  };

  const getCategoryColor = (cat) => {
    switch (cat.toLowerCase()) {
      case 'web development': return 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20';
      case 'drone videography': return 'bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20';
      case 'design': return 'bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-500/20';
      case 'backend': return 'bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/20';
      case 'career': return 'bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20';
      default: return 'bg-gray-100 dark:bg-gray-700/30 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col h-full hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getCategoryColor(category)} transition-colors duration-300`}>
          {category}
        </span>
        <BookOpen className="w-5 h-5 text-gray-500 dark:text-gray-600" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{title}</h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <Button
        onClick={handleReadGuide}
        variant="ghost"
        className="w-full justify-between group text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-500/10"
      >
        Read Guide
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </motion.div>
  );
};

export default GuideCard;