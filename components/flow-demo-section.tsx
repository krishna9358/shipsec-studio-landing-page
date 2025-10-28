"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Edge,
  Handle,
  MarkerType,
  Node,
  NodeProps,
  Position,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { ArrowRight, Save, Search, Sparkles, Upload } from "lucide-react";

type FlowCardField = {
  label: string;
  value: string;
  accent?: boolean;
};

type FlowCardBadge = {
  label: string;
  tone?: "accent" | "neutral" | "success";
};

type FlowCardData = {
  accentColor: string;
  icon: ReactNode;
  iconClass: string;
  title: string;
  subtitle: string;
  fields: FlowCardField[];
  badges: FlowCardBadge[];
  statusTone?: "success" | "warning";
  isActive?: boolean;
};

type FlowEdgeData = {
  accentColor: string;
  isActive?: boolean;
};

const hexToRgba = (hex: string, alpha: number) => {
  const sanitized = hex.replace("#", "");
  if (sanitized.length !== 6) {
    return `rgba(148, 163, 184, ${alpha})`;
  }
  const bigint = Number.parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const statusToneClasses: Record<NonNullable<FlowCardData["statusTone"]>, string> = {
  success: "bg-blue-500",
  warning: "bg-amber-400",
};

const badgeToneClasses: Record<NonNullable<FlowCardBadge["tone"]>, string> = {
  accent: "border-sky-300 bg-sky-100 text-sky-800",
  neutral: "border-slate-200 bg-slate-100 text-slate-600",
  success: "border-blue-400 bg-blue-100 text-blue-700",
};

const FlowCardNode = ({ data }: NodeProps<FlowCardData>) => {
  const { icon, iconClass, title, subtitle, fields, badges, accentColor, statusTone, isActive } = data;

  return (
    <motion.div
      initial={false}
      animate={{
        scale: isActive ? 1.04 : 1,
        
      }}
      transition={{ type: "spring", stiffness: 230, damping: 22 }}
      className="relative w-[270px] rounded-3xl border-2 bg-white p-6"
      style={{ borderColor: isActive ? accentColor : "rgba(203,213,225,0.8)" }}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!h-3.5 !w-3.5 !bg-white"
        style={{
          borderWidth: 2,
          borderColor: isActive ? accentColor : "rgba(148,163,184,0.6)",
          boxShadow: `0 0 0 ${isActive ? 6 : 4}px ${hexToRgba(accentColor, isActive ? 0.22 : 0.1)}`,
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!h-3.5 !w-3.5 !bg-white"
        style={{
          borderWidth: 2,
          borderColor: isActive ? accentColor : "rgba(148,163,184,0.6)",
          boxShadow: `0 0 0 ${isActive ? 6 : 4}px ${hexToRgba(accentColor, isActive ? 0.22 : 0.1)}`,
        }}
      />

      {statusTone ? (
        <span
          className={`absolute right-5 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full ${statusToneClasses[statusTone]}`}
          style={{ boxShadow: `0 0 0 6px ${hexToRgba(accentColor, 0.18)}` }}
        />
      ) : null}

      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${iconClass}`}>
          {icon}
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{subtitle}</p>
          <p className="text-lg font-semibold text-slate-900">{title}</p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {fields.map((field) => (
          <div
            key={field.label}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-2"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">{field.label}</span>
            <span className={`text-sm font-semibold ${field.accent ? "text-slate-900" : "text-slate-500"}`}>
              {field.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge.label}
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${badgeToneClasses[badge.tone ?? "neutral"]}`}
          >
            {badge.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export function FlowDemoSection() {
  const baseEdgeColor = "#d4ddea";
  const inactiveEdgeOpacity = 0.55;

  const nodeTypes = useMemo(() => ({ flowCard: FlowCardNode }), []);

  const initialNodes = useMemo<Node<FlowCardData>[]>(() => [
    {
      id: "file-loader",
      type: "flowCard",
      position: { x: 0, y: 50 },
      data: {
        accentColor: "#38bdf8",
        iconClass: "border-sky-200 bg-sky-100 text-sky-700",
        icon: <Upload className="h-5 w-5" strokeWidth={2} />,
        title: "File Loader",
        subtitle: "Source file",
        fields: [
          { label: "File Upload", value: "shipsec-offboarding.csv", accent: true },
          { label: "Parse As", value: "auto" },
        ],
        badges: [
          { label: "ShipSecAI", tone: "accent" },
          { label: "v1.0.0", tone: "neutral" },
        ],
        statusTone: "success",
      },
    },
    {
      id: "subfinder",
      type: "flowCard",
      position: { x: 310, y: 180 },
      data: {
        accentColor: "#818cf8",
        iconClass: "border-indigo-200 bg-indigo-100 text-indigo-700",
        icon: <Search className="h-5 w-5" strokeWidth={2} />,
        title: "Subfinder",
        subtitle: "Enrichment",
        fields: [
          { label: "Target Domain", value: "shipsec.ai", accent: true },
          { label: "Output Format", value: "json" },
        ],
        badges: [
          { label: "Live scan", tone: "accent" },
          { label: "Stable", tone: "neutral" },
        ],
        statusTone: "success",
      },
    },
    {
      id: "output-saver",
      type: "flowCard",
      position: { x: 620, y: 310 },
      data: {
        accentColor: "#34d399",
        iconClass: "border-blue-200 bg-blue-100 text-blue-700",
        icon: <Save className="h-5 w-5" strokeWidth={2} />,
        title: "Output Saver",
        subtitle: "Destination",
        fields: [
          { label: "File Name", value: "workflow-01.json", accent: true },
          { label: "Destination", value: "Storage bucket" },
        ],
        badges: [
          { label: "Audited", tone: "neutral" },
          { label: "Latest", tone: "success" },
        ],
        statusTone: "success",
      },
    },
  ], []);

  const initialEdges = useMemo<Edge<FlowEdgeData>[]>(() => [
    {
      id: "edge-file-subfinder",
      source: "file-loader",
      target: "subfinder",
      type: "step",
      markerEnd: { type: MarkerType.ArrowClosed, color: baseEdgeColor, width: 20, height: 20 },
      data: { accentColor: "#38bdf8" },
      style: { strokeWidth: 2.4, stroke: baseEdgeColor, opacity: inactiveEdgeOpacity },
    },
    {
      id: "edge-subfinder-output",
      source: "subfinder",
      target: "output-saver",
      type: "step",
      markerEnd: { type: MarkerType.ArrowClosed, color: baseEdgeColor, width: 20, height: 20 },
      data: { accentColor: "#34d399" },
      style: { strokeWidth: 2.4, stroke: baseEdgeColor, opacity: inactiveEdgeOpacity },
    },
  ], [baseEdgeColor]);

  const [nodes, setNodes, onNodesChange] = useNodesState<FlowCardData>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<FlowEdgeData>(initialEdges);

  const highlightSequence = useMemo(
    () => [
      {
        title: "Ingest security artifacts",
        description:
          "Upload access exports, HR feeds, or vulnerability reports directly into ShipSecAI.",
        nodes: ["file-loader"],
        edges: [] as string[],
      },
      {
        title: "Automated reconnaissance",
        description: "Subfinder enriches every asset with live subdomain discovery and context.",
        nodes: ["file-loader", "subfinder"],
        edges: ["edge-file-subfinder"],
      },
      {
        title: "Assemble the offboarding package",
        description:
          "Output saver consolidates evidence, rollback steps, and audit metadata automatically.",
        nodes: ["subfinder", "output-saver"],
        edges: ["edge-subfinder-output"],
      },
      {
        title: "Hand-off anywhere",
        description:
          "Send the finished workflow to storage, SOAR, or ship it via secure notifications.",
        nodes: ["output-saver"],
        edges: [] as string[],
      },
    ],
    []
  );

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = highlightSequence[activeStepIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStepIndex((index) => (index + 1) % highlightSequence.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [highlightSequence.length]);

  useEffect(() => {
    setNodes((items) =>
      items.map((node) => ({
        ...node,
        data: {
          ...node.data,
          isActive: activeStep.nodes.includes(node.id),
        },
      }))
    );

    setEdges((items) =>
      items.map((edge) => {
        const isActive = activeStep.edges.includes(edge.id);
        const accentColor = edge.data?.accentColor ?? "#38bdf8";

        return {
          ...edge,
          animated: isActive,
          data: {
            accentColor: edge.data?.accentColor ?? "#38bdf8",
            isActive,
          },
          style: {
            ...(edge.style ?? {}),
            stroke: isActive ? accentColor : baseEdgeColor,
            strokeWidth: isActive ? 3.4 : 2.4,
            opacity: isActive ? 1 : inactiveEdgeOpacity,
          },
          markerEnd: edge.markerEnd
            ? {
                type: MarkerType.ArrowClosed,
                width: 20,
                height: 20,
                color: isActive ? accentColor : baseEdgeColor,
              }
            : undefined,
        };
      })
    );
  }, [activeStep, baseEdgeColor, inactiveEdgeOpacity, setEdges, setNodes]);

  const benefits = useMemo(
    () => [
      "Drag-and-drop orchestration with ShipSecAI guardrails already embedded.",
      "Animated connectors make it easy to preview each hand-off before deploying.",
      "Versioned actions keep an auditable trail for compliance and fast rollbacks.",
    ],
    []
  );

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">Orchestrate Security Workflows with AI-Powered Agents</h2>
          <p className="mt-4 text-lg text-slate-600">
            Explore the ShipSecAI offboarding blueprint with animated hand-offs from ingestion to
            audit-ready exports.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-10"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 ">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Live walkthrough
              </span>
              <motion.div
                key={activeStep.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4"
              >
                <p className="text-2xl font-semibold text-slate-900">{activeStep.title}</p>
                <p className="mt-3 text-sm text-slate-600">{activeStep.description}</p>
              </motion.div>
              <div className="mt-8 flex flex-wrap gap-2">
                {highlightSequence.map((step, index) => {
                  const isActive = index === activeStepIndex;
                  return (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActiveStepIndex(index)}
                      className={`group flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                        isActive
                          ? "border-blue-400 bg-blue-50 text-blue-700"
                          : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-blue-600"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full transition ${
                          isActive ? "bg-blue-500" : "bg-slate-300 group-hover:bg-blue-400"
                        }`}
                      />
                      Step {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <ul className="space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-left">
                  <span className="mt-0.5 rounded-full bg-blue-100 p-1.5">
                    <Sparkles className="h-4 w-4 text-blue-600" strokeWidth={2} />
                  </span>
                  <span className="text-sm text-slate-600">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-3 text-sm text-blue-700">
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              ShipSecAI Studio ships with this flow as a starting template—customize it in seconds.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative rounded-[40px] border border-slate-100 bg-white p-6 "
          >
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-slate-100/80" />
            <div className="h-[520px] w-full">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                fitViewOptions={{ padding: 0.18 }}
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                panOnScroll={false}
                panOnDrag
                minZoom={0.75}
                maxZoom={1.05}
                proOptions={{ hideAttribution: true }}
                className="!bg-transparent"
              >
                <Background variant={BackgroundVariant.Dots} gap={22} size={1} color="#d7e0ee" />
              </ReactFlow>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

