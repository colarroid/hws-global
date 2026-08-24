import type { ReactNode } from "react";
import { OrgHeader } from "@/components/organisations/OrgHeader";

export const metadata = {
  title: "List your support | HWS Portal",
  description:
    "Reach women across Scotland who are looking for exactly what you offer. Listing is free, and nobody pays for placement.",
};

export default function OrganisationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Signed-in navigation arrives with the session wiring, once Supabase
  // credentials are in place. Group A screens are all signed-out.
  return (
    <div className="flex min-h-screen flex-col bg-ground text-ink">
      <OrgHeader signedIn={false} />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
