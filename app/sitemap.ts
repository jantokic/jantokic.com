import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { routing } from '@/routing';

const BASE_URL = 'https://www.jantokic.com';

export default function sitemap(): MetadataRoute.Sitemap {
	const paths = ['', '/contact', ...projects.map((project) => `/projects/${project.slug}`)];

	return paths.map((path) => ({
		url: `${BASE_URL}/${routing.defaultLocale}${path}`,
		changeFrequency: 'monthly',
		priority: path === '' ? 1 : 0.7,
		alternates: {
			languages: Object.fromEntries(routing.locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])),
		},
	}));
}
