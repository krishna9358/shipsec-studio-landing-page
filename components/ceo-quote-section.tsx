"use client";

import { motion } from "framer-motion";
import { Building2, Quote } from "lucide-react";

export function CEOQuoteSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDQwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xNiAzNmMtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNCA0IDEuNzkgNCA0LTEuNzkgNC00IDR6bTQwIDBjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTQgNCAxLjc5IDQgNC0xLjc5IDQtNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Quote className="w-16 h-16 text-emerald-400 mx-auto mb-8 opacity-50" />

          <p className="text-3xl md:text-4xl font-medium text-white leading-relaxed mb-12 max-w-4xl mx-auto">
            "ShipSecAI has completely transformed the way we iterate and deploy security workflows. The no-code approach makes security automation accessible to everyone."
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Brendon Geils"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold text-white mb-1">Brendon Geils</p>
              <p className="text-slate-400 mb-4">CEO, Athena Intelligence</p>

              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-medium">Athena Intelligence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
