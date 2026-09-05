import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieNotice } from "@/components/CookieNotice";
import { getLocale } from "@/lib/i18n";
import { SITE_NAME, indexingAllowed, siteUrl } from "@/lib/seo";
import "./globals.css";

// next/font self-hosts both families at build time, which satisfies the
// handoff note that Google Fonts must be self-hosted in production.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  /* Absolute URLs are built from this: canonicals, and the preview image a
     link unfurls into when somebody pastes it into a message. Without it
     Next resolves them against localhost and every shared link previews
     nothing. */
  metadataBase: new URL(siteUrl()),

  /* Every screen sets its own title; the template adds the suffix. The
     default is the landing page, which sets none of its own, and it is what
     most people will see first: the brief expects most traffic to arrive
     from a search engine rather than the front door. */
  title: {
    default: "Find support for women in Scotland",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Find support for women across Scotland, and list support for the women who need it.",
  applicationName: SITE_NAME,
  authors: [{ name: "The Holistic Wellbeing Summit" }],

  /* The floor, not the rule. Pages that must never be indexed say so for
     themselves through pageMetadata, and this whole block stays shut until
     the data is real and NEXT_PUBLIC_ALLOW_INDEXING is set. robots.ts says
     the same thing to crawlers that read it; this says it to the ones that
     only read the page. */
  robots: indexingAllowed()
    ? { index: true, follow: true }
    : { index: false, follow: false },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    title: "Find support for women in Scotland",
    description:
      "Tell us what you need in your own words and we will show you a few next steps worth taking. Every organisation is checked.",
    url: siteUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Find support for women in Scotland",
    description:
      "Tell us what you need in your own words and we will show you a few next steps worth taking. Every organisation is checked.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Read on the server so the page arrives in her language. Rendering English
  // and swapping it on the client shows a flash of a language she may not
  // read, which is worst for exactly the people this is for.
  const locale = await getLocale();

  return (
    <html
      lang={locale.code === "en" ? "en-GB" : locale.code}
      dir={locale.dir}
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
          {/* Last in the document and sticky rather than fixed, so it is the
              last thing a screen reader reaches and the last thing in the tab
              order. A box about cookies is not what anybody came for. */}
          <CookieNotice />
        </div>
      </body>
    </html>
  );
}
