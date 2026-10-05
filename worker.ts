// Runs only for /cv_* (see run_worker_first in wrangler.jsonc); every other path is
// served straight from static assets. Counts CV downloads in Workers Analytics Engine.

interface Env {
	ASSETS: { fetch(request: Request): Promise<Response> };
	CV_DOWNLOADS: { writeDataPoint(point: { blobs?: string[]; doubles?: number[]; indexes?: string[] }): void };
}

type CfProperties = { country?: string; city?: string };

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const response = await env.ASSETS.fetch(request);
		const { pathname } = new URL(request.url);
		const range = request.headers.get('range');
		// PDF viewers fetch in byte ranges; count one open, not every chunk.
		const firstChunk = !range || range.startsWith('bytes=0-');

		if (request.method === 'GET' && response.ok && pathname.endsWith('.pdf') && firstChunk) {
			const cf = ((request as Request & { cf?: CfProperties }).cf ?? {}) as CfProperties;
			const referer = request.headers.get('referer') ?? '';
			const userAgent = request.headers.get('user-agent') ?? '';
			env.CV_DOWNLOADS.writeDataPoint({
				indexes: [pathname],
				blobs: [pathname, cf.country ?? '', cf.city ?? '', referer, userAgent],
				doubles: [1],
			});
			console.log({ event: 'cv_download', file: pathname, country: cf.country, city: cf.city, referer });
		}

		return response;
	},
};
