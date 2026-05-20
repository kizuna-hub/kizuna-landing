import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselControlsProps {
    onScrollLeft: () => void;
    onScrollRight: () => void;
}

export const CarouselControls = ({ onScrollLeft, onScrollRight }: CarouselControlsProps) => {
    return (
        <div className="flex shrink-0 items-center gap-2">
            <button
                onClick={onScrollLeft}
                aria-label="Scroll Left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
                <ArrowLeft className="h-4 w-4" />
            </button>
            <button
                onClick={onScrollRight}
                aria-label="Scroll Right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
                <ArrowRight className="h-4 w-4" />
            </button>
        </div>
    );
};