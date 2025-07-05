'use client';
import BricolageFontWrapper from "@/app/components/FontWrapper";
import { EducationData } from "@/app/data/education";
import EducationCard from "@/app/components/EducationCard";
import PageContainer from "@/app/components/PageContainer";
import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiTarget } from "react-icons/fi";

const EducationPage = () => {
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
                            Educational Background
                        </h1>
                    </BricolageFontWrapper>
                    <p className="text-text-secondary leading-relaxed max-w-4xl">
                        A dedicated software engineer with a strong educational foundation in <span className="font-semibold text-java-blue">Computer Science</span>, 
                        continuously expanding my knowledge through hands-on experience and lifelong learning. 
                        My academic journey provided the theoretical foundation that I&apos;ve built upon with practical industry experience.
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Timeline Line */}
                    <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-java-blue to-java-red"></div>
                    
                    <div className="space-y-8">
                        {EducationData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative lg:pl-20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden lg:flex absolute left-6 top-8 w-6 h-6 bg-white border-4 border-java-red rounded-full items-center justify-center">
                                    <div className="w-2 h-2 bg-java-red rounded-full"></div>
                                </div>
                                
                                <EducationCard 
                                    school={item.school}
                                    qualification={item.qualification}
                                    year={item.year}
                                    description={item.description}
                                    achievements={item.achievements}
                                    location={item.location}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Educational Philosophy */}
                <motion.div
                    className="bg-gradient-to-br from-java-blue/10 to-java-red/10 rounded-xl p-8 border border-border-color"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-java-blue to-java-red rounded-full flex items-center justify-center">
                            <FiTarget className="text-white text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-text-primary">Learning Philosophy</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FiBookOpen className="text-java-blue text-lg mt-1" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">Continuous Learning</h3>
                                    <p className="text-text-secondary text-sm">Stay updated with latest technologies through courses, documentation, and hands-on practice</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FiAward className="text-java-blue text-lg mt-1" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">Practical Application</h3>
                                    <p className="text-text-secondary text-sm">Bridge academic knowledge with real-world problem-solving and industry best practices</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FiBookOpen className="text-java-blue text-lg mt-1" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">Knowledge Sharing</h3>
                                    <p className="text-text-secondary text-sm">Mentor junior developers and contribute to team knowledge through documentation and training</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FiAward className="text-java-blue text-lg mt-1" />
                                <div>
                                    <h3 className="font-semibold text-text-primary">Innovation Focus</h3>
                                    <p className="text-text-secondary text-sm">Apply academic foundations to create innovative solutions and explore emerging technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageContainer>
    )
}

export default EducationPage;