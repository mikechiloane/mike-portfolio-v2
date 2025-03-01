import ResumeNavigator from "@/app/components/ResumeNavigator";
import React from "react";

export default function ResumeLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="flex gap-8 w-full flex-col md:flex-row">
            <ResumeNavigator/>

            {children}
        </div>

    );
}
