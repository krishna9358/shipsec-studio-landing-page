"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for small teams getting started with security automation",
    features: [
      "Up to 5 workflows",
      "10 integrations",
      "1,000 monthly executions",
      "Community support",
      "Basic templates",
      "7-day activity logs",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    description: "For growing teams that need advanced automation capabilities",
    features: [
      "Unlimited workflows",
      "50+ integrations",
      "50,000 monthly executions",
      "Priority support",
      "Advanced templates",
      "30-day activity logs",
      "Custom connectors",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    description: "For organizations requiring enterprise-grade security and scale",
    features: [
      "Everything in Professional",
      "Unlimited executions",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantees",
      "SSO & SAML",
      "Audit logs",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your team's needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-sky-500 shadow-2xl shadow-sky-200/50"
                  : "border border-slate-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600">/ {plan.period}</span>
                </div>
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.popular
                    ? "bg-sky-600 hover:bg-sky-700 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-4">
            All plans include 14-day free trial. No credit card required.
          </p>
          <a href="#" className="text-sky-600 hover:text-sky-700 font-medium">
            Compare all features →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
