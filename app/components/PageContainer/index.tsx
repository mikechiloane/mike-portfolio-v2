"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageContainerProps {
    children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
            duration: 0.2,
            ease: "easeOut"
        }}
        className="w-full h-full"
    >
        {children}
    </motion.div>
);

export default PageContainer;