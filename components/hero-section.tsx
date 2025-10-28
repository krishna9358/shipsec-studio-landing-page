"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Threads from "@/components/ui/threads";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline").then(m => m.default), {
  ssr: false,
});

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden  bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-2 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
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
              className="text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed"
            >
              ShipSecAI is your AI Security Copilot - a powerful no-code platform to build and deploy security automations.
              It comes with batteries included and supports all major security tools,
              cloud platforms, and a growing library of integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4"
            >
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-800 text-white px-8 h-12 text-base"
                onClick={() => window.open('https://cal.com/aseem-shipsec', '_blank')}
              >
                Book a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-700 hover:bg-slate-800 hover:text-white px-8 h-12 text-base group" onClick={() => window.open('https://github.com/shipsecai', '_blank')}>
                <Github className="mr-2 w-5 h-5" />
                Star on GitHub
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex items-center justify-start gap-8 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">

                {/* <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> */}
              {/* <div className="hidden sm:block">•</div> */}

                30-minute demo
              </div>
              <div className="hidden sm:block">•</div>
              <div className="hidden sm:block">Live product walkthrough</div>
              <div className="hidden sm:block">•</div>
              <div className="hidden sm:block">Q&A session</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[420px] md:h-[520px] lg:h-[600px]"
          >
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/M5rYyi5o5MAic14X/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
                className="mt-10 pointer-events-none bg-white"
              />
      
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
