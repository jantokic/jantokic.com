export interface SocialLink {
	platform: string;
	url: string;
	handle: string;
	icon: 'siGithub' | 'siX' | 'linkedin';
}

export const socialLinks: SocialLink[] = [
	{
		platform: 'GitHub',
		url: 'https://github.com/jantokic',
		handle: '@jantokic',
		icon: 'siGithub',
	},
	{
		platform: 'LinkedIn',
		url: 'https://linkedin.com/in/jan-tokic',
		handle: 'Jan Tokic',
		icon: 'linkedin',
	},
	{
		platform: 'X',
		url: 'https://x.com/tokicjan',
		handle: '@tokicjan',
		icon: 'siX',
	},
];
