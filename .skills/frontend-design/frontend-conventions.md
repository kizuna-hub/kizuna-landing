# SKILL: Frontend Code Conventions & Clean Code

### [Objective]
To enforce strict coding standards, naming conventions, and error-handling patterns that mimic a Senior Frontend Engineer. The code generated must be highly readable, predictable, flat (avoiding deep nesting), and maintainable for human developers.

### [Strict Rules]
1. **Naming Conventions:**
   - **Files & Directories:** `kebab-case` (e.g., `user-profile.tsx`, `use-auth.ts`).
   - **React Components & Interfaces:** `PascalCase` (e.g., `UserProfile`, `UserProps`).
   - **Functions, Hooks & Variables:** `camelCase` (e.g., `fetchUserData`, `useScroll`, `isLoading`).
   - **Global Constants:** `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`, `ROUTES`).
2. **Tailwind Class Sorting:** You MUST sort Tailwind classes logically to reduce cognitive load. Follow this strict order:
   `Layout/Position` -> `Spacing (m/p)` -> `Sizing (w/h)` -> `Typography` -> `Backgrounds/Colors` -> `Borders/Shadows` -> `Effects/Transitions`.
3. **The "Bouncer Pattern" (Early Returns):** Absolutely NO deep nesting of `if/else` statements. Check for errors, loading states, or invalid data first and `return` early. Keep the "Happy Path" at the root level of the function.
4. **Robust Error Handling:** - Never assume an async operation will succeed. All API calls or Server Actions must be wrapped in `try/catch` blocks.
   - For UI components, handle `null` or `undefined` data gracefully using Fallback UI (e.g., skeletons or empty states) instead of crashing the app.
5. **No Magic Numbers/Strings:** Extract hardcoded values (like API endpoints, role strings, specific timeout numbers) into constants or configuration files.

### [Execution SOP (Step-by-Step)]
When writing or refactoring a component:
1. **Check Naming:** Verify the file name and exported component name align with the conventions.
2. **Flatten Logic:** Look at your `if/else` blocks. Can you invert the condition and return early? Do it.
3. **Secure Async Calls:** Wrap promises in `try/catch`. Ensure the `catch` block logs the error safely and updates the UI state (e.g., showing a toast notification).
4. **Format Tailwind:** Read through the `className` strings. Reorder them according to the Layout -> Spacing -> Sizing -> Visuals pipeline.

### [Code Snippet / Master Example]
```tsx
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { submitApplication } from "@/actions/apply"; // camelCase function

// PascalCase interface
export interface ApplicationFormProps {
  startupId: string;
}

// PascalCase Component
export const ApplicationForm = ({ startupId }: ApplicationFormProps) => {
  // camelCase variables
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // camelCase handler
  const handleApply = async () => {
    // 1. Bouncer Pattern (Early Return for validation)
    if (!startupId) {
      setError("Thiếu thông tin Startup ID.");
      return; 
    }

    setIsSubmitting(true);
    setError(null);

    // 2. Robust Error Handling (try/catch)
    try {
      const response = await submitApplication(startupId);
      
      // Early return on specific API failure
      if (!response.success) {
        setError(response.message || "Có lỗi xảy ra khi nộp đơn.");
        return;
      }
      
      // Happy Path
      window.location.href = "/dashboard/success";
      
    } catch (err) {
      setError("Lỗi kết nối máy chủ. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // 3. Tailwind Sorting: 
    // Layout (flex flex-col items-center) -> Spacing (p-6 mt-4) -> Sizing (w-full max-w-md) 
    // -> Visuals (bg-white rounded-2xl shadow-xl border border-zinc-100)
    <div className="flex flex-col items-center p-6 mt-4 w-full max-w-md bg-white rounded-2xl border border-zinc-100 shadow-xl">
      
      {/* 4. Fallback UI / Error State */}
      {error && (
        <div className="flex items-center gap-2 p-3 mb-4 w-full text-sm text-red-600 bg-red-50 rounded-lg">
          <AlertCircle className="w-4 h-4" />
          <p>{error}</p>
        </div>
      )}

      <button
        onClick={handleApply}
        disabled={isSubmitting}
        // Tailwind sorting applied here as well
        className="flex justify-center items-center px-4 py-2 w-full text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Đang xử lý..." : "Nộp đơn ngay"}
      </button>
    </div>
  );
};