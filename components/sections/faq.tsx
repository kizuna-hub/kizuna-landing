"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// Dữ liệu mẫu đã được UPDATE theo chuẩn chiến lược Pitch Deck & Mô hình SaaS
const FAQ_DATA = [
    {
        question: "Kizuna Hub khác biệt thế nào so với các nền tảng ươm tạo truyền thống?",
        answer: "Thay vì chỉ kết nối (matching) lỏng lẻo, Kizuna Hub là một nền tảng SaaS quản trị toàn diện. Chúng tôi sử dụng 'AI Gatekeeper' để chuẩn hóa dự án ngay từ đầu, và cung cấp hạ tầng đồng bộ tiến độ thời gian thực (Real-time Dashboard) giúp số hóa 100% quá trình ươm mầm cho các Vườn ươm và Quỹ đầu tư."
    },
    {
        question: "Dự án của sinh viên làm sao để tiếp cận được Quỹ đầu tư?",
        answer: "Dự án thô buộc phải vượt qua màng lọc AI Pitch Deck để chuẩn hóa logic kinh doanh. Sau đó, chỉ khi nhận được sự 'Bảo chứng tín nhiệm' (Endorsement) bằng review thực tế từ các Mentor tiên phong, hồ sơ mới tự động xuất hiện trên Deal-flow Dashboard của các nhà đầu tư."
    },
    {
        question: "Chuyên gia, Mentor nhận được giá trị gì khi tham gia nền tảng?",
        answer: "Mentor sẽ không bị lãng phí thời gian đọc 'dự án rác' nhờ màng lọc AI cản lại từ đầu. Đồng thời, nền tảng là công cụ đắc lực để họ săn tìm nhân tài (Deal-flow) từ sớm và xây dựng thương hiệu cá nhân (Ego & Branding) thông qua các dự án mà họ bảo chứng thành công."
    },
    {
        question: "Kizuna Hub có thu phí hoa hồng (Success Fee) khi gọi vốn thành công không?",
        answer: "Hoàn toàn KHÔNG. Để triệt tiêu rủi ro rò rỉ giao dịch ngầm, Kizuna Hub không thu phí hoa hồng. Chúng tôi tạo doanh thu từ việc bán gói phần mềm (SaaS Subscription) cho các Startup nếu muốn dự án nhận được bảo chứng từ Mentor và Investor cần công cụ quản trị danh mục đầu tư."
    },
    {
        question: "Hệ thống giám sát dự án (Incubation Progress) hoạt động ra sao?",
        answer: "Mọi cột mốc (Milestones, KPI) trong quá trình Founder làm việc với Mentor đều được cập nhật real-time. Hệ thống này có tính 'khóa chặt', buộc cả Nhà đầu tư và Startup vẫn phải dùng Kizuna Hub như một công cụ CRM để theo dõi dự án ngay cả khi đã chốt deal."
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