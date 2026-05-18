"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { CanvasFrame } from "./canvas-frame";

const mazeLines = [
    "M48 88 H174 V148 H116 V214 H236", "M76 294 H176 V244 H278 V152 H348",
    "M104 390 H248 V330 H318 V264 H468", "M230 62 V126 H304 V206 H408 V150 H504",
    "M356 86 H472 V236 H420 V318 H524", "M54 198 H134 V260 H84 V352 H184",
    "M292 412 V348 H392 V392 H516", "M196 468 H318 V440 H424 V486",
    "M410 42 V102 H536 V202", "M34 452 H112 V508 H254"
];
const navigatorPath = "M62 440 C98 392 136 402 164 342 C194 278 254 312 276 244 C296 184 360 208 386 150 C414 88 474 106 520 68";

export function CanvasNavigator() {
    return (
        <CanvasFrame label="AI Navigator Policy">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 520">
                <defs>
                    <filter id="nav-glow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>

                {mazeLines.map((d, i) => (
                    <path key={i} d={d} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" strokeLinecap="round" />
                ))}

                {/* Tia sáng AI tìm đường */}
                <motion.path
                    d={navigatorPath}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#nav-glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                <motion.circle
                    cx="520" cy="68" r="24"
                    fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.5"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                    transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                />
            </svg>

            <motion.div
                className="absolute right-[5%] top-[8%] flex h-14 w-14 items-center justify-center rounded-full bg-[#0a1c13] border border-emerald-400 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] backdrop-blur-md"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
            >
                <Target className="h-6 w-6" />
            </motion.div>
        </CanvasFrame>
    );
}