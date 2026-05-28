# 🎨 Frontend Design System & UI Rules

## 1. Color Palette

- **Base Semantic Colors**: `bg-background` (Yellow-ish Canvas-50), `text-foreground` (Zinc-900).
- **Core Kizuna Variables**:
  - **Primary Forest Green Theme**: Apply `bg-kizuna-primary`, `text-kizuna-primary`.
  - **Canvas & Surface Layers**: `bg-kizuna-canvas` (pure white canvas), `bg-kizuna-surface` (canvas-50 surface).
  - **Text Output**: `text-kizuna-text-main`, `text-kizuna-text-muted`.
  - **Borders**: `border-kizuna-border`.
- **Accent Tokens**:
  - **Emerald Highlight**: Use `accent` / `bg-accent` / `text-accent` (maps to Emerald-500).
  - **Amber/Orange Highlight**: Use `brand-accent` / `bg-brand-accent` / `text-brand-accent` (maps to Orange-500).
- **Surface & Element Classes**:
  - `bg-card` (Pure White) with `text-card-foreground`.
  - `bg-secondary`, `bg-muted` for Zinc/Canvas gray mixes.
  - **Glass Effects**: `bg-surface-glass` (72% opacity), `bg-surface-glass-strong` (88% opacity) along with `shadow-blend` or `shadow-glass`.
- **Strict Rule**: NEVER use arbitrary hex codes (`bg-[#0a1c13]`). Our Tailwind config uses CSS variable interpolation to perfectly control theme mappings.

## 2. Typography

- **Primary Font (Inter / Sans)**: Maps to `font-sans` / `--font-body`. Use this for all body text, paragraphs, buttons, and functional UI data.
- **Secondary Font (Playfair Display / Serif)**: Maps to `font-serif` / `--font-heading`. Reserved exclusively for Titles, Major Headings, and narrative focus elements.
- **Specific Typography Sizes & Variables**: Standardize typography utilizing our scale overrides:
  - `text-heading-2xl`: 5.5rem, font-weight 500, line-height 0.95
  - `text-heading-xl`: 4rem, font-weight 500, line-height 1
  - `text-heading-lg`: 3rem, font-weight 500, line-height 1.05
  - `text-heading-md`: 2.25rem, font-weight 600, line-height 1.1
  - `text-heading-sm`: 1.5rem, font-weight 600, line-height 1.2
  - `text-body-lg`: 1.125rem
  - `text-body-md`: 1rem
  - `text-body-sm`: 0.875rem
  - `text-caption`: 0.75rem
  - `text-eyebrow`: 0.6875rem, uppercase tracking 0.2em, font-weight 700 (Often styled as `text-eyebrow uppercase tracking-widest font-black`).

## 3. Spacing & Layout

- **Containers & Margins**: Stick to standard generic paddings or the explicitly declared spacing variables `gap-page` (1.5rem), `gap-page-lg` (2.5rem), `gap-section` (6rem), and `gap-section-lg` (8rem).
- **Layout Behavior**: 
  - Standard stacking relies heavily on `flex flex-col gap-6`.
  - CSS grids are preferred over complex flex wraps, commonly declared via `@container grid auto-rows-min grid-rows-[auto_auto]`.
  - Nested UI modules (Bento Boxes) require tight hierarchical nesting utilizing Flex columns separated by gap properties to organize depth.

## 4. Component Patterns (Crucial)

Always refer to these specific atomic patterns when building components.

- **Standard Card Design**: 
  - Outer: `bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm`
- **Advanced Bento / Hover-Intensive Cards**:
  - Outer Wrapper: `bg-white rounded-[24px] border border-zinc-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.015)]`.
  - Card Hover State: `transition-all duration-500 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.05)] cursor-pointer will-change-transform`.
  - Nested Separation Box (Bento Depth): `bg-zinc-50/80 rounded-[16px] border border-zinc-100 transition-colors duration-300 group-hover:bg-zinc-100/50`.
  - Tags / Pills / Badges: `inline-flex items-center px-2 h-5 text-[9px] font-black tracking-wider uppercase rounded-md border shadow-sm` (Typically matched mathematically to the tag's color intent e.g., `bg-emerald-50 border-emerald-200 text-emerald-700`).
- **Button Design**: Always leverage the existing `ui/button.tsx`.
  - Standard Base: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:ring-ring/50 border-ring outline-none`.
  - Variant Default: `bg-primary text-primary-foreground hover:bg-primary/90`.
  - Variant Outline: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground`.

## 5. Global UI Quirks & Transitions

- **Hover Transitions**: Standard is `transition-all duration-300` or `duration-500` for complex nested bento cards. For image scales, `transition-transform duration-700 ease-out group-hover:scale-105` is utilized.
- **Group Interactivity (`group / group-hover`)**: Heavily rely on the `group` class on outer card wrappers, and apply `group-hover:*` onto inner nested buttons, icons, or headers for perfectly synchronized interaction states (e.g., an icon background changing at the exact same moment the card translates).
- **Z-Index System**: Never use arbitrary (e.g., `z-[99]`). Stick to variables `z-base`, `z-raised`, `z-dropdown`, `z-overlay`, `z-modal`, `z-toast`, `z-tooltip`.
- **Horizontal Scroll Containers**: Always implement `.no-scrollbar` logic on horizontally scrolling elements (like bento carousels) to ensure mobile fluid aesthetics.