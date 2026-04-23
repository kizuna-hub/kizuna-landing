"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Database, FileText, Blocks, Code2 } from "lucide-react";

export function CanvasStorySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. Tracking cho việc "Thu nhỏ -> Phóng to" khi vừa cuộn tới
    const { scrollYProgress: entryProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"], // Bắt đầu khi section xuất hiện ở đáy, kết thúc khi nó lên tới đỉnh
    });

    const canvasScale = useTransform(entryProgress, [0, 1], [0.85, 1]);
    const canvasRadius = useTransform(entryProgress, [0, 1], [40, 0]);

    // 2. Tracking cho các hiệu ứng bên trong (khi màn hình đã bị dính chặt - sticky)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Lò xo vật lý giúp cuộn mượt như bôi mỡ
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        restDelta: 0.001
    });

    // 3. Camera Pan (Trượt toàn bộ khung cảnh lên trên để lộ kết quả)
    const cameraY = useTransform(smoothProgress, [0.65, 1], [0, -600]);

    // 4. Hub Animation (Cục AI ở giữa)
    const hubScale = useTransform(smoothProgress, [0, 0.15], [0.5, 1]);
    const hubOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);

    // 5. TỌA ĐỘ BAY CỦA CÁC THẺ 
    // Dùng wrapper riêng để Framer Motion không phá hỏng CSS căn giữa

    // Card 1: Trái - Trên
    const c1x = useTransform(smoothProgress, [0.1, 0.4], [-1000, -320]);
    const c1y = useTransform(smoothProgress, [0.1, 0.4], [-800, -200]);
    const c1r = useTransform(smoothProgress, [0.1, 0.4], [-45, -5]);
    const c1Op = useTransform(smoothProgress, [0.1, 0.25], [0, 1]);

    // Card 2: Phải - Trên
    const c2x = useTransform(smoothProgress, [0.15, 0.45], [1000, 320]);
    const c2y = useTransform(smoothProgress, [0.15, 0.45], [-800, -180]);
    const c2r = useTransform(smoothProgress, [0.15, 0.45], [45, 8]);
    const c2Op = useTransform(smoothProgress, [0.15, 0.3], [0, 1]);

    // Card 3: Trái - Dưới
    const c3x = useTransform(smoothProgress, [0.2, 0.5], [-1000, -340]);
    const c3y = useTransform(smoothProgress, [0.2, 0.5], [800, 220]);
    const c3r = useTransform(smoothProgress, [0.2, 0.5], [-35, 4]);
    const c3Op = useTransform(smoothProgress, [0.2, 0.35], [0, 1]);

    // Card 4: Phải - Dưới
    const c4x = useTransform(smoothProgress, [0.25, 0.55], [1000, 340]);
    const c4y = useTransform(smoothProgress, [0.25, 0.55], [800, 180]);
    const c4r = useTransform(smoothProgress, [0.25, 0.55], [35, -5]);
    const c4Op = useTransform(smoothProgress, [0.25, 0.4], [0, 1]);

    // 6. Hiệu ứng vẽ dây cung SVG (Curves)
    const pathLength = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
    const pathOpacity = useTransform(smoothProgress, [0.4, 0.5], [0, 0.4]);

    // 7. Kết quả cuối cùng
    const actionOpacity = useTransform(smoothProgress, [0.55, 0.65], [0, 1]);
    const finalScale = useTransform(smoothProgress, [0.75, 0.95], [0.8, 1]);
    const finalOpacity = useTransform(smoothProgress, [0.75, 0.95], [0, 1]);

    return (
        // Phủ nền xanh rêu đậm để thấy rõ viền trắng khi nó scale up
        <section ref={containerRef} className="relative h-[400vh] w-full bg-[#102c1e] py-10 z-20">

            {/* Viewport dính chặt (Sticky) và tự động Scale-up */}
            <motion.div
                style={{ scale: canvasScale, borderRadius: canvasRadius }}
                className="sticky top-0 h-screen w-full bg-zinc-50 overflow-hidden shadow-2xl origin-center"
            >
                <motion.div style={{ y: cameraY }} className="relative w-full h-full">

                    {/* TÂM VŨ TRỤ (0,0) - Mọi thứ xoay quanh điểm này */}
                    <div className="absolute left-1/2 top-1/2 w-0 h-0">

                        {/* Hub Element (Chính giữa) */}
                        <motion.div
                            style={{ scale: hubScale, opacity: hubOpacity }}
                            className="absolute flex flex-col items-center justify-center p-8 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl border border-zinc-200 w-[300px] z-20 -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#102c1e] text-emerald-400 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                                <Sparkles className="relative z-10" size={28} />
                            </div>
                            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Kizuna Core</h2>
                            <p className="text-sm text-zinc-500 mt-2 text-center">Synthesizing architecture</p>
                        </motion.div>

                        {/* ================= THẺ VỆ TINH ================= */}

                        <motion.div style={{ x: c1x, y: c1y, rotate: c1r, opacity: c1Op }} className="absolute z-10">
                            {/* Inner div để giữ CSS căn giữa mà ko bị Framer chèn */}
                            <div className="w-[280px] bg-white shadow-xl rounded-2xl overflow-hidden border border-zinc-200 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-32 w-full"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" alt="Data" className="w-full h-full object-cover" /></div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2"><Database size={16} className="text-emerald-600" /><span className="text-xs font-bold text-emerald-600 uppercase">Raw Data</span></div>
                                    <h3 className="font-semibold text-zinc-900">Market Repo</h3>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div style={{ x: c2x, y: c2y, rotate: c2r, opacity: c2Op }} className="absolute z-10">
                            <div className="w-[280px] bg-white shadow-xl rounded-2xl overflow-hidden border border-zinc-200 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-32 w-full"><img src="https://images.unsplash.com/photo-1507925922893-ce35afc443ae?auto=format&fit=crop&q=80&w=400" alt="Legal" className="w-full h-full object-cover" /></div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2"><FileText size={16} className="text-blue-600" /><span className="text-xs font-bold text-blue-600 uppercase">Compliance</span></div>
                                    <h3 className="font-semibold text-zinc-900">Local Law NQ-54</h3>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div style={{ x: c3x, y: c3y, rotate: c3r, opacity: c3Op }} className="absolute z-10">
                            <div className="w-[280px] bg-white shadow-xl rounded-2xl overflow-hidden border border-zinc-200 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-32 w-full"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="Architecture" className="w-full h-full object-cover" /></div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2"><Blocks size={16} className="text-orange-600" /><span className="text-xs font-bold text-orange-600 uppercase">Structure</span></div>
                                    <h3 className="font-semibold text-zinc-900">Cap Table Draft</h3>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div style={{ x: c4x, y: c4y, rotate: c4r, opacity: c4Op }} className="absolute z-10">
                            <div className="w-[280px] bg-white shadow-xl rounded-2xl overflow-hidden border border-zinc-200 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-32 w-full"><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400" alt="Code" className="w-full h-full object-cover grayscale opacity-80" /></div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2"><Code2 size={16} className="text-purple-600" /><span className="text-xs font-bold text-purple-600 uppercase">Technical</span></div>
                                    <h3 className="font-semibold text-zinc-900">Core IP Algorithm</h3>
                                </div>
                            </div>
                        </motion.div>

                        {/* ================= LỚP VẼ DÂY BEZIER ================= */}
                        <motion.svg style={{ opacity: pathOpacity }} className="absolute overflow-visible w-0 h-0 pointer-events-none z-0">
                            {/* Khớp hoàn hảo với tọa độ x,y của từng Card */}
                            <motion.path d="M -320 -200 C -150 -200, -100 0, 0 0" stroke="#102c1e" strokeWidth="2" fill="none" style={{ pathLength }} />
                            <motion.path d="M 320 -180 C 150 -180, 100 0, 0 0" stroke="#102c1e" strokeWidth="2" fill="none" style={{ pathLength }} />
                            <motion.path d="M -340 220 C -150 220, -100 0, 0 0" stroke="#102c1e" strokeWidth="2" fill="none" style={{ pathLength }} />
                            <motion.path d="M 340 180 C 150 180, 100 0, 0 0" stroke="#102c1e" strokeWidth="2" fill="none" style={{ pathLength }} />
                        </motion.svg>

                        {/* ================= STATUS BAR & FINAL OUTPUT ================= */}
                        <motion.div
                            style={{ opacity: actionOpacity, y: 160 }}
                            className="absolute z-10 bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-lg rounded-full px-6 py-3 flex items-center gap-3 w-max -translate-x-1/2"
                        >
                            <div className="w-4 h-4 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
                            <p className="text-sm font-medium text-emerald-800">Validating IP and Structuring Cap Table...</p>
                        </motion.div>

                        <motion.div
                            style={{ y: 600, scale: finalScale, opacity: finalOpacity }}
                            className="absolute z-30 w-[80vw] max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-200 -translate-x-1/2"
                        >
                            <div className="grid md:grid-cols-2">
                                <div className="p-12 flex flex-col justify-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-6"><ShieldCheck size={24} /></div>
                                    <h3 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">Secured Startup Blueprint</h3>
                                    <p className="text-zinc-500 mb-8 leading-relaxed">Your fragmented ideas and legal constraints have been unified into a deployable asset.</p>
                                    <button className="w-max bg-[#102c1e] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#102c1e]/90 flex items-center gap-2">
                                        Review Blueprint <ArrowRight size={16} />
                                    </button>
                                </div>
                                <div className="bg-zinc-100 relative hidden md:block">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}