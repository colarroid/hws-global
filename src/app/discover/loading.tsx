import { LoadingBlock, LoadingFrame } from "@/components/ui/LoadingScreen";

/**
 * Discover, waiting.
 *
 * The dark band is the one part of this page that is not fetched, so it is
 * drawn for real rather than blocked out. Keeping it means the page does not
 * appear to change colour when the content lands, and on a slow connection
 * that flip is what makes a site feel like it is fighting you.
 *
 * Below it, the grid the zone cards land in.
 */
export default function Loading() {
  return (
    <LoadingFrame label="Loading organisations">
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
        <div className="flex flex-col gap-4">
          <LoadingBlock index={0} height={34} className="w-[38%]" />
          <LoadingBlock index={1} height={16} className="w-[54%]" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <LoadingBlock key={index} index={index} height={150} />
          ))}
        </div>
      </section>
    </LoadingFrame>
  );
}
