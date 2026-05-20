# SKILL: Frontend Animations & Interactions

### [Objective]
To ensure all animations within the Kizuna Hub landing page are cinematic, highly performant (60fps+), accessible, and strictly adhere to the project's visual identity. Animations must feel deliberate, smooth, and deeply technological, avoiding overly bouncy or cartoonish behaviors.

### [Strict Rules]
1. **Hardware Acceleration is Mandatory:** Any element being animated (especially `x`, `y`, `scale`, or `opacity`) MUST include the Tailwind class `will-change-transform` to force GPU rendering. 
2. **Accessibility First (a11y):** You MUST import and utilize `useReducedMotion()` from `framer-motion` for every animated component. If the user prefers reduced motion, fallback to simple fade-ins (`opacity`) and disable all translation/scaling/floating effects.
3. **Dual-Motion Layering Prohibition:** Never put a scroll-driven animation (`style={{ y: scrollY }}`) and a time-driven animation (`animate={{ y: [0, 10, 0] }}`) on the same `<motion.div>`. You must nest them: Outer div for scroll positioning, inner div for continuous/idle floating.
4. **Cinematic Easing:** Default to custom easing curves that feel premium. Use `ease: [0.16, 1, 0.3, 1]` for entrances, and `ease: "easeInOut"` for infinite idle floats. Do not use default spring physics unless explicitly requested.
5. **Scroll-Driven Dominance:** For complex layouts (like "Scatter to Converge"), prefer `useScroll` + `useTransform` over `whileInView` to tie the animation strictly to the user's scroll progress, providing a "scrubbable" experience.

### [Execution SOP (Step-by-Step)]
When tasked with creating an animated section:
1. **Analyze the Motion Profile:** Determine if it's an Entrance (`whileInView`), an Idle State (`animate={{ repeat: Infinity }}`), or Scroll-tied (`useScroll`).
2. **Setup the Skeleton:** Build the static UI components first. Ensure absolute positioning uses percentages (`%`) for fluid responsiveness.
3. **Implement Accessibility Guard:** Initialize `const shouldReduceMotion = useReducedMotion();` at the top of the component.
4. **Apply Motion Configs:** Inject Framer Motion props conditionally based on the `shouldReduceMotion` flag.
5. **Protect Interactions:** Ensure absolute/floating layers have `pointer-events-none` applied to the wrapper, re-enabling `pointer-events-auto` only on the clickable cards.

### [Code Snippet / Master Example]
```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Centralized cinematic config
const cinematicTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export const AnimatedCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    // Outer layer: Entrance Animation
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={cinematicTransition}
      className={cn("will-change-transform", className)}
    >
      // Inner layer: Continuous Floating
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};