"use client";

import React from "react";
import { motion } from "framer-motion";

export const CTAMockups = () => {
    return (
        // Tăng chiều cao container lên 600px để có không gian cho ảnh rớt xuống
        <div className="relative mx-auto h-[500px] w-full max-w-5xl overflow-hidden [perspective:2000px] md:h-[600px]">

            {/* Lớp Mask trắng che nửa dưới */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-[50%] bg-gradient-to-t from-white via-white/90 to-transparent" />

            <div
                className="absolute inset-0 h-full w-full"
                style={{
                    transform: "rotateX(15deg) rotateY(25deg) rotateZ(-5deg)",
                    transformStyle: "preserve-3d"
                }}
            >
                {/* ---------------------------------------------------
                    MÀN HÌNH 1 (PHÍA SAU): Đẩy sát lề trái, tít lên trên
                    --------------------------------------------------- */}
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    // SỬA: left-[2%], top-[5%], width 70%. Thu hẹp width lại để chừa chỗ.
                    className="absolute left-[2%] top-[5%] z-10 h-[380px] w-[85%] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:left-[5%] md:top-[5%] md:h-[450px] md:w-[70%]"
                    style={{ transform: "translateZ(-80px)" }} // Đẩy sâu ra sau hơn
                >
                    <div className="relative z-10 flex h-12 w-full items-center gap-2 border-b border-slate-200 bg-white/90 px-4 backdrop-blur-md">
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-amber-400" />
                        <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
                        alt="Modern Workspace"
                        className="absolute inset-0 h-full w-full object-cover opacity-90"
                    />
                </motion.div>

                {/* ---------------------------------------------------
                    MÀN HÌNH 2 (PHÍA TRƯỚC): Đẩy sang lề phải, hạ thấp xuống
                    --------------------------------------------------- */}
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                    // SỬA: Dùng right-[2%] thay vì left, top-[25%]. Đẩy xa nhau ra!
                    className="absolute right-[2%] top-[25%] z-20 h-[400px] w-[90%] rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] md:right-[5%] md:top-[25%] md:h-[450px] md:w-[70%]"
                    style={{ transform: "translateZ(80px)" }} // Kéo lại gần mặt hơn
                >
                    {/* Header cửa sổ */}
                    <div className="flex h-12 w-full items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-amber-400" />
                            <div className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-xs font-semibold text-slate-500">Kizuna Hub - Analytics</span>
                        <div className="flex gap-1.5">
                            <div className="h-1.5 w-6 rounded-full bg-slate-200" />
                        </div>
                    </div>

                    {/* Dữ liệu thật (Bento Trắng) */}
                    <div className="flex flex-col gap-4 p-6">
                        <div className="flex items-end justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800">Dự án: EduTech AI</h3>
                                <p className="mt-1 text-xs font-medium text-slate-500">Giai đoạn: Vòng Seed</p>
                            </div>
                            <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
                                Đang gọi vốn
                            </div>
                        </div>

                        <div className="mt-2 grid grid-cols-2 gap-4">
                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Cố vấn chuyên môn</span>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">TH</div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800">Takeru Hishinuma</p>
                                        <p className="text-[10px] text-slate-500">Đại học Waseda</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Tiến độ Dòng vốn</span>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-xl font-bold text-slate-800">$120,000</p>
                                    <span className="text-xs text-slate-400">/ $150k</span>
                                </div>
                                <div className="mt-3 h-1.5 w-full rounded-full bg-slate-200">
                                    <div className="h-full w-[80%] rounded-full bg-emerald-500" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                                <span className="text-xs font-semibold text-slate-700">Lịch trình Tuần 3</span>
                            </div>
                            <div className="flex items-center gap-3 pt-1">
                                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                <span className="text-xs font-medium text-slate-700">Chốt Deal với Investor thiên thần</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-slate-300" />
                                <span className="text-xs font-medium text-slate-500">Hoàn thiện pháp lý Hợp đồng</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};