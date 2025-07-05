"use client";
import Image from "next/image";

interface TechnologyStack {
    name: string;
    image: string;
}

interface TechnologyCardProps {
    technology: TechnologyStack;
}

const TechnologyCard = ({technology}: TechnologyCardProps) => {
    return (
        <div className="flex relative items-center justify-center py-4 sm:py-6 w-full bg-white dark:bg-surface-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border-color group">
           <div className="h-12 w-12 sm:h-16 sm:w-16 relative">
               <Image 
                   className="object-contain group-hover:scale-110 transition-transform duration-300" 
                   src={technology.image} 
                   alt={technology.name} 
                   fill
               />
           </div>
           <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 text-center">
               <p className="text-xs font-medium text-text-secondary group-hover:text-java-blue transition-colors duration-300 px-1">
                   {technology.name}
               </p>
           </div>
        </div>
    );
}

export default TechnologyCard;