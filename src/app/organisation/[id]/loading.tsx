import { LoadingBlock, LoadingFrame } from "@/components/ui/LoadingScreen";

/**
 * An organisation profile, waiting.
 *
 * Follows the real page: white above, the cream band below, the reading
 * column with the facts panel beside it. The two grounds are what the profile
 * is, so a wait that showed one flat colour would make the page look like it
 * rebuilt itself the moment it arrived.
 *
 * The blocks in the cream band are white, because that is what lands there.
 */
export default function Loading() {
  return (
    <LoadingFrame label="Loading this organisation">
      <div className="flex flex-1 flex-col bg-surface">
        <div
          className="mx-auto flex w-full max-w-[1080px] flex-col px-5 pb-16 pt-12 sm:px-10 sm:pt-14"
          aria-hidden="true"
        >
          <div className="flex flex-wrap items-start gap-5 sm:gap-6">
            <LoadingBlock index={0} height={84} className="w-[84px] shrink-0" />
            <div className="flex min-w-[260px] flex-1 flex-col gap-3">
              <LoadingBlock index={1} height={44} className="w-[70%]" />
              <LoadingBlock index={2} height={16} className="w-[46%]" />
            </div>
          </div>

          <div className="mt-8 grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="flex flex-col gap-[14px]">
              <LoadingBlock index={0} height={150} />
              <LoadingBlock index={1} height={120} />
            </div>
            <LoadingBlock index={2} height={240} />
          </div>
        </div>

        <div className="flex flex-1 flex-col border-t border-hairline bg-ground">
          <div
            className="mx-auto flex w-full max-w-[1080px] flex-col gap-[14px] px-5 py-14 sm:px-10 sm:py-16"
            aria-hidden="true"
          >
            <LoadingBlock height={110} tone="bg-surface shadow-hairline" />
            <LoadingBlock height={110} tone="bg-surface shadow-hairline" />
          </div>
        </div>
      </div>
    </LoadingFrame>
  );
}
