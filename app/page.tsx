import { CinematicFX } from "@/components/landing/cinematic-fx";
import { HeroSection } from "@/components/landing/hero-section";
import { EcosystemValueLoop } from "@/components/landing/value-loop";
import { CanvasConnectedGraph } from "@/components/sections/canvas-connected-graph/index";
import { NetworkShowcase } from "@/components/sections/network-showcase";
import { FeaturesSection } from "@/components/landing/features-section";
import { ExpertInsightSection } from "@/components/landing/expert-insight-section";
import { FAQSection } from "@/components/sections/faq";
import { EcosystemCTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <CinematicFX />

      {/* Hero Section (Dark Band) */}
      <HeroSection />

      {/* Story & Ecosystem Value (Canvas-50 Background) */}
      <EcosystemValueLoop />

      {/* Canvas Feature Showcase */}
      <CanvasConnectedGraph />

      {/* Bento Box Network Details */}
      <NetworkShowcase />

      {/* Feature Bento Boxes */}
      <FeaturesSection />

      {/* Editorial/Insights Section */}
      <ExpertInsightSection />

      {/* FAQ Information Section */}
      <FAQSection />

      {/* CTA Section (Dark Band) */}
      <EcosystemCTA />

      {/* Footer (Dark Band / Deep Forest) */}
      <Footer />
    </main>
  );
}

