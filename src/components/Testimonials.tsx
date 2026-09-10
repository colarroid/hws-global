"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import {
  MAX_TESTIMONIALS,
  type Testimonial,
} from "@/lib/design/testimonials";

/** How long a quote holds before the next one comes up. */
const DWELL = 7000;

/**
 * The quotes, one at a time.
 *
 * Every slide is rendered and stacked, with the inactive ones faded out and
 * lifted a few pixels rather than unmounted. That keeps the block the height
 * of its longest quote, so the page below does not jump as the slides change
 * — which on a landing page means the section under this one moving under
 * somebody's cursor every seven seconds.
 *
 * It advances on its own because a slider nobody notices is a slider nobody
 * presses. It stops the moment it is hovered, focused or the tab is hidden,
 * and it never starts at all under prefers-reduced-motion: an animation that
 * moves text on its own timer is exactly what that setting is for. The
 * controls work in every one of those cases.
 *
 * The live region is polite and announces only the count. Reading a whole
 * quote aloud every seven seconds would make the page unusable with a screen
 * reader, and the quotes are reachable in order through the buttons.
 */
export function Testimonials({ items }: { items: Testimonial[] }) {
  const slides = items.slice(0, MAX_TESTIMONIALS);
  const [at, setAt] = useState(0);
  const [held, setHeld] = useState(false);
  const region = useRef<HTMLDivElement>(null);

  const count = slides.length;
  const go = (next: number) => setAt(((next % count) + count) % count);

  useEffect(() => {
    if (count < 2 || held) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (still.matches) return;

    const timer = window.setInterval(() => {
      // A tab in the background should not be cycling: she comes back to a
      // quote that changed while she was not looking, and the one she was
      // reading is gone.
      if (document.hidden) return;
      setAt((n) => (n + 1) % count);
    }, DWELL);

    return () => window.clearInterval(timer);
  }, [count, held]);

  if (count === 0) return null;

  return (
    <div
      className="mt-16 sm:mt-20"
      aria-roledescription="carousel"
      aria-label="What women say"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <div className="relative overflow-hidden rounded-card px-7 py-10 shadow-hairline sm:px-12 sm:py-14">
        {/* The mark sits behind the words rather than above them, big and
            faint, so it reads as texture and not as punctuation somebody
            forgot to remove. */}
        <Quote
          size={128}
          strokeWidth={1}
          aria-hidden="true"
          className="pointer-events-none absolute -left-4 -top-6 text-gold-300/25 sm:-left-2"
        />

        {/* Stacked, not swapped: the first slide holds the height and the
            rest are laid over it. */}
        <div className="relative">
          {slides.map((slide, index) => {
            const showing = index === at;
            return (
              <figure
                key={slide.quote}
                aria-hidden={!showing}
                className={[
                  "m-0 flex flex-col gap-6 transition-[opacity,transform] ease-out motion-reduce:transition-none",
                  index === 0 ? "relative" : "absolute inset-0",
                  // Staggered rather than crossfaded. Both slides are in the
                  // same place, so fading them at the same time puts one
                  // serif paragraph over another for half a second and
                  // neither is readable. The outgoing one clears in 200ms;
                  // the incoming one waits that long before it starts.
                  showing
                    ? "translate-y-0 opacity-100 duration-500 delay-200"
                    : "pointer-events-none translate-y-2 opacity-0 duration-200 delay-0",
                ].join(" ")}
              >
                <blockquote className="m-0">
                  <p className="m-0 max-w-[54ch] font-display text-[22px] font-normal leading-[1.45] tracking-[-0.01em] text-ink sm:text-[28px]">
                    {slide.quote}
                  </p>
                </blockquote>

                <figcaption className="flex flex-col gap-1">
                  <span className="text-[16px] font-bold text-ink">
                    {slide.name}
                  </span>
                  {slide.context ? (
                    <span className="eyebrow text-gold-700">
                      {slide.context}
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {count > 1 ? (
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(at - 1)}
              aria-label="Previous quote"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink shadow-hairline transition-shadow duration-150 ease-out hover:shadow-hairline-gold"
            >
              <ArrowLeft size={17} strokeWidth={2} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(at + 1)}
              aria-label="Next quote"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink shadow-hairline transition-shadow duration-150 ease-out hover:shadow-hairline-gold"
            >
              <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          {/* Each dot is its own control rather than decoration, so the
              quotes can be reached in any order and not only in sequence. */}
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.quote}
                type="button"
                onClick={() => go(index)}
                aria-label={`Quote ${index + 1} of ${count}`}
                aria-current={index === at ? "true" : undefined}
                className={`h-[7px] rounded-full transition-[width,background-color] duration-300 ease-out ${
                  index === at
                    ? "w-7 bg-gold-500"
                    : "w-[7px] bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <div
            ref={region}
            aria-live="polite"
            className="sr-only"
          >{`Quote ${at + 1} of ${count}`}</div>
        </div>
      ) : null}
    </div>
  );
}
