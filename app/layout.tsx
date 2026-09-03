import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
	title: 'Jan Tokic - AI & Software Engineer',
	description:
		'AI and full-stack product engineer in Munich. Agentic pipelines, RAG and LLM infrastructure from zero to production, plus two years scaling open-source commerce to 10M+ orders a month. Open to full-time roles, available immediately.',
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning>
			<body className={`${GeistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
					{children}
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
