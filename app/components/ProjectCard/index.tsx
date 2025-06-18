"use client";
import StackTag from "@/app/components/StackTag";
import FontWrapper from "@/app/components/FontWrapper";

interface ProjectCardProps {
    projectName: string;
    desc: string;
    stack: string[];
}


export default function ProjectCard({projectName, desc, stack}: ProjectCardProps) {

    return (

        <div className="w-full text-java-red bg-white p-4 py-t pb-8 ">
            <div className="flex items-center gap-3">
                <FontWrapper><p className="text-2xl font-medium">{projectName}</p></FontWrapper>
            </div>
            <div className="mt-2">
                <FontWrapper><p className="text-sm leading-normal text-java-grey">{desc}</p></FontWrapper>
            </div>

            <div className="flex gap-2 flex-wrap mt-3">
                {
                    stack.map((stck, index) =>
                        <StackTag stack={stck} key={index}/>
                    )
                }

            </div>
        </div>
    )
}