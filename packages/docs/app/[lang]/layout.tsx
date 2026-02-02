import { InkeepBubble } from "@/components/inkeep-bubble";
import InkeepSearchBox from "@/components/inkeep-search";
import Scroller from "@/components/scroller";
import { i18n, type Locale } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/react";
import { Banner } from "fumadocs-ui/components/banner";
import { I18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { notFound } from "next/navigation";
import { type ReactNode, Suspense } from "react";

// Define locale display names
const locales = [
  { name: "English", locale: "en" },
  { name: "繁體中文", locale: "zh-tw" },
];

// Optional: Define translations for each locale
const translations: Record<string, Record<string, string>> = {
  "zh-tw": {
    search: "搜尋",
    searchNoResult: "找不到結果",
    toc: "目錄",
    tocNoHeadings: "沒有標題",
    lastUpdate: "最後更新",
    chooseLanguage: "選擇語言",
    nextPage: "下一頁",
    previousPage: "上一頁",
    chooseTheme: "選擇主題",
    editOnGithub: "在 GitHub 上編輯",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Validate the locale
  if (!i18n.languages.includes(lang as Locale)) {
    notFound();
  }

  return (
    <>
      <Banner id="zod4">
        💎 Zod 4 is now stable! <span>&nbsp;</span>
        <a className="underline" href={lang === "en" ? "/v4" : `/${lang}/v4`}>
          Read the announcement.
        </a>
      </Banner>
      <InkeepBubble />
      <Analytics />
      <I18nProvider locale={lang} locales={locales} translations={translations[lang]}>
        <RootProvider
          search={{
            enabled: true,
            SearchDialog: InkeepSearchBox,
          }}
          theme={{}}
        >
          {children}
        </RootProvider>
      </I18nProvider>
      <Suspense fallback={null}>
        <Scroller />
      </Suspense>
    </>
  );
}
