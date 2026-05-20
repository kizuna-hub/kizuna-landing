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
                    "cursor-pointer overflow-hidden p-2.5 bg-white rounded-[20px] border border-zinc-200 shadow-[0_8px_24px_rgba(0,0,0,0.015)] transition-all duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.04)] will-change-transform",
                    node.sizeClassName
                )}
                style={{ x, y, rotate, scale }}
            >
                {/* Khung chứa ảnh chiếm diện tích lớn chủ đạo */}
                <div className="group relative overflow-hidden w-full aspect-[4/3] bg-zinc-100 rounded-[14px] border border-zinc-200/60">
                    {node.imageUrl ? (
                        <Image
                            src={node.imageUrl}
                            alt={node.title}
                            fill
                            sizes="(max-width: 768px) 240px, 360px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex justify-center items-center w-full h-full text-zinc-300 bg-zinc-50">
                            <ImageIcon className="w-8 h-8 font-light" />
                        </div>
                    )}

                    {/* Tag trạng thái Solid phẳng đè lên góc ảnh */}
                    <div className="absolute top-2 right-2 z-10">
                        <span className="inline-flex items-center px-2 gap-1 h-5 text-[9px] font-bold tracking-wide text-white bg-zinc-900/80 rounded-md backdrop-blur-sm">
                            <Eye className="w-2.5 h-2.5 text-emerald-400" /> {node.meta}
                        </span>
                    </div>
                </div>

                {/* Sub-box thông tin siêu gọn gàng bên dưới chuẩn Bento */}
                <div className="flex justify-between items-center px-3 py-2 mt-2 bg-zinc-50 rounded-[12px] border border-zinc-100">
                    <div className="pr-2 truncate">
                        <h3 className="truncate text-xs font-black tracking-tight text-zinc-900">{node.title}</h3>
                        <p className="mt-0.5 truncate text-[10px] font-medium text-zinc-400">{node.body}</p>
                    </div>
                    <span className="shrink-0 px-1.5 py-0.5 text-[9px] font-black tracking-wider text-zinc-400 uppercase bg-white rounded border border-zinc-200">
                        Media
                    </span>
                </div>
            </motion.article>
        </div>
    );
};