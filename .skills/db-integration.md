# Database Integration SOP

## [Objective]

This skill defines how an AI Agent must integrate PostgreSQL through Prisma ORM inside the Kizuna Hub Next.js App Router ecosystem. The goal is to produce secure, typed, efficient, and operationally safe data access for platform workflows that connect student entrepreneurs, mentors, and investors.

This SOP intentionally defines Prisma/PostgreSQL as the target backend standard. If another repository instruction still references a different backend, treat that as an architecture conflict and do not silently mix database systems in the same feature. For implementation tasks, follow the instruction that explicitly selects Prisma/PostgreSQL or ask for reconciliation before changing production data access.

## [Strict Rules]

1. Never instantiate Prisma Client inside React components, Server Components, Server Actions, route handlers, loops, or request-scoped helper functions.
2. Instantiate Prisma Client exactly once through `lib/prisma.ts` using a development-safe singleton pattern.
3. Never import Prisma Client into Client Components. Files containing `"use client"` must not import `@/lib/prisma`, `@prisma/client`, or database helpers.
4. Never use `any`. Use Prisma-generated types, explicit interfaces, discriminated unions, `unknown`, or typed validation results.
5. Never expose raw database records directly to the client if they contain private, internal, or unnecessary fields.
6. Use `select` for every Prisma query unless the query is intentionally internal and all returned fields are required.
7. Use `include` only when nested relations are required. Prefer nested `select` inside `include` or relation `select`.
8. Use pagination for list queries. Do not fetch unbounded lists.
9. Never write raw SQL through `$queryRaw`, `$executeRaw`, or unsafe query methods unless the task explicitly requires it and the query is reviewed for injection safety.
10. All mutations must run through Server Actions or route handlers. Prefer Server Actions for form and UI mutations in App Router.
11. Every Server Action must start with `"use server"`.
12. Validate all mutation input with a schema such as Zod before touching the database.
13. Perform authorization checks server-side before mutation. Do not trust client-provided user IDs, role flags, ownership fields, or permission claims.
14. Server Actions must return structured discriminated union states. Do not throw raw Prisma errors into the UI.
15. Use transactions for multi-step writes that must succeed or fail together.
16. Do not catch errors only to return success. Log internal errors server-side and return safe user-facing messages.
17. Do not leak stack traces, table names, SQL fragments, constraint names, tokens, emails, or private IDs in user-facing messages.
18. Use Prisma unique constraints for idempotency and business invariants whenever possible.
19. Use database-level relations and constraints for integrity. Do not rely only on UI checks.
20. Keep database helpers server-only. If a helper returns data to the UI, map it to a narrow view model.
21. Avoid N+1 query patterns. Batch, select relations intentionally, or use transactions when appropriate.
22. Use `revalidatePath` or `revalidateTag` after mutations that affect cached Server Component data.
23. Keep environment secrets in environment variables. Never hard-code connection strings.

## [Execution SOP]

1. Read the current schema and feature context.
   - Inspect `prisma/schema.prisma` before writing queries.
   - Inspect existing helpers in `lib/`, Server Actions in `app/features/`, and shared types in `types/`.
   - Confirm whether the task is a read, mutation, transaction, or schema change.

2. Define the data contract.
   - Create or reuse a view model in `types/` for data that crosses into UI.
   - Keep Prisma model types internal unless the whole model is truly safe and necessary.
   - Define Server Action return states as discriminated unions.

3. Choose the correct execution location.
   - Use Server Components for initial reads.
   - Use Server Actions for UI-triggered mutations.
   - Use route handlers only for webhooks, third-party callbacks, file uploads, or external API surfaces.
   - Never call Prisma from Client Components.

4. Build or reuse the Prisma singleton.
   - Ensure `lib/prisma.ts` exists.
   - Use `globalThis` caching only outside production to avoid connection exhaustion during hot reload.
   - Export a named `prisma` instance.

