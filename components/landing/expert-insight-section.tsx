"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LayoutGrid, Sparkles, Navigation, Check, AlignLeft, Bold, Italic, Type } from "lucide-react";
import { ExpandingCanvasSection } from "./expanding-canvas-section";

export function ExpertInsightSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Bắt sự kiện cuộn từ lúc thẻ bắt đầu vào màn hình đến lúc nó biến mất khỏi màn hình
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Ép tốc độ: Cuộn 10% màn hình là thẻ phình max size (1), 
    // Giữ nguyên size đó khi đọc, và thu nhỏ lại 0.85 khi trượt xuống section dưới.
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.85, 1], [0.85, 1, 1, 0.85]);

    return (
        // Nền ngoài cùng là xanh rêu nguyên khối
        <section ref={containerRef} className="relative bg-[#102c1e] pt-20 pb-20 mt-40 w-full overflow-hidden z-20">

            <motion.div
                style={{ scale }}
                // ĐÂY LÀ CARD TRẮNG KHỔNG LỒ (Chứa cả phần Xám và phần Marquee)
                className="bg-white w-[calc(100%-1.5rem)] md:w-[calc(100%-4rem)] mx-auto rounded-[40px] pt-[4.5rem] pb-8 px-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)] origin-center relative z-10"
            >
                {/* NÚT FEATURES */}
                <div className="absolute top-6 left-8 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-zinc-200 rounded-lg text-xs font-medium text-zinc-600 bg-white shadow-sm cursor-pointer hover:bg-zinc-50">
                        <LayoutGrid className="w-3.5 h-3.5" /> Features
                    </div>
                </div>

                {/* 1. KHỐI EXPERT INSIGHT (CARD XÁM) */}
                <div className="bg-[#f0f2ef] w-full rounded-[32px] md:rounded-[36px] py-24 relative overflow-hidden border border-black/5">

                    {/* HEADINGS */}
                    <div className="flex flex-col items-center px-4 relative z-10 mb-20 text-center">
                        <span className="uppercase tracking-[0.2em] text-[11px] text-zinc-500 font-bold mb-6 font-sans flex items-center gap-2">
                            <Sparkles className="w-3 h-3" /> The Future of Creative Work
                        </span>
                        <h2 className="text-6xl md:text-[5.5rem] font-serif font-medium tracking-tighter text-[#1b2b22] mb-6 leading-[1.05]">
                            Kizuna Is Where Creative<br /> Work Gets Done
                        </h2>
                        <p className="text-zinc-600 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                            If AI could work with all your files, how much time would you have for the <span className="italic font-serif text-zinc-800">work that moves the needle?</span>
                        </p>
                        <button className="mt-10 bg-[#0a1c13] text-white hover:bg-[#1b2b22] font-semibold px-8 py-4 rounded-[14px] transition-colors font-sans text-sm tracking-wide shadow-lg">
                            Create In Kizuna
                        </button>
                    </div>

                    {/* BENTO GRID 2-3-2 (Super Mockups) */}
                    <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">

                        {/* ROW 1: AI Models (Col 6) */}
                        <div className="col-span-1 md:col-span-6 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[400px] overflow-hidden relative group">
                            <div className="max-w-[280px] z-10 relative">
                                <h3 className="text-[19px] font-sans font-semibold text-zinc-900 mb-2">Choose From The Best AI Models</h3>
                                <p className="text-zinc-500 text-[14px] leading-relaxed">The "best" model changes every month. Now you have them all in one place.</p>
                            </div>
                            <div className="absolute bottom-[-20px] right-8 w-64 bg-white rounded-xl shadow-2xl border border-zinc-100 p-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="p-2 text-xs text-zinc-400 font-medium">ANTHROPIC</div>
                                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-50"><div className="w-4 h-4 bg-orange-200 rounded-sm"></div> Claude Haiku 3.5</div>
                                <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-100"><div className="w-4 h-4 bg-orange-400 rounded-sm"></div> Claude Sonnet 3.5 <Check className="w-3 h-3 ml-auto text-zinc-500" /></div>
                                <div className="p-2 text-xs text-zinc-400 font-medium mt-2">OPENAI</div>
                                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-50"><div className="w-4 h-4 bg-green-200 rounded-sm"></div> GPT-4o Mini</div>
                            </div>
                        </div>

                        {/* ROW 1: Present Work (Col 6) */}
                        <div className="col-span-1 md:col-span-6 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[400px] overflow-hidden relative group">
                            <div className="max-w-[320px] z-10 relative">
                                <h3 className="text-[19px] font-sans font-semibold text-zinc-900 mb-2">Present Your Work</h3>
                                <p className="text-zinc-500 text-[14px] leading-relaxed">Traditional slides lack character. Creators need something more dynamic, like a canvas with all their diagrams.</p>
                            </div>
                            <div className="absolute bottom-0 left-10 right-10 h-40 bg-zinc-50 rounded-t-xl border-t border-x border-zinc-200 flex flex-col items-center justify-start pt-6 group-hover:h-44 transition-all duration-500">
                                <div className="w-32 h-8 bg-blue-100 border border-blue-200 rounded-md mb-4"></div>
                                <div className="flex gap-4">
                                    <div className="w-20 h-16 bg-green-100 border border-green-200 rounded-md"></div>
                                    <div className="w-20 h-16 bg-green-100 border border-green-200 rounded-md"></div>
                                    <div className="w-20 h-16 bg-green-100 border border-green-200 rounded-md"></div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: Prompts (Col 4) */}
                        <div className="col-span-1 md:col-span-4 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[400px] overflow-hidden relative group">
                            <div className="z-10 relative mb-6">
                                <h3 className="text-[19px] font-sans font-semibold text-zinc-900 mb-2">Create Reusable Prompts & Templates</h3>
                                <p className="text-zinc-500 text-[14px] leading-relaxed">Save reusable text to paste in markdown notes or chat inputs with ease.</p>
                            </div>
                            <div className="mt-auto w-full h-32 bg-zinc-50 rounded-lg border border-zinc-200 p-4 relative group-hover:scale-105 transition-transform duration-500">
                                <div className="w-3/4 h-3 bg-zinc-200 rounded-full mb-3"></div>
                                <div className="w-1/2 h-3 bg-zinc-200 rounded-full mb-3"></div>
                                <div className="w-5/6 h-3 bg-zinc-200 rounded-full"></div>
                            </div>
                        </div>

                        {/* ROW 2: Write Content (Col 4) */}
                        <div className="col-span-1 md:col-span-4 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[400px] overflow-hidden relative group">
                            <div className="z-10 relative mb-6">
                                <h3 className="text-[19px] font-sans font-semibold text-zinc-900 mb-2">Write Content, Take Notes</h3>
                                <p className="text-zinc-500 text-[14px] leading-relaxed">Move your writing, note taking, and outlining to Kizuna to have all your work in one place.</p>
                            </div>
                            <div className="mt-auto w-[120%] -ml-4 h-40 bg-white shadow-lg border border-zinc-100 rounded-t-xl p-4 flex flex-col">
                                <div className="flex gap-2 border-b border-zinc-100 pb-2 mb-2 text-zinc-400">
                                    <Type className="w-4 h-4" /> <Bold className="w-4 h-4" /> <Italic className="w-4 h-4" /> <AlignLeft className="w-4 h-4" />
                                </div>
                                <div className="w-full h-2 bg-zinc-100 rounded-full mb-2"></div>
                                <div className="w-3/4 h-4 bg-blue-100 text-blue-800 text-[10px] flex items-center px-1 rounded">Creative work is dying...</div>
                                <div className="w-full h-2 bg-zinc-100 rounded-full mt-2"></div>
                            </div>
                        </div>

                        {/* ROW 2: Team (Col 4) */}
                        <div className="col-span-1 md:col-span-4 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[400px] overflow-hidden relative group">
                            <div className="z-10 relative">
                                <h3 className="text-[19px] font-sans font-semibold text-zinc-900 mb-2">Add Your Entire Team</h3>
                                <p className="text-zinc-500 text-[14px] leading-relaxed">Collaborate with your team across your entire workspace, including on a canvas.</p>
                            </div>
                            <div className="absolute bottom-10 left-0 right-0 h-40 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <div className="absolute top-4 left-10 flex items-center gap-1 group-hover:-translate-y-2 transition-transform duration-700">
                                        <Navigation className="w-4 h-4 text-orange-400 -rotate-90 fill-orange-400" />
                                        <span className="bg-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Ari</span>
                                    </div>
                                    <div className="absolute top-10 right-12 flex items-center gap-1 group-hover:translate-x-2 transition-transform duration-700">
                                        <Navigation className="w-4 h-4 text-green-500 -rotate-90 fill-green-500" />
                                        <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Matt</span>
                                    </div>
                                    <div className="absolute bottom-6 left-24 flex items-center gap-1 group-hover:translate-y-2 transition-transform duration-700">
                                        <Navigation className="w-4 h-4 text-slate-500 -rotate-90 fill-slate-500" />
                                        <span className="bg-slate-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Maureen</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 2. KHỐI MARQUEE ĐƯỢC GỌI VÀO ĐÂY */}
                <ExpandingCanvasSection />

            </motion.div>
        </section>
    );
}