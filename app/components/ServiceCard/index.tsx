"use client";

import {ReactNode} from "react";
import BricolageFontWrapper from "@/app/components/FontWrapper";

interface ServiceCardProps {
    title: string;
    description: string;
    children: ReactNode;
}

const ServiceCard = ({title, description, children}: ServiceCardProps) => {
    return (
        <div className="flex rounded flex-col  py-6 px-4 bg-white text-white">
            <div className="flex text-white items-center  text-xl h-10 w-10 rounded-full justify-center  bg-java-red">
                {children}
            </div>
            <div className="flex mt-2 flex-col justify-between">
               <BricolageFontWrapper><div className="text-xl font-medium text-java-red">{title}</div></BricolageFontWrapper>
                <p className="text-sm mt-3 text-java-grey">{description}</p>
            </div>

        </div>
    );
}

export default ServiceCard;