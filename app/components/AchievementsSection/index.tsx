"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label, description }) => {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-java-blue to-java-red rounded-full flex items-center justify-center text-white text-3xl group-hover:shadow-2xl transition-all duration-300">
        {icon}
      </div>
      <motion.h3
        className="text-4xl lg:text-5xl font-bold text-java-red mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {number}
      </motion.h3>
      <h4 className="text-xl font-semibold text-text-primary mb-2">{label}</h4>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
  );
};

const achievements = [
  {
    title: "LexisNexis Excellence Award",
    description: "Recognized for outstanding contribution to high-performance data processing systems",
    year: "2024"
  },
  {
    title: "Technical Innovation Leader",
    description: "Led migration of legacy systems to modern cloud architecture",
    year: "2023"
  },
  {
    title: "Convergenc3 Top Performer",
    description: "Delivered 15+ successful client projects across multiple industries",
    year: "2022"
  }
];

const AchievementsSection: React.FC = () => {
  const stats = [
    {
      icon: <FiCode />,
      number: "6+",
      label: "Years Experience",
      description: "Building enterprise applications"
    },
    {
      icon: <FiUsers />,
      number: "25+",
      label: "Projects Delivered",
      description: "Successful implementations"
    },
    {
      icon: <FiAward />,
      number: "3",
      label: "Industry Awards",
      description: "Recognition for excellence"
    },
    {
      icon: <FiTrendingUp />,
      number: "99%",
      label: "Client Satisfaction",
      description: "Positive feedback rate"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-java-blue/5 to-java-red/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-java-blue mb-8">
            Impact by Numbers
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-java-red mb-12">
            Key Achievements
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-surface-secondary rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border-color"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-java-yellow rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {achievement.year}
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3 dark:text-text-primary">
                  {achievement.title}
                </h4>
                <p className="text-text-secondary dark:text-text-secondary">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
