"use client";

import { useOptimistic, useTransition } from "react";
import { Bookmark } from "lucide-react";
import { toggleSave } from "@/app/actions";

/**
 * Save, on a result card.
 *
 * Optimistic, because the whole point is that it feels free. A woman
 * deciding whether something is worth coming back to should not be waiting
 * on a round trip to find out whether the platform heard her.
 *
 * Outline icon and "Save" at rest, solid icon and "Saved" once saved.
 */
export function SaveButton({
  listingId,
  saved,
  name,
}: {
  listingId: string;
  saved: boolean;
  /** Listing name, so the control says which thing it saves. */
  name: string;
}) {
  const [pending, startTransition] = useTransition();
  const [optimistic, setOptimistic] = useOptimistic(saved);

  return (
    <button
      type="button"
      aria-pressed={optimistic}
      aria-label={optimistic ? `Saved: ${name}` : `Save ${name}`}
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          setOptimistic(!optimistic);
          await toggleSave(listingId);
        })
      }
      className="flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-control border border-ring bg-surface px-4 py-3 text-[15px] font-bold text-ink transition-colors duration-150 ease-out hover:border-gold-500"
    >
      <Bookmark
        size={17}
        strokeWidth={2}
        className="text-gold-500"
        fill={optimistic ? "currentColor" : "none"}
        aria-hidden="true"
      />
      <span>{optimistic ? "Saved" : "Save"}</span>
    </button>
  );
}
