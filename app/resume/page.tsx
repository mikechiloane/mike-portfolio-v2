'use client';
import { motion } from "framer-motion";
import { FiUser, FiBookOpen, FiCode, FiAward, FiDownload } from "react-icons/fi";
import Link from "next/link";
import BricolageFontWrapper from "@/app/components/FontWrapper";

const ResumePage = () => {
    const resumeStats = [
        { icon: FiUser, label: "Years Experience", value: "6+" },
        { icon: FiCode, label: "Technologies", value: "25+" },
        { icon: FiBookOpen, label: "Education", value: "BSc Computer Science" },
        { icon: FiAward, label: "Projects Delivered", value: "25+" }
    ];

    const quickLinks = [
        { href: "/resume/experience", title: "Experience", description: "Professional journey and achievements", icon: FiUser },
        { href: "/resume/education", title: "Education", description: "Academic background and qualifications", icon: FiBookOpen },
        { href: "/resume/technologies", title: "Technologies", description: "Technical skills and expertise", icon: FiCode }
    ];

    return (
        <div className="w-full space-y-12">
            {/* Header Section */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <BricolageFontWrapper>
                    <h1 className="text-4xl lg:text-6xl font-bold text-java-red mb-4">
                        Professional Resume
                    </h1>
                </BricolageFontWrapper>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                    Passionate Software Engineer with 6+ years of experience building scalable, 
                    secure applications using modern technologies and best practices.
                </p>
                
                {/* Download CV Button */}
                <motion.a 
                    href="/cv/Mike_CV.pdf" 
                    download
                    className="inline-flex items-center gap-3 bg-java-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <FiDownload className="text-xl" />
                    Download Full CV
                </motion.a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {resumeStats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="text-center p-6 bg-white dark:bg-surface-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-java-blue to-java-red rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                            <stat.icon />
                        </div>
                        <h3 className="text-3xl font-bold text-java-red mb-2">{stat.value}</h3>
                        <p className="text-text-secondary font-medium">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-java-blue mb-4">Explore My Background</h2>
                    <p className="text-text-secondary">Dive deeper into specific areas of my professional journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {quickLinks.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <motion.div
                                className="group p-8 bg-white dark:bg-surface-secondary rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border-color h-full"
                                whileHover={{ scale: 1.02, y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-java-blue to-java-red rounded-full flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <link.icon />
                                </div>
                                <h3 className="text-2xl font-bold text-text-primary group-hover:text-java-red transition-colors duration-300 mb-3">
                                    {link.title}
                                </h3>
                                <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                                    {link.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default ResumePage;