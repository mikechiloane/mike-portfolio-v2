'use client';
import ExperienceData from "@/app/data/experience";
import ExperienceCard from "@/app/components/ExperienceCard";
import BricolageFontWrapper from "@/app/components/FontWrapper";
import PageContainer from "@/app/components/PageContainer";
import { motion } from "framer-motion";
import { FiBriefcase, FiTrendingUp } from "react-icons/fi";

const ExperiencePage = () => {
    return (
        <PageContainer>
            <div className="w-full space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <BricolageFontWrapper>
                        <h1 className="text-3xl lg:text-4xl font-bold text-java-red mb-4">
                            Professional Experience
                        </h1>
                    </BricolageFontWrapper>
                    <p className="text-text-secondary leading-relaxed max-w-4xl">
                        A seasoned software engineer with <span className="font-semibold text-java-blue">6+ years</span> of experience 
                        building enterprise-grade applications. I have a deep understanding of software development principles 
                        and a proven ability to lead projects and mentor teams across various industries.
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Timeline Line */}
                    <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-java-blue to-java-red"></div>
                    
                    <div className="space-y-8">
                        {ExperienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative lg:pl-20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden lg:flex absolute left-6 top-8 w-6 h-6 bg-white border-4 border-java-blue rounded-full items-center justify-center">
                                    <div className="w-2 h-2 bg-java-blue rounded-full"></div>
                                </div>
                                
                                <ExperienceCard 
                                    title={item.position} 
                                    date={item.year}
                                    company={item.company}
                                    description={item.desc}
                                    stack={item.stack}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Career Highlights */}
                <motion.div
                    className="bg-gradient-to-br from-java-blue/10 to-java-red/10 rounded-xl p-8 border border-border-color"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-java-blue to-java-red rounded-full flex items-center justify-center">
                            <FiTrendingUp className="text-white text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-text-primary">Career Highlights</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FiBriefcase className="text-java-blue text-lg mt-1" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">Technical Leadership</h3>
                                    <p className="text-text-secondary text-sm">Led migration of legacy systems to modern cloud architecture at Convergenc3</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FiBriefcase className="text-java-blue text-lg mt-1" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">Performance Optimization</h3>
                                    <p className="text-text-secondary text-sm">Built high-performance data processing systems at LexisNexis handling massive volumes</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FiBriefcase className="text-java-blue text-lg mt-1" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">Multi-Industry Experience</h3>
                                    <p className="text-text-secondary text-sm">Delivered solutions across healthcare, finance, e-commerce, and legal industries</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FiBriefcase className="text-java-blue text-lg mt-1" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">Full-Stack Expertise</h3>
                                    <p className="text-text-secondary text-sm">Comprehensive experience from backend systems to modern frontend frameworks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageContainer>
    )
}

export default ExperiencePage;