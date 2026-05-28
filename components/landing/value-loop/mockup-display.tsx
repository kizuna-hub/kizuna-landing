"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LoopStep } from "./value-loop-data";

interface MockupDisplayProps {
    activeStep: LoopStep;
}

export function MockupDisplay({ activeStep }: MockupDisplayProps) {
    return (
        // KEY FIX: Dùng aspect-[16/10] và bỏ fix cứng height để thẻ luôn là hình chữ nhật ngang
        <div className="relative w-full aspect-[4/3] lg:aspect-[14/10] max-h-[700px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0f0f0f] p-4 lg:p-6 shadow-2xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-4 lg:inset-6"
                >
                    {activeStep.mockup}
                </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]" />
        </div>
    );
}