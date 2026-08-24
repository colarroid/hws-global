# HWS Portal

A women's navigation platform for Scotland. A woman describes what she needs
in her own words and gets a short, ranked set of trusted next steps, each with
a reason attached. Organisations post the support she finds.

## Sites

Three sites, one deployment, split by subdomain in `src/proxy.ts`:

| Host | Internal prefix | What it is |
| --- | --- | --- |
| `organisations.<domain>` | `/organisations` | The organisation portal |
| `administrator.<domain>` | `/admin` | HWS admin tools |
| `<domain>` and `www.` | `/women` | The woman-facing flow and landing page |

The prefixes are an implementation detail. Requesting one on the wrong host
404s rather than serving the same page on two URLs.

## Running locally

```bash
npm run dev
```

Then open:

- <http://organisations.localhost:3000> for the organisation portal
- <http://localhost:3000> for the woman-facing side
- <http://administrator.localhost:3000> for the admin tools

`*.localhost` resolves without a hosts-file edit in Chrome and Firefox.

## Setup

Copy `.env.example` to `.env.local` and fill it in. The Supabase project must
be created in a UK region, which is fixed at project creation.

Run the migrations in `supabase/migrations` in order.

## Build order

1. **Organisation portal** (in progress). Thirteen screens: account creation
   and recovery, four-step onboarding, posting and management.
2. **Woman-facing flow.** Twelve screens.
3. **Admin tools.** Review queue, organisation verification, Access Zone
   management. Not yet designed.
4. **Landing page** and the remaining gaps.

## Design

Tokens live in `src/app/globals.css` as Tailwind theme variables and are
shared by both sides of the platform. Playfair Display for headings, Inter for
everything else, self-hosted via `next/font`. Icons are Lucide.

WCAG 2.2 AA is a requirement: 44px minimum targets, 2px gold focus rings,
errors inline with focus moved to the message, and real labels on every field.

See `docs/DECISIONS.md` for the running log of calls made and why.
