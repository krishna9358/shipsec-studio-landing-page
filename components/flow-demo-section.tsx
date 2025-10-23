"use client";

import { motion } from "framer-motion";
import { Users, Shield, Github, FileText, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import { HeroVideoDialog } from "./ui/hero-video-dialog";

// Define MessageSquare component before it's used
const MessageSquare = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <div className="flex flex-col items-center gap-2 px-4 py-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">SS</span>
          </div>
          <span className="font-semibold text-sm">ShipSecAI Studio</span>
        </div>
      )
    },
    position: { x: 50, y: 200 },
    className: "px-2 py-2 shadow-lg rounded-xl border-2 border-emerald-500 bg-white",
  },
  {
    id: "slack",
    data: {
      label: (
        <div className="flex items-center gap-2 px-3 py-2">
          <MessageSquare className="w-5 h-5 text-purple-600" />
          <span className="font-medium text-sm">Slack</span>
        </div>
      )
    },
    position: { x: 300, y: 50 },
    className: "shadow-md rounded-lg border border-purple-200 bg-purple-50",
  },
  {
    id: "github",
    data: {
      label: (
        <div className="flex items-center gap-2 px-3 py-2">
          <Github className="w-5 h-5 text-slate-800" />
          <span className="font-medium text-sm">GitHub</span>
        </div>
      )
    },
    position: { x: 300, y: 140 },
    className: "shadow-md rounded-lg border border-slate-300 bg-slate-50",
  },
  {
    id: "google",
    data: {
      label: (
        <div className="flex items-center gap-2 px-3 py-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="font-medium text-sm">Google</span>
        </div>
      )
    },
    position: { x: 300, y: 230 },
    className: "shadow-md rounded-lg border border-blue-200 bg-blue-50",
  },
  {
    id: "user1",
    data: { label: <div className="text-xs px-2 py-1">👤 User 1</div> },
    position: { x: 550, y: 30 },
    className: "shadow-sm rounded-md border border-slate-200 bg-white text-xs",
  },
  {
    id: "user2",
    data: { label: <div className="text-xs px-2 py-1">👤 User 2</div> },
    position: { x: 550, y: 100 },
    className: "shadow-sm rounded-md border border-slate-200 bg-white text-xs",
  },
  {
    id: "user3",
    data: { label: <div className="text-xs px-2 py-1">👤 User 3</div> },
    position: { x: 550, y: 170 },
    className: "shadow-sm rounded-md border border-slate-200 bg-white text-xs",
  },
  {
    id: "user4",
    data: { label: <div className="text-xs px-2 py-1">👤 User 4</div> },
    position: { x: 550, y: 240 },
    className: "shadow-sm rounded-md border border-slate-200 bg-white text-xs",
  },
  {
    id: "report",
    type: "output",
    data: {
      label: (
        <div className="flex items-center gap-2 px-3 py-2">
          <FileText className="w-5 h-5 text-sky-600" />
          <span className="font-medium text-sm">Report</span>
        </div>
      )
    },
    position: { x: 750, y: 150 },
    className: "shadow-lg rounded-lg border-2 border-sky-500 bg-sky-50",
  },
];

const initialEdges: Edge[] = [
  // ShipSecAI to Integrations
  { id: "e1-slack", source: "1", target: "slack", animated: true, style: { stroke: "#9333ea", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#9333ea" } },
  { id: "e1-github", source: "1", target: "github", animated: true, style: { stroke: "#1e293b", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#1e293b" } },
  { id: "e1-google", source: "1", target: "google", animated: true, style: { stroke: "#2563eb", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#2563eb" } },
  // Integrations to Users
  { id: "e-slack-u1", source: "slack", target: "user1", animated: true, style: { stroke: "#9333ea", strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#9333ea" } },
  { id: "e-github-u2", source: "github", target: "user2", animated: true, style: { stroke: "#1e293b", strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#1e293b" } },
  { id: "e-google-u3", source: "google", target: "user3", animated: true, style: { stroke: "#2563eb", strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#2563eb" } },
  { id: "e-slack-u4", source: "slack", target: "user4", animated: true, style: { stroke: "#9333ea", strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#9333ea" } },
  // Users to Report
  { id: "e-u1-report", source: "user1", target: "report", animated: true, style: { stroke: "#0ea5e9", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#0ea5e9" } },
  { id: "e-u2-report", source: "user2", target: "report", animated: true, style: { stroke: "#0ea5e9", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#0ea5e9" } },
  { id: "e-u3-report", source: "user3", target: "report", animated: true, style: { stroke: "#0ea5e9", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#0ea5e9" } },
  { id: "e-u4-report", source: "user4", target: "report", animated: true, style: { stroke: "#0ea5e9", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#0ea5e9" } },
];

export function FlowDemoSection() {

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Automate Employee Offboarding
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            See how ShipSecAI automatically revokes access across your entire security stack in seconds.
          </p>
          {/* <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button> */}
        </motion.div>
        <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-[600px] bg-white rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden"
        > */}
          {/* <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            fitView
            attributionPosition="bottom-right"
            className="bg-gradient-to-br from-slate-50 to-white"
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            zoomOnScroll={false}
            // panOnScroll
            panOnDrag
            zoomOnPinch={false}
            minZoom={0.9}
            maxZoom={1.2}
          > */}
            {/* <Background color="#e2e8f0" gap={20} size={1} /> */}
            {/* <Controls /> */}
            {/* <MiniMap
              nodeColor={(node) => {
                if (node.id === '1') return '#10b981';
                if (node.id === 'report') return '#0ea5e9';
                return '#ffffff';
              }}
              className="bg-slate-50 border border-slate-200"
            /> */}
          {/* </ReactFlow>
        </motion.div> */}

        {/* Benefits */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Trigger</h3>
            <p className="text-slate-600">
              HR system event automatically starts the workflow
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Actions</h3>
            <p className="text-slate-600">
              Access revoked across all systems simultaneously
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Audit Trail</h3>
            <p className="text-slate-600">
              Complete documentation for compliance review
            </p>
          </div>
        </motion.div> */}






      </div>
    </section>
  );
}
