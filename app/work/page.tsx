"use client";

import FontWrapper from "@/app/components/FontWrapper";
import projectData from "@/app/data/projectData";
import ProjectCard from "@/app/components/ProjectCard";
import PageContainer from "../components/PageContainer";
import { motion } from 'framer-motion';

export default function Page() {
    const featuredProjects = projectData.filter(project => project.featured);
    const otherProjects = projectData.filter(project => !project.featured);

    return (
        <PageContainer>
            <div className="space-y-16">
                {/* Header Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <FontWrapper>
                        <h1 className="text-4xl lg:text-6xl font-bold text-java-red mb-4">
                            My Projects
                        </h1>
                    </FontWrapper>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                        A showcase of my work spanning enterprise applications, open-source contributions, 
                        and innovative solutions across various industries and technologies.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <FontWrapper>
                            <h2 className="text-3xl font-bold text-java-blue mb-8">Featured Projects</h2>
                        </FontWrapper>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    projectName={project.name}
                                    desc={project.description}
                                    stack={project.technologies}
                                    githubUrl={project.githubUrl}
                                    liveUrl={project.liveUrl}
                                    featured={project.featured}
                                />
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Other Projects */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <FontWrapper>
                        <h2 className="text-3xl font-bold text-java-blue mb-8">All Projects</h2>
                    </FontWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                projectName={project.name}
                                desc={project.description}
                                stack={project.technologies}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                                featured={project.featured}
                            />
                        ))}
                    </div>
                </motion.section>
            </div>
        </PageContainer>
    )
}