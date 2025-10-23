export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  techStack: string[];
  challenges: string[];
  outcomes: string[];
  duration: string;
  category: string;
  image: string; // Banner image for hero and featured projects cards
  galleryImage: string; // Smaller image for 3D gallery
  images: string[]; // Additional images for detail view
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
    title: 'Richard - Autonomous AI Research Engine',
    shortDescription: 'Self-evolving multi-agent system that autonomously detects trends, simulates scenarios, and generates strategic insights',
    fullDescription: 'Richard is a proactive AI research engine that solves a critical knowledge work problem: strategic blind spots. Traditional tools are reactive—they only answer what you ask. Richard autonomously monitors diverse data sources, detects weak signals, and generates predictive hypotheses before users even know what questions to ask. I architected a modular multi-agent system using LangGraph orchestration, vectorized memory with Pinecone, and custom DAG-based simulation for scenario modeling. The system reduced typical research workflows from 5-8 hours to under 30 minutes while generating original strategic insights with full traceability.',
    role: 'Founding Engineer & System Architect',
    techStack: ['Python', 'GPT-4o', 'LangGraph', 'LangChain', 'Pinecone', 'LlamaIndex', 'Streamlit', 'Custom DAG Engine'],
    challenges: [
      'Architecting autonomous agents that proactively surface insights without prompting',
      'Building recursive feedback loops enabling emergent intelligence over time',
      'Implementing DAG-based scenario simulation with probabilistic confidence modeling',
      'Designing modular system architecture for independent agent iteration',
      'Creating vectorized memory layer for persistent signal correlation across domains',
      'Orchestrating stateful multi-agent chains with real-time reasoning explainability'
    ],
    outcomes: [
      'Reduced strategic research time from 5-8 hours to <30 minutes (94% efficiency gain)',
      'Generated 400+ unique insights across 8 weeks with <5% redundancy',
      'Built modular architecture enabling rapid agent swapping without system breakage',
      'Detected cross-domain pattern correlations (crypto trends + geopolitical sentiment)',
      'Delivered explainable AI with full decision tree traceability for compliance',
      'Demonstrated ROI through early detection of contrarian investment opportunities'
    ],
    duration: '3 months (Mar 2025 - Jun 2025)',
    category: 'AI & Research',
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
    title: 'Mira Trading - Solana Trading Bot',
    shortDescription: 'Ultra-low-latency Solana trading bot generating $230K profit with 8,000+ trades/month',
    fullDescription: 'As Founding Engineer, I co-founded and built Mira Trading—a high-frequency Solana trading bot written in Go. The system processes real-time social sentiment feeds, executes trades in under 300ms, and has driven $200M+ total market cap for created coins.',
    role: 'Founding Engineer & Co-Founder',
    techStack: ['Go', 'Solana', 'WebSocket', 'Real-time APIs', 'Docker', 'Monitoring Dashboards'],
    challenges: [
      'Achieving ultra-low-latency execution (300ms token deployment)',
      'Building real-time signal processor tracking social sentiment feeds',
      'Optimizing concurrency and networking for high-frequency trading',
      'Leading remote team of 3 engineers with strict uptime requirements'
    ],
    outcomes: [
      'Generated $230,000 in profit with 92% trade success rate',
      'Processed 8,000+ coin trades per month automatically',
      'Became fastest deployment solution in Solana ecosystem (<300ms)',
      'Achieved 99.5% uptime through automated monitoring and CI',
      'Drove $200M+ total market cap for created coins'
    ],
    duration: '5 months (Oct 2024 - Mar 2025)',
    category: 'Blockchain & Trading',
    image: '/projects/banners/curve_banner.webp',
    galleryImage: '/projects/gallery/mira_gallery.webp',
    images: ['/projects/views/curve_logo.webp', '/projects/views/curve_cli.webp'],
    year: '2024',
    links: {
      x: 'https://x.com/curvetools'
    }
  },
  {
    id: '3',
    slug: 'copile-trading-platform',
    title: 'Copile - B2B Crypto Trading Platform',
    shortDescription: 'Scaled crypto SaaS platform to 2100+ users, generating €35K revenue',
    fullDescription: 'As Founding Engineer at Copile, I co-founded and scaled a B2B crypto trading platform. I architected a real-time trading API in Python and Node.js, integrating 5 major exchanges and processing €1.2M+ monthly trade volume with 70%+ user retention.',
    role: 'Founding Engineer & Co-Founder',
    techStack: ['Python', 'Node.js', 'TypeScript', 'PostgreSQL', 'WebSocket', 'Trading APIs', 'Docker'],
    challenges: [
      'Integrating 5 different crypto exchange APIs reliably',
      'Building real-time charting tools and custom order types',
      'Leading cross-functional team of 4 engineers and 2 designers',
      'Establishing partnerships with institutional trading desks'
    ],
    outcomes: [
      'Scaled to 2100+ active users with €35,000 revenue',
      'Processed €1.2M+ in monthly trade volume',
      'Achieved 70%+ user retention through bi-weekly feature releases',
      'Led team of 6 (4 engineers, 2 designers) with successful sprints',
      'Secured partnerships with 2 institutional trading desks'
    ],
    duration: '18 months (Sep 2022 - Mar 2024)',
    category: 'Fintech & Trading',
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
    title: 'Elevantiq - Enterprise E-Commerce Infrastructure',
    shortDescription: 'Multi-tenant e-commerce platform processing millions of orders annually across 3 major enterprise clients',
    fullDescription: 'At Elevantiq, I worked on large-scale e-commerce infrastructure for major European B2B clients across three flagship projects. I modernized legacy systems by migrating a 7-8 repository architecture into a unified Nx monorepo, upgraded outdated Next.js and Vendure dependencies, and enhanced complex product configurators requiring direct collaboration with client engineers. I implemented Infisical (open-source secrets manager) for secure credential management, contributed to multi-tenant architectures handling millions of orders, and worked on distributed teams of 10+ engineers delivering enterprise e-commerce solutions for leading UK and European industrial companies.',
    role: 'Software Engineer',
    techStack: ['Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'Docker Swarm', 'Nx Monorepo', 'Vendure', 'Infisical'],
    challenges: [
      'Consolidating 7-8 legacy repositories into unified Nx monorepo architecture',
      'Upgrading severely outdated Next.js and Vendure dependencies across large codebase',
      'Building complex configurator with mathematical equations for engineering specifications',
      'Implementing Infisical secrets manager achieving zero security vulnerabilities',
      'Collaborating with client engineers on technical product requirements',
      'Contributing to multi-tenant architecture for 10+ person distributed team'
    ],
    outcomes: [
      'Enabled millions of orders processed annually for enterprise clients',
      'Modernized legacy DX by consolidating 7-8 repos into maintainable monorepo',
      'Delivered advanced chimney configurator with real-time engineering calculations',
      'Achieved 0 vulnerabilities through centralized secrets management with Infisical',
      'Successfully upgraded critical dependencies (Next.js, Vendure) on production systems',
      'Contributed to multi-tenant platforms for leading UK and European industrial companies'
    ],
    duration: '1.5 years (Apr 2024 - Present)',
    category: 'E-Commerce & SaaS',
    image: '/projects/banners/elevantiq_banner.webp',
    galleryImage: '/projects/gallery/elevantiq_gallery.webp',
    images: ['/projects/views/elevantiq_view1.webp', '/projects/views/elevantiq_view2.webp'],
    year: '2024'
  },
  {
    id: '5',
    slug: 'ibm-headless-commerce',
    title: 'IBM Austria - Headless Commerce Storefront',
    shortDescription: 'Vue.js e-commerce platform handling 85,000+ SKUs with dynamic promotions',
    fullDescription: 'During my internship at IBM Austria, I developed a Vue.js headless-commerce storefront backed by Magento. The system handled 85,000+ SKUs and enabled dynamic promotions and personalized ads for enterprise clients.',
    role: 'Software Engineering Intern',
    techStack: ['Vue.js', 'JavaScript', 'Magento', 'REST APIs', 'Docker'],
    challenges: [
      'Managing 85,000+ SKUs with performant UI rendering',
      'Building reusable UI components for marketing agility',
      'Optimizing API endpoints for faster promotion rollout',
      'Integrating with Magento backend for enterprise scale'
    ],
    outcomes: [
      'Reduced promotion rollout time by 40% via reusable components',
      'Enabled dynamic promotions and personalized ads at scale',
      'Successfully handled 85,000+ product SKUs',
      'Increased marketing agility for enterprise clients'
    ],
    duration: '3 months (Jul 2022 - Sep 2022)',
    category: 'E-Commerce',
    image: '/projects/banners/ibm_banner.webp',
    galleryImage: '/projects/gallery/ibm_gallery.webp',
    images: ['/projects/views/ibm_view1.webp', '/projects/views/ibm_view2.webp'],
    year: '2022'
  },
  {
    id: '6',
    slug: 'vendure-open-source',
    title: 'Vendure - Open-Source Headless Commerce',
    shortDescription: 'Contributed to Vendure (6.5k stars), trusted by IBM, Breitling, Swile, QVC',
    fullDescription: 'I contributed to Vendure, an open-source headless commerce platform with 6.5k GitHub stars, working alongside the founders. Vendure is trusted by major brands like IBM, Breitling, Swile, and QVC for enterprise e-commerce solutions.',
    role: 'Open-Source Contributor',
    techStack: ['TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'NestJS'],
    challenges: [
      'Contributing to a large-scale open-source codebase',
      'Working with enterprise-grade architecture patterns',
      'Collaborating with core team and community',
      'Maintaining backward compatibility across versions'
    ],
    outcomes: [
      'Contributed to platform trusted by IBM, Breitling, Swile, QVC',
      'Worked alongside founders on core features',
      'Helped maintain 6.5k star repository',
      'Gained deep expertise in headless commerce architecture'
    ],
    duration: 'Ongoing contributions (2024)',
    category: 'Open Source',
    image: '/projects/banners/vendure_banner.webp',
    galleryImage: '/projects/gallery/vendure_gallery.webp',
    images: ['/projects/views/vendure_view1.webp', '/projects/views/vendure_view2.webp'],
    year: '2024'
  },
  {
    id: '7',
    slug: 'synapse-knowledge-system',
    title: 'Synapse - AI Knowledge System',
    shortDescription: 'Self-learning knowledge system connecting employees with internal experts using vector search and semantic retrieval',
    fullDescription: 'At TUM.ai Hackathon, I architected the backend for Synapse—a self-learning organizational knowledge system that transforms hidden company expertise into actionable solutions. Built in 36 hours with a 5-person team, I implemented a vector embeddings pipeline using OpenAI and pgvector for semantic search, an expert ranking algorithm with relevance and freshness scoring, and integrated Claude Sonnet for tool-calling chat functionality. The system enables employees to find internal experts who previously solved identical problems through natural language queries. We placed 2nd out of all teams, delivering a fully functional MVP with live demo.',
    role: 'Backend Engineer',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Prisma', 'OpenAI Embeddings', 'pgvector', 'Claude Sonnet', 'Next.js'],
    challenges: [
      'Building vector embeddings pipeline for semantic knowledge search in 36 hours',
      'Implementing expert ranking algorithm balancing relevance and freshness scores',
      'Designing semantic chunking strategy for optimal knowledge retrieval',
      'Integrating Claude Sonnet for natural language tool-calling interface',
      'Creating real-time expert matching system with PostgreSQL and pgvector',
      'Coordinating backend/frontend integration across 5-person team under time pressure'
    ],
    outcomes: [
      'Placed 2nd in TUM.ai Hackathon with fully functional MVP (not just prototype)',
      'Built working semantic search engine connecting employees with internal experts',
      'Delivered live demo with chat, voice, and video interview capabilities',
      'Implemented scalable vector search architecture using pgvector and OpenAI',
      'Created expert ranking system with relevance and temporal decay scoring',
      'Shipped production-ready API with Prisma ORM and Express in 36 hours'
    ],
    duration: '36 hours (Oct 2025)',
    category: 'AI & Enterprise',
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
    title: 'DreamCook - E-Commerce Community Platform',
    shortDescription: 'Discord-based community platform serving 5,000+ members with real-time drop monitors and trading signals',
    fullDescription: 'At DreamCook, a B2C e-commerce consulting service, I contributed to the development of a Discord-based community platform serving 5,000+ members. The platform provided real-time product drop monitoring, automated inventory tracking, and trading signals for sneaker releases and limited-edition products. I worked on integrating various monitoring tools, bot services, and building internal dashboards to manage community features and member access. The platform evolved from sneaker monitoring to broader trading signals before shutting down in 2022.',
    role: 'Full Stack Engineer',
    techStack: ['JavaScript', 'Python', 'Discord.js', 'Web Scraping', 'Business Intelligence', 'Content Management Systems'],
    challenges: [
      'Integrating multiple third-party monitoring and bot services into unified platform',
      'Building real-time notification system for product drops across multiple retailers',
      'Managing access control and subscription tiers for 5,000+ community members',
      'Creating internal dashboards for community management and analytics',
      'Handling high-throughput real-time data feeds from various e-commerce sources',
      'Collaborating with product and design teams to translate business requirements into features'
    ],
    outcomes: [
      'Supported community growth to 5,000+ active members',
      'Delivered real-time monitoring system tracking product drops across multiple retailers',
      'Built subscription management system handling tiered member access',
      'Created analytics dashboard providing business intelligence on community engagement',
      'Enabled platform evolution from sneaker monitoring to broader trading signals',
      'Contributed to 2-year platform operation (2020-2022) before strategic shutdown'
    ],
    duration: '2 years (Jul 2020 - Jun 2022)',
    category: 'E-Commerce & Community',
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
    title: 'Acid Node - Solana Validator Infrastructure',
    shortDescription: 'B2C blockchain validator on Solana network focusing on scalability, fault tolerance, and cloud infrastructure',
    fullDescription: 'At Acid Node, I worked on the deployment and infrastructure of a B2C blockchain validator operating on the Solana network. I contributed to designing cloud solutions and microservices to enhance the financial delivery and reliability of the validator infrastructure. The role involved orchestrating deployments on AWS, implementing fault-tolerant architectures, and optimizing cloud infrastructure for high-throughput blockchain operations.',
    role: 'Backend Engineer',
    techStack: ['Python', 'Amazon Web Services (AWS)', 'Blockchain', 'Cloud Automation', 'Cloud-Native Architecture', 'Cloud Infrastructure'],
    challenges: [
      'Deploying and maintaining high-availability Solana validator infrastructure',
      'Architecting cloud solutions for blockchain operations requiring 99.9%+ uptime',
      'Implementing automated deployment pipelines for cloud-native validator services',
      'Optimizing infrastructure costs while maintaining performance and reliability',
      'Orchestrating microservices architecture for financial transaction processing',
      'Ensuring fault tolerance and disaster recovery for blockchain validator operations'
    ],
    outcomes: [
      'Deployed production-ready Solana validator infrastructure on AWS',
      'Implemented cloud automation reducing deployment time and operational overhead',
      'Architected fault-tolerant microservices for enhanced financial delivery',
      'Contributed to validator uptime and reliability in Solana network operations',
      'Built scalable cloud infrastructure supporting blockchain transaction processing',
      'Delivered cloud-native architecture enabling rapid iteration and deployment'
    ],
    duration: '5 months (Sep 2022 - Jan 2023)',
    category: 'Blockchain & Infrastructure',
    image: '/projects/banners/acidnode_banner.webp',
    galleryImage: '/projects/gallery/acidnode_gallery.webp',
    images: ['/projects/views/acidnode_view1.webp', '/projects/views/acidnode_view2.webp'],
    year: '2022'
  },
  {
    id: '10',
    slug: 'neura-nft-sniping',
    title: 'Neura - Solana NFT Sniping Bot',
    shortDescription: 'B2C NFT automation software providing real-time NFT sniping on Solana network with successful exit',
    fullDescription: 'At Neura, I developed a B2C software that automated the minting of NFTs using Python and Solidity for Smart Contracts. The platform provided customers with real-time NFT automation on the Solana network, enabling them to snipe valuable NFT drops with millisecond precision. Built as a subscription-based service, Neura helped collectors secure limited-edition NFTs from popular Solana collections. The project achieved a successful exit after establishing a strong user base and proven track record in the competitive NFT tooling space.',
    role: 'Software Engineer',
    techStack: ['Python', 'Solidity', 'Solana', 'Smart Contracts', 'NFT Automation', 'Real-time Systems'],
    challenges: [
      'Developing B2C software that automates NFT minting with millisecond precision',
      'Implementing smart contract integration for automated transactions',
      'Building real-time monitoring system for Solana NFT drops',
      'Creating reliable automation that operates during high-traffic mint events',
      'Designing user-friendly interface for non-technical NFT collectors',
      'Optimizing transaction speed to compete in high-demand NFT launches'
    ],
    outcomes: [
      'Successfully launched B2C NFT automation platform on Solana',
      'Enabled customers to secure limited-edition NFTs through automated sniping',
      'Built real-time monitoring and automation system for NFT drops',
      'Achieved successful exit with established user base',
      'Delivered proven smart contract integration for automated minting',
      'Created competitive advantage through millisecond-precision automation'
    ],
    duration: '6 months (Jan 2022 - Aug 2022)',
    category: 'Blockchain & NFT',
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

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
