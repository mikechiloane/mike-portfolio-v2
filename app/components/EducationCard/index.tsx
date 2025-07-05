"use client";

import BricolageFontWrapper from "@/app/components/FontWrapper";
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

interface EducationCardProps {
    school: string;
    qualification: string;
    year: string;
    description?: string;
    achievements?: string[];
    location?: string;
}

const EducationCard = ({
    school, 
    qualification, 
    year, 
    description, 
    achievements,
    location
}: EducationCardProps) => {
    return (
        <div className="group flex flex-col h-full p-6 bg-white dark:bg-surface-secondary rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border-color hover:-translate-y-1 hover:scale-105">
            {/* Header */}
            <div className="mb-4">
                <div className="flex items-center gap-2 text-java-red font-semibold text-sm mb-3">
                    <FiCalendar className="text-base" />
                    {year}
                </div>
                <BricolageFontWrapper>
                    <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-java-blue transition-colors duration-300 mb-2">
                        {qualification}
                    </h3>
                </BricolageFontWrapper>
                <div className="flex items-center gap-2 mb-2">
                    <FiBookOpen className="text-java-blue" />
                    <span className="text-lg font-semibold text-java-blue">{school}</span>
                </div>
                {location && (
                    <div className="flex items-center gap-2">
                        <FiMapPin className="text-text-secondary text-sm" />
                        <span className="text-sm text-text-secondary">{location}</span>
                    </div>
                )}
            </div>

            {/* Description */}
            {description && (
                <div className="mb-4 flex-1">
                    <p className="text-text-secondary leading-relaxed">{description}</p>
                </div>
            )}

            {/* Achievements */}
            {achievements && achievements.length > 0 && (
                <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <FiAward className="text-java-yellow text-sm" />
                        <h4 className="text-sm font-semibold text-text-primary">Key Achievements:</h4>
                    </div>
                    <ul className="space-y-1">
                        {achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-text-secondary flex items-start gap-2">
                                <span className="text-java-yellow text-xs mt-1">•</span>
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default EducationCard;