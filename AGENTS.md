# 🤖 PROJECT TECHNICAL RULES & STANDARDS

# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices. Use App Router exclusively.
## 1. Tech Stack & Environment
- **Frontend Framework:** Next.js (App Router).
- **Language:** TypeScript (Strict Mode).
- **Styling:** Tailwind CSS & CSS Variables (for tokens).
- **Backend/Database:** SpacetimeDB (Do NOT use Prisma, Supabase, or Firebase. All backend interactions must conform to SpacetimeDB module logic).

## 2. Directory Architecture (Current State)
We are maintaining the current architecture. When adding new elements (Types, Hooks, API), follow this placement rule:
- `app/`: Routing and Pages ONLY.
- `app/features/`: Complex, domain-specific modules.
- `components/`: Shared UI components (Dumb components).
- `hooks/`: (To be created) Global custom React hooks.
- `types/`: (To be created) Global TypeScript interfaces and type definitions.
- `lib/`: Utility functions (`utils.ts`) and third-party setups.

## 3. Strict Coding Conventions
- **TypeScript:** NEVER use `any`. Define strict interfaces for all props, states, and API responses.
- **Imports:** Use absolute paths (`@/...`) for all internal imports. Order imports: React -> Third-party -> Absolute internal -> Relative.
- **Components:** Use functional components with arrow functions. Destructure props in the function signature.
- **Styling:** Use Tailwind utility classes. For dynamic classes, utilize the `cn()` utility from `lib/utils.ts`. Do not write inline styles.

## 4. State & Data Fetching
- Prefer Server Components (`async function Page()`) for initial data fetching.
- Use Client Components (`"use client"`) ONLY when interactivity (hooks, event listeners) is strictly required. Keep client components as low in the tree as possible.