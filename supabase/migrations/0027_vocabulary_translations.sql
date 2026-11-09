-- Access Zones and situations, in the languages the platform offers.
--
-- WHY THIS IS A TABLE AND NOT A FILE
--
-- Everything else woman-facing is translated in src/lib/i18n: the interface
-- strings, the fixed taxonomies, the FAQ. Those are all fixed by the design,
-- so a file is the right home and a change to one is a release.
--
-- Zones and situations are not. They are admin-owned on purpose, so HWS can
-- add, rename or retire one without waiting for a deploy. Putting their
-- translations in a file would quietly take that back: adding a ninth zone
-- would mean a code change in eleven languages before any woman reading in
-- Arabic could see it. So the translations live beside the thing they
-- translate, and the admin tool can own both.
--
-- SHAPE
--
-- One row per (thing, field, language). Not eleven columns per field, which
-- would make adding a twelfth language a migration, and not a jsonb blob,
-- which would make "which languages is this zone missing" a question you
-- cannot ask in SQL.
--
-- ENGLISH IS NOT IN HERE. It lives in access_zones.name, access_zones.focus,
-- situations.label and situations.match_phrase, and stays the single source
-- of truth. A row with locale 'en' would be a second place for the same
-- sentence to live, and the two would drift. The check refuses it.
--
-- NO FOREIGN KEY, deliberately. `entity` means this table points at two
-- different parents, which one constraint cannot express. The slug is a
-- stable key — it is in the URL of every zone page — so orphans are rare,
-- and `npm run check:vocab` reports them along with any language that is
-- short of a translation. A trigger pair was the alternative and it would
-- have made renaming a slug fail at write time in the admin tool rather
-- than show up as a line in a report, which is the worse failure of the two.

create table vocabulary_translations (
  -- Which table the slug belongs to.
  entity     text        not null,
  -- The parent's slug, which is stable and already public.
  slug       text        not null,
  -- Which column of the parent this translates.
  field      text        not null,
  -- A locale code from src/lib/i18n/locales.ts.
  locale     text        not null,
  value      text        not null,
  updated_at timestamptz not null default now(),

  primary key (entity, slug, field, locale),

  constraint vocabulary_entity_known
    check (entity in ('access_zone', 'situation')),

  -- Each parent has its own translatable columns, and naming them here is
  -- what stops a typo becoming a row that nothing ever reads.
  constraint vocabulary_field_known check (
    (entity = 'access_zone' and field in ('name', 'focus'))
    or (entity = 'situation' and field in ('label', 'match_phrase'))
  ),

  constraint vocabulary_not_english
    check (locale <> 'en'),

  -- A blank translation is worse than a missing one: missing falls back to
  -- English and reads as untranslated, blank renders as an empty chip.
  constraint vocabulary_value_not_blank
    check (btrim(value) <> '')
);

comment on table vocabulary_translations is
  'Translations for the admin-owned vocabularies. English stays in the parent tables.';

-- The read is always "every translation for one language", once per request.
create index vocabulary_translations_locale_idx
  on vocabulary_translations (locale);

alter table vocabulary_translations enable row level security;

-- Public copy, read by anyone, including signed-out women. The parent's own
-- policy is what hides a retired zone; this table holds no secrets of its
-- own and filtering it twice would only make an orphan invisible instead of
-- reportable.
create policy vocabulary_public_read
  on vocabulary_translations for select using (true);

create policy vocabulary_admin_write
  on vocabulary_translations for all using (is_admin()) with check (is_admin());

create trigger vocabulary_translations_touch
  before update on vocabulary_translations
  for each row execute function touch_updated_at();
