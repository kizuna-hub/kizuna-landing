import { Sparkles, FileLock, Bot, Users, TrendingUp } from "lucide-react";

export function FeaturesSection() {
    const features = [
        {
            icon: <FileLock className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "Sổ cái bảo vệ IP",
            desc: "Bảo vệ lợi thế cạnh tranh của bạn với dấu thời gian (timestamping) không thể thay đổi. Chúng tôi tạo ra dấu vết tài liệu có thể xác minh cho các thuật toán và thiết kế của bạn trước khi chúng rời khỏi không gian làm việc.",
        },
        {
            icon: <Bot className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "Trợ lý chính sách AI",
            desc: "Nắm bắt bức tranh phức tạp về quy định công nghệ khu vực. AI của chúng tôi tự động điều chỉnh các bài thuyết trình (pitch deck) của bạn để phù hợp với Nghị định 13 và các khuôn khổ tuân thủ địa phương một cách dễ dàng.",
        },
        {
            icon: <Users className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "Kết nối Cố vấn",
            desc: "Nhận quyền truy cập vào mạng lưới được chọn lọc cẩn thận gồm các nhà sáng lập tiên phong (Pioneer Founders). Chúng tôi kết nối bạn với các chuyên gia dày dạn kinh nghiệm trong ngành, những người đã vượt qua thành công giai đoạn tăng trưởng mà bạn đang bước vào.",
        },
        {
            icon: <TrendingUp className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "Sẵn sàng gọi vốn VC",
            desc: "Tạo các báo cáo dựa trên dữ liệu bằng ngôn ngữ của các nhà đầu tư. Biến các số liệu nội bộ lộn xộn thành các phòng thẩm định (diligence room) chuyên nghiệp, sạch sẽ để chốt vòng hạt giống.",
        },
    ];

    return (
        /* Giảm pb-64 xuống pb-32 vì không còn cái card 800px ở dưới nữa */
        <section className="relative min-h-[80vh] bg-[#102c1e] flex flex-col justify-center pt-32 pb-32 z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Column - Chiếm 6 cột */}
                <div className="lg:col-span-6 lg:sticky lg:top-1/4 self-start pr-12">
                    <div className="flex items-center gap-2 text-white/60 text-[10px] tracking-[0.3em] font-bold uppercase mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Xác thực bằng AI
                    </div>

                    <h2 className="font-serif text-4xl lg:text-[3.8rem] font-semibold text-white tracking-tighter leading-[1.1]">
                        Chuẩn hóa ý tưởng.<br /> Bảo vệ tầm nhìn.
                    </h2>

                    <p className="text-zinc-400 text-sm lg:text-base mt-6 max-w-sm leading-relaxed font-light">
                        Kizuna Hub biến các ý tưởng thô sơ thành tài sản kỹ thuật số có cấu trúc và được bảo vệ pháp lý chỉ trong vài phút. Tập trung xây dựng, chúng tôi lo phần nền tảng.
                    </p>

                    <button className="mt-8 border border-white/20 text-[14px] bg-white text-[#102c1e] font-bold px-8 py-3.5 rounded-[12px] transition-all duration-300 tracking-wide">
                        Khám phá tất cả tính năng
                    </button>
                </div>

                {/* Right Column - Chiếm 6 cột */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                    {features.map((item, idx) => (
                        <div key={idx} className="flex flex-col group">
                            <div className="transition-transform duration-300 group-hover:scale-110 origin-left text-emerald-400">
                                {item.icon}
                            </div>
                            <h3 className="text-white text-lg mb-2 font-serif font-medium tracking-tight italic">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-[14px] leading-relaxed font-light pr-2">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}