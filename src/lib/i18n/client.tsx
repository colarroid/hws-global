"use client";

import { createContext, useContext, type ReactNode } from "react";
import {
  type ClientMessageKey,
  type ClientPluralKey,
  type ClientStrings,
} from "@/lib/i18n/client-keys";
import type { PluralForms } from "@/lib/i18n/plurals";

export type { ClientMessageKey, ClientPluralKey, ClientStrings };

/** Everything the browser needs to word a screen in her language. */
export type ClientBundle = {
  strings: ClientStrings;
  /** Only the refine screen's two. See client-keys.ts. */
  plurals: Record<ClientPluralKey, PluralForms>;
  /** The BCP-47 tag, for Intl.PluralRules and Intl.NumberFormat. */
  tag: string;
};

/**
 * The same translator, for the seven components that run in the browser.
 *
 * WHY THERE ARE TWO
 *
 * getTranslator reads a cookie, so it is server-only, and seven of the
 * screens a woman actually types into are client components: the three
 * question forms, the Next button they share, Save, Refine and the booking
 * form. Those had no way to reach a translated string at all, which is why
 * the find flow stayed English after the landing page was translated.
 *
 * WHY A CONTEXT AND NOT PROPS
 *
 * Threading a `copy` object through seven components is the kind of prop
 * that survives until somebody adds the eighth and forgets, and the failure
 * is silent: one English button in an Arabic form. A context cannot be
 * forgotten, because a component that does not reach it throws in
 * development rather than falling back to English.
 *
 * WHAT CROSSES THE BOUNDARY
 *
 * Only the keys in CLIENT_KEYS, resolved on the server to the one language
 * she is reading. Not the whole catalogue: that is 192 strings, most of them
 * paragraphs of landing-page prose that no client component will ever ask
 * for, and shipping them to every page would be paying for the find flow on
 * the terms of use. The list below is the contract, and it is short enough
 * to read.
 *
 * Fallback to English already happened on the server, so a lookup here is a
 * plain property access and `t` cannot be the thing that is slow on the
 * cheap Android hardware this is built for.
 */

const StringsContext = createContext<ClientBundle | null>(null);

export function StringsProvider({
  bundle,
  children,
}: {
  bundle: ClientBundle;
  children: ReactNode;
}) {
  return (
    <StringsContext.Provider value={bundle}>{children}</StringsContext.Provider>
  );
}

function useBundle(): ClientBundle {
  const bundle = useContext(StringsContext);

  if (!bundle) {
    // Loud on purpose. A silent English fallback here is the exact failure
    // this file exists to stop, and it would only ever be noticed by
    // somebody who does not read English.
    throw new Error(
      "A translation hook was called outside StringsProvider. The provider " +
        "is mounted in the root layout, so this means the component is " +
        "being rendered outside the app tree.",
    );
  }

  return bundle;
}

/**
 * A count, worded for her language, on a screen that recounts as she taps.
 *
 * Intl.PluralRules does the choosing in the browser, the same as on the
 * server, so the refine screen and the results screen cannot disagree about
 * how to say seven.
 */
export function useCount(): (key: ClientPluralKey, n: number) => string {
  const { plurals, tag } = useBundle();

  return (key, n) => {
    const forms = plurals[key];
    const rule = new Intl.PluralRules(tag).select(n) as keyof typeof forms;
    return (forms[rule] ?? forms.other).replace(
      "#",
      new Intl.NumberFormat(tag).format(n),
    );
  };
}

/**
 * `value` fills the "#" in the two keys that carry one, both of them a
 * listing name on the Save control's accessible label.
 */
export function useT(): (key: ClientMessageKey, value?: string) => string {
  const { strings } = useBundle();

  return (key, value) => {
    const text = strings[key];
    return value === undefined ? text : text.replace("#", value);
  };
}
