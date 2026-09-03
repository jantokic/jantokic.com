export interface ProjectDef {
	slug: string;
	category: string;
	techStack: string[];
	year: string;
	image: string;
	galleryImage: string;
	images: string[];
	featured?: boolean;
	comingSoon?: boolean;
	galleryOrder?: number;
	links?: {
		github?: string;
		x?: string;
		website?: string;
		demo?: string;
		youtube?: string;
	};
}

export const projects: ProjectDef[] = [
	{
		slug: 'starc-investing-platform',
		category: 'AI & Fintech',
		techStack: ['Go', 'TypeScript', 'Python', 'GCP', 'Cloudflare', 'RAG'],
		image: '/projects/starc/banner.png',
		galleryImage: '/projects/starc/banner.png',
		images: [],
		year: '2026',
		galleryOrder: 0,
		links: {
			website: 'https://starcinvest.com',
		},
	},
	{
		slug: 'synapse-knowledge-system',
		category: 'AI & Enterprise',
		techStack: [
			'Node.js',
			'Express',
			'PostgreSQL',
			'Supabase',
			'Prisma',
			'OpenAI Embeddings',
			'pgvector',
			'Claude Sonnet',
			'Next.js',
		],
		image: '/projects/synapse/banner.webp',
		galleryImage: '/projects/synapse/gallery.webp',
		images: ['/projects/synapse/logo.webp'],
		year: '2025',
		galleryOrder: 1,
		links: {
			demo: 'https://synapse.elia.vc/',
			github: 'https://github.com/synapsedotai/synapse',
			youtube: 'https://www.youtube.com/watch?v=H_io8qfVFmg',
		},
	},
	{
		slug: 'richard-ai-research',
		category: 'AI & Research',
		techStack: ['TypeScript', 'Next.js', 'LangChain', 'Supabase', 'RAG', 'Tool Calling'],
		image: '/projects/richard/banner.webp',
		galleryImage: '/projects/richard/gallery.webp',
		images: ['/projects/richard/logo.webp'],
		year: '2025',
		galleryOrder: 2,
		links: {
			website: 'https://www.richardseye.com/',
		},
	},
	{
		slug: 'chtype-clickhouse-toolkit',
		category: 'Open Source & Developer Tools',
		techStack: ['TypeScript', 'ClickHouse', 'Node.js', 'Code Generation', 'Open Source'],
		image: '/projects/chtype/banner.svg',
		galleryImage: '/projects/chtype/banner.svg',
		images: [],
		year: '2026',
		galleryOrder: 3,
		links: {
			github: 'https://github.com/JanTokic/chtype',
			website: 'https://chtype.jantokic.com',
		},
	},
	{
		slug: 'klarity-prediction-market',
		category: 'Fintech',
		techStack: ['TypeScript', 'Hono', 'Clickhouse', 'Kafka', 'GCP', 'Vector Search'],
		image: '/projects/klarity/banner.webp',
		galleryImage: '/projects/klarity/gallery.webp',
		images: [],
		year: '2025',
		comingSoon: true,
		galleryOrder: 4,
		links: {
			website: 'https://klarity.io',
		},
	},
	{
		slug: 'vendure-ecommerce',
		category: 'E-Commerce & Open Source',
		techStack: [
			'Node.js',
			'TypeScript',
			'Next.js',
			'Nest.js',
			'PostgreSQL',
			'Redis',
			'Docker Swarm',
			'Nx Monorepo',
			'GraphQL',
			'Open Source',
		],
		image: '/projects/vendure/banner.png',
		galleryImage: '/projects/vendure/gallery.png',
		images: ['/projects/vendure/banner.png'],
		year: '2024',
		featured: false,
		links: {
			github: 'https://github.com/vendure-ecommerce/vendure',
			website: 'https://www.vendure.io/',
		},
	},
	{
		slug: 'mira-trading-bot',
		category: 'Blockchain & Trading',
		techStack: ['Go', 'Solana', 'WebSocket', 'Real-time APIs', 'Docker', 'Monitoring Dashboards'],
		image: '/projects/mira/banner.webp',
		galleryImage: '/projects/mira/gallery.webp',
		images: ['/projects/mira/logo.webp'],
		year: '2024',
		galleryOrder: 5,
		links: {
			x: 'https://x.com/curvetools',
		},
	},
	{
		slug: 'copile-trading-platform',
		category: 'Fintech & Trading',
		techStack: ['Python', 'Node.js', 'TypeScript', 'PostgreSQL', 'WebSocket', 'Trading APIs', 'Docker'],
		image: '/projects/copile/banner.webp',
		galleryImage: '/projects/copile/gallery.webp',
		images: ['/projects/copile/logo.webp', '/projects/copile/view1.webp'],
		year: '2022',
		galleryOrder: 6,
		links: {
			x: 'https://x.com/CopileTrading',
			website: 'https://www.copile.trade/',
			github: 'https://github.com/Copile/copile-backend',
		},
	},
	{
		slug: 'neura-nft-sniping',
		category: 'Blockchain & NFT',
		techStack: ['Python', 'Solidity', 'Solana', 'Smart Contracts', 'NFT Automation', 'Real-time Systems'],
		image: '/projects/neura/banner.webp',
		galleryImage: '/projects/neura/gallery.webp',
		images: ['/projects/neura/logo.webp'],
		year: '2022',
		galleryOrder: 7,
		links: {
			x: 'https://x.com/txNeura',
			website: 'https://magiceden.io/marketplace/txneura',
		},
	},
	{
		slug: 'acidnode-validator',
		category: 'Blockchain & Infrastructure',
		techStack: [
			'Python',
			'Amazon Web Services (AWS)',
			'Blockchain',
			'Cloud Automation',
			'Cloud-Native Architecture',
			'Cloud Infrastructure',
		],
		image: '/projects/acidnode/banner.webp',
		galleryImage: '/projects/acidnode/gallery.webp',
		images: ['/projects/acidnode/logo.webp', '/projects/acidnode/view1.webp'],
		year: '2022',
		galleryOrder: 8,
	},
	{
		slug: 'dreamcook-community',
		category: 'E-Commerce & Community',
		techStack: [
			'JavaScript',
			'Python',
			'Discord.js',
			'Web Scraping',
			'Business Intelligence',
			'Content Management Systems',
		],
		image: '/projects/dreamcook/banner.webp',
		galleryImage: '/projects/dreamcook/gallery.webp',
		images: ['/projects/dreamcook/logo.webp'],
		year: '2020',
		galleryOrder: 9,
		links: {
			x: 'https://x.com/DreamCook',
		},
	},
];

export const CATEGORY_GROUPS: Record<string, string[]> = {
	AI: ['AI & Research', 'AI & Enterprise', 'AI & Fintech'],
	Blockchain: ['Blockchain & Trading', 'Blockchain & Infrastructure', 'Blockchain & NFT'],
	Fintech: ['Fintech', 'Fintech & Trading', 'AI & Fintech'],
	'E-Commerce': ['E-Commerce & Community', 'E-Commerce & Open Source', 'E-Commerce'],
	'Developer Tools': ['Open Source & Developer Tools'],
};

export function getProjectBySlug(slug: string): ProjectDef | undefined {
	return projects.find((project) => project.slug === slug);
}
