# 🎨 Kizuna Hub Design System & UI Rules

## Overview

Kizuna Hub presents itself as a premium, growth-oriented digital startup ecosystem. The platform's visual language merges a highly readable, document-centric layout with a sophisticated dual-tone identity rooted in **Deep Forest Green** and **Off-White Canvas**. The design relies on a dual-typography approach: **Outfit** (Sans-Serif/Geometric) establishes an authoritative, tech-forward voice for headings, while **Inter** (Sans) drives crisp, functional UI elements.

Unlike platforms that rely heavily on flat illustrations, Kizuna Hub builds depth through **Hover-Intensive Bento Boxes** and **Glassmorphism**. The interface sits on a subtle yellow-ish white background (`--kz-canvas-50`), allowing crisp white cards to elevate off the surface. Primary actions are anchored by the signature deep green (`#0a1c13`), with bright **Emerald** (`#22C55E`) and **Amber/Orange** (`#F97316`) acting as precise, interactive highlights.

**Key Characteristics:**
- **Signature Forest Green** (`var(--kz-forest-900)`) primary CTAs — Kizuna's unmistakable brand anchor.
- **Tri-Typography System**: Outfit for modern geometric headings, Inter for UI text and data, Geist Mono for code/technical elements.
- **Off-White Canvas** (`var(--kz-canvas-50)`) background for reduced eye strain during long working sessions.
- **Bento-Box Depth**: Heavy reliance on nested separation boxes, `group-hover` synchronized transitions, and deep ambient shadows.
- **Glassmorphic Elements**: Surfaces with 72% to 88% opacity over clean white.
- Strict adherence to CSS variables — no arbitrary HEX codes are permitted in the codebase.

---

## Colors

> Source: `tailwind.config.ts` and global CSS configuration. Variables are mapped through HSL channels.

### Brand & Primary
- **Kizuna Primary** (`var(--kizuna-primary)` / `var(--kz-forest-900)`): Deep forest green (`#0a1c13`). Used for the dominant CTA and primary brand surfaces.
- **Primary Foreground** (`var(--primary-foreground)`): Canvas-50 text on primary buttons.
- **Emerald Accent** (`var(--accent)` / `var(--kz-emerald-500)`): Bright emerald highlight for glows, active states, and focus rings.
- **Orange Brand Accent** (`var(--brand-accent)` / `var(--kz-orange-500)`): Amber/Orange for secondary highlights and data visualization.

### Surface
- **Kizuna Canvas** (`var(--background)` / `var(--kz-canvas-50)`): The root background color. A warm, yellow-ish off-white.
- **Card Surface** (`var(--card)` / `var(--kz-white)`): Pure white for primary elevated surfaces and Bento boxes.
- **Surface Subtle** (`var(--surface-subtle)` / `var(--kz-canvas-100)`): Quieter section divisions and nested Bento backgrounds.
- **Surface Inverse** (`var(--surface-inverse)`): Dark mode/inverse cards using Forest-900.
- **Glass Surface** (`var(--surface-glass)`): Pure white at 72% opacity.
- **Border / Hairline** (`var(--border)` / `var(--kz-zinc-200)`): 1px borders and dividers.

### Text
- **Foreground / Text Main** (`var(--foreground)` / `var(--kz-zinc-900)`): Primary headlines and body text.
- **Text Muted** (`var(--muted-foreground)` / `var(--kz-zinc-600)`): Secondary text, disabled states, and placeholders.

### Semantic & Data
- **Success** (`var(--kz-emerald-500)`): Confirmation, positive trends.
- **Warning** (`var(--kz-orange-500)`): Alerts, pending states.
- **Destructive** (`var(--destructive)` / `hsl(0 72% 51%)`): Errors and destructive actions.
- **Charts** (`var(--chart-1)` through `var(--chart-5)`): Sequential palette starting from Emerald to Orange, Blue, Purple, and Rose.

---

## Typography

