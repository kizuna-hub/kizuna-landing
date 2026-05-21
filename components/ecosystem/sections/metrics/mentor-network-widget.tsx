"use client";

import React from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export const MentorNetworkWidget = () => (
    <div className="flex flex-col rounded-3xl bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 lg:col-span-8 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-between mb-6">
            <h4 className="text-base font-semibold text-slate-800">Mạng lưới Cố vấn (Global)</h4>
            <button className="rounded-full bg-slate-50 p-2 text-slate-400 hover:bg-slate-100">
                <ArrowUpRight className="h-4 w-4" />
            </button>
        </div>

        <div className="flex h-full flex-col gap-6 md:flex-row">
            {/* Bản đồ xanh lá */}
            <div className="relative flex-1 rounded-2xl bg-slate-50 p-4 overflow-hidden flex items-center justify-center">
                <Globe className="absolute h-[150%] w-[150%] text-emerald-200 opacity-30" strokeWidth={0.5} />
                <div className="absolute left-[30%] top-[40%] h-3 w-3 rounded-full bg-emerald-600 shadow-[0_0_15px_rgba(5,150,105,0.6)] animate-pulse" />
                <div className="absolute left-[60%] top-[30%] h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                <div className="absolute left-[80%] top-[60%] h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>

            {/* Bảng thống kê */}
            <div className="flex w-full flex-col justify-between md:w-1/3">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900">4,280</h2>
                    <p className="mt-1 text-xs text-slate-400">Chuyên gia đang hoạt động</p>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                    {["Việt Nam", "Nhật Bản", "Singapore"].map((country, i) => (
                        <div key={country} className="flex items-center justify-between text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <span className={cn("h-2 w-4 rounded-sm",
                                    i === 0 ? "bg-emerald-800" : i === 1 ? "bg-emerald-500" : "bg-emerald-300"
                                )} />
                                <span className="text-slate-600">{country}</span>
                            </div>
                            <span className="text-slate-900 font-bold">
                                {i === 0 ? "2,145" : i === 1 ? "1,280" : "855"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);