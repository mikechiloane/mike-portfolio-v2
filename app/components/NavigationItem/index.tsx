'use client'
import {setNavLinkActiveByClass} from "@/app/dom/nav";
import React from "react";
import Link from "next/link";

interface NavigationItemProps {
    name: string;
    onClick: () => void
}

const NavigationItem: React.FC<NavigationItemProps> = ({name, onClick}) => {

    const generateNavLink = (name: string) => {
        if (name === "home") {
            return "/";
        }
        return `/${name}`;
    }


    return (
        <Link href={generateNavLink(name)}>
            <div onClick={() => {
                setNavLinkActiveByClass(name);
                onClick();
            }} className="text-java-blue font-medium">
                <p className={`${name}-link capitalize`}>{name}</p>
                <div className={`h-[2px] w-full ${name}-line`}/>
            </div>
        </Link>
    )
}

export default NavigationItem;