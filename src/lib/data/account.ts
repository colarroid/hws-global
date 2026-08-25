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
