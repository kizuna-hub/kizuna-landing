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
        <div ref={containerRef} className="relative bg-[#102c1e] flex flex-col items-center overflow-x-hidden">
            <FloatingBackground />

            {/* Content: Tăng padding bottom để tạo "đất" cho cái ảnh trượt lên mà ko đè chữ */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-20 px-4 w-full">
                <h1 className="text-5xl md:text-7xl font-bold text-white text-center tracking-tighter max-w-5xl leading-[1.1]">
                    Bệ phóng <br />
                    <span className="text-emerald-400 italic font-serif">Bảo vệ</span> Startup của bạn.
                </h1>

                <p className="text-emerald-50/70 max-w-2xl text-center mt-8 text-lg md:text-xl leading-relaxed">
                    Trong vòng 10 phút, bạn sẽ bảo mật tài sản, cấu trúc bảng vốn (cap table), và tạo bước tiến cho dự án đang bế tắc.
                </p>

                <div className="mt-10 mb-25"> {/* Tạo khoảng trống cố định dưới nút */}
                    <button className="bg-white text-[#102c1e] font-bold px-10 py-4 rounded-[12px] shadow-lg shadow-emerald-900/20">
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