5. Implement reads with minimal fields.
   - Use `select` to fetch only fields needed by the UI contract.
   - Apply stable ordering.
   - Add `take` and cursor or offset pagination for lists.
   - Map database results to view models before returning to UI.

6. Implement mutations through secure Server Actions.
   - Add `"use server"` at the top of the action module.
   - Parse input with Zod or another approved validator.
   - Resolve the authenticated user on the server.
   - Check role and ownership against database state.
   - Execute the mutation.
   - Revalidate affected routes or tags.
   - Return a structured action state.

7. Use transactions for dependent writes.
   - Use `prisma.$transaction(async (tx) => { ... })` for workflows requiring conditional reads plus writes.
   - Keep transaction work short and database-focused.
   - Do not call external APIs, send emails, or perform slow network work inside the transaction.

8. Handle errors deliberately.
   - Detect known Prisma errors when they affect user experience, such as unique conflicts.
   - Log unexpected errors with enough internal context to debug.
   - Return safe, generic messages to the UI.
   - Preserve the discriminated union shape for every branch.

9. Review performance and safety.
   - Confirm no unbounded queries.
   - Confirm no private fields are returned.
   - Confirm no raw SQL or client-side Prisma imports.
   - Confirm transactions are used where partial writes would corrupt workflow state.
   - Confirm TypeScript does not infer unsafe broad shapes.

10. Validate before completion.
    - Run type checking and linting when available.
    - If schema changed, ensure migrations are generated and reviewed.
    - Test success, validation failure, unauthorized access, not-found records, unique conflicts, and unexpected server errors.

## [Code Snippets/Examples]

### Prisma Client Singleton in `lib/prisma.ts`

```ts
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
```

### Shared Types for Action State and View Models

```ts
// types/actions.ts
export type ActionState<TData = void> =
  | {
      status: "success";
      message: string;
      data: TData;
    }
  | {
      status: "validation_error";
      message: string;
      fieldErrors: Record<string, string[]>;
    }
  | {
      status: "unauthorized";
      message: string;
    }
  | {
      status: "not_found";
      message: string;
    }
  | {
      status: "conflict";
      message: string;
    }
  | {
      status: "server_error";
      message: string;
    };
```

```ts
// types/mentor.ts
export interface MentorDirectoryItem {
  id: string;
  name: string;
  headline: string;
  expertise: string[];
  profileHref: string;
}
```

### Optimized Query Helper with Narrow Select

```ts
// app/features/mentors/queries.ts
import { prisma } from "@/lib/prisma";
import type { MentorDirectoryItem } from "@/types/mentor";

interface GetMentorsInput {
  take: number;
  cursor?: string;
}

export const getMentorDirectoryItems = async ({
  take,
  cursor,
}: GetMentorsInput): Promise<MentorDirectoryItem[]> => {
  const mentors = await prisma.mentor.findMany({
    take,
    ...(cursor
      ? {
          skip: 1,
          cursor: { id: cursor },
        }
      : {}),
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    select: {
      id: true,
      name: true,
      headline: true,
      expertise: true,
    },
  });

  return mentors.map((mentor) => ({
    id: mentor.id,
    name: mentor.name,
    headline: mentor.headline,
    expertise: mentor.expertise,
    profileHref: `/mentors/${mentor.id}`,
  }));
};
```

### Secure Server Action for a Mutation

