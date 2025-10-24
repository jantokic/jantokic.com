'use client';

import { useTranslations } from 'next-intl';
import { ForwardedRef, forwardRef } from 'react';

interface AboutSectionProps {
	skills: string[];
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
	({ skills }, ref: ForwardedRef<HTMLElement>) => {
		const t = useTranslations();

		return (
			<section
				id="intro"
				ref={ref}
				className="py-16 sm:py-20 opacity-0"
			>
				<div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
					<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
						{/* Main Content */}
						<div className="lg:col-span-3 space-y-6">
							<h1 className="font-mono uppercase text-3xl sm:text-4xl lg:text-5xl tracking-wider font-semibold text-foreground">
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
							<div className="flex flex-wrap gap-2 lg:pt-8">
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
							<div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-border/50">
								<img
									src="/headshot-user.webp"
									alt="Jan Tokic"
									className="w-full h-full object-cover object-[center_20%]"
								/>
							</div>

							<div>
								<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2">
									{t('intro.currently')}
								</div>
								<div className="font-mono uppercase text-sm tracking-wider font-semibold text-foreground">
									{t('intro.currentCompany')}
								</div>
								<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">{t('intro.currentRole')}</div>
							</div>

							<div>
								<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2">
									{t('intro.studying')}
								</div>
								<div className="font-mono uppercase text-sm tracking-wider font-semibold text-foreground">
									{t('intro.university')}
								</div>
								<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">{t('intro.degree')}</div>
							</div>

							<div className="flex items-center gap-2">
								<div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
								<span className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">{t('intro.location')}</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
);

AboutSection.displayName = 'AboutSection';

export default AboutSection;
