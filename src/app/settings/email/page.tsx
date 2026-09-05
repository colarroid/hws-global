import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { EmailChangeForm } from "@/components/account/EmailChangeForm";
import { pageMetadata } from "@/lib/seo";
import { getAccount } from "@/lib/data/account";

export const metadata: Metadata = pageMetadata({
  title: "Change your email address",
  description: "Move your account, and everything saved on it, to another address.",
  path: "/settings/email",
});

/**
 * Changing the address on the account.
 *
 * Until now the settings screen offered a "Change" link that went to
 * /account, the sign-in screen. It changed nothing. Signed in, she landed on
 * a page headed "Access your account" with a form asking for the address she
 * already had, which reads as the site having lost track of her.
 *
 * The flow is the sign-in flow, because it is the same question: a code to
 * the address she is moving to, typed on the next screen. She never touches a
 * link here for the same reason she never does at sign-in, and one habit is
 * easier to hold than two.
 *
 * Says what moves with her, because that is the actual worry: an account is
 * only worth changing the address on if the saved list comes too.
 */
export default async function ChangeEmailPage() {
  const account = await getAccount();
  if (!account) redirect("/account");

  return (
    <Page width={460} top={64} gap={24}>
      <Link
        href="/settings"
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        Settings
      </Link>

      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[38px] sm:leading-[1.1]">
          Change your email address
        </h1>
        <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
          You are signed in as{" "}
          <strong className="break-all text-ink">{account.email}</strong>. Your
          saved list moves with you, and nothing else about the account
          changes.
        </p>
      </div>

      <EmailChangeForm />

      <p className="m-0 border-t border-hairline pt-5 text-[15px] leading-[1.6] text-ink-60">
        We will send a code to the new address. Until you enter it, the account
        stays on the address you have now.
      </p>
    </Page>
  );
}