### Font Family
- **Secondary / Headings (`--font-serif`)**: Outfit, sans-serif. Features modern geometric lines with a tech-startup aesthetic. Reserved exclusively for Hero Titles, Major Headings, and Bento Card titles. *(Note: Configured under the `--font-serif` Tailwind token to maintain layout structure, despite being a sans-serif font).*
- **Primary / Body (`--font-sans`)**: Inter, ui-sans-serif, system-ui. The backbone of the UI. Used for all body text, paragraphs, buttons, and functional UI data to ensure optimal readability.
- **Code (`--font-mono`)**: Geist Mono, Consolas, monospace. Reserved for inline code snippets, technical IDs, transaction tokens, and data requiring rigid alignment.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `--text-heading-2xl` | 5.5rem | 600 | 0.95 | -1px | Hero displays, monumental numbers (Outfit) |
| `--text-heading-xl` | 4.0rem | 600 | 1.00 | -0.5px | Section openers (Outfit) |
| `--text-heading-lg` | 3.0rem | 600 | 1.05 | -0.5px | Page-level headlines (Outfit) |
| `--text-heading-md` | 2.25rem | 600 | 1.10 | 0 | Subsection headlines (Outfit) |
| `--text-heading-sm` | 1.5rem | 600 | 1.20 | 0 | Card titles (Outfit) |
| `--text-body-lg` | 1.125rem | 400 | 1.75rem | Normal | Primary body text / Lead (Inter) |
| `--text-body-md` | 1.0rem | 400 | 1.625rem | Normal | Standard body (Inter) |
| `--text-body-sm` | 0.875rem | 400 | 1.375rem | Normal | Secondary body, UI labels (Inter) |
| `--text-caption` | 0.75rem | 500 | 1.00rem | Normal | Badge labels, tooltips (Inter) |
| `--text-eyebrow` | 0.6875rem| 700 | 1.00rem | 0.2em | Pre-headers, tiny tags (Inter - Uppercase) |
| `--text-code-sm` | 0.875rem | 400 | 1.50rem | Normal | Inline code, technical tokens (Geist Mono) |

### Principles
- **Độ đậm của Headings:** Font Outfit thể hiện tốt nhất ở font-weight 600 (Semi-bold). Áp dụng tracking (letter-spacing) hơi âm một chút cho các size lớn (XL, 2XL) để các ký tự đứng sát nhau hơn, tạo cảm giác nguyên khối.
- **Đọc dữ liệu dài:** Giữ nguyên line-height hào phóng (`1.625rem` cho size `1rem`) của font Inter để tối ưu hóa không gian thở cho người dùng khi đọc các tài liệu dài.
- **Eyebrow Text:** Phải luôn đi kèm combo class `uppercase tracking-widest font-black`.

---

## Layout

### Spacing System
- **Base structure**: Relies heavily on `flex flex-col gap-6`.
- **Page Tokens**: `--spacing-page` (1.5rem), `--spacing-page-lg` (2.5rem).
- **Section Tokens**: `--spacing-section` (6rem), `--spacing-section-lg` (8rem) for vertical rhythm between major marketing bands.

### Grid & Container
- CSS grids are strictly preferred over complex flex wraps for Bento layouts.
- Commonly declared via `@container grid auto-rows-min grid-rows-[auto_auto]`.
- Nested UI modules require tight hierarchical nesting utilizing Flex columns separated by gap properties to organize depth.

### Whitespace Philosophy
The off-white `--background` serves to pad and group pure-white cards. Content inside Bento boxes is densely packed but logically separated by subtle background tints (`bg-zinc-50/80`).

---

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (Flat) | No shadow; `border-border` | Standard nested content |
| 1 (Subtle) | `--shadow-sm` | Default cards, dropdown triggers |
| 2 (Card) | `--shadow-card` | Core Bento Box wrappers |
| 3 (Glass) | `--shadow-glass` | Sticky headers, floating toolbars |
| 4 (Glow) | `--shadow-glow` / `-strong` | Active states, primary Emerald focus |
| 5 (Ambient)| `--shadow-ambient` | Modal backdrops, deep hero card elevation |

### Decorative Depth
- **Hover-Intensive Cards**: Transition arrays (`transition-all duration-500 hover:-translate-y-1.5`) are combined with dynamic border shifts (`hover:border-zinc-300`) and elevated shadows to create a physical "lifting" effect.
- **Group Interactivity**: Relies on `.group` and `group-hover:*` to synchronize inner element changes (e.g., icons glowing exactly when the card lifts).

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 0.25rem (4px) | Tiny chips, internal tags |
| `--radius-sm` | 0.5rem (8px) | Small buttons, inputs |
| `--radius-md` | 0.75rem (12px)| Standard buttons, search pills |
| `--radius-lg` | 1.0rem (16px) | Nested separation boxes inside Bento |
| `--radius-xl` | 1.5rem (24px) | **Outer Bento Card Wrappers** |
| `--radius-2xl`| 1.75rem (28px)| Large feature panels |
| `--radius-full`| 9999px | Avatars, status dots |

Kizuna utilizes a **highly rounded** architecture for layout (24px Bento cards) contrasted with slightly sharper interactive elements (12px buttons).

---

## Components

> Components heavily utilize `ui/button.tsx` and custom atomic patterns.

### Buttons
**`button-primary`** — Signature Forest Green CTA.
- Uses existing `ui/button.tsx`.
- Styles: `bg-primary text-primary-foreground hover:bg-primary/90`. Rounded `md`.

