"use client";

import { useActionState } from "react";
import { Field } from "@/components/ui/Field";
import { FormError, SubmitButton } from "@/components/ui/Form";
import { makeBooking, type BookingState } from "@/app/talk/actions";

/**
 * Who to call, and anything she wants said before the call.
 *
 * Two asked for, two offered. A name and an email are the least that makes a
 * call possible. The phone number is optional because she may prefer to be
 * emailed a number to ring rather than have one appear on her phone, and on
 * this platform that is a safety consideration rather than a preference.
 *
 * Her search travels in hidden fields rather than being read from the session
 * or looked up again. It arrived in the URL, it goes back the way it came,
 * and there is nothing stored anywhere between the two pages.
 */
export function BookingForm({
  slot,
  need,
  place,
  situations,
  email,
}: {
  slot: string;
  need: string;
  place: string;
  situations: string;
  /** Filled in already when she is signed in. */
  email: string;
}) {
  const [state, formAction] = useActionState<BookingState, FormData>(
    makeBooking,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-[22px]">
      <FormError message={state?.error} />

      <input type="hidden" name="slot" value={slot} />
      <input type="hidden" name="need" value={need} />
      <input type="hidden" name="place" value={place} />
      <input type="hidden" name="situations" value={situations} />

      <Field
        label="Your name"
        name="name"
        autoComplete="name"
        placeholder="What you would like to be called"
        required
      />

      <Field
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        defaultValue={email}
        placeholder="you@example.com"
        required
        hint="We send the time here, with a calendar file you can tap."
      />

      <Field
        label="Phone number"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="Optional"
        hint="Only if you would rather we rang you than emailed you."
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="note" className="text-[15px] font-semibold">
          Anything you want us to know first
        </label>
        <textarea
          id="note"
          name="note"
          rows={3}
          maxLength={2000}
          placeholder="Optional. Nobody reads this but the person who calls you."
          className="rounded-control bg-surface p-[14px] text-[16px] leading-[1.5] text-ink shadow-hairline outline-none placeholder:text-ink-60"
        />
      </div>

      <SubmitButton>Book this time</SubmitButton>
    </form>
  );
}
