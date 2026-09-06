import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Geist_Mono, Instrument_Serif } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const TITLE = 'Jan Tokic - AI & Software Engineer';
const DESCRIPTION =
	'AI engineer in Munich. I build AI products end to end, and the infrastructure under them. Most recently the AI side of an investing app at starc., before that two years at Vendure. Open to full-time roles from October 2026.';

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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${GeistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
