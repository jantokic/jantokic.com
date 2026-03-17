'use client';

import BrandIcon from '@/components/BrandIcon';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { socialLinks } from '@/content/social';
import { Link } from '@/routing';
import { ArrowUpRight, Linkedin, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { type ForwardedRef, forwardRef, useEffect, useState } from 'react';

const ConnectSection = forwardRef<HTMLElement>((_props, ref: ForwardedRef<HTMLElement>) => {
	const t = useTranslations();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section id="connect" ref={ref} className="min-h-screen py-16 sm:py-20 opacity-0 flex flex-col">
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
							{socialLinks.map((link) => (
								<a
									key={link.platform}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="border border-border/50 rounded-lg p-4 hover:border-border active:scale-[0.98] transition-all group"
								>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground mb-2 flex items-center gap-2">
										{link.icon === 'linkedin' ? (
											<Linkedin className="w-3.5 h-3.5" />
										) : (
											<BrandIcon name={link.icon} size={14} className="text-muted-foreground" />
										)}
									</div>
									<div className="font-mono uppercase text-xs tracking-wider font-semibold text-foreground flex items-center gap-1">
										{link.handle}
										<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
								</a>
							))}
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
								className="p-2 rounded-lg hover:bg-muted active:scale-[0.95] transition-all"
								aria-label={t('footer.toggleTheme')}
							>
								<span className="block transition-transform duration-300 hover:rotate-12">
									{theme === 'dark' ? (
										<Sun className="w-5 h-5 text-foreground" />
									) : (
										<Moon className="w-5 h-5 text-foreground" />
									)}
								</span>
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
