"use client";

import { useState } from "react";
import {
  PricingHero,
  type BillingCycle
} from "@/components/pricing/pricing-hero";
import {
  PricingSection
} from "@/components/pricing/pricing-section";
import type { PricingPlan } from "@/components/pricing/pricing-card";
import {
  ComparisonTable,
  type ComparisonSection
} from "@/components/pricing/comparison-table";
import { Navbar } from "@/components/landing/navbar";
import { Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA GÓI CƯỚC STARTUP ---
const startupPlans: PricingPlan[] = [
  {
    name: "Khởi động",
    monthlyPrice: "0 VNĐ",
    yearlyPrice: "0 VNĐ",
    description: "Tập trung thử nghiệm ý tưởng thô và trải nghiệm tính năng cốt lõi của nền tảng.",
    features: [
      "Duy trì tối đa 1 Active Project cố định",
      "1 lượt dùng AI Pitch Deck dựng slide duy nhất",
      "Không hỗ trợ AI Policy tư vấn văn phong",
      "Lướt xem hồ sơ Mentor & Pioneer Founder",
      "Không hỗ trợ AI Matching",
      "Incubation Progress cơ bản (Dùng nội bộ nhóm)"
    ]
  },
  {
    name: "Basic",
    monthlyPrice: "199.000 VNĐ",
    yearlyPrice: "169.000 VNĐ",
    description: "Không gian thực chiến lý tưởng cho các dự án cần tinh chỉnh và tăng tốc kết nối.",
    features: [
      "Mở rộng tối đa 3 Active Projects để xoay trục",
      "Khởi tạo slide AI Pitch Deck 5 lần / tháng",
      "Mở khóa 50 lượt Trợ lý AI Policy / tháng",
      "Thuật toán Match Top 5 Mentor phù hợp nhất",
      "Cấp 5 lượt gửi yêu cầu kết nối Mentor & Investor / tháng",
      "Incubation Progress quản lý tiến độ nội bộ chuyên sâu"
    ],
    recommended: true
  },
  {
    name: "Premium",
    monthlyPrice: "399.000 VNĐ",
    yearlyPrice: "329.000 VNĐ",
    description: "Vũ khí tối thượng để tối ưu hóa hồ sơ và đồng bộ dữ liệu trực tiếp với các quỹ đầu tư.",
    features: [
      "Không giới hạn Project, AI Pitch Deck Slide & AI Policy",
      "Cấp 10 lượt gửi yêu cầu kết nối Mentor & Investor / tháng",
      "Priority Pass: Ghim VIP hồ sơ lên hàng chờ Mentor",
      "Gửi 1 nút xin bảo chứng & review từ Mentor",
      "Investor Match: Kết nối trực tiếp Top 3 Nhà đầu tư",
      "Live Sync: Đồng bộ tiến độ thời gian thực với Quỹ"
    ]
  }
];

// --- DATA GÓI CƯỚC INVESTOR ---
const investorPlans: PricingPlan[] = [
  {
    name: "Scout",
    monthlyPrice: "0 VNĐ",
    yearlyPrice: "0 VNĐ",
    description: "Quan sát viên thị trường, tiếp cận luồng deal thụ động từ hệ sinh thái học đường.",
    features: [
      "Lướt xem danh sách dự án đang gọi vốn",
      "Quyền tiếp cận bản xem AI Pitch Deck cơ bản",
      "Mù liên lạc: Ẩn hoàn toàn thông tin Founder",
      "Không có quyền gửi yêu cầu kết nối trước",
      "Chờ Startup Premium chủ động quẹt kết nối"
    ]
  },
  {
    name: "Active Angel",
    monthlyPrice: "999.000 VNĐ",
    yearlyPrice: "799.000 VNĐ",
    description: "Dành cho nhà đầu tư cá nhân săn tìm dự án công nghệ đã được kiểm chứng thực tế.",
    features: [
      "AI Radar: Bộ lọc & Noti Real-time deal khớp vị",
      "Mở khóa xem lịch sử Review & Endorsement của Mentor",
      "Cấp 10 lượt chủ động kết nối thẳng tới Founder / tháng",
      "Vá lỗ hổng: Tránh rủi ro scam nhờ audit nội bộ"
    ],
    recommended: true
  },
  {
    name: "VC Enterprise",
    monthlyPrice: "3.999.000 VNĐ",
    yearlyPrice: "2.999.000 VNĐ",
    description: "Đặc quyền tối cao dành cho các quỹ đầu tư chuyên nghiệp cần tốc độ và tự động hóa giám sát.",
    features: [
      "Early Bird Access: Xem trước deal Premium độc quyền trong 48h đầu",
      "Vô hạn lượt chủ động kết nối & tải full Data Box",
      "Portfolio Management Dashboard chuyên dụng",
      "Tự động hóa giám sát tình trạng doanh nghiệp sau đầu tư",
      "Đồng bộ thời gian thực metric tài chính & vận hành"
    ]
  }
];

const comparisonSections: ComparisonSection[] = [
  {
    category: "Công cụ AI & Khởi tạo tài liệu",
    description: "Sức mạnh của trí tuệ nhân tạo trong việc chuẩn hóa và gọt giũa tài liệu gọi vốn.",
    rows: [
      { feature: "AI Pitch Deck Generator", starter: "1 lần duy nhất", creator: "3 lần / tháng", max: "Không giới hạn / Xuất PDF" },
      { feature: "Trợ lý AI Policy (Văn phong)", starter: "Không hỗ trợ", creator: "50 lần / tháng", max: "Không giới hạn" },
      { feature: "Early Bird Access (Xem deal sớm)", starter: "Không hỗ trợ", creator: "Không hỗ trợ", max: "Độc quyền tiếp cận trong 48h đầu" }
    ]
  },
  {
    category: "Mạng lưới kết nối & Thẩm định",
    description: "Cơ chế chống qua mặt, bảo mật thông tin và đo lường mức độ tin cậy của deal flow.",
    rows: [
      { feature: "Connection Tokens / Tháng", starter: "Bị khóa kết nối", creator: "3 Tokens (Startup) / 5 Tokens (Angel)", max: "Không giới hạn" },
      { feature: "Thông tin liên lạc Founder", starter: "Ẩn hoàn toàn (Blur)", creator: "Mở khóa theo Token", max: "Xem tự do" },
      { feature: "Xem Mentor Review nội bộ", starter: "Ẩn chi tiết", creator: "Xem toàn bộ lịch sử bảo chứng", max: "Xem toàn bộ + Quản lý danh mục" }
    ]
  },
  {
    category: "Quản trị & Đồng bộ sau đầu tư",
    description: "Hệ thống tự động hóa khâu viết báo cáo tuần/tháng cho các bên liên quan.",
    rows: [
      { feature: "Incubation Progress Progress Board", starter: "Bản cơ bản nội bộ", creator: "Bản chuyên sâu", max: "Đồng bộ thời gian thực (Live Sync)" },
      { feature: "Portfolio Management Dashboard", starter: "Không hỗ trợ", creator: "Không hỗ trợ", max: "Panorama tự động toàn hệ sinh thái" }
    ]
  }
];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("yearly");
  const [activeRole, setActiveRole] = useState<'startup' | 'investor'>('startup');

  const currentPlans = activeRole === 'startup' ? startupPlans : investorPlans;

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <div className="bg-[#102c1e] text-white pb-12">
        <PricingHero billing={billing} onBillingChange={setBilling} />

        {/* --- ROLE SWITCHER TAB --- */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex bg-zinc-100 p-1.5 rounded-2xl border border-zinc-200 shadow-inner">
            <button
              onClick={() => setActiveRole('startup')}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all",
                activeRole === 'startup' ? "bg-white text-[#16452a] shadow-sm border border-zinc-200/50" : "text-zinc-500 hover:text-zinc-700"
              )}
            >
              <Users className="w-4 h-4" /> Cho Startup / Nhóm Dự Án
            </button>
            <button
              onClick={() => setActiveRole('investor')}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all",
                activeRole === 'investor' ? "bg-white text-[#16452a] shadow-sm border border-zinc-200/50" : "text-zinc-500 hover:text-zinc-700"
              )}
            >
              <Briefcase className="w-4 h-4" /> Cho Nhà Đầu Tư / Quỹ VC
            </button>
          </div>
        </div>

        <PricingSection plans={currentPlans} billing={billing} />
      </div>

      <ComparisonTable plans={currentPlans} sections={comparisonSections} />
    </main>
  );
}