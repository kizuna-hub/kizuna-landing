# SKILL: Frontend Performance & SEO Optimization

### [Objective]
To ensure Kizuna Hub delivers a blazingly fast, visually stable, and highly discoverable experience. The agent must strictly adhere to Next.js 14+ performance best practices, aiming for a 100/100 Lighthouse score, flawless Core Web Vitals (LCP, FID, CLS), and rich social sharing metadata.

### [Strict Rules]
1. **Zero `<img>` Tags:** The native HTML `<img>` tag is strictly forbidden. You MUST use Next.js `<Image>` from `next/image` for automatic WebP/AVIF conversion, lazy loading, and sizing.
2. **LCP Priority:** The Largest Contentful Paint (LCP) element (usually the Hero image or the largest image above the fold) MUST have the `priority={true}` prop to bypass lazy loading and load instantly.
3. **Cumulative Layout Shift (CLS) Prevention:** All images, skeletons, and media containers must have explicitly defined `width` and `height`, or use Tailwind's `aspect-ratio` utilities (e.g., `aspect-[4/3]`) to reserve space before the content loads.
4. **Dynamic Heavy Components:** Complex interactive components (like Framer Motion canvases, charts, or heavy 3D/SVG graphs) that are below the fold MUST be dynamically imported using `next/dynamic` to reduce the initial JavaScript bundle size.
5. **Metadata & Open Graph Enforcement:** Every page route (`page.tsx`) MUST export a `Metadata` object or `generateMetadata` function. Open Graph (`og:image`, `og:title`) and Twitter card tags are mandatory for social sharing.

### [Execution SOP (Step-by-Step)]
When building a page or a heavy UI section:
1. **Audit Assets:** Identify the LCP image. Apply `priority={true}` and appropriate `sizes` (e.g., `sizes="(max-width: 768px) 100vw, 50vw"`).
2. **Defend the Layout:** Ensure no text or UI elements "jump" during the loading phase. Use strict height definitions or skeletons.
3. **Lazy Load Non-Criticals:** Identify below-the-fold heavy components and wrap them in `next/dynamic` with an appropriate loading skeleton.
4. **Inject SEO Context:** Define the page's `title`, `description`, and `openGraph` details reflecting the specific content (e.g., a specific Startup Profile or Investor Deal Room).
5. **Semantic HTML:** Use proper heading hierarchy (`h1`, `h2`, `h3`) and semantic tags (`article`, `section`, `nav`) for screen readers and search engine crawlers.

### [Code Snippet / Master Example]
```tsx
import Image from "next/image";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// 1. Dynamic Import for heavy client components below the fold
const HeavyGraphCanvas = dynamic(() => import("@/components/sections/canvas-connected-graph").then(mod => mod.CanvasConnectedGraph), {
  loading: () => <div className="h-[60vh] w-full animate-pulse rounded-[2.5rem] bg-white/5" />,
  ssr: false, // Disable Server-Side Rendering if it relies heavily on browser APIs
});

// 2. Strict Metadata & Open Graph definition
export const metadata: Metadata = {
  title: "Kizuna Hub | Mạng lưới Khởi nghiệp & Sàn giao dịch Nhân tài",
  description: "Minh bạch hóa năng lực thực thi và tối ưu hóa quyết định rót vốn bằng công nghệ Web3 và AI.",
  openGraph: {
    title: "Kizuna Hub - Kết nối Startup & Quỹ đầu tư",
    description: "Nền tảng SaaS kết nối Sinh viên IT thực chiến, Doanh nghiệp SME và Quỹ đầu tư (VC).",
    images: ["/og-image-main.jpg"],
  },
};

export default function LandingPage() {
  return (
    <main className="flex flex-col">
      <section className="relative h-screen w-full">
        {/* 3. LCP Image Optimization with priority and sizes */}
        <Image
          src="/hero-background.webp"
          alt="Kizuna Hub ecosystem visualization"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <h1 className="relative z-10 text-5xl font-serif text-white">Xây dựng di sản của bạn.</h1>
      </section>

      {/* 4. Lazy loaded heavy component */}
      <HeavyGraphCanvas />
    </main>
  );
}