"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CAPITAL_DATA = [
    { label: "T1", deal: 30, capital: 20 },
    { label: "T2", deal: 45, capital: 35 },
    { label: "T3", deal: 35, capital: 45 },
    { label: "T4", deal: 60, capital: 40 },
    { label: "T5", deal: 50, capital: 65 },
    { label: "T6", deal: 80, capital: 75 },
    { label: "T7", deal: 70, capital: 90 },
];

export const CapitalFlowWidget = () => {
    const emeraldLinePath = "M 0 70 C 15 70, 15 45, 33 45 C 50 45, 50 60, 66 60 C 83 60, 83 20, 100 20";
    const mintLinePath = "M 0 80 C 15 80, 15 55, 33 65 C 50 75, 50 40, 66 50 C 83 60, 83 10, 100 10";

    return (
        <div className="flex flex-col rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 lg:col-span-7 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-800">Dòng vốn Đầu tư</h4>
                <div className="flex gap-1 rounded-lg bg-slate-50 p-1 text-xs font-semibold border border-slate-100">
                    <button className="rounded-md px-3 py-1.5 text-slate-400 hover:text-slate-800 transition-colors">1M</button>
                    <button className="rounded-md bg-white px-3 py-1.5 text-slate-800 shadow-sm">6M</button>
                    <button className="rounded-md px-3 py-1.5 text-slate-400 hover:text-slate-800 transition-colors">1Y</button>
                </div>
            </div>

            <div className="mt-6">
                <div className="flex items-end gap-3">
                    <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-900">$2.45M</h2>
                    <span className="mb-1.5 flex items-center rounded-md bg-emerald-50 px-1.5 py-0.5 text-[11px] font-bold text-emerald-600 border border-emerald-100">
                        <ArrowUpRight className="h-3 w-3 mr-0.5" /> 12.4%
                    </span>
                </div>
                <p className="mt-1 text-xs font-medium text-slate-400">Vốn thực rót (6 tháng qua)</p>
            </div>

            <div className="relative mt-8 h-48 w-full">
                <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="emeraldGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#059669" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    <motion.path
                        d={`${emeraldLinePath} L 100 100 L 0 100 Z`}
                        fill="url(#emeraldGradient)"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.path
                        d={mintLinePath} fill="none" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path
                        d={emeraldLinePath} fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    />
                </svg>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5, type: "spring" }}
                    className="absolute left-[83%] top-[20%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center group cursor-pointer"
                >
                    <div className="h-4 w-4 rounded-full border-[3px] border-white bg-emerald-600 shadow-md transition-transform group-hover:scale-125" />
                    <div className="h-24 w-px border-l border-dashed border-emerald-200 opacity-50" />
                </motion.div>
            </div>
        </div>
    );
};