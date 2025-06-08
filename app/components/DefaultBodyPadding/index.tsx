import React from "react";
import FontWrapper from "@/app/components/FontWrapper";


const DefaultBodyPadding = ({children}: { children: React.ReactNode }) => {

    return (
        <div className="flex w-full h-full flex-col px-8  items-center mb-24">
            <div className="w-full max-w-[1290px]">
               <FontWrapper>{children}</FontWrapper>
            </div>
        </div>
    );
}

export default DefaultBodyPadding;