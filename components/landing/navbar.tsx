"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
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

    const useDarkText = isScrolled || theme === "light";

    return (
        <motion.header
            className={cn(
                "fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                // XÓA BỎ BORDER: Chỉ giữ lại khối màu nền đặc #081810
                !isScrolled && theme === "dark"
                    ? "bg-[#081810]"
                    : "pointer-events-none"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div
                className={cn(
                    "pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isScrolled
                        ? "w-[90%] max-w-4xl mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-4 py-3" // Pill trắng khi cuộn (xóa border thừa)
                        : "w-full max-w-7xl mt-0 bg-transparent px-6 py-5 shadow-none" // Hòa vào khối màu nền header
                )}
            >
                {/* LOGO */}
                <Link
                    href="/"
                    className={cn(
                        "font-serif font-bold text-2xl tracking-tight flex items-center gap-1 transition-colors duration-500",
                        useDarkText ? "text-[#102c1e]" : "text-white"
                    )}
                >
                    Kizuna Hub
                </Link>

                {/* LINKS Ở GIỮA */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-semibold">
                    <Link href="/ecosystem" className={cn("transition-colors duration-500 hover:opacity-70", useDarkText ? "text-slate-700 hover:text-black" : "text-white/80 hover:text-white")}>Hệ sinh thái</Link>
                    <Link href="/project" className={cn("transition-colors duration-500 hover:opacity-70", useDarkText ? "text-slate-700 hover:text-black" : "text-white/80 hover:text-white")}>Dự án</Link>
                    <Link href="/pricing" className={cn("transition-colors duration-500 hover:opacity-70", useDarkText ? "text-slate-700 hover:text-black" : "text-white/80 hover:text-white")}>Bảng giá</Link>
                    <Link href="/about-us" className={cn("transition-colors duration-500 hover:opacity-70", useDarkText ? "text-slate-700 hover:text-black" : "text-white/80 hover:text-white")}>Về chúng tôi</Link>
                </nav>

                {/* NÚT ACTION BÊN PHẢI */}
                <div className="flex items-center gap-6">
                    <Link href="/signup" className={cn(
                        "text-sm font-bold px-6 py-2.5 transition-all duration-500 rounded-lg",
                        useDarkText
                            ? "bg-[#102c1e] text-white hover:bg-slate-800"
                            : "bg-white text-[#102c1e] hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    )}>
                        Truy cập
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}