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

import { Navbar } from "@/components/landing/navbar";

// LƯU Ý CHO NGỌC: Đảm bảo type của monthlyPrice và yearlyPrice trong 
// "@/components/pricing/pricing-card" là `string` nhé!
const plans: PricingPlan[] = [
  {
    name: "Startup",
    monthlyPrice: "129.000 VNĐ",
    yearlyPrice: "69.000 VNĐ",
    description:
      "Dành cho sinh viên/nhóm dự án cần công cụ hỗ trợ làm hồ sơ và kết nối với các mentor phù hợp, chất lượng.",
    features: [
      "AI Policy Navigator (Định giá & Cap Table)",
      "Nhật ký thực thi dự án (Execution Ledger)",
      "Sắp xếp ghép cặp Mentor thực chiến",
      "5GB Cloud lưu trữ tài sản số",
      "Hỗ trợ qua Email",
    ],
  },
  {
    name: "Business",
    monthlyPrice: "499.000 VNĐ",
    yearlyPrice: "399.000 VNĐ",
    description:
      "Dành cho Doanh nghiệp/SME muốn tối ưu chi phí tuyển dụng, săn lùng Co-founder và nhân tài thực chiến.",
    features: [
      "Truy cập kho Data Pool ứng viên", // Nhấn mạnh là Ứng viên/Nhân sự
      "AI Matching lọc hồ sơ năng lực thực tế",
      "Xem 50 hồ sơ ứng viên/tháng", // Sửa chữ "dự án" thành "ứng viên" để bít lỗ hổng
      "Dashboard quản lý chiến dịch",
      "Quyền ưu tiên hỗ trợ",
    ],
    recommended: true,
  },
  {
    name: "Investor",
    monthlyPrice: "1.699.000 VNĐ",
    yearlyPrice: "1.299.000 VNĐ",
    description:
      "Dành cho Quỹ đầu tư (VC), Angel Investor cần phễu Deal Flow chất lượng và báo cáo thẩm định tự động.",
    features: [
      "Truy cập Deal Flow không giới hạn", // Nhấn mạnh là phễu Đầu tư
      "Báo cáo thẩm định (Due Diligence) bằng AI",
      "Truy cập Sổ cái thực thi (Traction proof)",
      "Sắp xếp Private Pitching 1:1",
      "Quản trị viên hỗ trợ riêng",
    ],
  },
];

const comparisonSections: ComparisonSection[] = [
  {
    category: "AI Policy Navigator & Thẩm định Đầu tư",
    description: "Khả năng phân tích tài chính, định giá startup và hỗ trợ đàm phán gọi vốn.",
    rows: [
      {
        feature: "Mô hình Định giá & Cap Table",
        starter: "Bản nháp cơ bản",
        creator: "Không hỗ trợ", // Chặn Business xem định giá để đi đêm
        max: "Định giá chuyên sâu & Phân tích",
      },
      {
        feature: "Báo cáo Thẩm định (Due Diligence)",
        starter: "AI Policy Navigator đánh giá",
        creator: "Không hỗ trợ", // Chặn Business
        max: "Phân tích rủi ro (Full Export)",
      },
      {
        feature: "Truy cập Sổ cái SpacetimeDB (Traction)",
        starter: "Lưu vết thực thi",
        creator: "Không hỗ trợ", // Business ra cafe cũng không có data này để kiểm chứng
        max: "Toàn quyền truy xuất (Audit)",
      },
    ],
  },
  {
    category: "Sàn giao dịch nhân tài (AI Matching)",
    description: "Kết nối Mentor, săn nhân tài thực chiến và matching Quỹ đầu tư.",
    rows: [
      {
        feature: "Đặc quyền ghép cặp",
        starter: "Ưu tiên Mentor VIP",
        creator: "AI lọc ứng viên (Tuyển dụng)",
        max: "Private Pitching 1:1 (Gọi vốn)", // Tách biệt rõ ràng mục đích
      },
      {
        feature: "Truy cập Dữ liệu nền tảng",
        starter: "Chỉ dự án cá nhân",
        creator: "Data Pool (Hồ sơ cá nhân)", // Business chỉ xem thông tin người
        max: "Deal Flow (Hồ sơ dự án & Tài chính)", // Investor xem thông tin tiền
      },
      {
        feature: "Săn Tech Co-founder/Nhân tài",
        starter: "Không hỗ trợ",
        creator: "10 lượt tiếp cận/tháng",
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
    ],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("yearly");

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar/>
      <div className="bg-[#102c1e] text-white">
        <PricingHero billing={billing} onBillingChange={setBilling} />
        <PricingSection plans={plans} billing={billing} />
      </div>

      <ComparisonTable plans={plans} sections={comparisonSections} />
    </main>
  );
}