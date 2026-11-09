/**
 * Which strings cross into the browser.
 *
 * Its own file, with no "use client" on it, so the server can read the list
 * to build the table and the browser can read it to type the hook, without
 * either one dragging the other across the boundary.
 */

import type { MessageKey } from "@/lib/i18n/messages";
import type { PluralKey } from "@/lib/i18n/plurals";

/**
 * Every string a client component needs.
 *
 * Adding one here and not to the provider is impossible — the provider is
 * built from this list. Adding one to a component without adding it here is
 * a type error.
 */
export const CLIENT_KEYS = [
  "flow.next",

  "nav.saved",
  "nav.settings",
  "nav.signOut",

  "q1.blank",
  "q1.title",
  "q1.placeholder",
  "q1.searchOn",
  "q1.suggestions",

  "q2.title",
  "q2.placeholder",
  "q2.unknown",
  "q2.or",
  "q2.anywhere",
  "q2.onlineOnly",
  "q2.hint",

  "q3.title",
  "q3.hint",
  "q3.privacy",

  "card.save",
  "card.saved",
  "card.saveAria",
  "card.savedAria",

  "refine.back",
  "refine.title",
  "refine.howFar",
  "refine.onlyShow",
  "refine.nothingMatches",
  "refine.tryRemoving",
  "refine.inScope",
  "refine.tryWiden",
  "refine.update",
  "scope.myArea",
  "scope.nearby",
  "scope.allScotland",
  "scope.online",
  "filter.free",
  "filter.openNow",
  "filter.noForms",

  "booking.name",
  "booking.nameNote",
  "booking.email",
  "booking.emailNote",
  "booking.phone",
  "booking.phoneNote",
  "booking.notes",
  "booking.notesNote",
  "booking.optional",
  "booking.submit",
  "photos.aria",
  "photos.credit",
  "testimonials.aria",
  "testimonials.prev",
  "testimonials.next",
  "form.sendCode",
  "form.yourCode",
  "form.codeWorks",
  "form.newCodeSent",
  "form.sendNewCode",
  "form.theCodeWeSent",
  "form.newEmail",
  "form.sendToNew",
  "form.firstName",
  "form.lastName",
  "form.phoneOptional",
  "form.phoneNote",
  "form.continue",
  "reminders.beforeDeadline",

] as const satisfies readonly MessageKey[];

export type ClientMessageKey = (typeof CLIENT_KEYS)[number];

/** Already resolved to one language, with English filled in behind it. */
export type ClientStrings = Record<ClientMessageKey, string>;

/**
 * The counts the browser has to word for itself.
 *
 * Only the refine screen. Its sentence changes as she taps a filter, so the
 * number cannot be settled on the server the way every other count on the
 * platform is. Two keys and their forms is a few hundred bytes; shipping
 * the whole plural table to get them would not be.
 */
export const CLIENT_PLURAL_KEYS = [
  "count.showingSteps",
  "count.withFilters",
] as const satisfies readonly PluralKey[];

export type ClientPluralKey = (typeof CLIENT_PLURAL_KEYS)[number];

