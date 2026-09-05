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
      <div className="panel-in pointer-events-auto flex w-full max-w-[760px] flex-col gap-3 rounded-card bg-surface p-4 shadow-panel sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <Cookie
          size={22}
          strokeWidth={1.75}
          className="hidden shrink-0 text-gold-700 sm:block"
          aria-hidden="true"
        />

        {/* Short on purpose. On a phone this sits over the page, and every
            extra line is more of what she came for covered up by a box about
            cookies. */}
        <p className="m-0 flex-1 text-[14px] leading-[1.5] text-ink-70 sm:text-[15px] sm:leading-[1.55]">
          <strong className="font-semibold text-ink">
            We use a few cookies, and none of them watch you.
          </strong>{" "}
          They keep you signed in and remember your language. Nothing is
          tracked or sold.{" "}
          <Link href="/privacy" className="font-bold text-gold-700">
            More in the privacy policy
          </Link>
          .
        </p>

        <form action={acknowledge} className="shrink-0">
          <button
            type="submit"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border-0 bg-ink px-7 py-[13px] text-[15px] font-bold text-white sm:w-auto"
          >
            Okay
          </button>
        </form>
      </div>
    </div>
  );
}
