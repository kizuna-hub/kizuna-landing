"use client";

import React, { useState, useRef, useCallback } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    animate,
    Variants,
} from "framer-motion";

// ─────────────────────────────────────────────
// DESIGN TOKENS  (mirror your globals.css vars)
// ─────────────────────────────────────────────
// bg-background   → hsl(150 30% 8%)   Deep Forest Green
// bg-card         → hsl(150 25% 12%)
// border-border   → hsl(150 20% 22%)
// text-foreground → hsl(150 10% 92%)
// text-muted      → hsl(150 10% 55%)
// accent          → hsl(142 71% 45%)

// ─────────────────────────────────────────────
// REUSABLE CARD PRIMITIVES
// ─────────────────────────────────────────────

interface CardShellProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

function CardShell({ children, className = "", style }: CardShellProps) {
    return (
        <div
            className={`rounded-2xl border border-[hsl(150_20%_22%)] bg-[hsl(150_25%_12%/0.85)] backdrop-blur-md shadow-[0_0_0_1px_hsl(150_20%_22%),0_8px_32px_hsl(150_30%_4%/0.6)] ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}

function NoteCard({ title, lines }: { title: string; lines: string[] }) {
    return (
        <CardShell className="p-4 w-52">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-[hsl(142_71%_45%/0.7)]" />
                <span className="text-[hsl(150_10%_92%)] text-xs font-semibold tracking-wide uppercase">
                    {title}
                </span>
            </div>
            <div className="space-y-1.5">
                {lines.map((l, i) => (
                    <div
                        key={i}
                        className="h-1.5 rounded-full bg-[hsl(150_20%_30%)]"
                        style={{ width: `${60 + i * 12}%`, opacity: 1 - i * 0.15 }}
                    />
                ))}
            </div>
        </CardShell>
    );
}

function ImageCard({ label }: { label: string }) {
    return (
        <CardShell className="p-3 w-48">
            <div className="w-full h-24 rounded-xl bg-gradient-to-br from-[hsl(142_40%_20%)] to-[hsl(150_30%_10%)] mb-2 flex items-center justify-center border border-[hsl(142_30%_25%/0.5)]">
                {/* Decorative mini landscape */}
                <svg viewBox="0 0 80 50" className="w-20 h-14 opacity-60">
                    <defs>
                        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(142,40%,30%)" />
                            <stop offset="100%" stopColor="hsl(150,30%,15%)" />
                        </linearGradient>
                    </defs>
                    <rect width="80" height="50" fill="url(#sky)" />
                    <ellipse cx="40" cy="55" rx="50" ry="20" fill="hsl(142,50%,18%)" />
                    <circle cx="60" cy="14" r="5" fill="hsl(60,80%,80%)" opacity="0.8" />
                </svg>
            </div>
            <p className="text-[hsl(150_10%_65%)] text-[10px] text-center tracking-widest uppercase">
                {label}
            </p>
        </CardShell>
    );
}

function FolderCard({ name, count }: { name: string; count: number }) {
    return (
        <CardShell className="p-4 w-44">
            <div className="flex items-start justify-between mb-3">
                <div className="w-8 h-6 rounded-t-md rounded-br-md bg-[hsl(142_50%_30%/0.6)] border border-[hsl(142_40%_35%/0.5)]" />
                <span className="text-[hsl(142_71%_60%)] text-lg font-bold leading-none">
                    {count}
                </span>
            </div>
            <div className="w-full h-1 rounded-full bg-[hsl(150_20%_25%)] mb-2" />
            <p className="text-[hsl(150_10%_70%)] text-xs font-medium">{name}</p>
        </CardShell>
    );
}

function CodeCard() {
    return (
        <CardShell className="p-4 w-56">
            <div className="flex gap-1.5 mb-3">
                {["hsl(0,70%,60%)", "hsl(38,90%,60%)", "hsl(142,60%,50%)"].map(
                    (c, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ background: c }}
                        />
                    )
                )}
            </div>
            <div className="space-y-1 font-mono text-[9px]">
                <p>
                    <span className="text-[hsl(200,80%,65%)]">const</span>{" "}
                    <span className="text-[hsl(40,90%,70%)]">story</span>{" "}
                    <span className="text-[hsl(150_10%_70%)]">= {"{"}</span>
                </p>
                <p className="pl-3 text-[hsl(150_10%_55%)]">
                    title:{" "}
                    <span className="text-[hsl(120,50%,65%)]">&quot;Canvas&quot;</span>,
                </p>
                <p className="pl-3 text-[hsl(150_10%_55%)]">
                    mood:{" "}
                    <span className="text-[hsl(120,50%,65%)]">&quot;cinematic&quot;</span>
                    ,
                </p>
                <p className="text-[hsl(150_10%_70%)]">{"}"}</p>
            </div>
        </CardShell>
    );
}

function TagCard() {
    const tags = ["#worldbuilding", "#narrative", "#ai-assist", "#kizuna"];
    return (
        <CardShell className="p-4 w-52">
            <p className="text-[hsl(150_10%_55%)] text-[9px] uppercase tracking-widest mb-2">
                Tags
            </p>
            <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                    <span
                        key={t}
                        className="text-[9px] px-2 py-0.5 rounded-full border border-[hsl(142_40%_30%)] text-[hsl(142_71%_60%)] bg-[hsl(142_30%_15%/0.5)]"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </CardShell>
    );
}

// ─────────────────────────────────────────────
// SVG ANIMATED PATHS  (normalised to viewBox 0 0 1000 600)
// ─────────────────────────────────────────────

interface AnimatedPathProps {
    d: string;
    animate: boolean;
    delay?: number;
    strokeColor?: string;
}

function AnimatedPath({
    d,
    animate: shouldAnimate,
    delay = 0,
    strokeColor = "hsl(142,71%,45%)",
}: AnimatedPathProps) {
    return (
        <motion.path
            d={d}
            fill="none"
            stroke={strokeColor}
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
                shouldAnimate
                    ? { pathLength: 1, opacity: 0.55 }
                    : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
            style={{ filter: "drop-shadow(0 0 4px hsl(142,71%,45%))" }}
        />
    );
}

// ─────────────────────────────────────────────
// SCATTERED CARD POSITIONS  (absolute, percent-based)
// ─────────────────────────────────────────────

interface ScatteredCard {
    id: string;
    component: React.ReactNode;
    step0Style: React.CSSProperties; // scattered
    step1Style: React.CSSProperties; // gathered
    rotation: number;
}

const CARDS: ScatteredCard[] = [
    {
        id: "note",
        component: (
            <NoteCard title="Chapter Draft" lines={["", "", "", ""]} />
        ),
        step0Style: { top: "8%", left: "3%", rotate: "-6deg" } as React.CSSProperties,
        step1Style: { top: "5%", left: "4%" } as React.CSSProperties,
        rotation: -6,
    },
    {
        id: "image",
        component: <ImageCard label="Reference Art" />,
        step0Style: { top: "5%", right: "5%" } as React.CSSProperties,
        step1Style: { top: "5%", left: "calc(4% + 220px)" } as React.CSSProperties,
        rotation: 4,
    },
    {
        id: "folder",
        component: <FolderCard name="World Assets" count={24} />,
        step0Style: { bottom: "30%", left: "2%" } as React.CSSProperties,
        step1Style: { top: "calc(5% + 130px)", left: "4%" } as React.CSSProperties,
        rotation: 2,
    },
    {
        id: "code",
        component: <CodeCard />,
        step0Style: { bottom: "28%", right: "3%" } as React.CSSProperties,
        step1Style: {
            top: "5%",
            left: "calc(4% + 220px + 200px)",
        } as React.CSSProperties,
        rotation: -3,
    },
    {
        id: "tag",
        component: <TagCard />,
        step0Style: { bottom: "8%", left: "20%", rotate: "5deg" } as React.CSSProperties,
        step1Style: {
            top: "calc(5% + 130px)",
            left: "calc(4% + 220px)",
        } as React.CSSProperties,
        rotation: 5,
    },
];

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export function CanvasStorySection() {
    const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
    const canvasRef = useRef<HTMLDivElement>(null);

    // Camera pan Y value
    const cameraY = useMotionValue(0);

    const advanceTo = useCallback(
        (nextStep: 0 | 1 | 2 | 3) => {
            if (nextStep === 3) {
                setStep(3);
                animate(cameraY, -340, { duration: 0.9, ease: [0.76, 0, 0.24, 1] });
            } else if (nextStep < 3 && step === 3) {
                setStep(nextStep as 0 | 1 | 2);
                animate(cameraY, 0, { duration: 0.9, ease: [0.76, 0, 0.24, 1] });
            } else {
                setStep(nextStep);
            }
        },
        [cameraY, step]
    );

    const handleExperienceClick = () => {
        // Sequential step triggers
        advanceTo(1);
        setTimeout(() => advanceTo(2), 900);
        setTimeout(() => advanceTo(3), 2000);
    };

    const handleReset = () => {
        advanceTo(0 as 0);
        setTimeout(() => setStep(0), 300);
    };

    // Gathered cluster: centred horizontally
    const clusterLeft = "calc(50% - 330px)";

    return (
        <section
            className="relative min-h-[150vh] bg-[hsl(150,30%,8%)] overflow-hidden"
            style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
        >
            {/* Ambient noise texture */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: "128px 128px",
                }}
            />

            {/* Grid lines */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(hsl(142,20%,15%/0.15) 1px,transparent 1px),linear-gradient(90deg,hsl(142,20%,15%/0.15) 1px,transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Sticky viewport */}
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Camera pan container */}
                <motion.div
                    ref={canvasRef}
                    className="relative w-full"
                    style={{ y: cameraY, height: "160vh" }}
                >
                    {/* ── STEP 0: Hero Title ── */}
                    <AnimatePresence>
                        {step === 0 && (
                            <motion.div
                                key="hero"
                                className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30, scale: 0.96 }}
                                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                            >
                                {/* Kizuna wordmark */}
                                <p className="text-[hsl(142,71%,45%)] text-xs font-semibold tracking-[0.35em] uppercase mb-6 flex items-center gap-2">
                                    <span className="w-6 h-px bg-[hsl(142,71%,45%)]" />
                                    Kizuna Hub
                                    <span className="w-6 h-px bg-[hsl(142,71%,45%)]" />
                                </p>

                                <h1
                                    className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-[hsl(150,10%,92%)] max-w-3xl mb-4"
                                    style={{
                                        fontFamily: "'Playfair Display', 'Georgia', serif",
                                        textShadow: "0 0 60px hsl(142,71%,20%/0.5)",
                                    }}
                                >
                                    A Studio For{" "}
                                    <span className="text-[hsl(142,71%,55%)]">Creation</span>,<br />
                                    Not Just A Chat Box.
                                </h1>

                                <p className="text-[hsl(150,10%,55%)] text-base md:text-lg max-w-lg mb-10 leading-relaxed">
                                    Weave notes, images, code, and ideas into a living canvas.
                                    Let the AI see the whole picture.
                                </p>

                                <motion.button
                                    onClick={handleExperienceClick}
                                    className="relative group px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-[hsl(150,10%,92%)] border border-[hsl(142,40%,30%)] overflow-hidden"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-[hsl(142,50%,20%/0.6)] to-[hsl(142,50%,15%/0.4)] transition-opacity group-hover:opacity-80" />
                                    <span className="relative flex items-center gap-2">
                                        Experience The Canvas
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.6 }}
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                    {/* glow ring */}
                                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ boxShadow: "0 0 24px hsl(142,71%,35%/0.4)" }} />
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── SCATTERED / GATHERED CARDS ── */}
                    {CARDS.map((card) => {
                        const gathered = step >= 1;
                        const targetStyle = (gathered
                            ? { ...card.step1Style, rotate: "0deg" }
                            : { ...card.step0Style, rotate: `${card.rotation}deg` }) as React.CSSProperties;

                        const cardStyle = (gathered
                            ? {
                                position: "absolute" as const,
                                ...card.step1Style,
                                marginLeft: `calc(${clusterLeft} - 4%)`,
                            }
                            : card.step0Style) as React.CSSProperties;

                        return (
                            <motion.div
                                key={card.id}
                                layout
                                className="absolute z-20"
                                animate={targetStyle as any}        // <-- Ép kiểu ở đây
                                initial={card.step0Style as any}    // <-- Ép kiểu ở đây
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                style={cardStyle as any}            // <-- Và ở đây
                            >
                                {card.component}
                            </motion.div>
                        );
                    })}

                    {/* ── STEP 2+: AI Prompt Box ── */}
                    <AnimatePresence>
                        {step >= 2 && (
                            <motion.div
                                key="prompt"
                                className="absolute z-20"
                                style={{ top: "45%", left: "50%", x: "-50%" }}
                                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <CardShell className="w-[480px] p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-[hsl(142,71%,45%)] animate-pulse" />
                                        <span className="text-[hsl(150_10%_55%)] text-[10px] uppercase tracking-widest">
                                            Kizuna AI · Reading canvas context
                                        </span>
                                    </div>
                                    <div className="rounded-xl border border-[hsl(142,30%,25%)] bg-[hsl(150,30%,6%/0.7)] p-4 text-sm text-[hsl(150,10%,75%)] leading-relaxed font-mono">
                                        <span className="text-[hsl(142,71%,55%)]">$</span>{" "}
                                        Generate a cinematic opening scene using{" "}
                                        <span className="text-[hsl(200,70%,65%)]">all attached context</span>
                                        …
                                        <motion.span
                                            className="inline-block w-0.5 h-4 bg-[hsl(142,71%,45%)] ml-1 align-middle"
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ repeat: Infinity, duration: 1 }}
                                        />
                                    </div>
                                </CardShell>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── STEP 3: Generated Output Card ── */}
                    <AnimatePresence>
                        {step === 3 && (
                            <motion.div
                                key="output"
                                className="absolute z-20"
                                style={{ top: "75%", left: "50%", x: "-50%" }}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.65, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <CardShell className="w-[560px] p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-full bg-[hsl(142,50%,20%)] border border-[hsl(142,40%,30%)] flex items-center justify-center">
                                                <svg width="12" height="12" viewBox="0 0 12 12">
                                                    <path
                                                        d="M6 1L7.5 4.5H11L8.5 7 9.5 11 6 9 2.5 11 3.5 7 1 4.5H4.5Z"
                                                        fill="hsl(142,71%,55%)"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-[hsl(142,71%,55%)] text-xs font-semibold tracking-wide">
                                                Generated · Chapter Opening
                                            </span>
                                        </div>
                                        <span className="text-[hsl(150_10%_40%)] text-[10px]">
                                            0.8s
                                        </span>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        {[
                                            "The forest breathed in slow, green silence—a cathedral of ancient cedar and fog.",
                                            "Mira pressed her palm against the bark, feeling the hum of the world beneath.",
                                            "Somewhere above, a bird called once, and then the world tilted.",
                                        ].map((line, i) => (
                                            <motion.p
                                                key={i}
                                                className="text-[hsl(150,10%,80%)] text-sm leading-relaxed"
                                                style={{
                                                    fontFamily: "'Playfair Display', Georgia, serif",
                                                }}
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + i * 0.18 }}
                                            >
                                                {line}
                                            </motion.p>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 pt-3 border-t border-[hsl(150_20%_18%)]">
                                        {["Export", "Refine", "Continue →"].map((label, i) => (
                                            <button
                                                key={label}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${i === 2
                                                    ? "bg-[hsl(142,50%,22%)] text-[hsl(142,71%,65%)] border border-[hsl(142,40%,30%)] hover:bg-[hsl(142,50%,27%)]"
                                                    : "text-[hsl(150_10%_50%)] hover:text-[hsl(150_10%_75%)] border border-transparent hover:border-[hsl(150_20%_25%)]"
                                                    }`}
                                            >
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                </CardShell>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── SVG WIRE OVERLAY ── */}
                    {/*
            viewBox 0 0 1000 1600 covers the full canvas height.
            All coordinates are manually tuned for the layout above.

            Cluster bottom edge  ≈  y=310   (top 45vh × 1.6 ≈ cards ~280px)
            Prompt box top       ≈  y=420   (top 45% of 1000h)
            Prompt box bottom    ≈  y=510
            Output card top      ≈  y=750   (top 75% of 1000h)
          */}
                    <svg
                        className="pointer-events-none absolute inset-0 w-full"
                        style={{ height: "160vh", zIndex: 15 }}
                        viewBox="0 0 1000 1600"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2.5" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Bezier wires: cards → prompt box (step 2+) */}
                        {/* Note card → prompt */}
                        <AnimatedPath
                            d="M 200 310 C 200 380, 480 370, 490 420"
                            animate={step >= 2}
                            delay={0}
                        />
                        {/* Image card → prompt */}
                        <AnimatedPath
                            d="M 340 300 C 340 370, 490 370, 495 420"
                            animate={step >= 2}
                            delay={0.12}
                        />
                        {/* Folder card → prompt */}
                        <AnimatedPath
                            d="M 210 440 C 210 450, 420 440, 490 420"
                            animate={step >= 2}
                            delay={0.06}
                        />
                        {/* Code card → prompt */}
                        <AnimatedPath
                            d="M 590 300 C 590 370, 510 370, 506 420"
                            animate={step >= 2}
                            delay={0.18}
                        />
                        {/* Tag card → prompt */}
                        <AnimatedPath
                            d="M 520 440 C 520 450, 510 440, 507 420"
                            animate={step >= 2}
                            delay={0.08}
                        />

                        {/* Vertical wire: prompt → output (step 3) */}
                        <AnimatedPath
                            d="M 500 510 L 500 755"
                            animate={step === 3}
                            delay={0.4}
                            strokeColor="hsl(142,71%,55%)"
                        />

                        {/* Glowing dot at output connection */}
                        {step === 3 && (
                            <motion.circle
                                cx={500}
                                cy={758}
                                r={4}
                                fill="hsl(142,71%,55%)"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.9 }}
                                transition={{ delay: 1.2, duration: 0.3 }}
                                filter="url(#glow)"
                            />
                        )}
                    </svg>
                </motion.div>
            </div>

            {/* ── STEP INDICATOR ── */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
                {([0, 1, 2, 3] as const).map((s) => (
                    <motion.button
                        key={s}
                        onClick={() =>
                            s === 0
                                ? handleReset()
                                : s === 3
                                    ? handleExperienceClick()
                                    : advanceTo(s)
                        }
                        className="relative flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Go to step ${s}`}
                    >
                        <motion.div
                            className="w-2 h-2 rounded-full"
                            animate={{
                                backgroundColor:
                                    step === s
                                        ? "hsl(142,71%,55%)"
                                        : "hsl(150,20%,30%)",
                                scale: step === s ? 1.4 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        {step === s && (
                            <motion.div
                                className="absolute inset-0 rounded-full border border-[hsl(142,71%,45%/0.4)]"
                                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                                transition={{ repeat: Infinity, duration: 1.8 }}
                            />
                        )}
                    </motion.button>
                ))}

                {/* Reset ghost button */}
                {step > 0 && (
                    <motion.button
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={handleReset}
                        className="ml-3 text-[hsl(150_10%_40%)] text-xs hover:text-[hsl(150_10%_65%)] transition-colors"
                    >
                        ↺ Reset
                    </motion.button>
                )}
            </div>

            {/* Step label badge */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    className="fixed top-6 right-6 z-50 px-3 py-1.5 rounded-full border border-[hsl(150_20%_22%)] bg-[hsl(150_30%_8%/0.8)] backdrop-blur text-[10px] font-mono text-[hsl(142,71%,50%)]"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                >
                    {["Scattered", "Gathering", "Wiring", "Revealed"][step]}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}