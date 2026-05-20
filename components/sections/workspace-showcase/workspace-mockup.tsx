import { cn } from "@/lib/utils";
import { mockupTitles, mockupMetrics, barHeightClassNames, type WorkspaceFeature } from "./data";

export interface WorkspaceMockupProps {
    feature: WorkspaceFeature;
    index: number;
}

export const WorkspaceMockup = ({ feature, index }: WorkspaceMockupProps) => {
    const metrics = mockupMetrics[index];

    return (
        <div
            aria-label={`${feature.eyebrow} interface preview`}
            // Biến đổi container thành màu xám siêu nhạt, viền xám mảnh để nổi bật trên nền section trắng
            className="relative overflow-hidden aspect-[4/3] bg-zinc-50/50 rounded-2xl border border-zinc-200/80 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.08)]"
        >
            {/* Hiệu ứng ánh sáng nội khu tinh tế */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_15%,rgba(16,185,129,0.06),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.04),transparent_28%)]" />
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:34px_34px]" />

            <div className="flex relative z-10 flex-col h-full">

                {/* Thanh điều hướng cửa sổ (Window Top Bar) */}
                <div className="flex justify-between items-center px-4 h-12 bg-zinc-100/80 border-b border-zinc-200">
                    <div className="flex items-center gap-2">
                        <span className="rounded-full size-2.5 bg-rose-400" />
                        <span className="rounded-full size-2.5 bg-amber-400" />
                        <span className="rounded-full size-2.5 bg-emerald-400" />
                    </div>
                    <span className="hidden sm:inline-flex px-3 py-1 text-[0.65rem] font-bold tracking-[0.18em] text-zinc-400 uppercase bg-white rounded-full border border-zinc-200 shadow-sm">
                        {mockupTitles[index]}
                    </span>
                </div>

                {/* Thân của Dashboard */}
                <div className="grid flex-1 grid-cols-[4.5rem_1fr] sm:grid-cols-[7rem_1fr]">

                    {/* Sidebar ứng dụng */}
                    <aside className="p-3 sm:p-4 bg-zinc-100/40 border-r border-zinc-200">
                        <div className="mb-5 w-7 h-7 bg-[#0a1c13] rounded-lg shadow-md shadow-zinc-900/10" />
                        <div className="space-y-3">
                            {[0, 1, 2, 3].map((item) => (
                                <span
                                    key={item}
                                    className={cn(
                                        "block h-2 bg-zinc-200 rounded-full",
                                        item === 0 ? "w-full bg-emerald-500" : "w-4/5",
                                        item === 2 && "w-2/3"
                                    )}
                                />
                            ))}
                        </div>
                    </aside>

                    {/* Khu vực nội dung chính hiển thị Data */}
                    <div className="flex flex-col min-w-0 p-4 sm:p-5 lg:p-6 gap-4">
                        <div className="flex justify-between items-start gap-3">
                            <div className="min-w-0">
                                <span className="block w-28 h-2.5 bg-zinc-300 rounded-full" />
                                <span className="block mt-3 w-40 max-w-full h-2 bg-zinc-200 rounded-full" />
                            </div>
                            <span className="shrink-0 w-8 h-8 bg-white rounded-full border border-zinc-200 shadow-sm" />
                        </div>

                        {/* Thẻ hiển thị chỉ số (Metrics Grid) - Đổi sang nền Trắng chữ Đen */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-white rounded-xl border border-zinc-200 shadow-sm">
                                <p className="text-xl sm:text-2xl font-bold text-zinc-900">{metrics[0]}</p>
                                <p className="truncate mt-1 text-[0.625rem] font-bold tracking-[0.12em] text-zinc-400 uppercase">{metrics[1]}</p>
                            </div>
                            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 shadow-sm">
                                <p className="text-xl sm:text-2xl font-bold text-emerald-700">{metrics[2]}</p>
                                <p className="truncate mt-1 text-[0.625rem] font-bold tracking-[0.12em] text-emerald-500/80 uppercase">{metrics[3]}</p>
                            </div>
                        </div>

                        {/* Biểu đồ cột (Bar Chart) */}
                        <div className="grid items-end flex-1 grid-cols-5 p-4 gap-2 bg-white rounded-xl border border-zinc-200 shadow-sm">
                            {barHeightClassNames.map((heightClassName, item) => (
                                <span
                                    key={item}
                                    className={cn(
                                        "bg-gradient-to-t from-emerald-500/80 to-emerald-400 rounded-t-md",
                                        heightClassName,
                                        item === index % 5 && "from-sky-500 to-sky-400"
                                    )}
                                />
                            ))}
                        </div>

                        {/* Các dòng danh sách chi tiết phía dưới */}
                        <div className="space-y-2">
                            {[0, 1, 2].map((item) => (
                                <div key={item} className="flex items-center px-3 py-2 gap-3 bg-white rounded-lg border border-zinc-150 shadow-xs">
                                    <span className={cn("rounded-full size-2", item === 1 ? "bg-sky-400" : "bg-emerald-400")} />
                                    <span className={cn("h-2 bg-zinc-200 rounded-full", item === 0 ? "w-2/3" : "w-1/2")} />
                                    <span className="ml-auto w-10 h-2 bg-zinc-100 rounded-full" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};