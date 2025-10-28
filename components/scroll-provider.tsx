"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { createContext, useContext, ReactNode } from "react";

interface ScrollContextType {
  scrollYProgress: any;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ScrollContext.Provider value={{ scrollYProgress }}>
      {/* Smooth progress bar at the top of the page */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />
      {children}
    </ScrollContext.Provider>
  );
}