```ts
// app/features/startups/actions.ts
"use server";

import { revalidatePath } from "next/cache";

import { Prisma } from "@prisma/client";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import type { ActionState } from "@/types/actions";

const requestIntroSchema = z.object({
  startupId: z.string().min(1),
  message: z.string().trim().min(20).max(600),
});

interface RequestStartupIntroData {
  introRequestId: string;
}

interface AuthenticatedUser {
  id: string;
  role: "entrepreneur" | "mentor" | "investor" | "admin";
}

const getCurrentUser = async (): Promise<AuthenticatedUser | null> => {
  // Replace with the project authentication provider.
  return null;
};

export const requestStartupIntro = async (
  input: unknown,
): Promise<ActionState<RequestStartupIntroData>> => {
  const parsed = requestIntroSchema.safeParse(input);

  if (!parsed.success) {
    return {
      status: "validation_error",
      message: "Please review the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const user = await getCurrentUser();

  if (!user) {
    return {
      status: "unauthorized",
      message: "Sign in to request an introduction.",
    };
  }

  if (user.role !== "mentor" && user.role !== "investor") {
    return {
      status: "unauthorized",
      message: "Your account cannot request this introduction.",
    };
  }

  try {
    const startup = await prisma.startup.findUnique({
      where: { id: parsed.data.startupId },
      select: {
        id: true,
        founderId: true,
      },
    });

    if (!startup) {
      return {
        status: "not_found",
        message: "This startup is no longer available.",
      };
    }

    if (startup.founderId === user.id) {
      return {
        status: "conflict",
        message: "You cannot request an introduction to your own startup.",
      };
    }

    const introRequest = await prisma.introRequest.create({
      data: {
        startupId: startup.id,
        requesterId: user.id,
        message: parsed.data.message,
      },
      select: {
        id: true,
      },
    });

    revalidatePath(`/startups/${startup.id}`);

    return {
      status: "success",
      message: "Intro request sent.",
      data: {
        introRequestId: introRequest.id,
      },
    };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        status: "conflict",
        message: "You already requested an introduction for this startup.",
      };
    }

    console.error("Failed to request startup introduction", {
      startupId: parsed.data.startupId,
      requesterId: user.id,
      error,
    });

    return {
      status: "server_error",
      message: "We could not send the intro request. Please try again.",
    };
  }
};
```

### Transaction for Dependent Writes

```ts
// app/features/investments/actions.ts
"use server";

import { revalidatePath } from "next/cache";

import { z } from "zod";

import { prisma } from "@/lib/prisma";
import type { ActionState } from "@/types/actions";

const createInvestmentSignalSchema = z.object({
  startupId: z.string().min(1),
  thesis: z.string().trim().min(30).max(1_000),
});

interface CreateInvestmentSignalData {
  signalId: string;
}

export const createInvestmentSignal = async (
  input: unknown,
): Promise<ActionState<CreateInvestmentSignalData>> => {
  const parsed = createInvestmentSignalSchema.safeParse(input);

  if (!parsed.success) {
    return {
      status: "validation_error",
      message: "Please review the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const startup = await tx.startup.findUnique({
        where: { id: parsed.data.startupId },
        select: {
          id: true,
          isAcceptingInvestmentSignals: true,
        },
      });

      if (!startup) {
        return {
          status: "not_found" as const,
          message: "This startup is no longer available.",
        };
      }

      if (!startup.isAcceptingInvestmentSignals) {
        return {
          status: "conflict" as const,
          message: "This startup is not currently accepting investment signals.",
        };
      }

      const signal = await tx.investmentSignal.create({
        data: {
          startupId: startup.id,
          thesis: parsed.data.thesis,
        },
        select: {
          id: true,
        },
      });

      await tx.startup.update({
        where: { id: startup.id },
        data: {
          investorInterestCount: {
            increment: 1,
          },
        },
        select: {
          id: true,
        },
      });

      return {
        status: "success" as const,
        message: "Investment signal created.",
        data: {
          signalId: signal.id,
        },
      };
    });

    if (result.status === "success") {
      revalidatePath(`/startups/${parsed.data.startupId}`);
    }

    return result;
  } catch (error) {
    console.error("Failed to create investment signal", {
      startupId: parsed.data.startupId,
      error,
    });

    return {
      status: "server_error",
      message: "We could not create the investment signal. Please try again.",
    };
  }
};
```

### Server Component Read Usage

```tsx
// app/mentors/page.tsx
import { getMentorDirectoryItems } from "@/app/features/mentors/queries";
import { MentorDirectory } from "@/app/features/mentors/mentor-directory";

export default async function MentorsPage() {
  const mentors = await getMentorDirectoryItems({ take: 24 });

  return <MentorDirectory mentors={mentors} />;
}
```
