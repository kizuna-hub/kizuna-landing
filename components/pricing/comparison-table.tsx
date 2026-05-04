"use client";

import type { ReactNode } from "react";
import type { PricingPlan } from "@/components/pricing/pricing-card";

export interface ComparisonRow {
  feature: string;
  starter: ReactNode;
  creator: ReactNode;
  max: ReactNode;
}

export interface ComparisonSection {
  category: string;
  description: string;
  rows: ComparisonRow[];
}

export interface ComparisonTableProps {
  plans: PricingPlan[];
  sections: ComparisonSection[];
}

export function ComparisonTable({ plans, sections }: ComparisonTableProps) {
  return (
    // Section ngoài cùng: Nền Dark Green (sử dụng bg-transparent nếu trang cha đã set nền tối)
    <section
      aria-labelledby="comparison-heading"
      className="relative px-4 py-20 bg-[#102c1e] sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Khối Card màu Trắng nằm chính giữa, giới hạn max-w-6xl, bo góc cực to */}
      <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] bg-white p-8 shadow-2xl sm:p-12 lg:p-16">

        {/* Header của bảng */}
        <div className="mb-12 max-w-3xl">
          <h2
            id="comparison-heading"
            className="font-[var(--font-serif)] text-4xl leading-tight text-zinc-900 sm:text-5xl"
          >
            So sánh chi tiết
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-500">
            Chọn gói phù hợp theo AI usage, Custom Agents, integrations và smart storage.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-left">
            <thead className="sticky top-0 z-30">
              {/* Bỏ các viền dọc, chỉ giữ viền ngang border-b */}
              <tr className="border-b border-zinc-200 bg-white/95 backdrop-blur-xl">
                <th className="w-[28%] pb-6 pr-6 pt-2 text-sm font-semibold text-zinc-400">
                  Plan details
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="w-[24%] px-6 pb-6 pt-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-[var(--font-serif)] text-3xl font-medium text-zinc-900">
                        {plan.name}
                      </span>
                      {plan.recommended ? (
                        <span className="rounded-full bg-[#0a1c13] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                          Best fit
                        </span>
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
                <TableSection key={section.category} section={section} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function TableSection({ section }: { section: ComparisonSection }) {
  return (
    <>
      <tr>
        {/* Bỏ nền xám bg-zinc-50, đổi sang nền trắng cho clean giống Eden */}
        <td colSpan={4} className="border-b border-zinc-100 bg-white pb-6 pt-12 pr-6">
          <h3 className="font-[var(--font-serif)] text-2xl text-zinc-900">
            {section.category}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            {section.description}
          </p>
        </td>
      </tr>
      {section.rows.map((row) => (
        <tr
          key={row.feature}
          className="border-b border-zinc-100 transition-colors duration-200 hover:bg-zinc-50/50"
        >
          <td className="py-5 pr-6 text-[15px] font-medium text-zinc-900">
            {row.feature}
          </td>
          <TableCell>{row.starter}</TableCell>
          <TableCell>{row.creator}</TableCell>
          <TableCell>{row.max}</TableCell>
        </tr>
      ))}
    </>
  );
}

function TableCell({ children }: { children: ReactNode }) {
  return (
    // Bỏ border-l ở các cell, tạo không gian mở
    <td className="px-6 py-5 text-[14px] leading-6 text-zinc-600">
      {children}
    </td>
  );
}