"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { unstable_ViewTransition as ViewTransition } from 'react';


interface PageContainerProps {
    children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => (
    <ViewTransition>

        <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{
            opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            y: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
            }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    </ViewTransition>
);

export default PageContainer;