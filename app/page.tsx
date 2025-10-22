import { redirect } from 'next/navigation';

export default function RootPage() {
	// The middleware should handle this, but just in case
	redirect('/en');
}
