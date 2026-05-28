"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, ChevronRight } from "lucide-react";

// MOCK DATA: Đưa các dự án trọng điểm vào lưới 2x2
const TOP_PROJECTS = [
    {
        id: 1,
        title: "AniLingo",
        founder: "Tuấn Ngọc",
        desc: "Nền tảng học tiếng Nhật tích hợp AI qua phim ảnh với tính năng Zero-Click dictionary & AI-graded pronunciation.",
        metrics: [
            { label: "Mục tiêu", value: "$50k" },
            { label: "Traction", value: "2.5k Users" }
        ],
        tags: ["EdTech", "AI"],
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Agent Toolkit",
        founder: "Kizuna Team",
        desc: "Hệ thống đa tác vụ AI dựa trên kiến trúc ReAct và Modular Monolith giúp tự động hóa luồng công việc phức tạp.",
        metrics: [
            { label: "Mục tiêu", value: "$120k" },
            { label: "Trạng thái", value: "Beta" }
        ],
        tags: ["SaaS", "LLMs"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Kizuna Hub",
        founder: "Core Team",
        desc: "Hệ sinh thái cộng sinh kết nối startup sinh viên, mentor và nhà đầu tư thiên thần qua dữ liệu thực chiến.",
        metrics: [
            { label: "Mục tiêu", value: "Seed" },
            { label: "Traction", value: "Active" }
        ],
        tags: ["Platform", "B2B"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Car Damage Assessment",
        founder: "Sango",
        desc: "Nền tảng bảo hiểm xe ô tô tích hợp AI phân tích mức độ hư hỏng và tư vấn bảo hiểm.",
        metrics: [
            { label: "Mục tiêu", value: "$15k" },
            { label: "Traction", value: "Live" }
        ],
        tags: ["Sports", "Data"],
        image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=800&q=80"
    }
];

export const DealFlowSection = () => {
    return (
        <section className="relative w-full bg-[#081810] py-24 md:py-32 overflow-hidden border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Lưới 2 cột lệch (Left: 5, Right: 7) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* CỘT TRÁI: TEXT & CALLOUT (Dính chặt trên màn hình khi cuộn) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-geist text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-slate-500 mb-6"
                        >
                            Deal-Flow Nổi Bật
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-outfit text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.1] mb-6 text-balance"
                        >
                            4 Dự án. <br />
                            Tiềm năng lớn. <br />
                            <span className="text-[#a1e2b6]">Đang gọi vốn.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-inter text-slate-400 text-base md:text-lg leading-relaxed mb-8"
                        >
                            Trong tháng này, chúng tôi giới thiệu danh mục các dự án công nghệ lõi xuất sắc nhất đã vượt qua vòng thẩm định của mạng lưới Cố vấn Kizuna Hub.
                        </motion.p>

                        {/* Callout Box (Khối nhấn mạnh giống trong ảnh) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col gap-4"
                        >
                            <h3 className="font-outfit font-bold text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-[#e88b5c]" />
                                Cơ hội đầu tư sớm
                            </h3>
                            <p className="font-inter text-sm text-slate-400 leading-relaxed">
                                Đừng bỏ lỡ cơ hội trở thành nhà đầu tư thiên thần cho thế hệ startup tiếp theo. Kết nối trực tiếp với Founder và xem báo cáo dữ liệu thực chiến ngay trên nền tảng.
                            </p>
                            <button className="mt-2 flex items-center gap-2 font-geist text-sm font-bold text-[#a1e2b6] hover:text-white transition-colors w-fit">
                                Trở thành Investor <ChevronRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>

                    {/* CỘT PHẢI: LƯỚI 2X2 DỰ ÁN */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {TOP_PROJECTS.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col bg-white/[0.03] border border-white/10 rounded-[1.5rem] p-4 hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-pointer"
                            >
                                {/* Ảnh Thumbnail dự án */}
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-black/50">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale-[30%] group-hover:grayscale-0"
                                    />
                                    {/* Dải Tags chìm đè lên ảnh */}
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 font-geist text-[10px] font-bold text-white uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Thông tin Text */}
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-outfit text-xl font-bold text-white group-hover:text-[#a1e2b6] transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="font-inter text-xs font-medium text-slate-500 mt-1">
                                        by {project.founder}
                                    </span>
                                </div>

                                <p className="font-inter text-sm text-slate-400 line-clamp-2 mb-6">
                                    {project.desc}
                                </p>

                                {/* Các chỉ số (Metrics) đẩy xuống đáy thẻ */}
                                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                    {project.metrics.map((metric, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <span className="font-geist text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                                                {metric.label}
                                            </span>
                                            <span className="font-outfit font-bold text-white text-sm">
                                                {metric.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};