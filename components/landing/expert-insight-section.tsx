"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    LayoutGrid, Sparkles, Navigation, Check, AlignLeft, Bold, Italic,
    Type, Strikethrough, Link2, List, FileText, MessageSquare, Plus, Folder
} from "lucide-react";
import { WhyUsingKizunaSection } from "./why-using-kizuna";

export function ExpertInsightSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.85, 1], [0.85, 1, 1, 0.85]);

    return (
        <section ref={containerRef} className="relative bg-[#102c1e] pt-20 pb-20 mt-40 w-full overflow-hidden z-20">
            <motion.div
                style={{ scale }}
                className="bg-white w-[calc(100%-1.5rem)] md:w-[calc(100%-4rem)] mx-auto rounded-[40px] pt-[4.5rem] pb-8 px-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)] origin-center relative z-10"
            >
                {/* NÚT FEATURES */}
                <div className="absolute top-6 left-8 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-zinc-200 rounded-lg text-xs font-medium text-zinc-600 bg-white shadow-sm cursor-pointer hover:bg-zinc-50">
                        <LayoutGrid className="w-3.5 h-3.5" /> Features
                    </div>
                </div>

                {/* 1. KHỐI EXPERT INSIGHT (CARD XÁM) */}
                <div className="bg-[#f8f8f6] w-full rounded-[36px] py-24 relative overflow-hidden border border-black/5">

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

                    {/* BENTO GRID 2-3-2 */}
                    <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">

                        {/* ================= ROW 1 (2 CARDS) ================= */}
                        {/* ROW 1: AI Models (Col 6) */}
                        <div className="col-span-1 md:col-span-6 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[420px] overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
                            <div className="max-w-[280px] z-10 relative">
                                <h3 className="text-[20px] font-sans font-semibold text-zinc-900 mb-2">Choose From The Best AI Models</h3>
                                <p className="text-zinc-500 text-[15px] leading-relaxed">The "best" model changes every month. Now you have them all in one place.</p>
                            </div>
                            <div className="absolute -bottom-4 right-6 w-[280px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 p-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="px-3 py-2 text-[10px] text-zinc-400 font-bold tracking-wider">ANTHROPIC</div>
                                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 cursor-pointer">
                                    <div className="w-4 h-4 bg-[#f2ab7c] rounded-sm"></div>
                                    <span className="text-[13px] text-zinc-700 font-medium">Claude Haiku 3.5</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded-xl bg-zinc-50 cursor-pointer">
                                    <div className="w-4 h-4 bg-[#e87a35] rounded-sm"></div>
                                    <span className="text-[13px] text-zinc-900 font-medium">Claude Sonnet 3.5</span>
                                    <Check className="w-4 h-4 ml-auto text-zinc-400" />
                                </div>
                                <div className="px-3 py-2 text-[10px] text-zinc-400 font-bold tracking-wider mt-1">OPENAI</div>
                                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 cursor-pointer">
                                    <div className="w-4 h-4 bg-[#75c696] rounded-sm"></div>
                                    <span className="text-[13px] text-zinc-700 font-medium">GPT-4o Mini</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 cursor-pointer mb-2">
                                    <div className="w-4 h-4 bg-[#419b67] rounded-sm"></div>
                                    <span className="text-[13px] text-zinc-700 font-medium">GPT-4 Omni</span>
                                </div>
                            </div>
                        </div>

                        {/* ROW 1: Present Work (Col 6) */}
                        <div className="col-span-1 md:col-span-6 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[420px] overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
                            <div className="max-w-[320px] z-10 relative">
                                <h3 className="text-[20px] font-sans font-semibold text-zinc-900 mb-2">Present Your Work</h3>
                                <p className="text-zinc-500 text-[15px] leading-relaxed">Traditional slides lack character. Creators need something more dynamic, like a canvas with all their diagrams.</p>
                            </div>
                            <div className="absolute bottom-0 left-6 right-6 h-[220px] bg-[#fbfbfc] rounded-t-2xl border-t border-x border-zinc-100 flex flex-col items-center pt-8 group-hover:h-[230px] transition-all duration-500 overflow-hidden">
                                <div className="px-6 py-2 bg-[#eef2fa] text-[#4f75c2] text-[10px] font-semibold rounded-md border border-[#d2def2] z-10">Context</div>
                                <div className="w-[1px] h-4 bg-zinc-200"></div>
                                <div className="w-[280px] h-[1px] bg-zinc-200 relative">
                                    <div className="absolute top-0 left-0 flex flex-col items-center">
                                        <div className="w-[1px] h-4 bg-zinc-200"></div>
                                        <div className="w-20 h-16 bg-[#ebfbf3] border border-[#bce8d1] rounded-md flex items-center justify-center p-2 text-center text-[7px] text-[#2c7a51]">What does the format look like with our timeline?</div>
                                    </div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                        <div className="w-[1px] h-4 bg-zinc-200"></div>
                                        <div className="w-20 h-16 bg-[#ebfbf3] border border-[#bce8d1] rounded-md flex items-center justify-center p-2 text-center text-[7px] text-[#2c7a51]">What are you doing today? What questions do you have?</div>
                                    </div>
                                    <div className="absolute top-0 right-0 flex flex-col items-center">
                                        <div className="w-[1px] h-4 bg-zinc-200"></div>
                                        <div className="w-20 h-16 bg-[#ebfbf3] border border-[#bce8d1] rounded-md flex items-center justify-center p-2 text-center text-[7px] text-[#2c7a51]">Who assumes taking part? Who assumes right?</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= ROW 2 (3 CARDS) ================= */}
                        {/* ROW 2: Prompts (Col 4) */}
                        <div className="col-span-1 md:col-span-4 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[440px] overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
                            <div className="z-10 relative mb-6">
                                <h3 className="text-[20px] font-sans font-semibold text-zinc-900 mb-2">Create Reusable Prompts</h3>
                                <p className="text-zinc-500 text-[15px] leading-relaxed">Save reusable text to paste in markdown notes or chat inputs with ease.</p>
                            </div>
                            <div className="absolute bottom-0 left-6 right-6 h-[200px] bg-white rounded-t-xl border-t border-x border-zinc-200 flex shadow-lg group-hover:translate-y-2 transition-transform duration-500">
                                <div className="w-1/2 border-r border-zinc-100 p-3 flex flex-col">
                                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-medium mb-3">
                                        <Plus className="w-3 h-3" /> Start a new chat
                                    </div>
                                    <div className="text-[8px] font-bold text-zinc-400 tracking-widest mb-2">PROMPTS: SOCIAL MEDIA</div>
                                    <div className="flex gap-2 items-start bg-zinc-50 p-2 rounded-md mb-1 border border-zinc-100">
                                        <MessageSquare className="w-3 h-3 text-zinc-400 mt-0.5" />
                                        <div>
                                            <div className="text-[10px] font-medium text-zinc-800">Deep Post Ideas</div>
                                            <div className="text-[8px] text-zinc-400 line-clamp-1">You are a Social Media Post Outline Generator...</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 bg-[#fafafa] p-3 rounded-tr-xl">
                                    <div className="bg-white border border-zinc-100 shadow-sm rounded-lg p-3">
                                        <div className="text-[10px] font-bold text-zinc-800 mb-1">Deep Post Ideas</div>
                                        <div className="text-[8px] text-zinc-400 mb-2">Prompt preview</div>
                                        <div className="text-[8px] text-zinc-600 leading-relaxed">
                                            You are a Social Media Post Outline Generator...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: Write Content (Col 4) */}
                        <div className="col-span-1 md:col-span-4 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[440px] overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
                            <div className="z-10 relative mb-6">
                                <h3 className="text-[20px] font-sans font-semibold text-zinc-900 mb-2">Write Content, Take Notes</h3>
                                <p className="text-zinc-500 text-[15px] leading-relaxed">Move your writing, note taking, and outlining to Kizuna to have all your work in one place.</p>
                            </div>
                            <div className="absolute bottom-0 -left-2 right-4 h-[220px] bg-white border border-zinc-200 shadow-xl rounded-tr-2xl p-5 flex flex-col group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-center gap-3 border-b border-zinc-100 pb-3 mb-3 text-zinc-400">
                                    <Type className="w-3.5 h-3.5 text-zinc-800" />
                                    <div className="w-[1px] h-3 bg-zinc-200"></div>
                                    <Bold className="w-3.5 h-3.5" /> <Italic className="w-3.5 h-3.5" /> <Strikethrough className="w-3.5 h-3.5" />
                                    <div className="w-[1px] h-3 bg-zinc-200"></div>
                                    <AlignLeft className="w-3.5 h-3.5 text-zinc-800" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[10px] text-zinc-500 font-sans leading-relaxed">
                                        If you are a creator or work on a small team, stick around to the end...
                                    </p>
                                    <div><span className="bg-blue-100 text-blue-800 text-[11px] px-1 rounded-sm font-medium">Creative work is dying.</span></div>
                                    <p className="text-[10px] text-zinc-400 font-sans leading-relaxed mt-1">
                                        AI promised the ability to create anything at the click of a button...
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: Team (Col 4) */}
                        <div className="col-span-1 md:col-span-4 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[440px] overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
                            <div className="z-10 relative">
                                <h3 className="text-[20px] font-sans font-semibold text-zinc-900 mb-2">Add Your Entire Team</h3>
                                <p className="text-zinc-500 text-[15px] leading-relaxed">Collaborate with your team across your entire workspace, including on a canvas.</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-[220px] rounded-b-[28px]" style={{ backgroundImage: 'radial-gradient(circle, #d4d4d8 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: 'center' }}>
                                <div className="relative w-full h-full">
                                    <div className="absolute top-8 left-12 flex flex-col items-start gap-1 group-hover:-translate-y-3 transition-transform duration-700 ease-out">
                                        <Navigation className="w-5 h-5 text-[#e87a35] -rotate-[100deg] fill-[#e87a35] drop-shadow-md" />
                                        <span className="bg-[#e87a35] text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full ml-4 shadow-sm">Ari</span>
                                    </div>
                                    <div className="absolute top-16 right-16 flex flex-col items-start gap-1 group-hover:translate-x-3 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                                        <Navigation className="w-5 h-5 text-[#419b67] -rotate-[120deg] fill-[#419b67] drop-shadow-md" />
                                        <span className="bg-[#419b67] text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full ml-4 shadow-sm">Matt</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= ROW 3 (2 CARDS: Tỉ lệ 5 - 7) ================= */}
                        {/* ROW 3: AI Content (Col 5) */}
                        <div className="col-span-1 md:col-span-5 bg-white rounded-[28px] p-8 flex flex-col shadow-sm border border-zinc-200 h-[420px] overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
                            <div className="z-10 relative mb-6">
                                <h3 className="text-[20px] font-sans font-semibold text-zinc-900 mb-2">AI That Has All Your Content</h3>
                                <p className="text-zinc-500 text-[15px] leading-relaxed">Your course material, recordings, and ideas – AI can find exactly what you need.</p>
                            </div>

                            {/* Folders Mockup */}
                            <div className="absolute bottom-0 left-0 right-0 h-[200px] flex items-end justify-center gap-6 pb-12">
                                {/* Folder 1: Orange */}
                                <div className="flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                                    <div className="w-[88px] h-[68px] relative">
                                        {/* Back tab */}
                                        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-[#f5d0b5] rounded-t-lg rounded-b-md"></div>
                                        <div className="absolute top-[2px] left-0 w-1/3 h-3 bg-[#f5d0b5] rounded-tl-md rounded-tr-sm"></div>
                                        {/* Front cover */}
                                        <div className="absolute bottom-0 left-0 w-full h-[52px] bg-[#e8a36c] rounded-md shadow-inner flex items-center justify-center">
                                            <span className="text-xl drop-shadow-md">☀️</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className="text-[11px] font-semibold text-zinc-800">Summer Drop</div>
                                        <div className="text-[9px] text-zinc-400">10 items</div>
                                    </div>
                                </div>

                                {/* Folder 2: Purple */}
                                <div className="flex flex-col items-center group-hover:-translate-y-4 transition-transform duration-500">
                                    <div className="w-[88px] h-[68px] relative">
                                        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-[#d7c4e0] rounded-t-lg rounded-b-md"></div>
                                        <div className="absolute top-[2px] left-0 w-1/3 h-3 bg-[#d7c4e0] rounded-tl-md rounded-tr-sm"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-[52px] bg-[#9e7bb0] rounded-md shadow-inner flex items-center justify-center">
                                            <span className="text-xl drop-shadow-md">✍️</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className="text-[11px] font-semibold text-zinc-800">Meeting Notes</div>
                                        <div className="text-[9px] text-zinc-400">23 items</div>
                                    </div>
                                </div>

                                {/* Folder 3: Pink */}
                                <div className="flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                                    <div className="w-[88px] h-[68px] relative">
                                        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-[#f7d2d6] rounded-t-lg rounded-b-md"></div>
                                        <div className="absolute top-[2px] left-0 w-1/3 h-3 bg-[#f7d2d6] rounded-tl-md rounded-tr-sm"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-[52px] bg-[#e5828e] rounded-md shadow-inner flex items-center justify-center">
                                            <span className="text-xl drop-shadow-md">🍓</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className="text-[11px] font-semibold text-zinc-800">Reels</div>
                                        <div className="text-[9px] text-zinc-400">123 items</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 3: Canvas View (Col 7) */}
                        <div className="col-span-1 md:col-span-7 bg-white rounded-[28px] p-8 flex shadow-sm border border-zinc-200 h-[420px] overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
                            {/* Chữ nằm bên trái */}
                            <div className="w-[45%] z-10 relative">
                                <h3 className="text-[20px] font-sans font-semibold text-zinc-900 mb-2">All Of Your Work<br />In One View</h3>
                                <p className="text-zinc-500 text-[15px] leading-relaxed mt-4">Work on a canvas to have all your writing, research, and ideas in view. No more tabs.</p>
                            </div>

                            {/* Canvas Background nằm bên phải */}
                            <div className="absolute top-0 right-0 bottom-0 w-[65%] bg-[#f4f6fa] rounded-l-3xl border-l border-zinc-100 overflow-hidden group-hover:bg-[#ecf0f5] transition-colors duration-500">
                                <div className="relative w-full h-full scale-[0.8] origin-top-left translate-x-8 translate-y-8">

                                    {/* Mạng lưới kết nối (Lines) */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                        <path d="M 80 100 C 140 100, 140 220, 200 220" stroke="#cdd6e5" strokeWidth="2" fill="none" />
                                        <path d="M 80 100 C 140 100, 140 -20, 200 -20" stroke="#cdd6e5" strokeWidth="2" fill="none" />
                                        <path d="M 280 220 C 340 220, 340 100, 400 100" stroke="#cdd6e5" strokeWidth="2" fill="none" />
                                    </svg>

                                    {/* Docs nhỏ xíu trên Canvas */}
                                    <div className="absolute top-12 left-0 w-[140px] h-[160px] bg-white rounded-lg shadow-sm p-3 border border-zinc-100 z-10">
                                        <div className="w-1/2 h-2 bg-blue-100 rounded mb-3"></div>
                                        <div className="w-full h-1.5 bg-zinc-100 rounded mb-1.5"></div>
                                        <div className="w-full h-1.5 bg-zinc-100 rounded mb-1.5"></div>
                                        <div className="w-4/5 h-1.5 bg-zinc-100 rounded"></div>
                                    </div>

                                    <div className="absolute top-[200px] left-[180px] w-[140px] h-[160px] bg-white rounded-lg shadow-sm p-3 border border-zinc-100 z-10">
                                        <div className="w-2/3 h-2 bg-purple-100 rounded mb-3"></div>
                                        <div className="w-full h-1.5 bg-zinc-100 rounded mb-1.5"></div>
                                        <div className="w-5/6 h-1.5 bg-zinc-100 rounded mb-1.5"></div>
                                        <div className="w-full h-1.5 bg-zinc-100 rounded"></div>
                                    </div>

                                    <div className="absolute -top-[40px] left-[180px] w-[140px] h-[120px] bg-white rounded-lg shadow-sm p-3 border border-zinc-100 z-10">
                                        <div className="w-1/3 h-2 bg-orange-100 rounded mb-3"></div>
                                        <div className="w-full h-1.5 bg-zinc-100 rounded mb-1.5"></div>
                                        <div className="w-full h-1.5 bg-zinc-100 rounded"></div>
                                    </div>

                                    <div className="absolute top-[60px] left-[380px] w-[160px] h-[180px] bg-white rounded-lg shadow-sm p-3 border border-zinc-100 z-10 flex flex-col items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-green-100 mb-2"></div>
                                        <div className="w-1/2 h-2 bg-zinc-200 rounded mb-3"></div>
                                        <div className="w-full h-1.5 bg-zinc-100 rounded mb-1.5"></div>
                                        <div className="w-full h-1.5 bg-zinc-100 rounded"></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 2. KHỐI MARQUEE ĐƯỢC GỌI VÀO ĐÂY */}
                <WhyUsingKizunaSection />

            </motion.div>
        </section>
    );
}