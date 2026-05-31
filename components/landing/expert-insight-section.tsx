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
        <section ref={containerRef} className="relative bg-kizuna-primary pt-section pb-section mt-0 w-full overflow-hidden z-20">
            <motion.div
                style={{ scale }}
                className="bg-card w-[calc(100%-1.5rem)] md:w-[calc(100%-4rem)] mx-auto rounded-[40px] pt-[4.5rem] pb-8 px-3 shadow-2xl border border-border origin-center relative z-10"
            >
                {/* NÚT FEATURES */}
                <div className="absolute top-6 left-8 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-lg text-body-sm font-sans font-medium text-muted-foreground bg-card shadow-sm cursor-pointer hover:bg-surface-subtle">
                        <LayoutGrid className="w-3.5 h-3.5" /> Hệ sinh thái
                    </div>
                </div>

                {/* 1. KHỐI EXPERT INSIGHT (CARD XÁM) */}
                <div className="bg-surface-subtle w-full rounded-[36px] py-16 relative overflow-hidden border border-border">

                    {/* HEADINGS */}
                    <div className="flex flex-col items-center px-4 relative z-10 mb-20 text-center">
                        <span className="uppercase tracking-widest text-eyebrow text-muted-foreground font-black mb-6 font-sans flex items-center gap-2">
                            <Sparkles className="w-3 h-3 text-accent" /> Tương lai của Gọi vốn & Tuyển dụng
                        </span>
                        <h2 className="text-heading-lg md:text-heading-2xl font-heading text-foreground mb-6">
                            Kizuna là Cỗ máy<br /> Chốt Deal
                        </h2>
                        <p className="text-muted-foreground text-body-md md:text-body-lg max-w-2xl font-sans">
                            Nếu AI có thể tự động hóa việc thẩm định và tìm kiếm nhân tài, bạn sẽ có bao nhiêu thời gian để tập trung vào <span className="italic font-heading text-foreground">tăng trưởng thực sự?</span>
                        </p>
                        <button className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-body-sm font-medium px-8 py-4 rounded-md transition-colors shadow-lg shadow-primary/20">
                            Khám phá Kizuna Hub
                        </button>
                    </div>

                    {/* BENTO GRID 2-3-2 */}
                    <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">

                        {/* ================= ROW 1 (2 CARDS) ================= */}
                        {/* ROW 1: AI Policy Navigator (Col 6) */}
                        <div className="col-span-1 md:col-span-6 bg-card rounded-[24px] p-8 flex flex-col shadow-sm border border-zinc-200/80 h-[420px] overflow-hidden relative group hover:shadow-card hover:-translate-y-1.5 hover:border-zinc-300 transition-all duration-500 will-change-transform">
                            <div className="max-w-[280px] z-10 relative">
                                <h3 className="font-heading text-heading-sm text-foreground mb-2">AI Policy Navigator Độc quyền</h3>
                                <p className="font-sans text-body-sm text-muted-foreground">Hệ thống AI chuyên biệt cho thẩm định rủi ro, định giá Startup và phân tích pháp lý (Due Diligence).</p>
                            </div>
                            <div className="absolute -bottom-4 right-6 w-[280px] bg-card rounded-[16px] shadow-dropdown border border-border p-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="px-3 py-2 text-eyebrow uppercase tracking-widest text-muted-foreground font-black">ĐỊNH GIÁ & CỔ PHẦN</div>
                                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-subtle cursor-pointer transition-colors">
                                    <div className="w-4 h-4 bg-orange-300 rounded-sm"></div>
                                    <span className="font-sans text-[13px] text-muted-foreground font-medium">Lập Cap Table Tự động</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded-xl bg-surface-subtle cursor-pointer transition-colors">
                                    <div className="w-4 h-4 bg-accent rounded-sm"></div>
                                    <span className="font-sans text-[13px] text-foreground font-medium">Định giá vòng Hạt giống (Seed)</span>
                                    <Check className="w-4 h-4 ml-auto text-accent" />
                                </div>
                                <div className="px-3 py-2 text-eyebrow uppercase tracking-widest text-muted-foreground font-black mt-1">THẨM ĐỊNH (DUE DILIGENCE)</div>
                                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-subtle cursor-pointer transition-colors">
                                    <div className="w-4 h-4 bg-emerald-400 rounded-sm"></div>
                                    <span className="font-sans text-[13px] text-muted-foreground font-medium">Quét lỗ hổng Pháp lý</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-subtle cursor-pointer mb-2 transition-colors">
                                    <div className="w-4 h-4 bg-emerald-600 rounded-sm"></div>
                                    <span className="font-sans text-[13px] text-muted-foreground font-medium">Phân tích Rủi ro Dòng tiền</span>
                                </div>
                            </div>
                        </div>

                        {/* ROW 1: Present Work -> Báo Cáo Minh Bạch (Col 6) */}
                        <div className="col-span-1 md:col-span-6 bg-card rounded-[24px] p-8 flex flex-col shadow-sm border border-zinc-200/80 h-[420px] overflow-hidden relative group hover:shadow-card hover:-translate-y-1.5 hover:border-zinc-300 transition-all duration-500 will-change-transform">
                            <div className="max-w-[320px] z-10 relative">
                                <h3 className="font-heading text-heading-sm text-foreground mb-2">Báo Cáo Minh Bạch</h3>
                                <p className="font-sans text-body-sm text-muted-foreground">Pitch Deck truyền thống dễ bị làm giả. Kizuna Hub xuất báo cáo trực tiếp từ dữ liệu thực thi (Traction) bất biến.</p>
                            </div>
                            <div className="absolute bottom-0 left-6 right-6 h-[220px] bg-surface-subtle rounded-t-[16px] border-t border-x border-border flex flex-col items-center pt-8 group-hover:h-[230px] transition-all duration-500 overflow-hidden">
                                <div className="px-6 py-2 bg-accent/10 text-accent text-eyebrow uppercase font-black tracking-widest rounded-md border border-accent/20 z-10">Dữ liệu Traction</div>
                                <div className="w-[1px] h-4 bg-border"></div>
                                <div className="w-[280px] h-[1px] bg-border relative">
                                    <div className="absolute top-0 left-0 flex flex-col items-center">
                                        <div className="w-[1px] h-4 bg-border"></div>
                                        <div className="w-20 h-16 bg-card border border-border rounded-md flex items-center justify-center p-2 text-center text-[8px] text-muted-foreground shadow-sm">Tỷ lệ đổ tiền (Burn rate) tháng này?</div>
                                    </div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                        <div className="w-[1px] h-4 bg-border"></div>
                                        <div className="w-20 h-16 bg-card border border-border rounded-md flex items-center justify-center p-2 text-center text-[8px] text-muted-foreground shadow-sm">Mức tiêu hao hoàn thành Milestone?</div>
                                    </div>
                                    <div className="absolute top-0 right-0 flex flex-col items-center">
                                        <div className="w-[1px] h-4 bg-border"></div>
                                        <div className="w-20 h-16 bg-card border border-border rounded-md flex items-center justify-center p-2 text-center text-[8px] text-muted-foreground shadow-sm">Có sự thay đổi đột biến nhân sự?</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= ROW 2 (3 CARDS) ================= */}
                        {/* ROW 2: Prompts -> Bộ Lọc Deal (Col 4) */}
                        <div className="col-span-1 md:col-span-4 bg-card rounded-[24px] p-8 flex flex-col shadow-sm border border-zinc-200/80 h-[440px] overflow-hidden relative group hover:shadow-card hover:-translate-y-1.5 hover:border-zinc-300 transition-all duration-500 will-change-transform">
                            <div className="z-10 relative mb-6">
                                <h3 className="font-heading text-heading-sm text-foreground mb-2">Bộ Lọc Phễu Đầu Tư</h3>
                                <p className="font-sans text-body-sm text-muted-foreground">Thiết lập trước khẩu vị đầu tư để AI tự động quét và lọc Deal Flow mỗi ngày.</p>
                            </div>
                            <div className="absolute bottom-0 left-6 right-6 h-[200px] bg-card rounded-t-xl border-t border-x border-border flex shadow-dropdown group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="w-1/2 border-r border-border p-3 flex flex-col">
                                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-sans font-medium mb-3">
                                        <Plus className="w-3 h-3" /> Yêu cầu quét phễu mới
                                    </div>
                                    <div className="text-[8px] font-black text-muted-foreground tracking-widest uppercase mb-2">BỘ LỌC: ĐẦU TƯ SEED</div>
                                    <div className="flex gap-2 items-start bg-surface-subtle p-2 rounded-md mb-1 border border-border">
                                        <MessageSquare className="w-3 h-3 text-muted-foreground mt-0.5" />
                                        <div>
                                            <div className="text-[10px] font-medium text-foreground font-sans">Săn Startup AI/EdTech</div>
                                            <div className="text-[8px] text-muted-foreground line-clamp-1 font-sans">Quét tất cả dự án có MRR trên $1000...</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 bg-surface-subtle p-3 rounded-tr-xl">
                                    <div className="bg-card border border-border shadow-sm rounded-lg p-3">
                                        <div className="text-[10px] font-medium text-foreground mb-1 font-sans">Săn Startup AI/EdTech</div>
                                        <div className="text-[8px] text-muted-foreground mb-2 font-sans">Yêu cầu AI:</div>
                                        <div className="text-[8px] text-muted-foreground leading-relaxed font-sans">
                                            Lọc toàn bộ nền tảng để tìm các nhóm làm về AI Giáo dục, có sản phẩm chạy thực tế tối thiểu 3 tháng...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: Write Content -> Nhật ký Thực thi (Col 4) */}
                        <div className="col-span-1 md:col-span-4 bg-card rounded-[24px] p-8 flex flex-col shadow-sm border border-zinc-200/80 h-[440px] overflow-hidden relative group hover:shadow-card hover:-translate-y-1.5 hover:border-zinc-300 transition-all duration-500 will-change-transform">
                            <div className="z-10 relative mb-6">
                                <h3 className="font-heading text-heading-sm text-foreground mb-2">Nhật Ký Thực Thi (Ledger)</h3>
                                <p className="font-sans text-body-sm text-muted-foreground">Ghi nhận mọi bước tiến công việc. Bằng chứng thép về năng lực của đội ngũ Founder.</p>
                            </div>
                            <div className="absolute bottom-0 -left-2 right-4 h-[220px] bg-card border border-border shadow-dropdown rounded-tr-[16px] p-5 flex flex-col group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-center gap-3 border-b border-border pb-3 mb-3 text-muted-foreground">
                                    <Type className="w-3.5 h-3.5 text-foreground" />
                                    <div className="w-[1px] h-3 bg-border"></div>
                                    <Bold className="w-3.5 h-3.5" /> <Italic className="w-3.5 h-3.5" /> <Strikethrough className="w-3.5 h-3.5" />
                                    <div className="w-[1px] h-3 bg-border"></div>
                                    <AlignLeft className="w-3.5 h-3.5 text-foreground" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[10px] text-muted-foreground font-sans leading-relaxed">
                                        Kính gửi Hội đồng Đầu tư, đây là báo cáo tiến độ Tuần 4...
                                    </p>
                                    <div><span className="bg-destructive/10 text-destructive text-[11px] px-1 rounded-sm font-medium font-sans border border-destructive/20">Faking Data đang giết chết niềm tin.</span></div>
                                    <p className="text-[10px] text-muted-foreground font-sans leading-relaxed mt-1">
                                        Nhà đầu tư cần dữ liệu thực tế và kết quả đo lường được, không phải những lời hứa hẹn trên giấy...
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: Team -> Săn Nhân tài (Col 4) */}
                        <div className="col-span-1 md:col-span-4 bg-card rounded-[24px] p-8 flex flex-col shadow-sm border border-zinc-200/80 h-[440px] overflow-hidden relative group hover:shadow-card hover:-translate-y-1.5 hover:border-zinc-300 transition-all duration-500 will-change-transform">
                            <div className="z-10 relative">
                                <h3 className="font-heading text-heading-sm text-foreground mb-2">Săn Lùng Tech Co-founder</h3>
                                <p className="font-sans text-body-sm text-muted-foreground">Doanh nghiệp truy cập Data Pool để tuyển dụng. Startup tìm kiếm mảnh ghép đội ngũ hoàn hảo.</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-[220px] rounded-b-[24px]" style={{ backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: 'center' }}>
                                <div className="relative w-full h-full">
                                    <div className="absolute top-8 left-12 flex flex-col items-start gap-1 group-hover:-translate-y-3 transition-transform duration-700 ease-out">
                                        <Navigation className="w-5 h-5 text-brand-accent -rotate-[100deg] fill-brand-accent drop-shadow-md" />
                                        <span className="bg-brand-accent text-white font-sans text-eyebrow font-black px-2.5 py-0.5 rounded-md ml-4 shadow-sm border border-orange-400">Đạt (Dev)</span>
                                    </div>
                                    <div className="absolute top-16 right-16 flex flex-col items-start gap-1 group-hover:translate-x-3 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                                        <Navigation className="w-5 h-5 text-accent -rotate-[120deg] fill-accent drop-shadow-md" />
                                        <span className="bg-accent text-white font-sans text-eyebrow font-black px-2.5 py-0.5 rounded-md ml-4 shadow-sm border border-emerald-400">Tú (UX/UI)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= ROW 3 (2 CARDS: Tỉ lệ 5 - 7) ================= */}
                        {/* ROW 3: AI Content -> Phân Luồng Data (Col 5) */}
                        <div className="col-span-1 md:col-span-5 bg-card rounded-[24px] p-8 flex flex-col shadow-sm border border-zinc-200/80 h-[420px] overflow-hidden relative group hover:shadow-card hover:-translate-y-1.5 hover:border-zinc-300 transition-all duration-500 will-change-transform">
                            <div className="z-10 relative mb-6">
                                <h3 className="font-heading text-heading-sm text-foreground mb-2">Phân Luồng Dữ Liệu Bảo Mật</h3>
                                <p className="font-sans text-body-sm text-muted-foreground">Toàn bộ tài sản số, hồ sơ ứng viên và dữ liệu tài chính được tổ chức nghiêm ngặt, chống "lọt Deal".</p>
                            </div>

                            {/* Folders Mockup */}
                            <div className="absolute bottom-0 left-0 right-0 h-[200px] flex items-end justify-center gap-6 pb-12">
                                {/* Folder 1: Orange */}
                                <div className="flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                                    <div className="w-[88px] h-[68px] relative">
                                        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-brand-accent/40 rounded-t-lg rounded-b-md"></div>
                                        <div className="absolute top-[2px] left-0 w-1/3 h-3 bg-brand-accent/40 rounded-tl-md rounded-tr-sm"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-[52px] bg-brand-accent rounded-md shadow-inner flex items-center justify-center">
                                            <span className="text-xl drop-shadow-md">💼</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className="text-[11px] font-semibold text-foreground font-sans">Hồ sơ Gọi vốn</div>
                                        <div className="text-[9px] text-muted-foreground font-sans">Chỉ Investor</div>
                                    </div>
                                </div>

                                {/* Folder 2: Purple */}
                                <div className="flex flex-col items-center group-hover:-translate-y-4 transition-transform duration-500">
                                    <div className="w-[88px] h-[68px] relative">
                                        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-accent/40 rounded-t-lg rounded-b-md"></div>
                                        <div className="absolute top-[2px] left-0 w-1/3 h-3 bg-accent/40 rounded-tl-md rounded-tr-sm"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-[52px] bg-accent rounded-md shadow-inner flex items-center justify-center relative">
                                            <span className="text-[11px] font-black text-primary tracking-widest drop-shadow-sm line-clamp-1 uppercase">NDA</span>
                                            <div className="absolute -top-2 -right-2 bg-destructive text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm shadow-md">MẬT</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className="text-[11px] font-semibold text-foreground font-sans">Tài sản IP</div>
                                        <div className="text-[9px] text-muted-foreground font-sans">Giới hạn View</div>
                                    </div>
                                </div>

                                {/* Folder 3: Pink */}
                                <div className="flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                                    <div className="w-[88px] h-[68px] relative">
                                        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-zinc-300 rounded-t-lg rounded-b-md"></div>
                                        <div className="absolute top-[2px] left-0 w-1/3 h-3 bg-zinc-300 rounded-tl-md rounded-tr-sm"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-[52px] bg-zinc-400 rounded-md shadow-inner flex items-center justify-center">
                                            <span className="text-xl drop-shadow-md">⚖️</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className="text-[11px] font-semibold text-foreground font-sans">Pháp lý (Legal)</div>
                                        <div className="text-[9px] text-muted-foreground font-sans">Bảo mật cao</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 3: Canvas View -> Panorama Dashboard (Col 7) */}
                        <div className="col-span-1 md:col-span-7 bg-card rounded-[24px] p-8 flex shadow-sm border border-border h-[420px] overflow-hidden relative group hover:shadow-card hover:-translate-y-1.5 hover:border-zinc-300 transition-all duration-500 will-change-transform">
                            {/* Chữ nằm bên trái */}
                            <div className="w-[45%] z-10 relative">
                                <h3 className="font-heading text-heading-sm text-foreground mb-2">Panorama Dashboard<br />Toàn Cảnh</h3>
                                <p className="font-sans text-body-sm text-muted-foreground leading-relaxed mt-4">Theo dõi toàn bộ mạng lưới dự án, phễu Deal Flow, và tiến độ startup trực quan trên một không gian làm việc duy nhất.</p>
                            </div>

                            {/* Canvas Background nằm bên phải */}
                            <div className="absolute top-0 right-0 bottom-0 w-[65%] bg-surface-subtle rounded-l-[16px] border-l border-border overflow-hidden group-hover:bg-zinc-100/50 transition-colors duration-500">
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