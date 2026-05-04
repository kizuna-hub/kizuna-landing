"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { BillingCycle } from "@/components/pricing/pricing-hero";

export interface PricingPlan {
  name: "Startup" | "Business" | "Investor";
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface PricingCardProps {
  plan: PricingPlan;
  billing: BillingCycle;
}

export const pricingCardVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: "easeOut" },
  },
};

export function PricingCard({ plan, billing }: PricingCardProps) {
  const price = billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.article
      variants={pricingCardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn("relative rounded-[28px]", plan.recommended && "lg:-mt-5")}
    >
      {plan.recommended ? (
        <motion.div
          aria-hidden="true"
          className="absolute inset-[-1px] rounded-[29px] opacity-70"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.28), rgba(16,185,129,0.24), rgba(255,255,255,0.18))",
            backgroundSize: "220% 220%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      ) : null}

      <div
        className={cn(
          "relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-[28px] border bg-white/[0.055] p-7 text-white backdrop-blur-md transition-colors duration-300 sm:p-8",
          plan.recommended
            ? "border-white/30 bg-white/[0.075]"
            : "border-white/10 hover:border-white/20",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-[var(--font-serif)] text-3xl text-white">
            {plan.name}
          </h2>
          {plan.recommended ? (
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              Recommended
            </span>
          ) : null}
        </div>

        <div className="mt-8">
          <div className="flex items-end gap-2">
            <span className="pb-2 text-3xl text-zinc-400">$</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={`${plan.name}-${billing}-${price}`}
                className="inline-block text-6xl font-semibold leading-none tracking-normal text-white"
                initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(5px)" }}
                transition={{ duration: 0.26, ease: "easeOut" }}
              >
                {price}
              </motion.span>
            </AnimatePresence>
            <span className="pb-2 text-sm font-medium text-zinc-400">
              / tháng
            </span>
          </div>
          <p className="mt-3 text-sm text-zinc-400">
            {billing === "yearly"
              ? "Thanh toán hằng năm, đã áp dụng Save 16%."
              : "Thanh toán theo từng tháng, linh hoạt hủy bất cứ lúc nào."}
          </p>
        </div>

        <p className="mt-8 min-h-[72px] text-base leading-7 text-zinc-200">
          {plan.description}
        </p>

        <ul className="mt-8 flex flex-col gap-4 text-sm text-zinc-300">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-white" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={cn(
            "mt-auto h-12 rounded-full border text-sm font-bold transition-all duration-300",
            plan.recommended
              ? "border-white bg-white text-zinc-900 hover:bg-zinc-100"
              : "border-white/15 bg-white text-zinc-900 hover:bg-zinc-100",
          )}
        >
          <Link href="/signup">
            Bắt đầu với {plan.name}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}
