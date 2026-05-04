"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Hàm tiện ích để gộp class Tailwind mượt mà
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // Lớp ngoài cùng cố định và ôm trọn chiều ngang, pointer-events-none để không chặn click ở phần viền
        <motion.header
            className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Hiệu ứng lúc mới load trang
        >
            {/* Lớp bên trong: Đây mới là cái khung Navbar thực sự sẽ co giãn */}
            <div
                className={cn(
                    "pointer-events-auto flex items-center justify-between transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isScrolled
                        ? "w-[70%] max-w-3xl mt-3 bg-white/95 backdrop-blur-xl rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-2.5 py-2 border border-zinc-200/50" // SCROLLED: Thu gọn, bo góc 24px (vừa phải)
                        : "w-full max-w-7xl mt-0 bg-transparent px-5 py-4 rounded-[12px] border-transparent" // TOP: Rộng bằng nội dung web (max-w-7xl), không bám sát mép màn hình
                )}
            >
                {/* LOGO */}
                <div className={cn(
                    "font-bold text-xl tracking-tight flex items-center gap-1 transition-colors duration-[800ms]",
                    isScrolled ? "text-[#102c1e]" : "text-white"
                )}>
                    Kizuna Hub <span className="text-[#f97316]">.</span>
                </div>

                {/* LINKS Ở GIỮA */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#ecosystem" className={cn("transition-colors duration-[800ms] hover:opacity-70", isScrolled ? "text-zinc-600 hover:text-black" : "text-zinc-300 hover:text-white")}>Hệ sinh thái</Link>
                    <Link href="#security" className={cn("transition-colors duration-[800ms] hover:opacity-70", isScrolled ? "text-zinc-600 hover:text-black" : "text-zinc-300 hover:text-white")}>Bảo mật</Link>
                    <Link href="#heritage" className={cn("transition-colors duration-[800ms] hover:opacity-70", isScrolled ? "text-zinc-600 hover:text-black" : "text-zinc-300 hover:text-white")}>Di sản</Link>
                    <Link href="#pricing" className={cn("transition-colors duration-[800ms] hover:opacity-70", isScrolled ? "text-zinc-600 hover:text-black" : "text-zinc-300 hover:text-white")}>Bảng giá</Link>
                </nav>

                {/* NÚT ACTION BÊN PHẢI */}
                <div className="flex items-center gap-6">
                    <Link href="/login" className={cn(
                        "text-sm font-medium hover:opacity-70 transition-colors duration-[800ms]",
                        isScrolled ? "text-zinc-900" : "text-white"
                    )}>
                        Đăng nhập
                    </Link>

                    <Link href="/signup" className={cn(
                        "text-sm font-bold px-6 py-2.5 transition-all duration-[800ms]",
                        isScrolled
                            ? "bg-[#102c1e] text-white hover:bg-[#102c1e]/80 rounded-[8px]" // Khi cuộn, nút bấm cũng bo góc vuông vức theo Navbar
                            : "bg-white text-[#102c1e] hover:bg-white/95 shadow-[0_0_20px_rgba(16,185,129,0.3)] rounded-[8px]"
                    )}>
                        Nhận quyền truy cập
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}