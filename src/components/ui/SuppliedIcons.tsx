/**
 * The supplied icons, from vzy-icons.
 *
 * Inlined rather than imported as files so they can take the button's colour.
 * The originals are stroked in #808080 and would have stayed that grey
 * through every hover, focus and theme; `stroke-current` hands that back to
 * whatever is around them, which is the same reason the header glyphs next
 * door use `fill-current`.
 *
 * Everything else is theirs: the 24 viewBox, the 1px stroke and the square
 * caps.
 *
 * Two things in the source files are dropped, and every icon in this family
 * arrives with both, so they are dealt with once here rather than argued
 * about again each time one is added. The transparent rect was holding the
 * icon's bounds in a design tool and does nothing in a button that already
 * has a size. And stroke-linejoin="arcs" is SVG 2 that no browser has
 * implemented — every one of them falls back to miter, so it was describing
 * a join nobody was ever going to see, and TypeScript will not type it
 * either.
 */

function Glyph({
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
  return <Glyph d="M15 18l-6-6 6-6" {...props} />;
}

export function ChevronRightIcon(props: { className?: string }) {
  return <Glyph d="M9 18l6-6-6-6" {...props} />;
}

/**
 * The diagonal arrow, for a link that takes you out of what you are doing.
 *
 * Both the places it is used are somebody realising they are in the wrong
 * flow: one leaves for the organisation portal, the other leaves the three
 * questions for the page about listing. The arrow marks the departure rather
 * than the domain, which is why it is on the internal one too.
 *
 * Smaller than the chevrons by default because it sits beside 15px text
 * rather than alone in a 44px button, and the chevrons' 18px would out-weigh
 * the words it belongs to.
 *
 * The 1px stroke is kept even at 14px, which makes it lighter than a lucide
 * icon of the same size would be. That is the family's own weight and the
 * point of using the supplied file rather than ArrowUpRight, which is what
 * the organisations page reaches for in a filled button where a heavier line
 * is wanted.
 */
export function ArrowUpRightIcon(props: { className?: string }) {
  return (
    <Glyph
      d="M18 6L6.687 17.314M6.687 6H18v11.314"
      className={props.className ?? "h-[14px] w-[14px]"}
    />
  );
}
