"use client";

import { motion } from "framer-motion";
import { Shield, Webhook, Database, Cloud, Lock, Zap, AlertCircle, Server, KeyRound, FileCode, Mail, Terminal } from "lucide-react";

const integrationsRow1 = [
  { name: "Jira", icon: Webhook, color: "text-blue-600" },
  { name: "Slack", icon: Zap, color: "text-purple-600" },
  { name: "GitHub", icon: Server, color: "text-slate-800" },
  { name: "Okta", icon: Lock, color: "text-blue-500" },
  { name: "AWS", icon: Cloud, color: "text-orange-500" },
  { name: "Datadog", icon: AlertCircle, color: "text-indigo-600" },
];

const integrationsRow2 = [
  { name: "CrowdStrike", icon: Shield, color: "text-red-600" },
  { name: "Azure", icon: Cloud, color: "text-sky-600" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-700" },
  { name: "Splunk", icon: Database, color: "text-green-600" },
  { name: "OneLogin", icon: KeyRound, color: "text-teal-600" },
  { name: "GitLab", icon: FileCode, color: "text-orange-600" },
];

const integrationsRow3 = [
  { name: "SendGrid", icon: Mail, color: "text-blue-500" },
  { name: "Jenkins", icon: Terminal, color: "text-red-500" },
  { name: "PagerDuty", icon: AlertCircle, color: "text-green-500" },
  { name: "Auth0", icon: Lock, color: "text-orange-500" },
  { name: "Docker", icon: Cloud, color: "text-sky-500" },
  { name: "Kubernetes", icon: Server, color: "text-blue-600" },
];

const IntegrationRow = ({ integrations, direction = "left", duration = 40 }: { integrations: any[]; direction?: string; duration?: number }) => {
  const duplicated = [...integrations, ...integrations, ...integrations];

  return (
    <div className="relative">
      <motion.div
        animate={{
          x: direction === "left" ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
        className="flex gap-4"
      >
        {duplicated.map((integration, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex-shrink-0 w-40 h-16 bg-white rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-center gap-3 px-4 cursor-pointer transition-all hover:shadow-lg hover:border-emerald-300"
          >
            <integration.icon className={`w-6 h-6 ${integration.color}`} />
            <span className="text-sm font-bold text-slate-800">
              {integration.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Integrate with Your Favorite Tools
          </h2>
          <p className="text-slate-600 text-base">
            Connect with 100+ security and productivity tools
          </p>
        </motion.div>
      </div>

      <div className="relative space-y-4">
        <IntegrationRow integrations={integrationsRow1} direction="left" duration={35} />
        <IntegrationRow integrations={integrationsRow2} direction="right" duration={40} />
        <IntegrationRow integrations={integrationsRow3} direction="left" duration={45} />

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
