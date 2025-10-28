"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Slide overlay */}
        <motion.div
          className="fixed inset-0 z-50 bg-white"
          variants={{
            initial: {
              x: "100%",
              width: "100%",
            },
            animate: {
              x: "0%",
              width: "0%",
            },
            exit: {
              x: ["0%", "100%"],
              width: ["0%", "100%"],
            },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Logo transition */}
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          variants={{
            initial: {
              x: "0%",
              width: "100%",
            },
            animate: {
              x: "0%",
              width: "0%",
            },
            exit: {
              x: "0%",
              width: "100%",
            },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            variants={{
              initial: {
                opacity: 1,
                scale: 1,
              },
              animate: {
                opacity: 0,
                scale: 0.8,
              },
              exit: {
                opacity: 1,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14">
                <img
                  src="/logo-shipsec.png"
                  alt="ShipSecAI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-3xl font-bold">ShipSecAI</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Page content */}
        <motion.div
          variants={{
            initial: {
              opacity: 0,
              y: 20,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
            exit: {
              opacity: 0,
              y: -20,
            },
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
