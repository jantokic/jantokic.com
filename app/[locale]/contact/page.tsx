'use client';

import { Mail, Github, Linkedin, MapPin, Send, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// For now, just open mailto - you can integrate with a backend later
		const mailtoLink = `mailto:jan@jantokic.com?subject=Project Inquiry from ${formState.name}&body=${formState.message}`;
		window.location.href = mailtoLink;
	};

	return (
		<main className="min-h-screen bg-background">
			{/* Header */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<Link
						href="/"
						className="font-mono uppercase text-xs font-semibold text-foreground hover:text-muted-foreground transition-colors tracking-wider"
					>
						← Back to Portfolio
					</Link>
				</div>
			</nav>

			{/* Contact Section */}
			<section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
						{/* Left Column - Contact Info */}
						<div className="lg:col-span-2">
							<h1 className="font-mono uppercase text-2xl font-semibold text-foreground mb-4 tracking-wider">
								Let's Work Together
							</h1>
							<p className="font-mono text-sm text-muted-foreground mb-8 leading-relaxed opacity-70">
								I'm available for freelance projects and consulting. Whether you need high-performance systems, blockchain integration, or scalable infrastructure—let's build something exceptional.
							</p>

							{/* Contact Details */}
							<div className="space-y-6 mb-12">
								<div>
									<h3 className="font-mono uppercase text-xs font-semibold text-foreground mb-3 tracking-wider">
										Email
									</h3>
									<a
										href="mailto:jan@jantokic.com"
										className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
									>
										<Mail className="w-4 h-4" />
										jan@jantokic.com
									</a>
								</div>

								<div>
									<h3 className="font-mono uppercase text-xs font-semibold text-foreground mb-3 tracking-wider">
										Location
									</h3>
									<p className="font-mono text-sm text-muted-foreground flex items-center gap-2 opacity-80">
										<MapPin className="w-4 h-4" />
										Munich, Germany
									</p>
								</div>

								<div>
									<h3 className="font-mono uppercase text-xs font-semibold text-foreground mb-3 tracking-wider">
										Social
									</h3>
									<div className="flex flex-wrap gap-4">
										<a
											href="https://github.com/jantokic"
											target="_blank"
											rel="noopener noreferrer"
											className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
										>
											<Github className="w-4 h-4" />
											GitHub
										</a>
										<a
											href="https://linkedin.com/in/jan-tokic"
											target="_blank"
											rel="noopener noreferrer"
											className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
										>
											<Linkedin className="w-4 h-4" />
											LinkedIn
										</a>
										<a
											href="https://x.com/tokicjan"
											target="_blank"
											rel="noopener noreferrer"
											className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
										>
											<Twitter className="w-4 h-4" />
											Twitter
										</a>
									</div>
								</div>
							</div>

							{/* Services */}
							<div>
								<h3 className="font-mono uppercase text-xs font-semibold text-foreground mb-4 tracking-wider">
									Services I Offer
								</h3>
								<ul className="space-y-2 font-mono text-xs text-muted-foreground opacity-80">
									<li>• High-Performance Backend Systems</li>
									<li>• Blockchain & Trading Platform Development</li>
									<li>• E-Commerce & Headless Commerce Solutions</li>
									<li>• DevOps & Infrastructure Setup</li>
									<li>• Real-Time APIs & WebSocket Integration</li>
									<li>• Security & Secrets Management</li>
									<li>• Team Leadership & Technical Consulting</li>
								</ul>
							</div>
						</div>

						{/* Right Column - Contact Form */}
						<div className="lg:col-span-3">
							<div className="bg-muted p-8 rounded-2xl border border-border">
								<h2 className="font-mono uppercase text-sm font-semibold text-foreground mb-6 tracking-wider">
									Send Me a Message
								</h2>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label
											htmlFor="name"
											className="block font-mono uppercase text-xs font-semibold text-muted-foreground mb-2 tracking-wider"
										>
											Your Name
										</label>
										<input
											type="text"
											id="name"
											required
											className="w-full px-4 py-3 font-mono text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent text-foreground"
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
											Your Email
										</label>
										<input
											type="email"
											id="email"
											required
											className="w-full px-4 py-3 font-mono text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent text-foreground"
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
											Project Details
										</label>
										<textarea
											id="message"
											required
											rows={6}
											className="w-full px-4 py-3 font-mono text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent resize-none text-foreground placeholder:text-muted-foreground"
											value={formState.message}
											onChange={(e) =>
												setFormState({ ...formState, message: e.target.value })
											}
											placeholder="Tell me about your project, timeline, and budget..."
										/>
									</div>

									<button
										type="submit"
										className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity"
									>
										<Send className="w-4 h-4" />
										Send Message
									</button>

									<p className="font-mono text-xs text-muted-foreground text-center opacity-70">
										I typically respond within 24 hours
									</p>
								</form>
							</div>

							{/* Quick Stats */}
							<div className="mt-8 grid grid-cols-3 gap-4">
								<div className="bg-background p-4 rounded-xl border border-border text-center">
									<div className="font-mono text-2xl font-bold text-foreground">24h</div>
									<div className="font-mono text-xs text-muted-foreground opacity-70 mt-1">
										Response Time
									</div>
								</div>
								<div className="bg-background p-4 rounded-xl border border-border text-center">
									<div className="font-mono text-2xl font-bold text-foreground">7+</div>
									<div className="font-mono text-xs text-muted-foreground opacity-70 mt-1">
										Projects Delivered
									</div>
								</div>
								<div className="bg-background p-4 rounded-xl border border-border text-center">
									<div className="font-mono text-2xl font-bold text-foreground">99.5%</div>
									<div className="font-mono text-xs text-muted-foreground opacity-70 mt-1">
										Uptime Achieved
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 px-4 sm:px-6 lg:px-8 bg-muted border-t border-border">
				<div className="max-w-7xl mx-auto text-center font-mono text-muted-foreground text-xs opacity-60">
					<p>© {new Date().getFullYear()} Jan Tokic. Built with Next.js & Three.js</p>
				</div>
			</footer>
		</main>
	);
}
