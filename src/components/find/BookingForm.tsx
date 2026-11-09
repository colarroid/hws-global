"use client";

import { useActionState } from "react";
import { Field } from "@/components/ui/Field";
import { FormError, SubmitButton } from "@/components/ui/Form";
import { makeBooking, type BookingState } from "@/app/talk/actions";
import { useT } from "@/lib/i18n/client";

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
  const t = useT();
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
        label={t("booking.name")}
        name="name"
        autoComplete="name"
        placeholder={t("booking.nameNote")}
        required
      />

      <Field
        label={t("booking.email")}
        name="email"
        type="email"
        autoComplete="email"
        defaultValue={email}
        placeholder="you@example.com"
        required
        hint={t("booking.emailNote")}
      />

      <Field
        label={t("booking.phone")}
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder={t("booking.optional")}
        hint={t("booking.phoneNote")}
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="note" className="text-[15px] font-semibold">
          {t("booking.notes")}
        </label>
        <textarea
          id="note"
          name="note"
          rows={3}
          maxLength={2000}
          placeholder={t("booking.notesNote")}
          className="rounded-control bg-surface p-[14px] text-[16px] leading-[1.5] text-ink shadow-hairline outline-none placeholder:text-ink-60"
        />
      </div>

      <SubmitButton>{t("booking.submit")}</SubmitButton>
    </form>
  );
}
