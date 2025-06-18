"use client";

import {IBM_Plex_Mono} from 'next/font/google';


const font = IBM_Plex_Mono({
    variable: "--font-ibm-plex-mono",
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600'],
});

export default function StackTag({stack}:{stack:string}) {

    return (
        <div className="bg-java-blue font-[500] w-fit px-4 text-[.8rem] py-1 rounded-full">
            <p className={`text-white font-medium ${font.className}`}>{stack}</p>
        </div>
    )
}