"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Image as ImageIcon, Eye } from "lucide-react";
import { type GraphNode } from "./data";

interface GraphMediaCardProps {
    node: GraphNode;
    scrollYProgress: MotionValue<number>;
    shouldReduceMotion: boolean;
}

export const GraphMediaCard = ({ node, scrollYProgress, shouldReduceMotion }: GraphMediaCardProps) => {
    const scatterTransform = shouldReduceMotion ? node.targetTransform : node.scatterTransform;

    const x = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.x, node.targetTransform.x]);
    const y = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.y, node.targetTransform.y]);
    const rotate = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.rotate, node.targetTransform.rotate]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.scale, node.targetTransform.scale]);

    return (
        <div className={cn("absolute z-10 -translate-x-1/2 -translate-y-1/2", node.positionClassName)}>
            <motion.article
                className={cn(
                    "overflow-hidden rounded-[20px] border border-zinc-200 bg-white p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.015)]",
                    "transition-all duration-500 hover:border-zinc-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 cursor-pointer",
                    node.sizeClassName
                )}
                style={{ x, y, rotate, scale }}
            >
                {/* Khung chứa ảnh chiếm diện tích lớn chủ đạo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-zinc-100 border border-zinc-200/60 group">
                    {node.imageUrl ? (
                        <Image
                            src={node.imageUrl}
                            alt={node.title}
                            fill
                            sizes="(max-width: 768px) 240px, 360px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-zinc-50 text-zinc-300">
                            <ImageIcon className="w-8 h-8 font-light" />
                        </div>
                    )}

                    {/* Tag trạng thái Solid phẳng đè lên góc ảnh */}
                    <div className="absolute right-2 top-2 z-10">
                        <span className="inline-flex h-5 items-center gap-1 rounded-md bg-zinc-900/80 px-2 text-[9px] font-bold text-white tracking-wide backdrop-blur-sm">
                            <Eye className="w-2.5 h-2.5 text-emerald-400" /> {node.meta}
                        </span>
                    </div>
                </div>

                {/* Sub-box thông tin siêu gọn gàng bên dưới chuẩn Bento */}
                <div className="mt-2 rounded-[12px] bg-zinc-50 border border-zinc-100 px-3 py-2 flex items-center justify-between">
                    <div className="truncate pr-2">
                        <h3 className="text-xs font-black text-zinc-900 tracking-tight truncate">{node.title}</h3>
                        <p className="text-[10px] text-zinc-400 font-medium truncate mt-0.5">{node.body}</p>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 bg-white border border-zinc-200 rounded px-1.5 py-0.5 shrink-0">
                        Media
                    </span>
                </div>
            </motion.article>
        </div>
    );
};