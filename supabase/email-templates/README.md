# Auth email templates

These are not applied by anything. Supabase stores auth email templates in
the project, not in this repository, so these files are the record of what
should be pasted into **Authentication → Emails** in the dashboard, and the
place to review a change before somebody makes it.

They are separate from the mail this codebase sends itself. Reminders,
verification results and freshness prompts go out through Resend from
`src/lib/email.ts`. Auth mail goes out through Supabase, on its own SMTP
settings, from these templates. Two paths, and a change to one does nothing
to the other.

All three apps share one Supabase project, so they share these templates.
Each template is used by a different call, which is what makes it possible to
give the women's sign-in a code while the organisation portal keeps its links.

| Template          | Who triggers it                                    | What it must contain |
| ----------------- | -------------------------------------------------- | -------------------- |
| **Magic Link**    | `signInWithOtp` on the women's site (`/account`)     | `{{ .Token }}` and no link |
| **Confirm signup**| `signUp` in the organisation portal                  | `{{ .ConfirmationURL }}` |
| **Reset password**| `resetPasswordForEmail` in the organisation portal   | `{{ .ConfirmationURL }}` |

Only Magic Link is in this folder, because it is the only one that has to be
changed away from the Supabase default.

## Why the women's sign-in is a code and not a link

Two reasons, and the first is a safety property rather than a preference.

A magic link in an inbox is a session. Anyone who opens that inbox and clicks
it is signed in as her. These emails land in inboxes that are read on shared
devices and sometimes by other people in the house, which is the same reason
`src/lib/email.ts` insists subject lines stay neutral. A six digit code has
to be carried back to the device she is sitting at. It cannot be used by
somebody reading over her shoulder in a mail app a fortnight later.

The second is that the app is built for a code and has no way to receive a
link. `src/app/account/actions.ts` calls `signInWithOtp` with no
`emailRedirectTo`, and `hws-global` has no `/auth/confirm` route. If this
template is left on the Supabase default, she receives a link, clicking it
sends her to the site with tokens in the URL fragment, nothing on the site
reads them, and she lands signed out with no explanation. Sign-in is broken
in a way that looks like it worked.

## Settings that go with it

In **Authentication → Providers → Email**:

- **Email OTP length**: 6. The form accepts 6 to 8 and submits when typing
  stops, so a longer code works, but the placeholder and the design assume 6.
- **Email OTP expiration**: 900 seconds. The code entry screen tells her
  "The code works for 15 minutes", and the Supabase default is an hour. Set
  this or change that line; do not leave them disagreeing.

## Applying it

Authentication → Emails → Magic Link → paste `magic-link.html` into the
message body. Set the subject to something neutral: **Your sign-in code**.
Nothing in the subject or body should say what the platform is for.

Send yourself one afterwards and check that what arrives is six digits and
that there is no link anywhere in it.
