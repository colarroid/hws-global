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
 *
 * Except for one account in a hundred, which is also an organisation's.
 * Migration 0026 made that possible on purpose; this screen was written
 * before it and went on promising to remove "your saved items and your email
 * address" while the cascade behind the button had quietly grown to reach an
 * organisation's membership row. On 24 November 2026 it did: a verified
 * organisation with a live listing was left with nobody in it, and from the
 * portal it looked deleted. So the button is not offered to an account that
 * belongs to one, and migration 0028 refuses the call underneath in case
 * this page is ever wrong. Leaving is still hers to do — it is one more
 * step and it starts where the organisation actually lives.
 */
export function DangerZone({
  savedCount,
  organisation,
  portalUrl,
}: {
  savedCount: number;
  /** The organisation this account belongs to, or null for almost everybody. */
  organisation: { name: string } | null;
  /** Resolved on the server: this is a client component. */
  portalUrl: string;
}) {
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();

  const items = `${savedCount} saved ${savedCount === 1 ? "item" : "items"}`;

  /*
   * A failed delete has to say so. On success this never returns, because the
   * action redirects; anything that comes back is a reason it did not happen,
   * and swallowing it would leave her looking at a settings screen for an
   * account she believes is gone.
   */
  function remove() {
    startTransition(async () => {
      const result = await deleteAccount();
      if (result?.error) setError(result.error);
    });
  }

  return (
    <>
      <section className="flex flex-col gap-3">
        <h2 className="m-0 eyebrow text-ink-60">
          Your data
        </h2>
        <p className="m-0 max-w-[62ch] text-[17px] leading-[1.6] text-ink-70">
          We hold your email address, your saved items, and the dates you saved
          them. Nothing else.
        </p>

        {organisation ? (
          /*
           * Not a warning dressed as a button. There is nothing for her to
           * press here, so there is no button: the sentence says what this
           * account is, what deleting it would take, and where the work
           * actually gets done.
           */
          <div className="flex flex-col items-start gap-3 rounded-card border border-hairline bg-surface p-5">
            <p className="m-0 max-w-[62ch] text-[17px] leading-[1.6] text-ink-70">
              This account also runs <strong className="font-semibold text-ink">{organisation.name}</strong> on
              Path Grid. Deleting it here would take the organisation, its
              listings and anyone you have invited with it, so this screen
              won&apos;t do it.
            </p>
            <a
              href={portalUrl}
              className="min-h-[44px] self-start text-[17px] font-bold text-ink"
            >
              Go to the organisation portal
            </a>
          </div>
        ) : confirming ? (
          <div className="flex flex-col items-start gap-3 rounded-card border border-red-200 bg-red-50 p-5">
            <p className="m-0 text-[17px] leading-[1.6] text-red-700">
              Your {items} and your email address. This can&apos;t be undone.
            </p>
            {error ? (
              <p
                role="alert"
                className="m-0 text-[16px] font-semibold leading-[1.5] text-red-700"
              >
                {error}
              </p>
            ) : null}
            <div className="flex flex-wrap gap-3">
              <Button
                variant="destructive"
                size="inline"
                disabled={pending}
                onClick={remove}
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
