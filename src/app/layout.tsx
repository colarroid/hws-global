import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
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
  /* Every screen sets its own title; the template adds the suffix. The
     default is the landing page, which sets none of its own, and it is what
     most people will see first: the brief expects most traffic to arrive
     from a search engine rather than the front door. */
  title: {
    default: "Find support for women in Scotland",
    template: "%s | HWS Portal",
  },
  description:
    "Find support for women across Scotland, and list support for the women who need it.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
