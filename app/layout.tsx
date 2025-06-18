
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import NavigationBar from "@/app/components/NavigationBar";
import DefaultBodyPadding from "@/app/components/DefaultBodyPadding";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
    title: "Mike Chiloane Portfolio Site",
    description: "Built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en ">
        <body
            className={`${geistSans.className} ${geistMono.variable} antialiased suppressHyrationWarning  flex relative overflow-hidden overflow-y-scroll`}
        >

        <DefaultBodyPadding>
            <NavigationBar/>
            {children}
        </DefaultBodyPadding>
        </body>
        </html>
    );
}
