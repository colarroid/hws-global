import { redirect } from "next/navigation";
import { Page } from "@/components/ui/Page";
import { ProfileForm } from "@/components/account/ProfileForm";
import { getAccount } from "@/lib/data/account";

/**
 * Screen 10. Set up your profile.
 *
 * A name to greet her by. Nothing here is required and Continue works with
 * every field untouched.
 *
 * Two things were corrected from the approved screens: both name fields were
 * labelled "First name", and the body copy read "One email address is all we
 * need. No name, no postcode" directly above a request for a name.
 */
export default async function ProfilePage() {
  const account = await getAccount();
  if (!account) redirect("/account");

  return (
    <Page width={520} top={80} gap={26}>
      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[40px] sm:leading-[1.1]">
          Set up your profile
        </h1>
        <p className="m-0 text-[17px] leading-[1.55] text-ink-70">
          Just a name to greet you by. Nothing here is required.
        </p>
      </div>

      <ProfileForm account={account} />
    </Page>
  );
}
