import { ArrowLeft, ExternalLink, Video } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import BrandIcon from '@/components/BrandIcon';
import { getProjectBySlug, projects } from '@/content/projects';
import { Link } from '@/routing';

export async function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
	const { slug, locale } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		const ui = await getTranslations({ locale, namespace: 'projectPage' });
		return {
			title: ui('notFoundTitle'),
		};
	}

	const t = await getTranslations({ locale, namespace: 'projects' });
	const ui = await getTranslations({ locale, namespace: 'projectPage' });

	const title = `${t(`data.${slug}.title`)} | ${ui('portfolioSuffix')}`;
	const description = t(`data.${slug}.shortDescription`);
	const path = `/projects/${slug}`;

	return {
		title,
		description,
		alternates: {
			canonical: `/${locale}${path}`,
			languages: { en: `/en${path}`, de: `/de${path}` },
		},
		openGraph: { title, description, images: [project.image] },
	};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
	const { slug, locale } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const t = await getTranslations({ locale, namespace: 'projects' });
	const ui = await getTranslations({ locale, namespace: 'projectPage' });

	const isComingSoon = project.comingSoon === true;

	if (isComingSoon) {
		return (
			<main className="min-h-screen bg-background">
				{/* Header with back button */}
				<header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
						<Link
							href="/#projects"
							className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							<ArrowLeft className="w-4 h-4" />
							{ui('backToProjects')}
						</Link>
					</div>
				</header>

				{/* Hero Section */}
				<section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<h1
							className="font-mono uppercase text-3xl sm:text-4xl lg:text-5xl tracking-wider font-semibold text-foreground mb-6 leading-tight opacity-0 animate-fade-in-up"
							style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
						>
							{t(`data.${slug}.title`)}
						</h1>
						<p
							className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed opacity-0 animate-fade-in-up"
							style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
						>
							{t(`data.${slug}.shortDescription`)}
						</p>
					</div>
				</section>

				{/* Hero Image */}
				<section
					className="px-4 sm:px-6 lg:px-8 mb-16 opacity-0 animate-scale-in"
					style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
				>
					<div className="max-w-7xl mx-auto">
						<div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-muted">
							<Image
								src={project.image}
								alt={t(`data.${slug}.title`)}
								fill
								priority
								sizes="(min-width: 1280px) 1216px, 100vw"
								className="object-cover"
							/>
						</div>
					</div>
				</section>

				{/* Coming soon message */}
				<section className="px-4 sm:px-6 lg:px-8 mb-16">
					<div className="max-w-7xl mx-auto text-center py-16">
						<p className="font-mono uppercase text-sm tracking-wider font-semibold text-muted-foreground/50 mt-4">
							{ui('comingSoon')}
						</p>
					</div>
				</section>

				{/* Footer */}
				<footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
					<div className="max-w-7xl mx-auto text-center">
						<Link
							href="/#projects"
							className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							<ArrowLeft className="w-4 h-4" />
							{ui('backToAllProjects')}
						</Link>
					</div>
				</footer>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-background">
			{/* Header with back button */}
			<header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<Link
						href="/#projects"
						className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
					>
						<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
						{ui('backToProjects')}
					</Link>
				</div>
			</header>

			{/* Hero Section */}
			<section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div
						className="mb-6 opacity-0 animate-fade-in-up"
						style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
					>
						<span className="inline-block px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider bg-muted text-muted-foreground rounded-full">
							{project.category} • {project.year}
						</span>
					</div>
					<h1
						className="font-mono uppercase text-3xl sm:text-4xl lg:text-5xl tracking-wider font-semibold text-foreground mb-6 leading-tight opacity-0 animate-fade-in-up"
						style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
					>
						{t(`data.${slug}.title`)}
					</h1>
					<p
						className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed opacity-0 animate-fade-in-up"
						style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
					>
						{t(`data.${slug}.shortDescription`)}
					</p>
				</div>
			</section>

			{/* Hero Image */}
			<section
				className="px-4 sm:px-6 lg:px-8 mb-16 opacity-0 animate-scale-in"
				style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
			>
				<div className="max-w-7xl mx-auto">
					<div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-muted">
						<Image src={project.image} alt={t(`data.${slug}.title`)} fill className="object-cover" unoptimized />
					</div>
				</div>
			</section>

			{/* Project Details Grid */}
			<section
				className="px-4 sm:px-6 lg:px-8 mb-16 opacity-0 animate-fade-in-up"
				style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
			>
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Main Content */}
					<div className="lg:col-span-2 space-y-12">
						{/* Overview */}
						<div>
							<h2 className="font-mono uppercase text-lg sm:text-xl tracking-wider font-semibold text-foreground mb-4">
								{ui('overview')}
							</h2>
							<p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed max-w-prose">
								{t(`data.${slug}.fullDescription`)}
							</p>
						</div>

						{/* Challenges */}
						{((t.raw(`data.${slug}.challenges`) as string[]) ?? []).length > 0 && (
							<div>
								<h2 className="font-mono uppercase text-lg sm:text-xl tracking-wider font-semibold text-foreground mb-6">
									{ui('challenges')}
								</h2>
								<ul className="space-y-5">
									{(t.raw(`data.${slug}.challenges`) as string[]).map((challenge, index) => (
										<li key={index} className="flex gap-4">
											<span className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground text-background text-xs inline-flex items-center justify-center font-mono font-semibold mt-0.5 leading-none">
												{index + 1}
											</span>
											<span className="text-[15px] text-muted-foreground leading-relaxed pt-[2px]">{challenge}</span>
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Outcomes */}
						{((t.raw(`data.${slug}.outcomes`) as string[]) ?? []).length > 0 && (
							<div>
								<h2 className="font-mono uppercase text-lg sm:text-xl tracking-wider font-semibold text-foreground mb-6">
									{ui('outcomes')}
								</h2>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									{(t.raw(`data.${slug}.outcomes`) as string[]).map((outcome, index) => (
										<div
											key={index}
											className="p-5 bg-muted rounded-xl border border-border hover:border-border/80 transition-colors"
										>
											<p className="text-[15px] text-foreground leading-relaxed">{outcome}</p>
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-1">
						<div className="lg:sticky lg:top-24 space-y-8">
							{/* Role */}
							<div>
								<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
									{ui('role')}
								</h3>
								<p className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground">
									{t(`data.${slug}.role`)}
								</p>
							</div>

							{/* Duration */}
							<div>
								<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
									{ui('duration')}
								</h3>
								<p className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground">
									{t(`data.${slug}.duration`)}
								</p>
							</div>

							{/* Tech Stack */}
							<div>
								<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
									{ui('techStack')}
								</h3>
								<div className="flex flex-wrap gap-2">
									{project.techStack.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 font-mono uppercase text-xs tracking-wider font-semibold bg-background border border-border text-muted-foreground rounded-md hover:text-foreground transition-colors"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Links */}
							{project.links &&
								(project.links.github ||
									project.links.x ||
									project.links.website ||
									project.links.demo ||
									project.links.youtube) && (
									<div>
										<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
											{ui('links')}
										</h3>
										<div className="space-y-3">
											{project.links.github && (
												<a
													href={project.links.github}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 font-mono uppercase text-xs tracking-wider font-semibold text-foreground hover:text-muted-foreground transition-colors group py-1"
												>
													<BrandIcon
														name="siGithub"
														size={14}
														className="text-foreground group-hover:text-muted-foreground"
													/>
													{ui('github')}
													<ExternalLink className="w-3 h-3 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
												</a>
											)}
											{project.links.x && (
												<a
													href={project.links.x}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 font-mono uppercase text-xs tracking-wider font-semibold text-foreground hover:text-muted-foreground transition-colors group py-1"
												>
													<BrandIcon
														name="siX"
														size={14}
														className="text-foreground group-hover:text-muted-foreground"
													/>
													{ui('x')}
													<ExternalLink className="w-3 h-3 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
												</a>
											)}
											{project.links.website && (
												<a
													href={project.links.website}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 font-mono uppercase text-xs tracking-wider font-semibold text-foreground hover:text-muted-foreground transition-colors group py-1"
												>
													<ExternalLink className="w-3.5 h-3.5" />
													{ui('website')}{' '}
													{project.slug === 'richard-ai-research' && (
														<span className="text-[10px] opacity-60">{ui('websitePrivateNote')}</span>
													)}
													<ExternalLink className="w-3 h-3 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
												</a>
											)}
											{project.links.demo && (
												<a
													href={project.links.demo}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 font-mono uppercase text-xs tracking-wider font-semibold text-foreground hover:text-muted-foreground transition-colors group py-1"
												>
													<ExternalLink className="w-3.5 h-3.5" />
													{ui('demo')}
													<ExternalLink className="w-3 h-3 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
												</a>
											)}
											{project.links.youtube && (
												<a
													href={project.links.youtube}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 font-mono uppercase text-xs tracking-wider font-semibold text-foreground hover:text-muted-foreground transition-colors group py-1"
												>
													<Video className="w-3.5 h-3.5" />
													{ui('youtube')}
													<ExternalLink className="w-3 h-3 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
												</a>
											)}
										</div>
									</div>
								)}
						</div>
					</div>
				</div>
			</section>

			{/* Navigation to other projects */}
			<section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted">
				<div className="max-w-7xl mx-auto">
					<h2 className="font-mono uppercase text-lg sm:text-xl tracking-wider font-semibold text-foreground mb-8">
						{ui('moreProjects')}
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects
							.filter((p) => p.slug !== project.slug)
							.slice(0, 3)
							.map((relatedProject) => (
								<Link key={relatedProject.slug} href={`/projects/${relatedProject.slug}`} className="group">
									<div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-border mb-3">
										<Image
											src={relatedProject.image}
											alt={t(`data.${relatedProject.slug}.title`)}
											fill
											sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
									</div>
									<h3 className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
										{t(`data.${relatedProject.slug}.title`)}
									</h3>
									<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mt-1">
										{relatedProject.category}
									</p>
								</Link>
							))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
				<div className="max-w-7xl mx-auto text-center">
					<Link
						href="/#projects"
						className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
					>
						<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
						{ui('backToAllProjects')}
					</Link>
				</div>
			</footer>
		</main>
	);
}
