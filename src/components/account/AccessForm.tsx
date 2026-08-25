"use client";

import { useActionState } from "react";
import { Field } from "@/components/ui/Field";
import { FormError, SubmitButton } from "@/components/ui/Form";
import { sendCode, type FormState } from "@/app/account/actions";

export function AccessForm() {
  const [state, formAction] = useActionState<FormState, FormData>(
    sendCode,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-[22px]">
      <FormError message={state?.error} />
      <Field
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        emphasis
        required
      />
      <SubmitButton>Send me a sign-in code</SubmitButton>
    </form>
  );
}
