import { ImageResponse } from "next/og";

/**
 * The picture that unfurls when somebody pastes a link to this platform.
 *
 * It matters more here than on most sites. A link to HWS Path Grid is
 * typically pasted into a WhatsApp message or a group chat by a support
 * worker, a friend or a colleague, and what appears under it is the whole of
 * the first impression: whether this looks like a real service or like a link
 * worth ignoring.
 *
 * Generated rather than a designed file, so it cannot drift from the site's
 * own colours, and drawn with the platform's ground and ink rather than a
 * photograph. There is no photograph that can stand for "women across
 * Scotland" without standing for a particular woman, and choosing one would
 * be telling everybody else this is not for them.
 *
 * No custom font is loaded. Fetching one at render time is a network call
 * that can fail, and a preview image that sometimes does not appear is worse
 * than one set in the default face.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "HWS Path Grid, support for women across Scotland";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f9f6f1",
          color: "#120902",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 999,
              border: "5px solid #120902",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.05,
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
              HWS
            </span>
            <span style={{ fontSize: 17, letterSpacing: 3.5 }}>PATH GRID</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ fontSize: 74, lineHeight: 1.05, letterSpacing: -2 }}>
            Support for women across Scotland, in one place.
          </div>
          <div style={{ fontSize: 30, color: "rgba(18, 9, 2, 0.65)" }}>
            Tell us what you need in your own words. Every organisation checked.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 22,
            color: "rgba(18, 9, 2, 0.6)",
          }}
        >
          <span>Free to use</span>
          <span>·</span>
          <span>No account needed to search</span>
          <span>·</span>
          <span>Nobody pays to appear</span>
        </div>
      </div>
    ),
    size,
  );
}
