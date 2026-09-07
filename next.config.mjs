import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		// Klarity was renamed to Implyra; keep the old project URL working.
		return [
			{ source: '/projects/klarity-prediction-market', destination: '/projects/implyra', permanent: true },
			{
				source: '/:locale(en|de)/projects/klarity-prediction-market',
				destination: '/:locale/projects/implyra',
				permanent: true,
			},
		];
	},
};

export default withNextIntl(nextConfig);
