'use client'
import React from "react";
import Link from "next/link";
import { useNavigation } from "@/app/context/navigation";

interface NavigationItemProps {
    name: string;
    onClick: () => void
}

const NavigationItem: React.FC<NavigationItemProps> = ({ name, onClick }) => {
    const { activeNav, setActiveNav } = useNavigation();
    const isActive = activeNav === name;

    const generateNavLink = (name: string) => {
        if (name === "home") {
            return "/";
        }
        if (name === "resume") {
            return "/resume";
        }
        return `/${name}`;
    }

    return (
        <Link 
            href={generateNavLink(name)} 
            prefetch={true}
            onClick={() => {
                setActiveNav(name);
                onClick();
            }}
        >
            <div className={`font-medium cursor-pointer group transition-colors duration-200 ${
                isActive ? 'text-java-red font-bold' : 'text-java-blue'
            }`}>
                <p className="capitalize">{name}</p>
                <div
                    className={`h-[2px] w-full transition-all duration-200 ease-out origin-left ${
                        isActive 
                            ? 'bg-java-red scale-x-100' 
                            : 'bg-java-blue scale-x-0 group-hover:scale-x-100'
                    }`}
                />
            </div>
        </Link>
    )
}

export default NavigationItem;