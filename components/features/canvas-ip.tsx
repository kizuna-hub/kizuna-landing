"use client";

import { useReducedMotion, motion } from "framer-motion";
import { FileText, Lock } from "lucide-react";
import { CanvasFrame } from "./canvas-frame";

const ipNodes = [
    { id: "identity", cx: 168, cy: 128, path: "M250 180 C225 146 205 132 168 128" },
    { id: "vault", cx: 430, cy: 112, path: "M322 178 C354 138 386 120 430 112" },
    { id: "audit", cx: 448, cy: 310, path: "M326 254 C366 288 398 306 448 310" },
    { id: "chain", cx: 132, cy: 318, path: "M246 254 C210 292 176 312 132 318" },
];

export function CanvasIP() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <CanvasFrame label="IP Protection Ledger">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 420" aria-hidden="true">
                <defs>
                    <filter id="ip-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {ipNodes.map((node, index) => (
                    <motion.path
                        key={node.id}
                        d={node.path}
                        fill="none"
                        stroke="#10b981"
                        strokeDasharray="6 8"
                        strokeWidth="2"
                        filter="url(#ip-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    />
                ))}

                {ipNodes.map((node, index) => (
                    <motion.g
                        key={`node-${node.id}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                        <circle cx={node.cx} cy={node.cy} r="16" fill="#0a1c13" stroke="#10b981" strokeWidth="1.5" />
                        <circle cx={node.cx} cy={node.cy} r="4" fill="#10b981" filter="url(#ip-glow)" />
                    </motion.g>
                ))}
            </svg>

            {/* Document Card */}
            <motion.div
                className="absolute left-1/2 top-1/2 flex h-40 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: "-50%" }}
                transition={{ duration: 0.6, ease: "backOut" }}
            >
                <FileText className="h-12 w-12 text-white" strokeWidth={1.5} />
            </motion.div>

            {/* Lock Overlay */}
            <motion.div
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-400 bg-[#0a1c13]/90 text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.4)] backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{ opacity: { delay: 1 }, scale: { delay: 1, duration: 2, repeat: Infinity } }}
            >
                <Lock className="h-6 w-6" strokeWidth={2} />
            </motion.div>
        </CanvasFrame>
    );
}