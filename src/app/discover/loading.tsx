import { SkeletonCard, SkeletonLine } from "@/components/ui/Skeleton";

/**
 * Discover, waiting.
 *
 * The dark band is the one part of this page that is not fetched, so it is
 * drawn for real rather than blocked out. Keeping it means the page does not
 * appear to change colour when the content lands, which on a slow connection
 * is the thing that makes a site feel like it is fighting you.
 */
export default function Loading() {
  return (
    <div className="flex flex-1 flex-col">
      <span role="status" aria-live="polite" className="sr-only">
        Loading organisations
      </span>

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

      <section
        className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-10 sm:py-16"
        aria-hidden="true"
      >
        <div className="flex flex-col gap-3">
          <SkeletonLine width="42%" height={30} />
          <SkeletonLine width="58%" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} lines={2} />
          ))}
        </div>
      </section>
    </div>
  );
}
