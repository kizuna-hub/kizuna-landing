"use client";

import React from "react";
import { motion } from "framer-motion";
import { CapitalFlowWidget } from "./capital-flow-widget";
import { StartupGrowthWidget } from "./startup-growth-widget";
import { SectorsWidget } from "./sectors-widget";
import { MentorNetworkWidget } from "./mentor-network-widget";

export function EcosystemMetrics() {
    return (
        <section className="relative w-full bg-[#102c1e] py-32 overflow-hidden">
            <div className="mx-auto mb-16 max-w-7xl px-6 text-center lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-3xl font-bold text-white md:text-5xl"
                >
                    Dữ liệu biết nói
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400"
                >
                    Mạng lưới Kizuna Hub không ngừng mở rộng, kết nối hàng ngàn startup với những nguồn lực chất lượng nhất trên toàn cầu.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
                <div className="w-full rounded-[2.5rem] bg-[#f8fafc] p-4 sm:p-8 shadow-2xl">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                        <CapitalFlowWidget />
                        <StartupGrowthWidget />
                        <SectorsWidget />
                        <MentorNetworkWidget />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}