'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import ConnectSection from '@/components/sections/ConnectSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import SelectedWorkSection from '@/components/sections/SelectedWorkSection';
import VerticalCarousel, { type CarouselItem } from '@/components/VerticalCarousel';
import { projects } from '@/content/projects';
import { socialLinks } from '@/content/social';
import { workData } from '@/content/work';

const SECTIONS = ['intro', 'work', 'projects', 'connect'] as const;

function Hero({ locale }: { locale: string }) {
	const t = useTranslations();
	const github = socialLinks.find((link) => link.platform === 'GitHub')?.url ?? 'https://github.com/jantokic';
	const roles = t.raw('intro.currentRoles') as { company: string; role: string; period?: string }[];

	const facts: { label: string; value: string; detail?: string }[] = [
		...roles.map((role) => ({
			label: t('intro.currently'),
			value: role.company,
			detail: [role.role, role.period].filter(Boolean).join(' · '),
		})),
		{ label: t('intro.studying'), value: t('intro.university'), detail: t('intro.degree') },
		{ label: t('hero.locationLabel'), value: t('intro.location') },
	];

	const cta =
		'inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border font-mono uppercase text-xs tracking-wider font-semibold transition-colors';

	return (
		<div className="w-full px-6 sm:px-10 lg:pl-24 lg:pr-12">
			<div className="max-w-xl space-y-8">
				<div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border border-border">
					<Image
						src="/headshot-user.webp"
						alt="Jan Tokic"
						fill
						unoptimized
						priority
						className="object-cover object-[center_20%]"
					/>
				</div>

				<div className="space-y-5">
					<p className="font-mono uppercase text-[11px] sm:text-xs tracking-[0.2em] font-semibold text-muted-foreground">
						{t('hero.eyebrow')}
					</p>
					<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-foreground">
						{t('intro.name')}
					</h1>
					<p className="text-xl sm:text-2xl leading-snug text-foreground">{t('hero.tagline')}</p>
					<p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{t('hero.story')}</p>
				</div>

				<div className="flex flex-wrap gap-3">
					<a
						href={`/cv_jan_tokic_${locale}.pdf`}
						target="_blank"
						rel="noopener noreferrer"
						className={`${cta} border-foreground bg-foreground text-background hover:opacity-90`}
					>
						{t('hero.cta.cv')}
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className={`${cta} border-border text-foreground hover:border-foreground`}
					>
						{t('hero.cta.github')}
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>
					<a
						href={`mailto:${t('connect.email')}`}
						className={`${cta} border-border text-foreground hover:border-foreground`}
					>
						{t('hero.cta.email')}
						<ArrowUpRight className="w-3.5 h-3.5" />
					</a>
				</div>

				{/* The three facts a recruiter scans for */}
				<dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 pt-8 border-t border-border/50">
					{facts.map((fact) => (
						<div key={fact.label + fact.value} className="space-y-1">
							<dt className="font-mono uppercase text-[10px] tracking-wider text-muted-foreground">{fact.label}</dt>
							<dd className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground">{fact.value}</dd>
							{fact.detail && <dd className="text-[13px] leading-snug text-muted-foreground">{fact.detail}</dd>}
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}

export default function Home() {
	const t = useTranslations();
	const locale = useLocale();
	const [activeSection, setActiveSection] = useState<string>('intro');
	const sectionsRef = useRef<(HTMLElement | null)[]>([]);

	const carouselItems: CarouselItem[] = projects
		.filter((project) => !project.archive && project.featured !== false)
		.sort((a, b) => (a.galleryOrder ?? 999) - (b.galleryOrder ?? 999))
		.map((project) => ({
			src: project.image,
			alt: t(`projects.data.${project.slug}.title`),
			title: t(`projects.data.${project.slug}.title`),
			category: project.category,
			href: `/projects/${project.slug}`,
		}));

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
		const updateActiveSection = () => {
			const viewportCenter = window.scrollY + window.innerHeight / 2;

			let closestSection: string = SECTIONS[0];
			let closestDistance = Number.POSITIVE_INFINITY;

			for (const id of SECTIONS) {
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
		if (sectionId === 'intro') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<>
			{/* Fixed Left Navigation - Desktop Only */}
			<div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
				<nav className="flex flex-col gap-4">
					{SECTIONS.map((section) => (
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
				{/* First screen: about on the left, project carousel on the right, facts band below */}
				<section id="intro" className="relative bg-background">
					<div className="grid min-h-screen lg:grid-cols-[minmax(0,13fr)_minmax(0,11fr)]">
						<div className="flex items-center py-16 lg:py-20">
							<Hero locale={locale} />
						</div>
						<div className="relative hidden lg:block min-h-screen">
							<VerticalCarousel items={carouselItems} className="absolute inset-0" />
						</div>
					</div>
				</section>

				{/* Selected Work Section */}
				<SelectedWorkSection
					ref={(el) => {
						if (el) {
							sectionsRef.current[0] = el;
						}
					}}
					workData={workData}
				/>

				{/* Featured Projects Section */}
				<FeaturedProjectsSection
					ref={(el) => {
						if (el) {
							sectionsRef.current[1] = el;
						}
					}}
				/>

				{/* Connect Section (includes footer) */}
				<ConnectSection
					ref={(el) => {
						if (el) {
							sectionsRef.current[2] = el;
						}
					}}
				/>
			</main>
		</>
	);
}
