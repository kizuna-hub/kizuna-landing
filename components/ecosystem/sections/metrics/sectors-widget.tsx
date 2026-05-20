"use client";

import React from "react";
import { PieChart } from "lucide-react";

export const SectorsWidget = () => (
    <div className="flex flex-col rounded-3xl bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 lg:col-span-4 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-between mb-4">
            <h4 className="text-base font-semibold text-slate-800">Cơ cấu Lĩnh vực</h4>
            <PieChart className="h-5 w-5 text-slate-300" />
        </div>

        {/* Bong bóng dữ liệu theo tông Xanh Kizuna */}
        <div className="relative flex h-48 w-full items-center justify-center">
            {/* SaaS Bubble (Đậm nhất) */}
            <div className="absolute left-4 top-4 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-emerald-800/20 shadow-sm transition-transform hover:scale-105">
                <span className="text-2xl font-bold text-emerald-900">46%</span>
                <span className="text-[10px] font-medium text-emerald-700">SaaS B2B</span>
            </div>
            {/* EdTech Bubble (Vừa) */}
            <div className="absolute bottom-2 right-4 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-emerald-500/20 shadow-sm transition-transform hover:scale-105">
                <span className="text-xl font-bold text-emerald-800">32%</span>
                <span className="text-[10px] font-medium text-emerald-600">EdTech</span>
            </div>
            {/* AI Bubble (Nhạt nhất) */}
            <div className="absolute right-10 top-2 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-emerald-300/20 shadow-sm transition-transform hover:scale-105">
                <span className="text-sm font-bold text-emerald-700">22%</span>
                <span className="text-[8px] font-medium text-emerald-500">AI / Tech</span>
            </div>
        </div>
    </div>
);