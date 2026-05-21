import React from "react";
import { CTAMockups } from "./cta-mockups";
import { CTAContent } from "./cta-content";

export const EcosystemCTA = () => {
    return (
        // Đổi thẳng bg sang Trắng
        <section className="relative w-full overflow-hidden bg-white pt-12 pb-32">
            <div className="mx-auto w-full">
                <CTAMockups />
                <CTAContent />
            </div>
        </section>
    );
};