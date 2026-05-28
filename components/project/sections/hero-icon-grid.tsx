"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    LayoutGrid, FolderDot, Sparkles, Globe, BarChart2, Star,
    Calendar, Copy, Search, List, Circle, Cloud, Users,
    CheckSquare, Layers, Box, Cpu, Zap, Shield, Rocket
} from "lucide-react";

const ICONS = [
    LayoutGrid, FolderDot, Sparkles, Globe, BarChart2, Star,
    Calendar, Copy, Search, List, Circle, Cloud, Users,
    CheckSquare, Box, Cpu, Zap, Shield, Rocket
];

const shuffle = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);

const IconRow = ({ duration, reverse = false }: { duration: number, reverse?: boolean }) => {
    const rowIcons = shuffle(ICONS).slice(0, 12);
    const duplicatedIcons = [...rowIcons, ...rowIcons];

    return (
        // Thêm `shrink-0` vào thẻ bao ngoài cùng của hàng để nó không bị ép lún xuống
        <div className="flex shrink-0 overflow-hidden w-full">
            <motion.div
                animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: duration }}
                className="flex gap-6 md:gap-8 w-max pr-6 md:pr-8"
            >
                {duplicatedIcons.map((Icon, idx) => (
                    <div
                        key={idx}
                        // Thêm `shrink-0` vào thẻ này để các ô vuông luôn vuông vức 100%
                        className="flex shrink-0 h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/[0.08] transition-all hover:bg-white/[0.12] hover:scale-110"
                    >
                        <Icon className="text-white/60 w-7 h-7 md:w-10 md:h-10" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export const HeroIconGrid = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto flex justify-center items-center h-[350px] md:h-[450px]">

            <div
                className="absolute inset-0 z-0 flex flex-col gap-6 md:gap-8 justify-center overflow-hidden"
                style={{
                    maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 85%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 85%)'
                }}
            >
                <IconRow duration={45} />
                <IconRow duration={30} />
                <IconRow duration={40} />
                <IconRow duration={55} reverse />
            </div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute z-10 flex items-center justify-center"
            >
                <div className="absolute inset-0 rounded-full bg-white/20 blur-[80px] md:blur-[120px] scale-150 animate-pulse" />

                <div className="relative flex h-36 w-36 md:h-48 md:w-48 items-center justify-center rounded-[2.5rem] md:rounded-[3rem] bg-[#102c1e] border border-white/20 shadow-[0_0_100px_15px_rgba(255,255,255,0.15)] backdrop-blur-xl transition-transform hover:scale-105">
                    <Layers className="w-16 h-16 md:w-24 md:h-24 text-white" strokeWidth={1.5} />
                </div>
            </motion.div>

        </div>
    );
};