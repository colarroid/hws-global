# Design references

The approved handoff bundles, kept in the repo because they are the
authoritative source for the build and they override the written briefs.

| Folder | Covers |
| --- | --- |
| `design_handoff_hws_organisations` | The organisation portal, 13 screens |
| `design_handoff_hws_portal` | The woman-facing flow, 12 screens |

Open the `.dc.html` files in a browser and click through. `support.js` is the
design-tool runtime they need in order to run.

**Nothing in this folder ships.** The HTML is a reference, not production
code, and `support.js` must never be ported. Both bundles specify an
identical token set, which lives in `src/app/globals.css`.
