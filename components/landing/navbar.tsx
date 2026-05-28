"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Dự án", href: "/project" },
    { name: "Bảng giá", href: "/pricing" },
    { name: "Về chúng tôi", href: "/about-us" },
];

export function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

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

    // XỬ LÝ CLICK: Cho phép TẤT CẢ các trang tự cuộn mượt lên đầu nếu đang đứng ở trang đó
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (pathname === href) {
            e.preventDefault(); // Chặn việc Next.js xử lý chuyển trang vì đang ở sẵn trang đó rồi
            window.scrollTo({
                top: 0,
                behavior: "smooth", // Cuộn mượt mà
            });
        }
    };

    return (
        <motion.header
            className={cn(
                "fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
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
                        ? "w-[90%] max-w-4xl mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-4 py-3"
                        : "w-full max-w-7xl mt-0 bg-transparent px-6 py-4 shadow-none"
                )}
            >
                {/* LOGO */}
                <Link
                    href="/"
                    onClick={(e) => handleNavClick(e, "/")}
                    className={cn(
                        "font-serif font-bold text-2xl tracking-tight flex items-center gap-1 transition-colors duration-500",
                        useDarkText ? "text-[#102c1e]" : "text-white"
                    )}
                >
                    Kizuna Hub
                </Link>

                {/* LINKS Ở GIỮA */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-geist">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)} // Gọi hàm xử lý cuộn mượt cho từng link
                                className={cn(
                                    "relative py-1 transition-colors duration-500 hover:opacity-70",
                                    useDarkText
                                        ? "text-slate-700 hover:text-black"
                                        : "text-white/80 hover:text-white",
                                    isActive && (useDarkText ? "text-black font-semibold" : "text-white font-semibold")
                                )}
                            >
                                {link.name}

                                {/* ĐƯỜNG GẠCH DƯỚI KHI ACTIVE */}
                                {isActive && (
                                    <span
                                        className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-current"
                                        aria-hidden="true"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* NÚT ACTION BÊN PHẢI */}
                <div className="flex items-center gap-6">
                    <a href="https://kizuna-swart.vercel.app/vi/auth/login" className={cn(
                        "text-sm font-bold px-6 py-2.5 transition-all duration-500 rounded-lg",
                        useDarkText
                            ? "bg-[#102c1e] text-white hover:bg-slate-800"
                            : "bg-white text-[#102c1e] hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    )}>
                        Truy cập
                    </a>
                </div>
            </div>
        </motion.header>
    );
}