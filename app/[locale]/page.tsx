'use client';

import { ArrowUpRight, ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import AboutSection from '@/components/sections/AboutSection';
import ConnectSection from '@/components/sections/ConnectSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import SelectedWorkSection from '@/components/sections/SelectedWorkSection';
import { projects } from '@/content/projects';
import { skills } from '@/content/skills';
import { socialLinks } from '@/content/social';
import { workData } from '@/content/work';

// The 3D gallery pulls in Three.js (~2 MB). It is only rendered on large screens without
// reduced-motion or data-saver preferences, so phones never download it.
const InfiniteGallery = dynamic(() => import('@/components/InfiniteGallery'), {
	ssr: false,
	loading: () => <GalleryLoading />,
});

type GalleryMode = 'pending' | '3d' | 'static';

function GalleryLoading() {
	return <div className="absolute inset-0 bg-white" aria-hidden="true" />;
}

function HeroContent({ blend, locale }: { blend: boolean; locale: string }) {
	const t = useTranslations();
	const github = socialLinks.find((link) => link.platform === 'GitHub')?.url ?? 'https://github.com/jantokic';

	// `blend` = rendered over the always-white 3D gallery, so colours are fixed rather than themed.
	const textClass = blend ? 'text-neutral-950' : 'text-foreground';
	const mutedClass = blend ? 'text-neutral-600' : 'text-muted-foreground';
	const ctaClass = blend
		? 'border-neutral-300 text-neutral-950 hover:bg-neutral-950 hover:text-white'
		: 'border-border text-foreground hover:bg-foreground hover:text-background';

	return (
		<div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
			<div className="max-w-2xl space-y-6">
				<p className={`font-mono uppercase text-[11px] sm:text-xs tracking-[0.2em] font-semibold ${mutedClass}`}>
					{t('hero.eyebrow')}
				</p>
				<h1 className={`font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none ${textClass}`}>
					{t('intro.name')}
				</h1>
				<p className={`text-lg sm:text-xl lg:text-2xl leading-snug max-w-xl ${textClass}`}>{t('hero.tagline')}</p>
				<ul className="space-y-1.5">
					{(t.raw('hero.proof') as string[]).map((item) => (
						<li
							key={item}
							className={`font-mono uppercase text-[11px] sm:text-xs tracking-wider font-semibold flex items-start gap-2 ${mutedClass}`}
						>
							<span aria-hidden="true">→</span>
							<span>{item}</span>
						</li>
					))}
				</ul>
				<div className="flex flex-wrap gap-3 pt-2 pointer-events-auto">
					<a
						href={`/cv_jan_tokic_${locale}.pdf`}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border font-mono uppercase text-xs tracking-wider font-semibold transition-colors ${ctaClass}`}
					>
						{t('hero.cta.cv')}
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border font-mono uppercase text-xs tracking-wider font-semibold transition-colors ${ctaClass}`}
					>
						{t('hero.cta.github')}
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>
					<a
						href={`mailto:${t('connect.email')}`}
						className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border font-mono uppercase text-xs tracking-wider font-semibold transition-colors ${ctaClass}`}
					>
						{t('hero.cta.email')}
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	const router = useRouter();
	const t = useTranslations();
	const locale = useLocale();
	const [galleryMode, setGalleryMode] = useState<GalleryMode>('pending');
	const [galleryComplete, setGalleryComplete] = useState(false);
	const [resetGallery, setResetGallery] = useState(false);
	const [activeSection, setActiveSection] = useState('gallery');

	const galleryRef = useRef<HTMLElement>(null);
	const sectionsRef = useRef<(HTMLElement | null)[]>([]);

	// Decide once on the client whether the 3D gallery is worth loading.
	useEffect(() => {
		const largeScreen = window.matchMedia('(min-width: 1024px)').matches;
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
		setGalleryMode(largeScreen && !reducedMotion && !saveData ? '3d' : 'static');
	}, []);

	const use3d = galleryMode === '3d';

	// Gallery projects: exclude non-featured, sort by galleryOrder
	const galleryProjects = projects
		.filter((p) => p.featured !== false)
		.sort((a, b) => (a.galleryOrder ?? 999) - (b.galleryOrder ?? 999));

	const projectImages = galleryProjects.map((project) => ({
		src: project.galleryImage,
		alt: t(`projects.data.${project.slug}.title`),
	}));

	// Handle project click - navigate to project detail page
	const handleProjectClick = (imageIndex: number) => {
		const project = galleryProjects[imageIndex];
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

	// IntersectionObserver for gallery reset (3D mode only)
	useEffect(() => {
		if (!use3d) return;

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
			{ threshold: 0.5 },
		);

		const gallery = galleryRef.current;
		if (gallery) {
			observer.observe(gallery);
		}

		return () => {
			if (gallery) {
				observer.unobserve(gallery);
			}
		};
	}, [galleryComplete, use3d]);

	// Fade sections in as they enter the viewport. Sections render visible by default so crawlers,
	// screenshots and no-JS visitors see the content; only sections still below the fold get hidden
	// here, and only after JS has confirmed it can reveal them again.
	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in-up');
						entry.target.classList.remove('opacity-0');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
		);

		const sections = sectionsRef.current.filter(
			(section): section is HTMLElement => section !== null && section.getBoundingClientRect().top > window.innerHeight,
		);
		for (const section of sections) {
			section.classList.add('opacity-0');
			observer.observe(section);
		}

		return () => observer.disconnect();
	}, []);

	// Scroll-based active section tracking (works reliably across all viewports)
	useEffect(() => {
		const sectionIds = ['gallery', 'intro', 'work', 'projects', 'connect'];

		const updateActiveSection = () => {
			const viewportCenter = window.scrollY + window.innerHeight / 2;

			// Find section whose center is closest to viewport center
			let closestSection = sectionIds[0];
			let closestDistance = Number.POSITIVE_INFINITY;

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
							type="button"
							onClick={() => scrollToSection(section)}
							className={`rounded-full transition-all duration-300 ${
								activeSection === section
									? 'h-3 w-3 bg-foreground scale-125'
									: 'h-2.5 w-2.5 bg-border hover:bg-muted-foreground hover:scale-110'
							}`}
							aria-label={t('nav.scrollToSection', { section: t(`nav.${section}`) })}
						/>
					))}
				</nav>
			</div>

			<main className="min-h-screen">
				{use3d ? (
					/* 3D Gallery Hero - Always Light Mode */
					<section id="gallery" ref={galleryRef} className="relative h-screen bg-white">
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
						{/* Soft white wash on the left keeps the copy legible while images fly behind it */}
						<div className="absolute inset-0 pointer-events-none flex items-center bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.7)_32%,rgba(255,255,255,0)_58%)]">
							<HeroContent blend locale={locale} />
						</div>

						<div className="text-center absolute bottom-8 left-0 right-0 font-mono uppercase text-[11px] font-semibold pointer-events-none mix-blend-exclusion text-white">
							{!galleryComplete ? (
								<p className="opacity-70">{t('gallery.instructions')}</p>
							) : (
								<div className="flex flex-col items-center gap-2 animate-pulse">
									<p className="text-sm">{t('gallery.scrollDown')}</p>
									<ChevronDown className="w-6 h-6" />
								</div>
							)}
						</div>
					</section>
				) : (
					/* Static Hero - phones, reduced motion, data saver, and before the client decides */
					<section id="gallery" ref={galleryRef} className="relative min-h-[85vh] flex items-center py-24">
						<HeroContent blend={false} locale={locale} />
					</section>
				)}

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
