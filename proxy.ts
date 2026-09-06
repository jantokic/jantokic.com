import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';

export default createMiddleware(routing);

export const config = {
	// Match all pathnames except for
	// - … if they start with `/api`, `/_next` or `/_vercel`
	// - … the ones containing a dot (e.g. `favicon.ico`, `sitemap.xml`, `robots.txt`)
	// The Open Graph image lives under `app/[locale]/` so it is served with a locale prefix.
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
