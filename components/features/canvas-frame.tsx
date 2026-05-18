"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function CanvasFrame({
    children,
    label,
}: {
    children: ReactNode;
    label: string;
}) {
    return (
        <motion.div
            className="absolute inset-0 overflow-hidden rounded-[2.5rem]"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            aria-label={label}
        >
            {/* Ánh sáng nền (Glow) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_60%)]" />

            {/* Lưới Grid tinh tế (Tech vibe) */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />
            {children}
        </motion.div>
    );
}