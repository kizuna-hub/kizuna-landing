"use client";

import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Nhà sáng lập sinh viên",
        desc: "Chuẩn hóa bài thuyết trình và bảo vệ IP ngay lập tức.",
        // Tím than (Deep Muted Purple) - Bí ẩn, sáng tạo
        bg: "bg-[#8e6b9c]",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Vườn ươm doanh nghiệp",
        desc: "Quản lý các khóa học và không gian làm việc dễ dàng.",
        // Cam đất (Earthy Amber) - Trầm ấm, thực chiến
        bg: "bg-[#db9d68]",
        image: "https://images.unsplash.com/photo-1522071823991-b9671f9d7d17?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Startup giai đoạn đầu",
        desc: "Vạch ra lực kéo (traction) và bảo mật tài sản của bạn.",
        // Xanh rêu Eden (Sage Green) - Tăng trưởng, bền vững
        bg: "bg-[#679a77]",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Cố vấn tiên phong",
        desc: "Kết nối trực tiếp qua các cuộc gọi video mượt mà.",
        // Xanh lam trầm (Muted Royal Blue) - Chuyên nghiệp, tin cậy
        bg: "bg-[#4a72b0]",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
    },
];

export function WhyUsingKizunaSection() {
    const duplicatedCards = [...CARDS, ...CARDS];

    return (
        <div className="w-full pt-32 pb-16 relative overflow-hidden bg-white">
            {/* Header Block */}
            <div className="flex flex-col items-center px-4 relative z-10 mb-24">
                <span className="uppercase tracking-[0.2em] text-xs text-zinc-400 font-semibold mb-6">
                    Kizuna dành cho ai
                </span>
                <h2 className="text-5xl md:text-6xl font-medium text-center max-w-4xl mx-auto tracking-tight font-serif text-[#1b2b22]">
                    Dành cho những <span className="font-serif italic text-emerald-700 font-light">Người có tầm nhìn</span> & các Đội ngũ muốn có tất cả Tài sản Startup của họ ở một nơi.
                </h2>
            </div>

            {/* Endless Marquee Slider */}
            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex gap-6 w-max px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                >
                    {duplicatedCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="w-[480px] h-[640px] flex-shrink-0 bg-[#f8f8f6] rounded-[10px] flex flex-col items-center pt-14 overflow-hidden relative"
                        >
                            {/* Text Area */}
                            <div className="flex flex-col items-center text-center px-12 z-10 mb-10">
                                <h3 className="text-4xl font-serif text-zinc-900 mb-4 tracking-tight">
                                    {card.title}
                                </h3>
                                <p className="text-zinc-500 text-[17px] leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>

                            {/* Card màu (Background Card): 
                                - Dùng flex-1 để nhồi đầy phần không gian trống ở dưới
                                - Bỏ bo góc phía dưới (chỉ xài rounded-t-[32px]) để nó tiếp đất phẳng lì 
                            */}
                            <div className={`w-[90%] flex-1 rounded-t-[10px] relative overflow-hidden flex flex-col justify-end ${card.bg}`}>

                                {/* Tăng h-[85%] lên h-[95%] để ảnh cao hơn, sát mép trên hơn */}
                                <div className="w-full h-[92%] flex justify-end">
                                    <motion.div
                                        // Tăng w-[85%] lên w-[95%] để ảnh rộng hơn, sát lề trái hơn
                                        className="w-[92%] h-full bg-white rounded-tl-[8px] shadow-2xl overflow-hidden border-t border-l border-black/5"
                                    // whileHover={{ y: -5 }}
                                    // transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </div>

                            </div>

                            {/* ĐÃ XÓA cái thẻ div khoảng trống ở đây */}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}