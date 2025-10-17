"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import Threads from "@/components/ui/threads";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <div className="bg-sky-50 text-sky-700 text-sm font-medium px-4 py-2 rounded-full border border-sky-200">
              Launch Week: New integrations available now
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Stop fighting your tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            ShipSecAI is your AI Security Copilot - a powerful no-code platform to build and deploy security automations.
            It comes with batteries included and supports all major security tools,
            cloud platforms, and a growing library of integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 h-12 text-base">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-700 hover:bg-slate-800 hover:text-white px-8 h-12 text-base group">
              <Github className="mr-2 w-5 h-5" />
              Star on GitHub
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              No credit card required
            </div>
            <div className="hidden sm:block">•</div>
            <div className="hidden sm:block">Free tier available</div>
            <div className="hidden sm:block">•</div>
            <div className="hidden sm:block">Deploy in minutes</div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
