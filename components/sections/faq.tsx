"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// Dữ liệu mẫu chuẩn bối cảnh Kizuna Hub
const FAQ_DATA = [
    {
        question: "Kizuna Hub khác biệt thế nào so với các nền tảng ươm tạo khác?",
        answer: "Kizuna Hub không chỉ cung cấp khóa học hay lý thuyết. Chúng tôi là một hệ sinh thái cộng sinh (Value Loop) kết nối trực tiếp Founder (sinh viên), Mentor (chuyên gia) và Investor (nhà đầu tư) thông qua các công cụ quản lý dự án thực chiến và dữ liệu minh bạch."
    },
    {
        question: "Làm thế nào để dự án của tôi tiếp cận được Nhà đầu tư?",
        answer: "Các dự án trên Kizuna Hub cần trải qua lộ trình ươm tạo và đạt được các cột mốc (traction) nhất định. Khi dự án được các Mentor đánh giá 'Verified' (Đã kiểm chứng), nó sẽ tự động xuất hiện trên Deal-flow Dashboard của các nhà đầu tư."
    },
    {
        question: "Tôi là Alumni, tôi có thể tham gia với vai trò gì?",
        answer: "Alumni có thể quay lại hệ sinh thái với vai trò là Mentor (nếu có chuyên môn và kinh nghiệm thực chiến) hoặc Angel Investor (Nhà đầu tư thiên thần) để dẫn dắt và cấp vốn cho các thế hệ sinh viên tiếp theo."
    },
    {
        question: "Hệ thống bảo mật dữ liệu ý tưởng (Pitch Deck) như thế nào?",
        answer: "Toàn bộ tài liệu, pitch deck và dữ liệu dự án của bạn được lưu trữ an toàn. Chỉ những Mentor được bạn chấp nhận match và Investor đã qua xác thực KYC mới có quyền truy cập vào các tài liệu nội bộ này."
    },
    {
        question: "Kizuna Hub có thu phí nền tảng không?",
        answer: "Nền tảng hoàn toàn miễn phí cho sinh viên (Founders) giai đoạn ươm tạo ban đầu. Chúng tôi chỉ thu phí dịch vụ phần mềm (SaaS) đối với các tính năng quản trị nâng cao dành cho Quỹ đầu tư và Doanh nghiệp."
    }
];

// Component từng dòng FAQ
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-zinc-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#102c1e]/70"
            >
                <span className="text-lg font-medium text-[#102c1e] md:text-xl">
                    {question}
                </span>

                {/* Icon xoay 45 độ bằng Framer Motion */}
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-[#102c1e]"
                >
                    <Plus className="h-6 w-6" strokeWidth={1.5} />
                </motion.div>
            </button>

            {/* Khung chứa Answer mở ra mượt mà */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 pr-12 text-base leading-relaxed text-zinc-600">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Layout Component chính
export function FAQSection() {
    return (
        <section className="w-full bg-white py-32 px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">

                {/* CỤM TIÊU ĐỀ ĐÃ ĐƯỢC CẬP NHẬT */}
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 font-serif text-4xl font-bold text-[#102c1e] md:text-5xl"
                    >
                        Câu hỏi thường gặp
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-500"
                    >
                        Những thắc mắc phổ biến nhất về cách hoạt động của hệ sinh thái Kizuna Hub.
                    </motion.p>
                </div>

                {/* Danh sách FAQ */}
                <div className="flex flex-col border-t border-zinc-200">
                    {FAQ_DATA.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}