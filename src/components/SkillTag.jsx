import React from 'react';
import { motion } from 'framer-motion';

const SkillTag = ({ skill, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800/80 transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />}
      <span>{skill}</span>
    </motion.div>
  );
};

export default SkillTag;