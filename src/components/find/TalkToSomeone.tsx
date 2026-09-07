import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { Answers } from "@/lib/search/rank";

/**
 * The way out of a dead end that is a person rather than another search.
 *
 * The brief always wanted this. `hand_routing_requests` has been in the
 * schema since the first migration, with columns for her need, her place and
 * a note, and nothing has ever read it: the escape it was built for was cut
 * when the route it pointed at did not exist. This is that escape.
 *
 * It goes to our own calendar rather than a scheduling company's. That was
 * not the first plan, and the reason it became the plan is worth keeping
 * written down: this panel renders at /results?need=..., so her sentence is
 * in the address, and the moment somebody else's booking form is involved
 * that sentence is theirs too. Keeping the calendar here means she picks a
 * time, the person who calls her already knows what she was looking for, and
 * nobody outside HWS learns either thing.
 *
 * Her answers travel on the link for exactly that reason. They are going one
 * step further into the same platform, not out of it.
 *
 * The line about today is there because a booking is a date in the future.
 * Somebody who needs help this afternoon should not read "we can talk on
 * Thursday" as the best this platform can do, and /help carries both the
 * phone number and the 999 panel.
 */
export function TalkToSomeone({ answers }: { answers: Answers }) {
  const query = new URLSearchParams(
    Object.entries({
      need: answers.need,
      place: answers.place,
      situations: answers.situations.join(","),
    }).filter(([, v]) => v) as [string, string][],
  );

  return (
    <div className="flex flex-col gap-4 rounded-card bg-ink p-6 text-white sm:p-7">
      <div className="flex flex-col gap-[10px]">
        <h2 className="m-0 font-display text-[22px] font-normal leading-[1.25] sm:text-[26px]">
          Do you want to talk to someone?
        </h2>
        <p className="m-0 max-w-[52ch] text-[17px] leading-[1.6] text-white/75">
          Somebody who knows what is out there, and can point you in the right
          direction. Pick a time that suits you. It costs nothing, and you do
          not need an account.
        </p>
      </div>

      <Link
        href={`/talk?${query}`}
        className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-control bg-surface px-6 py-[14px] text-[16px] font-bold text-ink no-underline"
      >
        <CalendarDays size={17} strokeWidth={2} aria-hidden="true" />
        See available times
      </Link>

      <p className="m-0 text-[14px] leading-[1.5] text-white/70">
        We will already know what you searched for, so you will not have to
        explain it again. If you need help today,{" "}
        <Link href="/help" className="font-bold text-white underline">
          talk to us now
        </Link>{" "}
        instead.
      </p>
    </div>
  );
}
