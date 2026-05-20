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
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/50 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.08)]"
        >
            {/* Hiệu ứng ánh sáng nội khu tinh tế */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(16,185,129,0.06),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.04),transparent_28%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:34px_34px]" />

            <div className="relative z-10 flex h-full flex-col">

                {/* Thanh điều hướng cửa sổ (Window Top Bar) */}
                <div className="flex h-12 items-center justify-between border-b border-zinc-200 bg-zinc-100/80 px-4">
                    <div className="flex items-center gap-2">
                        <span className="size-2.5 rounded-full bg-rose-400" />
                        <span className="size-2.5 rounded-full bg-amber-400" />
                        <span className="size-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="hidden rounded-full border border-zinc-200 bg-white px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-zinc-400 sm:inline-flex shadow-sm">
                        {mockupTitles[index]}
                    </span>
                </div>

                {/* Thân của Dashboard */}
                <div className="grid flex-1 grid-cols-[4.5rem_1fr] sm:grid-cols-[7rem_1fr]">

                    {/* Sidebar ứng dụng */}
                    <aside className="border-r border-zinc-200 bg-zinc-100/40 p-3 sm:p-4">
                        <div className="mb-5 h-7 w-7 rounded-lg bg-[#0a1c13] shadow-md shadow-zinc-900/10" />
                        <div className="space-y-3">
                            {[0, 1, 2, 3].map((item) => (
                                <span
                                    key={item}
                                    className={cn(
                                        "block h-2 rounded-full bg-zinc-200",
                                        item === 0 ? "w-full bg-emerald-500" : "w-4/5",
                                        item === 2 && "w-2/3"
                                    )}
                                />
                            ))}
                        </div>
                    </aside>

                    {/* Khu vực nội dung chính hiển thị Data */}
                    <div className="flex min-w-0 flex-col gap-4 p-4 sm:p-5 lg:p-6">
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <span className="block h-2.5 w-28 rounded-full bg-zinc-300" />
                                <span className="mt-3 block h-2 w-40 max-w-full rounded-full bg-zinc-200" />
                            </div>
                            <span className="h-8 w-8 shrink-0 rounded-full border border-zinc-200 bg-white shadow-sm" />
                        </div>

                        {/* Thẻ hiển thị chỉ số (Metrics Grid) - Đổi sang nền Trắng chữ Đen */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                                <p className="text-xl font-bold text-zinc-900 sm:text-2xl">{metrics[0]}</p>
                                <p className="mt-1 truncate text-[0.625rem] font-bold uppercase tracking-[0.12em] text-zinc-400">{metrics[1]}</p>
                            </div>
                            <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-3 shadow-sm">
                                <p className="text-xl font-bold text-emerald-700 sm:text-2xl">{metrics[2]}</p>
                                <p className="mt-1 truncate text-[0.625rem] font-bold uppercase tracking-[0.12em] text-emerald-500/80">{metrics[3]}</p>
                            </div>
                        </div>

                        {/* Biểu đồ cột (Bar Chart) */}
                        <div className="grid flex-1 grid-cols-5 items-end gap-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                            {barHeightClassNames.map((heightClassName, item) => (
                                <span
                                    key={item}
                                    className={cn(
                                        "rounded-t-md bg-gradient-to-t from-emerald-500/80 to-emerald-400",
                                        heightClassName,
                                        item === index % 5 && "from-sky-500 to-sky-400"
                                    )}
                                />
                            ))}
                        </div>

                        {/* Các dòng danh sách chi tiết phía dưới */}
                        <div className="space-y-2">
                            {[0, 1, 2].map((item) => (
                                <div key={item} className="flex items-center gap-3 rounded-lg border border-zinc-150 bg-white px-3 py-2 shadow-xs">
                                    <span className={cn("size-2 rounded-full", item === 1 ? "bg-sky-400" : "bg-emerald-400")} />
                                    <span className={cn("h-2 rounded-full bg-zinc-200", item === 0 ? "w-2/3" : "w-1/2")} />
                                    <span className="ml-auto h-2 w-10 rounded-full bg-zinc-100" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};