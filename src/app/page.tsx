import { Page } from "@/components/ui/Page";

/**
 * Placeholder.
 *
 * The woman-facing flow is twelve screens, starting at question 1: what she
 * needs, where to look, and her situation. It is built after the organisation
 * portal, so that there is something for her to find.
 */
export default function Home() {
  return (
    <Page width={660}>
      <h1 className="m-0 font-display text-[44px] font-medium leading-[1.1] tracking-[-0.01em]">
        Not built yet
      </h1>
      <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
        This is where a woman tells us what she needs, in her own words, and
        finds a trusted next step. Twelve screens, three questions, no account
        required to search, read or apply.
      </p>
      <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
        The organisation portal is being built first, so that there is
        something here worth finding.
      </p>
    </Page>
  );
}
