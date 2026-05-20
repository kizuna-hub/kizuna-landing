"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Search, ScanLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { networkPeople, type NetworkPerson } from "./data";
import { NetworkCard } from "./network-card";

interface SearchScenario {
    query: string;
    results: NetworkPerson[];
}

export const NetworkShowcase = () => {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [phase, setPhase] = useState<"typing" | "scanning" | "results">("typing");
    const [displayedText, setDisplayedText] = useState("");

    // Khai báo kịch bản quét động dựa hoàn toàn trên file data.ts của mày
    const searchScenarios: SearchScenario[] = [
        {
            query: "Tìm kiếm các Nhà đầu tư (Investor) đang mở quỹ Seed cho Startup công nghệ...",
            results: networkPeople.filter(p => p.id === "investor-hana-lee" || p.id === "investor-david-vo")
        },
        {
            query: "Săn lùng Mentor thuộc mạng lưới BK Alumni chuyên tư vấn kiến trúc AI & Tech...",
            results: networkPeople.filter(p => p.id === "mentor-minh-pham" || p.id === "mentor-quang-do")
        },
        {
            query: "Kết nối chuyên gia xây dựng chiến lược tăng trưởng Product & Growth Advisor...",
            results: networkPeople.filter(p => p.id === "mentor-linh-tran" || p.id === "mentor-an-nguyen")
        }
    ];

    useEffect(() => {
        const scenario = searchScenarios[currentScenario];
        if (!scenario) return;

        let timeoutId: NodeJS.Timeout;

        if (phase === "typing") {
            let i = 0;
            setDisplayedText("");
            const typingInterval = setInterval(() => {
                setDisplayedText(scenario.query.slice(0, i + 1));
                i++;
                if (i >= scenario.query.length) {
                    clearInterval(typingInterval);
                    timeoutId = setTimeout(() => setPhase("scanning"), 800);
                }
            }, 40); // Tốc độ gõ chữ

            return () => {
                clearInterval(typingInterval);
                clearTimeout(timeoutId);
            };
        }

        if (phase === "scanning") {
            // Hiệu ứng quét radar chạy giả lập trong 1.2 giây
            timeoutId = setTimeout(() => setPhase("results"), 1200);
            return () => clearTimeout(timeoutId);
        }

        if (phase === "results") {
            // Giữ hiển thị kết quả 5.5 giây để user kịp tương tác, hover xem hồ sơ
            timeoutId = setTimeout(() => {
                setPhase("typing");
                setCurrentScenario((prev) => (prev + 1) % searchScenarios.length);
            }, 5500);
            return () => clearTimeout(timeoutId);
        }
    }, [currentScenario, phase]);

    const currentResults = searchScenarios[currentScenario]?.results || [];

    return (
        <section
            aria-labelledby="network-showcase-title"
            className="relative flex flex-col items-center overflow-hidden bg-[#0a1c13] py-24 text-white lg:py-32 border-t border-white/5"
        >
            {/* Background Glows Premium */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-[#0a1c13] to-[#0a1c13]"></div>

            {/* 1. Phần Tiêu đề (Header) - Giữ nguyên kiến trúc cũ của mày */}
            <div className="relative z-10 mx-auto mb-12 flex w-full max-w-3xl flex-col items-center text-center px-6">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-300">
                    <Sparkles aria-hidden="true" className="size-3.5 animate-pulse" />
                    Mạng lưới tinh hoa
                </div>

                <h2
                    id="network-showcase-title"
                    className="font-serif text-4xl font-medium leading-tight tracking-normal text-white md:text-5xl lg:text-6xl"
                >
                    Kết nối trực tiếp với những bộ óc vĩ đại nhất.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                    Không qua trung gian. Chốt deal và nhận cố vấn từ mạng lưới cựu sinh viên Bách Khoa và các quỹ đầu tư hàng đầu nhờ bộ máy AI Matching.
                </p>

                <Button
                    asChild
                    size="lg"
                    className="mt-8 rounded-xl bg-white px-6 text-[#0a1c13] shadow-xl shadow-emerald-950/30 hover:bg-emerald-50 transition-all font-bold"
                >
                    <Link href="/signup">
                        Khám phá Mạng lưới
                        <ArrowRight aria-hidden="true" className="size-4 ml-1" />
                    </Link>
                </Button>
            </div>

            {/* 2. Phần Bộ Máy Quét AI Tương Tác - Thay thế hoàn toàn cho cái Marquee cũ */}
            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center mt-6">

                {/* Khung Search AI Terminal */}
                <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-md shadow-2xl mb-12 ring-1 ring-white/10 relative overflow-hidden">
                    <div className="bg-[#05140d] border border-white/5 rounded-xl p-4 flex items-center gap-4 relative">
                        {phase === "scanning" ? (
                            <ScanLine className="w-5 h-5 text-emerald-400 animate-bounce" />
                        ) : (
                            <Search className="w-5 h-5 text-zinc-500" />
                        )}

                        <div className="flex-1 font-mono text-xs md:text-sm text-zinc-300 min-h-[20px] select-none">
                            {displayedText}
                            <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse align-middle"></span>
                        </div>

                        {/* Tia Lazer chạy ngang khi quét */}
                        {phase === "scanning" && (
                            <motion.div
                                initial={{ left: "-100%" }}
                                animate={{ left: "100%" }}
                                transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
                                className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-sm"
                            />
                        )}
                    </div>
                </div>

                {/* Khu vực hiển thị kết quả các Card size nhỏ gọn w-[15rem] */}
                <div className="min-h-[360px] w-full relative flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {phase === "results" && (
                            <motion.div
                                key={`scenario-${currentScenario}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-wrap justify-center gap-6 w-full"
                            >
                                {currentResults.map((person) => (
                                    <motion.div
                                        key={person.id}
                                        initial={{ opacity: 0, scale: 0.93, y: 15 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                    >
                                        <NetworkCard person={person} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* Hiệu ứng trạng thái loading khi quét */}
                        {phase === "scanning" && (
                            <motion.div
                                key="scanning-status"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-2 text-emerald-400/70 font-mono text-xs"
                            >
                                <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-1"></div>
                                <p className="tracking-wide">AI đang rà soát thông tin Nhật ký thực thi...</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};