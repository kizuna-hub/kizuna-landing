"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { PricingCard, type PricingPlan } from "@/components/pricing/pricing-card";
import type { BillingCycle } from "@/components/pricing/pricing-hero";

export interface PricingSectionProps {
  plans: PricingPlan[];
  billing: BillingCycle;
}

const pricingGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

export function PricingSection({ plans, billing }: PricingSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
      <motion.div
        aria-label="Pricing plans data room"
        // ĐỔI THÀNH items-stretch ĐỂ ÉP 3 THẺ CAO BẰNG THẰNG CAO NHẤT
        className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch"
        variants={pricingGridVariants}
        initial="hidden"
        animate="visible"
      >
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} billing={billing} />
        ))}
      </motion.div>
    </section>
  );
}