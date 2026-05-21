export interface WorkspaceFeature {
    eyebrow: string;
    title: string;
    highlight: string;
    desc: string;
}

export const workspaceFeatures: readonly WorkspaceFeature[] = [
    {
        eyebrow: "01 • EXECUTION LEDGER",
        title: "Không gian làm việc",
        highlight: "minh bạch.",
        desc: "Không chỉ là quản lý task. Mọi dòng code commit, mọi quyết định sản phẩm đều được đồng bộ thời gian thực thành 'Nhật ký thực thi' – bằng chứng thép cho năng lực của team trước các nhà đầu tư.",
    },
    {
        eyebrow: "02 • CAP TABLE OS",
        title: "Cấu trúc cổ phần",
        highlight: "chuẩn quốc tế.",
        desc: "Tự động hóa việc phân chia mồ hôi công sức (Sweat Equity) và định hình Bảng vốn (Cap Table) ngay từ ngày đầu. Trợ lý AI sẽ cảnh báo sớm các rủi ro pháp lý để Founder yên tâm build product.",
    },
    {
        eyebrow: "03 • AGENTIC MATCHING",
        title: "Tìm kiếm mảnh ghép",
        highlight: "hoàn hảo.",
        desc: "Thuật toán AI phân tích sâu từ Tech Stack (Next.js, AI,...) đến tư duy kinh doanh để kết nối chính xác những Co-founder còn thiếu hoặc Mentor phù hợp nhất với giai đoạn của dự án.",
    },
    {
        eyebrow: "04 • MENTOR NETWORK",
        title: "Hồ sơ năng lực được",
        highlight: "xác thực.",
        desc: "Loại bỏ hoàn toàn 'chuyên gia rởm'. Hệ thống theo dõi lịch sử tư vấn, tỷ lệ dự án gọi vốn thành công và đánh giá thực tế từ các Founder đi trước để đảm bảo chất lượng mạng lưới.",
    },
    {
        eyebrow: "05 • DEAL-FLOW RADAR",
        title: "Ra quyết định từ",
        highlight: "dữ liệu thật.",
        desc: "Dành riêng cho Nhà đầu tư thiên thần và Quỹ. Trực tiếp theo dõi sức khỏe dự án qua dashboard, tự động xuất báo cáo Due Diligence chỉ trong 12 giây thay vì mất hàng tuần rà soát.",
    },
] as const;

export const mockupTitles = [
    "Execution Dashboard",
    "Equity & Compliance",
    "AI Matching Graph",
    "Verified Profile",
    "Investor Diligence",
] as const;

export const mockupMetrics = [
    ["98%", "System Sync", "2.4k", "Events Logged"],
    ["100%", "Equity Verified", "4", "Core Founders"],
    ["96", "Match Score", "Next.js", "Core Tech"],
    ["4.9", "Trust Rating", "12", "Startups Scaled"],
    ["$50k", "Seed Ticket", "12s", "Risk Audit"],
] as const;

export const barHeightClassNames = [
    "h-[46%]",
    "h-[68%]",
    "h-[54%]",
    "h-[82%]",
    "h-[64%]"
] as const;

export const viewportConfig = {
    once: true,
    margin: "-100px",
} as const;

export const transitionConfig = {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
} as const;