"use client";

import React from "react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="w-full bg-[#102c1e] text-zinc-400">
            {/* TẦNG 1: THƯƠNG HIỆU & ĐIỀU HƯỚNG */}
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8">
                <div className="flex flex-col justify-between gap-16 md:flex-row md:gap-8">

                    {/* Cột Trái: Logo, Tagline & Socials */}
                    <div className="flex w-full flex-col md:w-1/3">
                        <div className="flex items-center gap-2 text-white">
                            <span className="font-serif text-2xl font-bold tracking-tight">
                                Kizuna Hub<span className="text-orange-400">.</span>
                            </span>
                        </div>

                        <p className="mt-6 max-w-xs text-sm leading-relaxed text-zinc-400">
                            Hệ sinh thái cộng sinh hoàn chỉnh. Bệ phóng vững chắc kết nối Startup sinh viên, Cố vấn và Nhà đầu tư.
                        </p>

                        {/* Social Icons (Bọc vòng tròn, hover sáng màu) */}
                        <div className="mt-8 flex items-center gap-3">
                            <a href="#" className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-white/10 hover:text-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:scale-110">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-white/10 hover:text-white">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 transition-transform group-hover:scale-110">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.976H5.078z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Cột Phải: Grid Links */}
                    <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 md:w-2/3">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold tracking-wider text-white">Sản phẩm</h4>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Nền tảng Ươm tạo</a></li>
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Bảng giá</a></li>
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Nhật ký cập nhật</a></li>
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Dành cho Doanh nghiệp</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold tracking-wider text-white">Tài nguyên</h4>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Trung tâm hỗ trợ</a></li>
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Tài liệu API</a></li>
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Cộng đồng</a></li>
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Blog</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold tracking-wider text-white">Công ty</h4>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Về chúng tôi</a></li>
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Liên hệ</a></li>
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Điều khoản sử dụng</a></li>
                                <li><a href="#" className="text-sm transition-all hover:translate-x-1 hover:text-white inline-block">Bảo mật thông tin</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* TẦNG 2: BOTTOM BAR (Copyright & System Status) */}
            <div className="border-t border-white/5">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">

                    <p className="text-xs font-medium text-zinc-500">
                        © {new Date().getFullYear()} Kizuna Hub, Inc. Đã đăng ký bản quyền.
                    </p>

                    {/* System Status: Tuyệt chiêu UI của dân Enterprise */}
                    <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1.5 transition-colors hover:bg-white/10 cursor-pointer">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        <span className="text-[11px] font-semibold text-zinc-400">Hệ thống hoạt động bình thường</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}