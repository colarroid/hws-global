"use client";

import { useId } from "react";
import { Button } from "@/components/ui/Button";

/**
 * The Next control the three questions share.
 *
 * It uses aria-disabled rather than the disabled attribute, so the control
 * stays in the tab order. A truly disabled button is skipped entirely, which
 * leaves a keyboard or screen reader user at the end of the page with no idea
 * the way forward exists or why it is not working.
 *
 * The hint is always visible while the button is inactive, and it names the
 * way through rather than restating the problem. That is the whole job of
 * this component: an inactive button with no route out of it is a wall, and
 * the women most likely to hit one here are the ones with the least patience
 * left for a website.
 */
export function NextButton({
  ready,
  onNext,
  hint,
  label = "Next",
}: {
  ready: boolean;
  /** Called on every press. Handle the not-ready case yourself. */
  onNext: () => void;
  /**
   * Shown while inactive. Say what to do, not what is wrong.
   *
   * Optional, because question one no longer carries one: the box is the
   * only thing on that screen and the suggestions sit right above the
   * button, so a line saying to use them was restating the screen. Pressing
   * Next while it is empty still answers in the alert at the top, which is
   * where somebody who needs telling actually is.
   */
  hint?: string;
  label?: string;
}) {
  const hintId = useId();

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={onNext}
        aria-disabled={!ready}
        aria-describedby={!ready && hint ? hintId : undefined}
        className={!ready ? "opacity-40" : undefined}
      >
        {label}
      </Button>
      {!ready && hint ? (
        <span id={hintId} className="text-[14px] leading-[1.5] text-ink-60">
          {hint}
        </span>
      ) : null}
    </div>
  );
}
