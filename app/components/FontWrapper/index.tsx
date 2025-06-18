"use client";

import {Bricolage_Grotesque} from "next/font/google";
import React from "react";

const font = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"],
});


const BricolageFontWrapper = ({children}: Readonly<{ children: React.ReactNode }>) => {

    return (
        <div className={`${font.className} w-full`}>
            {children}
        </div>
    )
}

export default BricolageFontWrapper;