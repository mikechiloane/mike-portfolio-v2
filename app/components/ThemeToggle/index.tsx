"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/app/context/theme';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-full border-2 border-java-blue 
        ${theme === 'dark' ? 'bg-java-blue text-white' : 'bg-white text-java-blue'}
        hover:shadow-lg transition-all duration-300
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <FiMoon size={20} />
        ) : (
          <FiSun size={20} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
