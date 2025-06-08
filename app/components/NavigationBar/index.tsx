"use client";
import NavigationItem from "@/app/components/NavigationItem";
import Logo from "@/app/components/Logo";
import {NavigationItems} from "@/app/data/nav";
import Image from "next/image";
import {IoMenu} from "react-icons/io5";
import {useEffect, useState} from "react";
import Link from "next/link";
import {setNavLinkActiveByClass} from "@/app/dom/nav";

const NavigationBar = () => {
    const [smNavOpen, setSmNavOpen] = useState<boolean>(false);

    const openSmNavBar = () => {
        setSmNavOpen(!smNavOpen);
    }

    const closeSmNavBar = () => {
        setSmNavOpen(false);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the breakpoint as needed

        const handleResize = (e: MediaQueryListEvent) => {
            if (e.matches) {
                setSmNavOpen(false);
            }
        }

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        }
    }, []);


    useEffect(() => {
        const currentPath = window.location.pathname;
        console.log("Current Path:", currentPath);
        if( currentPath === "/") {
            setNavLinkActiveByClass("home");
        }
        else {
            const firstSegment = window.location.pathname.split('/')[1];
            if (NavigationItems.includes(firstSegment)){
                setNavLinkActiveByClass(firstSegment);
            }
        }

        // setNavLinkActiveByClass();
    }, []);

    return (
        <div className="w-full relative">
            <div className="w-full md:min-w-full items-center flex relative justify-between py-8">
                <Link href="/">

                    <div className="w-full flex items-center gap-2">
                        <Image className="-mt-2" alt="java" height={20} width={22} src="/java.png"/><Logo/>
                    </div>
                </Link>

                <div className="hidden md:flex  space-x-8 text-body text-white">
                    {NavigationItems.map((item, index) => (
                        <NavigationItem name={item} key={index} onClick={closeSmNavBar}/>
                    ))}
                </div>
                <div className="flex items-center justify-center md:hidden">
                    {!smNavOpen ? (
                        <IoMenu onClick={openSmNavBar} className="text-3xl text-java-blue"/>
                    ) : (
                        <p onClick={closeSmNavBar} className="text-2xl font-bold text-java-red">X</p>
                    )}
                </div>
            </div>
            {smNavOpen && (
                <div className="w-full z-50 h-fit absolute bg-background md:hidden">
                    <div className="flex text-lg flex-col items-end gap-2">
                        {NavigationItems.map((item, index) => (
                            <NavigationItem name={item} key={index} onClick={closeSmNavBar}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavigationBar;