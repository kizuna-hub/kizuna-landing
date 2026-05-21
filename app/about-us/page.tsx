import React from "react";
// Đảm bảo đường dẫn import Navbar và Footer đúng với cấu trúc thư mục hiện tại của mày
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

// Import section The Manifesto vừa tạo
import { TheManifestoSection } from "@/components/about-us/sections/the-manifesto";
import { CoreValuesSection } from "@/components/about-us/sections/core-values";
import { TheTeamSection } from "@/components/about-us/sections/the-team";

export const metadata = {
    title: "Về chúng tôi | Kizuna Hub",
    description: "Khám phá câu chuyện khởi nguyên và sứ mệnh kiến tạo bệ phóng hoàn chỉnh cho Startup sinh viên, Cố vấn và Nhà đầu tư tại Kizuna Hub.",
};

export default function AboutUsPage() {
    return (
        // Set min-h-screen và background màu Xanh chủ đạo để đồng bộ toàn trang
        <main className="relative min-h-screen w-full bg-[#102c1e] selection:bg-emerald-500/30">
            {/* Header / Điều hướng */}
            <Navbar />

            {/* Vùng chứa các Sections - Đẩy padding-top để không bị Navbar đè lên */}
            <div className="pt-24 md:pt-32">

                {/* 1. Tuyên ngôn & Khởi nguyên */}
                <TheManifestoSection />

                {/* --- CHỖ TRỐNG CHO CÁC SECTION TƯƠNG LAI --- */}

                {/* 2. Giá trị cốt lõi (Core Values) */}
                <CoreValuesSection />

                {/* 3. Đội ngũ kiến tạo (The Brains / Team) */}
                <TheTeamSection />

                {/* 4. Mạng lưới đối tác (Ecosystem Network) */}
                {/* <PartnersSection /> */}

                {/* 5. Chốt chặn hành động (Join Movement CTA) */}
                {/* <AboutCTASection /> */}

            </div>

            {/* Chân trang đã được "độ" max UI/UX */}
            <Footer />
        </main>
    );
}