"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export type BillingCycle = "monthly" | "yearly";

export interface PricingHeroProps {
  billing: BillingCycle;
  onBillingChange: (billing: BillingCycle) => void;
}

export function PricingHero({ billing, onBillingChange }: PricingHeroProps) {
  return (
    <section className="mx-auto grid min-h-[500px] w-full max-w-7xl items-end gap-10 px-5 pt-24 pb-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:pt-32">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: "easeOut" }}
      >
        <div className="mb-8 flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          Kizuna Hub
          <span className="size-1.5 rounded-full bg-[#fb923c]" aria-hidden="true" />
        </div>

        <h1 className="font-[var(--font-serif)] text-5xl leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-8xl">
          Các gói giải pháp linh hoạt theo nhu cầu của bạn
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
          Tất cả các gói đều bao gồm file processing, video frame analysis, và
          link transcription. Mức giá được tính dựa trên AI usage và smart
          storage.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-start gap-3 lg:items-end"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, delay: 0.1, ease: "easeOut" }}
      >
        <span className="text-sm font-medium text-zinc-400">
          Billing cycle
        </span>
        <div className="rounded-full border border-white/10 bg-white/10 p-1 backdrop-blur-md">
          <div className="relative grid grid-cols-2">
            <BillingToggleButton
              active={billing === "monthly"}
              label="Monthly"
              onClick={() => onBillingChange("monthly")}
            />
            <BillingToggleButton
              active={billing === "yearly"}
              label="Yearly (Save 16%)"
              onClick={() => onBillingChange("yearly")}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

interface BillingToggleButtonProps {
  active: boolean;
  label: string;
  onClick: () => void;
}

function BillingToggleButton({
  active,
  label,
  onClick,
}: BillingToggleButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "relative min-h-11 rounded-full px-5 text-sm font-semibold transition-colors duration-300",
        active ? "text-zinc-900" : "text-zinc-300 hover:text-white",
      )}
    >
      {active ? (
        <motion.span
          layoutId="pricing-billing-pill"
          className="absolute inset-0 rounded-full bg-white"
          transition={{ type: "spring", bounce: 0.16, duration: 0.5 }}
        />
      ) : null}
      <span className="relative z-10 whitespace-nowrap">{label}</span>
    </button>
  );
}
