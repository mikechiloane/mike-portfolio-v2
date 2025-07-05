"use client";
import NavigationItem from "@/app/components/NavigationItem";
import Logo from "@/app/components/Logo";
import ThemeToggle from "@/app/components/ThemeToggle";
import { NavigationItems } from "@/app/data/nav";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

const NavigationBar = () => {
    const [smNavOpen, setSmNavOpen] = useState<boolean>(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        if (!isMobile) {
            setSmNavOpen(false);
        }
    }, [isMobile]); 

    const toggleSmNavBar = () => {
        setSmNavOpen(!smNavOpen);
    }

    const closeSmNavBar = () => {
        setSmNavOpen(false);
    }

    return (
        <nav className="w-full relative">
            <div className="w-full md:min-w-full items-center flex relative justify-between py-8">
                <Link href="/">
                    <div className="w-full flex items-center gap-2">
                        <Image className="-mt-2" alt="java" height={20} width={22} src="/java.png" />
                        <Logo />
                    </div>
                </Link>

                <div className="hidden md:flex space-x-8 text-body text-white items-center">
                    {NavigationItems.map((item, index) => (
                        <NavigationItem name={item} key={index} onClick={closeSmNavBar} />
                    ))}
                    <ThemeToggle />
                </div>
                
                <button 
                    className="flex items-center justify-center md:hidden"
                    onClick={toggleSmNavBar}
                    aria-label={smNavOpen ? "Close menu" : "Open menu"}
                >
                    {!smNavOpen ? (
                        <IoMenu className="text-3xl text-java-blue" />
                    ) : (
                        <span className="text-2xl font-bold text-java-red">✕</span>
                    )}
                </button>
            </div>
            
            <AnimatePresence>
                {smNavOpen && (
                    <motion.div
                        className="w-full z-50 h-fit absolute bg-background md:hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div className="flex text-lg flex-col items-end gap-2 py-4">
                            {NavigationItems.map((item, index) => (
                                <NavigationItem name={item} key={index} onClick={closeSmNavBar} />
                            ))}
                            <div className="mt-4">
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default NavigationBar;