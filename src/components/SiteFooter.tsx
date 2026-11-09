import Image from "next/image";
import { getTranslator } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAccount } from "@/lib/data/account";
import { portalUrl } from "@/lib/portal";

/**
 * The foot of every page.
 *
 * Restrained on purpose. A footer on a site like this is where somebody
 * checks whether they are in the right place, not a second navigation: the
 * links are the ones a woman might actually want from the bottom of a page,
 * and nothing here competes with what she came to do.
 *
 * The three promises used to be repeated down here as a paragraph, on the
 * reasoning that most traffic arrives from a search engine straight onto a
 * service page and would otherwise never meet them. HWS removed it. They now
 * live on the landing page as the trust cards and nowhere else, so somebody
 * who arrives on a listing and leaves from it is not told that nothing here
 * is paid for or that her words are not sold. Worth watching once there are
 * real arrivals to watch.
 *
 * There is no "leave this site" control here, and there should be one. Some
 * of what this platform links to is read by women who cannot be seen reading
 * it. Doing it properly means replacing the history entry rather than just
 * navigating away, and deciding where it goes — that is HWS's call, not one
 * to make in a footer. A link that looks like an escape and does not clear
 * the trail is worse than no link, because somebody would rely on it.
 */
export async function SiteFooter() {
  const [account, { t }] = await Promise.all([getAccount(), getTranslator()]);
  const year = new Date().getFullYear();

  const forYou = [
    { href: "/find", label: t("footer.find") },
    { href: "/discover", label: t("footer.discover") },
    { href: "/faq", label: t("footer.faq") },
    { href: "/help", label: t("footer.help") },
  ];

  const legal = [
    { href: "/privacy", label: t("footer.privacy") },
    { href: "/terms", label: t("footer.terms") },
    { href: "/help", label: t("footer.talk") },
  ];

  return (
    <footer className="mt-auto border-t border-hairline bg-surface">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-5 py-12 sm:px-10 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex max-w-[38ch] flex-col gap-4">
            <Link
              href="/"
              className="flex min-h-[44px] w-fit items-center no-underline"
            >
              <Image
                src="/logo.svg"
                alt="HWS Path Grid"
                width={104}
                height={38}
                // The optimiser does not process SVG and there is nothing to
                // gain from it on a 5KB vector.
                unoptimized
              />
            </Link>
            {/* The tagline, then the practical sentence, in that order and
                in two different voices on purpose. The first says what the
                platform is for and is set in the display face so it reads as
                a line of the brand rather than a line of body copy. The
                second is the thing somebody at the bottom of a page actually
                needs to know, and it is unchanged.

                "Support for women across Scotland, in one place" came out of
                the second sentence rather than being kept alongside: the
                tagline now says that, and saying it twice in four lines is
                how a footer starts sounding like a brochure. */}
            <p className="m-0 font-display text-[19px] leading-[1.35] text-ink">
              {t("footer.tagline")}
            </p>
            <p className="m-0 text-[16px] leading-[1.6] text-ink-70">
              {t("footer.free")}
            </p>
          </div>

          <nav
            aria-label={t("footer.label")}
            className="flex flex-col gap-10 sm:flex-row sm:gap-16"
          >
            <div className="flex flex-col gap-3">
              <h2 className="m-0 eyebrow text-ink-60">{t("footer.forYou")}</h2>
              <ul className="m-0 flex list-none flex-col gap-[2px] p-0">
                {forYou.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[44px] items-center text-[16px] font-medium text-ink no-underline hover:text-gold-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={account ? "/settings" : "/account"}
                    className="inline-flex min-h-[44px] items-center text-[16px] font-medium text-ink no-underline hover:text-gold-700"
                  >
                    {account ? t("nav.remindersSettings") : t("nav.signIn")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="m-0 eyebrow text-ink-60">{t("footer.forOrgs")}</h2>
              <ul className="m-0 flex list-none flex-col gap-[2px] p-0">
                <li>
                  <a
                    href={portalUrl()}
                    className="inline-flex min-h-[44px] items-center gap-[6px] text-[16px] font-medium text-ink no-underline hover:text-gold-700"
                  >
                    {t("footer.meetWomen")}
                    <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <Link
                    href="/for-organisations"
                    className="inline-flex min-h-[44px] items-center text-[16px] font-medium text-ink no-underline hover:text-gold-700"
                  >
                    {t("footer.whyList")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/discover"
                    className="inline-flex min-h-[44px] items-center text-[16px] font-medium text-ink no-underline hover:text-gold-700"
                  >
                    {t("footer.whoListed")}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-hairline-soft pt-8">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <span className="text-[14px] text-ink-60">
              © {year} The Holistic Wellbeing Summit
            </span>

            {/* The two legal documents live down here rather than in the
                columns above. Somebody looking for them looks at the bottom
                of the page, and nobody arrives wanting to read them. */}
            <nav
              aria-label={t("footer.legal")}
              className="flex flex-wrap items-center gap-x-6"
            >
              {legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center text-[14px] font-bold text-ink no-underline hover:text-gold-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
