"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Giữ nguyên cn của mày

const STARTUP_DATA = [
    { month: "T1", preSeed: 25, seed: 10 },
    { month: "T2", preSeed: 35, seed: 15 },
    { month: "T3", preSeed: 20, seed: 10 },
    { month: "T4", preSeed: 50, seed: 25 },
    { month: "T5", preSeed: 65, seed: 30 },
    { month: "T6", preSeed: 40, seed: 15 },
    { month: "T7", preSeed: 55, seed: 20 },
];

export const StartupGrowthWidget = () => {
    const maxTotal = Math.max(...STARTUP_DATA.map(d => d.preSeed + d.seed));

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { height: 0, opacity: 0 },
        show: {
            height: "100%",
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 50,
                damping: 15
            }
        }
    };

    return (
        <div className="flex flex-col rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 lg:col-span-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-800">Dự án Ươm tạo</h4>
            </div>

            <div className="mt-6 flex items-end gap-6">
                <div>
                    <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-900">186</h2>
                    <p className="mt-1 text-xs font-medium text-slate-400">Dự án mới (6 tháng qua)</p>
                </div>
                <div className="flex gap-2 mb-1.5 flex-col sm:flex-row">
                    {/* Chuyển sang tông Emerald */}
                    <div className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800 border border-emerald-100">
                        <div className="h-2 w-2 rounded-[2px] bg-emerald-800" /> Pre-Seed
                    </div>
                    <div className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-500 border border-emerald-100">
                        <div className="h-2 w-2 rounded-[2px] bg-emerald-400" /> Seed
                    </div>
                </div>
            </div>

            <motion.div
                variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="mt-8 flex h-48 w-full items-end justify-between gap-2 px-2 group/chart"
            >
                {STARTUP_DATA.map((data, i) => {
                    const preSeedHeight = (data.preSeed / maxTotal) * 100;
                    const seedHeight = (data.seed / maxTotal) * 100;

                    return (
                        <div key={i} className="flex h-full w-full flex-col justify-end gap-1 group/bar cursor-pointer transition-opacity duration-300 hover:!opacity-100 group-hover/chart:opacity-40">
                            <div className="flex w-full flex-col justify-end gap-[2px] relative h-full">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-200 z-10 pointer-events-none">
                                    <div className="rounded-md bg-slate-800 px-2.5 py-1.5 text-[11px] text-white font-bold shadow-lg whitespace-nowrap">
                                        {data.preSeed + data.seed} Dự án
                                    </div>
                                </div>

                                <motion.div variants={itemVariants} className="w-full flex flex-col justify-end gap-[2px]" style={{ height: `${preSeedHeight + seedHeight}%` }}>
                                    {/* Cột Emerald đậm */}
                                    <div className="w-full rounded-t-[4px] rounded-b-[2px] bg-emerald-800 transition-colors duration-300 group-hover/bar:bg-emerald-900" style={{ height: `${(data.preSeed / (data.preSeed + data.seed)) * 100}%` }} />
                                    {/* Cột Emerald nhạt */}
                                    <div className="w-full rounded-t-[2px] rounded-b-[4px] bg-emerald-300 transition-colors duration-300 group-hover/bar:bg-emerald-500" style={{ height: `${(data.seed / (data.preSeed + data.seed)) * 100}%` }} />
                                </motion.div>
                            </div>

                            <span className={cn("mt-2 text-center text-[11px] font-bold text-slate-400 transition-colors group-hover/bar:text-slate-800")}>{data.month}</span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};