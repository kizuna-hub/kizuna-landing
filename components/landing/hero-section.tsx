"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FloatingBackground } from "./floating-background";
import { DashboardPeek } from "./dashboard-peek";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Chỉ trượt nhẹ nhàng, không scale, không làm màu
    const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        // Đổi base background sang #0a1c13 để đồng bộ với Network Showcase
        <div ref={containerRef} className="relative bg-[#0a1c13] mt-20 flex flex-col items-center overflow-x-hidden">

            {/* Background Glows Premium (Lấy từ NetworkShowcase) */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_40%)]" />
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-[#0a1c13] to-[#0a1c13]" />

            {/* Giữ lại Floating Background chìm phía dưới */}
            <div className="absolute inset-0 z-0 opacity-80">
                <FloatingBackground />
            </div>

            {/* Content: Tăng padding bottom để tạo "đất" cho cái ảnh trượt lên mà ko đè chữ */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-20 px-4 w-full">
                <h1 className="text-5xl md:text-7xl font-bold text-white text-center tracking-tighter max-w-5xl leading-[1.1]">
                    Bệ phóng <br />
                    <span className="text-emerald-400 italic font-serif">Bảo vệ</span> Startup của bạn.
                </h1>

                <p className="text-emerald-50/70 max-w-2xl text-center mt-8 text-lg md:text-xl leading-relaxed">
                    Trong vòng 10 phút, bạn sẽ bảo mật tài sản, cấu trúc bảng vốn (cap table), và tạo bước tiến cho dự án đang bế tắc.
                </p>

                <div className="mt-10 mb-25">
                    {/* Thêm hiệu ứng hover/active cho nút bớt cứng */}
                    <button className="bg-white text-[#102c1e] font-bold px-10 py-4 rounded-[12px] shadow-lg shadow-emerald-900/20 transition-transform hover:scale-105 active:scale-95">
                        Bắt đầu ngay
                    </button>
                </div>
            </div>

            {/* Dashboard: Dùng margin âm cực nhẹ, chỉ để nó "gối" lên section trên 1 xíu */}
            <div className="w-full relative z-20 mt-0">
                <DashboardPeek y={dashboardY} />
            </div>
        </div>
    );
}