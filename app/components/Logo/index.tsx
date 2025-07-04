"use client";

import {Source_Code_Pro} from "next/font/google";

const font = Source_Code_Pro({
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
});


const Logo = () => {

    return (
            <div className={`${font.className} w-full h-full flex flex-row items-center justify-center`}>
                <p className="text-2xl font-bold text-java-blue  ">Mike</p><span
                className="font-extrabold text-java-red text-2xl">.</span>
            </div>
    )
}

export default Logo;