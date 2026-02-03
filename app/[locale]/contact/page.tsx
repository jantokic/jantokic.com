'use client';

import { Mail, MapPin, Send, Linkedin, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import BrandIcon from '@/components/BrandIcon';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function ContactPage() {
	const t = useTranslations();
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// For now, just open mailto - you can integrate with a backend later
		const mailtoLink = `mailto:${t('connect.email')}?subject=${encodeURIComponent(t('contact.mailtoSubject', { name: formState.name }))}&body=${encodeURIComponent(formState.message)}`;
		window.location.href = mailtoLink;
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
							<p className="font-mono text-sm text-muted-foreground mb-8 leading-relaxed opacity-70">
								{t('contact.description')}
							</p>

							{/* Contact Details */}
							<div className="space-y-6 mb-12">
								<div>
									<h3 className="font-mono uppercase text-xs font-semibold text-foreground mb-3 tracking-wider">
										{t('contact.email')}
									</h3>
									<a
										href={`mailto:${t('connect.email')}`}
										className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
									>
										<Mail className="w-4 h-4" />
										{t('connect.email')}
									</a>
								</div>

								<div>
									<h3 className="font-mono uppercase text-xs font-semibold text-foreground mb-3 tracking-wider">
										{t('contact.location')}
									</h3>
									<p className="font-mono text-sm text-muted-foreground flex items-center gap-2 opacity-80">
										<MapPin className="w-4 h-4" />
										{t('contact.locationValue')}
									</p>
								</div>

								<div>
									<h3 className="font-mono uppercase text-xs font-semibold text-foreground mb-3 tracking-wider">
										{t('contact.social')}
									</h3>
									<div className="flex flex-wrap gap-4">
										<a
											href="https://github.com/jantokic"
											target="_blank"
											rel="noopener noreferrer"
											className="font-mono text-sm text-muted-foreground hover:text-foreground active:scale-[0.95] transition-all flex items-center gap-2"
										>
											<BrandIcon name="siGithub" size={16} />
										</a>
										<a
											href="https://linkedin.com/in/jan-tokic"
											target="_blank"
											rel="noopener noreferrer"
											className="font-mono text-sm text-muted-foreground hover:text-foreground active:scale-[0.95] transition-all flex items-center gap-2"
										>
											<Linkedin className="w-4 h-4" />
										</a>
										<a
											href="https://x.com/tokicjan"
											target="_blank"
											rel="noopener noreferrer"
											className="font-mono text-sm text-muted-foreground hover:text-foreground active:scale-[0.95] transition-all flex items-center gap-2"
										>
											<BrandIcon name="siX" size={16} />
										</a>
									</div>
								</div>
							</div>

							{/* Services */}
							<div>
								<h3 className="font-mono uppercase text-xs font-semibold text-foreground mb-4 tracking-wider">
									{t('contact.servicesHeading')}
								</h3>
								<ul className="space-y-2 font-mono text-xs text-muted-foreground opacity-80">
									{(t.raw('contact.services') as string[]).map((service, index) => (
										<li key={index}>• {service}</li>
									))}
								</ul>
							</div>
						</div>

						{/* Right Column - Contact Form */}
						<div className="lg:col-span-3">
							<div className="bg-muted p-8 rounded-2xl border border-border">
								<h2 className="font-mono uppercase text-sm font-semibold text-foreground mb-6 tracking-wider">
									{t('contact.formHeading')}
								</h2>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label
											htmlFor="name"
											className="block font-mono uppercase text-xs font-semibold text-muted-foreground mb-2 tracking-wider"
										>
											{t('contact.nameLabel')}
										</label>
										<input
											type="text"
											id="name"
											required
											className="w-full px-4 py-3 font-mono text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 focus:shadow-[0_0_0_3px_hsl(var(--foreground)/0.1)] transition-shadow text-foreground"
											value={formState.name}
											onChange={(e) =>
												setFormState({ ...formState, name: e.target.value })
											}
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block font-mono uppercase text-xs font-semibold text-muted-foreground mb-2 tracking-wider"
										>
											{t('contact.emailLabel')}
										</label>
										<input
											type="email"
											id="email"
											required
											className="w-full px-4 py-3 font-mono text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 focus:shadow-[0_0_0_3px_hsl(var(--foreground)/0.1)] transition-shadow text-foreground"
											value={formState.email}
											onChange={(e) =>
												setFormState({ ...formState, email: e.target.value })
											}
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block font-mono uppercase text-xs font-semibold text-muted-foreground mb-2 tracking-wider"
										>
											{t('contact.messageLabel')}
										</label>
										<textarea
											id="message"
											required
											rows={6}
											className="w-full px-4 py-3 font-mono text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 focus:shadow-[0_0_0_3px_hsl(var(--foreground)/0.1)] transition-shadow resize-none text-foreground placeholder:text-muted-foreground"
											value={formState.message}
											onChange={(e) =>
												setFormState({ ...formState, message: e.target.value })
											}
											placeholder={t('contact.messagePlaceholder')}
										/>
									</div>

									<button
										type="submit"
										className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 active:scale-[0.98] transition-all"
									>
										<Send className="w-4 h-4" />
										{t('contact.sendButton')}
									</button>

									<p className="font-mono text-xs text-muted-foreground text-center opacity-70">
										{t('contact.responseTime')}
									</p>
								</form>
							</div>

							{/* Quick Stats */}
							<div className="mt-8 grid grid-cols-2 gap-4">
								<div className="bg-background p-4 rounded-xl border border-border text-center">
									<div className="font-mono text-2xl font-bold text-foreground">{t('contact.stats.responseTime')}</div>
									<div className="font-mono text-xs text-muted-foreground opacity-70 mt-1">
										{t('contact.stats.responseTimeLabel')}
									</div>
								</div>
								<div className="bg-background p-4 rounded-xl border border-border text-center">
									<div className="font-mono text-2xl font-bold text-foreground">{t('contact.stats.projects')}</div>
									<div className="font-mono text-xs text-muted-foreground opacity-70 mt-1">
										{t('contact.stats.projectsLabel')}
									</div>
								</div>
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
						{/* Language Switcher */}
						{mounted && <LanguageSwitcher />}

						{/* Theme Toggle Button */}
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
		</main>
	);
}
