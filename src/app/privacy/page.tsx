import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PRIVACY } from "@/lib/design/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What HWS Path Grid collects when you use the site, why, and what we will never do with it.",
};

/**
 * The privacy policy.
 *
 * The wording lives in lib/design/legal.ts. This file only says which
 * document it is.
 */
export default function PrivacyPage() {
  return <LegalPage title="Privacy policy" document={PRIVACY} />;
}
