import ResumeNavigator from "@/app/components/ResumeNavigator";
import React from "react";

export default function ResumeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-java-blue/5 to-java-red/5">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex gap-8 w-full flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                        <ResumeNavigator />
                    </div>
                    <div className="lg:w-2/3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
