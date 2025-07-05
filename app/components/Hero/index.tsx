"use client";
import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiCode, FiZap } from 'react-icons/fi';
import Link from 'next/link';

const font = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"],
});

const Hero = () => {
    return (
        <div className="flex w-full flex-col lg:flex-row gap-16 items-center mt-16 pb-20 text-center lg:text-start">
            <MySummary />
            <MyPhoto />
        </div>
    )
}

function MyPhoto() {
    return (
        <motion.div 
            className="justify-center lg:justify-end flex"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <motion.div 
                className="relative h-[350px] w-[350px] lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden border-4 border-java-blue shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Image 
                    src="/me.JPG" 
                    alt="Mike Chiloane Profile" 
                    layout="fill" 
                    className="w-full h-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-java-blue/10 to-transparent" />
            </motion.div>
        </motion.div>
    );
}

function MySummary() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.div 
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                className={`${font.className} -mx-1 text-6xl lg:text-8xl font-bold`}
                variants={itemVariants}
            >
                <span className="text-java-red">Mike</span>
                <br />
                <span className="text-java-blue">Chiloane</span>
            </motion.div>

            <motion.div 
                className="flex items-center gap-2 mt-4 justify-center lg:justify-start"
                variants={itemVariants}
            >
                <FiCode className="text-java-yellow text-2xl" />
                <p className="text-xl font-semibold bg-gradient-to-r from-java-blue to-java-red bg-clip-text text-transparent">
                    Software Engineer
                </p>
                <FiZap className="text-java-yellow text-2xl" />
            </motion.div>

            <motion.div 
                className="text-lg mt-6 text-gray-600 dark:text-gray-300 max-w-[600px] leading-relaxed"
                variants={itemVariants}
            >
                <p>
                    Passionate Software Engineer with <span className="font-bold text-java-red">6+ years</span> of experience 
                    building scalable, secure, and data-driven applications. Specialized in modern full-stack development 
                    with expertise in <span className="font-semibold text-java-blue">Java, Spring Boot, React, and Cloud Technologies</span>.
                </p>
            </motion.div>

            <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
                variants={itemVariants}
            >
                <motion.a 
                    href="/cv/Mike_CV.pdf" 
                    download
                    className="group flex items-center gap-3 bg-java-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <FiDownload className="group-hover:animate-bounce" />
                    Download CV
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.div 
                    className="flex gap-4"
                    whileHover={{ scale: 1.05 }}
                >
                    <Link href="/work">
                        <motion.button 
                            className="flex items-center gap-2 bg-transparent border-2 border-java-red text-java-red px-6 py-4 rounded-full font-bold hover:bg-java-red hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Projects
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div 
                className="mt-8 flex gap-6 items-center justify-center lg:justify-start"
                variants={itemVariants}
            >
                <motion.a 
                    href="https://www.linkedin.com/in/mikechiloane/" 
                    target="_blank"
                    className="group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image 
                        src="/icons/linkedin.svg" 
                        width={50} 
                        height={50} 
                        alt="LinkedIn" 
                        className="group-hover:shadow-lg transition-all duration-300" 
                    />
                </motion.a>
                <motion.a 
                    href="https://github.com/mikechiloane" 
                    target="_blank"
                    className="group"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image 
                        src="/icons/github.svg" 
                        width={50} 
                        height={50} 
                        alt="GitHub" 
                        className="group-hover:shadow-lg transition-all duration-300" 
                    />
                </motion.a>
            </motion.div>
        </motion.div>
    );
}

export default Hero;