"use client";

import { motion } from "framer-motion";

const CARDS = [
    { id: 1, top: "15%", left: "8%", width: "220px", height: "160px", blur: "blur-lg", opacity: "opacity-20", scale: 0.9, delay: 0 },
    { id: 2, top: "8%", right: "12%", width: "180px", height: "120px", blur: "blur-xl", opacity: "opacity-[0.15]", scale: 0.8, delay: 1 },
    { id: 3, top: "55%", left: "5%", width: "200px", height: "220px", blur: "blur-md", opacity: "opacity-25", scale: 1.05, delay: 0.5 },
    { id: 4, top: "45%", right: "6%", width: "240px", height: "140px", blur: "blur-lg", opacity: "opacity-20", scale: 0.95, delay: 1.5 },
    { id: 5, bottom: "15%", left: "25%", width: "190px", height: "190px", blur: "blur-[12px]", opacity: "opacity-[0.18]", scale: 0.85, delay: 2 },
];

export function FloatingBackground() {
    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            style={{
                maskImage: "radial-gradient(circle at center, black 20%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 20%, transparent 80%)",
            }}
        >
            {CARDS.map((card) => (
                <motion.div
                    key={card.id}
                    className={`absolute bg-white/5 border border-white/10 rounded-xl ${card.blur} ${card.opacity}`}
                    style={{
                        top: card.top,
                        left: card.left,
                        right: card.right,
                        bottom: card.bottom,
                        width: card.width,
                        height: card.height,
                        scale: card.scale,
                    }}
                    animate={{
                        y: ["0%", "5%", "0%"],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: card.delay,
                    }}
                >
                    {/* Faux content lines */}
                    <div className="p-4 space-y-3">
                        <div className="h-2 bg-white/20 rounded w-1/3"></div>
                        <div className="h-2 bg-white/10 rounded w-full"></div>
                        <div className="h-2 bg-white/10 rounded w-5/6"></div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
