"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Folder } from "lucide-react";

// Tăng lên 12 items, ép Note và Image về chung width 220px, gom cụm chiều dọc từ 45% -> 75%
const BROLL_ITEMS = [
    // --- CỤM BÊN TRÁI (Lấp ló sau góc trái Dashboard) ---
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop', top: '35%', left: '5%', width: '220px', speed: 0.15, badge: 'now' },
    { id: 2, type: 'folder', title: 'Content', top: '41%', left: '21%', width: '180px', speed: 0.22 },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1522071823991-b9671f9d7d17?q=80&w=600&auto=format&fit=crop', top: '38%', left: '34.3%', width: '220px', speed: 0.1 },
    { id: 4, type: 'note', title: 'Q3 Objectives', desc: '1. Launch new landing page\n2. Secure seed funding...', top: '42%', left: '50%', width: '220px', speed: 0.28 },

    // --- CỤM Ở GIỮA (Núp ngay sau lưng Dashboard, sát mép nút bấm) ---
    { id: 5, type: 'folder', title: 'Brand Deals', top: '40%', left: '66%', width: '180px', speed: 0.18 },
    { id: 6, type: 'note', title: 'Newsletter Draft', desc: 'Most skills will be irrelevant in 10 years.\nThat is, unless you completely change...', top: '37%', right: '5%', width: '235px', speed: 0.15, badge: '5hr' },
    { id: 7, type: 'image', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop', top: '58%', left: '5%', width: '220px', speed: 0.2 },

    // --- CỤM BÊN PHẢI (Lấp ló sau góc phải Dashboard) ---
    { id: 8, type: 'image', src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=600&auto=format&fit=crop', top: '80.5%', left: '5%', width: '220px', speed: 0.22, badge: 'now' },
    // { id: 9, type: 'note', title: 'Newsletter Draft', desc: 'Most skills will be irrelevant in 10 years.\nThat is, unless you completely change...', top: '45%', right: '12%', width: '220px', speed: 0.15, badge: '5hr' },
    { id: 10, type: 'image', src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=600&auto=format&fit=crop', top: '60.7%', right: '5%', width: '220px', speed: 0.22, badge: 'now' },
    { id: 11, type: 'image', src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop', top: '81%', right: '5%', width: '220px', speed: 0.1 },
    // { id: 12, type: 'folder', title: 'Meeting Notes', top: '70%', right: '6%', width: '180px', speed: 0.18 },
];

export function FloatingBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            // UPDATE: Đẩy vùng làm mờ lên cao hơn (black 40%) và kết thúc sớm hơn (transparent 85%)
            // Điều này giúp các ảnh ở dưới cùng chìm hẳn vào sương mù cực kỳ "Deep"
            style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 85%)'
            }}
        >
            {BROLL_ITEMS.map((item) => (
                <BrollCard key={item.id} item={item} scrollYProgress={scrollYProgress} />
            ))}
        </div>
    );
}

// ==========================================
// COMPONENT CON: Xử lý logic riêng cho từng item
// ==========================================
function BrollCard({ item, scrollYProgress }: { item: any, scrollYProgress: MotionValue<number> }) {
    // Top-level hook: Chuẩn Rules of Hooks của React
    const y = useTransform(scrollYProgress, [0, 1], [0, item.speed * -600]);

    return (
        <motion.div
            style={{ top: item.top, left: item.left, right: item.right, width: item.width, y }}
            className="absolute opacity-[0.55] brightness-95 mix-blend-luminosity"
        >
            {/* LOẠI 1: IMAGE (Tăng chiều cao lên 300px) */}
            {item.type === 'image' && (
                <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl relative">
                    <img src={item.src} alt="b-roll" className="w-full h-full object-cover" />
                    {item.badge && (
                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-white tracking-widest uppercase border border-white/20 shadow-sm">
                            {item.badge}
                        </div>
                    )}
                </div>
            )}

            {/* LOẠI 2: NOTE (Ép cứng h-[300px] để bằng với ảnh) */}
            {item.type === 'note' && (
                <div className="w-full h-[300px] bg-[#f4f5f2] rounded-2xl p-6 border border-white/10 shadow-2xl relative flex flex-col overflow-hidden">
                    {item.badge && (
                        <div className="absolute top-4 right-4 text-[11px] text-zinc-400 font-medium z-10">
                            {item.badge}
                        </div>
                    )}
                    <div className="text-[15px] font-serif text-zinc-900 mb-3 pr-8 z-10">{item.title}</div>
                    <div className="text-[12px] text-zinc-500 leading-relaxed whitespace-pre-line flex-1 z-10">
                        {item.desc}
                    </div>
                    {/* Lớp sương mù che đáy chữ nếu text quá dài */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f4f5f2] via-[#f4f5f2]/80 to-transparent rounded-b-3xl z-20 pointer-events-none"></div>
                </div>
            )}

            {/* LOẠI 3: FOLDER (Giữ nguyên kích thước h-[180px] để làm điểm nhấn nhỏ) */}
            {item.type === 'folder' && (
                <div className="w-full bg-[#f4f5f2] rounded-[28px] p-6 border border-white/10 shadow-2xl flex flex-col items-center justify-center h-[180px]">
                    <div className="w-[80px] h-[60px] relative mb-4">
                        <div className="absolute bottom-0 left-0 w-full h-[52px] bg-zinc-300 rounded-lg"></div>
                        <div className="absolute top-0 left-0 w-1/3 h-[10px] bg-zinc-300 rounded-tl-lg rounded-tr-sm"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[46px] bg-zinc-400 rounded-md shadow-inner"></div>
                    </div>
                    <div className="text-[12px] font-semibold text-zinc-700">{item.title}</div>
                </div>
            )}
        </motion.div>
    );
}