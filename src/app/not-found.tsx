import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, MessageSquareText, Search } from "lucide-react";
import { Page } from "@/components/ui/Page";

export const metadata: Metadata = {
  title: "We cannot find that page",
  robots: { index: false, follow: false },
};

/**
 * The 404.
 *
 * Three kinds of link land here and the page has to serve all three: a typo,
 * an old bookmark, and a listing or organisation that has since come down.
 * The last is the one that matters. A woman following a link somebody sent
 * her to a thing that has closed is not lost, she is disappointed, and
 * telling her "page not found" answers a question she did not ask.
 *
 * So the wording leads with the likeliest explanation rather than the status
 * code, and every route out is a way to find the thing she was after: the
 * three questions first, because they search everything rather than asking
 * her to guess a name.
 *
 * No apology and no joke. A missing page is a small thing and treating it as
 * either a crisis or a bit of fun both waste the moment she is in.
 */
export default function NotFound() {
  const ways = [
    {
      href: "/find",
      icon: Search,
      title: "Tell us what you need",
      body: "Three questions, in your own words. We look across every organisation rather than asking you to know the name of one.",
    },
    {
      href: "/discover",
      icon: Compass,
      title: "Browse the organisations",
      body: "Everyone we have checked, by the kind of support they offer or by what you need.",
    },
    {
      href: "/help",
      icon: MessageSquareText,
      title: "Talk to a person",
      body: "If a link somebody sent you has stopped working, tell us and we will find out what happened to it.",
    },
  ];

  return (
    <Page width={760} top={72} gap={30}>
      <div className="flex flex-col gap-[10px]">
        <span className="eyebrow text-ink-60">404</span>
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[44px] sm:leading-[1.1]">
          We cannot find that page
        </h1>
        <p className="m-0 max-w-[58ch] text-[18px] leading-[1.6] text-ink-70">
          Either the address is not quite right, or what used to be here has
          closed and come down. Both happen, and neither is your fault.
        </p>
      </div>

      <div className="flex flex-col gap-[14px]">
        {ways.map((way) => (
          <Link
            key={way.href}
            href={way.href}
            className="group flex items-start gap-4 rounded-card bg-surface p-6 no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[2px] hover:shadow-panel"
          >
            <way.icon
              size={22}
              strokeWidth={1.75}
              className="mt-[2px] shrink-0 text-gold-700"
              aria-hidden="true"
            />
            <span className="flex min-w-0 flex-1 flex-col gap-2">
              <span className="font-display text-[20px] font-normal leading-[1.25] text-ink">
                {way.title}
              </span>
              <span className="text-[16px] leading-[1.55] text-ink-70">
                {way.body}
              </span>
            </span>
            <ArrowRight
              size={18}
              strokeWidth={2}
              className="mt-2 shrink-0 text-gold-700 transition-transform duration-150 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="inline-flex min-h-[44px] items-center self-start p-1 text-[16px] font-bold text-gold-700 no-underline"
      >
        Back to the start
      </Link>
    </Page>
  );
}
