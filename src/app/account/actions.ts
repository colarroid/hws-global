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
 * Saved items and the profile go with the user row through cascade.
 */
export async function deleteAccount() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/");

  await supabase.from("saved_items").delete().eq("user_id", user.id);
  await supabase.from("profiles").delete().eq("id", user.id);
  await supabase.auth.signOut();
  await clearPendingSave();

  redirect("/?deleted=1");
}
