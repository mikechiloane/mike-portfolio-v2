"use client";
import StackTag from "@/app/components/StackTag";
import FontWrapper from "@/app/components/FontWrapper";
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

interface ProjectCardProps {
    projectName: string;
    desc: string;
    stack: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}

export default function ProjectCard({
    projectName, 
    desc, 
    stack, 
    githubUrl, 
    liveUrl, 
    featured = false
}: ProjectCardProps) {
    return (
        <motion.div
            className={`group relative bg-white dark:bg-surface-secondary rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border-color overflow-hidden ${
                featured ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Featured Badge */}
            {featured && (
                <div className="absolute top-4 right-4 bg-java-yellow text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                </div>
            )}
            
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-java-blue/5 to-java-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-java-blue to-java-red rounded-lg flex items-center justify-center text-white">
                            <FiCode size={24} />
                        </div>
                        <FontWrapper>
                            <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-java-red transition-colors duration-300">
                                {projectName}
                            </h3>
                        </FontWrapper>
                    </div>
                    
                    <div className="flex gap-2">
                        {githubUrl && (
                            <motion.a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-java-blue hover:text-white transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiGithub size={18} />
                            </motion.a>
                        )}
                        {liveUrl && (
                            <motion.a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-java-red hover:text-white transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiExternalLink size={18} />
                            </motion.a>
                        )}
                    </div>
                </div>

                <div className="mb-6">
                    <FontWrapper>
                        <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                            {desc}
                        </p>
                    </FontWrapper>
                </div>

                <div className="flex gap-2 flex-wrap">
                    {stack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <StackTag stack={tech} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}