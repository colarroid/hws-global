"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { clearPendingSave, completePendingSave } from "@/lib/saved";

export type FormState = { error?: string } | null;

const email = z
  .string()
  .trim()
  .min(1, "Add your email address.")
  .email("That doesn't look like an email address. Check it and try again.");

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

  const supabase = await createClient();
  await supabase.auth.signInWithOtp({
    email: parsed.data,
    options: { shouldCreateUser: true, data: { role: "woman" } },
  });

  redirect(`/account/code?email=${encodeURIComponent(parsed.data)}`);
}

export async function resendCode(address: string) {
  const parsed = email.safeParse(address);
  if (!parsed.success) return;

  const supabase = await createClient();
  await supabase.auth.signInWithOtp({
    email: parsed.data,
    options: { shouldCreateUser: true, data: { role: "woman" } },
  });
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
