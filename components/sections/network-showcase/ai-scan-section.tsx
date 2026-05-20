"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ScanLine, Sparkles } from "lucide-react";
import { NetworkCard } from "./network-card";
import { networkPeople, type NetworkPerson } from "./data"; // Import chuẩn data từ file của mày

// Định nghĩa interface kịch bản để tránh lỗi lặt vặt
interface SearchScenario {
    query: string;
    results: NetworkPerson[];
}

export function AIScanSection() {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [phase, setPhase] = useState<"typing" | "scanning" | "results">("typing");
    const [displayedText, setDisplayedText] = useState("");

    // Trích xuất và phân nhóm data từ file data.ts của mày để làm kịch bản demo
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
            }, 40); // Đẩy tốc độ gõ chữ nhanh lên một chút cho mượt (40ms)

            return () => {
                clearInterval(typingInterval);
                clearTimeout(timeoutId);
            };
        }

        if (phase === "scanning") {
            // Giả lập quét radar tìm kiếm dữ liệu bất biến
            timeoutId = setTimeout(() => setPhase("results"), 1200);
            return () => clearTimeout(timeoutId);
        }

        if (phase === "results") {
            // Giữ kết quả hiển thị 5.5 giây để kịp đọc profile rồi đổi kịch bản
            timeoutId = setTimeout(() => {
                setPhase("typing");
                setCurrentScenario((prev) => (prev + 1) % searchScenarios.length);
            }, 5500);
            return () => clearTimeout(timeoutId);
        }
    }, [currentScenario, phase]);

    const currentResults = searchScenarios[currentScenario]?.results || [];

    return (
        <section className="relative py-28 bg-[#102c1e] overflow-hidden w-full flex flex-col items-center justify-center min-h-[85vh] border-t border-white/5">

            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/40 via-[#102c1e] to-[#102c1e] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] text-emerald-400 font-bold uppercase tracking-[0.2em] mb-4">
                        <Sparkles className="w-3 h-3 animate-pulse" /> AI Matching Engine
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight leading-tight">
                        Thuật toán Tìm kiếm Tinh hoa
                    </h2>
                </div>

                {/* AI Terminal Search Bar */}
                <div className="w-full max-w-2xl bg-zinc-900/40 border border-white/10 rounded-2xl p-2 backdrop-blur-md shadow-2xl mb-10 relative overflow-hidden">
                    <div className="bg-[#0b1d14] border border-white/5 rounded-xl p-4 flex items-center gap-4 relative">
                        {phase === "scanning" ? (
                            <ScanLine className="w-5 h-5 text-emerald-400 animate-bounce" />
                        ) : (
                            <Search className="w-5 h-5 text-zinc-500" />
                        )}

                        <div className="flex-1 font-mono text-xs md:text-sm text-zinc-200 min-h-[20px] select-none">
                            {displayedText}
                            <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse align-middle"></span>
                        </div>

                        {/* Tia Lazer quét ngang */}
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

                {/* Container render động các Card kết quả */}
                <div className="min-h-[380px] w-full relative flex items-center justify-center">
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
                                        initial={{ opacity: 0, scale: 0.92, y: 15 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                    >
                                        <NetworkCard person={person} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* Màn hình chờ khi đang dò quét */}
                        {phase === "scanning" && (
                            <motion.div
                                key="scanning-status"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-2 text-emerald-400/70 font-mono text-xs"
                            >
                                <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-1"></div>
                                <p className="tracking-wide">Đang rà soát Nhật ký thực thi [Data Pool]...</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}