import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Geist_Mono, Instrument_Serif } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import '../globals.css';

const TITLE = 'Jan Tokic - AI & Software Engineer';
const DESCRIPTION =
	'AI engineer in Munich. I build AI products end to end, and the infrastructure under them. Most recently the AI side of an investing app at starc., before that two years at Vendure. Open to full-time AI engineering roles.';

export const metadata: Metadata = {
	metadataBase: new URL('https://www.jantokic.com'),
	title: TITLE,
	description: DESCRIPTION,
	openGraph: {
		type: 'website',
		siteName: 'Jan Tokic',
		title: TITLE,
		description: DESCRIPTION,
	},
	twitter: {
		card: 'summary_large_image',
		title: TITLE,
		description: DESCRIPTION,
	},
	icons: {
		icon: '/favicon.ico',
	},
};

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
	variable: '--font-instrument',
	subsets: ['latin'],
	weight: '400',
	style: ['italic', 'normal'],
});

import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import MaintenanceGate from '@/components/MaintenanceGate';
import { routing } from '@/routing';

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	// Lets next-intl read the locale without request headers, so pages prerender at build time
	setRequestLocale(locale);

	// Providing all messages to the client
	const messages = await getMessages({ locale });

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${GeistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<NextIntlClientProvider messages={messages} locale={locale}>
						<MaintenanceGate>{children}</MaintenanceGate>
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
