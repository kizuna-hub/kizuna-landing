"use client";

import { useState } from "react";

import {
  PricingHero,
  type BillingCycle,
} from "@/components/pricing/pricing-hero";
import {
  PricingSection,
} from "@/components/pricing/pricing-section";
import type { PricingPlan } from "@/components/pricing/pricing-card";
import {
  ComparisonTable,
  type ComparisonSection,
} from "@/components/pricing/comparison-table";

const plans: PricingPlan[] = [
  {
    name: "Startup",
    monthlyPrice: 149000,
    yearlyPrice: 99000,
    description:
      "Dành cho các nhóm dự án sinh viên cần công cụ AI chuyên sâu để chuẩn hóa hồ sơ và đặc quyền kết nối.",
    features: [
      "AI Policy Navigator (Lập mô hình tài chính)",
      "Định danh ý tưởng bằng IP Ledger",
      "Ưu tiên xếp lịch ghép cặp Mentor VIP",
      "5GB Cloud lưu trữ tài sản số",
      "Hỗ trợ qua Email",
    ],
  },
  {
    name: "Business",
    monthlyPrice: 499000,
    yearlyPrice: 399000,
    description:
      "Dành cho Startup/Doanh nghiệp muốn săn lùng Tech Co-founder và nhân tài IT chất lượng cao từ Bách Khoa.",
    features: [
      "Truy cập kho Data Pool ứng viên",
      "Thuật toán AI Matching nhân tài",
      "Xem 50 hồ sơ dự án/tháng",
      "Dashboard quản lý chiến dịch",
      "Quyền ưu tiên hỗ trợ",
    ],
    recommended: true,
  },
  {
    name: "Investor",
    monthlyPrice: 4990000,
    yearlyPrice: 3990000,
    description:
      "Dành cho các Quỹ đầu tư, Vườn ươm cần truy cập toàn bộ dữ liệu dự án đã được AI thẩm định pháp lý (NQ54).",
    features: [
      "Truy cập Data Pool không giới hạn",
      "Phễu dự án chuẩn NQ54 & QĐ 3344",
      "Sắp xếp Private Pitching 1:1",
      "Báo cáo phân tích thị trường ĐMST",
      "Quản trị viên hỗ trợ riêng",
    ],
  },
];

const comparisonSections: ComparisonSection[] = [
  {
    category: "AI Policy Navigator & Thẩm định",
    description: "Khả năng xử lý tự động, phân tích tài chính và chuẩn hóa hồ sơ gọi vốn.",
    rows: [
      {
        feature: "Chuẩn hóa form địa phương (NQ54, QĐ3344)",
        starter: "Cơ bản (5 dự án/tháng)",
        creator: "Chỉ đọc (Read-only)",
        max: "Toàn quyền truy cập & Phân tích",
      },
      {
        feature: "Mô hình tài chính tự động",
        starter: "Tích hợp",
        creator: "Báo cáo tóm tắt",
        max: "Phân tích chuyên sâu (Full Export)",
      },
      {
        feature: "Lượt dùng AI (AI Credits)",
        starter: "5.000 Credits / tháng",
        creator: "15.000 Credits / tháng",
        max: "Không giới hạn",
      },
    ],
  },
  {
    category: "IP Protection Ledger",
    description: "Hệ thống bảo vệ tài sản trí tuệ và chống đánh cắp chất xám.",
    rows: [
      {
        feature: "Mã hóa thời gian thực (Timestamping)",
        starter: "Có",
        creator: "Chỉ xem chứng chỉ",
        max: "Quản lý chứng chỉ cấp phép",
      },
      {
        feature: "Lịch sử lưu vết ý tưởng",
        starter: "1 Năm",
        creator: "N/A",
        max: "Không giới hạn",
      },
    ],
  },
  {
    category: "Sàn giao dịch nhân tài (AI Matching)",
    description: "Kết nối Mentor, Co-founder và Nhà đầu tư thông qua thuật toán phân tích.",
    rows: [
      {
        feature: "Đặc quyền ghép cặp",
        starter: "Ưu tiên Mentor VIP",
        creator: "AI lọc ứng viên (Matching)",
        max: "Private Pitching 1:1",
      },
      {
        feature: "Truy cập Data Pool dự án",
        starter: "Chỉ dự án cá nhân",
        creator: "Giới hạn 50 hồ sơ/tháng",
        max: "Toàn quyền (Uncensored)",
      },
      {
        feature: "Đăng tin tuyển dụng/Săn Co-founder",
        starter: "Không hỗ trợ",
        creator: "10 tin/tháng",
        max: "Không giới hạn",
      },
    ],
  },
  {
    category: "Workspace & Quản trị",
    description: "Lưu trữ, công cụ làm việc nhóm và bảo mật dữ liệu.",
    rows: [
      {
        feature: "Lưu trữ tài sản số",
        starter: "5GB",
        creator: "50GB",
        max: "1TB",
      },
      {
        feature: "Tài khoản người dùng (Seats)",
        starter: "1 tài khoản",
        creator: "3 tài khoản",
        max: "Không giới hạn",
      },
      {
        feature: "Bảng điều khiển (Dashboard)",
        starter: "Tiến độ dự án cá nhân",
        creator: "Chiến dịch tuyển dụng",
        max: "Panorama toàn hệ sinh thái",
      },
      {
        feature: "Hỗ trợ khách hàng",
        starter: "Email (48h)",
        creator: "Ưu tiên xử lý (12h)",
        max: "Hỗ trợ 1:1 chuyên biệt (24/7)",
      },
    ],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("yearly");

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <div className="bg-[#102c1e] text-white">
        <PricingHero billing={billing} onBillingChange={setBilling} />
        <PricingSection plans={plans} billing={billing} />
      </div>

      <ComparisonTable plans={plans} sections={comparisonSections} />
    </main>
  );
}