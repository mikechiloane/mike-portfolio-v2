'use client';
import BricolageFontWrapper from "@/app/components/FontWrapper";
import {stackImages} from "@/app/data/stack";
import TechnologyCard from "@/app/components/TechnologyCard";
import PageContainer from "@/app/components/PageContainer";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiCloud, FiTool } from "react-icons/fi";

export default function TechnologiesPage() {
    // Group technologies by category for better organization
    const techCategories = [
        {
            title: "Frontend Development",
            icon: FiCode,
            technologies: stackImages.slice(0, 7), // Adjust based on your stack
            description: "Modern frontend frameworks and libraries"
        },
        {
            title: "Backend Development", 
            icon: FiDatabase,
            technologies: stackImages.slice(7, 14),
            description: "Server-side technologies and frameworks"
        },
        {
            title: "Cloud & DevOps",
            icon: FiCloud,
            technologies: stackImages.slice(14, 21),
            description: "Cloud platforms and deployment tools"
        },
        {
            title: "Tools & Others",
            icon: FiTool,
            technologies: stackImages.slice(21),
            description: "Development tools and additional technologies"
        }
    ];

    return (
        <PageContainer>
            <div className="w-full space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <BricolageFontWrapper>
                        <h1 className="text-3xl lg:text-4xl font-bold text-java-red mb-4">
                            Technical Skills & Technologies
                        </h1>
                    </BricolageFontWrapper>
                    <p className="text-text-secondary leading-relaxed max-w-4xl">
                        I have worked with a diverse range of technologies across the full software development stack, 
                        from modern frontend frameworks to robust backend systems, cloud platforms, and DevOps tools. 
                        Here&apos;s an overview of my technical expertise built over <span className="font-semibold text-java-blue">6+ years</span> of professional experience.
                    </p>
                </motion.div>

                {/* Technology Categories */}
                <div className="space-y-12">
                    {techCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-java-blue to-java-red rounded-full flex items-center justify-center">
                                    <category.icon className="text-white text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-text-primary">{category.title}</h2>
                                    <p className="text-text-secondary">{category.description}</p>
                                </div>
                            </div>

                            {/* Technology Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.technologies.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.4 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <TechnologyCard image={item} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* All Technologies Overview */}
                <motion.div
                    className="bg-gradient-to-br from-java-blue/10 to-java-red/10 rounded-xl p-8 border border-border-color"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-java-blue to-java-red rounded-full flex items-center justify-center">
                            <FiCode className="text-white text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-text-primary">Complete Technology Stack</h2>
                    </div>
                    
                    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
                        {stackImages.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.02, duration: 0.3 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="transform transition-all duration-200"
                            >
                                <TechnologyCard image={item} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-text-secondary">
                            <span className="font-semibold text-java-blue">{stackImages.length}+</span> technologies mastered across 
                            <span className="font-semibold text-java-red"> 6+ years</span> of professional development
                        </p>
                    </div>
                </motion.div>
            </div>
        </PageContainer>
    )
}