import React from "react";
import { Footer } from "@/components/landing/footer";

// Đã import thêm SuccessStories
import { ProjectHero, SuccessStories, DealFlowSection } from "@/components/project/sections";

export const metadata = {
    title: "Dự án | Kizuna Hub",
    description: "Khám phá các startup tiềm năng trong hệ sinh thái Kizuna Hub.",
};

export default function ProjectPage() {
    return (
        <main className="relative min-h-screen w-full bg-[#081810] selection:bg-emerald-500/30">
            <div className="flex flex-col w-full">

                {/* 1. Hero Section nền tối dạ quang */}
                <ProjectHero />
                <DealFlowSection />

                {/* 2. Phần lưới Testimonials + Project Card nền sáng #fafafa */}
                <SuccessStories />

            </div>
            <Footer />
        </main>
    );
}