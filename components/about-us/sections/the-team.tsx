"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dữ liệu Team với nội dung thay đổi linh hoạt
const TEAM_MEMBERS = [
    {
        id: "ngoc",
        label: "The Founder",
        name: "Ngoc",
        greeting: "Hi, I'm Ngọc",
        subtitle: "Nice to meet you",
        desc: [
            "Hành trình của tôi bắt đầu từ những dòng code Fullstack và AI. Sau nhiều năm phát triển các dự án, tôi nhận ra một sự thật cay đắng: Ý tưởng hay không thiếu, nhưng thiếu một bệ phóng thực sự để đưa chúng vươn xa.",
            "Kizuna Hub không sinh ra để làm một phần mềm quản lý dự án thông thường. Nó là một hệ sinh thái cộng sinh—nơi các sinh viên kỹ thuật, cố vấn và nhà đầu tư thiên thần kết nối bằng dữ liệu thực chiến và sự minh bạch tuyệt đối."
        ],
        // Mẹo: Để đẹp nhất như ảnh mẫu, hãy dùng ảnh PNG đã tách nền (Transparent Background)
        img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80",
        social: { linkedin: "#" }
    },
    {
        id: "sango",
        label: "The Co-Founder",
        name: "Sango",
        greeting: "I'm Sango",
        subtitle: "Product Operations",
        desc: [
            "Trải qua nhiều vị trí từ thiết kế đến vận hành, tôi hiểu rằng một sản phẩm tốt không chỉ nằm ở code, mà nằm ở trải nghiệm mượt mà từ điểm chạm đầu tiên.",
            "Tại Kizuna Hub, nhiệm vụ của tôi là đảm bảo mọi tính năng, từ bảng điều khiển Deal-flow đến hệ thống quản lý Task, đều phục vụ đúng một mục đích: Tối đa hóa hiệu suất cho toàn bộ người dùng trong hệ sinh thái."
        ],
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
        social: { linkedin: "#" }
    },
    {
        id: "logan",
        label: "The Adviser",
        name: "Logan",
        greeting: "Call me Logan",
        subtitle: "Chief Adviser",
        desc: [
            "Với tư cách là một chuyên gia trong lĩnh vực EdTech và chiến lược khởi nghiệp, tôi đã chứng kiến hàng trăm dự án thất bại chỉ vì sai lầm trong những bước đi đầu tiên.",
            "Đồng hành cùng Kizuna Hub, tôi mang đến góc nhìn khắt khe nhất của một nhà đầu tư và sự thấu cảm của một người thầy, nhằm rèn giũa các Founder trẻ thành những nhà lãnh đạo thực thụ."
        ],
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
        social: { linkedin: "#" }
    }
];

export const TheTeamSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
    };

    const activeMember = TEAM_MEMBERS[activeIndex];

    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-start lg:gap-24 lg:px-8">

                {/* =========================================
                    CỘT TRÁI: TEXT & CONTROLS
                    ========================================= */}
                <div className="flex w-full flex-col lg:w-1/2 lg:pt-10 z-10">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeMember.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col"
                        >
                            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                                {activeMember.label}
                            </span>

                            <h2 className="mt-6 font-serif text-5xl font-bold tracking-tight text-[#102c1e] md:text-6xl lg:text-[4.5rem] leading-[1.05]">
                                {activeMember.greeting} <br />
                                <span className="text-slate-400/80">{activeMember.subtitle}</span>
                            </h2>

                            <div className="mt-10 flex flex-col gap-6 text-base md:text-lg leading-relaxed text-slate-600 font-medium max-w-xl">
                                {activeMember.desc.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls & Signature */}
                    <div className="mt-16 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between w-full max-w-xl">

                        <div className="flex items-center gap-6">
                            {/* Nút Connect LinkedIn */}
                            <a
                                href={activeMember.social.linkedin}
                                className="flex items-center gap-3 text-sm font-bold text-slate-500 transition-colors hover:text-[#102c1e]"
                            >
                                Connect with me on
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>

                            {/* Cụm Nút Điều Hướng (Arrows) */}
                            <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
                                <button
                                    onClick={handlePrev}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:bg-[#102c1e] hover:text-white hover:border-[#102c1e] active:scale-95"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:bg-[#102c1e] hover:text-white hover:border-[#102c1e] active:scale-95"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Fake Chữ ký nghệ thuật */}
                        <svg className="h-12 w-28 opacity-60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 40C35 20 45 10 60 15C75 20 70 45 85 45C100 45 110 25 125 30C140 35 135 50 150 45C165 40 175 20 190 15" stroke="#102c1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M45 45L65 15" stroke="#102c1e" strokeWidth="2" strokeLinecap="round" />
                            <path d="M105 45L130 10" stroke="#102c1e" strokeWidth="2" strokeLinecap="round" />
                        </svg>

                    </div>
                </div>

                {/* =========================================
                    CỘT PHẢI: CUTOUT IMAGE & GLOW EFFECT
                    ========================================= */}
                <div className="relative flex w-full justify-center lg:w-1/2 h-[500px] md:h-[600px] lg:h-[700px]">

                    {/* Ánh sáng Spotlight (Radial Glow) nền xám nhạt */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-[radial-gradient(circle_at_center,#f1f5f9_0%,transparent_70%)] opacity-80 mix-blend-multiply" />

                    {/* Hình ảnh thay đổi mượt mà */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeMember.id}
                            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-end justify-center"
                        >
                            <img
                                src={activeMember.img}
                                alt={activeMember.name}
                                // Dùng mix-blend-multiply để khử nền trắng (nếu có) và grayscale để tạo chất nghệ thuật
                                // Mask-image làm mờ dần phần thân dưới chìm vào nền trắng
                                className="h-[90%] w-auto max-w-full object-contain grayscale mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};