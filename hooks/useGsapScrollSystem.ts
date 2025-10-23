"use client";

import { useEffect } from "react";
import gsap, { type TweenVars } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type Config = {
  sectionSelector?: string;
  staggerSelector?: string;
  parallaxSelector?: string;
};

const revealVariants: Record<string, TweenVars> = {
  "tilt-up": { yPercent: 18, rotateX: 12, scale: 0.94 },
  "slide-left": { xPercent: 18, rotateY: 10, scale: 0.96 },
  "slide-right": { xPercent: -18, rotateY: -10, scale: 0.96 },
  lift: { yPercent: 14, scale: 0.9 },
};

const defaultConfig: Required<Config> = {
  sectionSelector: ".reveal-section",
  staggerSelector: "[data-gsap='stagger']",
  parallaxSelector: "[data-parallax]",
};

export const useGsapScrollSystem = (
  containerRef: React.RefObject<HTMLElement | null>,
  config: Config = {}
) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { sectionSelector, staggerSelector, parallaxSelector } = {
    ...defaultConfig,
    ...config,
  };

  useEffect(() => {
    const container = containerRef.current ?? document.body;
    if (!container) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const sections = container.querySelectorAll<HTMLElement>(sectionSelector);
    const staggerGroups = container.querySelectorAll<HTMLElement>(staggerSelector);
    const parallaxItems = container.querySelectorAll<HTMLElement>(parallaxSelector);

    if (prefersReducedMotion) {
      sections.forEach((section) => {
        section.style.removeProperty("opacity");
        section.style.removeProperty("transform");
        section.style.removeProperty("filter");
      });
      staggerGroups.forEach((group) => {
        group
          .querySelectorAll<HTMLElement>("[data-gsap-item]")
          .forEach((item) => {
            item.style.removeProperty("opacity");
            item.style.removeProperty("transform");
          });
      });
      parallaxItems.forEach((el) => {
        el.style.removeProperty("transform");
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      return;
    }

    const ctx = gsap.context(() => {
      // Section reveals
      gsap.utils.toArray<HTMLElement>(sectionSelector).forEach((section, index) => {
        const animateVariant =
          section.dataset.animate ?? (index % 2 === 0 ? "tilt-up" : "slide-left");
        const baseFrom = revealVariants[animateVariant] ?? revealVariants["tilt-up"];

        gsap.set(section, {
          ...baseFrom,
          filter: "blur(12px)",
          transformOrigin: "center center",
        });

        if (index === 0) {
          gsap.to(section, {
            xPercent: 0,
            yPercent: 0,
            x: 0,
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "expo.out",
            delay: 0.15,
            clearProps: "transform,filter",
          });
          return;
        }

        gsap.to(section, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          filter: "blur(0px)",
          ease: "expo.out",
          duration: 1.1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 30%",
            scrub: 0.8,
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(section, {
          yPercent: -6,
          scrollTrigger: {
            trigger: section,
            start: "center 65%",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });

      // Staggered groups
      gsap.utils.toArray<HTMLElement>(staggerSelector).forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-gsap-item]");
        if (!items.length) {
          return;
        }

        gsap.set(items, { opacity: 0, y: 32 });

        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            once: true,
          },
        });
      });

      // Parallax elements
      gsap.utils.toArray<HTMLElement>(parallaxSelector).forEach((element) => {
        const amount = Number(element.dataset.parallaxAmount ?? "0.15");

        gsap.to(element, {
          yPercent: amount * -100,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef, sectionSelector, staggerSelector, parallaxSelector, prefersReducedMotion]);
};
