import { createI18nMiddleware } from "fumadocs-core/i18n";
import { i18n } from "@/lib/i18n";

export default createI18nMiddleware(i18n);

export const config = {
  // Skip middleware for API routes, static files, images, and favicon
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logo|og.png|llms).*)"],
};
