/**
 * The supplied chevrons, from vzy-icons.
 *
 * Inlined rather than imported as files so they can take the button's colour.
 * The originals are stroked in #808080 and would have stayed that grey
 * through every hover, focus and theme; `stroke-current` hands that back to
 * whatever is around them, which is the same reason the header glyphs next
 * door use `fill-current`.
 *
 * Everything else is theirs: the 24 viewBox, the 1px stroke and the square
 * caps. Two things in the source files are dropped. The transparent rect was
 * holding the icon's bounds in a design tool and does nothing in a button
 * that already has a size. And stroke-linejoin="arcs" is SVG 2 that no
 * browser has implemented — every one of them falls back to miter, so it was
 * describing a join nobody was ever going to see, and TypeScript will not
 * type it either.
 */

function Chevron({
  d,
  className = "h-[18px] w-[18px]",
}: {
  d: string;
  className?: string;
}) {
  return (
    <svg
      className={`${className} stroke-current`}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1}
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}

export function ChevronLeftIcon(props: { className?: string }) {
  return <Chevron d="M15 18l-6-6 6-6" {...props} />;
}

export function ChevronRightIcon(props: { className?: string }) {
  return <Chevron d="M9 18l6-6-6-6" {...props} />;
}
