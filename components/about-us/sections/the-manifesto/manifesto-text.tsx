"use client";

import React from "react";
import { motion } from "framer-motion";

export const ManifestoText = () => {
    return (
        <div className="mx-auto mt-4 flex w-full flex-col items-center px-6 lg:px-8 pb-32">

            {/* Tuyên ngôn chính (Headline) */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto max-w-4xl text-center font-serif text-3xl font-bold uppercase leading-[1.15] tracking-tight text-white md:text-5xl lg:text-[56px]"
            >
                CHÚNG TÔI KHÔNG CHỈ XÂY DỰNG MỘT NỀN TẢNG. <br className="hidden md:block" />
                CHÚNG TÔI KIẾN TẠO MỘT BỆ PHÓNG HOÀN CHỈNH TỪ Ý TƯỞNG ĐẾN THỰC TIỄN.
            </motion.h2>

            {/* Đường kẻ ngang (Divider) */}
            <div className="mt-20 mb-16 h-px w-full max-w-5xl bg-white/20" />

            {/* Câu chuyện khởi nguyên - Bố cục 1 cột (Block Text Layout) */}
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 text-zinc-100">
                <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                    Câu chuyện khởi nguyên
                </h3>

                <p className="text-lg leading-relaxed md:text-xl md:leading-[1.7]">
                    Xuất phát từ những trăn trở tại các trường đại học kỹ thuật, nơi hàng ngàn đồ án sinh viên đầy tiềm năng bị bỏ ngỏ. Chúng tôi nhận ra khoảng trống khổng lồ giữa "Sản phẩm học thuật" và "Sản phẩm thương mại".
                </p>
                <p className="text-lg leading-relaxed md:text-xl md:leading-[1.7]">
                    Kizuna Hub ra đời để xóa bỏ ranh giới đó. Bằng cách áp dụng mô hình Value Loop, chúng tôi không để founder trẻ phải đi mò đường một mình.
                </p>
                <p className="text-lg leading-relaxed md:text-xl md:leading-[1.7]">
                    Sự đồng hành sâu sát của các Mentor hàng đầu, cùng dữ liệu minh bạch gửi thẳng đến các Quỹ đầu tư, chính là cách chúng tôi biến một "Wild idea" (ý tưởng điên rồ) thành một Startup thực thụ.
                </p>
            </div>
        </div>
    );
};