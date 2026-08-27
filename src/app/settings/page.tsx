import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { RemindersToggle } from "@/components/account/RemindersToggle";
import { DangerZone } from "@/components/account/DangerZone";
import { getAccount } from "@/lib/data/account";
import { getSavedIds } from "@/lib/saved";

export const metadata: Metadata = { title: "Settings" };

/**
 * Screen 12. Settings.
 *
 * Four controls, no dashboard. It states exactly what is held and makes
 * leaving as easy as joining, which is the thing that makes every other
 * privacy claim on the platform believable.
 *
 * Deliberately absent: profiles beyond a name, interests, following
 * organisations, activity history, recommendations. Each would turn the
 * account into a reason to hold data that is not needed.
 */
export default async function SettingsPage() {
  const account = await getAccount();
  if (!account) redirect("/account");

  const saved = await getSavedIds();

  return (
    <Page width={600} top={56} gap={30}>
      <Link
        href="/saved"
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        My saved list
      </Link>

      <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
        Settings
      </h1>

      <section className="flex flex-col gap-3">
        <h2 className="m-0 eyebrow text-ink-60">
          Reminders
        </h2>
        <div className="flex flex-col rounded-card shadow-hairline bg-surface px-[22px]">
          <RemindersToggle enabled={account.remindersEnabled} />
          <div className="flex items-center justify-between gap-4 border-t border-hairline-soft py-4">
            <span className="text-[17px]">How far ahead</span>
            <span className="text-[17px] text-ink-70">
              {account.reminderDays} days
            </span>
          </div>
        </div>
        <span className="text-[14px] leading-[1.5] text-ink-60">
          We send nothing else. No newsletter, no suggestions.
        </span>
        {/* Said here because it is a safety matter, not a preference. */}
        <span className="text-[14px] leading-[1.5] text-ink-60">
          Reminder emails never name the kind of support, in case someone else
          reads your inbox.
        </span>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="m-0 eyebrow text-ink-60">
          Email address
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-card shadow-hairline bg-surface px-[22px] py-4">
          <span className="text-[17px] break-all">{account.email}</span>
          <Link
            href="/account"
            className="p-1 text-[15px] font-bold text-gold-700 no-underline"
          >
            Change
          </Link>
        </div>
      </section>

      <DangerZone savedCount={saved.length} />
    </Page>
  );
}
