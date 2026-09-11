# Auth email templates

Supabase keeps auth email templates in the project rather than in a
repository, so these are the one set of email that nothing here compiles,
nothing here tests, and nobody notices drifting. Hand-writing them to look
like the rest of the mail is how they came to look nothing like it.

So they are **generated**, from the same `emailLayout` the app's own email
uses:

```bash
npm run emails:auth
```

Change `src/emails/layout.ts`, run that, paste the files. What comes out has
the same logo, card, radius, footer and type as the deadline reminder and the
verification decision, because it is literally the same function. Do not edit
the HTML in this folder by hand; it will be overwritten.

## The four templates, and what each one has to carry

All three apps share one Supabase project and therefore one set of templates.
Each is triggered by a different call, which is what makes it possible to give
the women's sign-in a code while the organisation portal keeps its links.

| Template | Triggered by | Must contain | Subject |
| --- | --- | --- | --- |
| **Magic Link** | `signInWithOtp` for an address that **already has an account** | `{{ .Token }}`, and no link at all | Your sign-in code |
| **Confirm signup** | `signUp` and `resend` in the organisation portal | `{{ .ConfirmationURL }}` | Confirm your email address |
| **Reset password** | `resetPasswordForEmail`, organisation portal | `{{ .ConfirmationURL }}` | Set a new password |
| **Change email address** | `updateUser({ email })`, women's settings screen | `{{ .Token }}`, and no link | Confirming your new address |

### The subject is a separate field, and it goes stale on its own

Pasting the body does not touch the subject. On 11 September 2026 the Magic
Link slot was serving this repo's body correctly under the subject **"Your
sign-in link"**, which is the one thing in that email that is not true: there
is no link in it, by design, and the subject was sending women to look for
one.

**If an edit does not show up in the next email, you edited a different
slot.** Which slot is in use is decided by the call, not by the name, and the
arriving subject line is the fastest way to identify it: whatever the received
email says is what is saved on the slot you actually want. Search the four
templates for that string, and edit that one.

For the women's sign-in that slot is **Magic Link**, always, because
`src/app/account/actions.ts` makes sure the account exists before asking for a
code. Confirm signup belongs to the organisation portal and editing it will
never change anything a woman receives.

### One template, one job, no logic

An earlier version of Confirm signup branched on the role, because
`signInWithOtp` does not use Magic Link for an address with no account yet:
it is creating the account, so GoTrue sends Confirm signup instead, and the
organisation portal's `signUp` uses that same template and needs a link.

That conditional is gone. It was right in theory, could not be tested from
this repository, and duly sent the wrong half to somebody. The fight is
settled in code instead: `src/app/account/actions.ts` creates a woman's
account before asking for her code, so her sign-in always lands on Magic
Link and never touches Confirm signup.

The result is that every template here carries exactly one thing. Magic Link
and Change email are a code with no link anywhere. Confirm signup and Reset
password are a link with no code. If you ever see a code in an organisation's
confirmation email, or a link in a woman's, something has been pasted into
the wrong slot rather than rendered wrongly.

## Settings that go with them

**Authentication → Providers → Email**

- **Email OTP length**: 6. The form accepts 6 to 8 and submits when typing
  stops, so a longer code still works, but the placeholder and the email both
  assume 6.
- **Email OTP expiration**: 900 seconds. The code screen and the email both
  say "15 minutes" and the Supabase default is an hour. Set this, or change
  both of those lines; do not leave them disagreeing.

**Authentication → URL Configuration → Redirect URLs**

The portal passes `emailRedirectTo` and `redirectTo` on every call. If those
exact URLs are not on the allow-list, Supabase quietly substitutes the Site
URL and the confirmation link lands on the wrong page. Both of these must be
listed, with the real hostname:

```
https://organisation.hwspathgrid.com/auth/confirm
https://organisation.hwspathgrid.com/auth/reset
```

## The cross-device link, if you want it later

`/auth/confirm` and `/auth/reset` each handle three shapes: `code` (the PKCE
exchange), `token_hash` (verified server side), and for reset a token in the
URL fragment picked up by the client.

`{{ .ConfirmationURL }}` produces the `code` shape, which **only works in the
browser that started the flow**, because the verifier is a cookie there. Both
route files say in their comments that people routinely sign up on a laptop
and open the email on a phone, and that is the case `token_hash` exists for.
It is currently unreachable, because nothing sends it.

To turn it on, replace the button's href in the generator with:

```
{{ .RedirectTo }}?token_hash={{ .TokenHash }}&type=signup
```

and `type=recovery` for the reset. `{{ .RedirectTo }}` is used rather than
`{{ .SiteURL }}` because the Site URL is the women's site and this mail has to
land on the portal.

This is left off by default because it is untested here and a wrong
placeholder breaks confirmation for everybody, where the current shape breaks
it only across devices. Try it on a staging project, confirm from a phone
having signed up on a laptop, then switch.

## After you paste them

Send yourself one of each and check:

- the sign-in email is six digits and has **no link anywhere in it**
- the confirm and reset buttons land on the portal, not on the women's site
- the logo loads, and reads as "HWS Path Grid" when images are blocked
- nothing in any subject line says what the platform is for
