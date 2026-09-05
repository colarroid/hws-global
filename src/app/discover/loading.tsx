import { LoadingBlock } from "@/components/ui/LoadingScreen";

/**
 * Discover, waiting.
 *
 * The one screen that does not use the shared component whole, because the
 * dark band at the top is not fetched. Drawing it for real means the page
 * does not appear to change colour when the content lands, and on a slow
 * connection that flip is the thing that makes a site feel like it is
 * fighting you.
 *
 * Below the band it is the same idea as everywhere else: the wait named in
 * words, then blocks in the site's own colours where the cards will be.
 */
export default function Loading() {
  return (
    <div className="flex flex-1 flex-col">
      <section
        className="bg-ink px-5 pb-16 pt-14 sm:px-10 sm:pb-20 sm:pt-20"
        aria-hidden="true"
      >
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-7">
          <span className="eyebrow text-gold-300">Discover</span>
          <h1 className="m-0 max-w-[18ch] font-display text-[38px] font-normal leading-[1.05] tracking-[-0.015em] text-white sm:text-[64px]">
            Who is working for women in Scotland
          </h1>
          <div className="h-[72px] w-full max-w-[760px] rounded-full bg-white/10 sm:h-[86px]" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-10 sm:py-16">
        <h2
          aria-live="polite"
          className="m-0 font-display text-[28px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[34px]"
        >
          Finding who is out there…
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <LoadingBlock key={index} index={index} height={150} />
          ))}
        </div>

        <p className="mt-8 text-[17px] leading-[1.6] text-ink-70">
          This usually takes a couple of seconds.
        </p>
      </section>
    </div>
  );
}
