"use client";

import { useEffect } from "react";

export function KitFormSection() {
  useEffect(() => {
    // Load Kit Form script
    const script = document.createElement("script");
    script.src = "https://shipsec-ai.kit.com/7d4a911017/index.js";
    script.async = true;
    script.dataset.uid = "7d4a911017";
    
    // Add script to head instead of body for better compatibility
    document.head.appendChild(script);

    return () => {
      // Find and remove the script on unmount
      const existingScript = document.querySelector(`script[data-uid="7d4a911017"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="schedule-demo-form" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          data-aos="fade-up"
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-slate-900 md:text-7xl mb-6 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Schedule a demo to see how ShipSec AI can help secure your organization.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl mx-auto"
        >
          <div className="kit-form-container rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <div data-uid="7d4a911017"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
