import { FlagBadge } from "@/components/ui/FlagBadge";
import { LOCALES } from "@/lib/i18n/locales";
import { setLanguage } from "@/app/language";

/**
 * The languages, as part of the phone panel rather than a menu beside it.
 *
 * On a phone the bar held a language control of its own, which meant two
 * things to press next to each other, one of which opened a second panel over
 * the first. Inside the list there is one thing to open and everything is in
 * it.
 *
 * Two columns rather than nine rows. Rows would be consistent with the rest
 * of the panel and would also make it sixteen rows long on a phone, which is
 * a list you scroll rather than read. The names carry themselves without the
 * short code here, since there is room for the whole word.
 *
 * No client state: it is one form of submit buttons, the same as the desktop
 * menu, so choosing a language works whether or not any JavaScript ran.
 */
export function LanguageRows({ current }: { current: string }) {
  return (
    <form
      action={setLanguage}
      className="mt-1 flex flex-col gap-2 border-t border-hairline-soft px-1 pt-3"
    >
      <span className="eyebrow px-2 text-ink-60">Language</span>

      <div className="grid grid-cols-2 gap-[2px]">
        {LOCALES.map((locale) => {
          const chosen = locale.code === current;
          return (
            <button
              key={locale.code}
              type="submit"
              name="locale"
              value={locale.code}
              lang={locale.code}
              aria-current={chosen ? "true" : undefined}
              className={`inline-flex min-h-[44px] cursor-pointer items-center gap-[10px] rounded-control border-0 px-2 py-2 text-start text-[14px] transition-colors duration-150 ease-out ${
                chosen
                  ? "bg-gold-200 font-semibold text-ink"
                  : "bg-transparent font-medium text-ink-70 hover:bg-gold-200/60 hover:text-ink"
              }`}
            >
              <FlagBadge badge={locale.badge} />
              <span className="truncate">{locale.name}</span>
            </button>
          );
        })}
      </div>
    </form>
  );
}
