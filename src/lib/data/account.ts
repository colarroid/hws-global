import "server-only";
import { createClient } from "@/lib/supabase/server";

export type Account = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  remindersEnabled: boolean;
  reminderDays: number;
};

/** The signed-in woman, or null. */
export async function getAccount(): Promise<Account | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("first_name, last_name, phone, reminders_enabled, reminder_days")
    .eq("id", user.id)
    .maybeSingle();

  return {
    id: user.id,
    email: user.email ?? "",
    firstName: data?.first_name ?? null,
    lastName: data?.last_name ?? null,
    phone: data?.phone ?? null,
    remindersEnabled: data?.reminders_enabled ?? true,
    reminderDays: data?.reminder_days ?? 7,
  };
}

/**
 * The organisation this account belongs to, if it belongs to one.
 *
 * Since migration 0026 one account serves both sides of the platform, so the
 * woman reading the settings screen may also be the person who runs a
 * listing organisation. The screen needs to know, because the delete button
 * there promises to remove "your saved items and your email address" and the
 * cascade behind it would also take her organisation's only membership row.
 *
 * Null for almost everybody, and one small query to find that out. RLS does
 * the work: org_members_read only returns rows for an organisation the
 * caller is in, so this cannot see anybody else's.
 */
export async function getMyOrganisation(): Promise<{
  id: string;
  name: string;
} | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: membership } = await supabase
    .from("organisation_members")
    .select("organisation_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!membership) return null;

  const { data: organisation } = await supabase
    .from("organisations")
    .select("id, name")
    .eq("id", membership.organisation_id)
    .maybeSingle();

  return organisation ?? null;
}
