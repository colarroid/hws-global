"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { NextButton } from "@/components/find/NextButton";

/**
 * Shown before she types, not after. These are the five most common ways
 * women describe why they are here, in the words they use rather than ours.
 */
const COMMON_NEEDS = [
  "getting back to work after caring for someone",
  "starting my own business",
  "finding money for a course",
  "changing career",
  "meeting people near me",
];

export function NeedForm({ initialNeed }: { initialNeed: string }) {
  const router = useRouter();
  const [need, setNeed] = useState(initialNeed);
  const [blankAttempt, setBlankAttempt] = useState(false);
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const alertId = useId();

  useEffect(() => {
    areaRef.current?.focus();
  }, []);

  const text = need.trim();
  const ready = text.length > 0;

  function go() {
    if (!ready) {
      // The button is marked disabled, but people tap it anyway. Saying why
      // is better than doing nothing, and silence reads as a broken page.
      setBlankAttempt(true);
      areaRef.current?.focus();
      return;
    }
    router.push(`/find/where?need=${encodeURIComponent(text)}`);
  }

  /**
   * A suggestion fills the box rather than searching straight away.
   *
   * She can see the kind of thing that belongs here, and change it before
   * committing. For someone unsure what to type, having the words appear and
   * stay editable teaches more than being taken to results immediately.
   */
  function applySuggestion(suggestion: string) {
    setNeed(suggestion);
    setBlankAttempt(false);
    const area = areaRef.current;
    if (area) {
      area.focus();
      // Caret to the end, so typing continues her sentence.
      requestAnimationFrame(() =>
        area.setSelectionRange(suggestion.length, suggestion.length),
      );
    }
  }

  return (
    <div className="flex flex-col gap-7">
      {blankAttempt && !ready ? (
        <p
          id={alertId}
          role="alert"
          className="m-0 rounded-control border border-gold-300 bg-gold-200 px-4 py-3 text-[16px] leading-[1.5] text-gold-700"
        >
          Add a few words so we know where to look.
        </p>
      ) : null}

      <div className="flex flex-col gap-2">
        <label htmlFor="need" className="sr-only">
          What do you need help with?
        </label>
        <textarea
          id="need"
          ref={areaRef}
          rows={3}
          value={need}
          aria-describedby={blankAttempt && !ready ? alertId : undefined}
          onChange={(e) => {
            setNeed(e.target.value);
            if (blankAttempt) setBlankAttempt(false);
          }}
          placeholder="e.g. getting back to work after caring for my mum"
          className="resize-y rounded-control shadow-hairline bg-surface p-[18px] text-[18px] leading-[1.5] text-ink"
        />
        {ready ? (
          <span className="text-[14px] leading-[1.5] text-ink-60">
            We&apos;ll search on what you wrote.
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-ink-60">
          Suggestions
        </span>
        <div className="flex flex-wrap gap-[10px]">
          {COMMON_NEEDS.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => applySuggestion(suggestion)}
              className="min-h-[44px] rounded-full shadow-hairline bg-surface px-[18px] py-3 text-left text-[16px] text-ink transition-[color,background-color,box-shadow] duration-150 ease-out hover:shadow-hairline-gold"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      <NextButton
        ready={ready}
        onNext={go}
        hint="Add a few words, or pick one of the suggestions above."
      />
    </div>
  );
}
