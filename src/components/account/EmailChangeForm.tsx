"use client";

import { useActionState } from "react";
import { Field } from "@/components/ui/Field";
import { FormError, SubmitButton } from "@/components/ui/Form";
import { startEmailChange, type FormState } from "@/app/account/actions";

/**
 * The same field and the same button as signing in, on purpose.
 *
 * `autoComplete="email"` rather than off: she is typing an address she owns
 * and the browser offering it is a help, not a leak.
 */
export function EmailChangeForm() {
  const [state, formAction] = useActionState<FormState, FormData>(
    startEmailChange,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-[22px]">
      <FormError message={state?.error} />
      <Field
        label="New email address"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
      />
      <SubmitButton>Send a code to the new address</SubmitButton>
    </form>
  );
}
