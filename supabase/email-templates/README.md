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

## The three templates, and what each one has to carry

All three apps share one Supabase project and therefore one set of templates.
Each is triggered by a different call, which is what makes it possible to give
the women's sign-in a code while the organisation portal keeps its links.

| Template | Triggered by | Must contain | Subject |
| --- | --- | --- | --- |
| **Magic Link** | `signInWithOtp` for an address that **already has an account** | `{{ .Token }}`, and no link at all | Your sign-in code |
| **Confirm signup** | `signUp` in the portal, **and a woman's first ever sign-in** | `{{ .Token }}` or `{{ .ConfirmationURL }}`, branched on the role | Confirming it is you |
| **Reset password** | `resetPasswordForEmail`, organisation portal | `{{ .ConfirmationURL }}` | Set a new password |

### Read that second row before changing anything

**`signInWithOtp` does not send the Magic Link template to an address with no
account yet.** With `shouldCreateUser: true` it is creating the account, so
GoTrue sends **Confirm signup**, and Magic Link is only reached from her
second sign-in onwards.

This is the single most confusing thing about this setup, and it is what makes
"I changed the Magic Link template and she still gets a link" a completely
expected result: on a fresh address that template is never used. To test
Magic Link, request a code twice for the same address. The first mail is
Confirm signup; the second is Magic Link.

It also means one template has to serve two audiences that want opposite
things. A woman needs the code, because her sign-in is one flow whether it is
her first time or her fiftieth. An organisation registering with a password
needs the button, because `/auth/confirm` is where its address is confirmed
and the session closed again.

**So the template branches on the role.** Both calls already tag the account:
`data: { role: "woman" }` from `signInWithOtp` on the women's site,
`role: "organisation"` from `signUp` in the portal. GoTrue renders templates
with Go's `text/template`, so the `if` is ordinary template syntax rather
than a Supabase feature:

```
{{ if eq (printf "%v" .Data.role) "woman" }} … code … {{ else }} … button … {{ end }}
```

`printf "%v"` rather than a bare `eq .Data.role "woman"` on purpose: Go's
`eq` refuses to compare a missing key against a string and fails the whole
render, which would mean no email at all rather than the wrong half of one.
Coercing to a string first cannot error, and anything that is not exactly
`woman` falls to the organisation branch. That is the safer way round: an
organisation seeing a code it does not need is untidy, a woman seeing a link
is the thing being removed.

### Test this one before you rely on it

It is the only template here with logic in it, and the branch it takes cannot
be checked from this repository. On a staging project, or carefully on
production:

1. Register an organisation with a fresh address. Expect the button, no code.
2. Ask for a sign-in code on the women's site with a fresh address. Expect
   the code, and **no link anywhere in the email**.

If either comes out wrong, or nothing arrives at all, paste
`confirm-signup-fallback.html` instead. It has no logic in it and carries
both, each labelled. That works for everybody, at the cost of a link in a
woman's first email, and is a holding position rather than the answer.

There is a third option if the conditional turns out to be unusable: create
the account with the service role key first, `auth.admin.createUser({ email,
email_confirm: true })` followed by `signInWithOtp({ shouldCreateUser: false
})`, so a woman's mail is always Magic Link and never Confirm signup. It
works, and it puts a key that bypasses every RLS policy into the public
deployment, which is why it is third rather than first.

Three other Supabase templates exist and none of them fire: **Invite user**
(`inviteUserByEmail` is never called; the portal's colleague invite is our own
mail, through Resend), **Change email address** (`updateUser` only ever
changes a password), and **Reauthentication**. Leave them on the defaults.

## Why the women's sign-in is a code and not a link

Two reasons, and the first is a safety property rather than a preference.

A magic link in an inbox is a session. Anyone who opens that inbox and clicks
it is signed in as her, a fortnight later if they like. These emails land in
inboxes read on shared devices, which is the same reason `src/lib/email.ts`
insists subject lines stay neutral. A six digit code has to be carried back to
the device she is sitting at.

The second is that the app is built for a code and has no way to receive a
link. `src/app/account/actions.ts` calls `signInWithOtp` with no
`emailRedirectTo`, and `hws-global` has no `/auth/confirm` route. On the
Supabase default template she receives a link, clicking it sends her to the
site with tokens in the URL fragment, nothing reads them, and she lands signed
out. Sign-in is broken in a way that looks like it worked.

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
