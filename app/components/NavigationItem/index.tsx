'use client'
import { unstable_ViewTransition as ViewTransition } from 'react';
import { setNavLinkActiveByClass } from "@/app/dom/nav";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavigationItemProps {
    name: string;
    onClick: () => void
}

const NavigationItem: React.FC<NavigationItemProps> = ({ name, onClick }) => {

    const generateNavLink = (name: string) => {
        if (name === "home") {
            return "/";
        }
        if (name === "resume") {
            return "/resume/experience";
        }
        return `/${name}`;
    }


    return (
        <ViewTransition>
            <Link action-name={`Clicked on ${name}`} href={generateNavLink(name)}>
                <div
                    onClick={() => {
                        setNavLinkActiveByClass(name);
                        onClick();
                    }}
                    className="text-java-blue font-medium cursor-pointer"
                >
                    <p className={`${name}-link capitalize`}>{name}</p>
                    <motion.div
                        className={`h-[2px] w-full `}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ originX: 0, background: "#0070f3" }}
                    />
                </div>
            </Link>
        </ViewTransition>
    )
}

export default NavigationItem;