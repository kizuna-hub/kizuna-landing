"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { BillingCycle } from "@/components/pricing/pricing-hero";

export interface PricingPlan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface PricingCardProps {
  plan: PricingPlan;
  billing: BillingCycle;
}

export const pricingCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function PricingCard({ plan, billing }: PricingCardProps) {
  const priceString = billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
  const [amount, currency] = priceString.split(" ");
  const isFree = amount === "0";

  return (
    <motion.article
      variants={pricingCardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      // Thêm h-full để article chiếm trọn chiều cao của Grid Cell
      className="relative rounded-3xl w-full h-full"
    >
      {/* Hào quang nền xanh nhạt cho thẻ được đề xuất */}
      {plan.recommended ? (
        <div
          aria-hidden="true"
          className="absolute inset-[-2px] rounded-[26px] bg-gradient-to-b from-emerald-400 to-transparent opacity-30 blur-sm"
        />
      ) : null}

      <div
        className={cn(
          // Thêm h-full để div bên trong cũng chiếm trọn chiều cao
          "relative flex flex-col overflow-hidden rounded-3xl border transition-colors duration-300 w-full h-full p-6 sm:p-8",
          // Đồng bộ giao diện, chỉ khác nhau màu border và shadow
          plan.recommended
            ? "border-emerald-200 bg-white shadow-[0_8px_30px_rgb(16,185,129,0.12)]"
            : "border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-zinc-300"
        )}
      >
        {/* Header Thẻ */}
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-serif text-2xl font-bold text-[#0a1c13]">
            {plan.name}
          </h2>
          {plan.recommended ? (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-black tracking-widest text-emerald-700 uppercase border border-emerald-200 shrink-0">
              Recommend
            </span>
          ) : null}
        </div>

        {/* Phần Giá Tiền */}
        <div className="mt-6">
          <div className="flex items-end gap-1.5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${plan.name}-${billing}-${priceString}`}
                className="flex items-baseline gap-1.5"
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <span className="inline-block text-4xl font-black leading-none tracking-tight text-[#0a1c13] xl:text-5xl">
                  {isFree ? "Miễn phí" : amount}
                </span>
                {!isFree && currency && (
                  <span className="text-base font-bold text-[#0a1c13]">
                    {currency}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
            {!isFree && (
              <span className="pb-1 text-[11px] font-bold text-[#0a1c13] uppercase tracking-widest">
                / tháng
              </span>
            )}
          </div>
          <p className="mt-2 text-[11px] font-medium text-zinc-500 leading-relaxed min-h-[34px]">
            {isFree
              ? "Trải nghiệm không giới hạn để làm quen hệ thống."
              : billing === "yearly"
                ? "Tiết kiệm hơn. Thanh toán mỗi năm một lần."
                : "Thanh toán từng tháng, hủy bất kỳ lúc nào."}
          </p>
        </div>

        {/* Mô tả ngắn */}
        <p className="mt-4 text-xs leading-relaxed text-zinc-600 font-medium pb-5 border-b border-zinc-100">
          {plan.description}
        </p>

        {/* Danh sách tính năng (Dùng flex-1 để lấp đầy khoảng trống thừa) */}
        <ul className="mt-5 flex flex-col gap-3 text-xs font-semibold text-zinc-700 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 items-start">
              <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-500" aria-hidden="true" />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Nút Call to Action (Bị đẩy xuống sát đáy nhờ flex-1 của thẻ ul ở trên) */}
        <Button
          asChild
          className={cn(
            "mt-8 h-10 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 gap-2 shrink-0 w-full",
            plan.recommended
              ? "bg-[#16452a] text-white hover:bg-[#0a1c13] shadow-md"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200",
          )}
        >
          <Link href="/signup">
            Kích hoạt gói
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}