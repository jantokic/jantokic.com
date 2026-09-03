'use client';

import { useTranslations } from 'next-intl';
import { type ForwardedRef, forwardRef } from 'react';
import { Link } from '@/routing';

interface WorkItem {
	key: string;
	year: string;
	techStack: string[];
	venture?: boolean;
}

interface SelectedWorkSectionProps {
	workData: WorkItem[];
}

const SelectedWorkSection = forwardRef<HTMLElement, SelectedWorkSectionProps>(
	({ workData }, ref: ForwardedRef<HTMLElement>) => {
		const t = useTranslations();

		return (
			<section id="work" ref={ref} className="py-16 sm:py-20 opacity-0">
				<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
					<h2 className="font-mono uppercase text-2xl sm:text-3xl tracking-wider font-semibold mb-12 sm:mb-16 text-foreground">
						{t('work.heading')}
					</h2>

					<div className="divide-y divide-border/50">
						{workData.map((job, index) => (
							<div
								key={index}
								className="group grid gap-4 md:gap-8 py-8 md:grid-cols-12 -mx-4 px-4 rounded-lg hover:bg-muted/50 transition-all duration-300 opacity-0 animate-fade-in-up"
								style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
							>
								{/* Year Column */}
								<div className="md:col-span-2">
									<div className="font-mono uppercase text-base sm:text-lg tracking-wider font-semibold text-muted-foreground">
										{job.year}
									</div>
								</div>

								{/* Content Column */}
								<div className="md:col-span-7 space-y-3">
									<div>
										<h3 className="font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-foreground group-hover:text-foreground transition-colors">
											{t(`work.${job.key}.role`)}
										</h3>
										<div className="font-mono uppercase text-sm tracking-wider font-semibold text-foreground">
											{t(`work.${job.key}.company`)}
										</div>
										<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">
											{t(`work.${job.key}.location`)}
										</div>
										{job.venture && (
											<div className="font-mono uppercase text-[10px] tracking-wider font-semibold text-muted-foreground/70 mt-1">
												{t('work.ventureLabel')}
											</div>
										)}
									</div>

									<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground leading-relaxed">
										{t(`work.${job.key}.description`)}
									</p>

									{/* Tech Stack - Mobile */}
									<div className="flex flex-wrap gap-2 pt-2 md:hidden">
										{job.techStack.map((tech) => (
											<span
												key={tech}
												className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground"
											>
												{tech}
											</span>
										))}
									</div>

									{/* Project Link - Mobile */}
									{t.has(`work.${job.key}.projectLink`) && (
										<Link
											href={t(`work.${job.key}.projectLink`)}
											className="inline-flex items-center gap-1 font-mono uppercase text-xs tracking-wider font-semibold text-foreground hover:text-muted-foreground transition-colors md:hidden"
										>
											Details →
										</Link>
									)}
								</div>

								{/* Tech Stack + Link - Desktop (Right Side) */}
								<div className="hidden md:flex md:col-span-3 flex-col gap-3 content-start">
									<div className="flex flex-wrap gap-2">
										{job.techStack.map((tech) => (
											<span
												key={tech}
												className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground"
											>
												{tech}
											</span>
										))}
									</div>
									{t.has(`work.${job.key}.projectLink`) && (
										<Link
											href={t(`work.${job.key}.projectLink`)}
											className="inline-flex items-center gap-1 font-mono uppercase text-xs tracking-wider font-semibold text-foreground hover:text-muted-foreground transition-colors"
										>
											Details →
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	},
);

SelectedWorkSection.displayName = 'SelectedWorkSection';

export default SelectedWorkSection;
