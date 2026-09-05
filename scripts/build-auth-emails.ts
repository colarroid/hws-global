import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import {
  emailButton,
  emailCode,
  emailLayout,
  emailText,
} from "../src/emails/layout.ts";

/**
 * Generates the Supabase auth email templates from the same layout the app's
 * own email uses.
 *
 * Supabase keeps these in the project rather than in a repository, so they
 * are the one set of email that nothing here compiles, nothing here tests,
 * and nobody notices drifting. Hand-writing them to look like the rest was
 * how they came to look nothing like the rest.
 *
 * So they are built instead. Change layout.ts, run `npm run emails:auth`, and
 * paste the three files. What comes out is the same shell, the same logo, the
 * same card and the same footer as the reminder and decision emails, because
 * it is literally the same function.
 *
 * Placeholders are Supabase's own and are passed through the body, which the
 * layout does not escape. Nothing here is interpolated from user input.
 *
 *   {{ .Token }}            the six digit code
 *   {{ .ConfirmationURL }}  the link, honouring emailRedirectTo
 *   {{ .RedirectTo }}       the emailRedirectTo value on its own
 *   {{ .TokenHash }}        the hashed token, for building a link by hand
 *
 * Run with: npm run emails:auth
 */

const OUT = join(import.meta.dirname, "..", "supabase", "email-templates");

/**
 * The women's sign-in. A code, and deliberately no link anywhere.
 *
 * A magic link sitting in an inbox is a session: whoever opens that inbox is
 * signed in as her, a fortnight later if they like. These land in inboxes
 * read on shared devices, which is the same reason sendEmail insists subject
 * lines stay neutral. A code has to be carried back to the device she is at.
 */
const magicLink = emailLayout({
  preheader: "Your sign-in code",
  heading: "Your sign-in code",
  body:
    emailText("Enter this on the page you have open. It works for 15 minutes.") +
    emailCode("{{ .Token }}") +
    emailText(
      "If you did not ask to sign in, you can ignore this. Nobody can get in without the code, and we will not email you again about it.",
      "muted",
    ),
});

/**
 * Confirm signup, which two flows share and which is the reason a woman
 * signing in for the first time was still getting a link.
 *
 * `signInWithOtp` does not send the Magic Link template to an address that
 * has no account yet. With `shouldCreateUser: true` it is creating the
 * account, so GoTrue sends **Confirm signup** instead, and Magic Link is only
 * reached from her second sign-in onwards. Changing the Magic Link template
 * therefore does nothing at all for a new user, which is exactly the symptom:
 * a link, in the old design, from a template nobody had touched.
 *
 * One Supabase project means one Confirm signup template and two audiences
 * needing opposite things from it. A woman needs the code; an organisation
 * registering with a password needs the button, because /auth/confirm is
 * where its account is confirmed and signed out again.
 *
 * It carried both for a while, which was wrong: a woman's sign-in is one
 * flow whether it is her first time or her fiftieth, and it is a code every
 * time. A link in her email is a session sitting in an inbox, and putting one
 * there because an organisation needs it is making her carry somebody else's
 * requirement.
 *
 * So it splits on the role, which both calls already set: `role: "woman"`
 * from `signInWithOtp` on the women's site, `role: "organisation"` from
 * `signUp` in the portal. GoTrue renders templates with Go's text/template,
 * so the `if` is real syntax rather than a Supabase feature.
 *
 * The heading and the preheader stay neutral across both branches, because
 * they are read in the inbox list by whoever is looking over her shoulder.
 */
/**
 * `printf "%v"` rather than a bare `eq .Data.role "woman"`.
 *
 * Go's `eq` refuses to compare a missing key against a string and fails the
 * whole render, which would mean no email at all rather than the wrong half
 * of one. Coercing to a string first cannot error, and anything that is not
 * exactly "woman" falls to the organisation branch, which is the safer way
 * round: an organisation seeing a code it does not need is untidy, a woman
 * seeing a link is the thing we are removing.
 */
const roleIs = (role: string) => `{{ if eq (printf "%v" .Data.role) "${role}" }}`;
const orElse = "{{ else }}";
const endIf = "{{ end }}";

const confirmSignup = emailLayout({
  preheader: "Confirming it is you.",
  heading: "Confirming it is you",
  body:
    roleIs("woman") +
    emailText(
      "Here is your code. Enter it on the page you have open. It works for 15 minutes.",
    ) +
    emailCode("{{ .Token }}") +
    emailText(
      "If you did not ask to sign in, you can ignore this. Nobody can get in without the code, and we will not email you again about it.",
      "muted",
    ) +
    orElse +
    emailText(
      "You have started listing your support on HWS Path Grid. Confirm this address and you can carry on where you left off.",
    ) +
    emailButton("Confirm my address", "{{ .ConfirmationURL }}") +
    emailText(
      "If you did not start this, ignore this email. Nothing happens until the address is confirmed.",
      "muted",
    ) +
    endIf,
});

/**
 * The organisation portal's password reset.
 *
 * Says what happens if it was not them, because that is the sentence somebody
 * reads first when a reset email arrives unasked.
 */
const resetPassword = emailLayout({
  preheader: "Set a new password for your HWS Path Grid account.",
  heading: "Set a new password",
  body:
    emailText(
      "Somebody asked to reset the password on this address. If that was you, here is the way in.",
    ) +
    emailButton("Set a new password", "{{ .ConfirmationURL }}") +
    emailText(
      "The link works once. If it was not you, ignore this email and your password stays exactly as it is.",
      "muted",
    ),
});

mkdirSync(OUT, { recursive: true });

/**
 * The version to paste back if the conditional misbehaves.
 *
 * Nothing here can fail to render, because there is no template logic in it:
 * whoever opens it finds the thing they were sent for. It is the fallback
 * rather than the default because a woman's email should not carry a link,
 * and this one does.
 */
const confirmSignupFallback = emailLayout({
  preheader: "Confirming it is you.",
  heading: "Confirming it is you",
  body:
    emailText(
      "If you are signing in to look for support, this is your code. Enter it on the page you have open. It works for 15 minutes.",
    ) +
    emailCode("{{ .Token }}") +
    emailText(
      "If you are registering an organisation, use this instead to confirm your address.",
      "muted",
    ) +
    emailButton("Confirm my address", "{{ .ConfirmationURL }}") +
    emailText(
      "If you did not start either of these, ignore this email. Nothing happens until somebody uses one of them.",
      "muted",
    ),
});

const files: [string, string][] = [
  ["magic-link.html", magicLink],
  ["confirm-signup.html", confirmSignup],
  ["confirm-signup-fallback.html", confirmSignupFallback],
  ["reset-password.html", resetPassword],
];

for (const [name, html] of files) {
  writeFileSync(join(OUT, name), html + "\n");
  console.log(`wrote supabase/email-templates/${name}`);
}

console.log(
  "\nPaste each into Authentication -> Emails in the Supabase dashboard.\n" +
    "See the README in that folder for the subjects and the two settings.",
);
