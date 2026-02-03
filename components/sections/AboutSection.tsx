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
				className="min-h-screen py-16 sm:py-20 opacity-0 flex items-center"
			>
				<div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
					<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
						{/* Main Content */}
						<div className="lg:col-span-3 space-y-4">
							<h1 className="font-mono uppercase text-3xl sm:text-4xl lg:text-5xl tracking-wider font-semibold text-foreground">
								{t('intro.name')}
							</h1>
							<div className="space-y-3">
								<p className="font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-muted-foreground">
									{t('intro.title')}
								</p>
								<p className="font-mono uppercase text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-2xl tracking-wider font-semibold">
									{t('intro.bio')}
								</p>
							</div>

							{/* Capabilities */}
							<div className="space-y-3 lg:pt-3">
								<h3 className="font-mono uppercase text-base sm:text-lg tracking-wider font-semibold text-foreground">
									{t('intro.capabilitiesHeading')}
								</h3>
								<ul className="space-y-2.5">
									{(t.raw('intro.capabilities') as string[]).map((capability: string, index: number) => (
										<li
											key={index}
											className={`font-mono uppercase text-xs sm:text-sm tracking-wider font-semibold text-muted-foreground flex items-start gap-2.5 opacity-0 animate-fade-in-up delay-${(index + 1) * 50}`}
											style={{ animationDelay: `${(index + 1) * 75}ms`, animationFillMode: 'forwards' }}
										>
											<span className="text-foreground mt-0.5">→</span>
											<span>{capability}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Skills Pills */}
							<div className="flex flex-wrap gap-2 lg:pt-2">
								{skills.slice(0, 5).map((skill) => (
									<span
										key={skill}
										className="px-3 py-1.5 font-mono uppercase text-xs tracking-wider font-semibold border border-border/50 rounded-full text-muted-foreground hover:border-border hover:text-foreground transition-colors"
									>
										{skill}
									</span>
								))}
								<div className="basis-full h-0"></div>
								{skills.slice(5).map((skill) => (
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
						<div className="lg:col-span-2 space-y-5">
							{/* Profile Photo */}
							<div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-border/50">
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
								<div className="space-y-2">
									{(t.raw('intro.currentRoles') as { company: string; role: string }[]).map((item, index) => (
										<div key={index}>
											<div className="font-mono uppercase text-sm tracking-wider font-semibold text-foreground">
												{item.company}
											</div>
											<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">
												{item.role}
											</div>
										</div>
									))}
								</div>
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
