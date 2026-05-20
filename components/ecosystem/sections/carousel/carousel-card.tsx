import React from "react";
import { cn } from "@/lib/utils";
import { CarouselItem } from "./carousel-data";

export const CarouselCard = ({ item }: { item: CarouselItem }) => {
    return (
        <div className="group flex h-[480px] w-[280px] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl sm:w-[320px]">
            {/* Top Half (Visual Mockup) - Nền xám nhạt để khối Mockup trắng nổi lên */}
            <div className="relative flex h-[55%] w-full items-center justify-center overflow-hidden border-b border-zinc-100 bg-zinc-50 p-4">
                {item.mockup}
            </div>

            {/* Bottom Half (Content) - Chữ tối màu trên nền trắng */}
            <div className="flex h-[45%] flex-col gap-2 p-6">
                <span className={cn("text-[11px] font-bold uppercase tracking-widest", item.color)}>
                    {item.accentTitle}
                </span>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-zinc-900">
                    {item.heading}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-500">
                    {item.description}
                </p>
            </div>
        </div>
    );
};