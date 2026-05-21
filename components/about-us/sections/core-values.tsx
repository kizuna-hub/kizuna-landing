"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Update link ảnh gốc Unsplash bao xịn, bao sống
const VALUES = [
    {
        num: "01",
        title: "Cộng sinh",
        subtitle: "Symbiosis",
        desc: "Một hệ sinh thái khép kín nơi Startup, Mentor và Investor cùng đóng góp và cùng hưởng lợi. Thành công của dự án này chính là viên gạch nền móng vững chắc cho dự án tiếp theo.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
        num: "02",
        title: "Thực chiến",
        subtitle: "Pragmatism",
        desc: "Chúng tôi nói không với lý thuyết suông. Mọi lộ trình ươm tạo tại Kizuna Hub đều được thiết kế và kiểm chứng dựa trên các bài toán khắc nghiệt thực tế của thị trường.",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
        num: "03",
        title: "Minh bạch",
        subtitle: "Transparency",
        desc: "Dữ liệu là cốt lõi của niềm tin. Hệ thống cung cấp báo cáo tiến độ (traction) theo thời gian thực, đảm bảo sự an tâm tuyệt đối cho các thiên thần đầu tư khi ra quyết định.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
];

export const CoreValuesSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Cuộn từ 0% sang -60% (chạy mượt qua trái)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white">

            <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-white">

                {/* TIÊU ĐỀ BÊN TRÁI: Đổ gradient trắng sang trong suốt để tạo mặt nạ che thẻ trượt */}
                <div className="absolute left-0 top-0 z-20 flex h-full w-full md:w-[35vw] flex-col justify-center bg-gradient-to-r from-white via-white/90 to-transparent pl-6 pr-12 md:pl-16 pointer-events-none">
                    <h2 className="font-serif text-4xl font-bold tracking-tight text-[#102c1e] md:text-5xl lg:text-6xl leading-[1.1]">
                        Giá trị <br className="hidden md:block" /> cốt lõi
                    </h2>
                    <p className="mt-4 max-w-[280px] text-base text-slate-500 font-medium">
                        Ba trụ cột định hình cách chúng tôi vận hành và xây dựng mạng lưới Kizuna Hub.
                    </p>
                    <div className="mt-8 h-1 w-12 bg-[#102c1e] rounded-full" />
                </div>

                {/* DẢI CARDS TRƯỢT NGANG */}
                {/* Đẩy lề trái 35vw để nhường không gian cho cột tiêu đề */}
                <motion.div style={{ x }} className="flex gap-8 pl-[10vw] pt-32 md:pt-0 md:pl-[35vw] pr-[10vw]">
                    {VALUES.map((val, index) => (
                        <div
                            key={index}
                            className="group flex h-[65vh] w-[85vw] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl md:w-[70vw] lg:h-[65vh] lg:w-[55vw] lg:flex-row"
                        >
                            {/* Nửa trái: White Bento Text */}
                            <div className="relative flex h-1/2 w-full flex-col justify-between bg-slate-50/50 p-8 md:p-10 lg:h-full lg:w-1/2">
                                {/* Số thứ tự chìm (Watermark effect) */}
                                <span className="absolute right-6 top-4 z-0 font-serif text-[80px] font-black leading-none text-[#102c1e] transition-transform duration-700 group-hover:scale-110 md:text-[100px]">
                                    {val.num}
                                </span>

                                <div className="relative z-10">
                                    <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#102c1e]/60">
                                        {val.subtitle}
                                    </span>
                                    <h3 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                                        {val.title}
                                    </h3>
                                </div>

                                <p className="relative z-10 mt-6 text-sm font-medium leading-relaxed text-slate-600 md:text-base">
                                    {val.desc}
                                </p>
                            </div>

                            {/* Nửa phải: Image */}
                            <div className="relative h-1/2 w-full overflow-hidden border-t border-slate-100 lg:h-full lg:w-1/2 lg:border-l lg:border-t-0">
                                <img
                                    src={val.img}
                                    alt={val.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};