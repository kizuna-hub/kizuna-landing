"use client";

import React from "react";
import { ParticleBackground } from "./particle-background";
import { CTAContent } from "./cta-content";

export const EcosystemCTA = () => {
    return (
        // Đổi bg sang chuẩn dev xịn #fafafa
        <section className="relative w-full h-[300px] md:h-[750px] flex items-center justify-center overflow-hidden bg-[#fafafa]">

            <ParticleBackground />
            <CTAContent />

        </section>
    );
};