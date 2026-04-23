"use client";

import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Student Founders",
        desc: "Standardize pitch decks and protect IP instantly.",
        bg: "bg-purple-100",
        innerBg: "bg-purple-200",
    },
    {
        title: "Accelerators",
        desc: "Manage cohorts and workspace with ease.",
        bg: "bg-rose-100",
        innerBg: "bg-rose-200",
    },
    {
        title: "Early Stage Startups",
        desc: "Chart your traction and secure your assets.",
        bg: "bg-emerald-100",
        innerBg: "bg-emerald-200",
    },
    {
        title: "Pioneer Mentors",
        desc: "Connect directly via seamless video calls.",
        bg: "bg-amber-100",
        innerBg: "bg-amber-200",
    },
];

export function ExpandingCanvasSection() {
    const duplicatedCards = [...CARDS, ...CARDS];

    return (
        // Lột xác thành <div>, không cần set màu nền vì nó xài chung nền trắng của Thẻ Khổng Lồ ở file mẹ
        <div className="w-full pt-32 pb-16 relative overflow-hidden">

            {/* Header Block */}
            <div className="flex flex-col items-center px-4 relative z-10">
                <span className="uppercase tracking-[0.2em] text-xs text-zinc-400 font-semibold mb-6">
                    Who is Kizuna For
                </span>
                <h2 className="text-5xl md:text-6xl font-medium text-center mt-2 max-w-4xl mx-auto tracking-tight font-serif text-[#1b2b22]">
                    For <span className="font-serif italic text-emerald-700 font-light">Visionaries</span> & Teams Who Want All Their Startup Assets In One Place.
                </h2>
            </div>

            {/* Endless Marquee Slider */}
            <div className="mt-20 relative flex overflow-hidden">
                <motion.div
                    className="flex gap-8 w-max px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {duplicatedCards.map((card, idx) => (
                        <div
                            key={idx}
                            // Để nổi bật trên nền trắng của Card mẹ, tớ đổi background của các thẻ con này sang xám nhạt (bg-[#f8f8f6]) giống Eden
                            className="w-[400px] h-[500px] flex-shrink-0 bg-[#f8f8f6] rounded-[32px] p-8 pb-0 flex flex-col justify-between shadow-sm border border-black/5 hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-serif font-medium text-zinc-900 mb-3">{card.title}</h3>
                                <p className="text-zinc-500 text-base leading-relaxed">{card.desc}</p>
                            </div>

                            <div className={`w-full flex-1 mt-8 rounded-t-2xl ${card.bg} flex items-end justify-center overflow-hidden border-t border-x border-zinc-100`}>
                                <div className={`w-5/6 h-5/6 rounded-t-xl shadow-lg border-t border-x border-black/5 ${card.innerBg}`}></div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}