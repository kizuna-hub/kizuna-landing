# SKILL: Frontend Architecture & Module Boundaries

### [Objective]
To enforce a highly scalable, secure, and maintainable architecture for Kizuna Hub using Next.js 14+ (App Router) and Feature-Sliced Design (FSD). The agent must strictly respect the boundaries between Server and Client environments, optimizing for performance and clean data flow.

### [Strict Rules]
1. **React Server Components (RSC) Default:** Every component is a Server Component by default. You MUST NOT use `"use client"` unless the component explicitly requires interactivity (`onClick`, `onChange`), browser APIs (`window`), hooks (`useState`, `useEffect`), or Framer Motion animations.
2. **The "Leaves" Pattern for Client Components:** Push `"use client"` directives as far down the component tree as possible (to the "leaves"). Never wrap an entire page or a massive layout in `"use client"`.
3. **App Router Purity:** The `app/` directory is strictly for routing (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`). Complex UI logic, sections, and feature components MUST live inside the `components/` directory.
4. **Data Fetching Paradigm:** Data MUST be fetched on the Server (inside Server Components) and passed down to Client Components as static props. NEVER use `useEffect` or `axios`/`fetch` inside Client Components to load initial page data.
5. **State Management (URL is King):** For global filters, pagination, or search states, use the URL Search Parameters (Query Strings) instead of complex client-side global state (like Redux or Zustand). This ensures every view in Kizuna Hub is bookmarkable and shareable.
6. **Mutations via Server Actions:** Form submissions and database mutations MUST be handled via Next.js Server Actions, not traditional API endpoints (`app/api/...`), unless building a public webhook.

### [Execution SOP (Step-by-Step)]
When tasked with building a new route or feature:
1. **Architect the Route:** Create the folder in `app/` (e.g., `app/dashboard/investor/`). Create a Server Component `page.tsx`.
2. **Fetch Server Data:** Write the Prisma/DB queries directly inside the `page.tsx` (or a dedicated service file imported into it).
3. **Deconstruct the UI:** Identify which parts of the page need interactivity. Build those as separate Client Components in `components/sections/` or `components/ui/`.
4. **Pass Props:** Pass the fetched data from the Server `page.tsx` down to the Client Components as props.
5. **Handle Mutations:** If the UI has a form, write a Server Action in a separate `actions.ts` file and pass it to the Client Component to execute on submit.

### [Code Snippet / Master Example]
```tsx
// app/mentors/page.tsx (SERVER COMPONENT - No "use client")
import { Suspense } from "react";
import { getMentors } from "@/lib/services/mentor-service";
import { MentorListClient } from "@/components/sections/mentor-list-client";
import { MentorListSkeleton } from "@/components/ui/skeletons";

export default async function MentorsPage({ searchParams }: { searchParams: { query?: string } }) {
  // 1. Fetch data directly on the server
  const query = searchParams.query || "";
  const initialMentors = await getMentors(query);

  return (
    <main className="flex flex-col gap-8 p-6">
      <h1 className="font-serif text-4xl text-white">Mạng lưới Mentor</h1>
      
      {/* 2. Pass data to interactive Client Component */}
      <Suspense fallback={<MentorListSkeleton />}>
        <MentorListClient initialData={initialMentors} />
      </Suspense>
    </main>
  );
}