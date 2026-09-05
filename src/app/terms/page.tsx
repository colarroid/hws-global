import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { TERMS } from "@/lib/design/legal";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "The rules for using HWS Path Grid, for the women who search it and the organisations who list on it.",
};

/**
 * The terms of use.
 *
 * The wording lives in lib/design/legal.ts. This file only says which
 * document it is.
 */
export default function TermsPage() {
  return <LegalPage title="Terms of use" document={TERMS} />;
}
