"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { type GraphNode, nodeIcon } from "./data";

interface BentoGraphCardProps {
    node: GraphNode;
    scrollYProgress: MotionValue<number>;
    shouldReduceMotion: boolean;
}

export const BentoGraphCard = ({ node, scrollYProgress, shouldReduceMotion }: BentoGraphCardProps) => {
    const scatterTransform = shouldReduceMotion ? node.targetTransform : node.scatterTransform;
    const Icon = nodeIcon[node.type];

    const x = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.x, node.targetTransform.x]);
    const y = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.y, node.targetTransform.y]);
    const rotate = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.rotate, node.targetTransform.rotate]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.scale, node.targetTransform.scale]);

    return (
        <div className={cn("absolute z-10 -translate-x-1/2 -translate-y-1/2", node.positionClassName)}>
            <motion.article
                className={cn(
                    "overflow-hidden bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-black/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/10 will-change-transform",
                    node.sizeClassName,
                )}
                style={{ x, y, rotate, scale }}
            >
                {node.imageUrl ? (
                    <div className="relative overflow-hidden aspect-[16/9] bg-zinc-100 border-b border-zinc-200">
                        <Image
                            src={node.imageUrl}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 288px, 432px"
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
                    </div>
                ) : null}

                <div className="p-4 sm:p-5">
                    <div className="flex justify-between items-center mb-4 gap-3">
                        <span
                            className={cn(
                                "inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] rounded-full border",
                                node.accentClassName,
                            )}
                        >
                            <Icon aria-hidden="true" className="size-3" />
                            {node.eyebrow}
                        </span>
                        <span className="text-xs font-medium text-zinc-400">{node.meta}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-tight text-zinc-950">{node.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-500">{node.body}</p>

                    {node.type === "workspace" ? (
                        <div className="grid grid-cols-3 mt-5 gap-2">
                            {["Tasks", "Docs", "Runway"].map((label, index) => (
                                <div key={label} className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                                    <p className="text-lg font-semibold text-zinc-950">{["32", "128", "14m"][index]}</p>
                                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-zinc-400">{label}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-5 space-y-2">
                            <span className="block w-full h-2 bg-zinc-100 rounded-full" />
                            <span className="block w-4/5 h-2 bg-zinc-100 rounded-full" />
                            <span className="block w-3/5 h-2 bg-zinc-100 rounded-full" />
                        </div>
                    )}
                </div>
            </motion.article>
        </div>
    );
};