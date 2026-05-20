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
        <section className="flex relative flex-col justify-center items-center py-28 w-full min-h-[85vh] bg-[#102c1e] border-t border-white/5 overflow-hidden">

            {/* Background Radial Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/40 via-[#102c1e] to-[#102c1e]"></div>

            <div className="flex relative z-10 flex-col items-center px-6 w-full max-w-5xl">

                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center px-3 py-1 mb-4 gap-2 text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        <Sparkles className="w-3 h-3 animate-pulse" /> AI Matching Engine
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight tracking-tight text-white">
                        Thuật toán Tìm kiếm Tinh hoa
                    </h2>
                </div>

                {/* AI Terminal Search Bar */}
                <div className="relative overflow-hidden p-2 mb-10 w-full max-w-2xl bg-zinc-900/40 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md">
                    <div className="flex relative items-center p-4 gap-4 bg-[#0b1d14] rounded-xl border border-white/5">
                        {phase === "scanning" ? (
                            <ScanLine className="w-5 h-5 text-emerald-400 animate-bounce" />
                        ) : (
                            <Search className="w-5 h-5 text-zinc-500" />
                        )}

                        <div className="flex-1 min-h-[20px] font-mono text-xs md:text-sm text-zinc-200 select-none">
                            {displayedText}
                            <span className="inline-block ml-1 w-2 h-4 align-middle bg-emerald-500 animate-pulse"></span>
                        </div>

                        {/* Tia Lazer quét ngang */}
                        {phase === "scanning" && (
                            <motion.div
                                initial={{ left: "-100%" }}
                                animate={{ left: "100%" }}
                                transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
                                className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-sm will-change-transform"
                            />
                        )}
                    </div>
                </div>

                {/* Container render động các Card kết quả */}
                <div className="flex relative justify-center items-center w-full min-h-[380px]">
                    <AnimatePresence mode="wait">
                        {phase === "results" && (
                            <motion.div
                                key={`scenario-${currentScenario}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-wrap justify-center w-full gap-6 will-change-transform"
                            >
                                {currentResults.map((person) => (
                                    <motion.div
                                        key={person.id}
                                        initial={{ opacity: 0, scale: 0.92, y: 15 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                        className="will-change-transform"
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
                                className="flex flex-col items-center gap-2 font-mono text-xs text-emerald-400/70 will-change-transform"
                            >
                                <div className="mb-1 w-6 h-6 rounded-full border-2 border-t-transparent border-emerald-500 animate-spin"></div>
                                <p className="tracking-wide">Đang rà soát Nhật ký thực thi [Data Pool]...</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}