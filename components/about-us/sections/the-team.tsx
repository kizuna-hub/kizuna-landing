"use client";

import React from "react";
import { motion } from "framer-motion";

// Dữ liệu Team đã được cấu trúc lại theo style Editorial (Tạp chí)
const TEAM_MEMBERS = [
    {
        id: "ngoc",
        name: "Ngọc",
        title: "Founder & Fullstack AI Engineer",
        specialties: "Trí tuệ nhân tạo, Kiến trúc hệ thống, Chiến lược sản phẩm",
        accodales: "Phát triển các dự án công nghệ lõi, kiến tạo hệ sinh thái cộng sinh Kizuna Hub nhằm đưa các ý tưởng khởi nghiệp vươn xa.",
        // Mẹo: Dùng ảnh PNG tách nền (transparent) thì phần background màu xanh lá sẽ hiện ra cực đẹp
        img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "sango",
        name: "Sango",
        title: "Co-Founder, Product Operations",
        specialties: "Vận hành sản phẩm, UI/UX Design, Tối ưu hóa hiệu suất",
        accodales: "Thiết kế và quản lý các điểm chạm hệ thống, từ Deal-flow đến Task Management, đảm bảo trải nghiệm mượt mà nhất cho người dùng.",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "logan",
        name: "Logan",
        title: "Chief Adviser",
        specialties: "EdTech, Chiến lược khởi nghiệp, Quản trị rủi ro",
        accodales: "Cố vấn cấp cao với góc nhìn khắt khe của một nhà đầu tư và sự thấu cảm của một người thầy, chuyên rèn giũa các Founder trẻ.",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    }
];

export const TheTeamSection = () => {
    return (
        // Dùng đúng màu bg m yêu cầu: #fafafa
        <section className="relative w-full bg-[#fafafa] py-24 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">

                {/* 1. KHỐI TIÊU ĐỀ */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#102c1e] mb-6"
                    >
                        Đội ngũ nòng cốt
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="max-w-2xl text-lg text-slate-600 font-medium"
                    >
                        Bạn sẽ được đồng hành cùng những chuyên gia thực chiến — và họ cũng sẽ đồng hành cùng bạn. Đây mới chỉ là khởi đầu.
                    </motion.p>
                </div>

                {/* 2. KHỐI GRID HIỂN THỊ TEAM */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            key={member.id}
                            className="flex flex-col group"
                        >
                            {/* Khung Ảnh (Mô phỏng hiệu ứng cắt nền với Background #102c1e) */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#102c1e] flex items-end justify-center mb-6">
                                {/* Họa tiết mờ ảo đằng sau để nhìn không bị trống */}
                                <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                                    style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                                />

                                <img
                                    src={member.img}
                                    alt={member.name}
                                    // Chuyển ảnh sang trắng đen, tăng độ tương phản để hòa quyện vào thiết kế
                                    className="relative z-10 h-full w-full object-cover object-top grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 opacity-90"
                                />
                            </div>

                            {/* Thông tin */}
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-bold text-[#102c1e] mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium text-slate-500 mb-5">
                                    {member.title}
                                </p>

                                <div className="space-y-4">
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        <strong className="text-[#102c1e]">Chuyên môn:</strong> {member.specialties}
                                    </p>
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        <strong className="text-[#102c1e]">Kinh nghiệm:</strong> {member.accodales}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3. DẢI LOGO ĐỐI TÁC (Tùy chọn - Giống hệt ảnh mẫu phần "Products sold in") */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-32 pt-16 border-t border-slate-200 flex flex-col items-center"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
                        Được hỗ trợ & đồng hành bởi
                    </span>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
                        {/* Thay bằng các Logo thật của m sau này */}
                        <div className="h-8 w-24 bg-slate-300 rounded animate-pulse" />
                        <div className="h-8 w-32 bg-slate-300 rounded animate-pulse" />
                        <div className="h-8 w-28 bg-slate-300 rounded animate-pulse" />
                        <div className="h-8 w-24 bg-slate-300 rounded animate-pulse" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};