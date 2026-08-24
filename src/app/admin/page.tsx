import { Page } from "@/components/ui/Page";

/**
 * Placeholder. The admin tools are phase three: the listing review queue,
 * organisation verification, and Access Zone management. None is designed
 * yet, and the trust model depends on all three.
 */
export default function AdminIndex() {
  return (
    <Page width={660}>
      <h1 className="m-0 font-display text-[44px] font-medium leading-[1.1] tracking-[-0.01em]">
        Not built yet
      </h1>
      <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
        The review queue, organisation verification and Access Zone management
        land after the woman-facing flow. None of the three has been designed.
      </p>
    </Page>
  );
}
