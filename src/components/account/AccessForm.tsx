"use client";

import { useActionState } from "react";
import { useT } from "@/lib/i18n/client";
import { Field } from "@/components/ui/Field";
import { FormError, SubmitButton } from "@/components/ui/Form";
import { sendCode, type FormState } from "@/app/account/actions";

export function AccessForm() {
  const t = useT();
  const [state, formAction] = useActionState<FormState, FormData>(
    sendCode,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-[22px]">
      <FormError message={state?.error} />
      <Field
        label={t("booking.email")}
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
      />
      <SubmitButton>{t("form.sendCode")}</SubmitButton>
    </form>
  );
}
