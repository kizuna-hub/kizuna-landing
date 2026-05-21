import { Sparkles, FileLock, Bot, Users, TrendingUp } from "lucide-react";

export function FeaturesSection() {
    const features = [
        {
            icon: <FileLock className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "Nhật ký thực thi dự án",
            desc: "Chứng minh năng lực bằng dữ liệu thực tế (Traction). Ghi vết tiến độ bất biến, xóa bỏ hoàn toàn rủi ro 'faking data' (làm giả số liệu) khi gọi vốn đầu tư.",
        },
        {
            icon: <Bot className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "AI Policy Navigator",
            desc: "Trợ lý phân tích tài chính tự động. Hỗ trợ định giá Startup, thiết lập Bảng chia vốn (Cap Table) và xuất báo cáo Thẩm định (Due Diligence) rủi ro chỉ trong vài phút.",
        },
        {
            icon: <Users className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "Sàn giao dịch Nhân tài",
            desc: "Thuật toán AI Matching phân tích kỹ năng thực chiến. Giúp SME thâm nhập Data Pool săn lùng Tech Co-founder và kết nối Startup với các Mentor đẳng cấp.",
        },
        {
            icon: <TrendingUp className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />,
            title: "Phễu Deal Flow độc quyền",
            desc: "Đặc quyền dành riêng cho Investor với chiến lược phân luồng dữ liệu. Xem trước bức tranh tài chính, sắp xếp Private Pitching 1:1 và chốt deal an toàn.",
        },
    ];

    return (
        /* Giảm pb-64 xuống pb-32 vì không còn cái card 800px ở dưới nữa */
        <section className="relative min-h-[80vh] bg-kizuna-primary flex flex-col justify-center pt-32 pb-32 z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Column - Chiếm 6 cột */}
                <div className="lg:col-span-6 lg:sticky lg:top-1/4 self-start pr-12">
                    <div className="flex items-center gap-2 text-white/60 text-[10px] tracking-[0.3em] font-bold uppercase mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Xác thực bằng AI
                    </div>

                    <h2 className="font-serif text-4xl lg:text-[3.8rem] font-semibold text-white tracking-tighter leading-[1.1]">
                        Minh bạch hóa dữ liệu.<br /> Tối ưu hóa rót vốn.
                    </h2>

                    <p className="text-zinc-400 text-sm lg:text-base mt-6 max-w-sm leading-relaxed font-light">
                        Kizuna Hub biến các ý tưởng thô sơ thành số liệu thực tế được chứng minh qua Nhật ký thực thi. Tự động hóa thẩm định, kết nối đúng tệp nhân tài và mở van dòng vốn an toàn.
                    </p>

                    <button className="mt-8 border border-white/20 text-[14px] bg-white text-[#102c1e] font-bold px-8 py-3.5 rounded-[12px] transition-all duration-300 tracking-wide hover:bg-zinc-200">
                        Khám phá hệ sinh thái
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