"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface DashboardPeekProps {
    y: MotionValue<number | string>;
}

export function DashboardPeek({ y }: DashboardPeekProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Bắt sự kiện cuộn riêng cho khối Dashboard này
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // KỸ THUẬT INNER PARALLAX: Cho cái ảnh bên trong trượt nhẹ ngược chiều cuộn
    const innerY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    const imageUrl = "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=2000";

    return (
        <motion.div
            ref={containerRef}
            style={{ y }}
            className="relative mx-auto w-11/12 max-w-6xl h-[800px] z-20"
        >
            {/* KHUNG CHỨA: 
                - Đã vứt bỏ hoàn toàn shadow khổng lồ gây tối.
                - Giữ lại border mảnh và bo góc.
            */}
            <div className="relative w-full h-full rounded-[32px] border border-white/10 overflow-hidden bg-[#0a1c13]">

                {/* ẢNH BACKGROUND NẰM TRONG KHỐI MOTION RIÊNG */}
                <motion.div
                    // Mẹo: Cho ảnh cao 110% và đẩy lên -5% để khi trượt lên/xuống không bị lộ viền trống
                    className="absolute inset-0 w-full h-[110%] -top-[5%]"
                    style={{
                        y: innerY,
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* LỚP PHỦ GRADIENT (VIGNETTE):
                    Làm sáng lại lớp phủ, bỏ via-transparent để nó không bị sạm đen ở đáy.
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102c1e]/70 to-transparent opacity-80" />

                {/* INNER GLOW */}
                <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none" />
            </div>
        </motion.div>
    );
}