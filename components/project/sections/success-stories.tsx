"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Quote, Box, Layers, Zap, Shield, Cloud, ShoppingBag, Cpu, Sparkles, Database } from "lucide-react";

// DỮ LIỆU BỔ SUNG ĐẦY ĐỦ (12 Items trộn lẫn text & image)
const TESTIMONIALS = [
    {
        id: 1,
        type: "text",
        company: { name: "Hutly", icon: Box },
        quote: "Kizuna Hub đã giúp chúng tôi kết nối với các nhà đầu tư chiến lược một cách nhanh chóng. Nền tảng có giao diện trực quan và cung cấp dữ liệu minh bạch tuyệt đối.",
        author: { name: "Diana Kew", role: "CMO, Hutly", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" }
    },
    {
        id: 2,
        type: "text",
        company: { name: "GoFIGR", icon: Layers },
        quote: "Chúng tôi đã hợp tác với team phát triển để tái cấu trúc lại toàn bộ hệ thống. Kết quả cuối cùng là một sản phẩm không chỉ đẹp mắt mà còn tối ưu hóa SEO cực tốt. Rất trân trọng nỗ lực của các Founder tại đây.",
        author: { name: "Helena Turpin", role: "Co-Founder, GoFIGR", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" }
    },
    {
        id: 3,
        type: "image",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
        quote: "Họ dành thời gian để thực sự thấu hiểu câu chuyện khởi nghiệp của tôi trước khi bắt tay vào xây dựng giải pháp.",
        author: { name: "Sachin Chhabra", role: "Founder, Action Health" }
    },
    {
        id: 4,
        type: "text",
        company: { name: "MAHOJIN", icon: Cloud },
        quote: "Landing page của Mahojin được hoàn thiện với tinh thần trách nhiệm cao độ mặc dù deadline rất gắt gao. Sự giao tiếp liên tục giúp chúng tôi launch dự án đúng hạn.",
        author: { name: "Kain (Kyel) Seo", role: "CoFounder, Mahojin", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" }
    },
    {
        id: 5,
        type: "text",
        company: { name: "Hopstack", icon: Zap },
        quote: "Tôi đặc biệt giới thiệu Kizuna Hub cho bất kỳ dự án công nghệ nào. Kỹ năng thiết kế của họ thuộc hàng top-notch, mang lại trải nghiệm hiện đại và mượt mà.",
        author: { name: "Anurag Singh", role: "Product Manager, Hopstack", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" }
    },
    {
        id: 6,
        type: "text",
        company: { name: "ShopBox", icon: ShoppingBag },
        quote: "Tôi đánh giá rất cao năng lực kỹ thuật và sự cống hiến của đội ngũ. Việc chuyển đổi sang nền tảng mới diễn ra cực kỳ suôn sẻ và ít rủi ro.",
        author: { name: "Bradley Ochilien", role: "Director, ShopBox", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" }
    },
    {
        id: 7,
        type: "image",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        quote: "Khả năng thấu hiểu requirements và deliver sản phẩm vượt mong đợi.",
        author: { name: "Farhan Kalim", role: "CEO, Sorise" }
    },
    {
        id: 8,
        type: "text",
        company: { name: "Serotonin", icon: Shield },
        quote: "Sự linh hoạt và tốc độ phản hồi của team đã làm cho quá trình hợp tác trở nên tự nhiên. Họ chủ động đóng góp ý tưởng vào các giai đoạn phát triển của dự án.",
        author: { name: "Shobini Appanderanda", role: "Head of Programs", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" }
    },
    {
        id: 9,
        type: "text",
        company: { name: "Cyberdome", icon: Cpu },
        quote: "Các tính năng bảo mật và luồng dữ liệu được thiết kế cực kỳ chặt chẽ, đáp ứng được các tiêu chuẩn khắt khe nhất của chúng tôi.",
        author: { name: "Rohan Chandhok", role: "Director of Field", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" }
    },
    {
        id: 10,
        type: "image",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
        quote: "Thiết kế giao diện hoàn toàn lột xác, trực quan và dễ sử dụng hơn bao giờ hết.",
        author: { name: "Jayan K Narayanan", role: "Co-founder, Helveticana" }
    },
    {
        id: 11,
        type: "text",
        company: { name: "AI Beauty", icon: Sparkles },
        quote: "Sự kết hợp giữa công nghệ AI và thiết kế giao diện đã tạo ra một sản phẩm thực sự khác biệt trên thị trường.",
        author: { name: "Vijay Ramachandran", role: "Ex Editor-in-Chief", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" }
    },
    {
        id: 12,
        type: "text",
        company: { name: "VROOM MEDIA", icon: Database },
        quote: "Một lời cảm ơn đặc biệt đến hệ sinh thái vì những thành quả phi thường. Họ cực kỳ chuyên nghiệp và dễ dàng hợp tác. 10/10.",
        author: { name: "Allan Khazak", role: "CEO, Vroom Media", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" }
    }
];

export const SuccessStories = () => {
    return (
        // Đổi background thành #fafafa
        <section className="relative w-full bg-[#fafafa] py-24 md:py-32 overflow-hidden border-t border-slate-200">
            {/* Giới hạn max-w-5xl để form gọn lại, chữ không bị dàn quá dài */}
            <div className="mx-auto max-w-5xl px-6 lg:px-8">

                {/* 1. TIÊU ĐỀ SECTION */}
                <div className="flex items-center justify-center gap-3 md:gap-6 mb-16">
                    <Globe className="w-8 h-8 md:w-12 md:h-12 text-[#102c1e] animate-[spin_10s_linear_infinite]" strokeWidth={1.5} />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold text-kizuna-primary tracking-tight leading-tight"
                    >
                        Bảo chứng bởi <br className="md:hidden" />
                        <span className="text-[#a1e2b6]">Mentor</span> {/* Dùng màu xanh nhạt của Kizuna thay cho emerald */}
                    </motion.h1>
                    <Globe className="w-8 h-8 md:w-12 md:h-12 text-[#102c1e] animate-[spin_10s_linear_infinite]" strokeWidth={1.5} />
                </div>

                {/* 2. MASONRY GRID (Chia cột tự động) */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {TESTIMONIALS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="break-inside-avoid"
                        >
                            {item.type === "text" ? (
                                /* === CARD TEXT (WHITE BENTO) === */
                                // Sử dụng bg-white, shadow-sm, và bo góc vừa phải (rounded-2xl)
                                <div className="flex flex-col bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow">
                                    {/* Logo Công ty */}
                                    <div className="flex items-center gap-2 mb-5">
                                        {item.company?.icon && <item.company.icon className="w-5 h-5 text-slate-400" />}
                                        <span className="font-outfit text-base font-bold text-slate-800 tracking-wide">
                                            {item.company?.name}
                                        </span>
                                    </div>

                                    {/* Lời bình */}
                                    <p className="font-inter text-slate-600 leading-relaxed text-sm mb-8">
                                        "{item.quote}"
                                    </p>

                                    {/* Tác giả */}
                                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                                        <img
                                            src={item.author.avatar}
                                            alt={item.author.name}
                                            className="w-10 h-10 rounded-full object-cover grayscale contrast-125 border border-slate-200"
                                        />
                                        <div className="flex flex-col">
                                            <span className="font-outfit font-bold text-[#102c1e] text-sm">
                                                {item.author.name}
                                            </span>
                                            <span className="font-geist text-xs text-slate-500 mt-0.5">
                                                {item.author.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* === CARD IMAGE/VIDEO === */
                                // Thẻ ảnh vẫn bo góc 2xl để đồng bộ
                                <div className="relative flex flex-col justify-end h-[350px] md:h-[450px] rounded-2xl overflow-hidden group border border-slate-200 shadow-sm">
                                    <img
                                        src={item.image}
                                        alt={item.author.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Giữ lại gradient đen để phần text màu trắng nổi lên trên ảnh */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                    <div className="relative z-10 p-6 md:p-8 flex flex-col">
                                        <Quote className="w-6 h-6 text-white/50 mb-3" />
                                        <p className="font-outfit text-xl md:text-2xl font-bold text-white leading-snug mb-4 text-balance">
                                            "{item.quote}"
                                        </p>
                                        <div className="flex flex-col">
                                            <span className="font-outfit font-bold text-[#a1e2b6] text-sm">
                                                {item.author.name}
                                            </span>
                                            <span className="font-geist text-xs text-white/70">
                                                {item.author.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};