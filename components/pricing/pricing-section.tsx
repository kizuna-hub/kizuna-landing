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
    <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
      <motion.div
        aria-label="Pricing plans"
        className="grid grid-cols-1 gap-5 lg:grid-cols-3"
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
