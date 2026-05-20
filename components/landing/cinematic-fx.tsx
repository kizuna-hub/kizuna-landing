"use client";

import { motion } from "framer-motion";

interface Particle {
    id: number;
    left: string;
    duration: number;
    delay: number;
    driftA: string;
    driftB: string;
}

const particleValue = (index: number, salt: number) => {
    const value = Math.sin((index + 1) * (salt + 3.7)) * 10000;

    return value - Math.floor(value);
};

const particles: readonly Particle[] = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    left: `${particleValue(index, 1) * 100}%`,
    duration: particleValue(index, 2) * 10 + 10,
    delay: particleValue(index, 3) * 5,
    driftA: `${(particleValue(index, 4) - 0.5) * 100}px`,
    driftB: `${(particleValue(index, 5) - 0.5) * 100}px`,
}));

export function CinematicFX() {
    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}
            ></div>

            <div className="absolute inset-0 overflow-hidden">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute bottom-[-10vh] w-1 h-1 bg-emerald-400/30 rounded-full blur-[1px]"
                        style={{ left: p.left }}
                        animate={{
                            y: ["0vh", "-110vh"],
                            x: ["0px", p.driftA, p.driftB],
                        }}
                        transition={{
                            y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
                            x: { duration: p.duration * 0.7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
