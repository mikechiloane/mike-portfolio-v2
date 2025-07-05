"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillCardProps {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, category, proficiency }) => {
  return (
    <motion.div
      className="group relative bg-white dark:bg-surface-secondary rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border-color"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12">
          <Image
            src={icon}
            alt={name}
            layout="fill"
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-text-primary">{name}</h3>
          <p className="text-sm text-text-secondary">{category}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-text-secondary">Proficiency</span>
          <span className="text-xs font-bold text-java-blue">{proficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-java-blue to-java-red h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const skillsData = [
  { name: "Java", icon: "/stack/0.png", category: "Backend", proficiency: 95 },
  { name: "Spring Boot", icon: "/stack/1.png", category: "Framework", proficiency: 90 },
  { name: "React", icon: "/stack/2.png", category: "Frontend", proficiency: 88 },
  { name: "TypeScript", icon: "/stack/3.png", category: "Language", proficiency: 85 },
  { name: "Node.js", icon: "/stack/4.png", category: "Backend", proficiency: 82 },
  { name: "MongoDB", icon: "/stack/5.png", category: "Database", proficiency: 85 },
  { name: "PostgreSQL", icon: "/stack/6.png", category: "Database", proficiency: 87 },
  { name: "Docker", icon: "/stack/7.png", category: "DevOps", proficiency: 80 },
  { name: "AWS", icon: "/stack/8.png", category: "Cloud", proficiency: 78 },
  { name: "Kubernetes", icon: "/stack/9.png", category: "DevOps", proficiency: 75 },
  { name: "Python", icon: "/stack/10.png", category: "Language", proficiency: 80 },
  { name: "Next.js", icon: "/stack/11.png", category: "Framework", proficiency: 85 },
];

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-java-red mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Expertise across modern technologies and frameworks, with a focus on building scalable, 
            maintainable solutions that drive business success.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
              category={skill.category}
              proficiency={skill.proficiency}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
