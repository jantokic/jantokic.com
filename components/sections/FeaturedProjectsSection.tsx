'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { type ForwardedRef, forwardRef, useMemo, useState } from 'react';
import ProjectFilterBar, { type CategoryFilter, type SortOption } from '@/components/ProjectFilterBar';
import { CATEGORY_GROUPS, projects } from '@/content/projects';
import { Link } from '@/routing';

const FeaturedProjectsSection = forwardRef<HTMLElement>((_props, ref: ForwardedRef<HTMLElement>) => {
	const t = useTranslations();
	const [activeCategory, setActiveCategory] = useState<CategoryFilter>(null);
	const [sortBy, setSortBy] = useState<SortOption>('relevance');

	const featured = useMemo(() => projects.filter((p) => !p.archive), []);
	const archived = useMemo(() => projects.filter((p) => p.archive), []);

	const filteredAndSorted = useMemo(() => {
		let result = [...featured];

		if (activeCategory) {
			const matchingCategories = CATEGORY_GROUPS[activeCategory] || [];
			result = result.filter((p) => matchingCategories.includes(p.category));
		}

		if (sortBy === 'newest') {
			result.sort((a, b) => Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10));
		} else if (sortBy === 'oldest') {
			result.sort((a, b) => Number.parseInt(a.year, 10) - Number.parseInt(b.year, 10));
		}

		return result;
	}, [featured, activeCategory, sortBy]);

	const filterLabels = {
		all: t('projects.filters.all'),
		sortBy: t('projects.filters.sortBy'),
		relevance: t('projects.filters.relevance'),
		newest: t('projects.filters.newest'),
		oldest: t('projects.filters.oldest'),
	};

	return (
		<section id="projects" ref={ref} className="py-16 sm:py-20">
			<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
				<h2 className="font-mono uppercase text-2xl sm:text-3xl tracking-wider font-semibold mb-12 sm:mb-16 text-foreground">
					{t('projects.heading')}
				</h2>

				<ProjectFilterBar
					categories={Object.keys(CATEGORY_GROUPS)}
					activeCategory={activeCategory}
					sortBy={sortBy}
					onCategoryChange={setActiveCategory}
					onSortChange={setSortBy}
					labels={filterLabels}
				/>

				<div className="grid gap-6 sm:grid-cols-2">
					{filteredAndSorted.map((project, index) => (
						<Link
							key={project.slug}
							href={`/projects/${project.slug}`}
							className="group border border-border/50 rounded-xl overflow-hidden hover:border-border hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex flex-col opacity-0 animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
						>
							{/* Project Image */}
							<div className="relative aspect-video w-full overflow-hidden bg-muted">
								<Image
									src={project.image}
									alt={t(`projects.data.${project.slug}.title`)}
									fill
									sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>

							{/* Project Content */}
							<div className="p-6 flex flex-col flex-grow">
								<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-3">
									{project.category} • {project.year}
								</div>

								<h3 className="font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-foreground group-hover:text-foreground transition-colors mb-3">
									{t(`projects.data.${project.slug}.title`)}
								</h3>

								<p className="text-[15px] leading-relaxed text-muted-foreground line-clamp-3 mb-4">
									{t(`projects.data.${project.slug}.shortDescription`)}
								</p>

								<div className="flex items-center gap-2 font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all mt-auto">
									{t('projects.viewProject')}
									<ArrowUpRight className="w-4 h-4" />
								</div>
							</div>
						</Link>
					))}
				</div>

				{filteredAndSorted.length === 0 && (
					<p className="text-[15px] text-muted-foreground text-center py-12">{t('projects.filters.noResults')}</p>
				)}

				{/* Archive: earlier or smaller projects, one line each */}
				{archived.length > 0 && (
					<div className="mt-16">
						<h3 className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-4">
							{t('projects.archiveHeading')}
						</h3>
						<ul className="divide-y divide-border/50 border-t border-b border-border/50">
							{archived.map((project) => (
								<li key={project.slug}>
									<Link
										href={`/projects/${project.slug}`}
										className="group grid gap-1 sm:grid-cols-12 sm:gap-6 py-4 -mx-3 px-3 rounded-lg hover:bg-muted/50 transition-colors"
									>
										<span className="sm:col-span-4 font-mono uppercase text-xs tracking-wider font-semibold text-foreground">
											{t(`projects.data.${project.slug}.title`)}
										</span>
										<span className="sm:col-span-6 text-sm text-muted-foreground line-clamp-1">
											{t(`projects.data.${project.slug}.shortDescription`)}
										</span>
										<span className="sm:col-span-2 sm:text-right font-mono uppercase text-[11px] tracking-wider text-muted-foreground/70">
											{project.year}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</section>
	);
});

FeaturedProjectsSection.displayName = 'FeaturedProjectsSection';

export default FeaturedProjectsSection;
