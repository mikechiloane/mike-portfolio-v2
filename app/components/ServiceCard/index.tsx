"use client";

import { ReactNode } from "react";
import { motion } from 'framer-motion';
import BricolageFontWrapper from "@/app/components/FontWrapper";

interface ServiceCardProps {
    title: string;
    description: string;
    children: ReactNode;
}

const ServiceCard = ({ title, description, children }: ServiceCardProps) => {
    return (
        <motion.div 
            className="group flex flex-col h-full p-8 bg-card-bg hover:bg-surface-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border-color"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div 
                className="flex items-center justify-center text-white text-2xl h-16 w-16 rounded-2xl bg-gradient-to-br from-java-blue to-java-red group-hover:scale-110 transition-transform duration-300 mb-6"
                whileHover={{ rotate: 5 }}
            >
                {children}
            </motion.div>
            
            <div className="flex-1">
                <BricolageFontWrapper>
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-java-red transition-colors duration-300 mb-4">
                        {title}
                    </h3>
                </BricolageFontWrapper>
                <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default ServiceCard;