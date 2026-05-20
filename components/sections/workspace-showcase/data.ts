export interface WorkspaceFeature {
    eyebrow: string;
    title: string;
    highlight: string;
    desc: string;
}

export const workspaceFeatures: readonly WorkspaceFeature[] = [
    {
        eyebrow: "01 • WORKSPACE",
        title: "Không gian làm việc",
        highlight: "khép kín.",
        desc: "Nơi tập trung quản lý task, tiến độ và tài liệu startup. Mọi hoạt động của team đều được ghi nhận làm cơ sở dữ liệu minh bạch cho các vòng gọi vốn.",
    },
    {
        eyebrow: "02 • LEGAL & COMPLIANCE",
        title: "Tuân thủ pháp lý bằng",
        highlight: "một click.",
        desc: "Tự động hóa thiết lập Bảng chia vốn (Cap Table) chuẩn quốc tế. Trợ lý AI sẽ rà soát và vẽ ra lộ trình an toàn nhất để startup của bạn tuân thủ mọi chính sách.",
    },
    {
        eyebrow: "03 • AI MATCHING",
        title: "Tìm kiếm mảnh ghép",
        highlight: "hoàn hảo.",
        desc: "Thuật toán AI phân tích sâu kỹ năng, định hướng và dữ liệu thực thi để đề xuất những Tech Co-founder hoặc Mentor phù hợp nhất với tầm nhìn của bạn.",
    },
    {
        eyebrow: "04 • VERIFICATION",
        title: "Hồ sơ năng lực được",
        highlight: "xác thực.",
        desc: "Truy cập kho dữ liệu minh bạch về lịch sử cố vấn, tỷ lệ thành công và các dự án đã đồng hành. Đảm bảo mọi kết nối trên mạng lưới đều chất lượng.",
    },
    {
        eyebrow: "05 • DUE DILIGENCE",
        title: "Ra quyết định từ",
        highlight: "dữ liệu thật.",
        desc: "Truy cập độc quyền vào Phễu Deal Flow. Theo dõi Execution Ledger của startup theo thời gian thực và tự động xuất Báo cáo Thẩm định Rủi ro chỉ trong vài phút.",
    },
] as const;

export const mockupTitles = [
    "Founder OS",
    "Policy Console",
    "Matching Graph",
    "Verified Profile",
    "Investor Diligence",
] as const;

export const mockupMetrics = [
    ["84%", "Task health", "12", "Docs logged"],
    ["100%", "Cap table", "7", "Policy checks"],
    ["93", "Match score", "18", "Candidates"],
    ["4.9", "Trust rating", "36", "Sessions"],
    ["5", "Live deals", "8m", "Risk report"],
] as const;

export const barHeightClassNames = ["h-[46%]", "h-[68%]", "h-[54%]", "h-[82%]", "h-[64%]"] as const;

export const viewportConfig = {
    once: true,
    margin: "-100px",
} as const;

export const transitionConfig = {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
} as const;