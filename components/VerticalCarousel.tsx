'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Link } from '@/routing';

export interface CarouselItem {
	src: string;
	alt: string;
	title: string;
	category: string;
	href: string;
}

/** Distance between the tops of consecutive cards, in px. Card height is ~277px at 400px width. */
const PITCH = 304;
/** Drift speed in px per second while nothing is hovered. */
const SPEED = 24;
/** How much the column moves per px of page scroll. */
const SCROLL_COUPLING = 0.5;

/**
 * Cards stream upward through a masked column. Each card's scale, opacity, tilt and depth follow its
 * distance from the vertical centre, so the one in the middle is crisp and full size while the rest
 * recede. Everything is transforms on absolutely positioned cards; no canvas, no library.
 */
export default function VerticalCarousel({ items, className = '' }: { items: CarouselItem[]; className?: string }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const offset = useRef(0);
	const paused = useRef(false);
	const lastScrollY = useRef(0);
	const [reducedMotion, setReducedMotion] = useState(false);

	const count = items.length;
	const loop = count * PITCH;

	useEffect(() => {
		const query = window.matchMedia('(prefers-reduced-motion: reduce)');
		setReducedMotion(query.matches);
		if (query.matches || count === 0) return;

		lastScrollY.current = window.scrollY;
		let frame = 0;
		let last = performance.now();

		const layout = () => {
			const container = containerRef.current;
			if (!container) return;
			const height = container.clientHeight;
			const centre = height / 2;

			items.forEach((_, index) => {
				const card = cardRefs.current[index];
				if (!card) return;
				// Cards move up as the offset grows and re-enter from the bottom once they leave the top.
				const raw = (((index * PITCH - offset.current) % loop) + loop) % loop;
				const y = raw - PITCH;
				const cardCentre = y + card.offsetHeight / 2;
				const distance = Math.max(-1.5, Math.min(1.5, (cardCentre - centre) / (height / 2)));
				const magnitude = Math.abs(distance);
				const scale = 1 - 0.16 * magnitude;
				const opacity = Math.max(0, 1 - 0.75 * magnitude);
				const tilt = -distance * 9;
				const depth = -magnitude * 140;

				card.style.transform = `translate3d(-50%, ${y}px, ${depth}px) rotateX(${tilt}deg) scale(${scale})`;
				card.style.opacity = String(opacity);
				card.style.zIndex = String(Math.round(100 - magnitude * 50));
			});
		};

		const onScroll = () => {
			const scrollY = window.scrollY;
			offset.current += (scrollY - lastScrollY.current) * SCROLL_COUPLING;
			lastScrollY.current = scrollY;
		};

		const tick = (now: number) => {
			const dt = Math.min(0.05, (now - last) / 1000);
			last = now;
			// Pause while the pointer rests on the column so a card can be read and clicked.
			paused.current = containerRef.current?.matches(':hover') ?? false;
			if (!paused.current) offset.current += SPEED * dt;
			layout();
			frame = requestAnimationFrame(tick);
		};

		layout();
		frame = requestAnimationFrame(tick);
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', onScroll);
		};
	}, [items, loop, count]);

	if (reducedMotion) {
		return (
			<div className={`flex flex-col gap-6 justify-center h-full px-8 ${className}`}>
				{items.slice(0, 3).map((item) => (
					<Card key={item.href} item={item} focusable />
				))}
			</div>
		);
	}

	// Decorative: the same projects are listed accessibly in the Featured Projects section, and the
	// faded cards would otherwise register as low-contrast text.
	return (
		<div
			ref={containerRef}
			aria-hidden="true"
			className={`relative h-full overflow-hidden [perspective:1400px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)] ${className}`}
		>
			{items.map((item, index) => (
				<div
					key={item.href}
					ref={(el) => {
						cardRefs.current[index] = el;
					}}
					className="absolute left-1/2 top-0 w-[min(420px,82%)] will-change-transform"
					style={{ transform: `translate3d(-50%, ${index * PITCH - PITCH}px, 0)` }}
				>
					<Card item={item} />
				</div>
			))}
		</div>
	);
}

function Card({ item, focusable = false }: { item: CarouselItem; focusable?: boolean }) {
	return (
		<Link
			href={item.href}
			tabIndex={focusable ? undefined : -1}
			className="group block rounded-2xl overflow-hidden border border-border/60 bg-card shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)] hover:border-border transition-colors"
		>
			<div className="relative aspect-video w-full bg-muted">
				<Image src={item.src} alt={item.alt} fill sizes="420px" className="object-cover" />
			</div>
			<div className="flex items-baseline justify-between gap-4 px-4 py-3">
				<span className="font-mono uppercase text-[11px] tracking-wider font-semibold text-foreground truncate">
					{item.title}
				</span>
				<span className="font-mono uppercase text-[10px] tracking-wider text-muted-foreground shrink-0">
					{item.category}
				</span>
			</div>
		</Link>
	);
}
