"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Slack, Bug, Github, PenSquare } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type WorkflowStep = {
  title: string;
  description: string;
  indicator: string;
  badge: string;
  icon: React.ReactNode;
  highlights: string[];
};

const steps: WorkflowStep[] = [
  {
    title: "Detect security bugs directly inside Slack",
    description:
      "ShipSecAI listens to your engineering and incidents channels, spots risky reports in real-time, and enriches them with severity, context, and suggested next moves.",
    indicator: "Step 01",
    badge: "Slack Monitor",
    icon: <Slack className="h-5 w-5 text-violet-500" />,
    highlights: ["Triage threads in seconds", "Surface affected services", "Summarize reporter context"],
  },
  {
    title: "Open actionable GitHub issues without switching tools",
    description:
      "The agent files structured issues with reproduction steps, labels, and linked commits, so engineers can jump straight into fixes.",
    indicator: "Step 02",
    badge: "GitHub Automation",
    icon: <Github className="h-5 w-5 text-slate-800" />,
    highlights: ["Auto-assign the right squad", "Attach logs & traces", "Set impact-based priority"],
  },
  {
    title: "Sync remediation plans to Notion and notify stakeholders",
    description:
      "ShipSecAI writes concise postmortems, updates playbooks, and syncs the timeline to Notion so security leaders stay aligned.",
    indicator: "Step 03",
    badge: "Notion Sync",
    icon: <PenSquare className="h-5 w-5 text-emerald-500" />,
    highlights: ["Publish remediation checklist", "Track owner and due dates", "Send digest to exec channels"],
  },
];

export function AgentWorkflowSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const isLargeScreen =
      typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;

    const ctx = gsap.context(() => {
      const stepsEls = stepRefs.current.filter(Boolean);
      const cardsEls = cardRefs.current.filter(Boolean);

      if (!containerRef.current || !stepsEls.length || !cardsEls.length) {
        return;
      }

      if (prefersReducedMotion || !isLargeScreen) {
        stepsEls.forEach((el) => el?.style.removeProperty("opacity"));
        cardsEls.forEach((el) => {
          el?.style.removeProperty("opacity");
          el?.style.removeProperty("transform");
          el?.style.removeProperty("filter");
        });
        return;
      }

      gsap.set(stepsEls, { opacity: 0.35 });
      gsap.set(stepsEls[0], { opacity: 1 });
      gsap.set(cardsEls, { opacity: 0, yPercent: 20, scale: 0.94, filter: "blur(12px)" });
      gsap.set(cardsEls[0], { opacity: 1, yPercent: 0, scale: 1, filter: "blur(0px)" });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 0.9 },
        scrollTrigger: {
          id: "agent-workflow",
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      stepsEls.slice(1).forEach((_, index) => {
        const currentIndex = index + 1;
        const previousIndex = index;

        timeline
          .addLabel(`step-${currentIndex}`)
          .to(stepsEls[previousIndex], { opacity: 0.35, duration: 0.4 }, `step-${currentIndex}`)
          .to(stepsEls[currentIndex], { opacity: 1, duration: 0.4 }, `step-${currentIndex}`)
          .to(
            cardsEls[previousIndex],
            { opacity: 0, yPercent: -16, scale: 0.9, filter: "blur(16px)", duration: 0.8 },
            `step-${currentIndex}`
          )
          .fromTo(
            cardsEls[currentIndex],
            { opacity: 0, yPercent: 24, scale: 0.92, filter: "blur(16px)" },
            { opacity: 1, yPercent: 0, scale: 1, filter: "blur(0px)", duration: 1.05 },
            `step-${currentIndex}`
          );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative bg-slate-950 py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-900/30 opacity-90" />
      <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div ref={containerRef} className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-emerald-300 ring-1 ring-white/10 backdrop-blur">
                <Bug className="h-4 w-4" />
                ShipSecAI Agent Play
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Use an AI agent to catch bugs in Slack, file GitHub issues, and ship fixes faster.
              </h2>
              <p className="max-w-xl text-base text-slate-200/80 md:text-lg">
                Scroll to watch the workflow unfold. ShipSecAI keeps your entire response loop on a single screen so teams never miss a critical signal.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  ref={(el) => {
                    if (el) {
                      stepRefs.current[index] = el;
                    }
                  }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex flex-col items-center">
                      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                        {step.indicator}
                      </span>
                      {index < steps.length - 1 && (
                        <span className="mt-3 h-10 w-px bg-gradient-to-b from-emerald-300/60 via-white/10 to-transparent" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-white">{step.title}</h3>
                      <p className="text-sm text-slate-200/80">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] w-full lg:h-[480px]">
            {steps.map((step, index) => (
              <div
                key={`${step.title}-card`}
                ref={(el) => {
                  if (el) {
                    cardRefs.current[index] = el;
                  }
                }}
                className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_40px_120px_-40px_rgba(15,118,110,0.4)] backdrop-blur-2xl"
                style={{ zIndex: steps.length - index }}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    {step.icon}
                    {step.badge}
                  </span>
                  <span className="text-xs font-medium text-white/60">
                    Live agent · {index + 1} of {steps.length}
                  </span>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-white/70">{step.description}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm font-medium uppercase tracking-wide text-emerald-200">
                      Agent actions
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                      {step.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute inset-x-6 bottom-6">
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span>Auto-synced to GitHub & Notion</span>
                    <span>Latency &lt; 3s</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
