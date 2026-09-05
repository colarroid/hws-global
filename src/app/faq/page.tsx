import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { FOR_ORGANISATIONS, FOR_WOMEN, type Question } from "@/lib/design/faq";

export const metadata: Metadata = pageMetadata({
  title: "Frequently asked questions",
  description:
    "What women ask before they use this site, and what organisations ask before they list on it. Answered plainly.",
  path: "/faq",
  indexable: true,
});

/**
 * The questions people actually ask.
 *
 * Native details and summary rather than a scripted accordion. Every answer
 * is then in the page for a search engine and for anybody printing it, it
 * opens without JavaScript, and the keyboard behaviour is the browser's
 * rather than something reimplemented and half right. The plus and minus are
 * drawn from the open state in CSS, so nothing has to stay in step.
 *
 * One shared `name` makes them exclusive: opening any answer closes whichever
 * was open. That is a browser feature rather than a listener, and on a
 * browser too old for it they simply all stay open, which is what they did
 * before. A degradation nobody would notice beats a script that has to be
 * right about focus, keyboard and the back button to earn its place.
 *
 * Two groups rather than one list. A woman wants to know whether this is safe
 * and whether it will waste her time; an organisation wants to know what it
 * costs and what happens to what it posts. One list makes both read half a
 * page that is not for them.
 */
function Answers({ questions, first }: { questions: Question[]; first: boolean }) {
  return (
    <div className="flex flex-col">
      {questions.map((item, index) => (
        <details
          key={item.q}
          name="faq"
          // Only the very first on the page, so somebody arriving sees the
          // shape of an answer without having to guess these open at all.
          open={first && index === 0}
          className="group border-b border-hairline"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="m-0 font-display text-[20px] font-normal leading-[1.3] sm:text-[23px]">
              {item.q}
            </h3>
            <span
              aria-hidden="true"
              className="mt-1 flex size-[22px] shrink-0 items-center justify-center text-ink-60"
            >
              <Plus size={19} strokeWidth={1.75} className="group-open:hidden" />
              <Minus
                size={19}
                strokeWidth={1.75}
                className="hidden group-open:block"
              />
            </span>
          </summary>

          {/* The rule down the side is what ties an answer to the question it
              belongs to, rather than leaving it floating between two. */}
          <div className="border-s-2 border-gold-300 ps-5 pb-6">
            <p className="m-0 max-w-[64ch] text-[17px] leading-[1.65] text-ink-70">
              {item.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-10 sm:py-16">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        {/*
          Sticky on a desktop so the heading and the way to reach a person stay
          with you however far down the list you get. It scrolls normally below
          that breakpoint, where a pinned panel would eat half a phone.
        */}
        <aside className="relative overflow-hidden rounded-card bg-ink p-8 text-white sm:p-10 lg:sticky lg:top-8 lg:w-[360px] lg:shrink-0">
          {/* Set behind the text rather than beside it, and low enough in
              contrast that it never competes with a word of it. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 end-2 select-none font-display text-[170px] leading-none text-white/[0.04]"
          >
            FAQ
          </span>

          <div className="relative flex flex-col gap-5">
            <h1 className="m-0 font-display text-[34px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[40px]">
              Frequently asked questions
            </h1>

            <p className="m-0 text-[16px] leading-[1.65] text-white/70">
              HWS Path Grid connects women across Scotland to the support that
              actually suits them, and gives the organisations behind it one
              place to be found.
            </p>

            <p className="m-0 text-[16px] leading-[1.65] text-white/70">
              If the answer you need is not here,{" "}
              <Link href="/help" className="font-semibold text-gold-300">
                talk to a person
              </Link>
              . We answer every message.
            </p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-12">
          <section className="flex flex-col gap-1">
            <h2 className="m-0 eyebrow text-gold-700">
              If you are looking for support
            </h2>
            <Answers questions={FOR_WOMEN} first />
          </section>

          <section className="flex flex-col gap-1">
            <h2 className="m-0 eyebrow text-gold-700">
              If you are an organisation
            </h2>
            <Answers questions={FOR_ORGANISATIONS} first={false} />
          </section>
        </div>
      </div>
    </div>
  );
}
