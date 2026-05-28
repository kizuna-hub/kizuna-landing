"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="w-full sm:w-auto"
        >
            <button className={cn("w-full sm:w-auto", className)} onClick={onClick}>
                {children}
            </button>
        </motion.div>
    );
};

export const CTAContent = () => {

    // Hàm xử lý khi bấm nút "Tham gia miễn phí"
    const handleImplosionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Tạm chặn việc chuyển trang

        // Lấy tâm của cái nút bấm để làm tâm Hố Đen
        const btnRect = e.currentTarget.getBoundingClientRect();
        const centerX = btnRect.left + btnRect.width / 2;
        const centerY = btnRect.top + btnRect.height / 2;

        // Bắn tín hiệu sang file Particle Canvas
        window.dispatchEvent(
            new CustomEvent("TRIGGER_IMPLODE", { detail: { x: centerX, y: centerY } })
        );

        // Sau 600ms (hiệu ứng hút xong) thì mới chuyển hướng
        setTimeout(() => {
            window.location.href = "https://kizuna-swart.vercel.app/vi/auth/login";
        }, 600);
    };

    return (
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center px-6 pointer-events-none pb-10"
            style={{ background: 'radial-gradient(circle, rgba(250,250,250,0.85) 0%, rgba(250,250,250,0) 65%)' }}
        >
            <div className="overflow-hidden pb-2">
                <motion.h2
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="font-serif text-5xl font-bold leading-tight text-[#102c1e] md:text-6xl lg:text-[72px] tracking-tight text-balance"
                >
                    Sẵn sàng bứt phá
                </motion.h2>
            </div>

            <div className="overflow-hidden pb-2">
                <motion.h2
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="font-serif text-5xl font-bold leading-tight text-[#102c1e]/80 md:text-6xl lg:text-[72px] tracking-tight text-balance"
                >
                    cùng hệ sinh thái?
                </motion.h2>
            </div>

            <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="mt-6 max-w-2xl text-lg text-[#102c1e]/70 md:text-xl font-medium"
            >
                Dù bạn là Founder đang tìm bệ phóng, hay Mentor muốn tạo dựng di sản, Kizuna Hub cung cấp mọi công cụ bạn cần.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6 pointer-events-auto w-full justify-center"
            >
                {/* GẮN SỰ KIỆN CLICK VÀO NÚT NÀY */}
                <MagneticButton
                    onClick={handleImplosionClick}
                    className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-[#102c1e] px-8 font-bold text-white shadow-xl shadow-[#102c1e]/20 transition-all hover:bg-[#163f2b] hover:shadow-2xl hover:shadow-[#102c1e]/30"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Tham gia miễn phí
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]" />
                </MagneticButton>

                <MagneticButton className="flex h-14 w-full sm:w-auto items-center justify-center rounded-full border-2 border-[#102c1e]/20 bg-transparent px-8 font-bold text-[#102c1e] transition-all hover:border-[#102c1e]/60 hover:bg-[#102c1e]/5">
                    Trở thành Nhà đầu tư
                </MagneticButton>
            </motion.div>
        </div>
    );
};