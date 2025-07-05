"use client";
import {FC} from "react";
import FontWrapper from "@/app/components/FontWrapper";
import StackTag from "@/app/components/StackTag";
import { FiCalendar, FiBriefcase, FiMapPin } from "react-icons/fi";

interface ExperienceCardProps {
    title: string;
    date: string;
    company: string;
    description?: string;
    stack?: string[];
    location?: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
    title, 
    date, 
    company, 
    description, 
    stack,
    location
}) => {
    return (
        <div className="group flex flex-col h-full p-6 bg-white dark:bg-surface-secondary rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border-color hover:-translate-y-1 hover:scale-105">
            {/* Header */}
            <div className="mb-4">
                <div className="flex items-center gap-2 text-java-red font-semibold text-sm mb-2">
                    <FiCalendar className="text-base" />
                    {date}
                </div>
                <FontWrapper>
                    <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-java-blue transition-colors duration-300">
                        {title}
                    </h3>
                </FontWrapper>
                <div className="flex items-center gap-2 mt-2">
                    <FiBriefcase className="text-java-blue" />
                    <span className="text-lg font-semibold text-java-blue">{company}</span>
                </div>
                {location && (
                    <div className="flex items-center gap-2 mt-1">
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

            {/* Tech Stack */}
            {stack && stack.length > 0 && (
                <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                        {stack.slice(0, 8).map((tech, index) => (
                            <StackTag key={index} stack={tech} />
                        ))}
                        {stack.length > 8 && (
                            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-text-secondary px-2 py-1 rounded-full">
                                +{stack.length - 8} more
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExperienceCard;