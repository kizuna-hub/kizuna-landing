"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LoopStep } from "./value-loop-data";

interface StepListProps {
    steps: LoopStep[];
    activeId: string;
    setActiveId: (id: string) => void;
}

export function StepList({ steps, activeId, setActiveId }: StepListProps) {
    return (
        <div className="flex flex-col border-l-[3px] border-white/5">
            {steps.map((step) => {
                const isActive = step.id === activeId;
                const textColorClass = isActive ? "text-white" : "text-zinc-500";

                return (
                    <div
                        key={step.id}
                        className={cn(
                            "relative cursor-pointer py-8 pl-8 transition-all duration-300",
                            isActive ? "opacity-100" : "opacity-50 hover:opacity-75"
                        )}
                        onClick={() => setActiveId(step.id)}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="active-loop-line"
                                className="absolute -left-[3px] inset-y-0 w-[3px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                initial={false}
                                transition={{ duration: 0.3 }}
                            />
                        )}

                        <h4 className={cn("mb-2 text-xs font-bold uppercase tracking-[0.25em] transition-colors", textColorClass)}>
                            STEP 0{steps.indexOf(step) + 1}
                        </h4>

                        <h3 className="mb-4 text-3xl font-semibold tracking-tight text-white lg:text-[32px]">
                            {step.title}
                        </h3>

                        <AnimatePresence initial={false}>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    {/* Bỏ max-w để chữ được quyền dàn trải đều ra theo chiều ngang của cột trái */}
                                    <p className="text-base leading-relaxed text-zinc-400 pr-4">
                                        {step.description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}