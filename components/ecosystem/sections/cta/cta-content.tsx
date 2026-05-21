"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTAContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-40 mx-auto -mt-24 flex max-w-4xl flex-col items-center text-center px-6 md:-mt-32"
        >
            <h2 className="font-serif text-5xl font-bold leading-tight text-[#102c1e] md:text-6xl lg:text-[72px] tracking-tight text-balance">
                Sẵn sàng bứt phá <br />
                <span className="text-[#102c1e]/70">
                    cùng hệ sinh thái?
                </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-[#102c1e]/70 md:text-xl font-medium">
                Dù bạn là Founder đang tìm bệ phóng, hay Mentor muốn tạo dựng di sản, Kizuna Hub cung cấp mọi công cụ bạn cần.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <button className="group flex h-14 items-center justify-center gap-2 rounded-full bg-[#102c1e] px-8 font-bold text-white transition-all hover:bg-[#102c1e]/90 hover:scale-105 active:scale-95 shadow-xl shadow-[#102c1e]/20">
                    Tham gia miễn phí
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="flex h-14 items-center justify-center rounded-full border-2 border-[#102c1e]/20 bg-transparent px-8 font-bold text-[#102c1e] transition-all hover:bg-[#102c1e]/5 hover:border-[#102c1e]/40">
                    Trở thành Nhà đầu tư
                </button>
            </div>
        </motion.div>
    );
};