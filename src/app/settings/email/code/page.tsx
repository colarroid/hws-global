import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Mail } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { EmailChangeCodeForm } from "@/components/account/EmailChangeCodeForm";
import { pageMetadata } from "@/lib/seo";
import { getAccount } from "@/lib/data/account";

export const metadata: Metadata = pageMetadata({
  title: "Check your new inbox",
  description: "Enter the code we sent to your new address.",
  path: "/settings/email/code",
});

/**
 * The second half of the change.
 *
 * Nothing has moved yet when she arrives here. The account is still on the
 * old address and stays there until this code is entered, which is worth
 * saying plainly: a half-finished change that silently took effect would be
 * the way somebody locks themselves out by mistyping one character.
 *
 * The way back out is a link rather than a cancel button, because there is
 * nothing to cancel. Leaving the page leaves the account exactly as it was.
 */
export default async function ChangeEmailCodePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const account = await getAccount();
  if (!account) redirect("/account");

  const { email } = await searchParams;
  if (!email) redirect("/settings/email");

  return (
    <Page width={460} top={80} gap={22}>
      <span className="flex text-gold-500">
        <Mail size={36} strokeWidth={2} aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[38px] sm:leading-[1.1]">
          Check your new inbox
        </h1>
        <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
          We sent a code to{" "}
          <strong className="break-all text-ink">{email}</strong>. Enter it and
          the account moves across.
        </p>
      </div>

      <EmailChangeCodeForm email={email} />

      <div className="flex flex-col gap-2 border-t border-hairline pt-5">
        <p className="m-0 text-[15px] leading-[1.6] text-ink-60">
          Nothing has changed yet. Until you enter the code, you are still
          signed in as {account.email}.
        </p>
        <Link
          href="/settings/email"
          className="self-start p-1 text-[15px] font-bold text-gold-700 no-underline"
        >
          Use a different address
        </Link>
        <Link
          href="/settings"
          className="self-start p-1 text-[15px] font-bold text-gold-700 no-underline"
        >
          Leave it as it is
        </Link>
      </div>
    </Page>
  );
}
