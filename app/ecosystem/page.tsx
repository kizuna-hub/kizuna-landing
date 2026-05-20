import { Navbar } from "@/components/landing/navbar";
import { EcosystemHero } from "@/components/ecosystem";
import { EcosystemCarousel } from "@/components/ecosystem/sections/carousel";
import { EcosystemValueLoop } from "@/components/ecosystem/sections/value-loop/index";
import { EcosystemMetrics } from "@/components/ecosystem/sections/metrics";

export default function EcosystemPage() {
    return (
        // Bọc toàn bộ trong một thẻ main có background tối màu chuẩn Kizuna
        <main className="relative flex min-h-screen flex-col bg-[#102c1e] text-foreground">
            {/* 1. Navbar luôn nổi ở trên cùng */}
            <Navbar theme="light" />

            {/* 2. Hero Section (Đã hoàn thiện) */}
            <EcosystemHero />

            {/* 3. Section Carousel Horizontal */}
            <EcosystemCarousel />

            {/* 4. Value Loop Section */}
            <EcosystemValueLoop />

            <EcosystemMetrics />
        </main>
    );
}