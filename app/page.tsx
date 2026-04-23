import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ManifestoSection } from "@/components/landing/manifesto-section";
import { CinematicFX } from "@/components/landing/cinematic-fx";
import { FeaturesSection } from "@/components/landing/features-section";
import { ExpandingCanvasSection } from "@/components/landing/expanding-canvas-section";
import { CanvasStorySection } from "@/components/landing/canvas-story-section";
import { SecondaryPeek } from "@/components/landing/secondary-peek";
import { DashboardPeek } from "@/components/landing/dashboard-peek";
import { ExpertInsightSection } from "@/components/landing/expert-insight-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#102c1e] text-white overflow-hidden relative">
      <CinematicFX />
      <Navbar />
      <HeroSection />
      <ManifestoSection />
      {/* <CanvasStorySection /> */}
      <FeaturesSection />
      <SecondaryPeek />
      <ExpertInsightSection />
      <CtaSection />
    </main>
  );
}
