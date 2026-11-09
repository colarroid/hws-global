"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Globe, MapPin } from "lucide-react";
import { NextButton } from "@/components/find/NextButton";
import { useT } from "@/lib/i18n/client";

type Match = { name: string; note: string; value: string };

/*
 * The two escapes travel in the URL as English, and are translated only
 * where they are drawn.
 *
 * They end up in `?place=`, which the ranker reads and which she may share
 * or come back to. A link made in Arabic has to still mean "anywhere in
 * Scotland" when it is opened in English, so the value is the constant and
 * the label is the translation.
 */
const ESCAPE = "Anywhere in Scotland";
const ONLINE = "Online support only";

export function PlaceForm({
  need,
  initialPlace,
}: {
  need: string;
  initialPlace: string;
}) {
  const t = useT();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [place, setPlace] = useState(initialPlace);
  const [matches, setMatches] = useState<Match[]>([]);
  const [searched, setSearched] = useState(false);

  const query = place.trim();
  const longEnough = query.length >= 2;

  // Matches refresh after a typing pause rather than per keystroke, which
  // matters on the older Android hardware this is built for.
  useEffect(() => {
    if (!longEnough) return;

    let live = true;
    const timer = setTimeout(async () => {
      const response = await fetch(`/api/places?q=${encodeURIComponent(query)}`);
      if (!response.ok || !live) return;
      const found: Match[] = await response.json();
      if (!live) return;
      setMatches(found);
      setSearched(true);
    }, 250);

    return () => {
      live = false;
      clearTimeout(timer);
    };
  }, [query, longEnough]);

  // Derived rather than cleared in the effect: below two characters there is
  // nothing to show, whatever the last request happened to return.
  const visible = longEnough ? matches : [];

  function go(value: string) {
    const chosen = value.trim();
    if (!chosen) {
      inputRef.current?.focus();
      return;
    }
    const params = new URLSearchParams({ need, place: chosen });
    router.push(`/find/situation?${params}`);
  }

  const unrecognised = searched && longEnough && visible.length === 0;

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <label htmlFor="place" className="sr-only">
          {t("q2.title")}
        </label>
        <input
          id="place"
          ref={inputRef}
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder={t("q2.placeholder")}
          autoComplete="off"
          className="rounded-control shadow-hairline bg-surface p-[18px] text-[18px] text-ink"
        />
      </div>

      {visible.length > 0 ? (
        <ul className="m-0 flex list-none flex-col divide-y divide-hairline-soft rounded-control shadow-hairline bg-surface p-0">
          {visible.map((match) => (
            <li key={`${match.name}-${match.note}`}>
              <button
                type="button"
                onClick={() => go(match.value)}
                className="flex w-full min-h-[44px] items-center gap-2 px-[18px] py-4 text-left text-[17px] text-ink"
              >
                <strong className="font-semibold">{match.name}</strong>
                <span className="text-ink-60">· {match.note}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {unrecognised ? (
        <p className="m-0 text-[16px] leading-[1.55] text-ink-70">
          {t("q2.unknown")}
        </p>
      ) : null}

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-ink-60">{t("q2.or")}</span>
        <div className="flex flex-wrap gap-[10px]">
          <button
            type="button"
            onClick={() => go(ESCAPE)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full shadow-hairline bg-surface px-[18px] py-3 text-[16px] text-ink transition-[color,background-color,box-shadow] duration-150 ease-out hover:shadow-hairline-gold"
          >
            <MapPin size={16} strokeWidth={2} aria-hidden="true" />
            {t("q2.anywhere")}
          </button>
          <button
            type="button"
            onClick={() => go(ONLINE)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full shadow-hairline bg-surface px-[18px] py-3 text-[16px] text-ink transition-[color,background-color,box-shadow] duration-150 ease-out hover:shadow-hairline-gold"
          >
            <Globe size={16} strokeWidth={2} aria-hidden="true" />
            {t("q2.onlineOnly")}
          </button>
        </div>
      </div>

      <NextButton
        ready={query.length > 0}
        onNext={() => go(place)}
        hint={t("q2.hint")}
      />
    </div>
  );
}