**`button-outline`** — Secondary actions.
- Styles: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground`.

**`button-base`** — Universal rules for interactive elements.
- `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:ring-ring/50 border-ring outline-none`.

### Cards & Containers
**`card-standard`** — Default content card.
- `bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm`.

**`bento-wrapper`** — Advanced Hover-Intensive Cards.
- Outer Wrapper: `group bg-white rounded-[24px] border border-zinc-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.015)]`.
- Hover State: `transition-all duration-500 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.05)] cursor-pointer will-change-transform`.

**`bento-nested`** — Separation box inside Bento cards.
- `bg-zinc-50/80 rounded-[16px] border border-zinc-100 transition-colors duration-300 group-hover:bg-zinc-100/50`.

### Badges & Tags
**`badge-micro`** — Highly structured tiny tags.
- `inline-flex items-center px-2 h-5 text-[9px] font-black tracking-wider uppercase rounded-md border shadow-sm`.
- Coloring dynamically matches intent (e.g., `bg-emerald-50 border-emerald-200 text-emerald-700`).

### Navigation & Utilities
**`scroll-horizontal`** — For mobile Bento carousels.
- Apply `.no-scrollbar` to hide `-webkit-scrollbar` while maintaining fluid horizontal touch sliding.

---

## Do's and Don'ts

### Do
- Use `var(--kz-forest-900)` as the primary CTA and brand anchor.
- Pair Outfit for modern geometric narrative headings with Inter for all UI controls.
- Use `group` and `group-hover` strictly for synchronizing animations within Bento cards.
- Ensure all horizontal scroll containers on mobile utilize the `.no-scrollbar` utility.
- Use CSS Grid for Bento layouts where elements need to auto-fill space dynamically.

### Don't
- **NEVER** use arbitrary hex codes (e.g., `bg-[#0a1c13]`). Our Tailwind config uses CSS variable interpolation to perfectly control theme mappings.
- Don't use arbitrary Z-indexes (e.g., `z-[99]`). Stick to variables `z-base`, `z-raised`, `z-header`, `z-modal`, etc.
- Don't use heavy box-shadows on flat nested content; save deep shadows for hover states and modals.

---

## Responsive Behavior

### Touch Targets
- Interactive buttons and inputs should maintain a standard `h-10` or `h-12` (40px/48px) for touch accessibility.

### Collapsing Strategy
- Bento grids (`@container grid`) should elegantly collapse from `grid-cols-3` to `grid-cols-1` under mobile viewports, or switch to horizontal overflow scroll (`flex-row overflow-x-auto no-scrollbar`).
- Typography scaling: Massive `text-heading-2xl` (5.5rem) should systematically reduce via Tailwind breakpoints down to `text-heading-lg` on mobile.

---

## Iteration Guide

1. **Atomic First**: When extending the UI, build or modify the base layer (Buttons, Badges) before assembling complex Bento cards.
2. **Variable Integrity**: If a new color is needed, add it to the `@layer base` HSL variables first, then map it to a semantic token. Do not hardcode it in a component file.
3. **Dark Mode Sync**: Ensure any new color variable has an appropriate mapping within the `.dark` configuration block.

---

## Known Gaps
- Exact animation easing curves (e.g., `cubic-bezier`) are currently reliant on Tailwind's default `ease-in-out` and `ease-out`. Custom spring animations may be added to `animations.md` later.
- Dark mode (`.dark`) tokens are defined but require strict contrast accessibility audits against the Forest Green accent elements.

## Mobile-First & Responsive Rules (CRITICAL)

- **Default to Mobile:** Always write the base Tailwind classes for mobile screens first (e.g., `flex flex-col gap-4`, `text-body-sm`). Use breakpoints (`md:`, `lg:`, `xl:`) ONLY to enhance the layout for larger screens.
- **No Fixed Widths/Heights:** NEVER use hardcoded fixed dimensions like `w-[800px]` or `h-[500px]`. Always use fluid utilities: `w-full max-w-7xl`, `min-h-screen`, `h-auto`.
- **Bento Grids Collapsing:** On mobile (< 768px), all Bento Grids must elegantly collapse into a single column (`grid-cols-1` or `flex-col`). 
- **Overflow Prevention:** Absolutely no horizontal scrolling on the main page body. Wrap broad sections in `overflow-x-hidden` if necessary.
- **Mobile Touch Targets:** Ensure all buttons and interactive tabs have a minimum height of `h-10` or `h-12` (40px-48px) for comfortable thumb tapping.
- **Horizontal Carousels:** If displaying multiple cards on mobile, do not stack them endlessly. Convert them into a swipeable carousel using `flex flex-nowrap overflow-x-auto snap-x snap-mandatory no-scrollbar`, with cards set to `snap-center min-w-[85vw]`.