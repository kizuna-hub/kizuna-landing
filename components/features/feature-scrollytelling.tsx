"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CanvasIP } from "./canvas-ip";
import { CanvasNavigator } from "./canvas-navigator";
import { CanvasMatching } from "./canvas-matching";

const features = [
  { title: "IP Protection Ledger", desc: "Mọi ý tưởng, tài liệu của bạn được mã hóa và lưu trữ bất biến. Kizuna bảo vệ chất xám của bạn bằng công nghệ Web3 ngay từ ngày đầu." },
  { title: "AI Navigator Policy", desc: "Không còn lạc lối trong các thủ tục pháp lý. AI của chúng tôi sẽ tự động vẽ ra lộ trình ngắn nhất để startup của bạn tuân thủ mọi chính sách." },
  { title: "AI Matching Synergy", desc: "Tìm kiếm Co-founder hoặc Nhà đầu tư hoàn hảo. Hệ thống phân tích sâu dữ liệu để kết nối những mảnh ghép có cùng tầm nhìn và năng lực." },
];

const canvases = [CanvasIP, CanvasNavigator, CanvasMatching];

function FeatureText({ feature, index, activeIndex, setActiveIndex }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) setActiveIndex(index);
  }, [isInView, index, setActiveIndex]);

  const isActive = index === activeIndex;

  return (
    <motion.article
      ref={ref}
      className="relative flex min-h-[70vh] flex-col justify-center border-l-2 border-white/10 pl-8"
      animate={{
        opacity: isActive ? 1 : 0.2,
        filter: isActive ? "blur(0px)" : "blur(4px)",
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {isActive && (
        <motion.div
          layoutId="active-border"
          className="absolute bottom-0 left-[-2px] top-0 w-[2px] bg-emerald-400"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <span className="mb-3 block font-mono text-sm font-bold text-emerald-400/80">
        0{index + 1}
      </span>
      <h2 className="font-serif text-4xl font-medium text-white lg:text-5xl">
        {feature.title}
      </h2>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-400">
        {feature.desc}
      </p>
    </motion.article>
  );
}

export function FeatureScrollytelling() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveCanvas = canvases[activeIndex];

  return (
    <section className="relative w-full bg-[#0a1c13]">

      {/* 🚀 HEADER MỚI NẰM CHÍNH GIỮA, HOÀNH TRÁNG HƠN */}
      <div className="mx-auto w-full max-w-4xl px-6 pt-24 text-center lg:pt-32">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Công nghệ Lõi Web3 & AI
        </div>
        <h2 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Bảo vệ ý tưởng.<br />
          <span className="text-zinc-500">Thúc đẩy tầm nhìn.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Không chỉ là một không gian làm việc tĩnh. Kizuna Hub là một hệ sinh thái sống động, tự động mã hóa chất xám và định hướng startup của bạn đi đến thành công.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[40%_60%] lg:gap-16">

          <div className="flex flex-col pb-[20vh]">
            {features.map((feature, index) => (
              <FeatureText key={index} feature={feature} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-0 flex h-screen w-full items-center justify-center">
              {/* VÙNG BACKGROUND TRẮNG ĐỂ CHỨA CÁC DEMO */}
              <div className="relative h-[75vh] w-full overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{ backgroundImage: "linear-gradient(#0a1c13 1px, transparent 1px), linear-gradient(90deg, #0a1c13 1px, transparent 1px)", backgroundSize: "32px 32px" }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5" />

                <AnimatePresence mode="wait">
                  <ActiveCanvas key={activeIndex} />
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}