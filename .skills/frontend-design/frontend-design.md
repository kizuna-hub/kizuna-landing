### 🎨 CRITICAL: KIZUNA HUB DESIGN TOKENS & STYLING RULES

Before generating or modifying any UI component, you MUST analyze `app/globals.css`. This file is the SINGLE SOURCE OF TRUTH for our entire Design System, built with Tailwind CSS (v4 standard using `@theme inline` and HSL variables).

**You are STRICTLY PROHIBITED from using arbitrary values (e.g., `text-[#123456]`, `bg-[rgba(...)]`, `w-[31px]`). You must exclusively use the semantic utility classes mapped to our CSS variables.**

#### 1. Color System & Theming (Light/Dark Mode)
- **Base Semantic Colors:** Use standard mapped utilities like `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`. Do NOT hardcode colors; the system handles light/dark mode automatically via these variables.
- **Brand Colors (Warm Dark Amber & Forest Green):** Utilize our specific Kizuna tokens for branding:
  - `bg-kizuna-primary`, `text-kizuna-primary` (Forest Green theme)
  - `bg-kizuna-surface`, `bg-kizuna-canvas` (Background layers)
  - `text-accent`, `bg-accent` (For the Orange/Amber highlight accents).
- **Surfaces:** Use `bg-surface-glass` or `bg-surface-glass-strong` for translucent/glassmorphism effects, especially on floating elements like Navbars or Cards.

#### 2. Typography & Hierarchy
- **Fonts:** We use two primary fonts. 
  - Use `font-heading` (Playfair Display/Serif) exclusively for titles and major headings.
  - Use `font-body` (Inter/Sans-serif) for all body text, buttons, and paragraphs.
- **Text Sizes:** Do not use arbitrary text sizes. Stick to the predefined heading and body variables implicitly mapped (e.g., matching the scale of `--text-heading-lg`, `--text-body-md`). Use utility classes like `text-lg`, `text-sm`, etc., ensuring they align with our fluid typography.

#### 3. Shadows, Radii & Depth
- **Border Radius:** Use our predefined radius tokens via Tailwind classes (e.g., `rounded-md`, `rounded-xl`, `rounded-3xl` which map to `--radius-token-*`).
- **Shadows & Glows:** For depth, strictly use our custom shadow tokens:
  - `shadow-card` for standard content boxes.
  - `shadow-glass` for translucent overlay elements.
  - `shadow-glow` or `shadow-glow-strong` for interactive elements (e.g., Call to Action buttons) utilizing the emerald/amber glow effects.

#### 4. Layout & Overlays
- **Z-Index:** Never use arbitrary z-index (e.g., `z-[99]`). Use our semantic layers implicitly defined (e.g., header, dropdown, overlay, modal, toast) by matching Tailwind's standard `z-` classes to our scale, or use custom classes if mapped.
- **Scrollbar:** Apply the `no-scrollbar` utility class for any horizontally scrolling containers (like bento grids or carousels) to maintain a clean UI.

**CRITICAL REMINDER:** Your primary goal is UI consistency. If a required style (like a specific shadow or surface color) exists in `globals.css`, you MUST use it rather than inventing a new Tailwind utility combination.