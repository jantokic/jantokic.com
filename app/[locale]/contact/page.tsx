'use client';

import { ArrowUpRight, Check, Copy, Linkedin, Mail, MapPin, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import BrandIcon from '@/components/BrandIcon';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { socialLinks } from '@/content/social';
import { Link } from '@/routing';

export default function ContactPage() {
	const t = useTranslations();
	const [mounted, setMounted] = useState(false);
	const [copied, setCopied] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
	const email = t('connect.email');
	const linkedin = socialLinks.find((link) => link.platform === 'LinkedIn');

	useEffect(() => {
		setMounted(true);
	}, []);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			// Clipboard unavailable (insecure context, permissions): the mailto link still works.
		}
	};

	return (
		<main className="min-h-screen bg-background flex flex-col">
			{/* Header */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<Link
						href="/"
						className="font-mono uppercase text-xs font-semibold text-foreground hover:text-muted-foreground transition-colors tracking-wider"
					>
						{t('contact.backToPortfolio')}
					</Link>
				</div>
			</nav>

			{/* Contact Section */}
			<section className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
						{/* Left Column - Contact Info */}
						<div className="lg:col-span-2">
							<h1 className="font-mono uppercase text-2xl font-semibold text-foreground mb-4 tracking-wider">
								{t('contact.heading')}
							</h1>
							<p className="text-[15px] text-muted-foreground mb-8 leading-relaxed">{t('contact.description')}</p>

							{/* Contact Details */}
							<div className="space-y-6 mb-12">
								<div>
									<h2 className="font-mono uppercase text-xs font-semibold text-foreground mb-3 tracking-wider">
										{t('contact.email')}
									</h2>
									<a
										href={`mailto:${email}`}
										className="text-[15px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
									>
										<Mail className="w-4 h-4" />
										{email}
									</a>
								</div>

								<div>
									<h2 className="font-mono uppercase text-xs font-semibold text-foreground mb-3 tracking-wider">
										{t('contact.location')}
									</h2>
									<p className="text-[15px] text-muted-foreground flex items-center gap-2">
										<MapPin className="w-4 h-4" />
										{t('contact.locationValue')}
									</p>
								</div>

								<div>
									<h2 className="font-mono uppercase text-xs font-semibold text-foreground mb-3 tracking-wider">
										{t('contact.social')}
									</h2>
									<div className="flex flex-wrap gap-4">
										{socialLinks.map((link) => (
											<a
												key={link.platform}
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={link.platform}
												className="text-muted-foreground hover:text-foreground active:scale-[0.95] transition-all flex items-center gap-2"
											>
												{link.icon === 'linkedin' ? (
													<Linkedin className="w-4 h-4" />
												) : (
													<BrandIcon name={link.icon} size={16} />
												)}
											</a>
										))}
									</div>
								</div>
							</div>

							{/* What I'm looking for */}
							<div>
								<h2 className="font-mono uppercase text-xs font-semibold text-foreground mb-4 tracking-wider">
									{t('contact.servicesHeading')}
								</h2>
								<ul className="space-y-2 text-[15px] text-muted-foreground">
									{(t.raw('contact.services') as string[]).map((service) => (
										<li key={service}>• {service}</li>
									))}
								</ul>
							</div>
						</div>

						{/* Right Column - Direct email */}
						<div className="lg:col-span-3">
							<div className="bg-muted p-8 sm:p-10 rounded-2xl border border-border">
								<h2 className="font-mono uppercase text-sm font-semibold text-foreground mb-3 tracking-wider">
									{t('contact.emailHeading')}
								</h2>
								<p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-prose">
									{t('contact.emailIntro')}
								</p>

								<a
									href={`mailto:${email}`}
									className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground break-all hover:text-muted-foreground transition-colors"
								>
									{email}
								</a>

								<div className="flex flex-wrap gap-3 mt-8">
									<a
										href={`mailto:${email}`}
										className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 active:scale-[0.98] transition-all"
									>
										<Mail className="w-4 h-4" />
										{t('contact.emailCta')}
									</a>
									<button
										type="button"
										onClick={copyEmail}
										className="inline-flex items-center gap-2 px-5 py-3 border border-border bg-background text-foreground font-mono text-xs font-semibold uppercase tracking-wider rounded-lg hover:border-foreground active:scale-[0.98] transition-all"
									>
										{copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
										{copied ? t('contact.copied') : t('contact.copyEmail')}
									</button>
									{linkedin && (
										<a
											href={linkedin.url}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-5 py-3 border border-border bg-background text-foreground font-mono text-xs font-semibold uppercase tracking-wider rounded-lg hover:border-foreground active:scale-[0.98] transition-all"
										>
											<Linkedin className="w-4 h-4" />
											{t('contact.orLinkedIn')}
											<ArrowUpRight className="w-3.5 h-3.5" />
										</a>
									)}
								</div>

								<p className="text-xs text-muted-foreground mt-8">{t('contact.responseTime')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 px-6 sm:px-8 lg:px-16 border-t border-border/30">
				<div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-4">
					<p className="font-mono uppercase text-xs tracking-wider font-semibold text-muted-foreground">
						{t('footer.copyright', { year: new Date().getFullYear() })}
					</p>

					<div className="flex items-center gap-4">
						{mounted && <LanguageSwitcher />}

						{mounted && (
							<button
								type="button"
								onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
								className="p-2 rounded-lg hover:bg-muted active:scale-[0.95] transition-all"
								aria-label={t('footer.toggleTheme')}
							>
								<span className="block transition-transform duration-300 hover:rotate-12">
									{resolvedTheme === 'dark' ? (
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
		</main>
	);
}
