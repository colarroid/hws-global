"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { clearPendingSave, completePendingSave } from "@/lib/saved";

export type FormState = { error?: string } | null;

const email = z
  .string()
  .trim()
  .min(1, "Add your email address.")
  .email("That doesn't look like an email address. Check it and try again.");

/**
 * Make sure the account exists before asking for a code, so that the code is
 * what actually arrives.
 *
 * This is the fix for a confusing failure. `signInWithOtp` with
 * `shouldCreateUser` does not send the Magic Link template to an address that
 * has no account: it is creating the account, so GoTrue sends **Confirm
 * signup** instead. One Supabase project means the organisation portal's
 * `signUp` uses that same template and needs a link in it, so the two flows
 * were fighting over one email, and the answer was a Go conditional on the
 * role. That worked in theory and could not be tested from this repository,
 * which is a bad combination on the screen everybody's first sign-in goes
 * through.
 *
 * Creating the account first removes the fight. A woman's address always
 * exists by the time the code is requested, so she always gets Magic Link,
 * and Confirm signup belongs entirely to the portal and can be a plain link
 * with no logic in it at all.
 *
 * No new capability and no new secret. `signInWithOtp` already created an
 * account for any address typed into that box, and the service-role client is
 * already in this deployment for the reminder job. What is new is only that
 * the account is confirmed at creation, which changes nothing she can do:
 * without the code she still cannot get in.
 *
 * "Already registered" is the normal case, not a failure: it means the
 * address is ready, which is all the caller needs to know.
 *
 * The three answers are separate because the caller has to undo this one.
 * "created" is the only case where an account exists solely because somebody
 * typed something into a box, so it is the only case that may be deleted
 * again when the code turns out to be unsendable. Deleting on "existed" would
 * close a real woman's account because her mail bounced once.
 */
type Account = { state: "ready"; created: boolean; id?: string } | { state: "unknown" };

async function ensureAccount(address: string): Promise<Account> {
  let admin;
  try {
    admin = createAdminClient();
  } catch {
    // No service-role key in this deployment, which takes the whole women's
    // sign-in down: without it we cannot guarantee the code template, and
    // sending the link template instead is the thing this function exists to
    // prevent. Logged loudly and by name, because from the outside it looks
    // like an email problem and it is a missing environment variable.
    console.error(
      "[sign-in] SUPABASE_SERVICE_ROLE_KEY is not set. No sign-in code can be sent: set it in this deployment's environment.",
    );
    return { state: "unknown" };
  }

  const { data, error } = await admin.auth.admin.createUser({
    email: address,
    email_confirm: true,
    user_metadata: { role: "woman" },
  });

  if (!error) return { state: "ready", created: true, id: data.user?.id };

  // The Supabase client returns this rather than throwing, which is the whole
  // reason this function used to get it wrong: it caught throws, saw none,
  // and reported success for every outcome including a real failure.
  //
  // email_exists is the common path — she has signed in before. The status
  // check is a belt on the braces, because the code has been renamed once
  // already and a rename here would silently turn every returning woman into
  // the "unknown" case.
  if (error.code === "email_exists" || error.status === 422) {
    return { state: "ready", created: false };
  }

  console.error(
    `[sign-in] could not confirm the account exists: ${error.status} ${error.code ?? ""} ${error.message}`,
  );
  return { state: "unknown" };
}

/** Undo an account we made a moment ago and could not send a code to. */
async function discardAccount(id: string) {
  try {
    await createAdminClient().auth.admin.deleteUser(id);
  } catch {
    // Nothing to do about it here, and nothing she needs to know. The worst
    // case is an unusable row nobody can sign in to.
  }
}

