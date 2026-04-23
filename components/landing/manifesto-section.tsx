export function ManifestoSection() {
    return (
        <div className="min-h-screen bg-[#102c1e] flex items-center justify-center py-24 relative z-30">
            {/* 1. Thu hẹp khung bằng max-w-[38rem] để ép text ngắt dòng đẹp.
                2. Font-serif (Cormorant Garamond), giảm gap xuống gap-6.
                3. Ép khoảng cách chữ (tracking-tight) và khoảng cách dòng (leading-[1.15]).
                4. Dùng text-zinc-200 để màu không bị "chói" trên nền tối, tạo cảm giác phim ảnh.
            */}
            <div className="max-w-[38rem] w-full px-6 flex flex-col gap-6 text-zinc-200 font-serif text-[2rem] md:text-[2.25rem] leading-[1.15] tracking-tight">
                <p>
                    We all get stuck.
                </p>
                <p>
                    The cap table structuring. The IP protection. The seed round pitch.
                </p>
                <p>
                    We sign up for generic tools that are supposed to help us, but they just leave us with more to plan and organize.
                </p>
                <p>
                    Our ideas get lost in the abyss, or the fear of getting our startup ideas stolen makes moving forward difficult.
                </p>
                <p>
                    Having the right place to validate, protect, and scale your startup is invaluable.
                </p>
            </div>
        </div>
    );
}