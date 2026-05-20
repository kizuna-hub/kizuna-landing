"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Lightbulb, Rocket, TrendingUp } from "lucide-react";
import type { Transition } from "framer-motion"; // Thêm import này

// Ép kiểu Transition để TypeScript không càm ràm
const cinematicTransition: Transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

interface NodeProps {
    id: string;
    label: string;
    icon: React.ElementType;
    x: string;
    y: string;
    theme: "amber" | "emerald" | "violet";
    delay: number;
}

const networkNodes: NodeProps[] = [
    {
        id: "mentors",
        label: "Mentors",
        icon: Lightbulb,
        x: "50%",
        y: "15%",
        theme: "amber",
        delay: 0,
    },
    {
        id: "founders",
        label: "Founders",
        icon: Rocket,
        x: "20%",
        y: "80%",
        theme: "emerald",
        delay: 0.2,
    },
    {
        id: "investors",
        label: "Investors",
        icon: TrendingUp,
        x: "80%",
        y: "80%",
        theme: "violet",
        delay: 0.4,
    },
];

export function EcosystemInteractiveGraph({ className }: { className?: string }) {
    const shouldReduceMotion = useReducedMotion();

    // Draw Path connecting Founders (20, 80) -> Mentors (50, 15) -> Investors (80, 80) -> Founders
    // We use percentage coordinates mapped to a 0-100 viewBox.
    const pathD = "M 20 80 Q 35 47.5 50 15 Q 65 47.5 80 80 Q 50 85 20 80 Z";

    return (
        <div className={cn("relative w-full max-w-[500px] aspect-square mx-auto", className)}>
            {/* Background SVG for Paths */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d={pathD}
                    stroke="currentColor"
                    className="text-zinc-500/30"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Circulating Particle - Only show if motion is allowed */}
                {!shouldReduceMotion && (
                    <motion.circle
                        r="1"
                        className="fill-accent"
                        style={{ filter: "drop-shadow(0 0 4px var(--color-accent))" }}
                    >
                        <animateMotion
                            dur="6s"
                            repeatCount="indefinite"
                            path={pathD}
                        />
                    </motion.circle>
                )}
            </svg>

            {/* Nodes Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {networkNodes.map((node, index) => {
                    const isAmber = node.theme === "amber";
                    const isEmerald = node.theme === "emerald";
                    const isViolet = node.theme === "violet";

                    return (
                        <motion.div
                            key={node.id}
                            className="absolute will-change-transform flex flex-col items-center gap-3 -translate-x-1/2 -translate-y-1/2"
                            style={{ left: node.x, top: node.y }}
                            initial={{ opacity: 0, scale: 0.8, y: shouldReduceMotion ? 0 : 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ ...cinematicTransition, delay: node.delay }}
                        >
                            <motion.div
                                className="pointer-events-auto will-change-transform"
                                animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
                                transition={shouldReduceMotion ? undefined : {
                                    duration: 4 + index,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }}
                            >
                                <div
                                    className={cn(
                                        "flex h-16 w-16 items-center justify-center rounded-3xl bg-surface-glass backdrop-blur-md border border-white/10 shadow-glass transition-all duration-300",
                                        isAmber && "shadow-brand-accent/20 hover:shadow-brand-accent/40",
                                        isEmerald && "shadow-accent/20 hover:shadow-accent/40",
                                        isViolet && "shadow-chart-3/20 hover:shadow-chart-3/40"
                                    )}
                                >
                                    <node.icon
                                        className={cn(
                                            "h-7 w-7",
                                            isAmber && "text-brand-accent",
                                            isEmerald && "text-accent",
                                            isViolet && "text-chart-3"
                                        )}
                                    />
                                </div>
                                <div className="mt-3 rounded-full bg-background/80 px-4 py-1.5 backdrop-blur-md border border-white/5 text-sm font-medium tracking-wide shadow-ambient text-center whitespace-nowrap">
                                    {node.label}
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
