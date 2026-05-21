import React from "react";
import { PolaroidStack } from "./polaroid-stack";
import { ManifestoText } from "./manifesto-text";

export const TheManifestoSection = () => {
    return (
        <section className="relative w-full bg-[#102c1e] py-24 md:py-32 overflow-hidden">
            <div className="relative z-10 flex w-full flex-col items-center">
                {/* Khối Ảnh xếp chồng tương tác */}
                <PolaroidStack />

                {/* Khối Text Tuyên ngôn & Lịch sử */}
                <ManifestoText />
            </div>
        </section>
    );
};