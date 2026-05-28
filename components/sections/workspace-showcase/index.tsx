"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { workspaceFeatures, viewportConfig, transitionConfig } from "./data";
import { WorkspaceMockup } from "./workspace-mockup";

export const WorkspaceShowcase = () => {
    return (
        // 1. Chuyển toàn bộ nền section sang Màu Trắng tinh khôi
        <section className="relative overflow-hidden px-10 py-24 lg:py-32 text-zinc-900 bg-white">
            {/* Khối cực quang mờ siêu nhẹ cho nền trắng */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.04),transparent_50%)]" />

            <div className="relative z-10 mx-auto space-y-24 lg:space-y-36 max-w-5xl">
                {workspaceFeatures.map((feature, index) => {
                    const isReversed = index % 2 === 1;

                    return (
                        <motion.div
                            key={feature.eyebrow}
                            // 2. Chia lại tỉ lệ lưới: Tổng 10 cột để chia 4 phần chữ và 6 phần ảnh
                            className="grid items-center gap-12 lg:gap-16 lg:grid-cols-10 will-change-transform"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportConfig}
                            transition={transitionConfig}
                        >

                            {/* CỘT CHỮ: CHIẾM 4 PHẦN (lg:col-span-4) */}
                            <div
                                className={cn(
                                    "flex flex-col justify-center w-full lg:col-span-4",
                                    isReversed && "lg:col-start-7 lg:order-2"
                                )}
                            >
                                {/* Chữ định danh nhỏ phía trên màu xanh emerald đậm đà */}
                                <p className="text-xs font-bold tracking-widest text-kizuna-primary uppercase">
                                    {feature.eyebrow}
                                </p>

                                {/* Tiêu đề Serif to, rõ ràng, màu Xanh chủ đạo sâu thẳm #0a1c13 */}
                                <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-tight text-kizuna-primary">
                                    {feature.title} <span className="text-emerald-700">{feature.highlight}</span>
                                </h2>

                                {/* Mô tả chi tiết màu xám Zinc-600 có độ tương phản cao, tăng size lên text-base */}
                                <p className="mt-6 text-base font-medium leading-relaxed text-zinc-600">
                                    {feature.desc}
                                </p>
                            </div>

                            {/* CỘT ẢNH MOCKUP: CHIẾM 6 PHẦN (lg:col-span-6) */}
                            <div
                                className={cn(
                                    "w-full lg:col-span-6",
                                    isReversed && "lg:order-1"
                                )}
                            >
                                <WorkspaceMockup feature={feature} index={index} />
                            </div>

                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};