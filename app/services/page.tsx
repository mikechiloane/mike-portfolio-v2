'use client';
import ServicesData from "@/app/data/servicesData";
import ServiceCard from "@/app/components/ServiceCard";
import BricolageFontWrapper from "@/app/components/FontWrapper";
import PageContainer from "../components/PageContainer";
import { motion } from 'framer-motion';

const ServicePage = () => {
    return (
        <PageContainer>
            <div className="w-full space-y-16">
                {/* Header Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <BricolageFontWrapper>
                        <h1 className="text-4xl lg:text-6xl font-bold text-java-red mb-4">
                            My Services
                        </h1>
                    </BricolageFontWrapper>
                    <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                        I offer a comprehensive range of software development services, from full-stack web applications 
                        to cloud solutions and technical consulting. Let&apos;s build something exceptional together.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {ServicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ServiceCard 
                                title={service.title} 
                                description={service.description}
                            >
                                <service.icon />
                            </ServiceCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center bg-gradient-to-br from-java-blue/10 to-java-red/10 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-java-blue mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how I can help bring your vision to life with modern, 
                        scalable solutions tailored to your needs.
                    </p>
                    <motion.a
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-java-red text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get In Touch
                        <span className="text-xl">→</span>
                    </motion.a>
                </motion.div>
            </div>
        </PageContainer>
    )
}

export default ServicePage;