"use client";
import Image from "next/image";

interface TechnologyCardProps {
    image: string;
}

const TechnologyCard = ({image}: TechnologyCardProps) => {
    return (
        <div className="flex relative items-center justify-center py-8 w-full bg-white">

           <div className="h-full w-[200px] relative p-8">
               <Image className="" src={image} alt={image} objectFit="contain" layout="fill"/>
           </div>
        </div>
    );
}

export default TechnologyCard;