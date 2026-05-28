import React from "react";
import { CheckCircle2, TrendingUp, Users, Target, Lock } from "lucide-react";

export interface LoopStep {
    id: string;
    role: string;
    title: string;
    description: string;
    mockup: React.ReactNode;
}

export const LOOP_DATA: LoopStep[] = [
    {
        id: "founder",
        role: "FOUNDER",
        title: "Nền tảng Ươm tạo",
        description: "Biến ý tưởng thô thành dự án khả thi. Hệ thống hóa lộ trình, quản lý task và chuẩn bị hồ sơ gọi vốn chuyên nghiệp.",
        mockup: (
            <div className="flex h-full w-full flex-col gap-5 text-zinc-300">
                {/* Board Header */}
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                    <div>
                        <h4 className="text-sm font-bold text-white">Workspace: AniLingo & Kizuna Hub</h4>
                        <p className="text-xs text-zinc-500 mt-1">Sprint 4: Hoàn thiện tính năng AI & Database</p>
                    </div>
                    <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full border-2 border-[#0f0f0f] bg-emerald-600 flex items-center justify-center text-xs text-white font-bold">N</div>
                        <div className="h-8 w-8 rounded-full border-2 border-[#0f0f0f] bg-blue-600 flex items-center justify-center text-xs text-white font-bold">P</div>
                        <div className="h-8 w-8 rounded-full border-2 border-[#0f0f0f] bg-orange-500 flex items-center justify-center text-xs text-white font-bold">T</div>
                    </div>
                </div>
                {/* Kanban Board */}
                <div className="flex h-full flex-1 gap-4">
                    {/* Column 1 */}
                    <div className="flex flex-1 flex-col gap-3 rounded-xl border border-white/5 bg-white/5 p-4">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-zinc-400" />
                            <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400">To Do</h5>
                            <span className="ml-auto text-xs text-zinc-600">2</span>
                        </div>
                        <div className="flex flex-col gap-2 rounded-lg bg-white/5 p-3 border border-white/10 hover:border-white/20 transition-colors">
                            <span className="text-xs font-medium text-white">Pitch Deck vòng Hạt giống</span>
                            <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full w-fit">Kizuna Hub</span>
                        </div>
                        <div className="flex flex-col gap-2 rounded-lg bg-white/5 p-3 border border-white/10 hover:border-white/20 transition-colors">
                            <span className="text-xs font-medium text-white">Research SpacetimeDB schema</span>
                            <span className="text-[10px] text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full w-fit">Tech-core</span>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="flex flex-1 flex-col gap-3 rounded-xl border border-white/5 bg-white/5 p-4">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            <h5 className="text-xs font-bold uppercase tracking-wider text-white">In Progress</h5>
                        </div>
                        <div className="flex flex-col gap-2 rounded-lg bg-white/10 p-3 border border-emerald-500/30">
                            <span className="text-xs font-medium text-white">Tích hợp Zero-Click Dictionary</span>
                            <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full w-fit">AniLingo</span>
                            <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                                <div className="bg-emerald-400 h-1 rounded-full w-[65%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "mentor",
        role: "MENTOR",
        title: "Bộ lọc Chất lượng",
        description: "Thuật toán AI tự động match dự án phù hợp với chuyên môn. Theo dõi tiến độ và định hướng startup vượt qua rủi ro.",
        mockup: (
            <div className="flex h-full w-full flex-col items-center justify-center gap-6">
                <div className="text-center mb-2">
                    <h4 className="text-lg font-bold text-white">AI Mentor Matching</h4>
                    <p className="text-sm text-zinc-400">Đang quét chuyên gia dựa trên dữ liệu dự án...</p>
                </div>
                {/* List of Real Mentors */}
                <div className="flex w-full max-w-md flex-col gap-3">
                    <div className="flex items-center gap-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-20"><Target className="w-12 h-12 text-amber-400" /></div>
                        <div className="h-12 w-12 shrink-0 rounded-full bg-zinc-800 flex items-center justify-center text-amber-400 font-bold border border-amber-400/30">GS</div>
                        <div className="flex flex-col gap-1 z-10">
                            <h5 className="text-sm font-bold text-white">GS. Takeru Hishinuma</h5>
                            <p className="text-xs text-zinc-400">Chuyên gia Văn hóa & EdTech Nhật Bản</p>
                        </div>
                        <div className="ml-auto text-right z-10">
                            <span className="text-lg font-bold text-amber-400">98%</span>
                            <p className="text-[10px] text-amber-400/70">Phù hợp AniLingo</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                        <div className="h-12 w-12 shrink-0 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold border border-white/10">GS</div>
                        <div className="flex flex-col gap-1">
                            <h5 className="text-sm font-bold text-zinc-300">GS. Nakamuta Hajime</h5>
                            <p className="text-xs text-zinc-500">Cố vấn Ngôn ngữ học</p>
                        </div>
                        <div className="ml-auto text-right">
                            <span className="text-base font-bold text-emerald-400">92%</span>
                        </div>
                    </div>

                    <button className="mt-2 w-full py-3 rounded-lg border border-dashed border-white/20 text-xs font-medium text-zinc-400 hover:text-white hover:border-white/40 transition-colors">
                        Xem thêm 12 Cố vấn phù hợp khác
                    </button>
                </div>
            </div>
        ),
    },
    {
        id: "investor",
        role: "INVESTOR",
        title: "Dòng vốn Thông minh",
        description: "Tiếp cận Deal-flow đã được kiểm chứng bởi các Mentor hàng đầu. Theo dõi traction thời gian thực và chốt deal nhanh chóng.",
        mockup: (
            <div className="flex h-full w-full flex-col gap-5">
                {/* Deal Flow Stats */}
                <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-5">
                        <span className="text-xs text-zinc-400 flex items-center gap-1"><TrendingUp className="w-3 h-3 text-emerald-400" /> Tổng Giá trị Gọi vốn</span>
                        <h4 className="text-2xl font-bold text-white mt-1">$450,000</h4>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-5">
                        <span className="text-xs text-zinc-400 flex items-center gap-1"><Users className="w-3 h-3 text-violet-400" /> Startup Ready-to-fund</span>
                        <h4 className="text-2xl font-bold text-white mt-1">24 Dự án</h4>
                    </div>
                </div>
                {/* Deal Table Real Data */}
                <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
                    <div className="grid grid-cols-4 items-center border-b border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-zinc-400">
                        <div className="col-span-2">STARTUP NAME</div>
                        <div>STAGE</div>
                        <div className="text-right">STATUS</div>
                    </div>

                    <div className="flex flex-col p-2">
                        {/* Row 1 */}
                        <div className="grid grid-cols-4 items-center rounded-lg p-3 hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="col-span-2 flex items-center gap-3">
                                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg"><span className="text-white text-xs font-bold">K</span></div>
                                <div>
                                    <h5 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">Kizuna Hub</h5>
                                    <p className="text-[10px] text-zinc-500">SaaS / Ecosystem Platform</p>
                                </div>
                            </div>
                            <div className="text-xs text-zinc-300">Pre-Seed</div>
                            <div className="text-right flex justify-end">
                                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                                    <CheckCircle2 className="w-3 h-3" /> VERIFIED
                                </span>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-4 items-center rounded-lg p-3 hover:bg-white/5 transition-colors cursor-pointer group mt-1">
                            <div className="col-span-2 flex items-center gap-3">
                                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg"><span className="text-white text-xs font-bold">A</span></div>
                                <div>
                                    <h5 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">AniLingo</h5>
                                    <p className="text-[10px] text-zinc-500">EdTech / AI Language</p>
                                </div>
                            </div>
                            <div className="text-xs text-zinc-300">Seed</div>
                            <div className="text-right flex justify-end">
                                <span className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 bg-zinc-800 px-2 py-1 rounded border border-zinc-700">
                                    <Lock className="w-3 h-3" /> DUE DILIGENCE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];