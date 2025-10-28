"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down";
  offset?: number;
}

export function ParallaxSection({
  children,
  className = "",
  direction = "up",
  offset = 50,
}: ParallaxSectionProps) {
  const ref = useRef(null);
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Reduce parallax effect on mobile
  const mobileOffset = offset * 0.5;
  const effectiveOffset = isMobile ? mobileOffset : offset;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    // Disable parallax if reduced motion is preferred or if on mobile with reduced offset
    shouldReduceMotion ? [0, 0] : 
    direction === "up" ? [effectiveOffset, -effectiveOffset] : [-effectiveOffset, effectiveOffset]
  );

  return (
    <motion.div
      ref={ref}
      style={{ 
        y,
        // Use transform-gpu for better performance on mobile
        transform: "translateZ(0)",
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}