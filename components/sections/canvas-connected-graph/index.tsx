"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

import { graphNodes, graphEdges } from "./data";
import { GraphEdgePath } from "./graph-edge-path";
import { BentoGraphCard } from "./graph-document-card";

export const CanvasConnectedGraph = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const lineOpacity = useTransform(scrollYProgress, [0.78, 0.9], shouldReduceMotion ? [1, 1] : [0, 1]);
  const linePathLength = useTransform(scrollYProgress, [0.8, 1], shouldReduceMotion ? [1, 1] : [0, 1]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="connected-graph-title"
      className="relative overflow-hidden bg-zinc-50 px-6 py-24 text-zinc-950 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(250,250,250,0))]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 shadow-sm shadow-black/5">
            <Sparkles aria-hidden="true" className="size-3.5" />
            Tri thức được kết nối
          </div>

          <h2 id="connected-graph-title" className="font-serif text-4xl font-medium leading-tight text-zinc-950 md:text-6xl">
            Biến dữ liệu rời rạc thành bản đồ vận hành sống.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            Kizuna Hub gom transcript, pháp lý, mentor signal và bằng chứng thực thi vào một graph duy nhất để đội ngũ nhìn thấy bối cảnh trước khi ra quyết định.
          </p>
        </div>

        {/* Graph Canvas Workspace */}
        <div className="relative mt-14 h-[680px] overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-inner shadow-black/[0.03] sm:h-[760px] lg:h-[820px]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* SVG Canvas Vector Layer */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 1000 620"
            preserveAspectRatio="none"
            role="presentation"
          >
            {graphEdges.map((edge) => (
              <GraphEdgePath
                key={edge.id}
                edge={edge}
                lineOpacity={lineOpacity}
                linePathLength={linePathLength}
              />
            ))}

            {graphNodes.map((node) => (
              <motion.circle
                key={`dot-${node.id}`}
                aria-hidden="true"
                cx={node.anchor.x}
                cy={node.anchor.y}
                r="5"
                fill="#10b981"
                style={{ opacity: lineOpacity }}
              />
            ))}
          </svg>

          {/* Interactive Bento Card Dom Layer */}
          <div className="absolute inset-0 z-10">
            {graphNodes.map((node) => (
              <BentoGraphCard
                key={node.id}
                node={node}
                scrollYProgress={scrollYProgress}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};