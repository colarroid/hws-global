import { SkeletonCard, SkeletonLine } from "@/components/ui/Skeleton";

/**
 * An organisation profile, waiting.
 *
 * Follows the real page: white above, the cream band below. The two grounds
 * are what the profile is, so a wait that showed one flat colour would make
 * the page look like it rebuilt itself the moment it arrived.
 */
export default function Loading() {
  return (
    <div className="flex flex-1 flex-col bg-surface">
      <span role="status" aria-live="polite" className="sr-only">
        Loading this organisation
      </span>

      <div
        className="mx-auto flex w-full max-w-[1080px] flex-col px-5 pb-16 pt-8 sm:px-10 sm:pt-10"
        aria-hidden="true"
      >
        <div className="mt-4 flex flex-wrap items-start gap-5 sm:gap-6">
          <span className="skeleton block size-[84px] shrink-0 rounded-card" />
          <div className="flex min-w-[260px] flex-1 flex-col gap-3">
            <SkeletonLine width="70%" height={44} />
            <SkeletonLine width="48%" />
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3">
          <SkeletonLine width="90%" height={22} />
          <SkeletonLine width="62%" height={22} />
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <span className="skeleton block h-[54px] w-[210px] rounded-full" />
          <span className="skeleton block h-[54px] w-[160px] rounded-full" />
        </div>

        <div className="mt-12 grid gap-x-16 gap-y-12 border-t border-hairline pt-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="flex flex-col gap-6">
            <SkeletonLine width="26%" height={12} />
            <SkeletonLine />
            <SkeletonLine />
            <SkeletonLine width="72%" />
            <SkeletonLine width="30%" height={12} />
            <SkeletonLine width="88%" />
          </div>
          <div className="h-[240px] rounded-card border border-hairline bg-ground" />
        </div>
      </div>

      <div className="flex flex-1 flex-col border-t border-hairline bg-ground">
        <div
          className="mx-auto flex w-full max-w-[1080px] flex-col gap-4 px-5 py-14 sm:px-10 sm:py-16"
          aria-hidden="true"
        >
          <SkeletonLine width="120px" height={12} />
          {Array.from({ length: 2 }).map((_, index) => (
            <SkeletonCard key={index} lines={1} />
          ))}
        </div>
      </div>
    </div>
  );
}
