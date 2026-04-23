"use client";

import { motion } from "framer-motion";
import { Sparkles, Folder } from "lucide-react";

export function CtaSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#102c1e] flex flex-col items-center justify-center pt-32 overflow-hidden z-10">

            {/* CONTENT CENTER */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 -mt-32">
                {/* Logo Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-lg">
                    <Sparkles className="w-8 h-8 text-[#102c1e]" />
                </div>

                {/* Headings */}
                <h2 className="text-6xl md:text-8xl font-serif font-medium text-white tracking-tighter mb-6">
                    Experience Kizuna Today
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl font-light mb-10">
                    Your entire creative process, in one place.
                </p>

                {/* CTA Button */}
                <button className="bg-white text-[#102c1e] hover:bg-zinc-200 font-bold px-8 py-4 rounded-xl transition-colors font-sans text-sm tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                    Sign Up Now
                </button>

                {/* Microcopy */}
                <p className="text-zinc-500 text-[11px] mt-6 max-w-xs leading-relaxed font-medium">
                    We are open to the public for a limited time before we waitlist again.
                </p>
            </div>

            {/* FLOATING FOLDERS MOCKUP (Dưới đáy) */}
            <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-center gap-6 opacity-80 translate-y-10">
                {/* Left Folder */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-64 h-56 bg-white/5 backdrop-blur-md rounded-t-3xl border-t border-x border-white/10 p-6 flex flex-col"
                >
                    <Folder className="w-12 h-12 text-[#b08968] mb-auto fill-[#b08968]/20" />
                    <div className="mt-auto">
                        <div className="text-white font-medium text-lg mb-1">Meeting Notes</div>
                        <div className="text-zinc-500 text-sm">4502 items</div>
                    </div>
                </motion.div>

                {/* Right Folder */}
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-72 h-64 bg-white/5 backdrop-blur-md rounded-t-3xl border-t border-x border-white/10 p-6 flex flex-col"
                >
                    <Folder className="w-12 h-12 text-zinc-400 mb-auto fill-zinc-400/20" />
                    <div className="mt-auto">
                        <div className="text-white font-medium text-lg mb-1">B-roll</div>
                        <div className="text-zinc-500 text-sm">4502 items</div>
                    </div>
                </motion.div>
            </div>

            {/* Hiệu ứng sương mù che bớt phần đáy folder để nó hòa vào background */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#102c1e] to-transparent z-10 pointer-events-none" />
        </section>
    );
}