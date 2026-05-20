# SKILL: Frontend Component Design & Architecture

### [Objective]
To architect and implement React components for Kizuna Hub that are strictly typed, highly reusable, decoupled, and adhere to Feature-Sliced Design (FSD) principles. Components must utilize Tailwind CSS efficiently without class conflicts and follow the "Bento UI" design language.

### [Strict Rules]
1. **Separation of Concerns (Smart vs. Dumb):** Never mix data fetching/heavy business logic with UI rendering in the same file. 
   - **Dumb Components (`ui/`):** Strictly presentational. They receive data via props and emit events.
   - **Smart Components (`sections/` or `containers/`):** Handle state, data fetching, and pass data down to dumb components.
2. **Strict Typing:** Every component MUST have an explicitly defined TypeScript `interface` for its props. Export these types from a `data.ts` or `types.ts` file if shared. `any` is forbidden.
3. **Tailwind Class Merging:** NEVER concatenate Tailwind classes using string interpolation (e.g., `className={\`bg-white \${className}\`}`). You MUST use the `cn()` utility (which wraps `clsx` and `tailwind-merge`) to resolve styling conflicts dynamically.
4. **Variant Management (`cva`):** For foundational UI components with multiple visual states (e.g., Buttons, Badges, Cards), use `class-variance-authority` (`cva`). Avoid chaotic nested ternary operators for styling.
5. **Bento UI Enforcement:** Feature blocks and cards must default to rounded corners (`rounded-2xl` or `rounded-3xl`), deep shadows, and internal padding that respects the Base-4/Base-8 spacing grid.

### [Execution SOP (Step-by-Step)]
When tasked with building a new UI section or component:
1. **Isolate Data & Types:** Create a `data.ts` file first to define the TypeScript interfaces and any static/dummy data required for the UI.
2. **Build the Atom/Dumb Components:** Create small, pure components (e.g., `feature-card.tsx`) that only focus on rendering the HTML/Tailwind based on props.
3. **Assemble the Orchestrator:** Create the `index.tsx` (the Smart component/Section) that imports the data and maps over it to render the Dumb components.
4. **Apply `cn()` for Overrides:** Ensure the top-level element of every exported component accepts an optional `className?: string` prop and applies it using `cn("base-classes", className)`.

### [Code Snippet / Master Example]
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// 1. Variant Management with CVA
const bentoCardVariants = cva(
  "flex flex-col overflow-hidden rounded-2xl border transition-all duration-300",
  {
    variants: {
      tone: {
        light: "bg-white border-zinc-200 shadow-xl shadow-black/5 text-zinc-900",
        dark: "bg-white/5 border-white/10 shadow-2xl shadow-black/40 backdrop-blur-md text-white",
      },
      padding: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: { tone: "light", padding: "md" },
  }
);

// 2. Strict Typing
export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bentoCardVariants> {
  title: string;
  description: string;
}

// 3. Dumb Component implementation using cn()
export const BentoCard = ({ title, description, tone, padding, className, ...props }: BentoCardProps) => {
  return (
    <article className={cn(bentoCardVariants({ tone, padding }), className)} {...props}>
      <h3 className="font-serif text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{description}</p>
    </article>
  );
};