"use client";

import { motion } from "framer-motion";
import { Workflow, Eye, Puzzle, Blocks } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const features = [
  {
    icon: Workflow,
    title: "Drag-and-Drop Workflow Builder",
    description: "Build complex security automations with an intuitive visual interface. Connect triggers, actions, and conditions without writing code. Create sophisticated workflows in minutes, not hours.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring & Alerts",
    description: "Monitor security events as they happen with live dashboards. Get instant notifications when threats are detected. Track remediation progress across your entire security stack.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    icon: Puzzle,
    title: "Pre-Built Templates & Components",
    description: "Access a library of ready-to-use workflow templates for common security scenarios. From user offboarding to incident response, get started instantly with battle-tested automations.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: Blocks,
    title: "Custom Component Builder",
    description: "Can't find what you need? Build your own custom components with our visual builder. Extend SecureFlow's capabilities to match your unique security requirements without touching code.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Build Faster with No Code
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ShipSecAI gives you everything you need to automate security workflows without writing a single line of code
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollStack itemDistance={150} onStackComplete={() => {}}>
          {features.map((feature, index) => (
            <ScrollStackItem
              key={feature.title}
              itemClassName={`${feature.bgColor} ${feature.borderColor} border-2 rounded-3xl shadow-xl transition-all`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed">
                {feature.description}
              </p>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
