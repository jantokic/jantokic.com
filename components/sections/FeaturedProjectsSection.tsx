'use client';

import ProjectFilterBar, { type SortOption, type CategoryFilter } from '@/components/ProjectFilterBar';
import { CATEGORY_GROUPS, projects } from '@/content/projects';
import { Link } from '@/routing';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { type ForwardedRef, forwardRef, useMemo, useState } from 'react';

const FeaturedProjectsSection = forwardRef<HTMLElement>((_props, ref: ForwardedRef<HTMLElement>) => {
	const t = useTranslations();
	const [activeCategory, setActiveCategory] = useState<CategoryFilter>(null);
	const [sortBy, setSortBy] = useState<SortOption>('relevance');

	const filteredAndSorted = useMemo(() => {
		let result = [...projects];

		if (activeCategory) {
			const matchingCategories = CATEGORY_GROUPS[activeCategory] || [];
			result = result.filter((p) => matchingCategories.includes(p.category));
		}

		if (sortBy === 'newest') {
			result.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year));
		} else if (sortBy === 'oldest') {
			result.sort((a, b) => Number.parseInt(a.year) - Number.parseInt(b.year));
		}

		return result;
	}, [activeCategory, sortBy]);

	const filterLabels = {
		all: t('projects.filters.all'),
		sortBy: t('projects.filters.sortBy'),
		relevance: t('projects.filters.relevance'),
		newest: t('projects.filters.newest'),
		oldest: t('projects.filters.oldest'),
	};

	return (
		<section id="projects" ref={ref} className="py-16 sm:py-20 opacity-0">
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
							className="group border border-border/50 rounded-lg overflow-hidden hover:border-border hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex flex-col opacity-0 animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
						>
							{/* Project Image */}
							<div className="aspect-video w-full overflow-hidden bg-muted">
								<img
									src={project.image}
									alt={t(`projects.data.${project.slug}.title`)}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

								<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground leading-relaxed line-clamp-3 mb-4">
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
					<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground text-center py-12">
						{t('projects.filters.noResults')}
					</p>
				)}
			</div>
		</section>
	);
});

FeaturedProjectsSection.displayName = 'FeaturedProjectsSection';

export default FeaturedProjectsSection;
