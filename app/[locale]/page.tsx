'use client';

import { useState, useEffect, useRef } from 'react';
import InfiniteGallery from '@/components/InfiniteGallery';
import { projects } from '@/lib/projects';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, Sun, Moon, ArrowUpRight, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import BrandIcon from '@/components/BrandIcon';

export default function Home() {
	const router = useRouter();
	const t = useTranslations();
	const [galleryComplete, setGalleryComplete] = useState(false);
	const [resetGallery, setResetGallery] = useState(false);
	const [activeSection, setActiveSection] = useState('gallery');
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const galleryRef = useRef<HTMLElement>(null);
	const sectionsRef = useRef<(HTMLElement | null)[]>([]);

	// Map projects to gallery images
	const projectImages = projects.map((project) => ({
		src: project.image,
		alt: project.title,
	}));

	// Handle project click - navigate to project detail page
	const handleProjectClick = (imageIndex: number) => {
		const project = projects[imageIndex];
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

	// IntersectionObserver for section animations and active tracking
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in-up');
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.3, rootMargin: '0px 0px -20% 0px' }
		);

		// Observe gallery section
		if (galleryRef.current) {
			observer.observe(galleryRef.current);
		}

		// Observe other sections
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

	// Handle mounting for theme
	useEffect(() => {
		setMounted(true);
	}, []);

	// Skills data
	const skills = ['TypeScript', 'Java', 'Python', 'Go', 'Next.js', 'Solana', 'Docker', 'Kubernetes', 'Databases'];

	// Work data
	const workData = [
		{
			year: '2024-2025',
			key: 'elevantiq',
			techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker Swarm', 'Vendure'],
		},
		{
			year: '2024-2025',
			key: 'mira',
			techStack: ['Go', 'Solana', 'WebSocket', 'Docker', 'Monitoring'],
		},
		{
			year: '2022-2024',
			key: 'copile',
			techStack: ['Python', 'Node.js', 'PostgreSQL', 'WebSocket', 'Docker'],
		},
		{
			year: '2022',
			key: 'ibm',
			techStack: ['Vue.js', 'JavaScript', 'Magento', 'REST APIs'],
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
							className={`h-2 w-2 rounded-full transition-all duration-300 ${
								activeSection === section
									? 'bg-foreground scale-150'
									: 'bg-border hover:bg-muted-foreground'
							}`}
							aria-label={`Scroll to ${section}`}
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
							<span className="italic">I create;</span> therefore I am
						</h1>
					</div>

					<div className="text-center absolute bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold pointer-events-none mix-blend-exclusion text-white">
						{!galleryComplete ? (
							<>
								<p>Click projects to view details • Use mouse wheel, arrow keys, or touch to navigate</p>
								<p className="opacity-60">Auto-play resumes after 3 seconds of inactivity</p>
							</>
						) : (
							<div className="flex flex-col items-center gap-2 animate-pulse">
								<p className="text-sm">Scroll down to continue</p>
								<ChevronDown className="w-6 h-6" />
							</div>
						)}
					</div>
				</section>

				{/* Intro Section */}
				<section
					id="intro"
					ref={(el) => (sectionsRef.current[0] = el)}
					className="min-h-screen py-20 sm:py-32 opacity-0"
				>
					<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
						<div className="grid gap-12 lg:grid-cols-5">
							{/* Main Content */}
							<div className="lg:col-span-3 space-y-6 sm:space-y-8">
								<h1 className="font-mono uppercase text-4xl sm:text-5xl lg:text-6xl tracking-wider font-semibold text-foreground">
									{t('intro.name')}
								</h1>
								<div className="space-y-4">
									<p className="font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-muted-foreground">
										{t('intro.title')}
									</p>
									<p className="font-mono uppercase text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-2xl tracking-wider font-semibold">
										{t('intro.bio')}
									</p>
								</div>

								{/* Skills Pills */}
								<div className="flex flex-wrap gap-2">
									{skills.map((skill) => (
										<span
											key={skill}
											className="px-3 py-1.5 font-mono uppercase text-xs tracking-wider font-semibold border border-border/50 rounded-full text-muted-foreground hover:border-border hover:text-foreground transition-colors"
										>
											{skill}
										</span>
									))}
								</div>
							</div>

							{/* Sidebar */}
							<div className="lg:col-span-2 space-y-6">
								{/* Profile Photo */}
								<div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-border/50">
									<img
										src="/placeholder-user.jpg"
										alt="Jan Tokic"
										className="w-full h-full object-cover"
									/>
								</div>

								<div>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2">
										{t('intro.currently')}
									</div>
									<div className="font-mono uppercase text-sm tracking-wider font-semibold text-foreground">
										{t('intro.currentRole')}
									</div>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">{t('intro.currentCompany')}</div>
								</div>

								<div>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2">
										{t('intro.studying')}
									</div>
									<div className="font-mono uppercase text-sm tracking-wider font-semibold text-foreground">
										{t('intro.degree')}
									</div>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">{t('intro.university')}</div>
								</div>

								<div className="flex items-center gap-2">
									<div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
									<span className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">{t('intro.location')}</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Selected Work Section */}
				<section
					id="work"
					ref={(el) => (sectionsRef.current[1] = el)}
					className="min-h-screen py-20 sm:py-32 opacity-0"
				>
					<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
						<h2 className="font-mono uppercase text-2xl sm:text-3xl tracking-wider font-semibold mb-12 sm:mb-16 text-foreground">
							{t('work.heading')}
						</h2>

						<div className="space-y-0">
							{workData.map((job, index) => (
								<div
									key={index}
									className="group grid gap-4 md:gap-8 border-b border-border/50 hover:border-border transition-colors duration-500 py-8 md:grid-cols-12"
								>
									{/* Year Column */}
									<div className="md:col-span-2">
										<div className="font-mono uppercase text-base sm:text-lg tracking-wider font-semibold text-muted-foreground">{job.year}</div>
									</div>

									{/* Content Column */}
									<div className="md:col-span-7 space-y-3">
										<div>
											<h3 className="font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-foreground group-hover:text-foreground transition-colors">
												{t(`work.${job.key}.role`)}
											</h3>
											<div className="font-mono uppercase text-sm tracking-wider font-semibold text-foreground">{t(`work.${job.key}.company`)}</div>
											<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">{t(`work.${job.key}.location`)}</div>
										</div>

										<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground leading-relaxed">{t(`work.${job.key}.description`)}</p>

										{/* Tech Stack - Mobile */}
										<div className="flex flex-wrap gap-2 pt-2 md:hidden">
											{job.techStack.map((tech) => (
												<span key={tech} className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Tech Stack - Desktop (Right Side) */}
									<div className="hidden md:flex md:col-span-3 flex-wrap gap-2 content-start">
										{job.techStack.map((tech) => (
											<span key={tech} className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">
												{tech}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Featured Projects Section */}
				<section
					id="projects"
					ref={(el) => (sectionsRef.current[2] = el)}
					className="min-h-screen py-20 sm:py-32 opacity-0"
				>
					<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
						<h2 className="font-mono uppercase text-2xl sm:text-3xl tracking-wider font-semibold mb-12 sm:mb-16 text-foreground">
							{t('projects.heading')}
						</h2>

						<div className="grid gap-6 sm:grid-cols-2">
							{projects.map((project) => (
								<Link
									key={project.slug}
									href={`/projects/${project.slug}`}
									className="group border border-border/50 rounded-lg overflow-hidden hover:border-border hover:shadow-lg transition-all duration-300"
								>
									{/* Project Image */}
									<div className="aspect-video w-full overflow-hidden bg-muted">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										/>
									</div>

									{/* Project Content */}
									<div className="p-6 space-y-3">
										<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">
											{project.category} • {project.year}
										</div>

										<h3 className="font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-foreground group-hover:text-foreground transition-colors">
											{project.title}
										</h3>

										<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground leading-relaxed line-clamp-3">
											{project.shortDescription}
										</p>

										<div className="flex items-center gap-2 font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">
											{t('projects.viewProject')}
											<ArrowUpRight className="w-4 h-4" />
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Connect Section */}
				<section
					id="connect"
					ref={(el) => (sectionsRef.current[3] = el)}
					className="min-h-screen py-20 sm:py-32 opacity-0"
				>
					<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
						<h2 className="font-mono uppercase text-2xl sm:text-3xl tracking-wider font-semibold mb-8 text-foreground">
							{t('connect.heading')}
						</h2>

						<p className="font-mono uppercase text-xs sm:text-sm tracking-wider font-semibold text-muted-foreground leading-relaxed mb-12 max-w-2xl">
							{t('connect.description')}
						</p>

						<div className="space-y-8">
							{/* Contact Options */}
							<div className="flex flex-wrap gap-4">
								<a
									href={`mailto:${t('connect.email')}`}
									className="group inline-flex items-center gap-2 font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-foreground hover:text-foreground/80 transition-colors"
								>
									{t('connect.email')}
									<ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</a>
								<span className="text-muted-foreground">•</span>
								<Link
									href="/contact"
									className="group inline-flex items-center gap-2 font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-foreground hover:text-foreground/80 transition-colors"
								>
									Contact Form
									<ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</Link>
							</div>

							{/* Social Grid */}
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
								<a
									href="https://github.com/jantokic"
									target="_blank"
									rel="noopener noreferrer"
									className="border border-border/50 rounded-lg p-4 hover:border-border transition-colors group"
								>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2 flex items-center gap-2">
										<BrandIcon name="siGithub" size={14} className="text-muted-foreground" />
										{t('connect.github')}
									</div>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground flex items-center gap-1">
										@jantokic
										<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
								</a>

								<a
									href="https://linkedin.com/in/jan-tokic"
									target="_blank"
									rel="noopener noreferrer"
									className="border border-border/50 rounded-lg p-4 hover:border-border transition-colors group"
								>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2 flex items-center gap-2">
										<Linkedin className="w-3.5 h-3.5" />
										{t('connect.linkedin')}
									</div>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground flex items-center gap-1">
										Jan Tokic
										<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
								</a>

								<a
									href="https://x.com/tokicjan"
									target="_blank"
									rel="noopener noreferrer"
									className="border border-border/50 rounded-lg p-4 hover:border-border transition-colors group"
								>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2 flex items-center gap-2">
										<BrandIcon name="siX" size={14} className="text-muted-foreground" />
										{t('connect.x')}
									</div>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground flex items-center gap-1">
										@tokicjan
										<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="py-12 px-6 sm:px-8 lg:px-16 border-t border-border/30">
					<div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-4">
						<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">
							© {new Date().getFullYear()} Jan Tokic
						</p>

						<div className="flex items-center gap-4">
							{/* Language Switcher */}
							{mounted && <LanguageSwitcher />}

							{/* Theme Toggle Button */}
							{mounted && (
								<button
									onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
									className="p-2 rounded-lg hover:bg-muted transition-colors"
									aria-label="Toggle theme"
								>
									{theme === 'dark' ? (
										<Sun className="w-5 h-5 text-foreground" />
									) : (
										<Moon className="w-5 h-5 text-foreground" />
									)}
								</button>
							)}
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}
