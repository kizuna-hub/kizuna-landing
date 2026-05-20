import React from "react";

export interface CarouselItem {
    id: string;
    accentTitle: string;
    heading: string;
    description: string;
    color: string;
    mockup: React.ReactNode;
}

export const CAROUSEL_DATA: CarouselItem[] = [
    {
        id: "founders",
        accentTitle: "Dành cho Founders",
        heading: "Xây dựng dự án và kiểm chứng",
        description: "Biến ý tưởng thành sản phẩm thông qua lộ trình ươm tạo rõ ràng. Quản lý tiến độ và sẵn sàng gọi vốn.",
        color: "text-emerald-600",
        mockup: (
            <div className="flex h-full w-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm text-slate-800 overflow-hidden">
                {/* Header Widget */}
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 font-bold text-xs">AL</div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold leading-tight">AniLingo Platform</span>
                            <span className="text-[10px] text-zinc-500">Sprint 4: AI Integration</span>
                        </div>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600 border border-emerald-100">
                        On Track
                    </span>
                </div>
                {/* Board Column */}
                <div className="flex flex-1 gap-3">
                    <div className="flex flex-1 flex-col gap-2 rounded-lg bg-zinc-50 border border-zinc-100 p-2">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">In Progress (2)</span>
                        <div className="flex flex-col gap-1.5 rounded-md border border-zinc-200 bg-white p-2 shadow-sm">
                            <span className="text-[11px] font-medium leading-snug">Tối ưu Schema SpacetimeDB</span>
                            <div className="mt-1 flex gap-1">
                                <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[8px] font-bold text-blue-600">Database</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 p-2 shadow-sm">
                            <span className="text-[11px] font-medium leading-snug">RAG Agentic Workflow</span>
                            <div className="mt-1 flex gap-1">
                                <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold text-emerald-700">AI Core</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "mentors",
        accentTitle: "Dành cho Mentors",
        heading: "Đồng hành cùng nhân tài",
        description: "Dẫn dắt các startup trẻ, đánh giá độ khả thi và tối ưu mô hình kinh doanh dựa trên kinh nghiệm thực chiến.",
        color: "text-amber-500",
        mockup: (
            <div className="flex h-full w-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm text-slate-800">
                <div className="flex items-center gap-2 border-b border-zinc-100 pb-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-xs font-bold">Yêu cầu Cố vấn mới (Match: 98%)</span>
                </div>
                <div className="flex flex-col gap-3 pt-1">
                    {/* Mentor Profile Match */}
                    <div className="flex items-center gap-3 rounded-lg border border-amber-100 bg-amber-50 p-3 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Mentor Avatar" className="h-10 w-10 rounded-full border-2 border-white shadow-sm" />
                        <div className="flex flex-1 flex-col">
                            <span className="text-xs font-bold text-amber-900">GS. Takeru Hishinuma</span>
                            <span className="text-[10px] text-amber-700">Chuyên gia Ngôn ngữ & EdTech</span>
                        </div>
                        <span className="rounded-md bg-amber-200/50 px-2 py-1 text-[10px] font-bold text-amber-800">
                            Chấp nhận
                        </span>
                    </div>
                    {/* Startup Request Info */}
                    <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                        <span className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Dự án cần hỗ trợ</span>
                        <span className="text-xs font-semibold block">AniLingo - Zero Click Learning</span>
                        <p className="text-[10px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                            "Chúng em đang gặp khó khăn trong việc chuẩn hóa dữ liệu shadowing tiếng Nhật bằng AI, rất mong GS hỗ trợ định hướng phương pháp sư phạm..."
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "investors",
        accentTitle: "Dành cho Investors",
        heading: "Nắm bắt deal chất lượng",
        description: "Tiếp cận hệ thống deal-flow đã được kiểm duyệt bởi các mentors hàng đầu. Quản lý danh mục chuyên nghiệp.",
        color: "text-violet-500",
        mockup: (
            <div className="flex h-full w-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm text-slate-800">
                <div className="flex h-[45%] gap-3">
                    <div className="flex flex-1 flex-col justify-center gap-1 rounded-xl border border-zinc-100 bg-zinc-50 p-3">
                        <span className="text-[10px] font-bold uppercase text-zinc-400">Tổng Deal-Flow</span>
                        <span className="text-2xl font-black text-slate-800">24<span className="text-sm font-medium text-zinc-400"> startup</span></span>
                    </div>
                    <div className="flex w-[40%] flex-col justify-center gap-1 rounded-xl border border-violet-100 bg-violet-50 p-3">
                        <span className="text-[10px] font-bold uppercase text-violet-500">Mục tiêu vốn</span>
                        <span className="text-lg font-bold text-violet-700">$1.2M</span>
                    </div>
                </div>
                {/* Table Data */}
                <div className="flex flex-1 flex-col gap-2 rounded-xl border border-zinc-100 bg-zinc-50 p-3 overflow-hidden">
                    <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                        <span className="text-[9px] font-bold text-zinc-400 uppercase">Tên dự án</span>
                        <span className="text-[9px] font-bold text-zinc-400 uppercase">Trạng thái</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded bg-emerald-100 text-[8px] font-bold text-emerald-600 flex items-center justify-center">AL</div>
                            <span className="text-[11px] font-semibold">AniLingo</span>
                        </div>
                        <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[9px] font-bold text-violet-600">Due Diligence</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded bg-blue-100 text-[8px] font-bold text-blue-600 flex items-center justify-center">KZ</div>
                            <span className="text-[11px] font-semibold">Kizuna Core</span>
                        </div>
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600">Verified</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "graph",
        accentTitle: "Hệ sinh thái",
        heading: "Mạng lưới thời gian thực",
        description: "Mapping toàn bộ cấu trúc các dự án, cố vấn và quỹ. Khám phá mối liên kết để tối ưu hóa nguồn lực.",
        color: "text-cyan-500",
        mockup: (
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-[#f8fafc] p-2 shadow-inner">
                {/* Abstract Node Network */}
                <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100">
                    <line x1="50" y1="50" x2="20" y2="30" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="50" y1="50" x2="80" y2="30" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="50" y1="50" x2="50" y2="80" stroke="#06b6d4" strokeWidth="1" />
                </svg>
                {/* Nodes */}
                <div className="absolute left-[20%] top-[30%] flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                    <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)] z-10" />
                    <span className="mt-1 text-[8px] font-bold text-slate-500">Mentor</span>
                </div>
                <div className="absolute left-[80%] top-[30%] flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                    <div className="h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)] z-10" />
                    <span className="mt-1 text-[8px] font-bold text-slate-500">Investor</span>
                </div>
                <div className="absolute left-[50%] top-[80%] flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                    <div className="h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] z-10" />
                    <span className="mt-1 text-[8px] font-bold text-slate-500">AniLingo</span>
                </div>

                {/* Central Hub */}
                <div className="absolute left-[50%] top-[50%] z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300 bg-cyan-50/80 backdrop-blur-md shadow-lg">
                    <div className="h-4 w-4 rounded-full bg-cyan-500 shadow-sm animate-pulse" />
                </div>
            </div>
        ),
    },
    {
        id: "alumni",
        accentTitle: "Dành cho Alumni",
        heading: "Lan tỏa di sản và kiến tạo",
        description: "Quay trở lại hệ sinh thái với tư cách là Cố vấn hoặc Nhà đầu tư thiên thần. Xây dựng thương hiệu cá nhân bền vững.",
        color: "text-rose-500",
        mockup: (
            <div className="flex h-full w-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm text-slate-800">
                <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="Alumni" className="h-10 w-10 rounded-full border-2 border-white shadow-sm" />
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-800">Nguyễn Tuấn Ngọc</span>
                        <span className="text-[10px] text-rose-500 font-medium">Alumni 2026 • DUT</span>
                    </div>
                </div>
                <div className="mt-1 flex gap-2">
                    <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-rose-100 bg-rose-50 py-3">
                        <span className="text-lg font-black text-rose-600">3</span>
                        <span className="text-[9px] font-bold uppercase text-rose-400 text-center px-1">Startup Đã cố vấn</span>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 py-3">
                        <span className="text-lg font-black text-slate-700">2</span>
                        <span className="text-[9px] font-bold uppercase text-slate-400 text-center px-1">Khoản đầu tư</span>
                    </div>
                </div>
                <div className="mt-auto flex items-center justify-between rounded-md bg-zinc-50 px-3 py-2 border border-zinc-100">
                    <span className="text-[10px] font-semibold text-zinc-500">Kizuna Trust Score</span>
                    <span className="text-xs font-bold text-rose-500">Top 5%</span>
                </div>
            </div>
        ),
    },
    {
        id: "resources",
        accentTitle: "Thư viện Tài nguyên",
        heading: "Kho tàng tri thức",
        description: "Truy cập hàng ngàn biểu mẫu, hợp đồng pháp lý, pitch deck template và các bài giảng độc quyền.",
        color: "text-amber-500",
        mockup: (
            <div className="flex h-full w-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm text-slate-800">
                <div className="flex gap-2">
                    <div className="flex flex-col justify-center h-10 flex-1 rounded-md border border-amber-200 bg-amber-50 px-2 cursor-pointer">
                        <span className="text-[10px] font-bold text-amber-700">Tất cả</span>
                    </div>
                    <div className="flex flex-col justify-center h-10 flex-[1.5] rounded-md border border-zinc-200 bg-white px-2 cursor-pointer opacity-60">
                        <span className="text-[10px] font-bold text-zinc-500">Pháp lý</span>
                    </div>
                    <div className="flex flex-col justify-center h-10 flex-[1.5] rounded-md border border-zinc-200 bg-white px-2 cursor-pointer opacity-60">
                        <span className="text-[10px] font-bold text-zinc-500">Pitch Deck</span>
                    </div>
                </div>
                <div className="mt-1 grid grid-cols-1 gap-2 overflow-y-auto pr-1">
                    <div className="flex items-center gap-3 rounded-lg border border-zinc-100 bg-zinc-50 p-2 hover:border-amber-200 transition-colors">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-amber-100 text-[10px] font-bold text-amber-600">PDF</div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-slate-700 leading-tight">Template Pitch Deck 2026</span>
                            <span className="text-[9px] text-zinc-400">Chuẩn quỹ VinaCapital</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-zinc-100 bg-zinc-50 p-2 hover:border-amber-200 transition-colors">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-blue-100 text-[10px] font-bold text-blue-600">DOC</div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-slate-700 leading-tight">Cấu trúc SpacetimeDB</span>
                            <span className="text-[9px] text-zinc-400">Tài liệu kiến trúc Serverless</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    }
];