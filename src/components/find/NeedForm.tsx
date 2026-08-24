"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

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
  const [showEmptyHint, setShowEmptyHint] = useState(false);
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    areaRef.current?.focus();
  }, []);

  function go(value: string) {
    const text = value.trim();
    if (!text) {
      // Never a red border. An inline message, and focus moved to it.
      setShowEmptyHint(true);
      requestAnimationFrame(() => hintRef.current?.focus());
      return;
    }
    router.push(`/find/where?need=${encodeURIComponent(text)}`);
  }

  return (
    <div className="flex flex-col gap-7">
      {showEmptyHint ? (
        <p
          ref={hintRef}
          tabIndex={-1}
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
          onChange={(e) => {
            setNeed(e.target.value);
            if (showEmptyHint) setShowEmptyHint(false);
          }}
          placeholder="e.g. getting back to work after caring for my mum"
          className="resize-y rounded-control border-[1.5px] border-ink bg-surface p-[18px] text-[18px] leading-[1.5] text-ink"
        />
        {need.trim() ? (
          <span className="text-[14px] leading-[1.5] text-ink-60">
            We&apos;ll search on what you wrote.
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-60">
          Suggestions
        </span>
        <div className="flex flex-wrap gap-[10px]">
          {COMMON_NEEDS.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => go(suggestion)}
              className="min-h-[44px] rounded-full border border-ring bg-surface px-[18px] py-3 text-[16px] text-ink hover:border-gold-500"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Next always proceeds. Nothing nags. */}
      <Button onClick={() => go(need)}>Next</Button>
    </div>
  );
}
