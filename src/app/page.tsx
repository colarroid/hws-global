import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

/**
 * The landing page.
 *
 * Deliberately almost empty. Most traffic arrives from a search engine, and
 * the handoff is blunt about the consequence: if the invitation to search
 * sits below the fold, the platform is a directory to everyone who finds it
 * through Google. So there is one thing on this page, and it is the way in.
 *
 * No sign-in prompt anywhere near it. No account is ever required to search,
 * read or apply.
 *
 * Discover sits under the button rather than beside it. It is the answer for
 * a woman who cannot yet name what she needs, which is a real case and a
 * smaller one than the case for typing it.
 */
export default function Landing() {
  return (
    <div className="flex flex-1 items-center justify-center px-5 py-24 sm:px-10">
      <div className="flex w-full max-w-[660px] flex-col items-start gap-7">
        <h1 className="m-0 font-display text-[34px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[52px]">
          Find support for women in Scotland
        </h1>
        <p className="m-0 max-w-[52ch] text-[18px] leading-[1.6] text-ink-70">
          Tell us what you need in your own words, and we will show you a few
          next steps worth taking. Three questions, no account needed.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href="/find" size="inline" className="px-9 py-[19px] text-[18px]">
            Find solution
          </ButtonLink>
          {/* Second, and quieter. Searching is the front door for almost
              everybody; browsing is for the woman who cannot yet name what
              she needs, and offering it as an equal would slow the rest. */}
          <Link
            href="/discover"
            className="inline-flex min-h-[44px] items-center gap-2 p-1 text-[17px] font-bold text-gold-700 no-underline"
          >
            Or see who is out there
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
