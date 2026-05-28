"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { HeroIconGrid } from "./hero-icon-grid";

export const ProjectHero = () => {
    return (
        // ĐẨY TOÀN BỘ SECTION LÊN: Giảm pt-32 xuống pt-20
        <section className="relative w-full pt-20 pb-20 flex flex-col items-center overflow-hidden">

            <HeroIconGrid />

            {/* NỘI DUNG CHỮ */}
            <div className="relative z-10 mx-auto max-w-3xl px-6 mt-10 md:mt-12 text-center">

                {/* TIÊU ĐỀ: Dùng font Outfit (chuẩn font-outfit m đã setup ở layout) */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
                >
                    Khám phá <br className="md:hidden" />
                    <span className="text-[#a1e2b6]">Dự án</span> {/* Dùng màu xanh nhạt của Kizuna thay cho emerald */}
                </motion.h1>

                {/* MÔ TẢ: Dùng font Inter cho dễ đọc */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-inter mt-6 text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto"
                >
                    Nơi các ý tưởng táo bạo nhất gặp gỡ nguồn vốn thiên thần.
                    Duyệt qua danh mục các startup đang được ươm tạo trong hệ sinh thái Kizuna Hub.
                </motion.p>

                {/* Ô TÌM KIẾM: Dùng font Geist đậm chất UI/UX */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="font-geist mt-10 max-w-xl mx-auto relative group"
                >
                    <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                        <Search className="w-5 h-5 text-slate-400 group-focus-within:text-white transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Tìm kiếm dự án (VD: EdTech, AI, Vòng Seed)..."
                        // Đổi viền khi focus thành Trắng thay vì xanh emerald
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-6 text-white placeholder:text-slate-500 outline-none focus:bg-white/10 focus:border-white/50 transition-all shadow-xl"
                    />
                    <button className="absolute inset-y-1.5 right-1.5 px-6 rounded-full bg-white text-[#102c1e] font-bold text-sm hover:bg-[#a1e2b6] transition-colors">
                        Tìm
                    </button>
                </motion.div>
            </div>

            {/* Lớp sương mờ che chân */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#081810] to-transparent pointer-events-none" />
        </section>
    );
};