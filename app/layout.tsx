// <html> lives in app/[locale]/layout.tsx so the locale comes from the route
// segment instead of request headers, which keeps every page statically rendered.
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return children;
}
