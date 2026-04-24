"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Folder } from "lucide-react";

const CTA_BROLL_ITEMS = [
    // --- LỚP TRÊN (Bắt đầu hiện ngay dưới nút) ---
    { id: 1, type: 'folder', title: 'Meeting Notes', items: '4502 items', top: '50%', left: '8%', width: '220px', height: '220px', speed: 0.12 },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop', top: '55%', left: '30%', width: '240px', height: '340px', speed: 0.2, badge: 'now' },
    { id: 3, type: 'folder', title: 'B-roll', items: '230 items', top: '52%', right: '28%', width: '220px', height: '220px', speed: 0.15 },
    { id: 4, type: 'image', src: 'https://images.unsplash.com/photo-1522071823991-b9671f9d7d17?q=80&w=800&auto=format&fit=crop', top: '48%', right: '5%', width: '280px', height: '180px', speed: 0.1, badge: 'now' },

    // --- LỚP GIỮA ---
    { id: 5, type: 'note', title: 'Newsletter Draft', desc: 'Most skills will be irrelevant in 10 years...', top: '65%', left: '4%', width: '260px', height: '340px', speed: 0.18, badge: '5hr' },
    { id: 6, type: 'image', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop', top: '75%', left: '25%', width: '300px', height: '200px', speed: 0.14 },
    { id: 7, type: 'folder', title: 'Brand Deals', items: '12 items', top: '70%', left: '50%', width: '180px', height: '180px', speed: 0.22 },

    // --- LỚP ĐÁY (Kết thúc trước khi tới Footer) ---
    { id: 8, type: 'image', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop', top: '72%', right: '20%', width: '260px', height: '260px', speed: 0.16, badge: 'now' },
    { id: 9, type: 'image', src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop', top: '80%', right: '2%', width: '240px', height: '320px', speed: 0.19 },
];

export function CtaFloatingBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            // Tinh chỉnh mask để ảnh tan biến mượt mà ở khoảng 90% chiều cao section
            style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 40%, black 50%, black 85%, transparent 95%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 40%, black 50%, black 85%, transparent 95%)'
            }}
        >
            {CTA_BROLL_ITEMS.map((item) => (
                <CtaBrollCard key={item.id} item={item} scrollYProgress={scrollYProgress} />
            ))}
        </div>
    );
}

function CtaBrollCard({ item, scrollYProgress }: { item: any, scrollYProgress: MotionValue<number> }) {
    const y = useTransform(scrollYProgress, [0, 1], [0, item.speed * -700]);

    return (
        <motion.div
            style={{ top: item.top, left: item.left, right: item.right, width: item.width, height: item.height, y }}
            className="absolute opacity-[0.5] brightness-90 mix-blend-luminosity"
        >
            {item.type === 'image' && (
                <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl relative">
                    <img src={item.src} alt="b-roll" className="w-full h-full object-cover" />
                    {item.badge && (
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-white tracking-widest uppercase border border-white/20 shadow-sm">
                            {item.badge}
                        </div>
                    )}
                </div>
            )}
            {/* Các loại Folder và Note giữ nguyên logic render */}
            {item.type === 'folder' && (
                <div className="w-full h-full bg-[#f4f5f2] rounded-[32px] p-6 border border-white/10 shadow-2xl flex flex-col items-center justify-center">
                    <div className="w-[80px] h-[60px] relative mb-5">
                        <div className="absolute bottom-0 left-0 w-full h-[52px] bg-zinc-300 rounded-lg"></div>
                        <div className="absolute top-0 left-0 w-1/3 h-[10px] bg-zinc-300 rounded-tl-lg rounded-tr-sm"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[46px] bg-zinc-400 rounded-md shadow-inner"></div>
                    </div>
                    <div className="text-[14px] font-semibold text-zinc-800">{item.title}</div>
                    <div className="text-[11px] text-zinc-400 mt-1 font-medium">{item.items}</div>
                </div>
            )}
            {item.type === 'note' && (
                <div className="w-full h-full bg-[#f4f5f2] rounded-3xl p-6 border border-white/10 shadow-2xl relative flex flex-col overflow-hidden">
                    <div className="text-[16px] font-serif text-zinc-900 mb-3 pr-8">{item.title}</div>
                    <div className="text-[13px] text-zinc-500 leading-relaxed whitespace-pre-line flex-1">
                        {item.desc}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f4f5f2] via-[#f4f5f2]/90 to-transparent rounded-b-3xl pointer-events-none"></div>
                </div>
            )}
        </motion.div>
    );
}