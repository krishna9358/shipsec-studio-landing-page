"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export function TestimonialsMarquee({
  testimonials,
  speed = 40,
}: {
  testimonials: Testimonial[];
  speed?: number; // seconds for a full loop
}) {
  const items = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max items-stretch gap-8 pr-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {items.map((t, idx) => (
          <article
            key={`${t.name}-${idx}`}
            className="max-w-xl shrink-0 rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center gap-4">
              <img
                src={t.src}
                alt={t.name}
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
              <div>
                <h4 className="text-base font-semibold text-white">{t.name}</h4>
                <p className="text-xs text-slate-300">{t.designation}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-200">
              {t.quote}
            </p>
          </article>
        ))}
      </motion.div>
    </div>
  );
}


