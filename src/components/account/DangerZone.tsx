"use client";

import { useState, useTransition } from "react";
import { LogOut, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { deleteAccount, signOut } from "@/app/account/actions";

/**
 * What is held, and how to leave.
 *
 * Delete confirms once, naming the real count rather than a vague "your
 * data", then completes immediately. No second prompt, no survey, no offer
 * to stay: a win-back here would undo every privacy sentence on the site.
 */
export function DangerZone({ savedCount }: { savedCount: number }) {
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();

  const items = `${savedCount} saved ${savedCount === 1 ? "item" : "items"}`;

  return (
    <>
      <section className="flex flex-col gap-3">
        <h2 className="m-0 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-60">
          Your data
        </h2>
        <p className="m-0 max-w-[62ch] text-[17px] leading-[1.6] text-ink-70">
          We hold your email address, your saved items, and the dates you saved
          them. Nothing else.
        </p>

        {confirming ? (
          <div className="flex flex-col items-start gap-3 rounded-card border border-red-200 bg-red-50 p-5">
            <p className="m-0 text-[17px] leading-[1.6] text-red-700">
              Your {items} and your email address. This can&apos;t be undone.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="destructive"
                size="inline"
                disabled={pending}
                onClick={() => startTransition(() => deleteAccount())}
              >
                {pending ? "Deleting…" : "Yes, delete everything"}
              </Button>
              <Button
                variant="secondary"
                size="inline"
                onClick={() => setConfirming(false)}
              >
                Keep my account
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="destructive"
            size="inline"
            className="self-start"
            onClick={() => setConfirming(true)}
          >
            <Trash2 size={16} strokeWidth={2} aria-hidden="true" />
            Delete my account and everything in it
          </Button>
        )}
      </section>

      <Button
        variant="text"
        size="bare"
        className="self-start text-ink"
        disabled={pending}
        onClick={() => startTransition(() => signOut())}
      >
        <LogOut size={16} strokeWidth={2} aria-hidden="true" />
        Sign out on this device
      </Button>
    </>
  );
}
