import { Sparkles, FileLock, Bot, Users, TrendingUp } from "lucide-react";

export function FeaturesSection() {
    const features = [
        {
            icon: <FileLock className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "IP Protection Ledger",
            desc: "Secure your competitive advantage with immutable timestamping. We create a verifiable paper trail for your algorithms and designs before they ever leave your workspace.",
        },
        {
            icon: <Bot className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "AI Policy Navigator",
            desc: "Navigate the complex landscape of regional tech regulations. Our AI automatically aligns your pitch decks with Decree 13 and local compliance frameworks effortlessly.",
        },
        {
            icon: <Users className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "Mentor Matching",
            desc: "Gain access to a curated network of Pioneer Founders. We connect you with industry veterans who have successfully navigated the exact growth stage you're entering.",
        },
        {
            icon: <TrendingUp className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "VC Readiness",
            desc: "Generate data-backed reports that speak the language of investors. Transform messy internal metrics into clean, professional diligence rooms that close seed rounds.",
        },
    ];

    return (
        /* Giảm pb-64 xuống pb-32 vì không còn cái card 800px ở dưới nữa */
        <section className="relative min-h-[80vh] bg-[#102c1e] flex flex-col justify-center pt-32 pb-32 z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Column - Chiếm 6 cột */}
                <div className="lg:col-span-6 lg:sticky lg:top-1/4 self-start pr-12">
                    <div className="flex items-center gap-2 text-white/60 text-[10px] tracking-[0.3em] font-bold uppercase mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> AI-Powered Validation
                    </div>

                    <h2 className="font-serif text-4xl lg:text-[3.8rem] font-semibold text-white tracking-tighter leading-[1.1]">
                        Standardize Ideas.<br /> Protect Your Vision.
                    </h2>

                    <p className="text-zinc-400 text-sm lg:text-base mt-6 max-w-sm leading-relaxed font-light">
                        Kizuna Hub transforms raw concepts into structured, legally-protected digital assets in minutes. Focus on the build, we handle the foundation.
                    </p>

                    <button className="mt-8 border border-white/20 text-[14px] bg-white text-[#102c1e] font-bold px-8 py-3.5 rounded-[12px] transition-all duration-300 hover:bg-emerald-400 hover:text-white tracking-wide">
                        Explore All Features
                    </button>
                </div>

                {/* Right Column - Chiếm 6 cột */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                    {features.map((item, idx) => (
                        <div key={idx} className="flex flex-col group">
                            <div className="transition-transform duration-300 group-hover:scale-110 origin-left text-emerald-400">
                                {item.icon}
                            </div>
                            <h3 className="text-white text-lg mb-2 font-serif font-medium tracking-tight italic">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-[14px] leading-relaxed font-light pr-2">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}