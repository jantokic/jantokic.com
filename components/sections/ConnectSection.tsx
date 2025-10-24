'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import BrandIcon from '@/components/BrandIcon';
import { ForwardedRef, forwardRef } from 'react';

const ConnectSection = forwardRef<HTMLElement, {}>((props, ref: ForwardedRef<HTMLElement>) => {
	const t = useTranslations();

	return (
		<section
			id="connect"
			ref={ref}
			className="py-32 sm:py-40 opacity-0"
		>
			<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
				<h2 className="font-mono uppercase text-2xl sm:text-3xl tracking-wider font-semibold mb-8 text-foreground">
					{t('connect.heading')}
				</h2>

				<p className="font-mono uppercase text-xs sm:text-sm tracking-wider font-semibold text-muted-foreground leading-relaxed mb-12 max-w-2xl">
					{t('connect.description')}
				</p>

				<div className="space-y-8">
					{/* Contact Options */}
					<div className="flex flex-wrap gap-4">
						<a
							href={`mailto:${t('connect.email')}`}
							className="group inline-flex items-center gap-2 font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-foreground hover:text-foreground/80 transition-colors"
						>
							{t('connect.email')}
							<ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
						</a>
						<span className="text-muted-foreground">•</span>
						<Link
							href="/contact"
							className="group inline-flex items-center gap-2 font-mono uppercase text-sm sm:text-base tracking-wider font-semibold text-foreground hover:text-foreground/80 transition-colors"
						>
							Contact Form
							<ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
						</Link>
					</div>

					{/* Social Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
						<a
							href="https://github.com/jantokic"
							target="_blank"
							rel="noopener noreferrer"
							className="border border-border/50 rounded-lg p-4 hover:border-border transition-colors group"
						>
							<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2 flex items-center gap-2">
								<BrandIcon name="siGithub" size={14} className="text-muted-foreground" />
							</div>
							<div className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground flex items-center gap-1">
								@jantokic
								<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
						</a>

						<a
							href="https://linkedin.com/in/jan-tokic"
							target="_blank"
							rel="noopener noreferrer"
							className="border border-border/50 rounded-lg p-4 hover:border-border transition-colors group"
						>
							<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2 flex items-center gap-2">
								<Linkedin className="w-3.5 h-3.5" />
							</div>
							<div className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground flex items-center gap-1">
								Jan Tokic
								<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
						</a>

						<a
							href="https://x.com/tokicjan"
							target="_blank"
							rel="noopener noreferrer"
							className="border border-border/50 rounded-lg p-4 hover:border-border transition-colors group"
						>
							<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2 flex items-center gap-2">
								<BrandIcon name="siX" size={14} className="text-muted-foreground" />
							</div>
							<div className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground flex items-center gap-1">
								@tokicjan
								<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
});

ConnectSection.displayName = 'ConnectSection';

export default ConnectSection;
