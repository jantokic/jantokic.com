import MaintenanceGate from '@/components/MaintenanceGate';
import { routing } from '@/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

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

	// Providing all messages to the client
	const messages = await getMessages({ locale });

	return (
		<NextIntlClientProvider messages={messages} locale={locale}>
			<MaintenanceGate>{children}</MaintenanceGate>
		</NextIntlClientProvider>
	);
}
