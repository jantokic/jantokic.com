import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/lib/projects';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export async function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: 'Project Not Found',
		};
	}

	return {
		title: `${project.title} | Portfolio`,
		description: project.shortDescription,
	};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

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
						Back to Projects
					</Link>
				</div>
			</header>

			{/* Hero Section */}
			<section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="mb-6">
						<span className="inline-block px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider bg-muted text-muted-foreground rounded-full">
							{project.category} • {project.year}
						</span>
					</div>
					<h1 className="font-mono uppercase text-3xl sm:text-4xl lg:text-5xl tracking-wider font-semibold text-foreground mb-6 leading-tight">
						{project.title}
					</h1>
					<p className="font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-muted-foreground max-w-3xl leading-relaxed">
						{project.shortDescription}
					</p>
				</div>
			</section>

			{/* Hero Image */}
			<section className="px-4 sm:px-6 lg:px-8 mb-16">
				<div className="max-w-7xl mx-auto">
					<div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-muted">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover"
							unoptimized
						/>
					</div>
				</div>
			</section>

			{/* Project Details Grid */}
			<section className="px-4 sm:px-6 lg:px-8 mb-16">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Main Content */}
					<div className="lg:col-span-2 space-y-12">
						{/* Overview */}
						<div>
							<h2 className="font-mono uppercase text-lg sm:text-xl tracking-wider font-semibold text-foreground mb-4">Overview</h2>
							<p className="font-mono uppercase text-xs sm:text-sm tracking-wider font-semibold text-muted-foreground leading-relaxed">
								{project.fullDescription}
							</p>
						</div>

						{/* Challenges */}
						<div>
							<h2 className="font-mono uppercase text-lg sm:text-xl tracking-wider font-semibold text-foreground mb-4">
								Challenges & Solutions
							</h2>
							<ul className="space-y-4">
								{project.challenges.map((challenge, index) => (
									<li key={index} className="flex gap-3">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground text-background text-sm flex items-center justify-center font-mono font-semibold mt-0.5">
											{index + 1}
										</span>
										<span className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground leading-relaxed">
											{challenge}
										</span>
									</li>
								))}
							</ul>
						</div>

						{/* Outcomes */}
						<div>
							<h2 className="font-mono uppercase text-lg sm:text-xl tracking-wider font-semibold text-foreground mb-4">
								Results & Impact
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{project.outcomes.map((outcome, index) => (
									<div
										key={index}
										className="p-4 bg-muted rounded-lg border border-border"
									>
										<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground leading-relaxed">
											{outcome}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-1 space-y-8">
						{/* Role */}
						<div>
							<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
								Role
							</h3>
							<p className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground">{project.role}</p>
						</div>

						{/* Duration */}
						<div>
							<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
								Duration
							</h3>
							<p className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground">{project.duration}</p>
						</div>

						{/* Tech Stack */}
						<div>
							<h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
								Tech Stack
							</h3>
							<div className="flex flex-wrap gap-2">
								{project.techStack.map((tech, index) => (
									<span
										key={index}
										className="px-3 py-1 font-mono uppercase text-xs tracking-wider font-semibold bg-background border border-border text-muted-foreground rounded-md"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Additional Images */}
			{project.images.length > 1 && (
				<section className="px-4 sm:px-6 lg:px-8 mb-16">
					<div className="max-w-7xl mx-auto">
						<h2 className="font-mono uppercase text-lg sm:text-xl tracking-wider font-semibold text-foreground mb-8">More Views</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{project.images.slice(1).map((img, index) => (
								<div
									key={index}
									className="relative w-full h-[300px] rounded-lg overflow-hidden bg-muted"
								>
									<Image
										src={img}
										alt={`${project.title} - view ${index + 2}`}
										fill
										className="object-cover"
										unoptimized
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{/* Navigation to other projects */}
			<section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted">
				<div className="max-w-7xl mx-auto">
					<h2 className="font-mono uppercase text-lg sm:text-xl tracking-wider font-semibold text-foreground mb-8">
						More Projects
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects
							.filter((p) => p.slug !== project.slug)
							.slice(0, 3)
							.map((relatedProject) => (
								<Link
									key={relatedProject.slug}
									href={`/projects/${relatedProject.slug}`}
									className="group"
								>
									<div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-border mb-3">
										<Image
											src={relatedProject.image}
											alt={relatedProject.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-300"
											unoptimized
										/>
									</div>
									<h3 className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
										{relatedProject.title}
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
						className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to all projects
					</Link>
				</div>
			</footer>
		</main>
	);
}
