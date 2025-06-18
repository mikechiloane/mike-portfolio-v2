"use client";
import {FC} from "react";
import FontWrapper from "@/app/components/FontWrapper";

interface ExperienceCardProps {
    title: string;
    date: string;
    company: string;
}


const ExperienceCard: FC<ExperienceCardProps> = ({title, date, company}) => {

    return (
        <div className="flex rounded h-[160px] flex-col justify-between py-6 px-4 bg-white text-white">
            <div>
                <p className="text-sm text-java-red font-bold">{date}</p>
                <FontWrapper><p className="text-2xl text-black">{title}</p></FontWrapper>
            </div>
            <div className="flex items-center gap-2">
                <h3 className="text-md font-medium text-black">{company}</h3>
            </div>
        </div>
    )
}

export default ExperienceCard;