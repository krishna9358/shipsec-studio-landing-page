import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { OrbitingCirclesDemo } from "./orbitalCircleDemo";
import { AnimatedListDemo } from "./animated-list-demo";
import { AnimatedBeamMultipleOutputDemo } from "./animated-beam-demo";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50" id="features">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base text-blue-600 font-semibold mb-3"
        >
          Security Features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700"
        >
          Comprehensive Security Analysis
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-600 max-w-3xl mx-auto"
        >
          Advanced security tools and methodologies to protect your applications at every layer
        </motion.p>
      </div>
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[24rem] px-6">

      {items.map((item, i) => (
          <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          />
        ))}
    </BentoGrid>
        </section>
  );
}

const items = [
  {
    title: "STRIDE Security Analysis",
    description: "Identify and mitigate security risks using the industry-standard STRIDE framework.",
    header: <div className="flex items-center justify-center w-full h-full rounded-xl overflow-hidden">
      <div className="h-[80px] flex items-center fill-contain">
        <Image src="/stride.webp" alt="STRIDE" width={780} height={80} />
      </div>
    </div>,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Security Checklist",
    description: "Prioritized security items with clear remediation steps.",
    header: <div className="w-full h-[180px] bg-gradient-to-br from-indigo-100 to-white p-6 rounded-xl flex items-center justify-center">
      <div className="w-full max-w-md">
        <AnimatedListDemo />
      </div>
    </div>,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Questions & Analysis",
    description: "Smart security questionnaire tailored to your architecture.",
    header: <div className="w-full h-[180px] rounded-xl flex items-center justify-center">
      <div className="w-full max-w-md scale-90">
        <AnimatedBeamMultipleOutputDemo />
      </div>
    </div>,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-emerald-500" />,
  },
  {
    title: "Data Security Overview",
    description: "Comprehensive data flow mapping and privacy risk analysis with LINDDUN methodology.",
    header: <div className="flex items-center justify-center w-full h-full rounded-xl overflow-hidden">
      <div className="h-[180px] flex items-center fill-contain">
        <Image src="/ds-zoomed.webp" alt="LINDDUN" width={780} height={180} />
      </div>
    </div>,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-cyan-500" />,
  },
];
