"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import networking from "@/images/summit-networking.webp";
import speakers from "@/images/summit-speakers.webp";
import tablet from "@/images/summit-tablet.webp";
import audience from "@/images/summit-audience.webp";

/** How long a photograph holds before the next one comes up. */
const DWELL = 5000;

/**
 * Photographs from the Holistic Wellbeing Summit.
 *
 * These are the summit's own pictures, watermarked, of women who were in the
 * room. Worth saying plainly because it is the thing that makes the section
 * work: the argument beside them is that this platform is that room kept
 * open, and a stock photograph of a woman at a laptop would say the opposite
 * of that while looking similar.
 *
 * TWO THINGS TO CHECK BEFORE LAUNCH, both about the women in the frame
 * rather than the code:
 *
 *   * Consent. Everybody here is identifiable, and the ordinary event
 *     photography permission an attendee gives is for the summit, not
 *     necessarily for the front page of a support platform. It is very
 *     likely covered and it is HWS's call, but it should be a decision
 *     somebody made rather than one that happened.
 *   * The alt text below is English in all nine languages. A photograph
 *     described in a language she does not read is not much better than one
 *     that is not described, so these belong in messages.ts if anybody is
 *     doing a translation pass. They are here rather than there because
 *     four more keys across nine catalogues was the wrong trade to make
 *     without a speaker for any of them.
 */
const FRAMES = [
  {
    image: networking,
    alt: "Women talking in small groups between sessions at the Holistic Wellbeing Summit.",
  },
  {
    image: speakers,
    alt: "Speakers, panellists and volunteers standing together in front of the summit's sponsor board.",
  },
  {
    image: tablet,
    alt: "Two women comparing something on a tablet and a phone during the summit.",
  },
  {
    image: audience,
    alt: "A woman listening from the floor during one of the sessions.",
  },
];

/**
 * The photographs, one at a time.
 *
 * Built like the quote slider and for the same reasons: every frame is
 * rendered and stacked so the block never changes height, it advances on its
 * own because one nobody notices is one nobody presses, and it stops the
 * moment it is hovered, focused, or the tab goes to the background.
 *
 * It differs in one place. The quotes are staggered because two serif
 * paragraphs in the same spot are unreadable while both are on screen;
 * photographs are not, so these cross-fade, which is what a cross-fade is
 * actually for.
 *
 * Dots and no arrows. The quote slider has both because a quote is read in
 * sequence and somebody who missed a line wants the one before it. Nobody
 * reads a photograph backwards.
 */
export function SummitPhotos() {
  const [at, setAt] = useState(0);
  const [held, setHeld] = useState(false);
  const count = FRAMES.length;

  useEffect(() => {
    if (held) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (still.matches) return;

    const timer = window.setInterval(() => {
      // A tab in the background should not be cycling: she comes back to a
      // photograph that changed while she was not looking.
      if (document.hidden) return;
      setAt((n) => (n + 1) % count);
    }, DWELL);

    return () => window.clearInterval(timer);
  }, [count, held]);

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Photographs from the Holistic Wellbeing Summit"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
      className="relative aspect-[3/2] w-full overflow-hidden bg-ink/5 lg:aspect-auto lg:h-full"
    >
      {/* 3:2 on a phone, which is the shape the camera gave them, and the
          height of its half of the section on a wide screen — where the
          frame comes out near square and object-cover keeps the middle 70
          percent or so of each. That is a real crop, and it is the price of
          the photograph reaching the edge of the screen rather than sitting
          in a card. It also takes the watermark off the right edge, which is
          what the caption further down is for. */}
      <div className="absolute inset-0">
        {FRAMES.map((frame, index) => (
          <Image
            key={frame.image.src}
            src={frame.image}
            alt={frame.alt}
            aria-hidden={index === at ? undefined : true}
            fill
            // Only the first carries a blur placeholder. All four are in the
            // DOM from the start, so the other three would be three more
            // base64 blobs in the HTML for a shimmer nobody is looking at.
            placeholder={index === 0 ? "blur" : "empty"}
            // Half the viewport on a wide screen and all of it below that,
            // which is now literally true: the frame is a grid half that
            // runs to the edge of the screen, not a box inside a container.
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none ${
              index === at ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* The dots are on the photograph now rather than under it, because
          there is no longer an "under it" — the frame runs to the bottom of
          the section. This is what pays for that: enough shading in the last
          fifth to hold a white dot over whatever the picture is doing down
          there, and nothing at all above it.

          The caption beside them is back, and only from lg up, which is a
          consequence of the crop rather than a design preference. Every one
          of these carries the summit's watermark in its bottom right corner.
          A phone shows the whole 3:2 frame, so the watermark is there and a
          caption would be the same credit twice. A wide screen keeps about
          72 percent of the width, and the watermark sits in the outer three,
          so it is cut off and the credit has to be set in type instead. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(18,9,2,0)_0%,rgba(18,9,2,0.55)_100%)]"
      />

      {/* Each dot is its own control, so the photographs can be reached in
          any order. The button is padded well past the dot it draws and
          pulls the padding back out of the layout, because a 7px target is
          not a target on a phone. */}
      <div className="absolute bottom-5 left-5 flex items-center gap-1 sm:bottom-7 sm:left-10">
        <div className="flex items-center gap-1">
        {FRAMES.map((frame, index) => (
          <button
            key={frame.image.src}
            type="button"
            onClick={() => setAt(index)}
            aria-label={`Photograph ${index + 1} of ${count}`}
            aria-current={index === at ? "true" : undefined}
            className="-my-[18px] -mx-1 px-1 py-[18px]"
          >
            <span
              className={`block h-[7px] rounded-full transition-[width,background-color] duration-300 ease-out ${
                index === at ? "w-7 bg-white" : "w-[7px] bg-white/50"
              }`}
            />
          </button>
        ))}
        </div>

        {/* A proper noun, so it is not translated and does not need a key. */}
        <span className="eyebrow ml-5 hidden text-white/85 lg:inline">
          The Holistic Wellbeing Summit
        </span>
      </div>

      <div aria-live="polite" className="sr-only">
        {`Photograph ${at + 1} of ${count}`}
      </div>
    </div>
  );
}
