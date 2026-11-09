"use client";

import { useActionState } from "react";
import { useT } from "@/lib/i18n/client";
import { Field } from "@/components/ui/Field";
import { FormError, SubmitButton } from "@/components/ui/Form";
import { saveProfile, type FormState } from "@/app/account/actions";
import type { Account } from "@/lib/data/account";

export function ProfileForm({ account }: { account: Account }) {
  const t = useT();
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
            label={t("form.firstName")}
            name="firstName"
            autoComplete="given-name"
            placeholder={t("form.firstName")}
            defaultValue={account.firstName ?? ""}
          />
        </div>
        <div className="min-w-[180px] flex-1">
          {/* The approved screen labelled this "First name" as well. */}
          <Field
            label={t("form.lastName")}
            name="lastName"
            autoComplete="family-name"
            placeholder={t("form.lastName")}
            defaultValue={account.lastName ?? ""}
          />
        </div>
      </div>

      {/* Kept by decision, and explained: an unexplained request for a phone
          number is exactly what loses a woman promised we ask for nothing. */}
      <Field
        label={t("form.phoneOptional")}
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder={t("booking.phone")}
        defaultValue={account.phone ?? ""}
        hint={t("form.phoneNote")}
      />

      <SubmitButton>{t("form.continue")}</SubmitButton>
    </form>
  );
}
