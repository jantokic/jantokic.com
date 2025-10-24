export interface Project {
  id: string;
  slug: string;
  techStack: string[];
  duration: string;
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
    id: '1',
    slug: 'richard-ai-research',
    techStack: ['TypeScript', 'Next.js', 'LangChain', 'Supabase', 'RAG', 'Tool Calling'],
    duration: 'Mar 2025 - Present',
    image: '/projects/banners/richard_banner.webp',
    galleryImage: '/projects/gallery/richard_gallery.webp',
    images: ['/projects/views/richard_view1.webp', '/projects/views/richard_view2.webp'],
    year: '2025',
    links: {
      website: 'https://www.richardseye.com/'
    }
  },
  {
    id: '2',
    slug: 'mira-trading-bot',
    techStack: ['Go', 'Solana', 'WebSocket', 'Real-time APIs', 'Docker', 'Monitoring Dashboards'],
    duration: '5 months (Oct 2024 - Mar 2025)',
    image: '/projects/banners/curve_banner.webp',
    galleryImage: '/projects/gallery/curve_gallery.webp',
    images: ['/projects/views/curve_logo.webp', '/projects/views/curve_cli.webp'],
    year: '2024',
    links: {
      x: 'https://x.com/curvetools'
    }
  },
  {
    id: '3',
    slug: 'copile-trading-platform',
    techStack: ['Python', 'Node.js', 'TypeScript', 'PostgreSQL', 'WebSocket', 'Trading APIs', 'Docker'],
    duration: '18 months (Sep 2022 - Mar 2024)',
    image: '/projects/banners/copile_banner.webp',
    galleryImage: '/projects/gallery/copile_gallery.webp',
    images: ['/projects/views/copile_view1.webp', '/projects/views/copile_view2.webp'],
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
    duration: '1.5 years (Apr 2024 - Present)',
    image: '/projects/banners/elevantiq_banner.webp',
    galleryImage: '/projects/gallery/elevantiq_gallery.webp',
    images: ['/projects/views/elevantiq_view1.webp', '/projects/views/elevantiq_view2.webp'],
    year: '2024'
  },
  {
    id: '5',
    slug: 'ibm-headless-commerce',
    techStack: ['TypeScript', 'Next.js', 'Headless CMS', 'GraphQL', 'REST APIs', 'Agile'],
    duration: '3 months (Jul 2022 - Sep 2022)',
    image: '/projects/banners/ibm_banner.webp',
    galleryImage: '/projects/gallery/ibm_gallery.webp',
    images: ['/projects/views/ibm_view1.webp', '/projects/views/ibm_view2.webp'],
    year: '2022'
  },
  {
    id: '6',
    slug: 'vendure-open-source',
    techStack: ['TypeScript', 'Node.js', 'Nest.js', 'GraphQL', 'E-Commerce', 'Open Source'],
    duration: 'Ongoing contributions (2024)',
    image: '/projects/banners/vendure_banner.webp',
    galleryImage: '/projects/gallery/vendure_gallery.webp',
    images: ['/projects/views/vendure_view1.webp', '/projects/views/vendure_view2.webp'],
    year: '2024'
  },
  {
    id: '7',
    slug: 'synapse-knowledge-system',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Prisma', 'OpenAI Embeddings', 'pgvector', 'Claude Sonnet', 'Next.js'],
    duration: '36 hours (Oct 2025)',
    image: '/projects/banners/synapse_banner.webp',
    galleryImage: '/projects/gallery/synapse_gallery.webp',
    images: ['/projects/views/synapse_view1.webp', '/projects/views/synapse_view2.webp'],
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
    duration: '2 years (Jul 2020 - Jun 2022)',
    image: '/projects/banners/dreamcook_banner.webp',
    galleryImage: '/projects/gallery/dreamcook_gallery.webp',
    images: ['/projects/views/dreamcook_view1.webp', '/projects/views/dreamcook_view2.webp'],
    year: '2020',
    links: {
      x: 'https://x.com/DreamCook'
    }
  },
  {
    id: '9',
    slug: 'acidnode-validator',
    techStack: ['Python', 'Amazon Web Services (AWS)', 'Blockchain', 'Cloud Automation', 'Cloud-Native Architecture', 'Cloud Infrastructure'],
    duration: '5 months (Sep 2022 - Jan 2023)',
    image: '/projects/banners/acidnode_banner.webp',
    galleryImage: '/projects/gallery/acidnode_gallery.webp',
    images: ['/projects/views/acidnode_view1.webp', '/projects/views/acidnode_view2.webp'],
    year: '2022'
  },
  {
    id: '10',
    slug: 'neura-nft-sniping',
    techStack: ['Python', 'Solidity', 'Solana', 'Smart Contracts', 'NFT Automation', 'Real-time Systems'],
    duration: '6 months (Jan 2022 - Aug 2022)',
    image: '/projects/banners/neura_banner.webp',
    galleryImage: '/projects/gallery/neura_gallery.webp',
    images: ['/projects/views/neura_view1.webp', '/projects/views/neura_view2.webp'],
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
