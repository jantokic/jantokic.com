import { siGithub, siX } from 'simple-icons';

const ICONS = { siGithub, siX } as const;

export type BrandIconName = keyof typeof ICONS;

interface BrandIconProps {
	name: BrandIconName;
	className?: string;
	size?: number;
}

export default function BrandIcon({ name, className = '', size = 24 }: BrandIconProps) {
	const icon = ICONS[name];

	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			className={className}
			fill="currentColor"
		>
			<title>{icon.title}</title>
			<path d={icon.path} />
		</svg>
	);
}
