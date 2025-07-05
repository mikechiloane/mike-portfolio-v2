'use client';
import BricolageFontWrapper from "@/app/components/FontWrapper";
import {
    stackWithNames,
    coreJavaStack,
    databaseStack,
    cloudDevopsStack,
    frontendStack,
    additionalStack
} from "@/app/data/stack";
import TechnologyCard from "@/app/components/TechnologyCard";
import PageContainer from "@/app/components/PageContainer";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiCloud, FiTool, FiSettings } from "react-icons/fi";

export default function TechnologiesPage() {
    // Organized technology categories using the predefined stacks
    const techCategories = [
        {
            title: "Core Java & JVM",
            icon: FiCode,
            technologies: coreJavaStack,
            description: "Core Java ecosystem and development tools"
        },
        {
            title: "Databases & Search", 
            icon: FiDatabase,
            technologies: databaseStack,
            description: "Data storage and search technologies"
        },
        {
            title: "Cloud & DevOps",
            icon: FiCloud,
            technologies: cloudDevopsStack,
            description: "Cloud platforms and deployment tools"
        },
        {
            title: "Frontend & Full-Stack",
            icon: FiTool,
            technologies: frontendStack,
            description: "Frontend frameworks and modern web technologies"
        },
        {
            title: "Additional Technologies",
            icon: FiSettings,
            technologies: additionalStack,
            description: "Additional backend and development tools"
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
                        I have extensive experience with <span className="font-semibold text-java-blue">Java ecosystem</span> technologies, 
                        complemented by modern frontend frameworks, cloud platforms, and DevOps tools. 
                        Here&apos;s my technical expertise organized by importance for Java development over <span className="font-semibold text-java-blue">6+ years</span> of professional experience.
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
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                                {category.technologies.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.4 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <TechnologyCard technology={tech} />
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
                    
                    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                        {stackWithNames.slice(0, 50).map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.02, duration: 0.3 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="transform transition-all duration-200"
                            >
                                <TechnologyCard technology={tech} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-text-secondary">
                            <span className="font-semibold text-java-blue">{Math.min(stackWithNames.length, 50)}</span> technologies displayed with 
                            <span className="font-semibold text-java-red"> Java ecosystem expertise</span> at the core
                        </p>
                        {stackWithNames.length > 50 && (
                            <p className="text-xs text-text-secondary mt-2">
                                Showing top 50 technologies (limited to 5 rows maximum)
                            </p>
                        )}
                    </div>
                </motion.div>
            </div>
        </PageContainer>
    )
}