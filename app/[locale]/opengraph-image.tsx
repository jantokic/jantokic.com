import { ImageResponse } from 'next/og';

export const alt = 'Jan Tokic, AI Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				padding: '72px 80px',
				background: '#ffffff',
				color: '#0a0a0a',
				fontFamily: 'Helvetica, Arial, sans-serif',
			}}
		>
			<div style={{ display: 'flex', fontSize: 22, letterSpacing: 4, color: '#737373', textTransform: 'uppercase' }}>
				AI Engineer · Munich
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
				<div style={{ display: 'flex', fontSize: 104, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
					Jan Tokic
				</div>
				<div style={{ display: 'flex', fontSize: 38, lineHeight: 1.3, color: '#262626', maxWidth: 980 }}>
					I build AI products end to end, and the infrastructure under them.
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#737373' }}>
				<span>jantokic.com</span>
				<span>TypeScript · Python · Go</span>
			</div>
		</div>,
		size,
	);
}
