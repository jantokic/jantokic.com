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
  image: string;
  images: string[];
  year: string;
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
    duration: '8 weeks (2024)',
    category: 'AI & Research',
    image: '/projects/richard_banner.jpeg',
    images: ['/projects/richard_banner.jpeg', '/projects/richard_banner.jpeg'],
    year: '2025'
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
    duration: '3 months (Oct 2024 - Present)',
    category: 'Blockchain & Trading',
    image: '/projects/curve_banner.jpeg',
    images: ['/projects/curve_logo.jpg', '/projects/curve_cli.png'],
    year: '2024'
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
    image: '/projects/copilelanding1.jpeg',
    images: ['/projects/copilelanding1.jpeg', '/projects/copilelanding1.jpeg'],
    year: '2023'
  },
  {
    id: '4',
    slug: 'elevantiq-order-processing',
    title: 'Elevantiq - High-Throughput Order Processing',
    shortDescription: 'Order-processing system handling 10M+ orders/month, enabling €130M annual revenue',
    fullDescription: 'At Elevantiq, I architected and launched a distributed order-processing system that powers the core of their e-commerce operations. I boosted performance by 45% through async job queues, database sharding, and in-memory caching—cutting latency by 60%.',
    role: 'Software Engineer II',
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker Swarm', 'Nx Monorepo', 'Vendure'],
    challenges: [
      'Scaling to handle 10 million+ orders per month',
      'Reducing order-processing latency from 200ms to 80ms',
      'Implementing centralized secrets management (achieving 0 vulnerabilities)',
      'Delivering a 4-month project in 2 months with 40+ backlog tickets'
    ],
    outcomes: [
      'Enabled €130 million annual revenue through reliable processing',
      'Boosted performance by 45% via async queues and caching',
      'Achieved 0 vulnerabilities in 12 months (100% credential-leak prevention)',
      'Cleared 40+ backlog tickets single-handedly',
      'Contributed to open-source Vendure (6.5k stars, trusted by IBM, Breitling)'
    ],
    duration: '9 months (Apr 2024 - Present)',
    category: 'E-Commerce & SaaS',
    image: '/projects/microservices.webp',
    images: ['/projects/microservices.webp', '/projects/microservices-2.webp'],
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
    image: '/projects/api-gateway.webp',
    images: ['/projects/api-gateway.webp', '/projects/api-gateway-2.webp'],
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
    image: '/projects/auth-service.webp',
    images: ['/projects/auth-service.webp', '/projects/auth-service-2.webp'],
    year: '2024'
  },
  {
    id: '7',
    slug: 'secrets-management',
    title: 'Centralized Secrets Management Solution',
    shortDescription: 'Security infrastructure achieving 0 vulnerabilities in 12 months',
    fullDescription: 'At Elevantiq, I rolled out a centralized secrets-management solution that hardened security across all services. The implementation achieved 0 vulnerabilities over 12 months and reduced credential-leak risk by 100%.',
    role: 'Software Engineer II',
    techStack: ['Docker Secrets', 'Vault', 'Kubernetes', 'CI/CD', 'Security Auditing'],
    challenges: [
      'Migrating existing credentials without service downtime',
      'Implementing automated secret rotation',
      'Ensuring compliance with security best practices',
      'Training team on secure credential management'
    ],
    outcomes: [
      'Achieved 0 vulnerabilities in 12 months of operation',
      'Reduced credential-leak risk by 100%',
      'Automated secret rotation across all services',
      'Passed security audits with zero findings'
    ],
    duration: '2 months (2024)',
    category: 'Security & DevOps',
    image: '/projects/notification-system.webp',
    images: ['/projects/notification-system.webp', '/projects/notification-system-2.webp'],
    year: '2024'
  },
  {
    id: '8',
    slug: 'docker-swarm-deployment',
    title: 'Docker Swarm Deployment Pipeline',
    shortDescription: 'Built deployment infrastructure enabling 2-month delivery of 4-month project',
    fullDescription: 'I introduced an Nx monorepo setup and built out Docker Swarm deployments at Elevantiq, dramatically improving developer experience and deployment speed. This infrastructure enabled delivery of a 4-month project in just 2 months.',
    role: 'Software Engineer II',
    techStack: ['Docker Swarm', 'Nx Monorepo', 'CI/CD', 'Bash', 'Node.js', 'TypeScript'],
    challenges: [
      'Setting up monorepo for multiple interconnected services',
      'Configuring Docker Swarm for production deployments',
      'Implementing efficient caching and build optimization',
      'Creating developer-friendly deployment workflows'
    ],
    outcomes: [
      'Delivered 4-month project in 2 months through improved DX',
      'Streamlined deployment process across all services',
      'Reduced build times with Nx caching',
      'Enabled parallel development across teams'
    ],
    duration: '1 month (2024)',
    category: 'DevOps & Infrastructure',
    image: '/projects/inventory-api.webp',
    images: ['/projects/inventory-api.webp', '/projects/inventory-api-2.webp'],
    year: '2024'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
