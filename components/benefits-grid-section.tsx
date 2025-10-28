"use client";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconRocket,
  IconBrain,
  IconRefresh,
  IconShieldCheck,
  IconScale,
  IconRobot,
} from "@tabler/icons-react";
import Image from "next/image";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Launch Faster",
    description:
      "Visually orchestrate autonomous agents without writing boilerplate code",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconRocket className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Reuse Intelligence",
    description:
      "Leverage pre-built AI components and workflows across your organization",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconBrain className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Iterate Rapidly",
    description:
      "Test and refine AI workflows in a safe sandbox environment",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconRefresh className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Prevent Breakdowns",
    description:
      "Built-in monitoring and failsafes keep your AI systems reliable",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconShieldCheck className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Scale Smarter",
    description:
      "Automatically scale resources based on demand and usage patterns",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconScale className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: "Automate More",
    description:
      "Connect AI agents to your existing tools and processes seamlessly",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconRobot className="h-5 w-5 text-neutral-500" />,
  },
];

export function BenefitsGridSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20">
      <div className="text-center mb-16">
        <p
          data-aos="fade-up"
          className="text-base text-red-500 mb-3"
        >
          Benefits
        </p>
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl font-bold mb-4"
        >
          Making Engineers 10x faster
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl text-neutral-600 dark:text-neutral-300"
        >
          We empower developers and technical teams to create, simulate, and
          manage AI-driven workflows visually
        </p>
      </div>

      {/* <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </BentoGrid> */}
      <Image src="/flow.png" width={1450} height={1100} alt="ptanhi" />
    </section>
  );
}