/**
 * Send her the code, and say whether one is actually on its way.
 *
 * The guarantee this exists to keep: if an email arrives, it contains a six
 * digit code. She is sent to a screen with six boxes on it, so a link in that
 * inbox is not a lesser version of the right email, it is a dead end with no
 * way back to the boxes.
 *
 * `shouldCreateUser` is what decides which template GoTrue reaches for, and
 * it is never true here. True means GoTrue is creating the account, so it
 * sends **Confirm signup** — which the organisation portal needs to be a
 * link, and which is therefore a link. That is the path that used to send a
 * woman a link: not a wrong template, a different template, reached because
 * of what this flag was set to.
 *
 * So when the address is not known to be ready, nothing is sent at all.
 *
 * THE THREE ANSWERS, and why a failure is not one thing:
 *
 *   "sent"          a code is on its way.
 *   "undeliverable" the mail server refused this recipient. GoTrue returns a
 *                   500 with "Error sending magic link email" for it, which
 *                   reads like an outage and is usually a typo: a domain that
 *                   does not exist, or one the provider will not accept.
 *                   Confirmed by testing — the same call to a real address
 *                   sends, and to example.com returns that 500.
 *   "unavailable"   our fault. No service-role key, or Supabase refused to
 *                   confirm the address exists.
 *
 * The first two are indistinguishable from a 500 alone, so both produce the
 * same sentence to her: check it for a typo, then try again. Saying only "try
 * again" sends somebody who mistyped their address into a loop that cannot
 * succeed, which is the single worst outcome on this screen.
 *
 * Neither message leaks whether an account exists. Deliverability is a fact
 * about the address, and it is the same fact whether or not she has ever been
 * here before.
 *
 * An account created a moment ago for an address that cannot receive mail is
 * deleted again. Otherwise every typo leaves a permanent confirmed account
 * that nobody can ever sign in to.
 */
type Sent = "sent" | "undeliverable" | "unavailable";

async function requestCode(address: string): Promise<Sent> {
  const account = await ensureAccount(address);
  if (account.state !== "ready") return "unavailable";

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email: address,
    options: { shouldCreateUser: false, data: { role: "woman" } },
  });

  if (!error) return "sent";

  // The address, never her address's contents, and never at info level. This
  // is the line that says whether a woman who reported getting nothing hit a
  // refused recipient or something worse.
  console.error(
    `[sign-in] the code was not sent: ${error.status} ${error.code ?? ""} ${error.message}`,
  );

  if (account.created && account.id) await discardAccount(account.id);
  return "undeliverable";
}

/**
 * Send the one-time passcode.
 *
 * The response is identical whether or not the address already has an
 * account, because saying otherwise would turn this screen into a way of
 * finding out who has used the platform. Errors from Supabase are swallowed
 * for the same reason.
 */
export async function sendCode(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = email.safeParse(formData.get("email"));
  if (!parsed.success) return { error: parsed.error.issues[0].message };

  // Not redirected when nothing was sent. She would arrive at six empty boxes
  // and wait for an email that is not coming, and the only thing worse than a
  // failure is a failure that looks like success.
  const sent = await requestCode(parsed.data);

  if (sent === "undeliverable") {
    return {
      error:
        "We could not send a code to that address. Check it for a typo, and if it is right, try again in a moment.",
    };
  }

  if (sent === "unavailable") {
    return {
      error:
        "We could not send your code just now. Try again in a moment, and if it keeps happening let us know.",
    };
  }

  redirect(`/account/code?email=${encodeURIComponent(parsed.data)}`);
}

export async function resendCode(address: string) {
  const parsed = email.safeParse(address);
  if (!parsed.success) return;

  await requestCode(parsed.data);
}

/**
 * Check the six digits.
 *
 * On success the session list is carried into the account before anything
 * else happens: she saved those things in order to keep them, and this is
 * the moment they would otherwise be lost.
 *
 * A new account goes to the profile screen, a returning one straight to her
 * list. Nobody is asked for a name twice.
 */
