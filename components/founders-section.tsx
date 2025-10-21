"use client";

import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const founders = [
  {
    name: "Aseem Shrey",
    role: "Co-Founder & CEO",
    bio: "Security automation expert passionate about making security accessible to all teams.",
    image: "/image-aseem.webp",
    linkedin: "https://www.linkedin.com/in/aseem-shrey",
    github: "https://github.com/shipsecai",
  },
  {
    name: "Pranjal Paliwal",
    role: "Co-Founder & CTO",
    bio: "Building the future of no-code security automation and workflow orchestration.",
    image: "/image-pranjal.webp",
    linkedin: "https://www.linkedin.com/in/pranjal-paliwal",
    github: "https://github.com/shipsecai",
  },
];

export function FoundersSection() {
  return (
    <section id="founders" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Meet the Founders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Built by security experts who understand the challenges of modern cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {founder.name}
                </h3>
                <p className="text-sky-600 font-medium mb-3">
                  {founder.role}
                </p>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={founder.linkedin}
                    className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-600 flex items-center justify-center transition-colors group/icon"
                  >
                    <Linkedin className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                  </a>
                  <a
                    href={founder.github}
                    className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-800 flex items-center justify-center transition-colors group/icon"
                  >
                    <Github className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
