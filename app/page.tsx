import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ManifestoSection } from "@/components/landing/manifesto-section";
import { CinematicFX } from "@/components/landing/cinematic-fx";
import { FeaturesSection } from "@/components/landing/features-section";
import { WorkspaceShowcase } from "@/components/sections/workspace-showcase";
import { NetworkShowcase } from "@/components/sections/network-showcase";
import { CanvasConnectedGraph } from "@/components/sections/canvas-connected-graph/index";
import { SecondaryPeek } from "@/components/landing/secondary-peek";
import { ExpertInsightSection } from "@/components/landing/expert-insight-section";
import { FeaturesPage } from "./features/page";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#102c1e] text-white overflow-hidden relative">
      <CinematicFX />
      <Navbar />
      <HeroSection />
      <ManifestoSection />
      <FeaturesSection />
      <WorkspaceShowcase />
      <NetworkShowcase />
      <CanvasConnectedGraph />
      {/* <SecondaryPeek /> */}
      <ExpertInsightSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
