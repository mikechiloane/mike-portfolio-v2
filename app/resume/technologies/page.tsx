'use client';
import BricolageFontWrapper from "@/app/components/FontWrapper";
import {stackImages} from "@/app/data/stack";
import TechnologyCard from "@/app/components/TechnologyCard";
import PageContainer from "@/app/components/PageContainer";
import { motion } from "framer-motion";

export default function TechnologiesPage() {

    return (
        <PageContainer>
        <div className="w-full">
            <BricolageFontWrapper><p className="text-h1  text-java-red">Technologies</p></BricolageFontWrapper>
            <p className="text-sm mt-4 text-java-grey">I have worked with a wide range of technologies, including
                front-end frameworks, back-end development, and database management systems.</p>

            <div className="grid grid-cols-1 mt-8 md:grid-cols-3 gap-4">
                {stackImages.map((item, key) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: key * 0.1, duration: 0.5 }}
                    >
                        <TechnologyCard image={item} />
                    </motion.div>
                ))}
            </div>
        </div>
        </PageContainer>
    )
}