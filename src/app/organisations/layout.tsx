import type { ReactNode } from "react";
import { OrgHeader } from "@/components/organisations/OrgHeader";
import { getMyOrganisation } from "@/lib/data/organisations";
import { getListings } from "@/lib/data/listings";

export const metadata = {
  title: "List your support | HWS Portal",
  description:
    "Reach women across Scotland who are looking for exactly what you offer. Listing is free, and nobody pays for placement.",
};

export default async function OrganisationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Header navigation appears only once signed in, and the count beside
  // "My solutions" is live listings rather than all of them.
  const organisation = await getMyOrganisation();
  const listings = organisation ? await getListings(organisation.id) : [];
  const liveCount = listings.filter((l) => l.status === "live").length;

  return (
    <div className="flex min-h-screen flex-col bg-ground text-ink">
      <OrgHeader signedIn={Boolean(organisation)} liveCount={liveCount} />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
