"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutHeroSection = () => {
    return (
        // Đã sửa pt-20 thành pt-32 (hoặc pt-40 tùy độ dày navbar) để tránh chữ bị navbar che mất
        <section className="relative w-full min-h-[90vh] md:min-h-screen bg-[#fafafa] flex items-center overflow-hidden pt-32 pb-16">

            {/* HÌNH ẢNH BACKGROUND (BÊN PHẢI) */}
            <div className="absolute top-0 right-0 h-full w-full lg:w-[60%] z-0">
                <div className="absolute inset-0 bg-[#fafafa] mix-blend-multiply opacity-20 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                    alt="Kizuna Hub Ecosystem"
                    className="h-full w-full object-cover object-center"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
                        maskImage: 'linear-gradient(to right, transparent 0%, black 30%)'
                    }}
                />
            </div>

            {/* NỘI DUNG (BÊN TRÁI) */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="max-w-2xl">

                    {/* Badge (Pill) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 shadow-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                            Sứ mệnh Kizuna Hub
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-8 font-serif text-5xl font-bold tracking-tight text-[#102c1e] md:text-6xl lg:text-7xl leading-[1.1] text-balance"
                    >
                        Khởi nghiệp là hành trình gian nan. <br />
                        <span className="text-slate-500 font-medium text-4xl md:text-5xl lg:text-6xl">Bạn không đơn độc.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 max-w-xl text-lg font-medium text-slate-600 leading-relaxed"
                    >
                        Kizuna Hub được xây dựng để trở thành một hệ sinh thái cộng sinh thực thụ. Nơi kết nối Founder, Mentor và Nhà đầu tư thông qua dữ liệu minh bạch và hỗ trợ thực chiến.
                    </motion.p>

                    {/* Cụm Lead Capture */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 max-w-md"
                    >
                        <form className="flex w-full items-center gap-2 rounded-full bg-white p-2 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn..."
                                className="flex-1 bg-transparent px-4 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                                required
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-[#102c1e] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
                            >
                                Đăng ký nhận tin
                            </button>
                        </form>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        <div className="flex -space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-500">FD</div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-xs font-bold text-emerald-600">MT</div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-xs font-bold text-amber-600">IV</div>
                        </div>
                        <p className="text-xs font-medium text-slate-500 leading-snug">
                            Được định hình bởi các <strong className="text-slate-700">Founder</strong> và <strong className="text-slate-700">Investor</strong> hàng đầu.<br />
                            <a href="#" className="font-bold text-[#102c1e] underline decoration-[#102c1e]/30 underline-offset-4 hover:decoration-[#102c1e]">Góp thêm tiếng nói của bạn</a>
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};