import Link from "next/link";
import { redirect } from "next/navigation";
import { Mail } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { CodeForm } from "@/components/account/CodeForm";

/**
 * Passcode entry. Never designed; the spec existed only in prose.
 *
 * A passcode still needs access to that inbox on the same device, which is a
 * real barrier on a borrowed or shared phone. That is why the way back to
 * searching without an account stays on the screen rather than being a dead
 * end she has to reverse out of.
 */
export default async function CodePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;
  if (!email) redirect("/account");

  return (
    <Page width={460} top={80} gap={22}>
      <span className="flex text-gold-500">
        <Mail size={36} strokeWidth={2} aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[38px] sm:leading-[1.1]">
          Check your email
        </h1>
        <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
          We sent a sign-in code to <strong className="text-ink">{email}</strong>.
          Enter it below and you&apos;re in.
        </p>
      </div>

      <CodeForm email={email} />

      <div className="flex flex-col gap-2 border-t border-hairline pt-5">
        <Link
          href="/account"
          className="self-start p-1 text-[15px] font-bold text-gold-700 no-underline"
        >
          Use a different address
        </Link>
        <Link
          href="/find"
          className="self-start p-1 text-[15px] font-bold text-gold-700 no-underline"
        >
          Just search without signing in
        </Link>
      </div>
    </Page>
  );
}
