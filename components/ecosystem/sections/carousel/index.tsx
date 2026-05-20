"use client";

import React, { useRef } from "react";
import { CAROUSEL_DATA } from "./carousel-data";
import { CarouselCard } from "./carousel-card";
import { CarouselControls } from "./carousel-controls";

export const EcosystemCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -340, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
    };

    return (
        <section className="w-full overflow-hidden py-24">
            {/* Header được gióng hàng thẳng tắp với Navbar bằng max-w-7xl */}
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-end md:gap-0 lg:px-8 mb-12">
                <h2 className="font-serif text-3xl font-bold leading-tight text-white lg:text-4xl max-w-2xl">
                    Mọi công cụ bạn cần để vận hành <br className="hidden md:block" />
                    <span className="text-emerald-400">
                        (mạng lưới khởi nghiệp).
                    </span>
                </h2>

                <CarouselControls onScrollLeft={scrollLeft} onScrollRight={scrollRight} />
            </div>

            {/* Carousel Track: Dùng padding-left tính toán bằng calc() để gióng lề thẻ đầu tiên khớp với header, nhưng vẫn tràn viền phải */}
            <div
                ref={carouselRef}
                className="flex w-full snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto pb-8 
                pl-6 lg:pl-[calc(50vw-512px)] xl:pl-[calc(50vw-640px)] 
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {CAROUSEL_DATA.map((item) => (
                    <CarouselCard key={item.id} item={item} />
                ))}

                {/* Khoảng trống cuối để thẻ cuối cùng không bị dính vách phải */}
                <div className="w-[24px] shrink-0 lg:w-[64px]" />
            </div>
        </section>
    );
};