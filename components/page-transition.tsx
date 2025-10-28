"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Adjust animation duration and complexity based on device
  const duration = isMobile ? 0.6 : 0.8;
  const slideOffset = isMobile ? "50%" : "100%";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Top loading bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-blue-500 to-blue-700"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ 
            scaleX: [0, 1, 1, 1, 0],
            transformOrigin: ["left", "left", "left", "right", "right"],
          }}
          transition={{
            duration: duration * 2,
            times: [0, 0.4, 0.6, 0.8, 1],
            ease: "easeInOut",
          }}
        />

        {/* Main transition overlay */}
        <motion.div
          className="fixed inset-0 z-50 bg-white transform-gpu"
          variants={{
            initial: {
              x: "100%",
              opacity: 1,
            },
            animate: {
              x: "-100%",
              opacity: 1,
            },
            exit: {
              x: "-100%",
              opacity: 0,
            },
          }}
          transition={{
            duration: duration,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex h-full items-center justify-center">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1, 1, 0.8],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: duration,
                times: [0, 0.3, 0.7, 1],
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/logo-shipsec.png"
                  alt="ShipSecAI Logo"
                  className="w-full h-full object-contain"
                  width={100}
                  height={100}
/>
              </div>
              <span className="text-xl md:text-2xl font-bold">ShipSecAI</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Page content */}
        <motion.div
          variants={{
            initial: {
              opacity: 0,
              y: isMobile ? 10 : 20,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
            exit: {
              opacity: 0,
              y: isMobile ? -10 : -20,
            },
          }}
          transition={{
            duration: duration,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}