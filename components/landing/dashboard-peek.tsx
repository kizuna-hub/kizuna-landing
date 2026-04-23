"use client";

import { motion, MotionValue } from "framer-motion";

interface DashboardPeekProps {
    y: MotionValue<number | string>;
}

export function DashboardPeek({ y }: DashboardPeekProps) {
    // Sử dụng ảnh UI Dashboard phẳng, chất lượng cao
    const imageUrl = "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=2000";

    return (
        <motion.div
            style={{ y }}
            // Giữ nguyên max-w-6xl để đồng bộ với layout chung
            className="relative mx-auto w-11/12 max-w-6xl h-[800px] z-20 overflow-hidden"
        >
            {/* KHUNG CHỨA CHÍNH:
                - rounded-t-[32px]: Chỉ bo góc trên để tạo cảm giác "trồi lên".
                - shadow-[0_-40px_100px_rgba(0,0,0,0.8)]: Đổ bóng ngược lên trên cực mạnh.
            */}
            <div
                className="relative w-full h-full rounded-t-[32px] border-t border-x border-white/10 overflow-hidden shadow-2xl"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#0a1c13'
                }}
            >
                {/* LỚP PHỦ GRADIENT (VIGNETTE):
                    Làm tối nhẹ 4 góc và mờ dần ở đáy để ảnh cực kỳ sâu và ko bị "phô".
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102c1e] via-transparent to-transparent opacity-60" />

                {/* INNER GLOW:
                    Tạo một đường viền sáng siêu mảnh ở mép trên để trông như kính cường lực.
                */}
                <div className="absolute inset-0 rounded-t-[32px] border-t border-white/20 pointer-events-none" />

                {/* Lớp bóng đổ nội khối (Inner Shadow) */}
                <div className="absolute inset-0 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none" />
            </div>
        </motion.div>
    );
}