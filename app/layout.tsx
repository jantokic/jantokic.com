import { Geist_Mono, Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next';
import "./globals.css"

export const metadata: Metadata = {
	title: 'Jan Tokic - Software Engineer',
	description: 'Software Engineer from Austria, based in Munich. Building fast, reliable systems from trading automation to large-scale web platforms.',
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
			<body
				className={`${GeistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
			>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
					{children}
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
