# ⛩️ KIZUNA HUB - CORE AGENT CONSTITUTION

## 1. PROJECT MISSION & IDENTITY
- **Project:** Kizuna Hub - The ecosystem connecting startup students, SME businesses, and VC Funds.
- **Vibe & Brand:** High-trust, professional, cinematic, and deeply technological. 
- **Core Colors:** Deep Forest Green (`#0a1c13`), Emerald (`#10b981`), and Crisp White (`#ffffff`) for high-contrast Bento cards.
- **Typography:** Serif for authoritative headings (Trust), Sans-serif for readable data/body.

## 2. TECH STACK & ARCHITECTURE (STRICT BOUNDARIES)
- **Frontend Framework:** Next.js 14+ (App Router strictly).
- **Language:** TypeScript (Strict mode enabled. `any` is strictly prohibited).
- **Styling:** Tailwind CSS (via semantic utility classes).
- **Animation:** Framer Motion (Hardware-accelerated `will-change-transform` is mandatory).
- **Backend/Database:** PostgreSQL + Prisma ORM.
- **Architecture Pattern:** Feature-Sliced Design (FSD). Keep UI, hooks, and data fetching deeply decoupled.

## 3. FILE SYSTEM & NAMING CONVENTIONS
- **Files/Folders:** `kebab-case` (e.g., `workspace-mockup.tsx`, `use-scroll-animation.ts`).
- **React Components:** `PascalCase` (e.g., `export const WorkspaceMockup = ...`).
- **Types/Interfaces:** `PascalCase`, exported from `data.ts` or a dedicated `types/` folder.
- **Path Aliases:** NEVER use relative paths like `../../`. Always use absolute aliases: `@/components/`, `@/lib/`, `@/config/`.

## 4. UI/UX ENGINEERING STANDARDS
- **Component Design:** Prioritize the "Bento Box" layout. Use clean, high-contrast cards (`bg-white` on `bg-zinc-50` for Light mode sections).
- **Responsive Strategy:** Mobile-first approach. Use Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`). 
- **Accessibility (a11y):** All interactive elements must have `aria-label`. All animations must respect `useReducedMotion()`.
- **Z-Index Governance:** Never use magic numbers (like `z-50`). Refer to the global z-index registry in `tailwind.config.ts`.

## 5. AGENTIC DIRECTIVES (RULES OF ENGAGEMENT)
- **No Hallucination:** Do not invent npm packages. Only use what is standard in the React/Next.js ecosystem.
- **Modular Output:** Do not dump 300 lines of code into one file. Split into logical sub-components (Data, UI, Layout).
- **Skill Delegation:** If tasked with a complex animation, implicitly refer to `front-animations.md` logic. If tasked with DB operations, implicitly refer to `db-integration.md`.
- **Stop & Ask:** If a requirement is ambiguous or contradicts these core rules, STOP generating code and ask the user for clarification.