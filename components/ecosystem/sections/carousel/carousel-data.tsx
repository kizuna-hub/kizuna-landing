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
            <div className="flex h-full w-full flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm">
                {/* Tiny Header */}
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                    <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <div className="h-1.5 w-12 rounded-full bg-zinc-200" />
                    </div>
                    <div className="flex gap-1">
                        <div className="h-2 w-8 rounded bg-zinc-100" />
                        <div className="h-2 w-2 rounded bg-emerald-100" />
                    </div>
                </div>
                {/* Tiny Kanban */}
                <div className="flex flex-1 gap-2 pt-1">
                    <div className="flex flex-1 flex-col gap-1.5 rounded bg-zinc-50 border border-zinc-100 p-1.5">
                        <div className="mb-1 h-1 w-6 rounded bg-zinc-300" />
                        <div className="h-4 w-full rounded border border-zinc-200 bg-white" />
                        <div className="h-6 w-full rounded border border-emerald-200 bg-emerald-50" />
                        <div className="h-4 w-full rounded border border-zinc-200 bg-white" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 rounded bg-zinc-50 border border-zinc-100 p-1.5">
                        <div className="mb-1 h-1 w-6 rounded bg-zinc-300" />
                        <div className="h-8 w-full rounded border border-zinc-200 bg-white" />
                        <div className="h-4 w-full rounded border border-zinc-200 bg-white" />
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
        color: "text-orange-500",
        mockup: (
            <div className="flex h-full w-full flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm">
                <div className="flex items-center gap-2 border-b border-zinc-100 pb-2">
                    <div className="h-4 w-4 rounded-full bg-orange-100" />
                    <div className="h-1.5 w-16 rounded-full bg-zinc-200" />
                </div>
                <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex items-center gap-2 rounded-md bg-zinc-50 border border-zinc-100 p-1.5">
                        <div className="h-3 w-3 rounded-full bg-zinc-200" />
                        <div className="flex flex-1 flex-col gap-1">
                            <div className="h-1 w-12 rounded bg-zinc-300" />
                            <div className="h-1 w-20 rounded bg-zinc-200" />
                        </div>
                        <div className="h-1.5 w-4 rounded bg-orange-200" />
                    </div>
                    <div className="flex items-center gap-2 rounded-md border border-orange-200 bg-orange-50 p-1.5">
                        <div className="h-3 w-3 rounded-full bg-orange-200" />
                        <div className="flex flex-1 flex-col gap-1">
                            <div className="h-1 w-14 rounded bg-orange-400" />
                            <div className="h-1 w-16 rounded bg-orange-300" />
                        </div>
                        <div className="h-1.5 w-4 rounded bg-orange-400" />
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
            <div className="flex h-full w-full flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm">
                <div className="flex h-[35%] gap-2">
                    <div className="flex flex-1 flex-col justify-end gap-[1px] rounded-md border border-zinc-100 bg-zinc-50 p-1.5 align-baseline">
                        <div className="h-1.5 w-6 rounded-[1px] bg-violet-200" />
                        <div className="h-3 w-6 rounded-[1px] bg-violet-300" />
                        <div className="h-5 w-6 rounded-[1px] bg-violet-500" />
                    </div>
                    <div className="flex w-[35%] flex-col gap-1 rounded-md border border-zinc-100 bg-zinc-50 p-1.5">
                        <div className="h-1 w-full rounded bg-zinc-200" />
                        <div className="h-1 w-3/4 rounded bg-zinc-100" />
                        <div className="mt-auto h-1.5 w-full rounded bg-violet-500 shadow-sm" />
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-1 rounded-md border border-zinc-100 bg-zinc-50 p-1.5">
                    <div className="flex justify-between border-b border-zinc-100 pb-1">
                        <div className="h-1 w-8 rounded bg-zinc-300" />
                        <div className="h-1 w-4 rounded bg-zinc-200" />
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                        <div className="h-1 w-12 rounded bg-zinc-200" />
                        <div className="h-1 w-6 rounded bg-violet-400" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="h-1 w-10 rounded bg-zinc-200" />
                        <div className="h-1 w-6 rounded bg-zinc-300" />
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="h-1 w-14 rounded bg-zinc-300" />
                        <div className="h-1.5 w-8 rounded bg-emerald-400" />
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
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 p-2 shadow-inner">
                <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="30" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" className="text-cyan-300" />
                    <line x1="70" y1="30" x2="30" y2="70" stroke="currentColor" strokeWidth="0.5" className="text-cyan-300" />
                    <line x1="50" y1="20" x2="30" y2="70" stroke="currentColor" strokeWidth="0.5" className="text-cyan-300" />
                </svg>
                <div className="absolute left-[30%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-sm" />
                <div className="absolute bottom-[30%] right-[30%] h-2 w-2 rounded-full bg-cyan-400 shadow-sm" />
                <div className="absolute right-[30%] top-[30%] h-1 w-1 rounded-full bg-zinc-400" />
                <div className="absolute bottom-[30%] left-[30%] h-2.5 w-2.5 rounded-full bg-indigo-400" />
                <div className="absolute left-[50%] top-[20%] h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <div className="absolute left-[50%] top-[50%] z-10 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 backdrop-blur-md">
                    <div className="h-1 w-1 rounded-full bg-cyan-500" />
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
            <div className="flex h-full w-full flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
                <div className="flex items-center gap-3 border-b border-zinc-100 pb-2">
                    <div className="h-6 w-6 rounded-full bg-rose-100" />
                    <div className="flex flex-col gap-1">
                        <div className="h-1.5 w-16 rounded bg-zinc-300" />
                        <div className="h-1 w-10 rounded bg-zinc-200" />
                    </div>
                </div>
                <div className="mt-2 flex gap-2">
                    <div className="h-16 flex-1 rounded-md border border-rose-200 bg-rose-50" />
                    <div className="h-16 flex-1 rounded-md border border-zinc-200 bg-zinc-50" />
                </div>
                <div className="mt-auto h-2 w-2/3 rounded bg-zinc-200" />
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
            <div className="flex h-full w-full flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm">
                <div className="flex gap-2">
                    <div className="h-8 w-1/3 rounded-md border border-amber-200 bg-amber-100" />
                    <div className="h-8 w-1/3 rounded-md border border-zinc-200 bg-zinc-100" />
                    <div className="h-8 w-1/3 rounded-md border border-zinc-200 bg-zinc-100" />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="h-12 w-full rounded border border-zinc-100 bg-zinc-50" />
                    <div className="h-12 w-full rounded border border-amber-200 bg-amber-50" />
                    <div className="h-12 w-full rounded border border-zinc-100 bg-zinc-50" />
                    <div className="h-12 w-full rounded border border-zinc-100 bg-zinc-50" />
                </div>
            </div>
        ),
    }
];