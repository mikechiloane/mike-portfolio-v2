"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationContextType {
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeNav, setActiveNav] = useState<string>('home');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setActiveNav("home");
    } else {
      const firstSegment = pathname.split('/')[1];
      if (firstSegment) {
        setActiveNav(firstSegment);
      }
    }
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
