'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/routing';
import { ArrowUpRight } from 'lucide-react';
import { projects as allProjects } from '@/lib/projects';
import { ForwardedRef, forwardRef } from 'react';

const FeaturedProjectsSection = forwardRef<HTMLElement, {}>((props, ref: ForwardedRef<HTMLElement>) => {
	const t = useTranslations();

	return (
		<section
			id="projects"
			ref={ref}
			className="py-16 sm:py-20 opacity-0"
		>
			<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
				<h2 className="font-mono uppercase text-2xl sm:text-3xl tracking-wider font-semibold mb-12 sm:mb-16 text-foreground">
					{t('projects.heading')}
				</h2>

				<div className="grid gap-6 sm:grid-cols-2">
					{Object.entries(t.raw('projects.items') as Record<string, any>).map(([slug, projectData], index) => {
						const project = allProjects.find(p => p.slug === slug);
						if (!project) return null;

						return (
							<Link
								key={slug}
								href={`/projects/${slug}`}
								className="group border border-border/50 rounded-lg overflow-hidden hover:border-border hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex flex-col opacity-0 animate-fade-in-up"
								style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
							>
								{/* Project Image */}
								<div className="aspect-video w-full overflow-hidden bg-muted">
									<img
										src={project.image}
										alt={projectData.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>

								{/* Project Content */}
								<div className="p-6 flex flex-col flex-grow">
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-3">
										{projectData.category} • {project.year}
									</div>

									<h3 className="font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-foreground group-hover:text-foreground transition-colors mb-3">
										{projectData.title}
									</h3>

									<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground leading-relaxed line-clamp-3 mb-4">
										{projectData.shortDescription}
									</p>

									<div className="flex items-center gap-2 font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all mt-auto">
										{t('projects.viewProject')}
										<ArrowUpRight className="w-4 h-4" />
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
});

FeaturedProjectsSection.displayName = 'FeaturedProjectsSection';

export default FeaturedProjectsSection;
