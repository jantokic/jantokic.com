'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowUpRight, Linkedin, Sun, Moon } from 'lucide-react';
import BrandIcon from '@/components/BrandIcon';
import { ForwardedRef, forwardRef, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const ConnectSection = forwardRef<HTMLElement, {}>((props, ref: ForwardedRef<HTMLElement>) => {
	const t = useTranslations();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section
			id="connect"
			ref={ref}
			className="min-h-screen py-16 sm:py-20 opacity-0 flex flex-col"
		>
			{/* Main content - centered */}
			<div className="flex-1 flex items-center">
				<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
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
								{t('connect.contactForm')}
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
			</div>

			{/* Footer - at bottom */}
			<footer className="py-8 px-6 sm:px-8 lg:px-16 border-t border-border/30">
				<div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-4">
					<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">
						{t('footer.copyright', { year: new Date().getFullYear() })}
					</p>

					<div className="flex items-center gap-4">
						{mounted && <LanguageSwitcher />}

						{mounted && (
							<button
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
								className="p-2 rounded-lg hover:bg-muted transition-colors"
								aria-label={t('footer.toggleTheme')}
							>
								{theme === 'dark' ? (
									<Sun className="w-5 h-5 text-foreground" />
								) : (
									<Moon className="w-5 h-5 text-foreground" />
								)}
							</button>
						)}
					</div>
				</div>
			</footer>
		</section>
	);
});

ConnectSection.displayName = 'ConnectSection';

export default ConnectSection;