export async function verifyCode(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const address = String(formData.get("email") ?? "");
  const token = String(formData.get("code") ?? "").replace(/\D/g, "");

  // Length is whatever the Supabase project issues, so this only guards
  // against an obviously incomplete entry.
  if (token.length < 6) {
    return { error: "That code looks too short. Check it and try again." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.verifyOtp({
    email: address,
    token,
    type: "email",
  });

  if (error || !data.user) {
    return {
      error: "That code didn't work. Check it, or ask for a new one below.",
    };
  }

  // The listing she pressed Save on before being sent here, finished now
  // that there is an account to hang it on.
  const saved = await completePendingSave(data.user.id);

  const { data: profile } = await supabase
    .from("profiles")
    .select("first_name")
    .eq("id", data.user.id)
    .maybeSingle();

  revalidatePath("/saved");

  // Straight to the list when there is a name already, and to the name
  // question when there is not. Either way the save she started is done, so
  // the first thing she sees is the thing she pressed Save on.
  redirect(
    profile?.first_name ? "/saved" : `/account/profile${saved ? "?saved=1" : ""}`,
  );
}

/** Nothing here is required, so nothing here can fail. */
export async function saveProfile(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/account");

  const value = (key: string) => {
    const raw = String(formData.get(key) ?? "").trim();
    return raw || null;
  };

  await supabase
    .from("profiles")
    .update({
      first_name: value("firstName"),
      last_name: value("lastName"),
      phone: value("phone"),
    })
    .eq("id", user.id);

  revalidatePath("/saved");
  redirect("/saved");
}

export async function setReminders(enabled: boolean) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase
    .from("profiles")
    .update({ reminders_enabled: enabled })
    .eq("id", user.id);

  revalidatePath("/settings");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  // Nothing of hers is left behind in the browser.
  await clearPendingSave();
  redirect("/");
}

/**
 * Delete everything.
 *
 * Completes immediately and returns her to a plain search screen. There is
 * no win-back prompt and no survey: making leaving as easy as joining is the
 * thing that makes the rest of the privacy copy believable.
 *
 * This used to delete the saved_items rows, delete the profiles row and sign
 * her out, leaving the row in auth.users untouched. The button says "and
 * everything in it" and the confirmation names her email address, so the one
 * thing it promised to remove was the one thing that stayed. She could sign
 * in again on the same address and find the account still there.
 *
 * The delete now goes through delete_own_account(), a security-definer
 * function that can only ever delete auth.uid(). The cascade takes the
 * profile and the saved items with it, so there is nothing to tidy first.
 *
 * If the delete fails, she is not signed out and not redirected to a screen
 * saying it worked. An account that quietly survives its own deletion is the
 * bug this replaced.
 */
export async function deleteAccount(): Promise<FormState> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/");

  const { error } = await supabase.rpc("delete_own_account");

  if (error) {
    return {
      error:
        "We could not delete your account just then. Try again, and if it " +
        "keeps happening tell us and we will do it by hand.",
    };
  }

  // The session is dead with the user row, but the cookies are not: clearing
  // them is what stops the next request arriving with a token for an account
  // that no longer exists.
  await supabase.auth.signOut();
  await clearPendingSave();

  redirect("/?deleted=1");
}

/**
 * Start changing the address on the account.
 *
 * Same shape as signing in, because it is the same question asked twice: a
 * code to the new address, entered on the next screen. She never touches a
 * link, for the same reason she never does at sign-in.
 *
 * The response does not depend on whether the new address already belongs to
 * somebody. Supabase refuses a duplicate, and saying so here would turn this
 * form into a way of finding out who has an account, which every other screen
 * on this platform is written to avoid. So the error is swallowed and the
 * next screen says what it always says. If the address was taken, no code
 * arrives and nothing changes, which is the same thing she sees if she
 * mistypes the address.
 */
export async function startEmailChange(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = email.safeParse(formData.get("email"));
  if (!parsed.success) return { error: parsed.error.issues[0].message };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/account");

  // Nothing to do, and saying "that is already your address" is the one
  // answer that is safe to give, because she already knows it.
  if (user.email?.toLowerCase() === parsed.data.toLowerCase()) {
    return { error: "That is already the address on your account." };
  }

  await supabase.auth.updateUser({ email: parsed.data });

  redirect(`/settings/email/code?email=${encodeURIComponent(parsed.data)}`);
}

/**
 * Finish the change.
 *
 * `email_change` rather than `email`: this verifies a pending change on an
 * account that already exists, and passing the wrong type here fails in a way
 * that reads like a wrong code.
 *
 * Supabase can be set to confirm on both addresses, old and new. Where that
 * is on, this screen is the second half and the first code went to the old
 * address; the wording stays true either way because it only ever talks about
 * the code she is holding.
 */
export async function confirmEmailChange(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const address = String(formData.get("email") ?? "");
  const token = String(formData.get("code") ?? "").replace(/\D/g, "");

  if (token.length < 6) {
    return { error: "That code looks too short. Check it and try again." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    email: address,
    token,
    type: "email_change",
  });

  if (error) {
    return {
      error: "That code didn't work. Check it, or ask for a new one below.",
    };
  }

  revalidatePath("/settings");
  redirect("/settings?email=changed");
}

/** Send another code to the address she is moving to. */
export async function resendEmailChange(address: string) {
  const parsed = email.safeParse(address);
  if (!parsed.success) return;

  const supabase = await createClient();
  await supabase.auth.updateUser({ email: parsed.data });
}
