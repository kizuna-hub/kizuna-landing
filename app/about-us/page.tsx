import React from "react";
// Đảm bảo đường dẫn import Navbar và Footer đúng với cấu trúc thư mục hiện tại của mày
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

// Import các section
import { TheManifestoSection } from "@/components/about-us/sections/the-manifesto";
import { CoreValuesSection } from "@/components/about-us/sections/core-values";
import { TheTeamSection } from "@/components/about-us/sections/the-team";
import { AboutHeroSection } from "@/components/about-us/sections/about-hero-section";

export const metadata = {
    title: "Về chúng tôi | Kizuna Hub",
    description: "Khám phá câu chuyện khởi nguyên và sứ mệnh kiến tạo bệ phóng hoàn chỉnh cho Startup sinh viên, Cố vấn và Nhà đầu tư tại Kizuna Hub.",
};

export default function AboutUsPage() {
    return (
        // Thẻ main vẫn giữ màu nền Xanh chủ đạo cho những đoạn m cần thiết
        <main className="relative min-h-screen w-full bg-[#102c1e] selection:bg-emerald-500/30">

            {/* Header / Điều hướng */}
            {/* Navbar đã được bọc ở layout.tsx rồi thì mày không cần gọi ở đây nữa đâu nhé, nếu gọi 2 lần nó sẽ đè lên nhau sinh lỗi đấy. */}

            {/* ĐÃ SỬA CHỖ NÀY: Xóa bỏ pt-24 md:pt-32 */}
            <div className="flex flex-col w-full">

                {/* 1. Tuyên ngôn & Khởi nguyên */}
                {/* Lớp pt-32 đẩy text xuống dưới đã được code sẵn bên trong AboutHeroSection rồi */}
                <AboutHeroSection />

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