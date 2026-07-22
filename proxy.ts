import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Locale routing runs in Next.js 16's Proxy (formerly Middleware). next-intl's
 * middleware handles locale detection and redirects `/` to the default locale.
 */
export default createMiddleware(routing);

export const config = {
  // Match all paths except Next internals, the API, and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
