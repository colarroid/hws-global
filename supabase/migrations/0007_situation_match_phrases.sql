-- =============================================================================
-- Give each situation the phrase used in "Why this matched you".
--
-- The chip labels are a mix of verb phrases ("Returning to work") and noun
-- phrases ("Unpaid carer"), so no single sentence template fits all twelve.
-- Building the reason from the label produced "you told us you're unpaid
-- carer", which is the sort of thing that makes a platform sound like a
-- machine talking about her rather than to her.
--
-- The phrase is data rather than code for the same reason the labels are: an
-- admin can add a situation, and it needs to read properly the moment they
-- do. A missing phrase falls back to the label.
-- =============================================================================

alter table situations add column match_phrase text;

comment on column situations.match_phrase is
  'Second person fragment used in the match reason, lower case and with no '
  'trailing full stop: "you''re returning to work". Set this whenever you add '
  'a situation, or the reason falls back to the raw label.';

update situations set match_phrase = case slug
  when 'returning-to-work'       then 'you''re returning to work'
  when 'unpaid-carer'            then 'you care for someone'
  when 'pregnant-or-new-parent'  then 'you''re pregnant or a new parent'
  when 'starting-or-growing'     then 'you''re starting or growing a business'
  when 'looking-for-funding'     then 'you''re looking for funding'
  when 'changing-career'         then 'you''re changing career'
  when 'recently-graduated'      then 'you''ve recently graduated'
  when 'new-to-scotland'         then 'you''re new to Scotland'
  when 'rural-or-island'         then 'you''re in a rural or island community'
  when 'financial-difficulty'    then 'money is tight just now'
  when 'looking-after-my-health' then 'you''re looking after your health'
  else match_phrase
end
where slug <> 'prefer-not-to-say';
