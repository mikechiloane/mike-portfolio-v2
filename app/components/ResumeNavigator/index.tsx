"use client";
import {Bricolage_Grotesque} from "next/font/google";
import {ResumeNavItems} from "@/app/data/nav";
import Link from "next/link";
import React from "react";

const font = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"],
});

const ResumeNavigator = () => {

    const [active, setActive] = React.useState("experience");
    const activate = (item: string) => {
        setActive(item);
    }

    return (
        <div className={`w-full h-full flex flex-col md:max-w-sm`}>
            <p className={`text-h1 font-bold text-java-red  ${font.className}`}>Why hire me?</p>
            <p>I deliver clean, efficient code and adapt quickly to new technologies. I&#39;m a problem-solver who
                prioritizes collaboration and impactful results.</p>
            <div className="flex flex-col gap-4 mt-8">
                {
                    ResumeNavItems.map((item, key) => <NavigatorButton activate={activate} active={active===item} key={key} text={item}/>)
                }
            </div>
        </div>
    )
}


const NavigatorButton = ({text,active,activate}: { text: string, active:boolean,activate:(item:string)=>void }) => {


    return (
        <Link  href={`/resume/${text.toLowerCase()}`}>
            <div onClick={()=>activate(text)} className={`w-full py-2 rounded flex items-center justify-center  ${active ? "bg-java-blue" : "bg-gray-800"} hover:bg-java-blue transition-all duration-300`}>
                <p className={`text-white text-xl capitalize font-medium`}>{text}</p>
            </div>
        </Link>
    )
}


export default ResumeNavigator;