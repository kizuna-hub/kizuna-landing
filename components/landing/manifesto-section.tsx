"use client";

import { motion } from "framer-motion";

export function ManifestoSection() {
    // Tách các đoạn văn ra thành mảng để dễ dàng map() và gắn hiệu ứng cho từng câu một
    const paragraphs = [
        "We all get stuck.",
        "The cap table structuring. The IP protection. The seed round pitch.",
        "We sign up for generic tools that are supposed to help us, but they just leave us with more to plan and organize.",
        "Our ideas get lost in the abyss, or the fear of getting our startup ideas stolen makes moving forward difficult.",
        "Having the right place to validate, protect, and scale your startup is invaluable."
    ];

    return (
        <div className="min-h-screen bg-[#102c1e] flex items-center justify-center py-32 relative z-30">
            <div className="max-w-[38rem] w-full px-6 flex flex-col gap-8 text-zinc-200 font-serif text-[2rem] md:text-[2.25rem] leading-[1.15] tracking-tight">
                {paragraphs.map((text, index) => (
                    <motion.p
                        key={index}
                        // Trạng thái ban đầu: Mờ (opacity 0.15) và hơi tụt xuống dưới (y: 15px)
                        initial={{ opacity: 0.15, y: 15 }}
                        // Trạng thái khi hiển thị: Sáng rõ (opacity 1) và trồi lên vị trí gốc (y: 0)
                        whileInView={{ opacity: 1, y: 0 }}
                        // Cấu hình Viewport (RẤT QUAN TRỌNG):
                        // - once: false (Cho phép sáng/mờ liên tục khi cuộn lên & xuống)
                        // - margin: "-25% 0px -25% 0px" (Chữ phải lọt vào vùng giữa màn hình thì mới bắt đầu sáng lên)
                        viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
                        // Cấu hình chuyển động: Chạy mượt trong 0.8 giây
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {text}
                    </motion.p>
                ))}
            </div>
        </div>
    );
}