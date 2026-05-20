"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { workspaceFeatures, viewportConfig, transitionConfig } from "./data";
import { WorkspaceMockup } from "./workspace-mockup";

export const WorkspaceShowcase = () => {
    return (
        // 1. Chuyển toàn bộ nền section sang Màu Trắng tinh khôi
        <section className="relative overflow-hidden bg-white px-6 py-24 text-zinc-900 lg:py-32">
            {/* Khối cực quang mờ siêu nhẹ cho nền trắng */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.04),transparent_50%)]" />

            <div className="relative z-10 mx-auto max-w-7xl space-y-24 lg:space-y-36">
                {workspaceFeatures.map((feature, index) => {
                    const isReversed = index % 2 === 1;

                    return (
                        <motion.div
                            key={feature.eyebrow}
                            // 2. Chia lại tỉ lệ lưới: Tổng 10 cột để chia 4 phần chữ và 6 phần ảnh
                            className="grid items-center gap-12 lg:grid-cols-10 lg:gap-16"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportConfig}
                            transition={transitionConfig}
                        >

                            {/* CỘT CHỮ: CHIẾM 4 PHẦN (lg:col-span-4) */}
                            <div
                                className={cn(
                                    "lg:col-span-4 w-full flex flex-col justify-center",
                                    isReversed && "lg:order-2 lg:col-start-7"
                                )}
                            >
                                {/* Chữ định danh nhỏ phía trên màu xanh emerald đậm đà */}
                                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                                    {feature.eyebrow}
                                </p>

                                {/* Tiêu đề Serif to, rõ ràng, màu Xanh chủ đạo sâu thẳm #0a1c13 */}
                                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#0a1c13] sm:text-4xl lg:text-[2.75rem]">
                                    {feature.title} <span className="text-emerald-500">{feature.highlight}</span>
                                </h2>

                                {/* Mô tả chi tiết màu xám Zinc-600 có độ tương phản cao, tăng size lên text-base */}
                                <p className="mt-6 text-base leading-relaxed text-zinc-600 font-medium">
                                    {feature.desc}
                                </p>
                            </div>

                            {/* CỘT ẢNH MOCKUP: CHIẾM 6 PHẦN (lg:col-span-6) */}
                            <div
                                className={cn(
                                    "lg:col-span-6 w-full",
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