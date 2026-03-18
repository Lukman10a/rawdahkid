import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all app routes except Next internals and static files.
  // This allows unlocalized URLs (e.g. /admin/posts/new) to redirect
  // to the default locale route (e.g. /en/admin/posts/new).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};