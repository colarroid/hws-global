# HWS Portal

A women's navigation platform for Scotland. A woman describes what she needs in
her own words and gets a short, ranked set of trusted next steps, each with a
reason attached.

This repository is the **woman-facing flow and the landing page**, and it is the
canonical home for the database schema.

## The three repositories

The platform is three front ends over **one Supabase database**:

| Repository | What it is | Deployed at |
| --- | --- | --- |
| **hws-global** (this one) | The woman-facing flow and the landing page | the bare domain |
| [hws-organization](https://github.com/colarroid/hws-organization) | The organisation portal | `organisations.` |
| [hws-admin](https://github.com/colarroid/hws-admin) | Review queue, verification, Access Zone management | `administrator.` |

### The schema lives here, and only here

`supabase/migrations` is the single migration history for the whole platform,
and `scripts/seed-dev.mjs` is the single development seed. All schema changes
land here regardless of which front end needs them. Three repositories writing
migrations against one database would produce three divergent histories, which
is the kind of mistake that is very cheap to avoid now and very expensive to
unpick later.

### Shared code is duplicated on purpose

`src/components/ui`, `src/lib/supabase`, `src/lib/design/taxonomy.ts` and the
tokens in `src/app/globals.css` exist in all three repositories rather than as a
published package. A private registry costs more than it returns before launch.

The consequence is real: **changes to the tokens or the shared primitives have
to be applied in each repository.** Keep that surface small. If it starts
drifting, extract it to a package rather than letting three versions diverge.

The woman-facing result card is the one genuinely shared component. Screen 11 of
the organisation portal renders the real card rather than a mock of it, so it
lives in both repositories and the two must match.

## Running locally

```bash
npm install
npm run dev
```

Runs on <http://localhost:3000>. The other two use 3001 and 3002 so all three
can run at once.

Copy `.env.example` to `.env.local` and fill it in.

## Database

Run the migrations in `supabase/migrations` in order. Then, for development
data:

```bash
node --env-file=.env.local scripts/seed-dev.mjs
```

That creates one confirmed organisation account with listings covering every
dashboard state, so the organisation portal can be exercised without going
through the email confirmation loop.

## Build order

1. **Organisation portal.** Groups A and B complete, dashboard done. Post a
   solution, preview, submitted and organisation still to build.
2. **Woman-facing flow.** Twelve screens. Not started.
3. **Admin tools.** Not designed.
4. **Landing page** and the remaining gaps.

## Design

Tokens are in `src/app/globals.css` as Tailwind theme variables. Playfair
Display for headings, Inter for everything else, self-hosted via `next/font`.
Icons are Lucide.

WCAG 2.2 AA: 44px minimum targets, 2px gold focus rings, errors inline with
focus moved to the message, and a real label tied to every input.

See `docs/DECISIONS.md` for the running log of calls made and why.
