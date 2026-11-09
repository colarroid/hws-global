import type { Metadata } from "next";
import { getTranslator } from "@/lib/i18n";
import { translatedMetadata } from "@/lib/seo";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Mail } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { CodeForm } from "@/components/account/CodeForm";

export function generateMetadata(): Promise<Metadata> {
  return translatedMetadata({
    titleKey: "code.title",
    descriptionKey: "meta.accountCode.desc",
    path: "/account/code",
  });
}

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
  const [{ email }, { t }] = await Promise.all([searchParams, getTranslator()]);
  if (!email) redirect("/account");

  return (
    <Page width={460} top={80} gap={22}>
      <span className="flex text-gold-500">
        <Mail size={36} strokeWidth={2} aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[38px] sm:leading-[1.1]">
          {t("code.title")}
        </h1>
        {/* The address on its own line rather than inside the sentence.
            It used to sit mid-clause in bold, which only reads correctly in
            a language that puts the object after the verb — Urdu and
            Punjabi put it before, so the bold landed in the middle of a
            different phrase. A colon and a line of its own works in all
            twelve, and is easier to check against her inbox on a phone. */}
        <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
          {t("code.sentTo")}{" "}
          <strong className="text-ink">{email}</strong>
          <br />
          {t("code.enterBelow")}
        </p>
        {/* Said here rather than left for her to work out.
            hwspathgrid.com started sending in late August and has sent very
            little since, so it has almost no reputation with the big mail
            providers yet and a share of these land in spam. That is a real
            thing happening to real women on the one screen where not getting
            the email means not getting in at all.
            It should stop being true as the domain builds a history, and this
            line can go then. Until it does, one sentence here is worth more
            than any amount of tuning at the sending end. */}
        <p className="m-0 text-[15px] leading-[1.6] text-ink-60">
          {t("code.arrive")}
        </p>
      </div>

      <CodeForm email={email} />

      <div className="flex flex-col gap-2 border-t border-hairline pt-5">
        <Link
          href="/account"
          className="self-start p-1 text-[15px] font-bold text-gold-700 no-underline"
        >
          {t("code.different")}
        </Link>
        <Link
          href="/find"
          className="self-start p-1 text-[15px] font-bold text-gold-700 no-underline"
        >
          {t("code.justSearch")}
        </Link>
      </div>
    </Page>
  );
}
