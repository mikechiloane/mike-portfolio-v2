"use client";
import {Bricolage_Grotesque} from "next/font/google";
import {ResumeNavItems} from "@/app/data/nav";
import Link from "next/link";
import React from "react";
import { FiUser, FiBookOpen, FiCode, FiHome } from "react-icons/fi";
import { usePathname } from "next/navigation";

const font = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"],
});

const iconMap = {
    experience: FiUser,
    education: FiBookOpen,
    technologies: FiCode,
    resume: FiHome
};

const ResumeNavigator = () => {
    const pathname = usePathname();
    const currentPage = pathname.split("/").pop() || "resume";

    return (
        <div className="w-full h-full flex flex-col md:max-w-sm">
            <div>
                <h2 className={`text-3xl lg:text-4xl font-bold text-java-red mb-4 ${font.className}`}>
                    Why hire me?
                </h2>
                <p className="text-text-secondary leading-relaxed mb-8">
                    I deliver clean, efficient code and adapt quickly to new technologies. 
                    I&apos;m a problem-solver who prioritizes collaboration and impactful results.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {/* Home/Overview Link */}
                <NavigatorButton 
                    href="/resume"
                    text="Overview" 
                    icon={FiHome}
                    active={currentPage === "resume"}
                />
                
                {/* Resume Navigation Items */}
                {ResumeNavItems.map((item, key) => (
                    <NavigatorButton  
                        key={key} 
                        href={`/resume/${item.toLowerCase()}`}
                        text={item} 
                        icon={iconMap[item as keyof typeof iconMap]}
                        active={currentPage === item}
                    />
                ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-java-blue/10 to-java-red/10 rounded-xl border border-border-color">
                <h3 className="font-bold text-text-primary mb-2">Quick Stats</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex justify-between">
                        <span>Experience:</span>
                        <span className="font-semibold text-java-red">6+ Years</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Projects:</span>
                        <span className="font-semibold text-java-red">25+</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Technologies:</span>
                        <span className="font-semibold text-java-red">25+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const NavigatorButton = ({ text, active, href, icon: Icon }: { 
    text: string; 
    active: boolean; 
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
    return (
        <Link href={href} prefetch={true}>
            <div
                className={`w-full py-4 px-6 rounded-xl flex items-center gap-3 transition-all duration-200 hover:scale-102 ${
                    active 
                        ? "bg-java-blue text-white shadow-lg" 
                        : "bg-white dark:bg-surface-secondary text-text-primary hover:bg-java-blue/10 dark:hover:bg-java-blue/20 border border-border-color"
                }`}
            >
                <Icon className={`text-xl ${active ? "text-white" : "text-java-blue"}`} />
                <p className={`text-lg capitalize font-medium ${active ? "text-white" : ""}`}>
                    {text}
                </p>
            </div>
        </Link>
    )
}

export default ResumeNavigator;