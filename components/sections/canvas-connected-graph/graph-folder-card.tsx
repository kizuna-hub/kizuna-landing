"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { Folder, ChevronRight, FileText } from "lucide-react";
import { type GraphNode } from "./data";

interface GraphFolderCardProps {
    node: GraphNode;
    scrollYProgress: MotionValue<number>;
    shouldReduceMotion: boolean;
}

export const GraphFolderCard = ({ node, scrollYProgress, shouldReduceMotion }: GraphFolderCardProps) => {
    const scatterTransform = shouldReduceMotion ? node.targetTransform : node.scatterTransform;

    const x = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.x, node.targetTransform.x]);
    const y = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.y, node.targetTransform.y]);
    const rotate = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.rotate, node.targetTransform.rotate]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [scatterTransform.scale, node.targetTransform.scale]);

    return (
        <div className={cn("absolute z-10 -translate-x-1/2 -translate-y-1/2", node.positionClassName)}>
            {/* Hiệu ứng Stacked: Tạo 2 lớp viền giả lập tập hồ sơ xếp chồng ở phía sau */}
            <div className="relative group">
                <div className="absolute inset-0 bg-zinc-200/60 rounded-[20px] translate-x-1.5 translate-y-1.5 border border-zinc-300/80 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="absolute inset-0 bg-zinc-100/80 rounded-[20px] translate-x-0.5 translate-y-0.5 border border-zinc-200/80" />

                {/* Thẻ chính phía trước */}
                <motion.article
                    className={cn(
                        "relative overflow-hidden rounded-[20px] border border-zinc-200 bg-white p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.01)] w-[14.5rem] flex flex-col gap-3",
                        "transition-all duration-500 hover:border-zinc-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.04)]",
                        node.sizeClassName
                    )}
                    style={{ x, y, rotate, scale }}
                >
                    {/* Hộp tiêu đề Folder */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-amber-600 shrink-0 shadow-sm">
                            <Folder className="w-5 h-5 fill-amber-500/20" strokeWidth={2.5} />
                        </div>
                        <div className="truncate">
                            <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400">{node.eyebrow}</span>
                            <h3 className="text-sm font-black text-zinc-900 tracking-tight truncate leading-tight">{node.title}</h3>
                        </div>
                    </div>

                    {/* Danh sách các File con lồng bên trong chuẩn cấu trúc Bento */}
                    <div className="flex flex-col gap-1.5 rounded-xl bg-zinc-50 border border-zinc-100 p-2">
                        <div className="flex items-center justify-between gap-2 rounded-lg bg-white border border-zinc-200/40 px-2 py-1.5 text-[11px] text-zinc-700">
                            <div className="flex items-center gap-1.5 truncate">
                                <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                                <span className="truncate font-medium">pitch_deck_v2.pdf</span>
                            </div>
                            <ChevronRight className="w-3 h-3 text-zinc-300" />
                        </div>
                        <div className="flex items-center justify-between gap-2 rounded-lg bg-white border border-zinc-200/40 px-2 py-1.5 text-[11px] text-zinc-700">
                            <div className="flex items-center gap-1.5 truncate">
                                <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                                <span className="truncate font-medium">financial_model.xlsx</span>
                            </div>
                            <ChevronRight className="w-3 h-3 text-zinc-300" />
                        </div>
                    </div>

                    {/* Footer đếm số lượng mục */}
                    <div className="flex items-center justify-between text-[10px] text-zinc-400 font-bold px-1">
                        <span>{node.meta}</span>
                        <span className="text-[9px] font-black uppercase text-zinc-300 tracking-wider">Assets</span>
                    </div>
                </motion.article>
            </div>
        </div>
    );
};