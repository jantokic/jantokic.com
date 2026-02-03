export interface Project {
  id: string;
  slug: string;
  techStack: string[];
  image: string;
  galleryImage: string;
  images: string[];
  year: string;
  links?: {
    github?: string;
    x?: string;
    website?: string;
    demo?: string;
    youtube?: string;
  };
}

export const projects: Project[] = [
  {
    id: '0',
    slug: 'klarity-prediction-market',
    techStack: ['TypeScript', 'Hono', 'Clickhouse', 'Kafka', 'GCP', 'Vector Search'],
    image: '/projects/klarity/banner.webp',
    galleryImage: '/projects/klarity/gallery.webp',
    images: [],
    year: '2025',
    links: {
      website: 'https://klarity.io'
    }
  },
  {
    id: '1',
    slug: 'richard-ai-research',
    techStack: ['TypeScript', 'Next.js', 'LangChain', 'Supabase', 'RAG', 'Tool Calling'],
    image: '/projects/richard/banner.webp',
    galleryImage: '/projects/richard/gallery.webp',
    images: ['/projects/richard/logo.webp'],
    year: '2025',
    links: {
      website: 'https://www.richardseye.com/'
    }
  },
  {
    id: '2',
    slug: 'mira-trading-bot',
    techStack: ['Go', 'Solana', 'WebSocket', 'Real-time APIs', 'Docker', 'Monitoring Dashboards'],
    image: '/projects/mira/banner.webp',
    galleryImage: '/projects/mira/gallery.webp',
    images: ['/projects/mira/logo.webp'],
    year: '2024',
    links: {
      x: 'https://x.com/curvetools'
    }
  },
  {
    id: '3',
    slug: 'copile-trading-platform',
    techStack: ['Python', 'Node.js', 'TypeScript', 'PostgreSQL', 'WebSocket', 'Trading APIs', 'Docker'],
    image: '/projects/copile/banner.webp',
    galleryImage: '/projects/copile/gallery.webp',
    images: ['/projects/copile/logo.webp', '/projects/copile/view1.webp'],
    year: '2022',
    links: {
      x: 'https://x.com/CopileTrading',
      website: 'https://www.copile.trade/',
      github: 'https://github.com/Copile/copile-backend'
    }
  },
  {
    id: '4',
    slug: 'elevantiq-ecommerce-infrastructure',
    techStack: ['Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'Docker Swarm', 'Nx Monorepo', 'Vendure', 'Infisical'],
    image: '/projects/elevantiq/banner.webp',
    galleryImage: '/projects/elevantiq/banner.webp',
    images: ['/projects/elevantiq/logo.webp'],
    year: '2024'
  },
  {
    id: '5',
    slug: 'ibm-headless-commerce',
    techStack: ['TypeScript', 'Next.js', 'Headless CMS', 'GraphQL', 'REST APIs', 'Agile'],
    image: '/projects/ibm/banner.webp',
    galleryImage: '/projects/ibm/gallery.webp',
    images: [],
    year: '2022'
  },
  {
    id: '6',
    slug: 'vendure-open-source',
    techStack: ['TypeScript', 'Node.js', 'Nest.js', 'GraphQL', 'E-Commerce', 'Open Source'],
    image: '/projects/vendure/banner.webp',
    galleryImage: '/projects/vendure/gallery.webp',
    images: [],
    year: '2024'
  },
  {
    id: '7',
    slug: 'synapse-knowledge-system',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Prisma', 'OpenAI Embeddings', 'pgvector', 'Claude Sonnet', 'Next.js'],
    image: '/projects/synapse/banner.webp',
    galleryImage: '/projects/synapse/gallery.webp',
    images: ['/projects/synapse/logo.webp'],
    year: '2025',
    links: {
      demo: 'https://synapse.elia.vc/',
      github: 'https://github.com/synapsedotai/synapse',
      youtube: 'https://www.youtube.com/watch?v=H_io8qfVFmg'
    }
  },
  {
    id: '8',
    slug: 'dreamcook-community',
    techStack: ['JavaScript', 'Python', 'Discord.js', 'Web Scraping', 'Business Intelligence', 'Content Management Systems'],
    image: '/projects/dreamcook/banner.webp',
    galleryImage: '/projects/dreamcook/gallery.webp',
    images: ['/projects/dreamcook/logo.webp'],
    year: '2020',
    links: {
      x: 'https://x.com/DreamCook'
    }
  },
  {
    id: '9',
    slug: 'acidnode-validator',
    techStack: ['Python', 'Amazon Web Services (AWS)', 'Blockchain', 'Cloud Automation', 'Cloud-Native Architecture', 'Cloud Infrastructure'],
    image: '/projects/acidnode/banner.webp',
    galleryImage: '/projects/acidnode/gallery.webp',
    images: ['/projects/acidnode/logo.webp', '/projects/acidnode/view1.webp'],
    year: '2022'
  },
  {
    id: '10',
    slug: 'neura-nft-sniping',
    techStack: ['Python', 'Solidity', 'Solana', 'Smart Contracts', 'NFT Automation', 'Real-time Systems'],
    image: '/projects/neura/banner.webp',
    galleryImage: '/projects/neura/gallery.webp',
    images: ['/projects/neura/logo.webp'],
    year: '2022',
    links: {
      x: 'https://x.com/txNeura',
      website: 'https://magiceden.io/marketplace/txneura'
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}
