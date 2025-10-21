"use client";

import React, { useEffect, useRef } from 'react';
import {
  IconBrandSlack,
  IconBrandGithub,
  IconBrandGmail,
} from "@tabler/icons-react";
import gsap from 'gsap';

function Box({
  title,
  caption,
  children,
  className,
  delay = 0,
}: {
  title: string;
  caption?: string;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { 
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay,
          ease: "power2.out"
        }
      );
    });
    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={boxRef}
      className={`rounded-2xl border border-slate-200/50 bg-white/90 px-6 py-5 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-200
        transition-all duration-300 ease-in-out ${className ?? ''}`}
    >
      <div className="text-base font-semibold text-slate-800">{title}</div>
      {children ? <div className="mt-4">{children}</div> : null}
      {caption ? (
        <div className="mt-3 text-sm text-slate-500 leading-relaxed">{caption}</div>
      ) : null}
    </div>
  );
}

export default function TestingArrow() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate paths
      gsap.fromTo(
        "#path1",
        { 
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          opacity: 0
        },
        { 
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.3,
          ease: "power2.out"
        }
      );

      gsap.fromTo(
        "#path2",
        { 
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          opacity: 0
        },
        { 
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.9,
          ease: "power2.out"
        }
      );

      gsap.fromTo(
        "#path3",
        { 
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          opacity: 0
        },
        { 
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          delay: 1.5,
          ease: "power2.out"
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative mx-auto my-12 h-[680px] w-full max-w-5xl overflow-hidden">
      {/* Background with gradient and mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),rgba(14,165,233,0.05),transparent)] rounded-3xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIyOSwgMjMxLCAyMzUsIDAuNikiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      {/* SVG arrows overlay */}
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <marker id="arrow-emerald" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669" />
          </marker>
          <marker id="arrow-sky" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7" />
          </marker>
          <marker id="arrow-slate" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
          </marker>
        </defs>

        {/* ShipSec Studio -> Integrations */}
        <path
          id="path1"
          d="M680,120 C 800,120 900,200 900,280"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          markerEnd="url(#arrow-emerald)"
        />

        {/* Integrations -> Users */}
        <path
          id="path2"
          d="M900,380 C 900,460 400,460 300,520"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          markerEnd="url(#arrow-sky)"
        />

        {/* Users -> Final Output */}
        <path
          id="path3"
          d="M380,620 C 500,620 800,660 900,720"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="2"
          markerEnd="url(#arrow-slate)"
        />

        {/* Gradient definitions */}
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </svg>

      {/* Boxes */}
      <div className="absolute left-[20%] top-12">
        <Box
          title="ShipSec Studio"
          caption="Orchestrate security workflows with our no-code builder"
          className="w-[280px]"
          delay={0}
        >
          <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Policies • Triggers • Rules
          </div>
        </Box>
      </div>

      <div className="absolute right-[10%] top-[220px]">
        <Box
          title="Integrations"
          caption="Connect with your existing tools and platforms"
          className="w-[340px]"
          delay={0.6}
        >
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="flex flex-col items-center gap-2">
              <IconBrandSlack size={32} className="text-[#611f69]" />
              <div className="text-xs text-slate-600">Slack</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconBrandGmail size={32} className="text-[#ea4335]" />
              <div className="text-xs text-slate-600">Gmail</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#0052cc] text-white grid place-items-center text-xs font-bold">A</div>
              <div className="text-xs text-slate-600">Atlassian</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconBrandGithub size={32} className="text-slate-900" />
              <div className="text-xs text-slate-600">GitHub</div>
            </div>
          </div>
        </Box>
      </div>

      <div className="absolute left-[15%] top-[480px]">
        <Box
          title="Users & Teams"
          caption="Collaborate with your security and development teams"
          className="w-[340px]"
          delay={1.2}
        >
          <div className="flex -space-x-2 overflow-hidden">
            <div className="inline-flex h-10 w-10 rounded-full ring-2 ring-white bg-emerald-100 text-emerald-700 items-center justify-center text-sm font-medium">AM</div>
            <div className="inline-flex h-10 w-10 rounded-full ring-2 ring-white bg-sky-100 text-sky-700 items-center justify-center text-sm font-medium">SE</div>
            <div className="inline-flex h-10 w-10 rounded-full ring-2 ring-white bg-violet-100 text-violet-700 items-center justify-center text-sm font-medium">DE</div>
            <div className="inline-flex h-10 w-10 rounded-full ring-2 ring-white bg-amber-100 text-amber-700 items-center justify-center text-sm font-medium">PM</div>
            <div className="inline-flex h-10 w-10 rounded-full ring-2 ring-white bg-slate-100 text-slate-700 items-center justify-center text-sm font-medium">+3</div>
          </div>
        </Box>
      </div>

      <div className="absolute right-[10%] bottom-12">
        <Box
          title="Final Output"
          caption="Automated tickets, notifications, reports, and remediations"
          className="w-[340px]"
          delay={1.8}
        >
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              Tickets
            </div>
            <div className="text-slate-300">•</div>
            <div className="flex items-center gap-1.5 text-sky-600">
              <div className="h-2 w-2 rounded-full bg-sky-500" />
              Reports
            </div>
            <div className="text-slate-300">•</div>
            <div className="flex items-center gap-1.5 text-amber-600">
              <div className="h-2 w-2 rounded-full bg-amber-500" />
              Alerts
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}