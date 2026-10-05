import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Fully static: Cloudflare serves out/ as Workers static assets, no server code per request.
	// Locale redirects that the next-intl middleware used to do are Cloudflare redirect rules.
	output: 'export',
	images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
