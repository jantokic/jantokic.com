export interface WorkEntry {
  year: string;
  key: string;
  techStack: string[];
}

export const workData: WorkEntry[] = [
  {
    year: '2025 - Present',
    key: 'klarity',
    techStack: ['TypeScript', 'Hono', 'Clickhouse', 'Kafka', 'GCP', 'Vector Search'],
  },
  {
    year: 'Feb 2026 - Present',
    key: 'vendure',
    techStack: ['TypeScript', 'Nest.js', 'GraphQL', 'PostgreSQL', 'Open Source'],
  },
  {
    year: '2024 - Feb 2026',
    key: 'elevantiq',
    techStack: ['TypeScript', 'Next.js', 'Nest.js', 'PostgreSQL', 'Vendure', 'DevOps'],
  },
  {
    year: '2024 - 2025',
    key: 'mira',
    techStack: ['Go', 'Solana', 'GCP', 'WebSockets', 'Observability'],
  },
  {
    year: '2022-2024',
    key: 'copile',
    techStack: ['Python', 'Node.js', 'NoSQL', 'GCP'],
  },
  {
    year: '2022',
    key: 'ibm',
    techStack: ['Vue.js', 'JavaScript', 'Magento', 'Headless Commerce'],
  },
];
