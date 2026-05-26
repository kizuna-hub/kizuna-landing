"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- COMPONENT: Thẻ trôi nổi (Floating Pill) ---
const FloatingPill = ({
    text, icon, delay, className
}: {
    text: string; icon: string; delay: number; className?: string
}) => (
    <motion.div
        className={cn(
            "absolute hidden md:flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 px-4 py-2 text-sm font-semibold text-[#0a1c13] shadow-xl shadow-slate-200/50 backdrop-blur-md",
            className
        )}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
        <span>{icon}</span>
        {text}
    </motion.div>
);

export function EcosystemHero() {
    return (
        <section className="relative flex min-h-[95vh] w-full flex-col items-center justify-center overflow-hidden bg-[#fafafa] pt-24">

            {/* Lớp nền: Dot Pattern siêu mờ để không bị "phẳng lì" */}
            <div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 100%)"
                }}
            />

            {/* --- CÁC THẺ TRÔI NỔI (Thay cho mấy con ma trong ảnh mẫu) --- */}
            <FloatingPill text="AI Matching" icon="🧠" delay={0} className="top-[25%] left-[15%] rotate-[-6deg]" />
            <FloatingPill text="Seed Funding" icon="💸" delay={1.2} className="top-[20%] right-[12%] rotate-[8deg]" />
            <FloatingPill text="Cap Table" icon="📊" delay={0.8} className="bottom-[35%] left-[10%] rotate-[4deg]" />
            <FloatingPill text="Verified Mentors" icon="✨" delay={1.5} className="bottom-[40%] right-[15%] rotate-[-4deg]" />

            {/* --- NỘI DUNG CHÍNH --- */}
            <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1.5 pr-5 shadow-sm"
                >
                    <div className="flex -space-x-2">
                        {/* Fake Avatars */}
                        <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="" />
                        <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="" />
                        <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="" />
                    </div>
                    <span className="text-xs font-bold text-slate-600">Được tin dùng bởi 500+ Founders</span>
                </motion.div>

                {/* Headline: Dùng màu Xanh đen tuyền (#081810), Font to, in đậm */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-sans text-6xl font-black tracking-tighter text-[#081810] md:text-7xl lg:text-[5.5rem] leading-[1.05]"
                >
                    Kiến tạo Startup <br className="hidden md:block" />
                    thực thụ. <span className="text-slate-400">Ngay hôm nay.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 max-w-2xl text-lg font-medium text-slate-500 md:text-xl"
                >
                    Loại bỏ những quy trình gọi vốn và vận hành rườm rà. Kết nối trực tiếp đội ngũ của bạn với Mentors và Investors hàng đầu chỉ trong vài phút.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-10"
                >
                    <button className="group flex h-14 items-center gap-2 rounded-full bg-[#16452a] px-8 text-base font-bold text-white transition-all hover:scale-105 hover:bg-[#0a1c13] shadow-[0_10px_40px_-10px_rgba(22,69,42,0.5)]">
                        Bắt đầu hành trình
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </div>

            {/* --- LOGO TICKER (BĂNG CHUYỀN ĐỐI TÁC) CHẠY Ở ĐÁY --- */}
            <div className="absolute bottom-0 w-full overflow-hidden border-t border-slate-200 bg-white py-6 pt-10">
                <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-16 px-8">
                    {/* Lặp lại mảng logo 2 lần để tạo hiệu ứng chạy liên tục */}
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-xl font-bold text-slate-300">Pioneer Founder</span>
                            <Sparkles className="h-4 w-4 text-slate-200" />
                            <span className="text-xl font-bold text-slate-300">Startup Ecosystem</span>
                            <Sparkles className="h-4 w-4 text-slate-200" />
                            <span className="text-xl font-bold text-slate-300">Seed Ventures</span>
                            <Sparkles className="h-4 w-4 text-slate-200" />
                            <span className="text-xl font-bold text-slate-300">AI Policy</span>
                            <Sparkles className="h-4 w-4 text-slate-200" />
                        </React.Fragment>
                    ))}
                </div>
            </div>

        </section>
    );
}