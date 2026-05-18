# Frontend Component Design SOP

## [Objective]

This skill defines how an AI Agent must design, split, type, and implement frontend components for Kizuna Hub. The goal is to produce scalable, accessible, high-performance UI for a startup ecosystem platform while preserving the current project architecture:

- `app/`: routing and page entry points only.
- `app/features/`: complex, domain-specific feature modules and smart containers.
- `components/`: shared dumb/presentational UI components.
- `hooks/`: global reusable React hooks.
- `types/`: shared TypeScript interfaces, DTOs, and UI contracts.
- `lib/`: utilities, third-party setup, and framework helpers.

The Agent must separate presentational UI from orchestration logic, define strict TypeScript contracts before implementation, use Tailwind CSS tokens backed by `app/globals.css`, and ship accessible markup by default.

## [Strict Rules]

1. Never implement class components. Use functional arrow components only.
2. Never use `any`. Use explicit interfaces, discriminated unions, generics, `unknown`, or `never` where appropriate.
3. Use named exports only. Do not use default exports for components, hooks, utilities, or types.
4. Use absolute imports for internal files, such as `@/components/ui/button`, `@/types/startup`, and `@/lib/utils`.
5. Follow import order: React, third-party packages, absolute internal imports, then relative imports if unavoidable.
6. Keep Server Components as the default. Add `"use client"` only for components that need hooks, browser APIs, event handlers, animation state, or client-only libraries.
7. Keep Client Components as low in the tree as possible. Do not mark a page or layout as client-side unless absolutely required.
8. Separate dumb and smart components:
   - Dumb components live in `components/` when shared across routes or features.
   - Smart feature containers live in `app/features/` or the nearest route feature folder.
   - Dumb components must not fetch data, mutate data, read cookies, access local storage, or import Server Actions.
   - Smart containers may compose data, pass callbacks, choose loading/error/empty states, and connect Server Actions or hooks.
9. Define shared or reused interfaces in `types/`. Component-local interfaces may stay in the same file only when they are truly private and unlikely to be reused.
10. Use Tailwind utility classes only. Do not use inline styles.
11. Use design tokens from `app/globals.css` through Tailwind token classes such as `bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`, `bg-primary`, and `text-primary-foreground`.
12. Use `cn()` from `@/lib/utils` for conditional or merged classes.
13. Do not hard-code arbitrary colors unless a one-off value is explicitly required and approved. Prefer existing CSS variables and theme tokens.
14. Build semantic HTML first. Use ARIA only when semantic HTML cannot express the behavior.
15. Every interactive element must have:
   - Keyboard access.
   - Visible focus states.
   - A clear accessible name.
   - Disabled and loading states when relevant.
16. Do not use clickable `div` or `span` elements. Use `button`, `a`, or the appropriate semantic element.
17. All images must include meaningful `alt` text, unless decorative; decorative images must use `alt=""`.
18. Components that render lists must use stable IDs as keys, never array indexes unless the list is static and cannot reorder.
19. Respect reduced-motion preferences. Avoid mandatory animations for core comprehension.
20. Do not create nested UI cards. Use cards only for repeated items, modals, and genuinely framed tools.
21. Text must not overflow or overlap at mobile or desktop breakpoints. Use responsive layout constraints instead of viewport-scaled font sizes.
22. When using Framer Motion, isolate animation in client components and keep the server-rendered fallback meaningful.

## [Execution SOP]

1. Read the existing context before coding.
   - Inspect similar files in `components/`, `app/features/`, and the target route.
   - Inspect existing UI primitives in `components/ui/`.
   - Inspect relevant types in `types/` before creating new ones.
   - Inspect `app/globals.css` for available tokens before choosing colors.

2. Classify the requested UI.
   - If it is reusable, visual, and data-agnostic, implement it as a dumb component in `components/`.
   - If it coordinates data, state, mutations, permissions, or feature-specific composition, implement it as a smart container in `app/features/`.
   - If both are needed, create a smart container that passes typed props to one or more dumb components.

3. Define contracts before JSX.
   - Create or extend interfaces in `types/` for shared domain data and UI view models.
   - Use names that describe the domain, such as `MentorCardView`, `StartupMatchSummary`, or `InvestorSignal`.
   - Keep DTOs separate from UI view models when backend fields do not match UI needs.
   - Model finite states with discriminated unions.

4. Design the component API.
   - Accept only the data the component renders.
   - Use callback props for user intent, such as `onRequestIntro`, `onBookmark`, or `onOpenProfile`.
   - Include `className?: string` for reusable dumb components.
   - Avoid passing entire database records into presentational components.

5. Implement semantic accessible markup.
   - Choose landmarks, headings, lists, buttons, links, and forms correctly.
   - Preserve heading order.
   - Use `aria-label`, `aria-describedby`, or `aria-live` only when needed.
   - Ensure loading, empty, and error states are perceivable.

6. Style with tokens and stable layout.
   - Use Tailwind classes connected to `app/globals.css` variables.
   - Use `cn()` for variants, conditional states, and consumer-provided `className`.
   - Use stable sizing constraints such as `min-h`, `aspect-*`, `grid`, `max-w-*`, and `truncate` where appropriate.
   - Confirm the component works in light and dark themes.

7. Decide server vs. client placement.
   - Keep static and data-rendered UI as Server Components.
   - Use a thin Client Component for event handlers, local state, animations, or browser APIs.
   - Pass serializable props from Server Components to Client Components.

8. Validate edge states.
   - Loading state: skeleton or disabled pending state.
   - Empty state: helpful semantic message, no broken layout.
   - Error state: user-safe copy, retry path when relevant.
   - Partial data: avoid rendering undefined text or broken links.
   - Long content: clamp, wrap, truncate, or constrain intentionally.

