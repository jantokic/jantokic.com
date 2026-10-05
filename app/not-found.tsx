'use client';

import NextError from 'next/error';

// Requests outside any locale (no root <html>, see app/layout.tsx) land here.
export default function NotFound() {
	return (
		<html lang="en">
			<body>
				<NextError statusCode={404} />
			</body>
		</html>
	);
}
