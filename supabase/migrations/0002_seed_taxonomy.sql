-- =============================================================================
-- Seed the two admin-owned taxonomies.
--
-- These are starting values, not fixed ones. Once the admin tools ship, HWS
-- edits both from the interface and this file stops being the source.
--
-- Zone order follows the organisation prototype's ZONES array, which puts
-- Career first. The brief's table lists them in a different order; the
-- designs override, and sort_order is admin-editable either way.
-- =============================================================================

insert into access_zones (slug, name, focus, sort_order) values
  ('career-confidence-employability',
   'Career, Confidence & Employability',
   'Employment pathways, workforce participation, professional growth', 1),

  ('enterprise-business-growth',
   'Enterprise & Business Growth',
   'Growth, scaling, entrepreneurship, procurement', 2),

  ('funding-finance',
   'Funding & Finance',
   'Access to capital, financial resilience', 3),

  ('education-pathways',
   'Education & Pathways',
   'Learning, capability development, lifelong skills', 4),

  ('health-wellbeing',
   'Health & Wellbeing',
   'Sustainable participation through health and wellbeing', 5),

  ('business-infrastructure-professional-services',
   'Business Infrastructure & Professional Services',
   'Practical services to start, operate and grow', 6),

  ('womens-voice-leadership-civic-influence',
   'Women''s Voice, Leadership & Civic Influence',
   'Representation, leadership, civic participation', 7),

  ('visibility-marketplace-opportunities',
   'Visibility, Marketplace & Opportunities',
   'Reaching audiences, creating opportunities', 8);

-- Housing, safety and rights, support for new Scots, and caring and family
-- life have no zone. Until HWS decides whether to create them, the
-- "None of these fit?" panel routes those organisations to a person via
-- hand_routing_requests. Nothing here should be added speculatively.

-- The situation chips. The first eleven are shared: a woman picks them on
-- question 3 and an organisation tags a listing with them. "Prefer not to
-- say" is woman_only, since it is an answer she can give but never a tag a
-- listing can hold.
insert into situations (slug, label, sort_order, woman_only) values
  ('returning-to-work',       'Returning to work',              1,  false),
  ('unpaid-carer',            'Unpaid carer',                   2,  false),
  ('pregnant-or-new-parent',  'Pregnant or new parent',         3,  false),
  ('starting-or-growing',     'Starting or growing a business', 4,  false),
  ('looking-for-funding',     'Looking for funding',            5,  false),
  ('changing-career',         'Changing career',                6,  false),
  ('recently-graduated',      'Recently graduated',             7,  false),
  ('new-to-scotland',         'New to Scotland',                8,  false),
  ('rural-or-island',         'Rural or island community',      9,  false),
  ('financial-difficulty',    'Experiencing financial difficulty', 10, false),
  ('looking-after-my-health', 'Looking after my health',        11, false),
  ('prefer-not-to-say',       'Prefer not to say',              12, true);
