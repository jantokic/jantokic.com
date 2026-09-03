export interface WorkEntry {
	year: string;
	key: string;
	techStack: string[];
	/** Co-founded and run alongside full-time employment */
	venture?: boolean;
}

export const workData: WorkEntry[] = [
	{
		year: 'Apr - Sep 2026',
		key: 'starc',
		techStack: ['Go', 'TypeScript', 'GCP', 'Cloudflare', 'RAG', 'Python', 'AI/DevOps'],
	},
	{
		year: '2024 - 2026',
		key: 'vendure',
		techStack: ['TypeScript', 'Nest.js', 'Next.js', 'PostgreSQL', 'GraphQL', 'Docker Swarm'],
	},
	{
		year: '2024 - 2025',
		key: 'mira',
		techStack: ['Go', 'Solana', 'GCP', 'WebSockets', 'Observability'],
		venture: true,
	},
	{
		year: '2022-2024',
		key: 'copile',
		techStack: ['Python', 'Node.js', 'NoSQL', 'GCP'],
		venture: true,
	},
	{
		year: '2022',
		key: 'ibm',
		techStack: ['Vue.js', 'JavaScript', 'Magento', 'Headless Commerce'],
	},
];
