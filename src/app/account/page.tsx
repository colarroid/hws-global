import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { AccessForm } from "@/components/account/AccessForm";

export const metadata: Metadata = { title: "Access your account" };

/**
 * Screen 9. Access your account.
 *
 * Reached only when she asks to keep something. Never before results, never
 * as a wall. The account is the only ask in the entire flow, and if this
 * screen drifts any earlier the no-login promise reads as a bait and switch.
 *
 * There is no Google button. The approved design has one directly beneath
 * "Your email is kept private and secure", which the brief flags as a
 * contradiction to reconcile: the sentence and the button cannot both be
 * true. Rather than ship the contradiction on the one screen where trust is
 * the entire product, this is passcode-only until HWS decides. The privacy
 * line below is written to be accurate as it stands.
 */
export default async function AccessPage({
  searchParams,
}: {
  searchParams: Promise<{ save?: string }>;
}) {
  // She pressed Save and was sent here. The listing is held and finishes
  // saving itself the moment the account exists, so the page says that
  // rather than leaving her to wonder whether the press was thrown away.
  const { save } = await searchParams;

  return (
    <Page width={460} top={80} gap={22}>
      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[40px] sm:leading-[1.1]">
          {save ? "Sign in to save it" : "Access your account"}
        </h1>
        <p className="m-0 text-[17px] leading-[1.55] text-ink-70">
          {save
            ? "Saving is the one thing here that needs an account, so your list is still there next time. We have kept hold of what you just pressed Save on, and it will be waiting once you are in."
            : "We'll send you a one-time passcode to sign in. No password to remember."}
        </p>
      </div>

      <AccessForm />

      <span className="inline-flex items-start gap-2 text-[14px] leading-[1.5] text-ink-60">
        <Lock size={14} strokeWidth={2} aria-hidden="true" className="mt-[3px] shrink-0" />
        Your email address is used to sign you in and to warn you before
        something closes. We don&apos;t share it, and we don&apos;t send
        anything else.
      </span>

      <Link
        href="/find"
        className="self-center p-1 text-[15px] font-bold text-gold-700 no-underline"
      >
        {save ? "Carry on without saving" : "Just search without signing in"}
      </Link>
    </Page>
  );
}
