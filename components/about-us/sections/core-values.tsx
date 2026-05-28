"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// ĐÃ CẬP NHẬT ĐỦ 6 CORE VALUES VỚI ẢNH CHẤT LƯỢNG CAO
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
    },
    {
        num: "04",
        title: "Đột phá",
        subtitle: "Innovation",
        desc: "Không ngừng phá vỡ các giới hạn an toàn. Kizuna Hub khuyến khích các Founder ứng dụng công nghệ lõi như AI để tạo ra các giải pháp mang tính cách mạng.",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
        num: "05",
        title: "Tốc độ",
        subtitle: "Agility",
        desc: "Trong thế giới công nghệ, tốc độ là vũ khí. Chúng tôi tối ưu hóa mọi quy trình để đội ngũ có thể biến ý tưởng thành sản phẩm MVP trong thời gian ngắn nhất.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    },
    {
        num: "06",
        title: "Bền vững",
        subtitle: "Sustainability",
        desc: "Xây dựng để tồn tại. Chúng tôi không cổ xúy việc đốt tiền vô tội vạ, mà tập trung vào các mô hình kinh doanh có khả năng tự tạo ra dòng tiền và phát triển dài hạn.",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    }
];

export const CoreValuesSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Hàm kiểm tra trạng thái cuộn để bật/tắt nút mũi tên
    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // Thêm dung sai 2px để tránh lỗi làm tròn số trên một số trình duyệt
            setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    // Hàm xử lý khi bấm nút mũi tên
    const handleScroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400; // Cuộn 400px mỗi lần bấm
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="w-full bg-[#fafafa] py-24 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">

                {/* KHỐI TIÊU ĐỀ & ĐIỀU HƯỚNG */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#102c1e] leading-tight"
                        >
                            Giá trị cốt lõi
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-4 text-base md:text-lg text-slate-600 font-medium"
                        >
                            Sáu trụ cột định hình cách chúng tôi vận hành và xây dựng mạng lưới Kizuna Hub.
                        </motion.p>
                    </div>

                    {/* Nút mũi tên Trái - Phải */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-3 hidden md:flex" // Ẩn nút trên mobile vì mobile vuốt là tiện nhất
                    >
                        <button
                            onClick={() => handleScroll("left")}
                            disabled={!canScrollLeft}
                            className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${!canScrollLeft
                                ? "bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed opacity-60"
                                : "bg-white border-[#102c1e]/20 text-[#102c1e] hover:bg-[#102c1e] hover:border-[#102c1e] hover:text-white active:scale-95 shadow-sm"
                                }`}
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleScroll("right")}
                            disabled={!canScrollRight}
                            className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${!canScrollRight
                                ? "bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed opacity-60"
                                : "bg-white border-[#102c1e]/20 text-[#102c1e] hover:bg-[#102c1e] hover:border-[#102c1e] hover:text-white active:scale-95 shadow-sm"
                                }`}
                        >
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </motion.div>
                </div>

                {/* KHỐI NATIVE CSS CAROUSEL (Hỗ trợ Trackpad tuyệt đối) */}
                {/* Sử dụng snap-x để thẻ tự hít vào vị trí, ẩn thanh cuộn scrollbar */}
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-12 pt-4 px-4 -mx-4 gap-5 md:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {VALUES.map((val, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            key={index}
                            // snap-start giúp thẻ luôn dừng đúng lề trái khi lướt xong
                            className="group relative snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[340px] flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-2"
                        >
                            {/* Phần Ảnh */}
                            <div className="relative h-48 w-full overflow-hidden sm:h-52">
                                <img
                                    src={val.img}
                                    alt={val.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-multiply" />
                            </div>

                            {/* Phần Text */}
                            <div className="relative flex flex-1 flex-col p-6 md:p-8">
                                <span className="absolute right-6 top-6 z-0 font-serif text-6xl font-black text-slate-50 transition-colors duration-500 group-hover:text-slate-100">
                                    {val.num}
                                </span>

                                <div className="relative z-10">
                                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#102c1e]/60">
                                        {val.subtitle}
                                    </span>
                                    <h3 className="font-serif text-2xl font-bold text-[#102c1e] md:text-3xl">
                                        {val.title}
                                    </h3>
                                    <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
                                        {val.desc}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#102c1e] transition-all duration-500 group-hover:w-full" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Thẻ spacer ảo để tạo khoảng trống padding bên phải cùng khi cuộn hết */}
                    <div className="shrink-0 w-2 md:w-6" />
                </div>

            </div>
        </section>
    );
};