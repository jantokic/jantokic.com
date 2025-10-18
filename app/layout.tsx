import type { Metadata } from 'next';
import { Geist_Mono, Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import "./globals.css"

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

export const metadata: Metadata = {
	title: {
		default: 'Jan Tokic - Software Engineer | Munich, Germany',
		template: '%s | Jan Tokic'
	},
	description: 'Software Engineer based in Munich, Germany. Building high-performance systems, blockchain solutions, and scalable infrastructure. Co-founded Mira Trading ($230K profit) and Copile (2100+ users). Currently at Elevantiq handling €130M revenue.',
	keywords: ['Jan Tokic', 'Software Engineer', 'Munich', 'Germany', 'Blockchain', 'Solana', 'Trading Bot', 'E-Commerce', 'Go', 'TypeScript', 'Python', 'Docker', 'Kubernetes', 'Freelance Developer'],
	authors: [{ name: 'Jan Tokic' }],
	creator: 'Jan Tokic',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://jantokic.com',
		title: 'Jan Tokic - Software Engineer',
		description: 'Building high-performance systems, blockchain solutions, and scalable infrastructure in Munich, Germany.',
		siteName: 'Jan Tokic Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Jan Tokic - Software Engineer',
		description: 'Building high-performance systems and blockchain solutions. Co-founded Mira Trading & Copile.',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${GeistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
			>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
