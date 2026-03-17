'use client';

import { ChevronDown } from 'lucide-react';
import { useCallback, useState } from 'react';

export type SortOption = 'relevance' | 'newest' | 'oldest';
export type CategoryFilter = string | null;

interface ProjectFilterBarProps {
	categories: string[];
	activeCategory: CategoryFilter;
	sortBy: SortOption;
	onCategoryChange: (category: CategoryFilter) => void;
	onSortChange: (sort: SortOption) => void;
	labels: {
		all: string;
		sortBy: string;
		relevance: string;
		newest: string;
		oldest: string;
	};
}

export default function ProjectFilterBar({
	categories,
	activeCategory,
	sortBy,
	onCategoryChange,
	onSortChange,
	labels,
}: ProjectFilterBarProps) {
	const [sortOpen, setSortOpen] = useState(false);

	const handleSortSelect = useCallback(
		(option: SortOption) => {
			onSortChange(option);
			setSortOpen(false);
		},
		[onSortChange],
	);

	const sortLabel = sortBy === 'relevance' ? labels.relevance : sortBy === 'newest' ? labels.newest : labels.oldest;

	return (
		<div className="flex flex-col gap-4 mb-8 sm:mb-10">
			{/* Category pills */}
			<div className="flex flex-wrap gap-2">
				<button
					onClick={() => onCategoryChange(null)}
					className={`font-mono uppercase text-xs tracking-wider font-semibold px-3 py-1.5 rounded-md border transition-all duration-200 ${
						activeCategory === null
							? 'bg-foreground text-background border-foreground'
							: 'bg-transparent text-muted-foreground border-border/50 hover:border-border hover:text-foreground'
					}`}
				>
					{labels.all}
				</button>
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => onCategoryChange(activeCategory === cat ? null : cat)}
						className={`font-mono uppercase text-xs tracking-wider font-semibold px-3 py-1.5 rounded-md border transition-all duration-200 ${
							activeCategory === cat
								? 'bg-foreground text-background border-foreground'
								: 'bg-transparent text-muted-foreground border-border/50 hover:border-border hover:text-foreground'
						}`}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Sort dropdown */}
			<div className="flex items-center gap-2">
				<span className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">
					{labels.sortBy}:
				</span>
				<div className="relative">
					<button
						onClick={() => setSortOpen(!sortOpen)}
						className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground flex items-center gap-1 px-2 py-1 rounded-md border border-border/50 hover:border-border transition-all duration-200"
					>
						{sortLabel}
						<ChevronDown className={`w-3 h-3 transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`} />
					</button>
					{sortOpen && (
						<>
							<div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
							<div className="absolute top-full left-0 mt-1 z-50 bg-background border border-border rounded-md shadow-lg min-w-[140px]">
								{(['relevance', 'newest', 'oldest'] as SortOption[]).map((option) => (
									<button
										key={option}
										onClick={() => handleSortSelect(option)}
										className={`w-full text-left font-mono uppercase text-xs tracking-wider font-semibold px-3 py-2 transition-colors ${
											sortBy === option
												? 'text-foreground bg-muted'
												: 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
										}`}
									>
										{option === 'relevance' ? labels.relevance : option === 'newest' ? labels.newest : labels.oldest}
									</button>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
