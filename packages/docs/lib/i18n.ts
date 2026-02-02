import type { I18nConfig } from "fumadocs-core/i18n";

export const i18n: I18nConfig = {
  defaultLanguage: "en",
  languages: ["en", "zh-tw"],
  // Options:
  // - 'always': hide prefix, detect locale from cookies (not ideal for static sites)
  // - 'default-locale': only hide the default language prefix (e.g., /page for en, /zh-tw/page for zh-tw)
  // - 'never': always show prefix (e.g., /en/page, /zh-tw/page)
  hideLocale: "default-locale",
};

export type Locale = (typeof i18n.languages)[number];
