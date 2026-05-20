import Image from "next/image";
import { cn } from "@/lib/utils";
import { roleLabel, type NetworkPerson } from "./data";
import { Building2, ArrowUpRight } from "lucide-react";

export interface NetworkCardProps {
    person: NetworkPerson;
    className?: string;
}

export const NetworkCard = ({ person, className }: NetworkCardProps) => {
    const isEmerald = person.badgeTone === "emerald";

    return (
        <article
            aria-label={`${person.name}, ${roleLabel[person.role]}`}
            className={cn(
                // CONTAINER CHÍNH: Nền trắng tinh, góc bo sâu 24px, border zinc sắc nét chuẩn bento phẳng
                "group relative flex w-[15.5rem] flex-col rounded-[24px] bg-white p-3 border border-zinc-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.015)] transition-all duration-500 hover:border-zinc-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 cursor-pointer select-none overflow-hidden",
                className
            )}
        >
            {/* KHỐI BENTO 1: Khung ảnh phẳng lì, sắc nét, không dùng hiệu ứng mờ (Glassmorphism) */}
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[16px] bg-zinc-50 border border-zinc-100">
                <Image
                    src={person.avatarUrl}
                    alt={`Ảnh đại diện của ${person.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Badge vai trò dạng Solid phẳng - Emerald (Mentor) hoặc Orange (Investor) */}
                <div className="absolute left-2.5 top-2.5 z-10">
                    <span
                        className={cn(
                            "inline-flex h-5 items-center rounded-md px-2 text-[9px] font-black uppercase tracking-wider border shadow-sm",
                            isEmerald
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : "bg-orange-50 text-orange-700 border-orange-200"
                        )}
                    >
                        {roleLabel[person.role]}
                    </span>
                </div>
            </div>

            {/* KHỐI BENTO 2: Hộp thông tin độc lập màu xám nhạt (Zinc-50) để tách biệt thị giác hoàn toàn */}
            <div className="mt-2.5 flex flex-1 flex-col gap-2 rounded-[16px] bg-zinc-50/80 border border-zinc-100 p-3 transition-colors duration-300 group-hover:bg-zinc-100/50">
                {/* Phân tầng 1: Tên cực đậm và Chức danh màu thương hiệu */}
                <div>
                    <h3 className="text-base font-black text-zinc-900 tracking-tight transition-colors duration-300 group-hover:text-black">
                        {person.name}
                    </h3>
                    <p className={cn(
                        "mt-0.5 text-xs font-bold tracking-wide",
                        isEmerald ? "text-emerald-600" : "text-orange-600"
                    )}>
                        {person.title}
                    </p>
                </div>

                {/* Phân tầng 2: Khối Đơn vị công tác lồng bên trong (Nested Box) tạo chiều sâu cấu trúc */}
                <div className="flex items-center gap-2 rounded-lg bg-white border border-zinc-200/60 px-2.5 py-1.5 text-[11px] text-zinc-600 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                    <Building2 className={cn(
                        "w-3.5 h-3.5 shrink-0",
                        isEmerald ? "text-emerald-500" : "text-orange-500"
                    )} />
                    <span className="truncate font-semibold text-zinc-700">{person.affiliation}</span>
                </div>
            </div>

            {/* KHỐI BENTO 3: Thanh điều hướng và nút Call to Action ở đáy card */}
            <div className="mt-2 flex items-center justify-between px-1.5 py-0.5">
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 transition-colors duration-300 group-hover:text-zinc-600">
                    Xem thông tin
                </span>

                {/* Nút mũi tên đổi màu solid đồng bộ theo tone vai trò khi hover */}
                <div className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full bg-zinc-100 text-zinc-500 transition-all duration-300 border border-zinc-200/40 group-hover:text-white group-hover:scale-105 shadow-sm",
                    isEmerald
                        ? "group-hover:bg-emerald-600 group-hover:border-emerald-600"
                        : "group-hover:bg-orange-600 group-hover:border-orange-600"
                )}>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                </div>
            </div>
        </article>
    );
};