export function Footer() {
    return (
        <footer className="bg-[#102c1e] w-full border-t border-white/5 pt-16 pb-12 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between h-full">

                {/* KHỐI BÊN TRÁI: Logo, Socials & Copyright */}
                <div className="flex flex-col justify-between h-full">

                    <div className="flex items-center gap-4 text-white">
                        <span className="font-serif text-xl font-medium tracking-tight">
                            Kizuna Hub<span className="text-orange-400">.</span>
                        </span>

                        <span className="text-zinc-600 font-light">-</span>

                        {/* Social Icons dùng SVG thuần */}
                        <div className="flex items-center gap-4">
                            {/* Instagram SVG */}
                            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>

                            {/* X (Twitter) SVG */}
                            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.976H5.078z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="mt-24 md:mt-32 text-[11px] text-zinc-500 font-medium tracking-wide">
                        © {new Date().getFullYear()} Kizuna Hub, Inc. All rights reserved.
                    </div>
                </div>

                {/* KHỐI BÊN PHẢI: 3 Cột Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 mt-16 md:mt-0">
                    <div className="flex flex-col gap-3.5">
                        <h4 className="text-white text-[13px] font-semibold tracking-wide mb-1">Kizuna</h4>
                        <a href="#" className="text-zinc-400 text-[13px] hover:text-white transition-colors">Pricing</a>
                        <a href="#" className="text-zinc-400 text-[13px] hover:text-white transition-colors">Changelog</a>
                        <a href="#" className="text-zinc-400 text-[13px] hover:text-white transition-colors border-b border-zinc-600/50 pb-0.5 w-fit hover:border-white/50">Businesses</a>
                    </div>

                    <div className="flex flex-col gap-3.5">
                        <h4 className="text-white text-[13px] font-semibold tracking-wide mb-1">Help</h4>
                        <a href="#" className="text-zinc-400 text-[13px] hover:text-white transition-colors">Support</a>
                        <a href="#" className="text-zinc-400 text-[13px] hover:text-white transition-colors">FAQs</a>
                    </div>

                    <div className="flex flex-col gap-3.5">
                        <h4 className="text-white text-[13px] font-semibold tracking-wide mb-1">Legals</h4>
                        <a href="#" className="text-zinc-400 text-[13px] hover:text-white transition-colors border-b border-zinc-600/50 pb-0.5 w-fit hover:border-white/50">Terms</a>
                        <a href="#" className="text-zinc-400 text-[13px] hover:text-white transition-colors border-b border-zinc-600/50 pb-0.5 w-fit hover:border-white/50">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}