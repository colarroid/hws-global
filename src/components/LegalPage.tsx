import Link from "next/link";
import { FileText } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { anchorFor, type LegalDocument } from "@/lib/design/legal";

/**
 * The shape both legal documents are read in.
 *
 * One component for the two of them, so the privacy policy and the terms
 * cannot drift into looking like they came from different places. The text
 * itself lives in lib/design/legal.ts; everything here is how it is set.
 *
 * Set for reading rather than for skimming: one narrow column, generous
 * leading, and headings that are anchors so a paragraph can be pointed at in
 * an email. The contents list appears only once there is enough of a document
 * to need one.
 *
 * While a document is unwritten the page says so in as many words. An empty
 * legal page that looks finished is worse than one that admits it is not,
 * because somebody would take the silence for a promise.
 */
export function LegalPage({
  title,
  document,
}: {
  title: string;
  document: LegalDocument;
}) {
  const { updated, lead, sections } = document;

  return (
    <Page width={760} top={56} gap={30}>
      <div className="flex flex-col gap-[10px]">
        <span className="eyebrow text-ink-60">Legal</span>
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
          {title}
        </h1>
        <p className="m-0 max-w-[62ch] text-[18px] leading-[1.6] text-ink-70">
          {lead}
        </p>
        {updated ? (
          <p className="m-0 text-[15px] text-ink-60">Last updated {updated}</p>
        ) : null}
      </div>

      {sections.length === 0 ? (
        <div className="flex gap-3 rounded-card bg-surface p-6 shadow-hairline">
          <FileText
            size={20}
            strokeWidth={2}
            className="mt-[3px] shrink-0 text-ink-40"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-2">
            <span className="text-[16px] font-bold text-ink">
              This one is still being written
            </span>
            <p className="m-0 max-w-[58ch] text-[16px] leading-[1.6] text-ink-70">
              The wording is with us and will be published here before the
              platform opens. Nothing on this page is in force until it is.
            </p>
            <p className="m-0 max-w-[58ch] text-[16px] leading-[1.6] text-ink-70">
              If you want to know what happens to what you type in the
              meantime,{" "}
              <Link href="/help" className="font-bold text-gold-700">
                ask us
              </Link>{" "}
              and we will tell you plainly.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Only worth a contents list once there is enough to get lost in. */}
          {sections.length > 3 ? (
            <nav
              aria-label={`Contents of the ${title.toLowerCase()}`}
              className="flex flex-col gap-3 rounded-card bg-surface p-6 shadow-hairline"
            >
              <h2 className="m-0 eyebrow text-ink-60">On this page</h2>
              <ol className="m-0 flex list-none flex-col gap-[2px] p-0">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#${anchorFor(section.title)}`}
                      className="inline-flex min-h-[38px] items-baseline gap-3 text-[16px] font-medium text-ink no-underline hover:underline"
                    >
                      <span className="w-[1.6em] shrink-0 text-[14px] tabular-nums text-ink-60">
                        {index + 1}.
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div className="flex flex-col gap-9">
            {sections.map((section) => (
              <section
                key={section.title}
                id={anchorFor(section.title)}
                // Clears the sticky site header when jumped to from the
                // contents list.
                className="flex scroll-mt-24 flex-col gap-3 border-t border-hairline pt-7"
              >
                <h2 className="m-0 font-display text-[24px] font-normal leading-[1.25] tracking-[-0.01em] sm:text-[28px]">
                  {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 60)}
                    className="m-0 max-w-[68ch] text-[17px] leading-[1.7] text-ink"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </>
      )}

      <div className="flex flex-col gap-2 border-t border-hairline pt-7">
        <p className="m-0 max-w-[62ch] text-[16px] leading-[1.6] text-ink-70">
          Questions about any of this go to a person, not a form.
        </p>
        <Link
          href="/help"
          className="inline-flex min-h-[44px] items-center self-start p-1 text-[16px] font-bold text-gold-700 no-underline"
        >
          Talk to a person
        </Link>
      </div>
    </Page>
  );
}
