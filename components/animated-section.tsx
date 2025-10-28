"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
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

  // Adjust animation values for mobile
  const yOffset = isMobile ? 25 : 50;
  const duration = isMobile ? 0.6 : 0.8;

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        y: shouldReduceMotion ? 0 : yOffset,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: shouldReduceMotion ? 0 : yOffset }
      }
      transition={{
        duration: duration,
        delay: isMobile ? delay * 0.5 : delay, // Reduce delay on mobile
        ease: [0.21, 0.45, 0.27, 0.99],
      }}
      className={`transform-gpu ${className}`} // Add transform-gpu for better mobile performance
    >
      {children}
    </motion.div>
  );
}