"use client";

import { Sparkles } from "lucide-react";
import { CtaFloatingBackground } from "./cta-floating-background";

export function CtaSection() {
    return (
        // Tăng lên 150vh để có đủ khoảng trống phía dưới cho dàn ảnh trôi lên hết
        <section className="relative bg-[#102c1e] min-h-[150vh] overflow-hidden border-t border-white/5 flex flex-col items-center justify-start pt-[25vh]">

            <CtaFloatingBackground />

            {/* Khối Text & Button */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl w-full">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Sparkles className="w-6 h-6 text-[#102c1e]" strokeWidth={2} />
                </div>

                <h2 className="text-6xl md:text-7xl font-serif font-medium text-white tracking-tight mb-6">
                    Experience Kizuna Today
                </h2>

                <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide mb-10">
                    Your entire creative process, in one place.
                </p>

                <button className="bg-white text-[#0a1c13] hover:bg-zinc-100 transition-colors font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-emerald-900/20 text-[15px]">
                    Sign Up Now
                </button>

                <p className="mt-6 text-[11px] text-zinc-500 font-medium tracking-wide">
                    We are open to the public for a<br /> limited time before we waitlist again.
                </p>
            </div>
        </section>
    );
}