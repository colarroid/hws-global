import type { Metadata } from "next";
import { getTranslator } from "@/lib/i18n";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { translatedMetadata } from "@/lib/seo";
import { getFreeDays } from "@/lib/data/booking";

export function generateMetadata(): Promise<Metadata> {
  return translatedMetadata({
    titleKey: "talk.title",
    descriptionKey: "meta.talk.desc",
    path: "/talk",
  });
}

/**
 * Choosing a time.
 *
 * A list of days with a row of times under each, rendered on the server. Not
 * a month grid: a grid is mostly empty squares she cannot press, and on a
 * phone it is the empty squares that get the space. Days with nothing free
 * are not shown at all, so everything on this page is a thing she can have.
 *
 * Every time is a link rather than a control, so the choice survives a back
 * button and works with no JavaScript at all. Her answers travel in the query
 * string, which is how the person who calls her already knows what she was
 * looking for.
 *
 * Nothing is held when she presses one. Two women can be looking at the same
 * eleven o'clock, and the database settles it at the moment of booking rather
 * than this page pretending to reserve something it cannot.
 */
export default async function TalkPage({
  searchParams,
}: {
  searchParams: Promise<{ need?: string; place?: string; situations?: string }>;
}) {
  const [context, days, { t, fmt }] = await Promise.all([
    searchParams,
    getFreeDays(),
    getTranslator(),
  ]);

  const carry = new URLSearchParams(
    Object.entries({
      need: context.need ?? "",
      place: context.place ?? "",
      situations: context.situations ?? "",
    }).filter(([, v]) => v) as [string, string][],
  );

  return (
    <Page width={720} top={56} gap={28}>
      <Link
        href="/help"
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        {t("talk.otherWays")}
      </Link>

      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
          {t("talk.pickTime")}
        </h1>
        <p className="m-0 max-w-[56ch] text-[18px] leading-[1.6] text-ink-70">
          {t("talk.pickBody")}
        </p>
      </div>

      {days.length === 0 ? (
        /* Said plainly rather than shown as an empty calendar. A page of
           nothing reads as broken, and this is not broken: there is simply
           nothing open in the next three weeks. */
        <div className="flex flex-col items-start gap-3 rounded-card bg-surface p-6 shadow-hairline">
          <span className="font-display text-[20px] font-normal">
            {t("talk.noneTitle")}
          </span>
          <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink-70">
            {t("talk.noneBody")}
          </p>
          <Link
            href="/help"
            className="inline-flex min-h-[44px] items-center rounded-control bg-ink px-6 py-[14px] text-[16px] font-bold text-white no-underline"
          >
            {t("talk.otherWays")}
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-7">
          {days.map((day) => (
            <section key={day.date} className="flex flex-col gap-3">
              <h2 className="m-0 font-display text-[20px] font-normal leading-[1.3] text-ink">
                {fmt.dayWithWeekday(day.slots[0].at)}
              </h2>
              <div className="flex flex-wrap gap-[10px]">
                {day.slots.map((slot) => {
                  const query = new URLSearchParams(carry);
                  query.set("slot", slot.at);
                  return (
                    <Link
                      key={slot.at}
                      href={`/talk/confirm?${query}`}
                      className="inline-flex min-h-[44px] items-center rounded-pill-sm bg-surface px-[18px] py-[11px] text-[16px] font-semibold text-ink no-underline shadow-hairline transition-[box-shadow] duration-150 ease-out hover:shadow-hairline-gold"
                    >
                      {fmt.timeOfDay(slot.at)}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      <p className="m-0 border-t border-hairline pt-6 text-[15px] leading-[1.6] text-ink-60">
        {t("talk.ukTime")}{" "}
        <Link href="/help" className="font-bold text-gold-700">
          {t("talk.todayInstead")}
        </Link>
      </p>
    </Page>
  );
}
