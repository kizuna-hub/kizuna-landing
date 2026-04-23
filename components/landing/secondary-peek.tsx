"use client";

export function SecondaryPeek() {
    // Tớ dùng một ảnh UI Dashboard phẳng để nó bọc khít và chuyên nghiệp hơn
    const imageUrl = "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=2000";

    return (
        /* 1. CONTAINER NGOÀI: 
           - PHẢI có max-w-7xl và px-6 để giống hệt container chứa text phía trên.
        */
        <div className="mx-auto w-full max-w-7xl px-6 mt-20 relative z-20">

            {/* 2. CARD CHÍNH: 
                - w-full: Lúc này nó sẽ tự rộng bằng cái khung max-w-7xl trừ đi padding.
                - h-[800px]: Cao theo ý bro.
            */}
            <div
                className="relative w-full h-[800px] rounded-[32px] overflow-hidden shadow-2xl border border-white/10"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#0a1c13'
                }}
            >
                {/* LỚP PHỦ CINEMATIC */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102c1e] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* VIỀN TRONG SUỐT (INNER BORDER) */}
                <div className="absolute inset-0 rounded-[32px] border border-white/5 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
            </div>
        </div>
    );
}