import Link from "next/link";
import { ArrowUpRight, CalendarDays, Phone } from "lucide-react";

/**
 * The way out of a dead end that is a person rather than another search.
 *
 * The brief always wanted this. `hand_routing_requests` has been in the
 * schema since the first migration, with columns for her need, her place and
 * a note, and nothing has ever read it: the escape it was built for was cut
 * when the route it pointed at did not exist. This is that escape, arriving
 * by a booking link instead of a form she fills in and hears nothing back
 * from.
 *
 * Two states, and the fallback is the point. With no booking URL set it is
 * the contact page, which is what this panel already did, so the screen can
 * ship before anybody has made the scheduling account and lights up when
 * they have. Nothing here breaks in the gap.
 *
 * `rel="noreferrer"` is not decoration. This renders at
 * /results?need=...&place=..., so without it the scheduler is handed her
 * search sentence in the Referer header the moment she clicks.
 *
 * The line about today is there because a booking is a date in the future.
 * Somebody who needs help this afternoon should not read "we can talk on
 * Thursday" as the best this platform can do, and /help carries both the
 * phone number and the 999 panel.
 */
export function TalkToSomeone({ bookingHref }: { bookingHref: string | null }) {
  return (
    <div className="flex flex-col gap-4 rounded-card bg-ink p-6 text-white sm:p-7">
      <div className="flex flex-col gap-[10px]">
        <h2 className="m-0 font-display text-[22px] font-normal leading-[1.25] sm:text-[26px]">
          Do you want to talk to someone?
        </h2>
        <p className="m-0 max-w-[52ch] text-[17px] leading-[1.6] text-white/75">
          Somebody who knows what is out there, and can point you in the right
          direction. It costs nothing, and you do not need an account.
        </p>
      </div>

      {bookingHref ? (
        <a
          href={bookingHref}
          target="_blank"
          /* noreferrer above all: her search is in this page's address. */
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-control bg-surface px-6 py-[14px] text-[16px] font-bold text-ink no-underline"
        >
          <CalendarDays size={17} strokeWidth={2} aria-hidden="true" />
          Book a time that suits you
          <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>
      ) : (
        <Link
          href="/help"
          className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-control bg-surface px-6 py-[14px] text-[16px] font-bold text-ink no-underline"
        >
          <Phone size={17} strokeWidth={2} aria-hidden="true" />
          Talk to a person
        </Link>
      )}

      <p className="m-0 text-[14px] leading-[1.5] text-white/70">
        {bookingHref ? (
          <>
            Opens a booking page. If you need help today,{" "}
            <Link href="/help" className="font-bold text-white underline">
              talk to us now
            </Link>{" "}
            instead.
          </>
        ) : (
          "Free, by phone, Monday to Friday."
        )}
      </p>
    </div>
  );
}
