import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Page } from "@/components/ui/Page";
import { SearchCredit } from "@/components/find/SearchCredit";
import { portalLink } from "@/lib/portal";

const TOTAL = 3;

/**
 * The shell the three questions share.
 *
 * One decision per screen, a progress bar in thirds, and a Back link that is
 * always exactly one step and never loses what she typed.
 */
export function QuestionShell({
  step,
  backHref,
  title,
  subline,
  width = 660,
  children,
}: {
  step: 1 | 2 | 3;
  backHref?: string;
  title: string;
  subline: string;
  width?: number;
  children: ReactNode;
}) {
  return (
    <>
      <div
        className="h-1 w-full bg-hairline-soft"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={TOTAL}
        aria-label={`Question ${step} of ${TOTAL}`}
      >
        <div
          className="h-1 bg-gold-500"
          style={{ width: `${(step / TOTAL) * 100}%` }}
        />
      </div>

      <Page width={width} top={72} gap={28}>
        <div className="flex items-center justify-between gap-4">
          {backHref ? (
            <Link
              href={backHref}
              className="inline-flex min-h-[44px] items-center gap-[6px] text-[14px] font-bold text-ink no-underline"
            >
              <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
              Back
            </Link>
          ) : (
            <span />
          )}
          <span className="text-[14px] font-semibold text-ink-60">
            Question {step} of {TOTAL}
          </span>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[46px] sm:leading-[1.1]">
            {title}
          </h1>
          <p className="m-0 text-[18px] leading-[1.55] text-ink-70">{subline}</p>
        </div>

        {children}

        <SearchCredit />

        {/* The other audience, on the first question only.

            It is the same block, word for word, as the foot of the access
            screen, because somebody who has wandered onto the wrong site
            should meet the same sentence wherever they land rather than two
            differently worded near-misses. Change one and change the other.

            Question one only, and that is the restraint the rest of this
            platform already keeps: the landing page holds its pitch to
            organisations to a single block at the very foot, on the reasoning
            that a woman looking for help should not have to scroll past it to
            reach anything that is for her. An organisation realises where it
            is on the first screen. By questions two and three she is in the
            middle of describing her own situation, and that is the worst
            place on the site to put somebody else's call to action. */}
        {step === 1 ? (
          <div className="flex flex-col items-center gap-1 self-stretch border-t border-hairline pt-7 text-center">
            <span className="text-[15px] leading-[1.5] text-ink-60">
              Are you an organisation or individual providing solutions for women?
            </span>
            <a
              href={portalLink("/sign-in")}
              className="p-1 text-[15px] font-bold text-gold-700 no-underline"
            >
              Sign in here
            </a>
          </div>
        ) : null}
      </Page>
    </>
  );
}
