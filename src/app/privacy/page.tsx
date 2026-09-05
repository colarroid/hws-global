import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { PRIVACY } from "@/lib/design/legal";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "What HWS Path Grid collects when you use the site, why, and what we will never do with it.",
  path: "/privacy",
  indexable: true,
});

/**
 * The privacy policy.
 *
 * The wording lives in lib/design/legal.ts. This file only says which
 * document it is.
 */
export default function PrivacyPage() {
  return <LegalPage title="Privacy policy" document={PRIVACY} />;
}
