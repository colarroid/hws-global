import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Page } from "@/components/ui/Page";
import { ButtonLink } from "@/components/ui/Button";
import { SaveButton } from "@/components/find/SaveButton";
import { getSavedIds } from "@/lib/saved";
import { getAccount } from "@/lib/data/account";
import { getService, type Service } from "@/lib/data/service";
import { COSTS, FORMATS, SOLUTION_KINDS, labelFor } from "@/lib/design/taxonomy";

const LONG = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const DAY = 24 * 60 * 60 * 1000;

type Status =
  | { tone: "urgent"; label: string }
  | { tone: "neutral"; label: string }
  | { tone: "closed"; label: string };

/**
 * The status pill above the name, which is the hierarchy point on this
 * screen: what is about to close is read before what it is called.
 */
function statusOf(service: Service): Status {
  if (service.status === "closed") {
    return {
      tone: "closed",
      label: service.deadline
        ? `Closed ${LONG.format(new Date(service.deadline))}`
        : "No longer running",
    };
  }

  if (!service.deadline) return { tone: "neutral", label: "No closing date" };

  const days = Math.ceil(
    (new Date(service.deadline).getTime() - Date.now()) / DAY,
  );
  const when = LONG.format(new Date(service.deadline));

  if (days < 0) return { tone: "closed", label: `Closed ${when}` };
  if (days <= 14) {
    return {
      tone: "urgent",
      label: `Closes in ${days} ${days === 1 ? "day" : "days"} · ${when}`,
    };
  }
  return { tone: "neutral", label: `Closes ${when}` };
}

const TONES: Record<Status["tone"], string> = {
  urgent: "bg-red-50 text-red-700",
  neutral: "bg-gold-200 text-gold-700",
  closed: "bg-closed text-ink-65",
};

export const metadata: Metadata = { title: "Your saved list" };

/**
 * Screen 11. Your saved list.
 *
 * Ordered by what closes first, so the list does the prompting rather than a
 * badge or a nag. Closed items sink to the bottom and dim, but they never
 * disappear: a woman who saved something and came back to find it gone would
 * be right to distrust everything else here.
 *
 *
 * Signed out there is nothing to show, so this is a sign-in screen instead.
 * Saving is the one thing on the platform that needs an account; searching,
 * reading and applying still need nothing, which is the promise that matters.
 */
export default async function SavedPage() {
  const [ids, account] = await Promise.all([getSavedIds(), getAccount()]);

  if (!account) redirect("/account");

  const services = (await Promise.all(ids.map(getService))).filter(
    (s): s is Service => Boolean(s),
  );

  // Soonest deadline first; no deadline after those; closed last.
  const sorted = [...services].sort((a, b) => {
    const rank = (s: Service) =>
      s.status === "closed" ? 2 : s.deadline ? 0 : 1;
    if (rank(a) !== rank(b)) return rank(a) - rank(b);
    if (a.deadline && b.deadline) return a.deadline.localeCompare(b.deadline);
    return a.name.localeCompare(b.name);
  });

  if (sorted.length === 0) {
    return (
      <Page width={780} top={72} gap={24}>
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[44px] sm:leading-[1.1]">
          Your saved list
        </h1>
        <p className="m-0 max-w-[62ch] text-[18px] leading-[1.6] text-ink-70">
          When you find something worth coming back to, press Save on it. It
          will wait here, and we will tell you before it closes.
        </p>
        {/* Starts a fresh search rather than resuming the last one. */}
        <ButtonLink href="/find" size="inline" className="self-start px-7 py-4 text-[17px]">
          Find support
        </ButtonLink>
      </Page>
    );
  }

  return (
    <Page width={780} top={56} gap={24}>
      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[44px] sm:leading-[1.1]">
          {account.firstName ? account.firstName + "'s saved list" : "Your saved list"}
        </h1>
        <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
          {sorted.length} {sorted.length === 1 ? "thing" : "things"} saved,
          soonest to close first.
        </p>
      </div>

      <div className="flex flex-col gap-[14px]">
        {sorted.map((service) => {
          const status = statusOf(service);
          const closed = status.tone === "closed";
          const meta = [
            labelFor(SOLUTION_KINDS, service.kind),
            labelFor(COSTS, service.cost),
            ...service.formats.map((f) => labelFor(FORMATS, f)),
            service.place,
          ]
            .filter(Boolean)
            .join(" · ");

          return (
            <article
              key={service.id}
              className={`flex flex-wrap items-start justify-between gap-5 rounded-card shadow-hairline p-6 ${
                closed ? "bg-surface-subtle" : "bg-surface"
              }`}
            >
              <div className="flex flex-col gap-2">
                <span
                  className={`self-start rounded-pill-sm px-[11px] py-[7px] text-[13px] font-bold ${TONES[status.tone]}`}
                >
                  {status.label}
                </span>
                <Link
                  href={`/service/${service.id}`}
                  className="font-display text-[20px] font-normal leading-[1.3] text-ink no-underline hover:underline"
                >
                  {service.name}
                </Link>
                <span className="text-[15px] text-ink-65">
                  {service.organisationName}
                  {meta ? ` · ${meta}` : ""}
                </span>
              </div>

              <div className="flex items-center gap-[10px]">
                <ButtonLink
                  href={`/service/${service.id}`}
                  variant={closed ? "secondary" : "primary"}
                  size="inline"
                >
                  {closed ? "See what else" : "Learn more"}
                </ButtonLink>
                <SaveButton listingId={service.id} saved name={service.name} />
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-hairline pt-6">
        <ButtonLink href="/find" variant="secondary" size="inline">
          Find something else
        </ButtonLink>
        <ButtonLink href="/settings" variant="text" size="bare">
          Reminders and account settings
        </ButtonLink>
      </div>
    </Page>
  );
}
