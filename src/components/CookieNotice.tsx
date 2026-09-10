import Link from "next/link";
import { revalidatePath } from "next/cache";
import { Cookie } from "lucide-react";
import { hasSeenCookieNotice, markCookieNoticeSeen } from "@/lib/cookies";

/**
 * The cookie notice.
 *
 * It is a notice and not a consent gate, and the difference is deliberate
 * rather than a shortcut. This site sets three cookies and every one of them
 * is either strictly necessary or something a person asked for by acting:
 * the Supabase session cookies, which exist only once somebody signs in; the
 * language cookie, set when a language is chosen; and the cookie that holds a
 * listing for the moment it takes to sign in and save it. There is no
 * analytics, no advertising, no third party and nothing that follows anybody
 * off this site. Under PECR that set does not need consent, and a banner
 * offering to "reject" cookies it would go on setting anyway would be a lie
 * told to look compliant.
 *
 * The moment that stops being true, this has to become a real consent gate
 * with a working refusal, non-essential scripts held until it is answered,
 * and a way to change the answer later. Anything less at that point is the
 * dishonest version of this banner rather than the honest one.
 *
 * Built as a form posting a server action, so it works with no JavaScript and
 * dismisses on the server. It is a landmark rather than a dialog: it takes no
 * focus, traps nothing, and covers nothing at the top of the page, because a
 * woman who arrived here in a hurry should not have to dismiss a box about
 * cookies before she can read why she is here.
 *
 * It covers something at the bottom, though, and that got worse when the
 * landing page's hero grew to fill the screen: the two cards she is meant to
 * press now sit at the foot of the first screenful, which is where this
 * lands. Stacked, it was a 195px box on a phone and it sat on top of them.
 * One row and a shorter sentence takes it to the height of its own button.
 *
 * The honest fix would be to not need it. It shows once and is dismissed
 * from the server, so it is not worth a fifth of the first screen either way.
 */
export async function CookieNotice() {
  if (await hasSeenCookieNotice()) return null;

  async function acknowledge() {
    "use server";
    await markCookieNoticeSeen();
    revalidatePath("/", "layout");
  }

  return (
    <div
      role="region"
      aria-label="About cookies"
      className="pointer-events-none sticky bottom-0 z-40 flex justify-center px-3 pb-3 sm:px-5 sm:pb-5"
    >
      <div className="panel-in pointer-events-auto flex w-full max-w-[760px] items-center gap-3 rounded-card bg-surface p-3 shadow-panel sm:gap-6 sm:p-6">
        <Cookie
          size={22}
          strokeWidth={1.75}
          className="hidden shrink-0 text-gold-700 sm:block"
          aria-hidden="true"
        />

        {/* Short on purpose. On a phone this sits over the page, and every
            extra line is more of what she came for covered up by a box about
            cookies. The landing page's hero now fills the screen with the two
            cards at the bottom of it, which is exactly where this lands, so
            the middle clause goes on a narrow screen rather than burying the
            thing she arrived to press.

            What survives on a phone is the claim and the link. What goes is
            the elaboration of it — which is the right half to lose, because
            the privacy policy carries the same detail at more length and is
            one tap away. */}
        <p className="m-0 flex-1 text-[13px] leading-[1.45] text-ink-70 sm:text-[15px] sm:leading-[1.55]">
          <strong className="font-semibold text-ink">
            We use a few cookies, and none of them watch you.
          </strong>{" "}
          <span className="hidden sm:inline">
            They keep you signed in and remember your language. Nothing is
            tracked or sold.{" "}
          </span>
          <Link href="/privacy" className="font-bold text-gold-700">
            More in the privacy policy
          </Link>
          .
        </p>

        {/* Beside the text rather than under it. Stacked, this was a 195px
            box on a phone; alongside, it is the height of the button. The
            44px floor stays — it is the one measurement here that is not a
            layout preference. */}
        <form action={acknowledge} className="shrink-0">
          <button
            type="submit"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border-0 bg-ink px-5 py-[11px] text-[14px] font-bold text-white sm:px-7 sm:py-[13px] sm:text-[15px]"
          >
            Okay
          </button>
        </form>
      </div>
    </div>
  );
}
