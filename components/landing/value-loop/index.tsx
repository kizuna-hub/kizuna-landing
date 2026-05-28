"use client";

import { useState } from "react";
import { LOOP_DATA } from "./value-loop-data";
import { StepList } from "./step-list";
import { MockupDisplay } from "./mockup-display";

export function EcosystemValueLoop() {
    const [activeId, setActiveId] = useState(LOOP_DATA[0].id);
    const activeStep = LOOP_DATA.find((s) => s.id === activeId) || LOOP_DATA[0];

    return (
        <section className="relative w-full border-t border-white/5 bg-kizuna-primary text-foreground overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0"
                style={{ background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.04) 0%, #0a1c13 100%)" }}
            />

            {/* Chỉnh lại padding tổng thể để có nhiều không gian hơn */}
            <div className="relative mx-auto max-w-[1400px] px-6 py-32 lg:px-12 z-10">

                {/* HEADER BLOCK: Thêm Badge, bóp tiêu đề còn 2 dòng */}
                <div className="mx-auto mb-28 flex flex-col items-center text-center max-w-4xl">
                    <span className="mb-8 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-md">
                        Inside the Ecosystem
                    </span>

                    <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[56px] text-balance mb-6 max-w-3xl">
                        Tại sao hầu hết dự án Startup đều chết yểu
                    </h2>

                    <p className="text-lg leading-relaxed text-zinc-400 text-balance max-w-2xl">
                        Họ không tuân theo 3 bước cơ bản. Họ biết mình cần làm gì, nhưng lại quên mất vì thiếu một hệ thống bệ phóng như Kizuna.
                    </p>
                </div>

                {/* LAYOUT SPLIT: Ép cột trái cách xa mép và chiếm gần 50% */}
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-8 xl:gap-16">
                    {/* Cột trái (48%): Đẩy pl-12 lg:pl-24 để thụt vào trong */}
                    <div className="w-full lg:w-[48%] pl-4 lg:pl-16 xl:pl-24">
                        <StepList
                            steps={LOOP_DATA}
                            activeId={activeId}
                            setActiveId={setActiveId}
                        />
                    </div>

                    {/* Cột phải (52%): Chứa Card ngang */}
                    <div className="w-full lg:w-[52%] pr-4 lg:pr-8">
                        <MockupDisplay activeStep={activeStep} />
                    </div>
                </div>
            </div>
        </section>
    );
}