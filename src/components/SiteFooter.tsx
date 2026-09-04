import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAccount } from "@/lib/data/account";

/**
 * The foot of every page.
 *
 * Restrained on purpose. A footer on a site like this is where somebody
 * checks whether they are in the right place, not a second navigation: the
 * links are the ones a woman might actually want from the bottom of a page,
 * and nothing here competes with what she came to do.
 *
 * The three promises are repeated rather than left on the landing page. Most
 * traffic arrives from a search engine directly onto a service page, so for
 * plenty of people this is the only place they will read them.
 *
 * There is no "leave this site" control here, and there should be one. Some
 * of what this platform links to is read by women who cannot be seen reading
 * it. Doing it properly means replacing the history entry rather than just
 * navigating away, and deciding where it goes — that is HWS's call, not one
 * to make in a footer. A link that looks like an escape and does not clear
 * the trail is worse than no link, because somebody would rely on it.
 */
export async function SiteFooter() {
  const account = await getAccount();
  const year = new Date().getFullYear();

  const forYou = [
    { href: "/find", label: "Find solution" },
    { href: "/discover", label: "Discover organisations" },
    { href: "/saved", label: "Saved" },
    { href: "/faq", label: "Frequently asked questions" },
    { href: "/help", label: "Help" },
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
            <p className="m-0 text-[16px] leading-[1.6] text-ink-70">
              Support for women across Scotland, in one place. Free to use, and
              you never need an account to search, read or apply.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-col gap-10 sm:flex-row sm:gap-16"
          >
            <div className="flex flex-col gap-3">
              <h2 className="m-0 eyebrow text-ink-60">For you</h2>
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
                    {account ? "Reminders and settings" : "Sign in"}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="m-0 eyebrow text-ink-60">For organisations</h2>
              <ul className="m-0 flex list-none flex-col gap-[2px] p-0">
                <li>
                  <a
                    href={
                      process.env.ORG_PORTAL_URL ??
                      "https://organisation.hwspathgrid.com"
                    }
                    className="inline-flex min-h-[44px] items-center gap-[6px] text-[16px] font-medium text-ink no-underline hover:text-gold-700"
                  >
                    List your support
                    <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <Link
                    href="/discover"
                    className="inline-flex min-h-[44px] items-center text-[16px] font-medium text-ink no-underline hover:text-gold-700"
                  >
                    Who is already listed
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-hairline-soft pt-8">
          <p className="m-0 max-w-[76ch] text-[14px] leading-[1.6] text-ink-60">
            Every organisation here is checked against a public register or its
            funder before it can post. Nobody pays to appear, and what you type
            is used to rank your results. It is never sold, passed on, or used to
            build a profile of you.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-[14px] text-ink-60">
              © {year} The Holistic Wellbeing Summit
            </span>

            <Link
              href="/help"
              className="inline-flex min-h-[44px] items-center text-[14px] font-bold text-ink no-underline hover:text-gold-700"
            >
              Talk to a person
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
