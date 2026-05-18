"use client";

import { motion } from "framer-motion";
import { CanvasFrame } from "./canvas-frame";

const particles = [
    { id: "b1", x: 20, y: 30, size: 8, color: "blue" }, { id: "b2", x: 30, y: 50, size: 6, color: "blue" },
    { id: "b3", x: 15, y: 70, size: 7, color: "blue" }, { id: "o1", x: 80, y: 30, size: 7, color: "orange" },
    { id: "o2", x: 70, y: 50, size: 9, color: "orange" }, { id: "o3", x: 85, y: 70, size: 5, color: "orange" },
];

export function CanvasMatching() {
    return (
        <CanvasFrame label="AI Matching Synergy">
            <div className="absolute inset-0">
                {particles.map((p, i) => (
                    <motion.div
                        key={p.id}
                        className={`absolute rounded-full ${p.color === "blue" ? "bg-emerald-400 shadow-[0_0_15px_#34d399]" : "bg-orange-400 shadow-[0_0_15px_#fb923c]"}`}
                        style={{ width: p.size, height: p.size }}
                        initial={{ left: `${p.x}%`, top: `${p.y}%`, opacity: 0, scale: 0 }}
                        animate={{ left: "50%", top: "50%", opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                        transition={{ delay: i * 0.1, duration: 1.5, ease: "anticipate" }}
                    />
                ))}

                {/* Lõi năng lượng Synergy */}
                <motion.div
                    className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,rgba(16,185,129,0.4)_40%,rgba(251,146,60,0.2)_70%,transparent_100%)]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: [1, 1.05, 1] }}
                    transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </CanvasFrame>
    );
}