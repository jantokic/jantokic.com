'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the 3D gallery to avoid blocking FCP (Three.js is ~2MB)
const InfiniteGallery = dynamic(() => import('@/components/InfiniteGallery'), {
	ssr: false,
	loading: () => <GalleryLoading />,
});
import { projects } from '@/lib/projects';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import AboutSection from '@/components/sections/AboutSection';
import SelectedWorkSection from '@/components/sections/SelectedWorkSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import ConnectSection from '@/components/sections/ConnectSection';

function GalleryLoading() {
	const t = useTranslations();

	return (
		<div className="h-screen w-full bg-white flex items-center justify-center">
			<div className="animate-pulse text-gray-400 font-mono text-sm">{t('gallery.loading')}</div>
		</div>
	);
}

export default function Home() {
	const router = useRouter();
	const t = useTranslations();
	const [galleryComplete, setGalleryComplete] = useState(false);
	const [resetGallery, setResetGallery] = useState(false);
	const [activeSection, setActiveSection] = useState('gallery');

	const galleryRef = useRef<HTMLElement>(null);
	const sectionsRef = useRef<(HTMLElement | null)[]>([]);

	// Map projects to gallery images (excluding certain projects)
	// Reorder so Richard appears first in the 3D gallery
	const excludedSlugs = ['vendure-ecommerce', 'ibm-headless-commerce'];
	const filteredProjects = projects.filter((project) => !excludedSlugs.includes(project.slug));

	// Move Synapse to where Richard is, and Richard to where Synapse was
	// This swaps their positions so Richard appears where Synapse currently shows
	const richardIndex = filteredProjects.findIndex(p => p.slug === 'richard-ai-research');
	const synapseIndex = filteredProjects.findIndex(p => p.slug === 'synapse-knowledge-system');

	if (richardIndex !== -1 && synapseIndex !== -1) {
		[filteredProjects[richardIndex], filteredProjects[synapseIndex]] =
		[filteredProjects[synapseIndex], filteredProjects[richardIndex]];
	}

	const projectImages = filteredProjects.map((project) => ({
		src: project.galleryImage,
		alt: project.title,
	}));

	// Handle project click - navigate to project detail page
	const handleProjectClick = (imageIndex: number) => {
		const project = filteredProjects[imageIndex];
		if (project) {
			router.push(`/projects/${project.slug}`);
		}
	};

	// Handle gallery scroll completion
	const handleScrollComplete = () => {
		setGalleryComplete(true);

		// Auto-scroll to Intro section after a brief pause
		setTimeout(() => {
			const introSection = document.getElementById('intro');
			introSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 200);
	};

	// IntersectionObserver for gallery reset
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && galleryComplete) {
						setGalleryComplete(false);
						setResetGallery(true);
						setTimeout(() => setResetGallery(false), 100);
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (galleryRef.current) {
			observer.observe(galleryRef.current);
		}

		return () => {
			if (galleryRef.current) {
				observer.unobserve(galleryRef.current);
			}
		};
	}, [galleryComplete]);

	// IntersectionObserver for section animations (fade-in on enter)
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in-up');
						entry.target.classList.remove('opacity-0');
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
		);

		if (galleryRef.current) {
			observer.observe(galleryRef.current);
		}

		sectionsRef.current.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => {
			if (galleryRef.current) {
				observer.unobserve(galleryRef.current);
			}
			sectionsRef.current.forEach((section) => {
				if (section) observer.unobserve(section);
			});
		};
	}, []);

	// Scroll-based active section tracking (works reliably across all viewports)
	useEffect(() => {
		const sectionIds = ['gallery', 'intro', 'work', 'projects', 'connect'];

		const updateActiveSection = () => {
			const viewportCenter = window.scrollY + window.innerHeight / 2;

			// Find section whose center is closest to viewport center
			let closestSection = sectionIds[0];
			let closestDistance = Infinity;

			for (const id of sectionIds) {
				const section = document.getElementById(id);
				if (section) {
					const sectionCenter = section.offsetTop + section.offsetHeight / 2;
					const distance = Math.abs(viewportCenter - sectionCenter);
					if (distance < closestDistance) {
						closestDistance = distance;
						closestSection = id;
					}
				}
			}

			setActiveSection(closestSection);
		};

		window.addEventListener('scroll', updateActiveSection, { passive: true });
		updateActiveSection();

		return () => window.removeEventListener('scroll', updateActiveSection);
	}, []);

	// Skills data
	const skills = ['TypeScript', 'Java', 'Python', 'Go', 'Next.js', 'Solana', 'DevOps', 'Databases', 'CMS', 'PIM'];

	// Work data
	const workData = [
		{
			year: '2025 - Present',
			key: 'klarity',
			techStack: ['TypeScript', 'Hono', 'Clickhouse', 'Kafka', 'GCP', 'Vector Search'],
		},
		{
			year: '2024 - Present',
			key: 'vendure',
			techStack: ['TypeScript', 'Nest.js', 'Next.js', 'PostgreSQL', 'GraphQL', 'Docker Swarm'],
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

	const scrollToSection = (sectionId: string) => {
		if (sectionId === 'gallery') {
			// Scroll to top for gallery section
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			const section = document.getElementById(sectionId);
			section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<>
			{/* Fixed Left Navigation - Desktop Only */}
			<div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
				<nav className="flex flex-col gap-4">
					{['gallery', 'intro', 'work', 'projects', 'connect'].map((section) => (
						<button
							key={section}
							onClick={() => scrollToSection(section)}
							className={`h-3 w-3 rounded-full transition-all duration-300 ${
								activeSection === section
									? 'bg-foreground scale-150'
									: 'bg-border hover:bg-muted-foreground'
							}`}
							aria-label={t('nav.scrollToSection', { section: t(`nav.${section}`) })}
						/>
					))}
				</nav>
			</div>

			<main className="min-h-screen">
				{/* 3D Gallery Section - Always Light Mode */}
				<section
					id="gallery"
					ref={galleryRef}
					className="relative h-screen bg-white"
				>
					<InfiniteGallery
						images={projectImages}
						fallbackText={t('gallery.webglFallback')}
						speed={1.2}
						zSpacing={3}
						visibleCount={12}
						falloff={{ near: 0.8, far: 14 }}
						className="h-screen w-full rounded-lg overflow-hidden"
						onImageClick={handleProjectClick}
						onScrollComplete={handleScrollComplete}
						resetGallery={resetGallery}
					/>
					<div className="h-screen inset-0 pointer-events-none absolute flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
						<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
							<span className="italic">{t('gallery.tagline1')};</span> {t('gallery.tagline2')}
						</h1>
					</div>

					<div className="text-center absolute bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold pointer-events-none mix-blend-exclusion text-white">
						{!galleryComplete ? (
							<>
								<p>{t('gallery.instructions')}</p>
								<p className="opacity-60">{t('gallery.autoplay')}</p>
							</>
						) : (
							<div className="flex flex-col items-center gap-2 animate-pulse">
								<p className="text-sm">{t('gallery.scrollDown')}</p>
								<ChevronDown className="w-6 h-6" />
							</div>
						)}
					</div>
				</section>

				{/* Intro Section */}
				<AboutSection
					ref={(el) => {
						if (el) {
							sectionsRef.current[0] = el;
						}
					}}
					skills={skills}
				/>

				{/* Selected Work Section */}
				<SelectedWorkSection
					ref={(el) => {
						if (el) {
							sectionsRef.current[1] = el;
						}
					}}
					workData={workData}
				/>

				{/* Featured Projects Section */}
				<FeaturedProjectsSection
					ref={(el) => {
						if (el) {
							sectionsRef.current[2] = el;
						}
					}}
				/>

				{/* Connect Section (includes footer) */}
				<ConnectSection
					ref={(el) => {
						if (el) {
							sectionsRef.current[3] = el;
						}
					}}
				/>
			</main>
		</>
	);
}
