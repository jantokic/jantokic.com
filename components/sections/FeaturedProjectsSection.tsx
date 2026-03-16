'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/routing';
import { ArrowUpRight } from 'lucide-react';
import { projects as allProjects } from '@/lib/projects';
import { ForwardedRef, forwardRef, useState, useMemo } from 'react';
import ProjectFilterBar, { SortOption, CategoryFilter } from '@/components/ProjectFilterBar';

const CATEGORY_GROUPS: Record<string, string[]> = {
	'AI': ['AI & Developer Tools', 'AI & Research', 'AI & Enterprise'],
	'Blockchain': ['Blockchain & Trading', 'Blockchain & Infrastructure', 'Blockchain & NFT'],
	'Fintech': ['Fintech', 'Fintech & Trading'],
	'E-Commerce': ['E-Commerce & Community', 'E-Commerce & Open Source', 'E-Commerce'],
	'Developer Tools': ['Open Source & Developer Tools', 'AI & Developer Tools'],
};

const FeaturedProjectsSection = forwardRef<HTMLElement, {}>((props, ref: ForwardedRef<HTMLElement>) => {
	const t = useTranslations();
	const [activeCategory, setActiveCategory] = useState<CategoryFilter>(null);
	const [sortBy, setSortBy] = useState<SortOption>('relevance');

	const projectItems = useMemo(() => {
		return Object.entries(t.raw('projects.items') as Record<string, any>).map(([slug, data]) => {
			const project = allProjects.find(p => p.slug === slug);
			return project ? { slug, data, project } : null;
		}).filter(Boolean) as { slug: string; data: any; project: typeof allProjects[0] }[];
	}, [t]);

	const filteredAndSorted = useMemo(() => {
		let result = [...projectItems];

		if (activeCategory) {
			const matchingCategories = CATEGORY_GROUPS[activeCategory] || [];
			result = result.filter(({ data }) => matchingCategories.includes(data.category));
		}

		if (sortBy === 'newest') {
			result.sort((a, b) => parseInt(b.project.year) - parseInt(a.project.year));
		} else if (sortBy === 'oldest') {
			result.sort((a, b) => parseInt(a.project.year) - parseInt(b.project.year));
		}
		// 'relevance' keeps the original order

		return result;
	}, [projectItems, activeCategory, sortBy]);

	const filterLabels = {
		all: t('projects.filters.all'),
		sortBy: t('projects.filters.sortBy'),
		relevance: t('projects.filters.relevance'),
		newest: t('projects.filters.newest'),
		oldest: t('projects.filters.oldest'),
	};

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

				<ProjectFilterBar
					categories={Object.keys(CATEGORY_GROUPS)}
					activeCategory={activeCategory}
					sortBy={sortBy}
					onCategoryChange={setActiveCategory}
					onSortChange={setSortBy}
					labels={filterLabels}
				/>

				<div className="grid gap-6 sm:grid-cols-2">
					{filteredAndSorted.map(({ slug, data: projectData, project }, index) => (
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
