'use client';

import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { routing, usePathname, useRouter } from '@/routing';

export default function LanguageSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const switchLocale = (newLocale: string) => {
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<div className="flex items-center gap-2">
			<Globe className="w-4 h-4 text-muted-foreground" />
			<div className="flex gap-2">
				{routing.locales.map((loc) => (
					<button
						key={loc}
						type="button"
						onClick={() => switchLocale(loc)}
						className={`font-mono uppercase text-xs tracking-wider font-semibold transition-colors ${
							locale === loc ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
						}`}
					>
						{loc.toUpperCase()}
					</button>
				))}
			</div>
		</div>
	);
}
