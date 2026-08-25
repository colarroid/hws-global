"use client";

import { useActionState } from "react";
import { Field } from "@/components/ui/Field";
import { FormError, SubmitButton } from "@/components/ui/Form";
import { saveProfile, type FormState } from "@/app/account/actions";
import type { Account } from "@/lib/data/account";

export function ProfileForm({ account }: { account: Account }) {
  const [state, formAction] = useActionState<FormState, FormData>(
    saveProfile,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-[22px]">
      <FormError message={state?.error} />

      <div className="flex flex-wrap gap-[14px]">
        <div className="min-w-[180px] flex-1">
          <Field
            label="First name"
            name="firstName"
            autoComplete="given-name"
            placeholder="First name"
            defaultValue={account.firstName ?? ""}
          />
        </div>
        <div className="min-w-[180px] flex-1">
          {/* The approved screen labelled this "First name" as well. */}
          <Field
            label="Last name"
            name="lastName"
            autoComplete="family-name"
            placeholder="Last name"
            defaultValue={account.lastName ?? ""}
          />
        </div>
      </div>

      {/* Kept by decision, and explained: an unexplained request for a phone
          number is exactly what loses a woman promised we ask for nothing. */}
      <Field
        label="Phone number (optional)"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="Phone number"
        defaultValue={account.phone ?? ""}
        hint="We only use this if you ask us to call you back."
      />

      <SubmitButton>Continue</SubmitButton>
    </form>
  );
}
