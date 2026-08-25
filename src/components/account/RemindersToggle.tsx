"use client";

import { useOptimistic, useTransition } from "react";
import { setReminders } from "@/app/account/actions";

export function RemindersToggle({ enabled }: { enabled: boolean }) {
  const [, startTransition] = useTransition();
  const [on, setOn] = useOptimistic(enabled);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() =>
        startTransition(async () => {
          setOn(!on);
          await setReminders(!on);
        })
      }
      className="flex min-h-[44px] items-center justify-between gap-4 border-0 bg-transparent py-4 text-left"
    >
      <span className="text-[17px] text-ink">Before a deadline</span>
      <span className="text-[15px] font-bold text-gold-700">
        {on ? "On" : "Off"}
      </span>
    </button>
  );
}
