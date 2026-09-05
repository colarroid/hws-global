"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { Button } from "@/components/ui/Button";
import { FormError } from "@/components/ui/Form";
import {
  confirmEmailChange,
  resendEmailChange,
} from "@/app/account/actions";

const COOLDOWN = 60;
const ATTEMPTS_BEFORE_WAIT = 3;
const MIN_CODE = 6;
const MAX_CODE = 8;
const SETTLE_MS = 700;

/**
 * Passcode entry for the address change.
 *
 * Deliberately the same component as signing in, down to the self-submit on a
 * pause and the minute's wait after three wrong codes. A woman who has signed
 * in here before has typed a code into this exact field, and giving the same
 * job a second, subtly different control is how a familiar flow starts
 * feeling unfamiliar.
 *
 * It is a copy rather than a shared component because the two differ in what
 * they call and what they say on failure, and folding both into one would
 * mean a component that takes a server action as a prop and reads worse than
 * either.
 */
export function EmailChangeCodeForm({ email }: { email: string }) {
  const [error, setError] = useState<string | undefined>();
  const [pending, startVerify] = useTransition();
  const [code, setCode] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [lockedFor, setLockedFor] = useState(0);
  const [cooldown, setCooldown] = useState(COOLDOWN);
  const [resent, setResent] = useState(false);
  const [resending, startResend] = useTransition();

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const settleRef = useRef<number | undefined>(undefined);
  const hintId = useId();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((n) => n - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  useEffect(() => {
    if (lockedFor <= 0) return;
    const timer = setTimeout(() => setLockedFor((n) => n - 1), 1000);
    return () => clearTimeout(timer);
  }, [lockedFor]);

  function submit(formData: FormData) {
    startVerify(async () => {
      const result = await confirmEmailChange(null, formData);
      if (!result?.error) return;

      setError(result.error);
      setCode("");
      const next = attempts + 1;
      setAttempts(next);
      if (next >= ATTEMPTS_BEFORE_WAIT) setLockedFor(COOLDOWN);
    });
  }

  const locked = lockedFor > 0;

  function onChange(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, MAX_CODE);
    setCode(digits);

    clearTimeout(settleRef.current);
    if (digits.length >= MIN_CODE && !locked && !pending) {
      settleRef.current = window.setTimeout(
        () => formRef.current?.requestSubmit(),
        SETTLE_MS,
      );
    }
  }

  return (
    <>
      <form ref={formRef} action={submit} className="flex flex-col gap-[22px]">
        <FormError message={locked ? undefined : error} />

        {locked ? (
          <p
            role="alert"
            className="m-0 rounded-control border border-red-200 bg-red-50 px-4 py-3 text-[15px] leading-[1.5] text-red-700"
          >
            That&apos;s three wrong codes. Wait {lockedFor}{" "}
            {lockedFor === 1 ? "second" : "seconds"} and try again, or ask for a
            new code below.
          </p>
        ) : null}

        <input type="hidden" name="email" value={email} />

        <div className="flex flex-col gap-2">
          <label htmlFor="code" className="text-[15px] font-semibold">
            The code we sent
          </label>
          <input
            id="code"
            ref={inputRef}
            name="code"
            value={code}
            onChange={(e) => onChange(e.target.value)}
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="[0-9]*"
            maxLength={MAX_CODE}
            placeholder="000000"
            disabled={locked}
            aria-describedby={hintId}
            className="rounded-control shadow-hairline bg-surface p-[18px] text-center text-[28px] font-semibold tracking-[0.4em] text-ink tabular-nums disabled:opacity-40"
          />
          <span id={hintId} className="text-[14px] leading-[1.5] text-ink-60">
            The code works for 15 minutes.
          </span>
        </div>

        <Button
          type="submit"
          disabled={locked || pending || code.length < MIN_CODE}
        >
          {pending ? "Checking…" : "Move my account across"}
        </Button>
      </form>

      <div aria-live="polite" className="text-[15px] text-ink-60">
        {resent ? (
          <span>New code sent. It can take a minute to arrive.</span>
        ) : cooldown > 0 ? (
          <span>
            Nothing arrived? You can ask for a new code in {cooldown}{" "}
            {cooldown === 1 ? "second" : "seconds"}.
          </span>
        ) : (
          <>
            Nothing arrived?{" "}
            <button
              type="button"
              disabled={resending}
              onClick={() =>
                startResend(async () => {
                  await resendEmailChange(email);
                  setResent(true);
                  setError(undefined);
                  setAttempts(0);
                  setLockedFor(0);
                  setCooldown(COOLDOWN);
                })
              }
              className="cursor-pointer border-0 bg-transparent p-1 text-[15px] font-bold text-gold-700 hover:underline disabled:opacity-40"
            >
              Send a new code
            </button>
          </>
        )}
      </div>
    </>
  );
}
