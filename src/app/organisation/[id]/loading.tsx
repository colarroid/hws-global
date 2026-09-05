import { LoadingBlock } from "@/components/ui/LoadingScreen";

/**
 * An organisation profile, waiting.
 *
 * Like Discover, it does not use the shared component whole: the profile is
 * white above and cream below, and those two grounds are what the page is. A
 * wait that showed one flat colour would make the page look like it rebuilt
 * itself the moment it arrived.
 *
 * Everything else is the same as every other wait here. The name of what is
 * being fetched, blocks in the site's colours, and how long it usually takes.
 */
export default function Loading() {
  return (
    <div className="flex flex-1 flex-col bg-surface">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-8 px-5 pb-16 pt-12 sm:px-10 sm:pt-14">
        <h1
          aria-live="polite"
          className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[44px] sm:leading-[1.1]"
        >
          Opening this organisation…
        </h1>

        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="flex flex-col gap-[14px]">
            <LoadingBlock index={0} height={150} />
            <LoadingBlock index={1} height={120} />
          </div>
          <LoadingBlock index={2} height={240} />
        </div>

        <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
          This usually takes a couple of seconds.
        </p>
      </div>

      <div className="flex flex-1 flex-col border-t border-hairline bg-ground">
        <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-[14px] px-5 py-14 sm:px-10 sm:py-16">
          <LoadingBlock height={110} tone="bg-surface shadow-hairline" />
          <LoadingBlock height={110} tone="bg-surface shadow-hairline" />
        </div>
      </div>
    </div>
  );
}
