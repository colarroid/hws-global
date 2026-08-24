-- =============================================================================
-- Seed the place lookup for question 2.
--
-- The 32 Scottish council areas, plus the towns and postcode districts most
-- likely to be typed. Question 2 accepts any level of precision, so a partial
-- postcode has to resolve to something rather than being rejected.
--
-- This is a starting set, not a complete gazetteer. Add towns as searches
-- come in: unmet_searches records what women typed and did not find.
-- =============================================================================

-- Needed for the ON CONFLICT clauses below, so re-running this is harmless.
create unique index if not exists places_name_kind_idx on places (name, kind);

insert into places (name, kind, council_area) values
  ('Aberdeen City',         'council_area', null),
  ('Aberdeenshire',         'council_area', null),
  ('Angus',                 'council_area', null),
  ('Argyll and Bute',       'council_area', null),
  ('City of Edinburgh',     'council_area', null),
  ('Clackmannanshire',      'council_area', null),
  ('Dumfries and Galloway', 'council_area', null),
  ('Dundee City',           'council_area', null),
  ('East Ayrshire',         'council_area', null),
  ('East Dunbartonshire',   'council_area', null),
  ('East Lothian',          'council_area', null),
  ('East Renfrewshire',     'council_area', null),
  ('Falkirk',               'council_area', null),
  ('Fife',                  'council_area', null),
  ('Glasgow City',          'council_area', null),
  ('Highland',              'council_area', null),
  ('Inverclyde',            'council_area', null),
  ('Midlothian',            'council_area', null),
  ('Moray',                 'council_area', null),
  ('Na h-Eileanan Siar',    'council_area', null),
  ('North Ayrshire',        'council_area', null),
  ('North Lanarkshire',     'council_area', null),
  ('Orkney Islands',        'council_area', null),
  ('Perth and Kinross',     'council_area', null),
  ('Renfrewshire',          'council_area', null),
  ('Scottish Borders',      'council_area', null),
  ('Shetland Islands',      'council_area', null),
  ('South Ayrshire',        'council_area', null),
  ('South Lanarkshire',     'council_area', null),
  ('Stirling',              'council_area', null),
  ('West Dunbartonshire',   'council_area', null),
  ('West Lothian',          'council_area', null) on conflict (name, kind) do nothing;

insert into places (name, kind, council_area) values
  ('Aberdeen',      'town', 'Aberdeen City'),
  ('Airdrie',       'town', 'North Lanarkshire'),
  ('Ayr',           'town', 'South Ayrshire'),
  ('Bathgate',      'town', 'West Lothian'),
  ('Coatbridge',    'town', 'North Lanarkshire'),
  ('Cumbernauld',   'town', 'North Lanarkshire'),
  ('Dumfries',      'town', 'Dumfries and Galloway'),
  ('Dunbartonshire','town', 'West Dunbartonshire'),
  ('Dundee',        'town', 'Dundee City'),
  ('Dunfermline',   'town', 'Fife'),
  ('East Kilbride', 'town', 'South Lanarkshire'),
  ('Edinburgh',     'town', 'City of Edinburgh'),
  ('Elgin',         'town', 'Moray'),
  ('Falkirk',       'town', 'Falkirk'),
  ('Glasgow',       'town', 'Glasgow City'),
  ('Greenock',      'town', 'Inverclyde'),
  ('Hamilton',      'town', 'South Lanarkshire'),
  ('Inverness',     'town', 'Highland'),
  ('Irvine',        'town', 'North Ayrshire'),
  ('Kilmarnock',    'town', 'East Ayrshire'),
  ('Kirkcaldy',     'town', 'Fife'),
  ('Livingston',    'town', 'West Lothian'),
  ('Motherwell',    'town', 'North Lanarkshire'),
  ('Paisley',       'town', 'Renfrewshire'),
  ('Perth',         'town', 'Perth and Kinross'),
  ('Stirling',      'town', 'Stirling'),
  ('Stornoway',     'town', 'Na h-Eileanan Siar'),
  ('Wishaw',        'town', 'North Lanarkshire')
  on conflict (name, kind) do nothing;

-- Postcode districts. Partial entry is the common case: she types "EH48"
-- and should not be asked for the rest of it.
insert into places (name, kind, council_area) values
  ('AB10', 'postcode_district', 'Aberdeen City'),
  ('DD1',  'postcode_district', 'Dundee City'),
  ('DG1',  'postcode_district', 'Dumfries and Galloway'),
  ('EH1',  'postcode_district', 'City of Edinburgh'),
  ('EH47', 'postcode_district', 'West Lothian'),
  ('EH48', 'postcode_district', 'Bathgate, West Lothian'),
  ('EH54', 'postcode_district', 'Livingston, West Lothian'),
  ('FK1',  'postcode_district', 'Falkirk'),
  ('G1',   'postcode_district', 'Glasgow City'),
  ('IV1',  'postcode_district', 'Highland'),
  ('KA1',  'postcode_district', 'East Ayrshire'),
  ('KY1',  'postcode_district', 'Fife'),
  ('ML1',  'postcode_district', 'North Lanarkshire'),
  ('PA1',  'postcode_district', 'Renfrewshire'),
  ('PH1',  'postcode_district', 'Perth and Kinross')
  on conflict (name, kind) do nothing;
