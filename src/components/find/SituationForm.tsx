"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Chip, ChipGroup } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import type { Situation } from "@/lib/data/situations";

const PREFER_NOT_TO_SAY = "prefer-not-to-say";

export function SituationForm({
  need,
  place,
  options,
  initial,
}: {
  need: string;
  place: string;
  options: Situation[];
  initial: string[];
}) {
  const router = useRouter();
  const [picked, setPicked] = useState<string[]>(initial);

  function toggle(slug: string) {
    // "Prefer not to say" is an answer, not an addition. Picking it clears
    // the rest, and picking anything else clears it.
    if (slug === PREFER_NOT_TO_SAY) {
      setPicked(picked.includes(slug) ? [] : [slug]);
      return;
    }
    const without = picked.filter((s) => s !== PREFER_NOT_TO_SAY);
    setPicked(
      without.includes(slug)
        ? without.filter((s) => s !== slug)
        : [...without, slug],
    );
  }

  function go() {
    const params = new URLSearchParams({ need, place });
    const matchable = picked.filter((s) => s !== PREFER_NOT_TO_SAY);
    if (matchable.length > 0) params.set("situations", matchable.join(","));
    router.push(`/results?${params}`);
  }

  return (
    <div className="flex flex-col gap-7">
      <ChipGroup label="What best describes your situation?">
        {options.map((option) => (
          <Chip
            key={option.id}
            label={option.label}
            selected={picked.includes(option.slug)}
            showCheck
            onToggle={() => toggle(option.slug)}
          />
        ))}
      </ChipGroup>

      {/* Next always proceeds, including with nothing selected. */}
      <Button onClick={go}>Next</Button>

      <span className="text-[14px] leading-[1.5] text-ink-60">
        We don&apos;t store your answers or share them with the organisations we
        show you.
      </span>
    </div>
  );
}