9. Final self-review before completion.
   - Confirm no `any`, inline styles, default exports, or raw hard-coded colors.
   - Confirm imports use `@/...`.
   - Confirm dumb components have no data fetching or mutation imports.
   - Confirm keyboard and screen reader behavior.
   - Confirm TypeScript and lint expectations are satisfied.

## [Code Snippets/Examples]

### Shared UI Contract in `types/`

```ts
// types/startup.ts
export type StartupStage = "idea" | "prototype" | "launched" | "fundraising";

export interface StartupCardView {
  id: string;
  name: string;
  tagline: string;
  stage: StartupStage;
  founderName: string;
  mentorCount: number;
  investorInterestCount: number;
  profileHref: string;
}

export interface StartupCardAction {
  startupId: string;
  intent: "view_profile" | "request_intro" | "bookmark";
}
```

### Dumb Presentational Component in `components/`

```tsx
// components/startups/startup-card.tsx
import Link from "next/link";

import { ArrowRight, Bookmark, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { StartupCardAction, StartupCardView } from "@/types/startup";

interface StartupCardProps {
  startup: StartupCardView;
  isBookmarked?: boolean;
  isActionPending?: boolean;
  className?: string;
  onAction?: (action: StartupCardAction) => void;
}

const stageLabel: Record<StartupCardView["stage"], string> = {
  idea: "Idea",
  prototype: "Prototype",
  launched: "Launched",
  fundraising: "Fundraising",
};

export const StartupCard = ({
  startup,
  isBookmarked = false,
  isActionPending = false,
  className,
  onAction,
}: StartupCardProps) => {
  const titleId = `startup-${startup.id}-title`;
  const descriptionId = `startup-${startup.id}-description`;

  return (
    <article
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className={cn(
        "rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm transition-colors",
        "hover:border-primary/40 focus-within:border-primary",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-primary">{stageLabel[startup.stage]}</p>
          <h3 id={titleId} className="mt-2 truncate text-lg font-semibold">
            {startup.name}
          </h3>
        </div>

        {onAction ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={isActionPending}
            aria-label={isBookmarked ? "Remove startup bookmark" : "Bookmark startup"}
            aria-pressed={isBookmarked}
            onClick={() => onAction({ startupId: startup.id, intent: "bookmark" })}
          >
            <Bookmark
              aria-hidden="true"
              className={cn("size-4", isBookmarked && "fill-primary text-primary")}
            />
          </Button>
        ) : null}
      </div>

      <p id={descriptionId} className="mt-3 line-clamp-2 text-sm text-muted-foreground">
        {startup.tagline}
      </p>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-muted-foreground">Founder</dt>
          <dd className="mt-1 font-medium">{startup.founderName}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Mentors</dt>
          <dd className="mt-1 flex items-center gap-1 font-medium">
            <Users aria-hidden="true" className="size-4" />
            {startup.mentorCount}
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button asChild>
          <Link href={startup.profileHref}>
            View profile
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Button>

        {onAction ? (
          <Button
            type="button"
            variant="outline"
            disabled={isActionPending}
            onClick={() => onAction({ startupId: startup.id, intent: "request_intro" })}
          >
            Request intro
          </Button>
        ) : null}
      </div>
    </article>
  );
};
```

### Smart Feature Container in `app/features/`

```tsx
// app/features/startups/startup-grid.tsx
"use client";

import { useTransition } from "react";

import { toast } from "sonner";

import { StartupCard } from "@/components/startups/startup-card";
import { requestStartupIntro } from "@/app/features/startups/actions";
import type { StartupCardAction, StartupCardView } from "@/types/startup";

interface StartupGridProps {
  startups: StartupCardView[];
  bookmarkedStartupIds: readonly string[];
}

export const StartupGrid = ({ startups, bookmarkedStartupIds }: StartupGridProps) => {
  const [isPending, startTransition] = useTransition();

  const handleAction = (action: StartupCardAction) => {
    if (action.intent === "view_profile") {
      return;
    }

    if (action.intent === "bookmark") {
      toast.info("Bookmarking will be connected to the saved-startups action.");
      return;
    }

    startTransition(async () => {
      const result = await requestStartupIntro({ startupId: action.startupId });

      if (result.status === "success") {
        toast.success("Intro request sent.");
        return;
      }

      toast.error(result.message);
    });
  };

  if (startups.length === 0) {
    return (
      <section aria-live="polite" className="rounded-lg border border-border bg-card p-8">
        <h2 className="text-lg font-semibold">No startups found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Try changing the filters or checking back when new teams join Kizuna Hub.
        </p>
      </section>
    );
  }

  return (
    <section aria-label="Startup opportunities" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {startups.map((startup) => (
        <StartupCard
          key={startup.id}
          startup={startup}
          isActionPending={isPending}
          isBookmarked={bookmarkedStartupIds.includes(startup.id)}
          onAction={handleAction}
        />
      ))}
    </section>
  );
};
```

### Accessible Dynamic Classes with `cn()`

```tsx
// components/status/status-pill.tsx
import { cn } from "@/lib/utils";

interface StatusPillProps {
  label: string;
  tone: "neutral" | "success" | "warning" | "danger";
  className?: string;
}

export const StatusPill = ({ label, tone, className }: StatusPillProps) => (
  <span
    className={cn(
      "inline-flex min-h-7 items-center rounded-md border px-2.5 text-xs font-medium",
      tone === "neutral" && "border-border bg-secondary text-secondary-foreground",
      tone === "success" && "border-primary/30 bg-primary/10 text-primary",
      tone === "warning" && "border-accent/40 bg-accent/10 text-accent-foreground",
      tone === "danger" && "border-destructive/30 bg-destructive/10 text-destructive",
      className,
    )}
  >
    {label}
  </span>
);
```
