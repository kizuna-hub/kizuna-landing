"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, TrendingUp, Network } from "lucide-react";
import { cn } from "@/lib/utils";

// Định nghĩa vị trí các Node trên toạ độ 100x100
const nodes = [
    { id: "mentors", label: "Mentors", icon: Lightbulb, x: 80, y: 25, delay: 0.2 },
    { id: "founders", label: "Founders", icon: Rocket, x: 20, y: 25, delay: 0.4 },
    { id: "investors", label: "Investors", icon: TrendingUp, x: 50, y: 85, delay: 0.6 },
];

export function EcosystemInteractiveGraph({ className }: { className?: string }) {
    // Đường cong Bezier kết nối các Node với Lõi trung tâm (50, 50)
    const corePaths = [
        "M 50 50 Q 65 37.5 80 25", // Core to Mentors
        "M 50 50 Q 35 37.5 20 25", // Core to Founders
        "M 50 50 Q 50 67.5 50 85", // Core to Investors
    ];

    // Đường vòng cung kết nối các Node với nhau (Vành đai ngoài)
    const outerRingPath = "M 20 25 Q 50 -5 80 25 Q 90 55 50 85 Q 10 55 20 25 Z";

    return (
        <div className={cn("relative w-full h-full max-w-[600px] mx-auto", className)}>

            {/* LỚP 1: ĐƯỜNG MẠCH VÀ HẠT NĂNG LƯỢNG (SVG LAYER) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">

                {/* Vẽ vành đai ngoài */}
                <motion.path
                    d={outerRingPath}
                    fill="none"
                    stroke="currentColor"
                    className="text-white/10"
                    strokeWidth="0.3"
                    strokeDasharray="2 2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                />

                {/* Vẽ các tia nối vào lõi trung tâm */}
                {corePaths.map((path, i) => (
                    <g key={`core-path-${i}`}>
                        <motion.path
                            d={path}
                            fill="none"
                            stroke="currentColor"
                            className="text-white/20"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 }}
                        />
                        {/* Hạt năng lượng chạy dọc theo tia */}
                        <circle r="0.8" className="fill-white" style={{ filter: "drop-shadow(0 0 3px #fff)" }}>
                            <animateMotion dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" path={path} keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" />
                        </circle>
                    </g>
                ))}

                {/* Hạt năng lượng chạy vòng tròn theo vành đai ngoài */}
                <circle r="1" className="fill-white/80">
                    <animateMotion dur="10s" repeatCount="indefinite" path={outerRingPath} />
                </circle>
            </svg>

            {/* LỚP 2: LÕI TRUNG TÂM (CORE) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                    className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#16452a] border border-white/20 shadow-[0_0_40px_rgba(22,69,42,0.8)] backdrop-blur-xl"
                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 40px rgba(22,69,42,0.5)", "0 0 60px rgba(255,255,255,0.2)", "0 0 40px rgba(22,69,42,0.5)"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Network className="h-8 w-8 text-white" />
                    <div className="absolute -bottom-8 text-xs font-bold tracking-widest text-white uppercase">Kizuna Core</div>
                </motion.div>
            </div>

            {/* LỚP 3: CÁC VỆ TINH (NODES) */}
            <div className="absolute inset-0 z-30 pointer-events-none">
                {nodes.map((node, i) => (
                    <motion.div
                        key={node.id}
                        className="absolute flex flex-col items-center gap-4 -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: node.delay, ease: "easeOut" }}
                    >
                        {/* Thẻ Glassmorphism bọc Icon */}
                        <motion.div
                            className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl transition-all hover:bg-white/10 hover:scale-110 hover:border-white/30 cursor-pointer"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                        >
                            <node.icon className="h-6 w-6 text-white" />
                        </motion.div>

                        {/* Nhãn văn bản */}
                        <div className="rounded-full bg-black/40 px-5 py-1.5 backdrop-blur-md border border-white/10 text-sm font-semibold tracking-wide text-white shadow-lg">
                            {node.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}